import{c as g,l as h}from"./index-BFI7g45i.js";/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=g("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=g("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);let a=null,e=null;async function k(n){if(!a){const[t,{markedHighlight:r},s]=await Promise.all([h(()=>import("./marked.esm-Bx--z0lx.js"),[]),h(()=>import("./index-C6O5mKp1.js"),[]),h(()=>import("./index-Co_pucoo.js"),[])]);a=t.marked||t,e=s.default||s;const u=new a.Renderer;u.link=(i,o,l)=>{const d=o?` title="${o}"`:"";return`<a href="${i}"${d} target="_blank" rel="noopener noreferrer">${l}</a>`},a.use(r({emptyLangClass:"hljs",langPrefix:"hljs language-",highlight(i,o){const l=e.getLanguage(o)?o:"plaintext";return e.highlight(i,{language:l}).value}}),{renderer:u}),a.setOptions({breaks:!0})}return a(n||"")}async function m(n,t){if(!e){const r=await h(()=>import("./index-Co_pucoo.js"),[]);e=r.default||r}try{return t&&e.getLanguage(t)?e.highlight(n,{language:t}).value:e.highlightAuto(n).value}catch(r){return console.error("Highlight.js error:",r),n}}export{_ as M,p as S,m as h,k as r};
