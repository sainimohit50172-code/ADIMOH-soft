import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const reportDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

const commands = [
  { name: 'sitemap', cmd: 'node scripts/generate-sitemaps.js' },
  { name: 'robots', cmd: 'node scripts/generate-robots.js' },
  { name: 'jsonld', cmd: 'node scripts/validate-jsonld.js' },
  { name: 'images', cmd: 'node scripts/check-images.js' },
  { name: 'seo-report', cmd: 'node scripts/generate-seo-report.js' },
];

const results = [];
for (const item of commands) {
  const proc = spawnSync(item.cmd, { shell: true, stdio: 'pipe' });
  const stdout = proc.stdout.toString();
  const stderr = proc.stderr.toString();
  results.push({ name: item.name, status: proc.status, stdout, stderr });
  if (proc.status !== 0) {
    console.error(`Step ${item.name} failed:`);
    console.error(stderr || stdout);
    process.exit(1);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  steps: results,
};
fs.writeFileSync(path.join(reportDir, 'seo-report.json'), JSON.stringify(report, null, 2));
console.log('SEO validation completed and report generated: reports/seo-report.json');