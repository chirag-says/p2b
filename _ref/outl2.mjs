import fs from 'fs'; import * as cheerio from 'cheerio';
const $ = cheerio.load(fs.readFileSync(process.argv[2],'utf8'));
const out=[];
function walk(el,d){
  if(el.type==='text'){const t=$(el).text().trim(); if(t) out.push('  '.repeat(d)+'"'+t.slice(0,80)+'"'); return;}
  if(el.type!=='tag') return;
  const a=el.attribs; const tag=el.name;
  if(tag==='svg'){ out.push('  '.repeat(d)+'<svg>'); return;}
  const cls=(a.class||'').split(/\s+/).filter(c=>c.startsWith('framer-')).join('.');
  let s='  '.repeat(d)+tag+(cls?'.'+cls:'')+(a['data-framer-name']?' ['+a['data-framer-name']+']':'')+(a.href?' href='+a.href:'')+(a.src?' src='+a.src.slice(0,90):'');
  if(a.style && process.argv[3]) s+=' style="'+a.style.slice(0,300)+'"';
  out.push(s);
  for(const c of el.children) walk(c,d+1);
}
$('body').children().each((_,e)=>walk(e,0));
console.log(out.join('\n'));
