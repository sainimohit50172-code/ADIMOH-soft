import fs from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const report = {
  generatedAt: new Date().toISOString(),
  chunks: [],
};

try {
  const manifestPath = path.resolve(process.cwd(), 'dist', 'manifest.json');
  const files = fs.readdirSync(path.resolve(process.cwd(), 'dist', 'assets'));
  report.chunks = files.filter((name) => name.endsWith('.js') || name.endsWith('.css')).map((name) => {
    const size = fs.statSync(path.resolve(process.cwd(), 'dist', 'assets', name)).size;
    return { name, sizeBytes: size };
  });
  fs.writeFileSync(path.join(outDir, 'performance-report.json'), JSON.stringify(report, null, 2));
  console.log(`Performance report generated: ${path.join(outDir, 'performance-report.json')}`);
} catch (error) {
  console.error('Unable to generate performance report:', error);
  process.exit(1);
}
