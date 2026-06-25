import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import axe from 'axe-core';

const REPORT_DIR = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

const url = process.argv[2] || 'http://127.0.0.1:4173';

async function runAccessibility() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.addScriptTag({ path: require.resolve('axe-core') });
  const results = await page.evaluate(async () => {
    return await axe.run({
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'section508'],
      },
    });
  });
  const outPath = path.join(REPORT_DIR, 'accessibility-report.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  await browser.close();
  console.log(`Accessibility report generated: ${outPath}`);
}

runAccessibility().catch((error) => {
  console.error(error);
  process.exit(1);
});