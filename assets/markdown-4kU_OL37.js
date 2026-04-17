import{c as l,k as i}from"./index-DxvizljB.js";/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=l("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);let h=null,t=null;async function c(r){if(!h){const[e,{markedHighlight:a},n]=await Promise.all([i(()=>import("./marked.esm-Bx--z0lx.js"),[]),i(()=>import("./index-C6O5mKp1.js"),[]),i(()=>import("./index-Co_pucoo.js"),[])]);h=e.marked||e,t=n.default||n,h.use(a({emptyLangClass:"hljs",langPrefix:"hljs language-",highlight(u,o){const s=t.getLanguage(o)?o:"plaintext";return t.highlight(u,{language:s}).value}})),h.setOptions({breaks:!0})}return h(r||"")}async function p(r,e){if(!t){const a=await i(()=>import("./index-Co_pucoo.js"),[]);t=a.default||a}try{return e&&t.getLanguage(e)?t.highlight(r,{language:e}).value:t.highlightAuto(r).value}catch(a){return console.error("Highlight.js error:",a),r}}export{d as M,_ as S,p as h,c as r};
