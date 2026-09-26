import fs from 'fs'; import * as cheerio from 'cheerio';
const $ = cheerio.load(fs.readFileSync('body.html','utf8'));
const out=[];
function walk(el,d){
  if(el.type==='text'){const t=$(el).text().trim(); if(t) out.push('  '.repeat(d)+'"'+t.slice(0,80)+'"'); return;}
  if(el.type!=='tag') return;
  const a=el.attribs; const tag=el.name;
  if(tag==='svg'||tag==='path'){ if(tag==='svg') out.push('  '.repeat(d)+'<svg '+(a.class||'')+'>'); return;}
  const cls=(a.class||'').split(/\s+/).filter(c=>c.startsWith('framer-')||c.startsWith('ssr')||c.startsWith('hidden')).join('.');
  let s='  '.repeat(d)+tag+(cls?'.'+cls:'')+(a['data-framer-name']?' ['+a['data-framer-name']+']':'')+(a.href?' href='+a.href:'')+(a.src?' src='+a.src.slice(0,70):'')+(a['data-framer-appear-id']?' appear='+a['data-framer-appear-id']:'');
  if(a.style && a.style.length<200) s+=' style="'+a.style+'"';
  out.push(s);
  for(const c of el.children) walk(c,d+1);
}
$('body').children().each((_,e)=>walk(e,0));
fs.writeFileSync('outline.txt',out.join('\n'));
console.log(out.length);
