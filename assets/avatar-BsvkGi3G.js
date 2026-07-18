import{c,a as d}from"./index-BZl3xclY.js";import{j as o,A as g,g as v,h as b}from"./radix-vendor-CWSu2obP.js";import{r}from"./react-vendor-fiWpuzWv.js";import{d as w,b as N,c as k,a as C}from"./motion-vendor-CGYqegNT.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=c("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=c("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=c("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=c("SquareKanban",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function P({value:e,decimals:a=0,prefix:t="",suffix:l="",className:f,format:u=!1}){const s=r.useRef(null),n=w(s,{once:!0,margin:"-40px"}),i=N(),p=k(0),y=C(p,{stiffness:90,damping:22,mass:1});r.useEffect(()=>{n&&p.set(e)},[n,e,p]),r.useEffect(()=>{if(i){s.current&&(s.current.textContent=m(e));return}return y.on("change",h=>{s.current&&(s.current.textContent=m(h))})},[y,i,e,a,t,l,u]);function m(x){const h=u?x.toLocaleString("en-US",{minimumFractionDigits:a,maximumFractionDigits:a}):x.toFixed(a);return`${t}${h}${l}`}return o.jsx("span",{ref:s,className:f,children:m(0)})}const M=r.forwardRef(({className:e,onMouseMove:a,children:t,...l},f)=>{const u=s=>{const n=s.currentTarget,i=n.getBoundingClientRect();n.style.setProperty("--x",`${s.clientX-i.left}px`),n.style.setProperty("--y",`${s.clientY-i.top}px`),a?.(s)};return o.jsx("div",{ref:f,onMouseMove:u,className:d("spotlight group relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-card transition-all duration-300 ease-out-quick hover:border-primary/25 hover:shadow-elevated",e),...l,children:t})});M.displayName="SpotlightCard";const j=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("rounded-xl border border-border bg-card text-card-foreground shadow-card",e),...a}));j.displayName="Card";const R=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("flex flex-col space-y-1.5 p-6",e),...a}));R.displayName="CardHeader";const A=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("text-lg font-semibold leading-none tracking-tight",e),...a}));A.displayName="CardTitle";const S=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("text-sm text-muted-foreground",e),...a}));S.displayName="CardDescription";const q=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("p-6 pt-0",e),...a}));q.displayName="CardContent";const $=r.forwardRef(({className:e,...a},t)=>o.jsx("div",{ref:t,className:d("flex items-center p-6 pt-0",e),...a}));$.displayName="CardFooter";const F=r.forwardRef(({className:e,...a},t)=>o.jsx(g,{ref:t,className:d("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full",e),...a}));F.displayName=g.displayName;const V=r.forwardRef(({className:e,...a},t)=>o.jsx(b,{ref:t,className:d("aspect-square h-full w-full object-cover",e),...a}));V.displayName=b.displayName;const B=r.forwardRef(({className:e,...a},t)=>o.jsx(v,{ref:t,className:d("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground",e),...a}));B.displayName=v.displayName;export{U as A,z as B,j as C,T as M,K as S,L as U,P as a,M as b,F as c,B as d,R as e,A as f,q as g};
