const fs = require('fs');

const dirs = ['guides', 'troubleshooting', 'compatibility', 'network', 'risk', 'clients', 'compare', 'recommend', 'pricing', 'vpn', 'brands'];
dirs.forEach(dir => {
  const pSlug = `src/pages/${dir}/[slug].astro`;
  const pMatchup = `src/pages/${dir}/[matchup].astro`;
  const file = fs.existsSync(pSlug) ? pSlug : (fs.existsSync(pMatchup) ? pMatchup : null);
  if (file) {
    const content = fs.readFileSync(file, 'utf8');
    const slugMatches = Array.from(content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
    const matchupMatches = Array.from(content.matchAll(/matchup:\s*['"]([^'"]+)['"]/g)).map(m => m[1]);
    const res = slugMatches.length ? slugMatches : matchupMatches;
    console.log(`${dir} (${res.length}):`, res);
  }
});
