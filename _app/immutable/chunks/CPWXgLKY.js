import{$ as p,a0 as S,a1 as D,a2 as I,a3 as m,a4 as c,a5 as R,a6 as L,a7 as u,a8 as O,a9 as V,aa as H,ab as Y,ac as $,ad as C,ae as M,af as P,i as E,B as j,c as k,v as B,G}from"./CnDeBq6b.js";import{b as W,r as N,h}from"./-I5texk6.js";import{c as q}from"./ud8kQJ12.js";const z=["touchstart","touchmove"];function F(a){return z.includes(a)}function X(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function J(a,e){return b(a,e)}function Z(a,e){p(),e.intro=e.intro??!1;const t=e.target,_=E,l=u;try{for(var r=S(t);r&&(r.nodeType!==8||r.data!==D);)r=I(r);if(!r)throw m;c(!0),R(r),L();const d=b(a,{...e,anchor:r});if(u===null||u.nodeType!==8||u.data!==O)throw V(),m;return c(!1),d}catch(d){if(d===m)return e.recover===!1&&H(),p(),Y(t),c(!1),J(a,e);throw d}finally{c(_),R(l)}}const i=new Map;function b(a,{target:e,anchor:t,props:_={},events:l,context:r,intro:d=!0}){p();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y($(W)),N.add(y);var g=void 0,A=C(()=>{var o=t??e.appendChild(M());return P(()=>{if(r){j({});var s=k;s.c=r}l&&(_.$$events=l),E&&q(o,null),g=a(o,_)||{},E&&(B.nodes_end=u),r&&G()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}N.delete(y),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(g,A),g}let w=new WeakMap;function x(a,e){const t=w.get(a);return t?(w.delete(a),t(e)):Promise.resolve()}export{Z as h,J as m,X as s,x as u};
