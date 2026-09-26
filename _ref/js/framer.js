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
  R as f,
  S as p,
  T as m,
  V as h,
  _ as g,
  a as _,
  b as v,
  c as y,
  d as b,
  f as x,
  g as S,
  h as C,
  i as w,
  j as T,
  k as E,
  l as D,
  o as O,
  p as k,
  s as ee,
  u as te,
  v as A,
  w as ne,
  x as re,
  y as j,
} from "./react.CV_3rBxD.mjs";
import {
  $ as ie,
  A as ae,
  B as oe,
  C as M,
  D as se,
  E as ce,
  F as le,
  G as ue,
  H as de,
  I as fe,
  J as pe,
  L as me,
  M as he,
  N as ge,
  O as _e,
  Q as ve,
  T as N,
  U as ye,
  V as be,
  W as xe,
  X as Se,
  Y as Ce,
  Z as P,
  _ as we,
  a as Te,
  b as Ee,
  c as De,
  d as Oe,
  et as ke,
  f as Ae,
  g as je,
  h as F,
  i as Me,
  j as Ne,
  k as Pe,
  l as Fe,
  m as Ie,
  n as Le,
  nt as Re,
  o as ze,
  p as Be,
  q as Ve,
  r as He,
  s as Ue,
  tt as We,
  u as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from "./motion.CdSRWwto.mjs";
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function I(e) {
  return typeof e == `string`;
}
function L(e) {
  return Number.isFinite(e);
}
function $e(e) {
  return Array.isArray(e);
}
function R(e) {
  return typeof e == `object` && !!e && !$e(e);
}
function et(e) {
  for (let t in e) return !1;
  return !0;
}
function tt(e) {
  return e === void 0;
}
function nt(e) {
  return e === null;
}
function rt(e) {
  return e == null;
}
function it(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function at(e) {
  return R(e) && Ze(e.return);
}
function ot(e) {
  return R(e) && Ze(e.then);
}
function st(e) {
  return e instanceof Promise;
}
function ct(e) {
  return `url('${lt(e)}')`;
}
function lt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ut(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function dt(e, t, n) {
  if (Av.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Av.set(e, t), t))
    .catch((t) => {
      throw (Av.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Sv), Av.set(e, r));
}
function ft(e, t) {
  Cv && (jv.set(e, t), Mv.has(e) && dt(e, t, `registered loader ${e}`));
}
function pt() {
  if (!Cv) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Nv),
      i = r ? e.slice(Nv.length) : e;
    if (!i) continue;
    Mv.add(i);
    let a = jv.get(i);
    a ? dt(i, a, `registered loader ${i}`) : r && dt(i, () => import(n), n);
  }
}
function mt(e) {
  return typeof e == `object` && !!e && !k(e) && Fv in e;
}
function ht(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function gt(e, t = `default`, n) {
  n && ft(n, e);
  let r,
    i,
    o,
    s = () => {
      if (i || !n || !Av.has(n)) return;
      let e = Av.get(n);
      st(e) ? c(() => e) : (i = ht(e, t));
    },
    c = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ht(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              o = e;
            })),
          r),
    l = !1,
    u = A(function (t, r) {
      if (
        (a(() => {
          l = !0;
        }, []),
        o)
      )
        throw o;
      if ((s(), n !== void 0 && Pv !== void 0 && Pv.add(n), !i)) throw c(e);
      return D(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (s(), c(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function _t(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function vt(e) {
  return e === null || !(Lv in e) ? !1 : typeof e.equals == `function`;
}
function yt(e, t) {
  return e === t || (e !== e && t !== t);
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!yt(e[r], t[r])) return !1;
  return !0;
}
function xt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Dt(e[r], t[r], !0)) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!yt(r, t.get(n))) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Dt(r, t.get(n), !0)) return !1;
  return !0;
}
function wt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Tt(e, t) {
  let n = Iv(e);
  if (n.length !== Iv(t).length) return !1;
  for (let r of n)
    if (!_t(t, r) || (!(r === `_owner` && _t(e, `$$typeof`) && e.$$typeof) && !yt(e[r], t[r])))
      return !1;
  return !0;
}
function Et(e, t) {
  let n = Iv(e);
  if (n.length !== Iv(t).length) return !1;
  for (let r of n)
    if (!_t(t, r) || (!(r === `_owner` && _t(e, `$$typeof`) && e.$$typeof) && !Dt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Dt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? xt(e, t) : bt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Ct(e, t) : St(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return wt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? vt(e) && vt(t)
        ? e.equals(t)
        : n
          ? Et(e, t)
          : Tt(e, t)
      : !1;
}
function Ot(e, t, n = !0) {
  try {
    return Dt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function kt(e) {
  return p.useCallback((t) => e[t], [e]);
}
function At({ api: e, children: t }) {
  return D(Rv.Provider, { value: e, children: t });
}
function jt() {
  return p.useContext(Rv);
}
function Mt({ routes: e, children: t }) {
  let n = kt(e),
    r = u(() => ({ getRoute: n }), [n]);
  return D(Rv.Provider, { value: r, children: t });
}
function Nt() {
  let e = jt(),
    t = l(zv),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return u(() => {
    if (!(!n || !a)) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function Pt() {
  let e = Nt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ft(e) {
  let t = Nt(),
    n = p.useRef(t);
  Ot(n.current, t) || !t || ((n.current = t), e(t));
}
function It(e) {
  let t = jt();
  if (e) return t.getRoute?.(e);
}
function Lt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Rt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function zt(e, t) {
  let n = Nt(),
    r = It(t) ?? n;
  return p.useMemo(() => (r ? Lt(r, e) : e), [e, r]);
}
function Bt() {
  return Nt()?.pathVariables;
}
function z(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function B(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t),
      );
}
function Vt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Ht(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === ey
  );
}
function Ut(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Wt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Gt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Wt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Kt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
  );
}
function qt(e) {
  return ty.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Jt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Qv);
}
function Yt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Zv);
}
function Xt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Jt(+e);
}
function Zt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Xt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Qt(e) {
  return new Uint8Array(e).toBase64();
}
function $t(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function en(e) {
  return Buffer.from(e).toString(`base64`);
}
function tn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function nn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function rn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function an(e, t) {
  return on(JSON.parse(e), t);
}
function on(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === Wv) return;
    if (e === Kv) return NaN;
    if (e === qv) return 1 / 0;
    if (e === Jv) return -1 / 0;
    if (e === Yv) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = ay(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === Xv) {
        let t = s[1];
        if (!Yt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[Qv] = void 0), delete n[Qv]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Jt(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== Gv && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function sn(e, t) {
  let n = cn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function cn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return Wv;
    if (Number.isNaN(n)) return Kv;
    if (n === 1 / 0) return qv;
    if (n === -1 / 0) return Jv;
    if (n === 0 && 1 / n < 0) return Yv;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new $v(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new $v(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Vt(n)) u = ln(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new $v(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t,
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Ut(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Gt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Gt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Gt(r)},"${i}"]` : `["RegExp",${Gt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += Gv;
            else {
              let t = Zt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + Xv + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += Gv));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Vt(e) ? ln(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${iy(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Gt(n.toString())}]`;
          break;
        default:
          if (!Ht(n)) throw new $v(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Kt(n).length > 0) throw new $v(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new $v(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(qt(e)), (u += `,${Gt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new $v(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(qt(r)), (u += `${Gt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function ln(e) {
  let t = typeof e;
  return t === `string`
    ? Gt(e)
    : e === void 0
      ? Wv.toString()
      : e === 0 && 1 / e < 0
        ? Yv.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function un(e, t, n = `lazy`) {
  switch ((G.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } }),
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } }),
        );
      break;
    }
  }
}
function dn(e) {
  return I(e) && (e === `` || sy.test(e));
}
function fn() {
  return { [cy.QueryCache]: new Map(), [cy.CollectionUtilsCache]: new Map() };
}
function pn() {
  if (!Cv) return;
  if (ly !== void 0) return ly;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      ly = an(e.text) ?? fn();
    } catch (e) {
      ((ly = fn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Ev(() => {
        (e?.remove(), (e = null));
      }),
      ly
    );
  }
}
function mn(e, t) {
  if (
    (console.warn(
      ut(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`,
      ),
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    un(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function hn(e, t) {
  let n = pn();
  return n ? n[e].has(t) : !1;
}
function gn(e, t) {
  let n = pn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function _n(e) {
  return e?.id ?? Vv;
}
function vn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function yn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (py.has(n)) return py.get(n);
    let r = new hy(n, t);
    return (py.set(n, r), r);
  };
}
function bn({ children: e, collectionUtils: t }) {
  let n = u(() => ({ get: yn(t) }), [t]);
  return D(my.Provider, { value: n, children: e });
}
function xn() {
  return l(my);
}
function Sn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Cn() {
  return h === void 0 ? void 0 : h;
}
function wn() {
  let e = Cn();
  return e ? gy.test(e.platform) : !1;
}
function Tn() {
  let e = Cn();
  return e
    ? _y.test(e.platform)
      ? !0
      : vy.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function En() {
  return wn() || Tn();
}
function Dn() {
  let e = Cn();
  return e ? yy.test(e.userAgent) : !1;
}
function On() {
  let e = Cn();
  return e ? by.test(e.userAgent) && xy.test(e.vendor) && !Dn() : !1;
}
function kn() {
  let e = Cn();
  return e ? Sy.test(e.userAgent) && Cy.test(e.vendor) : !1;
}
function An() {
  let e = Cn();
  return e ? wy.test(e.userAgent) : !1;
}
function jn() {
  return typeof document == `object`;
}
function Mn() {
  let e = Cn();
  if (!e) return -1;
  let t = Ty.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Nn() {
  let e = Cn();
  return e ? Ey.test(e.userAgent) : !1;
}
function Pn() {
  return !1;
}
function Fn() {
  let e = Cn();
  return e && Dy.test(e.userAgent) ? `tablet` : e && Oy.test(e.userAgent) ? `phone` : `desktop`;
}
function In() {
  return Fn() === `desktop`;
}
function Ln(e) {
  return En() ? e.metaKey : e.ctrlKey;
}
function Rn() {}
async function zn() {}
function Bn(e) {
  return typeof e == `function` ? e() : e;
}
function Vn(e, t) {
  return My[e] > My[t];
}
function Hn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Un(e, t) {
  let n = e?.priority,
    r = Hn();
  return n === `background`
    ? (t?.() ?? Sn(1))
    : r?.yield
      ? r.yield(e).catch(Rn)
      : r?.postTask
        ? r.postTask(Rn, e).catch(Rn)
        : t
          ? t()
          : n === `user-blocking`
            ? Ny
            : Sn(0);
}
function Wn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function s() {
    for (let e of a) e();
    a.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    jn() && (document.addEventListener(`visibilitychange`, c), o.addEventListener(`pagehide`, s));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, Py),
        e(() => {
          Un(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return jn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : Un(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0),
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? ky : Ay),
        s = jn() && document.hidden ? jy : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !jn() && !t ? (n ? void 0 : Ny) : n ? m(i, r) : f(i);
  }
  return h;
}
function Gn(e, t = !1) {
  let n = ``;
  if (o !== void 0)
    if (t) n = o.location.search;
    else {
      let e = o.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? o.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Kn(n, e) : e;
}
function Kn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Ly && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function qn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Ry)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !I(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = st(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = st(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = st(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      }),
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Jn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Yn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await qn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Jn(u.path, t.slug)),
    o && u.path && (u.path = Gn(u.path, !0)),
    u
  );
}
async function Xn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Ry)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (I(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Zn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === Vv) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Xn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Qn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Zn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Yn({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Ot(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function $n() {
  return p.useContext(Vy);
}
function er() {
  let e = xn(),
    { getRoute: t } = jt(),
    { activeLocale: n, locales: r } = $n();
  return d(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return nr(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o,
      );
    },
    [t, e, n, r],
  );
}
function tr(e, t = !0) {
  let n = er();
  a(() => {
    if (!(!t || !Uy)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function nr(e, t, n = {}) {
  if (!Uy || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !mt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Iy({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await rr(n, e, t, r));
    } catch {}
  }
}
async function rr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Qn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Vv),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function ir(e, t) {
  return e.replace(Ry, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function ar() {
  if (Wy) return;
  Wy = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (o.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((o.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), un(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function or({ children: e, value: t }) {
  return D(Gy.Provider, { value: t, children: e });
}
function sr() {
  return p.useContext(Gy);
}
function cr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function lr(e) {
  let t = Ky,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < qy;) ((n = e.next(t)), r.push(n.value), (t += Ky));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Ky }
  );
}
function ur(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function dr(e) {
  let { innerWidth: t, innerHeight: n } = o,
    [r, i] = ur(e.x),
    [a, s] = ur(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: s === `px` ? a : (a / 100) * n };
}
function fr(e) {
  let [t, n] = ur(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function pr(e) {
  let { x: t, y: n } = dr(e);
  return Math.hypot(Math.max(t, o.innerWidth - t), Math.max(n, o.innerHeight - n));
}
function mr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function hr(e) {
  return e ? Xy[e] : void 0;
}
function gr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (_r(t)) {
    let { easing: e, duration: n } = lr(
      _e({ keyframes: [0, 1], ...vr(t), restDelta: 0.001, restSpeed: 1e-4 }),
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = hr(n?.mask?.type),
    o = mr(n, `start`, e, a),
    s = mr({ ...Zy, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function _r(e) {
  return e.type === `spring`;
}
function vr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function yr({ exit: e = $y, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Qy;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += gr(`exit`, e)),
    (r += gr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function br() {
  Ev(() => {
    F.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Qy);
      e && document.head.removeChild(e);
    });
  });
}
function xr() {
  return !!document.startViewTransition;
}
function Sr(e) {
  return new Promise((t) => {
    F.render(() => {
      (performance.mark(`framer-vt-style`), yr(e), t());
    });
  });
}
async function Cr(e, t, n) {
  if (!xr()) {
    e();
    return;
  }
  if ((await Sr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(eb),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), br());
      })
      .catch(eb),
    r
  );
}
function wr() {
  let e = sr(),
    n = t(void 0);
  return (
    a(() => {
      n.current &&= (n.current(), void 0);
    }),
    d(
      (t, r, i, a) => {
        let o = cr(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return Cr(
            async () => {
              (i(), await e);
            },
            o,
            a,
          );
        }
        i();
      },
      [e],
    )
  );
}
function Tr(e, t) {
  Ev(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Er(e, t) {
  Ev(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Dr(e) {
  Ev(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`),
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Or(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await Iy({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function kr(e) {
  let n = t(new Set());
  return (
    Or(
      () => {
        for (let e of n.current) e();
        n.current.clear();
      },
      void 0,
      { priority: `user-blocking` },
    ),
    d(
      (t) => {
        let r,
          i = new Promise((e) => {
            ((r = e), n.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: t, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: t }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: t,
            ignore: () => {
              ((s = !0), r && (n.current.delete(r), r()));
            },
          }
        );
      },
      [e],
    )
  );
}
function Ar(e) {
  return R(e) && `routeId` in e;
}
function jr(e = o.history.state) {
  return Ar(e) ? e : void 0;
}
function Mr(e) {
  return e?.entryId;
}
function Nr(e) {
  rb = e;
}
function Pr() {
  return rb;
}
function Fr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Ir(e, t) {
  return Lr(e, Mr(e) ?? Mr(t));
}
function Lr(e, t = Fr()) {
  return { ...e, entryId: t };
}
function Rr(e, t) {
  (performance.mark(`framer-history-replace`), Nr(Ir(e, jr())), t && Tr(t, o.location.href));
  let n =
    !t || t === o.location.href
      ? o.History.prototype.replaceState.bind(o.history)
      : o.history.replaceState.bind(o.history);
  try {
    n(rb, ``, t);
  } catch {}
}
function zr(e) {
  (performance.mark(`framer-history-replace`),
    Nr(Lr(e)),
    History.prototype.replaceState.call(o.history, rb, ``, void 0));
}
function Br(e, t) {
  (performance.mark(`framer-history-push`), Nr(Lr(e)), Tr(t, o.location.href), ar());
  try {
    o.history.pushState(rb, ``, t);
  } catch {}
}
function Vr({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: s,
}) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = o.location.hash ? o.location.hash.slice(1) : void 0;
    Rr({
      ...jr(),
      routeId: t,
      hash: r,
      pathVariables: n,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: s,
    });
  }, []);
}
function Hr(e, n, r) {
  let i = wr(),
    s = kr(`framer-route-change`),
    { onHistoryTraversal: c, usesCustomScrollRestoration: l } = e,
    u = l ? `manual` : `after-transition`,
    f = t(void 0),
    p = d(() => {
      (f.current?.resolve(), (f.current = void 0));
    }, []),
    m = d(
      async ({ state: e }) => {
        if (!Ar(e)) return;
        let t = s({ popstate: !0 }),
          a = Rt();
        (t.promise.finally(a), Mr(Pr()) !== (Mr(e) ?? Mr(jr())) && c(), Nr(e));
        let {
            routeId: l,
            hash: d,
            pathVariables: f,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = I(d) ? d : o.location.hash ? o.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (r(
                l,
                I(m) ? m : void 0,
                _,
                o.location.pathname + o.location.search + o.location.hash,
                R(f) ? f : void 0,
                h,
                g,
                !0,
                t,
                !1,
              ),
              !0);
          },
          b = u === `after-transition`;
        (await Promise.resolve(i(n.current, l, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || p();
          }),
          await t.promise,
          b && p(),
          await o.navigation?.transition?.finished.catch(Sv),
          nb(),
          Tr(o.location.href));
      },
      [n, s, c, p, r, i, u],
    ),
    h = d(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Ar(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                f.current = { resolve: e, reject: t };
              }),
                (f.current = void 0));
            },
            scroll: u,
          });
      },
      [u],
    );
  a(
    () => (
      o.addEventListener(`popstate`, m),
      ib && o.navigation.addEventListener(`navigate`, h),
      () => {
        (o.removeEventListener(`popstate`, m),
          ib && o.navigation.removeEventListener(`navigate`, h));
      }
    ),
    [m, h],
  );
}
async function Ur(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Jn(ir(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((o.location.href = o.location.origin + i), !0)
    : !1;
}
function Wr() {
  let e = xn();
  return d((t) => Gr({ ...t, collectionUtils: e }), [e]);
}
async function Gr({ sitePrefix: e, ...t }) {
  let n = await Yn(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!I(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Ur(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Kr(e) {
  let n = t(Promise.resolve()),
    r = t(),
    i = d(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e],
    );
  return d(
    (e, t, a) => {
      if (!ib) {
        a?.();
        return;
      }
      ((n.current = e),
        (r.current = t),
        o.navigation.addEventListener(`navigate`, i),
        a?.(),
        e.finally(() => {
          n.current === e &&
            ((r.current = void 0), o.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i],
  );
}
function qr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Jr(e) {
  return qr(e.trim().toLowerCase().replace(ab, `-`));
}
function Yr({ children: e, value: t }) {
  return D(sb.Provider, { value: t, children: e });
}
function Xr() {
  return l(sb);
}
function Zr(e, n) {
  let r = c(() => ({ inputs: n, result: e() }))[0],
    i = t(!0),
    o = t(r),
    s =
      i.current || (n && o.current.inputs && Ot(n, o.current.inputs, !1))
        ? o.current
        : { inputs: n, result: e() };
  return (
    a(() => {
      ((i.current = !1), (o.current = s));
    }, [s]),
    s.result
  );
}
function Qr(e, t) {
  return Zr(() => e, t);
}
function $r() {
  return o.location.search;
}
function ei() {
  return ``;
}
function ti(e) {
  return (
    lb.add(e),
    o.addEventListener(`popstate`, e),
    () => {
      (lb.delete(e), o.removeEventListener(`popstate`, e));
    }
  );
}
function ni() {
  for (let e of lb) e();
}
function ri({ children: e, routerRenderKey: n, isNavigationCommitPending: r }) {
  let i = Xr() === `preview`,
    [a, s] = c(``),
    l = t(n);
  cb(() => {
    l.current = n;
  }, [n]);
  let u = re(ti, $r, ei),
    f = E(u),
    p = n !== E(n),
    m = i ? a : p ? u : f,
    h = d(
      async (e) => {
        if (i) {
          j(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let t = r(),
          a = n;
        if ((await Iy({ continueAfter: `paint` }), t || r() || l.current !== a)) return;
        let c = jr();
        if (!c) return;
        let u = new URL(o.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = c.queryParamBackAnchorSearch,
          p = o.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...c, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = u.toString();
        (m || h ? Br(g, _) : Rr(g, _), ni());
      },
      [r, i, n],
    ),
    g = Zr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: h }), [m, h]);
  return D(ub.Provider, { value: g, children: e });
}
function ii({ parameterName: e }) {
  let n = t(e),
    { urlSearchParams: r, replaceSearchParams: i } = l(ub);
  return [
    u(() => r.getAll(n.current), [r]),
    d(
      async (e) => {
        $e(e) &&
          (await i((t) => {
            let r = n.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [n, o] of t.entries()) {
              if (n !== r) {
                i.append(n, o);
                continue;
              }
              if (!a) {
                a = !0;
                for (let t of e) I(t) && i.append(r, t);
              }
            }
            if (!a) for (let t of e) I(t) && i.append(r, t);
            return i;
          }));
      },
      [i],
    ),
  ];
}
function ai({ initialValue: e, parameterName: n, optional: r }) {
  let i = t(r ? void 0 : I(e) ? e : ``),
    [a, o] = ii({ parameterName: n });
  return [
    u(() => (a.length === 0 ? i.current : (a[0] ?? ``)), [a]),
    d(
      async (e) => {
        if (e === i.current) return o(Bv);
        if (I(e)) return o([e]);
      },
      [o],
    ),
  ];
}
function oi({ collectionId: e, initialValue: n, parameterName: r, optional: i }) {
  let a = xn(),
    o = $n().activeLocale ?? void 0,
    s = t(i ? void 0 : n),
    [c, l] = ai({ initialValue: void 0, parameterName: r, optional: !0 });
  return [
    u(() => (I(c) ? ci(si(a, e).getRecordIdBySlug(c, o)) : s.current), [a, e, o, c]),
    d(
      async (t) => {
        if (tt(t)) return l(void 0);
        let n = await si(a, e).getSlugByRecordId(t, o);
        I(n) && (await l(n));
      },
      [a, e, o, l],
    ),
  ];
}
function si(e, t) {
  let n = e?.get(t);
  return (z(n, () => `CollectionUtilsCache not found for collectionId: ${t}`), n);
}
function ci(e) {
  if (st(e)) throw e;
  return e;
}
function li(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ui(e),
    [r, i] = ui(t),
    a = di(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ui(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function di(e, t) {
  if (e === t || ((e = `/` + fi(e)), (t = `/` + fi(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = pb(e, 1 + s);
    if (n !== pb(t, 1 + s)) break;
    n === fb && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (pb(t, 1 + s) === fb) return hb(t, 1 + s + 1);
      if (s === 0) return hb(t, 1 + s);
    } else r > a && (pb(e, 1 + s) === fb ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || pb(e, s) === fb) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${hb(t, 1 + o)}`;
}
function fi(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = pb(e, o);
    else if (vb(a)) break;
    else a = fb;
    if (vb(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || pb(t, t.length - 1) !== db || pb(t, t.length - 2) !== db) {
            if (t.length > 2) {
              let e = mb(t, _b);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = hb(t, 0, e)), (n = t.length - 1 - mb(t, _b))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          gb && ((t += t.length > 0 ? `${_b}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${_b}${hb(e, r + 1, o)}`) : (t = hb(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === db && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function pi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || o.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function mi(e, t) {
  let n = e.replace(Ry, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function hi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return mi(i, r);
  }
  if (e.includes(`:`)) return mi(e, r);
  let i = t.elements?.[e];
  return i ? mi(i, r) : e;
}
function gi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  },
) {
  let m;
  if ((i && e && (m = hi(i, e, s)), u)) return m ?? ``;
  let h = t ?? `/`;
  (n && f && (h = n[f] ?? h), r && (h = h.replace(Ry, (e, t) => String(r[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Ry, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (yb.has(h) && o !== void 0) {
      let e = pi(d);
      g = li(o.location.pathname, e + g);
    } else g = li(h, g);
  else g = Jn(g, p);
  let y = _ || v;
  return ((l || y) && (g = Gn(g, y)), m && (g = `${g}#${m}`), g);
}
function _i() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[bb] = 1), e);
}
function vi() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[bb] = 1), e);
}
function yi(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function bi(e) {
  return bb in e && e[bb] === 1;
}
function xi(e) {
  return xb in e.nativeEvent && e.nativeEvent[xb] === 1;
}
function Si(e) {
  let n = t(!1),
    r = t(null),
    i = re(Dv, kv, Sb);
  return (
    a(() => {
      if (!i) return;
      let t = r.current;
      if (n.current || !t) return;
      n.current = !0;
      let a = yi(t),
        o = t[a];
      if (o === e) return;
      if (t.type === `radio` && o === !0) {
        ((t.checked = !1), t.dispatchEvent(vi()));
        return;
      }
      if (a === `checked`) {
        let e = vi();
        ((e[xb] = 1), t.dispatchEvent(e), t.dispatchEvent(vi()));
        return;
      }
      if (t.nodeName === `SELECT`) {
        t.dispatchEvent(_i());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), a)?.set;
      if (!s) return;
      s.call(t, ``);
      let c = _i();
      ((c[xb] = 1),
        t.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(t, o), t.dispatchEvent(_i()));
        }));
    }, [i]),
    r
  );
}
function Ci() {
  if (!Cb) return;
  ((Tb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Cb.forEach((n) => t.addEventListener(n, wb, e));
}
function wi() {
  return (
    a(() => {
      if (!Tb || !Cb) return;
      let e = { capture: !0 },
        t = document.body;
      (Cb.forEach((n) => t.removeEventListener(n, wb, e)),
        (Cb = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Ti(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Ei(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Di() {
  ((Gb = new Wb()), Gb.render.markStart());
}
function Oi() {
  (ne(() => {
    Gb?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      Gb?.useLayoutEffects.markRouterStart();
    }, []),
    a(() => {
      Gb?.useEffects.markRouterStart();
    }, []));
}
function ki() {
  (ne(() => {
    (Gb?.render.markEnd(), Gb?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((Gb?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Kb = !0;
        return;
      }
      F.read(() => {
        (Gb?.browserRendering.requestAnimationFrame.markStart(),
          Gb?.unattributedHydrationOverhead.measure());
      });
    }, []),
    a(() => {
      (Gb?.useEffects.markStart(),
        Gb?.browserRendering.hasStarted ||
          (Gb?.mutationEffects.measure(), Gb?.useEffects.markAreSynchronous()));
    }, []));
}
function Ai() {
  (ne(() => {
    Gb?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (Gb?.useLayoutEffects.markEnd(),
        !(Kb || document.visibilityState !== `visible`) &&
          F.read(() => {
            (Gb?.browserRendering.requestAnimationFrame.markEnd(),
              Iy().then(() => {
                Gb?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    a(() => {
      Gb?.useEffects.markEnd();
    }, []));
}
function ji() {
  return (ki(), null);
}
function Mi() {
  return (Ai(), null);
}
function Ni(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return p.isValidElement(e) ? p.cloneElement(e, n) : D(e, { ...n });
}
function Pi() {
  return Xb;
}
function Fi(e) {
  if (Zb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      z(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ri(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          z(t, `localizedPath must be defined`);
          let i = Ri(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Zb = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Zb.pathRoutes,
    paths: Zb.paths,
    pathRoutesLocalized: Zb.pathRoutesLocalized,
    pathsLocalized: Zb.pathsLocalized,
  };
}
function Ii(e, t, n = !0, r = Pi()) {
  return Li(e, t, r, n);
}
function Li(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Fi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = zi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = zi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = zi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = zi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ri(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function zi(e, t) {
  let n = [],
    r = Bi(t).replace(Ry, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Bi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Vi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Hi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Vi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Ui(e, t) {
  let n = e.toLowerCase(),
    r = Hi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Wi(e) {
  if (o === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in o)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Gi() {
  let e = Wi(`abtests`);
  return new URLSearchParams(e?.description);
}
function Ki(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function qi(e, t) {
  for (let [n, r] of t) Ki(e, n, r);
}
function Ji(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Yi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Xi(e, t) {
  if (o === void 0) return t;
  let n = t;
  if (t) {
    Yi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (qi(e, Gi()), Ji(e), n);
}
function Zi(e) {
  (a(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    ne(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Qi(e, ...t) {
  Qb.has(e) || (Qb.add(e), console.warn(e, ...t));
}
function $i(e, t, n) {
  Qi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ea(e) {
  return (
    typeof e == `object` &&
    !!e &&
    tx in e &&
    e[tx] instanceof Function &&
    nx in e &&
    e[nx] instanceof Function
  );
}
function ta(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = ex(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function na(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function ra(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ia(e) {
  return Math.round(e * 2) / 2;
}
function aa(e, t) {
  return { x: e, y: t };
}
function oa(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function sa(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ca(e) {
  let t = la(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function la(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ua(e, t, n) {
  return (
    (ox.rgb_r = e / 255),
    (ox.rgb_g = t / 255),
    (ox.rgb_b = n / 255),
    ox.rgbToHsluv(),
    { h: ox.hsluv_h, s: ox.hsluv_s, l: ox.hsluv_l }
  );
}
function da(e, t, n, r = 1) {
  return (
    (ox.hsluv_h = e),
    (ox.hsluv_s = t),
    (ox.hsluv_l = n),
    ox.hsluvToRgb(),
    { r: ox.rgb_r * 255, g: ox.rgb_g * 255, b: ox.rgb_b * 255, a: r }
  );
}
function fa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function pa(e, t, n) {
  return {
    r: sa(e) ? ba(e, 255) * 255 : 0,
    g: sa(t) ? ba(t, 255) * 255 : 0,
    b: sa(n) ? ba(n, 255) * 255 : 0,
  };
}
function ma(e, t, n, r) {
  let i = [
    Ca(Math.round(e).toString(16)),
    Ca(Math.round(t).toString(16)),
    Ca(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ha(e, t, n) {
  let r,
    i,
    a = ba(e, 255),
    o = ba(t, 255),
    s = ba(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ga(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function _a(e, t, n) {
  let r, i, a;
  if (((e = ba(e, 360)), (t = ba(t * 100, 100)), (n = ba(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ga(s, o, e + 1 / 3)), (i = ga(s, o, e)), (a = ga(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function va(e, t, n) {
  ((e = ba(e, 255)), (t = ba(t, 255)), (n = ba(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function ya(e, t, n) {
  ((e = ba(e, 360) * 6), (t = ba(t * 100, 100)), (n = ba(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ba(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    xa(e) && (e = `100%`);
    let t = Sa(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function xa(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Sa(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ca(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function wa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = ix[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = sx.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = sx.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = sx.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: ca(r[2] ?? ``), l: ca(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = sx.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: ca(r[2] ?? ``),
              l: ca(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = sx.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: ca(r[2] ?? ``), v: ca(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = sx.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: ca(r[2] ?? ``),
                  v: ca(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = sx.hex8.exec(t))
                ? {
                    r: Ta(r[1] ?? ``),
                    g: Ta(r[2] ?? ``),
                    b: Ta(r[3] ?? ``),
                    a: Ea(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = sx.hex6.exec(t))
                  ? {
                      r: Ta(r[1] ?? ``),
                      g: Ta(r[2] ?? ``),
                      b: Ta(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = sx.hex4.exec(t))
                    ? {
                        r: Ta(`${r[1]}${r[1]}`),
                        g: Ta(`${r[2]}${r[2]}`),
                        b: Ta(`${r[3]}${r[3]}`),
                        a: Ea(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = sx.hex3.exec(t))
                      ? {
                          r: Ta(`${r[1]}${r[1]}`),
                          g: Ta(`${r[2]}${r[2]}`),
                          b: Ta(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Ta(e) {
  return parseInt(e, 16);
}
function Ea(e) {
  return Ta(e) / 255;
}
function Da(e) {
  let t = cx.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Oa(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ka({ r: e, g: t, b: n, a: r }) {
  return { r: Oa(e), g: Oa(t), b: Oa(n), a: r };
}
function Aa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ja({ r: e, g: t, b: n, a: r }) {
  return { r: Aa(e), g: Aa(t), b: Aa(n), a: r };
}
function Ma({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Na(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Pa({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Na(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Fa(e) {
  return fx(dx(e));
}
function Ia(e) {
  return ux(lx(e));
}
function La(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ba({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ra(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ba(e)
              : Va(e)),
    i
  );
}
function Ra(e) {
  let t = wa(e);
  if (t) return t.format === `hsl` ? Va(t) : t.format === `hsv` ? za(t) : Ba(t);
}
function za(e) {
  let t = ya(e.h, e.s, e.v);
  return { ...ha(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ha(e.a) };
}
function Ba(e) {
  let t = pa(e.r, e.g, e.b);
  return { ...ha(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ha(e.a) };
}
function Va(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = sa(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = sa(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = la(e.s)),
    (r = sa(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = la(e.l)),
    (i = _a(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ha(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ua() {
  return G.location.origin === `https://screenshot.framer.invalid`;
}
function Wa({ children: e }) {
  if (l(Ex).top) return D(y, { children: e });
  let n = t({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = t({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = t(new Set()).current,
    a = t({
      getLayoutId: d(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            z(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Ga(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: d(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return D(Ex.Provider, { value: a, children: e });
}
function Ga(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ka({ enabled: e = !0, ...t }) {
  let n = l(Ex),
    r = u(() => ({ ...n, enabled: e }), [e]);
  return D(Ex.Provider, { ...t, value: r });
}
function qa(e) {
  let n = t(null);
  return (n.current === null && (n.current = e()), n.current);
}
function Ja(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ya(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return te(`div`, {
    style: Ox,
    children: [
      D(`div`, { className: `text`, style: Ax, children: r }),
      i && D(`div`, { className: `text`, style: jx, children: i }),
    ],
  });
}
function Ya(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Xa() {
  let e = q.current();
  return e === q.canvas || e === q.export;
}
function Za() {
  let [e] = c(() => Xa());
  return e;
}
function Qa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function $a(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Hx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function eo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function to(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Ux) continue;
    let n = eo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${eo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function no(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Vx) {
    let n = eo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function ro(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = no(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: to(n, t, $a(t.pixelWidth, t.pixelHeight)) };
}
function io() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ct(zx.imagePlaceholderSvg),
  };
}
function ao(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function oo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function so(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Bx,
    objectPosition: oo(e.positionX, e.positionY),
    objectFit: ao(e.fit),
  };
}
function co(e) {
  let t = p.useRef(e ? `auto` : `async`),
    n = d((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = d(
      (e) => {
        n(e.currentTarget);
      },
      [n],
    ),
    i = d(
      (e) => {
        e?.complete && n(e);
      },
      [n],
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function lo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = zx.useImageSource(e, t, n),
    s = so(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = co(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : ro(e.nodeFixedSize, e, o);
  return D(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function uo({ image: e, containerSize: t, nodeId: n }) {
  let r = p.useRef(null),
    i = zx.useImageElement(e, t, n),
    a = so(e);
  return (
    p.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    D(`div`, { ref: r, style: { display: `contents`, ...Bx } })
  );
}
function fo({ nodeId: e, image: t, containerSize: n }) {
  let r = p.useRef(null),
    i = zx.useImageSource(t, n, e);
  return (
    p.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = so(t);
      zx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    D(`div`, { ref: r, style: { display: `contents`, ...Bx } })
  );
}
function po({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (I(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = L(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = ia(e * (t.pixelWidth / 2)),
        s = zx.useImageSource(t, n);
      ((r = {
        ...Wx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: oo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        q.current() === q.canvas
          ? zx.canRenderOptimizedCanvasImage(zx.useImageSource(t))
            ? D(fo, { image: t, ...n })
            : D(uo, { image: t, ...n })
          : D(lo, { image: t, avoidAsyncDecoding: q.current() === q.export, ...n });
  let o = a ? Wx : (r ?? { ...Wx, ...io() });
  return i
    ? D(M.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : D(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function mo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function ho(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Bx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), D(M.div, { style: n }))
    : (mo(e, n, !1), D(M.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function go(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function _o(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Kx.isImageObject(t)) return;
  let r = null;
  if (((r = I(n) ? { alt: ``, src: n } : ex.get(t, null)), Kx.isImageObject(r))) return go(r, e);
}
function vo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function yo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function bo(e) {
  return e != null && typeof e != `boolean` && !vo(e);
}
function V(e) {
  return Number.isFinite(e);
}
function xo(e) {
  return (Math.PI / 180) * e;
}
function So(e) {
  return tt(e) ? !1 : e === 2 || e === 5;
}
function Co(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function wo(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return To(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function To(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      B(e, `unknown constraint key`);
  }
}
function Eo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(wo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(wo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Do(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(wo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(wo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Oo(e, t, n, r, i) {
  let a = Do(V(e) ? e : Zx, n, r, i),
    o = Eo(V(t) ? t : Qx, n, r, i);
  return (
    V(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (V(n.left) && V(n.right)
        ? (o = a / n.aspectRatio)
        : (V(n.top) && V(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ko(e, t) {
  return !V(e) || !V(t) ? null : e + t;
}
function Ao(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function jo(e) {
  return !e._constraints || Ao(e) ? !1 : e._constraints.enabled;
}
function Mo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    V(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    V(n) && V(r) ? { width: n, height: r } : null
  );
}
function No(e) {
  let t = Mo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return V(n) && V(r) ? { x: n, y: r, ...t } : null;
}
function Po(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!jo(e) || r) return No(e);
  let i = Fo(e),
    a = Io(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Xx.toRect(i, o, null, n, null);
}
function Fo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Yx.quickfix({
      left: V(t),
      right: V(n),
      top: V(r),
      bottom: V(i),
      widthType: Co(c),
      heightType: Co(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Io(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Lo() {
  return p.useContext($x).parentSize;
}
function Ro(e) {
  return typeof e == `object`;
}
function zo(e) {
  return Ro(e) ? e.width : e;
}
function Bo(e) {
  return Ro(e) ? e.height : e;
}
function Vo(e, t) {
  return D(eS, { parentSize: t, children: e });
}
function Ho(e) {
  return Po(e, Lo(), !0);
}
function Uo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Wo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Go(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? M[e] : M.div;
}
function Ko(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function qo(e, t, n = nS) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!rS) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) rS = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = rS;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Jo() {
  return Ua() ? q.preview : q.current();
}
function Yo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? X.variable(e) : e === `` ? `""` : e;
}
function Xo(e) {
  return e !== bS && e !== xS;
}
function Zo(e) {
  for (let t in e) if (Xo(t) && e?.[t] === !0) return !0;
  return !1;
}
function Qo(e, t, n, r, i) {
  let a = p.useRef(null),
    o = p.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t],
    ),
    s = p.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Zo(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n],
    ),
    c = p.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Zo(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t],
    );
  return p.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function $o(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return es(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ts(r);
    case `lower-roman`:
    case `upper-roman`:
      return rs(r);
    default:
      return es(r);
  }
}
function es(e) {
  return String(e).length;
}
function ts(e) {
  let t = 1;
  for (; ns(t) < e;) t++;
  return t;
}
function ns(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function rs(e) {
  let t = 0;
  for (let n of kS) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function is(e, t) {
  return X.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function as(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function os() {
  return q.current() === q.preview ? JS.value : qS.value;
}
function ss(e) {
  return sS(e, os, `framer-lib-combinedCSSRules`);
}
function cs(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function ls(e) {
  let t = {};
  return (!e || !YS || q.current() !== q.canvas || cs(t, e), t);
}
function us(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ds(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = p.Children.map(t, (e) =>
        p.isValidElement(e) ? p.cloneElement(e, { _forwardedOverrides: n }) : e,
      )),
    { props: e, children: t }
  );
}
function fs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ps(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: d } = l(Ex);
  return u(() => {
    if (!d) return e.layoutId;
    let l = t || e.layoutId;
    if (!l && (s || !i || o)) return;
    let u = l || c({ id: i, name: r, duplicatedFrom: a });
    if (u) return n ? `${u}-${n}` : u;
  }, [d]);
}
function ms() {
  let [e, t] = p.useState(0);
  return p.useCallback(() => t((e) => e + 1), []);
}
function hs(e) {
  let t = ms();
  a(() => {
    let n = e?.current;
    if (n)
      return (
        QS?.observeElementWithCallback(e.current, t),
        () => {
          QS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function gs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute($S)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(_s)
    .map(vs);
}
function _s(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function vs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(_s);
  return t ? vs(t) : e;
}
function ys(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = l(XS),
    u = q.current() === q.canvas;
  cb(() => {
    !u ||
      c ||
      s ||
      (t.current && i && a && o && zx.queueMeasureRequest(us(i), t.current, n(t.current)));
  });
}
function bs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && zx.queueMeasureRequest(us(t.id), t, gs(t));
}
function xs(e) {
  e.willChange = `transform`;
  let t = q.current() === q.canvas;
  nC && t && (e.translateZ = eC);
}
function Ss(e) {
  ((e.willChange = `transform`), Cs(e, !0));
}
function Cs(e, t) {
  let n = q.current() === q.canvas;
  if (!nC || !n) return;
  let r = (I(e.transform) && e.transform) || ``;
  t ? r.includes(tC) || (e.transform = r + tC) : (e.transform = r.replace(tC, ``));
}
function ws(e, t, n, r = !0) {
  if (!e) return;
  let i = Mx(e.style),
    a = n || i[t],
    o = () => {
      Ts(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Ts(e) {
  return I(e) || L(e) || nt(e);
}
function Es(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Ds(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Es(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Os(e, t) {
  let n = [e, t];
  return oC.test(e) ? e : Ds(1e3, sC, n, () => aC.multiplyAlpha(e, t));
}
function ks(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Os(e.value, t) }))
  );
}
function As(e, t) {
  let n = 0;
  return (
    ks(e, t).forEach((e) => {
      n ^= iC(e.value) ^ e.position;
    }),
    n
  );
}
function js(e) {
  return e && cC.every((t) => t in e);
}
function Ms(e) {
  return e && lC.every((t) => t in e);
}
function Ns({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || hx(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = ex.get(e, null)),
      typeof e == `string` || hx(e)
        ? (n.background = e)
        : dC.isLinearGradient(e)
          ? (n.background = dC.toCSS(e))
          : pC.isRadialGradient(e)
            ? (n.background = pC.toCSS(e))
            : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)));
}
function H(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Ps(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Fs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Is(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Ee(n)
      ? (t.cornerShape = Ne(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    H(e, `size`, t),
    H(e, `width`, t),
    H(e, `height`, t),
    H(e, `minWidth`, t),
    H(e, `minHeight`, t),
    H(e, `top`, t),
    H(e, `right`, t),
    H(e, `bottom`, t),
    H(e, `left`, t),
    H(e, `position`, t),
    H(e, `overflow`, t),
    H(e, `opacity`, t),
    e._border?.borderWidth || H(e, `border`, t),
    H(e, `borderRadius`, t),
    H(e, `radius`, t, `borderRadius`),
    H(e, `color`, t),
    H(e, `shadow`, t, `boxShadow`),
    H(e, `x`, t),
    H(e, `y`, t),
    H(e, `z`, t),
    H(e, `rotate`, t),
    H(e, `rotateX`, t),
    H(e, `rotateY`, t),
    H(e, `rotateZ`, t),
    H(e, `scale`, t),
    H(e, `scaleX`, t),
    H(e, `scaleY`, t),
    H(e, `skew`, t),
    H(e, `skewX`, t),
    H(e, `skewY`, t),
    H(e, `originX`, t),
    H(e, `originY`, t),
    H(e, `originZ`, t),
    Ns(e, t),
    t
  );
}
function Ls(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Mx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Rs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (hC.has(t)) return `pointer`;
}
function zs(e) {
  return Bs(e) ? !0 : e.style ? !!Bs(e.style) : !1;
}
function Bs(e) {
  return gC in e && (e[gC] === `scroll` || e[gC] === `auto`);
}
function Vs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ce(e.minWidth),
    h = ce(e.minHeight),
    g = ce(e.maxWidth),
    _ = ce(e.maxHeight);
  return {
    top: ce(n),
    left: ce(t),
    bottom: ce(r),
    right: ce(i),
    width: ce(a),
    height: ce(o),
    size: ce(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Hs(e) {
  let t = l(XS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Vs(e),
    s = Ho(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: q.current() === q.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Ls(e) && !e.__fromCanvasComponent && !zs(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (c.pointerEvents = `none`);
  let f = p.Children.count(e.children) > 0 &&
      p.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = Is(e);
  (a === void 0 && !i && (Ps(m) || (c.width = _C.width), Fs(m) || (c.height = _C.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let h = {};
  (jo(o) &&
    s &&
    !Uo(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, f, r, m, h, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    rC.applyWillChange(e, c, !0));
  let g = c;
  c.transform || (g = { x: 0, y: 0, ...c });
  let _ = Xa();
  return (
    e.positionSticky
      ? (!_ || zx.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = zx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function Us(e) {
  let t = {};
  for (let n in e)
    (Je(n) || Px(n)) && !vC.has(n)
      ? (t[n] = Mx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Mx(e)[n] != `boolean` && !e.transition && (t.transition = Mx(e)[n]));
  return t;
}
function Ws(e) {
  return `data-framer-name` in e;
}
function Gs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Ks(e) {
  return D(M.div, { layoutId: xC, style: wC, children: e.children });
}
function qs(e, t) {
  Ze(e) ? e(t) : Js(e) && (e.current = t);
}
function Js(e) {
  return R(e) && `current` in e;
}
function Ys(e) {
  return Js(e) && e.current !== null;
}
function Xs() {
  let e = qa(() => new Set()),
    t = qa(() => new Map());
  return qa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Zs(e) {
  let n = t(null),
    r = Xs();
  return qa(() => (Js(e) ? r(e) : Ze(e) ? r(n, e) : r(n)));
}
function Qs(e, n, r) {
  let i = t(),
    a = t();
  (Zr(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    r ?? [{}],
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(n), (i.current = n)));
}
function $s(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new TC({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ec(e, t, n) {
  let r = qa(() => `${n.rootMargin}`),
    i = l(EC),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Qs(
    e,
    (e) => {
      if (a && e !== null) return $s(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c],
  );
}
function tc(e, t, n) {
  let r = p.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  DC(
    e,
    p.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = rc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t],
    ),
    { threshold: OC, rootMargin: s, enabled: i ?? !0 },
  );
}
function nc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, G.innerHeight);
}
function rc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && nc(t, e) >= r;
}
function ic() {
  return l(MC);
}
function ac() {
  return new Map();
}
function oc() {
  return qa(ac);
}
function sc(e, t = []) {
  let { register: n, deregister: r } = l(NC);
  a(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function cc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function lc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (V(t.originX) && (r.originX = t.originX),
      V(t.originY) && (r.originY = t.originY),
      V(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (V(n.originX) && (r.originX = n.originX),
      V(n.originY) && (r.originY = n.originY),
      V(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function uc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function dc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return zC.PushLeft;
    case `left`:
      return zC.PushRight;
    case `bottom`:
      return zC.PushUp;
    case `top`:
      return zC.PushDown;
  }
}
function fc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return zC.OverlayLeft;
    case `left`:
      return zC.OverlayRight;
    case `bottom`:
      return zC.OverlayUp;
    case `top`:
      return zC.OverlayDown;
  }
}
function pc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return zC.FlipLeft;
    case `left`:
      return zC.FlipRight;
    case `bottom`:
      return zC.FlipUp;
    case `top`:
      return zC.FlipDown;
  }
}
function mc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return gc(e, t.transition, t.component);
    case `removeOverlay`:
      return _c(e);
    case `add`:
      return vc(e, t.key, t.transition, t.component);
    case `remove`:
      return xc(e);
    case `update`:
      return hc(e, t.key, t.component);
    case `back`:
      return yc(e);
    case `forward`:
      return bc(e);
    default:
      return;
  }
}
function hc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function gc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function _c(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function vc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Ec(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = wc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Sc(e, t, c),
    p = Tc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function yc(e) {
  let t = { ...e.containers },
    n = xc(e);
  if (n) return ((n.containers = t), n);
}
function bc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = vc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function xc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (z(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Cc(e, r, n),
    u = Tc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Sc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Cc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function wc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Tc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Dc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ec(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Dc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Oc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Oc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Oc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Oc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Oc(e, t, n) {
  let r = {},
    i = {};
  return (
    VC.forEach((e) => {
      ((r[e] = IC[e]), (i[e] = { ...n, from: IC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Mx(IC)[a]}%` : Mx(IC)[a];
        ((Mx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function kc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Ac({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function jc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : GC;
}
function Mc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Nc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Pc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Fc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ic(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Lc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Rc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return GC;
}
function zc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Bc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Vc(e) {
  return p.Children.map(e.component, (t) => {
    if (!bo(t) || !yo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? R(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      p.cloneElement(t, n)
    );
  });
}
function Hc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Uc(e, t) {
  let n = be(),
    r = le();
  return D(WC, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Wc(e) {
  return R(e) || Ze(e);
}
function Gc(e) {
  return !!e && JC in e && e[JC] === !0;
}
function Kc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return I(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return tt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = R(e.defaultValue) ? e.defaultValue : {};
        return (R(e.controls) && qc(t, e.controls), t);
      }
      case `array`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function qc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!tt(i) || Gc(r)) continue;
    let a = Kc(r);
    tt(a) || (e[n] = a);
  }
}
function Jc(e) {
  if (R(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Yc(e, t) {
  Wc(e) && qc(Jc(e), t);
}
function Xc(e, t) {
  (Object.assign(e, { propertyControls: t }), Yc(e, t));
}
function Zc(e) {
  return e.propertyControls;
}
function Qc(e) {
  return ew in e;
}
function $c(e, t) {
  if (!Qc(e)) return;
  let n = ex.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function el(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function tl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function nl(e, t) {
  let n = [];
  (V(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    V(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    V(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    V(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    V(e.invert) && n.push(`invert(${e.invert / 100})`),
    V(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    V(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    V(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...el(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function rl(e, t) {
  V(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function il(e, t) {
  (rl(e, t), nl(e, t));
}
function al(e, t) {
  let n,
    r = (...r) => {
      (G.clearTimeout(n), (n = G.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      G.clearTimeout(n);
    }),
    r
  );
}
function ol(e, t = 2) {
  let n = 0;
  if (typeof e == `number`) n = e;
  else if (typeof e == `string`) n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function sl(e) {
  if (e === `none`) return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((e) => ol(e)),
    [n, r, i, a] = t;
  switch (t.length) {
    case 1:
      return V(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !V(n) || !V(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !V(n) || !V(r) || !V(i) ? null : { top: n, right: r, bottom: i, left: r };
    case 4:
      return !V(n) || !V(r) || !V(i) || !V(a) ? null : { top: n, right: r, bottom: i, left: a };
    default:
      return null;
  }
}
function cl(...e) {
  return e.filter(Boolean).join(` `);
}
function ll() {
  let e = p.useContext(rw);
  return !Number.isNaN(e.update);
}
function ul(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = dl(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function dl(e) {
  if (e.startsWith(aw)) return e.substr(ow);
}
function fl(e, t, n) {
  let r = i.map(e, (e) => (k(e) ? T(e, t) : e));
  return n ? r : D(y, { children: r });
}
function pl(e) {
  let t = qa(() => ml(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function ml(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = hl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = hl(t)));
    },
    r = !1;
  function a(a, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`,
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (k(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ze(o) ? o(e.props) : o;
          return T(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return D(y, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function hl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (qs(n, e), qs(t, e));
  };
}
function gl(e, t, n, r, i, a, o, s) {
  let c = p.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !p.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !bl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = yl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = yl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = D(
        cw.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c,
      ),
      f = vl(e, a, r);
    (f.length
      ? (z(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = D(
          `div`,
          { className: `${lw} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c,
        )))
      : z(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    z(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, D(`div`, { className: uw }, `property-overrides-separator`)]
  );
}
function _l(e) {
  return e.split(`-`)[2];
}
function vl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${_l(a)}`);
  }
  return r;
}
function yl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function bl(e, t) {
  for (let n of Object.keys(t)) if (!Ot(e[n], t[n], !0)) return !0;
  return !1;
}
function xl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Sl(e) {
  return p.forwardRef(({ optimized: t, ...n }, r) => {
    let i = p.useContext(sw),
      a = p.useContext(cw)?.variants,
      o = n[vw];
    o && !jn() && gw.setAll(o, a, t ? n : null, i);
    let s = bw(n);
    return D(e, { ref: r, ...n, ...s });
  });
}
function Cl(e) {
  return I(e) || Array.isArray(e);
}
function wl(e) {
  return e in Cw;
}
function Tl(e, t) {
  let n = qa(() => ({ values: Sw(t ? e : void 0) }));
  return (
    p.useEffect(() => {
      if (!t)
        for (let e of xw) {
          let t = Cw[e];
          tt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function El(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: i,
    loop: o,
    loopPauseOffscreen: s,
  },
  l,
) {
  let f = oe(),
    p = qa(Sw),
    m = t(!1),
    h = Dw(),
    g = t(null),
    _ = d(async () => {
      if (!o) return;
      let e = r || void 0,
        t = m.current && i === `mirror`,
        n = t ? Cw : o,
        a = t ? o : Cw;
      return (
        (m.current = !m.current),
        (g.current = Promise.all(
          xw.map((t) => {
            if (!(f && t !== `opacity`))
              return (
                p[t].jump(a[t] ?? Cw[t]),
                new Promise((r) => {
                  let i = { ...e, onComplete: () => r() },
                    o = n[t] ?? a[t];
                  typeof o == `number` && Ae(p[t], o, i);
                })
              );
          }),
        )),
        g.current
      );
    }, [o, i, r, f]),
    [v, y] = c(!1),
    b = t(!1),
    x = d(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    S = d(() => {
      b.current || ((b.current = !0), j(() => y(!0)), x());
    }, [x]),
    C = d((e = !0) => {
      (xw.forEach((e) => {
        p[e].stop();
      }),
        xw.forEach((e) => {
          p[e].set(Cw[e]);
        }),
        (m.current = !1),
        e && ((b.current = !1), j(() => y(!1))));
    }, []),
    w = e && o,
    T = d(() => {
      document.hidden ? C(!1) : b.current && ((b.current = !1), S());
    }, [S, C]);
  (a(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    a(() => {
      (w && s) || (w ? S() : C());
    }, [S, C, s, w]),
    a(() => () => C(), [C]));
  let E = t(!1),
    D = d(async () => {
      g.current && (await g.current, !E.current && C());
    }, [C]);
  DC(
    l,
    d(
      (e) => {
        e.isIntersecting ? ((E.current = !0), S()) : ((E.current = !1), D());
      },
      [S, D],
    ),
    { enabled: w && s },
  );
  let O = v || !s;
  return u(() => ({ values: p, style: w && O ? ww : Tw }), [w, O]);
}
function Dl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Ol(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = p.useRef(null),
    c = oe(),
    u = p.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Dl(e, s.current, r, i, a)),
      [r, i, a],
    ),
    { scrollY: d } = de(),
    f = xe(d, u),
    m = me(a && s.current === null ? `hidden` : n),
    h = me(0),
    g = l(EC);
  return (
    Qs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = $s(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            F.update(() => {
              (f.set(u(d.get())), a && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o],
    ),
    Ft(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? h : f }, style: o ? { ...ww, visibility: m } : Tw }
  );
}
function kl(e) {
  return typeof e == `object` && !!e;
}
function Al(e) {
  if (kl(e)) return e?.transition;
}
function jl(e, t, n, r, i, a) {
  let o = Al(e);
  return Promise.all(
    xw.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = kl(e) ? (e?.[s] ?? Cw[s]) : Cw[s];
          if ((Ee(u) && (u = u.get()), !L(u))) return c();
          let d = ue.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (I(i) && !l?.hasAnimated && G.MotionHandoffAnimation) {
            let e = G.MotionHandoffAnimation(i, s, F);
            e && (f = e);
          }
          a ? l.set(u) : Ae(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        }),
    ),
  );
}
function Ml(
  { initial: e, animate: n, exit: r, presenceInitial: i, presenceAnimate: a, presenceExit: o },
  s,
  c,
  l,
  d,
) {
  let f = i ?? e,
    p = a ?? n,
    m = o ?? r,
    [h, g] = Xe(),
    _ = t({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = qa(() => {
      let e = f ?? l;
      if (!R(e)) return { values: Sw() };
      let t = {};
      for (let n in e) {
        let r = R(e) ? e[n] : void 0;
        L(r) && (t[n] = r);
      }
      return { values: Sw(t) };
    });
  Qs(
    s,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = ue.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!wl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, L(t) ? t : Cw[e]);
        }
      }
    },
    [p],
  );
  let y = oe();
  Qs(s, (e) => {
    if (!c) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? f &&
            p &&
            (Object.assign(_.current, { running: !0 }),
            jl(p, v, y, s, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              jl(m, v, y, s, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Ot(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      jl(p, v, y, s, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && p;
  return u(() => ({ values: v.values, style: b ? ww : Tw }), [b]);
}
function Nl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Pl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Nl(o.current, document.documentElement) - Aw - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Fl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Il(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Pt();
  p.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return se((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Fl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < jw) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Ll(e, t, n) {
  let r = Pl(e, t),
    i = [...Nw],
    a = r[0];
  if (!L(a)) return Pw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!L(e)) return Pw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Rl(e) {
  return {
    x: e?.x ?? Cw.x,
    y: e?.y ?? Cw.y,
    scale: e?.scale ?? Cw.scale,
    opacity: e?.opacity ?? Cw.opacity,
    transformPerspective: e?.transformPerspective ?? Cw.transformPerspective,
    rotate: e?.rotate ?? Cw.rotate,
    rotateX: e?.rotateX ?? Cw.rotateX,
    rotateY: e?.rotateY ?? Cw.rotateY,
    skewX: e?.skewX ?? Cw.skewX,
    skewY: e?.skewY ?? Cw.skewY,
    transition: e?.transition ?? void 0,
  };
}
function zl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return p.useMemo(
    () => ({
      initial: r ?? Rl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Rl({ opacity: t }),
      exit: i ?? Rl(),
    }),
    [a, o, r, i, e, t, n],
  );
}
function Bl(e, t) {
  let n = oe(),
    r = zl(e),
    i = e.styleAppearEffectEnabled,
    a = Tl(i ? r.initial : r.animate, i),
    o = p.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Pt(),
    c = p.useRef(),
    l = p.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = ue.get(t.current);
      c.current = Promise.all(
        xw.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Cw[e]);
          let t = o[e] ?? Cw[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (L(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Ae(a.values[e], t, n);
              }
            })
          );
        }),
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  tc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    },
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    p.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return se((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Ll(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit,
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = ae(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Mx(r)[u];
        d && l(d);
      });
    }, [s, f]),
    Il(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ft(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of xw) a.values[e].set(r.initial?.[e] ?? Cw[e]);
    }),
    u(() => ({ values: a.values, style: i ? ww : Tw }), [i])
  );
}
function Vl(e, t) {
  let n = p.useRef({});
  p.useEffect(() => {
    if (t !== void 0)
      for (let r of Iv(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Be({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), F.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Hl(e, t) {
  let n = Lw();
  return {
    inputRange: Pl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of xw) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Ul(e) {
  let t = Lw();
  for (let { target: n } of e) for (let e of xw) t[e]?.push(n[e]);
  return t;
}
function Wl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o,
) {
  let s = oe(),
    c = Tl(Iw(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Pt();
  return (
    r(() => {
      if (!(l || !u))
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Hl(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of xw)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(ae(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Qs(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = Ul(n);
        return se(
          (e, { y: t }) => {
            for (let e of xw)
              (s && e !== `opacity`) ||
                (Rw.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(ae(t.progress, Rw, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0,
        );
      },
      [d, s, e, u, n, l],
    ),
    Vl(c.values, i),
    Ft(() => {
      if (l) return;
      let e = Iw(n, s);
      for (let t of xw) c.values[t].set(e?.[t] ?? Cw[t]);
    }),
    p.useMemo(() => ({ values: c.values, style: t ? ww : Tw }), [t])
  );
}
function Gl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Kl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = dl(n);
    if (r) {
      for (let i of Bw)
        if (zw[i]?.has(r)) {
          t[i][r] = Mx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Mx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Gl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Gl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear,
    )),
    t
  );
}
function ql(e) {
  return R(e) && Uw in e;
}
function Jl(e, t) {
  if (!e || !R(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ee(r) || !wl(n) || (L(r.get()) && t[n].push(r));
  }
}
function Yl(e) {
  return I(e) || Array.isArray(e);
}
function Xl({ componentIdentifier: e, children: t }) {
  return t(l(Gw)[e] ?? {});
}
function Zl() {
  return p.useContext(Kw);
}
function Ql(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function $l() {
  if (o === void 0 || Qw)
    return D(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw eT;
}
function eu({ children: e }) {
  return l(nT) ? D(y, { children: e }) : D(C, { fallback: tT, children: e });
}
function tu() {
  return D(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function nu(e, t) {
  if (!Cv || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  un(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function ru(...e) {
  console.error(...e);
}
function iu() {
  return q.current() !== q.canvas;
}
function au({ getErrorMessage: e, fallback: t, children: n }) {
  return iu()
    ? D(ou, { fallback: t, children: D(iT, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function ou({ children: e, fallback: t = rT }) {
  return o === void 0 ? D(C, { fallback: t, children: e }) : D(eu, { children: e });
}
function su() {
  return p.useContext(oT);
}
function cu() {
  let e = su();
  return p.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function lu({ children: e, scopeId: t, nodeId: n }) {
  let r = su(),
    i = p.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r],
    );
  return D(oT.Provider, { value: i, children: e });
}
function uu(e, t) {
  return `${sT}${e}:${t}`;
}
function du(e, t) {
  return pu(`component`, e, t);
}
function fu(e, t) {
  return pu(`override`, e, t);
}
function pu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${uu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function mu(e, t, n, r, i, a) {
  let o = gu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function hu(e, t, n, r) {
  return gu(e, t, n, r);
}
function gu(e, t, n, r) {
  return !!(tt(n) || (n === 1 && r && e === t));
}
function _u(e, t, n, r, i, a) {
  let o = su();
  if (tt(t) || tt(n)) return D(aT, { children: e });
  let { disableCustomCode: s } = Xw();
  return s && r
    ? D(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (mu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = D(au, { getErrorMessage: du.bind(null, t, n), fallback: null, children: e })),
      i && (e = D(lu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function vu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function yu(e) {
  return !(!e || e.placement || e.alignment);
}
function bu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      B(e);
  }
}
function xu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${bu(t)}, -100%`;
    case `right`:
      return `0%, ${bu(t)}`;
    case `bottom`:
      return `${bu(t)}, 0%`;
    case `left`:
      return `-100%, ${bu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Su(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(gT)) {
      let e = n.getAttribute(gT);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Cu(e) {
  let { registerCursors: t } = l(uT),
    n = qa(() => e),
    i = v();
  r(() => t(n, i), [t, i]);
}
function wu(e) {
  return !!(e && typeof e == `object` && vT in e);
}
function Tu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Eu() {
  return q.current() === q.canvas;
}
function Du(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Ou(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function ku(e, t, n, r) {
  if (I(e)) {
    let i = Du(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Ii(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Au(e) {
  return I(e) && e.startsWith(`data:${TT}`);
}
function ju(e) {
  if (Au(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(TT.length),
        r = t.searchParams,
        i = r.has(xT) ? r.get(xT) : void 0,
        a,
        o = r.get(ST),
        s = r.get(CT),
        c = r.get(wT);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Mu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = ju(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Nu(e) {
  if (!Au(e)) return e;
  let t = ju(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Pu(i) };
}
function Pu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Fu({ children: e }) {
  return D(ET.Provider, { value: void 0, children: e });
}
function Iu(e, t, n, r, a, o) {
  let s = l(ET),
    c = cu(),
    f = u(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: c }), [t, n, c]),
    p = jt(),
    m = Nt(),
    { locales: h } = $n(),
    g = u(() => {
      let e = wu(r) ? r : Nu(r);
      if (e) return ku(e, p, m, h);
    }, [m, r, p, h]),
    _ = !!(!Eu() && s?.nodeId && f.nodeId),
    v = d(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Ln(e))) {
            zu(a.href, ``, `_blank`);
            return;
          }
          g ? a.navigate?.() : zu(a.href, a.rel, a.target);
        }
      },
      [a, g],
    ),
    y = d(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), zu(a.href, ``, `_blank`));
      },
      [a],
    ),
    x = d(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? a.navigate?.() : zu(a.href, a.rel, a.target));
      },
      [a, g],
    );
  Qs(
    o,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_],
  );
  let S = e;
  return (
    _ &&
      (i.forEach(e, (e) => {
        Ru(e) &&
          (z(
            Lu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          z(
            Lu(f),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          bT.collectNestedLink(s, f));
      }),
      (S = i.map(e, (e) => {
        if (!Ru(e)) return e;
        let t = Bu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: x,
            as: r.as && Bu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return b(t, { ...i, ref: a }, n);
      }))),
    D(ET.Provider, { value: f, children: S })
  );
}
function Lu(e) {
  return !tt(e?.nodeId);
}
function Ru(e) {
  return k(e) && (Bu(e.type) !== e.type || Bu(e.props.as) !== e.props.as);
}
function zu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Bu(e) {
  return e === `a` ? `span` : Ye(e) && he(e) === `a` ? M.span : e;
}
function Vu(e) {
  e &&
    F.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      F.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(DT, r)),
          i && t.forEach((e) => e.style.setProperty(OT, i)));
      });
    });
}
function Hu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${DT});
    background-color: var(${OT}, highlight);
}`,
  ];
}
function Uu({ triggerId: e, children: t }) {
  return (
    p.useLayoutEffect(() => {
      e && Vu(e);
    }, [e]),
    t
  );
}
function Wu(e) {
  return `${e?.x}-${e?.y}`;
}
function Gu(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      B(e);
  }
}
function Ku(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function qu(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      B(e);
  }
}
function Ju(e, t, n, r) {
  switch (qu(t, e, r)) {
    case `x`:
      return { placement: Gu(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: Gu(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function Yu(e, t, n, r, i, a, o) {
  let s = J.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = Ju(c, n, i, a),
    f = J.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: Ku(f.x + l, t.width, a.width, o),
      y: Ku(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function Xu(e, t, n) {
  return AT.containsPoint([t, ...n], e) ? t : e;
}
function Zu(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + jT), e.x + e.width - jT),
    constrainY: (t) => Math.min(Math.max(t, e.y + jT), e.y + e.height - jT),
  };
}
function Qu({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = J.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - MT), y: t };
      return [n, Xu(l, s, [n, c]), Xu(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + MT), y: t };
      return [n, Xu(s, l, [n, o]), Xu(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - MT) };
      return [n, Xu(s, o, [n, l]), Xu(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + MT) };
      return [n, Xu(o, s, [n, c]), Xu(c, l, [n, o])];
    }
    default:
      B(n);
  }
}
function $u(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      B(e);
  }
}
function ed(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = J.merge(r, i),
    c = Qu({ x: e, y: t }, n, i, Zu(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: $u(n, J.delta(r, i)),
  };
}
function td(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      B(e);
  }
}
function nd(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: td(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: td(t) };
    case `bottom`:
      return { originX: td(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: td(t) };
    default:
      B(e);
  }
}
function rd(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t;) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function id(e) {
  return (F.read(e, !0), () => Ie(e));
}
function ad(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, ed(t, n, a, r, i)));
  };
}
function od(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function sd(e, t, n, { safeArea: r, onDismiss: i }) {
  let a = qa(() => new Set()),
    o = p.useContext(NT),
    [s, c] = Xe();
  return (
    p.useEffect(() => {
      if (s) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), o.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), o.delete(t.current), c());
      }
    }, [s, c, t, o]),
    p.useEffect(() => {
      if (!r) {
        let e = (e) => {
          e.key === `Escape` && i();
        };
        return (G.addEventListener(`keyup`, e), () => G.removeEventListener(`keyup`, e));
      }
      let o;
      function s() {
        if (!(!o || a.size !== 0)) {
          for (let r of document.elementsFromPoint(o.x, o.y))
            if (r === e.current || r === t.current || r === n.current) return;
          i();
        }
      }
      function c(e) {
        ((o = e), F.read(s));
      }
      return (
        G.addEventListener(`mousemove`, c),
        () => {
          G.removeEventListener(`mousemove`, c);
        }
      );
    }, [i, r, e, n, t]),
    a
  );
}
function cd({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => Yu(a, o, e, t, n, r, i);
}
function ld(e, t) {
  return qa(() => {
    let { originX: n, originY: r } = nd(e, t),
      i = { x: qe(n), y: qe(r) };
    return [
      i,
      (e) => {
        let n = nd(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function ud(e, { x: t, y: n }) {
  if (!e || !bo(e) || !yo(e) || (!R(e.props.style) && !tt(e.props.style))) return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return p.cloneElement(e, { style: r });
}
function dd(e, t) {
  if (t || tt(e)) {
    let e = document.querySelector(`#${FT}`) ?? document.querySelector(`#${PT}`);
    if (e) return e;
  }
  return (I(e) ? document.querySelector(e) : void 0) || document.body;
}
function fd({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: r,
  offsetY: i,
  anchorRef: a,
  className: o,
  children: s,
  portalSelector: c,
  zIndex: u,
  collisionDetection: d = !1,
  collisionDetectionPadding: f,
  onDismiss: m,
  ...h
}) {
  let g = p.useRef(null),
    v = p.useRef(null),
    y = p.useRef(null),
    [b, x] = ld(t, e);
  p.useLayoutEffect(() => {
    if (!Ys(a) || !y.current || !t || !e) return;
    let o = { x: r ?? 0, y: i ?? 0 },
      s,
      c = !1,
      l = !1,
      u,
      p,
      m,
      h,
      _,
      b = 0,
      S = 0,
      C = rd(a),
      w = C.position,
      T = y.current.getBoundingClientRect(),
      E = cd({
        placement: t,
        alignment: e,
        offset: o,
        collisionDetectionSize: d ? { width: G.innerWidth, height: G.innerHeight } : void 0,
        collisionDetectionPadding: f,
      }),
      D = () => {
        c || (od(g, w, m, b, S), n && _(u, m, p, h), (h = void 0));
      },
      O = () => {
        ((_ = ad(v)), h ? D() : od(g, w, m, b, S), (l = !0));
      },
      k = () => {
        c || x(p);
      },
      ee = () => {
        if (!E || c) return;
        (w === `fixed` ? ((b = 0), (S = 0)) : ((b = G.scrollX), (S = G.scrollY)),
          (u = a.current.getBoundingClientRect()));
        let e = E(u, T);
        ((p = e[0]), (m = e[1]));
      };
    if ((ee(), k(), O(), C.scrolls && (s = id(ee)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let te = (e) => {
        ((h = e), l && (F.read(ee, !1, !0), F.update(k, !1, !0), F.render(D, !1, !0)));
      },
      A = a.current;
    return (
      A.addEventListener(`mousemove`, te),
      () => {
        (A.removeEventListener(`mousemove`, te), s?.(), (c = !0));
      }
    );
  }, [n, t, e, r, i, a, d, f, x]);
  let S = sd(a, g, v, { safeArea: n, onDismiss: m }),
    C = l(XS);
  return _.createPortal(
    te(M.div, {
      ref: g,
      className: o,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: u,
      },
      ...h,
      children: [
        n
          ? D(`div`, { ref: v, style: { position: `absolute` }, "data-safearea": !0 })
          : D(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: m }),
        D(NT.Provider, {
          value: S,
          children: D(Fu, {
            children: D(kT, {
              triggerId: a.current?.id ?? void 0,
              children: D(`div`, { ref: y, children: ud(s, b) }),
            }),
          }),
        }),
      ],
    }),
    dd(c, C),
  );
}
function pd({ component: e, props: t }) {
  let n = l(sw),
    r = b(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return D(fw, { overrides: o, breakpoint: i, children: r });
}
function md(e) {
  RT = e;
}
function hd() {
  return RT;
}
function gd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : gd(e.parentElement, t)
      : null;
}
function _d({ children: e }) {
  return D(eu, { children: e });
}
function vd(e) {
  return A(function (t, n) {
    return D(_d, { children: D(e, { ...t, ref: n }) });
  });
}
function yd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return xd(e, t, o, s, a, c, l, i, r);
}
function bd(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Du(t))
    try {
      let [i, a] = t.split(`#`, 2);
      z(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      z(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Ii(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function xd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = gi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Sd() {
  let e = l(BT),
    t = Nt()?.pathVariables;
  return e || t;
}
function Cd(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(zT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function wd() {
  return !!Wi(`ss-only-routes`);
}
function Td(e) {
  if (o === void 0) return;
  let t = o.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Ed(e) {
  return Ui(`rewrite`, e)?.description === `external`;
}
function Dd() {
  if (!Xw().checkServerSideRouter) return !1;
  if (WT === void 0) {
    let e = wd();
    ((GT = !e && kn() && Mn() < 16.4), (WT = e || GT));
  }
  return WT;
}
function Od(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Ed(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === hd() ? `client` : `server` };
}
async function kd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (GT &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((GT = !1), Ui(`ss-only-routes`, t.headers.get(`server-timing`)) || (WT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Od(t, e);
}
function Ad(e, t) {
  VT.has(e) && VT.set(e, t);
}
async function jd(e) {
  await Sn(HT);
  try {
    Ad(e, await kd(e));
  } catch {
    VT.delete(e);
  }
}
async function Md(e) {
  try {
    let t = await kd(e);
    return (Ad(e, t), t);
  } catch {
    return (jd(e), { decision: `server` });
  }
}
function Nd(e) {
  if (!Dd()) return;
  let t = Td(e);
  if (!t || t.origin !== o.location.origin) return;
  let n = t.href;
  VT.has(n) || VT.set(n, Md(n));
}
function Pd(e) {
  let t = Td(e);
  if (!t) return;
  let n = VT.get(t.href);
  return n && !st(n) ? n : void 0;
}
async function Fd(e) {
  let t = Td(e);
  if (!t) return;
  let n = VT.get(t.href);
  if (n) return st(n) ? Promise.race([n, Sn(UT).then(() => void 0)]) : n;
}
function Id(e) {
  !(e instanceof HTMLAnchorElement) || !e.href || Nd(e.href);
}
function Ld() {
  let e = h.connection || h.mozConnection || h.webkitConnection || {},
    t = h.deviceMemory && h.deviceMemory > JT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? YT : XT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: qT }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Id(t);
    let { id: n, preload: i } = e,
      a = $T.get(n);
    if (!a?.size || QT.has(n)) return;
    (++s, QT.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), ZT.delete(t));
    for (let e of a) (o.unobserve(e), ZT.delete(e));
    (a.clear(), $T.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = ZT.get(e);
      if (!n || QT.has(n.id)) {
        (o.unobserve(e), ZT.delete(e));
        continue;
      }
      let r = n.id,
        a = $T.get(r),
        l = $T.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : $T.set(r, new Set([e])), setTimeout(c, KT, n, e));
      } else (a && a.delete(e), l <= 1 && $T.delete(r));
    }
  }
  return (e, t, n) => {
    if (!QT.has(n))
      return (
        ZT.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (ZT.delete(e), o.unobserve(e));
        }
      );
  };
}
function Rd(e, t) {
  let n = Du(e),
    r = {
      href: e === `` || Ou(e, n) ? e : `https://${e}`,
      target: zd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Gn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function zd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Bd(e, t) {
  console.warn(
    ut(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`),
  );
}
function Vd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Bd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return st(i) ? i.catch(Bd) : i;
  } catch (e) {
    Bd(e);
  }
}
async function Hd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      z(a, `unresolvedSlug should be defined`);
      let o = Vd(a, r, n),
        s = st(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Ud(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Vd(o, r, n);
      st(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Wd() {
  let e = xn();
  return d((t, n, r, i = []) => Ud(t, n, r, e, i), [e]);
}
function Gd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = xn();
  return d(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = wu(r) ? r : Nu(r);
      if (!wu(c))
        return un(
          `published_site_click`,
          {
            ...s,
            href: o ? Kd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`,
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (I(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (st(n) ? await n : n) ?? null;
        }
      }
      return un(
        `published_site_click`,
        {
          ...s,
          href: o ? Kd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`,
      );
    },
    [e, t, n, r, i, a],
  );
}
function Kd(e) {
  try {
    let t = new URL(e, G.document.baseURI);
    return t.origin === G.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function qd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Jd(e, t, n) {
  return async (r) => {
    let i = Ln(r),
      a = gd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Iy({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Yd(e, t, n) {
  return async (r) => {
    let i = await Xd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    Zd(e, r, i.redirectUrl);
  };
}
async function Xd(e) {
  return !e || !Dd()
    ? { decision: `client` }
    : Pd(e) || (Nd(e), (await Fd(e)) ?? { decision: `server` });
}
async function Zd(e, t, n) {
  (await Iy({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    o.location.assign(Qd(e, n)));
}
function Qd(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, o.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function $d(e, t) {
  if (t || o === void 0) return;
  let n = o.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  let i = new URL(n);
  if (r.origin === i.origin && !(r.pathname === i.pathname && r.search === i.search)) return r.href;
}
function ef(e, t, n, r, i, a, o, s) {
  if (!n) return Rd(e, r);
  let c = bd(t, e, s, o);
  if (!c) return Rd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Rd(e, r);
  let m = gi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !wv,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = zd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = $d(m, g),
    v = { pathVariables: f, locale: p },
    y = Yd(m, _, (e) =>
      qd(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e,
      ),
    );
  return {
    href: m,
    target: h,
    onClick: Jd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Cd(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function tf(e, t, n) {
  let r = nf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ze(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ze(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function nf(e, t) {
  let n = R(e) ? e : void 0,
    r = n && !et(n),
    i = t && !et(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function rf(e, t, n) {
  if (!(t && Tn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: af } : { ...i, onTap: r }) : e;
}
function af(e) {
  let t = gd(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function of(e, t, n, r, i, a) {
  let o = wu(e) ? e : Nu(e);
  if (!wu(o)) return I(e) ? Rd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (st(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return gi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function sf() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62),
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function cf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, sf(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: nE, difficulty: rE, tokenLength: iE, maxTime: aE }));
  });
}
function lf(e) {
  let t = new Set();
  for (let n of e.elements)
    !uf(n) || n.disabled || !n.name || n.name.startsWith(oE) || t.add(n.name);
  return Array.from(t);
}
function uf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function df(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function ff(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        },
      );
    }
  } catch {}
}
function pf() {
  let e = p.useContext(yE),
    t = p.useMemo(
      () =>
        cE.map((e) => ({
          inputRef: p.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      [],
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: p.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${oE}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: p.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [uE.name]: e.originalName,
                [uE.value]: o,
                [uE.setAttribute]: e.methodsUsed.setAttribute,
                [uE.valueProperty]: e.methodsUsed.valueProperty,
                [uE.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [uE.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [uE.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${oE}_${dE.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${oE}_${dE.fieldCount}`, r.toString()),
          n.append(`${oE}_${dE.fieldFilledCount}`, i.toString()),
          n.append(`${oE}_${dE.hpVersion}`, sE),
          n.append(`${oE}_${dE.siteId}`, e || ``),
          n.append(`${oE}_${dE.timeToSubmissionSinceModuleLoad}`, fE()));
      },
      [t, e],
    ),
  };
}
function mf({ states: e }) {
  return D(y, { children: e.map((e) => D(pE, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function hf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          gf(e, t, n);
        })
      : gf(e.pageviewEventData.current, t, n));
}
function gf(e, t, n) {
  return un(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`,
  );
}
function _f({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? vE : _E;
    case `incomplete`:
      return e === `error` ? vE : gE;
    case `submit`:
      return mE;
    case `success`:
      return hE;
    case `error`:
      return vE;
    default:
      B(t);
  }
}
function vf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function yf(e) {
  e.preventDefault();
}
function bf(e, t) {
  let n = Ou(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function xf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (xf(t)) return !0;
  return !1;
}
async function Sf(e, t, n, r) {
  let i = await cf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": df(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Cf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Cf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    R(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function wf({ EditorBar: e, fast: t = !1 }) {
  let n = l(yE),
    r = re(Dv, t ? CE : wE, kv),
    i = Xw(),
    a = u(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : D(SE, { children: D(C, { children: D(e, { framerSiteId: n, features: a }) }) });
}
function Tf({ currentRoutePath: e, routerAPI: n, children: r }) {
  let i = t(),
    o = t(),
    s = t(n),
    l = t(null);
  ((s.current = n),
    a(() => {
      e && ((i.current ??= new Set()), i.current.add(e), o.current?.(e));
    }, [e]));
  let [u] = c(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        s.current ? Df(s.current, s.current.currentRouteId, s.current.currentPathVariables) : ``,
      resolveRoute: (e) => (s.current ? Df(s.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        o.current = e;
      },
      sendTrackingEvent: async (e) => {
        s.current && Ef(s.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: l,
  }));
  return D(TE.Provider, { value: u, children: r });
}
async function Ef(e, t) {
  if (!dn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    un(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Df(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? ir(r.path, n) : r.path) : ``;
}
function Of(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function kf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((EE = e.timeZone), (DE = e.locale));
}
function Af({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Br(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: jr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t,
  );
}
function jf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = jr();
  Br(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i,
  );
}
function Mf(e, t, n, r) {
  let i = jr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Br(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      gi(t, n),
    ));
}
function Nf() {
  return Mn() >= 17 ? jE : AE;
}
function Pf(e = Bf) {
  let t = (e) => {
    e.persisted && Uf();
  };
  kn() && (o.addEventListener(`pageshow`, t), (kE = Date.now() - Nf()));
  let n = Ff(),
    r = Vf(e);
  return function () {
    (o.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Ff() {
  let e = o.history.scrollRestoration;
  return (
    (o.history.scrollRestoration = `manual`),
    function () {
      o.history.scrollRestoration = e;
    }
  );
}
function If(e) {
  return R(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Lf() {
  return { x: o.scrollX, y: o.scrollY };
}
function Rf() {
  let e = jr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (If(t)) return t;
}
function zf(e) {
  let t = jr();
  t && (Rr({ ...t, scrollPosition: e }), kn() && (kE = Date.now()));
}
function Bf(e, t = !1) {
  let n = Rf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (kn() && !t) {
      let e = Nf();
      if (Date.now() - kE < e) return;
    }
    zf(e);
  }
}
function Vf(e) {
  let t = () => {
      e(Lf());
    },
    n = () => {
      e(Lf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), o.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), o.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in o)) {
    let e = Hf(t);
    return function () {
      (i(), e());
    };
  }
  return (
    o.addEventListener(`scrollend`, t),
    function () {
      (i(), o.removeEventListener(`scrollend`, t));
    }
  );
}
function Hf(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Mr(jr()) !== t) && e());
    },
    a = () => {
      let e = Mr(jr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = kn() ? Nf() : 100;
      t = o.setTimeout(i, a);
    };
  return (
    o.addEventListener(`scroll`, a),
    function () {
      (o.removeEventListener(`scroll`, a), r());
    }
  );
}
function Uf() {
  let e = Rf();
  return e ? (o.scrollTo(e.x, e.y), !0) : !1;
}
function Wf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Gf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Wf(n, t), !0);
}
function Kf(e, t, n) {
  n !== `preserve-scroll-position` &&
    F.render(
      () => {
        (n === `restore-scroll-position` && Uf()) || Gf(e, t) || o.scrollTo(0, 0);
      },
      !1,
      !0,
    );
}
function qf(e, t) {
  F.read(() => {
    o.scrollY !== 0 ||
      o.scrollX !== 0 ||
      F.render(
        () => {
          Uf() || Gf(e, t);
        },
        !1,
        !0,
      );
  });
}
function Jf(e) {
  let n = Xw().scrollRestoration,
    i = t(void 0),
    a = t(!1),
    o = !!(n && !e),
    s = d(
      (e) => {
        ((i.current = e), o && (a.current = !0));
      },
      [o],
    ),
    c = d((e, t = !1) => {
      a.current || Bf(e, t);
    }, []),
    l = d(() => {
      o && (a.current = !0);
    }, [o]),
    u = d(() => i.current !== void 0 || a.current, []),
    f = d((e, t) => {
      let n = i.current;
      !n ||
        n.routeId !== e ||
        n.remountKey !== t ||
        ((i.current = void 0), (a.current = !1), Kf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    r(() => {
      if (o) return Pf(c);
    }, [o, c]),
    {
      usesCustomScrollRestoration: o,
      isNavigationCommitPending: u,
      onHistoryTraversal: l,
      scheduleScroll: s,
      commitNavigationScroll: f,
    }
  );
}
function Yf({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: s } = n;
  return (
    r(() => {
      i(e, t);
    }),
    a(() => {
      s && qf(o.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Xf() {
  let [e, t] = p.useState(0);
  return [e, p.useCallback(() => t((e) => e + 1), [])];
}
function Zf({ children: e, loadSnippetsModule: t }) {
  return D(HE.Provider, { value: t, children: e });
}
function Qf() {
  return p.useContext(HE);
}
function $f(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function ep(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (z(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (z(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      B(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await tp(a.createContextualFragment(e), r, i));
}
async function tp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = np(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await tp(r, e, null)));
  }
}
function np(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return rp(r, t, n);
}
function rp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function ip(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = RE), (n = zE));
      break;
    case `bodyEnd`:
      ((t = BE), (n = VE));
      break;
    case `headStart`:
      ((t = PE), (n = FE));
      break;
    case `headEnd`:
      ((t = IE), (n = LE));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function ap(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = $f(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function op(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = ip(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = ap(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((sp(t, o), s)) {
      await ep(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = $f(e.id),
      u = `${c}
${e.code}
${l}`,
      d = lp(e.id, n, r, i);
    d ? await ep(u, d, `afterend`) : await ep(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function sp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (cp(n) && n.remove(), (n = e));
  }
}
function cp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function lp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = ap(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function up() {
  let e = Qf();
  return d(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(ME)?.dataset[NE] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await op(t, n, r);
      }
    },
    [e],
  );
}
function dp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function fp({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: s,
  collectionUtils: c,
}) {
  if (!e || !t || !n || !r) return;
  let l,
    u = [],
    d = s.find((e) => e.id === Vv),
    { path: f } = await Yn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
  f && (l = dp(f, e));
  let p;
  for (let n of s) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await Yn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: c,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let s = dp(o, e);
    (u.push({ href: s, hrefLang: n.code }), n.id === Vv && (p = s));
  }
  return (
    p && u.push({ href: p, hrefLang: `x-default` }),
    () => {
      (Er(l, o.location.href), Dr(u));
    }
  );
}
function pp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: o,
  locales: s,
  siteCanonicalURL: c,
}) {
  let l = xn(),
    u = up();
  a(() => {
    let a = !0,
      d = () => void (a = !1);
    return !e || !t
      ? (u(i, n ?? {}, e, o).catch((e) => {
          a && nu(e);
        }),
        d)
      : ((e.id === t.id
          ? zn()
          : Yn({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: s.find(({ id: e }) => e === Vv),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: l,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!a) return;
            let f = d ? d.pathVariables : n;
            if ((await u(i, f ?? {}, t, o), !a)) return;
            let p = await fp({
              siteCanonicalURL: c,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: s,
              collectionUtils: l,
            });
            a && p?.();
          })
          .catch((e) => {
            a && nu(e);
          }),
        d);
  }, [e, l, t, n, r, i, o, u, s, c]);
}
function mp(e) {
  if (!e) return Sv;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function hp(e) {
  let n = Kr(e),
    r = t(void 0),
    i = d(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: d(
      async (e, t, a, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = Rt(l);
        if ((t.promise.finally(u), a === void 0)) return (e(l), t.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(Sv);
        if ((n(f, c, a), e(l), await t.promise, l?.aborted)) return;
        let p = o.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || nb();
      },
      [i, n],
    ),
    cancelPendingNavigation: i,
  };
}
function gp({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: c,
  notFoundPage: l,
  collectionUtils: f,
  routes: p,
  initialLocaleId: m,
  initialCollectionItemId: h,
  initialContentLocaleIdOverride: g,
  locales: _ = Bv,
  initialCanonicalPathVariables: v,
  preserveQueryParams: y = !1,
  LayoutTemplate: b,
  EditorBar: x,
  siteCanonicalURL: S,
  adaptLayoutToTextDirection: C,
}) {
  (Oi(),
    Vr({
      disabled: n,
      routeId: c,
      initialPathVariables: i,
      initialLocaleId: m,
      initialContentLocaleId: g,
      initialCanonicalPathVariables: v,
    }));
  let w = wr(),
    [T, E] = Xf(),
    O = kr(`framer-route-change`),
    k = u(() => (!Xw().synchronousNavigationOnDesktop || !In() ? j : (e) => e()), []),
    ee = t(!0),
    A = t(),
    ne = t(0),
    re = t(c),
    ie = t(i),
    ae = t(),
    oe = t(m),
    M = Jf(n),
    { isNavigationCommitPending: se, usesCustomScrollRestoration: ce } = M,
    { startNavigation: le, cancelPendingNavigation: ue } = hp(ce),
    de = xn(),
    fe = M.scheduleScroll,
    pe = oe.current,
    me = re.current,
    he = ie.current,
    ge = p[me],
    _e = ge?.path;
  if (!ge) throw Error(`Router cannot find route for ${me}`);
  let ve = u(() => _.find(({ id: e }) => e === Vv), [_]),
    N = u(() => _.find(({ id: e }) => (pe ? e === pe : e === Vv)) ?? null, [pe, _]),
    {
      contentLocale: ye,
      currentCanonicalPathVariables: be,
      pageExistsInCurrentLocale: xe,
      setRouteContentState: Se,
    } = vp({
      activeLocale: N,
      currentRoute: ge,
      initialCanonicalPathVariables: v,
      initialContentLocaleIdOverride: g,
      locales: _,
      routes: p,
    }),
    Ce = N?.textDirection ?? `ltr`,
    P = C ? Ce : `ltr`;
  r(() => {
    C && document.documentElement.setAttribute(`dir`, Ce);
  }, [Ce, C]);
  let we = Wr(),
    Te = u(
      () => ({
        activeLocale: N,
        contentLocale: ye,
        locales: _,
        setLocale: async (e) => {
          let t = ++ne.current,
            r = O({ localized: !0 });
          if ((await Iy({ priority: `user-blocking`, continueAfter: `paint` }), t !== ne.current)) {
            r.ignore?.();
            return;
          }
          let i;
          I(e) ? (i = e) : R(e) && (i = e.id);
          let a = _.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = re.current,
            s = p[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = pi(S);
          try {
            let e = await we({
              currentLocale: N,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: ve,
              pathVariables: ie.current,
              preserveQueryParams: y,
              sitePrefix: c,
            });
            if (!e || t !== ne.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Qn({
                activeLocale: a,
                defaultLocale: ve,
                collectionUtilsCache: de,
                locales: _,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== ne.current) {
              r.ignore?.();
              return;
            }
            ((ee.current = !1),
              (oe.current = a.id),
              (A.current = i),
              (ie.current = e.pathVariables),
              Se(l, u));
            let d = s.path && e.pathVariables ? ir(s.path, e.pathVariables) : s.path;
            (fe({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              le(
                () => {
                  w(o, o, () => k(E));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Af({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1,
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [N, ve, ye, n, E, _, y, Se, p, fe, le, w, O, k, we, de, S],
    ),
    Ee = d(
      (e, t, n, r, i, a, o, s, c, l, u) => {
        ee.current = !1;
        let d = re.current,
          f = p[e],
          m = Lt(f, n),
          h = f?.path && i ? ir(f.path, i) : f?.path;
        if (
          ((re.current = e),
          (oe.current = t),
          (ie.current = i),
          (ae.current = void 0),
          Se(a, o),
          (A.current = r),
          fe({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? ce
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (ue(), k(E));
          return;
        }
        le(
          (t) => {
            w(d, e, () => k(E), t);
          },
          c,
          u,
          !0,
        );
      },
      [E, Se, p, ce, fe, le, w, k, ue],
    );
  (Hr(M, re, Ee),
    a(() => {
      if (n) return;
      let e = () => {
        let e = jr(),
          t = o.location.hash === `` ? void 0 : o.location.hash.slice(1);
        (e && Lt(p[e.routeId], e.hash) === t) ||
          zr({
            ...(e ||
              (Pr() ?? { routeId: re.current, pathVariables: ie.current, localeId: oe.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (o.addEventListener(`hashchange`, e), () => o.removeEventListener(`hashchange`, e));
    }, [n, p]));
  let De = d(
      async (e, t, r, i, a) => {
        let o = p[e],
          s = mt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = mp(a);
        if (
          (Iy({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await Iy({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Ry)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let d = Lt(o, t),
          f = ie.current,
          m = oe.current;
        if (
          ae.current === void 0 &&
          Of({ routeId: re.current, pathVariables: f }, { routeId: e, pathVariables: r })
        ) {
          let a = se();
          if (a) {
            let t = o?.path && r ? ir(o.path, r) : o?.path;
            fe({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: d,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ue();
          (l.ignore?.(), !a && ce && Kf(d, i, `scroll-to-hash-or-top`));
          let s = p[e];
          (!n &&
            s &&
            Mf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: f,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: y,
                siteCanonicalURL: S,
              },
              u,
            ),
            !a && !ce && Kf(d, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = p[re.current],
          g =
            pi(S) +
            gi(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: f,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: _.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: y,
              relative: !1,
              siteCanonicalURL: S,
            }),
          v = {};
        ae.current = v;
        let { contentLocaleId: b, canonicalPathVariables: x } = await Qn({
          activeLocale: N,
          defaultLocale: ve,
          collectionUtilsCache: de,
          locales: _,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ae.current === v &&
          Ee(
            e,
            m,
            t,
            g,
            r,
            b,
            x,
            !1,
            l,
            i,
            n
              ? void 0
              : () => {
                  (u(),
                    jf(e, o, {
                      historyPath: g,
                      currentRoutePath: h?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: x,
                      localeId: m,
                    }));
                },
          );
      },
      [ue, p, _, Ee, n, y, S, O, ce, se, fe, de, ve, N],
    ),
    Oe = kt(p),
    ke = A.current,
    Ae = OE(ge, me, ke, he, N, h),
    je = ee.current;
  pp({
    activeLocale: N,
    contentLocale: ye,
    currentPathVariables: he,
    currentRoute: ge,
    currentRouteId: me,
    isInitialNavigation: je,
    locales: _,
    siteCanonicalURL: S,
  });
  let F = u(
      () => ({
        navigate: De,
        getRoute: Oe,
        currentRouteId: me,
        currentPathVariables: he,
        currentCanonicalPathVariables: be,
        routes: p,
        collectionUtils: f,
        preserveQueryParams: y,
        pageviewEventData: Ae,
        siteCanonicalURL: S,
        isInitialNavigation: je,
      }),
      [De, Oe, me, he, be, p, f, y, S, Ae, je],
    ),
    Me = _e && he ? ir(_e, he) : _e,
    Ne = `${pe}${Me}`,
    Pe = qa(() => ({ ...e, display: `contents` }));
  return D(At, {
    api: F,
    children: D(Vy.Provider, {
      value: Te,
      children: D(Hy.Provider, {
        value: P,
        children: D(mT, {
          children: D(ri, {
            routerRenderKey: T,
            isNavigationCommitPending: M.isNavigationCommitPending,
            children: te(Tf, {
              currentRoutePath: Me,
              routerAPI: F,
              children: [
                x && D(wf, { EditorBar: x, fast: !0 }),
                D($w, {
                  children: te(eu, {
                    children: [
                      D(qb.Start, {}),
                      D(Yf, { currentRouteId: me, remountKey: Ne, scrollRestoration: M }),
                      D(Yb, {
                        notFoundPage: l,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: D(_p, {
                          LayoutTemplate: b,
                          webPageId: ge?.abTestingVariantId ?? me,
                          style: e,
                          children: (t) =>
                            D(s, { children: xe ? Ni(ge.page, t ? Pe : e) : l && Ni(l, e) }, Ne),
                        }),
                      }),
                      x && D(wf, { EditorBar: x }),
                      D(wi, {}),
                      D(qb.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function _p({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? D(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function vp({
  activeLocale: e,
  currentRoute: n,
  initialCanonicalPathVariables: r,
  initialContentLocaleIdOverride: i,
  locales: a,
  routes: o,
}) {
  let s = t(r),
    c = t(i),
    l = c.current,
    f = !e || !n.includedLocales || n.includedLocales.includes(e.id),
    p = u(() => {
      if (!e) return null;
      let t;
      return (
        (t = f
          ? (l ?? n?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(o).find((e) => e.path && yb.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        t ? (a.find(({ id: e }) => e === t) ?? e) : e
      );
    }, [e, n, a, l, f, o]),
    m = d((e, t) => {
      ((c.current = e), (s.current = t));
    }, []);
  return {
    contentLocale: p,
    currentCanonicalPathVariables: s.current,
    pageExistsInCurrentLocale: f,
    setRouteContentState: m,
  };
}
function yp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function bp(e) {
  return typeof e == `object` && !!e;
}
function xp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!bp(r)) return;
    r = r[e];
  }
  return r;
}
function Sp(e) {
  return `${e.credentials}:${e.url}`;
}
function Cp(e) {
  return I(e) && !Number.isNaN(Number(e));
}
function wp(e, t) {
  switch (e) {
    case `string`:
      return I(t) || L(t);
    case `color`:
      return I(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return L(t) || Cp(t);
    case `link`:
    case `image`:
      return I(t) && Ou(t, !1);
    default:
      return !1;
  }
}
function Tp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = xp(e.data, t.resultKeyPath);
  if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!wp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Ep(e, t) {
  if (q.current() === q.canvas) return !1;
  let n = Math.max(t * 1e3, WE);
  return Date.now() >= e + n;
}
function Dp({ client: e, children: t }) {
  return D(XE.Provider, { value: e, children: t });
}
function Op(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: O,
  } = e;
  return (
    p.useEffect(() => {
      n || Cx.start();
    }, []),
    n
      ? D(Yr, {
          value: r ?? `preview`,
          children: D(Me, {
            reducedMotion: m ? `always` : f ? `user` : `never`,
            skipAnimations: m,
            children: D(bn, {
              collectionUtils: l,
              children: D(Dp, {
                client: u,
                children: D(YE, {
                  children: D(yE.Provider, {
                    value: a,
                    children: D(Zf, {
                      loadSnippetsModule: T,
                      children: D(gp, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: E,
                        initialContentLocaleIdOverride: O,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: _,
                        defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : D(h ? iw : p.Fragment, {
          children: D(Mt, {
            routes: c,
            children: D(KC, { children: p.isValidElement(t) ? t : p.createElement(t, { key: i }) }),
          }),
        })
  );
}
function kp(e, t) {
  let n = jt(),
    { activeLocale: r } = $n(),
    i = Wd();
  return Zr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return I(e) || wu(e)
            ? of(e, n, void 0, void 0, r, o)
            : of(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Ap(e) {
  return {
    trace(...t) {
      return zx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return zx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return zx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return zx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return zx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return zx.getLogger(e) !== void 0;
    },
  };
}
function jp() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Mp() {
  return QE.priority;
}
function Np(e) {
  let t = QE;
  return (
    (QE = e),
    {
      [jp()]() {
        QE = t;
      },
    }
  );
}
function Pp(e = QE.priority, t = QE.canYield) {
  if (!(!t || e === void 0)) return Iy({ batch: !0, priority: Bn(e) });
}
function Fp(e) {
  var t = [];
  try {
    We(t, Np({ priority: QE.priority, canYield: !1 }));
    let n = e.next();
    return (z(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ve(t, n, r);
  }
}
async function Ip(e, t, n = QE.priority, r = QE.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (We(o, Np(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ve(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Pp(n, r);
      (o && (await o), We(l, Np(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ve(l, u, d);
    }
  }
  return a.value;
}
function Lp(e, t = QE.priority, n = QE.canYield) {
  var r = [];
  try {
    We(r, Np({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Ip(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ve(r, i, a);
  }
}
function* U(e, t = QE.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (at(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Ip(r, e, t).then((e) => {
              n[a] = e;
            }),
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Rp(e, t = QE.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Pp(t);
    r && (yield r);
    let o = e[a];
    if (at(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Ip(o, e, t).then((e) => {
              n[a] = e;
            }),
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function zp(e) {
  return Hp(e) || Gp(e);
}
function Bp(e) {
  return $e(e) && e.every(R);
}
function Vp(e) {
  return R(e) && Ze(e.read) && Ze(e.preload);
}
function Hp(e) {
  return Bp(e) || Vp(e);
}
function Up(e) {
  return R(e) && R(e.schema);
}
function Wp(e) {
  return R(e) && R(e.collectionByLocaleId);
}
function Gp(e) {
  return Up(e) || Wp(e);
}
function Kp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = xm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function qp(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => $E.cast(e, t.definition)) };
  }
  return null;
}
function Jp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Yp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Xp(e) {
  return Yp(e)?.value ?? !1;
}
function Zp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Qp(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function $p(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function em(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return it(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function tm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function nm(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function rm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function im(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function am(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function om(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function sm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function lm(e) {
  return cm(e)?.value ?? null;
}
function um(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = xm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function dm(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = $E.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function fm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function pm(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function mm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function hm(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function gm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function _m(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function vm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function ym(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function bm(e) {
  return ym(e)?.value ?? null;
}
function xm(e, t, n) {
  if (nt(e) || nt(t)) return (z(e === t), 0);
  switch (e.type) {
    case `array`:
      return (z(e.type === t.type), Kp(e, t, n));
    case `boolean`:
      return (z(e.type === t.type), Jp(e, t));
    case `color`:
      return (z(e.type === t.type), Zp(e, t));
    case `date`:
      return (z(e.type === t.type), $p(e, t));
    case `enum`:
      return (z(e.type === t.type), tm(e, t));
    case `file`:
      return (z(e.type === t.type), rm(e, t));
    case `link`:
      return (z(e.type === t.type), am(e, t));
    case `number`:
      return (z(e.type === t.type), sm(e, t));
    case `object`:
      return (z(e.type === t.type), um(e, t, n));
    case `responsiveimage`:
      return (z(e.type === t.type), fm(e, t));
    case `richtext`:
      return (z(e.type === t.type), mm(e, t));
    case `vectorsetitem`:
      return (z(e.type === t.type), gm(e, t));
    case `string`:
      return (z(e.type === t.type), vm(e, t, n));
    default:
      B(e);
  }
}
async function Sm(e, t) {
  return Vp(e) ? (await e.preload(t), e.read(t)) : e;
}
function Cm(e) {
  return e.includes(iD);
}
function wm(e) {
  if (!Gp(e) || !e.id) return;
  let t = nD.get(e.id);
  if (!t) return (nD.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Tm(e) {
  let t = wm(e);
  if (t) return t;
  let n = rD.get(e);
  if (n) return n;
  let r = `${iD}${Math.random().toString(16).slice(2)}`;
  return (rD.set(e, r), r);
}
function Em(e, t) {
  if (Hp(e)) {
    let n = Tm(e) + (t?.id ?? Vv),
      r = aD.get(n);
    if (r) return r;
    let i = new tD(e, t);
    return (aD.set(n, i), i);
  }
  if (Up(e)) return e;
  if (Wp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  B(e, `Unsupported collection type`);
}
function Dm(e) {
  return e;
}
function Om(e) {
  return Ze(e.getHash);
}
function W(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (R(r) && Om(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Dm(`${n})`);
}
function km(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Am(e) {
  if (e !== void 0) return Bn(e);
}
function jm(e, t) {
  return { collectionId: Tm(e), pointer: t };
}
function Mm(e) {
  return R(e) && I(e.collectionId);
}
function Nm(e, t) {
  return { collectionId: Tm(e), pointer: t };
}
function Pm(e) {
  return R(e) && I(e.collectionId);
}
function Fm(e, t) {
  let n = new Map();
  function r(e) {
    if (R(e))
      if (e.type === `Collection` && zp(e.data)) {
        let r = Em(e.data, t),
          i = Tm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if ($e(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Im(e) {
  return e;
}
function Lm(e) {
  return e;
}
function Rm(e) {
  return e;
}
function zm() {
  return 25;
}
function Bm() {
  return 12500;
}
function Vm(e) {
  return Array(e).fill({ type: `All` });
}
function Hm(e) {
  return e;
}
function Um(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new fO(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Wm(e) {
  let t = new Set();
  if (!e) return t;
  Um(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Um(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`,
      ),
      t.add(n.value));
  return t;
}
function Gm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Gm(n, t);
      return;
    case `object`:
      for (let n in e.value) Gm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Km(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function qm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Jm(e) {
  return `${e.functionName}(${e.arguments.map((e) => $m(e)).join(`, `)})`;
}
function Ym(e) {
  let t = `CASE`;
  e.value && (t += ` ${$m(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${$m(n.when)} THEN ${$m(n.then)}`;
  return (e.else && (t += ` ELSE ${$m(e.else)}`), (t += ` END`), t);
}
function Xm(e) {
  let t = $m(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Zm(e) {
  let t = $m(e.left),
    n = $m(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Qm(e) {
  return `CAST(${$m(e.value)} as ${e.dataType})`;
}
function $m(e) {
  switch (e.type) {
    case `Identifier`:
      return Km(e);
    case `LiteralValue`:
      return qm(e);
    case `FunctionCall`:
      return Jm(e);
    case `Case`:
      return Ym(e);
    case `UnaryOperation`:
      return Xm(e);
    case `BinaryOperation`:
      return Zm(e);
    case `TypeCast`:
      return Qm(e);
    case `Select`:
      return `${ih(e)}`;
    default:
      B(e);
  }
}
function eh(e) {
  return Up(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function th(e) {
  let t = `${nh(e.left)} LEFT JOIN ${nh(e.right)}`;
  return (e.constraint && (t += ` ON ${$m(e.constraint)}`), t);
}
function nh(e) {
  switch (e.type) {
    case `Collection`:
      return eh(e);
    case `LeftJoin`:
      return th(e);
    default:
      B(e);
  }
}
function rh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function ih(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = $m(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${nh(e.from)}`),
    e.where && (t += ` WHERE ${$m(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${$m(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${$m(e.limit)}`),
    e.offset && (t += ` OFFSET ${$m(e.offset)}`),
    rh(t)
  );
}
function ah(e) {
  return R(e) && e.type === `Collection`;
}
function oh(e, t) {
  return ah(t) && zp(t.data) ? Tm(t.data) : t;
}
function sh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, oh) + n;
}
function ch(e) {
  let { activeLocale: t } = $n();
  return kO.get(e, t).use();
}
function lh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(tt(e) || R(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function uh(e) {
  let n = t(e);
  return (
    ne(() => {
      n.current = e;
    }, [e]),
    Qr((...e) => {
      let t = n.current;
      return t(...e);
    }, [])
  );
}
function dh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function fh() {
  return new Set();
}
function ph(e) {
  let n = qa(fh),
    r = qa(fh);
  return (
    sc(() => () => dh(r, n)),
    a(() => () => dh(r, n), []),
    a(() => {
      dh(r, n);
    }, [e]),
    t({
      activeVariantCallback:
        (e) =>
        async (...t) =>
          new Promise((r, i) => {
            (n.add(i), e(...t).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          r.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function mh(e, t, n) {
  return p.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n],
  );
}
function hh(e) {
  for (let [t, n] of Object.entries(e)) if (G.matchMedia(n).matches) return t;
}
function gh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && G.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function _h(e, n, r = !0) {
  let i = l(UC),
    o = Za(),
    s = Ua(),
    c = jn() && (!o || s),
    u = t(c ? (hh(n) ?? e) : e),
    f = t(r && i ? e : u.current),
    p = ms(),
    m = fe(),
    h = d(
      (e) => {
        if (e !== u.current || e !== f.current) {
          let t = function () {
            ((u.current = f.current = e),
              j(() => {
                p();
              }));
          };
          o
            ? t()
            : m(() => {
                t();
              });
        }
      },
      [m, p, o],
    );
  return (
    cb(() => {
      if (o) {
        if (s) {
          h(hh(n) ?? e);
          return;
        }
        h(e);
      }
    }, [e, s, o, n, h]),
    cb(() => {
      !r || i !== !0 || h(u.current);
    }, []),
    a(() => {
      if (!c || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = G.matchMedia(r),
          i = (e) => {
            e.matches && h(t);
          };
        (vh(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => yh(e, t));
    }, [s, n, h, c]),
    [u.current, f.current]
  );
}
function vh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function yh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function bh(e) {
  setTimeout(e, 1);
}
function xh(e) {
  let t = new Set(),
    n = gh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Sh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Tv ? G.requestIdleCallback : bh)(() => {
    document.querySelector(AO)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Sh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Ch(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Sh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Ch(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function wh() {
  let e = qa(() => new Map());
  return p.useCallback((t) => {
    let n = e.get(t);
    if (n) return n;
    let r = S();
    return (e.set(t, r), r);
  }, []);
}
function Th(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Eh(e, t) {
  if (Xa()) return;
  let n = p.useRef(!0),
    r = p.useRef(t);
  (sc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Th(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    p.useEffect(() => {
      if (n.current) {
        let t = Th(r.current, e);
        t && t();
      }
    }, [e]));
}
function Dh(e, t) {
  e !== !1 &&
    F.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Oh({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = p.useState(!1),
    i = p.useCallback(
      async (t) => {
        (await Iy({ priority: `user-blocking`, continueAfter: `paint` }), j(() => r(t)), Dh(e, t));
      },
      [e],
    );
  return (
    p.useEffect(
      () => () => {
        Iy({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Dh(e, !1);
        });
      },
      [e],
    ),
    p.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (G.addEventListener(`keydown`, e), () => G.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function kh(e) {
  return R(e) && jO in e && e.page !== void 0;
}
function Ah(e, t) {
  return `${e}-${t}`;
}
function jh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (z(r !== void 0, `nextVariant should be defined`), r);
}
function Mh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Nh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Ph(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Fh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Ih() {
  let e = t(),
    n = t(),
    r = d(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    a(
      () => () => {
        r();
      },
      [r],
    ),
    d(
      (t) => {
        if (!document.hidden) {
          (t(), r());
          return;
        }
        if (((n.current = t), e.current)) return;
        let i = () => {
          document.hidden || (n.current?.(), r());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [r],
    )
  );
}
function Lh() {
  let e = t(),
    n = t(!1),
    r = t(),
    i = l(EC);
  return (
    a(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      [],
    ),
    d(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = $s(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i],
    )
  );
}
function Rh(e) {
  let t = Ih(),
    n = Lh();
  return d(
    (r, i = !1) => {
      if (wv) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e],
  );
}
async function zh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (PO = () => {
        (e(), (t = void 0));
      }));
  });
}
function Bh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (NO = zh()));
}
function Vh() {
  (performance.mark(`click-received-listener`), (NO = void 0), PO?.(), (PO = void 0));
}
function Hh(e = !1) {
  a(() => {
    e &&
      (document.addEventListener(`pointerup`, Bh, !0),
      document.__proto__.addEventListener.call(document, `click`, Vh, !0));
  }, [e]);
}
function Uh({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: o = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let l = ms(),
    f = Eu(),
    p = qa(() => new Set(a));
  Hh(Xw().yieldOnTap);
  let m = Rh(c),
    h = t({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Fh(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: i,
      cycleOrder: a,
      transitions: r,
    }),
    g = d((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Fh(e, a, p),
        s = Nh(i?.[o], t, n, !1, r);
      return [o, s ? Ah(o, s) : void 0];
    }, []),
    _ = d(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = Xw().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          NO &&
          (performance.mark(`wait-for-tap-start`),
          await NO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Iy({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: p,
        } = h.current;
        if (u || f || d || p) {
          j(l);
          return;
        }
        m(() => j(l), i);
      },
      [g, l, m],
    ),
    v = d(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_],
    ),
    y = d(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === MO ? jh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_],
    ),
    b = d(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => j(l), !0));
    }, [l, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = h.current,
    k = mh(h.current.baseVariant, h.current.gestureVariant, o);
  return u(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? Ah(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Mh(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: cl(Ph(x, s), Nh(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, k, y, C, w, v, b, s]);
}
function Wh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!iu()) return r(e);
  let a = Gh(e, r),
    o = !1;
  function s(r, s) {
    let c = su(),
      { disableCustomCode: l } = Xw();
    if (l) return D(e, { ...r, ref: s });
    if (hu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? D(ob.Provider, {
            value: n,
            children: D(au, {
              getErrorMessage: fu.bind(null, t, n),
              fallback: D(e, { ...r, ref: s }),
              children: D(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (ru(a.error), ru(fu(t, n)), nu(a.error), !0)), D(e, { ...r, ref: s }));
    if (a.status === `success`)
      return D(ob.Provider, { value: n, children: D(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return p.forwardRef(s);
}
function Gh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Kh(e, t, n) {
  let r = [],
    i = Pl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!L(e)) return LO;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return L(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : LO;
}
function qh(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Jh(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${KO[e]}` : `${KO[e]} ${n}`;
}
function Yh() {
  return o === void 0 ? (JO ?? {}) : JO || ((JO = Xh()), JO);
}
function Xh() {
  let e = o.location,
    t = o?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = o.top.location.origin), (t = o.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Zh(e) {
  return e.key + e.extension;
}
function Qh(e) {
  return `${Yh().userContent}/assets/${e}`;
}
function $h(e) {
  return Qh(Zh(e));
}
function eg(e, t) {
  return t ? `${e} ${YO}` : e;
}
function tg(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return eg(e.name, e.isVariable);
  }
}
function ng(e) {
  return !!(e && Array.isArray(e));
}
function rg(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    ag(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function ig(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function ag(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function og(e) {
  return QO[cg(e)];
}
function sg(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? og(`variable`) ?? 500);
}
function cg(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function lg(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function ug(e, t) {
  return { ...dg(e, t), ...fg(e, t) };
}
function dg(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function fg(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function pg(e) {
  return !!e.variationAxes;
}
function mg(e) {
  return hg(e) || gg(e);
}
function hg(e) {
  return e.startsWith(tk);
}
function gg(e) {
  return e.startsWith(ek);
}
function _g(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function vg(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? YO : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function yg({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = rg(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function bg(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: pg(e), selector: e.selector };
}
function xg(e) {
  let t = e.fonts.map((e) => bg(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = bg(n);
    if (!e) continue;
    let r = ug(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Sg(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Cg(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function wg(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Tg(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Eg(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Dg(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Og);
}
function Og(e) {
  return rk.includes(e);
}
function kg(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Dg(e)[0];
  return n && t[n];
}
function Ag(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function jg(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Mg(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Ng(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Pg(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Mg(r, c, s, i);
  if (!yk.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: I(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), xk.set(l, { fontFace: u, doc: t }), Fg(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < _k) return Pg(e, t, n + 1);
          throw new vk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`,
          );
        });
    yk.set(l, d);
  }
  await yk.get(l);
}
async function Fg(e, t, n) {
  let r = Ng(e, t, n);
  if (!bk.has(r)) {
    let i = new hk.default(e, { style: t, weight: n }).load(null, gk);
    bk.set(r, i);
  }
  try {
    await bk.get(r);
  } catch {
    throw new vk(
      `Failed to check if font is ready (${gk}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`,
    );
  }
}
function Ig(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Mg(n, t, i, r),
    o = xk.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), xk.delete(a)), yk.delete(a), bk.delete(Ng(n, t, i)));
}
function Lg(e) {
  try {
    if (e === `framer`) return Rg(Ck) ? Ck : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            B(e);
        }
      })();
      return Rg(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Rg(e) {
  return R(e) && Object.values(e).every(Bg);
}
function zg(e) {
  return R(e) && I(e.tag);
}
function Bg(e) {
  return Array.isArray(e) && e.every(zg);
}
function Vg(e, t, n, r = Ek) {
  let [i, a] = p.useState(e),
    [o, s] = p.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      p.useCallback(
        (e) => {
          xi(e) ||
            (t && a(r(e)),
            n &&
              p.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t],
      ),
    ]
  );
}
function Hg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Ug() {
  return D(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: D(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Wg(e, t) {
  a(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (o.addEventListener(`keyup`, n), () => o.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Gg(e, t, n, r) {
  let i = o.innerHeight - r,
    a = Math.min(o.innerWidth - n, t),
    s = i / e;
  return Math.min(a, s);
}
function Kg(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new o.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function qg() {
  return document.getElementById(FT) ?? document.getElementById(PT) ?? document.body;
}
function Jg(e, t) {
  return L(e) ? e : (t ?? 0);
}
function Yg(e) {
  return Jg(e?.paddingTop, e?.padding) + Jg(e?.paddingBottom, e?.padding);
}
function Xg(e) {
  return Jg(e?.paddingLeft, e?.padding) + Jg(e?.paddingRight, e?.padding);
}
function Zg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Xg(e)}px)`,
      srcSet: ro(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Qg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in Lk)) continue;
    let n = Lk[t],
      r = e[t];
    if (!(!L(n) || !L(r)) && n !== r) return !0;
  }
  return !1;
}
function $g(e) {
  let t = ue.get(e.current);
  if (!t) return !1;
  if (Qg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Qg(e.latestValues)) return !0;
  return !1;
}
function e_(e) {
  return A(function ({ lightbox: n, lightboxClassName: r, onClick: i, ...o }, f) {
    let p = l(Te),
      m = l(FO),
      h = !!m,
      g = t(null),
      _ = f ?? g,
      b = t(),
      x = u(() => Zg(n, o.background), [n, o.background]),
      [S, C] = c(!1),
      [T, E] = c(),
      O = d(() => {
        if (n) {
          if (S) {
            j(() => {
              C(!0);
            });
            return;
          }
          F.read(() => {
            if (!_.current) return;
            let e = getComputedStyle(_.current),
              t =
                _.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(_.current, `::after`)
                  : void 0,
              r = _.current.offsetWidth ?? 1,
              i = _.current.offsetHeight ?? 1,
              a = $g(_) || h ? { duration: 0 } : n.transition;
            j(() => {
              (E({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                C(!0),
                m?.stop());
            });
          });
        }
      }, [n, S, _, m?.stop, h]),
      k = T?.aspectRatio ?? 1,
      ee = uh(() => {
        if (!n || !x?.src) return;
        let e = b.current?.[x.src];
        if (e) return e;
        let t = Gg(k, n.maxWidth, Xg(n), Yg(n)),
          r = Kg(x, { width: t, height: t * k });
        return ((b.current = { [x.src]: r }), r);
      }),
      A = d(
        async (e) => {
          (i?.(e), !(S || !n || !x) && (await ee(), O()));
        },
        [i, O, S, x, n, ee],
      ),
      ne = d((e) => {
        (e?.stopPropagation(),
          j(() => {
            C(!1);
          }));
      }, []);
    (Wg(S, ne),
      a(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            ee();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = _.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, ee),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, ee));
          }
        );
      }, [ee, _, n]));
    let re = v(),
      ie = T?.transition ?? o.transition ?? p.transition,
      ae = T?.borderRadius,
      oe = T?.imageRendering,
      se = T?.filter,
      ce = T?.borderTop,
      le = T?.borderRight,
      ue = T?.borderBottom,
      de = T?.borderLeft,
      fe = T?.borderStyle,
      pe = T?.borderColor,
      me = !!(ce || le || ue || de || fe || pe),
      he = me
        ? {
            "--border-top-width": ce,
            "--border-right-width": le,
            "--border-bottom-width": ue,
            "--border-left-width": de,
            "--border-style": fe,
            "--border-color": pe,
          }
        : void 0,
      ge = { [gT]: o.id },
      _e = Jg(n?.paddingTop, n?.padding),
      ve = Jg(n?.paddingBottom, n?.padding),
      N = Jg(n?.paddingLeft, n?.padding),
      ye = Jg(n?.paddingRight, n?.padding),
      be = T?.borderRadius ? { ...o.style, borderRadius: T.borderRadius } : o.style,
      xe = S ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      Se = h && S ? void 0 : (o.layoutId ?? (n ? re : void 0));
    return te(y, {
      children: [
        D(e, {
          ...o,
          style: be,
          onClick: A,
          layoutId: Se,
          ref: _,
          layoutDependency: xe,
          transition: ie,
        }),
        D(Le, {
          onExitComplete: () => {
            j(() => {
              (E(void 0), m?.start());
            });
          },
          children:
            S &&
            n &&
            x &&
            D(
              s,
              {
                children: w(
                  te(y, {
                    children: [
                      D(M.div, {
                        ...ge,
                        className: r,
                        onClick: ne,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: Rk,
                        animate: zk,
                        exit: Rk,
                      }),
                      D(M.div, {
                        ...ge,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${_e}px ${ye}px ${ve}px ${N}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: D(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: D(M.div, {
                            layoutId: Se,
                            transition: ie,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": me,
                            style: {
                              aspectRatio: k,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: se,
                              ...he,
                            },
                            children: D(po, { image: x, alt: x.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  qg(),
                ),
              },
              `backdrop`,
            ),
        }),
      ],
    });
  });
}
function t_(e) {
  return p.isValidElement(e) ? e.props[`data-framer-order-id`] : void 0;
}
function n_(e, t) {
  let n = new Map(),
    r = [],
    i = new Set(t);
  for (let t of e) {
    let e = t_(t);
    e && i.has(e) ? n.set(e, t) : r.push(t);
  }
  let a = [];
  for (let e of t) {
    let t = n.get(e);
    t && a.push(t);
  }
  return [...a, ...r];
}
function r_(e, t) {
  let n = p.Children.toArray(e);
  return t
    ? n.flatMap((e) =>
        p.isValidElement(e) && e.type === p.Fragment ? p.Children.toArray(e.props.children) : e,
      )
    : n;
}
function i_(e, t) {
  let n = Array.from({ length: e }, () => []);
  return (
    t.forEach((t, r) => {
      let i = s_(e, r);
      n[i]?.push(t);
    }),
    n
  );
}
function a_(e) {
  return { display: `flex`, flexDirection: `column`, rowGap: e, width: `100%` };
}
function o_(e) {
  return `masonry-stack-${e}`;
}
function s_(e, t) {
  return e <= 0 ? 0 : t % e;
}
function c_(e, t) {
  return Wk && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Uk ??= new DOMParser()), Uk.parseFromString(e, t ?? `text/html`));
}
function l_(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function u_(e, t, n, r) {
  return e.replace(Gk, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = ju(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!kh(f) || !kh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Lt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Nu(u);
    if (!_ || I(_)) return e;
    Cd(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(zT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = li(m, v)), i + o + `"${l_(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function d_(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function f_(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function p_(e, n, r) {
  let i = t([]);
  d_(i.current, e) ||
    ((i.current = e),
    Tk.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !n || !r.current || q.current() !== q.canvas || (e > 0 && bs(r.current));
    }));
}
function m_() {
  return { current: null };
}
async function h_(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function g_(e) {
  return e in Yk;
}
function __(e, t) {
  let n = {};
  for (let r in e) {
    if (!g_(r)) continue;
    let i = e[r],
      a = Yk[r];
    tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function v_(e, t = `character`, n, r, i) {
  if (r) {
    let t = m_();
    return (n.add(t), D(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return te(
          s,
          {
            children: [
              D(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(Xk)?.map((e, t) => {
                  let r = m_();
                  return (n.add(r), D(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a,
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = m_();
        return (
          n.add(o),
          te(
            s,
            { children: [D(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a,
          )
        );
      });
    }
    default:
      return e;
  }
}
function y_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      B(t);
  }
}
function b_(e) {
  let t = [];
  return (
    L(e.x) && t.push(`translateX(${e.x}px)`),
    L(e.y) && t.push(`translateY(${e.y}px)`),
    L(e.scale) && t.push(`scale(${e.scale})`),
    L(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    L(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    L(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    L(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    L(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function x_(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : b_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : b_(n.effect),
              };
      }
    default:
      B(i);
  }
}
function S_(e, n, r) {
  let i = qa(() => new Set()),
    o = Xa(),
    s = r || !o,
    c = oe(),
    l = t({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  l.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  a(() => {
    if (!s || r) return;
    l.current.hasMounted = !0;
    function e() {
      let { effect: e } = l.current;
      if (
        !s ||
        !e ||
        (e?.repeat !== !0 && l.current.hasAnimatedOnce) ||
        (e?.type === `appear` && l.current.isAnimating)
      )
        return;
      Object.assign(l.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: a } = e,
            o = { current: void 0 };
          return (
            w_(
              a,
              e.effect,
              i,
              t,
              n,
              r,
              c,
              () => {
                Object.assign(l.current, { isAnimating: !1 });
              },
              o,
            ),
            () => o.current?.()
          );
        }
        default:
          B(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? je(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? je(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        B(d);
    }
  }, [s, i, r, n, f, p, d]);
  let m = !!e,
    h = e ? y_(e) : void 0;
  return u(
    () => ({
      getTokenizer: () => {
        if ((i.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = l.current,
          a = x_(s, r || C_(e, t, n), l.current.effect, c);
        return {
          text: (e) => v_(e, h, i, c, a),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = m_();
            return (i.add(t), { ref: t, style: { ...e, ...a } });
          },
        };
      },
      play: () => {
        let { effect: e } = l.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            w_(h, e.effect, i, t, n, !1, c);
            break;
          }
          default:
            B(t);
        }
      },
    }),
    [s, m, i, r, h],
  );
}
function C_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function w_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = __(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await T_(n, u);
      if (
        e === null ||
        (Ae(e, l, { ...r, restDelta: 0.001, delay: Pe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.(),
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ae(e, n, { ...r, restDelta: 0.001, delay: Pe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await h_(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (F.read(() => {
          ((e = E_(n)),
            e.length !== 0 &&
              F.update(() => {
                let t = e.map((e, t) =>
                  Ae(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) }),
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Ae(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      B(e);
  }
}
async function T_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await h_(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function E_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function D_(e) {
  let t = {};
  for (let n in e) (Je(n) || Px(n)) && (t[n] = e[n]);
  return t;
}
function O_(e) {
  return e.type === s;
}
function k_(e) {
  return e.type === `br`;
}
function A_(e, t, n, r, a = {}, o, s = O_(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  tt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!k(e) || !k_(e)) && (l = !1), k(e))) return A_(e, t, n, r, a, o, s + 1);
    let i = tt(n) ? e : n;
    return I(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (I(e.type) || Ye(e.type)) {
    let n = he(e.type) || e.type,
      f = u || n,
      p = I(f) ? t?.[f] : void 0;
    ((d.className = cl(`framer-text`, d.className, p)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = j_(c, a);
      d.id = e;
      let t = cl(`framer-text`, h),
        n = D(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...d.style, scrollMarginTop: r }), (c = [n]));
    }
    f === `ol` &&
      (d.style = { ...d.style, [OS]: N_(d.start ?? 1, i.count(d.children), d.style?.[DS] ?? ``) });
  }
  return T(e, d, ...c);
}
function j_(e, t) {
  let n = Jr(e.map(M_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function M_(e) {
  return I(e) || L(e)
    ? e.toString()
    : k(e)
      ? M_(e.props.children)
      : Array.isArray(e)
        ? e.map(M_).join(``)
        : ``;
}
function N_(e, t, n) {
  return $o(Number(e) || 1, t, n);
}
function P_(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = aa(n.x, n.y),
    i = qx(aa(0.5, 0.5), r),
    a = J.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: aa.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  z(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !aa.isEqual(e, s) && !aa.isEqual(e, c));
  z(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = qx.intersection(i, qx(s, c)),
    f = qx.intersection(i, qx(l, u));
  return (z(d && f, `linearGradientLine: Must have a start and end point.`), qx(d, f));
}
function F_(e, t) {
  let n = P_(e.angle),
    r = ks(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = qx.pointAtPercentDistance(n, i),
    s = qx.pointAtPercentDistance(n, a),
    c = Ke([i, a], [0, 1]);
  return {
    id: `id${t}g${dC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: aC.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function I_(e, t) {
  return {
    id: `id${t}g${pC.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ks(e).map((t) => ({
      color: t.value,
      alpha: aC.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function L_(e) {
  if (!I(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return L(parseFloat(t));
}
function R_(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return L(n) ? n : 50;
}
function z_(e) {
  return L_(e) ? R_(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function B_(e) {
  return L_(e) ? R_(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function V_(e, t, n, r) {
  if (((e = ex.get(e, `#09F`)), !Kx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * z_(e.positionX) + f),
        (d = (t.height - l) * B_(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * B_(e.positionY)))
        : ((n = g), (u = (1 - g) * z_(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function H_(e) {
  return e.startsWith(`data:${iA}`);
}
function U_(e, t) {
  if (/^\w+:/u.test(e) && !H_(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = q.current() === q.export;
  return zx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function W_(e) {
  try {
    let t = c_(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function G_(e, t) {
  q_(e, K_(t));
}
function K_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function q_(e, t) {
  (J_(e, t),
    Array.from(e.children).forEach((e) => {
      q_(e, t);
    }));
}
function J_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Y_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (dA[t[2]] || 1));
}
function X_(e) {
  let t = Y_(e.getAttribute(`width`)),
    n = Y_(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Z_(e) {
  return e.indexOf(`image`) >= 0;
}
function Q_(e) {
  return e.indexOf(`var(--`) >= 0;
}
function $_(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function ev(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? G,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = uA.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && jo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    V(s) &&
    V(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function tv(e) {
  return e > gA ? `lazy` : void 0;
}
function nv(e, t, n) {
  let r = av(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function rv(e) {
  return e ? (e.fonts ?? Pi()) : Pi();
}
function iv(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : av(e);
}
function av(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    ov(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(sv) })
      : t.fonts.push(sv(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function ov(e) {
  return _A in e;
}
function sv(e) {
  let t = cv(e) || lv(e) ? e : uv(e);
  return lv(t) ? t : dv(t);
}
function cv(e) {
  return `source` in e;
}
function lv(e) {
  return `cssFamilyName` in e;
}
function uv(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function dv(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${YO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function fv(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function pv(e, t) {
  let n = Iy({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function mv(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Iy({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e }),
        ),
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function hv(e) {
  return e.loader;
}
function gv(e, t, n) {
  let r = hv(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  G,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  K,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  q,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  J,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  Y,
  fS,
  pS,
  mS,
  hS,
  X,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  Z,
  pD,
  mD,
  hD,
  gD,
  _D,
  Q,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  $,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA = e(() => {
    (n(),
      we(),
      Re(),
      m(),
      ee(),
      O(),
      (_v = pe({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (vv = pe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e,
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (yv = pe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = vv();
        },
      })),
      (bv = pe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = yv(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (xv = pe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function s(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= o),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(o.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        o.navigator.userAgent,
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var a = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              o.navigator.userAgent,
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(c),
                      g = new r(c),
                      _ = new r(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((o.FontFaceObserver = c),
                  (o.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (Sv = () => {}),
      (Cv = o !== void 0),
      (wv =
        Cv &&
        (h.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(h.userAgent))),
      (Tv = Cv && typeof o.requestIdleCallback == `function`),
      (Ev = Tv ? o.requestIdleCallback : setTimeout),
      (Dv = () => Sv),
      (Ov = () => !0),
      (kv = () => !1),
      (Av = new Map()),
      (jv = new Map()),
      (Mv = new Set()),
      (Nv = `:`),
      (Pv = Cv ? void 0 : new Set()),
      (Fv = `preload`),
      (Iv = Object.keys),
      (Lv = `equals`),
      (Rv = p.createContext({})),
      (zv = p.createContext({})),
      (Bv = []),
      (Vv = `default`),
      (Hv = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Uv = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && ft(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Hv.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === Hv.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Hv.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Hv.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Pv !== void 0 && Pv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Hv.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Hv.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Av.has(this.cacheHash) ? Av.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!st(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Hv.Fulfilled) return this.value;
          throw this.promiseState === Hv.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Wv = -1),
      (Gv = -2),
      (Kv = -3),
      (qv = -4),
      (Jv = -5),
      (Yv = -6),
      (Xv = -7),
      (Zv = 2 ** 32 - 1),
      (Qv = Zv - 1),
      ($v = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (ey = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (ty = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (ny = typeof Uint8Array.fromBase64 == `function`),
      (ry = typeof process == `object` && process.versions?.node !== void 0),
      (iy = ny ? Qt : ry ? en : nn),
      (ay = ny ? $t : ry ? tn : rn),
      (G = Cv
        ? o
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (oy = 2),
      (sy = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (cy = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (uy = class {
        payload = fn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return sn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (dy = Cv ? void 0 : new uy()),
      (fy = cy.CollectionUtilsCache),
      (py = new WeakMap()),
      (my = f(void 0)),
      (hy = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Uv(async () => {
              try {
                let t = await e();
                return (z(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ut(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = _n(n),
            i = vn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (dy !== void 0) {
              if (st(e)) return e.then((e) => (dy.set(fy, i, e), e));
              dy.set(fy, i, e);
            }
            return e;
          }
          if (hn(fy, i)) {
            let e = gn(fy, i);
            return (this.cacheMap.set(i, new Uv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = st(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ut(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (dy !== void 0 && dy.set(fy, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Uv(async () => {
            try {
              let e = st(s) ? await s : s;
              return (dy !== void 0 && dy.set(fy, i, e), e);
            } catch (e) {
              console.error(ut(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (gy = /Mac/u),
      (_y = /iPhone|iPod|iPad/iu),
      (vy = /MacIntel/iu),
      (yy = /Edg\//u),
      (by = /Chrome/u),
      (xy = /Google Inc/u),
      (Sy = /Safari/u),
      (Cy = /Apple Computer/u),
      (wy = /Firefox\/\d+\.\d+$/u),
      (Ty = /Version\/([\d.]+)/u),
      (Ey = /FramerX/u),
      (Dy = /tablet|iPad|Nexus 9/iu),
      (Oy = /mobi/iu),
      (ky = 1e3 / 60),
      (Ay = 1e3 / 25),
      (jy = 500),
      (My = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Ny = Promise.resolve()),
      (Py = 100),
      (Fy = (e) => {
        F.read(e, !1, !0);
      }),
      (Iy = Wn(Fy)),
      (Ly = `framer_variant`),
      (Ry = RegExp(`:([a-z]\\w*)`, `gi`)),
      (zy = async () => {}),
      (By = { contentLocale: null, activeLocale: null, locales: [], setLocale: zy }),
      (Vy = (() => {
        let e = p.createContext(By);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Hy = (() => {
        let e = p.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Uy = !wv),
      (Wy = !1),
      (Gy = p.createContext({ global: void 0, routes: {} })),
      (Ky = 10),
      (qy = 1e4),
      (Jy = (e) => `--view-transition-${e}`),
      (Yy = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Jy(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Jy(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Jy(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Xy = {
        circle: {
          makeKeyframe: (e, t) => `${Jy(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Jy(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${pr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Jy(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Yy,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${fr(e.x)} ${fr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ur(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Jy(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Jy(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Jy(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Jy(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Jy(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Jy(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (Zy = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Qy = `view-transition-styles`),
      ($y = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (eb = () => {}),
      (nb = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (tb ||
            ((tb = document.createElement(`div`)),
            tb.setAttribute(`aria-live`, `assertive`),
            tb.setAttribute(`aria-atomic`, `true`),
            (tb.style.position = `absolute`),
            (tb.style.transform = `scale(0)`),
            document.body.append(tb)),
            setTimeout(() => {
              tb.textContent = e;
            }, 60));
        }
      }),
      (ib =
        Cv &&
        typeof o.navigation?.back == `function` &&
        !(() => {
          if (h === void 0) return !1;
          let e = h.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !kn()),
      (ab = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (ob = p.createContext(null)),
      (sb = (() => {
        let e = f(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (cb = typeof document < `u` ? r : a),
      (lb = new Set()),
      (ub = (() => {
        let e = f({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (db = 46),
      (fb = 47),
      (pb = (e, t) => e.charCodeAt(t)),
      (mb = (e, t) => e.lastIndexOf(t)),
      (hb = (e, t, n) => e.slice(t, n)),
      (gb = !1),
      (_b = `/`),
      (vb = (e) => e === fb),
      (yb = new Set([`/404.html`, `/404`, `/404/`])),
      (bb = `__f_replay`),
      (xb = `__f_replay_ignore`),
      (Sb = () => Cv),
      (Cb =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`,
        )),
      (wb = (e) => {
        e.target?.closest?.(`#main`) &&
          (bi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Tb = !1),
      (Hb = [Ti]),
      (Vb = [Ti]),
      (Bb = [Ti]),
      (zb = [Ti]),
      (Rb = [Ti]),
      (Lb = [Ti]),
      (Ib = [Ti]),
      (Fb = [Ti]),
      (Pb = [Ti]),
      (Nb = [Ti]),
      (Mb = [Ti]),
      (jb = [Ti]),
      (Ab = [Ti]),
      (kb = [Ti]),
      (Ob = [Ti]),
      (Db = [Ti]),
      (Eb = [Ti]),
      (Wb = class {
        constructor() {
          (ie(Ub, 5, this),
            ve(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            ve(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            ve(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            ve(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            ve(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            ve(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            ve(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Ei(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Ei(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`,
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Ei(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`,
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Ei(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`,
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Ei(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`,
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Ei(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`,
            ),
            Ei(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`,
            ));
        }
        measureMutationEffects() {
          Ei(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`,
          );
        }
        measureUnattributedHydrationOverhead() {
          Ei(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`,
          );
        }
      }),
      (Ub = P(null)),
      Ce(Ub, 1, `markRenderStart`, Hb, Wb),
      Ce(Ub, 1, `markRenderEnd`, Vb, Wb),
      Ce(Ub, 1, `markUseInsertionEffectsStart`, Bb, Wb),
      Ce(Ub, 1, `markUseInsertionEffectRouterStart`, zb, Wb),
      Ce(Ub, 1, `markUseInsertionEffectsEnd`, Rb, Wb),
      Ce(Ub, 1, `markUseLayoutEffectsStart`, Lb, Wb),
      Ce(Ub, 1, `markRouterUseLayoutEffectStart`, Ib, Wb),
      Ce(Ub, 1, `markUseLayoutEffectsEnd`, Fb, Wb),
      Ce(Ub, 1, `markUseEffectsStart`, Pb, Wb),
      Ce(Ub, 1, `markUseEffectsRouterStart`, Nb, Wb),
      Ce(Ub, 1, `markUseEffectsAreSynchronous`, Mb, Wb),
      Ce(Ub, 1, `markUseEffectsEnd`, jb, Wb),
      Ce(Ub, 1, `markRafStart`, Ab, Wb),
      Ce(Ub, 1, `markRafEnd`, kb, Wb),
      Ce(Ub, 1, `markLayoutStylePaintEnd`, Ob, Wb),
      Ce(Ub, 1, `measureMutationEffects`, Db, Wb),
      Ce(Ub, 1, `measureUnattributedHydrationOverhead`, Eb, Wb),
      Se(Ub, Wb),
      (Kb = !1),
      (qb = { Start: ji, End: Mi }),
      (Jb = class extends Error {}),
      (Yb = class extends x {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Jb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ni(e, t);
        }
      }),
      (Xb = Object.freeze([])),
      (Qb = new Set()),
      ($b = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (ex = (() => {
        function e(e) {
          return (
            $i(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`,
            ),
            ea(e) ? e : new rx(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ea(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ea(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (tx = `onUpdate`),
      (nx = `finishTransaction`),
      (rx = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new $b();
        static interpolationFor(e, t) {
          if (ea(e)) return ta(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ea(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: ra(e.x, t.x), y: ra(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((aa ||= {})),
      (ix = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (ax = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z,
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z,
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z,
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (ax.hexChars = `0123456789abcdef`),
      (ax.refY = 1),
      (ax.refU = 0.19783000664283),
      (ax.refV = 0.46831999493879),
      (ax.kappa = 903.2962962),
      (ax.epsilon = 0.0088564516),
      (ax.m_r0 = 3.240969941904521),
      (ax.m_r1 = -1.537383177570093),
      (ax.m_r2 = -0.498610760293),
      (ax.m_g0 = -0.96924363628087),
      (ax.m_g1 = 1.87596750150772),
      (ax.m_g2 = 0.041555057407175),
      (ax.m_b0 = 0.055630079696993),
      (ax.m_b1 = -0.20397695888897),
      (ax.m_b2 = 1.056971514242878),
      (ox = new ax()),
      (sx = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (cx =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (lx = (e) => {
        let { r: t, g: n, b: r, a: i } = ka(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (ux = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ja({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (dx = (e) => {
        let { r: t, g: n, b: r, a: i } = ka(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (fx = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ja({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (px = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Ma(this);
        }
        rgb() {
          return Ia(this);
        }
        hsl() {
          return ha(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Pa(t));
            case `srgb`:
              return new e(Fa(Pa(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Fa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            }),
          );
        }
        static fromRGBString(t) {
          let n = K(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Da(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!I(t) || !K.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (mx = new Map()),
      (K = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = mx.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (mx.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = La(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && wa(e) !== !1),
          (e.isColorObject = (e) =>
            R(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ma(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && px.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ua(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = va(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = va(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ma(e.r, e.g, e.b, !0);
            for (let e of Object.keys(ix)) if (ix[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`",
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: oa(i, [0, 1], [t.r, r.r], a),
                g: oa(i, [0, 1], [t.g, r.g], a),
                b: oa(i, [0, 1], [t.b, r.b], a),
                a: oa(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: oa(i, [0, 1], [u, u + f], a),
                s: oa(i, [0, 1], [c.s, l.s], a),
                l: oa(i, [0, 1], [c.l, l.l], a),
                a: oa(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(da(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ha(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (hx = (e) => e instanceof Ue),
      (gx = _v().EventEmitter),
      (_x = class {
        _emitter = new gx();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (vx = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (yx = G.requestAnimationFrame || vx),
      (bx = (e) => yx(e)),
      (xx = 1 / 60),
      (Sx = class extends _x {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          xx = e;
        }
        static get TimeStep() {
          return xx;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), bx(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * xx;
        }
        tick = () => {
          this._started &&
            (bx(this.tick),
            this.emit(`update`, this._frame, xx),
            this.emit(`render`, this._frame, xx),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Cx = new Sx()),
      (wx = { target: Ua() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => wx.target,
        hasRestrictions: () => {
          let e = wx.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Tx = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Oe({
        borderTopWidth: Tx(`y`),
        borderLeftWidth: Tx(`x`),
        borderRightWidth: Tx(`x`),
        borderBottomWidth: Tx(`y`),
      }),
      (Ex = p.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Dx = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Ox = {
        ...Dx,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (kx = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Ax = { ...kx, fontWeight: 500 }),
      (jx = {
        ...kx,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Mx = (e) => e),
      (Nx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Px = Qa(
        (e) =>
          Nx.test(e) ||
          (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
      )),
      (Fx = (e) => () => {
        Qi(e);
      }),
      (Ix = () => () => {}),
      (Lx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = zx.useImageSource(e, t, n);
          return u(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Rx = !1),
      (zx = new Proxy(Lx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Ix()
              : Fx(
                  Rx
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`,
                );
        },
      })),
      (Bx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Vx = [1, 2, 2.2]),
      (Hx = [512, 1024, 2048, 4096]),
      (Ux = 512),
      (Wx = { position: `absolute`, ...Bx, top: 0, right: 0, bottom: 0, left: 0 }),
      (Gx = `src`),
      (Kx = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Gx in e;
        },
      }),
      (qx = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = xo(aa.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(aa(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => aa.distance(e.a, e.b)),
          e
        );
      })()),
      (J = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => J.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: na(e.x, t),
          y: na(e.y, t),
          width: na(e.width, t),
          height: na(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: J.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: J.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: aa.distance(t, n), height: aa.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(J.minX)), y: Math.min(...e.map(J.minY)) },
            n = { x: Math.max(...e.map(J.maxX)), y: Math.max(...e.map(J.maxY)) };
          return J.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: J.minX(e), y: J.minY(e) },
          { x: J.minX(e), y: J.maxY(e) },
          { x: J.maxX(e), y: J.minY(e) },
          { x: J.maxX(e), y: J.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < J.minX(e) ||
            t.x > J.maxX(e) ||
            t.y < J.minY(e) ||
            t.y > J.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of J.points(t)) if (!J.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= J.maxX(e) || J.maxX(t) <= e.x || t.y >= J.maxY(e) || J.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = J.maxX(e),
            r = J.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = J.maxY(e),
            r = J.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => J.intersects(t, e)) === void 0,
        isEqual: (e, t) => J.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > J.maxX(e) && (n = t.x - J.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > J.maxY(e) && (r = t.y - J.maxY(e)),
            aa.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: J.minX(e), y: J.minY(e) },
            r = { x: J.minX(t), y: J.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = J.minX(e),
            r = J.minY(e),
            i = J.maxX(e),
            a = J.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = J.cornerPoints(e);
          return [qx(t, n), qx(n, r), qx(r, i), qx(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  B(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              B(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  B(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              B(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = qx(t, J.center(e)),
            r = J.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && qx.intersection(n, t, !0)) {
              let n = Jx[e];
              return (z(n, () => `Invalid edge name: ${JSON.stringify(Jx)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          z(r, `Rect array is empty`);
          let i = J.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            z(o);
            let s = J.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Jx = [`top`, `right`, `bottom`, `left`]),
      (Yx = {
        quickfix: (e) => (
          (So(e.widthType) || So(e.heightType)) && (e.aspectRatio = null),
          V(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || So(e.widthType) || V(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || So(e.heightType) || V(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Xx = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Yx.quickfix({
              left: V(t) || ea(t),
              right: V(n) || ea(n),
              top: V(r) || ea(r),
              bottom: V(i) || ea(i),
              widthType: Co(a),
              heightType: Co(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = ex.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = ex.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? ex.getNumber(t) : null,
              right: d.right ? ex.getNumber(n) : null,
              top: d.top ? ex.getNumber(r) : null,
              bottom: d.bottom ? ex.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? ex.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? ex.getNumber(t?.sizing.height) : null,
            c = ko(e.left, e.right);
          if (o && V(c)) i = o - c;
          else if (n && So(e.widthType)) i = n.width;
          else if (V(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.widthType);
            }
          let l = ko(e.top, e.bottom);
          if (s && V(l)) a = s - l;
          else if (n && So(e.heightType)) a = n.height;
          else if (V(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                B(e.heightType);
            }
          return Oo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Xx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? ex.getNumber(l.width) : null,
            d = l ? ex.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? J.pixelAligned(f) : f;
        },
      }),
      (Zx = 200),
      (Qx = 200),
      ($x = p.createContext({ parentSize: 0 })),
      (eS = (e) => {
        let t = Lo(),
          { parentSize: n, children: r } = e,
          i = p.useMemo(() => ({ parentSize: n }), [zo(n), Bo(n)]);
        return t === 1
          ? r
            ? D(y, { children: r })
            : null
          : D($x.Provider, { value: i, children: r });
      }),
      (tS = p.createContext(void 0)),
      (nS = new Set()),
      (iS = `style[data-framer-css-ssr-minified]`),
      (aS = (() => {
        if (!jn()) return new Set();
        let e = document.querySelector(iS)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (oS = `data-framer-css-ssr`),
      (sS = (e, t, n) =>
        p.forwardRef((r, i) => {
          let { sheet: a, cache: o } = p.useContext(tS) ?? {},
            s = n;
          if (!jn()) {
            Ze(t) && (t = t(Jo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            lS.add(e, s);
          }
          return (
            ne(() => {
              (s && aS.has(s)) ||
                (Ze(t)
                  ? t(Jo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && qo(e, a, o));
            }, []),
            D(e, { ...r, ref: i })
          );
        })),
      (cS = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (lS = new cS()),
      (uS = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (dS = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(dS || {})),
      (Y = dS),
      (fS = `framer-form-input`),
      (pS = `framer-form-input-wrapper`),
      (mS = `framer-form-input-empty`),
      (hS = `framer-form-input-forced-focus`),
      (X = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (z(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Yo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            z(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (gS = [
        X(`.${fS}`, {
          padding: X.variable(Y.Padding),
          background: `transparent`,
          fontFamily: X.variable(Y.FontFamily),
          fontWeight: X.variable(Y.FontWeight),
          fontSize: X.variable(Y.FontSize),
          fontStyle: X.variable(Y.FontStyle),
          color: X.variable(Y.FontColor),
          fontFeatureSettings: X.variable(Y.FontOpenType),
          fontVariationSettings: X.variable(Y.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: X.variable(Y.WrapperHeight, `100%`),
          letterSpacing: X.variable(Y.FontLetterSpacing),
          textAlign: X.variable(Y.FontTextAlignment),
          lineHeight: X.variable(Y.FontLineHeight),
        }),
        X(`.${fS}:focus-visible`, { outline: `none` }),
      ]),
      (_S = [X(`.${pS}`, { overflow: `hidden` })]),
      (vS = `var(${Y.BorderTopWidth}) var(${Y.BorderRightWidth}) var(${Y.BorderBottomWidth}) var(${Y.BorderLeftWidth})`),
      (yS = [
        `.${pS}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Y.BorderRadiusTopLeft});
        border-top-right-radius: var(${Y.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Y.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Y.BorderRadiusBottomLeft});
        corner-shape: var(${Y.CornerShape});
        border-color: var(${Y.BorderColor});
        border-top-width: var(${Y.BorderTopWidth});
        border-right-width: var(${Y.BorderRightWidth});
        border-bottom-width: var(${Y.BorderBottomWidth});
        border-left-width: var(${Y.BorderLeftWidth});
        border-style: var(${Y.BorderStyle});
        transition: var(${Y.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (bS = `customError`),
      (xS = `valid`),
      (SS = 10),
      (CS = 8),
      (wS = 16),
      (TS = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${wS}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${wS}px`,
        backgroundColor: X.variable(Y.IconColor),
      }),
      (ES = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${wS}px`,
        boxSizing: `content-box`,
        padding: X.variable(Y.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...TS,
      }),
      (DS = `--list-style-type`),
      (OS = `--max-list-digits`),
      (kS = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (AS = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (jS = { display: `inline-block` }),
      (MS = { display: `block` }),
      (NS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${AS.display};
            flex-direction: ${AS.flexDirection};
            justify-content: ${AS.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${is([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${is([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${is([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${jS.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${is([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${is([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${is([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${is([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${is([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${is([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${is([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${is([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${is([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${is([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${is([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${is([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${is([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${is([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${is([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${is([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${is([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${is([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${is([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${MS.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${OS}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${as(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (PS = `--text-truncation-display-inline-for-safari-16`),
      (FS = `--text-truncation-display-none-for-safari-16`),
      (IS = `--text-truncation-line-break-for-safari-16`),
      (LS = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (RS = `(background: -webkit-named-image(i))`),
      (zS = `(contain-intrinsic-size: inherit)`),
      (BS = [
        `@supports ${RS} and (not ${zS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${LS.join(`, `)} { display: var(${PS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${LS.map((e) => `${e}::after`).join(`, `)} { content: var(${IS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${FS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${PS}, ${jS.display}) }
    }`,
      ]),
      (VS = `--framer-will-change-override`),
      (HS = `--framer-will-change-effect-override`),
      (US = `--framer-will-change-filter-override`),
      (WS = `--overflow-clip-fallback`),
      (GS = `--one-if-corner-shape-supported`),
      (KS = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${VS}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${VS}: transform; } }`,
                ]
              : [`body { ${VS}: none; ${HS}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${US}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${US}: filter; } }`,
                ]
              : [`body { ${US}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${WS}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${GS}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...NS,
          ...uS,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...BS,
          f,
        ];
      }),
      (qS = Ko(() => KS(!1))),
      (JS = Ko(() => KS(!0))),
      (YS = On()),
      (XS = p.createContext(!1)),
      (ZS = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (QS = jn() ? new ZS() : void 0),
      ($S = `data-framer-size-compatibility-wrapper`),
      (eC = `0.000001px`),
      (tC = ` translateZ(${eC})`),
      (nC = Nn() || kn() || Pn()),
      (rC = (() => {
        class e extends x {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? xs(t) : Ss(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ot(this.props, e);
          }
          componentDidUpdate(e) {
            Mx(this.props).clip &&
              Mx(this.props).radius === 0 &&
              Mx(e).radius !== 0 &&
              ws(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (iC = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (aC = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: (e) => {
          let t = wa(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
        toHexValue: (e) => K.toHex(K(e)).toUpperCase(),
        toHex: (e) => K.toHexString(K(e)).toUpperCase(),
        toRgb: (e) => K.toRgb(K(e)),
        toRgbString: (e) => K.toRgbString(K(e)),
        toHSV: (e) => K.toHsv(K(e)),
        toHSL: (e) => K.toHsl(K(e)),
        toHslString: (e) => K.toHslString(K(e)),
        toHsvString: (e) => K.toHsvString(K(e)),
        hsvToHSLString: (e) => K.toHslString(K(fa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => K.toHex(K(fa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => K.toHexString(K(fa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => K.toRgbString(K(fa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => fa(e.h, e.s, e.v),
        rgbaToString: (e) => K.toRgbString(K(e)),
        rgbToHexValue: (e) => K.toHex(K(e)),
        rgbToHexString: (e) => K.toHexString(K(e)),
        hslToString: (e) => K.toHslString(K(e)),
        hslToRgbString: (e) => K.toRgbString(K(e)),
        toColorPickerSquare: (e) => K.toRgbString(K({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => K(e).isValid !== !1,
        equals: (e, t) =>
          K.isP3String(e) || K.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = K(e)),
              typeof t == `string` && (t = K(t)),
              K.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = K(e);
          return t.a === 1 ? K.toHexString(t) : K.toRgbString(t);
        },
        toFormatString: (e) => (K.isP3String(e) ? e : K.toRgbString(K(e))),
      }),
      (oC = /var\(.+\)/u),
      (sC = new Map()),
      (cC = [`stops`]),
      (lC = [`start`, `end`]),
      (uC = [`angle`, `alpha`]),
      (dC = {
        isLinearGradient: (e) => R(e) && uC.every((t) => t in e) && (Ms(e) || js(e)),
        hash: (e) => e.angle ^ As(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ks(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (fC = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (pC = {
        isRadialGradient: (e) => R(e) && fC.every((t) => t in e) && (Ms(e) || js(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ As(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ks(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (mC = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (hC = new Set([...mC, ...mC.map((e) => `${e}Capture`)])),
      (gC = `overflow`),
      (_C = { x: 0, y: 0, width: 200, height: 200 }),
      (vC = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (yC = A(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = ds(e),
          d = Us(c),
          f = ps(e),
          p = Rs(e),
          m = t(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Mx(e)[`data-framer-offset-parent-id`],
          };
        !Ws(e) && r && (Mx(g)[`data-framer-name`] = r);
        let [_, v] = Hs(c),
          b = Vs(c),
          x = Uo(b);
        (i && !(v && !x && jo(b))
          ? ((d.transformTemplate ||= fs(i)), Object.assign(g, ls(i)))
          : (d.transformTemplate ||= void 0),
          ys(e, h));
        let S = _o(e),
          C = Gs(c, b, v, l(XS)),
          w = Vo(
            te(y, {
              children: [
                S
                  ? D(po, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: v ?? void 0,
                      nodeId: e.id && us(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                D(ho, { ...o, border: a, layoutId: f }),
              ],
            }),
            C,
          ),
          T = Go(e.as),
          E = Wo(S);
        return (
          e.fitImageDimension &&
            E &&
            ((_[e.fitImageDimension] = `auto`), (_.aspectRatio = E.width / E.height)),
          te(T, { ...g, ...d, layoutId: f, style: _, ref: h, children: [w, s] })
        );
      })),
      (bC = ss(
        A(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? D(yC, { ...e, ref: t }) : null;
        }),
      )),
      (xC = `__LAYOUT_TREE_ROOT`),
      (SC = p.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (CC = class extends x {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === xC && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return D(SC.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (wC = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (TC = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e,
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (EC = f(new Map())),
      (DC = typeof IntersectionObserver > `u` ? Sv : ec),
      (OC = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (kC = p.createContext(null)),
      (AC = class extends x {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === xC && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return D(Fe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (jC = (e) => {
        let t = p.useContext(SC);
        return D(AC, { ...e, sharedLayoutContext: t });
      }),
      (MC = p.createContext(!0)),
      (NC = f({ register: () => {}, deregister: () => {} })),
      (PC = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let i = oc(),
          o = t({
            register: d(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i],
            ),
            deregister: d(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i],
            ),
          }).current;
        return (
          a(
            () => (
              i.forEach((t, r) => {
                let a = r(e, n);
                i.set(r, Ze(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, n, i],
          ),
          D(NC.Provider, { value: o, children: r })
        );
      }),
      (FC = p.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: o,
        transitionProps: s,
        children: c,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: _,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: C,
        isInitial: w,
      }) {
        let T = ge(),
          E = l(De),
          { persistLayoutIdCache: O } = l(Ex),
          k = t({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: lc({}, _, s),
          }),
          ee = t(null),
          A = E !== null && !E.isPresent;
        (n && k.current.wasCurrent === void 0 && O(),
          a(() => {
            if (e || !T) return;
            if (A) {
              k.current = { ...k.current, wasBeingRemoved: A };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!A && k.current.wasBeingRemoved && n),
              o = r && !t,
              c = lc(k.current.origins, _, s),
              l = k.current.wasReset;
            (a || o
              ? (T.stop(), T.start({ zIndex: x, ...c, ...s }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: x, ...IC, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, A]));
        let ne = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          re = g ? { type: !1 } : h || m,
          j = { ...y };
        ((j.left === void 0 || j.right === void 0) && (j.width = `auto`),
          (j.top === void 0 || j.bottom === void 0) && (j.height = `auto`));
        let ie = (uc(s) || uc(_)) && (e || n || r) ? 1200 : void 0,
          ae = { ...IC, ...k.current.origins },
          oe = e
            ? {
                initial: { ...ae, ..._ },
                animate: { ...ae, ...s, transition: ne },
                exit: { ...ae, ...v, transition: m },
              }
            : { animate: T, exit: { ...ae, ...v, transition: re } },
          M = !(A || S === !1),
          se = !!n && M,
          ce = n && w;
        return te(bC, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || A || (n && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: o ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              D(bC, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && o ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: A ? void 0 : d,
              }),
            D(bC, {
              ...j,
              ...oe,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: A ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ce || e || (n && b) ? 1 : 0 },
              "data-is-present": M ? void 0 : !1,
              ref: ee,
              children: D(kC.Provider, {
                value: ee,
                children: D(MC.Provider, {
                  value: se,
                  children: D(PC, {
                    isCurrent: se,
                    isOverlayed: i,
                    children: D(jC, {
                      isLead: n,
                      animatesLayout: !!b,
                      transition: ne,
                      isExiting: !M,
                      isOverlayed: i,
                      id: C,
                      children: c,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, cc)),
      (IC = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (LC = class {
        warning = () => {
          Qi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (RC = f(new LC())),
      (zC = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (BC = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (VC = Iv(IC)),
      (HC = p.createContext(void 0)),
      (UC = p.createContext(void 0)),
      (WC = (() => {
        class e extends x {
          #e = null;
          state = BC();
          static defaultProps = { enabled: !0 };
          static contextType = HC;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !bo(t) || !yo(t)) return;
            let n = { ...zC.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = mc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!bo(t) || !yo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, zC.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = mc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !bo(e) || !yo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, zC.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, zC.Fade, t);
          }
          push(e, t) {
            this.#i(e, dc(t), t);
          }
          modal(e, t) {
            this.#i(e, zC.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, fc(t), t);
          }
          flip(e, t) {
            this.#i(e, pc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, zC.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = kc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              z(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              z(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                D(
                  FC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: zc(o, e),
                    transitionProps: u,
                    animation: Rc(o, e),
                    backfaceVisible: Ic(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: D(Ks, { children: Vc({ component: n, transition: l?.transition }) }),
                  },
                  t,
                ),
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              D(
                FC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Fc(n, t),
                  transitionProps: Lc(n, t),
                  instant: zc(n, t, !0),
                  animation: Rc(n, t),
                  exitProps: e.transition.enter,
                  visible: Bc(n, t),
                  backdropColor: Nc(e.transition),
                  backfaceVisible: Pc(n, t),
                  onTapBackdrop: Hc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Vc({ component: e.component, transition: e.transition }),
                },
                e.key,
              ),
            );
            return D(bC, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: D(RC.Provider, {
                value: this,
                children: te(UC.Provider, {
                  value: i,
                  children: [
                    D(FC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Ac(n),
                      animation: jc(n),
                      backfaceVisible: Mc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: D(Wa, {
                        children: D(CC, {
                          children: D(Le, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    D(Le, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (GC = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (KC = ss(p.forwardRef(Uc))),
      ke(bv(), 1),
      (qC = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(qC || {})),
      (JC = `optional`),
      ke(bv(), 1),
      ke(bv(), 1),
      (YC = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (XC = Symbol(`private`)),
      (ZC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [XC]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new $b(),
                reset() {
                  for (let t in i)
                    if (YC(i, t)) {
                      let n = YC(e, t) ? Mx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, $C);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[XC].reset()),
          (e.addObserver = (e, t) => e[XC].observers.add(t)),
          e
        );
      })()),
      (QC = class {
        set = (e, t, n, r) => {
          if (t === XC) return !1;
          let i = e[XC],
            a,
            o;
          if (
            (ea(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = ex(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Mx(e)[t];
          if (l !== void 0) {
            ea(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Mx(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === XC) return Mx(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[XC].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(XC);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== XC) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      ($C = new QC()),
      (ew = `opacity`),
      (tw = (() => {
        function e(t = {}) {
          let n = ZC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => ZC.resetObject(e));
          }),
          (e.addObserver = (e, t) => ZC.addObserver(e, t)),
          e
        );
      })()),
      (nw = { update: 0 }),
      (rw = p.createContext({ update: NaN })),
      (iw = class extends x {
        observers = [];
        state = nw;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Cx.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), tw.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            tw._stores.forEach((e) => {
              let t = tw.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            D(rw.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      ke(bv(), 1),
      (aw = `__framer__`),
      (ow = aw.length),
      (sw = p.createContext(void 0)),
      (cw = p.createContext(void 0)),
      (lw = `ssr-variant`),
      (uw = `ssr-variant-group-separator`),
      (dw = p.forwardRef(function (e, t) {
        let n = pl(t),
          r = p.useContext(cw),
          i = p.useSyncExternalStore(Dv, kv, Ov),
          a = qa(() => (i ? (jn() ? 1 : 2) : 0)),
          o = p.useContext(sw);
        return Zr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, xl(t, c, i));
            case 1:
              return gl(i, s, c, u, l, d, n, t);
            case 2:
              return gl(i, s, c, u, l, d, fl, void 0);
            default:
              B(a);
          }
        }, [o, r, n, e]);
      })),
      (fw = sS(dw, `.${lw} { display: contents }`, `PropertyOverrides`)),
      (pw = `default`),
      (mw = new Set([pw])),
      (hw = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (z(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (z(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = pw, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return pw;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = _l(r)) : pw;
        }
        setAll(e, t = mw, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, _w) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: R(a) ? a : void 0,
              animate: R(o) ? o : void 0,
              transformTemplate: I(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (gw = new hw()),
      (_w = `__Appear_Animation_Transform__`),
      (vw = `data-framer-appear-id`),
      (yw = `data-framer-appear-animation`),
      (bw = (e) => {
        if (Xa())
          return {
            animate: Cl(e.animate) ? e.animate : void 0,
            initial: Cl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (xw = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Sw = (e) => ({
        x: qe(e?.x ?? 0),
        y: qe(e?.y ?? 0),
        opacity: qe(e?.opacity ?? 1),
        scale: qe(e?.scale ?? 1),
        rotate: qe(e?.rotate ?? 0),
        rotateX: qe(e?.rotateX ?? 0),
        rotateY: qe(e?.rotateY ?? 0),
        skewX: qe(e?.skewX ?? 0),
        skewY: qe(e?.skewY ?? 0),
        transformPerspective: qe(e?.transformPerspective ?? 0),
      })),
      (Cw = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (ww = { willChange: `transform` }),
      Object.freeze(ww),
      (Tw = {}),
      Object.freeze(Tw),
      (Ew = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Dw = () => {
        let e = t();
        return (
          a(
            () => () => {
              clearTimeout(e.current);
            },
            [],
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Ow = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (kw = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Aw = 1),
      (jw = 4),
      (Mw = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (Nw = [`animate`, `animate`]),
      (Pw = { inputRange: [], outputRange: [] }),
      (Fw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Iw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Lw = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (Rw = [0, 1]),
      (zw = { parallax: Ow, styleAppear: Mw, styleTransform: Fw, loop: Ew, presence: kw }),
      (Bw = Iv(zw)),
      (Vw = (e) => e.reduce((e, t) => (e += t), 0)),
      (Hw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Uw = `current`),
      (Ww = (e) =>
        p.forwardRef((t, n) => {
          if (t.__withFX)
            return D(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = bw(t);
          if (r) return D(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = Kl(t),
            m = Zs(n),
            { values: h, style: g } = Ml(s, m, f, t.style, t[N]),
            { values: _, style: v } = Ol(i, m, t.style?.visibility),
            { values: y, style: b } = Wl(o, m),
            { values: x, style: S } = Bl(a, m),
            { values: C, style: w } = El(c, m),
            T = p.useMemo(() => {
              let e = new Ue(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, _, x, C, h]);
          Jl(t.style, T);
          let E = xe(T.scale, Hw),
            O = xe(T.opacity, Hw),
            k = xe(T.x, Vw),
            ee = xe(T.y, Vw),
            te = xe(T.rotate, Vw),
            A = xe(T.rotateX, Vw),
            ne = xe(T.rotateY, Vw),
            re = xe(T.skewX, Vw),
            j = xe(T.skewY, Vw),
            ie = xe(T.transformPerspective, Vw),
            { drag: ae, dragConstraints: oe } = l;
          hs(ae && ql(oe) ? oe : void 0);
          let M = {
            opacity: O,
            scale: E,
            x: k,
            y: ee,
            rotate: te,
            rotateX: A,
            rotateY: ne,
            skewX: re,
            skewY: j,
          };
          tt(d) && (M.transformPerspective = ie);
          let se = Yl(t.animate) ? t.animate : void 0,
            ce = Yl(t.initial) ? t.initial : void 0,
            le = Yl(t.exit) ? t.exit : void 0,
            ue = f && !s.presenceInitial ? { initial: ce, animate: se, exit: le } : {};
          return D(e, {
            ...l,
            ...ue,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...M, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (Gw = f({})),
      (Kw = p.createContext({})),
      (qw = p.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = p.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = pl(a);
        return D(Kw.Provider, { value: o, children: s(r, i) });
      })),
      (Jw = (e) =>
        p.forwardRef((t, n) =>
          D(e, { layoutId: ps(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n }),
        )),
      (Yw = {}),
      (Xw = () => Yw),
      (Zw = (e) => {
        Yw = e;
      }),
      (Qw = !1),
      ($w = class extends x {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Ql(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ut(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`,
              ),
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          un(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Ql(e)) throw e;
          return ((Qw = !0), this.props.children);
        }
      }),
      (eT = o === void 0 ? null : new Promise(() => {})),
      (tT = D($l, {})),
      (nT = f(!1)),
      (nT.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (rT = D(tu, {})),
      (iT = class extends x {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (ru(this.props.getErrorMessage(), t?.componentStack), nu(e, t));
        }
        render() {
          let { children: e, fallback: t = rT } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (aT = class extends x {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n,
          ),
            this.setState({ hasError: !0 }),
            nu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (oT = p.createContext(void 0)),
      (sT = `code-crash:`),
      (cT = Jw(
        p.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l,
        ) {
          let u = qa(() => (t ? `${t}-container` : void 0)),
            d = Go(n),
            f = _u(
              p.Children.map(e, (e) =>
                p.isValidElement(e) ? p.cloneElement(e, { layoutId: t }) : e,
              ),
              r,
              i,
              a,
              o,
              s,
            );
          return D(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: D(XS.Provider, {
              value: !0,
              children: D(ob.Provider, {
                value: i ?? null,
                children: D(Ka, {
                  enabled: !1,
                  children: D(He, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        }),
      )),
      (lT = p.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = _u(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Go(f);
          return D(ob.Provider, {
            value: a ?? null,
            children: D(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return D(ob.Provider, {
            value: a ?? null,
            children: D(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (uT = f({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (dT = `framer-cursor-none`),
      (fT = `framer-pointer-events-none`),
      (pT = g(function ({ children: e }) {
        let t = qa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = vu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = oe();
        return te(uT.Provider, { value: t, children: [e, !n && D(_T, {})] });
      })),
      (mT = sS(
        pT,
        [
          `.${dT}, .${dT} * { cursor: none !important; }`,
          `.${fT}, .${fT} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`,
      )),
      (hT = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (gT = `data-framer-portal-id`),
      (_T = g(function () {
        let { onRegisterCursors: e } = l(uT),
          [n, i] = c(!1),
          o = me(0),
          s = me(0),
          u = me(0),
          f = t(null),
          p = t({ cursors: {}, cursorHash: void 0 }),
          m = ms();
        (r(() => {
          let e = G.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? j(() => i(!1)) : i(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || i(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          a(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (o.set(e), s.set(t), Ae(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (et(p.current.cursors)) return;
              let n = Su(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), F.update(() => m()));
            };
            function a(n) {
              if (n.pointerType === `touch`) {
                Ie(i);
                return;
              }
              (F.read(i, !0), (e = n.clientX), (t = n.clientY), F.update(r));
            }
            function c(e) {
              if (e.target === f.current || !f.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              F.update(() => {
                f.current?.dispatchEvent(t);
              });
            }
            return (
              G.addEventListener(`pointermove`, a),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              F.read(i, !0),
              () => {
                (G.removeEventListener(`pointermove`, a),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Ie(i));
              }
            );
          }, [u, o, s, m, n]),
          a(() => {
            if (!n) return;
            function e() {
              Ae(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              G.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), G.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          r(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = et(e) ? null : Su(o.get(), s.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(dT, !1));
            };
          }, [o, s, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          _ = g ? h[g] : null,
          v = yu(_);
        r(() => {
          n && document.body.classList.toggle(dT, v);
        }, [v, n]);
        let y = _?.component,
          b = _?.transition ?? { duration: 0 },
          x = b.duration === void 0 ? b : { ...b, duration: b.duration * 1e3 },
          S = ye(o, x),
          w = ye(s, x),
          T = xe(() => S.get() + (_?.offset?.x ?? 0)),
          E = xe(() => w.get() + (_?.offset?.y ?? 0)),
          O = _?.alignment,
          k = _?.placement,
          ee = d((e, t) => `translate(${xu(k, O)}) ${t}`, [O, k]);
        return !n || !_ || !y
          ? null
          : D(C, {
              children: D(y, {
                transformTemplate: ee,
                style: { ...hT, x: T, y: E, opacity: u },
                globalTapTarget: !0,
                variant: _?.variant,
                ref: f,
                className: fT,
              }),
            });
      })),
      (vT = `webPageId`),
      (yT = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            z(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (z(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Cv && !Pn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Tu(e), e), this.collectedLinks.set(Tu(t), t));
          let n = this.nestingInfo.get(Tu(e)) ?? new Set();
          (n.add(Tu(t)), this.nestingInfo.set(Tu(e), n));
        }
      }),
      (bT = new yT()),
      (xT = `element`),
      (ST = `collection`),
      (CT = `collectionItemId`),
      (wT = `pathVariables`),
      (TT = `framer/page-link,`),
      (ET = f(void 0)),
      (DT = `--text-selection-color`),
      (OT = `--text-selection-background-color`),
      (kT = sS(Uu, (e, t) => Hu(t?.triggerId), `InjectSelectionStyle`)),
      (AT = {
        isClockwise: (e) => AT.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            !i || !a || (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (aa.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (aa.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = J.boundingRectFromPoints(e),
            r = J.boundingRectFromPoints(t);
          if (!J.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(qx(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(qx(e, r));
          });
          for (let e of i) for (let t of o) if (qx.intersection(e, t, !0)) return !0;
          return !!(AT.containsPoint(t, e[0]) || AT.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!AT.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = J.edges(t),
            r = new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (J.containsPoint(t, c)) {
              let e = Wu(c);
              if ((r.add(e), o.push(c), J.containsPoint(t, l))) continue;
            }
            let u = qx(c, l);
            n.forEach((e) => {
              let t = qx.intersection(u, e, !0);
              if (!t) return;
              let n = Wu(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (J.points(t).forEach((t) => {
                AT.containsPoint(e, t) && (r.add(Wu(t)), a.push(t));
              }),
              aa.sortClockwise([...o, ...a]));
        },
      }),
      (jT = 5),
      (MT = 4),
      (NT = (() => {
        let e = p.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (PT = `overlay`),
      (FT = `template-overlay`),
      (IT = p.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? D(e, { ...t, ref: n }) : null;
      })),
      (LT = class extends x {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((o.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ut(wv ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          un(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (wv && document.getElementById(`main`)?.innerHTML) || ``;
          return D(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ut()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (zT = /:([a-z]\w*)/gi),
      (BT = f(void 0)),
      (VT = new Map()),
      (HT = 500),
      (UT = 500),
      (GT = !1),
      (KT = 500),
      (qT = 0.9),
      (JT = 1.7),
      (YT = 4),
      (XT = 1 / 0),
      (ZT = new WeakMap()),
      (QT = new Set()),
      ($T = new Map()),
      (eE = !Uy || typeof IntersectionObserver > `u` ? null : Ld()),
      (tE = vd(
        A(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...d
          },
          f,
        ) {
          let p = jt(),
            m = Nt(),
            h = Sd(),
            { activeLocale: g, locales: _ } = $n(),
            v = Wd(),
            y = er(),
            b = Eu(),
            x = Gd({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = u(() => {
              if (!t) return {};
              let e = wu(t) ? t : Nu(t);
              if (!e) return {};
              if (I(e))
                return ef(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h,
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (st(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = yd(p, m, e, g, c, h),
                S = zd(n, !0),
                C = S === `_blank`,
                w = $d(u, C),
                T = { pathVariables: f, locale: b },
                E = Yd(u, w, (e) =>
                  qd(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e,
                  ),
                );
              return {
                href: u,
                target: S,
                onClick: Jd(u, x, E),
                "data-framer-page-link-current": (m && Cd(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = Zs(k(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: T,
              _routeId: E,
              _pathVariables: D,
              _locale: O,
              _navigationUrl: ee,
              ...te
            } = S;
          Qs(
            C,
            (e) => {
              if (!(e === null || !E || !T || !ee || b))
                return eE?.(e, T, `${E}:${O?.id}:${JSON.stringify(D)}`);
            },
            [T, E, D, O, ee, b],
          );
          let A = !!w;
          return Iu(
            pl(f).cloneAsArray(e, (e) => tf(e, { ...d, ...rf(te, l, A) }, C)),
            c,
            s,
            t,
            S,
            C,
          );
        }),
      )),
      (nE = `framer`),
      (rE = 3),
      (iE = 30),
      (aE = 1e4),
      (oE = `__framer`),
      (sE = `3`),
      (cE = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (lE = Date.now()),
      (uE = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (dE = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (fE = () => ((Date.now() - lE) / 1e3).toFixed(2)),
      (pE = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          p.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          p.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = fE())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = fE()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = fE()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          D(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (mE = { state: `pending` }),
      (hE = { state: `success` }),
      (gE = { state: `incomplete` }),
      (_E = { state: `complete` }),
      (vE = { state: `error` }),
      (yE = p.createContext(void 0)),
      (bE = p.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        u,
      ) {
        let d = p.useRef(null),
          f = u ?? d,
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = pf(),
          _ = jt(),
          v = Nt(),
          y = Sd(),
          b = xn(),
          [x, S] = p.useReducer(_f, gE),
          { activeLocale: C, locales: w } = $n(),
          T = l(yE),
          E = p.useRef({ onSuccess: r, onError: i, onLoading: a });
        E.current = { onSuccess: r, onError: i, onLoading: a };
        let O = p.useRef(!1);
        async function k(e) {
          if (I(e)) {
            let t = bd(_, e, y, w);
            if (!t) {
              bf(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          z(
            wu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`,
          );
          let t = await Hd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, C, b),
            { routeId: n, elementId: r, pathVariables: i } = yd(_, v, e, C, t, y);
          _.navigate?.(n, r, i);
        }
        let ee = async (t) => {
            if ((t.preventDefault(), !e || !T || O.current)) return;
            ((O.current = !0), h());
            let r = new FormData(t.currentTarget),
              i = lf(t.currentTarget);
            (await Iy({ priority: `user-visible`, continueAfter: `paint` }),
              g(r),
              j(() => S({ type: `submit` })),
              ff(r, G.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (E.current.onLoading?.(),
                hf({ router: _, nodeId: s, submitTrackingId: o, activeLocale: C }),
                await Sf(e, r, i, T),
                j(() => S({ type: `success` })),
                E.current.onSuccess?.(),
                n && (await k(n)));
            } catch (e) {
              (j(() => S({ type: `error` })), E.current.onError?.(), console.error(e));
            }
            O.current = !1;
          },
          A = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), ee(e)));
          },
          ne = async (e) => {
            let t = e.currentTarget;
            (await Iy({ priority: `background`, continueAfter: `paint` }),
              j(() => S({ type: xf(t) ? `incomplete` : `complete` })));
          };
        return te(M.form, {
          ...c,
          onSubmit: vf(x) ? ee : yf,
          onKeyDown: A,
          onChange: ne,
          ref: f,
          children: [t(x), D(mf, { states: m })],
        });
      })),
      (xE = `__framer_force_showing_editorbar_since`),
      (SE = class extends x {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (CE = () => {
        try {
          return !!localStorage[xE];
        } catch {
          return !1;
        }
      }),
      (wE = () => !CE()),
      (TE = (() => {
        let e = f(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (EE = null),
      (DE = null),
      Ev(kf),
      (OE = (e, n, r, i, s, c) => {
        let u = l(yE),
          d = t(),
          f = xn(),
          p = t(!0);
        return (
          a(() => {
            function t() {
              (!EE || !DE) && kf();
              let t = r ? new URL(r, G.location.href) : G.location,
                a = {
                  version: oy,
                  abTestId: e?.abTestId,
                  framerSiteId: u ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: s?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: EE,
                  locale: DE,
                },
                o = p.current && c !== void 0 ? c : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = o ?? null;
                    if (o === void 0) {
                      let n = e.collectionId && f?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && I(r)) {
                        let e = n.getRecordIdBySlug(r, s || void 0);
                        t = (st(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...a, collectionItemId: t };
                  })()
                : a;
            }
            (async () => {
              let e = (d.current = t()),
                n = e instanceof Promise ? await e : e;
              ((d.current = n),
                p.current ? (p.current = !1) : un(`published_site_pageview`, n, `eager`));
            })();
            let a = async (e) => {
              if (e.persisted) {
                let e = (d.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((d.current = n), un(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              o.addEventListener(`pageshow`, a),
              () => {
                o.removeEventListener(`pageshow`, a);
              }
            );
          }, [e, n, r, i, s, u, f, c]),
          d
        );
      }),
      (kE = 0),
      (AE = 500),
      (jE = 200),
      (ME = `main`),
      (NE = `framerGeneratedPage`),
      (PE = `<!-- Start of headStart -->`),
      (FE = `<!-- End of headStart -->`),
      (IE = `<!-- Start of headEnd -->`),
      (LE = `<!-- End of headEnd -->`),
      (RE = `<!-- Start of bodyStart -->`),
      (zE = `<!-- End of bodyStart -->`),
      (BE = `<!-- Start of bodyEnd -->`),
      (VE = `<!-- End of bodyEnd -->`),
      (HE = p.createContext(void 0)),
      (UE = { status: `loading`, data: void 0 }),
      (WE = 5e3),
      (GE = () => {}),
      (KE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Sp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Sp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = G.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Ep(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = al(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Ep(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!jn() || !Ou(e.url, !1)) return;
          let t = Sp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Tp(n, e);
          return (e.resultOutputType === `image` && I(i) && (await yp(i).catch(GE)), i);
        }
        async fetchWithCache(e) {
          if (!jn()) return;
          let t = Sp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Ep(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, UE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Ou(r, !1)) return GE;
          let a = Sp(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (qE = f(void 0)),
      (JE = f(!0)),
      (YE = ({ children: e, client: t }) => {
        let [n] = c(() => t ?? new KE()),
          [r, i] = c(!0);
        return (
          a(
            () => (
              n.hydrateCache(),
              j(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n],
          ),
          D(JE.Provider, { value: r, children: D(qE.Provider, { value: n, children: e }) })
        );
      }),
      (XE = (() => {
        let e = f(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (ze.WillChange = Ge),
      (ZE = vd(
        A(function ({ links: e, children: t, ...n }, r) {
          return pl(r)(t(kp((t) => e.map(t), [e])), n);
        }),
      )),
      (QE = { priority: void 0, canYield: !0 }),
      ($E = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return qp(e, t);
            case `boolean`:
              return Yp(e);
            case `color`:
              return Qp(e);
            case `date`:
              return em(e);
            case `enum`:
              return nm(e);
            case `file`:
              return im(e);
            case `link`:
              return om(e);
            case `number`:
              return cm(e);
            case `object`:
              return dm(e, t);
            case `responsiveimage`:
              return pm(e);
            case `richtext`:
              return hm(e);
            case `string`:
              return ym(e);
            case `vectorsetitem`:
              return _m(e);
            case `unknown`:
              return e;
            default:
              B(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : it(e)
              ? { type: `date`, value: e.toISOString() }
              : L(e)
                ? { type: `number`, value: e }
                : I(e)
                  ? { type: `string`, value: e }
                  : $e(e)
                    ? { type: `array`, value: e.map($E.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && xm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && xm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && xm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && xm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && xm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => $E.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => $E.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = bm(e),
            i = bm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = bm(e),
            i = bm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = bm(e),
            i = bm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map($E.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return I(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              B(e);
          }
        },
      }),
      (eD = { type: `unknown`, isNullable: !0 }),
      (tD = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Zc(e);
          z(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (z(n !== `array`, `Array properties are not supported`),
              z(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (rt(i)) continue;
            let a = this.schema[t];
            if (!tt(a)) {
              if ((z(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Sm(this.collection, this.locale))[t]?.[n];
          return Uv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Sm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Pp(e);
            i && (await i);
            let a = t[r];
            z(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Sm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Pp(t);
            e && (await e);
            let a = n[Number(i)];
            (z(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (nD = new Map()),
      (rD = new WeakMap()),
      (iD = `$r_`),
      (aD = new Map()),
      (oD = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Fm(e, t)), (this.priority = km(n)));
        }
        *resolveArrayValue(e) {
          return yield* Rp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* U(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          z(Mm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          z(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return ot(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          z(Pm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (z(n, `Can't find collection for vector set item pointer`),
            z(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return ot(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (sD = `index`),
      (cD = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), W(this.name, ...e));
        }
      }),
      (lD = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new dD();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (uD = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Z();
      }),
      (dD = class extends cD {
        name = `Indexes`;
      }),
      (fD = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          z(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                z(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: jm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                z(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Nm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends cD {
        name = `Fields`;
      }),
      (pD = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return W(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (mD = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return W(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== sD) return !1;
          return !0;
        }
      }),
      (hD = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return W(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (gD = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (z(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (z(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new mD();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new hD(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          z(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (z(e, `Field must exist`), e.field);
        }
      }),
      (_D = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = zm(),
            i = Bm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (vD = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (yD = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Z();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (bD = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (xD = class extends bD {
        group;
        getGroup() {
          return (z(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (z(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Fp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Ip(this.evaluate(void 0), void 0, e);
        }
      }),
      (SD = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return W(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (CD = class e extends xD {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new hD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new SD(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Rp(
              n.tuples.map((t) =>
                Rp(
                  this.projections.map((n) => U({ field: n.field, value: n.input.evaluate(e, t) })),
                ),
              ),
            );
          return n.map(t, (e, t) => {
            let n = new vD();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            z(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (wD = { type: 0 }),
      (TD = class extends bD {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Fp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Ip(this.evaluate(void 0, void 0));
        }
      }),
      (ED = { type: 0 }),
      (DD = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return W(`CaseCondition`, this.when, this.then);
        }
      }),
      (OD = class e extends TD {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new DD(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* U({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Rp(
              this.conditions.map((n) =>
                U({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) }),
              ),
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if ($E.equal(n, e, ED)) return t;
          } else for (let { when: e, then: t } of r) if (Xp(e)) return t;
          return i;
        }
      }),
      (kD = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new gD();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new mD();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (tt(t)) continue;
                a.add(t.field);
                let r = new pD(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new fD(Rm(this.fieldId++), void 0, t.definition, void 0),
                  a = new SD(t, r);
                i.push(a);
                let s = new pD(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (tt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              z(n.alias, `Subqueries should have an alias`);
              let r = Rm(this.fieldId++),
                a = n.alias,
                s = new fD(r, a, t.definition, void 0),
                c = new SD(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              B(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Em(t.data, this.locale),
            i = t.alias,
            a = new lD(Im(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new fD(Rm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new fD(Rm(this.fieldId++), sD, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: sD, collectionName: i });
            let t = new mD(),
              r = new pD(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new mD(),
              o = new uD(Lm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new mD(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              B(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              B(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(eD, null);
        }
        buildLiteralValue(e) {
          let t = $E.parse(e.value);
          return this.normalizer.newScalarConstant(eD, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (z(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                z(n, `Missing argument`),
                z(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              B(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new AD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new AD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new DD(this.buildExpression(e, t.when), this.buildExpression(e, t.then)),
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              B(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              B(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (AD = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (jD = class e extends xD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return W(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new hD(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Rp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Xp(n[t] ?? null));
        }
      }),
      (MD = class e extends xD {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return W(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * _D : 50 * _D);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Mp()),
            i = Mp(),
            a = [];
          for (let n of r) {
            let r = Pp(i);
            r && (yield r);
            let o = new vD();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new yD(n, a);
        }
      }),
      (ND = class e extends xD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new hD(new mD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* U({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (PD = class e extends xD {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return W(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * _D);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Mp()),
            r = Mp(),
            i = [];
          for (let a of n) {
            let n = Pp(r);
            n && (yield n);
            let o = new vD();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new yD(t, i);
        }
      }),
      (FD = class e extends xD {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new hD(new mD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* U({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (ID = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Xp(n) && Xp(r) };
        }
      }),
      (LD = class extends TD {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return W(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (RD = { type: 0 }),
      (zD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* U({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.contains(n, r, RD) };
        }
      }),
      (BD = { type: 0 }),
      (VD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* U({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.endsWith(n, r, BD) };
        }
      }),
      (HD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.equal(n, r, wD) };
        }
      }),
      (UD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.greaterThan(n, r, wD) };
        }
      }),
      (WD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.greaterThanOrEqual(n, r, wD) };
        }
      }),
      (GD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.lessThan(n, r, wD) };
        }
      }),
      (KD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.lessThanOrEqual(n, r, wD) };
        }
      }),
      (qD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !$E.equal(n, r, wD) };
        }
      }),
      (JD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Xp(n) || Xp(r) };
        }
      }),
      (YD = { type: 0 }),
      (XD = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* U({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.startsWith(n, r, YD) };
        }
      }),
      (ZD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof jD) {
            if (e.predicate instanceof ID) {
              let n = new ND(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof JD) {
              let n = new FD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof PD)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new MD(n, Vm(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof jD) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof PD)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof HD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof qD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof GD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof UD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof WD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof LD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof LD &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof XD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof LD &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof LD &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Vm(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new MD(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (QD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new $D();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          z(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      ($D = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (eO = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (tO = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new QD(Hm(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new eO(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            z(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (nO = class e extends xD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new hD(new mD(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new yD(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new vD();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* U({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof HD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e,
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e,
              );
          }
          let r = new yD(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new vD();
              (n.merge(i),
                n.merge(a),
                Xp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (rO = class e extends xD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new hD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* U({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = lm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (iO = class e extends xD {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new hD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* U({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = lm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (aO = class e extends TD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return W(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) tt(n.collection) || e.add(n);
          return new hD(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new vD();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (oO = class e extends TD {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            z(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return W(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return $E.cast(n, this.definition);
        }
      }),
      (sO = class e extends TD {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return W(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (tt(this.field.collection) || e.add(this.field), new hD(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new vD();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (cO = { type: 0 }),
      (lO = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $E.in(n, r, cO) };
        }
      }),
      (uO = { type: 1 }),
      (dO = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* U({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: $E.indexOf(n, r, uO) };
        }
      }),
      (fO = class extends Error {}),
      (pO = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return W(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Wm(n),
            a = Wm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (mO = class e extends TD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: $E.length(n) };
        }
      }),
      (hO = class e extends TD {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Xp(yield* this.input.evaluate(e, t)) };
        }
      }),
      (gO = { type: 0 }),
      (_O = class e extends TD {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* U({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !$E.in(n, r, gO) };
        }
      }),
      (vO = class extends TD {
        constructor(e, t) {
          z(e.name !== sD, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return W(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (z(e, `Context must exist`), e.getValue(this.field))
            : (z(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (yO = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new PD(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new MD(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new nO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof LD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof nO && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new jD(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new CD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof CD &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new rO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new iO(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof LD) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new vO(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new LD(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof hO)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof HD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof qD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof GD) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof KD) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof UD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof WD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof ID) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof JD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new hO(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof LD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof LD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof LD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof LD && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new ID(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof LD && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof LD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof LD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof LD && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new JD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new HD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new qD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new GD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new KD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new UD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof vO;
          if (t instanceof vO && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new WD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new lO(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new _O(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new DD(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new OD(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new zD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new XD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new VD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new mO(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new dO(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new aO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new sO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new pO(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new oO(e, t);
          return this.finishScalar(n);
        }
      }),
      (bO = class extends xD {}),
      (xO = class e extends bO {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return W(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Z();
          return new hD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * _D).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          z(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            z(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Gm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                z(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            }),
          );
          return t.map(t.fields, (e) => {
            let t = new vD();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (z(s, `Item not found`), z(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (SO = { type: 0 }),
      (CO = class e extends bO {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== sD && (tt(e.collection) || t.add(e));
          return new hD(new mD(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === sD) {
                let r = n.collection;
                z(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                z(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                z(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!$E.equal(a, o, SO)) {
                if (nt(a) || $E.lessThan(a, o, SO)) return i ? -1 : 1;
                if (nt(o) || $E.greaterThan(a, o, SO)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (wO = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new tO();
        normalizer = new yO(this.memo);
        explorer = new ZD(this.normalizer);
        optimize(e) {
          let t = new kD(this.normalizer, this.query, this.locale).build(),
            n = Pp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (z(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new xO(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new CO(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (TO = Ap(`query-engine`)),
      (EO = class {
        async evalQuery(e, t, n, r) {
          TO.enabled &&
            TO.debug(`Query:
${ih(e)}`);
          let i = new oD(e, t, r),
            a = new wO(e, t, i),
            o = Pp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = st(s) ? await s : s,
            u = Pp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Pp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(U(a, r)));
          }
          let h = Lp(Rp(m, r), r);
          return n ? [st(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new oD(t, n, r);
          return Lp(
            Rp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return U(t);
              }),
            ),
            void 0,
            !1,
          );
        }
      }),
      (DO = cy.QueryCache),
      (OO = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = dy === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = sh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Am(n) ?? `user-visible`,
              o = Am(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Vn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              dy !== void 0 &&
                this.serializedCache !== void 0 &&
                !Cm(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && dy.set(DO, r, e);
            }
            return i.value;
          }
          let a = new Uv(() => {
            let i = Cm(r),
              a = i ? void 0 : gn(DO, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                mn(e, r);
              }
            return dy !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), dy.set(DO, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (kO = new OO(new EO())),
      (AO = `style[data-framer-breakpoint-css]`),
      (jO = `page`),
      (MO = Symbol(`cycle`)),
      (FO = (() => {
        let e = f(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (IO = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (LO = { inputRange: [], outputRange: [] }),
      (RO = (e) =>
        p.forwardRef((t, n) => {
          if (q.current() === q.canvas) return D(e, { ...t, ref: n });
          let [r, i] = ul(t, IO),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [m, h] = p.useState(o),
            g = p.useRef(!1),
            _ = Zs(n);
          tc(
            _,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  p.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } },
          );
          let v = Pt(),
            y = p.useRef(v);
          return (
            p.useEffect(() => {
              if (f || !u) return;
              y.current !== v && ((y.current = v), p.startTransition(() => h(o)));
              let e = {},
                t;
              return se((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Kh(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(ae(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  p.startTransition(() => {
                    h(l);
                  }));
              });
            }, [v, s, c, u, t.variant, f, d]),
            Il(f, (e) => p.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Ft(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              p.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? D(e, { ...i, variant: m ?? t.variant, ref: _ })
              : D(e, { ...i })
          );
        })),
      (zO = p.createContext(void 0)),
      (BO = () => p.useContext(zO)),
      (VO = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (HO = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (UO = VO),
      (WO = `System Default`),
      (GO = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(UO)) {
            let n = UO[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(HO)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: WO, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Jh(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`,
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (KO = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (qO = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (YO = `Variable`),
      (XO = `BI;`),
      (ZO = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = $h(n),
              u = rg(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: ng(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? sg(u, e.font.faceDescriptors?.weight) : og(c),
                style: lg(c),
                cssFamilyName: eg(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = og(e.variant),
                r = og(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = cg(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : QO[t],
            style: lg(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          z(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ng(t)
            ? t?.map((e) => {
                if (ig(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${XO}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(XO)) return null;
          let [t, n] = e.split(XO);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (QO = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      ($O = Ap(`custom-font-source`)),
      (ek = `CUSTOM;`),
      (tk = `CUSTOMV2;`),
      (nk = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = yg(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = $h(i),
              f = Sg(i),
              p = vg(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: ng(u),
                variationAxes: rg(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = _g(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              $O.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Cg(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && xg(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = wg(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${tk}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${ek}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            z(mg(e), `Selector must be a custom font selector`),
            gg(e) ? e.slice(ek.length) : e.slice(tk.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          z(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ng(t)
            ? t?.map((e) => {
                if (ig(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (rk = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (ik = `FS;`),
      (ak = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (ok = Object.keys(ak)),
      (sk = RegExp(`^(?:${[...ok, `italic`, `variable`].join(`|`)})`, `u`)),
      (ck = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = ok.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && ak[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(ik)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(ik, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${ik}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${ik}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Tg(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!sk.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = ug(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: kg(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: eg(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Eg(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (lk = `Inter`),
      (uk = `FR;`),
      (dk = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (fk = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(uk) && !e.startsWith(lk)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && dk[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${uk}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await Eg(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (pk = `GF;`),
      (mk = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(pk)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(pk, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${pk}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${pk}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await Tg(`google`),
            a = [],
            o = jg(t, (e) => e.family),
            s = jg(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(qh),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (qh(e) ? ug(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Ag(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: eg(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Eg(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (hk = ke(xv(), 1)),
      (gk = 5e3),
      (_k = 3),
      (vk = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (yk = new Map()),
      (bk = new Map()),
      (xk = new Map()),
      (Sk = (e, t) => Pg(e, t)),
      (Ck = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (wk = class {
        enabled = !1;
        bySelector = new qO();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new GO()),
            (this.google = new mk()),
            (this.fontshare = new ck()),
            (this.framer = new fk()),
            (this.custom = new nk()),
            (this.builtIn = new ZO()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await zx.fetchGoogleFontsList(),
                n = await Lg(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = zx.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Lg(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = zx.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Lg(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!mg(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            mg(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Ig({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = mk.parseVariant(n.variant);
            if (qh(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: tg(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = ck.parseVariant(r.variant);
            if (qh(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: tg(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = ZO.parseVariant(i.variant);
            if (qh(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: tg(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return fk.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = pg(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Pn() || (await Fg(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await Sk({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await Sk({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Ig({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              B(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(ik)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Qi(`Failed to load Fontshare fonts:`, e);
              }),
            ),
            e.some((e) => e.startsWith(pk)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Qi(`Failed to load Google fonts:`, e);
                }),
              ),
            e.some((e) => e.startsWith(XO)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Qi(`Failed to load built-in fonts:`, e);
                }),
              ),
            e.some(mg) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Qi(`Failed to load custom fonts:`, e);
                }),
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1,
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !Tk.loadedSelectors.has(e));
          n.length !== 0 &&
            (await Tk.loadWebFontsFromSelectors(n),
            n.every((e) => Tk.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (z(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (Tk = new wk()),
      (Ek = (e) => e.target.value),
      (Dk = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (Ok = A(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: s,
            required: c,
            step: l,
            style: u,
            type: f,
            maxLength: p,
            value: m,
            defaultValue: h,
            autofillEnabled: g,
            onChange: _,
            onBlur: v,
            onInvalid: y,
            onFocus: b,
            onValid: x,
            onClear: S,
            ...C
          } = e,
          w = Hg(m ?? h, f),
          [T, E, O] = Vg(w ?? ``, !0, _),
          k = Si(w),
          ee = d(() => {
            (E(``), S && j(() => S()));
          }, [S, E]),
          A = Qo(x, y, O, v, b),
          ne = d(
            (e) => {
              e.target === e.currentTarget && k.current?.focus();
            },
            [k],
          );
        if (f === `hidden`) return D(M.input, { type: `hidden`, name: i, defaultValue: h });
        let re = g === !1 ? Dk : void 0,
          ie = !!T,
          ae = !!S && ie,
          oe = cl($, pS, r, f === `text` && kk, f === `textarea` && Ak);
        return te(M.div, {
          ref: t,
          onClick: ne,
          style: u,
          className: oe,
          ...C,
          children: [
            f === `textarea`
              ? D(M.textarea, {
                  ref: k,
                  ...re,
                  ...A,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: fS,
                  value: T,
                  maxLength: p,
                })
              : D(M.input, {
                  ref: k,
                  ...re,
                  ...A,
                  type: f,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: cl(fS, !ie && mS),
                  value: T,
                  min: o,
                  max: a,
                  step: l,
                  maxLength: p,
                }),
            ae &&
              D(`button`, {
                type: `button`,
                className: jk,
                onClick: ee,
                "aria-label": `Clear`,
                children: D(Ug, {}),
              }),
          ],
        });
      })),
      ($ = `framer-form-text-input`),
      (kk = `framer-form-text-input-type`),
      (Ak = `framer-form-textarea-input-type`),
      (jk = `framer-form-text-input-clear`),
      (Mk = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (Nk = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (Pk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (Fk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (Ik = sS(
        Ok,
        [
          ...gS,
          ...yS,
          ..._S,
          X(`.${pS}`, {
            boxShadow: X.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: X.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: X.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: X.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: X.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: X.variable(`--framer-input-corner-shape`),
            background: X.variable(`--framer-input-background`),
            transition: X.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          X(`.${$} .${fS}::placeholder`, { color: X.variable(`--framer-input-placeholder-color`) }),
          X(`.${$}`, {
            display: `flex`,
            alignItems: `center`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${fS}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          X(`.${$}.${Ak}`, { padding: 0 }),
          X(`.${$}.${Ak} textarea.${fS}`, {
            width: `100%`,
            padding: X.variable(`--framer-input-padding`),
          }),
          X(`.${$} .${fS}[type="date"], .${$} .${fS}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          X(`.${$} .${fS}::-webkit-date-and-time-value`, { textAlign: `start` }),
          X(`.${$} textarea`, {
            display: `flex`,
            resize: X.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          X(`.${$} textarea::-webkit-resizer`, { background: `no-repeat ${ct(Mk)}` }),
          X(`.${$}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ct(Nk)}` }),
          X(`.${$} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          X(`.${$} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          X(`.${$} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          X(`.${$} .${fS}::-webkit-datetime-edit`, {
            height: X.variable(`--framer-input-font-line-height`),
          }),
          X(`.${$} .${fS}.${mS}::-webkit-datetime-edit`, {
            color: X.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": X.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          X(`.${$}.${kk}::before`, {
            content: X.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${wS}px`,
            height: `${wS}px`,
            marginRight: `${CS}px`,
            ...TS,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: X.variable(`--framer-input-icon-mask-image`),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${fS}[type="date"]::before, .${$} .${fS}[type="time"]::before`, {
            ...ES,
            paddingLeft: `${SS}px`,
            maskPosition: `${SS}px center`,
            backgroundPosition: `${SS}px center`,
          }),
          X(`.${$} .${fS}[type="date"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, ct(Pk)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${fS}[type="time"]::before`, {
            maskImage: X.variable(`--framer-input-icon-mask-image`, ct(Fk)),
            backgroundImage: X.variable(`--framer-input-icon-image`),
          }),
          X(`.${$} .${fS}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: X.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${wS}px`,
            height: `100%`,
          }),
          X(`.${$}:focus-within, .${$}.${hS}`, {
            boxShadow: X.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: X.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`,
            ),
          }),
          X(`.${$}:focus-within::after, .${$}.${hS}::after`, {
            borderColor: X.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`,
            ),
            borderStyle: X.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`,
            ),
            borderWidth: X.variable(`--framer-input-focused-border-width`, vS),
          }),
          X(`.${jk}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${wS}px`,
            height: `${wS}px`,
            marginLeft: `${CS}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: X.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          X(`.${jk}:hover, .${jk}:focus-visible`, {
            color: X.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`,
      )),
      (Lk = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (Rk = { opacity: 0 }),
      (zk = { opacity: 1 }),
      (Bk = e_(
        p.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: s,
              ...l
            } = e,
            d = { ...s },
            f = u(() => Wo(n), [n]),
            [m, h] = c();
          p.useEffect(() => {
            if (!n?.src || !o || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                j(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, f]);
          let g = f ?? m;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            te(Go(e.as), {
              ...l,
              style: d,
              ref: t,
              draggable: a,
              children: [n && D(po, { image: n, alt: i, draggable: a }), r],
            })
          );
        }),
      )),
      (Vk = p.memo(function ({
        trackCount: e,
        rowGap: t,
        parentIsDataRepeater: n = !1,
        itemsOrder: r,
        children: i,
      }) {
        let a = r_(i, n);
        r?.length && (a = n_(a, r));
        let o = i_(e, a),
          s = a_(t);
        return o.map((e, t) => D(`div`, { style: s, children: e }, o_(t)));
      })),
      (Hk = (e) =>
        A(function (
          {
            columnMasonryLayoutEnabled: t,
            trackCount: n = 1,
            rowGap: r,
            parentIsDataRepeater: i,
            itemsOrder: a,
            children: o,
            style: s,
            ...c
          },
          l,
        ) {
          return t
            ? D(e, {
                ref: l,
                style: { ...s, gridTemplateColumns: `repeat(${n}, 1fr)` },
                ...c,
                children: D(Vk, {
                  trackCount: n,
                  rowGap: r,
                  parentIsDataRepeater: i,
                  itemsOrder: a,
                  children: o,
                }),
              })
            : D(e, { ref: l, style: s, ...c, children: o });
        })),
      (Wk = !An() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (Gk =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (Kk = `{{ text-placeholder }}`),
      (qk = `rich-text-wrapper`),
      (Jk = ss(
        A(function (e, n) {
          let {
              id: r,
              name: i,
              html: o,
              htmlFromDesign: s,
              text: c,
              textFromDesign: d,
              fonts: f = [],
              width: p,
              height: m,
              left: h,
              right: g,
              top: _,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: C,
              rotation: w = 0,
              verticalAlignment: T = `top`,
              isEditable: E = !1,
              environment: O = q.current,
              withExternalLayout: k = !1,
              positionSticky: ee,
              positionStickyTop: te,
              positionStickyRight: A,
              positionStickyBottom: ne,
              positionStickyLeft: re,
              __htmlStructure: j,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: se,
              children: ce,
              ...le
            } = e,
            ue = Lo(),
            de = ps(e),
            fe = t(null),
            pe = n ?? fe,
            { navigate: me, getRoute: he } = jt(),
            ge = Nt();
          (tr(e.preload ?? []), ys(e, pe));
          let _e = l(XS),
            ve = Eu(),
            N = c,
            ye = ae ?? r;
          if (ye && oe) {
            let e = oe[ye];
            typeof e == `string` && (N = e);
          }
          let be = ``;
          if (N) {
            let e = l_(N);
            be = j ? j.replace(Kk, e) : `<p>${e}</p>`;
          } else if (o) be = o;
          else if (d) {
            let e = l_(d);
            be = j ? j.replace(Kk, e) : `<p>${e}</p>`;
          } else s && (be = s);
          let xe = Sd(),
            Se = u(() => (ve || !he || !ge ? be : u_(be, he, ge, xe)), [be, he, ge, xe]);
          if (
            (a(() => {
              let e = pe.current;
              if (e === null) return;
              function t(e) {
                let t = gd(e.target, pe.current);
                Ln(e) ||
                  !me ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Mu(me, t, xe) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [me, xe]),
            p_(f, ie, pe),
            !S)
          )
            return null;
          let Ce = E && O() === q.canvas,
            P = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: f_(T),
              opacity: Ce ? 0 : C,
              flexShrink: 0,
            },
            we = q.hasRestrictions(),
            Te = Po(e, ue || 0, !1),
            Ee = se && (p === `auto` || m === `auto`),
            De =
              e.transformTemplate || !Te || !we || ie || Ee
                ? (e.transformTemplate ?? fs(y))
                : void 0;
          if (!k) {
            if (Te && we && !Ee) {
              let e = ex.getNumber(w).toFixed(4);
              ((P.transform = `translate(${Te.x}px, ${Te.y}px) rotate(${e}deg)`),
                (P.width = Te.width),
                (P.minWidth = Te.width),
                (P.height = Te.height));
            } else
              ((P.left = h),
                (P.right = g),
                (P.top = _),
                (P.bottom = v),
                (P.width = p),
                (P.height = m),
                (P.rotate = w));
            ee
              ? (!ve || _e) &&
                ((P.position = `sticky`),
                (P.willChange = `transform`),
                (P.top = te),
                (P.right = A),
                (P.bottom = ne),
                (P.left = re))
              : ve && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`);
          }
          return (
            il(e, P),
            tl(e, P),
            Object.assign(P, e.style),
            D(M.div, {
              id: r,
              ref: pe,
              ...le,
              style: P,
              layoutId: de,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: cl(b, x, qk),
              transformTemplate: De,
              dangerouslySetInnerHTML: { __html: Se },
            })
          );
        }),
      )),
      (Yk = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (Xk = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`,
      )),
      (Zk = A(function (e, t) {
        return D(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Qk = M.create(Zk)),
      ($k = A(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return D(Qk, {
          ...r,
          ref: i,
          viewBox: t,
          children: D(M.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (eA = []),
      (tA = `RichTextContainer`),
      (nA = A(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: d,
            center: f,
            children: p,
            environment: m = q.current,
            fonts: h = eA,
            height: g,
            isEditable: _ = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: T,
            right: E,
            rotation: O = 0,
            style: k,
            _initialStyle: ee,
            stylesPresetsClassNames: te,
            text: A,
            top: ne,
            verticalAlignment: re = `top`,
            visible: j = !0,
            width: ie,
            withExternalLayout: ae = !1,
            viewBox: oe,
            viewBoxScale: M = 1,
            effect: se,
            ...ce
          } = e,
          le = Lo(),
          ue = m(),
          de = ue === q.canvas,
          fe = de || ue === q.export,
          pe = l(XS),
          me = ps(e),
          he = t(null),
          ge = n ?? he;
        (ys(e, ge), p_(h, r, ge));
        let _e = S_(se, ge),
          ve = u(() => {
            if (p) return A_(p, te, A, s, void 0, _e.getTokenizer());
          }, [p, te, A, s, _e]);
        if (!j) return null;
        let N = { opacity: _ && de ? 0 : b },
          ye = f_(re);
        ye !== AS.justifyContent && (N.justifyContent = ye);
        let be = {},
          xe = q.hasRestrictions(),
          Se = Po(e, le || 0, !1),
          Ce = o && (ie === `auto` || g === `auto`),
          P =
            e.transformTemplate || !Se || !xe || r || Ce ? (e.transformTemplate ?? fs(f)) : void 0;
        (ae ||
          (Se && xe && !Ce
            ? ((be.x = Se.x + (L(k?.x) ? k.x : 0)),
              (be.y = Se.y + (L(k?.y) ? k.y : 0)),
              (be.left = 0),
              (be.top = 0),
              (N.rotate = ex.getNumber(O)),
              (N.width = Se.width),
              (N.minWidth = Se.width),
              (N.height = Se.height))
            : ((N.left = v),
              (N.right = E),
              (N.top = ne),
              (N.bottom = d),
              (N.width = ie),
              (N.height = g),
              (N.rotate = O)),
          x
            ? (!fe || pe) &&
              ((N.position = `sticky`),
              (N.willChange = `transform`),
              (N.top = T),
              (N.right = w),
              (N.bottom = S),
              (N.left = C))
            : de && (e.positionFixed || e.positionAbsolute) && (N.position = `absolute`)),
          il(e, N),
          tl(e, N),
          Object.assign(N, ee, k, be),
          me && (ce.layout = `preserve-aspect`));
        let we = Go(e.as),
          Te = ce[`data-framer-name`] ?? y,
          Ee = de ? D_(Mx(ce)) : ce;
        return I(e.viewBox)
          ? e.as === void 0
            ? D($k, {
                ...Ee,
                ref: ge,
                style: N,
                layoutId: me,
                viewBox: oe,
                viewBoxScale: M,
                transformTemplate: P,
                "data-framer-name": Te,
                "data-framer-component-type": tA,
                children: ve,
              })
            : D(we, {
                ...Ee,
                ref: ge,
                style: N,
                layoutId: me,
                transformTemplate: P,
                "data-framer-name": Te,
                "data-framer-component-type": tA,
                children: D($k, {
                  viewBox: oe,
                  viewBoxScale: M,
                  style: { width: `100%`, height: `100%` },
                  children: ve,
                }),
              })
          : D(we, {
              ...Ee,
              ref: ge,
              style: N,
              layoutId: me,
              transformTemplate: P,
              "data-framer-name": Te,
              "data-framer-component-type": tA,
              children: ve,
            });
      })),
      (rA = ss(
        A(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (I(a)) {
            !r.stylesPresetsClassName &&
              R(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [I(t) ? `html` : `htmlFromDesign`]: a };
            return D(Jk, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && I(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`,
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return D(nA, { ...r, ref: i, children: k(a) ? a : void 0 });
        }),
      )),
      (iA = `framer/asset-reference,`),
      (aA = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = U_(t);
        return D(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: D(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c,
          ),
        });
      }),
      (oA = jn()),
      (sA = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (cA = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (lA = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(iC(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = W_(e);
            (s &&
              (t && G_(s, n),
              (s.id = n),
              (o = X_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          oA && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = cA),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          oA && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new sA(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i,
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !oA) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        oA && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${cA}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (uA = new lA()),
      (dA = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (fA = A(function (e, t) {
        let n = Lo(),
          r = ps(e),
          i = p.useRef(null),
          a = t ?? i,
          o = BO();
        return (
          ys(e, i),
          D(mA, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (pA = 5e4),
      (mA = class e extends rC {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...rC.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Po(e, e.parentSize || 0);
        }
        container = p.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Po(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (uA.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || ev(this.container, this.props);
        }
        componentWillUnmount() {
          (uA.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Kx.isImageObject(t) &&
            Kx.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            ws(this.svgElement, `fill`, null, !1),
            ev(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = ex.getNumber(r);
          if (
            ((e.opacity = V(this.props.opacity) ? this.props.opacity : 1), q.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              jo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = wx;
            if (l === q.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: _,
            requiresOverflowVisible: v,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            T = {};
          (this.collectLayout(w, T),
            $c(this.props, w),
            il(this.props, w),
            rC.applyWillChange(this.props, w, !1));
          let E = null;
          if (typeof r == `string` || K.isColorObject(r)) {
            let e = K.isColorObject(r) ? r.initialValue || K.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (dC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${dC.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = F_(t, x);
            E = D(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: D(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  D(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t),
                ),
              }),
            });
          } else if (pC.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${pC.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = I_(t, x);
            E = D(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: D(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  D(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t),
                ),
              }),
            });
          } else if (Kx.isImageObject(r)) {
            let e = V_(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (E = D(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: D(`defs`, { children: D(aA, { ...e }) }),
              })));
          }
          let O = { "data-framer-component-type": `SVG` },
            k = !S;
          k && Object.assign(O, ls(this.props.center));
          let ee =
              !v &&
              !E &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < pA &&
              !Z_(i) &&
              !Q_(i),
            A = null;
          if (ee)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = ct(i)),
              uA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = uA.subscribe(i, !m, e, v);
            (uA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              $_(w) && (w.overflow = `hidden`),
              (A = te(y, {
                children: [
                  E,
                  D(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: T,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Kx.isImageObject(r) ? r.src : ``,
                  ),
                ],
              })));
          }
          let ne = Go(this.props.as),
            { href: re, target: j, rel: ie, onClick: ae, onTap: oe } = this.props,
            M = s || c;
          return D(ne, {
            ...O,
            ...b,
            layoutId: l,
            transformTemplate: k ? fs(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: M ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": M ? void 0 : `true`,
            onTap: oe,
            onClick: ae,
            href: re,
            target: j,
            rel: ie,
            children: A,
          });
        }
      }),
      (hA = ss(fA)),
      (gA = 1e3),
      (_A = `explicitInter`),
      (Ue.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = qe(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  gt as $,
  hA as A,
  zt as At,
  gw as B,
  Iy as Bt,
  BT as C,
  Za as Ct,
  Fu as D,
  Eh as Dt,
  q as E,
  ll as Et,
  lS as F,
  Hk as Ft,
  iv as G,
  _w as H,
  cl as I,
  Ww as It,
  lh as J,
  tv as K,
  Tk as L,
  Sl as Lt,
  nv as M,
  Uh as Mt,
  Xc as N,
  sS as Nt,
  ZE as O,
  Oh as Ot,
  JS as P,
  Wh as Pt,
  vA as Q,
  gv as R,
  fv as Rt,
  Op as S,
  Eu as St,
  EO as T,
  Zi as Tt,
  oS as U,
  vw as V,
  rv as W,
  Ii as X,
  dy as Y,
  pt as Z,
  IT as _,
  Nt as _t,
  cT as a,
  kO as at,
  Jb as b,
  _h as bt,
  rw as c,
  pv as ct,
  bE as d,
  uA as dt,
  Pv as et,
  Ik as f,
  Ci as ft,
  kT as g,
  Bt as gt,
  Bk as h,
  Zl as ht,
  qw as i,
  Xi as it,
  lT as j,
  jt,
  rA as k,
  ch as kt,
  Ja as l,
  md as lt,
  LT as m,
  oi as mt,
  _d as n,
  bT as nt,
  qC as o,
  xh as ot,
  sw as p,
  ph as pt,
  Zc as q,
  Xl as r,
  sl as rt,
  tw as s,
  mv as st,
  pd as t,
  Di as tt,
  fd as u,
  Zw as ut,
  Uv as v,
  Cu as vt,
  fw as w,
  $n as wt,
  or as x,
  ic as xt,
  tE as y,
  wh as yt,
  yw as z,
  RO as zt,
};
//# sourceMappingURL=framer.B0qnvVVY.mjs.map
