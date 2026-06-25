import fs from 'fs';
import path from 'path';

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filelist);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx')) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

const src = path.resolve(process.cwd(), 'src');
const files = walk(src);
const missing = [];
files.forEach((f) => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<img[^>]*>/g;
  const imgs = content.match(regex) || [];
  imgs.forEach((tag) => {
    if (!/\balt=/.test(tag)) {
      missing.push({ file: f, tag: tag.trim() });
    }
  });
});

const out = path.resolve(process.cwd(), 'reports');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'missing-image-alts.json'), JSON.stringify(missing, null, 2));
console.log(`Found ${missing.length} <img> tags without alt attribute. Report: reports/missing-image-alts.json`);
