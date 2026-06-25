import { spawn } from 'child_process';
import fs from 'fs';
import net from 'net';
import path from 'path';
import { createRequire } from 'module';
import puppeteer from 'puppeteer';

const require = createRequire(import.meta.url);
const reportDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const startPort = 4173;
const endPort = 4273;

async function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(false);
      }
    });
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(start = startPort, end = endPort) {
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

function getViteBinary() {
  const viteBin = process.platform === 'win32' ? 'vite.cmd' : 'vite';
  return path.resolve(process.cwd(), 'node_modules', '.bin', viteBin);
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

async function runAccessibility(url) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const results = await page.evaluate(async () => axe.run({
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'section508'],
    },
  }));

  const outPath = path.join(reportDir, 'accessibility-report.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  await browser.close();
  return outPath;
}

(async () => {
  let preview;
  try {
    const port = await findAvailablePort();
    preview = await startPreview(port);
    const outPath = await runAccessibility(preview.url);
    console.log(`Accessibility report generated: ${outPath}`);
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