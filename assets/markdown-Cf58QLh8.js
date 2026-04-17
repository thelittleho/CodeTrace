import{c as r,k as a}from"./index-0YT-7xUq.js";/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=r("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);let e=null,t=null;async function c(o){if(!e){const[h,{markedHighlight:n},l]=await Promise.all([a(()=>import("./marked.esm-Bx--z0lx.js"),[]),a(()=>import("./index-C6O5mKp1.js"),[]),a(()=>import("./index-Co_pucoo.js"),[])]);e=h.marked,t=l.default,e.use(n({emptyLangClass:"hljs",langPrefix:"hljs language-",highlight(s,i){const d=t.getLanguage(i)?i:"plaintext";return t.highlight(s,{language:d}).value}})),e.setOptions({breaks:!0})}return e(o||"")}async function p(o,h){return t||(t=(await a(()=>import("./index-Co_pucoo.js"),[])).default),t.highlightAuto(o).value}export{_ as M,g as S,p as h,c as r};
