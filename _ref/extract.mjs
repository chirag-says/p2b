import fs from 'fs'; import * as cheerio from 'cheerio'; import prettier from 'prettier';
const html = fs.readFileSync('D:/exporter/exports/remodel.framer.wiki/index.html','utf8');
const $ = cheerio.load(html);
let i=0;
$('style').each((_,el)=>{ const a=Object.keys(el.attribs).join(','); fs.writeFileSync(`style_${i++}_${a.replace(/[^a-z-]/g,'_').slice(0,40)}.css`, $(el).html()); });
$('script').each((_,el)=>{ const s=$(el).attr('src'); console.log('script', s||'(inline '+($(el).html().length)+')', $(el).attr('type')||''); });
$('style').remove(); $('script').remove();
const body = $('body').html();
fs.writeFileSync('body.html', await prettier.format(body,{parser:'html',printWidth:200}).catch(e=>body));
