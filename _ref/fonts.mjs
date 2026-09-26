import fs from 'fs'; import postcss from 'postcss';
const css = fs.readFileSync(fs.readdirSync('.').find(f=>f.startsWith('style_0')),'utf8') + fs.readFileSync(fs.readdirSync('.').find(f=>f.startsWith('style_1')),'utf8');
const root = postcss.parse(css);
root.walkAtRules('font-face', r=>{ const o={}; r.walkDecls(d=>o[d.prop]=d.value); if(/Cormorant|Manrope|Switzer|Placeholder/.test(o['font-family']) || (/Inter/.test(o['font-family']) && (o['unicode-range']||'').startsWith('U+0000-00FF'))) console.log(JSON.stringify(o)); });
