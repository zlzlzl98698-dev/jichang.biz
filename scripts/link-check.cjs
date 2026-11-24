const fs = require('fs');
const path = require('path');

console.log('== [QA / Link Check] Verifying Internal & External Links in dist/ ==');

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
console.log(`Scanning ${htmlFiles.length} generated HTML files for link integrity...`);

let brokenInternal = 0;
let missingRel = 0;
let totalLinksChecked = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Strip out <script>...</script> blocks to prevent template strings from triggering false positives
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Extract all <a ... href="..."> tags
  const anchorRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi;
  let match;
  while ((match = anchorRegex.exec(content)) !== null) {
    totalLinksChecked++;
    const beforeAttr = match[1];
    const href = match[2];
    const afterAttr = match[3];
    const fullTag = beforeAttr + ' ' + afterAttr;

    // Ignore placeholder / template strings
    if (href.includes('${') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }

    // 1. Internal Link Check
    if (href.startsWith('/') && !href.startsWith('//')) {
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref !== '' && cleanHref !== '/') {
        // Target file or dir/index.html
        const targetPath = cleanHref.endsWith('/')
          ? path.join(distDir, cleanHref, 'index.html')
          : (cleanHref.includes('.') ? path.join(distDir, cleanHref) : path.join(distDir, cleanHref, 'index.html'));
        
        if (!fs.existsSync(targetPath)) {
          console.warn(`WARNING Broken link in ${path.relative(distDir, file)}: ${href} (Looking for ${targetPath})`);
          brokenInternal++;
        }
      }
    }

    // 2. Affiliate Link rel & target Check (Only for external URLs)
    if (href.startsWith('http') && (href.includes('aff') || href.includes('code='))) {
      if (!fullTag.includes('nofollow') || !fullTag.includes('sponsored') || !fullTag.includes('_blank')) {
        console.warn(`WARNING Missing rel="nofollow sponsored" or target="_blank" in ${path.relative(distDir, file)}: ${href}`);
        missingRel++;
      }
    }
  }
});

console.log(`Checked ${totalLinksChecked} links across all HTML files.`);
if (brokenInternal > 0) {
  console.error(`FAIL: Found ${brokenInternal} broken internal links!`);
  process.exit(1);
}
if (missingRel > 0) {
  console.error(`FAIL: Found ${missingRel} affiliate links missing nofollow sponsored compliance!`);
  process.exit(1);
}

console.log('SUCCESS: All internal & affiliate link integrity checks passed!\n');
