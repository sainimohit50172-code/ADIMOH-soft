import { spawn } from 'child_process';
import fs from 'fs';
import net from 'net';
import path from 'path';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

const reportDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const target = process.argv[2] || 'desktop';
const isMobile = target === 'mobile';

function getViteBinary() {
  const viteBin = process.platform === 'win32' ? 'vite.cmd' : 'vite';
  return path.resolve(process.cwd(), 'node_modules', '.bin', viteBin);
}

async function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => {
      resolve(false);
    });
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(start = 4173, end = 4273) {
  for (let port = start; port <= end; port += 1) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error('Unable to find an available preview port');
}

async function waitForPort(host, port, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      await new Promise((resolve, reject) => {
        const socket = net.connect({ host, port }, () => {
          socket.destroy();
          resolve();
        });
        socket.on('error', reject);
      });
      return;
    } catch {
      // keep waiting
    }
  }
  throw new Error(`Port ${port} did not open in time`);
}

function getNpxCommand() {
  return process.platform === 'win32' ? 'npx.cmd' : 'npx';
}

async function startPreview(port) {
  return new Promise((resolve, reject) => {
    const command = `"${getViteBinary()}" preview --host 127.0.0.1 --port ${port} --strictPort`;
    const proc = spawn(command, {
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    const timeout = setTimeout(() => {
      proc.kill();
      reject(new Error('Vite preview server failed to start in time'));
    }, 30000);

    proc.stderr.on('data', (data) => {
      const text = data.toString();
      if (/error/i.test(text)) {
        clearTimeout(timeout);
        reject(new Error(text));
      }
    });

    proc.on('exit', (code) => {
      if (code && code !== 0) {
        clearTimeout(timeout);
        reject(new Error(`Preview process exited with code ${code}`));
      }
    });

    waitForPort('127.0.0.1', port, 30000)
      .then(() => {
        clearTimeout(timeout);
        resolve({ proc, url: `http://127.0.0.1:${port}` });
      })
      .catch((error) => {
        proc.kill();
        reject(error);
      });
  });
}

async function runLighthouse(url) {
  const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
  const options = {
    port: chrome.port,
    output: ['html', 'json'],
    emulatedFormFactor: isMobile ? 'mobile' : 'desktop',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    throttlingMethod: isMobile ? 'simulated' : 'provided',
  };

  const runnerResult = await lighthouse(url, options);
  const htmlPath = path.join(reportDir, `lighthouse-${target}.html`);
  const jsonPath = path.join(reportDir, `lighthouse-${target}.json`);
  fs.writeFileSync(htmlPath, runnerResult.report[0], 'utf8');
  fs.writeFileSync(jsonPath, runnerResult.report[1], 'utf8');
  await chrome.kill();
  return { htmlPath, jsonPath };
}

(async () => {
  let preview;
  try {
    const port = await findAvailablePort();
    preview = await startPreview(port);
    const result = await runLighthouse(preview.url);
    console.log(`Lighthouse ${target} reports generated: ${result.htmlPath}, ${result.jsonPath}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    if (preview?.proc) {
      preview.proc.kill();
    }
  }
})();