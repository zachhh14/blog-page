import{t as p,K as q,S as w,M as F,y as M,P as U,v as h,N as x,R as G,O as L,Q as V,f as y,g as l,T as Z,V as $,b as B,W as z,X as H,Y as K,Z as Q,p as W,_ as X}from"./CnDeBq6b.js";import{p as j}from"./DY8A5v-X.js";let c=!1;function J(a){var r=c;try{return c=!1,[a(),c]}finally{c=r}}function C(a){for(var r=h,n=h;r!==null&&!(r.f&(x|G));)r=r.parent;try{return L(r),a()}finally{L(n)}}function re(a,r,n,v){var T;var m=(n&Z)!==0,d=!M||(n&U)!==0,o=(n&$)!==0,D=(n&X)!==0,I=!1,i;o?[i,I]=J(()=>a[r]):i=a[r];var N=w in a||F in a,_=o&&(((T=p(a,r))==null?void 0:T.set)??(N&&r in a&&(e=>a[r]=e)))||void 0,t=v,P=!0,S=!1,O=()=>(S=!0,P&&(P=!1,D?t=B(v):t=v),t);i===void 0&&v!==void 0&&(_&&d&&z(),i=O(),_&&_(i));var f;if(d)f=()=>{var e=a[r];return e===void 0?O():(P=!0,S=!1,e)};else{var g=C(()=>(m?y:V)(()=>a[r]));g.f|=q,f=()=>{var e=l(g);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&H))return f;if(_){var Y=a.$$legacy;return function(e,u){return arguments.length>0?((!d||!u||Y||I)&&_(u?f():e),e):f()}}var E=!1,A=!1,R=K(i),s=C(()=>y(()=>{var e=f(),u=l(R);return E?(E=!1,A=!0,u):(A=!1,R.v=e)}));return m||(s.equals=Q),function(e,u){if(arguments.length>0){const b=u?l(s):d&&o?j(e):e;return s.equals(b)||(E=!0,W(R,b),S&&t!==void 0&&(t=b),B(()=>l(s))),e}return l(s)}}export{re as p};
