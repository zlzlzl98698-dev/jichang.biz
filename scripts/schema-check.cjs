const fs = require('fs');
const path = require('path');

console.log('== [QA / Schema Check] Verifying JSON-LD Structured Data in dist/ ==');

const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  console.log('NOTICE: dist/ does not exist yet. Run build first.');
  process.exit(0);
}

function getAllHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      getAllHtmlFiles(full, files);
    } else if (item.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = getAllHtmlFiles(distDir);
let totalSchemasChecked = 0;
let invalidSchemas = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    totalSchemasChecked++;
    const jsonStr = match[1];
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed['@context'] || !parsed['@context'].includes('schema.org')) {
        console.warn(`WARNING in ${path.relative(distDir, file)}: Missing @context schema.org`);
        invalidSchemas++;
      }
    } catch (err) {
      console.error(`ERROR in ${path.relative(distDir, file)}: Invalid JSON-LD syntax!`, err.message);
      invalidSchemas++;
    }
  }
});

console.log(`Audited ${totalSchemasChecked} structured JSON-LD schemas across all HTML files.`);
if (invalidSchemas > 0) {
  console.error(`FAIL: Found ${invalidSchemas} invalid schemas!`);
  process.exit(1);
}

console.log('SUCCESS: All JSON-LD structured schemas are valid!\n');
