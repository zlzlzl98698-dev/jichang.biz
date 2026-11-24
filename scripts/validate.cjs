const fs = require('fs');
const path = require('path');

console.log('== [QA / Validate] Checking Brand & Data Integrity ==');

// Check brands data
const brandsFilePath = path.join(__dirname, '../src/data/brands.ts');
if (!fs.existsSync(brandsFilePath)) {
  console.error('FAIL: src/data/brands.ts does not exist!');
  process.exit(1);
}

// Since src/data/brands.ts is TypeScript, let's read and parse or evaluate it safely
const brandsContent = fs.readFileSync(brandsFilePath, 'utf-8');

// Match slugs
const slugMatches = [...brandsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log(`Audited brand entities found: ${slugMatches.length}`);

if (slugMatches.length !== 31) {
  console.error(`FAIL: Expected exactly 31 brand entities, found ${slugMatches.length}`);
  process.exit(1);
}

const uniqueSlugs = new Set(slugMatches);
if (uniqueSlugs.size !== 31) {
  console.error(`FAIL: Duplicate brand slugs found! Unique count: ${uniqueSlugs.size}`);
  process.exit(1);
}

// Check raw sources (if present in local development workspace)
const rawDir = path.join(__dirname, '../sources/raw');
if (fs.existsSync(rawDir)) {
  const rawSources = [
    'source-1-brands.txt',
    'source-2-clients.txt',
    'source-3-guangsu.txt',
    'source-4-charts.txt',
    'source-5-matrix.txt'
  ];
  rawSources.forEach(s => {
    const p = path.join(rawDir, s);
    if (!fs.existsSync(p)) {
      console.error(`FAIL: Raw source file missing: ${s}`);
      process.exit(1);
    }
  });
  console.log('PASS: Raw source files verified in sources/raw/');
} else {
  console.log('NOTICE: sources/raw/ omitted in production/CI build environment; skipping raw check.');
}

// Check data matrix files
['data/keywords.json', 'data/questions.json', 'data/keywords/article-keyword-map.json', 'data/keywords/cluster-map.json'].forEach(f => {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p)) {
    console.error(`FAIL: Matrix file missing: ${f}`);
    process.exit(1);
  }
  const parsed = JSON.parse(fs.readFileSync(p, 'utf-8'));
  const count = Array.isArray(parsed) ? parsed.length : (parsed.clusters ? parsed.clusters.length : Object.keys(parsed).length);
  console.log(`PASS: ${f} valid JSON with ${count} entries.`);
});

['data/keywords/longtail-master.csv', 'data/keywords/content-priority.csv'].forEach(f => {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p)) {
    console.error(`FAIL: CSV file missing: ${f}`);
    process.exit(1);
  }
  const lines = fs.readFileSync(p, 'utf-8').trim().split('\n');
  console.log(`PASS: ${f} valid CSV with ${lines.length - 1} data rows.`);
});

console.log('SUCCESS: All data validation tests passed!\n');
