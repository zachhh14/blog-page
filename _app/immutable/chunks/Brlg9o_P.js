import{M as y,_ as F,S as M,$ as Y,Z as p,a0 as U,N as T,a1 as $,a2 as x,a3 as L,a4 as z,D as B,B as l,a5 as G,a6 as Z,z as D,a7 as H,a8 as K,a9 as V,aa as j,K as J,ab as Q}from"./BaZMwfK4.js";import{p as W}from"./b3U-dJQ6.js";let c=!1;function X(r){var a=c;try{return c=!1,[r(),c]}finally{c=a}}function C(r){for(var a=T,n=T;a!==null&&!(a.f&($|x));)a=a.parent;try{return L(a),r()}finally{L(n)}}function ae(r,a,n,v){var h;var I=(n&G)!==0,d=!p||(n&U)!==0,o=(n&Z)!==0,N=(n&Q)!==0,R=!1,i;o?[i,R]=X(()=>r[a]):i=r[a];var q=M in r||Y in r,_=o&&(((h=y(r,a))==null?void 0:h.set)??(q&&a in r&&(e=>r[a]=e)))||void 0,t=v,P=!0,S=!1,O=()=>(S=!0,P&&(P=!1,N?t=D(v):t=v),t);i===void 0&&v!==void 0&&(_&&d&&H(),i=O(),_&&_(i));var u;if(d)u=()=>{var e=r[a];return e===void 0?O():(P=!0,S=!1,e)};else{var g=C(()=>(I?B:z)(()=>r[a]));g.f|=F,u=()=>{var e=l(g);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&K))return u;if(_){var w=r.$$legacy;return function(e,f){return arguments.length>0?((!d||!f||w||R)&&_(f?u():e),e):u()}}var E=!1,A=!1,b=V(i),s=C(()=>B(()=>{var e=u(),f=l(b);return E?(E=!1,A=!0,f):(A=!1,b.v=e)}));return I||(s.equals=j),function(e,f){if(arguments.length>0){const m=f?l(s):d&&o?W(e):e;return s.equals(m)||(E=!0,J(b,m),S&&t!==void 0&&(t=m),D(()=>l(s))),e}return l(s)}}export{ae as p};
