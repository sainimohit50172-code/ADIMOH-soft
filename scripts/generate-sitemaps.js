import fs from 'fs';
import path from 'path';

const PUBLIC = path.resolve(process.cwd(), 'public');
const BASE = 'https://adimoh-soft-ffct.vercel.app';

async function loadData() {
  const blogMod = await import('../src/data/testimonials.js');
  const servicesMod = await import('../src/data/services.js');
  return { blogPosts: blogMod.blogPosts || [], services: servicesMod.services || [] };
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function buildUrl(loc, options = {}) {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${options.changefreq || 'monthly'}</changefreq>\n    <priority>${options.priority ?? 0.7}</priority>\n  </url>\n`;
}

export async function generate() {
  const { blogPosts, services } = await loadData();
  const staticPages = ['/', '/about', '/services', '/portfolio', '/projects', '/pricing', '/blog', '/contact', '/testimonials', '/case-studies'];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  staticPages.forEach((p) => {
    sitemap += buildUrl(`${BASE}${p}`, { changefreq: 'weekly', priority: 0.8 });
  });

  blogPosts.forEach((b) => {
    sitemap += buildUrl(`${BASE}/blog/${b.slug}`, { changefreq: 'weekly', priority: 0.9 });
  });

  services.forEach((s) => {
    sitemap += buildUrl(`${BASE}/services/${s.slug}`, { changefreq: 'monthly', priority: 0.8 });
  });

  sitemap += '</urlset>';
  writeFile(path.join(PUBLIC, 'sitemap.xml'), sitemap);

  // image sitemap
  let images = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  blogPosts.forEach((b) => {
    if (b.image) {
      images += `  <url>\n    <loc>${BASE}/blog/${b.slug}</loc>\n    <image:image>\n      <image:loc>${b.image}</image:loc>\n      <image:caption>${b.title}</image:caption>\n    </image:image>\n  </url>\n`;
    }
  });
  images += '</urlset>';
  writeFile(path.join(PUBLIC, 'sitemap-images.xml'), images);

  console.log('Sitemaps generated: sitemap.xml and sitemap-images.xml');
}

if (process.argv[1].endsWith('generate-sitemaps.js')) {
  generate().catch((e) => { console.error(e); process.exit(1); });
}
