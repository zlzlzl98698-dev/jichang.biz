const fs = require('fs');

const brandSlugs = fs.readdirSync('dist/brands').filter(f => f !== 'index.html');
const brandStats = [];
brandSlugs.forEach(slug => {
  const file = `dist/brands/${slug}/index.html`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const bodyMatch = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
    const body = bodyMatch ? bodyMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    const zh = (body.match(/[\u4e00-\u9fa5]/g) || []).length;
    const en = (body.match(/[a-zA-Z0-9_-]+/g) || []).length;
    brandStats.push({ slug, total: zh + en, zh, en });
  }
});

brandStats.sort((a, b) => a.total - b.total);
console.log('Shortest brand profile:', brandStats[0]);
console.log('Longest brand profile:', brandStats[brandStats.length - 1]);
console.log('Average brand profile word count:', Math.round(brandStats.reduce((s, r) => s + r.total, 0) / brandStats.length));

// Check H2s on brands/guangsu
const guangsuBrandContent = fs.readFileSync('dist/brands/guangsu/index.html', 'utf8');
const h2s = [...guangsuBrandContent.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s on brands/guangsu:', h2s);
