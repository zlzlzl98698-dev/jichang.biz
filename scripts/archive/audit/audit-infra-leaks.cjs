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
const pathLeaks = [];
const devUrlLeaks = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (/C:\\Users\\/i.test(content) || /\/Users\/Pro User/i.test(content)) {
    pathLeaks.push(path.relative('dist', f));
  }
  if (/localhost:432/i.test(content) || /127\.0\.0\.1/i.test(content)) {
    devUrlLeaks.push(path.relative('dist', f));
  }
});

console.log('Local filesystem path leaks in dist:', pathLeaks.length);
console.log('Localhost / dev URL leaks in dist:', devUrlLeaks.length);
