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
const crossLinks = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/https?:\/\/[a-z0-9.-]*jichangwiki\.biz[^\s"'>]*/gi);
  if (m) {
    crossLinks.push({ file: path.relative('dist', f), matches: m });
  }
});

console.log('Pages referencing jichangwiki.biz:', crossLinks.length);
if (crossLinks.length > 0) {
  console.log('Sample matches:', crossLinks.slice(0, 3));
}
