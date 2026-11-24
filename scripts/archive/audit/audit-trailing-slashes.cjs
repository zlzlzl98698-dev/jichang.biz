const fs = require('fs');
const path = require('path');

function getFiles(dir, list = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) getFiles(full, list);
    else if (item.endsWith('.html')) list.push(full);
  }
  return list;
}

const files = getFiles('dist');
let missingSlashCount = 0;
const missingSlashLinks = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const anchorRegex = /<a\s+[^>]*?href=["'](\/[^"']*)["']/gi;
  let m;
  while ((m = anchorRegex.exec(content)) !== null) {
    const href = m[1].split('#')[0].split('?')[0];
    if (href !== '' && href !== '/' && !href.endsWith('/') && !href.includes('.')) {
      missingSlashCount++;
      missingSlashLinks.push({ file: path.relative('dist', f), href });
    }
  }
});

console.log('Total internal links missing trailing slash:', missingSlashCount);
if (missingSlashCount > 0) {
  console.log('Samples:', missingSlashLinks.slice(0, 5));
}
