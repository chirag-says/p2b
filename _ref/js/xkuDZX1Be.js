import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  I as r,
  L as i,
  M as a,
  N as o,
  T as s,
  b as c,
  l,
  s as u,
  u as d,
  v as f,
  y as p,
} from "./react.CV_3rBxD.mjs";
import { C as m, P as h, a as g, f as _, r as v, t as y } from "./motion.CdSRWwto.mjs";
import {
  Dt as b,
  G as x,
  I as S,
  K as C,
  M as w,
  Mt as T,
  N as E,
  Nt as D,
  Q as O,
  R as k,
  W as A,
  h as j,
  ht as M,
  i as N,
  j as P,
  k as F,
  o as I,
  pt as ee,
  wt as L,
  zt as R,
} from "./framer.B0qnvVVY.mjs";
import { a as z, i as te, o as ne, r as re } from "./shared-lib.Cj7Z24jQ.mjs";
import { i as B, r as V } from "./jB0eAZmvy.ylPqY2bS.mjs";
import { i as ie, n as ae, r as oe, t as se } from "./WuP7CDxyd.DnZAHNor.mjs";
function H(e) {
  let {
      startValue: r,
      endValue: a,
      duration: s,
      delay: c,
      decimals: l,
      prefix: u,
      suffix: f,
      easing: m,
      font: g,
      color: v,
      style: y,
    } = e,
    [b, x] = i(r),
    [S, C] = i(!1),
    w = t(null),
    T = h(w, { once: !0 }),
    E = o(() => {
      let e = (e) => {
        let t = e.toString(),
          n = t.indexOf(`.`);
        return n === -1 ? 0 : t.length - n - 1;
      };
      return Math.max(e(r), e(a));
    }, [r, a]);
  (n(() => {
    if (T && !S) {
      let e,
        t = setTimeout(() => {
          e = _(r, a, {
            duration: s,
            ease: ce[m],
            onUpdate: (e) => {
              p(() => {
                x(e);
              });
            },
            onComplete: () => {
              p(() => {
                C(!0);
              });
            },
          });
        }, c * 1e3);
      return () => {
        (clearTimeout(t), e && e.stop());
      };
    }
  }, [T, S, r, a, s, c, m]),
    n(() => {
      p(() => {
        (C(!1), x(r));
      });
    }, [r, a, s, c, m, l]));
  let D = b.toFixed(l > 0 ? l : E);
  return d(`div`, {
    ref: w,
    style: {
      ...y,
      position: `relative`,
      width: `max-content`,
      minWidth: `max-content`,
      color: v,
      ...g,
    },
    children: [u, D, f],
  });
}
var ce,
  le = e(() => {
    (u(),
      s(),
      O(),
      y(),
      (ce = {
        linear: [0, 0, 1, 1],
        easeIn: [0.42, 0, 1, 1],
        easeOut: [0, 0, 0.58, 1],
        easeInOut: [0.42, 0, 0.58, 1],
      }),
      E(H, {
        startValue: { type: I.Number, title: `Start Value`, defaultValue: 0, step: 0.1 },
        endValue: { type: I.Number, title: `End Value`, defaultValue: 100, step: 0.1 },
        duration: {
          type: I.Number,
          title: `Duration`,
          defaultValue: 2,
          min: 0.1,
          max: 10,
          step: 0.1,
          unit: `s`,
        },
        delay: {
          type: I.Number,
          title: `Delay`,
          defaultValue: 0,
          min: 0,
          max: 5,
          step: 0.1,
          unit: `s`,
        },
        decimals: {
          type: I.Number,
          title: `Decimals`,
          defaultValue: 1,
          min: 0,
          max: 4,
          step: 1,
          displayStepper: !0,
        },
        prefix: { type: I.String, title: `Prefix`, defaultValue: ``, placeholder: `$` },
        suffix: { type: I.String, title: `Suffix`, defaultValue: ``, placeholder: `%` },
        easing: {
          type: I.Enum,
          title: `Easing`,
          options: [`linear`, `easeIn`, `easeOut`, `easeInOut`],
          optionTitles: [`Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
          defaultValue: `easeOut`,
          displaySegmentedControl: !0,
        },
        font: {
          type: I.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `40px`,
            variant: `Bold`,
            letterSpacing: `-0.04em`,
            lineHeight: `1em`,
          },
        },
        color: { type: I.Color, title: `Color`, defaultValue: `#000000` },
      }));
  }),
  U,
  ue,
  de,
  W,
  fe = e(() => {
    (u(),
      O(),
      s(),
      (U = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 14.073 1.734 L 16.185 5.992 C 16.473 6.585 17.241 7.154 17.889 7.262 L 21.716 7.904 C 24.164 8.315 24.74 10.106 22.976 11.871 L 20 14.871 C 19.496 15.379 19.22 16.358 19.376 17.062 L 20.228 20.775 C 20.9 23.715 19.352 24.852 16.772 23.316 L 13.184 21.174 C 12.536 20.787 11.468 20.787 10.808 21.174 L 7.222 23.316 C 4.654 24.852 3.094 23.702 3.766 20.775 L 4.618 17.062 C 4.774 16.36 4.498 15.379 3.994 14.872 L 1.018 11.872 C -0.733 10.104 -0.169 8.314 2.278 7.902 L 6.106 7.261 C 6.742 7.153 7.51 6.584 7.798 5.991 L 9.91 1.732 C 11.062 -0.577 12.934 -0.577 14.074 1.732 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="24px" id="CYAKGCwRX" transform="translate(2 2)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ue = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(m.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (de = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (W = D(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = de(e);
          return l(ue, {
            ...s,
            className: S(`framer-4zAy8`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-4zAy8 { -webkit-mask: ${U}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${U}; width: 28px; }`,
        ],
        `framer-4zAy8`,
      )),
      (W.displayName = `Star`),
      E(W, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  });
function pe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  G,
  we = e(() => {
    (u(),
      O(),
      y(),
      s(),
      fe(),
      (me = A(W)),
      (he = [
        `ngqOzl9KA`,
        `Id5I_Z46H`,
        `HyI7kEg1Z`,
        `VL3BvS4aD`,
        `q7aILQvSC`,
        `B5sz7za7x`,
        `aFqRxe8RZ`,
      ]),
      (ge = `framer-5ryRk`),
      (_e = {
        aFqRxe8RZ: `framer-v-e5pcwc`,
        B5sz7za7x: `framer-v-it1ii5`,
        HyI7kEg1Z: `framer-v-1wy7na1`,
        Id5I_Z46H: `framer-v-wdlxgg`,
        ngqOzl9KA: `framer-v-1r1mbgz`,
        q7aILQvSC: `framer-v-hapabe`,
        VL3BvS4aD: `framer-v-7snkvy`,
      }),
      (ve = { duration: 0, type: `tween` }),
      (ye = ({ value: e, children: t }) => {
        let n = a(g),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(g.Provider, { value: i, children: t });
      }),
      (be = {
        "Variant 1": `ngqOzl9KA`,
        "Variant 2": `Id5I_Z46H`,
        "Variant 3": `HyI7kEg1Z`,
        "Variant 4": `VL3BvS4aD`,
        "Variant 5": `q7aILQvSC`,
        "Variant 6": `B5sz7za7x`,
        Mobile: `aFqRxe8RZ`,
      }),
      (xe = m.create(r)),
      (Se = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: be[r.variant] ?? r.variant ?? `ngqOzl9KA`,
      })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = c(),
            { activeLocale: o, setLocale: s } = L();
          M();
          let { style: u, className: f, layoutId: p, variant: h, ...g } = Se(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = T({
              cycleOrder: he,
              defaultVariant: `ngqOzl9KA`,
              ref: i,
              variant: h,
              variantClassNames: _e,
            }),
            A = Ce(e, k),
            { activeVariantCallback: j, delay: N } = ee(_),
            P = j(async (...e) => {
              await N(() => O(`HyI7kEg1Z`, !0), 100);
            }),
            F = j(async (...e) => {
              await N(() => O(`VL3BvS4aD`, !0), 100);
            }),
            I = j(async (...e) => {
              await N(() => O(`q7aILQvSC`, !0), 100);
            });
          b(_, {
            HyI7kEg1Z: F,
            Id5I_Z46H: P,
            q7aILQvSC: j(async (...e) => {
              await N(() => O(`B5sz7za7x`, !0), 100);
            }),
            VL3BvS4aD: I,
          });
          let R = S(ge);
          return l(v, {
            id: p ?? a,
            children: l(xe, {
              animate: k,
              initial: !1,
              children: l(ye, {
                value: ve,
                children: d(m.div, {
                  ...g,
                  ...C,
                  className: S(R, `framer-1r1mbgz`, f, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `ngqOzl9KA`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                    borderBottomLeftRadius: 90,
                    borderBottomRightRadius: 90,
                    borderTopLeftRadius: 90,
                    borderTopRightRadius: 90,
                    ...u,
                  },
                  ...pe(
                    {
                      aFqRxe8RZ: { "data-framer-name": `Mobile` },
                      B5sz7za7x: { "data-framer-name": `Variant 6` },
                      HyI7kEg1Z: { "data-framer-name": `Variant 3`, "data-highlight": !0 },
                      Id5I_Z46H: { "data-framer-name": `Variant 2`, "data-highlight": !0 },
                      q7aILQvSC: { "data-framer-name": `Variant 5`, "data-highlight": !0 },
                      VL3BvS4aD: { "data-framer-name": `Variant 4`, "data-highlight": !0 },
                    },
                    _,
                    w,
                  ),
                  children: [
                    l(W, {
                      animated: !0,
                      className: `framer-ou5yc4`,
                      layoutDependency: A,
                      layoutId: `CVzsxLWSL`,
                      style: {
                        "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                      },
                      variants: {
                        aFqRxe8RZ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        B5sz7za7x: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        HyI7kEg1Z: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        Id5I_Z46H: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        q7aILQvSC: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        VL3BvS4aD: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                      },
                    }),
                    l(W, {
                      animated: !0,
                      className: `framer-i5iokg`,
                      layoutDependency: A,
                      layoutId: `ABIExqz3u`,
                      style: {
                        "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                      },
                      variants: {
                        aFqRxe8RZ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        B5sz7za7x: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        HyI7kEg1Z: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        q7aILQvSC: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        VL3BvS4aD: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                      },
                    }),
                    l(W, {
                      animated: !0,
                      className: `framer-1iscz5t`,
                      layoutDependency: A,
                      layoutId: `XtL2YHjun`,
                      style: {
                        "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                      },
                      variants: {
                        aFqRxe8RZ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        B5sz7za7x: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        q7aILQvSC: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        VL3BvS4aD: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                      },
                    }),
                    l(W, {
                      animated: !0,
                      className: `framer-1nt7x1c`,
                      layoutDependency: A,
                      layoutId: `aou1kwNzg`,
                      style: {
                        "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                      },
                      variants: {
                        aFqRxe8RZ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        B5sz7za7x: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        q7aILQvSC: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                      },
                    }),
                    l(W, {
                      animated: !0,
                      className: `framer-z4n2r9`,
                      layoutDependency: A,
                      layoutId: `SSKSzXaKT`,
                      style: {
                        "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                      },
                      variants: {
                        aFqRxe8RZ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                        B5sz7za7x: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 196, 78))`,
                        },
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-5ryRk.framer-zry0qt, .framer-5ryRk .framer-zry0qt { display: block; }`,
          `.framer-5ryRk.framer-1r1mbgz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-5ryRk .framer-ou5yc4, .framer-5ryRk .framer-i5iokg, .framer-5ryRk .framer-1iscz5t, .framer-5ryRk .framer-1nt7x1c, .framer-5ryRk .framer-z4n2r9 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 13px); position: relative; width: 13px; }`,
          `.framer-5ryRk.framer-v-e5pcwc.framer-1r1mbgz { padding: 8px 12px 8px 12px; }`,
          `.framer-5ryRk.framer-v-e5pcwc .framer-ou5yc4, .framer-5ryRk.framer-v-e5pcwc .framer-i5iokg, .framer-5ryRk.framer-v-e5pcwc .framer-1iscz5t, .framer-5ryRk.framer-v-e5pcwc .framer-1nt7x1c, .framer-5ryRk.framer-v-e5pcwc .framer-z4n2r9 { height: var(--framer-aspect-ratio-supported, 11px); width: 11px; }`,
        ],
        `framer-5ryRk`,
      )),
      (G.displayName = `Animation/Reviews`),
      (G.defaultProps = { height: 29, width: 113 }),
      E(G, {
        variant: {
          options: [
            `ngqOzl9KA`,
            `Id5I_Z46H`,
            `HyI7kEg1Z`,
            `VL3BvS4aD`,
            `q7aILQvSC`,
            `B5sz7za7x`,
            `aFqRxe8RZ`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
            `Variant 6`,
            `Mobile`,
          ],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      w(G, [{ explicitInter: !0, fonts: [] }, ...me], { supportsExplicitInterCodegen: !0 }));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  q,
  J,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Y,
  Re = e(() => {
    (u(),
      O(),
      y(),
      s(),
      le(),
      B(),
      we(),
      (Te = A(H)),
      (Ee = A(G)),
      (De = R(G)),
      (Oe = A(V)),
      (ke = [`OroVfDFF_`, `v9G8O2m8h`, `nbFgblftT`, `pH51CpShC`, `WyqHt0Yph`, `O9W5owcah`]),
      (Ae = `framer-0TpM8`),
      (je = {
        nbFgblftT: `framer-v-ong1gh`,
        O9W5owcah: `framer-v-178oqp6`,
        OroVfDFF_: `framer-v-xn28h5`,
        pH51CpShC: `framer-v-ngm6lp`,
        v9G8O2m8h: `framer-v-70ow13`,
        WyqHt0Yph: `framer-v-s0dlqo`,
      }),
      (Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (J = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ne = ({ value: e, children: t }) => {
        let n = a(g),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(g.Provider, { value: i, children: t });
      }),
      (Pe = {
        "Desktop 2": `WyqHt0Yph`,
        "Houzz 2": `O9W5owcah`,
        "Mobile Houzz": `pH51CpShC`,
        Desktop: `OroVfDFF_`,
        Houzz: `nbFgblftT`,
        Mobile: `v9G8O2m8h`,
      }),
      (Fe = m.create(r)),
      (Ie = ({ height: e, id: t, image: n, number: r, width: i, ...a }) => ({
        ...a,
        brPkqv4KZ: r ?? a.brPkqv4KZ ?? 40.5,
        GwaYPI2hB: n ??
          a.GwaYPI2hB ?? {
            alt: ``,
            pixelHeight: 30,
            pixelWidth: 91,
            src: `https://framerusercontent.com/images/eIhbrImS1t7WGCuHuVRxT2RoqKs.png?width=91&height=30`,
          },
        variant: Pe[a.variant] ?? a.variant ?? `OroVfDFF_`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = D(
        f(function (e, n) {
          let i = t(null),
            a = n ?? i,
            o = c(),
            { activeLocale: s, setLocale: u } = L(),
            f = M(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              brPkqv4KZ: y,
              GwaYPI2hB: b,
              ...x
            } = Ie(e),
            {
              baseVariant: w,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: I,
              setVariant: ee,
              variants: R,
            } = T({
              cycleOrder: ke,
              defaultVariant: `OroVfDFF_`,
              ref: a,
              variant: _,
              variantClassNames: je,
            }),
            z = Le(e, R),
            te = S(Ae),
            ne = () => ![`WyqHt0Yph`, `O9W5owcah`].includes(w),
            re = () => ![`nbFgblftT`, `pH51CpShC`, `O9W5owcah`].includes(w),
            B = () => !![`nbFgblftT`, `pH51CpShC`, `O9W5owcah`].includes(w);
          return l(v, {
            id: g ?? o,
            children: l(Fe, {
              animate: R,
              initial: !1,
              children: l(Ne, {
                value: Me,
                children: d(m.div, {
                  ...x,
                  ...O,
                  className: S(te, `framer-xn28h5`, h, E),
                  "data-framer-name": `Desktop`,
                  layoutDependency: z,
                  layoutId: `OroVfDFF_`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(246, 245, 250))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...p,
                  },
                  variants: {
                    pH51CpShC: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    v9G8O2m8h: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  },
                  ...K(
                    {
                      nbFgblftT: { "data-framer-name": `Houzz` },
                      O9W5owcah: { "data-framer-name": `Houzz 2` },
                      pH51CpShC: { "data-framer-name": `Mobile Houzz` },
                      v9G8O2m8h: { "data-framer-name": `Mobile` },
                      WyqHt0Yph: { "data-framer-name": `Desktop 2` },
                    },
                    w,
                    k,
                  ),
                  children: [
                    l(N, {
                      children: l(P, {
                        className: `framer-57ni19-container`,
                        "data-code-component-plugin-id": `84d4c1`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: z,
                        layoutId: `RRB8WKfV5-container`,
                        nodeId: `RRB8WKfV5`,
                        rendersWithMotion: !0,
                        scopeId: `nA_QjjE5u`,
                        children: l(H, {
                          color: `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                          decimals: 1,
                          delay: 0,
                          duration: 2,
                          easing: `easeIn`,
                          endValue: y,
                          font: {
                            fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`,
                            fontSize: `48px`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                            letterSpacing: `0em`,
                            lineHeight: `1em`,
                          },
                          height: `100%`,
                          id: `RRB8WKfV5`,
                          layoutId: `RRB8WKfV5`,
                          prefix: ``,
                          startValue: 0,
                          suffix: ``,
                          width: `100%`,
                          ...K(
                            {
                              O9W5owcah: {
                                font: {
                                  fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`,
                                  fontSize: `30px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                              },
                              pH51CpShC: {
                                font: {
                                  fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`,
                                  fontSize: `30px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                              },
                              v9G8O2m8h: {
                                font: {
                                  fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`,
                                  fontSize: `30px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                              },
                              WyqHt0Yph: {
                                font: {
                                  fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`,
                                  fontSize: `30px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                              },
                            },
                            w,
                            k,
                          ),
                        }),
                      }),
                    }),
                    ne() &&
                      l(N, {
                        height: 29,
                        y: (f?.y || 0) + 24 + (((f?.height || 176) - 48 - 280) / 2 + 200 + 10),
                        ...K(
                          {
                            pH51CpShC: {
                              y:
                                (f?.y || 0) + 16 + (((f?.height || 140) - 32 - 280) / 2 + 200 + 10),
                            },
                            v9G8O2m8h: {
                              y:
                                (f?.y || 0) + 16 + (((f?.height || 140) - 32 - 280) / 2 + 200 + 10),
                            },
                          },
                          w,
                          k,
                        ),
                        children: l(P, {
                          className: `framer-4z1rm8-container`,
                          layoutDependency: z,
                          layoutId: `bnq6Lxp9_-container`,
                          nodeId: `bnq6Lxp9_`,
                          rendersWithMotion: !0,
                          scopeId: `nA_QjjE5u`,
                          children: l(De, {
                            __framer__animateOnce: !0,
                            __framer__obscuredVariantId: `ngqOzl9KA`,
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: `Id5I_Z46H`,
                            height: `100%`,
                            id: `bnq6Lxp9_`,
                            layoutId: `bnq6Lxp9_`,
                            variant: q(`ngqOzl9KA`),
                            width: `100%`,
                            ...K(
                              {
                                pH51CpShC: { variant: q(`aFqRxe8RZ`) },
                                v9G8O2m8h: { variant: q(`aFqRxe8RZ`) },
                              },
                              w,
                              k,
                            ),
                          }),
                        }),
                      }),
                    re() &&
                      l(m.div, {
                        className: `framer-14oz5pt`,
                        "data-framer-name": `Image`,
                        layoutDependency: z,
                        layoutId: `fEuWpawGB`,
                        children: l(j, {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            loading: C(
                              (f?.y || 0) +
                                24 +
                                (((f?.height || 176) - 48 - 280) / 2 + 229 + 20) +
                                0,
                            ),
                            pixelHeight: 30,
                            pixelWidth: 91,
                            sizes: `max(${f?.width || `100vw`} - 48px, 1px)`,
                            ...J(b),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-6xflmk`,
                          "data-framer-name": `Home advisor`,
                          layoutDependency: z,
                          layoutId: `hQsm1pbvQ`,
                          ...K(
                            {
                              v9G8O2m8h: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: C(
                                    (f?.y || 0) +
                                      16 +
                                      (((f?.height || 140) - 32 - 280) / 2 + 229 + 20) +
                                      0,
                                  ),
                                  pixelHeight: 30,
                                  pixelWidth: 91,
                                  sizes: `max(${f?.width || `100vw`} - 48px, 1px)`,
                                  ...J(b),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                              WyqHt0Yph: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: C(
                                    (f?.y || 0) +
                                      16 +
                                      (((f?.height || 98) - 32 - 236) / 2 + 200 + 10) +
                                      0,
                                  ),
                                  pixelHeight: 30,
                                  pixelWidth: 91,
                                  sizes: `max(${f?.width || `100vw`} - 48px, 1px)`,
                                  ...J(b),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            w,
                            k,
                          ),
                        }),
                      }),
                    B() &&
                      d(m.div, {
                        className: `framer-7i0qw3`,
                        "data-framer-name": `Logo`,
                        layoutDependency: z,
                        layoutId: `cjMXnWXu7`,
                        children: [
                          l(V, {
                            animated: !0,
                            className: `framer-11eosqw`,
                            layoutDependency: z,
                            layoutId: `o2sJtAF66`,
                            style: {
                              "--frkg9v": `var(--token-ad774ffe-642e-4b93-94e2-ddff7b90343a, rgb(1, 148, 33))`,
                            },
                          }),
                          l(F, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(m.p, {
                                dir: `auto`,
                                style: {
                                  "--framer-font-size": `22px`,
                                  "--framer-line-height": `0.9em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                                },
                                children: `Houzz`,
                              }),
                            }),
                            className: `framer-mxoyds`,
                            fonts: [`Inter`],
                            layoutDependency: z,
                            layoutId: `O7iliaDXa`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...K(
                              {
                                nbFgblftT: {
                                  children: l(r, {
                                    children: l(m.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `19px`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                                      },
                                      children: `Houzz`,
                                    }),
                                  }),
                                },
                                O9W5owcah: {
                                  children: l(r, {
                                    children: l(m.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `21px`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                                      },
                                      children: `Houzz`,
                                    }),
                                  }),
                                },
                                pH51CpShC: {
                                  children: l(r, {
                                    children: l(m.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `17px`,
                                        "--framer-line-height": `0.9em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                                      },
                                      children: `Houzz`,
                                    }),
                                  }),
                                },
                              },
                              w,
                              k,
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-0TpM8.framer-1alct71, .framer-0TpM8 .framer-1alct71 { display: block; }`,
          `.framer-0TpM8.framer-xn28h5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 141px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-0TpM8 .framer-57ni19-container, .framer-0TpM8 .framer-4z1rm8-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-0TpM8 .framer-14oz5pt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
          `.framer-0TpM8 .framer-6xflmk { flex: 1 0 0px; height: 31px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-0TpM8 .framer-7i0qw3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 1.96px; height: 31px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-0TpM8 .framer-11eosqw { aspect-ratio: 0.9666666666666667 / 1; flex: none; height: auto; position: relative; width: 29px; }`,
          `.framer-0TpM8 .framer-mxoyds { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-0TpM8.framer-v-70ow13.framer-xn28h5, .framer-0TpM8.framer-v-ngm6lp.framer-xn28h5, .framer-0TpM8.framer-v-s0dlqo.framer-xn28h5, .framer-0TpM8.framer-v-178oqp6.framer-xn28h5 { padding: 16px 0px 16px 0px; }`,
          `.framer-0TpM8.framer-v-ong1gh .framer-7i0qw3 { padding: 0px 0px 5px 0px; }`,
          `.framer-0TpM8.framer-v-ong1gh .framer-11eosqw { width: 25px; }`,
          `.framer-0TpM8.framer-v-ngm6lp .framer-7i0qw3 { padding: 0px 0px 9px 0px; }`,
          `.framer-0TpM8.framer-v-ngm6lp .framer-11eosqw { width: 18px; }`,
          `.framer-0TpM8.framer-v-s0dlqo .framer-6xflmk { height: 26px; }`,
          `.framer-0TpM8.framer-v-178oqp6 .framer-7i0qw3 { height: min-content; }`,
          `.framer-0TpM8.framer-v-178oqp6 .framer-11eosqw { aspect-ratio: 0.9545454545454546 / 1; width: 25px; }`,
        ],
        `framer-0TpM8`,
      )),
      (Y.displayName = `Card/Testimonial stats`),
      (Y.defaultProps = { height: 176, width: 141 }),
      E(Y, {
        variant: {
          options: [`OroVfDFF_`, `v9G8O2m8h`, `nbFgblftT`, `pH51CpShC`, `WyqHt0Yph`, `O9W5owcah`],
          optionTitles: [`Desktop`, `Mobile`, `Houzz`, `Mobile Houzz`, `Desktop 2`, `Houzz 2`],
          title: `Variant`,
          type: I.Enum,
        },
        brPkqv4KZ: {
          defaultValue: 40.5,
          description: `Click here to edit the stats`,
          step: 0.1,
          title: `Number`,
          type: I.Number,
        },
        onbrPkqv4KZChange: { changes: `brPkqv4KZ`, type: I.ChangeHandler },
        GwaYPI2hB: {
          __defaultAssetReference: `data:framer/asset-reference,eIhbrImS1t7WGCuHuVRxT2RoqKs.png?originalFilename=image.png&width=91&height=30`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,eIhbrImS1t7WGCuHuVRxT2RoqKs.png?originalFilename=image.png&width=91&height=30`,
          },
          description: `Click here to edit the image`,
          title: `Image`,
          type: I.ResponsiveImage,
        },
      }),
      w(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Switzer`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/BLNB4FAQFNK56DWWNF7PMGTCOTZHOEII/ST3WKSSDMBK2MIQQO3MAVYWLF4FTOLFV/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2`,
                weight: `400`,
              },
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
          ...Te,
          ...Ee,
          ...Oe,
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(G, {}, t)])) }));
  }),
  X,
  ze,
  Be,
  Z,
  Ve = e(() => {
    (u(),
      O(),
      s(),
      (X = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 133 126" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 134 40.5 L 134 127 L 0 127 Z" fill="var(--1r59l1l, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))" height="127px" id="Cqdv7E0HR" width="134px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ze = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(m.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (Be = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        AIUtHdDww:
          e ?? i.AIUtHdDww ?? `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
      })),
      (Z = D(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, AIUtHdDww: o, ...s } = Be(e);
          return l(ze, {
            ...s,
            className: S(`framer-mPRVA`, r),
            layoutId: i,
            ref: t,
            style: { "--1r59l1l": o, ...n },
          });
        }),
        [
          `.framer-mPRVA { -webkit-mask: ${X}; aspect-ratio: 1.0555555555555556; background-color: var(--1r59l1l); mask: ${X}; width: 133px; }`,
        ],
        `framer-mPRVA`,
      )),
      (Z.displayName = `Houzz`),
      E(Z, {
        AIUtHdDww: {
          defaultValue: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)) /* {"name":"Black color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  });
function He(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Q,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $,
  $e = e(() => {
    (u(),
      O(),
      y(),
      s(),
      ne(),
      ie(),
      B(),
      Ve(),
      (Q = A(V)),
      (Ue = A(Z)),
      (We = [`R5Fp62lNW`, `ScVCa8oxD`]),
      (Ge = `framer-4eyHP`),
      (Ke = { R5Fp62lNW: `framer-v-1x2xa`, ScVCa8oxD: `framer-v-13ihoto` }),
      (qe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Je = ({ value: e, children: t }) => {
        let n = a(g),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(g.Provider, { value: i, children: t });
      }),
      (Ye = { Design: `R5Fp62lNW`, Service: `ScVCa8oxD` }),
      (Xe = m.create(r)),
      (Ze = ({ height: e, id: t, width: n, year: r, ...i }) => ({
        ...i,
        uOWE6Ufbz: r ?? i.uOWE6Ufbz ?? `2025`,
        variant: Ye[i.variant] ?? i.variant ?? `R5Fp62lNW`,
      })),
      (Qe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = D(
        f(function (e, n) {
          let i = t(null),
            a = n ?? i,
            o = c(),
            { activeLocale: s, setLocale: u } = L();
          M();
          let { style: f, className: p, layoutId: h, variant: g, uOWE6Ufbz: _, ...y } = Ze(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = T({
              cycleOrder: We,
              defaultVariant: `R5Fp62lNW`,
              ref: a,
              variant: g,
              variantClassNames: Ke,
            }),
            j = Qe(e, A),
            N = S(Ge, re, se);
          return l(v, {
            id: h ?? o,
            children: l(Xe, {
              animate: A,
              initial: !1,
              children: l(Je, {
                value: qe,
                children: d(m.div, {
                  ...y,
                  ...w,
                  className: S(N, `framer-1x2xa`, p, x),
                  "data-framer-name": `Design`,
                  layoutDependency: j,
                  layoutId: `R5Fp62lNW`,
                  ref: a,
                  style: { ...f },
                  ...He({ ScVCa8oxD: { "data-framer-name": `Service` } }, b, E),
                  children: [
                    d(m.div, {
                      className: `framer-1sx173l`,
                      "data-framer-name": `Tex`,
                      layoutDependency: j,
                      layoutId: `KdBm5CynV`,
                      children: [
                        l(V, {
                          animated: !0,
                          className: `framer-vvp5nf`,
                          layoutDependency: j,
                          layoutId: `XuCs1Iq_T`,
                          style: {
                            "--frkg9v": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                          },
                        }),
                        l(F, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(m.p, {
                              className: `framer-styles-preset-piej36`,
                              "data-styles-preset": `kzFJG5mqZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                              },
                              children: `2025`,
                            }),
                          }),
                          className: `framer-1wsu74o`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `xIB76UaQt`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `bottom`,
                          withExternalLayout: !0,
                        }),
                        l(F, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(m.p, {
                              className: `framer-styles-preset-1w3vw8y`,
                              "data-styles-preset": `WuP7CDxyd`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                              },
                              children: `Best of Houzz Design`,
                            }),
                          }),
                          className: `framer-1cq0crh`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `BOy7CPHVF`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...He(
                            {
                              ScVCa8oxD: {
                                children: l(r, {
                                  children: l(m.p, {
                                    className: `framer-styles-preset-1w3vw8y`,
                                    "data-styles-preset": `WuP7CDxyd`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                    },
                                    children: `Best of Houzz Service`,
                                  }),
                                }),
                              },
                            },
                            b,
                            E,
                          ),
                        }),
                      ],
                    }),
                    l(Z, {
                      animated: !0,
                      className: `framer-165n3zu`,
                      layoutDependency: j,
                      layoutId: `bdQEHE8Oc`,
                      style: { "--1r59l1l": `rgb(81, 184, 73)` },
                      variants: { ScVCa8oxD: { "--1r59l1l": `rgb(243, 186, 54)` } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4eyHP.framer-zqo7ew, .framer-4eyHP .framer-zqo7ew { display: block; }`,
          `.framer-4eyHP.framer-1x2xa { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-4eyHP .framer-1sx173l { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; justify-content: flex-end; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 6px; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-4eyHP .framer-vvp5nf { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 14px; }`,
          `.framer-4eyHP .framer-1wsu74o { --framer-text-wrap-override: balance; flex: 1 0 0px; height: 1px; max-height: 30px; position: relative; width: auto; z-index: 2; }`,
          `.framer-4eyHP .framer-1cq0crh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-4eyHP .framer-165n3zu { aspect-ratio: 1.0714285714285714 / 1; flex: none; height: auto; position: relative; width: 105px; z-index: 1; }`,
          ...te,
          ...ae,
        ],
        `framer-4eyHP`,
      )),
      ($.displayName = `Card/Houzz`),
      ($.defaultProps = { height: 98, width: 105 }),
      E($, {
        variant: {
          options: [`R5Fp62lNW`, `ScVCa8oxD`],
          optionTitles: [`Design`, `Service`],
          title: `Variant`,
          type: I.Enum,
        },
        uOWE6Ufbz: {
          defaultValue: `2025`,
          description: `Click here to edit the year`,
          displayTextArea: !1,
          title: `Year`,
          type: I.String,
        },
        onuOWE6UfbzChange: { changes: `uOWE6Ufbz`, type: I.ChangeHandler },
      }),
      w(
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
          ...Q,
          ...Ue,
          ...x(z),
          ...x(oe),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { Re as i, $e as n, Y as r, $ as t };
//# sourceMappingURL=xkuDZX1Be.tC0B3uOh.mjs.map
