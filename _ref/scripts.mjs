import fs from 'fs'; import * as cheerio from 'cheerio';
const $ = cheerio.load(fs.readFileSync('D:/exporter/exports/remodel.framer.wiki/index.html','utf8'));
$('script').each((i,el)=>{ if(!$(el).attr('src')) fs.writeFileSync(`inline_${i}.js`, $(el).html()); });
