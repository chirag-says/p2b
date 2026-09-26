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
  I as h,
  K as g,
  M as _,
  Mt as v,
  N as y,
  Nt as b,
  Q as x,
  W as S,
  h as C,
  ht as w,
  o as T,
  wt as E,
} from "./framer.B0qnvVVY.mjs";
import { i as D, r as O } from "./jB0eAZmvy.ylPqY2bS.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V = e(() => {
    (c(),
      x(),
      m(),
      a(),
      D(),
      (A = S(O)),
      (j = [`tZzkGwgAz`, `XTwYsJHeV`]),
      (M = `framer-s5TNc`),
      (N = { tZzkGwgAz: `framer-v-1qjtxvc`, XTwYsJHeV: `framer-v-b3tynz` }),
      (P = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (F = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (I = { Google: `XTwYsJHeV`, Houzz: `tZzkGwgAz` }),
      (L = d.create(n)),
      (R = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: I[r.variant] ?? r.variant ?? `tZzkGwgAz`,
      })),
      (z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = b(
        u(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = o(),
            { activeLocale: c, setLocale: u } = E(),
            f = w(),
            { style: m, className: _, layoutId: y, variant: b, ...x } = R(e),
            {
              baseVariant: S,
              classNames: T,
              clearLoadingGesture: D,
              gestureHandlers: A,
              gestureVariant: I,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = v({
              cycleOrder: j,
              defaultVariant: `tZzkGwgAz`,
              ref: i,
              variant: b,
              variantClassNames: N,
            }),
            W = z(e, U),
            G = h(M),
            K = () => S !== `XTwYsJHeV`,
            q = () => S === `XTwYsJHeV`;
          return s(p, {
            id: y ?? a,
            children: s(L, {
              animate: U,
              initial: !1,
              children: s(F, {
                value: P,
                children: l(d.div, {
                  ...x,
                  ...A,
                  className: h(G, `framer-1qjtxvc`, _, T),
                  "data-framer-name": `Houzz`,
                  layoutDependency: W,
                  layoutId: `tZzkGwgAz`,
                  ref: i,
                  style: { ...m },
                  ...k({ XTwYsJHeV: { "data-framer-name": `Google` } }, S, I),
                  children: [
                    K() &&
                      s(O, {
                        animated: !0,
                        className: `framer-1bqwns8`,
                        layoutDependency: W,
                        layoutId: `iVoxfYFvu`,
                        style: {
                          "--frkg9v": `var(--token-ad774ffe-642e-4b93-94e2-ddff7b90343a, rgb(1, 148, 33))`,
                        },
                      }),
                    q() &&
                      s(C, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 640,
                          intrinsicWidth: 640,
                          pixelHeight: 640,
                          pixelWidth: 640,
                          src: `https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?width=640&height=640`,
                          srcSet: `https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?scale-down-to=512&width=640&height=640 512w,https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?width=640&height=640 640w`,
                        },
                        className: `framer-12pdhq`,
                        "data-framer-name": `Image`,
                        layoutDependency: W,
                        layoutId: `esdIV6xCj`,
                        ...k(
                          {
                            XTwYsJHeV: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 640,
                                intrinsicWidth: 640,
                                loading: g((f?.y || 0) + (0 + ((f?.height || 20) - 0 - 20) / 2)),
                                pixelHeight: 640,
                                pixelWidth: 640,
                                sizes: `max(${f?.width || `100vw`}, 1px)`,
                                src: `https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?width=640&height=640`,
                                srcSet: `https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?scale-down-to=512&width=640&height=640 512w,https://framerusercontent.com/images/FZmmaU0xjYBGqxCuQchHFQlwEk.png?width=640&height=640 640w`,
                              },
                            },
                          },
                          S,
                          I,
                        ),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-s5TNc.framer-1k4ru0x, .framer-s5TNc .framer-1k4ru0x { display: block; }`,
          `.framer-s5TNc.framer-1qjtxvc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-s5TNc .framer-1bqwns8 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 20px; }`,
          `.framer-s5TNc .framer-12pdhq { aspect-ratio: 1 / 1; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
          `.framer-s5TNc.framer-v-b3tynz.framer-1qjtxvc { width: 20px; }`,
        ],
        `framer-s5TNc`,
      )),
      (B.displayName = `Element/Logo`),
      (B.defaultProps = { height: 20, width: 20 }),
      y(B, {
        variant: {
          options: [`tZzkGwgAz`, `XTwYsJHeV`],
          optionTitles: [`Houzz`, `Google`],
          title: `Variant`,
          type: T.Enum,
        },
      }),
      _(B, [{ explicitInter: !0, fonts: [] }, ...A], { supportsExplicitInterCodegen: !0 }));
  });
export { V as n, B as t };
//# sourceMappingURL=DMpBbyHb7.BNvAhe-t.mjs.map
