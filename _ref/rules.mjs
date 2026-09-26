import fs from 'fs'; import postcss from 'postcss';
const css = fs.readFileSync(fs.readdirSync('.').find(f=>f.startsWith('style_1')),'utf8');
const root = postcss.parse(css);
const pats = process.argv.slice(2);
root.walkRules(r=>{
  if(!pats.some(p=>r.selector.includes(p))) return;
  let ctx=''; let p=r.parent; while(p && p.type!=='root'){ if(p.type==='atrule') ctx='@'+p.name+' '+p.params+' '+ctx; p=p.parent; }
  const decls=[]; r.each(d=>{ if(d.type==='decl') decls.push(d.prop+':'+d.value); });
  console.log((ctx?'['+ctx.trim()+'] ':'')+r.selector.slice(0,300)+' { '+decls.join('; ')+' }');
});
