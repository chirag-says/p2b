import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  H as i,
  L as a,
  N as o,
  T as s,
  c,
  l,
  s as u,
  u as d,
  y as f,
} from "./react.CV_3rBxD.mjs";
import { C as p, t as m } from "./motion.CdSRWwto.mjs";
import { Ct as h, N as g, Q as _, o as v } from "./framer.B0qnvVVY.mjs";
function y(e) {
  let {
      eyeColor: n,
      pupilColor: s,
      eyeSize: u,
      pupilSize: m,
      eyeSpacing: g,
      trackingSpeed: _,
      trackingRange: v,
      eyeCount: y,
      enableBlinking: b,
      blinkInterval: x,
      style: S,
    } = e,
    C = o(() => Math.min(m, u * 0.8), [m, u]),
    w = t(null),
    [T, E] = a({ x: 0, y: 0 }),
    [D, O] = a({ x: 0, y: 0 }),
    [k, A] = a({ x: 0, y: 0 }),
    [j, M] = a(!1),
    N = h(),
    P = o(() => ((u - C) / 2) * (v / 100), [u, C, v]);
  (r(() => {
    if (N || !b) return;
    let e = setInterval(() => {
      (f(() => M(!0)),
        setTimeout(() => {
          f(() => M(!1));
        }, 200));
    }, x);
    return () => clearInterval(e);
  }, [N, b, x]),
    r(() => {
      if (N) return;
      let e = (e) => {
        if (!w.current) return;
        let t = w.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2,
          i = e.clientX - n,
          a = e.clientY - r;
        if (y === `one`) {
          let e = Math.sqrt(i * i + a * a);
          if (e === 0) {
            f(() => A({ x: 0, y: 0 }));
            return;
          }
          let t = Math.min(e, P),
            n = Math.atan2(a, i);
          f(() => {
            A({ x: Math.cos(n) * t, y: Math.sin(n) * t });
          });
        } else {
          let e = -g / 2,
            t = g / 2,
            n = (e) => {
              let t = i - e,
                n = a,
                r = Math.sqrt(t * t + n * n);
              if (r === 0) return { x: 0, y: 0 };
              let o = Math.min(r, P),
                s = Math.atan2(n, t);
              return { x: Math.cos(s) * o, y: Math.sin(s) * o };
            },
            r = n(e),
            o = n(t);
          f(() => {
            (E(r), O(o));
          });
        }
      };
      return (i.addEventListener(`mousemove`, e), () => i.removeEventListener(`mousemove`, e));
    }, [N, g, P, y]));
  let F = o(() => (y === `one` ? u : u * 2 + g), [y, u, g]);
  return l(`div`, {
    ref: w,
    style: {
      ...S,
      backgroundColor: `transparent`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      gap: y === `two` ? g : 0,
      overflow: `visible`,
      position: `relative`,
      width: F,
      height: u,
    },
    children:
      y === `one`
        ? l(`div`, {
            style: { width: u, height: u, borderRadius: `50%`, overflow: `hidden` },
            children: l(p.div, {
              style: {
                width: u,
                height: u,
                borderRadius: `50%`,
                backgroundColor: n,
                position: `relative`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                transformOrigin: `center`,
              },
              animate: { scaleY: j ? 0.3 : 1 },
              transition: { duration: 0.1, ease: `easeInOut` },
              children: l(p.div, {
                style: {
                  width: C,
                  height: C,
                  borderRadius: `50%`,
                  backgroundColor: s,
                  opacity: +!j,
                },
                animate: { x: k.x, y: k.y },
                transition: { type: `spring`, stiffness: _, damping: 20 },
              }),
            }),
          })
        : d(c, {
            children: [
              l(`div`, {
                style: { width: u, height: u, borderRadius: `50%`, overflow: `hidden` },
                children: l(p.div, {
                  style: {
                    width: u,
                    height: u,
                    borderRadius: `50%`,
                    backgroundColor: n,
                    position: `relative`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    transformOrigin: `center`,
                  },
                  animate: { scaleY: j ? 0.3 : 1 },
                  transition: { duration: 0.1, ease: `easeInOut` },
                  children: l(p.div, {
                    style: {
                      width: C,
                      height: C,
                      borderRadius: `50%`,
                      backgroundColor: s,
                      opacity: +!j,
                    },
                    animate: { x: T.x, y: T.y },
                    transition: { type: `spring`, stiffness: _, damping: 20 },
                  }),
                }),
              }),
              l(`div`, {
                style: { width: u, height: u, borderRadius: `50%`, overflow: `hidden` },
                children: l(p.div, {
                  style: {
                    width: u,
                    height: u,
                    borderRadius: `50%`,
                    backgroundColor: n,
                    position: `relative`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    transformOrigin: `center`,
                  },
                  animate: { scaleY: j ? 0.3 : 1 },
                  transition: { duration: 0.1, ease: `easeInOut` },
                  children: l(p.div, {
                    style: {
                      width: C,
                      height: C,
                      borderRadius: `50%`,
                      backgroundColor: s,
                      opacity: +!j,
                    },
                    animate: { x: D.x, y: D.y },
                    transition: { type: `spring`, stiffness: _, damping: 20 },
                  }),
                }),
              }),
            ],
          }),
  });
}
var b = e(() => {
  (n(),
    u(),
    s(),
    _(),
    m(),
    g(y, {
      eyeCount: {
        type: v.Enum,
        title: `Eye Count`,
        options: [`one`, `two`],
        optionTitles: [`One`, `Two`],
        defaultValue: `two`,
        displaySegmentedControl: !0,
        description: `Number of eyes (1 or 2).`,
      },
      eyeColor: {
        type: v.Color,
        title: `Eye Color`,
        defaultValue: `#FFFFFF`,
        description: `Color of the eye background.`,
      },
      pupilColor: {
        type: v.Color,
        title: `Pupil Color`,
        defaultValue: `#000000`,
        description: `Color of the pupil.`,
      },
      eyeSize: {
        type: v.Number,
        title: `Eye Size`,
        defaultValue: 120,
        min: 10,
        max: 300,
        step: 1,
        unit: `px`,
        description: `Overall size of the eye shape in pixels (px).`,
      },
      pupilSize: {
        type: v.Number,
        title: `Pupil Size`,
        defaultValue: 40,
        min: 10,
        max: 100,
        step: 1,
        unit: `px`,
        description: `Size of the pupil inside the eye in pixels (px).`,
      },
      eyeSpacing: {
        type: v.Number,
        title: `Eye Gap`,
        defaultValue: 40,
        min: 0,
        max: 200,
        step: 1,
        unit: `px`,
        hidden: ({ eyeCount: e }) => e === `one`,
        description: `Space between the two eyes in pixels (px) when using 2 eyes.`,
      },
      trackingSpeed: {
        type: v.Number,
        title: `Speed`,
        defaultValue: 150,
        min: 50,
        max: 500,
        step: 10,
        unit: `stiffness`,
        description: `How quickly the eyes follow the cursor (higher stiffness = faster, unitless).`,
      },
      trackingRange: {
        type: v.Number,
        title: `Range`,
        defaultValue: 80,
        min: 0,
        max: 100,
        step: 5,
        unit: `%`,
        description: `How far the pupils can move inside the eye as a percentage (%).`,
      },
      enableBlinking: {
        type: v.Boolean,
        title: `Blinking`,
        defaultValue: !0,
        enabledTitle: `On`,
        disabledTitle: `Off`,
        description: `Turn blinking animation on or off.`,
      },
      blinkInterval: {
        type: v.Number,
        title: `Blink Interval`,
        defaultValue: 3e3,
        min: 500,
        max: 1e4,
        step: 100,
        unit: `ms`,
        hidden: ({ enableBlinking: e }) => !e,
        description: `How often the eye blinks in milliseconds (ms).`,
      },
    }));
});
export { b as n, y as t };
//# sourceMappingURL=FollowEyes.DwcgK6ML.mjs.map
