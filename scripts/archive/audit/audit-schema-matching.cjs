const fs = require('fs');

const file = 'dist/reviews/guangsu/index.html';
const content = fs.readFileSync(file, 'utf8');
const regex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
let m;
const schemas = [];
while ((m = regex.exec(content)) !== null) {
  try {
    schemas.push(JSON.parse(m[1]));
  } catch (e) {
    console.error('JSON parse error:', e.message);
  }
}

console.log('Schemas in reviews/guangsu:');
schemas.forEach(s => {
  console.log(`- @type: ${s['@type']}`);
  if (s['@type'] === 'Review') {
    console.log('  Review Schema payload:', JSON.stringify(s, null, 2));
  }
});
