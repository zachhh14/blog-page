import{aw as f,O as _,ax as y,v as b,ay as P,az as S,aA as q,x as B}from"./CnDeBq6b.js";let w=!1;function T(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const a of r.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function E(r){var t=y,a=b;f(null),_(null);try{return r()}finally{f(t),_(a)}}function M(r,t,a,n=a){r.addEventListener(t,()=>E(a));const i=r.__on_r;i?r.__on_r=()=>{i(),n(!0)}:r.__on_r=()=>n(!0),T()}const W=new Set,m=new Set;function z(r,t,a,n={}){function i(e){if(n.capture||A.call(t,e),!e.cancelBubble)return E(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?S(()=>{t.addEventListener(r,i,n)}):t.addEventListener(r,i,n),i}function N(r,t,a,n,i){var e={capture:n,passive:i},o=z(r,t,a,e);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,o,e)})}function j(r){for(var t=0;t<r.length;t++)W.add(r[t]);for(var a of m)a(r)}function A(r){var g;var t=this,a=t.ownerDocument,n=r.type,i=((g=r.composedPath)==null?void 0:g.call(r))||[],e=i[0]||r.target,o=0,v=r.__root;if(v){var l=i.indexOf(v);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var p=i.indexOf(t);if(p===-1)return;l<=p&&(o=l)}if(e=i[o]||r.target,e!==t){q(r,"currentTarget",{configurable:!0,get(){return e||a}});var L=y,x=b;f(null),_(null);try{for(var s,h=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var u=e["__"+n];if(u!==void 0&&!e.disabled)if(B(u)){var[k,...O]=u;k.apply(e,[r,...O])}else u.call(e,r)}catch(c){s?h.push(c):s=c}if(r.cancelBubble||d===t||d===null)break;e=d}if(s){for(let c of h)queueMicrotask(()=>{throw c});throw s}}finally{r.__root=t,delete r.currentTarget,f(L),_(x)}}}export{T as a,W as b,j as d,N as e,A as h,M as l,m as r};
