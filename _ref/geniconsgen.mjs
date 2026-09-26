import fs from 'fs';
const map = { star:'StarIcon', houzz28:'HouzzIcon', houzz133:'AwardShape', dot:'DiamondIcon', add:'PlusIcon', subtract:'MinusIcon', 'living-room':'LivingRoomIcon', office:'OfficeIcon', instagram:'InstagramIcon', pinterest:'PinterestIcon' };
const camel = s => s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
let out = `// Generated from the vector icons embedded in the Framer export.\n// Colours use currentColor so the parent controls them.\nimport type { SVGProps } from "react";\n\ntype IconProps = SVGProps<SVGSVGElement>;\n`;
for (const [file, name] of Object.entries(map)) {
  let s = fs.readFileSync(file + '.svg', 'utf8').trim();
  const vb = s.match(/viewBox="([^"]+)"/)[1];
  let inner = s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  inner = inner.replace(/ (id|height|width|display|role)="[^"]*"/g, '');
  inner = inner.replace(/(fill|stroke)="var\([^"]*\)"/g, '$1="currentColor"');
  inner = inner.replace(/ stroke-dasharray=""/g, '');
  inner = inner.replace(/ ([a-z]+-[a-z-]+)=/g, (_, a) => ' ' + camel(a) + '=');
  inner = inner.replace(/<(path|circle|rect|ellipse|line|polyline|polygon)([^>]*?)(?<!\/)>(<\/\1>)?/g, '<$1$2/>');
  out += `\nexport function ${name}(props: IconProps) {\n  return (\n    <svg viewBox="${vb}" aria-hidden="true" focusable="false" {...props}>\n      ${inner}\n    </svg>\n  );\n}\n`;
}
fs.writeFileSync('D:/PLAN2BUILD/remodel/components/icons/index.tsx', out);
console.log(out.length);
