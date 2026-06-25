import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

const REPORT_DIR = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

const targets = [
  {
    name: 'desktop',
    flags: {
      emulatedFormFactor: 'desktop',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      throttlingMethod: 'provided',
    },
  },
  {
    name: 'mobile',
    flags: {
      emulatedFormFactor: 'mobile',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      throttlingMethod: 'simulated',
    },
  },
];

const url = process.argv[2] || 'http://127.0.0.1:4173';

async function runReport(target) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
  const options = { port: chrome.port, ...target.flags };
  const runnerResult = await lighthouse(url, options);
  const htmlPath = path.join(REPORT_DIR, `lighthouse-${target.name}.html`);
  const jsonPath = path.join(REPORT_DIR, `lighthouse-${target.name}.json`);
  fs.writeFileSync(htmlPath, runnerResult.report[0], 'utf8');
  fs.writeFileSync(jsonPath, runnerResult.report[1], 'utf8');
  await chrome.kill();
  console.log(`Lighthouse ${target.name} report generated: ${htmlPath}, ${jsonPath}`);
}

async function run() {
  for (const target of targets) {
    await runReport(target);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});