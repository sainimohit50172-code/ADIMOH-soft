import fs from 'fs';
import path from 'path';

async function loadData() {
  const blogMod = await import('../src/data/testimonials.js');
  const servicesMod = await import('../src/data/services.js');
  return { blogPosts: blogMod.blogPosts || [], services: servicesMod.services || [] };
}

function checkArticle(b) {
  const errors = [];
  if (!b.title) errors.push('missing title');
  if (!b.slug) errors.push('missing slug');
  if (!b.excerpt) errors.push('missing excerpt');
  if (!b.image) errors.push('missing image');
  return errors;
}

function checkService(s) {
  const errors = [];
  if (!s.title) errors.push('missing title');
  if (!s.slug) errors.push('missing slug');
  if (!s.description) errors.push('missing description');
  if (!s.features || s.features.length === 0) errors.push('missing features');
  return errors;
}

async function validate() {
  const { blogPosts, services } = await loadData();
  const report = { articles: [], services: [] };

  blogPosts.forEach((b) => {
    report.articles.push({ slug: b.slug, title: b.title, errors: checkArticle(b) });
  });

  services.forEach((s) => {
    report.services.push({ slug: s.slug, title: s.title, errors: checkService(s) });
  });

  const outDir = path.resolve(process.cwd(), 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'jsonld-report.json'), JSON.stringify(report, null, 2));
  console.log('JSON-LD validation report written to reports/jsonld-report.json');
}

validate().catch((e) => { console.error(e); process.exit(1); });
