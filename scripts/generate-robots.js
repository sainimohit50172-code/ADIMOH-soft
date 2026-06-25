import fs from 'fs';
import path from 'path';

const PUBLIC = path.resolve(process.cwd(), 'public');
const BASE = 'https://adimoh-soft-ffct.vercel.app';

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

const content = `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`;
writeFile(path.join(PUBLIC, 'robots.txt'), content);
console.log('robots.txt generated');
