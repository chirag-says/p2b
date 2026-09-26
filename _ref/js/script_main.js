import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  F as a,
  H as o,
  I as s,
  L as c,
  M as l,
  N as u,
  P as d,
  T as f,
  V as p,
  _ as ee,
  b as te,
  c as m,
  d as h,
  h as g,
  i as _,
  l as v,
  m as y,
  n as b,
  o as x,
  r as ne,
  s as S,
  t as C,
  u as w,
  v as T,
  y as E,
} from "./react.CV_3rBxD.mjs";
import { C as D, a as O, n as re, r as k, t as A } from "./motion.CdSRWwto.mjs";
import {
  $ as ie,
  A as ae,
  Bt as oe,
  C as se,
  D as ce,
  E as j,
  G as M,
  I as N,
  It as le,
  K as ue,
  Lt as de,
  M as P,
  Mt as fe,
  N as F,
  Nt as I,
  O as L,
  Ot as pe,
  Q as R,
  R as z,
  Rt as me,
  S as he,
  St as ge,
  W as B,
  X as _e,
  Z as ve,
  _ as ye,
  _t as be,
  a as V,
  at as xe,
  bt as Se,
  ct as Ce,
  ft as we,
  g as Te,
  h as Ee,
  ht as De,
  i as H,
  it as Oe,
  j as U,
  jt as ke,
  k as W,
  kt as Ae,
  l as je,
  lt as Me,
  m as Ne,
  n as Pe,
  o as G,
  ot as Fe,
  p as Ie,
  pt as Le,
  q as Re,
  rt as ze,
  st as Be,
  tt as Ve,
  u as He,
  ut as Ue,
  v as We,
  vt as Ge,
  w as Ke,
  wt as qe,
  x as Je,
  y as Ye,
  yt as Xe,
  zt as Ze,
} from "./framer.B0qnvVVY.mjs";
import {
  _ as Qe,
  c as $e,
  g as et,
  h as tt,
  i as nt,
  n as rt,
  o as it,
  r as at,
  t as ot,
} from "./Video.U_4p6n4p.mjs";
import { n as st, t as ct } from "./bkgrGppuB.12ljnmEr.mjs";
import {
  a as lt,
  c as ut,
  d as dt,
  f as ft,
  g as pt,
  h as mt,
  i as ht,
  l as gt,
  m as _t,
  n as vt,
  o as yt,
  p as bt,
  r as xt,
  s as St,
  t as Ct,
  u as wt,
} from "./VvmuhjOg3.CnhC2qnN.mjs";
import { a as Tt, i as Et, o as Dt, r as Ot } from "./shared-lib.Cj7Z24jQ.mjs";
import { n as kt, t as At } from "./LMC_cBw2g.D70d3_Gp.mjs";
import { i as jt, n as Mt, r as Nt, t as Pt } from "./hMoFYBqBy.K_wxjvR_.mjs";
import { n as Ft, t as It } from "./FollowEyes.DwcgK6ML.mjs";
import { i as Lt, n as Rt, r as zt, t as Bt } from "./V9OZ6_mnD.BxSVB-QQ.mjs";
import { i as Vt, n as Ht, r as Ut, t as Wt } from "./WtX7HRPZM.D8xtSTXa.mjs";
import { i as Gt, n as Kt, r as qt, t as Jt } from "./FQBtVWcCo.CBF2cXz1.mjs";
import { n as Yt, t as Xt } from "./t9D5PO_Pi.BbW8k6cw.mjs";
function Zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn = e(() => {
    (S(),
      R(),
      A(),
      f(),
      (Qt = { tWBa3DzrD: { hover: !0 } }),
      ($t = `framer-X1YKj`),
      (en = { tWBa3DzrD: `framer-v-1pn6038` }),
      (tn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nn = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (rn = D.create(s)),
      (an = ({ click: e, height: t, id: n, templateLink: r, title: i, width: a, ...o }) => ({
        ...o,
        GbZZNyHa4: r ?? o.GbZZNyHa4,
        GYAAYk3Wb: i ?? o.GYAAYk3Wb ?? `Get Template`,
        ITWW9HKEm: e ?? o.ITWW9HKEm,
      })),
      (on = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (sn = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              GbZZNyHa4: p,
              GYAAYk3Wb: ee,
              ITWW9HKEm: m,
              ...h
            } = an(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ne,
              setGestureState: S,
              setVariant: C,
              variants: T,
            } = fe({
              defaultVariant: `tWBa3DzrD`,
              enabledGestures: Qt,
              ref: i,
              variant: f,
              variantClassNames: en,
            }),
            E = on(e, T),
            { activeVariantCallback: O, delay: re } = Le(g),
            A = O(async (...e) => {
              if ((S({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            ie = N($t);
          return v(k, {
            id: d ?? a,
            children: v(rn, {
              animate: T,
              initial: !1,
              children: v(nn, {
                value: tn,
                children: v(D.div, {
                  ...h,
                  ...b,
                  className: N(ie, `framer-1pn6038`, u, _),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `tWBa3DzrD`,
                  onTap: A,
                  ref: i,
                  style: { ...l },
                  ...Zt({ "tWBa3DzrD-hover": { "data-framer-name": void 0 } }, g, x),
                  children: v(D.div, {
                    className: `framer-z6cv7z`,
                    layoutDependency: E,
                    layoutId: `hj4NIpHKM`,
                    children: v(Ye, {
                      href: p,
                      motionChild: !0,
                      nodeId: `tXEHyxZGJ`,
                      openInNewTab: !0,
                      scopeId: `xMawDKzjQ`,
                      children: w(D.a, {
                        className: `framer-10iaua4 framer-1hih7hh`,
                        "data-framer-name": `Framer CTA`,
                        layoutDependency: E,
                        layoutId: `tXEHyxZGJ`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `0px 0.48174984141951427px 1.252549587690737px -1.25px rgba(0, 0, 0, 0.29), 0px 1.8308266425947657px 4.760149270746391px -2.5px rgba(0, 0, 0, 0.25), 0px 8px 20.8px -3.75px rgba(0, 0, 0, 0.1)`,
                          scale: 1,
                        },
                        variants: { "tWBa3DzrD-hover": { scale: 1.1 } },
                        children: [
                          w(ae, {
                            className: `framer-n59npa`,
                            layoutDependency: E,
                            layoutId: `e1dCL56NY`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 1.406 9.438 L 0.469 9.438 C 0.21 9.438 0 9.647 0 9.906 L 0 15.531 C 0 15.79 0.21 16 0.469 16 L 1.406 16 C 1.666 16 1.875 15.79 1.875 15.531 L 1.875 9.906 C 1.875 9.647 1.666 9.438 1.406 9.438 Z M 8.001 0 C 6.708 0 5.626 1.083 5.626 2.375 C 5.626 3.667 6.708 4.75 8.001 4.75 C 9.293 4.75 10.376 3.667 10.376 2.375 C 10.376 1.083 9.293 0 8.001 0 Z M 4.688 4.75 C 3.654 4.75 2.813 5.591 2.813 6.625 C 2.813 7.659 3.654 8.5 4.688 8.5 C 5.722 8.5 6.563 7.659 6.563 6.625 C 6.563 5.591 5.722 4.75 4.688 4.75 Z M 11.314 4.75 C 10.279 4.75 9.438 5.591 9.438 6.625 C 9.438 7.659 10.279 8.5 11.314 8.5 C 12.348 8.5 13.189 7.659 13.189 6.625 C 13.189 5.591 12.348 4.75 11.314 4.75 Z M 15.617 9.616 C 15.233 9.334 14.698 9.391 14.38 9.737 L 11.848 12.887 C 11.67 13.075 11.332 13.187 11.154 13.187 L 7.063 13.187 C 6.891 13.187 6.717 13.237 6.612 13.382 C 6.46 13.591 6.168 13.637 5.957 13.487 C 5.748 13.335 5.701 13.042 5.852 12.832 C 6.107 12.479 6.542 12.25 7.063 12.25 L 10.845 12.25 C 11.361 12.25 11.782 11.828 11.782 11.312 C 11.782 10.797 11.361 10.375 10.845 10.375 L 7.42 10.375 C 7.186 10.375 7.038 10.227 6.854 10.066 C 6.104 9.39 5.001 9.077 3.861 9.382 C 3.43 9.497 3.109 9.656 2.813 9.859 L 2.813 16 L 10.845 16 C 11.726 16 12.57 15.578 13.095 14.875 L 15.814 10.937 C 16.124 10.525 16.039 9.925 15.617 9.616 Z" fill="rgb(0,0,0)"></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              v(ae, {
                                className: `framer-1n2mnyt`,
                                layoutDependency: E,
                                layoutId: `mQtafXBP_`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.875 6.563" overflow="visible"><path d="M 1.406 0 L 0.469 0 C 0.21 0 0 0.21 0 0.469 L 0 6.094 C 0 6.353 0.21 6.563 0.469 6.563 L 1.406 6.563 C 1.666 6.563 1.875 6.353 1.875 6.094 L 1.875 0.469 C 1.875 0.21 1.666 0 1.406 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              v(ae, {
                                className: `framer-atqit6`,
                                layoutDependency: E,
                                layoutId: `YPRn0OB87`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.75 4.75" overflow="visible"><path d="M 2.375 0 C 1.083 0 0 1.083 0 2.375 C 0 3.667 1.083 4.75 2.375 4.75 C 3.668 4.75 4.75 3.667 4.75 2.375 C 4.75 1.083 3.668 0 2.375 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              v(ae, {
                                className: `framer-uvuphw`,
                                layoutDependency: E,
                                layoutId: `kh2qv_BtB`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.75 3.75" overflow="visible"><path d="M 1.875 0 C 0.841 0 0 0.841 0 1.875 C 0 2.909 0.841 3.75 1.875 3.75 C 2.909 3.75 3.75 2.909 3.75 1.875 C 3.75 0.841 2.909 0 1.875 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              v(ae, {
                                className: `framer-79assk`,
                                layoutDependency: E,
                                layoutId: `RNiZp2_R0`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.75 3.75" overflow="visible"><path d="M 1.875 0 C 0.841 0 0 0.841 0 1.875 C 0 2.909 0.841 3.75 1.875 3.75 C 2.909 3.75 3.75 2.909 3.75 1.875 C 3.75 0.841 2.909 0 1.875 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              v(ae, {
                                className: `framer-q3ofip`,
                                layoutDependency: E,
                                layoutId: `EHy2dI7_K`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.187 6.735" overflow="visible"><path d="M 12.804 0.351 C 12.42 0.069 11.886 0.126 11.567 0.473 L 9.035 3.623 C 8.857 3.81 8.52 3.923 8.342 3.923 L 4.25 3.923 C 4.078 3.923 3.904 3.972 3.799 4.117 C 3.647 4.326 3.355 4.373 3.145 4.222 C 2.935 4.07 2.888 3.777 3.039 3.567 C 3.294 3.214 3.73 2.985 4.25 2.985 L 8.032 2.985 C 8.548 2.985 8.97 2.563 8.97 2.048 C 8.97 1.532 8.548 1.11 8.032 1.11 L 4.607 1.11 C 4.373 1.11 4.225 0.962 4.041 0.801 C 3.291 0.126 2.188 -0.188 1.049 0.117 C 0.617 0.232 0.296 0.392 0 0.594 L 0 6.735 L 8.032 6.735 C 8.913 6.735 9.757 6.313 10.282 5.61 L 13.001 1.673 C 13.311 1.26 13.226 0.66 12.804 0.351 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(D.div, {
                            className: `framer-gqmctm`,
                            layoutDependency: E,
                            layoutId: `XpmlO2poB`,
                            children: v(W, {
                              __fromCanvasComponent: !0,
                              children: v(s, {
                                children: v(D.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7SW50ZXItNzAw`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.4px`,
                                    "--framer-line-height": `1.75em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(35, 31, 32))`,
                                  },
                                  children: `Get Template`,
                                }),
                              }),
                              className: `framer-7e2hvc`,
                              fonts: [`GF;Inter-700`],
                              layoutDependency: E,
                              layoutId: `ukNho9bAJ`,
                              style: {
                                "--extracted-r6o4lv": `rgb(35, 31, 32)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: ee,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-X1YKj.framer-1hih7hh, .framer-X1YKj .framer-1hih7hh { display: block; }`,
          `.framer-X1YKj.framer-1pn6038 { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-X1YKj .framer-z6cv7z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-X1YKj .framer-10iaua4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 12px 8px 12px; position: relative; text-decoration: none; width: 128px; will-change: var(--framer-will-change-override, transform); z-index: 4; }`,
          `.framer-X1YKj .framer-n59npa { height: 16px; position: relative; width: 16px; }`,
          `.framer-X1YKj .framer-1n2mnyt { height: 7px; left: 0px; position: absolute; top: 10px; width: 2px; }`,
          `.framer-X1YKj .framer-atqit6 { height: 5px; left: 6px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-X1YKj .framer-uvuphw { height: 4px; left: 3px; position: absolute; top: 5px; width: 4px; }`,
          `.framer-X1YKj .framer-79assk { height: 4px; left: 10px; position: absolute; top: 5px; width: 4px; }`,
          `.framer-X1YKj .framer-q3ofip { height: 7px; left: 3px; position: absolute; top: 10px; width: 13px; }`,
          `.framer-X1YKj .framer-gqmctm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-X1YKj .framer-7e2hvc { flex: none; height: 23px; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-X1YKj`,
      )),
      (sn.displayName = `Bonus`),
      (sn.defaultProps = { height: 39, width: 128 }),
      F(sn, {
        GbZZNyHa4: { title: `Template Link`, type: G.Link },
        GYAAYk3Wb: {
          defaultValue: `Get Template`,
          displayTextArea: !1,
          title: `Title`,
          type: G.String,
        },
        onGYAAYk3WbChange: { changes: `GYAAYk3Wb`, type: G.ChangeHandler },
        ITWW9HKEm: { title: `Click`, type: G.EventHandler },
      }),
      P(
        sn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Inter`,
                url: `https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function ln(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  K,
  bn = e(() => {
    (S(),
      R(),
      A(),
      f(),
      kt(),
      (un = { HHQCythJv: { hover: !0 }, wlgGlFexY: { hover: !0 } }),
      (dn = [`wlgGlFexY`, `HHQCythJv`]),
      (fn = `framer-G20vo`),
      (pn = { HHQCythJv: `framer-v-1gctfq9`, wlgGlFexY: `framer-v-ja0dx9` }),
      (mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hn = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (gn = { "Variant 2": `HHQCythJv`, Social: `wlgGlFexY` }),
      (_n = D.create(s)),
      (vn = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        Bbjt654Fw: t ?? a.Bbjt654Fw ?? At,
        OGqAkslJm: r ?? a.OGqAkslJm,
        variant: gn[a.variant] ?? a.variant ?? `wlgGlFexY`,
      })),
      (yn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: s } = qe();
          De();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Bbjt654Fw: f,
              OGqAkslJm: p,
              ...ee
            } = vn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: ne,
              variants: S,
            } = fe({
              cycleOrder: dn,
              defaultVariant: `wlgGlFexY`,
              enabledGestures: un,
              ref: i,
              variant: d,
              variantClassNames: pn,
            }),
            C = yn(e, S),
            w = N(fn);
          return v(k, {
            id: u ?? a,
            children: v(_n, {
              animate: S,
              initial: !1,
              children: v(hn, {
                value: mn,
                children: v(Ye, {
                  href: p,
                  motionChild: !0,
                  nodeId: `wlgGlFexY`,
                  openInNewTab: !1,
                  scopeId: `DQ7CqR7dq`,
                  children: v(D.a, {
                    ...ee,
                    ..._,
                    className: `${N(w, `framer-ja0dx9`, l, h)} framer-1ln72lm`,
                    "data-framer-name": `Social`,
                    layoutDependency: C,
                    layoutId: `wlgGlFexY`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...c,
                    },
                    variants: {
                      "wlgGlFexY-hover": {
                        backgroundColor: `var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, rgb(247, 241, 236))`,
                      },
                      HHQCythJv: {
                        backgroundColor: `var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, rgb(247, 241, 236))`,
                      },
                    },
                    ...ln(
                      {
                        "HHQCythJv-hover": { "data-framer-name": void 0 },
                        "wlgGlFexY-hover": { "data-framer-name": void 0 },
                        HHQCythJv: { "data-framer-name": `Variant 2` },
                      },
                      m,
                      y,
                    ),
                    children: v(ye, {
                      animated: !0,
                      className: `framer-1ywey2z`,
                      Component: f,
                      layoutDependency: C,
                      layoutId: `Msz4XAV2r`,
                      style: {
                        "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                      },
                      variants: {
                        "HHQCythJv-hover": {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                        "wlgGlFexY-hover": {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10))`,
                        },
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-G20vo.framer-1ln72lm, .framer-G20vo .framer-1ln72lm { display: block; }`,
          `.framer-G20vo.framer-ja0dx9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-G20vo .framer-1ywey2z { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
        ],
        `framer-G20vo`,
      )),
      (K.displayName = `Buttor/Social button`),
      (K.defaultProps = { height: 32, width: 32 }),
      F(K, {
        variant: {
          options: [`wlgGlFexY`, `HHQCythJv`],
          optionTitles: [`Social`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        Bbjt654Fw: {
          defaultValue: {
            identifier: `local-module:vector/LMC_cBw2g:default`,
            moduleId: `6Z9j5ynFSDTTyk9Fu8yV`,
          },
          description: `Click here to edit the icon`,
          setModuleId: `qLY5Hs5Bqh7gMV9JK1rH`,
          title: `Icon`,
          type: G.VectorSetItem,
        },
        OGqAkslJm: { description: `Click her to edit the link`, title: `Link`, type: G.Link },
      }),
      P(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  xn,
  Sn,
  Cn,
  wn,
  Tn = e(() => {
    (S(),
      R(),
      f(),
      (xn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 11.708 10.293 L 1.708 0.293 C 1.317 -0.098 0.684 -0.098 0.293 0.293 C -0.098 0.684 -0.098 1.317 0.293 1.708 L 9.587 11.001 L 0.293 20.293 C -0.098 20.684 -0.098 21.317 0.293 21.708 C 0.684 22.099 1.317 22.099 1.708 21.708 L 11.708 11.708 C 11.896 11.52 12.001 11.266 12.001 11.001 C 12.001 10.735 11.896 10.481 11.708 10.293 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="22.00111219075793px" id="viXi9aeq0" transform="translate(8 6) rotate(90 6.001 11.001)" width="12.001342751794754px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Sn = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Cn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (wn = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Cn(e);
          return v(Sn, {
            ...s,
            className: N(`framer-22cEE`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-22cEE { -webkit-mask: ${xn}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${xn}; width: 28px; }`,
        ],
        `framer-22cEE`,
      )),
      (wn.displayName = `Down`),
      F(wn, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function En(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  q,
  Rn = e(() => {
    (S(),
      R(),
      A(),
      f(),
      jt(),
      Tn(),
      (Dn = B(wn)),
      (On = { QZxFvUYYk: { hover: !0, pressed: !0 } }),
      (kn = [`QZxFvUYYk`, `LbaWpHbOf`, `t9YRY29l1`, `jTsgAmxyw`, `bWoCD1hz2`]),
      (An = `framer-4UmDj`),
      (jn = {
        bWoCD1hz2: `framer-v-1w4oxl4`,
        jTsgAmxyw: `framer-v-1ql9dx4`,
        LbaWpHbOf: `framer-v-c6eut5`,
        QZxFvUYYk: `framer-v-ownn60`,
        t9YRY29l1: `framer-v-1x9ys5m`,
      }),
      (Mn = { delay: 0, duration: 0.5, ease: [0.93, 0.21, 0.42, 0.97], type: `tween` }),
      (Nn = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Pn = {
        "Mobile Active": `jTsgAmxyw`,
        Active: `t9YRY29l1`,
        Default: `QZxFvUYYk`,
        Mobile: `LbaWpHbOf`,
        Option: `bWoCD1hz2`,
      }),
      (Fn = D.create(s)),
      (In = ({
        click: e,
        height: t,
        hover: n,
        id: r,
        label: i,
        link: a,
        textColor: o,
        width: s,
        ...c
      }) => ({
        ...c,
        oaf08984H: n ?? c.oaf08984H,
        s5ccoHERM: i ?? c.s5ccoHERM ?? `Get started`,
        skkjAsEq6:
          o ??
          c.skkjAsEq6 ??
          `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
        variant: Pn[c.variant] ?? c.variant ?? `QZxFvUYYk`,
        xCTgTOKeE: a ?? c.xCTgTOKeE,
        zTPS3AxGz: e ?? c.zTPS3AxGz,
      })),
      (Ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              s5ccoHERM: p,
              xCTgTOKeE: ee,
              zTPS3AxGz: m,
              oaf08984H: h,
              skkjAsEq6: g,
              ..._
            } = In(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: ne,
              gestureVariant: S,
              isLoading: C,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = fe({
              cycleOrder: kn,
              defaultVariant: `QZxFvUYYk`,
              enabledGestures: On,
              ref: i,
              variant: f,
              variantClassNames: jn,
            }),
            re = Ln(e, O),
            { activeVariantCallback: A, delay: ie } = Le(y),
            ae = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            oe = A(async (...e) => {
              if ((T({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            se = N(An, Pt),
            ce = () => y === `bWoCD1hz2`;
          return v(k, {
            id: d ?? a,
            children: v(Fn, {
              animate: O,
              initial: !1,
              children: v(Nn, {
                value: Mn,
                children: v(Ye, {
                  href: ee,
                  motionChild: !0,
                  nodeId: `QZxFvUYYk`,
                  openInNewTab: !1,
                  scopeId: `V4TTUVnYT`,
                  smoothScroll: !0,
                  ...En({ bWoCD1hz2: { href: void 0 } }, y, S),
                  children: w(D.a, {
                    ..._,
                    ...ne,
                    className: `${N(se, `framer-ownn60`, u, b)} framer-q1wref`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: re,
                    layoutId: `QZxFvUYYk`,
                    onMouseEnter: oe,
                    onTap: ae,
                    ref: i,
                    style: { ...l },
                    ...En(
                      {
                        "QZxFvUYYk-hover": { "data-framer-name": void 0 },
                        "QZxFvUYYk-pressed": { "data-framer-name": void 0 },
                        bWoCD1hz2: { "data-framer-name": `Option` },
                        jTsgAmxyw: { "data-framer-name": `Mobile Active` },
                        LbaWpHbOf: { "data-framer-name": `Mobile` },
                        t9YRY29l1: { "data-framer-name": `Active` },
                      },
                      y,
                      S,
                    ),
                    children: [
                      v(W, {
                        __fromCanvasComponent: !0,
                        children: v(s, {
                          children: v(D.h3, {
                            className: `framer-styles-preset-1pr57h3`,
                            "data-styles-preset": `hMoFYBqBy`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-skkjAsEq6-V4TTUVnYT))`,
                            },
                            children: `Get started`,
                          }),
                        }),
                        className: `framer-rsqsgm`,
                        fonts: [`Inter`],
                        layoutDependency: re,
                        layoutId: `Rtd8UIePL`,
                        style: {
                          "--extracted-a0htzi": `var(--variable-reference-skkjAsEq6-V4TTUVnYT)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-skkjAsEq6-V4TTUVnYT": g,
                        },
                        text: p,
                        variants: {
                          "QZxFvUYYk-hover": {
                            "--extracted-a0htzi": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                          },
                          "QZxFvUYYk-pressed": {
                            "--extracted-a0htzi": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                          },
                          jTsgAmxyw: {
                            "--extracted-a0htzi": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                          },
                          t9YRY29l1: {
                            "--extracted-a0htzi": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...En(
                          {
                            "QZxFvUYYk-hover": {
                              children: v(s, {
                                children: v(D.h3, {
                                  className: `framer-styles-preset-1pr57h3`,
                                  "data-styles-preset": `hMoFYBqBy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161)))`,
                                  },
                                  children: `Get started`,
                                }),
                              }),
                            },
                            "QZxFvUYYk-pressed": {
                              children: v(s, {
                                children: v(D.h3, {
                                  className: `framer-styles-preset-1pr57h3`,
                                  "data-styles-preset": `hMoFYBqBy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161)))`,
                                  },
                                  children: `Get started`,
                                }),
                              }),
                            },
                            jTsgAmxyw: {
                              children: v(s, {
                                children: v(D.h3, {
                                  className: `framer-styles-preset-1pr57h3`,
                                  "data-styles-preset": `hMoFYBqBy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161)))`,
                                  },
                                  children: `Get started`,
                                }),
                              }),
                            },
                            t9YRY29l1: {
                              children: v(s, {
                                children: v(D.h3, {
                                  className: `framer-styles-preset-1pr57h3`,
                                  "data-styles-preset": `hMoFYBqBy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161)))`,
                                  },
                                  children: `Get started`,
                                }),
                              }),
                            },
                          },
                          y,
                          S,
                        ),
                      }),
                      ce() &&
                        v(wn, {
                          animated: !0,
                          className: `framer-ny24p0`,
                          layoutDependency: re,
                          layoutId: `jxmiC0JV_`,
                          style: {
                            "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                          },
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4UmDj.framer-q1wref, .framer-4UmDj .framer-q1wref { display: block; }`,
          `.framer-4UmDj.framer-ownn60 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-4UmDj .framer-rsqsgm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-4UmDj .framer-ny24p0 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 11px; }`,
          `.framer-4UmDj.framer-v-c6eut5.framer-ownn60, .framer-4UmDj.framer-v-1ql9dx4.framer-ownn60 { justify-content: flex-start; }`,
          `.framer-4UmDj.framer-v-1w4oxl4.framer-ownn60 { gap: 4px; }`,
          ...Mt,
        ],
        `framer-4UmDj`,
      )),
      (q.displayName = `Nav button`),
      (q.defaultProps = { height: 56, width: 184 }),
      F(q, {
        variant: {
          options: [`QZxFvUYYk`, `LbaWpHbOf`, `t9YRY29l1`, `jTsgAmxyw`, `bWoCD1hz2`],
          optionTitles: [`Default`, `Mobile`, `Active`, `Mobile Active`, `Option`],
          title: `Variant`,
          type: G.Enum,
        },
        s5ccoHERM: {
          defaultValue: `Get started`,
          description: `Click here to edit the label`,
          displayTextArea: !1,
          title: `Label`,
          type: G.String,
        },
        ons5ccoHERMChange: { changes: `s5ccoHERM`, type: G.ChangeHandler },
        xCTgTOKeE: { description: `Click here to edit the link`, title: `Link`, type: G.Link },
        zTPS3AxGz: { title: `Click`, type: G.EventHandler },
        oaf08984H: { title: `Hover`, type: G.EventHandler },
        skkjAsEq6: {
          defaultValue: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          title: `Text Color`,
          type: G.Color,
        },
      }),
      P(
        q,
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
          ...Dn,
          ...M(Nt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function zn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur = e(() => {
    (S(),
      R(),
      A(),
      f(),
      rt(),
      ct(),
      pt(),
      Dt(),
      ft(),
      wt(),
      ut(),
      yt(),
      ht(),
      bn(),
      Rn(),
      (Bn = B(q)),
      (Vn = B(K)),
      (Hn = de(le(D.div))),
      (Un = B(ot)),
      (Wn = Re(ot)),
      (Gn = [`lhWIfPWaC`, `LsM0IyO1X`, `nrlEk0fqY`, `OtqOTMXv5`]),
      (Kn = `framer-4wUDf`),
      (qn = {
        lhWIfPWaC: `framer-v-19ddog0`,
        LsM0IyO1X: `framer-v-quxe1u`,
        nrlEk0fqY: `framer-v-gen3hh`,
        OtqOTMXv5: `framer-v-qfedzu`,
      }),
      (Jn = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Yn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Xn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 42, delay: 0.1, mass: 1, stiffness: 320, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Zn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Qn = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase().includes(t.toLowerCase())
          : Array.isArray(e) && typeof t == `string`
            ? e.includes(t)
            : !1),
      ($n = (e, t) => (e ? `t9YRY29l1` : `QZxFvUYYk`)),
      (er = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (tr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (nr = () => ({
        from: { alias: `iMT4FQatr`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `iMT4FQatr`, name: `FltxoTYZ4`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `RUwLgWJjp`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `Ewgt93kHl`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `hEUN7gPgu`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `dxPK0x7bI`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `ZodLwUri0`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `IDbedOwaL`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `QaUURzFAy`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `F7IsTolAT`, type: `Identifier` },
          { collection: `iMT4FQatr`, name: `id`, type: `Identifier` },
        ],
      })),
      (rr = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (ir = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (ar = {
        "Desktop Closed": `lhWIfPWaC`,
        "Desktop Opened": `LsM0IyO1X`,
        "Phone Closed": `nrlEk0fqY`,
        "Phone Open": `OtqOTMXv5`,
      }),
      (or = D.create(s)),
      (sr = ({
        about: e,
        active: t,
        blog: n,
        contact: r,
        darkLogo: i,
        height: a,
        id: o,
        lightLogo: s,
        projects: c,
        testimonial: l,
        video: u,
        width: d,
        ...f
      }) => ({
        ...f,
        BXBT9GBuu: r ?? f.BXBT9GBuu ?? !0,
        EaxxfVIId: n ?? f.EaxxfVIId ?? !0,
        ge3D4KFru: i ??
          f.ge3D4KFru ?? {
            alt: ``,
            pixelHeight: 135,
            pixelWidth: 591,
            src: `https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?width=591&height=135`,
            srcSet: `https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?scale-down-to=512&width=591&height=135 512w,https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?width=591&height=135 591w`,
          },
        GL1cDhAUK: s ?? f.GL1cDhAUK,
        h9HxmICCr: l ?? f.h9HxmICCr ?? !0,
        lrEV4_zrs:
          u ?? f.lrEV4_zrs ?? `https://framerusercontent.com/assets/6WpUlqTWj1VFA4RNQ9snLmJxk.mp4`,
        Ti8qX1st0: t ?? f.Ti8qX1st0 ?? `Home`,
        variant: ar[f.variant] ?? f.variant ?? `lhWIfPWaC`,
        vAxDqh1VE: c ?? f.vAxDqh1VE ?? !0,
        YKFPsh9N8: e ?? f.YKFPsh9N8 ?? !0,
      })),
      (cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (lr = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe(),
            l = De(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              ge3D4KFru: ee,
              GL1cDhAUK: h,
              Ti8qX1st0: g,
              BXBT9GBuu: _,
              EaxxfVIId: y,
              h9HxmICCr: b,
              vAxDqh1VE: x,
              YKFPsh9N8: ne,
              lrEV4_zrs: S,
              ...C
            } = sr(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: re,
              gestureVariant: A,
              isLoading: ie,
              setGestureState: ae,
              setVariant: oe,
              variants: ce,
            } = fe({
              cycleOrder: Gn,
              defaultVariant: `lhWIfPWaC`,
              ref: i,
              variant: p,
              variantClassNames: qn,
            }),
            j = cr(e, ce),
            { activeVariantCallback: M, delay: le } = Le(T),
            de = M(async (...e) => {
              oe(`LsM0IyO1X`);
            }),
            P = M(async (...e) => {
              oe(`lhWIfPWaC`);
            }),
            F = M(async (...e) => {
              oe(`OtqOTMXv5`);
            }),
            I = M(async (...e) => {
              oe(`nrlEk0fqY`);
            }),
            pe = M(async (...e) => {
              oe(`lhWIfPWaC`);
            }),
            R = M(async (...e) => {
              oe(`nrlEk0fqY`);
            }),
            z = N(Kn, Ot, bt),
            me = () => !![`LsM0IyO1X`, `OtqOTMXv5`].includes(T);
          ke();
          let he = (e) => T !== `LsM0IyO1X` || e,
            ge = () => ![`LsM0IyO1X`, `OtqOTMXv5`].includes(T),
            B = () => T !== `OtqOTMXv5`;
          return v(k, {
            id: f ?? a,
            children: v(or, {
              animate: ce,
              initial: !1,
              children: v(ir, {
                value: Jn,
                children: v(D.div, {
                  ...C,
                  ...re,
                  className: N(z, `framer-19ddog0`, d, E),
                  "data-framer-name": `Desktop Closed`,
                  layoutDependency: j,
                  layoutId: `lhWIfPWaC`,
                  ref: i,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...u },
                  variants: {
                    LsM0IyO1X: {
                      backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                    },
                    nrlEk0fqY: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    OtqOTMXv5: {
                      backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                    },
                  },
                  ...zn(
                    {
                      LsM0IyO1X: { "data-framer-name": `Desktop Opened` },
                      nrlEk0fqY: { "data-framer-name": `Phone Closed` },
                      OtqOTMXv5: { "data-framer-name": `Phone Open` },
                    },
                    T,
                    A,
                  ),
                  children: w(D.div, {
                    className: `framer-evvopr`,
                    "data-framer-name": `Container`,
                    layoutDependency: j,
                    layoutId: `WCycaTr3a`,
                    children: [
                      w(D.div, {
                        className: `framer-vj7ewy`,
                        "data-framer-name": `Logo & nav bar`,
                        layoutDependency: j,
                        layoutId: `zaOJZOcP5`,
                        children: [
                          v(D.div, {
                            className: `framer-cdb05x`,
                            "data-framer-name": `Logo`,
                            layoutDependency: j,
                            layoutId: `AJwZHIGis`,
                            children: v(Ye, {
                              href: { webPageId: `hqVRjOHKR` },
                              motionChild: !0,
                              nodeId: `TaL8bbbDW`,
                              openInNewTab: !1,
                              scopeId: `o08Om3QuV`,
                              children: v(Ee, {
                                as: `a`,
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: ue((l?.y || 0) + 0 + 0 + 0 + 0 + 8 + 0),
                                  pixelHeight: 135,
                                  pixelWidth: 591,
                                  sizes: `181px`,
                                  ...Yn(ee),
                                  positionX: `left`,
                                  positionY: `center`,
                                },
                                className: `framer-rbovaf framer-1bl1oel`,
                                "data-framer-name": `Logo`,
                                layoutDependency: j,
                                layoutId: `TaL8bbbDW`,
                                ...zn(
                                  {
                                    LsM0IyO1X: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        loading: ue((l?.y || 0) + 0 + 0 + 0 + 0 + 13.5 + 0),
                                        sizes: `181px`,
                                        ...Yn(h),
                                        positionX: `left`,
                                        positionY: `center`,
                                      },
                                    },
                                  },
                                  T,
                                  A,
                                ),
                              }),
                            }),
                          }),
                          w(D.div, {
                            className: `framer-14c1xyr`,
                            "data-framer-name": `Menu`,
                            "data-highlight": !0,
                            layoutDependency: j,
                            layoutId: `UIwvPu7KL`,
                            onTap: de,
                            style: {
                              backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                              borderBottomLeftRadius: 90,
                              borderBottomRightRadius: 90,
                              borderTopLeftRadius: 90,
                              borderTopRightRadius: 90,
                            },
                            ...zn(
                              {
                                LsM0IyO1X: { onTap: P },
                                nrlEk0fqY: { onTap: F },
                                OtqOTMXv5: { onTap: I },
                              },
                              T,
                              A,
                            ),
                            children: [
                              v(D.div, {
                                className: `framer-1vhen5f`,
                                "data-framer-name": `Top`,
                                layoutDependency: j,
                                layoutId: `fTCH6Hxoc`,
                                style: {
                                  backgroundColor: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  LsM0IyO1X: { rotate: 45 },
                                  nrlEk0fqY: { rotate: 0 },
                                  OtqOTMXv5: { rotate: 45 },
                                },
                              }),
                              v(D.div, {
                                className: `framer-4j77lr`,
                                "data-framer-name": `Bottom`,
                                layoutDependency: j,
                                layoutId: `t9dtNh3u5`,
                                style: {
                                  backgroundColor: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  LsM0IyO1X: { rotate: -45 },
                                  nrlEk0fqY: { rotate: 0 },
                                  OtqOTMXv5: { rotate: -45 },
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      me() &&
                        w(D.div, {
                          className: `framer-1tm4zfo`,
                          "data-framer-name": `Innercontainer`,
                          layoutDependency: j,
                          layoutId: `bmIqphGN1`,
                          children: [
                            w(Hn, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Xn,
                              className: `framer-13nixqx`,
                              "data-framer-appear-id": `13nixqx`,
                              "data-framer-name": `Buttons`,
                              initial: Zn,
                              layoutDependency: j,
                              layoutId: `XgMLly_Ej`,
                              optimized: !0,
                              style: {
                                backgroundColor: `var(--token-db4e5ff5-4a7d-444b-8ac2-306bcfa0f4b0, rgb(245, 245, 245))`,
                              },
                              variants: {
                                LsM0IyO1X: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                OtqOTMXv5: { backgroundColor: `rgba(0, 0, 0, 0)` },
                              },
                              children: [
                                w(D.div, {
                                  className: `framer-1oy1oeh`,
                                  "data-framer-name": `Menu`,
                                  layoutDependency: j,
                                  layoutId: `WTfP8BrnN`,
                                  children: [
                                    v(L, {
                                      links: [
                                        {
                                          href: { webPageId: `hqVRjOHKR` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `hqVRjOHKR` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `hqVRjOHKR` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        v(H, {
                                          height: 56,
                                          ...zn(
                                            {
                                              LsM0IyO1X: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  61 +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  340,
                                              },
                                              OtqOTMXv5: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  70 +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            T,
                                            A,
                                          ),
                                          children: v(U, {
                                            className: `framer-1relzn3-container`,
                                            "data-framer-name": `Home`,
                                            layoutDependency: j,
                                            layoutId: `mJOmvcZa2-container`,
                                            name: `Home`,
                                            nodeId: `mJOmvcZa2`,
                                            rendersWithMotion: !0,
                                            scopeId: `o08Om3QuV`,
                                            children: v(q, {
                                              height: `100%`,
                                              id: `mJOmvcZa2`,
                                              layoutId: `mJOmvcZa2`,
                                              name: `Home`,
                                              s5ccoHERM: `Home`,
                                              skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                              variant: er($n(Qn(g, `Home`), o)),
                                              width: `100%`,
                                              xCTgTOKeE: e[0],
                                              ...zn(
                                                {
                                                  LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                  OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                },
                                                T,
                                                A,
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    he(ne !== !1) &&
                                      v(L, {
                                        links: [
                                          {
                                            href: { webPageId: `ogNU5sAlu` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ogNU5sAlu` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ogNU5sAlu` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          v(H, {
                                            height: 56,
                                            ...zn(
                                              {
                                                LsM0IyO1X: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    61 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    408,
                                                },
                                                OtqOTMXv5: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    70 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    68,
                                                },
                                              },
                                              T,
                                              A,
                                            ),
                                            children: v(U, {
                                              className: `framer-jp5awx-container`,
                                              "data-framer-name": `About`,
                                              layoutDependency: j,
                                              layoutId: `j137DagWP-container`,
                                              name: `About`,
                                              nodeId: `j137DagWP`,
                                              rendersWithMotion: !0,
                                              scopeId: `o08Om3QuV`,
                                              children: v(q, {
                                                height: `100%`,
                                                id: `j137DagWP`,
                                                layoutId: `j137DagWP`,
                                                name: `About`,
                                                s5ccoHERM: `About`,
                                                skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                variant: er($n(Qn(g, `About`), o)),
                                                width: `100%`,
                                                xCTgTOKeE: e[0],
                                                ...zn(
                                                  {
                                                    LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                    OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                  },
                                                  T,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    he(x !== !1) &&
                                      v(L, {
                                        links: [
                                          {
                                            href: { webPageId: `j7jTRdbSt` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `j7jTRdbSt` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `j7jTRdbSt` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          v(H, {
                                            height: 56,
                                            ...zn(
                                              {
                                                LsM0IyO1X: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    61 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    408,
                                                },
                                                OtqOTMXv5: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    70 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    136,
                                                },
                                              },
                                              T,
                                              A,
                                            ),
                                            children: v(U, {
                                              className: `framer-x8vnwz-container`,
                                              "data-framer-name": `Projects`,
                                              layoutDependency: j,
                                              layoutId: `UpgZuCZux-container`,
                                              name: `Projects`,
                                              nodeId: `UpgZuCZux`,
                                              rendersWithMotion: !0,
                                              scopeId: `o08Om3QuV`,
                                              children: v(q, {
                                                height: `100%`,
                                                id: `UpgZuCZux`,
                                                layoutId: `UpgZuCZux`,
                                                name: `Projects`,
                                                s5ccoHERM: `Projects`,
                                                skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                variant: er($n(Qn(g, `Projects`), o)),
                                                width: `100%`,
                                                xCTgTOKeE: e[0],
                                                ...zn(
                                                  {
                                                    LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                    OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                  },
                                                  T,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    he(b !== !1) &&
                                      v(L, {
                                        links: [
                                          {
                                            href: { webPageId: `sFxkNL7jY` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `sFxkNL7jY` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `sFxkNL7jY` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          v(H, {
                                            height: 56,
                                            ...zn(
                                              {
                                                LsM0IyO1X: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    61 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    408,
                                                },
                                                OtqOTMXv5: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    70 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    204,
                                                },
                                              },
                                              T,
                                              A,
                                            ),
                                            children: v(U, {
                                              className: `framer-44xcdw-container`,
                                              "data-framer-name": `Testimonial`,
                                              layoutDependency: j,
                                              layoutId: `h9pod5fMy-container`,
                                              name: `Testimonial`,
                                              nodeId: `h9pod5fMy`,
                                              rendersWithMotion: !0,
                                              scopeId: `o08Om3QuV`,
                                              children: v(q, {
                                                height: `100%`,
                                                id: `h9pod5fMy`,
                                                layoutId: `h9pod5fMy`,
                                                name: `Testimonial`,
                                                s5ccoHERM: `Testimonial`,
                                                skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                variant: er($n(Qn(g, `Testimonial`), o)),
                                                width: `100%`,
                                                xCTgTOKeE: e[0],
                                                ...zn(
                                                  {
                                                    LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                    OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                  },
                                                  T,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    he(y !== !1) &&
                                      v(L, {
                                        links: [
                                          {
                                            href: { webPageId: `ImqR0HMAr` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ImqR0HMAr` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ImqR0HMAr` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          v(H, {
                                            height: 56,
                                            ...zn(
                                              {
                                                LsM0IyO1X: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    61 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    408,
                                                },
                                                OtqOTMXv5: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    70 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    272,
                                                },
                                              },
                                              T,
                                              A,
                                            ),
                                            children: v(U, {
                                              className: `framer-ifhkcf-container`,
                                              "data-framer-name": `Blog`,
                                              layoutDependency: j,
                                              layoutId: `De9mlHrdr-container`,
                                              name: `Blog`,
                                              nodeId: `De9mlHrdr`,
                                              rendersWithMotion: !0,
                                              scopeId: `o08Om3QuV`,
                                              children: v(q, {
                                                height: `100%`,
                                                id: `De9mlHrdr`,
                                                layoutId: `De9mlHrdr`,
                                                name: `Blog`,
                                                s5ccoHERM: `Blog`,
                                                skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                variant: er($n(Qn(g, `Blog`), o)),
                                                width: `100%`,
                                                xCTgTOKeE: e[0],
                                                ...zn(
                                                  {
                                                    LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                    OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                  },
                                                  T,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    he(_ !== !1) &&
                                      v(L, {
                                        links: [
                                          {
                                            href: { webPageId: `mpzwOKiYs` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `mpzwOKiYs` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `mpzwOKiYs` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          v(H, {
                                            height: 56,
                                            ...zn(
                                              {
                                                LsM0IyO1X: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    61 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    408,
                                                },
                                                OtqOTMXv5: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    70 +
                                                    24 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    340,
                                                },
                                              },
                                              T,
                                              A,
                                            ),
                                            children: v(U, {
                                              className: `framer-1w51ger-container`,
                                              "data-framer-name": `Contact`,
                                              layoutDependency: j,
                                              layoutId: `MQHmxe3M1-container`,
                                              name: `Contact`,
                                              nodeId: `MQHmxe3M1`,
                                              rendersWithMotion: !0,
                                              scopeId: `o08Om3QuV`,
                                              children: v(q, {
                                                height: `100%`,
                                                id: `MQHmxe3M1`,
                                                layoutId: `MQHmxe3M1`,
                                                name: `Contact`,
                                                s5ccoHERM: `Contact`,
                                                skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                variant: er($n(Qn(g, `Contact`), o)),
                                                width: `100%`,
                                                xCTgTOKeE: e[0],
                                                ...zn(
                                                  {
                                                    LsM0IyO1X: { xCTgTOKeE: e[1], zTPS3AxGz: pe },
                                                    OtqOTMXv5: { xCTgTOKeE: e[2], zTPS3AxGz: R },
                                                  },
                                                  T,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                  ],
                                }),
                                v(D.div, {
                                  className: `framer-1i66xqd`,
                                  layoutDependency: j,
                                  layoutId: `iMT4FQatr`,
                                  children: v(Pe, {
                                    children: v(rr, {
                                      query: nr(),
                                      children: (e, t, n) =>
                                        v(m, {
                                          children: e?.map(
                                            (
                                              {
                                                DNLONDBp6: e,
                                                dxPK0x7bI: t,
                                                Ewgt93kHl: n,
                                                F7IsTolAT: r,
                                                FltxoTYZ4: i,
                                                hEUN7gPgu: a,
                                                id: o,
                                                IDbedOwaL: c,
                                                QaUURzFAy: l,
                                                RUwLgWJjp: u,
                                                ZodLwUri0: d,
                                              },
                                              f,
                                            ) => {
                                              ((i ??= ``),
                                                (e ??= ``),
                                                (u ??= ``),
                                                (n ??= ``),
                                                (a ??= ``),
                                                (t ??= ``),
                                                (d ??= ``),
                                                (c ??= ``),
                                                (l ??= ``),
                                                (r ??= ``));
                                              let p = tr(i),
                                                ee = tr(u),
                                                te = tr(n),
                                                m = tr(a),
                                                h = tr(t);
                                              return v(
                                                k,
                                                {
                                                  id: `iMT4FQatr-${o}`,
                                                  children: v(se.Provider, {
                                                    value: { DNLONDBp6: e },
                                                    children: v(D.div, {
                                                      className: `framer-1osfqmb`,
                                                      "data-framer-name": `Pages`,
                                                      layoutDependency: j,
                                                      layoutId: `K0EhWTWmQ`,
                                                      children: w(D.div, {
                                                        className: `framer-1j1rbiw`,
                                                        "data-framer-name": `Pages`,
                                                        layoutDependency: j,
                                                        layoutId: `kVV3biYdo`,
                                                        children: [
                                                          ge() &&
                                                            w(D.div, {
                                                              className: `framer-sdb6fi`,
                                                              "data-framer-name": `Social`,
                                                              layoutDependency: j,
                                                              layoutId: `mkYISJOhi`,
                                                              children: [
                                                                p !== !1 &&
                                                                  v(L, {
                                                                    links: [
                                                                      {
                                                                        href: i,
                                                                        implicitPathVariables: {
                                                                          DNLONDBp6: e,
                                                                        },
                                                                      },
                                                                    ],
                                                                    children: (e) =>
                                                                      v(H, {
                                                                        height: 32,
                                                                        children: v(U, {
                                                                          className: `framer-xggfnj-container`,
                                                                          layoutDependency: j,
                                                                          layoutId: `RVzDZpw3k-container`,
                                                                          nodeId: `RVzDZpw3k`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `o08Om3QuV`,
                                                                          children: v(K, {
                                                                            Bbjt654Fw: gt,
                                                                            height: `100%`,
                                                                            id: `RVzDZpw3k`,
                                                                            layoutId: `RVzDZpw3k`,
                                                                            OGqAkslJm: e[0],
                                                                            variant:
                                                                              er(`wlgGlFexY`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                ee !== !1 &&
                                                                  v(L, {
                                                                    links: [
                                                                      {
                                                                        href: u,
                                                                        implicitPathVariables: {
                                                                          DNLONDBp6: e,
                                                                        },
                                                                      },
                                                                    ],
                                                                    children: (e) =>
                                                                      v(H, {
                                                                        height: 32,
                                                                        children: v(U, {
                                                                          className: `framer-12ttvae-container`,
                                                                          layoutDependency: j,
                                                                          layoutId: `C6MhsOzYg-container`,
                                                                          nodeId: `C6MhsOzYg`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `o08Om3QuV`,
                                                                          children: v(K, {
                                                                            Bbjt654Fw: xt,
                                                                            height: `100%`,
                                                                            id: `C6MhsOzYg`,
                                                                            layoutId: `C6MhsOzYg`,
                                                                            OGqAkslJm: e[0],
                                                                            variant:
                                                                              er(`wlgGlFexY`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                te !== !1 &&
                                                                  v(L, {
                                                                    links: [
                                                                      {
                                                                        href: n,
                                                                        implicitPathVariables: {
                                                                          DNLONDBp6: e,
                                                                        },
                                                                      },
                                                                    ],
                                                                    children: (e) =>
                                                                      v(H, {
                                                                        height: 32,
                                                                        children: v(U, {
                                                                          className: `framer-jf1cdh-container`,
                                                                          layoutDependency: j,
                                                                          layoutId: `XUErFU2Bt-container`,
                                                                          nodeId: `XUErFU2Bt`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `o08Om3QuV`,
                                                                          children: v(K, {
                                                                            Bbjt654Fw: lt,
                                                                            height: `100%`,
                                                                            id: `XUErFU2Bt`,
                                                                            layoutId: `XUErFU2Bt`,
                                                                            OGqAkslJm: e[0],
                                                                            variant:
                                                                              er(`wlgGlFexY`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                m !== !1 &&
                                                                  v(L, {
                                                                    links: [
                                                                      {
                                                                        href: a,
                                                                        implicitPathVariables: {
                                                                          DNLONDBp6: e,
                                                                        },
                                                                      },
                                                                    ],
                                                                    children: (e) =>
                                                                      v(H, {
                                                                        height: 32,
                                                                        children: v(U, {
                                                                          className: `framer-1x1jfrr-container`,
                                                                          layoutDependency: j,
                                                                          layoutId: `seoEMyAak-container`,
                                                                          nodeId: `seoEMyAak`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `o08Om3QuV`,
                                                                          children: v(K, {
                                                                            Bbjt654Fw: St,
                                                                            height: `100%`,
                                                                            id: `seoEMyAak`,
                                                                            layoutId: `seoEMyAak`,
                                                                            OGqAkslJm: e[0],
                                                                            variant:
                                                                              er(`wlgGlFexY`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                h !== !1 &&
                                                                  v(L, {
                                                                    links: [
                                                                      {
                                                                        href: t,
                                                                        implicitPathVariables: {
                                                                          DNLONDBp6: e,
                                                                        },
                                                                      },
                                                                    ],
                                                                    children: (e) =>
                                                                      v(H, {
                                                                        height: 32,
                                                                        children: v(U, {
                                                                          className: `framer-rjgxtl-container`,
                                                                          layoutDependency: j,
                                                                          layoutId: `nZEeKutBm-container`,
                                                                          nodeId: `nZEeKutBm`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `o08Om3QuV`,
                                                                          children: v(K, {
                                                                            Bbjt654Fw: dt,
                                                                            height: `100%`,
                                                                            id: `nZEeKutBm`,
                                                                            layoutId: `nZEeKutBm`,
                                                                            OGqAkslJm: e[0],
                                                                            variant:
                                                                              er(`wlgGlFexY`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                              ],
                                                            }),
                                                          v(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: v(s, {
                                                              children: v(D.p, {
                                                                className: `framer-styles-preset-piej36`,
                                                                "data-styles-preset": `kzFJG5mqZ`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                                },
                                                                children: v(Ye, {
                                                                  href: d,
                                                                  motionChild: !0,
                                                                  nodeId: `mslQDvRis`,
                                                                  openInNewTab: !0,
                                                                  relValues: [],
                                                                  scopeId: `o08Om3QuV`,
                                                                  smoothScroll: !1,
                                                                  children: v(D.a, {
                                                                    className: `framer-styles-preset-fsrzda`,
                                                                    "data-styles-preset": `AS4PcgcTr`,
                                                                    children: `william@remodel.com`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                            className: `framer-ib8ns5`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: j,
                                                            layoutId: `mslQDvRis`,
                                                            style: {
                                                              "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                                              opacity: 0.8,
                                                            },
                                                            text: c,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          v(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: v(s, {
                                                              children: v(D.p, {
                                                                className: `framer-styles-preset-piej36`,
                                                                "data-styles-preset": `kzFJG5mqZ`,
                                                                dir: `auto`,
                                                                children: v(Ye, {
                                                                  href: l,
                                                                  motionChild: !0,
                                                                  nodeId: `yUyJrVQVc`,
                                                                  openInNewTab: !0,
                                                                  relValues: [],
                                                                  scopeId: `o08Om3QuV`,
                                                                  smoothScroll: !1,
                                                                  children: v(D.a, {
                                                                    className: `framer-styles-preset-fsrzda`,
                                                                    "data-styles-preset": `AS4PcgcTr`,
                                                                    children: `+001 234 567 890`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                            className: `framer-1njceu3`,
                                                            fonts: [`Inter`],
                                                            layoutDependency: j,
                                                            layoutId: `yUyJrVQVc`,
                                                            style: { opacity: 0.8 },
                                                            text: r,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                o,
                                              );
                                            },
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            B() &&
                              v(H, {
                                children: v(U, {
                                  className: `framer-17653u0-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: j,
                                  layoutId: `mJflBJ5yh-container`,
                                  nodeId: `mJflBJ5yh`,
                                  rendersWithMotion: !0,
                                  scopeId: `o08Om3QuV`,
                                  children: v(ot, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 24,
                                    bottomLeftRadius: 24,
                                    bottomRightRadius: 24,
                                    controls: !1,
                                    height: `100%`,
                                    id: `mJflBJ5yh`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `mJflBJ5yh`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `cover`,
                                    playing: !0,
                                    posterEnabled: !0,
                                    srcFile: S,
                                    srcType: `Upload`,
                                    srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                    startTime: 0,
                                    style: { height: `100%`, width: `100%` },
                                    topLeftRadius: 24,
                                    topRightRadius: 24,
                                    volume: 25,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4wUDf.framer-1bl1oel, .framer-4wUDf .framer-1bl1oel { display: block; }`,
          `.framer-4wUDf.framer-19ddog0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1240px; }`,
          `.framer-4wUDf .framer-evvopr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-4wUDf .framer-vj7ewy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 8px 32px 8px 32px; position: relative; width: 100%; }`,
          `.framer-4wUDf .framer-cdb05x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-4wUDf .framer-rbovaf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 54px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 181px; }`,
          `.framer-4wUDf .framer-14c1xyr { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 45px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 45px; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-4wUDf .framer-1vhen5f, .framer-4wUDf .framer-4j77lr { flex: none; height: 2px; overflow: hidden; position: relative; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-4wUDf .framer-1tm4zfo { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: 1px; justify-content: center; overflow: visible; padding: 24px 32px 32px 32px; position: relative; width: 100%; }`,
          `.framer-4wUDf .framer-13nixqx { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 450px; overflow: var(--overflow-clip-fallback, clip); padding: 32px; position: relative; width: 1px; }`,
          `.framer-4wUDf .framer-1oy1oeh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 10; }`,
          `.framer-4wUDf .framer-1relzn3-container, .framer-4wUDf .framer-jp5awx-container, .framer-4wUDf .framer-x8vnwz-container, .framer-4wUDf .framer-44xcdw-container, .framer-4wUDf .framer-ifhkcf-container, .framer-4wUDf .framer-1w51ger-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
          `.framer-4wUDf .framer-1i66xqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 396px; }`,
          `.framer-4wUDf .framer-1osfqmb { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-4wUDf .framer-1j1rbiw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-4wUDf .framer-sdb6fi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; max-width: 250px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-4wUDf .framer-xggfnj-container, .framer-4wUDf .framer-12ttvae-container, .framer-4wUDf .framer-jf1cdh-container, .framer-4wUDf .framer-1x1jfrr-container, .framer-4wUDf .framer-rjgxtl-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4wUDf .framer-ib8ns5, .framer-4wUDf .framer-1njceu3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4wUDf .framer-17653u0-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-evvopr, .framer-4wUDf.framer-v-qfedzu .framer-evvopr { height: calc(var(--framer-viewport-height, 100vh) * 1); }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-rbovaf { height: 34px; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-14c1xyr, .framer-4wUDf.framer-v-qfedzu .framer-14c1xyr { display: block; padding: unset; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-1vhen5f { left: calc(51.11111111111113% - 16px / 2); position: absolute; top: 22px; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-4j77lr { bottom: 21px; left: calc(51.11111111111113% - 16px / 2); position: absolute; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-13nixqx { order: 1; padding: 0px 32px 0px 32px; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-1oy1oeh, .framer-4wUDf.framer-v-quxe1u .framer-1relzn3-container, .framer-4wUDf.framer-v-quxe1u .framer-ib8ns5, .framer-4wUDf.framer-v-quxe1u .framer-17653u0-container { order: 0; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-jp5awx-container, .framer-4wUDf.framer-v-quxe1u .framer-1i66xqd, .framer-4wUDf.framer-v-quxe1u .framer-1njceu3 { order: 1; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-x8vnwz-container { order: 2; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-44xcdw-container { order: 3; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-ifhkcf-container { order: 4; }`,
          `.framer-4wUDf.framer-v-quxe1u .framer-1w51ger-container { order: 5; }`,
          `.framer-4wUDf.framer-v-gen3hh.framer-19ddog0, .framer-4wUDf.framer-v-qfedzu.framer-19ddog0 { width: 490px; }`,
          `.framer-4wUDf.framer-v-gen3hh .framer-vj7ewy, .framer-4wUDf.framer-v-qfedzu .framer-vj7ewy { padding: 8px 16px 8px 16px; }`,
          `.framer-4wUDf.framer-v-qfedzu .framer-1vhen5f { left: calc(51.11111111111113% - 16px / 2); position: absolute; top: 23px; }`,
          `.framer-4wUDf.framer-v-qfedzu .framer-4j77lr { bottom: 20px; left: calc(51.11111111111113% - 16px / 2); position: absolute; }`,
          `.framer-4wUDf.framer-v-qfedzu .framer-1tm4zfo { flex-direction: column; justify-content: flex-start; padding: 24px 16px 32px 16px; }`,
          `.framer-4wUDf.framer-v-qfedzu .framer-13nixqx { height: 1px; max-width: unset; padding: 0px 0px 32px 0px; width: 100%; }`,
          `.framer-4wUDf.framer-v-qfedzu .framer-1i66xqd { width: 100%; }`,
          ...Et,
          ..._t,
        ],
        `framer-4wUDf`,
      )),
      (lr.displayName = `Nav bar`),
      (lr.defaultProps = { height: 70, width: 1240 }),
      F(lr, {
        variant: {
          options: [`lhWIfPWaC`, `LsM0IyO1X`, `nrlEk0fqY`, `OtqOTMXv5`],
          optionTitles: [`Desktop Closed`, `Desktop Opened`, `Phone Closed`, `Phone Open`],
          title: `Variant`,
          type: G.Enum,
        },
        ge3D4KFru: {
          __defaultAssetReference: `data:framer/asset-reference,lClzlxBuE1F6ff5JgYTnivzY.png?originalFilename=Logo+Light-1.png&width=591&height=135`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,lClzlxBuE1F6ff5JgYTnivzY.png?originalFilename=Logo+Light-1.png&width=591&height=135`,
          },
          title: `Dark Logo`,
          type: G.ResponsiveImage,
        },
        GL1cDhAUK: { title: `Light Logo`, type: G.ResponsiveImage },
        Ti8qX1st0: { defaultValue: `Home`, placeholder: `Home`, title: `Active`, type: G.String },
        onTi8qX1st0Change: { changes: `Ti8qX1st0`, type: G.ChangeHandler },
        BXBT9GBuu: { defaultValue: !0, title: `Contact`, type: G.Boolean },
        onBXBT9GBuuChange: { changes: `BXBT9GBuu`, type: G.ChangeHandler },
        EaxxfVIId: { defaultValue: !0, title: `Blog`, type: G.Boolean },
        onEaxxfVIIdChange: { changes: `EaxxfVIId`, type: G.ChangeHandler },
        h9HxmICCr: { defaultValue: !0, title: `Testimonial`, type: G.Boolean },
        onh9HxmICCrChange: { changes: `h9HxmICCr`, type: G.ChangeHandler },
        vAxDqh1VE: { defaultValue: !0, title: `Projects`, type: G.Boolean },
        onvAxDqh1VEChange: { changes: `vAxDqh1VE`, type: G.ChangeHandler },
        YKFPsh9N8: { defaultValue: !0, title: `About`, type: G.Boolean },
        onYKFPsh9N8Change: { changes: `YKFPsh9N8`, type: G.ChangeHandler },
        lrEV4_zrs: Wn?.srcFile && {
          ...Wn.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,6WpUlqTWj1VFA4RNQ9snLmJxk.mp4?originalFilename=Furniture_popping_up_from_ground_202609030404.mp4&width=1280&height=720`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onlrEV4_zrsChange: { changes: `lrEV4_zrs`, type: G.ChangeHandler },
      }),
      P(
        lr,
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
          ...Bn,
          ...Vn,
          ...Un,
          ...M(Tt),
          ...M(mt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (lr.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(nr(), n);
          return Promise.allSettled([
            r.preload(),
            z(q, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [z(K, {}, t), z(K, {}, t), z(K, {}, t), z(K, {}, t), z(K, {}, t)]),
              );
            })(),
          ]);
        },
      }));
  }),
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr = e(() => {
    (S(),
      R(),
      A(),
      f(),
      Ft(),
      (dr = B(It)),
      (fr = Re(It)),
      (pr = `framer-uKWHf`),
      (mr = { H4taCltct: `framer-v-mh7fy` }),
      (hr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (gr = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (_r = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (vr = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (yr = D.create(s)),
      (br = { One: `one`, Two: `two` }),
      (xr = ({
        blinking: e,
        blinkInterval: t,
        buttonColor: n,
        eyeColor: r,
        eyeCount: i,
        eyeGapPx: a,
        eyeSizePx: o,
        height: s,
        id: c,
        link: l,
        padding: u,
        pupilColor: d,
        pupilSizePx: f,
        radius: p,
        range: ee,
        speed: te,
        text: m,
        textColor: h,
        width: g,
        ..._
      }) => ({
        ..._,
        AmmV7xj6g: o ?? _.AmmV7xj6g ?? 40,
        BgmIAzzRV: p ?? _.BgmIAzzRV ?? `30px`,
        DbOmokZP0: h ?? _.DbOmokZP0 ?? `rgb(255, 255, 255)`,
        EDzxvbp5Q: u ?? _.EDzxvbp5Q ?? `6px 6px 6px 20px`,
        F9xEnRksX: br[i] ?? i ?? _.F9xEnRksX ?? `two`,
        Ftd7ea6ZK: ee ?? _.Ftd7ea6ZK ?? 90,
        GmXdHB9SX: e ?? _.GmXdHB9SX,
        h_OXotjfD: f ?? _.h_OXotjfD ?? 12,
        LWV7WvkSz: r ?? _.LWV7WvkSz ?? `rgb(255, 255, 255)`,
        n7FNYiflu: t ?? _.n7FNYiflu ?? 2e3,
        ooNLd407F: te ?? _.ooNLd407F ?? 100,
        qcTsc8aEM: m ?? _.qcTsc8aEM ?? `Get in touch`,
        qNjswW_Tg: l ?? _.qNjswW_Tg,
        s8XHH4TvL: a ?? _.s8XHH4TvL ?? 4,
        ucHarSLTi: n ?? _.ucHarSLTi ?? `rgb(0, 0, 0)`,
        Z_ma24kbm: d ?? _.Z_ma24kbm ?? `rgb(0, 0, 0)`,
      })),
      (Sr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Cr = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              qNjswW_Tg: p,
              ucHarSLTi: ee,
              qcTsc8aEM: m,
              DbOmokZP0: h,
              Z_ma24kbm: g,
              LWV7WvkSz: _,
              F9xEnRksX: y,
              AmmV7xj6g: b,
              h_OXotjfD: x,
              s8XHH4TvL: ne,
              ooNLd407F: S,
              Ftd7ea6ZK: C,
              GmXdHB9SX: T,
              n7FNYiflu: E,
              EDzxvbp5Q: O,
              BgmIAzzRV: re,
              ...A
            } = xr(e),
            {
              baseVariant: ie,
              classNames: ae,
              clearLoadingGesture: oe,
              gestureHandlers: se,
              gestureVariant: ce,
              isLoading: j,
              setGestureState: M,
              setVariant: le,
              variants: ue,
            } = fe({ defaultVariant: `H4taCltct`, ref: i, variant: f, variantClassNames: mr }),
            de = Sr(e, ue),
            P = N(pr);
          return v(k, {
            id: d ?? a,
            children: v(yr, {
              animate: ue,
              initial: !1,
              children: v(vr, {
                value: _r,
                children: v(Ye, {
                  href: p,
                  motionChild: !0,
                  nodeId: `H4taCltct`,
                  openInNewTab: !0,
                  scopeId: `kYiayLQ5g`,
                  children: w(D.a, {
                    ...A,
                    ...se,
                    className: `${N(P, `framer-mh7fy`, u, ae)} framer-2mr8ng`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: de,
                    layoutId: `H4taCltct`,
                    ref: i,
                    style: {
                      "--eetrnf": hr(O),
                      backgroundColor: ee,
                      borderBottomLeftRadius: gr(re, 3),
                      borderBottomRightRadius: gr(re, 2),
                      borderTopLeftRadius: gr(re, 0),
                      borderTopRightRadius: gr(re, 1),
                      boxShadow: `0.39809593676181976px 0.39809593676181976px 0.5629926728941875px -0.3125px rgba(0, 0, 0, 0.07), 1.207253071552259px 1.207253071552259px 1.7073136670057811px -0.625px rgba(0, 0, 0, 0.08), 3.1913267607422307px 3.1913267607422307px 4.51321758700586px -0.9375px rgba(0, 0, 0, 0.1), 10px 10px 14.142135623730951px -1.25px rgba(0, 0, 0, 0.19)`,
                      ...l,
                    },
                    children: [
                      v(W, {
                        __fromCanvasComponent: !0,
                        children: v(s, {
                          children: v(D.p, {
                            style: {
                              "--font-selector": `RlM7TWFucm9wZS1ib2xk`,
                              "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                              "--framer-font-weight": `700`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.4em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-DbOmokZP0-kYiayLQ5g))`,
                            },
                            children: `Get in touch`,
                          }),
                        }),
                        className: `framer-nym2w0`,
                        "data-framer-name": `Text`,
                        fonts: [`FS;Manrope-bold`],
                        layoutDependency: de,
                        layoutId: `iS5vKmVCC`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-DbOmokZP0-kYiayLQ5g)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-DbOmokZP0-kYiayLQ5g": h,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      v(H, {
                        children: v(U, {
                          className: `framer-3e0xtv-container`,
                          "data-code-component-plugin-id": `84d4c1`,
                          isAuthoredByUser: !0,
                          layoutDependency: de,
                          layoutId: `SipBS9ALL-container`,
                          nodeId: `SipBS9ALL`,
                          rendersWithMotion: !0,
                          scopeId: `kYiayLQ5g`,
                          children: v(It, {
                            blinkInterval: E,
                            enableBlinking: T,
                            eyeColor: _,
                            eyeCount: y,
                            eyeSize: b,
                            eyeSpacing: ne,
                            height: `100%`,
                            id: `SipBS9ALL`,
                            layoutId: `SipBS9ALL`,
                            pupilColor: g,
                            pupilSize: x,
                            style: { height: `100%`, width: `100%` },
                            trackingRange: C,
                            trackingSpeed: S,
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-uKWHf.framer-2mr8ng, .framer-uKWHf .framer-2mr8ng { display: block; }`,
          `.framer-uKWHf.framer-mh7fy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: var(--eetrnf); position: relative; text-decoration: none; width: min-content; }`,
          `.framer-uKWHf .framer-nym2w0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-uKWHf .framer-3e0xtv-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-uKWHf`,
      )),
      (Cr.displayName = `Eye Follow Button`),
      (Cr.defaultProps = { height: 52, width: 221 }),
      F(Cr, {
        qNjswW_Tg: { title: `Link`, type: G.Link },
        ucHarSLTi: { defaultValue: `rgb(0, 0, 0)`, title: `Button Color`, type: G.Color },
        qcTsc8aEM: {
          defaultValue: `Get in touch`,
          displayTextArea: !1,
          title: `Text`,
          type: G.String,
        },
        DbOmokZP0: { defaultValue: `rgb(255, 255, 255)`, title: `Text Color`, type: G.Color },
        Z_ma24kbm: { defaultValue: `rgb(0, 0, 0)`, title: `Pupil Color`, type: G.Color },
        LWV7WvkSz: { defaultValue: `rgb(255, 255, 255)`, title: `Eye Color`, type: G.Color },
        F9xEnRksX: fr?.eyeCount && {
          ...fr.eyeCount,
          defaultValue: `two`,
          description: void 0,
          hidden: void 0,
          title: `Eye Count`,
        },
        AmmV7xj6g: {
          defaultValue: 40,
          max: 300,
          min: 10,
          step: 1,
          title: `Eye Size (Px)`,
          type: G.Number,
        },
        h_OXotjfD: {
          defaultValue: 12,
          max: 100,
          min: 1,
          step: 1,
          title: `Pupil Size (Px)`,
          type: G.Number,
        },
        s8XHH4TvL: {
          defaultValue: 4,
          max: 200,
          min: 0,
          step: 1,
          title: `Eye Gap (Px)`,
          type: G.Number,
        },
        ooNLd407F: {
          defaultValue: 100,
          max: 500,
          min: 50,
          step: 10,
          title: `Speed`,
          type: G.Number,
        },
        Ftd7ea6ZK: {
          defaultValue: 90,
          max: 100,
          min: 0,
          step: 5,
          title: `Range (%)`,
          type: G.Number,
        },
        GmXdHB9SX: { defaultValue: !1, title: `Blinking`, type: G.Boolean },
        n7FNYiflu: {
          defaultValue: 2e3,
          max: 1e4,
          min: 500,
          step: 100,
          title: `Blink Interval`,
          type: G.Number,
        },
        EDzxvbp5Q: { defaultValue: `6px 6px 6px 20px`, title: `Padding`, type: G.Padding },
        BgmIAzzRV: { defaultValue: `30px`, title: `Radius`, type: G.BorderRadius },
      }),
      P(
        Cr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
                weight: `700`,
              },
            ],
          },
          ...dr,
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Tr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  J,
  Ir = e(() => {
    (S(),
      R(),
      A(),
      f(),
      Gt(),
      (Er = { J6GxFXgAx: { hover: !0, pressed: !0 } }),
      (Dr = [`J6GxFXgAx`, `j66X6lD0d`]),
      (Or = `framer-iVgkc`),
      (kr = { j66X6lD0d: `framer-v-1aqs72f`, J6GxFXgAx: `framer-v-12u9znr` }),
      (Ar = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jr = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Mr = { "Non Button": `j66X6lD0d`, Button: `J6GxFXgAx` }),
      (Nr = D.create(s)),
      (Pr = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        Ks0NC8a1U: r ?? a.Ks0NC8a1U,
        Tmcu2Bkj1: n ?? a.Tmcu2Bkj1,
        variant: Mr[a.variant] ?? a.variant ?? `J6GxFXgAx`,
      })),
      (Fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              Ks0NC8a1U: p,
              Tmcu2Bkj1: ee,
              ...m
            } = Pr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = fe({
              cycleOrder: Dr,
              defaultVariant: `J6GxFXgAx`,
              enabledGestures: Er,
              ref: i,
              variant: f,
              variantClassNames: kr,
            }),
            w = Fr(e, C),
            T = N(Or, Jt);
          return v(k, {
            id: d ?? a,
            children: v(Nr, {
              animate: C,
              initial: !1,
              children: v(jr, {
                value: Ar,
                children: v(Ye, {
                  href: ee,
                  motionChild: !0,
                  nodeId: `J6GxFXgAx`,
                  openInNewTab: !1,
                  scopeId: `T5Y4YY1Nk`,
                  ...Tr({ j66X6lD0d: { href: void 0 } }, h, b),
                  children: v(D.a, {
                    ...m,
                    ...y,
                    className: `${N(T, `framer-12u9znr`, u, g)} framer-a4n2hj`,
                    "data-framer-name": `Button`,
                    layoutDependency: w,
                    layoutId: `J6GxFXgAx`,
                    ref: i,
                    style: { ...l },
                    ...Tr(
                      {
                        "J6GxFXgAx-hover": { "data-framer-name": void 0 },
                        "J6GxFXgAx-pressed": { "data-framer-name": void 0 },
                        j66X6lD0d: { "data-framer-name": `Non Button` },
                      },
                      h,
                      b,
                    ),
                    children: v(W, {
                      __fromCanvasComponent: !0,
                      children: v(s, {
                        children: v(D.p, {
                          className: `framer-styles-preset-lqeg3j`,
                          "data-styles-preset": `FQBtVWcCo`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8bfd3697-f19e-4049-865a-11224877104d, rgb(224, 224, 224)))`,
                          },
                          children: `About`,
                        }),
                      }),
                      className: `framer-1k8gs4i`,
                      fonts: [`Inter`],
                      layoutDependency: w,
                      layoutId: `xOUgJUDO_`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-8bfd3697-f19e-4049-865a-11224877104d, rgb(224, 224, 224))`,
                      },
                      text: p,
                      variants: {
                        "J6GxFXgAx-hover": {
                          "--extracted-r6o4lv": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10))`,
                        },
                        "J6GxFXgAx-pressed": {
                          "--extracted-r6o4lv": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Tr(
                        {
                          "J6GxFXgAx-hover": {
                            children: v(s, {
                              children: v(D.p, {
                                className: `framer-styles-preset-lqeg3j`,
                                "data-styles-preset": `FQBtVWcCo`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10)))`,
                                },
                                children: `About`,
                              }),
                            }),
                          },
                          "J6GxFXgAx-pressed": {
                            children: v(s, {
                              children: v(D.p, {
                                className: `framer-styles-preset-lqeg3j`,
                                "data-styles-preset": `FQBtVWcCo`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10)))`,
                                },
                                children: `About`,
                              }),
                            }),
                          },
                        },
                        h,
                        b,
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-iVgkc.framer-a4n2hj, .framer-iVgkc .framer-a4n2hj { display: block; }`,
          `.framer-iVgkc.framer-12u9znr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-iVgkc .framer-1k8gs4i { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iVgkc.framer-v-1aqs72f.framer-12u9znr { cursor: unset; width: 109px; }`,
          `.framer-iVgkc.framer-v-1aqs72f .framer-1k8gs4i { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-iVgkc.framer-v-12u9znr.hover .framer-1k8gs4i, .framer-iVgkc.framer-v-12u9znr.pressed .framer-1k8gs4i { order: 0; }`,
          ...Kt,
        ],
        `framer-iVgkc`,
      )),
      (J.displayName = `Button/Footer`),
      (J.defaultProps = { height: 20, width: 41 }),
      F(J, {
        variant: {
          options: [`J6GxFXgAx`, `j66X6lD0d`],
          optionTitles: [`Button`, `Non Button`],
          title: `Variant`,
          type: G.Enum,
        },
        Ks0NC8a1U: {
          description: `Click here to edit the title`,
          displayTextArea: !1,
          optional: !0,
          placeholder: `About`,
          title: `Title`,
          type: G.String,
        },
        onKs0NC8a1UChange: { changes: `Ks0NC8a1U`, type: G.ChangeHandler },
        Tmcu2Bkj1: { description: `Click here to edit the link`, title: `Link`, type: G.Link },
      }),
      P(
        J,
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
          ...M(qt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri = e(() => {
    (S(),
      R(),
      A(),
      f(),
      wr(),
      ct(),
      jt(),
      Dt(),
      Lt(),
      Vt(),
      ft(),
      wt(),
      ut(),
      yt(),
      ht(),
      bn(),
      Ir(),
      (Lr = B(Cr)),
      (Rr = B(J)),
      (zr = B(K)),
      (Br = [`SklNDh61L`, `UZiMAKwsU`, `Q1dxAGv4V`]),
      (Vr = `framer-FmkBT`),
      (Hr = {
        Q1dxAGv4V: `framer-v-1jknwqp`,
        SklNDh61L: `framer-v-w4jy2q`,
        UZiMAKwsU: `framer-v-3z6pzv`,
      }),
      (Ur = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Wr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      }),
      (Gr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (qr = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Jr = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e + t
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Yr = () => ({
        from: { alias: `Qw5_PWrd4`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `Qw5_PWrd4`, name: `r8bDLthd2`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `jbX2Dvqv8`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `ihUkwOXaD`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `vg9tVkcxn`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `I7yTj1Joi`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `f9K1B8TjK`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `bUb8zUdbE`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `JkDw2Q74e`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `wZo8uFYX4`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `F7IsTolAT`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `IDbedOwaL`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `ZodLwUri0`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `QaUURzFAy`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `DEJD66FGv`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `FltxoTYZ4`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `RUwLgWJjp`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `Ewgt93kHl`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `hEUN7gPgu`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `dxPK0x7bI`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `S2x9rQqLy`, type: `Identifier` },
          { collection: `Qw5_PWrd4`, name: `id`, type: `Identifier` },
        ],
      })),
      (Xr = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (Zr = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Qr = { Desktop: `SklNDh61L`, Mobile: `Q1dxAGv4V`, Tablet: `UZiMAKwsU` }),
      ($r = D.create(s)),
      (ei = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qr[r.variant] ?? r.variant ?? `SklNDh61L`,
      })),
      (ti = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ni = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe(),
            l = De(),
            { style: u, className: d, layoutId: f, variant: p, ...ee } = ei(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = fe({
              cycleOrder: Br,
              defaultVariant: `SklNDh61L`,
              ref: i,
              variant: p,
              variantClassNames: Hr,
            }),
            T = ti(e, C),
            E = N(Vr, Pt, Wt, Ot, Bt);
          return (
            ke(),
            v(k, {
              id: f ?? a,
              children: v($r, {
                animate: C,
                initial: !1,
                children: v(Zr, {
                  value: Ur,
                  children: w(D.footer, {
                    ...ee,
                    ...y,
                    className: N(E, `framer-w4jy2q`, d, g),
                    "data-framer-name": `Desktop`,
                    layoutDependency: T,
                    layoutId: `SklNDh61L`,
                    ref: i,
                    style: { ...u },
                    ...Y(
                      {
                        Q1dxAGv4V: { "data-framer-name": `Mobile` },
                        UZiMAKwsU: { "data-framer-name": `Tablet` },
                      },
                      h,
                      b,
                    ),
                    children: [
                      v(D.div, {
                        className: `framer-1xe6utx`,
                        "data-framer-name": `Line`,
                        layoutDependency: T,
                        layoutId: `Kte1NPC8P`,
                        children: v(Ee, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 628,
                            intrinsicWidth: 3118,
                            loading: ue(
                              (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 595) / 2 + 0 + 0) + 0,
                            ),
                            pixelHeight: 628,
                            pixelWidth: 3118,
                            sizes: l?.width || `100vw`,
                            src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                            srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                          },
                          className: `framer-1vbaoll`,
                          "data-framer-name": `Desktop background`,
                          fitImageDimension: `height`,
                          layoutDependency: T,
                          layoutId: `WODtxDCa0`,
                          ...Y(
                            {
                              Q1dxAGv4V: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 628,
                                  intrinsicWidth: 3118,
                                  loading: ue(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 927) - 0 - 966.4) / 2 + 0 + 0) +
                                      0,
                                  ),
                                  pixelHeight: 628,
                                  pixelWidth: 3118,
                                  sizes: l?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                                  srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                                },
                              },
                              UZiMAKwsU: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 628,
                                  intrinsicWidth: 3118,
                                  loading: ue(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 537) - 0 - 579) / 2 + 0 + 0) +
                                      0,
                                  ),
                                  pixelHeight: 628,
                                  pixelWidth: 3118,
                                  sizes: l?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                                  srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                                },
                              },
                            },
                            h,
                            b,
                          ),
                        }),
                      }),
                      v(D.div, {
                        className: `framer-1xw59xx`,
                        layoutDependency: T,
                        layoutId: `Qw5_PWrd4`,
                        style: {
                          backgroundColor: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                        },
                        children: v(Pe, {
                          children: v(Xr, {
                            query: Yr(),
                            children: (e, t, n) =>
                              v(m, {
                                children: e?.map(
                                  (
                                    {
                                      bUb8zUdbE: e,
                                      DEJD66FGv: t,
                                      DNLONDBp6: n,
                                      dxPK0x7bI: r,
                                      Ewgt93kHl: i,
                                      F7IsTolAT: a,
                                      f9K1B8TjK: o,
                                      FltxoTYZ4: c,
                                      hEUN7gPgu: u,
                                      I7yTj1Joi: d,
                                      id: f,
                                      IDbedOwaL: p,
                                      ihUkwOXaD: ee,
                                      jbX2Dvqv8: te,
                                      JkDw2Q74e: m,
                                      QaUURzFAy: g,
                                      r8bDLthd2: _,
                                      RUwLgWJjp: y,
                                      S2x9rQqLy: x,
                                      vg9tVkcxn: ne,
                                      wZo8uFYX4: S,
                                      ZodLwUri0: C,
                                    },
                                    E,
                                  ) => {
                                    ((_ ??= ``),
                                      (n ??= ``),
                                      (te ??= ``),
                                      (ee ??= !0),
                                      (ne ??= !0),
                                      (d ??= !0),
                                      (o ??= !0),
                                      (e ??= !0),
                                      (m ??= !0),
                                      (S ??= !0),
                                      (a ??= ``),
                                      (p ??= ``),
                                      (C ??= ``),
                                      (g ??= ``),
                                      (t ??= ``),
                                      (c ??= ``),
                                      (y ??= ``),
                                      (i ??= ``),
                                      (u ??= ``),
                                      (r ??= ``),
                                      (x ??= ``));
                                    let O = Kr(a),
                                      re = Kr(p),
                                      A = Kr(t),
                                      ie = Kr(c),
                                      ae = Kr(y),
                                      oe = Kr(i),
                                      ce = Kr(u),
                                      j = Kr(r),
                                      M = Jr(qr(x, `© 2026 `), `. All rights reserved.`);
                                    return v(
                                      k,
                                      {
                                        id: `Qw5_PWrd4-${f}`,
                                        children: v(se.Provider, {
                                          value: { DNLONDBp6: n },
                                          children: w(D.div, {
                                            className: `framer-1kes3zb`,
                                            "data-framer-name": `Footer`,
                                            layoutDependency: T,
                                            layoutId: `x1hzJnDet`,
                                            children: [
                                              v(D.div, {
                                                className: `framer-1ba82ly`,
                                                "data-framer-name": `Tab 1`,
                                                layoutDependency: T,
                                                layoutId: `hmZC7ZgUm`,
                                                style: {
                                                  borderTopLeftRadius: 10,
                                                  borderTopRightRadius: 10,
                                                },
                                                children: w(D.div, {
                                                  className: `framer-7e5kf4`,
                                                  "data-framer-name": `Let's Talk`,
                                                  layoutDependency: T,
                                                  layoutId: `LDayDLJI2`,
                                                  style: {
                                                    backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                                                    borderBottomLeftRadius: 24,
                                                    borderBottomRightRadius: 24,
                                                    borderTopLeftRadius: 24,
                                                    borderTopRightRadius: 24,
                                                  },
                                                  variants: {
                                                    Q1dxAGv4V: {
                                                      borderBottomLeftRadius: 16,
                                                      borderBottomRightRadius: 16,
                                                      borderTopLeftRadius: 16,
                                                      borderTopRightRadius: 16,
                                                    },
                                                    UZiMAKwsU: {
                                                      borderBottomLeftRadius: 16,
                                                      borderBottomRightRadius: 16,
                                                      borderTopLeftRadius: 16,
                                                      borderTopRightRadius: 16,
                                                    },
                                                  },
                                                  children: [
                                                    v(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: v(s, {
                                                        children: v(D.h3, {
                                                          className: `framer-styles-preset-1pr57h3`,
                                                          "data-styles-preset": `hMoFYBqBy`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                                          },
                                                          children: `Ready to Love Your Space?`,
                                                        }),
                                                      }),
                                                      className: `framer-s362uv`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: T,
                                                      layoutId: `o72as63ht`,
                                                      style: {
                                                        "--extracted-a0htzi": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: _,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    v(L, {
                                                      links: [
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        v(H, {
                                                          height: 52,
                                                          y:
                                                            (l?.y || 0) +
                                                            0 +
                                                            (((l?.height || 553) - 0 - 595) / 2 +
                                                              93 +
                                                              0) +
                                                            0 +
                                                            0 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            24,
                                                          ...Y(
                                                            {
                                                              Q1dxAGv4V: {
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 927) -
                                                                    0 -
                                                                    966.4) /
                                                                    2 +
                                                                    66 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  24 +
                                                                  72,
                                                              },
                                                              UZiMAKwsU: {
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 537) - 0 - 579) /
                                                                    2 +
                                                                    93 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  24,
                                                              },
                                                            },
                                                            h,
                                                            b,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-1p4if9z-container`,
                                                            isModuleExternal: !0,
                                                            layoutDependency: T,
                                                            layoutId: `gmBE3Ioh4-container`,
                                                            nodeId: `gmBE3Ioh4`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `XWRcPCmSw`,
                                                            whileHover: Wr,
                                                            children: v(Cr, {
                                                              AmmV7xj6g: 33,
                                                              BgmIAzzRV: `30px`,
                                                              DbOmokZP0: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              EDzxvbp5Q: `12px 12px 12px 20px`,
                                                              F9xEnRksX: `one`,
                                                              Ftd7ea6ZK: 90,
                                                              GmXdHB9SX: !0,
                                                              h_OXotjfD: 12,
                                                              height: `100%`,
                                                              id: `gmBE3Ioh4`,
                                                              layoutId: `gmBE3Ioh4`,
                                                              LWV7WvkSz: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              n7FNYiflu: 2e3,
                                                              ooNLd407F: 100,
                                                              qcTsc8aEM: te,
                                                              qNjswW_Tg: e[0],
                                                              s8XHH4TvL: 4,
                                                              ucHarSLTi: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                                                              width: `100%`,
                                                              Z_ma24kbm: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: { qNjswW_Tg: e[2] },
                                                                  UZiMAKwsU: { qNjswW_Tg: e[1] },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              w(D.div, {
                                                className: `framer-qvdxy4`,
                                                "data-framer-name": `Tab 1`,
                                                layoutDependency: T,
                                                layoutId: `kU0azhoCG`,
                                                style: {
                                                  borderTopLeftRadius: 10,
                                                  borderTopRightRadius: 10,
                                                },
                                                children: [
                                                  w(D.div, {
                                                    className: `framer-1a2m6no`,
                                                    "data-framer-name": `Pages`,
                                                    layoutDependency: T,
                                                    layoutId: `z8vtN_TXN`,
                                                    children: [
                                                      v(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: v(s, {
                                                          children: v(D.h4, {
                                                            className: `framer-styles-preset-1nvzv7u`,
                                                            "data-styles-preset": `WtX7HRPZM`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                                            },
                                                            children: `Pages`,
                                                          }),
                                                        }),
                                                        className: `framer-1z0ewzl`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: T,
                                                        layoutId: `O2jUiLXss`,
                                                        style: {
                                                          "--extracted-1eung3n": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                          "--framer-link-text-decoration": `underline`,
                                                        },
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      v(L, {
                                                        links: [
                                                          {
                                                            href: { webPageId: `hqVRjOHKR` },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: { webPageId: `hqVRjOHKR` },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: { webPageId: `hqVRjOHKR` },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          v(H, {
                                                            height: 20,
                                                            width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                            y:
                                                              (l?.y || 0) +
                                                              0 +
                                                              (((l?.height || 553) - 0 - 595) / 2 +
                                                                93 +
                                                                0) +
                                                              0 +
                                                              0 +
                                                              32 +
                                                              124 +
                                                              0 +
                                                              0 +
                                                              54,
                                                            ...Y(
                                                              {
                                                                Q1dxAGv4V: {
                                                                  width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    (((l?.height || 927) -
                                                                      0 -
                                                                      966.4) /
                                                                      2 +
                                                                      66 +
                                                                      0) +
                                                                    0 +
                                                                    0 +
                                                                    16 +
                                                                    196 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    54,
                                                                },
                                                                UZiMAKwsU: {
                                                                  width: `100px`,
                                                                  y:
                                                                    (l?.y || 0) +
                                                                    0 +
                                                                    (((l?.height || 537) -
                                                                      0 -
                                                                      579) /
                                                                      2 +
                                                                      93 +
                                                                      0) +
                                                                    0 +
                                                                    0 +
                                                                    16 +
                                                                    124 +
                                                                    0 +
                                                                    0 +
                                                                    54,
                                                                },
                                                              },
                                                              h,
                                                              b,
                                                            ),
                                                            children: v(U, {
                                                              className: `framer-1dwx1w2-container`,
                                                              layoutDependency: T,
                                                              layoutId: `n3Hd15elL-container`,
                                                              nodeId: `n3Hd15elL`,
                                                              rendersWithMotion: !0,
                                                              scopeId: `XWRcPCmSw`,
                                                              children: v(J, {
                                                                height: `100%`,
                                                                id: `n3Hd15elL`,
                                                                Ks0NC8a1U: `Home`,
                                                                layoutId: `n3Hd15elL`,
                                                                style: { width: `100%` },
                                                                Tmcu2Bkj1: e[0],
                                                                variant: Gr(`J6GxFXgAx`),
                                                                width: `100%`,
                                                                ...Y(
                                                                  {
                                                                    Q1dxAGv4V: { Tmcu2Bkj1: e[2] },
                                                                    UZiMAKwsU: { Tmcu2Bkj1: e[1] },
                                                                  },
                                                                  h,
                                                                  b,
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                      ee !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `ogNU5sAlu` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `ogNU5sAlu` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `ogNU5sAlu` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                98,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `100px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1nvw984-container`,
                                                                layoutDependency: T,
                                                                layoutId: `dRpXzrhIo-container`,
                                                                nodeId: `dRpXzrhIo`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `dRpXzrhIo`,
                                                                  layoutId: `dRpXzrhIo`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      ne !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `j7jTRdbSt` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `j7jTRdbSt` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `j7jTRdbSt` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                98,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `100px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1i7gcfb-container`,
                                                                layoutDependency: T,
                                                                layoutId: `lAtz3mHe9-container`,
                                                                nodeId: `lAtz3mHe9`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `lAtz3mHe9`,
                                                                  Ks0NC8a1U: `Projects`,
                                                                  layoutId: `lAtz3mHe9`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      d !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `mpzwOKiYs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `mpzwOKiYs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `mpzwOKiYs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                98,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `100px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      98,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1uvv465-container`,
                                                                layoutDependency: T,
                                                                layoutId: `etGe020QZ-container`,
                                                                nodeId: `etGe020QZ`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `etGe020QZ`,
                                                                  Ks0NC8a1U: `Contact`,
                                                                  layoutId: `etGe020QZ`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                    ],
                                                  }),
                                                  w(D.div, {
                                                    className: `framer-19907dx`,
                                                    "data-framer-name": `Pages`,
                                                    layoutDependency: T,
                                                    layoutId: `WId8rfxrK`,
                                                    children: [
                                                      v(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: v(s, {
                                                          children: v(D.h4, {
                                                            className: `framer-styles-preset-1nvzv7u`,
                                                            "data-styles-preset": `WtX7HRPZM`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                                            },
                                                            children: `Pages`,
                                                          }),
                                                        }),
                                                        className: `framer-4qm65m`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: T,
                                                        layoutId: `nrskqtzwz`,
                                                        style: {
                                                          "--extracted-1eung3n": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                          "--framer-link-text-decoration": `underline`,
                                                          opacity: 0,
                                                        },
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      o !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `ImqR0HMAr` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `ImqR0HMAr` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `ImqR0HMAr` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                54,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `150px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-ti5ilj-container`,
                                                                layoutDependency: T,
                                                                layoutId: `BCdDus2FK-container`,
                                                                nodeId: `BCdDus2FK`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `BCdDus2FK`,
                                                                  Ks0NC8a1U: `Blog`,
                                                                  layoutId: `BCdDus2FK`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      e !== !1 &&
                                                        v(H, {
                                                          height: 20,
                                                          width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                          y:
                                                            (l?.y || 0) +
                                                            0 +
                                                            (((l?.height || 553) - 0 - 595) / 2 +
                                                              93 +
                                                              0) +
                                                            0 +
                                                            0 +
                                                            32 +
                                                            124 +
                                                            0 +
                                                            0 +
                                                            54,
                                                          ...Y(
                                                            {
                                                              Q1dxAGv4V: {
                                                                width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 927) -
                                                                    0 -
                                                                    966.4) /
                                                                    2 +
                                                                    66 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  196 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  54,
                                                              },
                                                              UZiMAKwsU: {
                                                                width: `150px`,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 537) - 0 - 579) /
                                                                    2 +
                                                                    93 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  124 +
                                                                  0 +
                                                                  0 +
                                                                  54,
                                                              },
                                                            },
                                                            h,
                                                            b,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-14f282h-container`,
                                                            layoutDependency: T,
                                                            layoutId: `ak2lmdMFg-container`,
                                                            nodeId: `ak2lmdMFg`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `XWRcPCmSw`,
                                                            children: v(J, {
                                                              height: `100%`,
                                                              id: `ak2lmdMFg`,
                                                              Ks0NC8a1U: `Testimonial`,
                                                              layoutId: `ak2lmdMFg`,
                                                              style: { width: `100%` },
                                                              variant: Gr(`J6GxFXgAx`),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      m !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `v7dbLxdY7` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `v7dbLxdY7` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `v7dbLxdY7` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                54,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `150px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-l14ykg-container`,
                                                                layoutDependency: T,
                                                                layoutId: `XEaykefB4-container`,
                                                                nodeId: `XEaykefB4`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `XEaykefB4`,
                                                                  Ks0NC8a1U: `Privacy Policy`,
                                                                  layoutId: `XEaykefB4`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      S !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `wwCQkYsOs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `wwCQkYsOs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: { webPageId: `wwCQkYsOs` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px), 150px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                54,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `min(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px), 150px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `150px`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1iaa9x5-container`,
                                                                layoutDependency: T,
                                                                layoutId: `XK9OO0JYo-container`,
                                                                nodeId: `XK9OO0JYo`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `XK9OO0JYo`,
                                                                  Ks0NC8a1U: `Terms of service`,
                                                                  layoutId: `XK9OO0JYo`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                    ],
                                                  }),
                                                  w(D.div, {
                                                    className: `framer-58eh7b`,
                                                    "data-framer-name": `Pages`,
                                                    layoutDependency: T,
                                                    layoutId: `f_AYdWCpG`,
                                                    children: [
                                                      v(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: v(s, {
                                                          children: v(D.h4, {
                                                            className: `framer-styles-preset-1nvzv7u`,
                                                            "data-styles-preset": `WtX7HRPZM`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                                            },
                                                            children: `Contact`,
                                                          }),
                                                        }),
                                                        className: `framer-v24jk1`,
                                                        fonts: [`Inter`],
                                                        layoutDependency: T,
                                                        layoutId: `DAubcfcUC`,
                                                        style: {
                                                          "--extracted-1eung3n": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                          "--framer-link-text-decoration": `underline`,
                                                        },
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      O !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: C,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: C,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: C,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                54,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `calc(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px) * 2 + 16px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      254 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 322px) / 2, 1px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1y28hx8-container`,
                                                                layoutDependency: T,
                                                                layoutId: `hi40rdFfo-container`,
                                                                nodeId: `hi40rdFfo`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `hi40rdFfo`,
                                                                  Ks0NC8a1U: p,
                                                                  layoutId: `hi40rdFfo`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      re !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: g,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: g,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: g,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 20,
                                                              width: `max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px)`,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                54,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    width: `calc(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px) * 2 + 16px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      254 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    width: `max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 322px) / 2, 1px)`,
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      54,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-13pqneb-container`,
                                                                layoutDependency: T,
                                                                layoutId: `lRXT2z381-container`,
                                                                nodeId: `lRXT2z381`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(J, {
                                                                  height: `100%`,
                                                                  id: `lRXT2z381`,
                                                                  Ks0NC8a1U: a,
                                                                  layoutId: `lRXT2z381`,
                                                                  style: { width: `100%` },
                                                                  Tmcu2Bkj1: e[0],
                                                                  variant: Gr(`J6GxFXgAx`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        Tmcu2Bkj1: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        Tmcu2Bkj1: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      A !== !1 &&
                                                        v(H, {
                                                          height: 20,
                                                          width: `max((min(min(${l?.width || `100vw`}, 1300px) - 64px, 1400px) - 72px) / 4, 1px)`,
                                                          y:
                                                            (l?.y || 0) +
                                                            0 +
                                                            (((l?.height || 553) - 0 - 595) / 2 +
                                                              93 +
                                                              0) +
                                                            0 +
                                                            0 +
                                                            32 +
                                                            124 +
                                                            0 +
                                                            0 +
                                                            54,
                                                          ...Y(
                                                            {
                                                              Q1dxAGv4V: {
                                                                width: `calc(max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 16px) / 2, 50px) * 2 + 16px)`,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 927) -
                                                                    0 -
                                                                    966.4) /
                                                                    2 +
                                                                    66 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  196 +
                                                                  0 +
                                                                  254 +
                                                                  0 +
                                                                  54,
                                                              },
                                                              UZiMAKwsU: {
                                                                width: `max((min(min(${l?.width || `100vw`}, 1300px) - 32px, 1400px) - 322px) / 2, 1px)`,
                                                                y:
                                                                  (l?.y || 0) +
                                                                  0 +
                                                                  (((l?.height || 537) - 0 - 579) /
                                                                    2 +
                                                                    93 +
                                                                    0) +
                                                                  0 +
                                                                  0 +
                                                                  16 +
                                                                  124 +
                                                                  0 +
                                                                  0 +
                                                                  54,
                                                              },
                                                            },
                                                            h,
                                                            b,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-19vgo0r-container`,
                                                            layoutDependency: T,
                                                            layoutId: `n2b8DXqci-container`,
                                                            nodeId: `n2b8DXqci`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `XWRcPCmSw`,
                                                            children: v(J, {
                                                              height: `100%`,
                                                              id: `n2b8DXqci`,
                                                              Ks0NC8a1U: t,
                                                              layoutId: `n2b8DXqci`,
                                                              style: { width: `100%` },
                                                              variant: Gr(`j66X6lD0d`),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                    ],
                                                  }),
                                                  w(D.div, {
                                                    className: `framer-no4hua`,
                                                    "data-framer-name": `Social`,
                                                    layoutDependency: T,
                                                    layoutId: `TdrxZ1P3I`,
                                                    children: [
                                                      ie !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: c,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: c,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: c,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 32,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                130,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      464 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      130,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-16vijbg-container`,
                                                                layoutDependency: T,
                                                                layoutId: `WydSAu6FK-container`,
                                                                nodeId: `WydSAu6FK`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(K, {
                                                                  Bbjt654Fw: gt,
                                                                  height: `100%`,
                                                                  id: `WydSAu6FK`,
                                                                  layoutId: `WydSAu6FK`,
                                                                  OGqAkslJm: e[0],
                                                                  variant: Gr(`wlgGlFexY`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        OGqAkslJm: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        OGqAkslJm: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      ae !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: y,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: y,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: y,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 32,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                130,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      464 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      130,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-shipih-container`,
                                                                layoutDependency: T,
                                                                layoutId: `tVSCsO6VS-container`,
                                                                nodeId: `tVSCsO6VS`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(K, {
                                                                  Bbjt654Fw: xt,
                                                                  height: `100%`,
                                                                  id: `tVSCsO6VS`,
                                                                  layoutId: `tVSCsO6VS`,
                                                                  OGqAkslJm: e[0],
                                                                  variant: Gr(`wlgGlFexY`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        OGqAkslJm: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        OGqAkslJm: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      oe !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: i,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: i,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: i,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 32,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                130,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      464 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      130,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1gxi3aj-container`,
                                                                layoutDependency: T,
                                                                layoutId: `WWz8SjvuD-container`,
                                                                nodeId: `WWz8SjvuD`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(K, {
                                                                  Bbjt654Fw: lt,
                                                                  height: `100%`,
                                                                  id: `WWz8SjvuD`,
                                                                  layoutId: `WWz8SjvuD`,
                                                                  OGqAkslJm: e[0],
                                                                  variant: Gr(`wlgGlFexY`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        OGqAkslJm: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        OGqAkslJm: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      ce !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: u,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: u,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: u,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 32,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                130,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      464 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      130,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1w0zzmk-container`,
                                                                layoutDependency: T,
                                                                layoutId: `iRbVuunB8-container`,
                                                                nodeId: `iRbVuunB8`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(K, {
                                                                  Bbjt654Fw: St,
                                                                  height: `100%`,
                                                                  id: `iRbVuunB8`,
                                                                  layoutId: `iRbVuunB8`,
                                                                  OGqAkslJm: e[0],
                                                                  variant: Gr(`wlgGlFexY`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        OGqAkslJm: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        OGqAkslJm: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      j !== !1 &&
                                                        v(L, {
                                                          links: [
                                                            {
                                                              href: r,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: r,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                            {
                                                              href: r,
                                                              implicitPathVariables: {
                                                                DNLONDBp6: n,
                                                              },
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            v(H, {
                                                              height: 32,
                                                              y:
                                                                (l?.y || 0) +
                                                                0 +
                                                                (((l?.height || 553) - 0 - 595) /
                                                                  2 +
                                                                  93 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                32 +
                                                                124 +
                                                                0 +
                                                                0 +
                                                                130,
                                                              ...Y(
                                                                {
                                                                  Q1dxAGv4V: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 927) -
                                                                        0 -
                                                                        966.4) /
                                                                        2 +
                                                                        66 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      196 +
                                                                      0 +
                                                                      464 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  UZiMAKwsU: {
                                                                    y:
                                                                      (l?.y || 0) +
                                                                      0 +
                                                                      (((l?.height || 537) -
                                                                        0 -
                                                                        579) /
                                                                        2 +
                                                                        93 +
                                                                        0) +
                                                                      0 +
                                                                      0 +
                                                                      16 +
                                                                      124 +
                                                                      0 +
                                                                      0 +
                                                                      130,
                                                                  },
                                                                },
                                                                h,
                                                                b,
                                                              ),
                                                              children: v(U, {
                                                                className: `framer-1g4ocbp-container`,
                                                                layoutDependency: T,
                                                                layoutId: `Yixf4W2S9-container`,
                                                                nodeId: `Yixf4W2S9`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `XWRcPCmSw`,
                                                                children: v(K, {
                                                                  Bbjt654Fw: dt,
                                                                  height: `100%`,
                                                                  id: `Yixf4W2S9`,
                                                                  layoutId: `Yixf4W2S9`,
                                                                  OGqAkslJm: e[0],
                                                                  variant: Gr(`wlgGlFexY`),
                                                                  width: `100%`,
                                                                  ...Y(
                                                                    {
                                                                      Q1dxAGv4V: {
                                                                        OGqAkslJm: e[2],
                                                                      },
                                                                      UZiMAKwsU: {
                                                                        OGqAkslJm: e[1],
                                                                      },
                                                                    },
                                                                    h,
                                                                    b,
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              w(D.div, {
                                                className: `framer-1f14kek`,
                                                "data-border": !0,
                                                "data-framer-name": `Bottom`,
                                                layoutDependency: T,
                                                layoutId: `lVjteryw5`,
                                                style: {
                                                  "--border-bottom-width": `0px`,
                                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                                  "--border-left-width": `0px`,
                                                  "--border-right-width": `0px`,
                                                  "--border-style": `solid`,
                                                  "--border-top-width": `1px`,
                                                },
                                                variants: {
                                                  Q1dxAGv4V: { "--border-top-width": `0px` },
                                                },
                                                children: [
                                                  v(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: v(s, {
                                                      children: v(D.p, {
                                                        className: `framer-styles-preset-piej36`,
                                                        "data-styles-preset": `kzFJG5mqZ`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8bfd3697-f19e-4049-865a-11224877104d, rgb(224, 224, 224)))`,
                                                        },
                                                        children: `© 2026 Renovation. All rights reserved.`,
                                                      }),
                                                    }),
                                                    className: `framer-1k766yx`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: T,
                                                    layoutId: `joypm1IyO`,
                                                    style: {
                                                      "--extracted-r6o4lv": `var(--token-8bfd3697-f19e-4049-865a-11224877104d, rgb(224, 224, 224))`,
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: M,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  v(D.div, {
                                                    className: `framer-dfegvb`,
                                                    "data-framer-name": `Bottom Right`,
                                                    layoutDependency: T,
                                                    layoutId: `MuLFfGr9K`,
                                                    children: v(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: v(s, {
                                                        children: w(D.p, {
                                                          className: `framer-styles-preset-piej36`,
                                                          "data-styles-preset": `kzFJG5mqZ`,
                                                          dir: `auto`,
                                                          children: [
                                                            v(Ye, {
                                                              href: `https://base.supply/`,
                                                              motionChild: !0,
                                                              nodeId: `ajpYL38Hr`,
                                                              openInNewTab: !0,
                                                              relValues: [],
                                                              scopeId: `XWRcPCmSw`,
                                                              smoothScroll: !1,
                                                              children: v(D.a, {
                                                                className: `framer-styles-preset-1owdf8i`,
                                                                "data-styles-preset": `V9OZ6_mnD`,
                                                                children: `Website designed`,
                                                              }),
                                                            }),
                                                            ` `,
                                                            v(D.span, {
                                                              style: {
                                                                "--framer-text-color": `var(--extracted-3sq8v0, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                                              },
                                                              children: `by`,
                                                            }),
                                                            ` `,
                                                            v(Ye, {
                                                              href: `https://base.supply/`,
                                                              motionChild: !0,
                                                              nodeId: `ajpYL38Hr`,
                                                              openInNewTab: !0,
                                                              relValues: [],
                                                              scopeId: `XWRcPCmSw`,
                                                              smoothScroll: !1,
                                                              children: v(D.a, {
                                                                className: `framer-styles-preset-1owdf8i`,
                                                                "data-styles-preset": `V9OZ6_mnD`,
                                                                children: `Dean`,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      className: `framer-1pponez`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: T,
                                                      layoutId: `ajpYL38Hr`,
                                                      style: {
                                                        "--extracted-3sq8v0": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                      ...Y(
                                                        {
                                                          Q1dxAGv4V: {
                                                            children: v(s, {
                                                              children: w(D.p, {
                                                                className: `framer-styles-preset-piej36`,
                                                                "data-styles-preset": `kzFJG5mqZ`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-alignment": `left`,
                                                                },
                                                                children: [
                                                                  v(Ye, {
                                                                    href: `https://base.supply/`,
                                                                    motionChild: !0,
                                                                    nodeId: `ajpYL38Hr`,
                                                                    openInNewTab: !0,
                                                                    relValues: [],
                                                                    scopeId: `XWRcPCmSw`,
                                                                    smoothScroll: !1,
                                                                    children: v(D.a, {
                                                                      className: `framer-styles-preset-1owdf8i`,
                                                                      "data-styles-preset": `V9OZ6_mnD`,
                                                                      children: `Website designed`,
                                                                    }),
                                                                  }),
                                                                  ` `,
                                                                  v(D.span, {
                                                                    style: {
                                                                      "--framer-text-color": `var(--extracted-3sq8v0, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                                                    },
                                                                    children: `by`,
                                                                  }),
                                                                  ` `,
                                                                  v(Ye, {
                                                                    href: `https://base.supply/`,
                                                                    motionChild: !0,
                                                                    nodeId: `ajpYL38Hr`,
                                                                    openInNewTab: !0,
                                                                    relValues: [],
                                                                    scopeId: `XWRcPCmSw`,
                                                                    smoothScroll: !1,
                                                                    children: v(D.a, {
                                                                      className: `framer-styles-preset-1owdf8i`,
                                                                      "data-styles-preset": `V9OZ6_mnD`,
                                                                      children: `Dean`,
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          },
                                                        },
                                                        h,
                                                        b,
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      f,
                                    );
                                  },
                                ),
                              }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-FmkBT.framer-157utx6, .framer-FmkBT .framer-157utx6 { display: block; }`,
          `.framer-FmkBT.framer-w4jy2q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-FmkBT .framer-1xe6utx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 93px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-FmkBT .framer-1vbaoll { flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-FmkBT .framer-1xw59xx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-FmkBT .framer-1kes3zb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 32px 32px 0px 32px; position: relative; width: 100%; }`,
          `.framer-FmkBT .framer-1ba82ly { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1400px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-FmkBT .framer-7e5kf4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FmkBT .framer-s362uv { flex: 1 0 0px; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FmkBT .framer-1p4if9z-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
          `.framer-FmkBT .framer-qvdxy4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 1400px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-FmkBT .framer-1a2m6no, .framer-FmkBT .framer-19907dx { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; max-width: 150px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-FmkBT .framer-1z0ewzl, .framer-FmkBT .framer-4qm65m, .framer-FmkBT .framer-v24jk1 { flex: none; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FmkBT .framer-1dwx1w2-container, .framer-FmkBT .framer-1nvw984-container, .framer-FmkBT .framer-1i7gcfb-container, .framer-FmkBT .framer-1uvv465-container, .framer-FmkBT .framer-ti5ilj-container, .framer-FmkBT .framer-14f282h-container, .framer-FmkBT .framer-l14ykg-container, .framer-FmkBT .framer-1iaa9x5-container, .framer-FmkBT .framer-1y28hx8-container, .framer-FmkBT .framer-13pqneb-container, .framer-FmkBT .framer-19vgo0r-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-FmkBT .framer-58eh7b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-FmkBT .framer-no4hua { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: flex-end; max-width: 250px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-FmkBT .framer-16vijbg-container, .framer-FmkBT .framer-shipih-container, .framer-FmkBT .framer-1gxi3aj-container, .framer-FmkBT .framer-1w0zzmk-container, .framer-FmkBT .framer-1g4ocbp-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-FmkBT .framer-1f14kek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; overflow: visible; padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
          `.framer-FmkBT .framer-1k766yx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FmkBT .framer-dfegvb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-FmkBT .framer-1pponez { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-FmkBT.framer-v-3z6pzv.framer-w4jy2q { width: 810px; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-1kes3zb, .framer-FmkBT.framer-v-1jknwqp .framer-1kes3zb { padding: 16px 16px 24px 16px; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-1ba82ly, .framer-FmkBT.framer-v-1jknwqp .framer-1ba82ly { flex-direction: column; justify-content: flex-start; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-7e5kf4, .framer-FmkBT.framer-v-1jknwqp .framer-1k766yx { flex: none; width: 100%; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-1a2m6no { flex: none; width: 100px; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-19907dx { flex: none; width: 150px; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-no4hua { max-width: 200px; }`,
          `.framer-FmkBT.framer-v-3z6pzv .framer-1f14kek { padding: 24px 0px 0px 0px; }`,
          `.framer-FmkBT.framer-v-1jknwqp.framer-w4jy2q { width: 390px; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-1xe6utx { height: 66px; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-7e5kf4 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 24px 16px 24px 16px; width: 100%; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-s362uv { --framer-text-wrap-override: balance; flex: none; width: 100%; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-qvdxy4 { align-content: unset; align-items: unset; display: grid; gap: 48px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-1a2m6no, .framer-FmkBT.framer-v-1jknwqp .framer-19907dx { align-self: start; flex: none; height: min-content; justify-self: start; width: 100%; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-58eh7b { align-self: start; flex: none; grid-column: span 2; justify-self: start; width: 100%; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-no4hua { align-self: start; flex: none; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; max-width: unset; width: 100%; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-1f14kek { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px; justify-content: flex-start; padding: 0px; }`,
          `.framer-FmkBT.framer-v-1jknwqp .framer-dfegvb { flex: none; justify-content: flex-start; width: 100%; }`,
          ...Mt,
          ...Ht,
          ...Et,
          ...Rt,
          `.framer-FmkBT[data-border="true"]::after, .framer-FmkBT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FmkBT`,
      )),
      (ni.displayName = `footer`),
      (ni.defaultProps = { height: 553, width: 1200 }),
      F(ni, {
        variant: {
          options: [`SklNDh61L`, `UZiMAKwsU`, `Q1dxAGv4V`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: G.Enum,
        },
      }),
      P(
        ni,
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
          ...Lr,
          ...Rr,
          ...zr,
          ...M(Nt),
          ...M(Ut),
          ...M(Tt),
          ...M(zt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (ni.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(Yr(), n);
          return Promise.allSettled([
            r.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [
                  z(Cr, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(J, {}, t),
                  z(K, {}, t),
                  z(K, {}, t),
                  z(K, {}, t),
                  z(K, {}, t),
                  z(K, {}, t),
                ]),
              );
            })(),
          ]);
        },
      }));
  }),
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti = e(() => {
    (S(),
      R(),
      A(),
      f(),
      cn(),
      ur(),
      ri(),
      ct(),
      (ii = B(lr)),
      (ai = B(ni)),
      (oi = B(sn)),
      (si = {
        PagUAGcNa: `(min-width: 1200px)`,
        RHy0wNoj5: `(min-width: 810px) and (max-width: 1199.98px)`,
        TaMNwWFRg: `(max-width: 809.98px)`,
      }),
      (ci = () => typeof document < `u`),
      (li = `framer-XnZTp`),
      (ui = {
        PagUAGcNa: `framer-v-1bk0vel`,
        RHy0wNoj5: `framer-v-o1qzy2`,
        TaMNwWFRg: `framer-v-o5e008`,
      }),
      (di = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (fi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pi = () => ({
        from: { alias: `t9kBBiUim`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `t9kBBiUim`, name: `JKePviySE`, type: `Identifier` },
          { collection: `t9kBBiUim`, name: `MtLtvLIVn`, type: `Identifier` },
          { collection: `t9kBBiUim`, name: `vm85lOdv1`, type: `Identifier` },
          { collection: `t9kBBiUim`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `t9kBBiUim`, name: `id`, type: `Identifier` },
        ],
      })),
      (mi = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (hi = {}),
      (gi = Object.keys(hi)),
      (_i = [
        `.framer-XnZTp.framer-1ncykpf, .framer-XnZTp .framer-1ncykpf { display: block; }`,
        `.framer-XnZTp.framer-1bk0vel { align-content: center; align-items: center; background-color: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XnZTp .framer-ax14j6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 0px; order: -1000; padding: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 10; }`,
        `.framer-XnZTp .framer-q8ya82-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-XnZTp .framer-qszmmy { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-XnZTp .framer-r3gnis-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `.framer-XnZTp .framer-1vasls1-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 48px); flex: none; height: auto; left: 20px; order: 1005; position: var(--framer-canvas-fixed-position, fixed); width: 133px; z-index: 10; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (vi = {
        PagUAGcNa: `(min-width: 1200px)`,
        RHy0wNoj5: `(min-width: 810px) and (max-width: 1199.98px)`,
        TaMNwWFRg: `(max-width: 809.98px)`,
      }),
      (yi = { Desktop: `PagUAGcNa`, Phone: `TaMNwWFRg`, Tablet: `RHy0wNoj5` }),
      (bi = ({ value: e }) =>
        ge()
          ? null
          : v(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (xi = ({ activePage: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        eBge24dCy: e ?? i.eBge24dCy ?? `Home`,
        variant: yi[i.variant] ?? i.variant ?? `PagUAGcNa`,
      })),
      (Si = T(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = te(),
          { activeLocale: o, setLocale: s } = qe(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            eBge24dCy: f,
            children: p,
            ...ee
          } = xi(e),
          [h, g] = Se(d, si, !1),
          _ = N(li),
          y = () => !ci() || h !== `TaMNwWFRg`;
        return (
          Ge({}),
          v(Ie.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: yi,
              isLayoutTemplate: !0,
              primaryVariantId: `PagUAGcNa`,
              variantClassNames: ui,
            },
            children: w(k, {
              id: u ?? a,
              children: [
                v(bi, {
                  value: `:root body { background: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255)); }`,
                }),
                w(D.div, {
                  ...ee,
                  className: N(_, `framer-1bk0vel`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    v(D.div, {
                      className: `framer-ax14j6`,
                      children: v(Pe, {
                        children: v(mi, {
                          query: pi(),
                          children: (e, t, n) =>
                            v(m, {
                              children: e?.map(
                                (
                                  { DNLONDBp6: e, id: t, JKePviySE: n, MtLtvLIVn: r, vm85lOdv1: i },
                                  a,
                                ) => (
                                  (e ??= ``),
                                  v(
                                    k,
                                    {
                                      id: `t9kBBiUim-${t}`,
                                      children: v(se.Provider, {
                                        value: { DNLONDBp6: e },
                                        children: v(H, {
                                          height: 70,
                                          width: `100vw`,
                                          y: 0,
                                          children: v(V, {
                                            className: `framer-q8ya82-container`,
                                            nodeId: `koEuUwQtM`,
                                            scopeId: `wRPiSvKLr`,
                                            children: v(Ke, {
                                              breakpoint: h,
                                              overrides: {
                                                RHy0wNoj5: { variant: fi(`nrlEk0fqY`) },
                                                TaMNwWFRg: { variant: fi(`nrlEk0fqY`) },
                                              },
                                              children: v(lr, {
                                                BXBT9GBuu: !0,
                                                EaxxfVIId: !0,
                                                ge3D4KFru: di(n),
                                                GL1cDhAUK: di(r),
                                                h9HxmICCr: !0,
                                                height: `100%`,
                                                id: `koEuUwQtM`,
                                                layoutId: `koEuUwQtM`,
                                                lrEV4_zrs: i,
                                                style: { width: `100%` },
                                                Ti8qX1st0: f,
                                                variant: fi(`lhWIfPWaC`),
                                                vAxDqh1VE: !0,
                                                width: `100%`,
                                                YKFPsh9N8: !0,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    t,
                                  )
                                ),
                              ),
                            }),
                        }),
                      }),
                    }),
                    p,
                    v(`div`, { className: `framer-qszmmy` }),
                    v(H, {
                      height: 553,
                      width: `100vw`,
                      y: 1e3,
                      children: v(V, {
                        className: `framer-r3gnis-container`,
                        nodeId: `epVecyvkA`,
                        scopeId: `wRPiSvKLr`,
                        children: v(Ke, {
                          breakpoint: h,
                          overrides: {
                            RHy0wNoj5: { variant: fi(`UZiMAKwsU`) },
                            TaMNwWFRg: { variant: fi(`Q1dxAGv4V`) },
                          },
                          children: v(ni, {
                            height: `100%`,
                            id: `epVecyvkA`,
                            layoutId: `epVecyvkA`,
                            style: { width: `100%` },
                            variant: fi(`SklNDh61L`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    y() &&
                      v(H, {
                        height: 39,
                        width: `133px`,
                        y: 913,
                        children: v(V, {
                          className: `framer-1vasls1-container hidden-o5e008`,
                          isModuleExternal: !0,
                          layoutScroll: !0,
                          nodeId: `AajsmZHpH`,
                          scopeId: `wRPiSvKLr`,
                          children: v(sn, {
                            GbZZNyHa4: `https://contra.com/payment-link/Y8auFCAz-remodel-interior-design-and-remodeling-template`,
                            GYAAYk3Wb: `Get Template`,
                            height: `100%`,
                            id: `AajsmZHpH`,
                            layoutId: `AajsmZHpH`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
                v(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Ci = (e) =>
        e === j.canvas || e === j.export
          ? [
              ..._i,
              ...gi.flatMap((e) => {
                let t = hi[e];
                return hi[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [..._i, ...gi.map((e) => `@media ${vi[e]} { ${hi[e].join(` `)} }`)]),
      (wi = I(Si, Ci, `framer-XnZTp`)),
      (wi.displayName = `Template`),
      (wi.defaultProps = { height: 1e3, width: 1200 }),
      F(wi, {
        eBge24dCy: {
          defaultValue: `Home`,
          description: `Click here to edit the Active page`,
          placeholder: `Home`,
          title: `Active Page`,
          type: G.String,
        },
      }),
      P(wi, [{ explicitInter: !0, fonts: [] }, ...ii, ...ai, ...oi], {
        supportsExplicitInterCodegen: !0,
      }),
      (wi.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = xe.get(pi(), n, r);
          return Be(
            [
              () => i.preload(),
              () => z(ni, {}, t),
              () => z(sn, {}, t),
              async () =>
                Be(
                  ((await Ce(() => i.readMaybeAsync(), t)) ?? []).flatMap(
                    (e) => () => z(lr, {}, t),
                  ),
                  t,
                ),
            ],
            t,
          );
        },
      }));
  }),
  Ei,
  Di,
  Oi,
  ki,
  Ai = e(() => {
    (S(),
      R(),
      f(),
      (Ei = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 12 24 M 24 12.002 L 0 12.002" fill="transparent" height="24px" id="esNkyNiPS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(2 2) rotate(45 12 12)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Di = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Oi = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (ki = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Oi(e);
          return v(Di, {
            ...s,
            className: N(`framer-7a0CZ`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-7a0CZ { -webkit-mask: ${Ei}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Ei}; width: 28px; }`,
        ],
        `framer-7a0CZ`,
      )),
      (ki.displayName = `Close`),
      F(ki, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  ji,
  Mi,
  Ni,
  Pi,
  Fi = e(() => {
    (S(),
      R(),
      f(),
      (ji = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 15.4 0 L 6.6 0 C 3.489 0 1.933 0 0.967 0.977 C 0 1.952 0 3.524 0 6.667 L 0 8.889 C 0 12.031 0 13.603 0.967 14.579 C 1.933 15.556 3.489 15.556 6.6 15.556 L 15.4 15.556 C 18.511 15.556 20.067 15.556 21.033 14.579 C 22 13.603 22 12.031 22 8.889 L 22 6.667 C 22 3.524 22 1.952 21.033 0.977 C 20.067 0 18.511 0 15.4 0 Z M 13.2 20 L 15.4 20 M 13.2 20 C 12.289 20 11.55 19.254 11.55 18.333 L 11.55 15.556 L 11 15.556 M 13.2 20 L 8.8 20 M 8.8 20 L 6.6 20 M 8.8 20 C 9.711 20 10.45 19.254 10.45 18.333 L 10.45 15.556 L 11 15.556 M 11 15.556 L 11 20" fill="transparent" height="20.00000074174669px" id="dGio95rzU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(3 4)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Mi = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Ni = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Pi = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Ni(e);
          return v(Mi, {
            ...s,
            className: N(`framer-R3pZ1`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-R3pZ1 { -webkit-mask: ${ji}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${ji}; width: 28px; }`,
        ],
        `framer-R3pZ1`,
      )),
      (Pi.displayName = `Monitor`),
      F(Pi, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function Ii(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji = e(() => {
    (S(),
      R(),
      A(),
      f(),
      (Li = { tmgbil2yf: { hover: !0 }, xmbFrJ6SV: { hover: !0 } }),
      (Ri = [`xmbFrJ6SV`, `tmgbil2yf`]),
      (zi = `framer-ELKm4`),
      (Bi = { tmgbil2yf: `framer-v-z1yztp`, xmbFrJ6SV: `framer-v-1kd8un2` }),
      (Vi = { bounce: 0.1, delay: 0, duration: 0.3, type: `spring` }),
      (Hi = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Ui = { "Variant 1": `xmbFrJ6SV`, "Variant 2": `tmgbil2yf` }),
      (Wi = D.create(s)),
      (Gi = ({
        bGColor: e,
        height: t,
        id: n,
        link: r,
        textColor: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        jmVfZVXMZ: e ?? s.jmVfZVXMZ ?? `rgb(0, 0, 0)`,
        TQzHqtVCH: r ?? s.TQzHqtVCH,
        UE5uPeY3D: i ?? s.UE5uPeY3D ?? `rgb(255, 255, 255)`,
        ujbndUBZQ: a ?? s.ujbndUBZQ ?? `Get Acess`,
        variant: Ui[s.variant] ?? s.variant ?? `xmbFrJ6SV`,
      })),
      (Ki = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qi = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              jmVfZVXMZ: p,
              UE5uPeY3D: ee,
              TQzHqtVCH: m,
              ujbndUBZQ: h,
              ...g
            } = Gi(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ne,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = fe({
              cycleOrder: Ri,
              defaultVariant: `xmbFrJ6SV`,
              enabledGestures: Li,
              ref: i,
              variant: f,
              variantClassNames: Bi,
            }),
            E = Ki(e, T),
            O = N(zi);
          return v(k, {
            id: d ?? a,
            children: v(Wi, {
              animate: T,
              initial: !1,
              children: v(Hi, {
                value: Vi,
                children: v(Ye, {
                  href: m,
                  motionChild: !0,
                  nodeId: `xmbFrJ6SV`,
                  openInNewTab: !0,
                  scopeId: `BMECS7XOV`,
                  children: v(D.a, {
                    ...g,
                    ...x,
                    className: `${N(O, `framer-1kd8un2`, u, y)} framer-lpplok`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: E,
                    layoutId: `xmbFrJ6SV`,
                    ref: i,
                    style: { ...l },
                    ...Ii(
                      {
                        "tmgbil2yf-hover": { "data-framer-name": void 0 },
                        "xmbFrJ6SV-hover": { "data-framer-name": void 0 },
                        tmgbil2yf: { "data-framer-name": `Variant 2` },
                      },
                      _,
                      ne,
                    ),
                    children: v(D.div, {
                      className: `framer-1jyo9hp`,
                      layoutDependency: E,
                      layoutId: `kau4Rr4lx`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: p,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        scale: 1,
                      },
                      variants: {
                        "tmgbil2yf-hover": { scale: 1.1 },
                        "xmbFrJ6SV-hover": {
                          "--border-bottom-width": `0px`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-top-width": `0px`,
                          scale: 1.1,
                        },
                        tmgbil2yf: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(0, 0, 0)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `dashed`,
                          "--border-top-width": `1px`,
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                        },
                      },
                      ...Ii({ tmgbil2yf: { "data-border": !0 } }, _, ne),
                      children: v(W, {
                        __fromCanvasComponent: !0,
                        children: v(s, {
                          children: v(D.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `SW50ZXItTWVkaXVt`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `500`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-UE5uPeY3D-BMECS7XOV))`,
                            },
                            children: `Get Acess`,
                          }),
                        }),
                        className: `framer-1pprkzp`,
                        fonts: [`Inter-Medium`],
                        layoutDependency: E,
                        layoutId: `JJoJ3ydy6`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-UE5uPeY3D-BMECS7XOV)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-UE5uPeY3D-BMECS7XOV": ee,
                        },
                        text: h,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ELKm4.framer-lpplok, .framer-ELKm4 .framer-lpplok { display: block; }`,
          `.framer-ELKm4.framer-1kd8un2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-ELKm4 .framer-1jyo9hp { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px 16px 12px 16px; position: relative; width: auto; }`,
          `.framer-ELKm4 .framer-1pprkzp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ELKm4[data-border="true"]::after, .framer-ELKm4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-ELKm4`,
      )),
      (qi.displayName = `Button 2`),
      (qi.defaultProps = { height: 41, width: 100 }),
      F(qi, {
        variant: {
          options: [`xmbFrJ6SV`, `tmgbil2yf`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        jmVfZVXMZ: { defaultValue: `rgb(0, 0, 0)`, title: `BG Color`, type: G.Color },
        UE5uPeY3D: { defaultValue: `rgb(255, 255, 255)`, title: `Text Color`, type: G.Color },
        TQzHqtVCH: { title: `Link`, type: G.Link },
        ujbndUBZQ: {
          defaultValue: `Get Acess`,
          displayTextArea: !1,
          title: `Title`,
          type: G.String,
        },
        onujbndUBZQChange: { changes: `ujbndUBZQ`, type: G.ChangeHandler },
      }),
      P(
        qi,
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
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Yi,
  Xi,
  Zi,
  Qi,
  $i = e(() => {
    (S(),
      R(),
      f(),
      (Yi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 7.639 4.284 C 7.446 4.974 6.526 5.461 4.689 6.435 C 2.913 7.376 2.025 7.848 1.309 7.659 C 1.016 7.582 0.747 7.434 0.526 7.227 C 0 6.732 0 5.77 0 3.85 C 0 1.929 0 0.968 0.526 0.473 C 0.744 0.268 1.013 0.12 1.309 0.042 C 2.024 -0.149 2.913 0.323 4.689 1.265 C 6.526 2.239 7.446 2.727 7.639 3.415 C 7.72 3.7 7.72 3.999 7.639 4.284 Z" fill="transparent" height="7.700294709793294px" id="pB7nrUJb_" transform="translate(10.7 10.15)" width="7.6997249152354925px"><path d="M 7.639 4.284 C 7.446 4.974 6.526 5.461 4.689 6.435 C 2.913 7.376 2.025 7.848 1.309 7.659 C 1.016 7.582 0.747 7.434 0.526 7.227 C 0 6.732 0 5.77 0 3.85 C 0 1.929 0 0.968 0.526 0.473 C 0.744 0.268 1.013 0.12 1.309 0.042 C 2.024 -0.149 2.913 0.323 4.689 1.265 C 6.526 2.239 7.446 2.727 7.639 3.415 C 7.72 3.7 7.72 3.999 7.639 4.284 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="7.700294614425868px" id="DDcKTw6ba" transform="translate(0 0)" width="7.699724947017785px"/></g><path d="M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z" fill="transparent" height="22px" id="KPjUXIMwt" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(3 3)" width="22px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Xi = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Zi = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Qi = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Zi(e);
          return v(Xi, {
            ...s,
            className: N(`framer-elhxB`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-elhxB { -webkit-mask: ${Yi}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Yi}; width: 28px; }`,
        ],
        `framer-elhxB`,
      )),
      (Qi.displayName = `Play`),
      F(Qi, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  ea,
  ta,
  na,
  ra,
  ia = e(() => {
    (S(),
      R(),
      f(),
      (ea = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 0.634 9.967 C 0.16 8.678 -0.078 8.034 0.023 7.621 C 0.134 7.169 0.461 6.817 0.879 6.7 C 1.262 6.592 1.857 6.852 3.046 7.372 C 4.097 7.83 4.623 8.059 5.118 8.047 C 5.663 8.033 6.186 7.819 6.603 7.439 C 6.982 7.094 7.235 6.546 7.742 5.449 L 8.86 3.03 C 9.794 1.01 10.261 0 11 0 C 11.74 0 12.207 1.01 13.14 3.03 L 14.259 5.449 C 14.766 6.546 15.02 7.094 15.398 7.439 C 15.815 7.818 16.339 8.033 16.883 8.047 C 17.377 8.059 17.903 7.83 18.954 7.37 C 20.145 6.852 20.739 6.592 21.121 6.7 C 21.539 6.817 21.867 7.169 21.977 7.621 C 22.078 8.034 21.841 8.677 21.366 9.967 L 19.328 15.506 C 18.456 17.876 18.021 19.061 17.108 19.73 C 16.195 20.4 15.015 20.4 12.658 20.4 L 9.343 20.4 C 6.984 20.4 5.806 20.4 4.894 19.73 C 3.981 19.061 3.545 17.876 2.672 15.506 Z M 11 14.4 L 11.011 14.4 M 4.889 24 L 17.111 24" fill="transparent" height="24px" id="YsR90882f" transform="translate(3 2)" width="22px"><path d="M 0.634 9.967 C 0.16 8.678 -0.078 8.034 0.023 7.621 C 0.134 7.169 0.461 6.817 0.879 6.7 C 1.262 6.592 1.857 6.852 3.046 7.372 C 4.097 7.83 4.623 8.059 5.118 8.047 C 5.663 8.033 6.186 7.819 6.603 7.439 C 6.982 7.094 7.235 6.546 7.742 5.449 L 8.86 3.03 C 9.794 1.01 10.261 0 11 0 C 11.74 0 12.207 1.01 13.14 3.03 L 14.259 5.449 C 14.766 6.546 15.02 7.094 15.398 7.439 C 15.815 7.818 16.339 8.033 16.883 8.047 C 17.377 8.059 17.903 7.83 18.954 7.37 C 20.145 6.852 20.739 6.592 21.121 6.7 C 21.539 6.817 21.867 7.169 21.977 7.621 C 22.078 8.034 21.841 8.677 21.366 9.967 L 19.328 15.506 C 18.456 17.876 18.021 19.061 17.108 19.73 C 16.195 20.4 15.015 20.4 12.658 20.4 L 9.343 20.4 C 6.984 20.4 5.806 20.4 4.894 19.73 C 3.981 19.061 3.545 17.876 2.672 15.506 Z" fill="transparent" height="20.4px" id="ni9jV9y7F" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="22px"/><path d="M 0 0 L 0.011 0" fill="transparent" height="1px" id="ocEOUpWpL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(11 14.4)" width="1px"/><path d="M 0 0 L 12.222 0" fill="transparent" height="1px" id="tF6r1kcvW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(4.889 24)" width="12.221890968678736px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ta = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (na = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (ra = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = na(e);
          return v(ta, {
            ...s,
            className: N(`framer-eUoQv`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-eUoQv { -webkit-mask: ${ea}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${ea}; width: 28px; }`,
        ],
        `framer-eUoQv`,
      )),
      (ra.displayName = `Premium`),
      F(ra, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  aa,
  oa,
  sa,
  ca,
  la = e(() => {
    (S(),
      R(),
      f(),
      (aa = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 15.42 2.725 L 17.348 0.797 C 18.412 -0.267 20.137 -0.267 21.202 0.797 C 22.266 1.862 22.266 3.589 21.202 4.653 L 19.275 6.582 M 15.42 2.725 L 4.098 14.052 C 2.661 15.49 1.942 16.209 1.452 17.085 C 0.963 17.961 0.47 20.029 0 22.008 C 1.977 21.538 4.045 21.045 4.921 20.555 C 5.797 20.066 6.516 19.346 7.953 17.909 L 19.275 6.582 M 15.42 2.725 L 19.275 6.582 M 9.625 22.009 L 17.876 22.009" fill="transparent" height="22.00876235961914px" id="xjtu4k7DQ" transform="translate(3 2.998)" width="21.999999875336698px"><path d="M 15.42 2.725 L 17.348 0.797 C 18.412 -0.267 20.137 -0.267 21.202 0.797 C 22.266 1.862 22.266 3.589 21.202 4.653 L 19.275 6.582 M 15.42 2.725 L 4.098 14.052 C 2.661 15.49 1.942 16.209 1.452 17.085 C 0.963 17.961 0.47 20.029 0 22.008 C 1.977 21.538 4.045 21.045 4.921 20.555 C 5.797 20.066 6.516 19.346 7.953 17.909 L 19.275 6.582 M 15.42 2.725 L 19.275 6.582" fill="transparent" height="22.00810353480065px" id="vq9AfdErz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(0 0)" width="21.999999875336698px"/><path d="M 0 0 L 8.25 0" fill="transparent" height="1px" id="u40DTMXN8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(9.625 22.009)" width="8.250247478602432px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (oa = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (sa = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (ca = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = sa(e);
          return v(oa, {
            ...s,
            className: N(`framer-mBfZ5`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-mBfZ5 { -webkit-mask: ${aa}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${aa}; width: 28px; }`,
        ],
        `framer-mBfZ5`,
      )),
      (ca.displayName = `Pen`),
      F(ca, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  ua = e(() => {
    at();
  });
function da({
  url: e,
  play: t,
  shouldMute: n,
  thumbnail: r,
  isRed: a,
  onClick: o,
  border: s,
  boxShadow: l,
  onMouseEnter: u,
  onMouseLeave: d,
  onMouseDown: f,
  onMouseUp: p,
  title: ee,
  ...te
}) {
  let h = $e(),
    g = t !== `Off`,
    _ = h || (r !== `Off` && !g),
    [y, b] = i(() => !0, !1),
    [x, ne] = i(() => !0, !_),
    [S, C] = c(!1),
    T = it(te),
    E = T !== `0px 0px 0px 0px` && T !== `0px`;
  if (e === ``) return v(ha, {});
  let D = fa(e);
  if (D === void 0) return v(ga, { message: `Invalid Youtube URL.` });
  let [O, re, k] = D,
    A = re.searchParams;
  if (k) for (let [e, t] of k) (A.set(e, t), e === `t` && A.set(`start`, t));
  (A.set(`iv_load_policy`, `3`),
    A.set(`rel`, `0`),
    A.set(`modestbranding`, `1`),
    A.set(`playsinline`, `1`),
    x ? (g || (_ && x)) && A.set(`autoplay`, `1`) : A.set(`autoplay`, `0`),
    g && n && A.set(`mute`, `1`),
    t === `Loop` && (A.set(`loop`, `1`), A.set(`playlist`, O)),
    a || A.set(`color`, `white`));
  let ie = {
    title: ee || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: re.href,
    frameBorder: `0`,
    onClick: o,
    onMouseEnter: u,
    onMouseLeave: d,
    onMouseDown: f,
    onMouseUp: p,
  };
  return w(`article`, {
    onPointerEnter: () => C(!0),
    onPointerLeave: () => C(!1),
    onPointerOver: b,
    onKeyDown: ne,
    onClick: ne,
    style: {
      ...xa,
      borderRadius: T,
      boxShadow: l,
      transform: E && (x || h) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      _ &&
        w(m, {
          children: [
            v(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            v(`img`, { decoding: `async`, src: ma(O, r), style: { ...Ca, objectFit: `cover` } }),
          ],
        }),
      y &&
        w(m, {
          children: [
            v(`link`, { rel: `dns-prefetch`, href: `https://i.ytimg.com` }),
            v(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
            v(`link`, { rel: `dns-prefetch`, href: `https://www.google.com` }),
          ],
        }),
      h
        ? null
        : v(`iframe`, {
            loading: x ? void 0 : `lazy`,
            style: x ? Ca : { ...Ca, display: `none` },
            ...ie,
          }),
      s &&
        v(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            pointerEvents: `none`,
            boxSizing: `border-box`,
            borderRadius: T,
            ...s,
          },
        }),
      x ? null : v(_a, { onClick: ne, isHovered: S, isRed: a }),
    ],
  });
}
function fa(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, pa(e), null];
  }
  let n = t.searchParams;
  if (
    t.hostname === `youtube.com` ||
    t.hostname === `www.youtube.com` ||
    t.hostname === `youtube-nocookie.com` ||
    t.hostname === `www.youtube-nocookie.com`
  ) {
    let e = t.pathname.slice(1).split(`/`),
      r = e[0];
    if (r === `watch`) {
      let e = t.searchParams.get(`v`);
      return [e, pa(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, pa(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, pa(e), n];
  }
}
function pa(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function ma(e, t) {
  let n = `https://i.ytimg.com/vi_webp/`,
    r = `webp`;
  switch (t) {
    case `Low Quality`:
      return `${n}${e}/hqdefault.${r}`;
    case `Medium Quality`:
      return `${n}${e}/sddefault.${r}`;
    case `High Quality`:
      return `${n}${e}/maxresdefault.${r}`;
    default:
      return `${n}${e}/0.${r}`;
  }
}
function ha() {
  return v(`div`, {
    style: { ...Qe, overflow: `hidden` },
    children: v(`div`, {
      style: Sa,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function ga({ message: e }) {
  return v(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...tt, overflow: `hidden` },
    children: w(`div`, { style: Sa, children: [`Error: `, e] }),
  });
}
function _a({ onClick: e, isHovered: t, isRed: n }) {
  return v(`button`, {
    onClick: e,
    "aria-label": `Play`,
    style: ba,
    children: w(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        v(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        v(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa = e(() => {
    (S(),
      f(),
      R(),
      ua(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((va ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((ya ||= {})),
      (da.displayName = `YouTube`),
      F(da, {
        url: { type: G.String, title: `Video` },
        play: { type: G.Enum, title: `Autoplay`, options: Object.values(va) },
        shouldMute: {
          title: `Mute`,
          type: G.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: G.Enum,
          options: Object.values(ya),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: G.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...nt,
        border: { type: G.Border, optional: !0 },
        boxShadow: { type: G.BoxShadow, optional: !0, title: `Shadows` },
        ...et,
      }),
      (da.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
        boxShadow: null,
        border: null,
      }),
      (ba = {
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: 68,
        height: 48,
        padding: 0,
        border: `none`,
        background: `transparent`,
        cursor: `pointer`,
      }),
      (xa = { position: `relative`, width: `100%`, height: `100%` }),
      (Sa = { textAlign: `center`, minWidth: 140 }),
      (Ca = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }));
  }),
  Ta,
  Ea,
  Da,
  Oa,
  ka = e(() => {
    (S(),
      R(),
      f(),
      (Ta = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 20.389 1.611 C 22 3.221 22 5.814 22 11 C 22 16.185 22 18.779 20.389 20.389 C 18.778 22 16.186 22 11 22 C 5.815 22 3.221 22 1.611 20.389 C 0 18.778 0 16.186 0 11 C 0 5.815 0 3.221 1.611 1.611 C 3.221 0 5.814 0 11 0 C 16.185 0 18.779 0 20.389 1.611 Z M 22 11 L 0 11 M 11 0 L 11 22" fill="transparent" height="22px" id="LD1HviDpG" transform="translate(3 3)" width="22px"><path d="M 20.389 1.611 C 22 3.221 22 5.814 22 11 C 22 16.185 22 18.779 20.389 20.389 C 18.778 22 16.186 22 11 22 C 5.815 22 3.221 22 1.611 20.389 C 0 18.778 0 16.186 0 11 C 0 5.815 0 3.221 1.611 1.611 C 3.221 0 5.814 0 11 0 C 16.185 0 18.779 0 20.389 1.611 Z" fill="transparent" height="22px" id="TImpFPiFO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="22px"/><path d="M 22 11 L 0 11 M 11 0 L 11 22" fill="transparent" height="22px" id="QWZOYUegx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="22px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ea = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Da = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Oa = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Da(e);
          return v(Ea, {
            ...s,
            className: N(`framer-3S1dH`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-3S1dH { -webkit-mask: ${Ta}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Ta}; width: 28px; }`,
        ],
        `framer-3S1dH`,
      )),
      (Oa.displayName = `Grid`),
      F(Oa, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  Aa,
  ja,
  Ma,
  Na,
  Pa = e(() => {
    (S(),
      R(),
      f(),
      (Aa = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 5.058 1.169 C 6.496 0.389 7.214 0 8 0 C 8.786 0 9.504 0.389 10.942 1.169 L 12.942 2.254 C 14.433 3.062 15.179 3.467 15.59 4.144 C 16 4.82 16 5.645 16 7.295 L 16 9.205 C 16 10.855 16 11.68 15.589 12.356 C 15.179 13.033 14.434 13.438 12.942 14.246 L 10.942 15.331 C 9.504 16.111 8.786 16.5 8 16.5 C 7.214 16.5 6.496 16.111 5.058 15.331 L 3.058 14.246 C 1.567 13.438 0.821 13.033 0.41 12.356 C 0 11.68 0 10.855 0 9.205 L 0 7.295 C 0 5.645 0 4.82 0.411 4.144 C 0.821 3.467 1.566 3.062 3.058 2.254 Z M 4.571 8.984 C 4.571 8.984 5.429 8.984 6.286 10.45 C 6.286 10.45 9.008 6.784 11.429 6.05 M 13.581 14.3 L 14.346 17.831 C 14.838 20.099 15.085 21.233 14.578 21.771 C 14.073 22.309 13.195 21.847 11.44 20.922 L 8.841 19.553 C 8.426 19.335 8.219 19.225 8 19.225 C 7.781 19.225 7.574 19.335 7.159 19.553 L 4.56 20.922 C 2.805 21.846 1.927 22.309 1.422 21.771 C 0.915 21.233 1.162 20.099 1.654 17.831 L 2.419 14.3" fill="transparent" height="22px" id="JYnfX8gNw" transform="translate(6 3)" width="16px"><path d="M 5.058 1.169 C 6.496 0.389 7.214 0 8 0 C 8.786 0 9.504 0.389 10.942 1.169 L 12.942 2.254 C 14.433 3.062 15.179 3.467 15.59 4.144 C 16 4.82 16 5.645 16 7.295 L 16 9.205 C 16 10.855 16 11.68 15.589 12.356 C 15.179 13.033 14.434 13.438 12.942 14.246 L 10.942 15.331 C 9.504 16.111 8.786 16.5 8 16.5 C 7.214 16.5 6.496 16.111 5.058 15.331 L 3.058 14.246 C 1.567 13.438 0.821 13.033 0.41 12.356 C 0 11.68 0 10.855 0 9.205 L 0 7.295 C 0 5.645 0 4.82 0.411 4.144 C 0.821 3.467 1.566 3.062 3.058 2.254 Z" fill="transparent" height="16.500001168071915px" id="szeNeaGsG" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="16px"/><path d="M 3.429 2.934 C 3.429 2.934 4.286 2.934 5.143 4.4 C 5.143 4.4 7.865 0.734 10.286 0 M 12.438 8.25 L 13.203 11.781 C 13.695 14.049 13.942 15.183 13.435 15.721 C 12.93 16.259 12.053 15.797 10.297 14.872 L 7.698 13.503 C 7.283 13.285 7.077 13.175 6.857 13.175 C 6.638 13.175 6.431 13.285 6.016 13.503 L 3.417 14.872 C 1.662 15.796 0.784 16.259 0.279 15.721 C -0.227 15.183 0.019 14.049 0.511 11.781 L 1.277 8.25" fill="transparent" height="15.949999495902189px" id="GDuqhkMKO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(1.143 6.05)" width="13.71433697262984px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ja = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Ma = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Na = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Ma(e);
          return v(ja, {
            ...s,
            className: N(`framer-x6QDe`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-x6QDe { -webkit-mask: ${Aa}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Aa}; width: 28px; }`,
        ],
        `framer-x6QDe`,
      )),
      (Na.displayName = `Reward`),
      F(Na, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  Fa,
  Ia,
  La,
  Ra,
  za = e(() => {
    (S(),
      R(),
      f(),
      (Fa = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 16.997 14.518 C 17.012 14.386 16.97 14.254 16.88 14.155 C 16.79 14.056 16.662 14 16.528 14 L 14.641 14 C 14.44 14 14.262 14.125 14.195 14.313 L 14.018 14.82 C 13.55 16.674 12.741 17.792 11.62 19.341 L 11.378 19.676 C 11.2 19.921 10.914 20.066 10.61 20.067 L 10.597 20.067 C 11.065 19.555 11.324 18.89 11.324 18.2 C 11.324 16.656 10.054 15.4 8.493 15.4 C 6.932 15.4 5.662 16.656 5.662 18.2 C 5.662 18.917 5.939 19.571 6.389 20.067 C 6.085 20.066 5.801 19.921 5.623 19.677 L 5.379 19.339 C 4.259 17.792 3.45 16.673 2.97 14.779 L 2.805 14.313 C 2.738 14.125 2.56 14 2.359 14 L 0.472 14 C 0.338 14 0.21 14.056 0.12 14.155 C 0.03 14.254 -0.012 14.386 0.003 14.518 C 0.241 16.621 1.002 18.634 2.219 20.375 L 4.718 23.946 L 4.718 28 L 5.662 28 L 5.662 23.8 C 5.662 23.705 5.633 23.612 5.578 23.534 L 2.995 19.844 C 1.969 18.376 1.291 16.697 1.011 14.934 L 2.026 14.934 L 2.066 15.047 C 2.578 17.072 3.475 18.312 4.611 19.882 L 4.855 20.219 C 5.21 20.709 5.782 20.999 6.391 21 L 10.61 21 C 11.219 20.999 11.791 20.708 12.146 20.217 L 12.387 19.883 C 13.524 18.313 14.422 17.073 14.921 15.087 L 14.976 14.933 L 15.989 14.933 C 15.709 16.697 15.031 18.375 14.005 19.844 L 11.422 23.534 C 11.367 23.612 11.338 23.705 11.338 23.8 L 11.338 28 L 12.282 28 L 12.282 23.946 L 14.781 20.375 C 15.998 18.634 16.759 16.622 16.997 14.518 Z M 8.494 16.333 C 9.534 16.333 10.381 17.171 10.381 18.2 C 10.381 19.229 9.534 20.067 8.494 20.067 C 7.453 20.067 6.606 19.229 6.606 18.2 C 6.606 17.171 7.453 16.333 8.494 16.333 Z M 8.244 12.054 C 8.403 12.159 8.611 12.159 8.771 12.054 C 9.816 11.359 13.225 8.89 13.225 6.276 C 13.225 5.012 12.487 4.063 11.299 3.8 C 10.39 3.597 9.245 3.864 8.507 4.703 C 7.77 3.864 6.626 3.595 5.715 3.8 C 4.527 4.063 3.789 5.012 3.789 6.276 C 3.789 8.89 7.199 11.359 8.244 12.054 Z M 5.921 4.711 C 6.054 4.681 6.189 4.667 6.325 4.667 C 6.991 4.667 7.725 5.005 8.081 5.75 C 8.159 5.914 8.325 6.018 8.507 6.018 C 8.69 6.018 8.856 5.914 8.934 5.75 C 9.364 4.848 10.346 4.543 11.093 4.71 C 11.451 4.79 12.282 5.101 12.282 6.276 C 12.282 8.271 9.533 10.381 8.507 11.1 C 7.482 10.381 4.733 8.271 4.733 6.276 C 4.733 5.101 5.564 4.79 5.921 4.711 Z M 14.641 6.533 L 16.528 6.533 L 16.528 7.467 L 14.641 7.467 Z M 0.487 6.533 L 2.374 6.533 L 2.374 7.467 L 0.487 7.467 Z M 8.036 0 L 8.979 0 L 8.979 1.867 L 8.036 1.867 Z M 2.501 2.198 L 3.168 1.538 L 4.502 2.857 L 3.835 3.517 Z M 12.508 2.857 L 13.842 1.537 L 14.509 2.197 L 13.175 3.517 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="28px" id="KwJMDZOSM" transform="translate(6 0)" width="17px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ia = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (La = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Ra = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = La(e);
          return v(Ia, {
            ...s,
            className: N(`framer-0SN1i`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-0SN1i { -webkit-mask: ${Fa}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Fa}; width: 28px; }`,
        ],
        `framer-0SN1i`,
      )),
      (Ra.displayName = `Lifetime`),
      F(Ra, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  Ba,
  Va,
  Ha,
  Ua,
  Wa = e(() => {
    (S(),
      R(),
      f(),
      (Ba = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 6.674 10.745 C 6.209 10.745 5.832 11.123 5.832 11.59 C 5.832 12.057 6.209 12.435 6.674 12.435 L 15.702 12.435 C 16.167 12.435 16.544 12.057 16.544 11.59 C 16.544 11.123 16.167 10.745 15.702 10.745 Z M 10.733 15.543 L 6.674 15.543 C 6.209 15.543 5.832 15.922 5.832 16.389 C 5.832 16.856 6.209 17.234 6.674 17.234 L 10.733 17.234 C 11.198 17.234 11.575 16.856 11.575 16.389 C 11.575 15.922 11.198 15.543 10.733 15.543 Z M 10.592 26.3 L 4.183 26.3 C 2.801 26.296 1.683 25.17 1.685 23.783 L 1.685 6.66 C 1.683 5.272 2.801 4.146 4.183 4.142 L 5.922 4.142 L 5.922 4.355 C 5.924 5.589 6.921 6.589 8.15 6.59 L 16.196 6.59 C 17.426 6.589 18.423 5.589 18.424 4.355 L 18.424 4.142 L 20.155 4.142 C 21.556 4.142 22.652 5.248 22.652 6.66 L 22.652 11.478 C 22.652 11.945 23.029 12.323 23.494 12.323 C 23.959 12.323 24.336 11.945 24.336 11.478 L 24.336 6.66 C 24.336 4.339 22.465 2.457 20.154 2.452 L 18.423 2.452 L 18.423 2.236 C 18.422 1.001 17.425 0.001 16.195 0 L 8.149 0 C 6.92 0.001 5.923 1.001 5.921 2.236 L 5.921 2.452 L 4.183 2.452 C 1.872 2.457 0.001 4.339 0 6.66 L 0 23.783 C 0 26.103 1.877 27.991 4.183 27.991 L 10.592 27.991 C 11.057 27.991 11.434 27.612 11.434 27.145 C 11.434 26.679 11.057 26.3 10.592 26.3 Z M 7.607 2.236 C 7.607 1.935 7.851 1.691 8.15 1.691 L 16.196 1.691 C 16.496 1.691 16.739 1.935 16.739 2.236 L 16.739 4.354 C 16.739 4.654 16.496 4.898 16.196 4.898 L 8.15 4.898 C 7.85 4.898 7.607 4.654 7.607 4.354 Z M 26.108 15.281 C 24.956 14.123 22.943 14.122 21.79 15.281 L 14.324 22.775 C 14.085 23.015 13.926 23.325 13.87 23.66 L 13.46 26.092 C 13.372 26.614 13.542 27.147 13.915 27.521 C 14.288 27.895 14.819 28.065 15.339 27.977 L 17.76 27.567 C 18.096 27.509 18.401 27.352 18.641 27.11 L 26.107 19.616 C 27.297 18.418 27.298 16.479 26.108 15.281 Z M 17.48 25.9 L 15.122 26.373 L 15.516 23.971 L 20.867 18.599 L 22.805 20.545 Z M 24.917 18.42 L 23.994 19.348 L 22.057 17.404 L 22.981 16.476 C 23.237 16.218 23.585 16.073 23.948 16.074 C 24.502 16.074 25 16.409 25.212 16.922 C 25.424 17.436 25.307 18.026 24.917 18.42 Z" fill="transparent" height="27.999999758176866px" id="m5nMgMSpu" width="27px"><path d="M 0.842 0 C 0.377 0 0 0.378 0 0.845 C 0 1.312 0.377 1.691 0.842 1.691 L 9.871 1.691 C 10.336 1.691 10.713 1.312 10.713 0.845 C 10.713 0.378 10.336 0 9.871 0 Z M 4.902 4.799 L 0.842 4.799 C 0.377 4.799 0 5.177 0 5.644 C 0 6.111 0.377 6.49 0.842 6.49 L 4.902 6.49 C 5.367 6.49 5.744 6.111 5.744 5.644 C 5.744 5.177 5.367 4.799 4.902 4.799 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="6.489540516011173px" id="XTFo7ofAh" transform="translate(5.832 10.745)" width="10.71277576781813px"/><path d="M 10.592 26.3 L 4.183 26.3 C 2.801 26.296 1.683 25.17 1.685 23.783 L 1.685 6.66 C 1.683 5.272 2.801 4.146 4.183 4.142 L 5.922 4.142 L 5.922 4.355 C 5.924 5.589 6.921 6.589 8.15 6.59 L 16.196 6.59 C 17.426 6.589 18.423 5.589 18.424 4.355 L 18.424 4.142 L 20.155 4.142 C 21.556 4.142 22.652 5.248 22.652 6.66 L 22.652 11.478 C 22.652 11.945 23.029 12.323 23.494 12.323 C 23.959 12.323 24.336 11.945 24.336 11.478 L 24.336 6.66 C 24.336 4.339 22.465 2.457 20.154 2.452 L 18.423 2.452 L 18.423 2.236 C 18.422 1.001 17.425 0.001 16.195 0 L 8.149 0 C 6.92 0.001 5.923 1.001 5.921 2.236 L 5.921 2.452 L 4.183 2.452 C 1.872 2.457 0.001 4.339 0 6.66 L 0 23.783 C 0 26.103 1.877 27.991 4.183 27.991 L 10.592 27.991 C 11.057 27.991 11.434 27.612 11.434 27.145 C 11.434 26.679 11.057 26.3 10.592 26.3 Z M 7.607 2.236 C 7.607 1.935 7.851 1.691 8.15 1.691 L 16.196 1.691 C 16.496 1.691 16.739 1.935 16.739 2.236 L 16.739 4.354 C 16.739 4.654 16.496 4.898 16.196 4.898 L 8.15 4.898 C 7.85 4.898 7.607 4.654 7.607 4.354 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="27.99078554380466px" id="yzIzWk4A0" width="24.336245313935805px"/><path d="M 12.671 0.869 C 11.519 -0.289 9.506 -0.29 8.352 0.869 L 0.887 8.364 C 0.647 8.604 0.488 8.913 0.432 9.248 L 0.023 11.68 C -0.065 12.202 0.105 12.735 0.478 13.109 C 0.851 13.484 1.381 13.654 1.901 13.565 L 4.323 13.155 C 4.659 13.098 4.964 12.94 5.204 12.698 L 12.669 5.204 C 13.86 4.006 13.861 2.068 12.671 0.869 Z M 4.043 11.489 L 1.684 11.961 L 2.079 9.559 L 7.43 4.187 L 9.368 6.133 Z M 11.479 4.008 L 10.557 4.936 L 8.62 2.992 L 9.543 2.065 C 9.8 1.806 10.148 1.661 10.511 1.662 C 11.064 1.662 11.563 1.997 11.775 2.51 C 11.987 3.024 11.87 3.615 11.479 4.008 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="13.588201281004016px" id="HxAu5dJIj" transform="translate(13.437 14.412)" width="13.562725067138409px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Va = T((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? v(D.div, { ...a, layoutId: r, ref: t }) : v(`div`, { ...a, ref: t });
      })),
      (Ha = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Ua = I(
        T(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Ha(e);
          return v(Va, {
            ...s,
            className: N(`framer-mYtrb`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-mYtrb { -webkit-mask: ${Ba}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Ba}; width: 28px; }`,
        ],
        `framer-mYtrb`,
      )),
      (Ua.displayName = `Form`),
      F(Ua, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function Ga(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  X,
  to = e(() => {
    (S(),
      R(),
      A(),
      f(),
      (Ka = [`lMgxWjmP2`, `MpcDvPQm5`]),
      (qa = `framer-Dpwhz`),
      (Ja = { lMgxWjmP2: `framer-v-pbixqy`, MpcDvPQm5: `framer-v-8v1wj5` }),
      (Ya = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Xa = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Za = { "Variant 1": `lMgxWjmP2`, "Variant 2": `MpcDvPQm5` }),
      (Qa = D.create(s)),
      ($a = ({ height: e, id: t, number: n, title: r, width: i, ...a }) => ({
        ...a,
        FQvEaYc7p: r ?? a.FQvEaYc7p ?? `Bonus applied`,
        variant: Za[a.variant] ?? a.variant ?? `lMgxWjmP2`,
        xp76Ewgq4: n ?? a.xp76Ewgq4 ?? `1`,
      })),
      (eo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              FQvEaYc7p: p,
              xp76Ewgq4: ee,
              ...m
            } = $a(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = fe({
              cycleOrder: Ka,
              defaultVariant: `lMgxWjmP2`,
              ref: i,
              variant: f,
              variantClassNames: Ja,
            }),
            T = eo(e, C),
            E = N(qa),
            O = () => h !== `MpcDvPQm5`,
            re = () => h === `MpcDvPQm5`;
          return v(k, {
            id: d ?? a,
            children: v(Qa, {
              animate: C,
              initial: !1,
              children: v(Xa, {
                value: Ya,
                children: w(D.div, {
                  ...m,
                  ...y,
                  className: N(E, `framer-pbixqy`, u, g),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: T,
                  layoutId: `lMgxWjmP2`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...l,
                  },
                  ...Ga({ MpcDvPQm5: { "data-framer-name": `Variant 2` } }, h, b),
                  children: [
                    w(D.div, {
                      className: `framer-1kw8sxb`,
                      layoutDependency: T,
                      layoutId: `rmfGP1LRm`,
                      children: [
                        O() &&
                          v(ae, {
                            className: `framer-1by2bpr`,
                            layoutDependency: T,
                            layoutId: `wdHdG7_90`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 9.6" overflow="visible"><path d="M 0 6.545 C 0 6.545 1.286 6.545 3 9.6 C 3 9.6 7.765 1.6 12 0" fill="transparent" stroke-width="1.5" stroke="var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black color&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                          }),
                        re() &&
                          v(W, {
                            __fromCanvasComponent: !0,
                            children: v(s, {
                              children: v(D.p, {
                                dir: `auto`,
                                style: {
                                  "--framer-font-size": `12px`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                },
                                children: `1`,
                              }),
                            }),
                            className: `framer-tliack`,
                            fonts: [`Inter`],
                            layoutDependency: T,
                            layoutId: `DZLWEkxrh`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: ee,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                    v(W, {
                      __fromCanvasComponent: !0,
                      children: v(s, {
                        children: v(D.p, {
                          dir: `auto`,
                          style: {
                            "--framer-font-size": `14px`,
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                          },
                          children: `Bonus applied`,
                        }),
                      }),
                      className: `framer-11vyb56`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `RCUTRTPDC`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: p,
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Dpwhz.framer-btw162, .framer-Dpwhz .framer-btw162 { display: block; }`,
          `.framer-Dpwhz.framer-pbixqy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 346px; }`,
          `.framer-Dpwhz .framer-1kw8sxb { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 3px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-Dpwhz .framer-1by2bpr { height: 10px; position: relative; width: 12px; }`,
          `.framer-Dpwhz .framer-tliack { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 12px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Dpwhz .framer-11vyb56 { --framer-text-wrap: balance; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Dpwhz.framer-v-8v1wj5 .framer-1kw8sxb { padding: 0px; }`,
        ],
        `framer-Dpwhz`,
      )),
      (X.displayName = `Element/list`),
      (X.defaultProps = { height: 17, width: 346 }),
      F(X, {
        variant: {
          options: [`lMgxWjmP2`, `MpcDvPQm5`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        FQvEaYc7p: {
          defaultValue: `Bonus applied`,
          displayTextArea: !0,
          title: `Title`,
          type: G.String,
        },
        onFQvEaYc7pChange: { changes: `FQvEaYc7p`, type: G.ChangeHandler },
        xp76Ewgq4: { defaultValue: `1`, displayTextArea: !1, title: `Number`, type: G.String },
        onxp76Ewgq4Change: { changes: `xp76Ewgq4`, type: G.ChangeHandler },
      }),
      P(
        X,
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
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function no(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  Z,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo = e(() => {
    (S(),
      R(),
      A(),
      f(),
      wa(),
      za(),
      ka(),
      la(),
      Ai(),
      $i(),
      Wa(),
      ia(),
      Fi(),
      Pa(),
      Ji(),
      to(),
      (ro = B(ki)),
      (io = B(da)),
      (ao = B(Pi)),
      (oo = B(X)),
      (so = B(ca)),
      (co = B(Ua)),
      (lo = B(Na)),
      (uo = B(Qi)),
      (fo = B(ra)),
      (po = B(Oa)),
      (mo = B(Ra)),
      (ho = B(qi)),
      (go = [`JbGIYoPYa`, `WGVOt2VT4`]),
      (_o = `framer-IcYGw`),
      (vo = { JbGIYoPYa: `framer-v-n6c5zl`, WGVOt2VT4: `framer-v-t9eejd` }),
      (yo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (bo = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (xo = { "Variant 1": `JbGIYoPYa`, "Variant 2": `WGVOt2VT4` }),
      (So = D.create(s)),
      (Co = ({ askQuestions: e, close: t, getAccess: n, height: r, id: i, width: a, ...o }) => ({
        ...o,
        DBCgKfbVY: t ?? o.DBCgKfbVY,
        K_lRf1zsN: e ?? o.K_lRf1zsN,
        SNhruNZYT: n ?? o.SNhruNZYT,
        variant: xo[o.variant] ?? o.variant ?? `JbGIYoPYa`,
      })),
      (wo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (To = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe(),
            l = De(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              SNhruNZYT: ee,
              K_lRf1zsN: m,
              DBCgKfbVY: h,
              ...g
            } = Co(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ne,
              isLoading: S,
              setGestureState: C,
              setVariant: T,
              variants: E,
            } = fe({
              cycleOrder: go,
              defaultVariant: `JbGIYoPYa`,
              ref: i,
              variant: p,
              variantClassNames: vo,
            }),
            O = wo(e, E),
            { activeVariantCallback: re, delay: A } = Le(_),
            ie = re(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            ae = N(_o);
          return v(k, {
            id: f ?? a,
            children: v(So, {
              animate: E,
              initial: !1,
              children: v(bo, {
                value: yo,
                children: v(D.div, {
                  ...g,
                  ...x,
                  className: N(ae, `framer-n6c5zl`, d, y),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `JbGIYoPYa`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, rgb(227, 227, 227))`,
                    ...u,
                  },
                  ...no({ WGVOt2VT4: { "data-framer-name": `Variant 2` } }, _, ne),
                  children: w(D.div, {
                    className: `framer-1k1ljq8`,
                    layoutDependency: O,
                    layoutId: `jEAYZ8ocS`,
                    style: {
                      backgroundColor: `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255))`,
                    },
                    children: [
                      w(D.div, {
                        className: `framer-1aajwv7`,
                        "data-border": !0,
                        "data-framer-name": `Button & Bonus`,
                        layoutDependency: O,
                        layoutId: `vQhhFH31D`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `dashed`,
                          "--border-top-width": `0px`,
                          backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                        },
                        children: [
                          v(W, {
                            __fromCanvasComponent: !0,
                            children: v(s, {
                              children: v(D.p, {
                                dir: `auto`,
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-alignment": `center`,
                                },
                                children: `Buy Template`,
                              }),
                            }),
                            className: `framer-1eszjmp`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `r4HJdU6xX`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          v(D.div, {
                            className: `framer-1ld64n3`,
                            layoutDependency: O,
                            layoutId: `B1rdVuCkE`,
                            style: { backgroundColor: `rgb(255, 255, 255)` },
                            children: v(W, {
                              __fromCanvasComponent: !0,
                              children: v(s, {
                                children: v(D.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                    "--framer-font-size": `17px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `$149`,
                                }),
                              }),
                              className: `framer-qpoc64`,
                              fonts: [`Inter-Medium`],
                              layoutDependency: O,
                              layoutId: `R8ci0ZIx6`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          v(D.div, {
                            className: `framer-i87lhy`,
                            "data-framer-name": `Close`,
                            "data-highlight": !0,
                            layoutDependency: O,
                            layoutId: `FICr8glS2`,
                            onTap: ie,
                            style: {
                              borderBottomLeftRadius: 90,
                              borderBottomRightRadius: 90,
                              borderTopLeftRadius: 90,
                              borderTopRightRadius: 90,
                            },
                            children: v(ki, {
                              animated: !0,
                              className: `framer-1mq37lo`,
                              layoutDependency: O,
                              layoutId: `L9roWWumi`,
                              style: {
                                "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                              },
                            }),
                          }),
                        ],
                      }),
                      w(D.div, {
                        className: `framer-d7ht55`,
                        "data-framer-name": `Button & Bonus`,
                        layoutDependency: O,
                        layoutId: `Wf2XrYq5u`,
                        children: [
                          v(D.div, {
                            className: `framer-vaqcvs`,
                            "data-framer-name": `Modal 1`,
                            layoutDependency: O,
                            layoutId: `RUJtstsi6`,
                            style: {
                              backgroundColor: `var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, rgb(227, 227, 227))`,
                            },
                            children: v(H, {
                              children: v(U, {
                                className: `framer-lz616t-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: O,
                                layoutId: `xiI65K8Rw-container`,
                                nodeId: `xiI65K8Rw`,
                                rendersWithMotion: !0,
                                scopeId: `wFJCjAKEs`,
                                children: v(da, {
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  boxShadow: ``,
                                  height: `100%`,
                                  id: `xiI65K8Rw`,
                                  isMixedBorderRadius: !1,
                                  isRed: !0,
                                  layoutId: `xiI65K8Rw`,
                                  play: `On`,
                                  shouldMute: !0,
                                  style: { height: `100%`, width: `100%` },
                                  thumbnail: `Medium Quality`,
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  url: `https://youtu.be/ziLSswVtDt4`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          w(D.div, {
                            className: `framer-gs16fz`,
                            "data-border": !0,
                            "data-framer-name": `Modal 2`,
                            layoutDependency: O,
                            layoutId: `Xi9DI66lE`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `dashed`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                            },
                            children: [
                              w(D.div, {
                                className: `framer-1itar1x`,
                                "data-framer-name": `Buttons`,
                                layoutDependency: O,
                                layoutId: `hc77g73Wa`,
                                children: [
                                  v(Pi, {
                                    animated: !0,
                                    className: `framer-hdnqa1`,
                                    layoutDependency: O,
                                    layoutId: `hOQdEnmdq`,
                                    style: {
                                      "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                    },
                                  }),
                                  v(W, {
                                    __fromCanvasComponent: !0,
                                    children: v(s, {
                                      children: v(D.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                        },
                                        children: `Website Template`,
                                      }),
                                    }),
                                    className: `framer-ufrgtx`,
                                    fonts: [`Inter-Medium`],
                                    layoutDependency: O,
                                    layoutId: `zObUGVWre`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-c97fxp`,
                                "data-framer-name": `Bonus`,
                                layoutDependency: O,
                                layoutId: `VWQagLGrA`,
                                children: [
                                  v(H, {
                                    height: 17,
                                    width: `310px`,
                                    y:
                                      (l?.y || 0) +
                                      24 +
                                      0 +
                                      0 +
                                      94.4 +
                                      16 +
                                      286 +
                                      12 +
                                      60.8 +
                                      0 +
                                      0,
                                    children: v(U, {
                                      className: `framer-23e76i-container`,
                                      layoutDependency: O,
                                      layoutId: `BhgJaXxmb-container`,
                                      nodeId: `BhgJaXxmb`,
                                      rendersWithMotion: !0,
                                      scopeId: `wFJCjAKEs`,
                                      children: v(X, {
                                        FQvEaYc7p: `Three landing page variations`,
                                        height: `100%`,
                                        id: `BhgJaXxmb`,
                                        layoutId: `BhgJaXxmb`,
                                        style: { width: `100%` },
                                        variant: Z(`lMgxWjmP2`),
                                        width: `100%`,
                                        xp76Ewgq4: `1`,
                                      }),
                                    }),
                                  }),
                                  v(H, {
                                    height: 17,
                                    width: `310px`,
                                    y:
                                      (l?.y || 0) +
                                      24 +
                                      0 +
                                      0 +
                                      94.4 +
                                      16 +
                                      286 +
                                      12 +
                                      60.8 +
                                      0 +
                                      27,
                                    children: v(U, {
                                      className: `framer-z7a955-container`,
                                      layoutDependency: O,
                                      layoutId: `wQJ47Nf_R-container`,
                                      nodeId: `wQJ47Nf_R`,
                                      rendersWithMotion: !0,
                                      scopeId: `wFJCjAKEs`,
                                      children: v(X, {
                                        FQvEaYc7p: `Optimized for conversions`,
                                        height: `100%`,
                                        id: `wQJ47Nf_R`,
                                        layoutId: `wQJ47Nf_R`,
                                        style: { width: `100%` },
                                        variant: Z(`lMgxWjmP2`),
                                        width: `100%`,
                                        xp76Ewgq4: `1`,
                                      }),
                                    }),
                                  }),
                                  v(H, {
                                    height: 17,
                                    width: `310px`,
                                    y:
                                      (l?.y || 0) +
                                      24 +
                                      0 +
                                      0 +
                                      94.4 +
                                      16 +
                                      286 +
                                      12 +
                                      60.8 +
                                      0 +
                                      54,
                                    children: v(U, {
                                      className: `framer-1vllnf1-container`,
                                      layoutDependency: O,
                                      layoutId: `K2t0r0mXP-container`,
                                      nodeId: `K2t0r0mXP`,
                                      rendersWithMotion: !0,
                                      scopeId: `wFJCjAKEs`,
                                      children: v(X, {
                                        FQvEaYc7p: `Easy Customization`,
                                        height: `100%`,
                                        id: `K2t0r0mXP`,
                                        layoutId: `K2t0r0mXP`,
                                        style: { width: `100%` },
                                        variant: Z(`lMgxWjmP2`),
                                        width: `100%`,
                                        xp76Ewgq4: `1`,
                                      }),
                                    }),
                                  }),
                                  v(H, {
                                    height: 17,
                                    width: `310px`,
                                    y:
                                      (l?.y || 0) +
                                      24 +
                                      0 +
                                      0 +
                                      94.4 +
                                      16 +
                                      286 +
                                      12 +
                                      60.8 +
                                      0 +
                                      81,
                                    children: v(U, {
                                      className: `framer-17uthr2-container`,
                                      layoutDependency: O,
                                      layoutId: `M_ZYGj7O1-container`,
                                      nodeId: `M_ZYGj7O1`,
                                      rendersWithMotion: !0,
                                      scopeId: `wFJCjAKEs`,
                                      children: v(X, {
                                        FQvEaYc7p: `Full CMS support, no touching the canvas`,
                                        height: `100%`,
                                        id: `M_ZYGj7O1`,
                                        layoutId: `M_ZYGj7O1`,
                                        style: { width: `100%` },
                                        variant: Z(`lMgxWjmP2`),
                                        width: `100%`,
                                        xp76Ewgq4: `1`,
                                      }),
                                    }),
                                  }),
                                  v(H, {
                                    height: 17,
                                    width: `310px`,
                                    y:
                                      (l?.y || 0) +
                                      24 +
                                      0 +
                                      0 +
                                      94.4 +
                                      16 +
                                      286 +
                                      12 +
                                      60.8 +
                                      0 +
                                      108,
                                    children: v(U, {
                                      className: `framer-qikn51-container`,
                                      layoutDependency: O,
                                      layoutId: `xlCJ8D1Fq-container`,
                                      nodeId: `xlCJ8D1Fq`,
                                      rendersWithMotion: !0,
                                      scopeId: `wFJCjAKEs`,
                                      children: v(X, {
                                        FQvEaYc7p: `Optional coming soon page (if you haven’t launched yet)`,
                                        height: `100%`,
                                        id: `xlCJ8D1Fq`,
                                        layoutId: `xlCJ8D1Fq`,
                                        style: { width: `100%` },
                                        variant: Z(`lMgxWjmP2`),
                                        width: `100%`,
                                        xp76Ewgq4: `1`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          w(D.div, {
                            className: `framer-1rpj0us`,
                            "data-border": !0,
                            "data-framer-name": `Modal 3`,
                            layoutDependency: O,
                            layoutId: `OXufR09sw`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `dashed`,
                              "--border-top-width": `1px`,
                            },
                            children: [
                              w(D.div, {
                                className: `framer-4k6lfx`,
                                "data-framer-name": `Buttons`,
                                layoutDependency: O,
                                layoutId: `JYeWPXbY0`,
                                children: [
                                  v(W, {
                                    __fromCanvasComponent: !0,
                                    children: v(s, {
                                      children: v(D.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                        },
                                        children: `Bonus website Launch Kit`,
                                      }),
                                    }),
                                    className: `framer-bdpkj7`,
                                    fonts: [`Inter-Medium`],
                                    layoutDependency: O,
                                    layoutId: `tuMu89CPY`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  v(W, {
                                    __fromCanvasComponent: !0,
                                    children: v(s, {
                                      children: v(D.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                          "--framer-font-size": `13px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                        },
                                        children: `($394 in total value)`,
                                      }),
                                    }),
                                    className: `framer-16t440f`,
                                    fonts: [`Inter-Medium`],
                                    layoutDependency: O,
                                    layoutId: `l3rbyVAZO`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-ln0oz7`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `r18_Ck5be`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-1h0z1qi`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `G3UVnf6eF`,
                                    children: [
                                      v(ca, {
                                        animated: !0,
                                        className: `framer-u9mvhi`,
                                        layoutDependency: O,
                                        layoutId: `qBHQ69tM3`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `AI Content Prompt `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($49)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-13qkiv4`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `pw1sLhnD2`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  w(D.div, {
                                    className: `framer-6g5w8q`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `RnEHbaPAL`,
                                    children: [
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          66.4 +
                                          12 +
                                          62.8 +
                                          0 +
                                          0,
                                        children: v(U, {
                                          className: `framer-h1eu9g-container`,
                                          layoutDependency: O,
                                          layoutId: `qCAQiINYA-container`,
                                          nodeId: `qCAQiINYA`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Answer a few questions about your business and offerings`,
                                            height: `100%`,
                                            id: `qCAQiINYA`,
                                            layoutId: `qCAQiINYA`,
                                            style: { width: `100%` },
                                            variant: Z(`MpcDvPQm5`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          66.4 +
                                          12 +
                                          62.8 +
                                          0 +
                                          27,
                                        children: v(U, {
                                          className: `framer-14oqwin-container`,
                                          layoutDependency: O,
                                          layoutId: `zURh7H1K5-container`,
                                          nodeId: `zURh7H1K5`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Paste one prompt into Claude and it writes all your website copy for you`,
                                            height: `100%`,
                                            id: `zURh7H1K5`,
                                            layoutId: `zURh7H1K5`,
                                            style: { width: `100%` },
                                            variant: Z(`MpcDvPQm5`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-1khma2x`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `lgenULSAt`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-i7qrlv`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `bQtZBmeub`,
                                    children: [
                                      v(Ua, {
                                        animated: !0,
                                        className: `framer-vhu8cz`,
                                        layoutDependency: O,
                                        layoutId: `CCnacR9ZA`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `Lead Form Tutorial `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($39)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-law9sa`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `azbktUGNT`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  w(D.div, {
                                    className: `framer-1xsajxn`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `YjIV1CSgw`,
                                    children: [
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          209.2 +
                                          12 +
                                          62.8 +
                                          0 +
                                          0,
                                        children: v(U, {
                                          className: `framer-1rk72bb-container`,
                                          layoutDependency: O,
                                          layoutId: `q0Wf0FHWU-container`,
                                          nodeId: `q0Wf0FHWU`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Step-by-step guide to setting up your contact form`,
                                            height: `100%`,
                                            id: `q0Wf0FHWU`,
                                            layoutId: `q0Wf0FHWU`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          209.2 +
                                          12 +
                                          62.8 +
                                          0 +
                                          27,
                                        children: v(U, {
                                          className: `framer-f01ezk-container`,
                                          layoutDependency: O,
                                          layoutId: `WPqayfy3X-container`,
                                          nodeId: `WPqayfy3X`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Get notified every time a client reaches out`,
                                            height: `100%`,
                                            id: `WPqayfy3X`,
                                            layoutId: `WPqayfy3X`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          209.2 +
                                          12 +
                                          62.8 +
                                          0 +
                                          54,
                                        children: v(U, {
                                          className: `framer-1bdf65a-container`,
                                          layoutDependency: O,
                                          layoutId: `ylxJSeJB6-container`,
                                          nodeId: `ylxJSeJB6`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `They get an auto-reply email instantly`,
                                            height: `100%`,
                                            id: `ylxJSeJB6`,
                                            layoutId: `ylxJSeJB6`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-1hnwfxe`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `smn4_zGS3`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-1ahtgvy`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `haChfvoO2`,
                                    children: [
                                      v(Na, {
                                        animated: !0,
                                        className: `framer-u3wjsf`,
                                        layoutDependency: O,
                                        layoutId: `EaUCJTfXh`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `SEO, Project, Image & Video Prompts `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($49)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-hp46f5`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `M3SzTyGTL`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  w(D.div, {
                                    className: `framer-1k9py5x`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `bgFHV6Cv2`,
                                    children: [
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          379 +
                                          12 +
                                          62.8 +
                                          0 +
                                          0,
                                        children: v(U, {
                                          className: `framer-1yrniku-container`,
                                          layoutDependency: O,
                                          layoutId: `FRrFxxElA-container`,
                                          nodeId: `FRrFxxElA`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Generate professional photos to replace the default template images`,
                                            height: `100%`,
                                            id: `FRrFxxElA`,
                                            layoutId: `FRrFxxElA`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          379 +
                                          12 +
                                          62.8 +
                                          0 +
                                          27,
                                        children: v(U, {
                                          className: `framer-1nbp72u-container`,
                                          layoutDependency: O,
                                          layoutId: `dwoSC3y8T-container`,
                                          nodeId: `dwoSC3y8T`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Turn those images into slow-motion clips for your hero section`,
                                            height: `100%`,
                                            id: `dwoSC3y8T`,
                                            layoutId: `dwoSC3y8T`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          379 +
                                          12 +
                                          62.8 +
                                          0 +
                                          54,
                                        children: v(U, {
                                          className: `framer-setnb2-container`,
                                          layoutDependency: O,
                                          layoutId: `V7kKu9bLa-container`,
                                          nodeId: `V7kKu9bLa`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Generates your page title, description, and keywords, ready to paste into your website`,
                                            height: `100%`,
                                            id: `V7kKu9bLa`,
                                            layoutId: `V7kKu9bLa`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          379 +
                                          12 +
                                          62.8 +
                                          0 +
                                          81,
                                        children: v(U, {
                                          className: `framer-ae1nz4-container`,
                                          layoutDependency: O,
                                          layoutId: `s0dkJpMnF-container`,
                                          nodeId: `s0dkJpMnF`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Generates your project descriptions `,
                                            height: `100%`,
                                            id: `s0dkJpMnF`,
                                            layoutId: `s0dkJpMnF`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-flpnsj`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `UgEroF6YN`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-191nq4i`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `PiXWUNpvj`,
                                    children: [
                                      v(Qi, {
                                        animated: !0,
                                        className: `framer-1daijv7`,
                                        layoutDependency: O,
                                        layoutId: `dINBGupjv`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `Domain Setup & Editing Tutorials `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($69)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-1d38g0g`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `hcUDBAE3z`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  w(D.div, {
                                    className: `framer-1gvhxbw`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `ePxt2b1WZ`,
                                    children: [
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          575.8 +
                                          12 +
                                          62.8 +
                                          0 +
                                          0,
                                        children: v(U, {
                                          className: `framer-17wsksu-container`,
                                          layoutDependency: O,
                                          layoutId: `MXLG6FXfT-container`,
                                          nodeId: `MXLG6FXfT`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `How to generate images`,
                                            height: `100%`,
                                            id: `MXLG6FXfT`,
                                            layoutId: `MXLG6FXfT`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          575.8 +
                                          12 +
                                          62.8 +
                                          0 +
                                          27,
                                        children: v(U, {
                                          className: `framer-t6x97m-container`,
                                          layoutDependency: O,
                                          layoutId: `FM9NDSiaL-container`,
                                          nodeId: `FM9NDSiaL`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `How to generate videos`,
                                            height: `100%`,
                                            id: `FM9NDSiaL`,
                                            layoutId: `FM9NDSiaL`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          575.8 +
                                          12 +
                                          62.8 +
                                          0 +
                                          54,
                                        children: v(U, {
                                          className: `framer-10o1g2w-container`,
                                          layoutDependency: O,
                                          layoutId: `V1OcNB8F4-container`,
                                          nodeId: `V1OcNB8F4`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Step-by-step video showing you how to edit the template`,
                                            height: `100%`,
                                            id: `V1OcNB8F4`,
                                            layoutId: `V1OcNB8F4`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          575.8 +
                                          12 +
                                          62.8 +
                                          0 +
                                          81,
                                        children: v(U, {
                                          className: `framer-11ql7r-container`,
                                          layoutDependency: O,
                                          layoutId: `QpsIOAKlp-container`,
                                          nodeId: `QpsIOAKlp`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Step-by-step guide to connecting your domain and going live`,
                                            height: `100%`,
                                            id: `QpsIOAKlp`,
                                            layoutId: `QpsIOAKlp`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-39ikbg`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `oVjyB7a14`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-8epmbd`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `nvSCsGF4C`,
                                    children: [
                                      v(ra, {
                                        animated: !0,
                                        className: `framer-yfjx4e`,
                                        layoutDependency: O,
                                        layoutId: `a1ZOut_uO`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `25% Off Framer Pro + Free Domain `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($139)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-1vpz93n`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `AvQWAHhmj`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  w(D.div, {
                                    className: `framer-1detg7m`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `KBsLgTpuc`,
                                    children: [
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          772.6 +
                                          12 +
                                          62.8 +
                                          0 +
                                          0,
                                        children: v(U, {
                                          className: `framer-1m5hksq-container`,
                                          layoutDependency: O,
                                          layoutId: `jou7Cx5dW-container`,
                                          nodeId: `jou7Cx5dW`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Buy through our link and save 25% off your first year of Framer Pro`,
                                            height: `100%`,
                                            id: `jou7Cx5dW`,
                                            layoutId: `jou7Cx5dW`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `1.`,
                                          }),
                                        }),
                                      }),
                                      v(H, {
                                        height: 17,
                                        width: `286px`,
                                        y:
                                          (l?.y || 0) +
                                          24 +
                                          0 +
                                          0 +
                                          94.4 +
                                          16 +
                                          511.8 +
                                          12 +
                                          772.6 +
                                          12 +
                                          62.8 +
                                          0 +
                                          27,
                                        children: v(U, {
                                          className: `framer-10n5yma-container`,
                                          layoutDependency: O,
                                          layoutId: `RwR9Zzbeo-container`,
                                          nodeId: `RwR9Zzbeo`,
                                          rendersWithMotion: !0,
                                          scopeId: `wFJCjAKEs`,
                                          children: v(X, {
                                            FQvEaYc7p: `Framer Pro annual plan includes a free custom domain, no extra cost`,
                                            height: `100%`,
                                            id: `RwR9Zzbeo`,
                                            layoutId: `RwR9Zzbeo`,
                                            style: { width: `100%` },
                                            variant: Z(`lMgxWjmP2`),
                                            width: `100%`,
                                            xp76Ewgq4: `2.`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-gk3mm2`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `mq1Q0sOMo`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  w(D.div, {
                                    className: `framer-159ac73`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `mXq_FFwNR`,
                                    children: [
                                      v(Oa, {
                                        animated: !0,
                                        className: `framer-1du5kw7`,
                                        layoutDependency: O,
                                        layoutId: `iuMfjYHvd`,
                                        style: {
                                          "--frkg9v": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        },
                                      }),
                                      v(W, {
                                        __fromCanvasComponent: !0,
                                        children: v(s, {
                                          children: w(D.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `Private Dashboard `,
                                              v(D.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                                },
                                                children: `($49)`,
                                              }),
                                            ],
                                          }),
                                        }),
                                        className: `framer-1mwp4i7`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: O,
                                        layoutId: `RZP_jlykA`,
                                        style: {
                                          "--extracted-1w3ko1f": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  v(D.div, {
                                    className: `framer-18x8rx`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `lWiLEWi4e`,
                                    children: v(H, {
                                      height: 17,
                                      width: `286px`,
                                      y:
                                        (l?.y || 0) +
                                        24 +
                                        0 +
                                        0 +
                                        94.4 +
                                        16 +
                                        511.8 +
                                        12 +
                                        915.4 +
                                        12 +
                                        62.8 +
                                        0 +
                                        0,
                                      children: v(U, {
                                        className: `framer-x8taxv-container`,
                                        layoutDependency: O,
                                        layoutId: `WMrxPvfIu-container`,
                                        nodeId: `WMrxPvfIu`,
                                        rendersWithMotion: !0,
                                        scopeId: `wFJCjAKEs`,
                                        children: v(X, {
                                          FQvEaYc7p: `Every prompt, tutorial, and video in one place`,
                                          height: `100%`,
                                          id: `WMrxPvfIu`,
                                          layoutId: `WMrxPvfIu`,
                                          style: { width: `100%` },
                                          variant: Z(`lMgxWjmP2`),
                                          width: `100%`,
                                          xp76Ewgq4: `1.`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          w(D.div, {
                            className: `framer-qq971k`,
                            "data-border": !0,
                            "data-framer-name": `Modal 3`,
                            layoutDependency: O,
                            layoutId: `edavRe_K0`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `dashed`,
                              "--border-top-width": `1px`,
                            },
                            children: [
                              v(D.div, {
                                className: `framer-1x3eigg`,
                                "data-framer-name": `Buttons`,
                                layoutDependency: O,
                                layoutId: `QtnbYtyJB`,
                                children: v(W, {
                                  __fromCanvasComponent: !0,
                                  children: v(s, {
                                    children: v(D.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `SW50ZXItTWVkaXVt`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(1, 148, 72))`,
                                      },
                                      children: `The Guarantees`,
                                    }),
                                  }),
                                  className: `framer-18pjaf6`,
                                  fonts: [`Inter-Medium`],
                                  layoutDependency: O,
                                  layoutId: `BUYdPBXiF`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(1, 148, 72)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              w(D.div, {
                                className: `framer-h2g2g8`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `zYq0p3gnw`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  v(D.div, {
                                    className: `framer-mfrnr7`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `EbeX5stXB`,
                                    children: v(W, {
                                      __fromCanvasComponent: !0,
                                      children: v(s, {
                                        children: v(D.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                          },
                                          children: `7 Day Money Back Guarantee`,
                                        }),
                                      }),
                                      className: `framer-45i6i6`,
                                      fonts: [`Inter-Medium`],
                                      layoutDependency: O,
                                      layoutId: `aalTB6C9l`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  v(D.div, {
                                    className: `framer-c1tbs`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `xaMJQgyK8`,
                                    children: v(H, {
                                      height: 17,
                                      width: `286px`,
                                      y:
                                        (l?.y || 0) +
                                        24 +
                                        0 +
                                        0 +
                                        94.4 +
                                        16 +
                                        1571 +
                                        12 +
                                        28.8 +
                                        12 +
                                        28.8 +
                                        0 +
                                        0,
                                      children: v(U, {
                                        className: `framer-mjziqz-container`,
                                        layoutDependency: O,
                                        layoutId: `SfEbVxy6Y-container`,
                                        nodeId: `SfEbVxy6Y`,
                                        rendersWithMotion: !0,
                                        scopeId: `wFJCjAKEs`,
                                        children: v(X, {
                                          FQvEaYc7p: `Not happy? Get a full refund within 7 days, no questions asked`,
                                          height: `100%`,
                                          id: `SfEbVxy6Y`,
                                          layoutId: `SfEbVxy6Y`,
                                          style: { width: `100%` },
                                          variant: Z(`lMgxWjmP2`),
                                          width: `100%`,
                                          xp76Ewgq4: `1.`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w(D.div, {
                                className: `framer-m9e8kj`,
                                "data-border": !0,
                                "data-framer-name": `Modal`,
                                layoutDependency: O,
                                layoutId: `AygfxDH9f`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                },
                                children: [
                                  v(D.div, {
                                    className: `framer-1danagu`,
                                    "data-framer-name": `Buttons`,
                                    layoutDependency: O,
                                    layoutId: `zsRXyjdmy`,
                                    children: v(W, {
                                      __fromCanvasComponent: !0,
                                      children: v(s, {
                                        children: v(D.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                                          },
                                          children: `Free Design Fix Guarantee`,
                                        }),
                                      }),
                                      className: `framer-1rq1s1m`,
                                      fonts: [`Inter-Medium`],
                                      layoutDependency: O,
                                      layoutId: `w85nTalIK`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  v(D.div, {
                                    className: `framer-f4ngzf`,
                                    "data-framer-name": `Bonus`,
                                    layoutDependency: O,
                                    layoutId: `pZt6WtnQW`,
                                    children: v(H, {
                                      height: 17,
                                      width: `286px`,
                                      y:
                                        (l?.y || 0) +
                                        24 +
                                        0 +
                                        0 +
                                        94.4 +
                                        16 +
                                        1571 +
                                        12 +
                                        110.6 +
                                        12 +
                                        28.8 +
                                        0 +
                                        0,
                                      children: v(U, {
                                        className: `framer-4hesx0-container`,
                                        layoutDependency: O,
                                        layoutId: `QZKsHzE5r-container`,
                                        nodeId: `QZKsHzE5r`,
                                        rendersWithMotion: !0,
                                        scopeId: `wFJCjAKEs`,
                                        children: v(X, {
                                          FQvEaYc7p: `If you accidentally break something in the design, i'll fix it for free`,
                                          height: `100%`,
                                          id: `QZKsHzE5r`,
                                          layoutId: `QZKsHzE5r`,
                                          style: { width: `100%` },
                                          variant: Z(`lMgxWjmP2`),
                                          width: `100%`,
                                          xp76Ewgq4: `1.`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          w(D.div, {
                            className: `framer-1lwghjr`,
                            "data-framer-name": `Lifetime`,
                            layoutDependency: O,
                            layoutId: `GbcGDp0pm`,
                            children: [
                              w(D.div, {
                                className: `framer-1z0lkyl`,
                                "data-border": !0,
                                "data-framer-name": `Buttons`,
                                layoutDependency: O,
                                layoutId: `NP_4TdxJF`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `rgb(0, 136, 255)`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `rgba(0, 136, 255, 0.16)`,
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                                children: [
                                  v(Ra, {
                                    animated: !0,
                                    className: `framer-1r1ro66`,
                                    layoutDependency: O,
                                    layoutId: `KO1x6oUUR`,
                                    style: { "--frkg9v": `rgb(0, 136, 255)` },
                                  }),
                                  v(W, {
                                    __fromCanvasComponent: !0,
                                    children: v(s, {
                                      children: v(D.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(0, 136, 255))`,
                                        },
                                        children: `Lifetime updates & email support`,
                                      }),
                                    }),
                                    className: `framer-m7gy2l`,
                                    fonts: [`Inter-Medium`],
                                    layoutDependency: O,
                                    layoutId: `fUj7HZARU`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(0, 136, 255)`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              v(W, {
                                __fromCanvasComponent: !0,
                                children: v(s, {
                                  children: v(D.p, {
                                    dir: `auto`,
                                    style: {
                                      "--framer-font-size": `13px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                                    },
                                    children: `Local Taxes may apply at checkout`,
                                  }),
                                }),
                                className: `framer-10btujj`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `uSrbbdKK1`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      w(D.div, {
                        className: `framer-vbkdax`,
                        "data-border": !0,
                        "data-framer-name": `Button & Bonus`,
                        layoutDependency: O,
                        layoutId: `EkRc7_NKL`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `dashed`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                        },
                        children: [
                          w(D.div, {
                            className: `framer-17fc2i3`,
                            "data-framer-name": `Buttons`,
                            layoutDependency: O,
                            layoutId: `XWWx1GSLb`,
                            style: {
                              backgroundColor: `rgba(0, 217, 181, 0.16)`,
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                            children: [
                              v(W, {
                                __fromCanvasComponent: !0,
                                children: v(s, {
                                  children: v(D.p, {
                                    dir: `auto`,
                                    style: {
                                      "--framer-font-size": `12px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 92, 78, 0.81))`,
                                    },
                                    children: `Bonus applied`,
                                  }),
                                }),
                                className: `framer-b9lj2w`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `ChAMWnTEN`,
                                style: {
                                  "--extracted-r6o4lv": `rgba(0, 92, 78, 0.81)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              v(W, {
                                __fromCanvasComponent: !0,
                                children: v(s, {
                                  children: v(D.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(0, 128, 106))`,
                                    },
                                    children: `$394 website Launch Kit for FREE`,
                                  }),
                                }),
                                className: `framer-1dyiz4m`,
                                fonts: [`Inter-Medium`],
                                layoutDependency: O,
                                layoutId: `i8DXXcydw`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(0, 128, 106)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          w(D.div, {
                            className: `framer-6ttsl4`,
                            "data-framer-name": `Buttons`,
                            layoutDependency: O,
                            layoutId: `p3vl985OB`,
                            children: [
                              v(H, {
                                height: 41,
                                width: `162px`,
                                y:
                                  (l?.y || 0) +
                                  24 +
                                  0 +
                                  0 +
                                  (0 +
                                    (84.4 +
                                      Math.max(
                                        0,
                                        (Math.max(0, ((l?.height || 837) - 48 - 0) / 1) * 1 -
                                          0 -
                                          227) /
                                          1,
                                      ) *
                                        1) +
                                    20) +
                                  16 +
                                  49.6 +
                                  0,
                                children: v(U, {
                                  className: `framer-xbe9fr-container`,
                                  layoutDependency: O,
                                  layoutId: `iUVy19S9N-container`,
                                  nodeId: `iUVy19S9N`,
                                  rendersWithMotion: !0,
                                  scopeId: `wFJCjAKEs`,
                                  children: v(qi, {
                                    height: `100%`,
                                    id: `iUVy19S9N`,
                                    jmVfZVXMZ: `rgb(0, 0, 0)`,
                                    layoutId: `iUVy19S9N`,
                                    style: { width: `100%` },
                                    TQzHqtVCH: ee,
                                    UE5uPeY3D: `rgb(255, 255, 255)`,
                                    ujbndUBZQ: `Get Acess`,
                                    variant: Z(`xmbFrJ6SV`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              v(H, {
                                height: 41,
                                width: `162px`,
                                y:
                                  (l?.y || 0) +
                                  24 +
                                  0 +
                                  0 +
                                  (0 +
                                    (84.4 +
                                      Math.max(
                                        0,
                                        (Math.max(0, ((l?.height || 837) - 48 - 0) / 1) * 1 -
                                          0 -
                                          227) /
                                          1,
                                      ) *
                                        1) +
                                    20) +
                                  16 +
                                  49.6 +
                                  0,
                                children: v(U, {
                                  className: `framer-olbsml-container`,
                                  layoutDependency: O,
                                  layoutId: `UgYMHtYDB-container`,
                                  nodeId: `UgYMHtYDB`,
                                  rendersWithMotion: !0,
                                  scopeId: `wFJCjAKEs`,
                                  children: v(qi, {
                                    height: `100%`,
                                    id: `UgYMHtYDB`,
                                    jmVfZVXMZ: `rgb(0, 0, 0)`,
                                    layoutId: `UgYMHtYDB`,
                                    style: { width: `100%` },
                                    TQzHqtVCH: m,
                                    UE5uPeY3D: `rgb(0, 0, 0)`,
                                    ujbndUBZQ: `Ask a question`,
                                    variant: Z(`tmgbil2yf`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-IcYGw.framer-1aga86g, .framer-IcYGw .framer-1aga86g { display: block; }`,
          `.framer-IcYGw.framer-n6c5zl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 837px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px 64px 24px 64px; position: relative; width: 1076px; }`,
          `.framer-IcYGw .framer-1k1ljq8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 366px; }`,
          `.framer-IcYGw .framer-1aajwv7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 48px 16px 16px 16px; position: relative; width: 100%; z-index: 5; }`,
          `.framer-IcYGw .framer-1eszjmp, .framer-IcYGw .framer-qpoc64, .framer-IcYGw .framer-ufrgtx, .framer-IcYGw .framer-bdpkj7, .framer-IcYGw .framer-16t440f, .framer-IcYGw .framer-13qkiv4, .framer-IcYGw .framer-law9sa, .framer-IcYGw .framer-hp46f5, .framer-IcYGw .framer-1d38g0g, .framer-IcYGw .framer-1vpz93n, .framer-IcYGw .framer-1mwp4i7, .framer-IcYGw .framer-18pjaf6, .framer-IcYGw .framer-45i6i6, .framer-IcYGw .framer-1rq1s1m, .framer-IcYGw .framer-m7gy2l, .framer-IcYGw .framer-10btujj, .framer-IcYGw .framer-b9lj2w, .framer-IcYGw .framer-1dyiz4m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-IcYGw .framer-1ld64n3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-IcYGw .framer-i87lhy { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 16px; top: 12px; width: min-content; }`,
          `.framer-IcYGw .framer-1mq37lo { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 22px; z-index: 1; }`,
          `.framer-IcYGw .framer-d7ht55 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; overflow: auto; padding: 16px; pointer-events: auto; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-vaqcvs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-lz616t-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 180px); position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-gs16fz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-1itar1x, .framer-IcYGw .framer-1h0z1qi, .framer-IcYGw .framer-i7qrlv, .framer-IcYGw .framer-1ahtgvy, .framer-IcYGw .framer-191nq4i, .framer-IcYGw .framer-8epmbd, .framer-IcYGw .framer-159ac73, .framer-IcYGw .framer-mfrnr7, .framer-IcYGw .framer-1danagu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-hdnqa1, .framer-IcYGw .framer-u9mvhi, .framer-IcYGw .framer-vhu8cz, .framer-IcYGw .framer-u3wjsf, .framer-IcYGw .framer-1daijv7, .framer-IcYGw .framer-yfjx4e, .framer-IcYGw .framer-1du5kw7, .framer-IcYGw .framer-1r1ro66 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-IcYGw .framer-c97fxp, .framer-IcYGw .framer-6g5w8q, .framer-IcYGw .framer-1xsajxn, .framer-IcYGw .framer-1k9py5x, .framer-IcYGw .framer-1gvhxbw, .framer-IcYGw .framer-1detg7m, .framer-IcYGw .framer-18x8rx, .framer-IcYGw .framer-c1tbs, .framer-IcYGw .framer-f4ngzf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-23e76i-container, .framer-IcYGw .framer-z7a955-container, .framer-IcYGw .framer-1vllnf1-container, .framer-IcYGw .framer-17uthr2-container, .framer-IcYGw .framer-qikn51-container, .framer-IcYGw .framer-h1eu9g-container, .framer-IcYGw .framer-14oqwin-container, .framer-IcYGw .framer-1rk72bb-container, .framer-IcYGw .framer-f01ezk-container, .framer-IcYGw .framer-1bdf65a-container, .framer-IcYGw .framer-1yrniku-container, .framer-IcYGw .framer-1nbp72u-container, .framer-IcYGw .framer-setnb2-container, .framer-IcYGw .framer-ae1nz4-container, .framer-IcYGw .framer-17wsksu-container, .framer-IcYGw .framer-t6x97m-container, .framer-IcYGw .framer-10o1g2w-container, .framer-IcYGw .framer-11ql7r-container, .framer-IcYGw .framer-1m5hksq-container, .framer-IcYGw .framer-10n5yma-container, .framer-IcYGw .framer-x8taxv-container, .framer-IcYGw .framer-mjziqz-container, .framer-IcYGw .framer-4hesx0-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-1rpj0us, .framer-IcYGw .framer-ln0oz7, .framer-IcYGw .framer-1khma2x, .framer-IcYGw .framer-1hnwfxe, .framer-IcYGw .framer-flpnsj, .framer-IcYGw .framer-39ikbg, .framer-IcYGw .framer-gk3mm2, .framer-IcYGw .framer-qq971k, .framer-IcYGw .framer-h2g2g8, .framer-IcYGw .framer-m9e8kj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-4k6lfx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-1x3eigg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-1lwghjr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-1z0lkyl, .framer-IcYGw .framer-17fc2i3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 12px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-IcYGw .framer-vbkdax { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; pointer-events: auto; position: sticky; width: 100%; z-index: 10; }`,
          `.framer-IcYGw .framer-6ttsl4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 100%; }`,
          `.framer-IcYGw .framer-xbe9fr-container { flex: 1 0 0px; height: auto; pointer-events: auto; position: relative; width: 1px; }`,
          `.framer-IcYGw .framer-olbsml-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-IcYGw.framer-v-t9eejd .framer-1mq37lo { height: var(--framer-aspect-ratio-supported, 21px); }`,
          `.framer-IcYGw.framer-v-t9eejd .framer-lz616t-container { height: var(--framer-aspect-ratio-supported, 113px); }`,
          `.framer-IcYGw.framer-v-t9eejd .framer-hdnqa1, .framer-IcYGw.framer-v-t9eejd .framer-u9mvhi, .framer-IcYGw.framer-v-t9eejd .framer-vhu8cz, .framer-IcYGw.framer-v-t9eejd .framer-u3wjsf, .framer-IcYGw.framer-v-t9eejd .framer-1daijv7, .framer-IcYGw.framer-v-t9eejd .framer-yfjx4e, .framer-IcYGw.framer-v-t9eejd .framer-1du5kw7 { height: var(--framer-aspect-ratio-supported, 24px); }`,
          `.framer-IcYGw[data-border="true"]::after, .framer-IcYGw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `.framer-IcYGw[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-IcYGw [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-IcYGw[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-IcYGw [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-IcYGw[data-hide-scrollbars="true"], .framer-IcYGw [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-IcYGw`,
      )),
      (To.displayName = `Element/Modal`),
      (To.defaultProps = { height: 837, width: 1076 }),
      F(To, {
        variant: {
          options: [`JbGIYoPYa`, `WGVOt2VT4`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        SNhruNZYT: { title: `Get access`, type: G.Link },
        K_lRf1zsN: { title: `Ask questions`, type: G.Link },
        DBCgKfbVY: { title: `Close`, type: G.EventHandler },
      }),
      P(
        To,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...ro,
          ...io,
          ...ao,
          ...oo,
          ...so,
          ...co,
          ...lo,
          ...uo,
          ...fo,
          ...po,
          ...mo,
          ...ho,
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (To.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([z(X, {}, t), z(qi, {}, t)])),
      }));
  });
function Do(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go = e(() => {
    (S(),
      R(),
      A(),
      f(),
      Dt(),
      vt(),
      (Oo = B(Ct)),
      (ko = de(le(W))),
      (Ao = { tKaGiOzUo: { hover: !0, pressed: !0 } }),
      (jo = [`tKaGiOzUo`, `cBtMhjMc5`]),
      (Mo = `framer-kEeIF`),
      (No = { cBtMhjMc5: `framer-v-1q9qy3b`, tKaGiOzUo: `framer-v-1igilhr` }),
      (Po = { delay: 0, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (Fo = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Io = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -15,
      }),
      (Lo = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (Ro = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e + t
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (zo = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Bo = { Call: `tKaGiOzUo`, Mobile: `cBtMhjMc5` }),
      (Vo = D.create(s)),
      (Ho = ({ color: e, height: t, id: n, link: r, number: i, width: a, ...o }) => ({
        ...o,
        gaqKoW8VK:
          e ??
          o.gaqKoW8VK ??
          `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
        MZMy8moZW: r ?? o.MZMy8moZW,
        ufOIC4WwM: i ?? o.ufOIC4WwM ?? `503 453 5432`,
        variant: Bo[o.variant] ?? o.variant ?? `tKaGiOzUo`,
      })),
      (Uo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wo = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              ufOIC4WwM: p,
              MZMy8moZW: ee,
              gaqKoW8VK: m,
              ...h
            } = Ho(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ne,
              setGestureState: S,
              setVariant: C,
              variants: T,
            } = fe({
              cycleOrder: jo,
              defaultVariant: `tKaGiOzUo`,
              enabledGestures: Ao,
              ref: i,
              variant: f,
              variantClassNames: No,
            }),
            E = Uo(e, T),
            O = N(Mo, Ot),
            re = () => g === `cBtMhjMc5`,
            A = () => g !== `cBtMhjMc5`,
            ie = Ro(Lo(p, `(`), `)`);
          return v(k, {
            id: d ?? a,
            children: v(Vo, {
              animate: T,
              initial: !1,
              children: v(zo, {
                value: Po,
                children: v(Ye, {
                  href: ee,
                  motionChild: !0,
                  nodeId: `tKaGiOzUo`,
                  openInNewTab: !0,
                  scopeId: `aQHMb6eyH`,
                  children: w(D.a, {
                    ...h,
                    ...b,
                    className: `${N(O, `framer-1igilhr`, u, _)} framer-nkuqlv`,
                    "data-framer-name": `Call`,
                    layoutDependency: E,
                    layoutId: `tKaGiOzUo`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      ...l,
                    },
                    variants: {
                      "tKaGiOzUo-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      "tKaGiOzUo-pressed": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      cBtMhjMc5: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(217, 217, 217))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `0px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `0px`,
                      },
                    },
                    ...Do(
                      {
                        "tKaGiOzUo-hover": { "data-framer-name": void 0 },
                        "tKaGiOzUo-pressed": { "data-framer-name": void 0 },
                        cBtMhjMc5: { "data-border": !0, "data-framer-name": `Mobile` },
                      },
                      g,
                      x,
                    ),
                    children: [
                      re() &&
                        v(Ct, {
                          animated: !0,
                          className: `framer-qp7m2e`,
                          layoutDependency: E,
                          layoutId: `blSiBkyOm`,
                          style: {
                            "--frkg9v": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                          },
                        }),
                      A() &&
                        v(ko, {
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Fo,
                          children: v(s, {
                            children: v(D.p, {
                              className: `framer-styles-preset-piej36`,
                              "data-styles-preset": `kzFJG5mqZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-gaqKoW8VK-aQHMb6eyH))`,
                              },
                              children: `(503 453 5432)`,
                            }),
                          }),
                          className: `framer-dvqz74`,
                          "data-framer-appear-id": `dvqz74`,
                          fonts: [`Inter`],
                          initial: Io,
                          layoutDependency: E,
                          layoutId: `CO4knWejl`,
                          optimized: !0,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-gaqKoW8VK-aQHMb6eyH)`,
                            "--variable-reference-gaqKoW8VK-aQHMb6eyH": m,
                          },
                          text: ie,
                          variants: {
                            "tKaGiOzUo-hover": {
                              "--extracted-r6o4lv": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10))`,
                            },
                            "tKaGiOzUo-pressed": {
                              "--extracted-r6o4lv": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Do(
                            {
                              "tKaGiOzUo-hover": {
                                children: v(s, {
                                  children: v(D.p, {
                                    className: `framer-styles-preset-piej36`,
                                    "data-styles-preset": `kzFJG5mqZ`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10)))`,
                                    },
                                    children: `(503 453 5432)`,
                                  }),
                                }),
                              },
                              "tKaGiOzUo-pressed": {
                                children: v(s, {
                                  children: v(D.p, {
                                    className: `framer-styles-preset-piej36`,
                                    "data-styles-preset": `kzFJG5mqZ`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(252, 172, 10)))`,
                                    },
                                    children: `(503 453 5432)`,
                                  }),
                                }),
                              },
                            },
                            g,
                            x,
                          ),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kEeIF.framer-nkuqlv, .framer-kEeIF .framer-nkuqlv { display: block; }`,
          `.framer-kEeIF.framer-1igilhr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-kEeIF .framer-qp7m2e { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-kEeIF .framer-dvqz74 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-kEeIF.framer-v-1q9qy3b.framer-1igilhr { cursor: unset; height: 50px; width: 50px; }`,
          `.framer-kEeIF.framer-v-1q9qy3b .framer-qp7m2e { height: var(--framer-aspect-ratio-supported, 17px); width: 17px; }`,
          ...Et,
          `.framer-kEeIF[data-border="true"]::after, .framer-kEeIF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-kEeIF`,
      )),
      (Wo.displayName = `Button/Call`),
      (Wo.defaultProps = { height: 22, width: 118 }),
      F(Wo, {
        variant: {
          options: [`tKaGiOzUo`, `cBtMhjMc5`],
          optionTitles: [`Call`, `Mobile`],
          title: `Variant`,
          type: G.Enum,
        },
        ufOIC4WwM: {
          defaultValue: `503 453 5432`,
          description: `Click here to input your phone number`,
          displayTextArea: !1,
          placeholder: `503 453 5432`,
          title: `Number`,
          type: G.String,
        },
        onufOIC4WwMChange: { changes: `ufOIC4WwM`, type: G.ChangeHandler },
        MZMy8moZW: { description: `Click here to edit the link`, title: `Link`, type: G.Link },
        gaqKoW8VK: {
          defaultValue: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
          title: `Color`,
          type: G.Color,
        },
      }),
      P(
        Wo,
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
          ...Oo,
          ...M(Tt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is = e(() => {
    (S(),
      R(),
      A(),
      f(),
      Dt(),
      Yt(),
      (Ko = B(Xt)),
      (qo = Ze(Xt)),
      (Jo = `framer-QtIR6`),
      (Yo = { HnGOP3n1X: `framer-v-74wvav` }),
      (Xo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Zo = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Qo = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($o = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (es = D.create(s)),
      (ts = ({ height: e, id: t, image: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        iLKGod0ta: n ??
          o.iLKGod0ta ?? {
            pixelHeight: 687,
            pixelWidth: 1200,
            src: `https://framerusercontent.com/images/uCCiXn0MuaDFdURUp41HVslfUY.jpg?width=1200&height=687`,
            srcSet: `https://framerusercontent.com/images/uCCiXn0MuaDFdURUp41HVslfUY.jpg?scale-down-to=512&width=1200&height=687 512w,https://framerusercontent.com/images/uCCiXn0MuaDFdURUp41HVslfUY.jpg?scale-down-to=1024&width=1200&height=687 1024w,https://framerusercontent.com/images/uCCiXn0MuaDFdURUp41HVslfUY.jpg?width=1200&height=687 1200w`,
          },
        jYecZKH4O: i ?? o.jYecZKH4O ?? `Home 1`,
        zIuK9LjRH: r ?? o.zIuK9LjRH,
      })),
      (ns = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rs = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe(),
            l = De(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              jYecZKH4O: ee,
              iLKGod0ta: m,
              zIuK9LjRH: h,
              ...g
            } = ts(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ne,
              isLoading: S,
              setGestureState: C,
              setVariant: T,
              variants: E,
            } = fe({ defaultVariant: `HnGOP3n1X`, ref: i, variant: p, variantClassNames: Yo }),
            O = ns(e, E),
            re = N(Jo, Ot);
          return v(k, {
            id: f ?? a,
            children: v(es, {
              animate: E,
              initial: !1,
              children: v($o, {
                value: Xo,
                children: v(Ye, {
                  href: h,
                  motionChild: !0,
                  nodeId: `HnGOP3n1X`,
                  openInNewTab: !1,
                  scopeId: `l7uEbuuqc`,
                  children: w(D.a, {
                    ...g,
                    ...x,
                    className: `${N(re, `framer-74wvav`, d, y)} framer-1gmkqbs`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: O,
                    layoutId: `HnGOP3n1X`,
                    ref: i,
                    style: { ...u },
                    children: [
                      v(W, {
                        __fromCanvasComponent: !0,
                        children: v(s, {
                          children: v(D.p, {
                            className: `framer-styles-preset-piej36`,
                            "data-styles-preset": `kzFJG5mqZ`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                            },
                            children: `Home 1`,
                          }),
                        }),
                        className: `framer-279mmv`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `jzcgaPlNl`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: ee,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      v(H, {
                        height: 179,
                        width: `312px`,
                        y: (l?.y || 0) + 0 + (((l?.height || 211) - 0 - 211.4) / 2 + 22.4 + 10),
                        children: v(U, {
                          className: `framer-bu7geg-container`,
                          layoutDependency: O,
                          layoutId: `d2Ax3cLTO-container`,
                          nodeId: `d2Ax3cLTO`,
                          rendersWithMotion: !0,
                          scopeId: `l7uEbuuqc`,
                          children: v(qo, {
                            __framer__animateOnce: !0,
                            __framer__obscuredVariantId: `JGKQXcGU8`,
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: `Wh4jNPJtj`,
                            height: `100%`,
                            id: `d2Ax3cLTO`,
                            L4j2J7d1N: !1,
                            layoutId: `d2Ax3cLTO`,
                            qLYhflb9R: `0px`,
                            style: { height: `100%`, width: `100%` },
                            variant: Qo(`Wh4jNPJtj`),
                            VcP3JkMrC: Zo(m),
                            w1YFGN0ZT: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QtIR6.framer-1gmkqbs, .framer-QtIR6 .framer-1gmkqbs { display: block; }`,
          `.framer-QtIR6.framer-74wvav { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-QtIR6 .framer-279mmv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-QtIR6 .framer-bu7geg-container { aspect-ratio: 1.7518248175182483 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 179px); position: relative; width: 312px; z-index: 1; }`,
          ...Et,
        ],
        `framer-QtIR6`,
      )),
      (rs.displayName = `Nav/Nav Image`),
      (rs.defaultProps = { height: 211, width: 312 }),
      F(rs, {
        jYecZKH4O: { defaultValue: `Home 1`, displayTextArea: !1, title: `Title`, type: G.String },
        onjYecZKH4OChange: { changes: `jYecZKH4O`, type: G.ChangeHandler },
        iLKGod0ta: {
          __defaultAssetReference: `data:framer/asset-reference,uCCiXn0MuaDFdURUp41HVslfUY.jpg?originalFilename=Hero+1.jpg&width=1200&height=687`,
          title: `Image`,
          type: G.ResponsiveImage,
        },
        zIuK9LjRH: { title: `Link`, type: G.Link },
      }),
      P(
        rs,
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
          ...Ko,
          ...M(Tt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (rs.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(Xt, {}, t)])) }));
  });
function as(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns = e(() => {
    (S(),
      R(),
      A(),
      f(),
      ct(),
      is(),
      Rn(),
      (os = B(q)),
      (ss = B(rs)),
      (cs = le(D.div)),
      (ls = { OgAT1phvQ: { hover: !0 } }),
      (us = [`OgAT1phvQ`, `NHr3VygUW`, `frBLI8hMg`, `PT3YA9GQy`]),
      (ds = `framer-NFJiK`),
      (fs = {
        frBLI8hMg: `framer-v-1trdw32`,
        NHr3VygUW: `framer-v-1cucufc`,
        OgAT1phvQ: `framer-v-4qvy2y`,
        PT3YA9GQy: `framer-v-14rxg4o`,
      }),
      (ps = void 0),
      (ms = { delay: 0, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (hs = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase().includes(t.toLowerCase())
          : Array.isArray(e) && typeof t == `string`
            ? e.includes(t)
            : !1),
      (gs = (e, t) => (e ? `t9YRY29l1` : `QZxFvUYYk`)),
      (_s = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ys = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: vs,
        x: 0,
        y: 0,
      }),
      (bs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: vs,
        x: 0,
        y: 0,
      }),
      (xs = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ss = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Cs = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = pe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (ws = () => ({
        from: { alias: `ynApPju2u`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `ynApPju2u`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `ynApPju2u`, name: `pWKi_oYgW`, type: `Identifier` },
          { collection: `ynApPju2u`, name: `ihUkwOXaD`, type: `Identifier` },
          { collection: `ynApPju2u`, name: `vg9tVkcxn`, type: `Identifier` },
          { collection: `ynApPju2u`, name: `I7yTj1Joi`, type: `Identifier` },
          { collection: `ynApPju2u`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ts = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (Es = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Ds = {
        "Mobile close": `PT3YA9GQy`,
        "Mobile open": `frBLI8hMg`,
        Close: `OgAT1phvQ`,
        Open: `NHr3VygUW`,
      }),
      (Os = D.create(s)),
      (ks = (e, t) => {
        let [n, r] = c(e),
          [i, a] = c(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (As = ({
        activePage: e,
        click: t,
        height: n,
        hero: r,
        hover: i,
        id: a,
        label: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Lv79RHndb: o ?? c.Lv79RHndb ?? `Home  1`,
        m4wAiNhVS: e ?? c.m4wAiNhVS,
        Nam1_5dyq: t ?? c.Nam1_5dyq,
        variant: Ds[c.variant] ?? c.variant ?? `OgAT1phvQ`,
        x_PBBrROi: r ?? c.x_PBBrROi ?? !0,
        XS7ya8i_8: i ?? c.XS7ya8i_8,
      })),
      (js = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ms = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: s } = qe(),
            c = De(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              Nam1_5dyq: p,
              m4wAiNhVS: ee,
              XS7ya8i_8: h,
              Lv79RHndb: g,
              onLv79RHndbChange: _,
              x_PBBrROi: y,
              ...b
            } = As(e),
            [x, ne] = ks(g, _),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: A,
              setGestureState: ie,
              setVariant: ae,
              variants: oe,
            } = fe({
              cycleOrder: us,
              defaultVariant: `OgAT1phvQ`,
              enabledGestures: ls,
              ref: i,
              variant: f,
              variantClassNames: fs,
            }),
            ce = js(e, oe),
            { activeVariantCallback: j, delay: M } = Le(S),
            le = j(async (...e) => {
              if ((ie({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
              ae(`NHr3VygUW`);
            }),
            ue = j(async (...e) => {
              if ((ie({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            de = j(async (...e) => {
              if ((ie({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            P = j(async (...e) => {
              ae(`OgAT1phvQ`);
            }),
            F = ({ overlay: e }) =>
              j(async (...t) => {
                e.show();
              }),
            I = N(ds),
            pe = () => S === `NHr3VygUW`,
            R = (e) => S !== `NHr3VygUW` || e;
          ke();
          let z = Xe(),
            me = (e) => S === `NHr3VygUW` && e;
          return v(k, {
            id: d ?? a,
            children: v(Os, {
              animate: oe,
              initial: !1,
              children: v(Es, {
                value: ms,
                children: w(D.div, {
                  ...b,
                  ...E,
                  className: N(I, `framer-4qvy2y`, u, C),
                  "data-framer-name": `Close`,
                  "data-highlight": !0,
                  layoutDependency: ce,
                  layoutId: `OgAT1phvQ`,
                  onMouseEnter: ue,
                  onTap: le,
                  ref: i,
                  style: { ...l },
                  ...as(
                    {
                      "OgAT1phvQ-hover": { "data-framer-name": void 0 },
                      frBLI8hMg: { "data-framer-name": `Mobile open`, onTap: de },
                      NHr3VygUW: { "data-framer-name": `Open`, onTap: void 0 },
                      PT3YA9GQy: { "data-framer-name": `Mobile close`, onTap: de },
                    },
                    S,
                    O,
                  ),
                  children: [
                    w(D.div, {
                      className: `framer-1jl5g63`,
                      "data-border": !0,
                      "data-framer-name": `Menu`,
                      layoutDependency: ce,
                      layoutId: `GlduzIV99`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        frBLI8hMg: { "--border-left-width": `0px`, "--border-right-width": `0px` },
                        PT3YA9GQy: { "--border-left-width": `0px`, "--border-right-width": `0px` },
                      },
                      ...as({ NHr3VygUW: { "data-highlight": !0, onTap: P } }, S, O),
                      children: [
                        v(D.div, {
                          className: `framer-m3cn70`,
                          "data-framer-name": `Top`,
                          layoutDependency: ce,
                          layoutId: `nboR1OY9D`,
                          style: {
                            backgroundColor: `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            rotate: 0,
                          },
                          variants: {
                            "OgAT1phvQ-hover": {
                              backgroundColor: `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                              rotate: 0,
                            },
                            frBLI8hMg: {
                              backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              rotate: 0,
                            },
                            NHr3VygUW: { rotate: -45 },
                            PT3YA9GQy: {
                              backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              rotate: 45,
                            },
                          },
                        }),
                        v(D.div, {
                          className: `framer-1tqhx55`,
                          "data-framer-name": `Bottom`,
                          layoutDependency: ce,
                          layoutId: `aL7A9b_jC`,
                          style: {
                            backgroundColor: `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            rotate: 0,
                          },
                          variants: {
                            "OgAT1phvQ-hover": {
                              backgroundColor: `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                              rotate: 0,
                            },
                            frBLI8hMg: {
                              backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              rotate: 0,
                            },
                            NHr3VygUW: { rotate: 45 },
                            PT3YA9GQy: {
                              backgroundColor: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              rotate: -45,
                            },
                          },
                        }),
                      ],
                    }),
                    pe() &&
                      v(D.div, {
                        className: `framer-a7qhtr`,
                        layoutDependency: ce,
                        layoutId: `ynApPju2u`,
                        children: v(Pe, {
                          children: v(Ts, {
                            query: ws(),
                            children: (e, t, n) =>
                              v(m, {
                                children: e?.map(
                                  (
                                    {
                                      DNLONDBp6: e,
                                      I7yTj1Joi: t,
                                      id: n,
                                      ihUkwOXaD: r,
                                      pWKi_oYgW: i,
                                      vg9tVkcxn: a,
                                    },
                                    s,
                                  ) => (
                                    (e ??= ``),
                                    (i ??= !0),
                                    (r ??= !0),
                                    (a ??= !0),
                                    (t ??= !0),
                                    v(
                                      k,
                                      {
                                        id: `ynApPju2u-${n}`,
                                        children: v(se.Provider, {
                                          value: { DNLONDBp6: e },
                                          children:
                                            pe() &&
                                            w(D.div, {
                                              className: `framer-hvzfpq`,
                                              "data-framer-name": `Menu`,
                                              layoutDependency: ce,
                                              layoutId: `zw8as4lxc`,
                                              children: [
                                                R(y !== !1) &&
                                                  v(Cs, {
                                                    blockDocumentScrolling: !1,
                                                    dismissWithEsc: !1,
                                                    children: (t) =>
                                                      v(m, {
                                                        children: v(L, {
                                                          links: [
                                                            {
                                                              href: { webPageId: `ogNU5sAlu` },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (n) =>
                                                            v(H, {
                                                              ...as(
                                                                {
                                                                  NHr3VygUW: {
                                                                    height: 0,
                                                                    y:
                                                                      (c?.y || 0) +
                                                                      (0 +
                                                                        ((c?.height || 50) -
                                                                          0 -
                                                                          0) /
                                                                          2) +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                S,
                                                                O,
                                                              ),
                                                              children: w(U, {
                                                                className: `framer-1icttlf-container`,
                                                                id: `${e}-${d}-1icttlf`,
                                                                layoutDependency: ce,
                                                                layoutId: `hkLKDQeoL-container`,
                                                                nodeId: `hkLKDQeoL`,
                                                                ref: z(`${e}-${d}-1icttlf`),
                                                                rendersWithMotion: !0,
                                                                scopeId: `iEzA6gxpd`,
                                                                children: [
                                                                  v(q, {
                                                                    height: `100%`,
                                                                    id: `hkLKDQeoL`,
                                                                    layoutId: `hkLKDQeoL`,
                                                                    oaf08984H: F({ overlay: t }),
                                                                    s5ccoHERM: `About`,
                                                                    style: { height: `100%` },
                                                                    variant: _s(
                                                                      gs(hs(ps, `About`), o),
                                                                    ),
                                                                    width: `100%`,
                                                                    xCTgTOKeE: n[0],
                                                                    ...as(
                                                                      {
                                                                        NHr3VygUW: {
                                                                          ons5ccoHERMChange: ne,
                                                                          s5ccoHERM: x,
                                                                          variant: _s(`bWoCD1hz2`),
                                                                          xCTgTOKeE: void 0,
                                                                        },
                                                                      },
                                                                      S,
                                                                      O,
                                                                    ),
                                                                  }),
                                                                  v(re, {
                                                                    children:
                                                                      t.visible &&
                                                                      v(He, {
                                                                        alignment: `start`,
                                                                        anchorRef: z(
                                                                          `${e}-${d}-1icttlf`,
                                                                        ),
                                                                        className: N(I, C),
                                                                        collisionDetection: !0,
                                                                        collisionDetectionPadding: 20,
                                                                        "data-framer-portal-id": `${e}-${d}-1icttlf`,
                                                                        offsetX: 0,
                                                                        offsetY: 10,
                                                                        onDismiss: t.hide,
                                                                        placement: `bottom`,
                                                                        safeArea: !0,
                                                                        zIndex: 11,
                                                                        children: v(cs, {
                                                                          __perspectiveFX: !1,
                                                                          __smartComponentFX: !0,
                                                                          __targetOpacity: 1,
                                                                          animate: bs,
                                                                          className: `framer-1xc6y6q`,
                                                                          exit: ys,
                                                                          initial: xs,
                                                                          layoutDependency: ce,
                                                                          layoutId: `jJYNvZLXg`,
                                                                          ref: z(
                                                                            `${e}-${d}-1xc6y6q`,
                                                                          ),
                                                                          role: `dialog`,
                                                                          style: {
                                                                            backgroundColor: `rgb(255, 255, 255)`,
                                                                            borderBottomLeftRadius: 10,
                                                                            borderBottomRightRadius: 10,
                                                                            borderTopLeftRadius: 10,
                                                                            borderTopRightRadius: 10,
                                                                            boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                                                          },
                                                                          variants: {
                                                                            NHr3VygUW: {
                                                                              backgroundColor: `rgba(0, 0, 0, 0)`,
                                                                              borderBottomLeftRadius: 0,
                                                                              borderBottomRightRadius: 0,
                                                                              borderTopLeftRadius: 0,
                                                                              borderTopRightRadius: 0,
                                                                              boxShadow: `none`,
                                                                            },
                                                                          },
                                                                          children: w(D.div, {
                                                                            className: `framer-4nxxgr`,
                                                                            "data-framer-name": `Hero`,
                                                                            layoutDependency: ce,
                                                                            layoutId: `nyr08VqDu`,
                                                                            style: {
                                                                              backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                                                                            },
                                                                            children: [
                                                                              v(L, {
                                                                                links: [
                                                                                  {
                                                                                    href: {
                                                                                      webPageId: `hqVRjOHKR`,
                                                                                    },
                                                                                    implicitPathVariables:
                                                                                      void 0,
                                                                                  },
                                                                                ],
                                                                                children: (e) =>
                                                                                  v(H, {
                                                                                    children: v(U, {
                                                                                      className: `framer-oa8i3r-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      layoutDependency:
                                                                                        ce,
                                                                                      layoutId: `iFmRw9TL1-container`,
                                                                                      nodeId: `iFmRw9TL1`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `iEzA6gxpd`,
                                                                                      children: v(
                                                                                        rs,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `iFmRw9TL1`,
                                                                                          jYecZKH4O: `Home 1`,
                                                                                          layoutId: `iFmRw9TL1`,
                                                                                          width: `100%`,
                                                                                          ...as(
                                                                                            {
                                                                                              NHr3VygUW:
                                                                                                {
                                                                                                  zIuK9LjRH:
                                                                                                    e[0],
                                                                                                },
                                                                                            },
                                                                                            S,
                                                                                            O,
                                                                                          ),
                                                                                        },
                                                                                      ),
                                                                                    }),
                                                                                  }),
                                                                              }),
                                                                              v(L, {
                                                                                links: [
                                                                                  {
                                                                                    href: {
                                                                                      webPageId: `URL704FuE`,
                                                                                    },
                                                                                    implicitPathVariables:
                                                                                      void 0,
                                                                                  },
                                                                                ],
                                                                                children: (e) =>
                                                                                  v(H, {
                                                                                    children: v(U, {
                                                                                      className: `framer-j1aql6-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      layoutDependency:
                                                                                        ce,
                                                                                      layoutId: `vMzHCHA2j-container`,
                                                                                      nodeId: `vMzHCHA2j`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `iEzA6gxpd`,
                                                                                      children: v(
                                                                                        rs,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `vMzHCHA2j`,
                                                                                          iLKGod0ta:
                                                                                            Ss(
                                                                                              {
                                                                                                pixelHeight: 685,
                                                                                                pixelWidth: 1200,
                                                                                                src: `https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?width=1200&height=685`,
                                                                                                srcSet: `https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?scale-down-to=512&width=1200&height=685 512w,https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?scale-down-to=1024&width=1200&height=685 1024w,https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?width=1200&height=685 1200w`,
                                                                                              },
                                                                                              ``,
                                                                                            ),
                                                                                          jYecZKH4O: `Home 2`,
                                                                                          layoutId: `vMzHCHA2j`,
                                                                                          width: `100%`,
                                                                                          ...as(
                                                                                            {
                                                                                              NHr3VygUW:
                                                                                                {
                                                                                                  zIuK9LjRH:
                                                                                                    e[0],
                                                                                                },
                                                                                            },
                                                                                            S,
                                                                                            O,
                                                                                          ),
                                                                                        },
                                                                                      ),
                                                                                    }),
                                                                                  }),
                                                                              }),
                                                                              pe() &&
                                                                                v(L, {
                                                                                  links: [
                                                                                    {
                                                                                      href: {
                                                                                        webPageId: `Es05c4B07`,
                                                                                      },
                                                                                      implicitPathVariables:
                                                                                        void 0,
                                                                                    },
                                                                                    {
                                                                                      href: {
                                                                                        webPageId: `X2ppAGgHk`,
                                                                                      },
                                                                                      implicitPathVariables:
                                                                                        void 0,
                                                                                    },
                                                                                  ],
                                                                                  children: (e) =>
                                                                                    v(H, {
                                                                                      children: v(
                                                                                        U,
                                                                                        {
                                                                                          className: `framer-1dj2jcs-container`,
                                                                                          inComponentSlot:
                                                                                            !0,
                                                                                          layoutDependency:
                                                                                            ce,
                                                                                          layoutId: `CmmqgkK2S-container`,
                                                                                          nodeId: `CmmqgkK2S`,
                                                                                          rendersWithMotion:
                                                                                            !0,
                                                                                          scopeId: `iEzA6gxpd`,
                                                                                          children:
                                                                                            v(rs, {
                                                                                              height: `100%`,
                                                                                              id: `CmmqgkK2S`,
                                                                                              iLKGod0ta:
                                                                                                Ss(
                                                                                                  {
                                                                                                    pixelHeight: 685,
                                                                                                    pixelWidth: 1200,
                                                                                                    src: `https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?width=1200&height=685`,
                                                                                                    srcSet: `https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?scale-down-to=512&width=1200&height=685 512w,https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?scale-down-to=1024&width=1200&height=685 1024w,https://framerusercontent.com/images/x01G6QzuVHKI9AmL3uxAR9gbxjM.jpg?width=1200&height=685 1200w`,
                                                                                                  },
                                                                                                  ``,
                                                                                                ),
                                                                                              jYecZKH4O: `Home 2`,
                                                                                              layoutId: `CmmqgkK2S`,
                                                                                              width: `100%`,
                                                                                              zIuK9LjRH:
                                                                                                e[0],
                                                                                              ...as(
                                                                                                {
                                                                                                  NHr3VygUW:
                                                                                                    {
                                                                                                      iLKGod0ta:
                                                                                                        Ss(
                                                                                                          {
                                                                                                            pixelHeight: 677,
                                                                                                            pixelWidth: 1181,
                                                                                                            src: `https://framerusercontent.com/images/l1sfBGQL6duoAGgyLqIGNF8bY.jpg?width=1181&height=677`,
                                                                                                            srcSet: `https://framerusercontent.com/images/l1sfBGQL6duoAGgyLqIGNF8bY.jpg?scale-down-to=512&width=1181&height=677 512w,https://framerusercontent.com/images/l1sfBGQL6duoAGgyLqIGNF8bY.jpg?scale-down-to=1024&width=1181&height=677 1024w,https://framerusercontent.com/images/l1sfBGQL6duoAGgyLqIGNF8bY.jpg?width=1181&height=677 1181w`,
                                                                                                          },
                                                                                                          ``,
                                                                                                        ),
                                                                                                      jYecZKH4O: `Home 3`,
                                                                                                      zIuK9LjRH:
                                                                                                        e[1],
                                                                                                    },
                                                                                                },
                                                                                                S,
                                                                                                O,
                                                                                              ),
                                                                                            }),
                                                                                        },
                                                                                      ),
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                  }),
                                                i !== !1 &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `hqVRjOHKR` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          hash: `:isrBszXkg`,
                                                          webPageId: `hqVRjOHKR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...as(
                                                          {
                                                            NHr3VygUW: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                (0 +
                                                                  ((c?.height || 50) - 0 - 0) / 2) +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          S,
                                                          O,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-ly3xs9-container`,
                                                          layoutDependency: ce,
                                                          layoutId: `arUEJS0yB-container`,
                                                          nodeId: `arUEJS0yB`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `iEzA6gxpd`,
                                                          children: v(q, {
                                                            height: `100%`,
                                                            id: `arUEJS0yB`,
                                                            layoutId: `arUEJS0yB`,
                                                            s5ccoHERM: `Service`,
                                                            style: { height: `100%` },
                                                            variant: _s(`QZxFvUYYk`),
                                                            width: `100%`,
                                                            xCTgTOKeE: e[0],
                                                            ...as(
                                                              { NHr3VygUW: { xCTgTOKeE: e[1] } },
                                                              S,
                                                              O,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                me(r !== !1) &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `ogNU5sAlu` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `ogNU5sAlu` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...as(
                                                          {
                                                            NHr3VygUW: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                (0 +
                                                                  ((c?.height || 50) - 0 - 0) / 2) +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          S,
                                                          O,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-1c8c8d3-container`,
                                                          layoutDependency: ce,
                                                          layoutId: `ppMRU4BH6-container`,
                                                          nodeId: `ppMRU4BH6`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `iEzA6gxpd`,
                                                          children: v(q, {
                                                            height: `100%`,
                                                            id: `ppMRU4BH6`,
                                                            layoutId: `ppMRU4BH6`,
                                                            s5ccoHERM: `About`,
                                                            style: { height: `100%` },
                                                            variant: _s(gs(hs(ee, `About`), o)),
                                                            width: `100%`,
                                                            xCTgTOKeE: e[0],
                                                            ...as(
                                                              { NHr3VygUW: { xCTgTOKeE: e[1] } },
                                                              S,
                                                              O,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                R(a !== !1) &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `j7jTRdbSt` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `j7jTRdbSt` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...as(
                                                          {
                                                            NHr3VygUW: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                (0 +
                                                                  ((c?.height || 50) - 0 - 0) / 2) +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          S,
                                                          O,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-j41gx6-container`,
                                                          layoutDependency: ce,
                                                          layoutId: `sVDL7njwX-container`,
                                                          nodeId: `sVDL7njwX`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `iEzA6gxpd`,
                                                          children: v(q, {
                                                            height: `100%`,
                                                            id: `sVDL7njwX`,
                                                            layoutId: `sVDL7njwX`,
                                                            s5ccoHERM: `Projects`,
                                                            style: { height: `100%` },
                                                            variant: _s(gs(hs(ps, `Project`), o)),
                                                            width: `100%`,
                                                            xCTgTOKeE: e[0],
                                                            ...as(
                                                              {
                                                                NHr3VygUW: {
                                                                  variant: _s(
                                                                    gs(hs(ee, `Project`), o),
                                                                  ),
                                                                  xCTgTOKeE: e[1],
                                                                },
                                                              },
                                                              S,
                                                              O,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                R(t !== !1) &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `mpzwOKiYs` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `mpzwOKiYs` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...as(
                                                          {
                                                            NHr3VygUW: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                (0 +
                                                                  ((c?.height || 50) - 0 - 0) / 2) +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          S,
                                                          O,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-1tltnjo-container`,
                                                          layoutDependency: ce,
                                                          layoutId: `siWOVbbfh-container`,
                                                          nodeId: `siWOVbbfh`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `iEzA6gxpd`,
                                                          children: v(q, {
                                                            height: `100%`,
                                                            id: `siWOVbbfh`,
                                                            layoutId: `siWOVbbfh`,
                                                            s5ccoHERM: `Contact`,
                                                            style: { height: `100%` },
                                                            variant: _s(gs(hs(ps, `Contact`), o)),
                                                            width: `100%`,
                                                            xCTgTOKeE: e[0],
                                                            ...as(
                                                              {
                                                                NHr3VygUW: {
                                                                  variant: _s(
                                                                    gs(hs(ee, `Contact`), o),
                                                                  ),
                                                                  xCTgTOKeE: e[1],
                                                                },
                                                              },
                                                              S,
                                                              O,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                              ],
                                            }),
                                        }),
                                      },
                                      n,
                                    )
                                  ),
                                ),
                              }),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NFJiK.framer-1uvd6s9, .framer-NFJiK .framer-1uvd6s9 { display: block; }`,
          `.framer-NFJiK.framer-4qvy2y { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 50px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-NFJiK .framer-1jl5g63 { flex: none; gap: 10px; height: 50px; overflow: visible; position: relative; width: 50px; }`,
          `.framer-NFJiK .framer-m3cn70 { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: hidden; position: absolute; top: 19px; width: 16px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NFJiK .framer-1tqhx55 { bottom: 19px; flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: hidden; position: absolute; width: 16px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NFJiK .framer-a7qhtr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-NFJiK .framer-hvzfpq { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 10; }`,
          `.framer-NFJiK .framer-1icttlf-container, .framer-NFJiK .framer-ly3xs9-container, .framer-NFJiK .framer-1c8c8d3-container, .framer-NFJiK .framer-j41gx6-container, .framer-NFJiK .framer-1tltnjo-container { flex: none; height: 100%; position: relative; width: auto; z-index: 2; }`,
          `.framer-NFJiK .framer-1xc6y6q { height: 150px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NFJiK .framer-4nxxgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: absolute; top: 0px; width: min-content; }`,
          `.framer-NFJiK .framer-oa8i3r-container, .framer-NFJiK .framer-j1aql6-container, .framer-NFJiK .framer-1dj2jcs-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-NFJiK.framer-v-1cucufc.framer-4qvy2y { cursor: unset; }`,
          `.framer-NFJiK.framer-v-1cucufc .framer-1jl5g63 { cursor: pointer; }`,
          `.framer-NFJiK.framer-v-1cucufc .framer-m3cn70 { top: 24px; }`,
          `.framer-NFJiK.framer-v-1cucufc .framer-1tqhx55 { bottom: 24px; }`,
          `.framer-NFJiK.framer-v-1cucufc .framer-1xc6y6q { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; width: min-content; will-change: unset; }`,
          `.framer-NFJiK.framer-v-1cucufc .framer-4nxxgr { left: unset; position: relative; top: unset; }`,
          `.framer-NFJiK.framer-v-1trdw32 .framer-m3cn70 { top: 18px; }`,
          `.framer-NFJiK.framer-v-1trdw32 .framer-1tqhx55 { bottom: 18px; }`,
          `.framer-NFJiK.framer-v-14rxg4o .framer-m3cn70 { top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-NFJiK.framer-v-14rxg4o .framer-1tqhx55 { bottom: unset; top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-NFJiK[data-border="true"]::after, .framer-NFJiK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-NFJiK`,
      )),
      (Ms.displayName = `Button/Handburger`),
      (Ms.defaultProps = { height: 50, width: 50 }),
      F(Ms, {
        variant: {
          options: [`OgAT1phvQ`, `NHr3VygUW`, `frBLI8hMg`, `PT3YA9GQy`],
          optionTitles: [`Close`, `Open`, `Mobile open`, `Mobile close`],
          title: `Variant`,
          type: G.Enum,
        },
        Nam1_5dyq: { title: `Click`, type: G.EventHandler },
        m4wAiNhVS: {
          defaultValue: ``,
          description: `Click here to edit the active page`,
          title: `Active Page`,
          type: G.String,
        },
        onm4wAiNhVSChange: { changes: `m4wAiNhVS`, type: G.ChangeHandler },
        XS7ya8i_8: { title: `Hover`, type: G.EventHandler },
        Lv79RHndb: { defaultValue: `Home  1`, displayTextArea: !1, title: `Label`, type: G.String },
        onLv79RHndbChange: { changes: `Lv79RHndb`, type: G.ChangeHandler },
        x_PBBrROi: { defaultValue: !0, title: `Hero`, type: G.Boolean },
        onx_PBBrROiChange: { changes: `x_PBBrROi`, type: G.ChangeHandler },
      }),
      P(Ms, [{ explicitInter: !0, fonts: [] }, ...os, ...ss], { supportsExplicitInterCodegen: !0 }),
      (Ms.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(ws(), n);
          return Promise.allSettled([
            r.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [
                  z(q, {}, t),
                  z(rs, {}, t),
                  z(rs, {}, t),
                  z(rs, {}, t),
                  z(q, {}, t),
                  z(q, {}, t),
                  z(q, {}, t),
                  z(q, {}, t),
                ]),
              );
            })(),
          ]);
        },
      }));
  });
function Ps(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc = e(() => {
    (S(),
      R(),
      A(),
      f(),
      ct(),
      Go(),
      Ns(),
      Yt(),
      Rn(),
      (Fs = B(Ms)),
      (Is = B(q)),
      (Ls = B(Wo)),
      (Rs = B(Xt)),
      (zs = Ze(Xt)),
      (Bs = [`Prz1TwMty`, `UYgUUBKkQ`, `CKYdlmvpb`, `EQ8C7gjSH`, `vGc1cdPlH`]),
      (Vs = `framer-tZKLK`),
      (Hs = {
        CKYdlmvpb: `framer-v-vah5nn`,
        EQ8C7gjSH: `framer-v-5z7fwj`,
        Prz1TwMty: `framer-v-133cf4z`,
        UYgUUBKkQ: `framer-v-tz7aod`,
        vGc1cdPlH: `framer-v-1ov52ky`,
      }),
      (Us = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Ws = { bounce: 0.2, delay: 0, duration: 0.3, type: `spring` }),
      (Gs = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Ks = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (qs = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Js = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `home`:
            return `t9YRY29l1`;
          default:
            return `QZxFvUYYk`;
        }
      }),
      (Ys = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `home`:
            return `jTsgAmxyw`;
          default:
            return `LbaWpHbOf`;
        }
      }),
      (Xs = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `about`:
            return `t9YRY29l1`;
          default:
            return `QZxFvUYYk`;
        }
      }),
      (Zs = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `about`:
            return `jTsgAmxyw`;
          default:
            return `LbaWpHbOf`;
        }
      }),
      (Qs = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `projects`:
            return `t9YRY29l1`;
          default:
            return `QZxFvUYYk`;
        }
      }),
      ($s = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `projects`:
            return `jTsgAmxyw`;
          default:
            return `LbaWpHbOf`;
        }
      }),
      (ec = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `contact`:
            return `t9YRY29l1`;
          default:
            return `QZxFvUYYk`;
        }
      }),
      (tc = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `contact`:
            return `jTsgAmxyw`;
          default:
            return `LbaWpHbOf`;
        }
      }),
      (nc = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `ads`:
            return `t9YRY29l1`;
          default:
            return `QZxFvUYYk`;
        }
      }),
      (rc = (e, t) => {
        switch (typeof e == `string` ? e.toLowerCase() : e) {
          case `ads`:
            return `jTsgAmxyw`;
          default:
            return `LbaWpHbOf`;
        }
      }),
      (ic = () => ({
        from: { alias: `Ujh1W31HE`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `Ujh1W31HE`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `Ujh1W31HE`, name: `ihUkwOXaD`, type: `Identifier` },
          { collection: `Ujh1W31HE`, name: `vg9tVkcxn`, type: `Identifier` },
          { collection: `Ujh1W31HE`, name: `I7yTj1Joi`, type: `Identifier` },
          { collection: `Ujh1W31HE`, name: `bUb8zUdbE`, type: `Identifier` },
          { collection: `Ujh1W31HE`, name: `id`, type: `Identifier` },
        ],
      })),
      (ac = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (oc = () => ({
        from: { alias: `coHpdK7Nb`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `coHpdK7Nb`, name: `Sey3MtDgr`, type: `Identifier` },
          { collection: `coHpdK7Nb`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `coHpdK7Nb`, name: `id`, type: `Identifier` },
        ],
      })),
      (sc = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (cc = {
        "Ad black": `vGc1cdPlH`,
        "Mobile Closed": `UYgUUBKkQ`,
        "Mobile Open": `CKYdlmvpb`,
        "White nav": `EQ8C7gjSH`,
        Desktop: `Prz1TwMty`,
      }),
      (lc = D.create(s)),
      (uc = (e, t) => {
        let [n, r] = c(e),
          [i, a] = c(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (dc = ({
        activePage: e,
        darkImage: t,
        height: n,
        hero: r,
        id: i,
        label: a,
        logoLight: o,
        padding: s,
        phoneNumber: c,
        phoneNumberLink: l,
        width: u,
        ...d
      }) => ({
        ...d,
        bmZePMHer: s ?? d.bmZePMHer ?? `0px 16px 0px 16px`,
        fnV5CQdBI: a ?? d.fnV5CQdBI ?? `Home  1`,
        NrGV8F5my: o ??
          d.NrGV8F5my ?? {
            alt: `Image of the company logo`,
            pixelHeight: 135,
            pixelWidth: 591,
            src: `https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?width=591&height=135`,
            srcSet: `https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?scale-down-to=512&width=591&height=135 512w,https://framerusercontent.com/images/lClzlxBuE1F6ff5JgYTnivzY.png?width=591&height=135 591w`,
          },
        Tg8IGJVFY: c ?? d.Tg8IGJVFY ?? `503 453 5432`,
        uaF64HwOa: e ?? d.uaF64HwOa ?? `Home`,
        uye42s6Qo: l ?? d.uye42s6Qo,
        variant: cc[d.variant] ?? d.variant ?? `Prz1TwMty`,
        z1q9ZdodO: r ?? d.z1q9ZdodO ?? !0,
        ZQDUemFiS: t ??
          d.ZQDUemFiS ?? {
            pixelHeight: 135,
            pixelWidth: 591,
            src: `https://framerusercontent.com/images/zakN3VVMcKsKDrPsoriQIGMK4I.png?width=591&height=135`,
            srcSet: `https://framerusercontent.com/images/zakN3VVMcKsKDrPsoriQIGMK4I.png?scale-down-to=512&width=591&height=135 512w,https://framerusercontent.com/images/zakN3VVMcKsKDrPsoriQIGMK4I.png?width=591&height=135 591w`,
          },
      })),
      (fc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (pc = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: s } = qe(),
            c = De(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              uaF64HwOa: p,
              onuaF64HwOaChange: ee,
              NrGV8F5my: h,
              ZQDUemFiS: g,
              Tg8IGJVFY: _,
              onTg8IGJVFYChange: y,
              uye42s6Qo: b,
              bmZePMHer: x,
              fnV5CQdBI: ne,
              onfnV5CQdBIChange: S,
              z1q9ZdodO: C,
              onz1q9ZdodOChange: T,
              ...E
            } = dc(e),
            [O, re] = uc(p, ee),
            [A, ie] = uc(_, y),
            [ae, oe] = uc(ne, S),
            [ce, j] = uc(C, T),
            {
              baseVariant: M,
              classNames: le,
              clearLoadingGesture: ue,
              gestureHandlers: de,
              gestureVariant: P,
              isLoading: F,
              setGestureState: I,
              setVariant: pe,
              variants: R,
            } = fe({
              cycleOrder: Bs,
              defaultVariant: `Prz1TwMty`,
              ref: i,
              variant: f,
              variantClassNames: Hs,
            }),
            z = fc(e, R),
            { activeVariantCallback: me, delay: he } = Le(M),
            ge = me(async (...e) => {
              pe(`CKYdlmvpb`);
            }),
            B = me(async (...e) => {
              pe(`UYgUUBKkQ`);
            }),
            _e = me(async (...e) => {
              pe(`UYgUUBKkQ`);
            }),
            ve = N(Vs),
            ye = () => ![`UYgUUBKkQ`, `CKYdlmvpb`, `vGc1cdPlH`].includes(M),
            be = () => !![`UYgUUBKkQ`, `CKYdlmvpb`].includes(M),
            V = () => ![`UYgUUBKkQ`, `CKYdlmvpb`].includes(M),
            xe = () => ![`UYgUUBKkQ`, `vGc1cdPlH`].includes(M);
          ke();
          let Se = typeof x == `string` ? ze(x) : { top: x, right: x, bottom: x, left: x },
            Ce = () => M === `CKYdlmvpb`;
          return v(k, {
            id: d ?? a,
            children: v(lc, {
              animate: R,
              initial: !1,
              children: v(sc, {
                value: Us,
                ...Ps({ CKYdlmvpb: { value: Ws }, UYgUUBKkQ: { value: Ws } }, M, P),
                children: w(D.nav, {
                  ...E,
                  ...de,
                  className: N(ve, `framer-133cf4z`, u, le),
                  "data-framer-name": `Desktop`,
                  "data-hide-scrollbars": !0,
                  layoutDependency: z,
                  layoutId: `Prz1TwMty`,
                  ref: i,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...l },
                  variants: {
                    CKYdlmvpb: {
                      backgroundColor: `var(--token-db31fa36-233c-4c3a-8a57-a605708de99d, rgb(16, 18, 17))`,
                    },
                    EQ8C7gjSH: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    UYgUUBKkQ: {
                      backgroundColor: `var(--token-db31fa36-233c-4c3a-8a57-a605708de99d, rgb(16, 18, 17))`,
                    },
                    vGc1cdPlH: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  },
                  ...Ps(
                    {
                      CKYdlmvpb: { "data-framer-name": `Mobile Open` },
                      EQ8C7gjSH: { "data-framer-name": `White nav` },
                      UYgUUBKkQ: { "data-framer-name": `Mobile Closed` },
                      vGc1cdPlH: { "data-framer-name": `Ad black` },
                    },
                    M,
                    P,
                  ),
                  children: [
                    ye() &&
                      v(D.div, {
                        className: `framer-3tg541`,
                        layoutDependency: z,
                        layoutId: `dA2465lLB`,
                        style: {
                          backdropFilter: `blur(5px)`,
                          backgroundColor: `rgba(0, 0, 0, 0.18)`,
                          WebkitBackdropFilter: `blur(5px)`,
                        },
                        variants: {
                          EQ8C7gjSH: {
                            backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                          },
                        },
                      }),
                    w(D.div, {
                      className: `framer-erh0yg`,
                      "data-framer-name": `Nav`,
                      layoutDependency: z,
                      layoutId: `TSDSjJNmZ`,
                      style: { "--zu7xof": Gs(x) },
                      children: [
                        v(D.div, {
                          className: `framer-shib1s`,
                          "data-framer-name": `Logo`,
                          layoutDependency: z,
                          layoutId: `ZOpM1mn4M`,
                          children: v(Ye, {
                            href: { webPageId: `hqVRjOHKR` },
                            motionChild: !0,
                            nodeId: `O19a7gPyC`,
                            openInNewTab: !1,
                            scopeId: `at0lTXKRr`,
                            children: v(Ee, {
                              as: `a`,
                              background: {
                                alt: `Image of the company logo`,
                                fit: `fit`,
                                pixelHeight: 135,
                                pixelWidth: 591,
                                sizes: `150px`,
                                ...Ks(h),
                                positionX: `left`,
                                positionY: `center`,
                              },
                              className: `framer-1y13tpu framer-wcxxq7`,
                              "data-framer-name": `Logo`,
                              layoutDependency: z,
                              layoutId: `O19a7gPyC`,
                              ...Ps(
                                {
                                  EQ8C7gjSH: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      pixelHeight: 135,
                                      pixelWidth: 591,
                                      sizes: `150px`,
                                      ...Ks(g),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                  },
                                },
                                M,
                                P,
                              ),
                            }),
                          }),
                        }),
                        be() &&
                          w(D.div, {
                            className: `framer-p3pars`,
                            "data-framer-name": `Buttons`,
                            layoutDependency: z,
                            layoutId: `ES7nkV0ov`,
                            children: [
                              v(H, {
                                height: 49,
                                children: v(U, {
                                  className: `framer-1wua7yw-container`,
                                  layoutDependency: z,
                                  layoutId: `GqNoCOYbw-container`,
                                  nodeId: `GqNoCOYbw`,
                                  rendersWithMotion: !0,
                                  scopeId: `at0lTXKRr`,
                                  children: v(Ms, {
                                    height: `100%`,
                                    id: `GqNoCOYbw`,
                                    layoutId: `GqNoCOYbw`,
                                    Lv79RHndb: ae,
                                    m4wAiNhVS: O,
                                    onLv79RHndbChange: oe,
                                    onm4wAiNhVSChange: re,
                                    onx_PBBrROiChange: j,
                                    style: { height: `100%` },
                                    variant: qs(`PT3YA9GQy`),
                                    width: `100%`,
                                    x_PBBrROi: ce,
                                    ...Ps(
                                      {
                                        CKYdlmvpb: { Nam1_5dyq: B },
                                        UYgUUBKkQ: { Nam1_5dyq: ge, variant: qs(`frBLI8hMg`) },
                                      },
                                      M,
                                      P,
                                    ),
                                  }),
                                }),
                              }),
                              V() &&
                                v(D.div, {
                                  className: `framer-rgvzty`,
                                  "data-border": !0,
                                  "data-framer-name": `Light & dark`,
                                  layoutDependency: z,
                                  layoutId: `wGgFaG8ea`,
                                  style: {
                                    "--border-bottom-width": `0px`,
                                    "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(217, 217, 217))`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `dashed`,
                                    "--border-top-width": `0px`,
                                  },
                                }),
                            ],
                          }),
                        xe() &&
                          v(D.div, {
                            className: `framer-1lfkfra`,
                            layoutDependency: z,
                            layoutId: `Ujh1W31HE`,
                            children: v(Pe, {
                              children: v(ac, {
                                query: ic(),
                                children: (e, t, n) =>
                                  v(m, {
                                    children: e?.map(
                                      (
                                        {
                                          bUb8zUdbE: e,
                                          DNLONDBp6: t,
                                          I7yTj1Joi: n,
                                          id: r,
                                          ihUkwOXaD: i,
                                          vg9tVkcxn: a,
                                        },
                                        s,
                                      ) => (
                                        (t ??= ``),
                                        (i ??= !0),
                                        (a ??= !0),
                                        (n ??= !0),
                                        (e ??= !0),
                                        v(
                                          k,
                                          {
                                            id: `Ujh1W31HE-${r}`,
                                            children: v(se.Provider, {
                                              value: { DNLONDBp6: t },
                                              children: w(D.div, {
                                                className: `framer-njumxg`,
                                                "data-framer-name": `Menu`,
                                                layoutDependency: z,
                                                layoutId: `IYce1kx7m`,
                                                children: [
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `hqVRjOHKR` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `hqVRjOHKR` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `hqVRjOHKR` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...Ps(
                                                          {
                                                            CKYdlmvpb: {
                                                              height: 42,
                                                              width: `calc(max(((${c?.width || `100vw`} - ${(Se?.left ?? 0) + (Se?.right ?? 0)}px) - 10px) / 2, 50px) * 2 + 10px)`,
                                                            },
                                                          },
                                                          M,
                                                          P,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-7h1b5t-container`,
                                                          layoutDependency: z,
                                                          layoutId: `ljlADWCrs-container`,
                                                          nodeId: `ljlADWCrs`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `at0lTXKRr`,
                                                          children: v(q, {
                                                            height: `100%`,
                                                            id: `ljlADWCrs`,
                                                            layoutId: `ljlADWCrs`,
                                                            s5ccoHERM: `Home`,
                                                            skkjAsEq6: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                            style: { height: `100%` },
                                                            variant: qs(Js(O, o)),
                                                            width: `100%`,
                                                            xCTgTOKeE: e[0],
                                                            ...Ps(
                                                              {
                                                                CKYdlmvpb: {
                                                                  style: { width: `100%` },
                                                                  variant: qs(Ys(O, o)),
                                                                  xCTgTOKeE: e[1],
                                                                  zTPS3AxGz: _e,
                                                                },
                                                                EQ8C7gjSH: {
                                                                  skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                  xCTgTOKeE: e[2],
                                                                },
                                                              },
                                                              M,
                                                              P,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                  i !== !1 &&
                                                    v(L, {
                                                      links: [
                                                        {
                                                          href: { webPageId: `ogNU5sAlu` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `ogNU5sAlu` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `ogNU5sAlu` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        v(H, {
                                                          ...Ps(
                                                            {
                                                              CKYdlmvpb: {
                                                                height: 42,
                                                                width: `calc(max(((${c?.width || `100vw`} - ${(Se?.left ?? 0) + (Se?.right ?? 0)}px) - 10px) / 2, 50px) * 2 + 10px)`,
                                                              },
                                                            },
                                                            M,
                                                            P,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-u2edyz-container`,
                                                            layoutDependency: z,
                                                            layoutId: `kRz7pxTps-container`,
                                                            nodeId: `kRz7pxTps`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `at0lTXKRr`,
                                                            children: v(q, {
                                                              height: `100%`,
                                                              id: `kRz7pxTps`,
                                                              layoutId: `kRz7pxTps`,
                                                              s5ccoHERM: `About`,
                                                              skkjAsEq6: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              style: { height: `100%` },
                                                              variant: qs(Xs(O, o)),
                                                              width: `100%`,
                                                              xCTgTOKeE: e[0],
                                                              ...Ps(
                                                                {
                                                                  CKYdlmvpb: {
                                                                    style: { width: `100%` },
                                                                    variant: qs(Zs(O, o)),
                                                                    xCTgTOKeE: e[1],
                                                                    zTPS3AxGz: _e,
                                                                  },
                                                                  EQ8C7gjSH: {
                                                                    skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                    xCTgTOKeE: e[2],
                                                                  },
                                                                },
                                                                M,
                                                                P,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  a !== !1 &&
                                                    v(L, {
                                                      links: [
                                                        {
                                                          href: { webPageId: `j7jTRdbSt` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `j7jTRdbSt` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `j7jTRdbSt` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        v(H, {
                                                          ...Ps(
                                                            {
                                                              CKYdlmvpb: {
                                                                height: 42,
                                                                width: `calc(max(((${c?.width || `100vw`} - ${(Se?.left ?? 0) + (Se?.right ?? 0)}px) - 10px) / 2, 50px) * 2 + 10px)`,
                                                              },
                                                            },
                                                            M,
                                                            P,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-13tsf7e-container`,
                                                            layoutDependency: z,
                                                            layoutId: `IoWRuVUVR-container`,
                                                            nodeId: `IoWRuVUVR`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `at0lTXKRr`,
                                                            children: v(q, {
                                                              height: `100%`,
                                                              id: `IoWRuVUVR`,
                                                              layoutId: `IoWRuVUVR`,
                                                              s5ccoHERM: `Projects`,
                                                              skkjAsEq6: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              style: { height: `100%` },
                                                              variant: qs(Qs(O, o)),
                                                              width: `100%`,
                                                              xCTgTOKeE: e[0],
                                                              ...Ps(
                                                                {
                                                                  CKYdlmvpb: {
                                                                    style: { width: `100%` },
                                                                    variant: qs($s(O, o)),
                                                                    xCTgTOKeE: e[1],
                                                                    zTPS3AxGz: _e,
                                                                  },
                                                                  EQ8C7gjSH: {
                                                                    skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                    xCTgTOKeE: e[2],
                                                                  },
                                                                },
                                                                M,
                                                                P,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  n !== !1 &&
                                                    v(L, {
                                                      links: [
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: { webPageId: `mpzwOKiYs` },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        v(H, {
                                                          ...Ps(
                                                            {
                                                              CKYdlmvpb: {
                                                                height: 42,
                                                                width: `calc(max(((${c?.width || `100vw`} - ${(Se?.left ?? 0) + (Se?.right ?? 0)}px) - 10px) / 2, 50px) * 2 + 10px)`,
                                                              },
                                                            },
                                                            M,
                                                            P,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-ehyyx5-container`,
                                                            layoutDependency: z,
                                                            layoutId: `GYWuT6b73-container`,
                                                            nodeId: `GYWuT6b73`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `at0lTXKRr`,
                                                            children: v(q, {
                                                              height: `100%`,
                                                              id: `GYWuT6b73`,
                                                              layoutId: `GYWuT6b73`,
                                                              s5ccoHERM: `Contact`,
                                                              skkjAsEq6: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              style: { height: `100%` },
                                                              variant: qs(ec(O, o)),
                                                              width: `100%`,
                                                              xCTgTOKeE: e[0],
                                                              ...Ps(
                                                                {
                                                                  CKYdlmvpb: {
                                                                    style: { width: `100%` },
                                                                    variant: qs(tc(O, o)),
                                                                    xCTgTOKeE: e[1],
                                                                    zTPS3AxGz: _e,
                                                                  },
                                                                  EQ8C7gjSH: {
                                                                    skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                    xCTgTOKeE: e[2],
                                                                  },
                                                                },
                                                                M,
                                                                P,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                  e !== !1 &&
                                                    v(L, {
                                                      links: [
                                                        {
                                                          href: {
                                                            pathVariables: { DNLONDBp6: `remodel` },
                                                            unresolvedPathSlugs: {
                                                              DNLONDBp6: {
                                                                collectionId: `lH3BqnTe6`,
                                                                collectionItemId: `RvQleLQgJ`,
                                                              },
                                                            },
                                                            webPageId: `a60roxY9H`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { DNLONDBp6: `remodel` },
                                                            unresolvedPathSlugs: {
                                                              DNLONDBp6: {
                                                                collectionId: `lH3BqnTe6`,
                                                                collectionItemId: `RvQleLQgJ`,
                                                              },
                                                            },
                                                            webPageId: `a60roxY9H`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            pathVariables: { DNLONDBp6: `remodel` },
                                                            unresolvedPathSlugs: {
                                                              DNLONDBp6: {
                                                                collectionId: `lH3BqnTe6`,
                                                                collectionItemId: `RvQleLQgJ`,
                                                              },
                                                            },
                                                            webPageId: `a60roxY9H`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (e) =>
                                                        v(H, {
                                                          ...Ps(
                                                            {
                                                              CKYdlmvpb: {
                                                                height: 42,
                                                                width: `calc(max(((${c?.width || `100vw`} - ${(Se?.left ?? 0) + (Se?.right ?? 0)}px) - 10px) / 2, 50px) * 2 + 10px)`,
                                                              },
                                                            },
                                                            M,
                                                            P,
                                                          ),
                                                          children: v(U, {
                                                            className: `framer-pwxdbn-container`,
                                                            layoutDependency: z,
                                                            layoutId: `x8rVsfv_J-container`,
                                                            nodeId: `x8rVsfv_J`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `at0lTXKRr`,
                                                            children: v(q, {
                                                              height: `100%`,
                                                              id: `x8rVsfv_J`,
                                                              layoutId: `x8rVsfv_J`,
                                                              s5ccoHERM: `Ads`,
                                                              skkjAsEq6: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                              style: { height: `100%` },
                                                              variant: qs(nc(O, o)),
                                                              width: `100%`,
                                                              xCTgTOKeE: e[0],
                                                              ...Ps(
                                                                {
                                                                  CKYdlmvpb: {
                                                                    style: { width: `100%` },
                                                                    variant: qs(rc(O, o)),
                                                                    xCTgTOKeE: e[1],
                                                                  },
                                                                  EQ8C7gjSH: {
                                                                    skkjAsEq6: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                    xCTgTOKeE: e[2],
                                                                  },
                                                                },
                                                                M,
                                                                P,
                                                              ),
                                                            }),
                                                          }),
                                                        }),
                                                    }),
                                                ],
                                              }),
                                            }),
                                          },
                                          r,
                                        )
                                      ),
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        V() &&
                          v(D.div, {
                            className: `framer-17wt0h2`,
                            "data-framer-name": `Button`,
                            layoutDependency: z,
                            layoutId: `f6ccJg4Z7`,
                            children: v(H, {
                              height: 22,
                              children: v(U, {
                                className: `framer-1bm6s98-container`,
                                layoutDependency: z,
                                layoutId: `QMiS47LSo-container`,
                                nodeId: `QMiS47LSo`,
                                rendersWithMotion: !0,
                                scopeId: `at0lTXKRr`,
                                children: v(Wo, {
                                  gaqKoW8VK: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                  height: `100%`,
                                  id: `QMiS47LSo`,
                                  layoutId: `QMiS47LSo`,
                                  MZMy8moZW: b,
                                  onufOIC4WwMChange: ie,
                                  ufOIC4WwM: A,
                                  variant: qs(`tKaGiOzUo`),
                                  width: `100%`,
                                  ...Ps(
                                    {
                                      EQ8C7gjSH: {
                                        gaqKoW8VK: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                      },
                                      vGc1cdPlH: {
                                        gaqKoW8VK: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                      },
                                    },
                                    M,
                                    P,
                                  ),
                                }),
                              }),
                            }),
                          }),
                        Ce() &&
                          v(D.div, {
                            className: `framer-1u4c5v1`,
                            layoutDependency: z,
                            layoutId: `coHpdK7Nb`,
                            children: v(Pe, {
                              children: v(ac, {
                                query: oc(),
                                children: (e, t, n) =>
                                  v(m, {
                                    children: e?.map(
                                      ({ DNLONDBp6: e, id: t, Sey3MtDgr: n }, r) => (
                                        (e ??= ``),
                                        v(
                                          k,
                                          {
                                            id: `coHpdK7Nb-${t}`,
                                            children: v(se.Provider, {
                                              value: { DNLONDBp6: e },
                                              children: v(H, {
                                                height: 350,
                                                ...Ps({ CKYdlmvpb: { width: `358px` } }, M, P),
                                                children: v(U, {
                                                  className: `framer-p9nee4-container`,
                                                  layoutDependency: z,
                                                  layoutId: `HXCgzPnJB-container`,
                                                  nodeId: `HXCgzPnJB`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `at0lTXKRr`,
                                                  children: v(zs, {
                                                    __framer__animateOnce: !0,
                                                    __framer__obscuredVariantId: `JGKQXcGU8`,
                                                    __framer__threshold: 0.5,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    __framer__visibleVariantId: `Wh4jNPJtj`,
                                                    height: `100%`,
                                                    id: `HXCgzPnJB`,
                                                    L4j2J7d1N: !1,
                                                    layoutId: `HXCgzPnJB`,
                                                    qLYhflb9R: `0px`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: qs(`Wh4jNPJtj`),
                                                    VcP3JkMrC: Ks(n),
                                                    w1YFGN0ZT: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          t,
                                        )
                                      ),
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
          });
        }),
        [
          `.framer-tZKLK.framer-wcxxq7, .framer-tZKLK .framer-wcxxq7 { display: block; }`,
          `.framer-tZKLK.framer-133cf4z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-tZKLK .framer-3tg541 { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-tZKLK .framer-erh0yg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1300px; overflow: visible; padding: var(--zu7xof); position: relative; width: 100%; z-index: 3; }`,
          `.framer-tZKLK .framer-shib1s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 27px; justify-content: center; max-width: 150px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-tZKLK .framer-1y13tpu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 100%; justify-content: center; max-width: 150px; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 150px; }`,
          `.framer-tZKLK .framer-p3pars { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; max-width: 450px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-tZKLK .framer-1wua7yw-container { flex: none; height: 49px; position: relative; width: auto; }`,
          `.framer-tZKLK .framer-rgvzty { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 12px 0px 12px; position: relative; width: 50px; z-index: 10; }`,
          `.framer-tZKLK .framer-1lfkfra { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
          `.framer-tZKLK .framer-njumxg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 10; }`,
          `.framer-tZKLK .framer-7h1b5t-container, .framer-tZKLK .framer-u2edyz-container, .framer-tZKLK .framer-13tsf7e-container, .framer-tZKLK .framer-ehyyx5-container, .framer-tZKLK .framer-pwxdbn-container { flex: none; height: 100%; position: relative; width: auto; z-index: 2; }`,
          `.framer-tZKLK .framer-17wt0h2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; max-width: 150px; overflow: visible; padding: 8px 0px 8px 0px; position: relative; width: 1px; }`,
          `.framer-tZKLK .framer-1bm6s98-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-tZKLK .framer-1u4c5v1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 24px 0px 0px 0px; position: relative; width: 358px; }`,
          `.framer-tZKLK .framer-p9nee4-container { flex: none; height: 350px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-tZKLK.framer-v-tz7aod.framer-133cf4z { height: 49px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); width: 390px; }`,
          `.framer-tZKLK.framer-v-tz7aod .framer-erh0yg { height: 49px; max-width: unset; }`,
          `.framer-tZKLK.framer-v-tz7aod .framer-1y13tpu, .framer-tZKLK.framer-v-vah5nn .framer-1y13tpu { height: 27px; }`,
          `.framer-tZKLK.framer-v-tz7aod .framer-p3pars { align-self: unset; flex: none; height: 49px; max-width: 100px; width: min-content; }`,
          `.framer-tZKLK.framer-v-vah5nn.framer-133cf4z { justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; width: 390px; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-erh0yg { align-content: unset; align-items: unset; display: grid; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; max-width: unset; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-shib1s { align-content: flex-start; align-items: flex-start; align-self: start; flex: none; flex-direction: column; height: 100%; justify-self: start; width: 100%; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-p3pars { align-self: start; flex: none; height: min-content; justify-content: flex-end; justify-self: start; max-width: unset; width: 100%; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-1lfkfra { align-self: start; grid-column: span 2; height: 1fr; justify-self: start; width: 100%; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-njumxg { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 0px; height: min-content; width: 100%; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-7h1b5t-container, .framer-tZKLK.framer-v-vah5nn .framer-u2edyz-container, .framer-tZKLK.framer-v-vah5nn .framer-13tsf7e-container, .framer-tZKLK.framer-v-vah5nn .framer-ehyyx5-container, .framer-tZKLK.framer-v-vah5nn .framer-pwxdbn-container { height: auto; width: 100%; }`,
          `.framer-tZKLK.framer-v-vah5nn .framer-1u4c5v1 { align-self: start; justify-self: start; }`,
          `.framer-tZKLK[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-tZKLK [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-tZKLK[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-tZKLK [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-tZKLK[data-hide-scrollbars="true"], .framer-tZKLK [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          `.framer-tZKLK[data-border="true"]::after, .framer-tZKLK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-tZKLK`,
      )),
      (pc.displayName = `Navigation`),
      (pc.defaultProps = { height: 38, width: 1200 }),
      F(pc, {
        variant: {
          options: [`Prz1TwMty`, `UYgUUBKkQ`, `CKYdlmvpb`, `EQ8C7gjSH`, `vGc1cdPlH`],
          optionTitles: [`Desktop`, `Mobile Closed`, `Mobile Open`, `White nav`, `Ad black`],
          title: `Variant`,
          type: G.Enum,
        },
        uaF64HwOa: {
          defaultValue: `Home`,
          description: `Click here to edit the active page`,
          title: `Active Page`,
          type: G.String,
        },
        onuaF64HwOaChange: { changes: `uaF64HwOa`, type: G.ChangeHandler },
        NrGV8F5my: {
          __defaultAssetReference: `data:framer/asset-reference,lClzlxBuE1F6ff5JgYTnivzY.png?originalFilename=Logo+Light-1.png&width=591&height=135`,
          __vekterDefault: {
            alt: `Image of the company logo`,
            assetReference: `data:framer/asset-reference,lClzlxBuE1F6ff5JgYTnivzY.png?originalFilename=Logo+Light-1.png&width=591&height=135`,
          },
          description: `Input the light version of your logo`,
          title: `Logo Light`,
          type: G.ResponsiveImage,
        },
        ZQDUemFiS: {
          __defaultAssetReference: `data:framer/asset-reference,zakN3VVMcKsKDrPsoriQIGMK4I.png?originalFilename=Logo+Light-2.png&width=591&height=135`,
          title: `Dark Image`,
          type: G.ResponsiveImage,
        },
        Tg8IGJVFY: {
          defaultValue: `503 453 5432`,
          description: `Click here to edit the phone number`,
          displayTextArea: !1,
          placeholder: `503 453 5432`,
          title: `Phone Number`,
          type: G.String,
        },
        onTg8IGJVFYChange: { changes: `Tg8IGJVFY`, type: G.ChangeHandler },
        uye42s6Qo: {
          description: `Click here to edit the phone number link`,
          title: `Phone number link`,
          type: G.Link,
        },
        bmZePMHer: {
          defaultValue: `0px 16px 0px 16px`,
          description: `Click here to edit the padding.`,
          title: `Padding`,
          type: G.Padding,
        },
        fnV5CQdBI: { defaultValue: `Home  1`, displayTextArea: !1, title: `Label`, type: G.String },
        onfnV5CQdBIChange: { changes: `fnV5CQdBI`, type: G.ChangeHandler },
        z1q9ZdodO: { defaultValue: !0, title: `Hero`, type: G.Boolean },
        onz1q9ZdodOChange: { changes: `z1q9ZdodO`, type: G.ChangeHandler },
      }),
      P(pc, [{ explicitInter: !0, fonts: [] }, ...Fs, ...Is, ...Ls, ...Rs], {
        supportsExplicitInterCodegen: !0,
      }),
      (pc.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(ic(), n),
            i = xe.get(oc(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            z(Ms, {}, t),
            z(Wo, {}, t),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [z(q, {}, t), z(q, {}, t), z(q, {}, t), z(q, {}, t), z(q, {}, t)]),
              );
            })(),
            (async () => {
              let e = (await i.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => z(Xt, {}, t)));
            })(),
          ]);
        },
      }));
  });
function hc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc = e(() => {
    (S(),
      R(),
      A(),
      f(),
      ct(),
      Ir(),
      (gc = B(J)),
      (_c = [`O54G42zGh`, `pxMf2BOOl`, `N3NVfeY93`]),
      (vc = `framer-xVqQv`),
      (yc = {
        N3NVfeY93: `framer-v-1abrniy`,
        O54G42zGh: `framer-v-cosgjs`,
        pxMf2BOOl: `framer-v-16potc7`,
      }),
      (bc = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (xc = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Sc = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Cc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wc = () => ({
        from: { alias: `dVF7XnfnP`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `dVF7XnfnP`, name: `MtLtvLIVn`, type: `Identifier` },
          { collection: `dVF7XnfnP`, name: `JkDw2Q74e`, type: `Identifier` },
          { collection: `dVF7XnfnP`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `dVF7XnfnP`, name: `wZo8uFYX4`, type: `Identifier` },
          { collection: `dVF7XnfnP`, name: `id`, type: `Identifier` },
        ],
      })),
      (Tc = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (Ec = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (Dc = { Desktop: `O54G42zGh`, Mobile: `N3NVfeY93`, Tablet: `pxMf2BOOl` }),
      (Oc = D.create(s)),
      (kc = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        bmZePMHer: n ?? i.bmZePMHer ?? `0px 16px 0px 16px`,
        variant: Dc[i.variant] ?? i.variant ?? `O54G42zGh`,
      })),
      (Ac = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jc = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: s } = qe(),
            c = De(),
            { style: l, className: u, layoutId: d, variant: f, bmZePMHer: p, ...ee } = kc(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = fe({
              cycleOrder: _c,
              defaultVariant: `O54G42zGh`,
              ref: i,
              variant: f,
              variantClassNames: yc,
            }),
            T = Ac(e, C),
            E = N(vc);
          return (
            ke(),
            v(k, {
              id: d ?? a,
              children: v(Oc, {
                animate: C,
                initial: !1,
                children: v(Ec, {
                  value: bc,
                  children: v(D.footer, {
                    ...ee,
                    ...y,
                    className: N(E, `framer-cosgjs`, u, g),
                    "data-framer-name": `Desktop`,
                    "data-hide-scrollbars": !0,
                    layoutDependency: T,
                    layoutId: `O54G42zGh`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                      ...l,
                    },
                    ...hc(
                      {
                        N3NVfeY93: { "data-framer-name": `Mobile` },
                        pxMf2BOOl: { "data-framer-name": `Tablet` },
                      },
                      h,
                      b,
                    ),
                    children: v(D.div, {
                      className: `framer-lezc0c`,
                      layoutDependency: T,
                      layoutId: `dVF7XnfnP`,
                      children: v(Pe, {
                        children: v(Tc, {
                          query: wc(),
                          children: (e, t, n) =>
                            v(m, {
                              children: e?.map(
                                (
                                  { DNLONDBp6: e, id: t, JkDw2Q74e: n, MtLtvLIVn: r, wZo8uFYX4: i },
                                  a,
                                ) => (
                                  (n ??= !0),
                                  (e ??= ``),
                                  (i ??= !0),
                                  v(
                                    k,
                                    {
                                      id: `dVF7XnfnP-${t}`,
                                      children: v(se.Provider, {
                                        value: { DNLONDBp6: e },
                                        children: w(D.div, {
                                          className: `framer-1pc56la`,
                                          "data-framer-name": `Footer`,
                                          layoutDependency: T,
                                          layoutId: `rpjIo0q56`,
                                          children: [
                                            v(Ye, {
                                              href: { webPageId: `hqVRjOHKR` },
                                              motionChild: !0,
                                              nodeId: `tm4o5B7hz`,
                                              openInNewTab: !1,
                                              scopeId: `fko05nN74`,
                                              children: v(Ee, {
                                                as: `a`,
                                                background: {
                                                  alt: ``,
                                                  fit: `fit`,
                                                  pixelHeight: 135,
                                                  pixelWidth: 135,
                                                  sizes: `148px`,
                                                  ...xc(r),
                                                  positionX: `left`,
                                                  positionY: `center`,
                                                },
                                                className: `framer-a17ela framer-eaaos0`,
                                                "data-framer-name": `Logo`,
                                                layoutDependency: T,
                                                layoutId: `tm4o5B7hz`,
                                                ...hc(
                                                  {
                                                    N3NVfeY93: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fit`,
                                                        loading: ue(
                                                          (c?.y || 0) +
                                                            0 +
                                                            (((c?.height || 200) - 0 - 97) / 2 +
                                                              0 +
                                                              0) +
                                                            0 +
                                                            0 +
                                                            12 +
                                                            0,
                                                        ),
                                                        sizes: `150px`,
                                                        ...xc(r),
                                                        positionX: `left`,
                                                        positionY: `center`,
                                                      },
                                                    },
                                                  },
                                                  h,
                                                  b,
                                                ),
                                              }),
                                            }),
                                            w(D.div, {
                                              className: `framer-1779jk`,
                                              "data-framer-name": `Footer`,
                                              layoutDependency: T,
                                              layoutId: `ZeLk6u6VU`,
                                              style: { "--zu7xof": Sc(p) },
                                              children: [
                                                n !== !1 &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `v7dbLxdY7` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `v7dbLxdY7` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `v7dbLxdY7` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...hc(
                                                          {
                                                            N3NVfeY93: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                0 +
                                                                (((c?.height || 200) - 0 - 97) / 2 +
                                                                  0 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                12 +
                                                                73 +
                                                                0,
                                                            },
                                                          },
                                                          h,
                                                          b,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-xcfyk-container`,
                                                          layoutDependency: T,
                                                          layoutId: `okg_fmolF-container`,
                                                          nodeId: `okg_fmolF`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `fko05nN74`,
                                                          children: v(J, {
                                                            height: `100%`,
                                                            id: `okg_fmolF`,
                                                            Ks0NC8a1U: `Privacy Policy`,
                                                            layoutId: `okg_fmolF`,
                                                            RHwWogTs8: {
                                                              borderColor: `var(--token-8d54bb8f-6466-4def-8156-b98e1cb804e8, rgb(46, 46, 46))`,
                                                              borderStyle: `dashed`,
                                                              borderWidth: 0,
                                                            },
                                                            style: { height: `100%` },
                                                            Tmcu2Bkj1: e[0],
                                                            TS_8KbdO4: `0px`,
                                                            variant: Cc(`J6GxFXgAx`),
                                                            width: `100%`,
                                                            ...hc(
                                                              {
                                                                N3NVfeY93: { Tmcu2Bkj1: e[2] },
                                                                pxMf2BOOl: { Tmcu2Bkj1: e[1] },
                                                              },
                                                              h,
                                                              b,
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                i !== !1 &&
                                                  v(L, {
                                                    links: [
                                                      {
                                                        href: { webPageId: `wwCQkYsOs` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `wwCQkYsOs` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: { webPageId: `wwCQkYsOs` },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      v(H, {
                                                        ...hc(
                                                          {
                                                            N3NVfeY93: {
                                                              height: 0,
                                                              y:
                                                                (c?.y || 0) +
                                                                0 +
                                                                (((c?.height || 200) - 0 - 97) / 2 +
                                                                  0 +
                                                                  0) +
                                                                0 +
                                                                0 +
                                                                12 +
                                                                73 +
                                                                0,
                                                            },
                                                          },
                                                          h,
                                                          b,
                                                        ),
                                                        children: v(U, {
                                                          className: `framer-1ys2xdo-container`,
                                                          layoutDependency: T,
                                                          layoutId: `vgV8ApH1O-container`,
                                                          nodeId: `vgV8ApH1O`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `fko05nN74`,
                                                          children: v(J, {
                                                            height: `100%`,
                                                            id: `vgV8ApH1O`,
                                                            Ks0NC8a1U: `Terms of service`,
                                                            layoutId: `vgV8ApH1O`,
                                                            RHwWogTs8: {
                                                              borderColor: `var(--token-8d54bb8f-6466-4def-8156-b98e1cb804e8, rgb(46, 46, 46))`,
                                                              borderStyle: `dashed`,
                                                              borderWidth: 0,
                                                            },
                                                            style: { height: `100%` },
                                                            Tmcu2Bkj1: e[0],
                                                            TS_8KbdO4: `0px`,
                                                            variant: Cc(`J6GxFXgAx`),
                                                            width: `100%`,
                                                            ...hc(
                                                              {
                                                                N3NVfeY93: { Tmcu2Bkj1: e[2] },
                                                                pxMf2BOOl: { Tmcu2Bkj1: e[1] },
                                                              },
                                                              h,
                                                              b,
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
                                    },
                                    t,
                                  )
                                ),
                              ),
                            }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-xVqQv.framer-eaaos0, .framer-xVqQv .framer-eaaos0 { display: block; }`,
          `.framer-xVqQv.framer-cosgjs { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-xVqQv .framer-lezc0c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1300px; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xVqQv .framer-1pc56la { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1300px; overflow: visible; padding: 12px 32px 12px 32px; position: relative; width: 100%; }`,
          `.framer-xVqQv .framer-a17ela { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: 37px; justify-content: flex-start; max-width: 150px; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 148px; }`,
          `.framer-xVqQv .framer-1779jk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; max-width: 1300px; overflow: visible; padding: var(--zu7xof); position: relative; width: 1px; }`,
          `.framer-xVqQv .framer-xcfyk-container, .framer-xVqQv .framer-1ys2xdo-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-xVqQv.framer-v-16potc7 .framer-1pc56la { padding: 12px 24px 12px 24px; }`,
          `.framer-xVqQv.framer-v-1abrniy .framer-1pc56la { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; padding: 12px 16px 12px 16px; }`,
          `.framer-xVqQv.framer-v-1abrniy .framer-a17ela { height: 49px; width: 150px; }`,
          `.framer-xVqQv.framer-v-1abrniy .framer-1779jk { flex: none; justify-content: flex-start; padding: 0px; width: 100%; }`,
          `.framer-xVqQv[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-xVqQv [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-xVqQv[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-xVqQv [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-xVqQv[data-hide-scrollbars="true"], .framer-xVqQv [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-xVqQv`,
      )),
      (jc.displayName = `Navigation 2`),
      (jc.defaultProps = { height: 61, width: 1200 }),
      F(jc, {
        variant: {
          options: [`O54G42zGh`, `pxMf2BOOl`, `N3NVfeY93`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: G.Enum,
        },
        bmZePMHer: {
          defaultValue: `0px 16px 0px 16px`,
          description: `Click here to edit the padding.`,
          title: `Padding`,
          type: G.Padding,
        },
      }),
      P(jc, [{ explicitInter: !0, fonts: [] }, ...gc], { supportsExplicitInterCodegen: !0 }),
      (jc.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = xe.get(wc(), n);
          return Promise.allSettled([
            r.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(e.flatMap((e) => [z(J, {}, t), z(J, {}, t)]));
            })(),
          ]);
        },
      }));
  });
function Nc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Q,
  Uc = e(() => {
    (S(),
      R(),
      A(),
      f(),
      (Pc = [`osUmzorOA`, `CVvfhCour`]),
      (Fc = `framer-7BJmL`),
      (Ic = { CVvfhCour: `framer-v-13pzina`, osUmzorOA: `framer-v-d0pbeh` }),
      (Lc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rc = ({ value: e, children: t }) => {
        let n = l(O),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(O.Provider, { value: i, children: t });
      }),
      (zc = { "Variant 1": `osUmzorOA`, "Variant 2": `CVvfhCour` }),
      (Bc = D.create(s)),
      (Vc = ({ height: e, id: t, number: n, title: r, width: i, ...a }) => ({
        ...a,
        FQvEaYc7p: r ?? a.FQvEaYc7p ?? `Bonus applied`,
        variant: zc[a.variant] ?? a.variant ?? `osUmzorOA`,
        xp76Ewgq4: n ?? a.xp76Ewgq4 ?? `1`,
      })),
      (Hc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = I(
        T(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = te(),
            { activeLocale: o, setLocale: c } = qe();
          De();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              FQvEaYc7p: p,
              xp76Ewgq4: ee,
              ...m
            } = Vc(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = fe({
              cycleOrder: Pc,
              defaultVariant: `osUmzorOA`,
              ref: i,
              variant: f,
              variantClassNames: Ic,
            }),
            T = Hc(e, C),
            E = N(Fc),
            O = () => h !== `CVvfhCour`,
            re = () => h === `CVvfhCour`;
          return v(k, {
            id: d ?? a,
            children: v(Bc, {
              animate: C,
              initial: !1,
              children: v(Rc, {
                value: Lc,
                children: w(D.div, {
                  ...m,
                  ...y,
                  className: N(E, `framer-d0pbeh`, u, g),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: T,
                  layoutId: `osUmzorOA`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...l,
                  },
                  ...Nc({ CVvfhCour: { "data-framer-name": `Variant 2` } }, h, b),
                  children: [
                    w(D.div, {
                      className: `framer-1bv4gcw`,
                      layoutDependency: T,
                      layoutId: `lQczuZGOw`,
                      children: [
                        O() &&
                          v(ae, {
                            className: `framer-v4dpey`,
                            layoutDependency: T,
                            layoutId: `J1nCey3Fr`,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 9.6" overflow="visible"><path d="M 0 6.545 C 0 6.545 1.286 6.545 3 9.6 C 3 9.6 7.765 1.6 12 0" fill="transparent" stroke-width="1.5" stroke="var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White color&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                          }),
                        re() &&
                          v(W, {
                            __fromCanvasComponent: !0,
                            children: v(s, {
                              children: v(D.p, {
                                dir: `auto`,
                                style: {
                                  "--framer-font-size": `12px`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                                },
                                children: `1`,
                              }),
                            }),
                            className: `framer-1f3e66o`,
                            fonts: [`Inter`],
                            layoutDependency: T,
                            layoutId: `pkwoagRac`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: ee,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                    v(W, {
                      __fromCanvasComponent: !0,
                      children: v(s, {
                        children: v(D.p, {
                          dir: `auto`,
                          style: {
                            "--framer-font-size": `14px`,
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(186, 186, 186))`,
                          },
                          children: `Bonus applied`,
                        }),
                      }),
                      className: `framer-1gbw86d`,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `RZVyNBRzV`,
                      style: {
                        "--extracted-r6o4lv": `rgb(186, 186, 186)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: p,
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7BJmL.framer-cj4lvo, .framer-7BJmL .framer-cj4lvo { display: block; }`,
          `.framer-7BJmL.framer-d0pbeh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 346px; }`,
          `.framer-7BJmL .framer-1bv4gcw { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 3px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-7BJmL .framer-v4dpey { height: 10px; position: relative; width: 12px; }`,
          `.framer-7BJmL .framer-1f3e66o { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 12px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7BJmL .framer-1gbw86d { --framer-text-wrap: balance; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7BJmL.framer-v-13pzina .framer-1bv4gcw { padding: 0px; }`,
        ],
        `framer-7BJmL`,
      )),
      (Q.displayName = `Element/list`),
      (Q.defaultProps = { height: 17, width: 346 }),
      F(Q, {
        variant: {
          options: [`osUmzorOA`, `CVvfhCour`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        FQvEaYc7p: {
          defaultValue: `Bonus applied`,
          displayTextArea: !0,
          title: `Title`,
          type: G.String,
        },
        onFQvEaYc7pChange: { changes: `FQvEaYc7p`, type: G.ChangeHandler },
        xp76Ewgq4: { defaultValue: `1`, displayTextArea: !1, title: `Number`, type: G.String },
        onxp76Ewgq4Change: { changes: `xp76Ewgq4`, type: G.ChangeHandler },
      }),
      P(
        Q,
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
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  $,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl = e(() => {
    (S(),
      R(),
      A(),
      f(),
      x(),
      Ai(),
      Fi(),
      Ji(),
      $i(),
      ia(),
      la(),
      wa(),
      ka(),
      Pa(),
      za(),
      cn(),
      Wa(),
      Eo(),
      mc(),
      Mc(),
      Uc(),
      ct(),
      (Wc = B(pc)),
      (Gc = Ze(pc)),
      (Kc = B(sn)),
      (qc = B(ki)),
      (Jc = B(da)),
      (Yc = B(Pi)),
      (Xc = B(Q)),
      (Zc = B(ca)),
      (Qc = B(Ua)),
      ($c = B(Na)),
      (el = B(Qi)),
      (tl = B(ra)),
      (nl = B(Oa)),
      (rl = B(Ra)),
      (il = B(qi)),
      (al = B(jc)),
      (ol = {
        HS9h7lJ07: `(min-width: 1200px)`,
        UZqg9w4vQ: `(max-width: 809.98px)`,
        wkc_2TZXi: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (sl = () => typeof document < `u`),
      (cl = `framer-EQyII`),
      (ll = {
        HS9h7lJ07: `framer-v-5mups0`,
        UZqg9w4vQ: `framer-v-115lzxh`,
        wkc_2TZXi: `framer-v-gerqzh`,
      }),
      (ul = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (dl = () => ({
        from: { alias: `V30p25IjM`, data: st, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `V30p25IjM`, name: `JKePviySE`, type: `Identifier` },
          { collection: `V30p25IjM`, name: `MtLtvLIVn`, type: `Identifier` },
          { collection: `V30p25IjM`, name: `F7IsTolAT`, type: `Identifier` },
          { collection: `V30p25IjM`, name: `QaUURzFAy`, type: `Identifier` },
          { collection: `V30p25IjM`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `V30p25IjM`, name: `id`, type: `Identifier` },
        ],
      })),
      (fl = ({ query: e, pageSize: t, children: n }) => n(Ae(e))),
      (pl = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (ml = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = pe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (hl = {}),
      (gl = Object.keys(hl)),
      (_l = [
        `.framer-EQyII.framer-fj166k, .framer-EQyII .framer-fj166k { display: block; }`,
        `.framer-EQyII.framer-5mups0 { align-content: center; align-items: center; background-color: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-lq623c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 0px; order: -1000; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 10; }`,
        `.framer-EQyII .framer-13vsgqf-container { flex: none; height: auto; position: relative; width: 100%; z-index: 10; }`,
        `.framer-EQyII .framer-1v1y50m { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-EQyII .framer-v762rl-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 64px); flex: none; height: auto; order: 1003; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: 133px; z-index: 10; }`,
        `.framer-EQyII.framer-1hqga3v { background-color: var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, #e3e3e3) /* {"name":"Secondary background"} */; inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-EQyII.framer-9akmip { align-content: center; align-items: center; background-color: #101211; bottom: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-start; left: calc(50.00000000000002% - 374px / 2); overflow: visible; padding: 0px; position: fixed; top: 24px; width: 374px; z-index: 10; }`,
        `.framer-EQyII .framer-cvovef { --border-bottom-width: 1px; --border-color: #2e2e2e; --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 0px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 48px 16px 16px 16px; position: relative; width: 100%; z-index: 5; }`,
        `.framer-EQyII .framer-wjjtav, .framer-EQyII .framer-1chs8ch, .framer-EQyII .framer-12v6o0, .framer-EQyII .framer-9h1x2k, .framer-EQyII .framer-ig3n1l, .framer-EQyII .framer-zdy1uw, .framer-EQyII .framer-wx0iio, .framer-EQyII .framer-6pi6vz, .framer-EQyII .framer-r3sktk, .framer-EQyII .framer-qrjj54, .framer-EQyII .framer-1a24rf8, .framer-EQyII .framer-1cim8yw, .framer-EQyII .framer-tbnmm9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-EQyII .framer-10bf0es { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-EQyII .framer-rprdz3 { align-content: center; align-items: center; border-bottom-left-radius: 90px; border-bottom-right-radius: 90px; border-top-left-radius: 90px; border-top-right-radius: 90px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 16px; top: 12px; width: min-content; }`,
        `.framer-EQyII .framer-6q2jze { --frkg9v: var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, #000000); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 22px; z-index: 1; }`,
        `.framer-EQyII .framer-ilbk96 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; overflow: auto; padding: 16px; pointer-events: auto; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1vy6vli { align-content: center; align-items: center; background-color: #202423; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: auto; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1h8qtb4-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-7jmncw { --border-bottom-width: 1px; --border-color: #2e2e2e; --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: #161a17; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: auto; padding: 12px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-14ct1i0, .framer-EQyII .framer-1v7pr0g, .framer-EQyII .framer-i4mmia, .framer-EQyII .framer-1cisaxq, .framer-EQyII .framer-16px06i, .framer-EQyII .framer-vt2pf6, .framer-EQyII .framer-yv1mb1, .framer-EQyII .framer-xq8thd, .framer-EQyII .framer-1grw3lb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1o8nx3d, .framer-EQyII .framer-1mu8alb, .framer-EQyII .framer-15zr2pr, .framer-EQyII .framer-15sg46n, .framer-EQyII .framer-1vsg44x, .framer-EQyII .framer-609rop, .framer-EQyII .framer-sgo22x { --frkg9v: #ffffff; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-EQyII .framer-h85n39, .framer-EQyII .framer-5366yj, .framer-EQyII .framer-1ujhwxe, .framer-EQyII .framer-14zk35m, .framer-EQyII .framer-15hcp5p, .framer-EQyII .framer-188glvq, .framer-EQyII .framer-rny51i, .framer-EQyII .framer-174mhp2, .framer-EQyII .framer-p3ktty { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1d2hns2-container, .framer-EQyII .framer-1yo0ufc-container, .framer-EQyII .framer-1idv95d-container, .framer-EQyII .framer-1ianq4x-container, .framer-EQyII .framer-1304nzb-container, .framer-EQyII .framer-1glvuvb-container, .framer-EQyII .framer-1xdjkd2-container, .framer-EQyII .framer-1oe9qug-container, .framer-EQyII .framer-1f33ie9-container, .framer-EQyII .framer-1t1pmv6-container, .framer-EQyII .framer-1mk1hbk-container, .framer-EQyII .framer-1yh5cn5-container, .framer-EQyII .framer-16mudgh-container, .framer-EQyII .framer-1woilt5-container, .framer-EQyII .framer-x697qq-container, .framer-EQyII .framer-1267bd7-container, .framer-EQyII .framer-v2mth0-container, .framer-EQyII .framer-3yf9ba-container, .framer-EQyII .framer-18uh8fl-container, .framer-EQyII .framer-v65mba-container, .framer-EQyII .framer-1ikbcrg-container, .framer-EQyII .framer-1qgn3bq-container, .framer-EQyII .framer-1sze0h2-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1yyhgou, .framer-EQyII .framer-1bzjm5w { --border-bottom-width: 1px; --border-color: #2e2e2e; --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: auto; padding: 12px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-lbb9rm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-nxgs51, .framer-EQyII .framer-h3p3wx, .framer-EQyII .framer-pf6iqr, .framer-EQyII .framer-1n0jljf, .framer-EQyII .framer-1lwepd3, .framer-EQyII .framer-5qszdu, .framer-EQyII .framer-1xiqxg9, .framer-EQyII .framer-1yjzg2z { --border-bottom-width: 1px; --border-color: #2e2e2e; --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: #161a17; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1uh8tem, .framer-EQyII .framer-1u2ic4b, .framer-EQyII .framer-14aesmy, .framer-EQyII .framer-qbf2lt, .framer-EQyII .framer-1ly2cdh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-EQyII .framer-8kdtfv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1dpz6pf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: auto; padding: 0px; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-pzirg6 { --border-bottom-width: 1px; --border-color: #0088ff; --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 136, 255, 0.16); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 12px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-EQyII .framer-5zgywg { --frkg9v: #0088ff; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-EQyII .framer-1w0tps6 { --border-bottom-width: 0px; --border-color: #2e2e2e; --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; pointer-events: auto; position: sticky; width: 100%; z-index: 10; }`,
        `.framer-EQyII .framer-1q5912b { align-content: center; align-items: center; background-color: rgba(0, 217, 181, 0.16); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 12px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-EQyII .framer-upaipk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: 100%; }`,
        `.framer-EQyII .framer-1sjlqm3-container { flex: 1 0 0px; height: auto; pointer-events: auto; position: relative; width: 1px; }`,
        `.framer-EQyII .framer-w15rqj-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-EQyII .framer-vc4cj-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-EQyII[data-border="true"]::after, .framer-EQyII [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `.framer-EQyII[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-EQyII [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `.framer-EQyII[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-EQyII [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `.framer-EQyII[data-hide-scrollbars="true"], .framer-EQyII [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (vl = {
        HS9h7lJ07: `(min-width: 1200px)`,
        UZqg9w4vQ: `(max-width: 809.98px)`,
        wkc_2TZXi: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (yl = { Desktop: `HS9h7lJ07`, Phone: `UZqg9w4vQ`, Tablet: `wkc_2TZXi` }),
      (bl = ({ value: e }) =>
        ge()
          ? null
          : v(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (xl = ({ activePage: e, height: t, id: n, label: r, width: i, ...a }) => ({
        ...a,
        cvCamWyqj: r ?? a.cvCamWyqj ?? `Home  1`,
        eBge24dCy: e ?? a.eBge24dCy ?? `Home`,
        variant: yl[a.variant] ?? a.variant ?? `HS9h7lJ07`,
      })),
      (Sl = T(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = te(),
          { activeLocale: o, setLocale: c } = qe(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: f,
            eBge24dCy: p,
            cvCamWyqj: ee,
            children: h,
            ...g
          } = xl(e),
          [y, b] = Se(f, ol, !1),
          { activeVariantCallback: x, delay: ne } = Le(void 0),
          S = ({ overlay: e }) =>
            x(async (...t) => {
              e.toggle();
            }),
          C = ({ overlay: e }) =>
            x(async (...t) => {
              e.hide();
            }),
          T = N(cl);
        ke();
        let E = () => !sl() || y === `UZqg9w4vQ`;
        return (
          Ge({}),
          v(Ie.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: yl,
              isLayoutTemplate: !0,
              primaryVariantId: `HS9h7lJ07`,
              variantClassNames: ll,
            },
            children: w(k, {
              id: d ?? a,
              children: [
                v(bl, {
                  value: `:root body { background: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255)); }`,
                }),
                w(D.div, {
                  ...g,
                  className: N(T, `framer-5mups0`, u),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...l },
                  children: [
                    v(D.div, {
                      className: `framer-lq623c`,
                      children: v(Pe, {
                        children: v(fl, {
                          query: dl(),
                          children: (e, t, n) =>
                            v(m, {
                              children: e?.map(
                                (
                                  {
                                    DNLONDBp6: e,
                                    F7IsTolAT: t,
                                    id: n,
                                    JKePviySE: r,
                                    MtLtvLIVn: i,
                                    QaUURzFAy: a,
                                  },
                                  o,
                                ) => (
                                  (t ??= ``),
                                  (a ??= ``),
                                  (e ??= ``),
                                  v(
                                    k,
                                    {
                                      id: `V30p25IjM-${n}`,
                                      children: v(se.Provider, {
                                        value: { DNLONDBp6: e },
                                        children: v(L, {
                                          links: [
                                            { href: a, implicitPathVariables: { DNLONDBp6: e } },
                                            { href: a, implicitPathVariables: { DNLONDBp6: e } },
                                            { href: a, implicitPathVariables: { DNLONDBp6: e } },
                                          ],
                                          children: (e) =>
                                            v(H, {
                                              height: 38,
                                              width: `100vw`,
                                              y: 0,
                                              children: v(V, {
                                                className: `framer-13vsgqf-container`,
                                                nodeId: `yU4ayUUz6`,
                                                rendersWithMotion: !0,
                                                scopeId: `gkn5bltwm`,
                                                children: v(Ke, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    UZqg9w4vQ: {
                                                      __framer__variantAppearEffectEnabled: void 0,
                                                      bmZePMHer: `0px 16px 0px 16px`,
                                                      uye42s6Qo: e[2],
                                                    },
                                                    wkc_2TZXi: {
                                                      __framer__variantAppearEffectEnabled: void 0,
                                                      bmZePMHer: `0px 16px 0px 16px`,
                                                      uye42s6Qo: e[1],
                                                    },
                                                  },
                                                  children: v(Gc, {
                                                    __framer__animateOnce: !1,
                                                    __framer__threshold: 0,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    bmZePMHer: `32px`,
                                                    fnV5CQdBI: ee,
                                                    height: `100%`,
                                                    id: `yU4ayUUz6`,
                                                    layoutId: `yU4ayUUz6`,
                                                    NrGV8F5my: ul(r),
                                                    style: { width: `100%` },
                                                    Tg8IGJVFY: t,
                                                    uaF64HwOa: p,
                                                    uye42s6Qo: e[0],
                                                    variant: $(`vGc1cdPlH`),
                                                    width: `100%`,
                                                    z1q9ZdodO: !0,
                                                    ZQDUemFiS: ul(i),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                    },
                                    n,
                                  )
                                ),
                              ),
                            }),
                        }),
                      }),
                    }),
                    h,
                    v(`div`, { className: `framer-1v1y50m` }),
                    E() &&
                      v(ml, {
                        blockDocumentScrolling: !1,
                        dismissWithEsc: !0,
                        children: (e) =>
                          v(m, {
                            children: v(Ke, {
                              breakpoint: y,
                              overrides: { UZqg9w4vQ: { height: 39, width: `133px`, y: 897 } },
                              children: v(H, {
                                children: w(V, {
                                  className: `framer-v762rl-container hidden-5mups0 hidden-gerqzh`,
                                  isModuleExternal: !0,
                                  layoutScroll: !0,
                                  nodeId: `MdaAKzc3t`,
                                  scopeId: `gkn5bltwm`,
                                  children: [
                                    v(sn, {
                                      GYAAYk3Wb: `Get Template`,
                                      height: `100%`,
                                      id: `MdaAKzc3t`,
                                      ITWW9HKEm: S({ overlay: e }),
                                      layoutId: `MdaAKzc3t`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                    }),
                                    v(re, {
                                      children:
                                        e.visible &&
                                        v(m, {
                                          children: _(
                                            v(Te, {
                                              children: w(ce, {
                                                children: [
                                                  v(
                                                    D.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.5, 0, 0.88, 0.77],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: N(T, `framer-1hqga3v`),
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0,
                                                          ease: [0.12, 0.23, 0.5, 1],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => e.hide(),
                                                    },
                                                    `PHGeJTCRT`,
                                                  ),
                                                  w(D.div, {
                                                    className: N(T, `framer-9akmip`),
                                                    "data-framer-name": `Modal`,
                                                    children: [
                                                      w(D.div, {
                                                        className: `framer-cvovef`,
                                                        "data-border": !0,
                                                        "data-framer-name": `Button & Bonus`,
                                                        children: [
                                                          v(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: v(s, {
                                                              children: v(`p`, {
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-font-size": `14px`,
                                                                  "--framer-text-alignment": `center`,
                                                                },
                                                                children: `Buy Template`,
                                                              }),
                                                            }),
                                                            className: `framer-wjjtav`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          v(D.div, {
                                                            className: `framer-10bf0es`,
                                                            children: v(W, {
                                                              __fromCanvasComponent: !0,
                                                              children: v(s, {
                                                                children: v(`p`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                    "--framer-font-size": `17px`,
                                                                    "--framer-font-weight": `500`,
                                                                    "--framer-text-alignment": `center`,
                                                                  },
                                                                  children: `$99`,
                                                                }),
                                                              }),
                                                              className: `framer-1chs8ch`,
                                                              fonts: [`Inter-Medium`],
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          }),
                                                          v(D.div, {
                                                            className: `framer-rprdz3`,
                                                            "data-framer-name": `Close`,
                                                            "data-highlight": !0,
                                                            onTap: C({ overlay: e }),
                                                            children: v(ki, {
                                                              animated: !1,
                                                              className: `framer-6q2jze`,
                                                              layoutId: `v1O4Sz8Qt`,
                                                              mRgjGDEhU: !0,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      w(D.div, {
                                                        className: `framer-ilbk96`,
                                                        "data-framer-name": `Button & Bonus`,
                                                        children: [
                                                          v(D.div, {
                                                            className: `framer-1vy6vli`,
                                                            "data-framer-name": `Modal 1`,
                                                            children: v(H, {
                                                              children: v(V, {
                                                                className: `framer-1h8qtb4-container`,
                                                                inComponentSlot: !0,
                                                                isModuleExternal: !0,
                                                                nodeId: `jR7TUMGPk`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `gkn5bltwm`,
                                                                children: v(da, {
                                                                  borderRadius: 0,
                                                                  bottomLeftRadius: 0,
                                                                  bottomRightRadius: 0,
                                                                  boxShadow: ``,
                                                                  height: `100%`,
                                                                  id: `jR7TUMGPk`,
                                                                  isMixedBorderRadius: !1,
                                                                  isRed: !0,
                                                                  layoutId: `jR7TUMGPk`,
                                                                  play: `On`,
                                                                  shouldMute: !0,
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                  thumbnail: `Medium Quality`,
                                                                  topLeftRadius: 0,
                                                                  topRightRadius: 0,
                                                                  url: `https://youtu.be/ziLSswVtDt4`,
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                          w(D.div, {
                                                            className: `framer-7jmncw`,
                                                            "data-border": !0,
                                                            "data-framer-name": `Modal 2`,
                                                            children: [
                                                              w(D.div, {
                                                                className: `framer-14ct1i0`,
                                                                "data-framer-name": `Buttons`,
                                                                children: [
                                                                  v(Pi, {
                                                                    animated: !1,
                                                                    className: `framer-1o8nx3d`,
                                                                    layoutId: `MyJWQbAvT`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  v(W, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: v(s, {
                                                                      children: v(`p`, {
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                          "--framer-font-size": `14px`,
                                                                          "--framer-font-weight": `500`,
                                                                          "--framer-text-alignment": `center`,
                                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                                        },
                                                                        children: `Website Template`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-12v6o0`,
                                                                    fonts: [`Inter-Medium`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-h85n39`,
                                                                "data-framer-name": `Bonus`,
                                                                children: [
                                                                  v(H, {
                                                                    width: `318px`,
                                                                    children: v(V, {
                                                                      className: `framer-1d2hns2-container`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `GbsWvz9Rn`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `gkn5bltwm`,
                                                                      children: v(Q, {
                                                                        FQvEaYc7p: `Three landing page variations`,
                                                                        height: `100%`,
                                                                        id: `GbsWvz9Rn`,
                                                                        layoutId: `GbsWvz9Rn`,
                                                                        style: { width: `100%` },
                                                                        variant: $(`osUmzorOA`),
                                                                        width: `100%`,
                                                                        xp76Ewgq4: `1`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  v(H, {
                                                                    width: `318px`,
                                                                    children: v(V, {
                                                                      className: `framer-1yo0ufc-container`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `GVsVAKIx_`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `gkn5bltwm`,
                                                                      children: v(Q, {
                                                                        FQvEaYc7p: `Optimized for conversions`,
                                                                        height: `100%`,
                                                                        id: `GVsVAKIx_`,
                                                                        layoutId: `GVsVAKIx_`,
                                                                        style: { width: `100%` },
                                                                        variant: $(`osUmzorOA`),
                                                                        width: `100%`,
                                                                        xp76Ewgq4: `1`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  v(H, {
                                                                    width: `318px`,
                                                                    children: v(V, {
                                                                      className: `framer-1idv95d-container`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `UNfL54OEJ`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `gkn5bltwm`,
                                                                      children: v(Q, {
                                                                        FQvEaYc7p: `Easy Customization`,
                                                                        height: `100%`,
                                                                        id: `UNfL54OEJ`,
                                                                        layoutId: `UNfL54OEJ`,
                                                                        style: { width: `100%` },
                                                                        variant: $(`osUmzorOA`),
                                                                        width: `100%`,
                                                                        xp76Ewgq4: `1`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  v(H, {
                                                                    width: `318px`,
                                                                    children: v(V, {
                                                                      className: `framer-1ianq4x-container`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `yROxhHniA`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `gkn5bltwm`,
                                                                      children: v(Q, {
                                                                        FQvEaYc7p: `Full CMS support, no touching the canvas`,
                                                                        height: `100%`,
                                                                        id: `yROxhHniA`,
                                                                        layoutId: `yROxhHniA`,
                                                                        style: { width: `100%` },
                                                                        variant: $(`osUmzorOA`),
                                                                        width: `100%`,
                                                                        xp76Ewgq4: `1`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  v(H, {
                                                                    width: `318px`,
                                                                    children: v(V, {
                                                                      className: `framer-1304nzb-container`,
                                                                      inComponentSlot: !0,
                                                                      nodeId: `Gg14stXrU`,
                                                                      rendersWithMotion: !0,
                                                                      scopeId: `gkn5bltwm`,
                                                                      children: v(Q, {
                                                                        FQvEaYc7p: `Optional coming soon page (if you haven’t launched yet)`,
                                                                        height: `100%`,
                                                                        id: `Gg14stXrU`,
                                                                        layoutId: `Gg14stXrU`,
                                                                        style: { width: `100%` },
                                                                        variant: $(`osUmzorOA`),
                                                                        width: `100%`,
                                                                        xp76Ewgq4: `1`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          w(D.div, {
                                                            className: `framer-1yyhgou`,
                                                            "data-border": !0,
                                                            "data-framer-name": `Modal 3`,
                                                            children: [
                                                              w(D.div, {
                                                                className: `framer-lbb9rm`,
                                                                "data-framer-name": `Buttons`,
                                                                children: [
                                                                  v(W, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: v(s, {
                                                                      children: v(`p`, {
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                          "--framer-font-size": `14px`,
                                                                          "--framer-font-weight": `500`,
                                                                          "--framer-text-alignment": `center`,
                                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                                        },
                                                                        children: `Bonus website Launch Kit`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-9h1x2k`,
                                                                    fonts: [`Inter-Medium`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                  v(W, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: v(s, {
                                                                      children: v(`p`, {
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                          "--framer-font-size": `13px`,
                                                                          "--framer-font-weight": `500`,
                                                                          "--framer-text-alignment": `center`,
                                                                          "--framer-text-color": `rgb(186, 186, 186)`,
                                                                        },
                                                                        children: `($394 in total value)`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-ig3n1l`,
                                                                    fonts: [`Inter-Medium`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-nxgs51`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-1v7pr0g`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(ca, {
                                                                        animated: !1,
                                                                        className: `framer-1mu8alb`,
                                                                        layoutId: `hbP7zsieT`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `center`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `AI Content Prompt `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($49)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-zdy1uw`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  w(D.div, {
                                                                    className: `framer-5366yj`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: [
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1glvuvb-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `Q2GCMuydl`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Answer a few questions about your business and offerings`,
                                                                            height: `100%`,
                                                                            id: `Q2GCMuydl`,
                                                                            layoutId: `Q2GCMuydl`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`CVvfhCour`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1xdjkd2-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `eKL3glTNn`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Paste one prompt into Claude and it writes all your website copy for you`,
                                                                            height: `100%`,
                                                                            id: `eKL3glTNn`,
                                                                            layoutId: `eKL3glTNn`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`CVvfhCour`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-h3p3wx`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-i4mmia`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(Ua, {
                                                                        animated: !1,
                                                                        className: `framer-15zr2pr`,
                                                                        layoutId: `xuHWnEQq7`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `left`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `Lead Form Tutorial `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($39)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-1uh8tem`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  w(D.div, {
                                                                    className: `framer-1ujhwxe`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: [
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1oe9qug-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `mpqhTxNeA`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Step-by-step guide to setting up your contact form`,
                                                                            height: `100%`,
                                                                            id: `mpqhTxNeA`,
                                                                            layoutId: `mpqhTxNeA`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1f33ie9-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `rigH8YZnN`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Get notified every time a client reaches out`,
                                                                            height: `100%`,
                                                                            id: `rigH8YZnN`,
                                                                            layoutId: `rigH8YZnN`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1t1pmv6-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `Je7oiKYEN`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `They get an auto-reply email instantly`,
                                                                            height: `100%`,
                                                                            id: `Je7oiKYEN`,
                                                                            layoutId: `Je7oiKYEN`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-pf6iqr`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-1cisaxq`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(Na, {
                                                                        animated: !1,
                                                                        className: `framer-15sg46n`,
                                                                        layoutId: `SBTAKo3N1`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `left`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `SEO, Project, Image & Video Prompts `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($49)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-1u2ic4b`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  w(D.div, {
                                                                    className: `framer-14zk35m`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: [
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1mk1hbk-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `FMfmDyLvr`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Generate professional photos to replace the default template images`,
                                                                            height: `100%`,
                                                                            id: `FMfmDyLvr`,
                                                                            layoutId: `FMfmDyLvr`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1yh5cn5-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `FUqpb43aS`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Turn those images into slow-motion clips for your hero section`,
                                                                            height: `100%`,
                                                                            id: `FUqpb43aS`,
                                                                            layoutId: `FUqpb43aS`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-16mudgh-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `eqriehEfP`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Generates your page title, description, and keywords, ready to paste into your website`,
                                                                            height: `100%`,
                                                                            id: `eqriehEfP`,
                                                                            layoutId: `eqriehEfP`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1woilt5-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `RtLA644ZG`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Generates your project descriptions `,
                                                                            height: `100%`,
                                                                            id: `RtLA644ZG`,
                                                                            layoutId: `RtLA644ZG`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-1n0jljf`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-16px06i`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(Qi, {
                                                                        animated: !1,
                                                                        className: `framer-1vsg44x`,
                                                                        layoutId: `gfepKoNzF`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `left`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `Domain Setup & Editing Tutorials `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($69)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-14aesmy`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  w(D.div, {
                                                                    className: `framer-15hcp5p`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: [
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-x697qq-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `miues4xUc`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `How to generate images`,
                                                                            height: `100%`,
                                                                            id: `miues4xUc`,
                                                                            layoutId: `miues4xUc`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-1267bd7-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `Eaciplu8I`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `How to generate videos`,
                                                                            height: `100%`,
                                                                            id: `Eaciplu8I`,
                                                                            layoutId: `Eaciplu8I`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-v2mth0-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `bcK35EA4K`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Step-by-step video showing you how to edit the template`,
                                                                            height: `100%`,
                                                                            id: `bcK35EA4K`,
                                                                            layoutId: `bcK35EA4K`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-3yf9ba-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `ZOhoqSQk6`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Step-by-step guide to connecting your domain and going live`,
                                                                            height: `100%`,
                                                                            id: `ZOhoqSQk6`,
                                                                            layoutId: `ZOhoqSQk6`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-1lwepd3`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-vt2pf6`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(ra, {
                                                                        animated: !1,
                                                                        className: `framer-609rop`,
                                                                        layoutId: `nFmisa76I`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `left`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `25% Off Framer Pro + Free Domain `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($139)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-qbf2lt`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  w(D.div, {
                                                                    className: `framer-188glvq`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: [
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-18uh8fl-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `GSh8LjHXx`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Buy through our link and save 25% off your first year of Framer Pro`,
                                                                            height: `100%`,
                                                                            id: `GSh8LjHXx`,
                                                                            layoutId: `GSh8LjHXx`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `1.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                      v(H, {
                                                                        width: `294px`,
                                                                        children: v(V, {
                                                                          className: `framer-v65mba-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `oO4PJwR9W`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `gkn5bltwm`,
                                                                          children: v(Q, {
                                                                            FQvEaYc7p: `Framer Pro annual plan includes a free custom domain, no extra cost`,
                                                                            height: `100%`,
                                                                            id: `oO4PJwR9W`,
                                                                            layoutId: `oO4PJwR9W`,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: $(`osUmzorOA`),
                                                                            width: `100%`,
                                                                            xp76Ewgq4: `2.`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-5qszdu`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  w(D.div, {
                                                                    className: `framer-yv1mb1`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: [
                                                                      v(Oa, {
                                                                        animated: !1,
                                                                        className: `framer-sgo22x`,
                                                                        layoutId: `dQEP0DaEG`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      v(W, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: v(s, {
                                                                          children: w(`p`, {
                                                                            dir: `auto`,
                                                                            style: {
                                                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                              "--framer-font-size": `14px`,
                                                                              "--framer-font-weight": `500`,
                                                                              "--framer-text-alignment": `left`,
                                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                                            },
                                                                            children: [
                                                                              `Private Dashboard `,
                                                                              v(`span`, {
                                                                                style: {
                                                                                  "--framer-text-color": `rgb(186, 186, 186)`,
                                                                                },
                                                                                children: `($49)`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        className: `framer-1ly2cdh`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  v(D.div, {
                                                                    className: `framer-rny51i`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: v(H, {
                                                                      width: `294px`,
                                                                      children: v(V, {
                                                                        className: `framer-1ikbcrg-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `FsLzK2swk`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `gkn5bltwm`,
                                                                        children: v(Q, {
                                                                          FQvEaYc7p: `Every prompt, tutorial, and video in one place`,
                                                                          height: `100%`,
                                                                          id: `FsLzK2swk`,
                                                                          layoutId: `FsLzK2swk`,
                                                                          style: { width: `100%` },
                                                                          variant: $(`osUmzorOA`),
                                                                          width: `100%`,
                                                                          xp76Ewgq4: `1.`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          w(D.div, {
                                                            className: `framer-1bzjm5w`,
                                                            "data-border": !0,
                                                            "data-framer-name": `Modal 3`,
                                                            children: [
                                                              v(D.div, {
                                                                className: `framer-8kdtfv`,
                                                                "data-framer-name": `Buttons`,
                                                                children: v(W, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: v(s, {
                                                                    children: v(`p`, {
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                        "--framer-font-size": `14px`,
                                                                        "--framer-font-weight": `500`,
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `rgb(1, 148, 72)`,
                                                                      },
                                                                      children: `The Guarantees`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-wx0iio`,
                                                                  fonts: [`Inter-Medium`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-1xiqxg9`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  v(D.div, {
                                                                    className: `framer-xq8thd`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: v(W, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: v(s, {
                                                                        children: v(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-alignment": `center`,
                                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                                          },
                                                                          children: `7 Day Money Back Guarantee`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-6pi6vz`,
                                                                      fonts: [`Inter-Medium`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  }),
                                                                  v(D.div, {
                                                                    className: `framer-174mhp2`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: v(H, {
                                                                      width: `294px`,
                                                                      children: v(V, {
                                                                        className: `framer-1qgn3bq-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `PkviJ6K5b`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `gkn5bltwm`,
                                                                        children: v(Q, {
                                                                          FQvEaYc7p: `Not happy? Get a full refund within 7 days, no questions asked`,
                                                                          height: `100%`,
                                                                          id: `PkviJ6K5b`,
                                                                          layoutId: `PkviJ6K5b`,
                                                                          style: { width: `100%` },
                                                                          variant: $(`osUmzorOA`),
                                                                          width: `100%`,
                                                                          xp76Ewgq4: `1.`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                              w(D.div, {
                                                                className: `framer-1yjzg2z`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Modal`,
                                                                children: [
                                                                  v(D.div, {
                                                                    className: `framer-1grw3lb`,
                                                                    "data-framer-name": `Buttons`,
                                                                    children: v(W, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: v(s, {
                                                                        children: v(`p`, {
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                            "--framer-font-size": `14px`,
                                                                            "--framer-font-weight": `500`,
                                                                            "--framer-text-alignment": `center`,
                                                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                                                          },
                                                                          children: `Free Design Fix Guarantee`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-r3sktk`,
                                                                      fonts: [`Inter-Medium`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  }),
                                                                  v(D.div, {
                                                                    className: `framer-p3ktty`,
                                                                    "data-framer-name": `Bonus`,
                                                                    children: v(H, {
                                                                      width: `294px`,
                                                                      children: v(V, {
                                                                        className: `framer-1sze0h2-container`,
                                                                        inComponentSlot: !0,
                                                                        nodeId: `XFOGdGd7Y`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `gkn5bltwm`,
                                                                        children: v(Q, {
                                                                          FQvEaYc7p: `If you accidentally break something in the design, i'll fix it for free`,
                                                                          height: `100%`,
                                                                          id: `XFOGdGd7Y`,
                                                                          layoutId: `XFOGdGd7Y`,
                                                                          style: { width: `100%` },
                                                                          variant: $(`osUmzorOA`),
                                                                          width: `100%`,
                                                                          xp76Ewgq4: `1.`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          w(D.div, {
                                                            className: `framer-1dpz6pf`,
                                                            "data-framer-name": `Lifetime`,
                                                            children: [
                                                              w(D.div, {
                                                                className: `framer-pzirg6`,
                                                                "data-border": !0,
                                                                "data-framer-name": `Buttons`,
                                                                children: [
                                                                  v(Ra, {
                                                                    animated: !1,
                                                                    className: `framer-5zgywg`,
                                                                    layoutId: `MaCMWejsk`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  v(W, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: v(s, {
                                                                      children: v(`p`, {
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                          "--framer-font-size": `14px`,
                                                                          "--framer-font-weight": `500`,
                                                                          "--framer-text-alignment": `center`,
                                                                          "--framer-text-color": `rgb(0, 136, 255)`,
                                                                        },
                                                                        children: `Lifetime updates & email support`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-qrjj54`,
                                                                    fonts: [`Inter-Medium`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              v(W, {
                                                                __fromCanvasComponent: !0,
                                                                children: v(s, {
                                                                  children: v(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-font-size": `13px`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(186, 186, 186)`,
                                                                    },
                                                                    children: `Local Taxes may apply at checkout`,
                                                                  }),
                                                                }),
                                                                className: `framer-1a24rf8`,
                                                                fonts: [`Inter`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      w(D.div, {
                                                        className: `framer-1w0tps6`,
                                                        "data-border": !0,
                                                        "data-framer-name": `Button & Bonus`,
                                                        children: [
                                                          w(D.div, {
                                                            className: `framer-1q5912b`,
                                                            "data-framer-name": `Buttons`,
                                                            children: [
                                                              v(W, {
                                                                __fromCanvasComponent: !0,
                                                                children: v(s, {
                                                                  children: v(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-font-size": `12px`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgba(0, 92, 78, 0.81)`,
                                                                    },
                                                                    children: `Bonus applied`,
                                                                  }),
                                                                }),
                                                                className: `framer-1cim8yw`,
                                                                fonts: [`Inter`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              v(W, {
                                                                __fromCanvasComponent: !0,
                                                                children: v(s, {
                                                                  children: v(`p`, {
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                      "--framer-font-size": `13px`,
                                                                      "--framer-font-weight": `500`,
                                                                      "--framer-text-alignment": `center`,
                                                                      "--framer-text-color": `rgb(0, 128, 106)`,
                                                                    },
                                                                    children: `$394 website Launch Kit for FREE`,
                                                                  }),
                                                                }),
                                                                className: `framer-tbnmm9`,
                                                                fonts: [`Inter-Medium`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          w(D.div, {
                                                            className: `framer-upaipk`,
                                                            "data-framer-name": `Buttons`,
                                                            children: [
                                                              v(H, {
                                                                width: `166px`,
                                                                children: v(V, {
                                                                  className: `framer-1sjlqm3-container`,
                                                                  inComponentSlot: !0,
                                                                  isModuleExternal: !0,
                                                                  nodeId: `YKSSzz45u`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `gkn5bltwm`,
                                                                  children: v(qi, {
                                                                    height: `100%`,
                                                                    id: `YKSSzz45u`,
                                                                    jmVfZVXMZ: `rgb(0, 0, 0)`,
                                                                    layoutId: `YKSSzz45u`,
                                                                    style: { width: `100%` },
                                                                    TQzHqtVCH: `https://contra.com/payment-link/RgYkrhRm-renovate-construction-and-renovation-template`,
                                                                    UE5uPeY3D: `rgb(255, 255, 255)`,
                                                                    ujbndUBZQ: `Get Acess`,
                                                                    variant: $(`xmbFrJ6SV`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                              v(H, {
                                                                width: `166px`,
                                                                children: v(V, {
                                                                  className: `framer-w15rqj-container`,
                                                                  inComponentSlot: !0,
                                                                  isModuleExternal: !0,
                                                                  nodeId: `MpSBcESfm`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `gkn5bltwm`,
                                                                  children: v(qi, {
                                                                    height: `100%`,
                                                                    id: `MpSBcESfm`,
                                                                    jmVfZVXMZ: `rgb(0, 0, 0)`,
                                                                    layoutId: `MpSBcESfm`,
                                                                    style: { width: `100%` },
                                                                    TQzHqtVCH: `mailto:deankresh@gmail.com?subject=Question%20about%20Renovate%20Framer%20template&body=Hey%20Michael%21%20I%20want%20to%20buy%20this%20template%2C%20but%20still%20have%20some%20questions.`,
                                                                    UE5uPeY3D: `rgb(0, 0, 0)`,
                                                                    ujbndUBZQ: `Ask a question`,
                                                                    variant: $(`tmgbil2yf`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            pl(),
                                          ),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                      }),
                    v(H, {
                      height: 61,
                      width: `100vw`,
                      y: 1e3,
                      children: v(V, {
                        className: `framer-vc4cj-container`,
                        nodeId: `hE0U9Aens`,
                        scopeId: `gkn5bltwm`,
                        children: v(Ke, {
                          breakpoint: y,
                          overrides: {
                            UZqg9w4vQ: {
                              bmZePMHer: `16px 16px 16px 16px`,
                              variant: $(`N3NVfeY93`),
                            },
                            wkc_2TZXi: { bmZePMHer: `0px 24px 0px 24px`, variant: $(`pxMf2BOOl`) },
                          },
                          children: v(jc, {
                            bmZePMHer: `0px 32px 0px 32px`,
                            height: `100%`,
                            id: `hE0U9Aens`,
                            layoutId: `hE0U9Aens`,
                            style: { width: `100%` },
                            variant: $(`O54G42zGh`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                v(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Cl = (e) =>
        e === j.canvas || e === j.export
          ? [
              ..._l,
              ...gl.flatMap((e) => {
                let t = hl[e];
                return hl[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [..._l, ...gl.map((e) => `@media ${vl[e]} { ${hl[e].join(` `)} }`)]),
      (wl = I(Sl, Cl, `framer-EQyII`)),
      (wl.displayName = `Ads`),
      (wl.defaultProps = { height: 1e3, width: 1200 }),
      F(wl, {
        eBge24dCy: {
          defaultValue: `Home`,
          description: `Click here to edit the Active page`,
          placeholder: `Home`,
          title: `Active Page`,
          type: G.String,
        },
        cvCamWyqj: { defaultValue: `Home  1`, displayTextArea: !1, title: `Label`, type: G.String },
      }),
      P(
        wl,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Wc,
          ...Kc,
          ...qc,
          ...Jc,
          ...Yc,
          ...Xc,
          ...Zc,
          ...Qc,
          ...$c,
          ...el,
          ...tl,
          ...nl,
          ...rl,
          ...il,
          ...al,
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (wl.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = xe.get(dl(), n, r);
          return Be(
            [
              () => i.preload(),
              () => z(sn, {}, t),
              () => z(To, {}, t),
              () => z(Q, {}, t),
              () => z(qi, {}, t),
              () => z(jc, {}, t),
              async () =>
                Be(
                  ((await Ce(() => i.readMaybeAsync(), t)) ?? []).flatMap(
                    (e) => () => z(pc, {}, t),
                  ),
                  t,
                ),
            ],
            t,
          );
        },
      }));
  });
function El({ webPageId: e, children: t, style: n, ...r }) {
  let i = { eBge24dCy: `Home` },
    a = { ...i, eBge24dCy: `Contact` },
    o = { ...i, eBge24dCy: `Testimonial` },
    s = { ...i, eBge24dCy: `Blog` },
    c = { ...i, eBge24dCy: `Projects` },
    l = { ...i, eBge24dCy: `About` },
    u = { ...i, eBge24dCy: `` },
    d =
      {
        a60roxY9H: { cvCamWyqj: `Home  1`, eBge24dCy: `Home` },
        BR56gPClC: s,
        EyFl4ipi8: { ...i, eBge24dCy: `Project` },
        hqVRjOHKR: i,
        ImqR0HMAr: s,
        j7jTRdbSt: c,
        mpzwOKiYs: a,
        ogNU5sAlu: l,
        sFxkNL7jY: o,
        v7dbLxdY7: u,
        wwCQkYsOs: u,
        ybgmA12TT: i,
      }[e] ?? {};
  switch (e) {
    case `hqVRjOHKR`:
    case `ybgmA12TT`:
    case `mpzwOKiYs`:
    case `sFxkNL7jY`:
    case `ImqR0HMAr`:
    case `j7jTRdbSt`:
    case `ogNU5sAlu`:
    case `v7dbLxdY7`:
    case `wwCQkYsOs`:
    case `EyFl4ipi8`:
    case `BR56gPClC`:
      return h(wi, { ...d, key: `Template1`, style: n }, t(!0));
    case `a60roxY9H`:
      return h(wl, { ...d, key: `Ads`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Dl(e) {
  switch (e) {
    case `hqVRjOHKR`:
    case `ybgmA12TT`:
    case `mpzwOKiYs`:
    case `sFxkNL7jY`:
    case `ImqR0HMAr`:
    case `j7jTRdbSt`:
    case `ogNU5sAlu`:
    case `v7dbLxdY7`:
    case `wwCQkYsOs`:
    case `EyFl4ipi8`:
    case `BR56gPClC`:
      return [
        { hash: `1bk0vel`, mediaQuery: `(min-width: 1200px)` },
        { hash: `o1qzy2`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `o5e008`, mediaQuery: `(max-width: 809.98px)` },
      ];
    case `a60roxY9H`:
      return [
        { hash: `5mups0`, mediaQuery: `(min-width: 1200px)` },
        { hash: `gerqzh`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `115lzxh`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Ol({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: i,
  localeId: l,
  collectionItemId: u,
  contentLocaleId: f,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let te = jl[e].page.preload();
  (Ue({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    Me(Fl));
  let m = h(Je, {
    children: h(Ne, {
      children: h(he, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        canonicalPathVariables: i,
        routes: jl,
        collectionUtils: Nl,
        serverDatabaseClient: Pl,
        framerSiteId: Fl,
        notFoundPage: ie(
          () => import(`./zR3fuTTZHGq0S71uHUnCBhXRMqFIJQVrZjf-51xekbI.C9TyQThX.mjs`),
        ),
        isReducedMotion: void 0,
        localeId: l,
        locales: Ml,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://remodel.framer.wiki`,
        EditorBar:
          o === void 0
            ? void 0
            : (() => {
                if (Ll) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return ie(async () => {
                  o.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: be, useLocaleInfo: qe, useRouter: ke },
                    react: {
                      createElement: h,
                      Fragment: s,
                      memo: ee,
                      useCallback: d,
                      useEffect: a,
                      useRef: t,
                      useState: c,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: _ },
                  };
                  let { createEditorBar: e } = await import(`https://framer.com/edit/init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: El,
        loadSnippetsModule: new We(
          () => import(`./FDoX5LaTTCL6S2I52fDuVOezYAj8K6XUObv0nNagkZQ.DBnst0fg.mjs`),
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: f,
      }),
    }),
    value: {
      global: {
        enter: {
          mask: { angle: 180, type: `wipe`, width: `100%` },
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.5,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await te, m);
}
function kl() {
  Il && o.__framer_events.push(arguments);
}
async function Al(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || o.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    kl(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, s, c, l, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (r = u.routeId),
        (i = u.localeId),
        (a = u.contentLocaleId),
        (s = u.pathVariables),
        (c = u.canonicalPathVariables),
        (l = u.breakpoints),
        (r = Oe(jl, r)));
    else {
      Oe(jl, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = _e(jl, decodeURIComponent(location.pathname), !0, Ml);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let d = Ol({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    o !== void 0 &&
      (async () => {
        let e = jl[r],
          t = Ml.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = u?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Nl) {
          let r = await Nl[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          c = a.timeZone,
          l = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          o.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Fl,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: o.location.href,
              hostname: o.location.hostname || null,
              pathname: o.location.pathname || null,
              hash: o.location.hash || null,
              search: o.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await oe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } }),
          ));
      })();
    let f = await d;
    e
      ? (me(`framer-rewrite-breakpoints`, () => {
          (Fe(l), o.__framer_onRewriteBreakpoints?.(l));
        }),
        (Ll ? (e) => e() : E)(() => {
          (Ve(), we(), C(t, f, { onRecoverableError: n }));
        }))
      : ne(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var jl, Ml, Nl, Pl, Fl, Il, Ll;
e(() => {
  if (
    (n(),
    R(),
    f(),
    x(),
    b(),
    Ti(),
    Tl(),
    (jl = {
      hqVRjOHKR: {
        elementPatterns: {
          bVb0zECjS: `:DNLONDBp6-process 3`,
          Kgewnn4VA: `:DNLONDBp6-project-2`,
          KySRHKZff: `:DNLONDBp6-project-1`,
          mNVgQPFAg: `:DNLONDBp6-process 4`,
          pjWY64IPl: `:DNLONDBp6-project`,
          PK66xoUSv: `:DNLONDBp6-process 1`,
          uWrqjObUk: `:DNLONDBp6-project-3`,
          WxGhyf54g: `:DNLONDBp6-reviews`,
          XjiLFbzPY: `:DNLONDBp6-process-1-1`,
          Zek1kF8cZ: `:DNLONDBp6-process 2`,
        },
        elements: {
          bVb0zECjS: `process 3`,
          Kgewnn4VA: `project-2`,
          KySRHKZff: `project-1`,
          mNVgQPFAg: `process 4`,
          pjWY64IPl: `project`,
          PK66xoUSv: `process 1`,
          uWrqjObUk: `project-3`,
          WxGhyf54g: `reviews`,
          X2r2EnfV8: `services`,
          XjiLFbzPY: `process-1-1`,
          Zek1kF8cZ: `process 2`,
        },
        page: ie(() => import(`./gnuKH74P261OecDAc2JZ4CMqeTCT9a39UYLhRR6LmRM.BMpR5ldT.mjs`)),
        path: `/`,
      },
      ybgmA12TT: {
        elements: {},
        page: ie(() => import(`./zR3fuTTZHGq0S71uHUnCBhXRMqFIJQVrZjf-51xekbI.C9TyQThX.mjs`)),
        path: `/404`,
      },
      mpzwOKiYs: {
        elementPatterns: { EtoTVsFHO: `:DNLONDBp6-contact` },
        elements: { EtoTVsFHO: `contact` },
        page: ie(() => import(`./ha0uHxVxZHb0Cwf9PlGgBupmn6qmnEPLrHVkgAyxzio.DsUaKPne.mjs`)),
        path: `/contact`,
      },
      sFxkNL7jY: {
        elements: {},
        page: ie(() => import(`./m0MbJGNR7XePdNTmN29iqZkpgnDwy27D6ElrdyhM3FM.yQeQxWvs.mjs`)),
        path: `/testimonial`,
      },
      ImqR0HMAr: {
        elements: {},
        page: ie(() => import(`./UC6CrU5GxURESyv4uzyhecFSVlLivKjY0RJZ67cY6TI.DqDgWobK.mjs`)),
        path: `/blog`,
      },
      j7jTRdbSt: {
        elements: {},
        page: ie(() => import(`./K_2pN78I-Nufsk5o4Sb3TCCbF4_GNouJ2fwv2LMaVnM.Ej-gjcCl.mjs`)),
        path: `/projects`,
      },
      ogNU5sAlu: {
        elements: { IdCPw0Mvs: `reviews`, NgNtdNHuM: `reviews-1`, zvMfsM8dz: `story` },
        page: ie(() => import(`./c1B4zSoP4IW6E7vFnLe3KQp2c1ouQe6k8zVcAT3VHmU.DuKfbvHh.mjs`)),
        path: `/about`,
      },
      v7dbLxdY7: {
        elements: {},
        page: ie(() => import(`./omGf5RHHBj980s6lo0tPA-u5n0yBpOb6b53yxrLk0f8.BCRKq55n.mjs`)),
        path: `/privacy`,
      },
      wwCQkYsOs: {
        elements: {},
        page: ie(() => import(`./zagjQDnfs_pW479u3OJlIGNOpzXNtBS8X9-bKgkPKPU.CigbU7AD.mjs`)),
        path: `/terms`,
      },
      EyFl4ipi8: {
        collectionId: `E4gGZbAar`,
        elements: {},
        page: ie(() => import(`./B5i6Mb-Z-T0vXKDuqL697i6A1eUDlnw8Pzy-_3MwRfU.Djy7gbW8.mjs`)),
        path: `/projects/:vfkbJihfk`,
      },
      BR56gPClC: {
        collectionId: `cxuHIWmXg`,
        elements: {},
        page: ie(() => import(`./DxPPu5ifDbefup-UxZlrS2_eCMym1EUndRxVvQ-4Odg.C_IpeYH7.mjs`)),
        path: `/blog/:Hr_6Bp7aL`,
      },
      a60roxY9H: {
        collectionId: `lH3BqnTe6`,
        elements: { qhfEl7DzY: `contact` },
        page: ie(() => import(`./dVUbPoHoLKfVy8ghK3guzj72smDkYRaq9XgQ5OwA1X0.COUyJ0an.mjs`)),
        path: `/:DNLONDBp6`,
      },
    }),
    (Ml = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Nl = {
      cxuHIWmXg: async () =>
        (await import(`./pABG4O56DmRt762PjG47Vx6Xo7wjV2ylXao2KPmG0eA.DuUk1iAm.mjs`))?.utils,
      E4gGZbAar: async () =>
        (await import(`./KJk-4FEMSF3_YSNyVgIHID6-VqpkRQ7L7o9YvZISWtM.ZXtrPkOi.mjs`))?.utils,
      FYuQHztpw: async () =>
        (await import(`./FYuQHztpw.DACpTgrM.mjs`).then((e) => (e.n(), e.t)))?.utils,
      lH3BqnTe6: async () =>
        (await import(`./vUpI4RAoHv4rg4jziYCNy97I59S0j9AlWPeu1A5jGP4.Dhel3Nas.mjs`))?.utils,
    }),
    (Pl = void 0),
    (Fl = `d2ccfb3088023a5dd332d531c3337f3798ae1ea46bea18769d59e767305a8821`),
    (Il = typeof document < `u`),
    (Ll = Il && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(p.userAgent)),
    Il)
  ) {
    ((o.__framer_importFromPackage = (e, t) => () =>
      h(je, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (o.__framer_events = o.__framer_events || []),
      ve());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Al(!0, e) : Al(!1, e);
  }
  (function () {
    Il &&
      E(() => {
        C(
          document.getElementById(`__framer-badge-container`),
          h(g, {}, h(y(() => import(`./PX9hIOIVM.DSssTa_5.mjs`)))),
        );
      });
  })();
})();
export { Dl as getLayoutTemplateBreakpoints, Ol as getPageRoot };
//# sourceMappingURL=script_main.Bczm0HVn.mjs.map
