import fs from 'fs'; import postcss from 'postcss';
const css = fs.readFileSync(fs.readdirSync('.').find(f=>f.startsWith('style_1')),'utf8');
const root = postcss.parse(css); const seen=new Set();
root.walkRules(r=>{
  const m = r.selector.match(/\.framer-(\w+) \.framer-styles-preset-(\w+):not/); if(!m) return;
  let ctx=''; let p=r.parent; while(p && p.type!=='root'){ if(p.type==='atrule') ctx=p.params; p=p.parent; }
  const keep=['--framer-font-family','--framer-font-size','--framer-font-weight','--framer-letter-spacing','--framer-line-height','--framer-text-color','--framer-text-transform','--framer-text-alignment','--framer-paragraph-spacing'];
  const d={}; r.each(x=>{ if(x.type==='decl' && keep.includes(x.prop)) d[x.prop.replace('--framer-','')]=x.value.replace(/"Inter Placeholder", sans-serif|"Cormorant Placeholder", serif/,''); });
  const line=`${m[2]} [${m[1]}] ${ctx||'base'} :: ${JSON.stringify(d)}`; if(!seen.has(line)){seen.add(line); console.log(line);}
});
