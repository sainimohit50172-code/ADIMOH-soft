import { spawn } from 'child_process';

export default function servePreview({ port = 4173, host = '127.0.0.1' } = {}) {
  return new Promise((resolve, reject) => {
    const preview = spawn('npx', ['vite', 'preview', '--host', host, '--port', String(port), '--strictPort'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    });

    const timeout = setTimeout(() => {
      reject(new Error('Preview server did not start in time'));
    }, 15000);

    const handleData = (chunk) => {
      const line = chunk.toString();
      if (line.includes('Local:')) {
        clearTimeout(timeout);
        preview.stdout.off('data', handleData);
        resolve({ preview, output: line });
      }
    };

    preview.stdout.on('data', handleData);
    preview.stderr.on('data', (chunk) => {
      const line = chunk.toString();
      if (line.toLowerCase().includes('error')) {
        clearTimeout(timeout);
        reject(new Error(line));
      }
    });

    preview.on('exit', (code) => {
      if (code && code !== 0) {
        reject(new Error(`Preview server exited with code ${code}`));
      }
    });
  });
}
