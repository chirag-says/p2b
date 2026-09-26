import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  H as o,
  I as s,
  L as c,
  M as l,
  N as u,
  P as d,
  S as f,
  T as p,
  _ as m,
  b as ee,
  c as h,
  j as g,
  l as _,
  s as v,
  u as y,
  v as b,
  y as x,
} from "./react.CV_3rBxD.mjs";
import {
  C as S,
  K as C,
  L as te,
  P as ne,
  R as w,
  S as T,
  W as E,
  a as D,
  b as O,
  f as re,
  h as ie,
  r as k,
  t as A,
} from "./motion.CdSRWwto.mjs";
import {
  At as j,
  C as M,
  E as N,
  G as P,
  I as F,
  It as ae,
  K as oe,
  Lt as se,
  M as I,
  Mt as ce,
  N as L,
  Nt as R,
  O as le,
  Q as z,
  R as B,
  St as ue,
  Tt as de,
  W as V,
  _ as fe,
  a as H,
  at as pe,
  bt as me,
  ct as he,
  h as ge,
  ht as _e,
  i as U,
  j as ve,
  jt as ye,
  k as W,
  kt as be,
  n as xe,
  o as G,
  p as Se,
  pt as Ce,
  q as we,
  st as Te,
  vt as Ee,
  w as K,
  wt as De,
  xt as Oe,
  yt as ke,
  zt as Ae,
} from "./framer.B0qnvVVY.mjs";
import {
  c as je,
  d as Me,
  g as Ne,
  i as Pe,
  l as q,
  m as Fe,
  n as Ie,
  o as Le,
  p as Re,
  r as ze,
  t as Be,
} from "./Video.U_4p6n4p.mjs";
import { n as Ve, t as J } from "./bkgrGppuB.12ljnmEr.mjs";
import { a as He, i as Ue, o as We, r as Ge } from "./shared-lib.Cj7Z24jQ.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./hMoFYBqBy.K_wxjvR_.mjs";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./WtX7HRPZM.D8xtSTXa.mjs";
import { i as et, n as tt, r as nt, t as rt } from "./FQBtVWcCo.CBF2cXz1.mjs";
import { n as it, t as at } from "./SmoothScroll_Prod.Bhb8D5E4.mjs";
import { a as ot, n as st, o as ct, t as lt } from "./jB0eAZmvy.ylPqY2bS.mjs";
import { a as ut, i as dt, n as ft, o as pt, r as mt, t as ht } from "./yFo8aBv4g.CDm4UcUB.mjs";
import { n as gt, t as _t } from "./DMpBbyHb7.BNvAhe-t.mjs";
import { i as vt, n as yt, r as bt, t as Y } from "./xkuDZX1Be.tC0B3uOh.mjs";
import { n as xt, t as St } from "./pm71nQRwE.CsI16KIG.mjs";
import { n as Ct, t as wt } from "./TLMK37qFm.CXt1_IWs.mjs";
import { i as Tt, t as Et } from "./E4gGZbAar.BRLQzBk8.mjs";
import { i as Dt, n as Ot, r as kt, t as At } from "./EYF7XgWx8.HeaxYFI7.mjs";
import { i as jt, n as Mt, r as Nt, t as Pt } from "./uo0TFsfZI.BDHQN2Ps.mjs";
import Ft, { t as It } from "./IQYWcmTRMryVwqkYrpe4QkJsFjH8qC3AGEQ_Cj2EnsM.BdQFIuFb.mjs";
var Lt,
  Rt = e(() => {
    Lt = (e) => e;
  }),
  zt = e(() => {
    Rt();
  }),
  Bt = e(() => {
    zt();
  });
function Vt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ht = e(() => {}),
  Ut,
  Wt = e(() => {
    ((Ut = {}),
      Object.defineProperty(Ut, "__esModule", { value: !0 }),
      (Ut.warning = function () {}),
      (Ut.invariant = function () {}),
      Ut.__esModule,
      Ut.warning,
      Ut.invariant);
  }),
  Gt = e(() => {
    Rt();
  });
function Kt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function qt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Kt(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : gn[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Jt(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Yt({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = _n.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Jt(e, n);
        },
      });
    });
}
function Xt(e) {
  e.forEach(Yt);
}
function Zt() {
  typeof ResizeObserver < `u` && (vn = new ResizeObserver(Xt));
}
function Qt(e, t) {
  vn || Zt();
  let n = Kt(e);
  return (
    n.forEach((e) => {
      let n = _n.get(e);
      (n || ((n = new Set()), _n.set(e, n)), n.add(t), vn?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = _n.get(e);
        (n?.delete(t), (n != null && n.size) || vn == null || vn.unobserve(e));
      });
    }
  );
}
function $t() {
  ((bn = () => {
    let e = { width: o.innerWidth, height: o.innerHeight },
      t = { target: o, size: e, contentSize: e };
    yn.forEach((e) => e(t));
  }),
    o.addEventListener(`resize`, bn));
}
function en(e) {
  return (
    yn.add(e),
    bn || $t(),
    () => {
      (yn.delete(e), !yn.size && bn && (bn = void 0));
    }
  );
}
function tn(e, t) {
  return typeof e == `function` ? en(e) : Qt(e, t);
}
function nn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function rn(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn = e(() => {
    (n(),
      Rt(),
      Bt(),
      Ht(),
      Wt(),
      Gt(),
      (an = [``, `X`, `Y`, `Z`]),
      (on = [`translate`, `scale`, `rotate`, `skew`]),
      (sn = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (cn = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: sn,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Lt },
        skew: sn,
      }),
      (ln = new Map()),
      (un = (e) => `--motion-${e}`),
      (dn = [`x`, `y`, `z`]),
      on.forEach((e) => {
        an.forEach((t) => {
          (dn.push(e + t), ln.set(un(e + t), cn[e]));
        });
      }),
      new Set(dn),
      (fn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (pn = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            fn({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!fn({ opacity: [0, 1] }).finished,
      }),
      (mn = {}),
      (hn = {}));
    for (let e in pn) hn[e] = () => (mn[e] === void 0 && (mn[e] = pn[e]()), mn[e]);
    ((gn = { any: 0, all: 1 }),
      (_n = new WeakMap()),
      (yn = new Set()),
      (xn = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return qt(
            e,
            (r) => {
              if ((t(), rn(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), rn(e, `viewleave`, t));
                };
            },
            Vt(r, [`once`]),
          );
        },
      }),
      (Sn = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), nn(e, t, r));
      }),
      (Cn = {
        inView: xn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Sn(e, `hoverstart`, t),
              i = Sn(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), nn(e, `pressend`, t), o.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), nn(e, `pressstart`, n), o.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), o.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Cn)]);
  });
function Tn() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function En(e) {
  let t = f.useRef(Tn);
  return (
    f.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      On() && Tn();
      let n = t.current;
      return n(...e);
    }
  );
}
var Dn,
  On,
  kn = e(() => {
    (p(),
      (Dn = f.createContext(!0)),
      (On =
        `use` in f
          ? () => {
              try {
                return f.use(Dn);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function An(e) {
  let {
      slots: n = [],
      startFrom: s,
      direction: l,
      effectsOptions: u,
      autoPlayControl: f,
      dragControl: p,
      widthSizing: m,
      heightSizing: ee,
      alignment: h,
      gap: g,
      padding: v,
      paddingPerSide: b,
      paddingTop: T,
      paddingRight: D,
      paddingBottom: O,
      paddingLeft: k,
      itemAmount: A,
      fadeOptions: j,
      intervalControl: M,
      transitionControl: P,
      arrowOptions: F,
      borderRadius: ae,
      progressOptions: oe,
      style: se,
    } = e,
    {
      effectsOpacity: I,
      effectsScale: ce,
      effectsRotate: L,
      effectsPerspective: R,
      effectsHover: le,
      playOffscreen: z,
    } = u,
    { fadeContent: B, overflow: ue, fadeWidth: de, fadeInset: V, fadeAlpha: fe } = j,
    {
      showMouseControls: H,
      arrowSize: pe,
      arrowRadius: me,
      arrowFill: he,
      leftArrow: ge,
      rightArrow: _e,
      arrowShouldSpace: U = !0,
      arrowShouldFadeIn: ve = !1,
      arrowPosition: ye,
      arrowPadding: W,
      arrowGap: be,
      arrowPaddingTop: xe,
      arrowPaddingRight: G,
      arrowPaddingBottom: Se,
      arrowPaddingLeft: Ce,
    } = F,
    {
      showProgressDots: we,
      dotSize: Te,
      dotsInset: Ee,
      dotsRadius: K,
      dotsPadding: De,
      dotsGap: Oe,
      dotsFill: ke,
      dotsBackground: Ae,
      dotsActiveOpacity: je,
      dotsOpacity: Me,
      dotsBlur: Ne,
    } = oe,
    Pe = b ? `${T}px ${D}px ${O}px ${k}px` : `${v}px`,
    q = N.current() === N.canvas,
    Fe = n.filter(Boolean),
    Ie = i.count(Fe);
  if (!(Ie > 0))
    return y(`section`, {
      style: Bn,
      children: [
        _(`div`, { style: Vn, children: `⭐️` }),
        _(`p`, { style: Hn, children: `Connect to Content` }),
        _(`p`, {
          style: Un,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Le = t(null),
    Re = t(null),
    ze = d((e) => {
      ((Le.current = e), Le.current && rt());
    }, []),
    [Be, Ve] = c({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    J = l === `left` || l === `right`,
    He = Mn(),
    Ue = J && He === `rtl` ? -1 : 1,
    [We, Ge] = c(!1),
    [Ke, qe] = c(f),
    [Je, Ye] = c(!1),
    Xe = Be?.item !== null && Be?.parent !== null && He !== null,
    Ze = Math.ceil((s + A) / Ie),
    Qe = [],
    $e = Ze * 4;
  (q || !Xe) && ($e = Ze);
  let [et, tt] = c(s + Ie);
  a(() => {
    if (!Be.item || !He) return;
    let e = -1 * et * ((Be.item ?? 0) + g) * (He === `rtl` ? -1 : 1);
    ut.get() !== e && re(ut, e, P);
  }, [et, Be.item, g, He]);
  let nt = () => {
      let e = Re.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = J ? t : n,
        i = Math.max(1, A),
        a = Math.max(0, (r - g * (i - 1)) / i),
        s = Ie * (a + g),
        c = J ? a : t,
        l = J ? n : a,
        u = J
          ? Math.max(document.documentElement.clientWidth || 0, o.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, o.innerHeight || 0, n);
      Ve({ parent: r, children: s, item: a, itemWidth: c, itemHeight: l, viewportLength: u });
    },
    rt = En(() => {
      ie.read(nt, !1, !0);
    });
  (r(() => {
    rt();
  }, [Fe.length, A, g, l, v, b, T, D, O, k]),
    a(() => {
      let e = Le.current;
      if (e)
        return tn(e, ({ size: e }) => {
          ((Re.current = e), !(!e.width || !e.height) && rt());
        });
    }, []));
  let it = q ? 0 : Be?.children,
    [at, ot] = c(!1),
    st = t(null),
    ct = ne(st),
    lt = w() && ct,
    ut = te(it),
    dt = q
      ? te(0)
      : E(ut, (e) => {
          let t = it ?? 0,
            n = e ?? 0,
            r = C(-t * Ue, -t * Ue * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    ft = C(0, Ie, et),
    pt = (e) => {
      x(() => tt((t) => t + e));
    },
    mt = (e) => {
      let t = e - C(0, Ie, et);
      x(() => tt((e) => e + t));
    },
    ht = (l === `right` || l === `bottom` ? -1 : 1) * Ue,
    gt = f && Ke && (z || lt) && !q && Ie > 1 && !at && Xe;
  a(() => {
    if (!gt) return;
    let e = setTimeout(() => {
      pt(ht);
    }, M * 1e3);
    return () => clearTimeout(e);
  }, [gt, ht, M, et]);
  let _t = () => {
      x(() => ot(!0));
    },
    vt = (e, { offset: t, velocity: n }) => {
      x(() => ot(!1));
      let r = J ? t.x : t.y,
        i = J ? n.x : n.y,
        a = r < -Be.item / 2,
        o = r > Be.item / 2,
        s = Math.round(Math.abs(r) / Be.item),
        c = s === 0 ? 1 : s;
      i > 200 ? pt(-c * Ue) : i < -200 ? pt(c * Ue) : (a && pt(s * Ue), o && pt(-s * Ue));
    },
    yt = Math.max(0, Math.min(s ?? 0, Math.max(0, Ie - 1))),
    bt = (yt * 100) / A,
    Y = (yt * g) / A,
    xt = 0,
    St = `calc(${100 / A}% - ${g}px + ${g / A}px)`,
    Ct = J ? ee : m;
  for (let e = 0; e < $e; e++)
    Qe = Qe.concat(
      i.map(Fe, (t, n) => {
        let r = t,
          i = Ct === `fit` ? (J ? r.props?.height : r.props?.width) : `100%`;
        return _(
          qn,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: J ? (A > 1 ? St : `100%`) : i,
            height: J ? i : A > 1 ? St : `100%`,
            size: Be,
            child: t,
            numChildren: Fe?.length,
            wrappedXOrY: dt,
            childCounter: xt++,
            gap: g,
            isCanvas: q,
            isInitialized: Xe,
            isHorizontal: J,
            effectsOpacity: I,
            effectsScale: ce,
            effectsRotate: L,
            writingDirection: He,
            rtlDirectionModifier: Ue,
            children: e + n,
          },
          e + n + `lg`,
        );
      }),
    );
  let wt = J ? `to right` : `to bottom`,
    Tt = de / 2,
    Et = 100 - de / 2,
    Dt = `linear-gradient(${wt}, rgba(0, 0, 0, ${fe}) ${Kn(V, 0, Tt)}%, rgba(0, 0, 0, 1) ${Tt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${fe}) ${100 - V}%)`,
    Ot = [],
    kt = {};
  if (we) {
    for (let e = 0; e < Fe?.length; e++)
      Ot.push(
        _(
          Jn,
          {
            dotStyle: { ...Xn, width: Te, height: Te, backgroundColor: ke },
            buttonStyle: Wn,
            selectedOpacity: je,
            opacity: Me,
            disabled: !q && !Xe,
            onClick: () => mt(e),
            wrappedIndex: q || !Xe ? yt : ft,
            total: Ie,
            index: e,
            gap: Oe,
            padding: De,
            isHorizontal: J,
          },
          e,
        ),
      );
    Ne > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Ne}px)`);
  }
  let At =
      Xe && p
        ? {
            drag: J ? `x` : `y`,
            onDragStart: _t,
            onDragEnd: vt,
            dragDirectionLock: !0,
            values: { x: ut, y: ut },
            dragMomentum: !1,
          }
        : {},
    jt = ye === `top-left` || ye === `top-mid` || ye === `top-right`,
    Mt = ye === `bottom-left` || ye === `bottom-mid` || ye === `bottom-right`,
    Nt = ye === `top-left` || ye === `bottom-left`,
    Pt = ye === `top-right` || ye === `bottom-right`,
    Ft = ye === `top-mid` || ye === `bottom-mid` || ye === `auto`,
    It = ge || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    Lt = _e || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return y(`section`, {
    className: `${Pn} ${J ? Fn : In}`,
    style: {
      ...zn,
      padding: Pe,
      WebkitMaskImage: B ? Dt : void 0,
      maskImage: B ? Dt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Ge(!0), le || qe(!1));
    },
    onMouseLeave: () => {
      (Ge(!1), le || qe(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), x(() => Ye(!0)));
    },
    onMouseUp: () => x(() => Ye(!1)),
    ref: st,
    children: [
      _(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: ue ? `visible` : `hidden`,
          borderRadius: ae,
          userSelect: `none`,
          perspective: q ? `none` : R,
        },
        children: _(S.ul, {
          ref: ze,
          ...At,
          style: {
            ...zn,
            gap: g,
            placeItems: h,
            ...(q || !Xe
              ? {
                  transform: J
                    ? `translateX(calc(${Rn} * (${bt}% + ${Y}px)))`
                    : `translateY(calc(${Rn} * (${bt}% + ${Y}px)))`,
                }
              : { x: J ? dt : 0, y: J ? 0 : dt }),
            flexDirection: J ? `row` : `column`,
            transformStyle: L !== 0 && !q ? `preserve-3d` : void 0,
            cursor: (q || Xe) && p ? (Je ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...se,
          },
          children: Qe,
        }),
      }),
      y(`fieldset`, {
        style: { ...Gn },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          y(S.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: J ? `row` : `column`,
              justifyContent: U ? `space-between` : `center`,
              gap: U ? `unset` : be,
              opacity: ve || (!q && !Xe) ? 0 : 1,
              alignItems: `center`,
              inset: W,
              top: U ? W : jt ? xe : `unset`,
              left: U ? W : Nt ? Ce : Ft ? 0 : `unset`,
              right: U ? W : Pt ? G : Ft ? 0 : `unset`,
              bottom: U ? W : Mt ? Se : `unset`,
            },
            animate: q || Xe ? (ve ? { opacity: +!!We } : { opacity: 1 }) : { opacity: 0 },
            transition: P,
            children: [
              _(S.button, {
                type: `button`,
                style: {
                  ...Wn,
                  backgroundColor: he,
                  width: pe,
                  height: pe,
                  borderRadius: me,
                  rotate: J ? 0 : 90,
                  display: H ? `block` : `none`,
                  pointerEvents: q || Xe ? `auto` : `none`,
                  cursor: q || Xe ? `pointer` : `default`,
                },
                disabled: !(q || Xe),
                onClick: () => pt(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: _(`img`, {
                  decoding: `async`,
                  width: pe,
                  height: pe,
                  src: J && He === `rtl` ? Lt : It,
                  alt: `Back Arrow`,
                }),
              }),
              _(S.button, {
                type: `button`,
                style: {
                  ...Wn,
                  backgroundColor: he,
                  width: pe,
                  height: pe,
                  borderRadius: me,
                  rotate: J ? 0 : 90,
                  display: H ? `block` : `none`,
                  pointerEvents: q || Xe ? `auto` : `none`,
                  cursor: q || Xe ? `pointer` : `default`,
                },
                disabled: !(q || Xe),
                onClick: () => pt(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: _(`img`, {
                  decoding: `async`,
                  width: pe,
                  height: pe,
                  src: J && He === `rtl` ? It : Lt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? _(S.div, {
                style: {
                  ...Yn,
                  left: J ? `50%` : Ee,
                  top: J ? `unset` : `50%`,
                  transform: J ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: J ? `row` : `column`,
                  bottom: J ? Ee : `unset`,
                  borderRadius: K,
                  backgroundColor: Ae,
                  userSelect: `none`,
                  ...kt,
                  opacity: +!!q,
                  pointerEvents: q || Xe ? `auto` : `none`,
                },
                animate: { opacity: +!!Xe },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
}
function jn() {
  return o?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Mn() {
  let [e, t] = c(null);
  return (
    a(
      () => (
        t(jn()),
        Nn(() => {
          t(jn());
        })
      ),
      [],
    ),
    e
  );
}
function Nn(e) {
  return (
    Qn.push(e),
    Zn ||
      ((Zn = new MutationObserver(() => Qn.forEach((e) => e()))),
      Zn.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (Qn.splice(Qn.indexOf(e), 1), Qn.length === 0 && (Zn?.disconnect(), (Zn = null)));
    }
  );
}
var Pn,
  Fn,
  In,
  Ln,
  Rn,
  X,
  zn,
  Bn,
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
  $n = e(() => {
    (n(),
      v(),
      wn(),
      z(),
      A(),
      p(),
      kn(),
      (Pn = `framer-slideshow`),
      (Fn = `framer-slideshow-axis-x`),
      (In = `framer-slideshow-axis-y`),
      (Ln = `--framer-dir-multiplier`),
      (Rn = `var(${Ln}, -1)`),
      (X = R(
        An,
        [`.${Fn} { ${Ln}: -1; }`, `html[dir="rtl"] .${Fn} { ${Ln}: 1; }`, `.${In} { ${Ln}: -1; }`],
        `framer-slideshow-component`,
      )),
      (X.defaultProps = {
        direction: `left`,
        widthSizing: `fill`,
        heightSizing: `fill`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      L(X, {
        slots: { type: G.Array, title: `Content`, control: { type: G.ComponentInstance } },
        direction: {
          type: G.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: X.defaultProps.direction,
        },
        autoPlayControl: { type: G.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: G.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: G.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: G.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.startFrom,
        },
        effectsOptions: {
          type: G.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: G.Number,
              title: `Opacity`,
              defaultValue: X.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: G.Number,
              title: `Scale`,
              defaultValue: X.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: G.Number,
              title: `Perspective`,
              defaultValue: X.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: G.Number,
              title: `Rotate`,
              defaultValue: X.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: G.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: G.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: X.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        widthSizing: {
          type: G.Enum,
          title: `Width`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: X.defaultProps.widthSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `left` || e.direction === `right`,
        },
        heightSizing: {
          type: G.Enum,
          title: `Height`,
          options: [`fill`, `fit`],
          optionTitles: [`Fill`, `Fit`],
          defaultValue: X.defaultProps.heightSizing,
          displaySegmentedControl: !0,
          hidden: (e) => e.direction === `top` || e.direction === `bottom`,
        },
        alignment: {
          type: G.Enum,
          title: `Align`,
          hidden: (e) =>
            (e.direction === `left` || e.direction === `right` ? e.heightSizing : e.widthSizing) !==
            `fit`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: G.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: X.defaultProps.itemAmount,
        },
        gap: { type: G.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: G.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: G.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: G.Transition,
          defaultValue: X.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: G.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: G.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: G.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: G.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: G.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: G.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: G.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: G.Boolean,
              title: `Show`,
              defaultValue: X.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: G.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: X.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: G.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: G.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: G.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: X.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: G.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: G.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: G.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: X.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: G.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: G.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: G.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: G.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: G.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: G.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: G.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: G.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: G.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: G.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: G.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: G.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: G.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: G.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: G.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: G.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: G.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: G.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: G.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (zn = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Bn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Vn = { fontSize: 32, marginBottom: 10 }),
      (Hn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Un = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (Wn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Gn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Kn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (qn = m(function (e) {
        let {
            slideKey: n,
            width: r,
            height: i,
            child: o,
            size: s,
            gap: c,
            wrappedXOrY: l,
            numChildren: u,
            childCounter: d,
            isCanvas: f,
            isInitialized: p,
            effectsOpacity: m,
            effectsScale: ee,
            effectsRotate: h,
            isHorizontal: v,
            index: y,
            writingDirection: b,
            rtlDirectionModifier: x,
          } = e,
          S = t(null),
          C = s?.item ?? 0,
          te = s?.parent ?? 0,
          ne = (C + c) * d,
          w = (v && b === `rtl` ? [C - c, 0, -te + C - c, -te - c] : [-C, 0, te - C + c, te]).map(
            (e) => e - ne * x,
          ),
          D = !f && E(l, w, v && b === `rtl` ? [h, 0, 0, -h] : [-h, 0, 0, h]),
          O = !f && E(l, w, [h, 0, 0, -h]),
          re = !f && E(l, w, [m, 1, 1, m]),
          ie = !f && E(l, w, [ee, 1, 1, ee]),
          A = !f && E(l, w, v && b === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          j =
            !f &&
            E(l, (e) => {
              let t = Math.min(w[1], w[2]),
                n = Math.max(w[1], w[2]);
              return e >= t && e <= n;
            });
        a(() => {
          if (!j || !p) return;
          function e(e) {
            let t = S?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(j.get()),
            j.on(`change`, (t) => {
              e(t);
            })
          );
        }, [p]);
        let M = f
            ? `visible`
            : E(
                l,
                [w[0] - s.viewportLength * x, T(w[1], w[2], 0.5), w[3] + s.viewportLength * x],
                [`hidden`, `visible`, `hidden`],
              ),
          N = n + `child`;
        return _(k, {
          inherit: `id`,
          id: N,
          children: _(`li`, {
            style: { display: `contents` },
            children: g(o, {
              ref: S,
              key: N,
              style: {
                ...o.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: r,
                height: i,
                ...(p
                  ? {
                      opacity: re,
                      scale: ie,
                      originX: v ? A : 0.5,
                      originY: v ? 0.5 : A,
                      rotateY: v ? D : 0,
                      rotateX: v ? 0 : O,
                      visibility: M,
                    }
                  : {}),
              },
              layoutId: o.props.layoutId ? o.props.layoutId + `-original-` + y : void 0,
            }),
          }),
        });
      })),
      (Jn = m(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          ee = l ? (r === 0 ? c : f) : c,
          h = l ? (r === n - 1 ? c : f) : c;
        return _(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: ee,
            paddingInlineEnd: h,
          },
          children: _(S.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Yn = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (Xn = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (Zn = null),
      (Qn = []));
  });
function er(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function tr(e) {
  let t = er(e);
  return _(lr, { ...t });
}
function nr(e) {
  let n = Oe(),
    r = t(!1),
    i = t(!1),
    a = d((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: d(() => {
      let t = e.current;
      t &&
        ((t.preload = `auto`),
        !(
          t.currentTime > 0 &&
          t.onplaying &&
          !t.paused &&
          !t.ended &&
          t.readyState >= t.HAVE_CURRENT_DATA
        ) &&
          t &&
          !r.current &&
          n &&
          ((r.current = !0),
          (i.current = !0),
          t
            .play()
            .catch((e) => {})
            .finally(() => (r.current = !1))));
    }, []),
    pause: d(() => {
      !e.current || r.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function rr({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = c(() => e),
    [o, s] = c(!1);
  e !== a && !o && s(!0);
  let l = a && t && n && r && !i && !o,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function ir(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ar(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(ir).join(` `);
}
var or,
  sr,
  cr,
  lr,
  ur,
  dr = e(() => {
    (v(),
      z(),
      A(),
      ze(),
      p(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((or ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((sr ||= {})),
      (cr = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (lr = m(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: r,
            srcFile: i = ``,
            posterEnabled: o = !1,
            controls: s = !1,
            playing: c = !0,
            loop: l = !0,
            muted: d = !0,
            playsinline: f = !0,
            restartOnEnter: p = !1,
            objectFit: m = `cover`,
            backgroundColor: ee = `rgba(0,0,0,0)`,
            radius: h = 0,
            volume: g = 25,
            startTime: v = 0,
            poster: y,
            playing: b,
            progress: x,
            onSeeked: S,
            onPause: C,
            onPlay: te,
            onEnd: w,
            onClick: T,
            onMouseEnter: E,
            onMouseLeave: D,
            onMouseDown: re,
            onMouseUp: ie,
          } = e,
          k = t(),
          A = Me(),
          j = t(null),
          M = t(null),
          P = je(),
          F = q(),
          ae = P || F === N.export,
          oe = Le(e),
          se = ae
            ? `no-autoplay`
            : rr({ playingProp: b, muted: d, loop: l, playsinline: f, controls: s }),
          I = ae ? !0 : ne(k),
          ce = !ae && ne(k, { margin: `10%`, once: !0 }),
          L = v === 100 ? 99.9 : v,
          { play: R, pause: le, setProgress: z, isPlaying: B } = nr(k);
        (a(() => {
          ae || (se !== `on-viewport` && (b ? R() : le()));
        }, [se, b]),
          a(() => {
            ae || (I && b && se !== `no-autoplay` && R(), se === `on-viewport` && le());
          }, [se, I, b]),
          a(() => {
            !P || y || o || L || !k.current || (k.current.currentTime = 0.01);
          }, [o, y, L]));
        let ue = t(!1);
        (a(() => {
          if (!ue.current) {
            ue.current = !0;
            return;
          }
          let e = O(x) ? x.get() : (x ?? 0) * 0.01;
          z((e ?? 0) || (L ?? 0) / 100);
        }, [L, i, r, x]),
          a(() => {
            if (O(x)) return x.on(`change`, (e) => z(e));
          }, [x]),
          Re(() => {
            j.current !== null && k.current && ((!M && l) || !j.current) && R();
          }),
          Fe(() => {
            k.current && ((M.current = k.current.ended), (j.current = k.current.paused), le());
          }));
        let de = u(() => {
          if (n === `URL`) return r + ``;
          if (n === `Upload`) return i + ``;
        }, [n, i, r, L]);
        return (
          a(() => {
            A && k.current && se === `on-mount` && setTimeout(() => R(), 50);
          }, []),
          a(() => {
            k.current && !d && (k.current.volume = (g ?? 0) / 100);
          }, [g]),
          _(`video`, {
            onClick: T,
            onMouseEnter: E,
            onMouseLeave: D,
            onMouseDown: re,
            onMouseUp: ie,
            src: de,
            loop: l,
            ref: k,
            onSeeked: (e) => S?.(e),
            onPause: (e) => C?.(e),
            onPlay: (e) => te?.(e),
            onEnded: (e) => w?.(e),
            autoPlay: B.current || se === `on-mount` || (b && se === `on-viewport` && I),
            preload: B.current
              ? `auto`
              : ae && !y
                ? `metadata`
                : se !== `on-mount` && !ce
                  ? `none`
                  : `metadata`,
            poster:
              o && !i && r === cr
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : o && y
                  ? y
                  : void 0,
            onLoadedData: () => {
              let e = k.current;
              e &&
                (e.currentTime < 0.3 && L > 0 && z((L ?? 0) * 0.01),
                (B.current || se === `on-mount` || (b && se === `on-viewport` && I)) && R());
            },
            controls: s,
            muted: ae ? !0 : d,
            playsInline: f,
            style: {
              cursor: T ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: oe,
              display: `block`,
              objectFit: m,
              backgroundColor: ee,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (tr.displayName = `Video`),
      (ur = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      L(tr, {
        srcType: {
          type: G.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: G.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: G.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: G.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...Pe,
        posterEnabled: {
          type: G.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: G.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: G.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: G.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: G.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: G.Enum, title: `Fit`, options: ur, optionTitles: ur.map(ar) },
        controls: {
          type: G.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: G.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: G.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: G.EventHandler },
        onSeeked: { type: G.EventHandler },
        onPause: { type: G.EventHandler },
        onPlay: { type: G.EventHandler },
        ...Ne,
      }));
  });
function fr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pr,
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
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr = e(() => {
    (v(),
      z(),
      A(),
      p(),
      dr(),
      (pr = V(tr)),
      (mr = we(tr)),
      (hr = [`nhCYa2_Ck`, `wPvOT0t0q`]),
      (gr = `framer-AbRDk`),
      (_r = { nhCYa2_Ck: `framer-v-16ahd6p`, wPvOT0t0q: `framer-v-15gmy5e` }),
      (vr = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (yr = { delay: 0, duration: 0.5, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (br = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (xr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Sr = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Cr = { Close: `nhCYa2_Ck`, Open: `wPvOT0t0q` }),
      (wr = S.create(s)),
      (Tr = { Image: `EJmaBPnwt`, Video: `Y_e0e_mkN` }),
      (Er = ({
        bGImage: e,
        height: t,
        id: n,
        image: r,
        imageOrVideo: i,
        radius: a,
        video: o,
        width: s,
        ...c
      }) => ({
        ...c,
        fsux3y6O2:
          o ??
          c.fsux3y6O2 ??
          `https://framerusercontent.com/assets/dklv7jHBd12OspKQK1owLbpl6wI.mp4`,
        qLYhflb9R: a ?? c.qLYhflb9R ?? `25px`,
        V2s8qfniX: Tr[i] ?? i ?? c.V2s8qfniX ?? `Y_e0e_mkN`,
        variant: Cr[c.variant] ?? c.variant ?? `nhCYa2_Ck`,
        VcP3JkMrC: r ??
          c.VcP3JkMrC ?? {
            alt: ``,
            pixelHeight: 4096,
            pixelWidth: 4096,
            src: `https://framerusercontent.com/images/IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?width=4096&height=4096`,
            srcSet: `https://framerusercontent.com/images/IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?scale-down-to=512&width=4096&height=4096 512w,https://framerusercontent.com/images/IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?scale-down-to=1024&width=4096&height=4096 1024w,https://framerusercontent.com/images/IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?scale-down-to=2048&width=4096&height=4096 2048w,https://framerusercontent.com/images/IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?width=4096&height=4096 4096w`,
          },
        w1YFGN0ZT:
          e ??
          c.w1YFGN0ZT ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Or = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = De(),
            c = _e(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              V2s8qfniX: p,
              VcP3JkMrC: m,
              fsux3y6O2: h,
              qLYhflb9R: g,
              w1YFGN0ZT: v,
              ...b
            } = Er(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = ce({
              cycleOrder: hr,
              defaultVariant: `nhCYa2_Ck`,
              ref: i,
              variant: f,
              variantClassNames: _r,
            }),
            re = Dr(e, O),
            ie = F(gr),
            A = br(p, `Y_e0e_mkN`),
            j = br(p, `EJmaBPnwt`);
          return _(k, {
            id: d ?? a,
            children: _(wr, {
              animate: O,
              initial: !1,
              children: _(Sr, {
                value: yr,
                children: y(S.div, {
                  ...b,
                  ...ne,
                  className: F(ie, `framer-16ahd6p`, u, C),
                  "data-framer-name": `Close`,
                  layoutDependency: re,
                  layoutId: `nhCYa2_Ck`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: vr(g, 3),
                    borderBottomRightRadius: vr(g, 2),
                    borderTopLeftRadius: vr(g, 0),
                    borderTopRightRadius: vr(g, 1),
                    ...l,
                  },
                  ...fr({ wPvOT0t0q: { "data-framer-name": `Open` } }, x, w),
                  children: [
                    _(S.div, {
                      className: `framer-1koo5rq`,
                      "data-framer-name": `Up`,
                      layoutDependency: re,
                      layoutId: `tfsl3vc5U`,
                      children: _(S.div, {
                        className: `framer-12e1qeb`,
                        layoutDependency: re,
                        layoutId: `bOPWk9EHC`,
                        style: { backgroundColor: v },
                      }),
                    }),
                    y(S.div, {
                      className: `framer-1bgriju`,
                      "data-framer-name": `Video`,
                      layoutDependency: re,
                      layoutId: `NYz4yUujc`,
                      children: [
                        A !== !1 &&
                          _(U, {
                            children: _(ve, {
                              className: `framer-15spl54-container`,
                              isModuleExternal: !0,
                              layoutDependency: re,
                              layoutId: `d0fHjJNfP-container`,
                              nodeId: `d0fHjJNfP`,
                              rendersWithMotion: !0,
                              scopeId: `JovfBZAVZ`,
                              children: _(tr, {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: `100%`,
                                id: `d0fHjJNfP`,
                                isMixedBorderRadius: !1,
                                layoutId: `d0fHjJNfP`,
                                loop: !0,
                                muted: !0,
                                objectFit: `cover`,
                                playing: !0,
                                posterEnabled: !0,
                                srcFile: h,
                                srcType: `Upload`,
                                srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                startTime: 0,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: `100%`,
                                ...fr({ wPvOT0t0q: { loop: !1 } }, x, w),
                              }),
                            }),
                          }),
                        j !== !1 &&
                          _(ge, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: oe((c?.y || 0) + 0 + 0),
                              pixelHeight: 4096,
                              pixelWidth: 4096,
                              sizes: c?.width || `100vw`,
                              ...xr(m),
                            },
                            className: `framer-n4stit`,
                            "data-framer-name": `Video`,
                            layoutDependency: re,
                            layoutId: `TJQXVg9o6`,
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
          `.framer-AbRDk.framer-pnoaat, .framer-AbRDk .framer-pnoaat { display: block; }`,
          `.framer-AbRDk.framer-16ahd6p { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 446px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 504px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AbRDk .framer-1koo5rq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
          `.framer-AbRDk .framer-12e1qeb { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -1px; z-index: 1; }`,
          `.framer-AbRDk .framer-1bgriju { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-AbRDk .framer-15spl54-container { bottom: 0px; flex: none; left: -107px; position: absolute; right: -110px; top: 0px; }`,
          `.framer-AbRDk .framer-n4stit { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-AbRDk.framer-v-15gmy5e.framer-16ahd6p { width: 644px; }`,
          `.framer-AbRDk.framer-v-15gmy5e .framer-12e1qeb { bottom: unset; height: 1px; }`,
        ],
        `framer-AbRDk`,
      )),
      (Or.displayName = `Hero image`),
      (Or.defaultProps = { height: 446, width: 504 }),
      L(Or, {
        variant: {
          options: [`nhCYa2_Ck`, `wPvOT0t0q`],
          optionTitles: [`Close`, `Open`],
          title: `Variant`,
          type: G.Enum,
        },
        V2s8qfniX: {
          defaultValue: `Y_e0e_mkN`,
          options: [`Y_e0e_mkN`, `EJmaBPnwt`],
          optionTitles: [`Video`, `Image`],
          title: `Image or video`,
          type: G.Enum,
        },
        onV2s8qfniXChange: { changes: `V2s8qfniX`, type: G.ChangeHandler },
        VcP3JkMrC: {
          __defaultAssetReference: `data:framer/asset-reference,IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?originalFilename=image-gen+%281%29.png&width=4096&height=4096`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,IFSOmTqd0MSlPKbvfl6AcxSaG1c.png?originalFilename=image-gen+%281%29.png&width=4096&height=4096`,
          },
          description: `Click here to edit the image`,
          title: `Image`,
          type: G.ResponsiveImage,
        },
        fsux3y6O2: mr?.srcFile && {
          ...mr.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,dklv7jHBd12OspKQK1owLbpl6wI.mp4?originalFilename=Kitchen_Island_Orbit_Camera_View.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onfsux3y6O2Change: { changes: `fsux3y6O2`, type: G.ChangeHandler },
        qLYhflb9R: {
          defaultValue: `25px`,
          description: `Click here to edit the radius`,
          title: `Radius`,
          type: G.BorderRadius,
        },
        w1YFGN0ZT: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
          description: `Click here to edit the BG Image`,
          title: `BG Image`,
          type: G.Color,
        },
      }),
      I(Or, [{ explicitInter: !0, fonts: [] }, ...pr], { supportsExplicitInterCodegen: !0 }));
  }),
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr = e(() => {
    (v(),
      z(),
      A(),
      p(),
      (Ar = ae(S.div)),
      (jr = `framer-JrwUD`),
      (Mr = { vlJJgkiHH: `framer-v-1vg3pox` }),
      (Nr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pr = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Fr = S.create(s)),
      (Ir = ({
        backgroundColor: e,
        fillColor: t,
        height: n,
        id: r,
        scrollSection: i,
        width: a,
        ...o
      }) => ({
        ...o,
        EYTUZteV3:
          e ??
          o.EYTUZteV3 ??
          `var(--token-78972987-8b00-47d6-9224-6383875d03b0, rgb(221, 221, 221))`,
        jtnHznzzA: i ?? o.jtnHznzzA,
        yaxc_tc31:
          t ??
          o.yaxc_tc31 ??
          `var(--token-1737b7a9-5a83-42f3-983a-21ccf228491c, rgb(119, 11, 244))`,
      })),
      (Lr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rr = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = De();
          _e();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              jtnHznzzA: f,
              yaxc_tc31: p,
              EYTUZteV3: m,
              ...h
            } = Ir(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: C,
              setGestureState: te,
              setVariant: ne,
              variants: w,
            } = ce({ defaultVariant: `vlJJgkiHH`, ref: i, variant: d, variantClassNames: Mr }),
            T = Lr(e, w),
            E = F(jr);
          return _(k, {
            id: u ?? a,
            children: _(Fr, {
              animate: w,
              initial: !1,
              children: _(Pr, {
                value: Nr,
                children: _(S.div, {
                  ...h,
                  ...b,
                  className: F(E, `framer-1vg3pox`, l, v),
                  "data-framer-name": `Progress Bar`,
                  layoutDependency: T,
                  layoutId: `vlJJgkiHH`,
                  ref: i,
                  style: { ...c },
                  children: _(S.div, {
                    className: `framer-xq09dt`,
                    "data-framer-name": `Container`,
                    layoutDependency: T,
                    layoutId: `NTbqnbR6r`,
                    style: { backgroundColor: m },
                    children: _(Ar, {
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                        {
                          ref: f,
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 7,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: `onScrollTarget`,
                      __framer__transformViewportThreshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1scwecl`,
                      "data-framer-name": `Progress filler`,
                      layoutDependency: T,
                      layoutId: `vLvU8WLuN`,
                      style: { backgroundColor: p },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-JrwUD.framer-13kglz1, .framer-JrwUD .framer-13kglz1 { display: block; }`,
          `.framer-JrwUD.framer-1vg3pox { height: 206px; overflow: visible; position: relative; width: 2px; }`,
          `.framer-JrwUD .framer-xq09dt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 2px; z-index: 1; }`,
          `.framer-JrwUD .framer-1scwecl { flex: none; height: 150px; left: 0px; overflow: hidden; position: absolute; top: -150px; width: 2px; z-index: 2; }`,
        ],
        `framer-JrwUD`,
      )),
      (Rr.displayName = `Progress Bar`),
      (Rr.defaultProps = { height: 206, width: 2 }),
      L(Rr, {
        jtnHznzzA: { title: `Scroll Section`, type: G.ScrollSectionRef },
        yaxc_tc31: {
          defaultValue: `var(--token-1737b7a9-5a83-42f3-983a-21ccf228491c, rgb(119, 11, 244)) /* {"name":"Purple 50"} */`,
          title: `Fill Color`,
          type: G.Color,
        },
        EYTUZteV3: {
          defaultValue: `var(--token-78972987-8b00-47d6-9224-6383875d03b0, rgb(221, 221, 221)) /* {"name":"Light 87"} */`,
          title: `Background Color`,
          type: G.Color,
        },
      }),
      I(Rr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Br,
  Vr,
  Hr,
  Ur,
  Wr = e(() => {
    (v(),
      z(),
      p(),
      (Br = `url('data:image/svg+xml,<svg display="block" id="1148464333" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5 C 0 2.239 2.239 0 5 0 C 8.054 0 11.946 0 15 0 C 17.761 0 20 2.239 20 5 C 20 8.054 20 11.946 20 15 C 20 17.761 17.761 20 15 20 C 11.946 20 8.054 20 5 20 C 2.239 20 0 17.761 0 15 C 0 11.946 0 8.054 0 5 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="20px" id="CiYVAmr5H" transform="translate(4.5 4.5) rotate(45 10 10)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Vr = b((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? _(S.div, { ...a, layoutId: r, ref: t }) : _(`div`, { ...a, ref: t });
      })),
      (Hr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Ur = R(
        b(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Hr(e);
          return _(Vr, {
            ...s,
            className: F(`framer-LrXqP`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-LrXqP { -webkit-mask: ${Br}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Br}; width: 28px; }`,
        ],
        `framer-LrXqP`,
      )),
      (Ur.displayName = `Dot`),
      L(Ur, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function Gr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kr,
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
    (v(),
      z(),
      A(),
      p(),
      Wr(),
      (Kr = V(Ur)),
      (qr = [`aycaUeSqY`, `qHfKhpNiJ`, `KbTgOZv6L`, `lv4dfmvCS`]),
      (Jr = `framer-ypCPq`),
      (Yr = {
        aycaUeSqY: `framer-v-1f5afh3`,
        KbTgOZv6L: `framer-v-3rbst1`,
        lv4dfmvCS: `framer-v-1xm53r2`,
        qHfKhpNiJ: `framer-v-noe4p5`,
      }),
      (Xr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Zr = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Qr = {
        "Dot 1": `aycaUeSqY`,
        "Dot 2": `qHfKhpNiJ`,
        "Dot 3": `KbTgOZv6L`,
        "Dot 4": `lv4dfmvCS`,
      }),
      ($r = S.create(s)),
      (ei = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qr[r.variant] ?? r.variant ?? `aycaUeSqY`,
      })),
      (ti = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ni = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = De();
          _e();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = ei(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: v,
              isLoading: b,
              setGestureState: x,
              setVariant: C,
              variants: te,
            } = ce({
              cycleOrder: qr,
              defaultVariant: `aycaUeSqY`,
              ref: i,
              variant: d,
              variantClassNames: Yr,
            }),
            ne = ti(e, te),
            w = F(Jr);
          return _(k, {
            id: u ?? a,
            children: _($r, {
              animate: te,
              initial: !1,
              children: _(Zr, {
                value: Xr,
                children: y(S.div, {
                  ...f,
                  ...g,
                  className: F(w, `framer-1f5afh3`, l, m),
                  "data-framer-name": `Dot 1`,
                  layoutDependency: ne,
                  layoutId: `aycaUeSqY`,
                  ref: i,
                  style: { ...c },
                  ...Gr(
                    {
                      KbTgOZv6L: { "data-framer-name": `Dot 3` },
                      lv4dfmvCS: { "data-framer-name": `Dot 4` },
                      qHfKhpNiJ: { "data-framer-name": `Dot 2` },
                    },
                    p,
                    v,
                  ),
                  children: [
                    _(Ur, {
                      animated: !0,
                      className: `framer-1q688l4`,
                      layoutDependency: ne,
                      layoutId: `vTWBDmPks`,
                      style: {
                        "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                      },
                    }),
                    _(Ur, {
                      animated: !0,
                      className: `framer-19cmjwz`,
                      layoutDependency: ne,
                      layoutId: `YvUpv6j3U`,
                      style: {
                        "--frkg9v": `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                      },
                      variants: {
                        KbTgOZv6L: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                        lv4dfmvCS: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                        qHfKhpNiJ: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                      },
                    }),
                    _(Ur, {
                      animated: !0,
                      className: `framer-f0qvcj`,
                      layoutDependency: ne,
                      layoutId: `oTekWKGc4`,
                      style: {
                        "--frkg9v": `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                      },
                      variants: {
                        KbTgOZv6L: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                        lv4dfmvCS: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                        },
                      },
                    }),
                    _(Ur, {
                      animated: !0,
                      className: `framer-lyxc73`,
                      layoutDependency: ne,
                      layoutId: `tZdTo3UCk`,
                      style: {
                        "--frkg9v": `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                      },
                      variants: {
                        lv4dfmvCS: {
                          "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
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
          `.framer-ypCPq.framer-zc1co7, .framer-ypCPq .framer-zc1co7 { display: block; }`,
          `.framer-ypCPq.framer-1f5afh3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-ypCPq .framer-1q688l4, .framer-ypCPq .framer-19cmjwz, .framer-ypCPq .framer-f0qvcj, .framer-ypCPq .framer-lyxc73 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
        ],
        `framer-ypCPq`,
      )),
      (ni.displayName = `Element/Dot`),
      (ni.defaultProps = { height: 16, width: 67 }),
      L(ni, {
        variant: {
          options: [`aycaUeSqY`, `qHfKhpNiJ`, `KbTgOZv6L`, `lv4dfmvCS`],
          optionTitles: [`Dot 1`, `Dot 2`, `Dot 3`, `Dot 4`],
          title: `Variant`,
          type: G.Enum,
        },
      }),
      I(ni, [{ explicitInter: !0, fonts: [] }, ...Kr], { supportsExplicitInterCodegen: !0 }));
  });
function ii(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ai,
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
  Si = e(() => {
    (v(),
      z(),
      A(),
      p(),
      zr(),
      Ie(),
      Ke(),
      We(),
      ri(),
      (ai = V(ni)),
      (oi = V(Be)),
      (si = V(Rr)),
      (ci = we(Be)),
      (li = we(ni)),
      (ui = [`FRVwSQJyq`, `GpdEvWXzH`, `Cghhha8oR`, `tHnQIkzkf`, `yKH25JJOC`, `L4CZtdpVA`]),
      (di = `framer-WvO6S`),
      (fi = {
        Cghhha8oR: `framer-v-3lenaa`,
        FRVwSQJyq: `framer-v-1f0rqrl`,
        GpdEvWXzH: `framer-v-6q73g3`,
        L4CZtdpVA: `framer-v-1e19gsx`,
        tHnQIkzkf: `framer-v-hy0iiu`,
        yKH25JJOC: `framer-v-16vag35`,
      }),
      (pi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (hi = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (gi = {
        "Left 2": `tHnQIkzkf`,
        "Mobile 2": `L4CZtdpVA`,
        "Right 2": `yKH25JJOC`,
        Left: `FRVwSQJyq`,
        Mobile: `Cghhha8oR`,
        Right: `GpdEvWXzH`,
      }),
      (_i = S.create(s)),
      (vi = {
        "Dot 1": `aycaUeSqY`,
        "Dot 2": `qHfKhpNiJ`,
        "Dot 3": `KbTgOZv6L`,
        "Dot 4": `lv4dfmvCS`,
      }),
      (yi = ({
        dot: e,
        height: t,
        id: n,
        scrollSection: r,
        shortDescription: i,
        title: a,
        videoFile: o,
        width: s,
        ...c
      }) => ({
        ...c,
        a1eT_lNSF:
          o ??
          c.a1eT_lNSF ??
          `https://framerusercontent.com/assets/nUD040AfwgIbrLpJSwhyYIEPLco.mp4`,
        ANmoPr7gg:
          i ??
          c.ANmoPr7gg ??
          `We remodel kitchens so you get more space, better storage, and a kitchen you enjoy using daily.`,
        FAel9WhhA: vi[e] ?? e ?? c.FAel9WhhA ?? `aycaUeSqY`,
        oB8sNEpjw: r ?? c.oB8sNEpjw,
        variant: gi[c.variant] ?? c.variant ?? `FRVwSQJyq`,
        xVGdm2c17: a ?? c.xVGdm2c17 ?? `Kitchen Remodeling`,
      })),
      (bi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xi = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: c } = De(),
            l = _e(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              xVGdm2c17: m,
              ANmoPr7gg: h,
              a1eT_lNSF: g,
              FAel9WhhA: v,
              oB8sNEpjw: b,
              ...x
            } = yi(e),
            {
              baseVariant: C,
              classNames: te,
              clearLoadingGesture: ne,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: re,
            } = ce({
              cycleOrder: ui,
              defaultVariant: `FRVwSQJyq`,
              ref: i,
              variant: p,
              variantClassNames: fi,
            }),
            ie = bi(e, re),
            A = F(di, Ye, Ge),
            j = () => !![`tHnQIkzkf`, `yKH25JJOC`, `L4CZtdpVA`].includes(C);
          return _(k, {
            id: f ?? a,
            children: _(_i, {
              animate: re,
              initial: !1,
              children: _(hi, {
                value: pi,
                children: y(S.div, {
                  ...x,
                  ...w,
                  className: F(A, `framer-1f0rqrl`, d, te),
                  "data-border": !0,
                  "data-framer-name": `Left`,
                  layoutDependency: ie,
                  layoutId: `FRVwSQJyq`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgba(217, 217, 217, 0.63))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...u,
                  },
                  variants: {
                    Cghhha8oR: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    L4CZtdpVA: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    tHnQIkzkf: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    yKH25JJOC: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...ii(
                    {
                      Cghhha8oR: { "data-framer-name": `Mobile` },
                      GpdEvWXzH: { "data-framer-name": `Right` },
                      L4CZtdpVA: { "data-framer-name": `Mobile 2` },
                      tHnQIkzkf: { "data-framer-name": `Left 2` },
                      yKH25JJOC: { "data-framer-name": `Right 2` },
                    },
                    C,
                    T,
                  ),
                  children: [
                    y(S.div, {
                      className: `framer-1mia9px`,
                      "data-framer-name": `Steps`,
                      layoutDependency: ie,
                      layoutId: `pKDQibR8Y`,
                      children: [
                        _(U, {
                          height: 16,
                          y:
                            (l?.y || 0) +
                            0 +
                            32 +
                            (0 + ((((l?.height || 268) - 0) * 1 - 64 - 249) / 1) * 0),
                          ...ii(
                            {
                              Cghhha8oR: { y: (l?.y || 0) + 0 + 0 + 32 + 0 },
                              L4CZtdpVA: { y: (l?.y || 0) + 24 + 0 + 0 + 0 },
                              tHnQIkzkf: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  24 +
                                  (0 + ((((l?.height || 272) - 0) * 1 - 48 - 249) / 1) * 0),
                              },
                              yKH25JJOC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  24 +
                                  (0 + ((((l?.height || 272) - 0) * 1 - 48 - 249) / 1) * 0),
                              },
                            },
                            C,
                            T,
                          ),
                          children: _(ve, {
                            className: `framer-4le8pe-container`,
                            layoutDependency: ie,
                            layoutId: `HXlS97FlG-container`,
                            nodeId: `HXlS97FlG`,
                            rendersWithMotion: !0,
                            scopeId: `l0IRLLC0h`,
                            children: _(ni, {
                              height: `100%`,
                              id: `HXlS97FlG`,
                              layoutId: `HXlS97FlG`,
                              variant: mi(v),
                              width: `100%`,
                            }),
                          }),
                        }),
                        y(S.div, {
                          className: `framer-qjcgj6`,
                          "data-framer-name": `Open`,
                          layoutDependency: ie,
                          layoutId: `OcOW0do4W`,
                          children: [
                            _(W, {
                              __fromCanvasComponent: !0,
                              children: _(s, {
                                children: _(S.h3, {
                                  className: `framer-styles-preset-1pr57h3`,
                                  "data-styles-preset": `hMoFYBqBy`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                                  },
                                  children: `Kitchen Remodeling`,
                                }),
                              }),
                              className: `framer-zljlbb`,
                              fonts: [`Inter`],
                              layoutDependency: ie,
                              layoutId: `jTw0nT9_T`,
                              style: {
                                "--extracted-a0htzi": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: m,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            _(S.div, {
                              className: `framer-1ymdlu8`,
                              "data-framer-name": `Line`,
                              layoutDependency: ie,
                              layoutId: `D0TcSLR3V`,
                              style: {
                                backgroundColor: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                                borderBottomLeftRadius: 90,
                                borderBottomRightRadius: 90,
                                borderTopLeftRadius: 90,
                                borderTopRightRadius: 90,
                              },
                            }),
                            _(W, {
                              __fromCanvasComponent: !0,
                              children: _(s, {
                                children: _(S.p, {
                                  className: `framer-styles-preset-piej36`,
                                  "data-styles-preset": `kzFJG5mqZ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71)))`,
                                  },
                                  children: `We remodel kitchens so you get more space, better storage, and a kitchen you enjoy using daily.`,
                                }),
                              }),
                              className: `framer-1ygdxl9`,
                              fonts: [`Inter`],
                              layoutDependency: ie,
                              layoutId: `kFDtbFIGz`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    _(S.div, {
                      className: `framer-1ml6ti3`,
                      "data-framer-name": `Video`,
                      layoutDependency: ie,
                      layoutId: `K5C9hq7wY`,
                      style: {
                        mask: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 6%, rgba(0,0,0,1) 100%) add`,
                        WebkitMask: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 6%, rgba(0,0,0,1) 100%) add`,
                      },
                      variants: {
                        GpdEvWXzH: {
                          mask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 6%, rgba(0,0,0,1) 100%) add`,
                          WebkitMask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 6%, rgba(0,0,0,1) 100%) add`,
                        },
                        L4CZtdpVA: { mask: `none`, WebkitMask: `none` },
                      },
                      children: _(U, {
                        children: _(ve, {
                          className: `framer-1hrju11-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: ie,
                          layoutId: `TiaC0HAa7-container`,
                          nodeId: `TiaC0HAa7`,
                          rendersWithMotion: !0,
                          scopeId: `l0IRLLC0h`,
                          children: _(Be, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `TiaC0HAa7`,
                            isMixedBorderRadius: !1,
                            layoutId: `TiaC0HAa7`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !0,
                            posterEnabled: !0,
                            srcFile: g,
                            srcType: `Upload`,
                            srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                            startTime: 0,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    j() &&
                      _(U, {
                        ...ii(
                          {
                            L4CZtdpVA: {
                              height: (l?.height || 615) - 0,
                              width: `2px`,
                              y: (l?.y || 0) + 0,
                            },
                            tHnQIkzkf: {
                              height: ((l?.height || 272) - 0) * 1,
                              width: `2px`,
                              y: (l?.y || 0) + 0,
                            },
                            yKH25JJOC: {
                              height: ((l?.height || 272) - 0) * 1,
                              width: `2px`,
                              y: (l?.y || 0) + 0,
                            },
                          },
                          C,
                          T,
                        ),
                        children: _(ve, {
                          className: `framer-qpps6w-container`,
                          isModuleExternal: !0,
                          layoutDependency: ie,
                          layoutId: `Tnx9BsbkF-container`,
                          nodeId: `Tnx9BsbkF`,
                          rendersWithMotion: !0,
                          scopeId: `l0IRLLC0h`,
                          children: _(Rr, {
                            EYTUZteV3: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                            height: `100%`,
                            id: `Tnx9BsbkF`,
                            jtnHznzzA: b,
                            layoutId: `Tnx9BsbkF`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                            yaxc_tc31: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                            ...ii(
                              {
                                tHnQIkzkf: {
                                  yaxc_tc31: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                                },
                                yKH25JJOC: {
                                  yaxc_tc31: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                                },
                              },
                              C,
                              T,
                            ),
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
          `.framer-WvO6S.framer-1nb3w2d, .framer-WvO6S .framer-1nb3w2d { display: block; }`,
          `.framer-WvO6S.framer-1f0rqrl { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 698px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WvO6S .framer-1mia9px { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 32px; position: relative; width: 1px; }`,
          `.framer-WvO6S .framer-4le8pe-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-WvO6S .framer-qjcgj6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 48px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-WvO6S .framer-zljlbb, .framer-WvO6S .framer-1ygdxl9 { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-WvO6S .framer-1ymdlu8 { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WvO6S .framer-1ml6ti3 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; max-width: 266px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-WvO6S .framer-1hrju11-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-WvO6S .framer-qpps6w-container { align-self: stretch; flex: none; height: auto; position: sticky; top: 0px; width: 2px; z-index: 1; }`,
          `.framer-WvO6S.framer-v-6q73g3 .framer-1mia9px, .framer-WvO6S.framer-v-hy0iiu .framer-qpps6w-container, .framer-WvO6S.framer-v-16vag35 .framer-qpps6w-container { order: 1; }`,
          `.framer-WvO6S.framer-v-6q73g3 .framer-1ml6ti3 { order: 0; }`,
          `.framer-WvO6S.framer-v-3lenaa.framer-1f0rqrl { flex-direction: column; width: 407px; }`,
          `.framer-WvO6S.framer-v-3lenaa .framer-1mia9px { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; padding: 32px 16px 16px 16px; width: 100%; }`,
          `.framer-WvO6S.framer-v-3lenaa .framer-1ml6ti3, .framer-WvO6S.framer-v-1e19gsx .framer-1ml6ti3 { aspect-ratio: 1.2561728395061729 / 1; flex: none; max-width: unset; width: 100%; }`,
          `.framer-WvO6S.framer-v-hy0iiu.framer-1f0rqrl, .framer-WvO6S.framer-v-16vag35.framer-1f0rqrl { will-change: unset; }`,
          `.framer-WvO6S.framer-v-hy0iiu .framer-1mia9px { order: 0; padding: 24px 0px 24px 0px; }`,
          `.framer-WvO6S.framer-v-hy0iiu .framer-1ml6ti3 { aspect-ratio: unset; height: 272px; max-width: unset; order: 2; }`,
          `.framer-WvO6S.framer-v-16vag35 .framer-1mia9px { order: 2; padding: 24px 0px 24px 0px; }`,
          `.framer-WvO6S.framer-v-16vag35 .framer-1ml6ti3 { aspect-ratio: unset; height: 272px; max-width: unset; order: 0; }`,
          `.framer-WvO6S.framer-v-1e19gsx.framer-1f0rqrl { flex-direction: column; padding: 24px 0px 24px 2px; width: 407px; will-change: unset; }`,
          `.framer-WvO6S.framer-v-1e19gsx .framer-1mia9px { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; padding: 0px 16px 16px 16px; width: 100%; }`,
          `.framer-WvO6S.framer-v-1e19gsx .framer-qpps6w-container { align-self: unset; bottom: 0px; height: unset; left: 0px; position: absolute; }`,
          ...qe,
          ...Ue,
          `.framer-WvO6S[data-border="true"]::after, .framer-WvO6S [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-WvO6S`,
      )),
      (xi.displayName = `Process Card`),
      (xi.defaultProps = { height: 268, width: 698 }),
      L(xi, {
        variant: {
          options: [`FRVwSQJyq`, `GpdEvWXzH`, `Cghhha8oR`, `tHnQIkzkf`, `yKH25JJOC`, `L4CZtdpVA`],
          optionTitles: [`Left`, `Right`, `Mobile`, `Left 2`, `Right 2`, `Mobile 2`],
          title: `Variant`,
          type: G.Enum,
        },
        xVGdm2c17: {
          defaultValue: `Kitchen Remodeling`,
          description: `Click here to edit the title`,
          title: `Title`,
          type: G.String,
        },
        onxVGdm2c17Change: { changes: `xVGdm2c17`, type: G.ChangeHandler },
        ANmoPr7gg: {
          defaultValue: `We remodel kitchens so you get more space, better storage, and a kitchen you enjoy using daily.`,
          description: `Click here to edit the description`,
          title: `Short description`,
          type: G.String,
        },
        onANmoPr7ggChange: { changes: `ANmoPr7gg`, type: G.ChangeHandler },
        a1eT_lNSF: ci?.srcFile && {
          ...ci.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,nUD040AfwgIbrLpJSwhyYIEPLco.mp4?originalFilename=Animated_girl_making_a_call_202609041841.mp4&width=1280&height=720`,
          description: void 0,
          hidden: void 0,
          title: `Video file`,
        },
        ona1eT_lNSFChange: { changes: `a1eT_lNSF`, type: G.ChangeHandler },
        FAel9WhhA: li?.variant && {
          ...li.variant,
          defaultValue: `aycaUeSqY`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Dot`,
        },
        onFAel9WhhAChange: { changes: `FAel9WhhA`, type: G.ChangeHandler },
        oB8sNEpjw: { title: `Scroll Section`, type: G.ScrollSectionRef },
      }),
      I(
        xi,
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
          ...ai,
          ...oi,
          ...si,
          ...P(Je),
          ...P(He),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (xi.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([B(ni, {}, t), B(Rr, {}, t)])),
      }));
  }),
  Ci,
  wi,
  Ti,
  Ei,
  Di = e(() => {
    (v(),
      z(),
      p(),
      (Ci = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 12 24 M 24 12.002 L 0 12.002" fill="transparent" height="24px" id="HZqOv6dfJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(2 2)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (wi = b((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? _(S.div, { ...a, layoutId: r, ref: t }) : _(`div`, { ...a, ref: t });
      })),
      (Ti = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (Ei = R(
        b(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Ti(e);
          return _(wi, {
            ...s,
            className: F(`framer-mFnGD`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-mFnGD { -webkit-mask: ${Ci}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Ci}; width: 28px; }`,
        ],
        `framer-mFnGD`,
      )),
      (Ei.displayName = `Add`),
      L(Ei, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  }),
  Oi,
  ki,
  Ai,
  ji,
  Mi = e(() => {
    (v(),
      z(),
      p(),
      (Oi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 24 12.002 L 0 12.002" fill="transparent" height="24px" id="Z_TDzDSOG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(2 2)" width="24px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ki = b((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? _(S.div, { ...a, layoutId: r, ref: t }) : _(`div`, { ...a, ref: t });
      })),
      (Ai = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (ji = R(
        b(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, mRgjGDEhU: o, ...s } = Ai(e);
          return _(ki, {
            ...s,
            className: F(`framer-Db5Kn`, r),
            layoutId: i,
            ref: t,
            style: { "--frkg9v": o, ...n },
          });
        }),
        [
          `.framer-Db5Kn { -webkit-mask: ${Oi}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${Oi}; width: 28px; }`,
        ],
        `framer-Db5Kn`,
      )),
      (ji.displayName = `Subtract`),
      L(ji, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function Ni(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki = e(() => {
    (v(),
      z(),
      A(),
      p(),
      We(),
      Di(),
      Mi(),
      (Pi = { g3G0vDoUT: { hover: !0, pressed: !0 } }),
      (Fi = [`g3G0vDoUT`, `pUCtlGkLw`]),
      (Ii = `framer-1SZDZ`),
      (Li = { g3G0vDoUT: `framer-v-smrk7p`, pUCtlGkLw: `framer-v-27svc6` }),
      (Ri = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (zi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Bi = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Vi = { Closed: `g3G0vDoUT`, Opened: `pUCtlGkLw` }),
      (Hi = S.create(s)),
      (Ui = ({ answer: e, height: t, id: n, padding: r, question: i, width: a, ...o }) => ({
        ...o,
        gbFlxOFtJ: r ?? o.gbFlxOFtJ ?? `32px`,
        JFkHxuSbp: i ?? o.JFkHxuSbp ?? `How long does a renovation take?`,
        NTK1_iOAR:
          e ??
          o.NTK1_iOAR ??
          `Most projects take a few weeks to a few months, depending on the size of the work.`,
        variant: Vi[o.variant] ?? o.variant ?? `g3G0vDoUT`,
      })),
      (Wi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Gi = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: c } = De();
          _e();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              JFkHxuSbp: p,
              NTK1_iOAR: m,
              gbFlxOFtJ: h,
              ...g
            } = Ui(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = ce({
              cycleOrder: Fi,
              defaultVariant: `g3G0vDoUT`,
              enabledGestures: Pi,
              ref: i,
              variant: f,
              variantClassNames: Li,
            }),
            D = Wi(e, E),
            { activeVariantCallback: O, delay: re } = Ce(v),
            ie = O(async (...e) => {
              (w({ isPressed: !1 }), T(`pUCtlGkLw`));
            }),
            A = O(async (...e) => {
              T(`g3G0vDoUT`);
            }),
            j = F(Ii, Ge),
            M = () => v === `pUCtlGkLw`;
          return _(k, {
            id: d ?? a,
            children: _(Hi, {
              animate: E,
              initial: !1,
              children: _(Bi, {
                value: zi,
                children: y(S.div, {
                  ...g,
                  ...C,
                  className: F(j, `framer-smrk7p`, u, b),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `g3G0vDoUT`,
                  onTap: ie,
                  ref: i,
                  style: {
                    "--7vlnpu": Ri(h),
                    backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(242, 242, 242))`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    ...l,
                  },
                  ...Ni(
                    {
                      "g3G0vDoUT-hover": { "data-framer-name": void 0 },
                      "g3G0vDoUT-pressed": { "data-framer-name": void 0 },
                      pUCtlGkLw: {
                        "data-framer-name": `Opened`,
                        "data-highlight": void 0,
                        onTap: void 0,
                      },
                    },
                    v,
                    te,
                  ),
                  children: [
                    y(S.div, {
                      className: `framer-1fdsgxl`,
                      "data-framer-name": `Heading Wrap`,
                      layoutDependency: D,
                      layoutId: `Sol9yyYBL`,
                      ...Ni({ pUCtlGkLw: { "data-highlight": !0, onTap: A } }, v, te),
                      children: [
                        _(W, {
                          __fromCanvasComponent: !0,
                          children: _(s, {
                            children: _(S.p, {
                              className: `framer-styles-preset-piej36`,
                              "data-styles-preset": `kzFJG5mqZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10)))`,
                              },
                              children: `How long does a renovation take?`,
                            }),
                          }),
                          className: `framer-vkvcyx`,
                          "data-framer-name": `Question`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `BI6Wl0YNV`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: p,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        _(fe, {
                          animated: !0,
                          className: `framer-nuf4w5`,
                          Component: Ei,
                          layoutDependency: D,
                          layoutId: `cjq1tOtPA`,
                          style: {
                            "--frkg9v": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                          },
                          variants: {
                            "g3G0vDoUT-hover": {
                              "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 109, 153))`,
                            },
                            "g3G0vDoUT-pressed": {
                              "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 109, 153))`,
                            },
                            pUCtlGkLw: {
                              "--frkg9v": `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(255, 109, 153))`,
                            },
                          },
                          ...Ni({ pUCtlGkLw: { Component: ji } }, v, te),
                        }),
                      ],
                    }),
                    M() &&
                      _(W, {
                        __fromCanvasComponent: !0,
                        children: _(s, {
                          children: _(S.p, {
                            className: `framer-styles-preset-piej36`,
                            "data-styles-preset": `kzFJG5mqZ`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71)))`,
                            },
                            children: `Most projects take a few weeks to a few months, depending on the size of the work.`,
                          }),
                        }),
                        className: `framer-1buecyg`,
                        "data-framer-name": `Answer`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `q5lQpIHMt`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(71, 71, 71))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
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
          `.framer-1SZDZ.framer-1qahnrh, .framer-1SZDZ .framer-1qahnrh { display: block; }`,
          `.framer-1SZDZ.framer-smrk7p { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: var(--7vlnpu); position: relative; width: 652px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1SZDZ .framer-1fdsgxl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1SZDZ .framer-vkvcyx { flex: 1 0 0px; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1SZDZ .framer-nuf4w5 { flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-1SZDZ .framer-1buecyg { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1SZDZ.framer-v-27svc6.framer-smrk7p { cursor: unset; }`,
          `.framer-1SZDZ.framer-v-27svc6 .framer-1fdsgxl { cursor: pointer; }`,
          ...Ue,
        ],
        `framer-1SZDZ`,
      )),
      (Gi.displayName = `FAQ`),
      (Gi.defaultProps = { height: 86, width: 652 }),
      L(Gi, {
        variant: {
          options: [`g3G0vDoUT`, `pUCtlGkLw`],
          optionTitles: [`Closed`, `Opened`],
          title: `Variant`,
          type: G.Enum,
        },
        JFkHxuSbp: {
          defaultValue: `How long does a renovation take?`,
          description: `Click here to edit the question`,
          displayTextArea: !0,
          placeholder: `How long does a renovation take?`,
          title: `Question`,
          type: G.String,
        },
        onJFkHxuSbpChange: { changes: `JFkHxuSbp`, type: G.ChangeHandler },
        NTK1_iOAR: {
          defaultValue: `Most projects take a few weeks to a few months, depending on the size of the work.`,
          description: `Click here to edit the answer`,
          displayTextArea: !0,
          placeholder: `Most projects take a few weeks to a few months, depending on the size of the work.`,
          title: `Answer`,
          type: G.String,
        },
        onNTK1_iOARChange: { changes: `NTK1_iOAR`, type: G.ChangeHandler },
        gbFlxOFtJ: {
          defaultValue: `32px`,
          description: `Click here to edit the border`,
          title: `Padding`,
          type: G.Padding,
        },
      }),
      I(
        Gi,
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
          ...P(He),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function qi(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa = e(() => {
    (v(),
      z(),
      A(),
      p(),
      We(),
      (Ji = { iOvudjQxx: { hover: !0 } }),
      (Yi = [`Uq6opYUNr`, `iOvudjQxx`]),
      (Xi = `framer-4AjXH`),
      (Zi = { iOvudjQxx: `framer-v-1bvv1uq`, Uq6opYUNr: `framer-v-nsxryj` }),
      (Qi = { delay: 0, duration: 0.4, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      ($i = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (ea = { Active: `Uq6opYUNr`, Inactive: `iOvudjQxx` }),
      (ta = S.create(s)),
      (na = ({ border: e, click: t, height: n, id: r, title: i, width: a, ...o }) => ({
        ...o,
        n0ba3iDRb: t ?? o.n0ba3iDRb,
        variant: ea[o.variant] ?? o.variant ?? `Uq6opYUNr`,
        w0rfEBtdt: i ?? o.w0rfEBtdt ?? `Ocean`,
        Y6JSAJ9Ob: e ??
          o.Y6JSAJ9Ob ?? {
            borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209)) /* {"name":"First Line"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
      })),
      (ra = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ia = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: c } = De();
          _e();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              w0rfEBtdt: p,
              n0ba3iDRb: m,
              Y6JSAJ9Ob: h,
              ...g
            } = na(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: te,
              setGestureState: ne,
              setVariant: w,
              variants: T,
            } = ce({
              cycleOrder: Yi,
              defaultVariant: `Uq6opYUNr`,
              enabledGestures: Ji,
              ref: i,
              variant: f,
              variantClassNames: Zi,
            }),
            E = ra(e, T),
            { activeVariantCallback: D, delay: O } = Ce(v),
            re = D(async (...e) => {
              if ((ne({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            ie = F(Xi, Ge);
          return _(k, {
            id: d ?? a,
            children: _(ta, {
              animate: T,
              initial: !1,
              children: _($i, {
                value: Qi,
                children: _(S.div, {
                  ...g,
                  ...x,
                  className: F(ie, `framer-nsxryj`, u, y),
                  "data-framer-name": `Active`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `Uq6opYUNr`,
                  onTap: re,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...l,
                  },
                  variants: {
                    "iOvudjQxx-hover": {
                      backgroundColor: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                    },
                    iOvudjQxx: {
                      "--border-bottom-width": (h?.borderBottomWidth ?? h?.borderWidth) + `px`,
                      "--border-color": h?.borderColor,
                      "--border-left-width": (h?.borderLeftWidth ?? h?.borderWidth) + `px`,
                      "--border-right-width": (h?.borderRightWidth ?? h?.borderWidth) + `px`,
                      "--border-style": h?.borderStyle,
                      "--border-top-width": (h?.borderTopWidth ?? h?.borderWidth) + `px`,
                      backgroundColor: `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(247, 241, 236))`,
                    },
                  },
                  ...qi(
                    {
                      "iOvudjQxx-hover": { "data-framer-name": void 0 },
                      iOvudjQxx: { "data-border": !0, "data-framer-name": `Inactive` },
                    },
                    v,
                    C,
                  ),
                  children: _(W, {
                    __fromCanvasComponent: !0,
                    children: _(s, {
                      children: _(S.p, {
                        className: `framer-styles-preset-piej36`,
                        "data-styles-preset": `kzFJG5mqZ`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255)))`,
                        },
                        children: `Ocean`,
                      }),
                    }),
                    className: `framer-bsosxj`,
                    fonts: [`Inter`],
                    layoutDependency: E,
                    layoutId: `L7kBgBaYr`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: p,
                    variants: {
                      "iOvudjQxx-hover": {
                        "--extracted-r6o4lv": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                      },
                      iOvudjQxx: {
                        "--extracted-r6o4lv": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...qi(
                      {
                        "iOvudjQxx-hover": {
                          children: _(s, {
                            children: _(S.p, {
                              className: `framer-styles-preset-piej36`,
                              "data-styles-preset": `kzFJG5mqZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0)))`,
                              },
                              children: `Ocean`,
                            }),
                          }),
                        },
                        iOvudjQxx: {
                          children: _(s, {
                            children: _(S.p, {
                              className: `framer-styles-preset-piej36`,
                              "data-styles-preset": `kzFJG5mqZ`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84)))`,
                              },
                              children: `Ocean`,
                            }),
                          }),
                        },
                      },
                      v,
                      C,
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4AjXH.framer-1gzbbwt, .framer-4AjXH .framer-1gzbbwt { display: block; }`,
          `.framer-4AjXH.framer-nsxryj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 529px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4AjXH .framer-bsosxj { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          ...Ue,
          `.framer-4AjXH[data-border="true"]::after, .framer-4AjXH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-4AjXH`,
      )),
      (ia.displayName = `Card/Sevices`),
      (ia.defaultProps = { height: 70, width: 529 }),
      L(ia, {
        variant: {
          options: [`Uq6opYUNr`, `iOvudjQxx`],
          optionTitles: [`Active`, `Inactive`],
          title: `Variant`,
          type: G.Enum,
        },
        w0rfEBtdt: {
          defaultValue: `Ocean`,
          description: `Click here to edit the title`,
          displayTextArea: !1,
          title: `Title`,
          type: G.String,
        },
        onw0rfEBtdtChange: { changes: `w0rfEBtdt`, type: G.ChangeHandler },
        n0ba3iDRb: { title: `Click`, type: G.EventHandler },
        Y6JSAJ9Ob: {
          defaultValue: {
            borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209)) /* {"name":"First Line"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: G.Border,
        },
      }),
      I(
        ia,
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
          ...P(He),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  oa,
  sa,
  ca,
  la,
  ua = e(() => {
    (v(),
      z(),
      p(),
      (oa = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 11.962 18 L 8.019 18 C 5.096 17.983 2.661 15.723 2.387 12.772 C 2.371 12.6 2.364 12.43 2.364 12.267 L 2.364 6.254 L 17.615 6.254 L 17.615 12.267 C 17.615 12.43 17.615 12.6 17.592 12.772 C 17.319 15.723 14.885 17.984 11.962 18 Z M 2.941 6.839 L 2.941 12.267 C 2.941 12.413 2.941 12.565 2.962 12.721 C 3.208 15.371 5.394 17.4 8.019 17.415 L 11.962 17.415 C 14.588 17.399 16.775 15.366 17.017 12.713 C 17.031 12.557 17.038 12.405 17.038 12.259 L 17.038 6.839 Z M 3.007 13.042 L 2.663 13.042 C 1.181 13.002 0 11.772 0 10.268 C 0 8.765 1.181 7.535 2.663 7.495 L 2.951 7.495 L 2.951 12.269 C 2.951 12.415 2.951 12.567 2.972 12.724 Z M 2.374 8.1 C 1.306 8.249 0.511 9.175 0.511 10.268 C 0.511 11.362 1.306 12.288 2.374 12.437 L 2.374 12.269 Z M 17.337 13.042 L 17.001 13.042 L 17.028 12.716 C 17.041 12.56 17.049 12.408 17.049 12.261 L 17.049 7.495 L 17.337 7.495 C 18.819 7.535 20 8.765 20 10.268 C 20 11.772 18.819 13.002 17.337 13.042 Z M 17.626 8.1 L 17.626 12.437 C 18.694 12.288 19.489 11.362 19.489 10.268 C 19.489 9.175 18.694 8.249 17.626 8.1 Z M 2.663 5.601 C 2.539 5.601 2.428 5.521 2.389 5.401 C 2.35 5.282 2.39 5.15 2.49 5.074 C 6.94 1.688 13.06 1.688 17.51 5.074 C 17.638 5.171 17.664 5.355 17.568 5.484 C 17.472 5.613 17.292 5.64 17.164 5.543 C 12.919 2.312 7.081 2.312 2.836 5.543 C 2.786 5.581 2.725 5.601 2.663 5.601 Z M 11.218 1.881 C 11.059 1.881 10.93 1.75 10.93 1.588 C 10.946 1.239 10.771 0.91 10.476 0.731 C 10.18 0.552 9.812 0.552 9.516 0.731 C 9.221 0.91 9.047 1.239 9.062 1.588 C 9.062 1.75 8.933 1.881 8.774 1.881 C 8.614 1.881 8.485 1.75 8.485 1.588 C 8.465 1.028 8.749 0.501 9.225 0.215 C 9.7 -0.072 10.292 -0.072 10.768 0.215 C 11.243 0.501 11.527 1.028 11.507 1.588 C 11.507 1.75 11.378 1.881 11.218 1.881 Z M 14.889 14.276 C 14.729 14.276 14.6 14.145 14.6 13.984 L 14.6 9.028 C 14.6 8.867 14.729 8.736 14.889 8.736 C 15.048 8.736 15.177 8.867 15.177 9.028 L 15.177 13.989 C 15.174 14.149 15.046 14.276 14.889 14.276 Z M 13.665 14.276 C 13.506 14.276 13.377 14.145 13.377 13.984 L 13.377 10.269 C 13.377 10.108 13.506 9.977 13.665 9.977 C 13.825 9.977 13.954 10.108 13.954 10.269 L 13.954 13.989 C 13.951 14.149 13.822 14.276 13.665 14.276 Z" display="none" fill="transparent" height="18.00000029448229px" id="k63aKxjXd" transform="translate(0 1.001)" width="19.99999939286441px"><path d="M 9.598 11.746 L 5.655 11.746 C 2.732 11.729 0.298 9.469 0.023 6.518 C 0.008 6.346 0 6.176 0 6.012 L 0 0 L 15.252 0 L 15.252 6.012 C 15.252 6.176 15.252 6.346 15.229 6.518 C 14.956 9.469 12.521 11.73 9.598 11.746 Z M 0.577 0.585 L 0.577 6.012 C 0.577 6.159 0.577 6.311 0.598 6.467 C 0.844 9.117 3.031 11.146 5.655 11.161 L 9.598 11.161 C 12.225 11.145 14.411 9.111 14.653 6.459 C 14.667 6.303 14.675 6.151 14.675 6.005 L 14.675 0.585 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="11.745866116320668px" id="E2h72Kq2V" transform="translate(2.364 6.254)" width="15.251613172849575px"/><path d="M 3.007 10.507 L 2.663 10.507 C 1.181 10.467 0 9.237 0 7.734 C 0 6.23 1.181 5.001 2.663 4.961 L 2.951 4.961 L 2.951 9.734 C 2.951 9.881 2.951 10.033 2.972 10.189 Z M 2.374 5.565 C 1.306 5.715 0.511 6.64 0.511 7.734 C 0.511 8.827 1.306 9.753 2.374 9.902 L 2.374 9.734 Z M 17.337 10.507 L 17.001 10.507 L 17.028 10.181 C 17.041 10.025 17.049 9.873 17.049 9.727 L 17.049 4.961 L 17.337 4.961 C 18.819 5.001 20 6.23 20 7.734 C 20 9.237 18.819 10.467 17.337 10.507 Z M 17.626 5.565 L 17.626 9.902 C 18.694 9.753 19.489 8.827 19.489 7.734 C 19.489 6.64 18.694 5.715 17.626 5.565 Z M 2.663 3.066 C 2.539 3.066 2.428 2.986 2.389 2.866 C 2.35 2.747 2.39 2.615 2.49 2.54 C 6.94 -0.847 13.06 -0.847 17.51 2.54 C 17.638 2.637 17.664 2.82 17.568 2.949 C 17.472 3.079 17.292 3.105 17.164 3.008 C 12.919 -0.222 7.081 -0.222 2.836 3.008 C 2.786 3.046 2.725 3.066 2.663 3.066 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="10.506854090668421px" id="NzXGbSZkx" transform="translate(0 2.535)" width="19.99999940438954px"/><path d="M 2.734 1.881 C 2.575 1.881 2.446 1.75 2.446 1.588 C 2.461 1.239 2.287 0.91 1.991 0.731 C 1.696 0.552 1.328 0.552 1.032 0.731 C 0.737 0.91 0.562 1.239 0.578 1.588 C 0.578 1.75 0.449 1.881 0.289 1.881 C 0.13 1.881 0.001 1.75 0.001 1.588 C -0.019 1.028 0.265 0.501 0.74 0.215 C 1.216 -0.072 1.808 -0.072 2.283 0.215 C 2.759 0.501 3.043 1.028 3.023 1.588 C 3.023 1.75 2.894 1.881 2.734 1.881 Z M 6.404 14.276 C 6.245 14.276 6.116 14.145 6.116 13.984 L 6.116 9.028 C 6.116 8.867 6.245 8.736 6.404 8.736 C 6.564 8.736 6.693 8.867 6.693 9.028 L 6.693 13.989 C 6.69 14.149 6.561 14.276 6.404 14.276 Z M 5.181 14.276 C 5.022 14.276 4.892 14.145 4.892 13.984 L 4.892 10.269 C 4.892 10.108 5.022 9.977 5.181 9.977 C 5.34 9.977 5.47 10.108 5.47 10.269 L 5.47 13.989 C 5.466 14.149 5.338 14.276 5.181 14.276 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="14.276137265396192px" id="JLkgch66z" transform="translate(8.484 0)" width="6.692901125596258px"/></g><g d="M 0.006 20 L 0.006 12.095 L 1.87 12.095 C 1.87 11.636 1.868 11.197 1.87 10.757 C 1.874 10.039 2.422 9.531 3.134 9.585 C 3.701 9.627 4.171 10.147 4.143 10.716 L 3.8 10.716 C 3.703 10.538 3.642 10.358 3.525 10.229 C 3.332 10.014 3.077 9.945 2.79 10.044 C 2.486 10.149 2.309 10.372 2.294 10.681 C 2.271 11.139 2.288 11.599 2.288 12.085 L 19.992 12.085 L 19.992 20 Z M 0.42 18.332 L 6.748 18.332 L 6.748 12.517 L 0.42 12.517 Z M 7.196 18.332 L 13.106 18.332 L 13.106 12.517 L 7.196 12.517 Z M 13.557 12.516 L 13.557 18.334 L 19.571 18.334 L 19.571 12.516 Z M 0.421 19.585 L 19.569 19.585 L 19.569 18.78 L 0.421 18.78 Z M 0 5.387 L 0 0 L 19.986 0 L 19.986 1.636 L 17.733 1.636 L 17.733 3.307 C 18.845 3.528 19.486 4.203 19.607 5.386 L 13.785 5.386 C 13.633 4.503 14.379 3.651 15.617 3.305 L 15.617 1.662 L 13.14 1.662 L 13.14 5.387 Z M 0.422 1.659 L 0.422 4.974 L 6.438 4.974 L 6.438 1.659 Z M 12.699 1.666 L 6.892 1.666 L 6.892 4.975 L 12.699 4.975 Z M 0.42 1.213 L 19.569 1.213 L 19.569 0.408 L 0.42 0.408 Z M 14.259 4.977 L 19.085 4.977 C 18.98 4.408 18.472 3.846 17.871 3.799 C 17.073 3.737 16.262 3.736 15.464 3.8 C 14.862 3.848 14.346 4.424 14.259 4.976 Z M 17.291 3.215 L 17.291 1.667 L 16.05 1.667 L 16.05 3.215 Z M 20 11.159 L 20 11.543 L 13.146 11.543 L 13.146 11.159 Z M 5.748 14.799 L 6.129 14.799 L 6.129 16.027 L 5.748 16.027 Z M 7.785 14.799 L 8.16 14.799 L 8.16 16.026 L 7.785 16.026 Z M 14.508 13.762 L 18.642 13.762 L 18.642 17.903 L 14.508 17.903 Z M 14.909 17.492 L 18.223 17.492 L 18.223 14.187 L 14.909 14.187 Z M 15.516 13.183 C 15.415 13.249 15.32 13.355 15.211 13.371 C 15.053 13.394 14.936 13.268 14.971 13.115 C 14.993 13.019 15.121 12.887 15.209 12.882 C 15.307 12.876 15.412 12.995 15.515 13.059 C 15.515 13.1 15.515 13.141 15.516 13.183 Z M 4.049 4.604 L 2.833 4.604 L 2.833 4.214 L 4.049 4.214 Z M 10.521 4.215 L 10.521 4.596 L 9.295 4.596 L 9.295 4.215 Z M 16.331 13.111 C 16.232 13.184 16.178 13.252 16.121 13.255 C 16.079 13.258 15.99 13.17 15.996 13.132 C 16.004 13.073 16.067 12.987 16.119 12.977 C 16.166 12.967 16.23 13.043 16.331 13.111 Z M 15.117 13.444 C 15.016 13.444 14.933 13.362 14.933 13.261 L 14.933 13.014 C 14.933 12.912 15.016 12.83 15.117 12.83 L 15.363 12.83 C 15.465 12.83 15.547 12.912 15.547 13.014 L 15.547 13.261 C 15.547 13.362 15.465 13.444 15.363 13.444 Z M 16.033 13.444 C 15.932 13.444 15.85 13.362 15.85 13.261 L 15.85 13.014 C 15.85 12.912 15.932 12.83 16.033 12.83 L 16.28 12.83 C 16.381 12.83 16.463 12.912 16.463 13.014 L 16.463 13.261 C 16.463 13.362 16.381 13.444 16.28 13.444 Z M 16.929 13.444 C 16.828 13.444 16.745 13.362 16.745 13.261 L 16.745 13.014 C 16.745 12.912 16.828 12.83 16.929 12.83 L 17.175 12.83 C 17.277 12.83 17.359 12.912 17.359 13.014 L 17.359 13.261 C 17.359 13.362 17.277 13.444 17.175 13.444 Z M 17.845 13.444 C 17.744 13.444 17.662 13.362 17.662 13.261 L 17.662 13.014 C 17.662 12.912 17.744 12.83 17.845 12.83 L 18.092 12.83 C 18.193 12.83 18.275 12.912 18.275 13.014 L 18.275 13.261 C 18.275 13.362 18.193 13.444 18.092 13.444 Z" display="none" fill="transparent" height="20.00000019218703px" id="m7vTZTp9F" width="19.999999751305417px"><path d="M 0.006 20 L 0.006 12.095 L 1.87 12.095 C 1.87 11.636 1.868 11.197 1.87 10.757 C 1.874 10.039 2.422 9.531 3.134 9.585 C 3.701 9.627 4.171 10.147 4.143 10.716 L 3.8 10.716 C 3.703 10.538 3.642 10.358 3.525 10.229 C 3.332 10.014 3.077 9.945 2.79 10.044 C 2.486 10.149 2.309 10.372 2.294 10.681 C 2.271 11.139 2.288 11.599 2.288 12.085 L 19.992 12.085 L 19.992 20 Z M 0.42 18.332 L 6.748 18.332 L 6.748 12.517 L 0.42 12.517 Z M 7.196 18.332 L 13.106 18.332 L 13.106 12.517 L 7.196 12.517 Z M 13.557 12.516 L 13.557 18.334 L 19.571 18.334 L 19.571 12.516 Z M 0.421 19.585 L 19.569 19.585 L 19.569 18.78 L 0.421 18.78 Z M 0 5.387 L 0 0 L 19.986 0 L 19.986 1.636 L 17.733 1.636 L 17.733 3.307 C 18.845 3.528 19.486 4.203 19.607 5.386 L 13.785 5.386 C 13.633 4.503 14.379 3.651 15.617 3.305 L 15.617 1.662 L 13.14 1.662 L 13.14 5.387 Z M 0.422 1.659 L 0.422 4.974 L 6.438 4.974 L 6.438 1.659 Z M 12.699 1.666 L 6.892 1.666 L 6.892 4.975 L 12.699 4.975 Z M 0.42 1.213 L 19.569 1.213 L 19.569 0.408 L 0.42 0.408 Z M 14.259 4.977 L 19.085 4.977 C 18.98 4.408 18.472 3.846 17.871 3.799 C 17.073 3.737 16.262 3.736 15.464 3.8 C 14.862 3.848 14.346 4.424 14.259 4.976 Z M 17.291 3.215 L 17.291 1.667 L 16.05 1.667 L 16.05 3.215 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="20.00000019218703px" id="Vqi3VRct7" width="19.9916692398223px"/><path d="M 17.167 6.945 L 17.167 7.329 L 10.313 7.329 L 10.313 6.945 Z M 2.915 10.585 L 3.296 10.585 L 3.296 11.812 L 2.915 11.812 Z M 4.952 10.585 L 5.328 10.585 L 5.328 11.812 L 4.952 11.812 Z M 11.675 9.548 L 15.809 9.548 L 15.809 13.689 L 11.675 13.689 Z M 12.076 13.278 L 15.39 13.278 L 15.39 9.973 L 12.076 9.973 Z M 12.683 8.969 C 12.582 9.035 12.487 9.141 12.379 9.157 C 12.221 9.18 12.103 9.054 12.138 8.901 C 12.161 8.805 12.289 8.673 12.377 8.668 C 12.474 8.661 12.58 8.78 12.682 8.845 C 12.682 8.886 12.683 8.927 12.683 8.969 Z M 1.217 0.39 L 0 0.39 L 0 0 L 1.217 0 Z M 7.689 0 L 7.689 0.382 L 6.463 0.382 L 6.463 0 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="13.688822003202176px" id="oa7mfdijb" transform="translate(2.833 4.214)" width="17.167433490013913px"/><path d="M 0.335 0.135 C 0.236 0.207 0.183 0.275 0.125 0.279 C 0.083 0.282 -0.005 0.194 0 0.156 C 0.008 0.096 0.071 0.011 0.123 0.001 C 0.17 -0.009 0.235 0.067 0.336 0.135 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="1px" id="jU1A5d3gn" transform="translate(15.996 12.976)" width="1px"/><path d="M 0.183 0.614 C 0.082 0.614 0 0.532 0 0.431 L 0 0.184 C 0 0.082 0.082 0 0.183 0 L 0.43 0 C 0.531 0 0.613 0.082 0.613 0.184 L 0.613 0.431 C 0.613 0.532 0.531 0.614 0.43 0.614 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="1px" id="rJ7xmAEL8" transform="translate(14.933 12.83)" width="1px"/><path d="M 0.183 0.614 C 0.082 0.614 0 0.532 0 0.431 L 0 0.184 C 0 0.082 0.082 0 0.183 0 L 0.43 0 C 0.531 0 0.613 0.082 0.613 0.184 L 0.613 0.431 C 0.613 0.532 0.531 0.614 0.43 0.614 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="1px" id="K4OZjv5XF" transform="translate(15.85 12.83)" width="1px"/><path d="M 0.183 0.614 C 0.082 0.614 0 0.532 0 0.431 L 0 0.184 C 0 0.082 0.082 0 0.183 0 L 0.43 0 C 0.531 0 0.613 0.082 0.613 0.184 L 0.613 0.431 C 0.613 0.532 0.531 0.614 0.43 0.614 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="1px" id="jDzuKz5DO" transform="translate(16.745 12.83)" width="1px"/><path d="M 0.183 0.614 C 0.082 0.614 0 0.532 0 0.431 L 0 0.184 C 0 0.082 0.082 0 0.183 0 L 0.43 0 C 0.531 0 0.613 0.082 0.613 0.184 L 0.613 0.431 C 0.613 0.532 0.531 0.614 0.43 0.614 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="1px" id="j9MWd_O_H" transform="translate(17.662 12.83)" width="1px"/></g><path d="M 17.436 21.538 C 17.336 21.538 17.259 21.461 17.234 21.335 C 17.147 20.9 17.071 20.507 17.012 20.107 C 16.979 19.88 16.871 19.788 16.639 19.788 C 15.946 19.791 15.246 19.793 14.552 19.793 C 13.859 19.793 13.159 19.791 12.463 19.788 L 12.456 19.788 C 12.285 19.788 12.122 19.826 12.085 20.102 C 12.048 20.375 11.996 20.651 11.945 20.918 C 11.923 21.033 11.902 21.149 11.881 21.265 C 11.859 21.388 11.803 21.536 11.665 21.536 C 11.65 21.536 11.634 21.535 11.618 21.531 C 11.514 21.511 11.407 21.468 11.453 21.2 C 11.503 20.907 11.555 20.615 11.607 20.316 L 11.697 19.807 L 8.307 19.807 L 8.397 20.315 C 8.449 20.614 8.502 20.907 8.551 21.2 C 8.594 21.456 8.497 21.511 8.385 21.533 C 8.369 21.537 8.353 21.538 8.339 21.538 C 8.202 21.538 8.146 21.39 8.124 21.265 C 8.101 21.143 8.079 21.022 8.056 20.9 C 8.004 20.624 7.951 20.338 7.907 20.056 C 7.887 19.924 7.835 19.789 7.612 19.789 C 6.894 19.79 6.178 19.792 5.462 19.792 C 4.697 19.792 3.991 19.79 3.303 19.788 C 3.05 19.788 3.018 19.971 2.999 20.08 C 2.924 20.498 2.852 20.907 2.774 21.312 C 2.754 21.414 2.703 21.536 2.571 21.536 C 2.56 21.536 2.549 21.535 2.537 21.533 C 2.469 21.524 2.418 21.496 2.385 21.451 C 2.348 21.399 2.336 21.324 2.35 21.234 C 2.4 20.937 2.455 20.642 2.513 20.329 C 2.539 20.194 2.564 20.056 2.59 19.913 L 2.613 19.79 L 1.443 19.79 C 1.123 19.79 1.082 19.748 1.082 19.422 L 1.082 10.572 L 0.768 10.572 C 0.727 10.572 0.688 10.572 0.648 10.572 C 0.292 10.568 0.029 10.318 0.009 9.964 C -0.002 9.777 -0.003 9.579 0.008 9.359 C 0.025 8.996 0.292 8.737 0.657 8.73 C 0.767 8.728 0.876 8.727 0.986 8.727 C 1.074 8.727 1.161 8.727 1.249 8.728 C 1.337 8.728 1.424 8.729 1.512 8.729 L 19.192 8.729 C 19.772 8.729 19.998 8.956 19.998 9.538 C 19.998 9.578 19.999 9.619 19.999 9.66 C 20 9.754 20.001 9.85 19.996 9.944 C 19.978 10.315 19.72 10.568 19.354 10.572 C 19.316 10.572 19.278 10.572 19.239 10.572 L 18.921 10.572 L 18.921 19.422 C 18.921 19.748 18.88 19.789 18.558 19.79 C 18.428 19.79 18.298 19.79 18.166 19.79 L 17.391 19.79 L 17.644 21.168 C 17.679 21.361 17.657 21.441 17.555 21.502 C 17.515 21.525 17.475 21.537 17.436 21.537 Z M 2.102 19.341 C 2.225 19.341 2.325 19.343 2.417 19.348 C 2.427 19.348 2.436 19.349 2.446 19.349 C 2.674 19.349 2.729 19.193 2.752 19.058 C 2.81 18.714 2.874 18.366 2.936 18.029 C 2.961 17.894 2.986 17.759 3.01 17.623 L 3.137 16.924 C 3.259 16.25 3.386 15.552 3.513 14.866 C 3.548 14.675 3.475 14.579 3.338 14.477 C 3.221 14.39 3.086 14.238 3.069 14.109 C 3.029 13.826 3.029 13.499 3.066 13.111 C 3.089 12.872 3.286 12.705 3.544 12.703 C 4.226 12.701 4.856 12.7 5.47 12.7 C 6.128 12.7 6.77 12.701 7.378 12.704 C 7.65 12.705 7.856 12.914 7.867 13.202 C 7.87 13.282 7.869 13.366 7.867 13.448 C 7.865 13.555 7.863 13.666 7.872 13.777 C 7.905 14.212 7.776 14.444 7.441 14.551 L 7.355 14.579 L 8.217 19.325 L 11.788 19.325 L 12.649 14.579 L 12.565 14.55 C 12.236 14.439 12.103 14.218 12.133 13.834 C 12.143 13.711 12.141 13.587 12.138 13.467 C 12.137 13.404 12.136 13.341 12.136 13.278 C 12.14 12.906 12.342 12.702 12.707 12.701 C 13.32 12.699 13.932 12.699 14.545 12.699 C 15.158 12.699 15.77 12.699 16.383 12.701 C 16.746 12.701 16.947 12.892 16.966 13.253 C 16.977 13.471 16.977 13.707 16.966 13.998 C 16.957 14.236 16.868 14.394 16.702 14.466 C 16.469 14.567 16.467 14.735 16.5 14.901 C 16.577 15.297 16.65 15.701 16.721 16.092 C 16.721 16.092 16.844 16.777 16.888 17.022 C 17.01 17.7 17.137 18.403 17.266 19.092 C 17.284 19.186 17.39 19.329 17.5 19.335 C 17.626 19.342 17.76 19.345 17.936 19.345 C 18.009 19.345 18.084 19.345 18.158 19.344 C 18.232 19.343 18.307 19.343 18.381 19.343 L 18.484 19.343 L 18.484 10.583 L 1.522 10.583 L 1.522 19.343 L 1.624 19.343 C 1.707 19.343 1.789 19.343 1.869 19.342 C 1.948 19.341 2.025 19.34 2.102 19.34 Z M 12.751 18.079 C 12.704 18.079 12.657 18.082 12.608 18.085 C 12.585 18.087 12.561 18.089 12.536 18.09 L 12.455 18.094 L 12.231 19.335 L 16.865 19.335 L 16.843 19.212 C 16.827 19.122 16.81 19.035 16.793 18.949 C 16.756 18.754 16.72 18.571 16.699 18.386 C 16.667 18.112 16.501 18.075 16.343 18.075 L 16.337 18.075 C 15.66 18.079 14.993 18.08 14.43 18.08 L 12.751 18.08 Z M 3.574 18.083 C 3.495 18.083 3.363 18.148 3.342 18.247 C 3.292 18.491 3.248 18.742 3.205 18.984 C 3.192 19.057 3.144 19.327 3.144 19.327 L 7.776 19.327 L 7.56 18.151 L 7.521 18.127 C 7.513 18.122 7.508 18.118 7.503 18.115 C 7.489 18.106 7.466 18.089 7.43 18.089 L 7.219 18.089 C 6.194 18.085 5.135 18.082 4.093 18.082 L 3.574 18.082 Z M 3.45 17.627 L 7.467 17.627 L 6.909 14.56 L 4.004 14.56 L 3.449 17.627 Z M 14.973 14.55 C 14.445 14.55 13.877 14.551 13.302 14.556 C 13.199 14.557 13.081 14.684 13.061 14.783 C 12.975 15.206 12.897 15.638 12.822 16.056 L 12.789 16.239 C 12.736 16.531 12.684 16.824 12.632 17.116 L 12.542 17.625 L 16.557 17.625 L 15.998 14.55 L 14.973 14.55 Z M 12.575 14.107 L 16.515 14.107 L 16.515 13.146 L 12.575 13.146 Z M 3.488 14.106 L 7.434 14.106 L 7.434 13.153 L 3.488 13.153 Z M 13.613 10.142 C 15.268 10.142 17.223 10.143 19.182 10.147 C 19.29 10.147 19.421 10.135 19.501 10.042 C 19.578 9.952 19.572 9.83 19.56 9.746 C 19.558 9.725 19.559 9.699 19.559 9.671 C 19.56 9.655 19.56 9.639 19.56 9.623 C 19.56 9.216 19.514 9.169 19.114 9.169 L 11.453 9.169 C 7.969 9.169 4.486 9.169 1.002 9.17 C 0.947 9.17 0.899 9.169 0.857 9.168 C 0.823 9.168 0.793 9.167 0.766 9.167 C 0.658 9.167 0.571 9.172 0.51 9.235 C 0.441 9.305 0.442 9.406 0.444 9.589 C 0.444 9.632 0.445 9.681 0.444 9.736 C 0.443 9.909 0.442 10.004 0.51 10.073 C 0.578 10.141 0.672 10.141 0.844 10.141 L 13.612 10.141 Z M 13.905 6.136 C 13.353 6.132 12.868 5.767 12.7 5.229 C 12.642 5.044 12.542 4.965 12.367 4.965 C 12.355 4.965 12.342 4.965 12.328 4.966 C 12.244 4.97 12.154 4.973 12.054 4.973 C 11.94 4.973 11.826 4.97 11.729 4.967 C 11.506 4.96 11.452 4.903 11.455 4.676 C 11.47 3.456 12.322 2.503 13.627 2.249 L 13.71 2.233 L 13.71 1.297 C 13.71 0.969 13.71 0.642 13.711 0.314 C 13.711 0.197 13.739 0.001 13.921 0 C 14.116 0 14.138 0.216 14.138 0.308 C 14.139 0.741 14.139 1.173 14.139 1.611 L 14.139 2.239 L 14.225 2.253 C 14.759 2.34 15.192 2.539 15.549 2.862 C 16.082 3.345 16.366 3.954 16.393 4.673 C 16.397 4.783 16.38 4.857 16.34 4.899 C 16.301 4.942 16.229 4.963 16.121 4.966 C 16.028 4.969 15.929 4.97 15.808 4.97 C 15.726 4.97 15.643 4.969 15.561 4.969 C 15.477 4.968 15.393 4.968 15.308 4.968 L 15.234 4.968 L 15.211 5.04 C 14.979 5.767 14.544 6.136 13.917 6.136 L 13.905 6.136 Z M 13.143 5.121 C 13.259 5.468 13.572 5.701 13.921 5.701 L 13.93 5.701 C 14.297 5.697 14.606 5.461 14.699 5.115 L 14.734 4.984 L 13.098 4.984 L 13.144 5.121 Z M 13.956 2.676 C 13.919 2.676 13.881 2.677 13.844 2.679 C 12.844 2.745 11.937 3.568 11.941 4.406 L 11.941 4.509 L 15.928 4.509 L 15.915 4.394 C 15.807 3.462 14.91 2.676 13.956 2.676 Z M 6.049 6.136 C 5.475 6.127 5.017 5.75 4.825 5.126 C 4.82 5.111 4.815 5.096 4.806 5.075 L 4.767 4.968 L 4.696 4.968 C 4.618 4.968 4.538 4.968 4.459 4.968 C 4.38 4.968 4.299 4.969 4.219 4.969 C 4.119 4.969 4.019 4.969 3.918 4.967 C 3.788 4.965 3.708 4.944 3.667 4.9 C 3.627 4.857 3.609 4.774 3.611 4.639 C 3.628 3.516 4.525 2.479 5.654 2.278 C 5.676 2.273 5.866 2.238 5.866 2.238 L 5.866 0.961 C 5.866 0.889 5.866 0.818 5.865 0.746 C 5.864 0.578 5.863 0.404 5.868 0.233 C 5.872 0.105 5.959 0 6.063 0 C 6.069 0 6.075 0 6.081 0.001 C 6.226 0.018 6.293 0.091 6.293 0.231 C 6.294 0.632 6.295 1.034 6.295 1.435 L 6.295 2.237 L 6.38 2.251 C 7.248 2.398 7.864 2.831 8.266 3.574 C 8.458 3.929 8.554 4.309 8.55 4.705 C 8.548 4.893 8.49 4.956 8.31 4.964 C 8.256 4.966 8.197 4.967 8.123 4.967 C 8.083 4.967 8.044 4.967 8.004 4.967 C 7.964 4.967 7.925 4.966 7.885 4.966 C 7.809 4.966 7.71 4.967 7.609 4.974 C 7.511 4.981 7.373 5.067 7.335 5.171 C 7.107 5.793 6.658 6.135 6.071 6.135 L 6.048 6.135 Z M 5.31 5.113 C 5.398 5.452 5.71 5.693 6.071 5.701 L 6.089 5.701 C 6.448 5.701 6.766 5.46 6.863 5.116 L 6.9 4.984 L 5.277 4.984 L 5.31 5.114 Z M 6.061 2.676 C 5.085 2.676 4.183 3.464 4.091 4.397 L 4.08 4.51 L 8.069 4.51 L 8.067 4.404 C 8.049 3.542 7.127 2.718 6.133 2.677 C 6.109 2.676 6.085 2.675 6.061 2.675 Z" fill="var(--syh4gt, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="21.53846193141915px" id="gsoP62jqo" transform="translate(0 -1)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (sa = b((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? _(S.div, { ...a, layoutId: r, ref: t }) : _(`div`, { ...a, ref: t });
      })),
      (ca = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        KauUhsWc0:
          e ??
          i.KauUhsWc0 ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (la = R(
        b(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, KauUhsWc0: o, ...s } = ca(e);
          return _(sa, {
            ...s,
            className: F(`framer-Ojqip`, r),
            layoutId: i,
            ref: t,
            style: { "--syh4gt": o, ...n },
          });
        }),
        [
          `.framer-Ojqip { -webkit-mask: ${oa}; aspect-ratio: 1; background-color: var(--syh4gt); mask: ${oa}; width: 20px; }`,
        ],
        `framer-Ojqip`,
      )),
      (la.displayName = `Kitchen`),
      L(la, {
        KauUhsWc0: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: G.Color,
        },
      }));
  });
function da(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka = e(() => {
    (v(),
      z(),
      A(),
      p(),
      Ke(),
      We(),
      ua(),
      st(),
      Ct(),
      (fa = V(wt)),
      (pa = V(lt)),
      (ma = Ae(lt)),
      (ha = we(lt)),
      (ga = [`RdvACMOnz`, `ScrNr4C1z`, `NkUI_UbMz`, `VO8QDCwMC`]),
      (_a = `framer-tClvd`),
      (va = {
        NkUI_UbMz: `framer-v-1f893sh`,
        RdvACMOnz: `framer-v-nac5ny`,
        ScrNr4C1z: `framer-v-1swm6lz`,
        VO8QDCwMC: `framer-v-b8t153`,
      }),
      (ya = { delay: 0, duration: 0.2, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (ba = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      }),
      (xa = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sa = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Ca = {
        "Mobile close": `NkUI_UbMz`,
        "Mobile open": `ScrNr4C1z`,
        Left: `RdvACMOnz`,
        Right: `VO8QDCwMC`,
      }),
      (wa = S.create(s)),
      (Ta = (e, t) => {
        let [n, r] = c(e),
          [i, a] = c(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Ea = ({
        buttonTitle: e,
        click: t,
        description1: n,
        height: r,
        icon1: i,
        id: a,
        title1: o,
        video: s,
        width: c,
        ...l
      }) => ({
        ...l,
        DaqFB1spx: t ?? l.DaqFB1spx,
        EqTcJ4lky: o ?? l.EqTcJ4lky ?? `Kitchen Remodeling`,
        HZw8Qq9dq: e ?? l.HZw8Qq9dq ?? `See all Projects`,
        OfAyE6zWD: i ?? l.OfAyE6zWD ?? la,
        qDjNYUIrn:
          n ??
          l.qDjNYUIrn ??
          `Transform your kitchen with custom cabinets, modern layouts, and premium finishes designed for everyday living.`,
        VaEUkoENA:
          s ??
          l.VaEUkoENA ??
          `https://framerusercontent.com/assets/blStY8mHmSGteHjFXhNamGG2p2M.mp4`,
        variant: Ca[l.variant] ?? l.variant ?? `RdvACMOnz`,
      })),
      (Da = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Oa = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: c } = De(),
            l = _e(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              OfAyE6zWD: m,
              EqTcJ4lky: h,
              qDjNYUIrn: g,
              DaqFB1spx: v,
              VaEUkoENA: b,
              HZw8Qq9dq: x,
              onHZw8Qq9dqChange: C,
              ...te
            } = Ea(e),
            [ne, w] = Ta(x, C),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = ce({
              cycleOrder: ga,
              defaultVariant: `RdvACMOnz`,
              ref: i,
              variant: p,
              variantClassNames: va,
            }),
            N = Da(e, M),
            { activeVariantCallback: P, delay: ae } = Ce(T),
            oe = P(async (...e) => {
              if ((A({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            se = F(_a, Ye, Ge),
            I = () => T !== `NkUI_UbMz`;
          return (
            ye(),
            _(k, {
              id: f ?? a,
              children: _(wa, {
                animate: M,
                initial: !1,
                children: _(Sa, {
                  value: ya,
                  children: y(S.div, {
                    ...te,
                    ...O,
                    className: F(se, `framer-nac5ny`, d, E),
                    "data-framer-name": `Left`,
                    "data-highlight": !0,
                    layoutDependency: N,
                    layoutId: `RdvACMOnz`,
                    onTap: oe,
                    ref: i,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      boxShadow: `none`,
                      ...u,
                    },
                    variants: {
                      NkUI_UbMz: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        boxShadow: `none`,
                      },
                      ScrNr4C1z: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        boxShadow: `0px 0px 0px 1px var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                      },
                      VO8QDCwMC: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        boxShadow: `none`,
                      },
                    },
                    ...da(
                      {
                        NkUI_UbMz: { "data-border": !0, "data-framer-name": `Mobile close` },
                        ScrNr4C1z: { "data-framer-name": `Mobile open` },
                        VO8QDCwMC: { "data-framer-name": `Right` },
                      },
                      T,
                      re,
                    ),
                    children: [
                      y(S.div, {
                        className: `framer-19u51tf`,
                        "data-border": !0,
                        "data-framer-name": `Details`,
                        layoutDependency: N,
                        layoutId: `otk1KuoL2`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        variants: {
                          NkUI_UbMz: { "--border-right-width": `0px` },
                          ScrNr4C1z: { "--border-right-width": `0px` },
                          VO8QDCwMC: {
                            "--border-left-width": `1px`,
                            "--border-right-width": `0px`,
                          },
                        },
                        children: [
                          y(S.div, {
                            className: `framer-1t26waq`,
                            "data-border": !0,
                            "data-framer-name": `Title`,
                            layoutDependency: N,
                            layoutId: `u6XMWzYk3`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            variants: { NkUI_UbMz: { "--border-bottom-width": `0px` } },
                            children: [
                              _(fe, {
                                animated: !0,
                                className: `framer-1envj8o`,
                                Component: m,
                                layoutDependency: N,
                                layoutId: `z0W997D9N`,
                                style: {
                                  "--syh4gt": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(10, 10, 10))`,
                                },
                              }),
                              _(W, {
                                __fromCanvasComponent: !0,
                                children: _(s, {
                                  children: _(S.h3, {
                                    className: `framer-styles-preset-1pr57h3`,
                                    "data-styles-preset": `hMoFYBqBy`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0)))`,
                                    },
                                    children: `Kitchen Remodeling`,
                                  }),
                                }),
                                className: `framer-1il4qad`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `QPHC0juUA`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: h,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...da(
                                  {
                                    NkUI_UbMz: {
                                      children: _(s, {
                                        children: _(S.h3, {
                                          className: `framer-styles-preset-1pr57h3`,
                                          "data-styles-preset": `hMoFYBqBy`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0)))`,
                                          },
                                          children: `Kitchen Remodeling`,
                                        }),
                                      }),
                                    },
                                    ScrNr4C1z: {
                                      children: _(s, {
                                        children: _(S.h3, {
                                          className: `framer-styles-preset-1pr57h3`,
                                          "data-styles-preset": `hMoFYBqBy`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-1c069d64-0f1a-4cad-8d59-fde7488a587a, rgb(0, 0, 0)))`,
                                          },
                                          children: `Kitchen Remodeling`,
                                        }),
                                      }),
                                    },
                                  },
                                  T,
                                  re,
                                ),
                              }),
                            ],
                          }),
                          I() &&
                            _(W, {
                              __fromCanvasComponent: !0,
                              children: _(s, {
                                children: _(S.p, {
                                  className: `framer-styles-preset-piej36`,
                                  "data-styles-preset": `kzFJG5mqZ`,
                                  dir: `auto`,
                                  children: `Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.`,
                                }),
                              }),
                              className: `framer-wrbh73`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `VmvJHEAi5`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          I() &&
                            _(S.div, {
                              className: `framer-1retxq5`,
                              "data-framer-name": `Description`,
                              layoutDependency: N,
                              layoutId: `SQscrPOyU`,
                              children: _(le, {
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
                                  _(U, {
                                    height: 52,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      (0 * (((l?.height || 331) - 0 - 0) / 1) + 0) +
                                      32 +
                                      (((((l?.height || 331) - 0 - 0) / 1) * 1 +
                                        0 -
                                        64 -
                                        (176 +
                                          Math.max(
                                            0,
                                            ((((l?.height || 331) - 0 - 0) / 1) * 1 +
                                              0 -
                                              64 -
                                              224) /
                                              1,
                                          ) *
                                            1 +
                                          48)) /
                                        2 +
                                        176 +
                                        48) +
                                      32 +
                                      (Math.max(
                                        0,
                                        ((((l?.height || 331) - 0 - 0) / 1) * 1 + 0 - 64 - 224) / 1,
                                      ) *
                                        1 -
                                        32 -
                                        52 +
                                        0 +
                                        0),
                                    ...da(
                                      { ScrNr4C1z: { y: (l?.y || 0) + 0 + 0 + 24 + 224 + 0 + 0 } },
                                      T,
                                      re,
                                    ),
                                    children: _(ve, {
                                      className: `framer-1aqk2h-container`,
                                      layoutDependency: N,
                                      layoutId: `rp4QW4yzE-container`,
                                      nodeId: `rp4QW4yzE`,
                                      rendersWithMotion: !0,
                                      scopeId: `IFFKhhAfL`,
                                      whileHover: ba,
                                      children: _(wt, {
                                        AmmV7xj6g: 33,
                                        BgmIAzzRV: `30px`,
                                        DbOmokZP0: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                        EDzxvbp5Q: `8px 8px 8px 20px`,
                                        F9xEnRksX: `one`,
                                        Ftd7ea6ZK: 90,
                                        GmXdHB9SX: !0,
                                        h_OXotjfD: 12,
                                        height: `100%`,
                                        id: `rp4QW4yzE`,
                                        layoutId: `rp4QW4yzE`,
                                        LWV7WvkSz: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                        n7FNYiflu: 2e3,
                                        onqcTsc8aEMChange: w,
                                        ooNLd407F: 100,
                                        qcTsc8aEM: ne,
                                        qNjswW_Tg: e[0],
                                        s8XHH4TvL: 4,
                                        ucHarSLTi: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        width: `100%`,
                                        Z_ma24kbm: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                        ...da(
                                          {
                                            ScrNr4C1z: { qNjswW_Tg: e[1] },
                                            VO8QDCwMC: { qNjswW_Tg: e[2] },
                                          },
                                          T,
                                          re,
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            }),
                        ],
                      }),
                      I() &&
                        _(U, {
                          height: (((l?.height || 331) - 0 - 0) / 1) * 1 + 0,
                          width: `max(${l?.width || `100vw`} / 2, 50px)`,
                          y: (l?.y || 0) + 0 + (0 * (((l?.height || 331) - 0 - 0) / 1) + 0),
                          ...da(
                            {
                              ScrNr4C1z: {
                                height: 228,
                                width: l?.width || `100vw`,
                                y: (l?.y || 0) + 0 + 324,
                              },
                            },
                            T,
                            re,
                          ),
                          children: _(ve, {
                            className: `framer-4nx753-container`,
                            layoutDependency: N,
                            layoutId: `UMHkE98za-container`,
                            nodeId: `UMHkE98za`,
                            rendersWithMotion: !0,
                            scopeId: `IFFKhhAfL`,
                            children: _(ma, {
                              __framer__animateOnce: !0,
                              __framer__obscuredVariantId: `VKVeyMLqc`,
                              __framer__threshold: 0.5,
                              __framer__variantAppearEffectEnabled: !0,
                              __framer__visibleVariantId: `LaRV5dLIS`,
                              Ec3MabikA: b,
                              height: `100%`,
                              id: `UMHkE98za`,
                              layoutId: `UMHkE98za`,
                              style: { height: `100%`, width: `100%` },
                              variant: xa(`VKVeyMLqc`),
                              width: `100%`,
                              Zoazf7w1d: `0px`,
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
          `.framer-tClvd.framer-c2xn4, .framer-tClvd .framer-c2xn4 { display: block; }`,
          `.framer-tClvd.framer-nac5ny { cursor: pointer; display: grid; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 331px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 938px; }`,
          `.framer-tClvd .framer-19u51tf { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: center; justify-self: start; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
          `.framer-tClvd .framer-1t26waq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 16px 0px; position: relative; width: 100%; }`,
          `.framer-tClvd .framer-1envj8o { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 31px; }`,
          `.framer-tClvd .framer-1il4qad { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-tClvd .framer-wrbh73 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 500px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-tClvd .framer-1retxq5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-end; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-tClvd .framer-1aqk2h-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
          `.framer-tClvd .framer-4nx753-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; z-index: 1; }`,
          `.framer-tClvd.framer-v-1swm6lz.framer-nac5ny { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-19u51tf { align-self: unset; height: min-content; order: 0; padding: 24px 16px 0px 16px; }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-1t26waq { z-index: 2; }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-1envj8o, .framer-tClvd.framer-v-1f893sh .framer-1envj8o { width: 30px; }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-1il4qad, .framer-tClvd.framer-v-1f893sh .framer-1il4qad { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-1retxq5 { flex: none; gap: 16px; height: min-content; justify-content: center; padding: 0px; }`,
          `.framer-tClvd.framer-v-1swm6lz .framer-4nx753-container { align-self: unset; aspect-ratio: 1.5701754385964912 / 1; height: auto; order: 1; }`,
          `.framer-tClvd.framer-v-1f893sh.framer-nac5ny { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: flex-start; overflow: hidden; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tClvd.framer-v-1f893sh .framer-19u51tf { align-self: unset; height: min-content; order: 1; padding: 0px; }`,
          `.framer-tClvd.framer-v-1f893sh .framer-1t26waq { padding: 16px; z-index: 2; }`,
          `.framer-tClvd.framer-v-b8t153 .framer-19u51tf { order: 1; }`,
          `.framer-tClvd.framer-v-b8t153 .framer-4nx753-container { order: 0; }`,
          ...qe,
          ...Ue,
          `.framer-tClvd[data-border="true"]::after, .framer-tClvd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-tClvd`,
      )),
      (Oa.displayName = `Card/Service 3 details`),
      (Oa.defaultProps = { height: 331, width: 938 }),
      L(Oa, {
        variant: {
          options: [`RdvACMOnz`, `ScrNr4C1z`, `NkUI_UbMz`, `VO8QDCwMC`],
          optionTitles: [`Left`, `Mobile open`, `Mobile close`, `Right`],
          title: `Variant`,
          type: G.Enum,
        },
        OfAyE6zWD: {
          defaultValue: {
            identifier: `local-module:vector/E9ET0ShUK:default`,
            moduleId: `xjrZRlqlUQljhAe5l07y`,
          },
          setModuleId: `gIz5U9Hgv7MGXSouJUCa`,
          title: `Icon 1`,
          type: G.VectorSetItem,
        },
        EqTcJ4lky: { defaultValue: `Kitchen Remodeling`, title: `Title 1`, type: G.String },
        onEqTcJ4lkyChange: { changes: `EqTcJ4lky`, type: G.ChangeHandler },
        qDjNYUIrn: {
          defaultValue: `Transform your kitchen with custom cabinets, modern layouts, and premium finishes designed for everyday living.`,
          displayTextArea: !0,
          title: `Description 1`,
          type: G.String,
        },
        onqDjNYUIrnChange: { changes: `qDjNYUIrn`, type: G.ChangeHandler },
        DaqFB1spx: { title: `Click`, type: G.EventHandler },
        VaEUkoENA: ha?.Ec3MabikA && {
          ...ha.Ec3MabikA,
          __defaultAssetReference: `data:framer/asset-reference,blStY8mHmSGteHjFXhNamGG2p2M.mp4?originalFilename=Services+Video+1.mp4&width=1280&height=720`,
          description: void 0,
          hidden: void 0,
          title: `Video`,
        },
        onVaEUkoENAChange: { changes: `VaEUkoENA`, type: G.ChangeHandler },
        HZw8Qq9dq: {
          defaultValue: `See all Projects`,
          displayTextArea: !1,
          title: `Button title`,
          type: G.String,
        },
        onHZw8Qq9dqChange: { changes: `HZw8Qq9dq`, type: G.ChangeHandler },
      }),
      I(
        Oa,
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
          ...fa,
          ...pa,
          ...P(Je),
          ...P(He),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Oa.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([B(wt, {}, t), B(lt, {}, t)])),
      }));
  });
function Aa(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  Z,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja = e(() => {
    (v(),
      z(),
      A(),
      p(),
      J(),
      aa(),
      ka(),
      st(),
      (ja = V(ia)),
      (Ma = V(Oa)),
      (Na = [
        `mkg7pPB_v`,
        `fKwoUogGN`,
        `gvv8cKZXO`,
        `K6DEpp6xY`,
        `GnJr0nHu5`,
        `R2xF02fE3`,
        `V0rWvDvs_`,
        `bRQNFVDmm`,
      ]),
      (Pa = `framer-Cibzq`),
      (Fa = {
        bRQNFVDmm: `framer-v-5l5nm4`,
        fKwoUogGN: `framer-v-1x0jajj`,
        GnJr0nHu5: `framer-v-11uu2x7`,
        gvv8cKZXO: `framer-v-v1a2ki`,
        K6DEpp6xY: `framer-v-1pjphet`,
        mkg7pPB_v: `framer-v-1xb6h6x`,
        R2xF02fE3: `framer-v-198fmt0`,
        V0rWvDvs_: `framer-v-14viicp`,
      }),
      (Ia = { delay: 0, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (La = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Ra = () => ({
        from: { alias: `bQzgNIdNx`, data: Ve, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `bQzgNIdNx`, name: `Z1iXxNk5g`, type: `Identifier` },
          { collection: `bQzgNIdNx`, name: `n0ylAKA_g`, type: `Identifier` },
          { collection: `bQzgNIdNx`, name: `HHmKa2nv4`, type: `Identifier` },
          { collection: `bQzgNIdNx`, name: `bBe_OPEAl`, type: `Identifier` },
          { collection: `bQzgNIdNx`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `bQzgNIdNx`, name: `id`, type: `Identifier` },
        ],
      })),
      (za = ({ query: e, pageSize: t, children: n }) => n(be(e))),
      (Ba = () => ({
        from: { alias: `ZKIF8hebq`, data: Ve, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `ZKIF8hebq`, name: `N8kePtcLc`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `Z1iXxNk5g`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `YaeLW62F_`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `Gws4tOh2w`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `jbX2Dvqv8`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `l1dcydvhc`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `n0ylAKA_g`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `YORy5ACjh`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `vm85lOdv1`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `DY51FoYFE`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `HHmKa2nv4`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `rhcHqn0Ql`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `q0UQKxGgk`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `bBe_OPEAl`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `uo0Lnn6J4`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `DNLONDBp6`, type: `Identifier` },
          { collection: `ZKIF8hebq`, name: `id`, type: `Identifier` },
        ],
      })),
      (Va = ({ value: e, children: t }) => {
        let n = l(D),
          r = e ?? n.transition,
          i = u(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(D.Provider, { value: i, children: t });
      }),
      (Ha = {
        "Mobile 2": `R2xF02fE3`,
        "Mobile 3": `V0rWvDvs_`,
        "Mobile 4": `bRQNFVDmm`,
        "Service 1": `mkg7pPB_v`,
        "Service 2": `fKwoUogGN`,
        "Service 3": `gvv8cKZXO`,
        "Service 4": `K6DEpp6xY`,
        Mobile: `GnJr0nHu5`,
      }),
      (Ua = S.create(s)),
      (Wa = { Horizontal: `row`, Vertical: `column` }),
      (Ga = ({ direction: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        rhfwKYWKX: Wa[e] ?? e ?? i.rhfwKYWKX ?? `row`,
        variant: Ha[i.variant] ?? i.variant ?? `mkg7pPB_v`,
      })),
      (Ka = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qa = R(
        b(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = De(),
            c = _e(),
            { style: l, className: u, layoutId: d, variant: f, rhfwKYWKX: p, ...m } = Ga(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: te,
              setGestureState: ne,
              setVariant: w,
              variants: T,
            } = ce({
              cycleOrder: Na,
              defaultVariant: `mkg7pPB_v`,
              ref: i,
              variant: f,
              variantClassNames: Fa,
            }),
            E = Ka(e, T),
            { activeVariantCallback: D, delay: O } = Ce(g),
            re = D(async (...e) => {
              w(`mkg7pPB_v`);
            }),
            ie = D(async (...e) => {
              w(`fKwoUogGN`);
            }),
            A = D(async (...e) => {
              w(`gvv8cKZXO`);
            }),
            j = D(async (...e) => {
              w(`K6DEpp6xY`);
            }),
            N = D(async (...e) => {
              w(`GnJr0nHu5`);
            }),
            P = D(async (...e) => {
              w(`R2xF02fE3`);
            }),
            ae = D(async (...e) => {
              w(`V0rWvDvs_`);
            }),
            oe = D(async (...e) => {
              w(`bRQNFVDmm`);
            }),
            se = F(Pa),
            I = () => ![`GnJr0nHu5`, `R2xF02fE3`, `V0rWvDvs_`, `bRQNFVDmm`].includes(g),
            L = (e) => ([`GnJr0nHu5`, `R2xF02fE3`, `V0rWvDvs_`, `bRQNFVDmm`].includes(g) ? e : !1);
          return _(k, {
            id: d ?? a,
            children: _(Ua, {
              animate: T,
              initial: !1,
              children: _(Va, {
                value: Ia,
                children: y(S.div, {
                  ...m,
                  ...x,
                  className: F(se, `framer-1xb6h6x`, u, v),
                  "data-framer-name": `Service 1`,
                  layoutDependency: E,
                  layoutId: `mkg7pPB_v`,
                  ref: i,
                  style: { ...l },
                  ...Aa(
                    {
                      bRQNFVDmm: { "data-framer-name": `Mobile 4` },
                      fKwoUogGN: { "data-framer-name": `Service 2` },
                      GnJr0nHu5: { "data-framer-name": `Mobile` },
                      gvv8cKZXO: { "data-framer-name": `Service 3` },
                      K6DEpp6xY: { "data-framer-name": `Service 4` },
                      R2xF02fE3: { "data-framer-name": `Mobile 2` },
                      V0rWvDvs_: { "data-framer-name": `Mobile 3` },
                    },
                    g,
                    C,
                  ),
                  children: [
                    I() &&
                      _(S.div, {
                        className: `framer-19l195d`,
                        layoutDependency: E,
                        layoutId: `bQzgNIdNx`,
                        children: _(xe, {
                          children: _(za, {
                            query: Ra(),
                            children: (e, t, n) =>
                              _(h, {
                                children: e?.map(
                                  (
                                    {
                                      bBe_OPEAl: e,
                                      DNLONDBp6: t,
                                      HHmKa2nv4: n,
                                      id: r,
                                      n0ylAKA_g: i,
                                      Z1iXxNk5g: a,
                                    },
                                    o,
                                  ) => {
                                    ((a ??= ``), (i ??= ``), (n ??= ``), (e ??= ``), (t ??= ``));
                                    let s = La(n),
                                      l = La(e);
                                    return _(
                                      k,
                                      {
                                        id: `bQzgNIdNx-${r}`,
                                        children: _(M.Provider, {
                                          value: { DNLONDBp6: t },
                                          children: y(S.div, {
                                            className: `framer-gve1y6`,
                                            "data-framer-name": `Services`,
                                            layoutDependency: E,
                                            layoutId: `DWTpSIsLo`,
                                            style: {
                                              "--18l0xta": p === `column` ? void 0 : `1 0 0px`,
                                              "--1r8n1c0": p === `column` ? `100%` : `1px`,
                                              "--y6xi9c": p,
                                            },
                                            children: [
                                              _(U, {
                                                width:
                                                  p === `row`
                                                    ? `max((${c?.width || `100vw`} - 12px) / 2, 1px)`
                                                    : c?.width || `100vw`,
                                                children: _(ve, {
                                                  className: `framer-ko3uc9-container`,
                                                  layoutDependency: E,
                                                  layoutId: `uy8ofA0b3-container`,
                                                  nodeId: `uy8ofA0b3`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `x_2PP9E32`,
                                                  children: _(ia, {
                                                    height: `100%`,
                                                    id: `uy8ofA0b3`,
                                                    layoutId: `uy8ofA0b3`,
                                                    n0ba3iDRb: re,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: Z(`Uq6opYUNr`),
                                                    w0rfEBtdt: a,
                                                    width: `100%`,
                                                    Y6JSAJ9Ob: {
                                                      borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 1,
                                                    },
                                                    ...Aa(
                                                      {
                                                        fKwoUogGN: { variant: Z(`iOvudjQxx`) },
                                                        gvv8cKZXO: { variant: Z(`iOvudjQxx`) },
                                                        K6DEpp6xY: { variant: Z(`iOvudjQxx`) },
                                                      },
                                                      g,
                                                      C,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                              _(U, {
                                                width:
                                                  p === `row`
                                                    ? `max((${c?.width || `100vw`} - 12px) / 2, 1px)`
                                                    : c?.width || `100vw`,
                                                children: _(ve, {
                                                  className: `framer-1ofxkfw-container`,
                                                  layoutDependency: E,
                                                  layoutId: `tXSPzsiaB-container`,
                                                  nodeId: `tXSPzsiaB`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `x_2PP9E32`,
                                                  children: _(ia, {
                                                    height: `100%`,
                                                    id: `tXSPzsiaB`,
                                                    layoutId: `tXSPzsiaB`,
                                                    n0ba3iDRb: ie,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: Z(`iOvudjQxx`),
                                                    w0rfEBtdt: i,
                                                    width: `100%`,
                                                    Y6JSAJ9Ob: {
                                                      borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                                      borderStyle: `solid`,
                                                      borderWidth: 1,
                                                    },
                                                    ...Aa(
                                                      { fKwoUogGN: { variant: Z(`Uq6opYUNr`) } },
                                                      g,
                                                      C,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                              s !== !1 &&
                                                _(U, {
                                                  width:
                                                    p === `row`
                                                      ? `max((${c?.width || `100vw`} - 12px) / 2, 1px)`
                                                      : c?.width || `100vw`,
                                                  children: _(ve, {
                                                    className: `framer-16s6pyt-container`,
                                                    layoutDependency: E,
                                                    layoutId: `hNJijvpbY-container`,
                                                    nodeId: `hNJijvpbY`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `x_2PP9E32`,
                                                    children: _(ia, {
                                                      height: `100%`,
                                                      id: `hNJijvpbY`,
                                                      layoutId: `hNJijvpbY`,
                                                      n0ba3iDRb: A,
                                                      style: { height: `100%`, width: `100%` },
                                                      variant: Z(`iOvudjQxx`),
                                                      w0rfEBtdt: n,
                                                      width: `100%`,
                                                      Y6JSAJ9Ob: {
                                                        borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                      },
                                                      ...Aa(
                                                        { gvv8cKZXO: { variant: Z(`Uq6opYUNr`) } },
                                                        g,
                                                        C,
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              l !== !1 &&
                                                _(U, {
                                                  width:
                                                    p === `row`
                                                      ? `max((${c?.width || `100vw`} - 12px) / 2, 1px)`
                                                      : c?.width || `100vw`,
                                                  children: _(ve, {
                                                    className: `framer-1lsjwo-container`,
                                                    layoutDependency: E,
                                                    layoutId: `lZ1zNA9uX-container`,
                                                    nodeId: `lZ1zNA9uX`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `x_2PP9E32`,
                                                    children: _(ia, {
                                                      height: `100%`,
                                                      id: `lZ1zNA9uX`,
                                                      layoutId: `lZ1zNA9uX`,
                                                      n0ba3iDRb: j,
                                                      style: { height: `100%`, width: `100%` },
                                                      variant: Z(`iOvudjQxx`),
                                                      w0rfEBtdt: e,
                                                      width: `100%`,
                                                      Y6JSAJ9Ob: {
                                                        borderColor: `var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, rgb(209, 209, 209))`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                      },
                                                      ...Aa(
                                                        { K6DEpp6xY: { variant: Z(`Uq6opYUNr`) } },
                                                        g,
                                                        C,
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                            ],
                                          }),
                                        }),
                                      },
                                      r,
                                    );
                                  },
                                ),
                              }),
                          }),
                        }),
                      }),
                    _(S.div, {
                      className: `framer-139be8y`,
                      layoutDependency: E,
                      layoutId: `ZKIF8hebq`,
                      style: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        boxShadow: `0px 0px 0px 1px var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                      },
                      variants: {
                        bRQNFVDmm: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                          boxShadow: `none`,
                        },
                        GnJr0nHu5: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                          boxShadow: `none`,
                        },
                        R2xF02fE3: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                          boxShadow: `none`,
                        },
                        V0rWvDvs_: {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                          boxShadow: `none`,
                        },
                      },
                      children: _(xe, {
                        children: _(za, {
                          query: Ba(),
                          children: (e, t, n) =>
                            _(h, {
                              children: e?.map(
                                (
                                  {
                                    bBe_OPEAl: e,
                                    DNLONDBp6: t,
                                    DY51FoYFE: n,
                                    Gws4tOh2w: r,
                                    HHmKa2nv4: i,
                                    id: a,
                                    jbX2Dvqv8: o,
                                    l1dcydvhc: s,
                                    n0ylAKA_g: l,
                                    N8kePtcLc: u,
                                    q0UQKxGgk: d,
                                    rhcHqn0Ql: f,
                                    uo0Lnn6J4: p,
                                    vm85lOdv1: m,
                                    YaeLW62F_: ee,
                                    YORy5ACjh: h,
                                    Z1iXxNk5g: v,
                                  },
                                  b,
                                ) => {
                                  ((v ??= ``),
                                    (ee ??= ``),
                                    (o ??= ``),
                                    (l ??= ``),
                                    (h ??= ``),
                                    (i ??= ``),
                                    (f ??= ``),
                                    (e ??= ``),
                                    (p ??= ``),
                                    (t ??= ``));
                                  let x = La(l),
                                    te = La(i),
                                    ne = La(e);
                                  return _(
                                    k,
                                    {
                                      id: `ZKIF8hebq-${a}`,
                                      children: _(M.Provider, {
                                        value: { DNLONDBp6: t },
                                        children: y(S.div, {
                                          className: `framer-1qu1i3i`,
                                          "data-border": !0,
                                          layoutDependency: E,
                                          layoutId: `d6_EKwpyV`,
                                          style: {
                                            "--border-bottom-width": `0px`,
                                            "--border-color": `var(--token-83576c6d-486a-4974-ab02-7017628e9739, rgb(150, 128, 113))`,
                                            "--border-left-width": `0px`,
                                            "--border-right-width": `1px`,
                                            "--border-style": `solid`,
                                            "--border-top-width": `0px`,
                                          },
                                          variants: {
                                            bRQNFVDmm: { "--border-right-width": `0px` },
                                            GnJr0nHu5: { "--border-right-width": `0px` },
                                            R2xF02fE3: { "--border-right-width": `0px` },
                                            V0rWvDvs_: { "--border-right-width": `0px` },
                                          },
                                          children: [
                                            _(U, {
                                              height: 376,
                                              width: `max(${c?.width || `100vw`}, 1px)`,
                                              ...Aa(
                                                {
                                                  bRQNFVDmm: {
                                                    height: 331,
                                                    width: c?.width || `100vw`,
                                                    y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 173.5,
                                                  },
                                                  GnJr0nHu5: {
                                                    height: 331,
                                                    width: c?.width || `100vw`,
                                                    y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 173.5,
                                                  },
                                                  R2xF02fE3: {
                                                    height: 331,
                                                    width: c?.width || `100vw`,
                                                    y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 173.5,
                                                  },
                                                  V0rWvDvs_: {
                                                    height: 331,
                                                    width: c?.width || `100vw`,
                                                    y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 173.5,
                                                  },
                                                },
                                                g,
                                                C,
                                              ),
                                              children: _(ve, {
                                                className: `framer-19z8g5-container`,
                                                layoutDependency: E,
                                                layoutId: `Q4DokoGOF-container`,
                                                nodeId: `Q4DokoGOF`,
                                                rendersWithMotion: !0,
                                                scopeId: `x_2PP9E32`,
                                                children: _(Oa, {
                                                  EqTcJ4lky: v,
                                                  height: `100%`,
                                                  HZw8Qq9dq: o,
                                                  id: `Q4DokoGOF`,
                                                  layoutId: `Q4DokoGOF`,
                                                  OfAyE6zWD: u,
                                                  qDjNYUIrn: ee,
                                                  style: { height: `100%`, width: `100%` },
                                                  VaEUkoENA: r,
                                                  variant: Z(`RdvACMOnz`),
                                                  width: `100%`,
                                                  ...Aa(
                                                    {
                                                      bRQNFVDmm: {
                                                        DaqFB1spx: N,
                                                        style: { width: `100%` },
                                                        variant: Z(`NkUI_UbMz`),
                                                      },
                                                      fKwoUogGN: {
                                                        EqTcJ4lky: l,
                                                        OfAyE6zWD: s,
                                                        qDjNYUIrn: h,
                                                        VaEUkoENA: m,
                                                        variant: Z(`VO8QDCwMC`),
                                                      },
                                                      GnJr0nHu5: {
                                                        style: { width: `100%` },
                                                        variant: Z(`ScrNr4C1z`),
                                                      },
                                                      gvv8cKZXO: {
                                                        EqTcJ4lky: i,
                                                        OfAyE6zWD: n,
                                                        qDjNYUIrn: f,
                                                      },
                                                      K6DEpp6xY: {
                                                        EqTcJ4lky: e,
                                                        OfAyE6zWD: d,
                                                        qDjNYUIrn: p,
                                                      },
                                                      R2xF02fE3: {
                                                        DaqFB1spx: N,
                                                        style: { width: `100%` },
                                                        variant: Z(`NkUI_UbMz`),
                                                      },
                                                      V0rWvDvs_: {
                                                        DaqFB1spx: N,
                                                        style: { width: `100%` },
                                                        variant: Z(`NkUI_UbMz`),
                                                      },
                                                    },
                                                    g,
                                                    C,
                                                  ),
                                                }),
                                              }),
                                            }),
                                            L(x !== !1) &&
                                              _(U, {
                                                ...Aa(
                                                  {
                                                    bRQNFVDmm: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    GnJr0nHu5: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    R2xF02fE3: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    V0rWvDvs_: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                  },
                                                  g,
                                                  C,
                                                ),
                                                children: _(ve, {
                                                  className: `framer-rx5a0-container`,
                                                  layoutDependency: E,
                                                  layoutId: `HscRPYigi-container`,
                                                  nodeId: `HscRPYigi`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `x_2PP9E32`,
                                                  children: _(Oa, {
                                                    DaqFB1spx: P,
                                                    EqTcJ4lky: l,
                                                    height: `100%`,
                                                    HZw8Qq9dq: o,
                                                    id: `HscRPYigi`,
                                                    layoutId: `HscRPYigi`,
                                                    OfAyE6zWD: s,
                                                    qDjNYUIrn: h,
                                                    style: { width: `100%` },
                                                    VaEUkoENA: m,
                                                    variant: Z(`NkUI_UbMz`),
                                                    width: `100%`,
                                                    ...Aa(
                                                      { R2xF02fE3: { variant: Z(`ScrNr4C1z`) } },
                                                      g,
                                                      C,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                            L(te !== !1) &&
                                              _(U, {
                                                ...Aa(
                                                  {
                                                    bRQNFVDmm: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    GnJr0nHu5: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    R2xF02fE3: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    V0rWvDvs_: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                  },
                                                  g,
                                                  C,
                                                ),
                                                children: _(ve, {
                                                  className: `framer-17zwfjo-container`,
                                                  layoutDependency: E,
                                                  layoutId: `ZjEIVXXM7-container`,
                                                  nodeId: `ZjEIVXXM7`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `x_2PP9E32`,
                                                  children: _(Oa, {
                                                    DaqFB1spx: ae,
                                                    EqTcJ4lky: i,
                                                    height: `100%`,
                                                    HZw8Qq9dq: `See all Projects`,
                                                    id: `ZjEIVXXM7`,
                                                    layoutId: `ZjEIVXXM7`,
                                                    OfAyE6zWD: n,
                                                    qDjNYUIrn: f,
                                                    style: { width: `100%` },
                                                    variant: Z(`NkUI_UbMz`),
                                                    width: `100%`,
                                                    ...Aa(
                                                      { V0rWvDvs_: { variant: Z(`ScrNr4C1z`) } },
                                                      g,
                                                      C,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                            L(ne !== !1) &&
                                              _(U, {
                                                ...Aa(
                                                  {
                                                    bRQNFVDmm: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    GnJr0nHu5: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    R2xF02fE3: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                    V0rWvDvs_: {
                                                      height: 331,
                                                      width: c?.width || `100vw`,
                                                      y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 520.5,
                                                    },
                                                  },
                                                  g,
                                                  C,
                                                ),
                                                children: _(ve, {
                                                  className: `framer-sp7mlb-container`,
                                                  layoutDependency: E,
                                                  layoutId: `nE5_K7TI1-container`,
                                                  nodeId: `nE5_K7TI1`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `x_2PP9E32`,
                                                  children: _(Oa, {
                                                    DaqFB1spx: oe,
                                                    EqTcJ4lky: e,
                                                    height: `100%`,
                                                    HZw8Qq9dq: `See all Projects`,
                                                    id: `nE5_K7TI1`,
                                                    layoutId: `nE5_K7TI1`,
                                                    OfAyE6zWD: d,
                                                    qDjNYUIrn: p,
                                                    style: { width: `100%` },
                                                    variant: Z(`NkUI_UbMz`),
                                                    width: `100%`,
                                                    ...Aa(
                                                      { bRQNFVDmm: { variant: Z(`ScrNr4C1z`) } },
                                                      g,
                                                      C,
                                                    ),
                                                  }),
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                    },
                                    a,
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
          });
        }),
        [
          `.framer-Cibzq.framer-f5925, .framer-Cibzq .framer-f5925 { display: block; }`,
          `.framer-Cibzq.framer-1xb6h6x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1151px; }`,
          `.framer-Cibzq .framer-19l195d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Cibzq .framer-gve1y6 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: var(--y6xi9c); flex-wrap: nowrap; gap: 0px 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 4; }`,
          `.framer-Cibzq .framer-ko3uc9-container, .framer-Cibzq .framer-1ofxkfw-container, .framer-Cibzq .framer-16s6pyt-container, .framer-Cibzq .framer-1lsjwo-container { flex: var(--18l0xta); height: 100%; position: relative; width: var(--1r8n1c0); }`,
          `.framer-Cibzq .framer-139be8y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Cibzq .framer-1qu1i3i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Cibzq .framer-19z8g5-container { aspect-ratio: 3.1595744680851063 / 1; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Cibzq .framer-rx5a0-container, .framer-Cibzq .framer-17zwfjo-container, .framer-Cibzq .framer-sp7mlb-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Cibzq.framer-v-11uu2x7.framer-1xb6h6x, .framer-Cibzq.framer-v-198fmt0.framer-1xb6h6x, .framer-Cibzq.framer-v-14viicp.framer-1xb6h6x, .framer-Cibzq.framer-v-5l5nm4.framer-1xb6h6x { width: 390px; }`,
          `.framer-Cibzq.framer-v-11uu2x7 .framer-139be8y, .framer-Cibzq.framer-v-198fmt0 .framer-139be8y, .framer-Cibzq.framer-v-14viicp .framer-139be8y, .framer-Cibzq.framer-v-5l5nm4 .framer-139be8y { flex-direction: column; gap: 24px; overflow: visible; will-change: unset; }`,
          `.framer-Cibzq.framer-v-11uu2x7 .framer-1qu1i3i, .framer-Cibzq.framer-v-198fmt0 .framer-1qu1i3i, .framer-Cibzq.framer-v-14viicp .framer-1qu1i3i, .framer-Cibzq.framer-v-5l5nm4 .framer-1qu1i3i { flex: none; gap: 16px; width: 100%; }`,
          `.framer-Cibzq.framer-v-11uu2x7 .framer-19z8g5-container, .framer-Cibzq.framer-v-198fmt0 .framer-19z8g5-container, .framer-Cibzq.framer-v-14viicp .framer-19z8g5-container, .framer-Cibzq.framer-v-5l5nm4 .framer-19z8g5-container { aspect-ratio: unset; }`,
          `.framer-Cibzq[data-border="true"]::after, .framer-Cibzq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Cibzq`,
      )),
      (qa.displayName = `Element/Our services`),
      (qa.defaultProps = { height: 459, width: 1151 }),
      L(qa, {
        variant: {
          options: [
            `mkg7pPB_v`,
            `fKwoUogGN`,
            `gvv8cKZXO`,
            `K6DEpp6xY`,
            `GnJr0nHu5`,
            `R2xF02fE3`,
            `V0rWvDvs_`,
            `bRQNFVDmm`,
          ],
          optionTitles: [
            `Service 1`,
            `Service 2`,
            `Service 3`,
            `Service 4`,
            `Mobile`,
            `Mobile 2`,
            `Mobile 3`,
            `Mobile 4`,
          ],
          title: `Variant`,
          type: G.Enum,
        },
        rhfwKYWKX: {
          defaultValue: `row`,
          description: `Click here to edit the direction`,
          displaySegmentedControl: !0,
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          options: [`row`, `column`],
          optionTitles: [`Horizontal`, `Vertical`],
          title: `Direction`,
          type: G.Enum,
        },
      }),
      I(qa, [{ explicitInter: !0, fonts: [] }, ...ja, ...Ma], { supportsExplicitInterCodegen: !0 }),
      (qa.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = pe.get(Ra(), n),
            i = pe.get(Ba(), n);
          return Promise.allSettled([
            r.preload(),
            i.preload(),
            (async () => {
              let e = (await r.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [B(ia, {}, t), B(ia, {}, t), B(ia, {}, t), B(ia, {}, t)]),
              );
            })(),
            (async () => {
              let e = (await i.readMaybeAsync()) ?? [];
              return Promise.allSettled(
                e.flatMap((e) => [
                  B(Oa, {}, t),
                  B(Oa, {}, t),
                  B(Oa, {}, t),
                  B(Oa, {}, t),
                  B(lt, {}, t),
                  B(lt, {}, t),
                ]),
              );
            })(),
          ]);
        },
      }));
  }),
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
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
  bo,
  xo,
  Q,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  $,
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
  Go,
  Ko,
  qo,
  Jo,
  Yo;
e(() => {
  (v(),
    z(),
    A(),
    p(),
    it(),
    $n(),
    ct(),
    dt(),
    gt(),
    st(),
    kr(),
    Si(),
    vt(),
    Ki(),
    xt(),
    Ct(),
    Ja(),
    yt(),
    J(),
    Tt(),
    ht(),
    Dt(),
    et(),
    Ke(),
    We(),
    jt(),
    Xe(),
    pt(),
    It(),
    (Ya = V(at)),
    (Xa = V(Or)),
    (Za = se(W)),
    (Qa = V(wt)),
    ($a = V(_t)),
    (eo = V(ut)),
    (to = ae(S.section)),
    (no = V(bt)),
    (ro = V(Y)),
    (io = V(St)),
    (ao = ae(S.div)),
    (oo = V(qa)),
    (so = V(mt)),
    (co = V(X)),
    (lo = V(xi)),
    (uo = ae(H)),
    (fo = V(ot)),
    (po = V(lt)),
    (mo = Ae(lt)),
    (ho = V(Gi)),
    (go = {
      bhI8hHikE: `(min-width: 810px) and (max-width: 1199.98px)`,
      muyaqbHcV: `(max-width: 809.98px)`,
      qukJVo4ab: `(min-width: 1200px)`,
    }),
    (_o = () => typeof document < `u`),
    (vo = []),
    (yo = `framer-ps6yJ`),
    (bo = {
      bhI8hHikE: `framer-v-gf9ou0`,
      muyaqbHcV: `framer-v-1g9k2v9`,
      qukJVo4ab: `framer-v-1bqzvwo`,
    }),
    (xo = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (So = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.3, ease: [0, 0, 1, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Co = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (wo = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
    }),
    (To = () => ({
      from: { alias: `GhxHP5bII`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `GhxHP5bII`, name: `WkskPGSt4`, type: `Identifier` },
        { collection: `GhxHP5bII`, name: `BsyiXhdcA`, type: `Identifier` },
        { collection: `GhxHP5bII`, name: `PKweN8bw_`, type: `Identifier` },
        { collection: `GhxHP5bII`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `GhxHP5bII`, name: `jbX2Dvqv8`, type: `Identifier` },
        { collection: `GhxHP5bII`, name: `id`, type: `Identifier` },
        {
          alias: `YZuGEs3RA`,
          arguments: [
            {
              from: { alias: `YZuGEs3RA`, data: Ve, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [
                { collection: `YZuGEs3RA`, name: `Us4MvBNmC`, type: `Identifier` },
                { collection: `YZuGEs3RA`, name: `DNLONDBp6`, type: `Identifier` },
                { collection: `YZuGEs3RA`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (Eo = ({ query: e, pageSize: t, children: n }) => n(be(e))),
    (Do = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Oo = (e) => !e),
    (ko = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    ($ = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase().includes(t.toLowerCase())
        : Array.isArray(e) && typeof t == `string`
          ? e.includes(t)
          : !1),
    (Ao = () => ({
      from: { alias: `cvZf18_Eq`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `cvZf18_Eq`, name: `W4jMgJVaT`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `MwWFeUtSt`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `hyt8JCTaC`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `PrnLL3dxk`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `QmK05fbCJ`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `KvP2FWZEp`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `Ldys0pkEe`, type: `Identifier` },
        { collection: `cvZf18_Eq`, name: `id`, type: `Identifier` },
      ],
    })),
    (jo = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Mo = () => ({
      from: { alias: `FttYvmNKz`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `FttYvmNKz`, name: `FcTU4c2s_`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `PgW2sotHR`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `STGgNo8lQ`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `id`, type: `Identifier` },
        {
          alias: `l7Ix_yDUj`,
          arguments: [
            {
              from: { alias: `l7Ix_yDUj`, data: Et, type: `Collection` },
              limit: { type: `LiteralValue`, value: 3 },
              select: [
                { collection: `l7Ix_yDUj`, name: `KjsPqFOxR`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `Bq4tBw7c3`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `vfkbJihfk`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (No = () => ({
      from: { alias: `FttYvmNKz`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `FttYvmNKz`, name: `FcTU4c2s_`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `PgW2sotHR`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `STGgNo8lQ`, type: `Identifier` },
        { collection: `FttYvmNKz`, name: `id`, type: `Identifier` },
        {
          alias: `l7Ix_yDUj`,
          arguments: [
            {
              from: { alias: `l7Ix_yDUj`, data: Et, type: `Collection` },
              select: [
                { collection: `l7Ix_yDUj`, name: `KjsPqFOxR`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `Bq4tBw7c3`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `vfkbJihfk`, type: `Identifier` },
                { collection: `l7Ix_yDUj`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (Po = () => ({
      from: { alias: `X2r2EnfV8`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `X2r2EnfV8`, name: `pWKi_oYgW`, type: `Identifier` },
        { collection: `X2r2EnfV8`, name: `HJvxJ8WOH`, type: `Identifier` },
        { collection: `X2r2EnfV8`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `X2r2EnfV8`, name: `id`, type: `Identifier` },
        {
          alias: `kUeH2m6s4`,
          arguments: [
            {
              from: { alias: `kUeH2m6s4`, data: Ve, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [
                { collection: `kUeH2m6s4`, name: `DNLONDBp6`, type: `Identifier` },
                { collection: `kUeH2m6s4`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (Fo = () => ({
      from: { alias: `CF3HGGKl9`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `CF3HGGKl9`, name: `kW4hZZbB7`, type: `Identifier` },
        { collection: `CF3HGGKl9`, name: `bgd3anvnR`, type: `Identifier` },
        { collection: `CF3HGGKl9`, name: `Us4MvBNmC`, type: `Identifier` },
        { collection: `CF3HGGKl9`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `CF3HGGKl9`, name: `J24cvFmfW`, type: `Identifier` },
        { collection: `CF3HGGKl9`, name: `id`, type: `Identifier` },
        {
          alias: `wpI_UE3Ri`,
          arguments: [
            {
              from: { alias: `wpI_UE3Ri`, data: ft, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [
                { collection: `wpI_UE3Ri`, name: `V562KVaHR`, type: `Identifier` },
                { collection: `wpI_UE3Ri`, name: `CE3BYOPJa`, type: `Identifier` },
                { collection: `wpI_UE3Ri`, name: `bTLpAFdDK`, type: `Identifier` },
                { collection: `wpI_UE3Ri`, name: `PNdlC4yXy`, type: `Identifier` },
                { collection: `wpI_UE3Ri`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
        {
          alias: `GmXY7eix6`,
          arguments: [
            {
              from: { alias: `GmXY7eix6`, data: ft, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              offset: { type: `LiteralValue`, value: 1 },
              select: [
                { collection: `GmXY7eix6`, name: `V562KVaHR`, type: `Identifier` },
                { collection: `GmXY7eix6`, name: `CE3BYOPJa`, type: `Identifier` },
                { collection: `GmXY7eix6`, name: `bTLpAFdDK`, type: `Identifier` },
                { collection: `GmXY7eix6`, name: `PNdlC4yXy`, type: `Identifier` },
                { collection: `GmXY7eix6`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
        {
          alias: `XZF4ZDq6P`,
          arguments: [
            {
              from: { alias: `XZF4ZDq6P`, data: ft, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              offset: { type: `LiteralValue`, value: 2 },
              select: [
                { collection: `XZF4ZDq6P`, name: `V562KVaHR`, type: `Identifier` },
                { collection: `XZF4ZDq6P`, name: `CE3BYOPJa`, type: `Identifier` },
                { collection: `XZF4ZDq6P`, name: `bTLpAFdDK`, type: `Identifier` },
                { collection: `XZF4ZDq6P`, name: `PNdlC4yXy`, type: `Identifier` },
                { collection: `XZF4ZDq6P`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
        {
          alias: `co2bnv33m`,
          arguments: [
            {
              from: { alias: `co2bnv33m`, data: ft, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              offset: { type: `LiteralValue`, value: 3 },
              select: [
                { collection: `co2bnv33m`, name: `V562KVaHR`, type: `Identifier` },
                { collection: `co2bnv33m`, name: `CE3BYOPJa`, type: `Identifier` },
                { collection: `co2bnv33m`, name: `bTLpAFdDK`, type: `Identifier` },
                { collection: `co2bnv33m`, name: `PNdlC4yXy`, type: `Identifier` },
                { collection: `co2bnv33m`, name: `id`, type: `Identifier` },
              ],
              type: `Select`,
            },
          ],
          functionName: `ARRAY`,
          type: `FunctionCall`,
        },
      ],
    })),
    (Io = () => ({
      from: { alias: `fu3CNtwTZ`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `fu3CNtwTZ`, name: `AjEfrSusG`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `UOksCzmv9`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `SyTYgr_u5`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `WSJCyQlYE`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `kkNzkQ6By`, type: `Identifier` },
        { collection: `fu3CNtwTZ`, name: `id`, type: `Identifier` },
      ],
    })),
    (Lo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 11,
    }),
    (Ro = { delay: 0.3, duration: 0.4, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
    (zo = () => ({
      from: { alias: `f5x8KPcz3`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `f5x8KPcz3`, name: `LbJZaj4qi`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `d5pwhuSPq`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `tI8pA1Mtm`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `QM6fmVOon`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `uaj7yKWNo`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `RQEI8qLsi`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `Zip1uRTGR`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `a1eMGQfoO`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `wL0WOQRlC`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `SGJlyZPrX`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `lzd_VfUJy`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `tSw7kTltu`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `h4SurtUIl`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `SM0REQyQd`, type: `Identifier` },
        { collection: `f5x8KPcz3`, name: `id`, type: `Identifier` },
      ],
    })),
    (Bo = () => ({
      from: { alias: `Gv5K80_mX`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `Gv5K80_mX`, name: `jEf1Eus4b`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `r8bDLthd2`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `Lsf8hy0QI`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `jbX2Dvqv8`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `QEFLGmUvt`, type: `Identifier` },
        { collection: `Gv5K80_mX`, name: `id`, type: `Identifier` },
      ],
    })),
    (Vo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Ho = { damping: 80, delay: 0, mass: 1, stiffness: 250, type: `spring` }),
    (Uo = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Wo = () => ({
      from: { alias: `OKijYx0HG`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `OKijYx0HG`, name: `zo5LoO_43`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `ivcpQTUmb`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `RJkX1qcmd`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `KZhR3kDHi`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `OjjDQiI6f`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `PP2TwaJhQ`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `mJhCZykKv`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `Sjm1atq2q`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `i1CdRvqj3`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `d1zuH3MoL`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `DNLONDBp6`, type: `Identifier` },
        { collection: `OKijYx0HG`, name: `id`, type: `Identifier` },
      ],
    })),
    (Go = { Desktop: `qukJVo4ab`, Phone: `muyaqbHcV`, Tablet: `bhI8hHikE` }),
    (Ko = ({ value: e }) =>
      ue()
        ? null
        : _(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (qo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Go[r.variant] ?? r.variant ?? `qukJVo4ab`,
    })),
    (Jo = R(
      b(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = ee(),
          { activeLocale: o, setLocale: c } = De(),
          d = _e(),
          { style: f, className: p, layoutId: m, variant: g, ...v } = qo(e);
        de(u(() => Ft({}, o), [o]));
        let [b, x] = me(g, go, !1),
          C = F(yo, At, Ge, rt, Pt, $e, Ye),
          te = l(Se)?.isLayoutTemplate,
          ne = !!l(D)?.transition?.layout,
          w = xo(te, ne),
          T = t(null);
        ye();
        let E = j(`WxGhyf54g`),
          O = ke(),
          re = (e) => (!_o() || [`bhI8hHikE`, `muyaqbHcV`].includes(b) ? !0 : e),
          ie = j(`KySRHKZff`),
          A = j(`Kgewnn4VA`),
          N = () => !_o() || ![`bhI8hHikE`, `muyaqbHcV`].includes(b),
          P = j(`uWrqjObUk`),
          ae = j(`X2r2EnfV8`),
          se = () => !_o() || b !== `muyaqbHcV`,
          I = j(`XjiLFbzPY`),
          ce = j(`Zek1kF8cZ`),
          L = j(`bVb0zECjS`),
          R = j(`mNVgQPFAg`);
        return (
          Ee({}),
          _(Se.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Go,
              primaryVariantId: `qukJVo4ab`,
              variantClassNames: bo,
            },
            children: y(k, {
              id: m ?? a,
              children: [
                _(Ko, {
                  value: `html body { background: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255)); }`,
                }),
                y(S.div, {
                  ...v,
                  className: F(C, `framer-1bqzvwo`, p),
                  ref: i,
                  style: { ...f },
                  children: [
                    _(U, {
                      children: _(H, {
                        className: `framer-um1u70-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: w,
                        nodeId: `goTvFujBn`,
                        scopeId: `hqVRjOHKR`,
                        children: _(at, {
                          height: `100%`,
                          id: `goTvFujBn`,
                          intensity: 14,
                          layoutId: `goTvFujBn`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    y(S.main, {
                      className: `framer-yj12ww`,
                      "data-framer-name": `Main`,
                      layout: w,
                      children: [
                        _(K, {
                          breakpoint: b,
                          overrides: {
                            muyaqbHcV: { __framer__styleTransformEffectEnabled: void 0 },
                          },
                          children: _(to, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [
                              {
                                target: {
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                              {
                                ref: T,
                                target: {
                                  opacity: 0,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1,
                                  skewX: 0,
                                  skewY: 0,
                                  x: 0,
                                  y: 0,
                                },
                              },
                            ],
                            __framer__transformTrigger: `onScrollTarget`,
                            __framer__transformViewportThreshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-12svfce`,
                            "data-framer-name": `Hero`,
                            children: _(xe, {
                              children: _(Eo, {
                                query: To(),
                                children: (e, t, n) =>
                                  _(h, {
                                    children: e?.map(
                                      (
                                        {
                                          BsyiXhdcA: e,
                                          DNLONDBp6: t,
                                          id: n,
                                          jbX2Dvqv8: r,
                                          PKweN8bw_: i,
                                          WkskPGSt4: a,
                                          YZuGEs3RA: o,
                                        },
                                        c,
                                      ) => (
                                        (e ??= ``),
                                        (i ??= ``),
                                        (t ??= ``),
                                        (r ??= ``),
                                        _(
                                          k,
                                          {
                                            id: `GhxHP5bII-${n}`,
                                            children: _(M.Provider, {
                                              value: { DNLONDBp6: t },
                                              children: y(`div`, {
                                                className: `framer-134503r`,
                                                "data-framer-name": `Hero section`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      bhI8hHikE: { height: 800 },
                                                      muyaqbHcV: { y: void 0 },
                                                    },
                                                    children: _(U, {
                                                      height: 821,
                                                      width: d?.width || `100vw`,
                                                      y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                                      children: _(H, {
                                                        className: `framer-likbir-container`,
                                                        nodeId: `gxZ69C8bN`,
                                                        scopeId: `hqVRjOHKR`,
                                                        children: _(Or, {
                                                          fsux3y6O2: a,
                                                          height: `100%`,
                                                          id: `gxZ69C8bN`,
                                                          layoutId: `gxZ69C8bN`,
                                                          qLYhflb9R: `0px`,
                                                          style: { height: `100%`, width: `100%` },
                                                          V2s8qfniX: `Y_e0e_mkN`,
                                                          variant: Q(`wPvOT0t0q`),
                                                          w1YFGN0ZT: `var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, rgb(255, 255, 255))`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  y(`header`, {
                                                    className: `framer-1ugytsn`,
                                                    "data-framer-name": `Header`,
                                                    children: [
                                                      _(Za, {
                                                        __fromCanvasComponent: !0,
                                                        animate: So,
                                                        children: _(s, {
                                                          children: _(`h1`, {
                                                            className: `framer-styles-preset-1a5yxrz`,
                                                            "data-styles-preset": `EYF7XgWx8`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                            },
                                                            children: `Full Home Interior Design`,
                                                          }),
                                                        }),
                                                        className: `framer-mttbew`,
                                                        "data-framer-appear-id": `mttbew-${c}`,
                                                        fonts: [`Inter`],
                                                        initial: Co,
                                                        optimized: !0,
                                                        text: e,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          muyaqbHcV: {
                                                            animate: void 0,
                                                            initial: void 0,
                                                            optimized: void 0,
                                                          },
                                                        },
                                                        children: _(Za, {
                                                          __fromCanvasComponent: !0,
                                                          animate: So,
                                                          children: _(s, {
                                                            children: _(`p`, {
                                                              className: `framer-styles-preset-piej36`,
                                                              "data-styles-preset": `kzFJG5mqZ`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                              },
                                                              children: `We help Snohomish homeowners cook, host, and relax in a space built just for them.`,
                                                            }),
                                                          }),
                                                          className: `framer-1ncv6lw`,
                                                          "data-framer-appear-id": `1ncv6lw-${c}`,
                                                          fonts: [`Inter`],
                                                          initial: Co,
                                                          optimized: !0,
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      y(`div`, {
                                                        className: `framer-1ncfy0p`,
                                                        "data-framer-name": `Button`,
                                                        children: [
                                                          _(le, {
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
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      64 +
                                                                      0 +
                                                                      48 +
                                                                      230.8 +
                                                                      18.3,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 52,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    64 +
                                                                    0 +
                                                                    0 +
                                                                    214.8 +
                                                                    18.3,
                                                                  children: _(H, {
                                                                    className: `framer-h129pf-container`,
                                                                    nodeId: `voOhgOBA6`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    whileHover: wo,
                                                                    children: _(K, {
                                                                      breakpoint: b,
                                                                      overrides: {
                                                                        bhI8hHikE: {
                                                                          qNjswW_Tg: e[1],
                                                                        },
                                                                        muyaqbHcV: {
                                                                          qNjswW_Tg: e[2],
                                                                        },
                                                                      },
                                                                      children: _(wt, {
                                                                        AmmV7xj6g: 33,
                                                                        BgmIAzzRV: `30px`,
                                                                        DbOmokZP0: `rgb(255, 255, 255)`,
                                                                        EDzxvbp5Q: `12px 12px 12px 20px`,
                                                                        F9xEnRksX: `one`,
                                                                        Ftd7ea6ZK: 90,
                                                                        GmXdHB9SX: !0,
                                                                        h_OXotjfD: 12,
                                                                        height: `100%`,
                                                                        id: `voOhgOBA6`,
                                                                        layoutId: `voOhgOBA6`,
                                                                        LWV7WvkSz: `rgb(255, 255, 255)`,
                                                                        n7FNYiflu: 2e3,
                                                                        ooNLd407F: 100,
                                                                        qcTsc8aEM: r,
                                                                        qNjswW_Tg: e[0],
                                                                        s8XHH4TvL: 4,
                                                                        ucHarSLTi: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                                                                        width: `100%`,
                                                                        Z_ma24kbm: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                          }),
                                                          y(`div`, {
                                                            className: `framer-2ng5m5`,
                                                            "data-border": !0,
                                                            "data-framer-name": `Review Box`,
                                                            children: [
                                                              _(`div`, {
                                                                className: `framer-n15uoz`,
                                                                "data-framer-name": `Logo`,
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      y:
                                                                        (d?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        64 +
                                                                        0 +
                                                                        48 +
                                                                        230.8 +
                                                                        16 +
                                                                        12.3 +
                                                                        0,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      height: 25,
                                                                      width: `25px`,
                                                                      y: void 0,
                                                                    },
                                                                  },
                                                                  children: _(U, {
                                                                    height: 32,
                                                                    width: `31px`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      64 +
                                                                      0 +
                                                                      0 +
                                                                      214.8 +
                                                                      16 +
                                                                      12.3 +
                                                                      0,
                                                                    children: _(H, {
                                                                      className: `framer-1l7huc6-container`,
                                                                      nodeId: `iAbN9thMn`,
                                                                      scopeId: `hqVRjOHKR`,
                                                                      children: _(_t, {
                                                                        height: `100%`,
                                                                        id: `iAbN9thMn`,
                                                                        layoutId: `iAbN9thMn`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        variant: Q(`XTwYsJHeV`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                              y(`div`, {
                                                                className: `framer-deo1ze`,
                                                                "data-framer-name": `Google`,
                                                                children: [
                                                                  y(`div`, {
                                                                    className: `framer-1s17e5`,
                                                                    "data-framer-name": `Stars`,
                                                                    children: [
                                                                      _(ut, {
                                                                        animated: !1,
                                                                        className: `framer-1paz4wb`,
                                                                        layoutId: `W9pQiaxDn`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      _(ut, {
                                                                        animated: !1,
                                                                        className: `framer-1uh7toj`,
                                                                        layoutId: `QM75tCc7Y`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      _(ut, {
                                                                        animated: !1,
                                                                        className: `framer-e9fw3e`,
                                                                        layoutId: `NNFtHcZ0K`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      _(ut, {
                                                                        animated: !1,
                                                                        className: `framer-1ojpa3p`,
                                                                        layoutId: `JipiPxuf2`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                      _(ut, {
                                                                        animated: !1,
                                                                        className: `framer-1g1928s`,
                                                                        layoutId: `w0L5EDSBX`,
                                                                        mRgjGDEhU: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  _(`div`, {
                                                                    className: `framer-1vluiyz`,
                                                                    children: o?.map(
                                                                      (
                                                                        {
                                                                          DNLONDBp6: e,
                                                                          id: t,
                                                                          Us4MvBNmC: n,
                                                                        },
                                                                        r,
                                                                      ) => (
                                                                        (n ??= ``),
                                                                        (e ??= ``),
                                                                        _(
                                                                          k,
                                                                          {
                                                                            id: `YZuGEs3RA-${t}`,
                                                                            children: _(
                                                                              M.Provider,
                                                                              {
                                                                                value: {
                                                                                  DNLONDBp6: e,
                                                                                },
                                                                                children: _(W, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: _(s, {
                                                                                    children: _(
                                                                                      `p`,
                                                                                      {
                                                                                        className: `framer-styles-preset-lqeg3j`,
                                                                                        "data-styles-preset": `FQBtVWcCo`,
                                                                                        dir: `auto`,
                                                                                        style: {
                                                                                          "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                                        },
                                                                                        children: `4.9/5 (200+ Reviews)`,
                                                                                      },
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-2avqfz`,
                                                                                  "data-framer-name": `Text`,
                                                                                  fonts: [`Inter`],
                                                                                  text: n,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                              },
                                                                            ),
                                                                          },
                                                                          t,
                                                                        )
                                                                      ),
                                                                    ),
                                                                  }),
                                                                ],
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
                                          },
                                          n,
                                        )
                                      ),
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-wr6vb9`,
                          "data-framer-name": `Reviews`,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Ao(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        DNLONDBp6: e,
                                        hyt8JCTaC: t,
                                        id: n,
                                        KvP2FWZEp: r,
                                        Ldys0pkEe: i,
                                        MwWFeUtSt: a,
                                        PrnLL3dxk: o,
                                        QmK05fbCJ: s,
                                        W4jMgJVaT: c,
                                      },
                                      l,
                                    ) => {
                                      ((c ??= !0),
                                        (e ??= ``),
                                        (a ??= !0),
                                        (t ??= !0),
                                        (o ??= 0),
                                        (s ??= 0),
                                        (r ??= ``),
                                        (i ??= ``));
                                      let u = Oo(Do(o, 0)),
                                        f = Oo(Do(s, 0)),
                                        p = $(r, `2026`),
                                        m = $(i, `2025`),
                                        ee = $(i, `2024`),
                                        h = $(i, `2023`),
                                        g = $(i, `2026`),
                                        v = $(r, `2025`),
                                        x = $(i, `2019`),
                                        S = $(r, `2024`),
                                        C = $(i, `2018`),
                                        te = $(r, `2023`),
                                        ne = $(i, `2022`),
                                        w = $(r, `2018`),
                                        T = $(r, `2022`),
                                        D = $(i, `2021`),
                                        ie = $(i, `2017`),
                                        A = $(r, `2021`),
                                        j = $(i, `2020`),
                                        N = $(r, `2017`),
                                        P = $(r, `2020`),
                                        ae = $(i, `2016`),
                                        se = $(r, `2019`),
                                        I = $(r, `2016`),
                                        ce = $(i, `2015`),
                                        L = $(r, `2015`),
                                        R = $(i, `2014`),
                                        le = $(r, `2014`),
                                        z = $(i, `2013`),
                                        B = $(r, `2013`),
                                        ue = $(i, `2012`),
                                        de = $(r, `2012`);
                                      return _(
                                        k,
                                        {
                                          id: `cvZf18_Eq-${n}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: e },
                                            children:
                                              c !== !1 &&
                                              y(`div`, {
                                                className: `framer-191re8y`,
                                                "data-framer-name": `Reviews`,
                                                id: `${e}-${E}`,
                                                ref: O(`${e}-${E}`),
                                                children: [
                                                  _(`div`, {
                                                    className: `framer-102g4nl`,
                                                    "data-framer-name": `Line`,
                                                    children: _(K, {
                                                      breakpoint: b,
                                                      overrides: {
                                                        bhI8hHikE: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            intrinsicHeight: 122,
                                                            intrinsicWidth: 3118,
                                                            loading: oe(
                                                              (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                800 +
                                                                0 +
                                                                125 +
                                                                0 +
                                                                88 +
                                                                -17,
                                                            ),
                                                            pixelHeight: 122,
                                                            pixelWidth: 3118,
                                                            sizes: d?.width || `100vw`,
                                                            src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                                            srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                                                          },
                                                        },
                                                        muyaqbHcV: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            intrinsicHeight: 122,
                                                            intrinsicWidth: 3118,
                                                            pixelHeight: 122,
                                                            pixelWidth: 3118,
                                                            sizes: d?.width || `100vw`,
                                                            src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                                            srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                                                          },
                                                        },
                                                      },
                                                      children: _(ge, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          intrinsicHeight: 122,
                                                          intrinsicWidth: 3118,
                                                          loading: oe(
                                                            (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              800 +
                                                              16 +
                                                              122 +
                                                              0 +
                                                              88 +
                                                              -17,
                                                          ),
                                                          pixelHeight: 122,
                                                          pixelWidth: 3118,
                                                          sizes: d?.width || `100vw`,
                                                          src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                                          srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                                                        },
                                                        className: `framer-1432ykq`,
                                                        "data-framer-name": `Desktop background`,
                                                        fitImageDimension: `height`,
                                                      }),
                                                    }),
                                                  }),
                                                  a !== !1 &&
                                                    y(`div`, {
                                                      className: `framer-ap6824`,
                                                      "data-framer-name": `Houzz`,
                                                      children: [
                                                        re(t !== !1) &&
                                                          y(`div`, {
                                                            className: F(
                                                              `framer-1iba9p7`,
                                                              t === !1 && `hidden-1bqzvwo`,
                                                            ),
                                                            "data-framer-name": `Ratings`,
                                                            children: [
                                                              u !== !1 &&
                                                                _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      y:
                                                                        (d?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        800 +
                                                                        0 +
                                                                        125 +
                                                                        0 +
                                                                        130 +
                                                                        0 +
                                                                        0,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      width: `max(${d?.width || `100vw`} - 32px, 100px)`,
                                                                      y: void 0,
                                                                    },
                                                                  },
                                                                  children: _(U, {
                                                                    height: 176,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      16 +
                                                                      122 +
                                                                      0 +
                                                                      124 +
                                                                      0 +
                                                                      0,
                                                                    children: _(H, {
                                                                      className: `framer-1omm9fn-container`,
                                                                      nodeId: `aJKxrotEq`,
                                                                      scopeId: `hqVRjOHKR`,
                                                                      children: _(K, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          muyaqbHcV: {
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: Q(`v9G8O2m8h`),
                                                                          },
                                                                        },
                                                                        children: _(bt, {
                                                                          brPkqv4KZ: o,
                                                                          GwaYPI2hB: ko(
                                                                            {
                                                                              pixelHeight: 200,
                                                                              pixelWidth: 600,
                                                                              src: `https://framerusercontent.com/images/LjmZJ9uXcyr7VxCbjoNlhmWT9Cg.png?width=600&height=200`,
                                                                              srcSet: `https://framerusercontent.com/images/LjmZJ9uXcyr7VxCbjoNlhmWT9Cg.png?scale-down-to=512&width=600&height=200 512w,https://framerusercontent.com/images/LjmZJ9uXcyr7VxCbjoNlhmWT9Cg.png?width=600&height=200 600w`,
                                                                            },
                                                                            `Google logo`,
                                                                          ),
                                                                          height: `100%`,
                                                                          id: `aJKxrotEq`,
                                                                          layoutId: `aJKxrotEq`,
                                                                          variant: Q(`WyqHt0Yph`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              f !== !1 &&
                                                                _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      y:
                                                                        (d?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        800 +
                                                                        0 +
                                                                        125 +
                                                                        0 +
                                                                        130 +
                                                                        0 +
                                                                        0,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      width: `max(${d?.width || `100vw`} - 32px, 100px)`,
                                                                      y: void 0,
                                                                    },
                                                                  },
                                                                  children: _(U, {
                                                                    height: 176,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      16 +
                                                                      122 +
                                                                      0 +
                                                                      124 +
                                                                      0 +
                                                                      0,
                                                                    children: _(H, {
                                                                      className: `framer-3rzksu-container`,
                                                                      nodeId: `esUVt2aW4`,
                                                                      scopeId: `hqVRjOHKR`,
                                                                      children: _(K, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          muyaqbHcV: {
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            variant: Q(`pH51CpShC`),
                                                                          },
                                                                        },
                                                                        children: _(bt, {
                                                                          brPkqv4KZ: s,
                                                                          GwaYPI2hB: ko(
                                                                            {
                                                                              pixelHeight: 200,
                                                                              pixelWidth: 600,
                                                                              src: `https://framerusercontent.com/images/f5Cmu8jH60CGbR3tKbHrmy8Cz3g.png?width=600&height=200`,
                                                                              srcSet: `https://framerusercontent.com/images/f5Cmu8jH60CGbR3tKbHrmy8Cz3g.png?scale-down-to=512&width=600&height=200 512w,https://framerusercontent.com/images/f5Cmu8jH60CGbR3tKbHrmy8Cz3g.png?width=600&height=200 600w`,
                                                                            },
                                                                            `Home Advisor logo`,
                                                                          ),
                                                                          height: `100%`,
                                                                          id: `esUVt2aW4`,
                                                                          layoutId: `esUVt2aW4`,
                                                                          variant: Q(`O9W5owcah`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                            ],
                                                          }),
                                                        y(`div`, {
                                                          className: `framer-zw6ymq`,
                                                          "data-framer-name": `Awards`,
                                                          children: [
                                                            p !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-xo95ve-container`,
                                                                    nodeId: `u4f5wa0I0`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `u4f5wa0I0`,
                                                                      layoutId: `u4f5wa0I0`,
                                                                      uOWE6Ufbz: `2026`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            m !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1brcnx3-container`,
                                                                    nodeId: `CuYO2H0NN`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `CuYO2H0NN`,
                                                                      layoutId: `CuYO2H0NN`,
                                                                      uOWE6Ufbz: `2025`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ee !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-18wn9yy-container`,
                                                                    nodeId: `PlXMs5kj2`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `PlXMs5kj2`,
                                                                      layoutId: `PlXMs5kj2`,
                                                                      uOWE6Ufbz: `2024`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            h !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-wajsxn-container`,
                                                                    nodeId: `eAoFhnU6t`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `eAoFhnU6t`,
                                                                      layoutId: `eAoFhnU6t`,
                                                                      uOWE6Ufbz: `2023`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            g !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-g9mhbf-container`,
                                                                    nodeId: `BYrExVdjW`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `BYrExVdjW`,
                                                                      layoutId: `BYrExVdjW`,
                                                                      uOWE6Ufbz: `2026`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            v !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1c5ttsl-container`,
                                                                    nodeId: `vT7JiE0Rj`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `vT7JiE0Rj`,
                                                                      layoutId: `vT7JiE0Rj`,
                                                                      uOWE6Ufbz: `2025`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            x !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-zi42re-container`,
                                                                    nodeId: `qh7ILwHFw`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `qh7ILwHFw`,
                                                                      layoutId: `qh7ILwHFw`,
                                                                      uOWE6Ufbz: `2019`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            S !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1v0fffu-container`,
                                                                    nodeId: `SqcxBkA5Q`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `SqcxBkA5Q`,
                                                                      layoutId: `SqcxBkA5Q`,
                                                                      uOWE6Ufbz: `2024`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            C !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-117ha2h-container`,
                                                                    nodeId: `iXeSTS3F_`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `iXeSTS3F_`,
                                                                      layoutId: `iXeSTS3F_`,
                                                                      uOWE6Ufbz: `2018`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            te !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1lwnexu-container`,
                                                                    nodeId: `mkewhDpTM`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `mkewhDpTM`,
                                                                      layoutId: `mkewhDpTM`,
                                                                      uOWE6Ufbz: `2023`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ne !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1kihulj-container`,
                                                                    nodeId: `oBarxHWnR`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `oBarxHWnR`,
                                                                      layoutId: `oBarxHWnR`,
                                                                      uOWE6Ufbz: `2022`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            w !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-kdkj7b-container`,
                                                                    nodeId: `VX6UoBRfv`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `VX6UoBRfv`,
                                                                      layoutId: `VX6UoBRfv`,
                                                                      uOWE6Ufbz: `2018`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            T !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-7ykfv9-container`,
                                                                    nodeId: `IZU23mpGd`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `IZU23mpGd`,
                                                                      layoutId: `IZU23mpGd`,
                                                                      uOWE6Ufbz: `2022`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            D !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-7owv0b-container`,
                                                                    nodeId: `g1nFjH91C`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `g1nFjH91C`,
                                                                      layoutId: `g1nFjH91C`,
                                                                      uOWE6Ufbz: `2021`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ie !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1659ech-container`,
                                                                    nodeId: `pdIq7mAF2`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `pdIq7mAF2`,
                                                                      layoutId: `pdIq7mAF2`,
                                                                      uOWE6Ufbz: `2017`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            A !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1iatbo-container`,
                                                                    nodeId: `XvY_rZ7uT`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `XvY_rZ7uT`,
                                                                      layoutId: `XvY_rZ7uT`,
                                                                      uOWE6Ufbz: `2021`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            j !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1q7agb4-container`,
                                                                    nodeId: `F5vSyIOn9`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `F5vSyIOn9`,
                                                                      layoutId: `F5vSyIOn9`,
                                                                      uOWE6Ufbz: `2020`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            N !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1tgftd8-container`,
                                                                    nodeId: `qRnoJlzSZ`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `qRnoJlzSZ`,
                                                                      layoutId: `qRnoJlzSZ`,
                                                                      uOWE6Ufbz: `2017`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            P !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-15v1it0-container`,
                                                                    nodeId: `XAKzSxcCt`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `XAKzSxcCt`,
                                                                      layoutId: `XAKzSxcCt`,
                                                                      uOWE6Ufbz: `2020`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ae !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-11ufr6g-container`,
                                                                    nodeId: `sZJXjVNxH`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `sZJXjVNxH`,
                                                                      layoutId: `sZJXjVNxH`,
                                                                      uOWE6Ufbz: `2016`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            se !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1r1exp3-container`,
                                                                    nodeId: `YUUIK01XM`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `YUUIK01XM`,
                                                                      layoutId: `YUUIK01XM`,
                                                                      uOWE6Ufbz: `2019`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            I !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-pabdci-container`,
                                                                    nodeId: `eXpspv6Tw`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `eXpspv6Tw`,
                                                                      layoutId: `eXpspv6Tw`,
                                                                      uOWE6Ufbz: `2016`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ce !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1wzhwu7-container`,
                                                                    nodeId: `v_JzsBJT3`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `v_JzsBJT3`,
                                                                      layoutId: `v_JzsBJT3`,
                                                                      uOWE6Ufbz: `2015`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            L !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1ts8oio-container`,
                                                                    nodeId: `XcExgB3jz`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `XcExgB3jz`,
                                                                      layoutId: `XcExgB3jz`,
                                                                      uOWE6Ufbz: `2015`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            R !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-ygsgf3-container`,
                                                                    nodeId: `RJuyTqi22`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `RJuyTqi22`,
                                                                      layoutId: `RJuyTqi22`,
                                                                      uOWE6Ufbz: `2014`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            le !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1ahpl2g-container`,
                                                                    nodeId: `eQJGcfYcC`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `eQJGcfYcC`,
                                                                      layoutId: `eQJGcfYcC`,
                                                                      uOWE6Ufbz: `2014`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            z !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-bmawlh-container`,
                                                                    nodeId: `MTqETqlix`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `MTqETqlix`,
                                                                      layoutId: `MTqETqlix`,
                                                                      uOWE6Ufbz: `2013`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            B !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1l6yq4w-container`,
                                                                    nodeId: `AVYLagC8i`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `AVYLagC8i`,
                                                                      layoutId: `AVYLagC8i`,
                                                                      uOWE6Ufbz: `2013`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ue !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-1vzt2vv-container`,
                                                                    nodeId: `cMzxQlzTr`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `cMzxQlzTr`,
                                                                      layoutId: `cMzxQlzTr`,
                                                                      uOWE6Ufbz: `2012`,
                                                                      variant: Q(`R5Fp62lNW`),
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            de !== !1 &&
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      800 +
                                                                      0 +
                                                                      125 +
                                                                      0 +
                                                                      130 +
                                                                      39 +
                                                                      0,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 98,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    800 +
                                                                    16 +
                                                                    122 +
                                                                    0 +
                                                                    124 +
                                                                    39 +
                                                                    0,
                                                                  children: _(H, {
                                                                    className: `framer-nclifx-container`,
                                                                    nodeId: `agw8Hp7YU`,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    children: _(Y, {
                                                                      height: `100%`,
                                                                      id: `agw8Hp7YU`,
                                                                      layoutId: `agw8Hp7YU`,
                                                                      uOWE6Ufbz: `2012`,
                                                                      variant: Q(`ScVCa8oxD`),
                                                                      width: `100%`,
                                                                    }),
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
                                        },
                                        n,
                                      );
                                    },
                                  ),
                                }),
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-1xiq5b0`,
                          "data-framer-name": `Projects `,
                          children: _(xe, {
                            children: _(K, {
                              breakpoint: b,
                              overrides: { muyaqbHcV: { query: No() } },
                              children: _(Eo, {
                                query: Mo(),
                                children: (e, t, n) =>
                                  _(h, {
                                    children: e?.map(
                                      (
                                        {
                                          DNLONDBp6: e,
                                          FcTU4c2s_: t,
                                          id: n,
                                          l7Ix_yDUj: r,
                                          PgW2sotHR: i,
                                          STGgNo8lQ: a,
                                        },
                                        o,
                                      ) => (
                                        (t ??= !0),
                                        (i ??= ``),
                                        (e ??= ``),
                                        (a ??= ``),
                                        _(
                                          k,
                                          {
                                            id: `FttYvmNKz-${n}`,
                                            children: _(M.Provider, {
                                              value: { DNLONDBp6: e },
                                              children:
                                                t !== !1 &&
                                                y(`div`, {
                                                  className: `framer-1alcj9b`,
                                                  "data-framer-name": `Projects`,
                                                  children: [
                                                    y(`div`, {
                                                      className: `framer-1tvrgh`,
                                                      "data-framer-name": `Title & Button`,
                                                      children: [
                                                        _(W, {
                                                          __fromCanvasComponent: !0,
                                                          children: _(s, {
                                                            children: _(`h2`, {
                                                              className: `framer-styles-preset-48d53`,
                                                              "data-styles-preset": `uo0TFsfZI`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `left`,
                                                                "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                              },
                                                              children: `OUR WORK`,
                                                            }),
                                                          }),
                                                          className: `framer-mh30dz`,
                                                          fonts: [`Inter`],
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        _(le, {
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
                                                            _(K, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                bhI8hHikE: {
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    1050 +
                                                                    0 +
                                                                    1302.25 +
                                                                    64 +
                                                                    0 +
                                                                    0 +
                                                                    19.5,
                                                                },
                                                                muyaqbHcV: { y: void 0 },
                                                              },
                                                              children: _(U, {
                                                                height: 52,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  1060 +
                                                                  0 +
                                                                  2116.25 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  19.5,
                                                                children: _(H, {
                                                                  className: `framer-o2s20h-container`,
                                                                  nodeId: `Q9_H3ZbEg`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `hqVRjOHKR`,
                                                                  whileHover: wo,
                                                                  children: _(K, {
                                                                    breakpoint: b,
                                                                    overrides: {
                                                                      bhI8hHikE: {
                                                                        qNjswW_Tg: e[1],
                                                                      },
                                                                      muyaqbHcV: {
                                                                        qNjswW_Tg: e[2],
                                                                      },
                                                                    },
                                                                    children: _(wt, {
                                                                      AmmV7xj6g: 33,
                                                                      BgmIAzzRV: `30px`,
                                                                      DbOmokZP0: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                      EDzxvbp5Q: `8px 8px 8px 20px`,
                                                                      F9xEnRksX: `one`,
                                                                      Ftd7ea6ZK: 90,
                                                                      GmXdHB9SX: !0,
                                                                      h_OXotjfD: 12,
                                                                      height: `100%`,
                                                                      id: `Q9_H3ZbEg`,
                                                                      layoutId: `Q9_H3ZbEg`,
                                                                      LWV7WvkSz: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                      n7FNYiflu: 2e3,
                                                                      ooNLd407F: 100,
                                                                      qcTsc8aEM: a,
                                                                      qNjswW_Tg: e[0],
                                                                      s8XHH4TvL: 4,
                                                                      ucHarSLTi: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                      width: `100%`,
                                                                      Z_ma24kbm: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      ],
                                                    }),
                                                    y(`div`, {
                                                      className: `framer-tm3h9o`,
                                                      "data-framer-name": `Projects`,
                                                      id: `${e}-${ie}`,
                                                      ref: O(`${e}-${ie}`),
                                                      children: [
                                                        _(`div`, {
                                                          className: `framer-1n7lm09`,
                                                          "data-framer-name": `Projects`,
                                                          children: _(ao, {
                                                            __framer__styleTransformEffectEnabled:
                                                              !0,
                                                            __framer__transformTargets: [
                                                              {
                                                                target: {
                                                                  opacity: 1,
                                                                  rotate: 0,
                                                                  rotateX: 0,
                                                                  rotateY: 0,
                                                                  scale: 1,
                                                                  skewX: 0,
                                                                  skewY: 0,
                                                                  x: 0,
                                                                  y: 0,
                                                                },
                                                              },
                                                              {
                                                                ref: O(`${e}-${A}`),
                                                                target: {
                                                                  opacity: 1,
                                                                  rotate: 0,
                                                                  rotateX: 0,
                                                                  rotateY: 0,
                                                                  scale: 1,
                                                                  skewX: 0,
                                                                  skewY: 0,
                                                                  x: -2283,
                                                                  y: 0,
                                                                },
                                                              },
                                                            ],
                                                            __framer__transformTrigger: `onScrollTarget`,
                                                            __framer__transformViewportThreshold: 1,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-1ij94ov`,
                                                            children: r?.map(
                                                              (
                                                                {
                                                                  Bq4tBw7c3: e,
                                                                  id: t,
                                                                  KjsPqFOxR: n,
                                                                  vfkbJihfk: r,
                                                                },
                                                                i,
                                                              ) => (
                                                                (n ??= ``),
                                                                (r ??= ``),
                                                                _(
                                                                  k,
                                                                  {
                                                                    id: `l7Ix_yDUj-${t}`,
                                                                    children: _(M.Provider, {
                                                                      value: { vfkbJihfk: r },
                                                                      children: _(le, {
                                                                        links: [
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                vfkbJihfk: r,
                                                                              },
                                                                              webPageId: `EyFl4ipi8`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                vfkbJihfk: r,
                                                                              },
                                                                              webPageId: `EyFl4ipi8`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                          {
                                                                            href: {
                                                                              pathVariables: {
                                                                                vfkbJihfk: r,
                                                                              },
                                                                              webPageId: `EyFl4ipi8`,
                                                                            },
                                                                            implicitPathVariables:
                                                                              void 0,
                                                                          },
                                                                        ],
                                                                        children: (t) =>
                                                                          _(K, {
                                                                            breakpoint: b,
                                                                            overrides: {
                                                                              bhI8hHikE: {
                                                                                height: 763,
                                                                                width: `max(min(min(${d?.width || `100vw`}, 1300px) - 32px, 1300px), 1px)`,
                                                                                y:
                                                                                  (d?.y || 0) +
                                                                                  0 +
                                                                                  0 +
                                                                                  0 +
                                                                                  1050 +
                                                                                  0 +
                                                                                  1302.25 +
                                                                                  64 +
                                                                                  119.5 +
                                                                                  0 +
                                                                                  0 +
                                                                                  0 +
                                                                                  0 +
                                                                                  1574,
                                                                              },
                                                                              muyaqbHcV: {
                                                                                height: 763,
                                                                                width: `max(min(min(${d?.width || `100vw`}, 1300px) - 32px, 1300px), 1px)`,
                                                                                y: void 0,
                                                                              },
                                                                            },
                                                                            children: _(U, {
                                                                              height: 750,
                                                                              width: `max(min(min(${d?.width || `100vw`}, 1300px) - 64px, 1300px), 1px)`,
                                                                              y:
                                                                                (d?.y || 0) +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                1060 +
                                                                                0 +
                                                                                2116.25 +
                                                                                100 +
                                                                                135.5 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0,
                                                                              children: _(H, {
                                                                                className: `framer-e51lvl-container`,
                                                                                nodeId: `U5wPHLMNk`,
                                                                                scopeId: `hqVRjOHKR`,
                                                                                children: _(K, {
                                                                                  breakpoint: b,
                                                                                  overrides: {
                                                                                    bhI8hHikE: {
                                                                                      style: {
                                                                                        width: `100%`,
                                                                                      },
                                                                                      variant:
                                                                                        Q(
                                                                                          `lR41eqjfa`,
                                                                                        ),
                                                                                      xw1Hmx0De:
                                                                                        t[1],
                                                                                    },
                                                                                    muyaqbHcV: {
                                                                                      style: {
                                                                                        width: `100%`,
                                                                                      },
                                                                                      variant:
                                                                                        Q(
                                                                                          `lR41eqjfa`,
                                                                                        ),
                                                                                      xw1Hmx0De:
                                                                                        t[2],
                                                                                    },
                                                                                  },
                                                                                  children: _(St, {
                                                                                    g0bVK7_xo: n,
                                                                                    height: `100%`,
                                                                                    id: `U5wPHLMNk`,
                                                                                    layoutId: `U5wPHLMNk`,
                                                                                    rRkGm0ebE: `0px`,
                                                                                    style: {
                                                                                      height: `100%`,
                                                                                      width: `100%`,
                                                                                    },
                                                                                    V7bqPTvyC:
                                                                                      jo(e),
                                                                                    variant:
                                                                                      Q(
                                                                                        `Reds2yqCO`,
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    xw1Hmx0De: t[0],
                                                                                  }),
                                                                                }),
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
                                                        N() &&
                                                          _(`div`, {
                                                            className: `framer-1bnxjv hidden-gf9ou0 hidden-1g9k2v9`,
                                                            id: `${e}-${A}`,
                                                            ref: O(`${e}-${A}`),
                                                          }),
                                                        N() &&
                                                          _(`div`, {
                                                            className: `framer-1t7z7jg hidden-gf9ou0 hidden-1g9k2v9`,
                                                            id: `${e}-${P}`,
                                                            ref: O(`${e}-${P}`),
                                                          }),
                                                      ],
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
                        }),
                        _(`section`, {
                          className: `framer-is74mn`,
                          "data-framer-name": `Services `,
                          id: ae,
                          ref: T,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Po(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        DNLONDBp6: e,
                                        HJvxJ8WOH: t,
                                        id: n,
                                        kUeH2m6s4: r,
                                        pWKi_oYgW: i,
                                      },
                                      a,
                                    ) => (
                                      (i ??= !0),
                                      (t ??= ``),
                                      (e ??= ``),
                                      _(
                                        k,
                                        {
                                          id: `X2r2EnfV8-${n}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: e },
                                            children:
                                              i !== !1 &&
                                              y(`div`, {
                                                className: `framer-1reqtqd`,
                                                "data-framer-name": `Services`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      muyaqbHcV: {
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `left`,
                                                            },
                                                            children: `SERVICES WE OFFER`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(s, {
                                                        children: _(`h2`, {
                                                          className: `framer-styles-preset-48d53`,
                                                          "data-styles-preset": `uo0TFsfZI`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                          },
                                                          children: `SERVICES WE OFFER`,
                                                        }),
                                                      }),
                                                      className: `framer-18futtt`,
                                                      fonts: [`Inter`],
                                                      text: t,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      bhI8hHikE: { "data-border": !0 },
                                                      muyaqbHcV: { "data-border": !0 },
                                                    },
                                                    children: _(`div`, {
                                                      className: `framer-1hjn8f9`,
                                                      "data-framer-name": `Services 3`,
                                                      children: r?.map(
                                                        ({ DNLONDBp6: e, id: t }, n) => (
                                                          (e ??= ``),
                                                          _(
                                                            k,
                                                            {
                                                              id: `kUeH2m6s4-${t}`,
                                                              children: _(M.Provider, {
                                                                value: { DNLONDBp6: e },
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      width: `calc(min(${d?.width || `100vw`}, 1300px) - 32px)`,
                                                                      y:
                                                                        (d?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        3634.5 +
                                                                        0 +
                                                                        363.25 +
                                                                        64 +
                                                                        119.5 +
                                                                        0 +
                                                                        0,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      width: `calc(min(${d?.width || `100vw`}, 1300px) - 32px)`,
                                                                      y: void 0,
                                                                    },
                                                                  },
                                                                  children: _(U, {
                                                                    height: 459,
                                                                    width: `calc(min(${d?.width || `100vw`}, 1300px) - 64px)`,
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      5272.5 +
                                                                      0 +
                                                                      399.25 +
                                                                      100 +
                                                                      119.5 +
                                                                      0 +
                                                                      0,
                                                                    children: _(H, {
                                                                      className: `framer-rqxyvn-container`,
                                                                      nodeId: `awLvQj3HF`,
                                                                      scopeId: `hqVRjOHKR`,
                                                                      children: _(K, {
                                                                        breakpoint: b,
                                                                        overrides: {
                                                                          bhI8hHikE: {
                                                                            variant: Q(`GnJr0nHu5`),
                                                                          },
                                                                          muyaqbHcV: {
                                                                            rhfwKYWKX: `column`,
                                                                            variant: Q(`GnJr0nHu5`),
                                                                          },
                                                                        },
                                                                        children: _(qa, {
                                                                          height: `100%`,
                                                                          id: `awLvQj3HF`,
                                                                          layoutId: `awLvQj3HF`,
                                                                          rhfwKYWKX: `row`,
                                                                          style: { width: `100%` },
                                                                          variant: Q(`mkg7pPB_v`),
                                                                          width: `100%`,
                                                                        }),
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
                        _(`div`, {
                          className: `framer-xqsuft`,
                          "data-framer-name": `Line`,
                          children: _(K, {
                            breakpoint: b,
                            overrides: {
                              bhI8hHikE: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 628,
                                  intrinsicWidth: 3118,
                                  loading: oe((d?.y || 0) + 0 + 0 + 0 + 4341 + 0),
                                  pixelHeight: 628,
                                  pixelWidth: 3118,
                                  sizes: d?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                                  srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                                },
                              },
                              muyaqbHcV: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 628,
                                  intrinsicWidth: 3118,
                                  pixelHeight: 628,
                                  pixelWidth: 3118,
                                  sizes: d?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                                  srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                                },
                              },
                            },
                            children: _(ge, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 628,
                                intrinsicWidth: 3118,
                                loading: oe((d?.y || 0) + 0 + 0 + 0 + 6051 + 0),
                                pixelHeight: 628,
                                pixelWidth: 3118,
                                sizes: d?.width || `100vw`,
                                src: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628`,
                                srcSet: `https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=512&width=3118&height=628 512w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=1024&width=3118&height=628 1024w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?scale-down-to=2048&width=3118&height=628 2048w,https://framerusercontent.com/images/6OvYtLHAWTYFEnAqT5IR4pMIo2g.png?width=3118&height=628 3118w`,
                              },
                              className: `framer-ofj00t`,
                              "data-framer-name": `Desktop background`,
                              fitImageDimension: `height`,
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-11ewfsl`,
                          "data-framer-name": `Testimonial `,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Fo(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        bgd3anvnR: e,
                                        co2bnv33m: t,
                                        DNLONDBp6: n,
                                        GmXY7eix6: r,
                                        id: i,
                                        J24cvFmfW: a,
                                        kW4hZZbB7: o,
                                        Us4MvBNmC: c,
                                        wpI_UE3Ri: l,
                                        XZF4ZDq6P: u,
                                      },
                                      f,
                                    ) => (
                                      (o ??= !0),
                                      (e ??= ``),
                                      (c ??= ``),
                                      (n ??= ``),
                                      (a ??= ``),
                                      _(
                                        k,
                                        {
                                          id: `CF3HGGKl9-${i}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: n },
                                            children:
                                              o !== !1 &&
                                              y(`div`, {
                                                className: `framer-1tzidwz`,
                                                "data-framer-name": `Testimonial`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      muyaqbHcV: {
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                            },
                                                            children: `Stories From Happy Homeowners.`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(s, {
                                                        children: _(`h2`, {
                                                          className: `framer-styles-preset-48d53`,
                                                          "data-styles-preset": `uo0TFsfZI`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `start`,
                                                            "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                          },
                                                          children: `Stories From Happy Homeowners.`,
                                                        }),
                                                      }),
                                                      className: `framer-1r8nuuv`,
                                                      fonts: [`Inter`],
                                                      text: e,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  y(`div`, {
                                                    className: `framer-btpfxp`,
                                                    "data-framer-name": `Container Bottom`,
                                                    children: [
                                                      y(`div`, {
                                                        className: `framer-a76t6r`,
                                                        "data-framer-name": `Column Right`,
                                                        children: [
                                                          y(`div`, {
                                                            className: `framer-9n9376`,
                                                            "data-framer-name": `Review Box`,
                                                            children: [
                                                              y(`div`, {
                                                                className: `framer-gery36`,
                                                                "data-framer-name": `Logo`,
                                                                children: [
                                                                  _(K, {
                                                                    breakpoint: b,
                                                                    overrides: {
                                                                      bhI8hHikE: {
                                                                        y:
                                                                          (d?.y || 0) +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          4472 +
                                                                          0 +
                                                                          293.75 +
                                                                          100 +
                                                                          135.5 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          1.2,
                                                                      },
                                                                      muyaqbHcV: { y: void 0 },
                                                                    },
                                                                    children: _(U, {
                                                                      height: 20,
                                                                      y:
                                                                        (d?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        6182 +
                                                                        0 +
                                                                        293.75 +
                                                                        100 +
                                                                        135.5 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        1.2,
                                                                      children: _(H, {
                                                                        className: `framer-9ms9kt-container`,
                                                                        nodeId: `pclEaPzvN`,
                                                                        scopeId: `hqVRjOHKR`,
                                                                        children: _(_t, {
                                                                          height: `100%`,
                                                                          id: `pclEaPzvN`,
                                                                          layoutId: `pclEaPzvN`,
                                                                          variant: Q(`XTwYsJHeV`),
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  _(W, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: _(s, {
                                                                      children: _(`p`, {
                                                                        className: `framer-styles-preset-piej36`,
                                                                        "data-styles-preset": `kzFJG5mqZ`,
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                        },
                                                                        children: `Google`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-vky9qe`,
                                                                    fonts: [`Inter`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              y(`div`, {
                                                                className: `framer-1ysxycp`,
                                                                "data-framer-name": `Stars`,
                                                                children: [
                                                                  _(ut, {
                                                                    animated: !1,
                                                                    className: `framer-1wfjcki`,
                                                                    layoutId: `KKle0kZtn`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  _(ut, {
                                                                    animated: !1,
                                                                    className: `framer-1o4bpxb`,
                                                                    layoutId: `z5ZfvahSk`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  _(ut, {
                                                                    animated: !1,
                                                                    className: `framer-1hrg8lq`,
                                                                    layoutId: `UB1dCJzCr`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  _(ut, {
                                                                    animated: !1,
                                                                    className: `framer-xun66m`,
                                                                    layoutId: `WEiY8MPnI`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                  _(ut, {
                                                                    animated: !1,
                                                                    className: `framer-p5fxbl`,
                                                                    layoutId: `nE6PPATLh`,
                                                                    mRgjGDEhU: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              _(W, {
                                                                __fromCanvasComponent: !0,
                                                                children: _(s, {
                                                                  children: _(`p`, {
                                                                    className: `framer-styles-preset-lqeg3j`,
                                                                    "data-styles-preset": `FQBtVWcCo`,
                                                                    dir: `auto`,
                                                                    style: {
                                                                      "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                    },
                                                                    children: `4.9/5 (25k+ Reviews)`,
                                                                  }),
                                                                }),
                                                                className: `framer-tusff3`,
                                                                "data-framer-name": `Text`,
                                                                fonts: [`Inter`],
                                                                text: c,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          _(le, {
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
                                                              _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    y:
                                                                      (d?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      4472 +
                                                                      0 +
                                                                      293.75 +
                                                                      100 +
                                                                      135.5 +
                                                                      0 +
                                                                      0 +
                                                                      180,
                                                                  },
                                                                  muyaqbHcV: { y: void 0 },
                                                                },
                                                                children: _(U, {
                                                                  height: 52,
                                                                  y:
                                                                    (d?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    6182 +
                                                                    0 +
                                                                    293.75 +
                                                                    100 +
                                                                    135.5 +
                                                                    0 +
                                                                    0 +
                                                                    180,
                                                                  children: _(H, {
                                                                    className: `framer-3lv6or-container`,
                                                                    nodeId: `sJ17EU9w9`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `hqVRjOHKR`,
                                                                    whileHover: wo,
                                                                    children: _(K, {
                                                                      breakpoint: b,
                                                                      overrides: {
                                                                        bhI8hHikE: {
                                                                          qNjswW_Tg: e[1],
                                                                        },
                                                                        muyaqbHcV: {
                                                                          qNjswW_Tg: e[2],
                                                                        },
                                                                      },
                                                                      children: _(wt, {
                                                                        AmmV7xj6g: 33,
                                                                        BgmIAzzRV: `30px`,
                                                                        DbOmokZP0: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                        EDzxvbp5Q: `8px 8px 8px 20px`,
                                                                        F9xEnRksX: `one`,
                                                                        Ftd7ea6ZK: 90,
                                                                        GmXdHB9SX: !0,
                                                                        h_OXotjfD: 12,
                                                                        height: `100%`,
                                                                        id: `sJ17EU9w9`,
                                                                        layoutId: `sJ17EU9w9`,
                                                                        LWV7WvkSz: `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                        n7FNYiflu: 2e3,
                                                                        ooNLd407F: 100,
                                                                        qcTsc8aEM: a,
                                                                        qNjswW_Tg: e[0],
                                                                        s8XHH4TvL: 4,
                                                                        ucHarSLTi: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                        width: `100%`,
                                                                        Z_ma24kbm: `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                          }),
                                                        ],
                                                      }),
                                                      _(U, {
                                                        children: _(H, {
                                                          className: `framer-15yna38-container`,
                                                          isAuthoredByUser: !0,
                                                          isModuleExternal: !0,
                                                          nodeId: `g6FGCImxV`,
                                                          scopeId: `hqVRjOHKR`,
                                                          children: _(K, {
                                                            breakpoint: b,
                                                            overrides: {
                                                              bhI8hHikE: { itemAmount: 1 },
                                                              muyaqbHcV: {
                                                                arrowOptions: {
                                                                  arrowFill: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                                                                  arrowGap: 18,
                                                                  arrowPadding: 20,
                                                                  arrowPaddingBottom: -52,
                                                                  arrowPaddingLeft: 0,
                                                                  arrowPaddingRight: 0,
                                                                  arrowPaddingTop: 0,
                                                                  arrowPosition: `bottom-mid`,
                                                                  arrowRadius: 40,
                                                                  arrowShouldFadeIn: !1,
                                                                  arrowShouldSpace: !1,
                                                                  arrowSize: 35,
                                                                  leftArrow: `https://framerusercontent.com/images/3gvMwGNAhtgjIVUkvYrhxNH3xo.png?width=296&height=296`,
                                                                  rightArrow: `https://framerusercontent.com/images/7gu6De8bI3eHalfLc1OmmLxJWzc.png?width=296&height=296`,
                                                                  showMouseControls: !0,
                                                                },
                                                                itemAmount: 1,
                                                              },
                                                            },
                                                            children: _(X, {
                                                              alignment: `center`,
                                                              arrowOptions: {
                                                                arrowFill: `var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, rgb(238, 230, 222))`,
                                                                arrowGap: 5,
                                                                arrowPadding: 20,
                                                                arrowPaddingBottom: 0,
                                                                arrowPaddingLeft: 0,
                                                                arrowPaddingRight: 0,
                                                                arrowPaddingTop: -100,
                                                                arrowPosition: `top-right`,
                                                                arrowRadius: 40,
                                                                arrowShouldFadeIn: !1,
                                                                arrowShouldSpace: !1,
                                                                arrowSize: 35,
                                                                leftArrow: `https://framerusercontent.com/images/uXyJBPl3aO9UsHoQ4Ze6aLOM.png?width=296&height=296`,
                                                                rightArrow: `https://framerusercontent.com/images/u3fT3R5ryGuCv19Zr1do5gzbgno.png?width=296&height=296`,
                                                                showMouseControls: !0,
                                                              },
                                                              autoPlayControl: !1,
                                                              borderRadius: 0,
                                                              direction: `left`,
                                                              dragControl: !1,
                                                              effectsOptions: {
                                                                effectsHover: !0,
                                                                effectsOpacity: 1,
                                                                effectsPerspective: 1200,
                                                                effectsRotate: 0,
                                                                effectsScale: 1,
                                                                playOffscreen: !1,
                                                              },
                                                              fadeOptions: {
                                                                fadeAlpha: 0,
                                                                fadeContent: !1,
                                                                fadeInset: 0,
                                                                fadeWidth: 25,
                                                                overflow: !1,
                                                              },
                                                              gap: 25,
                                                              height: `100%`,
                                                              heightSizing: `fill`,
                                                              id: `g6FGCImxV`,
                                                              intervalControl: 1.5,
                                                              itemAmount: 2,
                                                              layoutId: `g6FGCImxV`,
                                                              padding: 0,
                                                              paddingBottom: 0,
                                                              paddingLeft: 0,
                                                              paddingPerSide: !0,
                                                              paddingRight: 0,
                                                              paddingTop: 0,
                                                              progressOptions: {
                                                                dotsActiveOpacity: 1,
                                                                dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                                                dotsBlur: 0,
                                                                dotsFill: `rgb(255, 255, 255)`,
                                                                dotsGap: 10,
                                                                dotsInset: 10,
                                                                dotSize: 10,
                                                                dotsOpacity: 0.5,
                                                                dotsPadding: 10,
                                                                dotsRadius: 50,
                                                                showProgressDots: !1,
                                                              },
                                                              slots: [
                                                                _(S.div, {
                                                                  className: `framer-15wfw95`,
                                                                  children: l?.map(
                                                                    (
                                                                      {
                                                                        bTLpAFdDK: e,
                                                                        CE3BYOPJa: t,
                                                                        id: n,
                                                                        PNdlC4yXy: r,
                                                                        V562KVaHR: i,
                                                                      },
                                                                      a,
                                                                    ) => (
                                                                      (i ??= ``),
                                                                      (t ??= ``),
                                                                      (r ??= ``),
                                                                      _(
                                                                        k,
                                                                        {
                                                                          id: `wpI_UE3Ri-${n}`,
                                                                          children: _(M.Provider, {
                                                                            value: { PNdlC4yXy: r },
                                                                            children: _(U, {
                                                                              height: 296,
                                                                              width: `400px`,
                                                                              children: _(H, {
                                                                                className: `framer-16mz0x4-container`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `qQYi4y6rl`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `hqVRjOHKR`,
                                                                                children: _(mt, {
                                                                                  DzlkaxpNv: jo(e),
                                                                                  g0bVK7_xo: i,
                                                                                  height: `100%`,
                                                                                  id: `qQYi4y6rl`,
                                                                                  layoutId: `qQYi4y6rl`,
                                                                                  OjxN18wo5: t,
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  variant:
                                                                                    Q(`S5JKWUfkQ`),
                                                                                  width: `100%`,
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
                                                                _(S.div, {
                                                                  className: `framer-3gt3g8`,
                                                                  children: r?.map(
                                                                    (
                                                                      {
                                                                        bTLpAFdDK: e,
                                                                        CE3BYOPJa: t,
                                                                        id: n,
                                                                        PNdlC4yXy: r,
                                                                        V562KVaHR: i,
                                                                      },
                                                                      a,
                                                                    ) => (
                                                                      (i ??= ``),
                                                                      (t ??= ``),
                                                                      (r ??= ``),
                                                                      _(
                                                                        k,
                                                                        {
                                                                          id: `GmXY7eix6-${n}`,
                                                                          children: _(M.Provider, {
                                                                            value: { PNdlC4yXy: r },
                                                                            children: _(U, {
                                                                              height: 296,
                                                                              width: `400px`,
                                                                              children: _(H, {
                                                                                className: `framer-v27v3c-container`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `MSWByyfIA`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `hqVRjOHKR`,
                                                                                children: _(mt, {
                                                                                  DzlkaxpNv: jo(e),
                                                                                  g0bVK7_xo: i,
                                                                                  height: `100%`,
                                                                                  id: `MSWByyfIA`,
                                                                                  layoutId: `MSWByyfIA`,
                                                                                  OjxN18wo5: t,
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  variant:
                                                                                    Q(`S5JKWUfkQ`),
                                                                                  width: `100%`,
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
                                                                _(S.div, {
                                                                  className: `framer-vxf96b`,
                                                                  children: u?.map(
                                                                    (
                                                                      {
                                                                        bTLpAFdDK: e,
                                                                        CE3BYOPJa: t,
                                                                        id: n,
                                                                        PNdlC4yXy: r,
                                                                        V562KVaHR: i,
                                                                      },
                                                                      a,
                                                                    ) => (
                                                                      (i ??= ``),
                                                                      (t ??= ``),
                                                                      (r ??= ``),
                                                                      _(
                                                                        k,
                                                                        {
                                                                          id: `XZF4ZDq6P-${n}`,
                                                                          children: _(M.Provider, {
                                                                            value: { PNdlC4yXy: r },
                                                                            children: _(U, {
                                                                              height: 296,
                                                                              width: `400px`,
                                                                              children: _(H, {
                                                                                className: `framer-97pebc-container`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `tS4kgQS8s`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `hqVRjOHKR`,
                                                                                children: _(mt, {
                                                                                  DzlkaxpNv: jo(e),
                                                                                  g0bVK7_xo: i,
                                                                                  height: `100%`,
                                                                                  id: `tS4kgQS8s`,
                                                                                  layoutId: `tS4kgQS8s`,
                                                                                  OjxN18wo5: t,
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  variant:
                                                                                    Q(`S5JKWUfkQ`),
                                                                                  width: `100%`,
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
                                                                _(S.div, {
                                                                  className: `framer-1gj8mzq`,
                                                                  children: t?.map(
                                                                    (
                                                                      {
                                                                        bTLpAFdDK: e,
                                                                        CE3BYOPJa: t,
                                                                        id: n,
                                                                        PNdlC4yXy: r,
                                                                        V562KVaHR: i,
                                                                      },
                                                                      a,
                                                                    ) => (
                                                                      (i ??= ``),
                                                                      (t ??= ``),
                                                                      (r ??= ``),
                                                                      _(
                                                                        k,
                                                                        {
                                                                          id: `co2bnv33m-${n}`,
                                                                          children: _(M.Provider, {
                                                                            value: { PNdlC4yXy: r },
                                                                            children: _(U, {
                                                                              height: 296,
                                                                              width: `400px`,
                                                                              children: _(H, {
                                                                                className: `framer-1nzpa5f-container`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `IbwEKnyGV`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `hqVRjOHKR`,
                                                                                children: _(mt, {
                                                                                  DzlkaxpNv: jo(e),
                                                                                  g0bVK7_xo: i,
                                                                                  height: `100%`,
                                                                                  id: `IbwEKnyGV`,
                                                                                  layoutId: `IbwEKnyGV`,
                                                                                  OjxN18wo5: t,
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  variant:
                                                                                    Q(`S5JKWUfkQ`),
                                                                                  width: `100%`,
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
                                                              ],
                                                              startFrom: 0,
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                              transitionControl: {
                                                                damping: 40,
                                                                delay: 0,
                                                                mass: 1,
                                                                stiffness: 200,
                                                                type: `spring`,
                                                              },
                                                              width: `100%`,
                                                              widthSizing: `fill`,
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
                                        i,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-dt0z7m`,
                          "data-framer-name": `About`,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Io(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        AjEfrSusG: e,
                                        DNLONDBp6: t,
                                        id: n,
                                        kkNzkQ6By: r,
                                        SyTYgr_u5: i,
                                        UOksCzmv9: a,
                                        WSJCyQlYE: o,
                                      },
                                      c,
                                    ) => (
                                      (e ??= !0),
                                      (i ??= ``),
                                      (o ??= ``),
                                      (t ??= ``),
                                      (r ??= ``),
                                      _(
                                        k,
                                        {
                                          id: `fu3CNtwTZ-${n}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: t },
                                            children:
                                              e !== !1 &&
                                              y(`div`, {
                                                className: `framer-q2zqbz`,
                                                "data-framer-name": `About`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      bhI8hHikE: {
                                                        background: {
                                                          alt: `woman in white off shoulder dress`,
                                                          fit: `fill`,
                                                          intrinsicHeight: 5046,
                                                          intrinsicWidth: 4037,
                                                          loading: oe(
                                                            (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              5039.5 +
                                                              100 +
                                                              222.5 +
                                                              4,
                                                          ),
                                                          pixelHeight: 7952,
                                                          pixelWidth: 5304,
                                                          sizes: `333px`,
                                                          ...jo(a),
                                                        },
                                                      },
                                                      muyaqbHcV: {
                                                        background: {
                                                          alt: `woman in white off shoulder dress`,
                                                          fit: `fill`,
                                                          intrinsicHeight: 5046,
                                                          intrinsicWidth: 4037,
                                                          pixelHeight: 7952,
                                                          pixelWidth: 5304,
                                                          sizes: `calc(min(${d?.width || `100vw`} - 32px, 1226px) - 8px)`,
                                                          ...jo(a),
                                                        },
                                                      },
                                                    },
                                                    children: _(ge, {
                                                      background: {
                                                        alt: `woman in white off shoulder dress`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 5046,
                                                        intrinsicWidth: 4037,
                                                        loading: oe(
                                                          (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            6749.5 +
                                                            100 +
                                                            253 +
                                                            4,
                                                        ),
                                                        pixelHeight: 7952,
                                                        pixelWidth: 5304,
                                                        sizes: `449px`,
                                                        ...jo(a),
                                                      },
                                                      className: `framer-1s4sbxl`,
                                                      "data-framer-name": `Image`,
                                                    }),
                                                  }),
                                                  y(`div`, {
                                                    className: `framer-xsyr2o`,
                                                    "data-framer-name": `About details`,
                                                    children: [
                                                      _(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            children: `Meet Sophia`,
                                                          }),
                                                        }),
                                                        className: `framer-132l9qo`,
                                                        fonts: [`Inter`],
                                                        text: i,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      _(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: _(s, {
                                                          children: _(`p`, {
                                                            className: `framer-styles-preset-piej36`,
                                                            "data-styles-preset": `kzFJG5mqZ`,
                                                            dir: `auto`,
                                                            children: `Sophia Sterling has spent 12 years designing full homes across Scottsdale. She works with a small number of clients each year, by choice. Every project gets her full attention, from first sketch to final walkthrough.`,
                                                          }),
                                                        }),
                                                        className: `framer-11eahk5`,
                                                        fonts: [`Inter`],
                                                        text: o,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      _(le, {
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
                                                          _(K, {
                                                            breakpoint: b,
                                                            overrides: {
                                                              bhI8hHikE: {
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  5039.5 +
                                                                  100 +
                                                                  222.5 +
                                                                  4 +
                                                                  0 +
                                                                  298.25,
                                                              },
                                                              muyaqbHcV: { y: void 0 },
                                                            },
                                                            children: _(U, {
                                                              height: 52,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                6749.5 +
                                                                100 +
                                                                253 +
                                                                4 +
                                                                0 +
                                                                352.75,
                                                              children: _(H, {
                                                                className: `framer-cpdiyb-container`,
                                                                nodeId: `O5ecmWSek`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `hqVRjOHKR`,
                                                                whileHover: wo,
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: { qNjswW_Tg: e[1] },
                                                                    muyaqbHcV: { qNjswW_Tg: e[2] },
                                                                  },
                                                                  children: _(wt, {
                                                                    AmmV7xj6g: 33,
                                                                    BgmIAzzRV: `30px`,
                                                                    DbOmokZP0: `rgb(255, 255, 255)`,
                                                                    EDzxvbp5Q: `12px 12px 12px 20px`,
                                                                    F9xEnRksX: `one`,
                                                                    Ftd7ea6ZK: 90,
                                                                    GmXdHB9SX: !0,
                                                                    h_OXotjfD: 12,
                                                                    height: `100%`,
                                                                    id: `O5ecmWSek`,
                                                                    layoutId: `O5ecmWSek`,
                                                                    LWV7WvkSz: `rgb(255, 255, 255)`,
                                                                    n7FNYiflu: 2e3,
                                                                    ooNLd407F: 100,
                                                                    qcTsc8aEM: r,
                                                                    qNjswW_Tg: e[0],
                                                                    s8XHH4TvL: 4,
                                                                    ucHarSLTi: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                                                                    width: `100%`,
                                                                    Z_ma24kbm: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                                                                  }),
                                                                }),
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
                                        n,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-qs1bgd`,
                          "data-framer-name": `Line`,
                          children: _(K, {
                            breakpoint: b,
                            overrides: {
                              bhI8hHikE: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 122,
                                  intrinsicWidth: 3118,
                                  loading: oe((d?.y || 0) + 0 + 0 + 0 + 5664.5 + -18),
                                  pixelHeight: 122,
                                  pixelWidth: 3118,
                                  sizes: d?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                  srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                                },
                              },
                              muyaqbHcV: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 122,
                                  intrinsicWidth: 3118,
                                  pixelHeight: 122,
                                  pixelWidth: 3118,
                                  sizes: d?.width || `100vw`,
                                  src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                  srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                                },
                              },
                            },
                            children: _(ge, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 122,
                                intrinsicWidth: 3118,
                                loading: oe((d?.y || 0) + 0 + 0 + 0 + 7435.5 + -29),
                                pixelHeight: 122,
                                pixelWidth: 3118,
                                sizes: d?.width || `100vw`,
                                src: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122`,
                                srcSet: `https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=512&width=3118&height=122 512w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=1024&width=3118&height=122 1024w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?scale-down-to=2048&width=3118&height=122 2048w,https://framerusercontent.com/images/sI0bco2opGtbrzyBHwn0AQJAlD0.png?width=3118&height=122 3118w`,
                              },
                              className: `framer-8hdjha`,
                              "data-framer-name": `Desktop background`,
                              fitImageDimension: `height`,
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-1702m92`,
                          "data-framer-name": `Process `,
                          children: _(xe, {
                            children: _(Eo, {
                              query: zo(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        a1eMGQfoO: e,
                                        d5pwhuSPq: t,
                                        DNLONDBp6: n,
                                        h4SurtUIl: r,
                                        id: i,
                                        LbJZaj4qi: a,
                                        lzd_VfUJy: o,
                                        QM6fmVOon: c,
                                        RQEI8qLsi: l,
                                        SGJlyZPrX: u,
                                        SM0REQyQd: f,
                                        tI8pA1Mtm: p,
                                        tSw7kTltu: m,
                                        uaj7yKWNo: ee,
                                        wL0WOQRlC: h,
                                        Zip1uRTGR: g,
                                      },
                                      v,
                                    ) => (
                                      (a ??= !0),
                                      (t ??= ``),
                                      (n ??= ``),
                                      (p ??= ``),
                                      (c ??= ``),
                                      (l ??= ``),
                                      (g ??= ``),
                                      (h ??= ``),
                                      (u ??= ``),
                                      (m ??= ``),
                                      (r ??= ``),
                                      _(
                                        k,
                                        {
                                          id: `f5x8KPcz3-${i}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: n },
                                            children:
                                              a !== !1 &&
                                              y(`div`, {
                                                className: `framer-6abaur`,
                                                "data-framer-name": `Process`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      muyaqbHcV: {
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                            },
                                                            children: `Simple Process Stunning Transformations.`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(s, {
                                                        children: _(`h2`, {
                                                          className: `framer-styles-preset-48d53`,
                                                          "data-styles-preset": `uo0TFsfZI`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                          },
                                                          children: `HOW WE GET IT DONE`,
                                                        }),
                                                      }),
                                                      className: `framer-qmha03`,
                                                      fonts: [`Inter`],
                                                      text: t,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  y(`div`, {
                                                    className: `framer-6fqgmj`,
                                                    "data-framer-name": `Proces`,
                                                    children: [
                                                      se() &&
                                                        _(`div`, {
                                                          className: `framer-gun7vn hidden-1g9k2v9`,
                                                          "data-framer-name": `1`,
                                                          children: _(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: _(s, {
                                                              children: _(`h4`, {
                                                                className: `framer-styles-preset-1nvzv7u`,
                                                                "data-styles-preset": `WtX7HRPZM`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                },
                                                                children: `01`,
                                                              }),
                                                            }),
                                                            className: `framer-h0jhd6`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          bhI8hHikE: {
                                                            height: 220,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              5687.5 +
                                                              64 +
                                                              187.75 +
                                                              0 +
                                                              135.5 +
                                                              0 +
                                                              55,
                                                          },
                                                          muyaqbHcV: {
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y: void 0,
                                                          },
                                                        },
                                                        children: _(U, {
                                                          height: 268,
                                                          width: `min(min(${d?.width || `100vw`}, 1300px) - 64px, 700px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            7458.5 +
                                                            100 +
                                                            723.75 +
                                                            0 +
                                                            135.5 +
                                                            0 +
                                                            55,
                                                          children: _(H, {
                                                            className: `framer-1gjelnp-container`,
                                                            id: `${n}-${I}`,
                                                            nodeId: `XjiLFbzPY`,
                                                            ref: O(`${n}-${I}`),
                                                            scopeId: `hqVRjOHKR`,
                                                            children: _(K, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                bhI8hHikE: {
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                },
                                                                muyaqbHcV: {
                                                                  variant: Q(`Cghhha8oR`),
                                                                },
                                                              },
                                                              children: _(xi, {
                                                                a1eT_lNSF: ee,
                                                                ANmoPr7gg: c,
                                                                FAel9WhhA: `aycaUeSqY`,
                                                                height: `100%`,
                                                                id: `XjiLFbzPY`,
                                                                layoutId: `XjiLFbzPY`,
                                                                oB8sNEpjw: O(`${n}-${I}`),
                                                                style: { width: `100%` },
                                                                variant: Q(`tHnQIkzkf`),
                                                                width: `100%`,
                                                                xVGdm2c17: p,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      se() &&
                                                        _(`div`, {
                                                          className: `framer-m8v6lc hidden-1g9k2v9`,
                                                          "data-framer-name": `2`,
                                                          children: _(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: _(s, {
                                                              children: _(`h4`, {
                                                                className: `framer-styles-preset-1nvzv7u`,
                                                                "data-styles-preset": `WtX7HRPZM`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                },
                                                                children: `02`,
                                                              }),
                                                            }),
                                                            className: `framer-mmyz1r`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          bhI8hHikE: {
                                                            height: 220,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              5687.5 +
                                                              64 +
                                                              187.75 +
                                                              0 +
                                                              135.5 +
                                                              0 +
                                                              330,
                                                          },
                                                          muyaqbHcV: {
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y: void 0,
                                                          },
                                                        },
                                                        children: _(U, {
                                                          height: 268,
                                                          width: `min(min(${d?.width || `100vw`}, 1300px) - 64px, 700px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            7458.5 +
                                                            100 +
                                                            723.75 +
                                                            0 +
                                                            135.5 +
                                                            0 +
                                                            378,
                                                          children: _(uo, {
                                                            __framer__animate: { transition: Ro },
                                                            __framer__animateOnce: !0,
                                                            __framer__enter: Lo,
                                                            __framer__styleAppearEffectEnabled: !0,
                                                            __framer__targets: [
                                                              {
                                                                ref: O(`${n}-${ce}`),
                                                                target: `animate`,
                                                              },
                                                            ],
                                                            __framer__threshold: 1,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-fva6ax-container`,
                                                            id: `${n}-${ce}`,
                                                            nodeId: `Zek1kF8cZ`,
                                                            ref: O(`${n}-${ce}`),
                                                            rendersWithMotion: !0,
                                                            scopeId: `hqVRjOHKR`,
                                                            children: _(K, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                bhI8hHikE: {
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                },
                                                                muyaqbHcV: {
                                                                  variant: Q(`Cghhha8oR`),
                                                                },
                                                              },
                                                              children: _(xi, {
                                                                a1eT_lNSF: e,
                                                                ANmoPr7gg: g,
                                                                FAel9WhhA: `qHfKhpNiJ`,
                                                                height: `100%`,
                                                                id: `Zek1kF8cZ`,
                                                                layoutId: `Zek1kF8cZ`,
                                                                oB8sNEpjw: O(`${n}-${ce}`),
                                                                style: { width: `100%` },
                                                                variant: Q(`tHnQIkzkf`),
                                                                width: `100%`,
                                                                xVGdm2c17: l,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      se() &&
                                                        _(`div`, {
                                                          className: `framer-t1fo78 hidden-1g9k2v9`,
                                                          "data-framer-name": `3`,
                                                          children: _(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: _(s, {
                                                              children: _(`h4`, {
                                                                className: `framer-styles-preset-1nvzv7u`,
                                                                "data-styles-preset": `WtX7HRPZM`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                },
                                                                children: `03`,
                                                              }),
                                                            }),
                                                            className: `framer-7t0iah`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          bhI8hHikE: {
                                                            height: 220,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              5687.5 +
                                                              64 +
                                                              187.75 +
                                                              0 +
                                                              135.5 +
                                                              0 +
                                                              605,
                                                          },
                                                          muyaqbHcV: {
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y: void 0,
                                                          },
                                                        },
                                                        children: _(U, {
                                                          height: 268,
                                                          width: `min(min(${d?.width || `100vw`}, 1300px) - 64px, 700px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            7458.5 +
                                                            100 +
                                                            723.75 +
                                                            0 +
                                                            135.5 +
                                                            0 +
                                                            701,
                                                          children: _(uo, {
                                                            __framer__animate: { transition: Ro },
                                                            __framer__animateOnce: !0,
                                                            __framer__enter: Lo,
                                                            __framer__styleAppearEffectEnabled: !0,
                                                            __framer__targets: [
                                                              {
                                                                ref: O(`${n}-${L}`),
                                                                target: `animate`,
                                                              },
                                                            ],
                                                            __framer__threshold: 1,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-xpzsho-container`,
                                                            id: `${n}-${L}`,
                                                            nodeId: `bVb0zECjS`,
                                                            ref: O(`${n}-${L}`),
                                                            rendersWithMotion: !0,
                                                            scopeId: `hqVRjOHKR`,
                                                            children: _(K, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                bhI8hHikE: {
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                },
                                                                muyaqbHcV: {
                                                                  variant: Q(`Cghhha8oR`),
                                                                },
                                                              },
                                                              children: _(xi, {
                                                                a1eT_lNSF: o,
                                                                ANmoPr7gg: u,
                                                                FAel9WhhA: `KbTgOZv6L`,
                                                                height: `100%`,
                                                                id: `bVb0zECjS`,
                                                                layoutId: `bVb0zECjS`,
                                                                oB8sNEpjw: O(`${n}-${L}`),
                                                                style: { width: `100%` },
                                                                variant: Q(`tHnQIkzkf`),
                                                                width: `100%`,
                                                                xVGdm2c17: h,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      se() &&
                                                        _(`div`, {
                                                          className: `framer-1iydg2i hidden-1g9k2v9`,
                                                          "data-framer-name": `3`,
                                                          children: _(W, {
                                                            __fromCanvasComponent: !0,
                                                            children: _(s, {
                                                              children: _(`h4`, {
                                                                className: `framer-styles-preset-1nvzv7u`,
                                                                "data-styles-preset": `WtX7HRPZM`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-e1bc1f5a-8498-49bf-9b3c-fcb2a0fd6f00, rgb(255, 255, 255))`,
                                                                },
                                                                children: `04`,
                                                              }),
                                                            }),
                                                            className: `framer-m10cp6`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          bhI8hHikE: {
                                                            height: 220,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              5687.5 +
                                                              64 +
                                                              187.75 +
                                                              0 +
                                                              135.5 +
                                                              0 +
                                                              880,
                                                          },
                                                          muyaqbHcV: {
                                                            width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 700px)`,
                                                            y: void 0,
                                                          },
                                                        },
                                                        children: _(U, {
                                                          height: 268,
                                                          width: `min(min(${d?.width || `100vw`}, 1300px) - 64px, 700px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            7458.5 +
                                                            100 +
                                                            723.75 +
                                                            0 +
                                                            135.5 +
                                                            0 +
                                                            1024,
                                                          children: _(uo, {
                                                            __framer__animate: { transition: Ro },
                                                            __framer__animateOnce: !0,
                                                            __framer__enter: Lo,
                                                            __framer__styleAppearEffectEnabled: !0,
                                                            __framer__targets: [
                                                              {
                                                                ref: O(`${n}-${R}`),
                                                                target: `animate`,
                                                              },
                                                            ],
                                                            __framer__threshold: 1,
                                                            __perspectiveFX: !1,
                                                            __targetOpacity: 1,
                                                            className: `framer-y1g0db-container`,
                                                            id: `${n}-${R}`,
                                                            nodeId: `mNVgQPFAg`,
                                                            ref: O(`${n}-${R}`),
                                                            rendersWithMotion: !0,
                                                            scopeId: `hqVRjOHKR`,
                                                            children: _(K, {
                                                              breakpoint: b,
                                                              overrides: {
                                                                bhI8hHikE: {
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                },
                                                                muyaqbHcV: {
                                                                  variant: Q(`Cghhha8oR`),
                                                                },
                                                              },
                                                              children: _(xi, {
                                                                a1eT_lNSF: f,
                                                                ANmoPr7gg: r,
                                                                FAel9WhhA: `lv4dfmvCS`,
                                                                height: `100%`,
                                                                id: `mNVgQPFAg`,
                                                                layoutId: `mNVgQPFAg`,
                                                                oB8sNEpjw: O(`${n}-${R}`),
                                                                style: { width: `100%` },
                                                                variant: Q(`tHnQIkzkf`),
                                                                width: `100%`,
                                                                xVGdm2c17: m,
                                                              }),
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
                                        i,
                                      )
                                    ),
                                  ),
                                }),
                            }),
                          }),
                        }),
                        _(`section`, {
                          className: `framer-1uyjv2o`,
                          "data-framer-name": `CTA`,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Bo(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        DNLONDBp6: e,
                                        id: t,
                                        jbX2Dvqv8: n,
                                        jEf1Eus4b: r,
                                        Lsf8hy0QI: i,
                                        QEFLGmUvt: a,
                                        r8bDLthd2: o,
                                      },
                                      c,
                                    ) => (
                                      (r ??= !0),
                                      (o ??= ``),
                                      (i ??= ``),
                                      (e ??= ``),
                                      (n ??= ``),
                                      _(
                                        k,
                                        {
                                          id: `Gv5K80_mX-${t}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: e },
                                            children:
                                              r !== !1 &&
                                              y(`div`, {
                                                className: `framer-rsohhi`,
                                                "data-framer-name": `CTA`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      bhI8hHikE: {
                                                        height: 754,
                                                        width: `min(${d?.width || `100vw`} - 32px, 1300px)`,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          6171 +
                                                          64 +
                                                          387 +
                                                          0,
                                                      },
                                                      muyaqbHcV: {
                                                        height: -1728,
                                                        width: `min(${d?.width || `100vw`} - 32px, 1300px)`,
                                                        y: void 0,
                                                      },
                                                    },
                                                    children: _(U, {
                                                      height: 703,
                                                      width: `min(${d?.width || `100vw`} - 64px, 1300px)`,
                                                      y:
                                                        (d?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        9086 +
                                                        100 +
                                                        361.5 +
                                                        0,
                                                      children: _(H, {
                                                        className: `framer-13bnoov-container`,
                                                        nodeId: `OZymk493f`,
                                                        scopeId: `hqVRjOHKR`,
                                                        children: _(ot, {
                                                          height: `100%`,
                                                          id: `OZymk493f`,
                                                          layoutId: `OZymk493f`,
                                                          style: { height: `100%`, width: `100%` },
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  y(`div`, {
                                                    className: `framer-13tnkqg`,
                                                    "data-framer-name": `Title`,
                                                    children: [
                                                      _(W, {
                                                        __fromCanvasComponent: !0,
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                            },
                                                            children: `Planning a Home Remodel?`,
                                                          }),
                                                        }),
                                                        className: `framer-zlb3gg`,
                                                        fonts: [`Inter`],
                                                        text: o,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      _(K, {
                                                        breakpoint: b,
                                                        overrides: {
                                                          bhI8hHikE: {
                                                            children: _(s, {
                                                              children: _(`h3`, {
                                                                className: `framer-styles-preset-1pr57h3`,
                                                                "data-styles-preset": `hMoFYBqBy`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-alignment": `center`,
                                                                  "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                                },
                                                                children: `Tell us about your project and get a free estimate from our remodeling team.`,
                                                              }),
                                                            }),
                                                          },
                                                          muyaqbHcV: {
                                                            children: _(s, {
                                                              children: _(`p`, {
                                                                className: `framer-styles-preset-piej36`,
                                                                "data-styles-preset": `kzFJG5mqZ`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-alignment": `center`,
                                                                  "--framer-text-color": `var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, rgb(84, 84, 84))`,
                                                                },
                                                                children: `Tell us about your project and get a free estimate from our remodeling team.`,
                                                              }),
                                                            }),
                                                          },
                                                        },
                                                        children: _(W, {
                                                          __fromCanvasComponent: !0,
                                                          children: _(s, {
                                                            children: _(`p`, {
                                                              className: `framer-styles-preset-piej36`,
                                                              "data-styles-preset": `kzFJG5mqZ`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                              },
                                                              children: `Tell us about your project and get a free estimate from our remodeling team.`,
                                                            }),
                                                          }),
                                                          className: `framer-9f2biy`,
                                                          fonts: [`Inter`],
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      _(le, {
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
                                                          _(K, {
                                                            breakpoint: b,
                                                            overrides: {
                                                              bhI8hHikE: {
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  6171 +
                                                                  64 +
                                                                  387 +
                                                                  0 +
                                                                  48 +
                                                                  151.5,
                                                              },
                                                              muyaqbHcV: { y: void 0 },
                                                            },
                                                            children: _(U, {
                                                              height: 52,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                9086 +
                                                                100 +
                                                                361.5 +
                                                                0 +
                                                                48 +
                                                                215.5,
                                                              children: _(H, {
                                                                className: `framer-1bnw9vo-container`,
                                                                nodeId: `AH2J7x9hW`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `hqVRjOHKR`,
                                                                whileHover: wo,
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: { qNjswW_Tg: e[1] },
                                                                    muyaqbHcV: { qNjswW_Tg: e[2] },
                                                                  },
                                                                  children: _(wt, {
                                                                    AmmV7xj6g: 33,
                                                                    BgmIAzzRV: `30px`,
                                                                    DbOmokZP0: `rgb(255, 255, 255)`,
                                                                    EDzxvbp5Q: `12px 12px 12px 20px`,
                                                                    F9xEnRksX: `one`,
                                                                    Ftd7ea6ZK: 90,
                                                                    GmXdHB9SX: !0,
                                                                    h_OXotjfD: 12,
                                                                    height: `100%`,
                                                                    id: `AH2J7x9hW`,
                                                                    layoutId: `AH2J7x9hW`,
                                                                    LWV7WvkSz: `rgb(255, 255, 255)`,
                                                                    n7FNYiflu: 2e3,
                                                                    ooNLd407F: 100,
                                                                    qcTsc8aEM: n,
                                                                    qNjswW_Tg: e[0],
                                                                    s8XHH4TvL: 4,
                                                                    ucHarSLTi: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(52, 224, 161))`,
                                                                    width: `100%`,
                                                                    Z_ma24kbm: `var(--token-440156fa-50ac-4faf-baf1-398af31f7753, rgb(207, 48, 0))`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                    ],
                                                  }),
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      bhI8hHikE: {
                                                        width: `calc(min(${d?.width || `100vw`} - 32px, 1300px) - 32px)`,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          6171 +
                                                          64 +
                                                          387 +
                                                          115 +
                                                          0,
                                                      },
                                                      muyaqbHcV: {
                                                        width: `min(${d?.width || `100vw`} - 32px, 1300px)`,
                                                        y: void 0,
                                                      },
                                                    },
                                                    children: _(U, {
                                                      height: 639,
                                                      width: `min(${d?.width || `100vw`} - 64px, 1300px)`,
                                                      y:
                                                        (d?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        9086 +
                                                        100 +
                                                        361.5 +
                                                        64 +
                                                        0,
                                                      children: _(H, {
                                                        className: `framer-1nsir8t-container`,
                                                        nodeId: `vpnqmC__w`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `hqVRjOHKR`,
                                                        children: _(mo, {
                                                          __framer__animateOnce: !0,
                                                          __framer__obscuredVariantId: `VKVeyMLqc`,
                                                          __framer__threshold: 0.5,
                                                          __framer__variantAppearEffectEnabled: !0,
                                                          __framer__visibleVariantId: `LaRV5dLIS`,
                                                          Ec3MabikA: a,
                                                          height: `100%`,
                                                          id: `vpnqmC__w`,
                                                          layoutId: `vpnqmC__w`,
                                                          style: { height: `100%`, width: `100%` },
                                                          variant: Q(`VKVeyMLqc`),
                                                          width: `100%`,
                                                          Zoazf7w1d: `0px`,
                                                        }),
                                                      }),
                                                    }),
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
                        _(`section`, {
                          className: `framer-1rgbut6`,
                          "data-framer-name": `FAQ `,
                          children: _(xe, {
                            children: _(Eo, {
                              query: Wo(),
                              children: (e, t, n) =>
                                _(h, {
                                  children: e?.map(
                                    (
                                      {
                                        d1zuH3MoL: e,
                                        DNLONDBp6: t,
                                        i1CdRvqj3: n,
                                        id: r,
                                        ivcpQTUmb: i,
                                        KZhR3kDHi: a,
                                        mJhCZykKv: o,
                                        OjjDQiI6f: c,
                                        PP2TwaJhQ: l,
                                        RJkX1qcmd: u,
                                        Sjm1atq2q: f,
                                        zo5LoO_43: p,
                                      },
                                      m,
                                    ) => {
                                      ((p ??= !0),
                                        (i ??= ``),
                                        (u ??= ``),
                                        (a ??= ``),
                                        (c ??= ``),
                                        (l ??= ``),
                                        (o ??= ``),
                                        (f ??= ``),
                                        (n ??= ``),
                                        (e ??= ``),
                                        (t ??= ``));
                                      let ee = Uo(o),
                                        h = Uo(n);
                                      return _(
                                        k,
                                        {
                                          id: `OKijYx0HG-${r}`,
                                          children: _(M.Provider, {
                                            value: { DNLONDBp6: t },
                                            children:
                                              p !== !1 &&
                                              y(`div`, {
                                                className: `framer-epgoof`,
                                                "data-framer-name": `Faq`,
                                                children: [
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      muyaqbHcV: {
                                                        children: _(s, {
                                                          children: _(`h2`, {
                                                            className: `framer-styles-preset-48d53`,
                                                            "data-styles-preset": `uo0TFsfZI`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `left`,
                                                              "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                            },
                                                            children: `Stories From Happy Homeowners.`,
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(s, {
                                                        children: _(`h2`, {
                                                          className: `framer-styles-preset-48d53`,
                                                          "data-styles-preset": `uo0TFsfZI`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-f2dc4843-1d06-43ac-9b40-3e998873a17c, rgb(0, 0, 0))`,
                                                          },
                                                          children: `Common Renovation Questions.`,
                                                        }),
                                                      }),
                                                      className: `framer-sx4yiy`,
                                                      fonts: [`Inter`],
                                                      text: i,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  _(K, {
                                                    breakpoint: b,
                                                    overrides: {
                                                      muyaqbHcV: {
                                                        __framer__styleAppearEffectEnabled: void 0,
                                                      },
                                                    },
                                                    children: y(ao, {
                                                      __framer__animate: { transition: Ho },
                                                      __framer__animateOnce: !0,
                                                      __framer__enter: Vo,
                                                      __framer__styleAppearEffectEnabled: !0,
                                                      __framer__threshold: 0.5,
                                                      __perspectiveFX: !1,
                                                      __targetOpacity: 1,
                                                      className: `framer-1tvkv1r`,
                                                      "data-framer-name": `FAQ`,
                                                      children: [
                                                        _(K, {
                                                          breakpoint: b,
                                                          overrides: {
                                                            bhI8hHikE: {
                                                              width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                7053 +
                                                                0 +
                                                                341.75 +
                                                                64 +
                                                                119.5 +
                                                                0 +
                                                                110,
                                                            },
                                                            muyaqbHcV: {
                                                              width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                              y: void 0,
                                                            },
                                                          },
                                                          children: _(U, {
                                                            height: 86,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px), 600px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              9989 +
                                                              0 +
                                                              377.75 +
                                                              100 +
                                                              119.5 +
                                                              0 +
                                                              110,
                                                            children: _(H, {
                                                              className: `framer-l77scq-container`,
                                                              nodeId: `FL8e3Ultr`,
                                                              scopeId: `hqVRjOHKR`,
                                                              children: _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                  },
                                                                  muyaqbHcV: {
                                                                    gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                  },
                                                                },
                                                                children: _(Gi, {
                                                                  gbFlxOFtJ: `32px`,
                                                                  height: `100%`,
                                                                  id: `FL8e3Ultr`,
                                                                  JFkHxuSbp: u,
                                                                  layoutId: `FL8e3Ultr`,
                                                                  NTK1_iOAR: a,
                                                                  style: { width: `100%` },
                                                                  variant: Q(`g3G0vDoUT`),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        _(K, {
                                                          breakpoint: b,
                                                          overrides: {
                                                            bhI8hHikE: {
                                                              width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                7053 +
                                                                0 +
                                                                341.75 +
                                                                64 +
                                                                119.5 +
                                                                0 +
                                                                220,
                                                            },
                                                            muyaqbHcV: {
                                                              width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                              y: void 0,
                                                            },
                                                          },
                                                          children: _(U, {
                                                            height: 86,
                                                            width: `min(min(${d?.width || `100vw`}, 1300px), 600px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              9989 +
                                                              0 +
                                                              377.75 +
                                                              100 +
                                                              119.5 +
                                                              0 +
                                                              220,
                                                            children: _(H, {
                                                              className: `framer-bm4ppq-container`,
                                                              nodeId: `cAPlRHEgk`,
                                                              scopeId: `hqVRjOHKR`,
                                                              children: _(K, {
                                                                breakpoint: b,
                                                                overrides: {
                                                                  bhI8hHikE: {
                                                                    gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                  },
                                                                  muyaqbHcV: {
                                                                    gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                  },
                                                                },
                                                                children: _(Gi, {
                                                                  gbFlxOFtJ: `32px`,
                                                                  height: `100%`,
                                                                  id: `cAPlRHEgk`,
                                                                  JFkHxuSbp: c,
                                                                  layoutId: `cAPlRHEgk`,
                                                                  NTK1_iOAR: l,
                                                                  style: { width: `100%` },
                                                                  variant: Q(`g3G0vDoUT`),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                        ee !== !1 &&
                                                          _(K, {
                                                            breakpoint: b,
                                                            overrides: {
                                                              bhI8hHikE: {
                                                                width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  7053 +
                                                                  0 +
                                                                  341.75 +
                                                                  64 +
                                                                  119.5 +
                                                                  0 +
                                                                  330,
                                                              },
                                                              muyaqbHcV: {
                                                                width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                                y: void 0,
                                                              },
                                                            },
                                                            children: _(U, {
                                                              height: 86,
                                                              width: `min(min(${d?.width || `100vw`}, 1300px), 600px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                9989 +
                                                                0 +
                                                                377.75 +
                                                                100 +
                                                                119.5 +
                                                                0 +
                                                                330,
                                                              children: _(H, {
                                                                className: `framer-1cblpfc-container`,
                                                                nodeId: `QoaBIpIuR`,
                                                                scopeId: `hqVRjOHKR`,
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                    },
                                                                  },
                                                                  children: _(Gi, {
                                                                    gbFlxOFtJ: `32px`,
                                                                    height: `100%`,
                                                                    id: `QoaBIpIuR`,
                                                                    JFkHxuSbp: o,
                                                                    layoutId: `QoaBIpIuR`,
                                                                    NTK1_iOAR: f,
                                                                    style: { width: `100%` },
                                                                    variant: Q(`g3G0vDoUT`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        h !== !1 &&
                                                          _(K, {
                                                            breakpoint: b,
                                                            overrides: {
                                                              bhI8hHikE: {
                                                                width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                                y:
                                                                  (d?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  7053 +
                                                                  0 +
                                                                  341.75 +
                                                                  64 +
                                                                  119.5 +
                                                                  0 +
                                                                  330,
                                                              },
                                                              muyaqbHcV: {
                                                                width: `min(min(${d?.width || `100vw`}, 1300px) - 32px, 600px)`,
                                                                y: void 0,
                                                              },
                                                            },
                                                            children: _(U, {
                                                              height: 86,
                                                              width: `min(min(${d?.width || `100vw`}, 1300px), 600px)`,
                                                              y:
                                                                (d?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                9989 +
                                                                0 +
                                                                377.75 +
                                                                100 +
                                                                119.5 +
                                                                0 +
                                                                330,
                                                              children: _(H, {
                                                                className: `framer-1ypwnuj-container`,
                                                                nodeId: `q51UrF7P0`,
                                                                scopeId: `hqVRjOHKR`,
                                                                children: _(K, {
                                                                  breakpoint: b,
                                                                  overrides: {
                                                                    bhI8hHikE: {
                                                                      gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                    },
                                                                    muyaqbHcV: {
                                                                      gbFlxOFtJ: `24px 16px 24px 16px`,
                                                                    },
                                                                  },
                                                                  children: _(Gi, {
                                                                    gbFlxOFtJ: `32px`,
                                                                    height: `100%`,
                                                                    id: `q51UrF7P0`,
                                                                    JFkHxuSbp: n,
                                                                    layoutId: `q51UrF7P0`,
                                                                    NTK1_iOAR: e,
                                                                    style: { width: `100%` },
                                                                    variant: Q(`g3G0vDoUT`),
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                          }),
                                        },
                                        r,
                                      );
                                    },
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                _(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ps6yJ.framer-5c1axr, .framer-ps6yJ .framer-5c1axr { display: block; }`,
        `.framer-ps6yJ.framer-1bqzvwo { align-content: center; align-items: center; background-color: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ps6yJ .framer-um1u70-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-ps6yJ .framer-yj12ww { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-12svfce { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-134503r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; max-height: 800px; overflow: visible; padding: 64px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-likbir-container { bottom: -21px; flex: none; left: -1px; position: absolute; right: 1px; top: 0px; z-index: 1; }`,
        `.framer-ps6yJ .framer-1ugytsn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 600px; z-index: 3; }`,
        `.framer-ps6yJ .framer-mttbew { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-ps6yJ .framer-1ncv6lw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 500px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-ps6yJ .framer-1ncfy0p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-ps6yJ .framer-h129pf-container, .framer-ps6yJ .framer-o2s20h-container, .framer-ps6yJ .framer-3lv6or-container, .framer-ps6yJ .framer-cpdiyb-container, .framer-ps6yJ .framer-1bnw9vo-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-ps6yJ .framer-2ng5m5 { --border-bottom-width: 1px; --border-color: var(--token-83576c6d-486a-4974-ab02-7017628e9739, #968071); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 90px; border-bottom-right-radius: 90px; border-top-left-radius: 90px; border-top-right-radius: 90px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 16px 10px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ps6yJ .framer-n15uoz, .framer-ps6yJ .framer-gery36 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ps6yJ .framer-1l7huc6-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 31px; }`,
        `.framer-ps6yJ .framer-deo1ze { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 142px; }`,
        `.framer-ps6yJ .framer-1s17e5, .framer-ps6yJ .framer-1ysxycp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ps6yJ .framer-1paz4wb, .framer-ps6yJ .framer-1uh7toj, .framer-ps6yJ .framer-e9fw3e, .framer-ps6yJ .framer-1ojpa3p, .framer-ps6yJ .framer-1g1928s, .framer-ps6yJ .framer-1wfjcki, .framer-ps6yJ .framer-1o4bpxb, .framer-ps6yJ .framer-1hrg8lq, .framer-ps6yJ .framer-xun66m, .framer-ps6yJ .framer-p5fxbl { --frkg9v: #fa9727; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 13px; }`,
        `.framer-ps6yJ .framer-1vluiyz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ps6yJ .framer-2avqfz, .framer-ps6yJ .framer-vky9qe, .framer-ps6yJ .framer-tusff3, .framer-ps6yJ .framer-132l9qo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ps6yJ .framer-wr6vb9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 16px 0px 0px 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-ps6yJ .framer-191re8y { align-content: center; align-items: center; background-color: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, #f7f1ec); display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 0px 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 32px 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-102g4nl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1432ykq { flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: -17px; z-index: 1; }`,
        `.framer-ps6yJ .framer-ap6824 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-ps6yJ .framer-1iba9p7, .framer-ps6yJ .framer-zw6ymq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-ps6yJ .framer-1omm9fn-container, .framer-ps6yJ .framer-3rzksu-container, .framer-ps6yJ .framer-xo95ve-container, .framer-ps6yJ .framer-1brcnx3-container, .framer-ps6yJ .framer-18wn9yy-container, .framer-ps6yJ .framer-wajsxn-container, .framer-ps6yJ .framer-g9mhbf-container, .framer-ps6yJ .framer-1c5ttsl-container, .framer-ps6yJ .framer-zi42re-container, .framer-ps6yJ .framer-1v0fffu-container, .framer-ps6yJ .framer-117ha2h-container, .framer-ps6yJ .framer-1lwnexu-container, .framer-ps6yJ .framer-1kihulj-container, .framer-ps6yJ .framer-kdkj7b-container, .framer-ps6yJ .framer-7ykfv9-container, .framer-ps6yJ .framer-7owv0b-container, .framer-ps6yJ .framer-1659ech-container, .framer-ps6yJ .framer-1iatbo-container, .framer-ps6yJ .framer-1q7agb4-container, .framer-ps6yJ .framer-1tgftd8-container, .framer-ps6yJ .framer-15v1it0-container, .framer-ps6yJ .framer-11ufr6g-container, .framer-ps6yJ .framer-1r1exp3-container, .framer-ps6yJ .framer-pabdci-container, .framer-ps6yJ .framer-1wzhwu7-container, .framer-ps6yJ .framer-1ts8oio-container, .framer-ps6yJ .framer-ygsgf3-container, .framer-ps6yJ .framer-1ahpl2g-container, .framer-ps6yJ .framer-bmawlh-container, .framer-ps6yJ .framer-1l6yq4w-container, .framer-ps6yJ .framer-1vzt2vv-container, .framer-ps6yJ .framer-nclifx-container, .framer-ps6yJ .framer-9ms9kt-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ps6yJ .framer-1xiq5b0, .framer-ps6yJ .framer-is74mn { align-content: center; align-items: center; background-color: var(--token-a5af7ff8-0198-4958-836d-98f2108fe5aa, #f7f1ec); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-ps6yJ .framer-1alcj9b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px 32px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 100px 32px 100px 32px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-1tvrgh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-mh30dz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 500px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ps6yJ .framer-tm3h9o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1n7lm09 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 90vh; justify-content: center; max-height: 750px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 48px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-ps6yJ .framer-1ij94ov { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-ps6yJ .framer-e51lvl-container { flex: none; height: 100%; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-1bnxjv { flex: none; height: 2607px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1t7z7jg { flex: none; height: 50vh; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1reqtqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 32px 100px 32px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-18futtt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 500px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1hjn8f9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-rqxyvn-container, .framer-ps6yJ .framer-1gjelnp-container, .framer-ps6yJ .framer-fva6ax-container, .framer-ps6yJ .framer-xpzsho-container, .framer-ps6yJ .framer-y1g0db-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-xqsuft { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 131px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-ofj00t { flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-ps6yJ .framer-11ewfsl { align-content: center; align-items: center; background-color: var(--token-83576c6d-486a-4974-ab02-7017628e9739, #968071); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1tzidwz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px 24px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 100px 32px 100px 32px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-1r8nuuv, .framer-ps6yJ .framer-sx4yiy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-btpfxp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-a76t6r { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 250px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ps6yJ .framer-9n9376 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ps6yJ .framer-15yna38-container { flex: 1 0 0px; height: 232px; position: relative; width: 1px; }`,
        `.framer-ps6yJ .framer-15wfw95, .framer-ps6yJ .framer-3gt3g8, .framer-ps6yJ .framer-vxf96b, .framer-ps6yJ .framer-1gj8mzq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px 24px; height: 296px; justify-content: center; padding: 0px; position: relative; width: 400px; }`,
        `.framer-ps6yJ .framer-16mz0x4-container, .framer-ps6yJ .framer-v27v3c-container, .framer-ps6yJ .framer-97pebc-container, .framer-ps6yJ .framer-1nzpa5f-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-ps6yJ .framer-dt0z7m { align-content: center; align-items: center; background-color: var(--token-83576c6d-486a-4974-ab02-7017628e9739, #968071); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 100px 32px 100px 32px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-q2zqbz { align-content: center; align-items: center; background-color: var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, #eee6de); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1226px; overflow: var(--overflow-clip-fallback, clip); padding: 4px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ps6yJ .framer-1s4sbxl { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 478px; position: relative; width: 449px; }`,
        `.framer-ps6yJ .framer-xsyr2o { align-content: flex-start; align-items: flex-start; align-self: stretch; background-color: var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, #eee6de); border-bottom-right-radius: 24px; border-top-right-radius: 24px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 0px 32px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ps6yJ .framer-11eahk5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ps6yJ .framer-qs1bgd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 23px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-8hdjha { flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; top: -29px; z-index: 1; }`,
        `.framer-ps6yJ .framer-1702m92 { align-content: center; align-items: center; background-color: var(--token-bdb4d62e-f9e0-4601-b8b2-074b31824383, #f7f1ec); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 100px 0px 100px 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-6abaur { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-qmha03 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 400px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-6fqgmj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 700px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-gun7vn, .framer-ps6yJ .framer-m8v6lc, .framer-ps6yJ .framer-t1fo78, .framer-ps6yJ .framer-1iydg2i { align-content: center; align-items: center; background-color: var(--token-83576c6d-486a-4974-ab02-7017628e9739, #968071); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 55px; justify-content: center; overflow: hidden; padding: 0px 0px 6px 0px; position: relative; width: 55px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ps6yJ .framer-h0jhd6, .framer-ps6yJ .framer-mmyz1r, .framer-ps6yJ .framer-7t0iah, .framer-ps6yJ .framer-m10cp6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ps6yJ .framer-1uyjv2o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 100px 32px 100px 32px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-rsohhi { align-content: center; align-items: center; background-color: var(--token-7252a629-7ca5-4ebc-89cf-7c3a72ac9391, #eee6de); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1300px; overflow: hidden; padding: 64px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
        `.framer-ps6yJ .framer-13bnoov-container { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
        `.framer-ps6yJ .framer-13tnkqg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 48px 0px 0px 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 2; }`,
        `.framer-ps6yJ .framer-zlb3gg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-9f2biy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 500px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-1nsir8t-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-ps6yJ .framer-1rgbut6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1300px; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-ps6yJ .framer-epgoof { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-1tvkv1r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 600px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ps6yJ .framer-l77scq-container, .framer-ps6yJ .framer-bm4ppq-container, .framer-ps6yJ .framer-1cblpfc-container, .framer-ps6yJ .framer-1ypwnuj-container { flex: none; height: auto; pointer-events: auto; position: relative; width: 100%; z-index: 3; }`,
        ...Ot,
        ...Ue,
        ...tt,
        ...Mt,
        ...Ze,
        ...qe,
        `.framer-ps6yJ[data-border="true"]::after, .framer-ps6yJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ps6yJ.framer-1bqzvwo { width: 810px; } .framer-ps6yJ .framer-12svfce { position: relative; top: unset; } .framer-ps6yJ .framer-134503r { overflow: hidden; } .framer-ps6yJ .framer-likbir-container { bottom: 0px; left: 0px; right: 0px; } .framer-ps6yJ .framer-1ugytsn { gap: 24px; padding: 48px; } .framer-ps6yJ .framer-mttbew { order: 0; } .framer-ps6yJ .framer-1ncv6lw { max-width: 400px; order: 1; } .framer-ps6yJ .framer-1ncfy0p { order: 2; } .framer-ps6yJ .framer-wr6vb9 { padding: 0px; } .framer-ps6yJ .framer-191re8y { background-color: unset; } .framer-ps6yJ .framer-102g4nl { height: 42px; order: 0; } .framer-ps6yJ .framer-ap6824 { order: 1; } .framer-ps6yJ .framer-1alcj9b { gap: 48px 24px; padding: 64px 16px 64px 16px; } .framer-ps6yJ .framer-1n7lm09 { height: min-content; max-height: unset; position: relative; top: unset; } .framer-ps6yJ .framer-1ij94ov { flex-direction: column; gap: 24px; height: min-content; } .framer-ps6yJ .framer-e51lvl-container { height: auto; } .framer-ps6yJ .framer-1reqtqd, .framer-ps6yJ .framer-1uyjv2o { padding: 64px 16px 64px 16px; } .framer-ps6yJ .framer-1hjn8f9 { --border-bottom-width: 0px; --border-color: var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 0px; } .framer-ps6yJ .framer-1tzidwz { padding: 100px 16px 100px 16px; } .framer-ps6yJ .framer-dt0z7m { padding: 100px 24px 100px 24px; } .framer-ps6yJ .framer-1s4sbxl { height: 417px; width: 333px; } .framer-ps6yJ .framer-xsyr2o { gap: 24px; padding: 0px 16px 0px 16px; } .framer-ps6yJ .framer-8hdjha { top: -18px; } .framer-ps6yJ .framer-1702m92, .framer-ps6yJ .framer-epgoof { padding: 64px 0px 64px 0px; } .framer-ps6yJ .framer-6abaur { padding: 0px 16px 0px 16px; } .framer-ps6yJ .framer-1gjelnp-container, .framer-ps6yJ .framer-fva6ax-container, .framer-ps6yJ .framer-xpzsho-container, .framer-ps6yJ .framer-y1g0db-container { height: 100%; } .framer-ps6yJ .framer-rsohhi { padding: 115px 16px 0px 16px; } .framer-ps6yJ .framer-9f2biy { width: auto; } .framer-ps6yJ .framer-1rgbut6 { align-content: flex-start; align-items: flex-start; padding: 0px 16px 0px 16px; } .framer-ps6yJ .framer-sx4yiy { max-width: 500px; }}`,
        `@media (max-width: 809.98px) { .framer-ps6yJ.framer-1bqzvwo { width: 390px; } .framer-ps6yJ .framer-12svfce { position: relative; top: unset; } .framer-ps6yJ .framer-134503r { padding: 128px 16px 0px 16px; } .framer-ps6yJ .framer-likbir-container { left: 0px; right: 0px; } .framer-ps6yJ .framer-1ugytsn { gap: 24px; width: 100%; } .framer-ps6yJ .framer-mttbew { order: 0; } .framer-ps6yJ .framer-1ncv6lw { order: 1; will-change: unset; } .framer-ps6yJ .framer-1ncfy0p { flex-direction: column; order: 2; } .framer-ps6yJ .framer-2ng5m5 { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; padding: 0px; will-change: unset; } .framer-ps6yJ .framer-1l7huc6-container { width: 25px; } .framer-ps6yJ .framer-1vluiyz { width: 100%; } .framer-ps6yJ .framer-wr6vb9, .framer-ps6yJ .framer-1702m92 { padding: 0px; } .framer-ps6yJ .framer-191re8y { background-color: unset; flex-wrap: nowrap; gap: 24px; justify-content: flex-start; padding: 0px 0px 24px 0px; } .framer-ps6yJ .framer-102g4nl { align-content: flex-end; align-items: flex-end; height: 25px; order: 0; } .framer-ps6yJ .framer-1432ykq { bottom: 0px; top: unset; } .framer-ps6yJ .framer-ap6824 { flex-wrap: wrap; gap: 16px 16px; justify-content: center; order: 1; padding: 0px 16px 0px 16px; width: 100%; } .framer-ps6yJ .framer-1iba9p7 { flex: 1 0 0px; gap: 16px; min-width: 100px; width: 1px; } .framer-ps6yJ .framer-1omm9fn-container { flex: 1 0 0px; order: 0; width: 1px; } .framer-ps6yJ .framer-3rzksu-container { flex: 1 0 0px; order: 1; width: 1px; } .framer-ps6yJ .framer-zw6ymq { gap: 16px; } .framer-ps6yJ .framer-1alcj9b { gap: 48px 24px; padding: 64px 16px 64px 16px; } .framer-ps6yJ .framer-1tvrgh { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: flex-start; } .framer-ps6yJ .framer-mh30dz, .framer-ps6yJ .framer-15yna38-container { flex: none; width: 100%; } .framer-ps6yJ .framer-1n7lm09 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: min-content; max-height: unset; position: relative; top: unset; will-change: unset; } .framer-ps6yJ .framer-1ij94ov { flex-direction: column; gap: 48px; height: min-content; } .framer-ps6yJ .framer-e51lvl-container { height: auto; } .framer-ps6yJ .framer-1reqtqd { padding: 64px 16px 128px 16px; } .framer-ps6yJ .framer-1hjn8f9 { --border-bottom-width: 0px; --border-color: var(--token-3b0e5039-05df-4d34-a3f8-aa47210d6ab4, #d1d1d1); --border-left-width: 0px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 0px; } .framer-ps6yJ .framer-xqsuft { height: 42px; } .framer-ps6yJ .framer-11ewfsl { padding: 0px 0px 64px 0px; } .framer-ps6yJ .framer-1tzidwz { gap: 24px 24px; padding: 100px 16px 100px 16px; } .framer-ps6yJ .framer-btpfxp, .framer-ps6yJ .framer-q2zqbz { flex-direction: column; } .framer-ps6yJ .framer-a76t6r { align-content: center; align-items: center; align-self: unset; flex: none; gap: 24px; height: min-content; justify-content: center; max-width: unset; width: 100%; } .framer-ps6yJ .framer-9n9376 { align-content: center; align-items: center; flex-direction: row; flex-wrap: wrap; order: 0; width: 100%; } .framer-ps6yJ .framer-tusff3 { min-width: 310px; } .framer-ps6yJ .framer-3lv6or-container { order: 1; } .framer-ps6yJ .framer-dt0z7m { padding: 64px 16px 100px 16px; } .framer-ps6yJ .framer-1s4sbxl { height: 344px; order: 1; width: 100%; } .framer-ps6yJ .framer-xsyr2o { align-self: unset; border-bottom-right-radius: unset; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; gap: 24px; height: min-content; order: 0; padding: 24px 16px 24px 16px; width: 100%; } .framer-ps6yJ .framer-qs1bgd { height: 11px; } .framer-ps6yJ .framer-8hdjha { top: -11px; } .framer-ps6yJ .framer-6abaur { gap: 48px; padding: 64px 16px 64px 16px; } .framer-ps6yJ .framer-6fqgmj { gap: 24px; overflow: visible; } .framer-ps6yJ .framer-1uyjv2o { padding: 64px 16px 64px 16px; } .framer-ps6yJ .framer-rsohhi { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; padding: 200px 0px 0px 0px; } .framer-ps6yJ .framer-13bnoov-container { bottom: 2567px; } .framer-ps6yJ .framer-13tnkqg { padding: 0px 16px 0px 16px; top: 48px; } .framer-ps6yJ .framer-9f2biy { width: auto; } .framer-ps6yJ .framer-1rgbut6 { padding: 0px 16px 0px 16px; } .framer-ps6yJ .framer-epgoof { padding: 64px 0px 64px 0px; }}`,
      ],
      `framer-ps6yJ`,
    )),
    (Jo.displayName = `Home`),
    (Jo.defaultProps = { height: 11225, width: 1200 }),
    I(
      Jo,
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
        ...Ya,
        ...Xa,
        ...Qa,
        ...$a,
        ...eo,
        ...no,
        ...ro,
        ...io,
        ...oo,
        ...so,
        ...co,
        ...lo,
        ...fo,
        ...po,
        ...ho,
        ...P(kt),
        ...P(He),
        ...P(nt),
        ...P(Nt),
        ...P(Qe),
        ...P(Je),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (Jo.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = pe.get(To(), n, r),
          a = pe.get(Ao(), n, r),
          o = pe.get(Mo(), n, r),
          s = pe.get(No(), n, r),
          c = pe.get(Po(), n, r),
          l = pe.get(Fo(), n, r),
          u = pe.get(Io(), n, r),
          d = pe.get(zo(), n, r),
          f = pe.get(Bo(), n, r),
          p = pe.get(Wo(), n, r);
        return Te(
          [
            () => i.preload(),
            () => a.preload(),
            () => o.preload(),
            () => s.preload(),
            () => c.preload(),
            () => l.preload(),
            () => u.preload(),
            () => d.preload(),
            () => f.preload(),
            () => p.preload(),
            async () =>
              Te(
                ((await he(() => i.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(Or, {}, t),
                  () => B(wt, {}, t),
                  () => B(_t, {}, t),
                ]),
                t,
              ),
            async () =>
              Te(
                ((await he(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(bt, {}, t),
                  () => B(bt, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                  () => B(Y, {}, t),
                ]),
                t,
              ),
            async () =>
              Te(
                ((await he(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => () => B(wt, {}, t)),
                t,
              ),
            async () =>
              Te(
                ((await he(() => l.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(_t, {}, t),
                  () => B(wt, {}, t),
                ]),
                t,
              ),
            async () =>
              Te(
                ((await he(() => u.readMaybeAsync(), t)) ?? []).flatMap((e) => () => B(wt, {}, t)),
                t,
              ),
            async () =>
              Te(
                ((await he(() => d.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(xi, {}, t),
                  () => B(xi, {}, t),
                  () => B(xi, {}, t),
                  () => B(xi, {}, t),
                ]),
                t,
              ),
            async () =>
              Te(
                ((await he(() => f.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(ot, {}, t),
                  () => B(wt, {}, t),
                  () => B(lt, {}, t),
                ]),
                t,
              ),
            async () =>
              Te(
                ((await he(() => p.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => B(Gi, {}, t),
                  () => B(Gi, {}, t),
                  () => B(Gi, {}, t),
                  () => B(Gi, {}, t),
                ]),
                t,
              ),
          ],
          t,
        );
      },
    }),
    (Yo = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerhqVRjOHKR`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"WxGhyf54g":{"pattern":":DNLONDBp6-:WxGhyf54g","name":"reviews","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"cvZf18_Eq"}}},"KySRHKZff":{"pattern":":DNLONDBp6-:KySRHKZff","name":"project","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"FttYvmNKz"}}},"Kgewnn4VA":{"pattern":":DNLONDBp6-:Kgewnn4VA","name":"project","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"FttYvmNKz"}}},"uWrqjObUk":{"pattern":":DNLONDBp6-:uWrqjObUk","name":"project","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"FttYvmNKz"}}},"X2r2EnfV8":{"pattern":":X2r2EnfV8","name":"services"},"XjiLFbzPY":{"pattern":":DNLONDBp6-:XjiLFbzPY","name":"process 1","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"f5x8KPcz3"}}},"Zek1kF8cZ":{"pattern":":DNLONDBp6-:Zek1kF8cZ","name":"process 2","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"f5x8KPcz3"}}},"bVb0zECjS":{"pattern":":DNLONDBp6-:bVb0zECjS","name":"process 3","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"f5x8KPcz3"}}},"mNVgQPFAg":{"pattern":":DNLONDBp6-:mNVgQPFAg","name":"process 4","slugs":{"DNLONDBp6":{"identifier":"local-module:collection/bkgrGppuB:default","provider":"f5x8KPcz3"}}}}`,
            framerIntrinsicHeight: `11225`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"bhI8hHikE":{"layout":["fixed","auto"]},"muyaqbHcV":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Yo as __FramerMetadata__, Jo as default, vo as queryParamNames };
//# sourceMappingURL=gnuKH74P261OecDAc2JZ4CMqeTCT9a39UYLhRR6LmRM.BMpR5ldT.mjs.map
