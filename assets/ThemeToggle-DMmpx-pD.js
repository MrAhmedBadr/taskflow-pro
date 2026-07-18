import{j as t}from"./radix-vendor-CWSu2obP.js";import{c as s,g as o,r as m,B as c}from"./index-DbH8LGM5.js";import{A as h,m as l}from"./motion-vendor-CGYqegNT.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function x({className:i}){const n=o(a=>a.theme),r=o(a=>a.toggle),e=m(n)==="dark";return t.jsx(c,{variant:"ghost",size:"icon",onClick:r,"aria-label":`Switch to ${e?"light":"dark"} mode`,className:i,children:t.jsx(h,{mode:"wait",initial:!1,children:t.jsx(l.span,{initial:{y:-12,opacity:0,rotate:-30},animate:{y:0,opacity:1,rotate:0},exit:{y:12,opacity:0,rotate:30},transition:{duration:.2},className:"flex",children:e?t.jsx(p,{className:"size-5"}):t.jsx(d,{className:"size-5"})},e?"moon":"sun")})})}export{x as T};
