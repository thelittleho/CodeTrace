import{c as d,l as i}from"./index-BCfC3Yqx.js";/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=d("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=d("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);let a=null,e=null;async function k(n){if(!a){const[t,{markedHighlight:r},u,{default:g}]=await Promise.all([i(()=>import("./marked.esm-Bx--z0lx.js"),[]),i(()=>import("./index-C6O5mKp1.js"),[]),i(()=>import("./index-Co_pucoo.js"),[]),i(()=>import("./index-BdpFVF2I.js"),[])]);a=t.marked||t,e=u.default||u;const s=new a.Renderer;s.link=(h,o,l)=>{const _=o?` title="${o}"`:"";return`<a href="${h}"${_} target="_blank" rel="noopener noreferrer">${l}</a>`},a.use(r({emptyLangClass:"hljs",langPrefix:"hljs language-",highlight(h,o){const l=e.getLanguage(o)?o:"plaintext";return e.highlight(h,{language:l}).value}}),g({throwOnError:!1,nonStandard:!0}),{renderer:s}),a.setOptions({breaks:!0})}return a(n||"")}async function y(n,t){if(!e){const r=await i(()=>import("./index-Co_pucoo.js"),[]);e=r.default||r}try{return t&&e.getLanguage(t)?e.highlight(n,{language:t}).value:e.highlightAuto(n).value}catch(r){return console.error("Highlight.js error:",r),n}}export{p as M,m as S,y as h,k as r};
