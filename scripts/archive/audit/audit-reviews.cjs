const fs = require('fs');
const path = require('path');

// Let's inspect the word counts of all 31 reviews
const reviewSlugs = fs.readdirSync('dist/reviews').filter(f => f !== 'index.html');
console.log('Review count:', reviewSlugs.length);

const reviewStats = [];
reviewSlugs.forEach(slug => {
  const file = `dist/reviews/${slug}/index.html`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    // Extract body text
    const bodyMatch = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
    const body = bodyMatch ? bodyMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    const zh = (body.match(/[\u4e00-\u9fa5]/g) || []).length;
    const en = (body.match(/[a-zA-Z0-9_-]+/g) || []).length;
    reviewStats.push({ slug, total: zh + en, zh, en });
  }
});

reviewStats.sort((a, b) => a.total - b.total);
console.log('Shortest review:', reviewStats[0]);
console.log('Longest review:', reviewStats[reviewStats.length - 1]);
console.log('Average review word count:', Math.round(reviewStats.reduce((s, r) => s + r.total, 0) / reviewStats.length));

// Let's check similarity or template fingerprint
// Check H2 headings across reviews
const h2Map = {};
reviewSlugs.forEach(slug => {
  const content = fs.readFileSync(`dist/reviews/${slug}/index.html`, 'utf8');
  const h2s = [...content.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  h2Map[slug] = h2s;
});

console.log('Sample H2s from guangsu:', h2Map['guangsu']);
console.log('Sample H2s from weifeng:', h2Map['weifeng']);
