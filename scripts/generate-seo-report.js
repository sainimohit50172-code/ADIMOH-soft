import fs from 'fs';
import path from 'path';

const root = process.cwd();
const reportDir = path.join(root, 'reports');
const reportPath = path.join(reportDir, 'seo-report.json');

const filesToCheck = [
  'src/pages/Blog.jsx',
  'src/pages/BlogDetails.jsx',
  'src/pages/Services.jsx',
  'src/pages/ServiceDetails.jsx',
  'src/components/SeoManager.jsx',
  'src/components/StructuredData.jsx',
  'scripts/generate-sitemaps.js',
  'scripts/generate-robots.js',
  'scripts/validate-jsonld.js',
  'scripts/check-images.js',
  'scripts/generate-seo-report.js',
];

const report = {
  generatedAt: new Date().toISOString(),
  filesModified: filesToCheck.filter((filePath) => fs.existsSync(path.join(root, filePath))),
  generatedFiles: ['public/sitemap.xml', 'public/sitemap-images.xml', 'public/robots.txt', 'reports/jsonld-report.json', 'reports/missing-image-alts.json', 'reports/seo-report.json'],
  validationReports: {},
  summary: {
    sitemap: fs.existsSync(path.join(root, 'public/sitemap.xml')),
    robots: fs.existsSync(path.join(root, 'public/robots.txt')),
    jsonldValidation: fs.existsSync(path.join(root, 'reports/jsonld-report.json')),
    imageAltCheck: fs.existsSync(path.join(root, 'reports/missing-image-alts.json')),
  },
};

if (fs.existsSync(path.join(root, 'reports/jsonld-report.json'))) {
  const jsonldReport = JSON.parse(fs.readFileSync(path.join(root, 'reports/jsonld-report.json'), 'utf-8'));
  report.validationReports.jsonld = jsonldReport;
}

if (fs.existsSync(path.join(root, 'reports/missing-image-alts.json'))) {
  const imageAltReport = JSON.parse(fs.readFileSync(path.join(root, 'reports/missing-image-alts.json'), 'utf-8'));
  report.validationReports.imageAlts = imageAltReport;
}

if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`SEO report generated at ${reportPath}`);
