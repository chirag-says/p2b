import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  H as r,
  I as i,
  M as a,
  N as o,
  T as s,
  b as c,
  d as l,
  l as u,
  p as d,
  s as f,
  u as p,
  v as m,
} from "./react.CV_3rBxD.mjs";
import { C as h, a as g, r as ee, t as te } from "./motion.CdSRWwto.mjs";
import {
  G as ne,
  I as _,
  K as re,
  M as ie,
  Mt as ae,
  N as v,
  Nt as y,
  Q as b,
  T as x,
  W as oe,
  h as se,
  ht as ce,
  k as le,
  o as S,
  r as C,
  t as ue,
  wt as de,
  y as fe,
} from "./framer.B0qnvVVY.mjs";
import { a as pe, i as w, o as T, r as me } from "./shared-lib.Cj7Z24jQ.mjs";
var E,
  he,
  ge,
  D,
  _e = e(() => {
    (f(),
      b(),
      s(),
      (E = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 14.073 1.734 L 16.185 5.992 C 16.473 6.585 17.241 7.154 17.889 7.262 L 21.716 7.904 C 24.164 8.315 24.74 10.106 22.976 11.871 L 20 14.871 C 19.496 15.379 19.22 16.358 19.376 17.062 L 20.228 20.775 C 20.9 23.715 19.352 24.852 16.772 23.316 L 13.184 21.174 C 12.536 20.787 11.468 20.787 10.808 21.174 L 7.222 23.316 C 4.654 24.852 3.094 23.702 3.766 20.775 L 4.618 17.062 C 4.774 16.36 4.498 15.379 3.994 14.872 L 1.018 11.872 C -0.733 10.104 -0.169 8.314 2.278 7.902 L 6.106 7.261 C 6.742 7.153 7.51 6.584 7.798 5.991 L 9.91 1.732 C 11.062 -0.577 12.934 -0.577 14.074 1.732 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="24px" id="CYAKGCwRX" transform="translate(2 2)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (he = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(h.div, { ...a, layoutId: r, ref: t }) : u(`div`, { ...a, ref: t });
      })),
      (ge = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (D = y(
        m(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = ge(e);
          return u(he, {
            ...s,
            className: _(`framer-4zAy8`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-4zAy8 { -webkit-mask: ${E}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${E}; width: 28px; }`,
        ],
        `framer-4zAy8`,
      )),
      (D.displayName = `Star`),
      v(D, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: S.Color,
        },
      }));
  });
function ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ye,
  be,
  xe,
  Se,
  Ce,
  O,
  k,
  A,
  we,
  Te,
  Ee,
  j,
  De = e(() => {
    (f(),
      b(),
      te(),
      s(),
      T(),
      _e(),
      (ye = oe(D)),
      (be = [`S5JKWUfkQ`, `M5MY8Sbdp`]),
      (xe = `framer-9Xmbu`),
      (Se = { M5MY8Sbdp: `framer-v-tplf1y`, S5JKWUfkQ: `framer-v-10bbgvi` }),
      (Ce = { delay: 0, duration: 0.4, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (O = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (k = ({ value: e, children: t }) => {
        let n = a(g),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(g.Provider, { value: i, children: t });
      }),
      (A = { Desktop: `S5JKWUfkQ`, Mobile: `M5MY8Sbdp` }),
      (we = h.create(i)),
      (Te = ({ height: e, id: t, image: n, testimonial: r, title: i, width: a, ...o }) => ({
        ...o,
        DzlkaxpNv: n ??
          o.DzlkaxpNv ?? {
            alt: `shallow focus photography of woman outdoor during day`,
            pixelHeight: 3456,
            pixelWidth: 5184,
            src: `https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?width=5184&height=3456`,
            srcSet: `https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?scale-down-to=512&width=5184&height=3456 512w,https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?scale-down-to=1024&width=5184&height=3456 1024w,https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?scale-down-to=2048&width=5184&height=3456 2048w,https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?scale-down-to=4096&width=5184&height=3456 4096w,https://framerusercontent.com/images/kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?width=5184&height=3456 5184w`,
          },
        g0bVK7_xo: i ?? o.g0bVK7_xo ?? `John Carter`,
        OjxN18wo5:
          r ??
          o.OjxN18wo5 ??
          `Browse all available treatments and discover the one that matches your goals. the one that matches your goals. the one that matches `,
        variant: A[o.variant] ?? o.variant ?? `S5JKWUfkQ`,
      })),
      (Ee = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (j = y(
        m(function (e, n) {
          let r = t(null),
            a = n ?? r,
            o = c(),
            { activeLocale: s, setLocale: l } = de(),
            d = ce(),
            {
              style: f,
              className: m,
              layoutId: g,
              variant: te,
              g0bVK7_xo: ne,
              OjxN18wo5: ie,
              DzlkaxpNv: v,
              ...y
            } = Te(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: oe,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ue,
              setGestureState: fe,
              setVariant: pe,
              variants: w,
            } = ae({
              cycleOrder: be,
              defaultVariant: `S5JKWUfkQ`,
              ref: a,
              variant: te,
              variantClassNames: Se,
            }),
            T = Ee(e, w),
            E = _(xe, me);
          return u(ee, {
            id: g ?? o,
            children: u(we, {
              animate: w,
              initial: !1,
              children: u(k, {
                value: Ce,
                children: p(h.div, {
                  ...y,
                  ...S,
                  className: _(E, `framer-10bbgvi`, m, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `S5JKWUfkQ`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...f,
                  },
                  variants: {
                    M5MY8Sbdp: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                  },
                  ...ve({ M5MY8Sbdp: { "data-framer-name": `Mobile` } }, b, C),
                  children: [
                    p(h.div, {
                      className: `framer-1r4lyeu`,
                      "data-border": !0,
                      "data-framer-name": `Text & Icon`,
                      layoutDependency: T,
                      layoutId: `q3YErWbEH`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      children: [
                        u(se, {
                          background: {
                            alt: `shallow focus photography of woman outdoor during day`,
                            fit: `fill`,
                            loading: re((d?.y || 0) + 32 + 0 + 19.2),
                            pixelHeight: 3456,
                            pixelWidth: 5184,
                            sizes: `42px`,
                            ...O(v),
                          },
                          className: `framer-w2rd9w`,
                          "data-framer-name": `Text & Icon`,
                          layoutDependency: T,
                          layoutId: `Tp8hPQF1m`,
                          style: {
                            borderBottomLeftRadius: 90,
                            borderBottomRightRadius: 90,
                            borderTopLeftRadius: 90,
                            borderTopRightRadius: 90,
                          },
                          ...ve(
                            {
                              M5MY8Sbdp: {
                                background: {
                                  alt: `shallow focus photography of woman outdoor during day`,
                                  fit: `fill`,
                                  loading: re((d?.y || 0) + 24 + 0 + 19.2),
                                  pixelHeight: 3456,
                                  pixelWidth: 5184,
                                  sizes: `42px`,
                                  ...O(v),
                                },
                              },
                            },
                            b,
                            C,
                          ),
                        }),
                        p(h.div, {
                          className: `framer-5nj9xp`,
                          layoutDependency: T,
                          layoutId: `hb3lD1Lca`,
                          children: [
                            u(le, {
                              __fromCanvasComponent: !0,
                              children: u(i, {
                                children: u(h.p, {
                                  className: `framer-styles-preset-piej36`,
                                  "data-styles-preset": `kzFJG5mqZ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0)))`,
                                  },
                                  children: `John Carter`,
                                }),
                              }),
                              className: `framer-b32r5z`,
                              fonts: [`Inter`],
                              layoutDependency: T,
                              layoutId: `WLyCWHl1Q`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: ne,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            p(h.div, {
                              className: `framer-1rgbdep`,
                              "data-framer-name": `Star`,
                              layoutDependency: T,
                              layoutId: `Pt7sar3Ut`,
                              children: [
                                u(D, {
                                  animated: !0,
                                  className: `framer-17nsh46`,
                                  layoutDependency: T,
                                  layoutId: `vO7EhrzDP`,
                                  style: { "--frkg9v": `rgb(250, 151, 39)` },
                                }),
                                u(D, {
                                  animated: !0,
                                  className: `framer-o99zg3`,
                                  layoutDependency: T,
                                  layoutId: `UVs5xTfP3`,
                                  style: { "--frkg9v": `rgb(250, 151, 39)` },
                                }),
                                u(D, {
                                  animated: !0,
                                  className: `framer-13w8rhu`,
                                  layoutDependency: T,
                                  layoutId: `dXpzgOd2s`,
                                  style: { "--frkg9v": `rgb(250, 151, 39)` },
                                }),
                                u(D, {
                                  animated: !0,
                                  className: `framer-1ekiszw`,
                                  layoutDependency: T,
                                  layoutId: `jZ3dN4ld3`,
                                  style: { "--frkg9v": `rgb(250, 151, 39)` },
                                }),
                                u(D, {
                                  animated: !0,
                                  className: `framer-gdpop7`,
                                  layoutDependency: T,
                                  layoutId: `a94IPe7M4`,
                                  style: { "--frkg9v": `rgb(250, 151, 39)` },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(le, {
                      __fromCanvasComponent: !0,
                      children: u(i, {
                        children: u(h.p, {
                          className: `framer-styles-preset-piej36`,
                          "data-styles-preset": `kzFJG5mqZ`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0)))`,
                          },
                          children: `Browse all available treatments and discover the one that matches your goals. the one that matches your goals. the one that matches `,
                        }),
                      }),
                      className: `framer-1ogq05j`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `RqtRIqHxP`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: ie,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-9Xmbu.framer-1m5y6s3, .framer-9Xmbu .framer-1m5y6s3 { display: block; }`,
          `.framer-9Xmbu.framer-10bbgvi { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px; position: relative; width: 424px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-9Xmbu .framer-1r4lyeu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 12px 0px; position: relative; width: 100%; z-index: 6; }`,
          `.framer-9Xmbu .framer-w2rd9w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 42px; overflow: visible; padding: 0px; position: relative; width: 42px; z-index: 6; }`,
          `.framer-9Xmbu .framer-5nj9xp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-9Xmbu .framer-b32r5z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-9Xmbu .framer-1rgbdep { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Xmbu .framer-17nsh46, .framer-9Xmbu .framer-o99zg3, .framer-9Xmbu .framer-13w8rhu, .framer-9Xmbu .framer-1ekiszw, .framer-9Xmbu .framer-gdpop7 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 13px; }`,
          `.framer-9Xmbu .framer-1ogq05j { flex: none; height: auto; max-width: 400px; min-height: 90px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9Xmbu.framer-v-tplf1y.framer-10bbgvi { padding: 24px 16px 24px 16px; }`,
          ...w,
          `.framer-9Xmbu[data-border="true"]::after, .framer-9Xmbu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-9Xmbu`,
      )),
      (j.displayName = `Testimonial`),
      (j.defaultProps = { height: 220, width: 424 }),
      v(j, {
        variant: {
          options: [`S5JKWUfkQ`, `M5MY8Sbdp`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: S.Enum,
        },
        g0bVK7_xo: {
          defaultValue: `John Carter`,
          description: `Click here to edit the title`,
          displayTextArea: !1,
          title: `Title`,
          type: S.String,
        },
        ong0bVK7_xoChange: { changes: `g0bVK7_xo`, type: S.ChangeHandler },
        OjxN18wo5: {
          defaultValue: `Browse all available treatments and discover the one that matches your goals. the one that matches your goals. the one that matches `,
          description: `Click here to edit the testimonial`,
          displayTextArea: !0,
          title: `Testimonial`,
          type: S.String,
        },
        onOjxN18wo5Change: { changes: `OjxN18wo5`, type: S.ChangeHandler },
        DzlkaxpNv: {
          __defaultAssetReference: `data:framer/asset-reference,kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?originalFilename=photo-1438761681033-6461ffad8d80%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwzM3x8d29tYW58ZW58MHx8fHwxNzMxNDMwNDM5fDA%26ixlib%3Drb-4.0.jpg&width=5184&height=3456`,
          __vekterDefault: {
            alt: `shallow focus photography of woman outdoor during day`,
            assetReference: `data:framer/asset-reference,kIBiy2xM79Ac692vRBBeMc3YFw8.jpg?originalFilename=photo-1438761681033-6461ffad8d80%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwzM3x8d29tYW58ZW58MHx8fHwxNzMxNDMwNDM5fDA%26ixlib%3Drb-4.0.jpg&width=5184&height=3456`,
          },
          description: `Click here to edit the image`,
          title: `Image`,
          type: S.ResponsiveImage,
        },
      }),
      ie(
        j,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ye,
          ...ne(pe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function M(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Oe(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function N(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function P(e) {
  throw Error(`Unexpected value: ${e}`);
}
function F(e) {
  return typeof e == `string`;
}
function I(e) {
  return Number.isFinite(e);
}
function L(e) {
  return e === null;
}
function R(e) {
  if (L(e)) return 0;
  switch (e.type) {
    case S.Array:
      return 1;
    case S.Boolean:
      return 2;
    case S.Color:
      return 3;
    case S.Date:
      return 4;
    case S.Enum:
      return 5;
    case S.File:
      return 6;
    case S.ResponsiveImage:
      return 10;
    case S.Link:
      return 7;
    case S.Number:
      return 8;
    case S.Object:
      return 9;
    case S.RichText:
      return 11;
    case S.String:
      return 12;
    case S.VectorSetItem:
      return 13;
    default:
      P(e);
  }
}
function ke(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = B.read(e);
    n.push(t);
  }
  return { type: S.Array, value: n };
}
function Ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) B.write(e, n);
}
function je(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = B.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Me(e) {
  return { type: S.Boolean, value: e.readUint8() !== 0 };
}
function Ne(e, t) {
  e.writeUint8(+!!t.value);
}
function Pe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Fe(e) {
  return { type: S.Color, value: e.readString() };
}
function Ie(e, t) {
  e.writeString(t.value);
}
function Le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Re(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: S.Date, value: n.toISOString() };
}
function ze(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Be(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Ve(e) {
  return { type: S.Enum, value: e.readString() };
}
function He(e, t) {
  e.writeString(t.value);
}
function Ue(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function We(e) {
  return { type: S.File, value: e.readString() };
}
function Ge(e, t) {
  e.writeString(t.value);
}
function Ke(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qe(e) {
  return { type: S.Link, value: e.readJson() };
}
function Je(e, t) {
  e.writeJson(t.value);
}
function Ye(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Xe(e) {
  return { type: S.Number, value: e.readFloat64() };
}
function Ze(e, t) {
  e.writeFloat64(t.value);
}
function Qe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function $e(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = B.read(e);
  }
  return { type: S.Object, value: n };
}
function et(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), B.write(e, r));
}
function tt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = B.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function nt(e) {
  return { type: S.ResponsiveImage, value: e.readJson() };
}
function rt(e, t) {
  e.writeJson(t.value);
}
function it(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function at(e) {
  let t = e.readInt8();
  if (t === 0) return { type: S.RichText, value: e.readUint32() };
  if (t === 1) return { type: S.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function ot(e, t) {
  if (I(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (F(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function st(e, t) {
  let n = e.value,
    r = t.value;
  if ((I(n) && I(r)) || (F(n) && F(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ct(e) {
  return { type: S.String, value: e.readString() };
}
function lt(e, t) {
  e.writeString(t.value);
}
function ut(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function dt(e) {
  return { type: S.VectorSetItem, value: e.readUint32() };
}
function ft(e, t) {
  e.writeUint32(t.value);
}
function pt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function mt(e) {
  let t = Math.floor(Dt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ht(e, t) {
  let n = _t(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await X(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Z(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function gt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function _t(e) {
  N(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function vt(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = B.read(e);
  }
  return t;
}
var z,
  B,
  yt,
  V,
  bt,
  H,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  Dt,
  Ot,
  X,
  Z,
  kt,
  At,
  jt = e(() => {
    (n(),
      b(),
      (yt = Object.create),
      (V = Object.defineProperty),
      (bt = Object.getOwnPropertyDescriptor),
      (H = Object.getOwnPropertyNames),
      (xt = Object.getPrototypeOf),
      (St = Object.prototype.hasOwnProperty),
      (Ct = (e, t) =>
        function () {
          try {
            return (t || (0, e[H(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (wt = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of H(t))
            St.call(e, i) ||
              i === n ||
              V(e, i, { get: () => t[i], enumerable: !(r = bt(t, i)) || r.enumerable });
        return e;
      }),
      (Tt = (e, t, n) => (
        (n = e == null ? {} : yt(xt(e))),
        wt(!t && e && e.__esModule ? n : V(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Et = Tt(
        Ct({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (U = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (W =
        ((z = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = U.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = U.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = U.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = U.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = U.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = U.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = U.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = U.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = U.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = U.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (M(this, `bytes`, void 0),
              M(this, `offset`, 0),
              M(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Oe(this.bytes)));
          }
        }),
        M(z, `textDecoder`, new TextDecoder()),
        z)),
      r !== void 0 && r.requestIdleCallback,
      (G = (e) => 2 ** e - 1),
      (K = (e) => -(2 ** (e - 1))),
      (q = (e) => 2 ** (e - 1) - 1),
      K(8),
      K(16),
      K(32),
      -(BigInt(2) ** BigInt(63)),
      G(8),
      G(16),
      G(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      q(8),
      q(16),
      q(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (J = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            N(I(n), `Invalid chunkId`),
            N(I(r), `Invalid offset`),
            N(I(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (N(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (M(this, `chunkId`, void 0),
            M(this, `offset`, void 0),
            M(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ke(e);
            case 2:
              return Me(e);
            case 3:
              return Fe(e);
            case 4:
              return Re(e);
            case 5:
              return Ve(e);
            case 6:
              return We(e);
            case 7:
              return qe(e);
            case 8:
              return Xe(e);
            case 9:
              return $e(e);
            case 10:
              return nt(e);
            case 11:
              return at(e);
            case 12:
              return ct(e);
            case 13:
              return dt(e);
            default:
              P(t);
          }
        }),
          (e.write = function (e, t) {
            let n = R(t);
            if ((e.writeUint8(n), !L(t)))
              switch (t.type) {
                case S.Array:
                  return Ae(e, t);
                case S.Boolean:
                  return Ne(e, t);
                case S.Color:
                  return Ie(e, t);
                case S.Date:
                  return ze(e, t);
                case S.Enum:
                  return He(e, t);
                case S.File:
                  return Ge(e, t);
                case S.Link:
                  return Je(e, t);
                case S.Number:
                  return Ze(e, t);
                case S.Object:
                  return et(e, t);
                case S.ResponsiveImage:
                  return rt(e, t);
                case S.RichText:
                  return ot(e, t);
                case S.VectorSetItem:
                  return ft(e, t);
                case S.String:
                  return lt(e, t);
                default:
                  P(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = R(e),
              i = R(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (L(e) || L(t)) return 0;
            switch (e.type) {
              case S.Array:
                return (N(t.type === S.Array), je(e, t, n));
              case S.Boolean:
                return (N(t.type === S.Boolean), Pe(e, t));
              case S.Color:
                return (N(t.type === S.Color), Le(e, t));
              case S.Date:
                return (N(t.type === S.Date), Be(e, t));
              case S.Enum:
                return (N(t.type === S.Enum), Ue(e, t));
              case S.File:
                return (N(t.type === S.File), Ke(e, t));
              case S.Link:
                return (N(t.type === S.Link), Ye(e, t));
              case S.Number:
                return (N(t.type === S.Number), Qe(e, t));
              case S.Object:
                return (N(t.type === S.Object), tt(e, t, n));
              case S.ResponsiveImage:
                return (N(t.type === S.ResponsiveImage), it(e, t));
              case S.RichText:
                return (N(t.type === S.RichText), st(e, t));
              case S.VectorSetItem:
                return (N(t.type === S.VectorSetItem), pt(e, t));
              case S.String:
                return (N(t.type === S.String), ut(e, t, n));
              default:
                P(e);
            }
          }));
      })((B ||= {})),
      (Y = 3),
      (Dt = 250),
      (Ot = [408, 429, 500, 502, 503, 504]),
      (X = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ot.includes(r.status) || ++n > Y) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Y) throw e;
          }
          await mt(n);
        }
      }),
      (Z = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((N(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = gt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((N(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = gt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          M(this, `chunks`, []);
        }
      }),
      (kt = class {
        scanItems() {
          return (
            (this.itemsPromise ??= X(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new W(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = vt(n),
                  i = n.getOffset() - e,
                  a = new J(this.id, e, i).toString(),
                  o = { pointer: a, data: t };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (M(this, `id`, void 0),
            M(this, `url`, void 0),
            M(this, `itemsPromise`, void 0),
            M(
              this,
              `itemLoader`,
              new Et.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = J.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ht(this.url, t)).map((t, n) => {
                    let r = vt(new W(t)),
                      i = e[n];
                    return (N(i, `Missing pointer`), { pointer: i, data: r });
                  });
                },
                { maxBatchSize: 250 },
              ),
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (At = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = J.fromString(e),
                n = this.chunks[t.chunkId];
              return (N(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = J.fromString(e.pointer),
            r = J.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return B.compare(e, t, n);
        }
        constructor(e) {
          (M(this, `options`, void 0),
            M(this, `id`, void 0),
            M(this, `schema`, void 0),
            M(this, `indexes`, void 0),
            M(this, `resolveRichText`, void 0),
            M(this, `resolveVectorSetItem`, void 0),
            M(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new kt(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Mt(e) {
  return typeof e == `object` && !!e && !d(e) && Ft in e;
}
function Nt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Pt(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return l(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return l(fe, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Mt(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Nt(s, `Module not found`),
            Mt(s) && s.preload(),
            u(C, {
              componentIdentifier: r,
              children: (e) => u(ue, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return l(e === `a` ? h.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Q,
  Ft,
  It,
  Lt = e(() => {
    (n(),
      f(),
      b(),
      s(),
      r !== void 0 && r.requestIdleCallback,
      (Ft = `preload`),
      (It =
        (((Q = It || {})[(Q.Fragment = 1)] = `Fragment`),
        (Q[(Q.Link = 2)] = `Link`),
        (Q[(Q.Module = 3)] = `Module`),
        (Q[(Q.Tag = 4)] = `Tag`),
        (Q[(Q.Text = 5)] = `Text`),
        Q)));
  }),
  Rt,
  zt,
  Bt,
  Vt,
  $,
  Ht = e(() => {
    (b(),
      jt(),
      Lt(),
      (Rt = {
        bTLpAFdDK: { isNullable: !0, type: S.ResponsiveImage },
        CE3BYOPJa: { isNullable: !0, type: S.String },
        createdAt: { isNullable: !0, type: S.Date },
        id: { isNullable: !1, type: S.String },
        mVt8yUKIO: { isNullable: !0, type: S.Enum },
        nextItemId: { isNullable: !0, type: S.String },
        PNdlC4yXy: { isNullable: !0, type: S.String },
        previousItemId: { isNullable: !0, type: S.String },
        updatedAt: { isNullable: !0, type: S.Date },
        V562KVaHR: { isNullable: !0, type: S.String },
      }),
      (zt = []),
      (Bt = (e) => {
        let t = zt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Vt = Pt({})),
      new x(),
      ($ = {
        collectionByLocaleId: {
          default: new At({
            chunks: [
              new URL(
                `./yFo8aBv4g-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/yHtx51cHVZdUUt3WJDQ5/Liu7UOztjXufwAraMVXC/yFo8aBv4g.js`,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `a63c697c-4e49-4144-a3d2-c106d2d240a5default`,
            indexes: [],
            resolveRichText: Vt,
            resolveVectorSetItem: Bt,
            schema: Rt,
          }),
        },
        displayName: `Testimonial`,
        id: `a63c697c-4e49-4144-a3d2-c106d2d240a5`,
      }),
      v($, {
        V562KVaHR: {
          defaultValue: ``,
          placeholder: `Lisa Thompson`,
          title: `Title`,
          type: S.String,
        },
        mVt8yUKIO: {
          defaultValue: `KxnWdYV_0`,
          options: [`zGT9nDI2F`, `KxnWdYV_0`],
          optionTitles: [`Houzz`, `Google`],
          title: `Review`,
          type: S.Enum,
        },
        PNdlC4yXy: { preventLocalization: !1, title: `Slug`, type: S.String },
        CE3BYOPJa: {
          defaultValue: ``,
          displayTextArea: !0,
          placeholder: `"Our kitchen looks beautiful now. The team worked carefully and finished the project on schedule."`,
          title: `Content`,
          type: S.String,
        },
        bTLpAFdDK: { title: `Image`, type: S.ResponsiveImage },
        createdAt: { title: `Created`, type: S.Date },
        updatedAt: { title: `Updated`, type: S.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/yFo8aBv4g:default`,
          title: `Previous`,
          type: S.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/yFo8aBv4g:default`,
          title: `Next`,
          type: S.CollectionReference,
        },
      }));
  });
export { D as a, De as i, $ as n, _e as o, j as r, Ht as t };
//# sourceMappingURL=yFo8aBv4g.CDm4UcUB.mjs.map
