import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  L as i,
  N as a,
  P as o,
  T as s,
  V as c,
  _ as l,
  l as u,
  s as d,
} from "./react.CV_3rBxD.mjs";
import { P as ee, b as f, t as p } from "./motion.CdSRWwto.mjs";
import { E as m, N as h, Q as g, o as _, xt as v } from "./framer.B0qnvVVY.mjs";
var y,
  b,
  x,
  S = e(() => {
    (g(),
      (y = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (b = {
        ...y,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (x = {
        onClick: { type: _.EventHandler },
        onMouseEnter: { type: _.EventHandler },
        onMouseLeave: { type: _.EventHandler },
      }),
      _.Number,
      _.Boolean,
      _.String,
      _.Enum);
  });
function C(e, t) {
  return T(!0, e, t);
}
function w(e, t) {
  return T(!1, e, t);
}
function T(e, t, n = !0) {
  let i = v();
  r(() => {
    n && i === e && t();
  }, [i]);
}
var E = e(() => {
    (g(), s());
  }),
  D = e(() => {
    s();
  }),
  O = e(() => {
    g();
  }),
  k = e(() => {
    g();
  }),
  te = e(() => {
    s();
  }),
  A = e(() => {
    g();
  }),
  j,
  M,
  N = e(() => {
    (n(),
      s(),
      (j = () => {
        if (c !== void 0) {
          let e = c.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (M = () => a(() => j(), [])));
  }),
  P = e(() => {
    (s(), k());
  }),
  F = e(() => {
    (s(), g(), k(), D());
  }),
  I = e(() => {
    (g(), s(), S());
  });
function L() {
  return a(() => m.current(), []);
}
function R() {
  return a(() => m.current() === m.canvas, []);
}
var z = e(() => {
    (s(), g());
  }),
  B = e(() => {
    s();
  });
function V(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return a(() => (n ? `${r}px ${i}px ${o}px ${s}px` : `${t}px`), [t, n, r, i, o, s]);
}
var H,
  U = e(() => {
    (s(),
      g(),
      (H = {
        borderRadius: {
          title: `Radius`,
          type: _.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      _.FusedNumber);
  }),
  W = e(() => {
    (S(), E(), D(), O(), k(), te(), A(), N(), P(), F(), I(), z(), B(), U());
  });
function G(e) {
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
function K(e) {
  let t = G(e);
  return u(X, { ...t });
}
function ne(e) {
  let n = v(),
    r = t(!1),
    i = t(!1),
    a = o((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: o(() => {
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
    pause: o(() => {
      !e.current || r.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function re({ playingProp: e, muted: t, loop: n, playsinline: r, controls: a }) {
  let [o] = i(e),
    [s, c] = i(!1);
  e !== o && !s && c(!0);
  let l = o && t && n && r && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function q(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function J(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(q).join(` `);
}
var ie,
  Y,
  ae,
  X,
  Z,
  Q = e(() => {
    (d(),
      g(),
      p(),
      W(),
      s(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((ie ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Y ||= {})),
      (ae = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (X = l(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: i,
            srcFile: o = ``,
            posterEnabled: s = !1,
            controls: c = !1,
            playing: l = !0,
            loop: d = !0,
            muted: p = !0,
            playsinline: h = !0,
            restartOnEnter: g = !1,
            objectFit: _ = `cover`,
            backgroundColor: v = `rgba(0,0,0,0)`,
            radius: y = 0,
            volume: b = 25,
            startTime: x = 0,
            poster: S,
            playing: T,
            progress: E,
            onSeeked: D,
            onPause: O,
            onPlay: k,
            onEnd: te,
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: N,
            onMouseDown: P,
            onMouseUp: F,
          } = e,
          I = t(),
          z = M(),
          B = t(null),
          H = t(null),
          U = R(),
          W = L(),
          G = U || W === m.export,
          K = V(e),
          q = G
            ? `no-autoplay`
            : re({ playingProp: T, muted: p, loop: d, playsinline: h, controls: c }),
          J = G ? !0 : ee(I),
          ie = !G && ee(I, { margin: `10%`, once: !0 }),
          Y = x === 100 ? 99.9 : x,
          { play: X, pause: Z, setProgress: Q, isPlaying: $ } = ne(I);
        (r(() => {
          G || (q !== `on-viewport` && (T ? X() : Z()));
        }, [q, T]),
          r(() => {
            G || (J && T && q !== `no-autoplay` && X(), q === `on-viewport` && Z());
          }, [q, J, T]),
          r(() => {
            !U || S || s || Y || !I.current || (I.current.currentTime = 0.01);
          }, [s, S, Y]));
        let oe = t(!1);
        (r(() => {
          if (!oe.current) {
            oe.current = !0;
            return;
          }
          let e = f(E) ? E.get() : (E ?? 0) * 0.01;
          Q((e ?? 0) || (Y ?? 0) / 100);
        }, [Y, o, i, E]),
          r(() => {
            if (f(E)) return E.on(`change`, (e) => Q(e));
          }, [E]),
          C(() => {
            B.current !== null && I.current && ((!H && d) || !B.current) && X();
          }),
          w(() => {
            I.current && ((H.current = I.current.ended), (B.current = I.current.paused), Z());
          }));
        let se = a(() => {
          if (n === `URL`) return i + ``;
          if (n === `Upload`) return o + ``;
        }, [n, o, i, Y]);
        return (
          r(() => {
            z && I.current && q === `on-mount` && setTimeout(() => X(), 50);
          }, []),
          r(() => {
            I.current && !p && (I.current.volume = (b ?? 0) / 100);
          }, [b]),
          u(`video`, {
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: N,
            onMouseDown: P,
            onMouseUp: F,
            src: se,
            loop: d,
            ref: I,
            onSeeked: (e) => D?.(e),
            onPause: (e) => O?.(e),
            onPlay: (e) => k?.(e),
            onEnded: (e) => te?.(e),
            autoPlay: $.current || q === `on-mount` || (T && q === `on-viewport` && J),
            preload: $.current
              ? `auto`
              : G && !S
                ? `metadata`
                : q !== `on-mount` && !ie
                  ? `none`
                  : `metadata`,
            poster:
              s && !o && i === ae
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : s && S
                  ? S
                  : void 0,
            onLoadedData: () => {
              let e = I.current;
              e &&
                (e.currentTime < 0.3 && Y > 0 && Q((Y ?? 0) * 0.01),
                ($.current || q === `on-mount` || (T && q === `on-viewport` && J)) && X());
            },
            controls: c,
            muted: G ? !0 : p,
            playsInline: h,
            style: {
              cursor: A ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: K,
              display: `block`,
              objectFit: _,
              backgroundColor: v,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (K.displayName = `Video`),
      (Z = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      h(K, {
        srcType: {
          type: _.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: _.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: _.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        ...H,
        loop: { type: _.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        posterEnabled: {
          type: _.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
          defaultValue: !0,
        },
        poster: {
          type: _.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        controls: {
          type: _.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
          hiddenWhenUnset: !0,
        },
        muted: {
          type: _.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        objectFit: {
          type: _.Enum,
          title: `Fit`,
          options: Z,
          optionTitles: Z.map(J),
          hiddenWhenUnset: !0,
        },
        playing: {
          type: _.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hiddenWhenUnset: !0,
        },
        backgroundColor: { type: _.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: {
          title: `Start Time`,
          type: _.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
          hiddenWhenUnset: !0,
        },
        volume: {
          type: _.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
          hiddenWhenUnset: !0,
        },
        onEnd: { type: _.EventHandler },
        onSeeked: { type: _.EventHandler },
        onPause: { type: _.EventHandler },
        onPlay: { type: _.EventHandler },
        ...x,
      }));
  });
export {
  b as _,
  U as a,
  R as c,
  M as d,
  E as f,
  x as g,
  y as h,
  H as i,
  L as l,
  w as m,
  Q as n,
  V as o,
  C as p,
  W as r,
  z as s,
  K as t,
  N as u,
  S as v,
};
//# sourceMappingURL=Video.U_4p6n4p.mjs.map
