# Plan2Build: homepage

The Plan2Build homepage, built in Next.js (App Router). The visual layer is a reconstruction of a Framer template; all copy, prices and links come from `lib/content.ts`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Structure

```
app/            layout (fonts, metadata), page, global tokens + text presets
components/
  layout/       Header (menu), Footer, SmoothScroll (Lenis)
  home/         one component per homepage section
  ui/           EyeButton + FollowEye, CountUp, Reveal, ScrollLinked, InViewVideo, TornEdge
  icons/        vector icons taken from the export
lib/            content (all copy/media), scroll-target maths, media-query hook
public/         images and videos copied from the export
```

## Notes

- Breakpoints match the export: desktop ≥ 1200px, tablet 810–1199.98px, phone ≤ 809.98px.
- Framer springs are rendered as CSS `linear()` easings (tokens in `app/globals.css`). They were generated with `motion`'s `spring()` using the same parameters.
- Scroll effects (hero fade, horizontal pillar gallery, process progress lines) use the same range formula as Framer's "scroll section" transforms. See `lib/scrollTargets.ts`.
- `REMOTE_OFFICE_VIDEO` (menu and alternate service cards) was not included in the export, so it is streamed from Framer's CDN.
- Only the homepage exists. Every link points to `#` until the other pages are built.
- Prices live in `PRICES` in `lib/content.ts`; the Complete Build Plan figure is unconfirmed (see the comment there).
- Optional env: `NEXT_PUBLIC_SITE_URL` (canonical/Open Graph base).
- `app/icon.svg` is a placeholder mark until a Plan2Build logo is supplied.
