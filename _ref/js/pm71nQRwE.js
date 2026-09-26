import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as i,
  T as a,
  b as o,
  l as s,
  s as c,
  u as l,
  v as u,
} from "./react.CV_3rBxD.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.CdSRWwto.mjs";
import {
  G as h,
  I as g,
  K as _,
  M as v,
  Mt as y,
  N as b,
  Nt as x,
  O as S,
  Q as C,
  R as w,
  W as T,
  h as ee,
  ht as E,
  i as D,
  j as O,
  jt as k,
  k as A,
  o as j,
  wt as M,
  zt as N,
} from "./framer.B0qnvVVY.mjs";
import { i as P, n as F, r as te, t as ne } from "./hMoFYBqBy.K_wxjvR_.mjs";
import { i as re, n as I, r as L, t as ie } from "./WtX7HRPZM.D8xtSTXa.mjs";
import { i as R, n as ae, r as z, t as B } from "./FQBtVWcCo.CBF2cXz1.mjs";
import { i as oe, n as se, r as ce, t as le } from "./WuP7CDxyd.DnZAHNor.mjs";
import { n as ue, t as V } from "./TLMK37qFm.CXt1_IWs.mjs";
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var U,
  de,
  fe,
  W,
  G,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  K,
  ye = e(() => {
    (c(),
      C(),
      m(),
      a(),
      R(),
      oe(),
      (U = [`odo7rJPfK`, `QaziGvqrL`, `OAliz7aYq`, `R09CuPEIk`]),
      (de = `framer-O6K25`),
      (fe = {
        OAliz7aYq: `framer-v-xh8zjy`,
        odo7rJPfK: `framer-v-1rjnxot`,
        QaziGvqrL: `framer-v-1r1qfjj`,
        R09CuPEIk: `framer-v-1vi0ckx`,
      }),
      (W = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (pe = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (me = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (he = {
        "Variant 3": `OAliz7aYq`,
        "Variant 4": `R09CuPEIk`,
        Close: `odo7rJPfK`,
        Open: `QaziGvqrL`,
      }),
      (ge = d.create(n)),
      (_e = ({
        afterImage: e,
        beforeImage: t,
        bGImage: n,
        height: r,
        id: i,
        radius: a,
        shadow: o,
        width: s,
        ...c
      }) => ({
        ...c,
        L4j2J7d1N: o ?? c.L4j2J7d1N ?? !1,
        NfzgIueQm: e ??
          c.NfzgIueQm ?? {
            pixelHeight: 1024,
            pixelWidth: 1536,
            src: `https://framerusercontent.com/images/ghiXqhfuqwG06h9cXlocwycjZfw.png?width=1536&height=1024`,
            srcSet: `https://framerusercontent.com/images/ghiXqhfuqwG06h9cXlocwycjZfw.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/ghiXqhfuqwG06h9cXlocwycjZfw.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/ghiXqhfuqwG06h9cXlocwycjZfw.png?width=1536&height=1024 1536w`,
          },
        qLYhflb9R: a ?? c.qLYhflb9R ?? `25px`,
        variant: he[c.variant] ?? c.variant ?? `odo7rJPfK`,
        VcP3JkMrC: t ??
          c.VcP3JkMrC ?? {
            pixelHeight: 1024,
            pixelWidth: 1536,
            src: `https://framerusercontent.com/images/VK97rExxLbED626nIacAbNe9mL8.png?width=1536&height=1024`,
            srcSet: `https://framerusercontent.com/images/VK97rExxLbED626nIacAbNe9mL8.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/VK97rExxLbED626nIacAbNe9mL8.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/VK97rExxLbED626nIacAbNe9mL8.png?width=1536&height=1024 1536w`,
          },
        w1YFGN0ZT:
          n ??
          c.w1YFGN0ZT ??
          `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255))`,
      })),
      (ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = x(
        u(function (e, r) {
          let i = t(null),
            a = r ?? i,
            c = o(),
            { activeLocale: u, setLocale: f } = M(),
            m = E(),
            {
              style: h,
              className: v,
              layoutId: b,
              variant: x,
              VcP3JkMrC: S,
              qLYhflb9R: C,
              w1YFGN0ZT: w,
              L4j2J7d1N: T,
              NfzgIueQm: D,
              ...O
            } = _e(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: N,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: I,
            } = y({
              cycleOrder: U,
              defaultVariant: `odo7rJPfK`,
              ref: a,
              variant: x,
              variantClassNames: fe,
            }),
            L = ve(e, I),
            ie = g(de, B, le),
            R = () => k !== `R09CuPEIk`;
          return s(p, {
            id: b ?? c,
            children: s(ge, {
              animate: I,
              initial: !1,
              children: s(me, {
                value: pe,
                children: l(ee, {
                  ...O,
                  ...P,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 445,
                    intrinsicWidth: 504,
                    loading: _(m?.y || 0),
                    pixelHeight: 1024,
                    pixelWidth: 1536,
                    sizes: m?.width || `100vw`,
                    ...G(S),
                  },
                  className: g(ie, `framer-1rjnxot`, v, j),
                  "data-framer-name": `Close`,
                  layoutDependency: L,
                  layoutId: `odo7rJPfK`,
                  ref: a,
                  style: {
                    borderBottomLeftRadius: W(C, 3),
                    borderBottomRightRadius: W(C, 2),
                    borderTopLeftRadius: W(C, 0),
                    borderTopRightRadius: W(C, 1),
                    ...h,
                  },
                  ...H(
                    {
                      OAliz7aYq: { "data-framer-name": `Variant 3` },
                      QaziGvqrL: { "data-framer-name": `Open` },
                      R09CuPEIk: {
                        "data-framer-name": `Variant 4`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 445,
                          intrinsicWidth: 504,
                          loading: _(m?.y || 0),
                          pixelHeight: 1024,
                          pixelWidth: 1536,
                          sizes: m?.width || `100vw`,
                          ...G(D),
                        },
                      },
                    },
                    k,
                    F,
                  ),
                  children: [
                    T !== !1 &&
                      s(d.div, {
                        className: `framer-u5oxue`,
                        layoutDependency: L,
                        layoutId: `wVT4P5Fzk`,
                        style: {
                          background: `linear-gradient(180deg, rgba(84, 84, 84, 0) 0%, rgb(0, 0, 0) 100%)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 53%, rgba(0,0,0,1) 87%) add`,
                          opacity: 0.27,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 53%, rgba(0,0,0,1) 87%) add`,
                        },
                        variants: {
                          OAliz7aYq: { opacity: 0.59 },
                          QaziGvqrL: { opacity: 0.59 },
                          R09CuPEIk: { opacity: 0.59 },
                        },
                      }),
                    s(d.div, {
                      className: `framer-w5aumw`,
                      "data-framer-name": `Background`,
                      layoutDependency: L,
                      layoutId: `nRJKhX0oT`,
                      children: s(d.div, {
                        className: `framer-m7zo2h`,
                        layoutDependency: L,
                        layoutId: `UeFo_FOkh`,
                        style: { backgroundColor: w },
                      }),
                    }),
                    s(d.div, {
                      className: `framer-1bsxsno`,
                      "data-framer-name": `Background`,
                      layoutDependency: L,
                      layoutId: `rXgwxOLS0`,
                      children: s(d.div, {
                        className: `framer-a8juf`,
                        layoutDependency: L,
                        layoutId: `H_ZNXL3wt`,
                        style: { backgroundColor: w },
                      }),
                    }),
                    R() &&
                      s(d.div, {
                        className: `framer-67mvnq`,
                        "data-framer-name": `Before`,
                        layoutDependency: L,
                        layoutId: `igKrMkfin`,
                        style: {
                          backgroundColor: `rgba(0, 0, 0, 0.37)`,
                          borderBottomLeftRadius: 90,
                          borderBottomRightRadius: 90,
                          borderTopLeftRadius: 90,
                          borderTopRightRadius: 90,
                        },
                        children: s(A, {
                          __fromCanvasComponent: !0,
                          children: s(n, {
                            children: s(d.p, {
                              className: `framer-styles-preset-lqeg3j`,
                              "data-styles-preset": `FQBtVWcCo`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255)))`,
                              },
                              children: `Before`,
                            }),
                          }),
                          className: `framer-10kkrqn`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `h3aRuigcy`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...H(
                            {
                              OAliz7aYq: {
                                children: s(n, {
                                  children: s(d.p, {
                                    className: `framer-styles-preset-1w3vw8y`,
                                    "data-styles-preset": `WuP7CDxyd`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255)))`,
                                    },
                                    children: `Before`,
                                  }),
                                }),
                              },
                            },
                            k,
                            F,
                          ),
                        }),
                      }),
                    R() &&
                      s(d.div, {
                        className: `framer-zuc2a5`,
                        "data-framer-name": `After`,
                        layoutDependency: L,
                        layoutId: `zUcvnNx0G`,
                        style: {
                          backgroundColor: `rgba(0, 0, 0, 0.37)`,
                          borderBottomLeftRadius: 90,
                          borderBottomRightRadius: 90,
                          borderTopLeftRadius: 90,
                          borderTopRightRadius: 90,
                        },
                        children: s(A, {
                          __fromCanvasComponent: !0,
                          children: s(n, {
                            children: s(d.p, {
                              className: `framer-styles-preset-lqeg3j`,
                              "data-styles-preset": `FQBtVWcCo`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255)))`,
                              },
                              children: `After`,
                            }),
                          }),
                          className: `framer-6obwpd`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `A1qQP3nIp`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...H(
                            {
                              OAliz7aYq: {
                                children: s(n, {
                                  children: s(d.p, {
                                    className: `framer-styles-preset-1w3vw8y`,
                                    "data-styles-preset": `WuP7CDxyd`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bc7619c9-8502-46bb-aef2-06fbbd670279, rgb(255, 255, 255)))`,
                                    },
                                    children: `After`,
                                  }),
                                }),
                              },
                            },
                            k,
                            F,
                          ),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-O6K25.framer-1ntz2di, .framer-O6K25 .framer-1ntz2di { display: block; }`,
          `.framer-O6K25.framer-1rjnxot { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 446px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 504px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-O6K25 .framer-u5oxue { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-O6K25 .framer-w5aumw, .framer-O6K25 .framer-1bsxsno { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 1px; z-index: 2; }`,
          `.framer-O6K25 .framer-m7zo2h, .framer-O6K25 .framer-a8juf { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -1px; z-index: 1; }`,
          `.framer-O6K25 .framer-67mvnq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 16px; overflow: var(--overflow-clip-fallback, clip); padding: 3px 8px 3px 8px; position: absolute; top: 16px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-O6K25 .framer-10kkrqn, .framer-O6K25 .framer-6obwpd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-O6K25 .framer-zuc2a5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 8px 3px 8px; position: absolute; right: 16px; top: 16px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-O6K25.framer-v-1r1qfjj .framer-m7zo2h, .framer-O6K25.framer-v-xh8zjy .framer-m7zo2h, .framer-O6K25.framer-v-1vi0ckx .framer-m7zo2h { bottom: -1px; height: 1px; top: unset; }`,
          `.framer-O6K25.framer-v-1r1qfjj .framer-a8juf, .framer-O6K25.framer-v-xh8zjy .framer-a8juf, .framer-O6K25.framer-v-1vi0ckx .framer-a8juf { bottom: unset; height: 1px; }`,
          `.framer-O6K25.framer-v-xh8zjy .framer-67mvnq { left: 8px; top: 8px; }`,
          `.framer-O6K25.framer-v-xh8zjy .framer-zuc2a5 { right: 8px; top: 8px; }`,
          ...ae,
          ...se,
        ],
        `framer-O6K25`,
      )),
      (K.displayName = `Project image`),
      (K.defaultProps = { height: 446, width: 504 }),
      b(K, {
        variant: {
          options: [`odo7rJPfK`, `QaziGvqrL`, `OAliz7aYq`, `R09CuPEIk`],
          optionTitles: [`Close`, `Open`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: j.Enum,
        },
        VcP3JkMrC: {
          __defaultAssetReference: `data:framer/asset-reference,VK97rExxLbED626nIacAbNe9mL8.png?originalFilename=ChatGPT+Image+Mar+30%2C+2026%2C+02_18_34+PM.png&width=1536&height=1024`,
          description: `Click here to edit the image`,
          title: `Before Image`,
          type: j.ResponsiveImage,
        },
        qLYhflb9R: {
          defaultValue: `25px`,
          description: `Click here to edit the radius`,
          title: `Radius`,
          type: j.BorderRadius,
        },
        w1YFGN0ZT: {
          defaultValue: `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255)) /* {"name":"Desktop"} */`,
          description: `Click here to edit the BG Image`,
          title: `BG Image`,
          type: j.Color,
        },
        L4j2J7d1N: {
          defaultValue: !1,
          description: `Click Yes to show the Shadow`,
          title: `Shadow`,
          type: j.Boolean,
        },
        onL4j2J7d1NChange: { changes: `L4j2J7d1N`, type: j.ChangeHandler },
        NfzgIueQm: {
          __defaultAssetReference: `data:framer/asset-reference,ghiXqhfuqwG06h9cXlocwycjZfw.png?originalFilename=ChatGPT+Image+Mar+29%2C+2026%2C+01_25_04+AM.png&width=1536&height=1024`,
          title: `After Image`,
          type: j.ResponsiveImage,
        },
      }),
      v(
        K,
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
          ...h(z),
          ...h(ce),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  q,
  De = e(() => {
    (c(),
      C(),
      m(),
      a(),
      (be = `framer-OJsoj`),
      (xe = { LDcJ44blb: `framer-v-3j5rai` }),
      (Se = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ce = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (we = d.create(n)),
      (Te = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ee = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = x(
        u(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = o(),
            { activeLocale: c, setLocale: l } = M();
          E();
          let { style: u, className: f, layoutId: m, variant: h, ..._ } = Te(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: ee,
              variants: D,
            } = y({ defaultVariant: `LDcJ44blb`, ref: i, variant: h, variantClassNames: xe }),
            O = Ee(e, D),
            k = g(be);
          return s(p, {
            id: m ?? a,
            children: s(we, {
              animate: D,
              initial: !1,
              children: s(Ce, {
                value: Se,
                children: s(d.div, {
                  ..._,
                  ...S,
                  className: g(k, `framer-3j5rai`, f, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `LDcJ44blb`,
                  ref: i,
                  style: {
                    backdropFilter: `blur(5px)`,
                    backgroundColor: `rgba(0, 0, 0, 0.39)`,
                    WebkitBackdropFilter: `blur(5px)`,
                    ...u,
                  },
                }),
              }),
            }),
          });
        }),
        [
          `.framer-OJsoj.framer-1o84xr9, .framer-OJsoj .framer-1o84xr9 { display: block; }`,
          `.framer-OJsoj.framer-3j5rai { height: 356px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 664px; }`,
        ],
        `framer-OJsoj`,
      )),
      (q.displayName = `Image/Background`),
      (q.defaultProps = { height: 356, width: 664 }),
      v(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Y,
  X,
  Z,
  Q,
  Ie,
  Le,
  Re,
  ze,
  Be,
  $,
  Ve = e(() => {
    (c(),
      C(),
      m(),
      a(),
      P(),
      re(),
      ye(),
      ue(),
      De(),
      (Oe = T(K)),
      (ke = N(K)),
      (Ae = T(q)),
      (je = T(V)),
      (Me = [`Xg1b3kLqQ`, `wsMk9Dbdm`, `lR41eqjfa`, `Reds2yqCO`]),
      (Ne = `framer-P05TW`),
      (Pe = {
        lR41eqjfa: `framer-v-1nzupnt`,
        Reds2yqCO: `framer-v-ygqioc`,
        wsMk9Dbdm: `framer-v-l47y1j`,
        Xg1b3kLqQ: `framer-v-1ozdky0`,
      }),
      (Fe = { delay: 0, duration: 0.4, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (Y = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      }),
      (Ie = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (Le = {
        "Mobile 2": `wsMk9Dbdm`,
        "Variant 4": `Reds2yqCO`,
        Desktop: `Xg1b3kLqQ`,
        Mobile: `lR41eqjfa`,
      }),
      (Re = d.create(n)),
      (ze = ({
        afterImage: e,
        height: t,
        id: n,
        link: r,
        radius: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        g0bVK7_xo: a ?? s.g0bVK7_xo ?? `Real Estate Development`,
        rRkGm0ebE: i ?? s.rRkGm0ebE ?? `0px`,
        V7bqPTvyC: e ?? s.V7bqPTvyC,
        variant: Le[s.variant] ?? s.variant ?? `Xg1b3kLqQ`,
        xw1Hmx0De: r ?? s.xw1Hmx0De,
      })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = x(
        u(function (e, r) {
          let i = t(null),
            a = r ?? i,
            c = o(),
            { activeLocale: u, setLocale: f } = M(),
            m = E(),
            {
              style: h,
              className: v,
              layoutId: b,
              variant: x,
              g0bVK7_xo: C,
              V7bqPTvyC: w,
              xw1Hmx0De: T,
              rRkGm0ebE: j,
              ...N
            } = ze(e),
            {
              baseVariant: P,
              classNames: F,
              clearLoadingGesture: te,
              gestureHandlers: re,
              gestureVariant: I,
              isLoading: L,
              setGestureState: R,
              setVariant: ae,
              variants: z,
            } = y({
              cycleOrder: Me,
              defaultVariant: `Xg1b3kLqQ`,
              ref: a,
              variant: x,
              variantClassNames: Pe,
            }),
            B = Be(e, z),
            oe = g(Ne, ie, ne),
            se = () => P !== `Reds2yqCO`,
            ce = () => P === `Reds2yqCO`;
          return (
            k(),
            s(p, {
              id: b ?? c,
              children: s(Re, {
                animate: z,
                initial: !1,
                children: s(Ie, {
                  value: Fe,
                  children: l(ee, {
                    ...N,
                    ...re,
                    className: g(oe, `framer-1ozdky0`, v, F),
                    "data-framer-name": `Desktop`,
                    layoutDependency: B,
                    layoutId: `Xg1b3kLqQ`,
                    ref: a,
                    style: {
                      backgroundColor: `var(--token-8cc58844-836f-4458-b54d-42dbb0e6106c, rgb(23, 25, 24))`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      ...h,
                    },
                    variants: {
                      lR41eqjfa: {
                        backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      Reds2yqCO: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: Y(j, 3),
                        borderBottomRightRadius: Y(j, 2),
                        borderTopLeftRadius: Y(j, 0),
                        borderTopRightRadius: Y(j, 1),
                      },
                    },
                    ...J(
                      {
                        lR41eqjfa: { "data-framer-name": `Mobile` },
                        Reds2yqCO: {
                          "data-framer-name": `Variant 4`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: _(m?.y || 0),
                            sizes: m?.width || `100vw`,
                            ...X(w),
                          },
                        },
                        wsMk9Dbdm: { "data-framer-name": `Mobile 2` },
                      },
                      P,
                      I,
                    ),
                    children: [
                      se() &&
                        s(D, {
                          height: 625,
                          width: m?.width || `100vw`,
                          y: (m?.y || 0) + 0 + ((m?.height || 763) - 0 - 725 + 0 + 0),
                          ...J(
                            {
                              lR41eqjfa: {
                                width: `calc(${m?.width || `100vw`} - 8px)`,
                                y: (m?.y || 0) + 4 + ((m?.height || 426) - 8 - 761 + 0 + 0),
                              },
                              wsMk9Dbdm: {
                                height: 680,
                                y: (m?.y || 0) + 0 + ((m?.height || 390) - 0 - 810 + 0 + 0),
                              },
                            },
                            P,
                            I,
                          ),
                          children: s(O, {
                            className: `framer-18jyjbs-container`,
                            layoutDependency: B,
                            layoutId: `COCjtskcm-container`,
                            nodeId: `COCjtskcm`,
                            rendersWithMotion: !0,
                            scopeId: `pm71nQRwE`,
                            children: s(ke, {
                              __framer__animateOnce: !0,
                              __framer__obscuredVariantId: `odo7rJPfK`,
                              __framer__threshold: 0.5,
                              __framer__variantAppearEffectEnabled: !0,
                              __framer__visibleVariantId: `QaziGvqrL`,
                              height: `100%`,
                              id: `COCjtskcm`,
                              L4j2J7d1N: !1,
                              layoutId: `COCjtskcm`,
                              qLYhflb9R: `0px`,
                              style: { height: `100%`, width: `100%` },
                              variant: Z(`QaziGvqrL`),
                              VcP3JkMrC: X(w),
                              w1YFGN0ZT: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
                              width: `100%`,
                              ...J(
                                {
                                  lR41eqjfa: {
                                    __framer__variantAppearEffectEnabled: void 0,
                                    NfzgIueQm: X(w),
                                    qLYhflb9R: `14px`,
                                    variant: Z(`R09CuPEIk`),
                                  },
                                },
                                P,
                                I,
                              ),
                            }),
                          }),
                        }),
                      l(d.div, {
                        className: `framer-1sgpvvb`,
                        "data-framer-name": `Tag`,
                        layoutDependency: B,
                        layoutId: `glznMPekh`,
                        style: {
                          backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        },
                        variants: {
                          Reds2yqCO: {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderBottomLeftRadius: 24,
                            borderBottomRightRadius: 24,
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                          },
                        },
                        children: [
                          s(A, {
                            __fromCanvasComponent: !0,
                            children: s(n, {
                              children: s(d.h4, {
                                className: `framer-styles-preset-1nvzv7u`,
                                "data-styles-preset": `WtX7HRPZM`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                },
                                children: `Real Estate Development`,
                              }),
                            }),
                            className: `framer-8r7u37`,
                            fonts: [`Inter`],
                            layoutDependency: B,
                            layoutId: `EoAn9lgj7`,
                            style: {
                              "--extracted-1eung3n": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: C,
                            variants: {
                              lR41eqjfa: {
                                "--extracted-a0htzi": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                              },
                              Reds2yqCO: {
                                "--extracted-a0htzi": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...J(
                              {
                                lR41eqjfa: {
                                  children: s(n, {
                                    children: s(d.h3, {
                                      className: `framer-styles-preset-1pr57h3`,
                                      "data-styles-preset": `hMoFYBqBy`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                      },
                                      children: `Real Estate Development`,
                                    }),
                                  }),
                                },
                                Reds2yqCO: {
                                  children: s(n, {
                                    children: s(d.h3, {
                                      className: `framer-styles-preset-1pr57h3`,
                                      "data-styles-preset": `hMoFYBqBy`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                      },
                                      children: `Real Estate Development`,
                                    }),
                                  }),
                                },
                              },
                              P,
                              I,
                            ),
                          }),
                          ce() &&
                            s(D, {
                              ...J(
                                {
                                  Reds2yqCO: {
                                    height: 220,
                                    width: `min(${m?.width || `100vw`} - 32px, 500px)`,
                                    y:
                                      (m?.y || 0) +
                                      16 +
                                      (((m?.height || 626) - 32 - 220) / 2 + 0 + 0) +
                                      0,
                                  },
                                },
                                P,
                                I,
                              ),
                              children: s(O, {
                                className: `framer-yq9tbf-container`,
                                layoutDependency: B,
                                layoutId: `IUEcEQuOf-container`,
                                nodeId: `IUEcEQuOf`,
                                rendersWithMotion: !0,
                                scopeId: `pm71nQRwE`,
                                children: s(q, {
                                  height: `100%`,
                                  id: `IUEcEQuOf`,
                                  layoutId: `IUEcEQuOf`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          s(S, {
                            links: [
                              { href: { webPageId: `mpzwOKiYs` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `mpzwOKiYs` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              s(D, {
                                height: 52,
                                y: (m?.y || 0) + 0 + ((m?.height || 763) - 0 - 725 + 625 + 0) + 24,
                                ...J(
                                  {
                                    lR41eqjfa: {
                                      height: 40,
                                      y:
                                        (m?.y || 0) +
                                        4 +
                                        ((m?.height || 426) - 8 - 761 + 625 + 0) +
                                        16 +
                                        64,
                                    },
                                    Reds2yqCO: {
                                      y:
                                        (m?.y || 0) +
                                        16 +
                                        (((m?.height || 626) - 32 - 220) / 2 + 0 + 0) +
                                        48 +
                                        72,
                                    },
                                    wsMk9Dbdm: {
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        ((m?.height || 390) - 0 - 810 + 680 + 0) +
                                        24 +
                                        30,
                                    },
                                  },
                                  P,
                                  I,
                                ),
                                children: s(O, {
                                  className: `framer-hfuotp-container`,
                                  layoutDependency: B,
                                  layoutId: `Vo2R3INFg-container`,
                                  nodeId: `Vo2R3INFg`,
                                  rendersWithMotion: !0,
                                  scopeId: `pm71nQRwE`,
                                  whileHover: Q,
                                  children: s(V, {
                                    AmmV7xj6g: 33,
                                    BgmIAzzRV: `30px`,
                                    DbOmokZP0: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                    EDzxvbp5Q: `8px 8px 8px 20px`,
                                    F9xEnRksX: `one`,
                                    Ftd7ea6ZK: 90,
                                    GmXdHB9SX: !0,
                                    h_OXotjfD: 12,
                                    height: `100%`,
                                    id: `Vo2R3INFg`,
                                    layoutId: `Vo2R3INFg`,
                                    LWV7WvkSz: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                    n7FNYiflu: 2e3,
                                    ooNLd407F: 100,
                                    qcTsc8aEM: `View Project`,
                                    qNjswW_Tg: e[0],
                                    s8XHH4TvL: 4,
                                    ucHarSLTi: `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(247, 241, 236))`,
                                    width: `100%`,
                                    Z_ma24kbm: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                    ...J(
                                      {
                                        lR41eqjfa: {
                                          AmmV7xj6g: 29,
                                          DbOmokZP0: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                          EDzxvbp5Q: `5px 5px 5px 16px`,
                                          LWV7WvkSz: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                          qNjswW_Tg: T,
                                          style: { height: `100%` },
                                          ucHarSLTi: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          Z_ma24kbm: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                        Reds2yqCO: { qNjswW_Tg: T },
                                        wsMk9Dbdm: { qNjswW_Tg: e[1] },
                                      },
                                      P,
                                      I,
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-P05TW.framer-iunpng, .framer-P05TW .framer-iunpng { display: block; }`,
          `.framer-P05TW.framer-1ozdky0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1039px; }`,
          `.framer-P05TW .framer-18jyjbs-container { aspect-ratio: 1.56 / 1; flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
          `.framer-P05TW .framer-1sgpvvb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 24px; position: relative; width: 100%; }`,
          `.framer-P05TW .framer-8r7u37 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-P05TW .framer-yq9tbf-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-P05TW .framer-hfuotp-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
          `.framer-P05TW.framer-v-l47y1j.framer-1ozdky0 { align-content: flex-start; align-items: flex-start; overflow: visible; width: 390px; }`,
          `.framer-P05TW.framer-v-l47y1j .framer-18jyjbs-container { aspect-ratio: 1.4808823529411765 / 1; order: 0; }`,
          `.framer-P05TW.framer-v-l47y1j .framer-1sgpvvb { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 1; }`,
          `.framer-P05TW.framer-v-1nzupnt.framer-1ozdky0 { padding: 4px; width: 373px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-P05TW.framer-v-1nzupnt .framer-1sgpvvb { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: flex-start; padding: 16px; }`,
          `.framer-P05TW.framer-v-1nzupnt .framer-8r7u37 { overflow: var(--overflow-clip-fallback, clip); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-P05TW.framer-v-1nzupnt .framer-hfuotp-container { height: 40px; }`,
          `.framer-P05TW.framer-v-ygqioc.framer-1ozdky0 { height: 626px; justify-content: center; padding: 16px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-P05TW.framer-v-ygqioc .framer-1sgpvvb { flex-direction: column; gap: 24px; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 48px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-P05TW.framer-v-ygqioc .framer-8r7u37 { overflow: var(--overflow-clip-fallback, clip); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 3; }`,
          ...I,
          ...F,
        ],
        `framer-P05TW`,
      )),
      ($.displayName = `Projects 3`),
      ($.defaultProps = { height: 763, width: 1039 }),
      b($, {
        variant: {
          options: [`Xg1b3kLqQ`, `wsMk9Dbdm`, `lR41eqjfa`, `Reds2yqCO`],
          optionTitles: [`Desktop`, `Mobile 2`, `Mobile`, `Variant 4`],
          title: `Variant`,
          type: j.Enum,
        },
        g0bVK7_xo: {
          defaultValue: `Real Estate Development`,
          description: `Click here to edit the title`,
          displayTextArea: !1,
          title: `Title`,
          type: j.String,
        },
        ong0bVK7_xoChange: { changes: `g0bVK7_xo`, type: j.ChangeHandler },
        V7bqPTvyC: {
          description: `Click here to edit the after image`,
          title: `After Image`,
          type: j.ResponsiveImage,
        },
        xw1Hmx0De: { description: `Click here to edit the link`, title: `Link`, type: j.Link },
        rRkGm0ebE: { defaultValue: `0px`, title: `Radius`, type: j.BorderRadius },
      }),
      v(
        $,
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
          ...Oe,
          ...Ae,
          ...je,
          ...h(L),
          ...h(te),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([w(K, {}, t), w(q, {}, t), w(V, {}, t)])),
      }));
  });
export { Ve as n, $ as t };
//# sourceMappingURL=pm71nQRwE.CsI16KIG.mjs.map
