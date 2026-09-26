import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { T as t, l as n, s as r, v as i } from "./react.CV_3rBxD.mjs";
import { C as a } from "./motion.CdSRWwto.mjs";
import { I as o, L as s, N as c, Nt as l, Q as u, o as d } from "./framer.B0qnvVVY.mjs";
var f,
  p,
  m,
  h = e(() => {
    (u(),
      s.loadFonts([]),
      (f = [{ explicitInter: !0, fonts: [] }]),
      (p = [
        `.framer-Dbitq .framer-styles-preset-fsrzda:not(.rich-text-wrapper), .framer-Dbitq .framer-styles-preset-fsrzda.rich-text-wrapper a { --framer-link-current-text-color: var(--token-440156fa-50ac-4faf-baf1-398af31f7753, #966106); --framer-link-hover-text-color: var(--token-440156fa-50ac-4faf-baf1-398af31f7753, #966106); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-3ff1c3af-d0e9-4f21-8434-380760732dd4, #545454); --framer-link-text-decoration: none; }`,
      ]),
      (m = `framer-Dbitq`));
  }),
  g,
  _,
  v,
  y,
  b = e(() => {
    (r(),
      u(),
      t(),
      (g = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 11.999 10.799 L 7.199 22.799 M 9.568 17.485 C 12.265 18.681 15.432 17.739 17.036 15.263 C 18.64 12.786 18.206 9.512 16.012 7.539 C 13.819 5.566 10.516 5.481 8.224 7.338 C 5.931 9.195 5.329 12.443 6.803 14.999 M 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 Z" fill="transparent" height="24px" id="xaNwPios7" transform="translate(2 2)" width="24px"><path d="M 5.999 4.799 L 1.199 16.799 M 3.568 11.485 C 6.265 12.681 9.432 11.739 11.036 9.263 C 12.64 6.786 12.206 3.512 10.012 1.539 C 7.819 -0.434 4.516 -0.519 2.224 1.338 C -0.069 3.195 -0.671 6.443 0.803 8.999" fill="transparent" height="16.798531055450436px" id="RL2MWD9JJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(6 6)" width="12.000550368926694px"/><path d="M 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 Z" fill="transparent" height="24px" id="sqllFKagl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="24px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (_ = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (v = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (y = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = v(e);
          return n(_, {
            ...l,
            className: o(`framer-JSCZt`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-JSCZt { -webkit-mask: ${g}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${g}; width: 28px; }`,
        ],
        `framer-JSCZt`,
      )),
      (y.displayName = `Pinterest`),
      c(y, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  }),
  x,
  S,
  C,
  w,
  T = e(() => {
    (r(),
      u(),
      t(),
      (x = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 0 12.5 C 0 6.608 0 3.661 1.83 1.83 C 3.661 0 6.607 0 12.5 0 C 18.392 0 21.339 0 23.17 1.83 C 25 3.661 25 6.607 25 12.5 C 25 18.392 25 21.339 23.17 23.17 C 21.338 25 18.393 25 12.5 25 C 6.608 25 3.661 25 1.83 23.17 C 0 21.338 0 18.393 0 12.5 Z M 18.421 12.5 C 18.421 15.77 15.77 18.421 12.5 18.421 C 9.23 18.421 6.579 15.77 6.579 12.5 C 6.579 9.23 9.23 6.579 12.5 6.579 C 15.77 6.579 18.421 9.23 18.421 12.5 Z M 19.75 5.263 L 19.737 5.263" fill="transparent" height="25px" id="yCh_tCBJR" transform="translate(2 2)" width="25px"><path d="M 0 12.5 C 0 6.608 0 3.661 1.83 1.83 C 3.661 0 6.607 0 12.5 0 C 18.392 0 21.339 0 23.17 1.83 C 25 3.661 25 6.607 25 12.5 C 25 18.392 25 21.339 23.17 23.17 C 21.338 25 18.393 25 12.5 25 C 6.608 25 3.661 25 1.83 23.17 C 0 21.338 0 18.393 0 12.5 Z" fill="transparent" height="25px" id="jBxu99Xrd" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="25px"/><path d="M 11.842 5.921 C 11.842 9.191 9.191 11.842 5.921 11.842 C 2.651 11.842 0 9.191 0 5.921 C 0 2.651 2.651 0 5.921 0 C 9.191 0 11.842 2.651 11.842 5.921 Z" fill="transparent" height="11.842105263157894px" id="liWKpjmec" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(6.579 6.579)" width="11.842105263157464px"/><path d="M 0.013 0 L 0 0" fill="transparent" height="1px" id="YiPfIpXhO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(19.737 5.263)" width="1px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (S = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (C = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (w = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = C(e);
          return n(S, {
            ...l,
            className: o(`framer-wqq0z`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-wqq0z { -webkit-mask: ${x}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${x}; width: 28px; }`,
        ],
        `framer-wqq0z`,
      )),
      (w.displayName = `Instagram`),
      c(w, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  }),
  E,
  D,
  O,
  k,
  A = e(() => {
    (r(),
      u(),
      t(),
      (E = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 0 21 L 8.806 12.194 M 21 0 L 12.194 8.806 M 12.194 8.806 L 5.833 0 L 0 0 L 8.806 12.194 M 12.194 8.806 L 21 21 L 15.167 21 L 8.806 12.194" fill="transparent" height="20.999999618238235px" id="ne74OjRwQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(3 3)" width="20.999999618238235px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (D = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (O = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (k = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = O(e);
          return n(D, {
            ...l,
            className: o(`framer-hDM89`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-hDM89 { -webkit-mask: ${E}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${E}; width: 28px; }`,
        ],
        `framer-hDM89`,
      )),
      (k.displayName = `X(twitter)`),
      c(k, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  }),
  j,
  M,
  N,
  P,
  F = e(() => {
    (r(),
      u(),
      t(),
      (j = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 13 0 C 5.82 0 0 5.82 0 13 C 0 20.18 5.82 26 13 26 C 20.18 26 26 20.18 26 13 C 25.992 5.824 20.176 0.008 13 0 Z M 13.765 24.445 L 13.765 15.804 L 17.078 15.804 C 17.501 15.804 17.843 15.462 17.843 15.039 C 17.843 14.617 17.501 14.275 17.078 14.275 L 13.765 14.275 L 13.765 10.961 C 13.765 9.694 14.792 8.667 16.059 8.667 L 18.098 8.667 C 18.52 8.667 18.863 8.324 18.863 7.902 C 18.863 7.48 18.52 7.137 18.098 7.137 L 16.059 7.137 C 13.947 7.137 12.235 8.849 12.235 10.961 L 12.235 14.275 L 8.922 14.275 C 8.499 14.275 8.157 14.617 8.157 15.039 C 8.157 15.462 8.499 15.804 8.922 15.804 L 12.235 15.804 L 12.235 24.445 C 6.063 24.033 1.329 18.8 1.536 12.617 C 1.742 6.435 6.814 1.529 13 1.529 C 19.186 1.529 24.258 6.435 24.464 12.617 C 24.671 18.8 19.937 24.033 13.765 24.445 Z" fill="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" height="26px" id="OwnYKwCEz" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="0.2" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(1 1)" width="26px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (M = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (N = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (P = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = N(e);
          return n(M, {
            ...l,
            className: o(`framer-bhSD7`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-bhSD7 { -webkit-mask: ${j}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${j}; width: 28px; }`,
        ],
        `framer-bhSD7`,
      )),
      (P.displayName = `Facebook`),
      c(P, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  }),
  I,
  L,
  R,
  z,
  B = e(() => {
    (r(),
      u(),
      t(),
      (I = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g d="M 6.158 10.263 L 6.158 19.842 M 11.632 14.368 L 11.632 19.842 M 11.632 14.368 C 11.632 12.101 13.47 10.263 15.737 10.263 C 18.004 10.263 19.842 12.101 19.842 14.368 L 19.842 19.842 M 11.632 14.368 L 11.632 10.263 M 6.17 6.158 L 6.158 6.158 M 0 13 C 0 6.872 0 3.807 1.903 1.903 C 3.807 0 6.871 0 13 0 C 19.128 0 22.193 0 24.097 1.903 C 26 3.807 26 6.871 26 13 C 26 19.128 26 22.193 24.097 24.097 C 22.192 26 19.129 26 13 26 C 6.872 26 3.807 26 1.903 24.097 C 0 22.192 0 19.129 0 13 Z" fill="transparent" height="26px" id="KUBW_FKIG" transform="translate(1 1)" width="26px"><path d="M 0 0 L 0 9.579 M 5.474 4.105 L 5.474 9.579 M 5.474 4.105 C 5.474 1.838 7.312 0 9.579 0 C 11.846 0 13.684 1.838 13.684 4.105 L 13.684 9.579 M 5.474 4.105 L 5.474 0" fill="transparent" height="9.578947443711131px" id="l_tf9sVd1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(6.158 10.263)" width="13.68421062670268px"/><path d="M 0.012 0 L 0 0" fill="transparent" height="1px" id="UhrKB_UvW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(6.158 6.158)" width="1px"/><path d="M 0 13 C 0 6.872 0 3.807 1.903 1.903 C 3.807 0 6.871 0 13 0 C 19.128 0 22.193 0 24.097 1.903 C 26 3.807 26 6.871 26 13 C 26 19.128 26 22.193 24.097 24.097 C 22.192 26 19.129 26 13 26 C 6.872 26 3.807 26 1.903 24.097 C 0 22.192 0 19.129 0 13 Z" fill="transparent" height="26px" id="KEUVNqbJi" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" width="26px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (L = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (R = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (z = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = R(e);
          return n(L, {
            ...l,
            className: o(`framer-sEZ5A`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-sEZ5A { -webkit-mask: ${I}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${I}; width: 28px; }`,
        ],
        `framer-sEZ5A`,
      )),
      (z.displayName = `Linkedin`),
      c(z, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  }),
  V,
  H,
  U,
  W,
  G = e(() => {
    (r(),
      u(),
      t(),
      (V = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M 9.811 2.139 L 10.866 4.029 C 11.816 5.735 11.435 7.971 9.936 9.471 C 9.936 9.471 8.116 11.289 11.415 14.586 C 14.709 17.88 16.527 16.065 16.529 16.065 C 18.029 14.565 20.266 14.183 21.971 15.134 L 23.861 16.19 C 26.437 17.627 26.74 21.238 24.477 23.503 C 23.117 24.861 21.449 25.921 19.608 25.989 C 16.508 26.108 11.241 25.323 5.958 20.042 C 0.677 14.759 -0.108 9.492 0.011 6.392 C 0.081 4.55 1.139 2.883 2.497 1.523 C 4.762 -0.741 8.373 -0.437 9.81 2.141 Z" fill="transparent" height="26px" id="NiQokuqii" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--frkg9v, var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)))" transform="translate(1 1)" width="26px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (H = i((e, t) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? n(a.div, { ...s, layoutId: i, ref: t }) : n(`div`, { ...s, ref: t });
      })),
      (U = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mRgjGDEhU:
          e ??
          i.mRgjGDEhU ??
          `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255))`,
      })),
      (W = l(
        i(function (e, t) {
          let { style: r, className: i, layoutId: a, variant: s, mRgjGDEhU: c, ...l } = U(e);
          return n(H, {
            ...l,
            className: o(`framer-CAMbD`, i),
            layoutId: a,
            ref: t,
            style: { "--frkg9v": c, ...r },
          });
        }),
        [
          `.framer-CAMbD { -webkit-mask: ${V}; aspect-ratio: 1; background-color: var(--frkg9v); mask: ${V}; width: 28px; }`,
        ],
        `framer-CAMbD`,
      )),
      (W.displayName = `Phone 2`),
      c(W, {
        mRgjGDEhU: {
          defaultValue: `var(--token-5a4774fe-2cf6-474c-bc43-61e46252e746, rgb(255, 255, 255)) /* {"name":"White color"} */`,
          description: `Click here to edit the color`,
          hidden: !1,
          title: `Color`,
          type: d.Color,
        },
      }));
  });
export {
  P as a,
  A as c,
  y as d,
  b as f,
  h as g,
  f as h,
  B as i,
  w as l,
  p as m,
  G as n,
  F as o,
  m as p,
  z as r,
  k as s,
  W as t,
  T as u,
};
//# sourceMappingURL=VvmuhjOg3.CnhC2qnN.mjs.map
