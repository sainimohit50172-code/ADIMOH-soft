import fs from 'fs';
import path from 'path';

const report = {
  generatedAt: new Date().toISOString(),
  buildSuccess: false,
  errors: [],
  warnings: [],
};

try {
  const buildOutput = fs.readFileSync(path.resolve(process.cwd(), 'build-output.log'), 'utf8');
  const lines = buildOutput.split(/\r?\n/);
  report.errors = lines.filter((line) => /error/i.test(line));
  report.warnings = lines.filter((line) => /warning/i.test(line));
  report.buildSuccess = !report.errors.length;
  fs.mkdirSync(path.resolve(process.cwd(), 'reports'), { recursive: true });
  fs.writeFileSync(path.resolve(process.cwd(), 'reports', 'build-report.json'), JSON.stringify(report, null, 2));
  console.log('Build report generated: reports/build-report.json');
} catch (error) {
  console.error(error);
  process.exit(1);
}
