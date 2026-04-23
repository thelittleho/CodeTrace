const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NoteEditor-DLLU5xmW.js","assets/markdown-xqDM0UI-.js","assets/NoteEditor-Dpj7L23U.css","assets/GithubExplorer-BoDDzadS.js","assets/GithubExplorer-BdtmGDCU.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Se={},$r=[],Gt=()=>{},Zf=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ko=n=>n.startsWith("onUpdate:"),tt=Object.assign,$c=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wg=Object.prototype.hasOwnProperty,Te=(n,e)=>Wg.call(n,e),ne=Array.isArray,qr=n=>gi(n)==="[object Map]",ed=n=>gi(n)==="[object Set]",$u=n=>gi(n)==="[object Date]",oe=n=>typeof n=="function",$e=n=>typeof n=="string",en=n=>typeof n=="symbol",we=n=>n!==null&&typeof n=="object",td=n=>(we(n)||oe(n))&&oe(n.then)&&oe(n.catch),nd=Object.prototype.toString,gi=n=>nd.call(n),Gg=n=>gi(n).slice(8,-1),rd=n=>gi(n)==="[object Object]",qc=n=>$e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hs=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Qg=/-\w/g,Ot=Wo(n=>n.replace(Qg,e=>e.slice(1).toUpperCase())),Jg=/\B([A-Z])/g,er=Wo(n=>n.replace(Jg,"-$1").toLowerCase()),sd=Wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oa=Wo(n=>n?`on${sd(n)}`:""),Wt=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},id=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Hc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let qu;const Go=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zc(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=$e(r)?e_(r):zc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(n)||we(n))return n}const Yg=/;(?![^(]*\))/g,Xg=/:([^]+)/,Zg=/\/\*[^]*?\*\//g;function e_(n){const e={};return n.replace(Zg,"").split(Yg).forEach(t=>{if(t){const r=t.split(Xg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function dn(n){let e="";if($e(n))e=n;else if(ne(n))for(let t=0;t<n.length;t++){const r=dn(n[t]);r&&(e+=r+" ")}else if(we(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const t_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=Bc(t_);function od(n){return!!n||n===""}function r_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Kc(n[r],e[r]);return t}function Kc(n,e){if(n===e)return!0;let t=$u(n),r=$u(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=en(n),r=en(e),t||r)return n===e;if(t=ne(n),r=ne(e),t||r)return t&&r?r_(n,e):!1;if(t=we(n),r=we(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Kc(n[a],e[a]))return!1}}return String(n)===String(e)}const ad=n=>!!(n&&n.__v_isRef===!0),cn=n=>$e(n)?n:n==null?"":ne(n)||we(n)&&(n.toString===nd||!oe(n.toString))?ad(n)?cn(n.value):JSON.stringify(n,cd,2):String(n),cd=(n,e)=>ad(e)?cd(n,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[xa(r,i)+" =>"]=s,t),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xa(t))}:en(e)?xa(e):we(e)&&!ne(e)&&!rd(e)?String(e):e,xa=(n,e="")=>{var t;return en(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class s_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yt;try{return yt=this,e()}finally{yt=t}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function i_(){return yt}let Re;const Ma=new WeakSet;class ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ma.has(this)&&(Ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),fd(this);const e=Re,t=xt;Re=this,xt=!0;try{return this.fn()}finally{dd(this),Re=e,xt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qc(e);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let ud=0,zs,Ks;function hd(n,e=!1){if(n.flags|=8,e){n.next=Ks,Ks=n;return}n.next=zs,zs=n}function Wc(){ud++}function Gc(){if(--ud>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zs;){let e=zs;for(zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Qc(r),o_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function oc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ri)||(n.globalVersion=ri,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!oc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=xt;Re=n,xt=!0;try{fd(n);const s=n.fn(n._value);(e.version===0||Wt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,xt=r,dd(n),n.flags&=-3}}function Qc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Qc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function o_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xt=!0;const md=[];function vn(){md.push(xt),xt=!1}function En(){const n=md.pop();xt=n===void 0?!0:n}function Hu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let ri=0;class a_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!xt||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new a_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,gd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,ri++,this.notify(e)}notify(e){Wc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gc()}}}function gd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ac=new WeakMap,yr=Symbol(""),cc=Symbol(""),si=Symbol("");function it(n,e,t){if(xt&&Re){let r=ac.get(n);r||ac.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Jc),s.map=r,s.key=t),s.track()}}function pn(n,e,t,r,s,i){const a=ac.get(n);if(!a){ri++;return}const c=l=>{l&&l.trigger()};if(Wc(),e==="clear")a.forEach(c);else{const l=ne(n),h=l&&qc(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,g)=>{(g==="length"||g===si||!en(g)&&g>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(si)),e){case"add":l?h&&c(a.get("length")):(c(a.get(yr)),qr(n)&&c(a.get(cc)));break;case"delete":l||(c(a.get(yr)),qr(n)&&c(a.get(cc)));break;case"set":qr(n)&&c(a.get(yr));break}}Gc()}function xr(n){const e=Ee(n);return e===n?e:(it(e,"iterate",si),kt(n)?e:e.map(Ft))}function Qo(n){return it(n=Ee(n),"iterate",si),n}function zt(n,e){return Tn(n)?Xr(vr(n)?Ft(e):e):Ft(e)}const c_={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,n=>zt(this,n))},concat(...n){return xr(this).concat(...n.map(e=>ne(e)?xr(e):e))},entries(){return La(this,"entries",n=>(n[1]=zt(this,n[1]),n))},every(n,e){return an(this,"every",n,e,void 0,arguments)},filter(n,e){return an(this,"filter",n,e,t=>t.map(r=>zt(this,r)),arguments)},find(n,e){return an(this,"find",n,e,t=>zt(this,t),arguments)},findIndex(n,e){return an(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return an(this,"findLast",n,e,t=>zt(this,t),arguments)},findLastIndex(n,e){return an(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return an(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fa(this,"includes",n)},indexOf(...n){return Fa(this,"indexOf",n)},join(n){return xr(this).join(n)},lastIndexOf(...n){return Fa(this,"lastIndexOf",n)},map(n,e){return an(this,"map",n,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...e){return zu(this,"reduce",n,e)},reduceRight(n,...e){return zu(this,"reduceRight",n,e)},shift(){return xs(this,"shift")},some(n,e){return an(this,"some",n,e,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return xr(this).toReversed()},toSorted(n){return xr(this).toSorted(n)},toSpliced(...n){return xr(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return La(this,"values",n=>zt(this,n))}};function La(n,e,t){const r=Qo(n),s=r[e]();return r!==n&&!kt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const l_=Array.prototype;function an(n,e,t,r,s,i){const a=Qo(n),c=a!==n&&!kt(n),l=a[e];if(l!==l_[e]){const p=l.apply(n,i);return c?Ft(p):p}let h=t;a!==n&&(c?h=function(p,g){return t.call(this,zt(n,p),g,n)}:t.length>2&&(h=function(p,g){return t.call(this,p,g,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function zu(n,e,t,r){const s=Qo(n),i=s!==n&&!kt(n);let a=t,c=!1;s!==n&&(i?(c=r.length===0,a=function(h,d,p){return c&&(c=!1,h=zt(n,h)),t.call(this,h,zt(n,d),p,n)}):t.length>3&&(a=function(h,d,p){return t.call(this,h,d,p,n)}));const l=s[e](a,...r);return c?zt(n,l):l}function Fa(n,e,t){const r=Ee(n);it(r,"iterate",si);const s=r[e](...t);return(s===-1||s===!1)&&el(t[0])?(t[0]=Ee(t[0]),r[e](...t)):s}function xs(n,e,t=[]){vn(),Wc();const r=Ee(n)[e].apply(n,t);return Gc(),En(),r}const u_=Bc("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(en));function h_(n){en(n)||(n=String(n));const e=Ee(this);return it(e,"has",n),e.hasOwnProperty(n)}class yd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?T_:Id:i?Td:Ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let l;if(a&&(l=c_[t]))return l;if(t==="hasOwnProperty")return h_}const c=Reflect.get(e,t,ct(e)?e:r);if((en(t)?_d.has(t):u_(t))||(s||it(e,"get",t),i))return c;if(ct(c)){const l=a&&qc(t)?c:c.value;return s&&we(l)?uc(l):l}return we(c)?s?uc(c):Xc(c):c}}class vd extends yd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ne(e)&&qc(t);if(!this._isShallow){const h=Tn(i);if(!kt(r)&&!Tn(r)&&(i=Ee(i),r=Ee(r)),!a&&ct(i)&&!ct(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Te(e,t),l=Reflect.set(e,t,r,ct(e)?e:s);return e===Ee(s)&&(c?Wt(r,i)&&pn(e,"set",t,r):pn(e,"add",t,r)),l}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&pn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!en(t)||!_d.has(t))&&it(e,"has",t),r}ownKeys(e){return it(e,"iterate",ne(e)?"length":yr),Reflect.ownKeys(e)}}class f_ extends yd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const d_=new vd,p_=new f_,m_=new vd(!0);const lc=n=>n,$i=n=>Reflect.getPrototypeOf(n);function g_(n,e,t){return function(...r){const s=this.__v_raw,i=Ee(s),a=qr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?lc:e?Xr:Ft;return!e&&it(i,"iterate",l?cc:yr),tt(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}}})}}function qi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function __(n,e){const t={get(s){const i=this.__v_raw,a=Ee(i),c=Ee(s);n||(Wt(s,c)&&it(a,"get",s),it(a,"get",c));const{has:l}=$i(a),h=e?lc:n?Xr:Ft;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&it(Ee(s),"iterate",yr),s.size},has(s){const i=this.__v_raw,a=Ee(i),c=Ee(s);return n||(Wt(s,c)&&it(a,"has",s),it(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=Ee(c),h=e?lc:n?Xr:Ft;return!n&&it(l,"iterate",yr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return tt(t,n?{add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear")}:{add(s){const i=Ee(this),a=$i(i),c=Ee(s),l=!e&&!kt(s)&&!Tn(s)?c:s;return a.has.call(i,l)||Wt(s,l)&&a.has.call(i,s)||Wt(c,l)&&a.has.call(i,c)||(i.add(l),pn(i,"add",l,l)),this},set(s,i){!e&&!kt(i)&&!Tn(i)&&(i=Ee(i));const a=Ee(this),{has:c,get:l}=$i(a);let h=c.call(a,s);h||(s=Ee(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Wt(i,d)&&pn(a,"set",s,i):pn(a,"add",s,i),this},delete(s){const i=Ee(this),{has:a,get:c}=$i(i);let l=a.call(i,s);l||(s=Ee(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&pn(i,"delete",s,void 0),h},clear(){const s=Ee(this),i=s.size!==0,a=s.clear();return i&&pn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=g_(s,n,e)}),t}function Yc(n,e){const t=__(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const y_={get:Yc(!1,!1)},v_={get:Yc(!1,!0)},E_={get:Yc(!0,!1)};const Ed=new WeakMap,Td=new WeakMap,Id=new WeakMap,T_=new WeakMap;function I_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(n){return n.__v_skip||!Object.isExtensible(n)?0:I_(Gg(n))}function Xc(n){return Tn(n)?n:Zc(n,!1,d_,y_,Ed)}function A_(n){return Zc(n,!1,m_,v_,Td)}function uc(n){return Zc(n,!0,p_,E_,Id)}function Zc(n,e,t,r,s){if(!we(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=w_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function vr(n){return Tn(n)?vr(n.__v_raw):!!(n&&n.__v_isReactive)}function Tn(n){return!!(n&&n.__v_isReadonly)}function kt(n){return!!(n&&n.__v_isShallow)}function el(n){return n?!!n.__v_raw:!1}function Ee(n){const e=n&&n.__v_raw;return e?Ee(e):n}function b_(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&id(n,"__v_skip",!0),n}const Ft=n=>we(n)?Xc(n):n,Xr=n=>we(n)?uc(n):n;function ct(n){return n?n.__v_isRef===!0:!1}function je(n){return S_(n,!1)}function S_(n,e){return ct(n)?n:new R_(n,e)}class R_{constructor(e,t){this.dep=new Jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ee(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||kt(e)||Tn(e);e=r?e:Ee(e),Wt(e,t)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function le(n){return ct(n)?n.value:n}const P_={get:(n,e,t)=>e==="__v_raw"?n:le(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ct(s)&&!ct(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function wd(n){return vr(n)?n:new Proxy(n,P_)}class C_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return pd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function k_(n,e,t=!1){let r,s;return oe(n)?r=n:(r=n.get,s=n.set),new C_(r,s,t)}const Hi={},go=new WeakMap;let fr;function V_(n,e=!1,t=fr){if(t){let r=go.get(t);r||go.set(t,r=[]),r.push(n)}}function D_(n,e,t=Se){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=G=>s?G:kt(G)||s===!1||s===0?mn(G,1):mn(G);let d,p,g,v,P=!1,C=!1;if(ct(n)?(p=()=>n.value,P=kt(n)):vr(n)?(p=()=>h(n),P=!0):ne(n)?(C=!0,P=n.some(G=>vr(G)||kt(G)),p=()=>n.map(G=>{if(ct(G))return G.value;if(vr(G))return h(G);if(oe(G))return l?l(G,2):G()})):oe(n)?e?p=l?()=>l(n,2):n:p=()=>{if(g){vn();try{g()}finally{En()}}const G=fr;fr=d;try{return l?l(n,3,[v]):n(v)}finally{fr=G}}:p=Gt,e&&s){const G=p,se=s===!0?1/0:s;p=()=>mn(G(),se)}const D=i_(),H=()=>{d.stop(),D&&D.active&&$c(D.effects,d)};if(i&&e){const G=e;e=(...se)=>{G(...se),H()}}let B=C?new Array(n.length).fill(Hi):Hi;const K=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(e){const se=d.run();if(s||P||(C?se.some((_e,w)=>Wt(_e,B[w])):Wt(se,B))){g&&g();const _e=fr;fr=d;try{const w=[se,B===Hi?void 0:C&&B[0]===Hi?[]:B,v];B=se,l?l(e,3,w):e(...w)}finally{fr=_e}}}else d.run()};return c&&c(K),d=new ld(p),d.scheduler=a?()=>a(K,!1):K,v=G=>V_(G,!1,d),g=d.onStop=()=>{const G=go.get(d);if(G){if(l)l(G,4);else for(const se of G)se();go.delete(d)}},e?r?K(!0):B=d.run():a?a(K.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function mn(n,e=1/0,t){if(e<=0||!we(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ct(n))mn(n.value,e,t);else if(ne(n))for(let r=0;r<n.length;r++)mn(n[r],e,t);else if(ed(n)||qr(n))n.forEach(r=>{mn(r,e,t)});else if(rd(n)){for(const r in n)mn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&mn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _i(n,e,t,r){try{return r?n(...r):n()}catch(s){yi(s,e,t)}}function tn(n,e,t,r){if(oe(n)){const s=_i(n,e,t,r);return s&&td(s)&&s.catch(i=>{yi(i,e,t)}),s}if(ne(n)){const s=[];for(let i=0;i<n.length;i++)s.push(tn(n[i],e,t,r));return s}}function yi(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){vn(),_i(i,null,10,[n,l,h]),En();return}}N_(n,t,s,r,a)}function N_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let qt=-1;const Hr=[];let Ln=null,Mr=0;const Ad=Promise.resolve();let _o=null;function O_(n){const e=_o||Ad;return n?e.then(this?n.bind(this):n):e}function x_(n){let e=qt+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=ii(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function tl(n){if(!(n.flags&1)){const e=ii(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=ii(t)?pt.push(n):pt.splice(x_(e),0,n),n.flags|=1,bd()}}function bd(){_o||(_o=Ad.then(Rd))}function M_(n){ne(n)?Hr.push(...n):Ln&&n.id===-1?Ln.splice(Mr+1,0,n):n.flags&1||(Hr.push(n),n.flags|=1),bd()}function Ku(n,e,t=qt+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sd(n){if(Hr.length){const e=[...new Set(Hr)].sort((t,r)=>ii(t)-ii(r));if(Hr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Mr=0;Mr<Ln.length;Mr++){const t=Ln[Mr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,Mr=0}}const ii=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rd(n){try{for(qt=0;qt<pt.length;qt++){const e=pt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<pt.length;qt++){const e=pt[qt];e&&(e.flags&=-2)}qt=-1,pt.length=0,Sd(),_o=null,(pt.length||Hr.length)&&Rd()}}let Ct=null,Pd=null;function yo(n){const e=Ct;return Ct=n,Pd=n&&n.type.__scopeId||null,e}function L_(n,e=Ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&To(-1);const i=yo(e);let a;try{a=n(...s)}finally{yo(i),r._d&&To(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ua(n,e){if(Ct===null)return n;const t=ea(Ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Se]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&mn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function ur(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(vn(),tn(l,t,8,[n.el,c,n,e]),En())}}function F_(n,e){if(at){let t=at.provides;const r=at.parent&&at.parent.provides;r===t&&(t=at.provides=Object.create(r)),t[n]=e}}function no(n,e,t=!1){const r=Fy();if(r||zr){let s=zr?zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&oe(e)?e.call(r&&r.proxy):e}}const U_=Symbol.for("v-scx"),j_=()=>no(U_);function Ws(n,e,t){return Cd(n,e,t)}function Cd(n,e,t=Se){const{immediate:r,deep:s,flush:i,once:a}=t,c=tt({},t),l=e&&r||!e&&i!=="post";let h;if(es){if(i==="sync"){const v=j_();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Gt,v.resume=Gt,v.pause=Gt,v}}const d=at;c.call=(v,P,C)=>tn(v,d,P,C);let p=!1;i==="post"?c.scheduler=v=>{_t(v,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,P)=>{P?v():tl(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const g=D_(n,e,c);return es&&(h?h.push(g):l&&g()),g}function B_(n,e,t){const r=this.proxy,s=$e(n)?n.includes(".")?kd(r,n):()=>r[n]:n.bind(r,r);let i;oe(e)?i=e:(i=e.handler,t=e);const a=vi(this),c=Cd(s,i.bind(r),t);return a(),c}function kd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const $_=Symbol("_vte"),q_=n=>n.__isTeleport,H_=Symbol("_leaveCb");function nl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,nl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function z_(n,e){return oe(n)?tt({name:n.name},e,{setup:n}):n}function rl(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const vo=new WeakMap;function Gs(n,e,t,r,s=!1){if(ne(n)){n.forEach((C,D)=>Gs(C,e&&(ne(e)?e[D]:e),t,r,s));return}if(Qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Se?c.refs={}:c.refs,p=c.setupState,g=Ee(p),v=p===Se?Zf:C=>Wu(d,C)?!1:Te(g,C),P=(C,D)=>!(D&&Wu(d,D));if(h!=null&&h!==l){if(Gu(e),$e(h))d[h]=null,v(h)&&(p[h]=null);else if(ct(h)){const C=e;P(h,C.k)&&(h.value=null),C.k&&(d[C.k]=null)}}if(oe(l))_i(l,c,12,[a,d]);else{const C=$e(l),D=ct(l);if(C||D){const H=()=>{if(n.f){const B=C?v(l)?p[l]:d[l]:P()||!n.k?l.value:d[n.k];if(s)ne(B)&&$c(B,i);else if(ne(B))B.includes(i)||B.push(i);else if(C)d[l]=[i],v(l)&&(p[l]=d[l]);else{const K=[i];P(l,n.k)&&(l.value=K),n.k&&(d[n.k]=K)}}else C?(d[l]=a,v(l)&&(p[l]=a)):D&&(P(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const B=()=>{H(),vo.delete(n)};B.id=-1,vo.set(n,B),_t(B,t)}else Gu(n),H()}}}function Gu(n){const e=vo.get(n);e&&(e.flags|=8,vo.delete(n))}const Qu=n=>n.nodeType===8;Go().requestIdleCallback;Go().cancelIdleCallback;function K_(n,e){if(Qu(n)&&n.data==="["){let t=1,r=n.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Qu(r))if(r.data==="]"){if(--t===0)break}else r.data==="["&&t++;r=r.nextSibling}}else e(n)}const Qs=n=>!!n.type.__asyncLoader;function Ju(n){oe(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:r,delay:s=200,hydrate:i,timeout:a,suspensible:c=!0,onError:l}=n;let h=null,d,p=0;const g=()=>(p++,h=null,v()),v=()=>{let P;return h||(P=h=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),l)return new Promise((D,H)=>{l(C,()=>D(g()),()=>H(C),p+1)});throw C}).then(C=>P!==h&&h?h:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),d=C,C)))};return z_({name:"AsyncComponentWrapper",__asyncLoader:v,__asyncHydrate(P,C,D){let H=!1;(C.bu||(C.bu=[])).push(()=>H=!0);const B=()=>{H||D()},K=i?()=>{const G=i(B,se=>K_(P,se));G&&(C.bum||(C.bum=[])).push(G)}:B;d?K():v().then(()=>!C.isUnmounted&&K())},get __asyncResolved(){return d},setup(){const P=at;if(rl(P),d)return()=>zi(d,P);const C=K=>{h=null,yi(K,P,13,!r)};if(c&&P.suspense||es)return v().then(K=>()=>zi(K,P)).catch(K=>(C(K),()=>r?ke(r,{error:K}):null));const D=je(!1),H=je(),B=je(!!s);return s&&setTimeout(()=>{B.value=!1},s),a!=null&&setTimeout(()=>{if(!D.value&&!H.value){const K=new Error(`Async component timed out after ${a}ms.`);C(K),H.value=K}},a),v().then(()=>{D.value=!0,P.parent&&sl(P.parent.vnode)&&P.parent.update()}).catch(K=>{C(K),H.value=K}),()=>{if(D.value&&d)return zi(d,P);if(H.value&&r)return ke(r,{error:H.value});if(t&&!B.value)return zi(t,P)}}})}function zi(n,e){const{ref:t,props:r,children:s,ce:i}=e.vnode,a=ke(n,r,s);return a.ref=t,a.ce=i,delete e.vnode.ce,a}const sl=n=>n.type.__isKeepAlive;function W_(n,e){Vd(n,"a",e)}function G_(n,e){Vd(n,"da",e)}function Vd(n,e,t=at){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Jo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)sl(s.parent.vnode)&&Q_(r,e,t,s),s=s.parent}}function Q_(n,e,t,r){const s=Jo(e,n,r,!0);Yo(()=>{$c(r[e],s)},t)}function Jo(n,e,t=at,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{vn();const c=vi(t),l=tn(e,t,n,a);return c(),En(),l});return r?s.unshift(i):s.push(i),i}}const Rn=n=>(e,t=at)=>{(!es||n==="sp")&&Jo(n,(...r)=>e(...r),t)},J_=Rn("bm"),il=Rn("m"),Y_=Rn("bu"),X_=Rn("u"),Z_=Rn("bum"),Yo=Rn("um"),ey=Rn("sp"),ty=Rn("rtg"),ny=Rn("rtc");function ry(n,e=at){Jo("ec",n,e)}const sy=Symbol.for("v-ndc");function Ki(n,e,t,r){let s;const i=t,a=ne(n);if(a||$e(n)){const c=a&&vr(n);let l=!1,h=!1;c&&(l=!kt(n),h=Tn(n),n=Qo(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Xr(Ft(n[d])):Ft(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(we(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const hc=n=>n?Yd(n)?ea(n):hc(n.parent):null,Js=tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hc(n.parent),$root:n=>hc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Nd(n),$forceUpdate:n=>n.f||(n.f=()=>{tl(n.update)}),$nextTick:n=>n.n||(n.n=O_.bind(n.proxy)),$watch:n=>B_.bind(n)}),ja=(n,e)=>n!==Se&&!n.__isScriptSetup&&Te(n,e),iy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const g=a[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(ja(r,e))return a[e]=1,r[e];if(s!==Se&&Te(s,e))return a[e]=2,s[e];if(Te(i,e))return a[e]=3,i[e];if(t!==Se&&Te(t,e))return a[e]=4,t[e];fc&&(a[e]=0)}}const h=Js[e];let d,p;if(h)return e==="$attrs"&&it(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==Se&&Te(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Te(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return ja(s,e)?(s[e]=t,!0):r!==Se&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==Se&&c[0]!=="$"&&Te(n,c)||ja(e,c)||Te(i,c)||Te(r,c)||Te(Js,c)||Te(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yu(n){return ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fc=!0;function oy(n){const e=Nd(n),t=n.proxy,r=n.ctx;fc=!1,e.beforeCreate&&Xu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:P,activated:C,deactivated:D,beforeDestroy:H,beforeUnmount:B,destroyed:K,unmounted:G,render:se,renderTracked:_e,renderTriggered:w,errorCaptured:_,serverPrefetch:T,expose:b,inheritAttrs:I,components:S,directives:E,filters:Fe}=e;if(h&&ay(h,r,null),a)for(const Ae in a){const ce=a[Ae];oe(ce)&&(r[Ae]=ce.bind(t))}if(s){const Ae=s.call(t,t);we(Ae)&&(n.data=Xc(Ae))}if(fc=!0,i)for(const Ae in i){const ce=i[Ae],Pe=oe(ce)?ce.bind(t,t):oe(ce.get)?ce.get.bind(t,t):Gt,gt=!oe(ce)&&oe(ce.set)?ce.set.bind(t):Gt,Rt=Ao({get:Pe,set:gt});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Tt=>Rt.value=Tt})}if(c)for(const Ae in c)Dd(c[Ae],r,t,Ae);if(l){const Ae=oe(l)?l.call(t):l;Reflect.ownKeys(Ae).forEach(ce=>{F_(ce,Ae[ce])})}d&&Xu(d,n,"c");function qe(Ae,ce){ne(ce)?ce.forEach(Pe=>Ae(Pe.bind(t))):ce&&Ae(ce.bind(t))}if(qe(J_,p),qe(il,g),qe(Y_,v),qe(X_,P),qe(W_,C),qe(G_,D),qe(ry,_),qe(ny,_e),qe(ty,w),qe(Z_,B),qe(Yo,G),qe(ey,T),ne(b))if(b.length){const Ae=n.exposed||(n.exposed={});b.forEach(ce=>{Object.defineProperty(Ae,ce,{get:()=>t[ce],set:Pe=>t[ce]=Pe,enumerable:!0})})}else n.exposed||(n.exposed={});se&&n.render===Gt&&(n.render=se),I!=null&&(n.inheritAttrs=I),S&&(n.components=S),E&&(n.directives=E),T&&rl(n)}function ay(n,e,t=Gt){ne(n)&&(n=dc(n));for(const r in n){const s=n[r];let i;we(s)?"default"in s?i=no(s.from||r,s.default,!0):i=no(s.from||r):i=no(s),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Xu(n,e,t){tn(ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Dd(n,e,t,r){let s=r.includes(".")?kd(t,r):()=>t[r];if($e(n)){const i=e[n];oe(i)&&Ws(s,i)}else if(oe(n))Ws(s,n.bind(t));else if(we(n))if(ne(n))n.forEach(i=>Dd(i,e,t,r));else{const i=oe(n.handler)?n.handler.bind(t):e[n.handler];oe(i)&&Ws(s,i,n)}}function Nd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Eo(l,h,a,!0)),Eo(l,e,a)),we(e)&&i.set(e,l),l}function Eo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Eo(n,i,t,!0),s&&s.forEach(a=>Eo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=cy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const cy={data:Zu,props:eh,emits:eh,methods:Fs,computed:Fs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Fs,directives:Fs,watch:uy,provide:Zu,inject:ly};function Zu(n,e){return e?n?function(){return tt(oe(n)?n.call(this,this):n,oe(e)?e.call(this,this):e)}:e:n}function ly(n,e){return Fs(dc(n),dc(e))}function dc(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Fs(n,e){return n?tt(Object.create(null),n,e):e}function eh(n,e){return n?ne(n)&&ne(e)?[...new Set([...n,...e])]:tt(Object.create(null),Yu(n),Yu(e??{})):e}function uy(n,e){if(!n)return e;if(!e)return n;const t=tt(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function Od(){return{app:null,config:{isNativeTag:Zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hy=0;function fy(n,e){return function(r,s=null){oe(r)||(r=tt({},r)),s!=null&&!we(s)&&(s=null);const i=Od(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:hy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(h,...p)):oe(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!l){const v=h._ceVNode||ke(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(v,d,g),l=!0,h._container=d,d.__vue_app__=h,ea(v.component)}},onUnmount(d){c.push(d)},unmount(){l&&(tn(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=zr;zr=h;try{return d()}finally{zr=p}}};return h}}let zr=null;const dy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ot(e)}Modifiers`]||n[`${er(e)}Modifiers`];function py(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),a=i&&dy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>$e(d)?d.trim():d)),a.number&&(s=t.map(Hc)));let c,l=r[c=Oa(e)]||r[c=Oa(Ot(e))];!l&&i&&(l=r[c=Oa(er(e))]),l&&tn(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,tn(h,n,6,s)}}const my=new WeakMap;function xd(n,e,t=!1){const r=t?my:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!oe(n)){const l=h=>{const d=xd(h,e,!0);d&&(c=!0,tt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(we(n)&&r.set(n,null),null):(ne(i)?i.forEach(l=>a[l]=null):tt(a,i),we(n)&&r.set(n,a),a)}function Xo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,er(e))||Te(n,e))}function th(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:g,setupState:v,ctx:P,inheritAttrs:C}=n,D=yo(n);let H,B;try{if(t.shapeFlag&4){const G=s||r,se=G;H=Kt(h.call(se,G,d,p,v,g,P)),B=c}else{const G=e;H=Kt(G.length>1?G(p,{attrs:c,slots:a,emit:l}):G(p,null)),B=e.props?c:gy(c)}}catch(G){Ys.length=0,yi(G,n,1),H=ke(Wn)}let K=H;if(B&&C!==!1){const G=Object.keys(B),{shapeFlag:se}=K;G.length&&se&7&&(i&&G.some(Ko)&&(B=_y(B,i)),K=Zr(K,B,!1,!0))}return t.dirs&&(K=Zr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&nl(K,t.transition),H=K,yo(D),H}const gy=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},_y=(n,e)=>{const t={};for(const r in n)(!Ko(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function yy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?nh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(Md(a,r,g)&&!Xo(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?nh(r,a,h):!0:!!a;return!1}function nh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Md(e,n,i)&&!Xo(t,i))return!0}return!1}function Md(n,e,t){const r=n[t],s=e[t];return t==="style"&&we(r)&&we(s)?!Kc(r,s):r!==s}function vy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Ld={},Fd=()=>Object.create(Ld),Ud=n=>Object.getPrototypeOf(n)===Ld;function Ey(n,e,t,r=!1){const s={},i=Fd();n.propsDefaults=Object.create(null),jd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:A_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ty(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=Ee(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Xo(n.emitsOptions,g))continue;const v=e[g];if(l)if(Te(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const P=Ot(g);s[P]=pc(l,c,P,v,n,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{jd(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=er(p))===p||!Te(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=pc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&pn(n.attrs,"set","")}function jd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let d;s&&Te(s,d=Ot(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:Xo(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ee(t),h=c||Se;for(let d=0;d<i.length;d++){const p=i[d];t[p]=pc(s,l,p,h[p],n,!Te(h,p))}}return a}function pc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&oe(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=vi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===er(t))&&(r=!0))}return r}const Iy=new WeakMap;function Bd(n,e,t=!1){const r=t?Iy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!oe(n)){const d=p=>{l=!0;const[g,v]=Bd(p,e,!0);tt(a,g),v&&c.push(...v)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return we(n)&&r.set(n,$r),$r;if(ne(i))for(let d=0;d<i.length;d++){const p=Ot(i[d]);rh(p)&&(a[p]=Se)}else if(i)for(const d in i){const p=Ot(d);if(rh(p)){const g=i[d],v=a[p]=ne(g)||oe(g)?{type:g}:tt({},g),P=v.type;let C=!1,D=!0;if(ne(P))for(let H=0;H<P.length;++H){const B=P[H],K=oe(B)&&B.name;if(K==="Boolean"){C=!0;break}else K==="String"&&(D=!1)}else C=oe(P)&&P.name==="Boolean";v[0]=C,v[1]=D,(C||Te(v,"default"))&&c.push(p)}}const h=[a,c];return we(n)&&r.set(n,h),h}function rh(n){return n[0]!=="$"&&!Hs(n)}const ol=n=>n==="_"||n==="_ctx"||n==="$stable",al=n=>ne(n)?n.map(Kt):[Kt(n)],wy=(n,e,t)=>{if(e._n)return e;const r=L_((...s)=>al(e(...s)),t);return r._c=!1,r},$d=(n,e,t)=>{const r=n._ctx;for(const s in n){if(ol(s))continue;const i=n[s];if(oe(i))e[s]=wy(s,i,r);else if(i!=null){const a=al(i);e[s]=()=>a}}},qd=(n,e)=>{const t=al(e);n.slots.default=()=>t},Hd=(n,e,t)=>{for(const r in e)(t||!ol(r))&&(n[r]=e[r])},Ay=(n,e,t)=>{const r=n.slots=Fd();if(n.vnode.shapeFlag&32){const s=e._;s?(Hd(r,e,t),t&&id(r,"_",s,!0)):$d(e,r)}else e&&qd(n,e)},by=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Se;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Hd(s,e,t):(i=!e.$stable,$d(e,s)),a=e}else e&&(qd(n,e),a={default:1});if(i)for(const c in s)!ol(c)&&a[c]==null&&delete s[c]},_t=ky;function Sy(n){return Ry(n)}function Ry(n,e){const t=Go();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=Gt,insertStaticContent:P}=n,C=(y,A,V,F=null,O=null,M=null,q=void 0,j=null,U=!!A.dynamicChildren)=>{if(y===A)return;y&&!Ms(y,A)&&(F=Cn(y),Tt(y,O,M,!0),y=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:z}=A;switch(x){case Zo:D(y,A,V,F);break;case Wn:H(y,A,V,F);break;case $a:y==null&&B(A,V,F,q);break;case mt:S(y,A,V,F,O,M,q,j,U);break;default:z&1?se(y,A,V,F,O,M,q,j,U):z&6?E(y,A,V,F,O,M,q,j,U):(z&64||z&128)&&x.process(y,A,V,F,O,M,q,j,U,sr)}Y!=null&&O?Gs(Y,y&&y.ref,M,A||y,!A):Y==null&&y&&y.ref!=null&&Gs(y.ref,null,M,y,!0)},D=(y,A,V,F)=>{if(y==null)r(A.el=c(A.children),V,F);else{const O=A.el=y.el;A.children!==y.children&&h(O,A.children)}},H=(y,A,V,F)=>{y==null?r(A.el=l(A.children||""),V,F):A.el=y.el},B=(y,A,V,F)=>{[y.el,y.anchor]=P(y.children,A,V,F,y.el,y.anchor)},K=({el:y,anchor:A},V,F)=>{let O;for(;y&&y!==A;)O=g(y),r(y,V,F),y=O;r(A,V,F)},G=({el:y,anchor:A})=>{let V;for(;y&&y!==A;)V=g(y),s(y),y=V;s(A)},se=(y,A,V,F,O,M,q,j,U)=>{if(A.type==="svg"?q="svg":A.type==="math"&&(q="mathml"),y==null)_e(A,V,F,O,M,q,j,U);else{const x=y.el&&y.el._isVueCE?y.el:null;try{x&&x._beginPatch(),T(y,A,O,M,q,j,U)}finally{x&&x._endPatch()}}},_e=(y,A,V,F,O,M,q,j)=>{let U,x;const{props:Y,shapeFlag:z,transition:J,dirs:X}=y;if(U=y.el=a(y.type,M,Y&&Y.is,Y),z&8?d(U,y.children):z&16&&_(y.children,U,null,F,O,Ba(y,M),q,j),X&&ur(y,null,F,"created"),w(U,y,y.scopeId,q,F),Y){for(const ye in Y)ye!=="value"&&!Hs(ye)&&i(U,ye,null,Y[ye],M,F);"value"in Y&&i(U,"value",null,Y.value,M),(x=Y.onVnodeBeforeMount)&&$t(x,F,y)}X&&ur(y,null,F,"beforeMount");const de=Py(O,J);de&&J.beforeEnter(U),r(U,A,V),((x=Y&&Y.onVnodeMounted)||de||X)&&_t(()=>{try{x&&$t(x,F,y),de&&J.enter(U),X&&ur(y,null,F,"mounted")}finally{}},O)},w=(y,A,V,F,O)=>{if(V&&v(y,V),F)for(let M=0;M<F.length;M++)v(y,F[M]);if(O){let M=O.subTree;if(A===M||Gd(M.type)&&(M.ssContent===A||M.ssFallback===A)){const q=O.vnode;w(y,q,q.scopeId,q.slotScopeIds,O.parent)}}},_=(y,A,V,F,O,M,q,j,U=0)=>{for(let x=U;x<y.length;x++){const Y=y[x]=j?fn(y[x]):Kt(y[x]);C(null,Y,A,V,F,O,M,q,j)}},T=(y,A,V,F,O,M,q)=>{const j=A.el=y.el;let{patchFlag:U,dynamicChildren:x,dirs:Y}=A;U|=y.patchFlag&16;const z=y.props||Se,J=A.props||Se;let X;if(V&&hr(V,!1),(X=J.onVnodeBeforeUpdate)&&$t(X,V,A,y),Y&&ur(A,y,V,"beforeUpdate"),V&&hr(V,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&d(j,""),x?b(y.dynamicChildren,x,j,V,F,Ba(A,O),M):q||ce(y,A,j,null,V,F,Ba(A,O),M,!1),U>0){if(U&16)I(j,z,J,V,O);else if(U&2&&z.class!==J.class&&i(j,"class",null,J.class,O),U&4&&i(j,"style",z.style,J.style,O),U&8){const de=A.dynamicProps;for(let ye=0;ye<de.length;ye++){const ve=de[ye],xe=z[ve],He=J[ve];(He!==xe||ve==="value")&&i(j,ve,xe,He,O,V)}}U&1&&y.children!==A.children&&d(j,A.children)}else!q&&x==null&&I(j,z,J,V,O);((X=J.onVnodeUpdated)||Y)&&_t(()=>{X&&$t(X,V,A,y),Y&&ur(A,y,V,"updated")},F)},b=(y,A,V,F,O,M,q)=>{for(let j=0;j<A.length;j++){const U=y[j],x=A[j],Y=U.el&&(U.type===mt||!Ms(U,x)||U.shapeFlag&198)?p(U.el):V;C(U,x,Y,null,F,O,M,q,!0)}},I=(y,A,V,F,O)=>{if(A!==V){if(A!==Se)for(const M in A)!Hs(M)&&!(M in V)&&i(y,M,A[M],null,O,F);for(const M in V){if(Hs(M))continue;const q=V[M],j=A[M];q!==j&&M!=="value"&&i(y,M,j,q,O,F)}"value"in V&&i(y,"value",A.value,V.value,O)}},S=(y,A,V,F,O,M,q,j,U)=>{const x=A.el=y?y.el:c(""),Y=A.anchor=y?y.anchor:c("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:X}=A;X&&(j=j?j.concat(X):X),y==null?(r(x,V,F),r(Y,V,F),_(A.children||[],V,Y,O,M,q,j,U)):z>0&&z&64&&J&&y.dynamicChildren&&y.dynamicChildren.length===J.length?(b(y.dynamicChildren,J,V,O,M,q,j),(A.key!=null||O&&A===O.subTree)&&zd(y,A,!0)):ce(y,A,V,Y,O,M,q,j,U)},E=(y,A,V,F,O,M,q,j,U)=>{A.slotScopeIds=j,y==null?A.shapeFlag&512?O.ctx.activate(A,V,F,q,U):Fe(A,V,F,O,M,q,U):ht(y,A,U)},Fe=(y,A,V,F,O,M,q)=>{const j=y.component=Ly(y,F,O);if(sl(y)&&(j.ctx.renderer=sr),Uy(j,!1,q),j.asyncDep){if(O&&O.registerDep(j,qe,q),!y.el){const U=j.subTree=ke(Wn);H(null,U,A,V),y.placeholder=U.el}}else qe(j,y,A,V,O,M,q)},ht=(y,A,V)=>{const F=A.component=y.component;if(yy(y,A,V))if(F.asyncDep&&!F.asyncResolved){Ae(F,A,V);return}else F.next=A,F.update();else A.el=y.el,F.vnode=A},qe=(y,A,V,F,O,M,q)=>{const j=()=>{if(y.isMounted){let{next:z,bu:J,u:X,parent:de,vnode:ye}=y;{const wt=Kd(y);if(wt){z&&(z.el=ye.el,Ae(y,z,q)),wt.asyncDep.then(()=>{_t(()=>{y.isUnmounted||x()},O)});return}}let ve=z,xe;hr(y,!1),z?(z.el=ye.el,Ae(y,z,q)):z=ye,J&&to(J),(xe=z.props&&z.props.onVnodeBeforeUpdate)&&$t(xe,de,z,ye),hr(y,!0);const He=th(y),It=y.subTree;y.subTree=He,C(It,He,p(It.el),Cn(It),y,O,M),z.el=He.el,ve===null&&vy(y,He.el),X&&_t(X,O),(xe=z.props&&z.props.onVnodeUpdated)&&_t(()=>$t(xe,de,z,ye),O)}else{let z;const{el:J,props:X}=A,{bm:de,m:ye,parent:ve,root:xe,type:He}=y,It=Qs(A);hr(y,!1),de&&to(de),!It&&(z=X&&X.onVnodeBeforeMount)&&$t(z,ve,A),hr(y,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(He,y.parent?y.parent.type:void 0);const wt=y.subTree=th(y);C(null,wt,V,F,y,O,M),A.el=wt.el}if(ye&&_t(ye,O),!It&&(z=X&&X.onVnodeMounted)){const wt=A;_t(()=>$t(z,ve,wt),O)}(A.shapeFlag&256||ve&&Qs(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&_t(y.a,O),y.isMounted=!0,A=V=F=null}};y.scope.on();const U=y.effect=new ld(j);y.scope.off();const x=y.update=U.run.bind(U),Y=y.job=U.runIfDirty.bind(U);Y.i=y,Y.id=y.uid,U.scheduler=()=>tl(Y),hr(y,!0),x()},Ae=(y,A,V)=>{A.component=y;const F=y.vnode.props;y.vnode=A,y.next=null,Ty(y,A.props,F,V),by(y,A.children,V),vn(),Ku(y),En()},ce=(y,A,V,F,O,M,q,j,U=!1)=>{const x=y&&y.children,Y=y?y.shapeFlag:0,z=A.children,{patchFlag:J,shapeFlag:X}=A;if(J>0){if(J&128){gt(x,z,V,F,O,M,q,j,U);return}else if(J&256){Pe(x,z,V,F,O,M,q,j,U);return}}X&8?(Y&16&&on(x,O,M),z!==x&&d(V,z)):Y&16?X&16?gt(x,z,V,F,O,M,q,j,U):on(x,O,M,!0):(Y&8&&d(V,""),X&16&&_(z,V,F,O,M,q,j,U))},Pe=(y,A,V,F,O,M,q,j,U)=>{y=y||$r,A=A||$r;const x=y.length,Y=A.length,z=Math.min(x,Y);let J;for(J=0;J<z;J++){const X=A[J]=U?fn(A[J]):Kt(A[J]);C(y[J],X,V,null,O,M,q,j,U)}x>Y?on(y,O,M,!0,!1,z):_(A,V,F,O,M,q,j,U,z)},gt=(y,A,V,F,O,M,q,j,U)=>{let x=0;const Y=A.length;let z=y.length-1,J=Y-1;for(;x<=z&&x<=J;){const X=y[x],de=A[x]=U?fn(A[x]):Kt(A[x]);if(Ms(X,de))C(X,de,V,null,O,M,q,j,U);else break;x++}for(;x<=z&&x<=J;){const X=y[z],de=A[J]=U?fn(A[J]):Kt(A[J]);if(Ms(X,de))C(X,de,V,null,O,M,q,j,U);else break;z--,J--}if(x>z){if(x<=J){const X=J+1,de=X<Y?A[X].el:F;for(;x<=J;)C(null,A[x]=U?fn(A[x]):Kt(A[x]),V,de,O,M,q,j,U),x++}}else if(x>J)for(;x<=z;)Tt(y[x],O,M,!0),x++;else{const X=x,de=x,ye=new Map;for(x=de;x<=J;x++){const Xe=A[x]=U?fn(A[x]):Kt(A[x]);Xe.key!=null&&ye.set(Xe.key,x)}let ve,xe=0;const He=J-de+1;let It=!1,wt=0;const Vt=new Array(He);for(x=0;x<He;x++)Vt[x]=0;for(x=X;x<=z;x++){const Xe=y[x];if(xe>=He){Tt(Xe,O,M,!0);continue}let Qe;if(Xe.key!=null)Qe=ye.get(Xe.key);else for(ve=de;ve<=J;ve++)if(Vt[ve-de]===0&&Ms(Xe,A[ve])){Qe=ve;break}Qe===void 0?Tt(Xe,O,M,!0):(Vt[Qe-de]=x+1,Qe>=wt?wt=Qe:It=!0,C(Xe,A[Qe],V,null,O,M,q,j,U),xe++)}const Vr=It?Cy(Vt):$r;for(ve=Vr.length-1,x=He-1;x>=0;x--){const Xe=de+x,Qe=A[Xe],Es=A[Xe+1],ir=Xe+1<Y?Es.el||Wd(Es):F;Vt[x]===0?C(null,Qe,V,ir,O,M,q,j,U):It&&(ve<0||x!==Vr[ve]?Rt(Qe,V,ir,2):ve--)}}},Rt=(y,A,V,F,O=null)=>{const{el:M,type:q,transition:j,children:U,shapeFlag:x}=y;if(x&6){Rt(y.component.subTree,A,V,F);return}if(x&128){y.suspense.move(A,V,F);return}if(x&64){q.move(y,A,V,sr);return}if(q===mt){r(M,A,V);for(let z=0;z<U.length;z++)Rt(U[z],A,V,F);r(y.anchor,A,V);return}if(q===$a){K(y,A,V);return}if(F!==2&&x&1&&j)if(F===0)j.beforeEnter(M),r(M,A,V),_t(()=>j.enter(M),O);else{const{leave:z,delayLeave:J,afterLeave:X}=j,de=()=>{y.ctx.isUnmounted?s(M):r(M,A,V)},ye=()=>{M._isLeaving&&M[H_](!0),z(M,()=>{de(),X&&X()})};J?J(M,de,ye):ye()}else r(M,A,V)},Tt=(y,A,V,F=!1,O=!1)=>{const{type:M,props:q,ref:j,children:U,dynamicChildren:x,shapeFlag:Y,patchFlag:z,dirs:J,cacheIndex:X,memo:de}=y;if(z===-2&&(O=!1),j!=null&&(vn(),Gs(j,null,V,y,!0),En()),X!=null&&(A.renderCache[X]=void 0),Y&256){A.ctx.deactivate(y);return}const ye=Y&1&&J,ve=!Qs(y);let xe;if(ve&&(xe=q&&q.onVnodeBeforeUnmount)&&$t(xe,A,y),Y&6)ys(y.component,V,F);else{if(Y&128){y.suspense.unmount(V,F);return}ye&&ur(y,null,A,"beforeUnmount"),Y&64?y.type.remove(y,A,V,sr,F):x&&!x.hasOnce&&(M!==mt||z>0&&z&64)?on(x,A,V,!1,!0):(M===mt&&z&384||!O&&Y&16)&&on(U,A,V),F&&_s(y)}const He=de!=null&&X==null;(ve&&(xe=q&&q.onVnodeUnmounted)||ye||He)&&_t(()=>{xe&&$t(xe,A,y),ye&&ur(y,null,A,"unmounted"),He&&(y.el=null)},V)},_s=y=>{const{type:A,el:V,anchor:F,transition:O}=y;if(A===mt){kr(V,F);return}if(A===$a){G(y);return}const M=()=>{s(V),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:j}=O,U=()=>q(V,M);j?j(y.el,M,U):U()}else M()},kr=(y,A)=>{let V;for(;y!==A;)V=g(y),s(y),y=V;s(A)},ys=(y,A,V)=>{const{bum:F,scope:O,job:M,subTree:q,um:j,m:U,a:x}=y;sh(U),sh(x),F&&to(F),O.stop(),M&&(M.flags|=8,Tt(q,y,A,V)),j&&_t(j,A),_t(()=>{y.isUnmounted=!0},A)},on=(y,A,V,F=!1,O=!1,M=0)=>{for(let q=M;q<y.length;q++)Tt(y[q],A,V,F,O)},Cn=y=>{if(y.shapeFlag&6)return Cn(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const A=g(y.anchor||y.el),V=A&&A[$_];return V?g(V):A};let rr=!1;const vs=(y,A,V)=>{let F;y==null?A._vnode&&(Tt(A._vnode,null,null,!0),F=A._vnode.component):C(A._vnode||null,y,A,null,null,null,V),A._vnode=y,rr||(rr=!0,Ku(F),Sd(),rr=!1)},sr={p:C,um:Tt,m:Rt,r:_s,mt:Fe,mc:_,pc:ce,pbc:b,n:Cn,o:n};return{render:vs,hydrate:void 0,createApp:fy(vs)}}function Ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Py(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zd(n,e,t=!1){const r=n.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=fn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&zd(a,c)),c.type===Zo&&(c.patchFlag===-1&&(c=s[i]=fn(c)),c.el=a.el),c.type===Wn&&!c.el&&(c.el=a.el)}}function Cy(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Kd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kd(e)}function sh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Wd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Wd(e.subTree):null}const Gd=n=>n.__isSuspense;function ky(n,e){e&&e.pendingBranch?ne(n)?e.effects.push(...n):e.effects.push(n):M_(n)}const mt=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),$a=Symbol.for("v-stc"),Ys=[];let bt=null;function ge(n=!1){Ys.push(bt=n?null:[])}function Vy(){Ys.pop(),bt=Ys[Ys.length-1]||null}let oi=1;function To(n,e=!1){oi+=n,n<0&&bt&&e&&(bt.hasOnce=!0)}function Qd(n){return n.dynamicChildren=oi>0?bt||$r:null,Vy(),oi>0&&bt&&bt.push(n),n}function De(n,e,t,r,s,i){return Qd(pe(n,e,t,r,s,i,!0))}function mr(n,e,t,r,s){return Qd(ke(n,e,t,r,s,!0))}function Io(n){return n?n.__v_isVNode===!0:!1}function Ms(n,e){return n.type===e.type&&n.key===e.key}const Jd=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$e(n)||ct(n)||oe(n)?{i:Ct,r:n,k:e,f:!!t}:n:null);function pe(n,e=null,t=null,r=0,s=null,i=n===mt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jd(e),ref:e&&ro(e),scopeId:Pd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return c?(cl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=$e(t)?8:16),oi>0&&!a&&bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&bt.push(l),l}const ke=Dy;function Dy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===sy)&&(n=Wn),Io(n)){const c=Zr(n,e,!0);return t&&cl(c,t),oi>0&&!i&&bt&&(c.shapeFlag&6?bt[bt.indexOf(n)]=c:bt.push(c)),c.patchFlag=-2,c}if(qy(n)&&(n=n.__vccOpts),e){e=Ny(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=dn(c)),we(l)&&(el(l)&&!ne(l)&&(l=tt({},l)),e.style=zc(l))}const a=$e(n)?1:Gd(n)?128:q_(n)?64:we(n)?4:oe(n)?2:0;return pe(n,e,t,r,s,a,i,!0)}function Ny(n){return n?el(n)||Ud(n)?tt({},n):n:null}function Zr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Oy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Jd(h),ref:e&&e.ref?t&&i?ne(i)?i.concat(ro(e)):[i,ro(e)]:ro(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zr(n.ssContent),ssFallback:n.ssFallback&&Zr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&nl(d,l.clone(d)),d}function Us(n=" ",e=0){return ke(Zo,null,n,e)}function Wi(n="",e=!1){return e?(ge(),mr(Wn,null,n)):ke(Wn,null,n)}function Kt(n){return n==null||typeof n=="boolean"?ke(Wn):ne(n)?ke(mt,null,n.slice()):Io(n)?fn(n):ke(Zo,null,String(n))}function fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zr(n)}function cl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ne(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),cl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ud(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Ct},t=32):(e=String(e),r&64?(t=16,e=[Us(e)]):t=8);n.children=e,n.shapeFlag|=t}function Oy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=dn([e.class,r.class]));else if(s==="style")e.style=zc([e.style,r.style]);else if(zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ne(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Ko(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function $t(n,e,t,r=null){tn(n,e,7,[t,r])}const xy=Od();let My=0;function Ly(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xy,i={uid:My++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(r,s),emitsOptions:xd(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=py.bind(null,i),n.ce&&n.ce(i),i}let at=null;const Fy=()=>at||Ct;let wo,mc;{const n=Go(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",t=>at=t),mc=e("__VUE_SSR_SETTERS__",t=>es=t)}const vi=n=>{const e=at;return wo(n),n.scope.on(),()=>{n.scope.off(),wo(e)}},ih=()=>{at&&at.scope.off(),wo(null)};function Yd(n){return n.vnode.shapeFlag&4}let es=!1;function Uy(n,e=!1,t=!1){e&&mc(e);const{props:r,children:s}=n.vnode,i=Yd(n);Ey(n,r,i,e),Ay(n,s,t||e);const a=i?jy(n,e):void 0;return e&&mc(!1),a}function jy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,iy);const{setup:r}=t;if(r){vn();const s=n.setupContext=r.length>1?$y(n):null,i=vi(n),a=_i(r,n,0,[n.props,s]),c=td(a);if(En(),i(),(c||n.sp)&&!Qs(n)&&rl(n),c){if(a.then(ih,ih),e)return a.then(l=>{oh(n,l)}).catch(l=>{yi(l,n,0)});n.asyncDep=a}else oh(n,a)}else Xd(n)}function oh(n,e,t){oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:we(e)&&(n.setupState=wd(e)),Xd(n)}function Xd(n,e,t){const r=n.type;n.render||(n.render=r.render||Gt);{const s=vi(n);vn();try{oy(n)}finally{En(),s()}}}const By={get(n,e){return it(n,"get",""),n[e]}};function $y(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,By),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wd(b_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function qy(n){return oe(n)&&"__vccOpts"in n}const Ao=(n,e)=>k_(n,e,es);function ah(n,e,t){try{To(-1);const r=arguments.length;return r===2?we(e)&&!ne(e)?Io(e)?ke(n,null,[e]):ke(n,e):ke(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Io(t)&&(t=[t]),ke(n,e,t))}finally{To(1)}}const Hy="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gc;const ch=typeof window<"u"&&window.trustedTypes;if(ch)try{gc=ch.createPolicy("vue",{createHTML:n=>n})}catch{}const Zd=gc?n=>gc.createHTML(n):n=>n,zy="http://www.w3.org/2000/svg",Ky="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,lh=ln&&ln.createElement("template"),Wy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?ln.createElementNS(zy,n):e==="mathml"?ln.createElementNS(Ky,n):t?ln.createElement(n,{is:t}):ln.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>ln.createTextNode(n),createComment:n=>ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{lh.innerHTML=Zd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=lh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gy=Symbol("_vtc");function Qy(n,e,t){const r=n[Gy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uh=Symbol("_vod"),Jy=Symbol("_vsh"),Yy=Symbol(""),Xy=/(?:^|;)\s*display\s*:/;function Zy(n,e,t){const r=n.style,s=$e(t);let i=!1;if(t&&!s){if(e)if($e(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&so(r,c,"")}else for(const a in e)t[a]==null&&so(r,a,"");for(const a in t)a==="display"&&(i=!0),so(r,a,t[a])}else if(s){if(e!==t){const a=r[Yy];a&&(t+=";"+a),r.cssText=t,i=Xy.test(t)}}else e&&n.removeAttribute("style");uh in n&&(n[uh]=i?r.display:"",n[Jy]&&(r.display="none"))}const hh=/\s*!important$/;function so(n,e,t){if(ne(t))t.forEach(r=>so(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ev(n,e);hh.test(t)?n.setProperty(er(r),t.replace(hh,""),"important"):n[r]=t}}const fh=["Webkit","Moz","ms"],qa={};function ev(n,e){const t=qa[e];if(t)return t;let r=Ot(e);if(r!=="filter"&&r in n)return qa[e]=r;r=sd(r);for(let s=0;s<fh.length;s++){const i=fh[s]+r;if(i in n)return qa[e]=i}return e}const dh="http://www.w3.org/1999/xlink";function ph(n,e,t,r,s,i=n_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(dh,e.slice(6,e.length)):n.setAttributeNS(dh,e,t):t==null||i&&!od(t)?n.removeAttribute(e):n.setAttribute(e,i?"":en(t)?String(t):t)}function mh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=od(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Lr(n,e,t,r){n.addEventListener(e,t,r)}function tv(n,e,t,r){n.removeEventListener(e,t,r)}const gh=Symbol("_vei");function nv(n,e,t,r,s=null){const i=n[gh]||(n[gh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=rv(e);if(r){const h=i[e]=ov(r,s);Lr(n,c,h,l)}else a&&(tv(n,c,a,l),i[e]=void 0)}}const _h=/(?:Once|Passive|Capture)$/;function rv(n){let e;if(_h.test(n)){e={};let r;for(;r=n.match(_h);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):er(n.slice(2)),e]}let Ha=0;const sv=Promise.resolve(),iv=()=>Ha||(sv.then(()=>Ha=0),Ha=Date.now());function ov(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;tn(av(r,t.value),e,5,[r])};return t.value=n,t.attached=iv(),t}function av(n,e){if(ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Qy(n,r,a):e==="style"?Zy(n,t,r):zo(e)?Ko(e)||nv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(n,e,r,a))?(mh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ph(n,e,r,a,i,e!=="value")):n._isVueCE&&(uv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?mh(n,Ot(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ph(n,e,r,a))};function lv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&yh(e)&&oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yh(e)&&$e(t)?!1:e in n}function uv(n,e){const t=n._def.props;if(!t)return!1;const r=Ot(e);return Array.isArray(t)?t.some(s=>Ot(s)===r):Object.keys(t).some(s=>Ot(s)===r)}const vh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ne(e)?t=>to(e,t):e};function hv(n){n.target.composing=!0}function Eh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const za=Symbol("_assign");function Th(n,e,t){return e&&(n=n.trim()),t&&(n=Hc(n)),n}const Ka={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[za]=vh(s);const i=r||s.props&&s.props.type==="number";Lr(n,e?"change":"input",a=>{a.target.composing||n[za](Th(n.value,t,i))}),(t||i)&&Lr(n,"change",()=>{n.value=Th(n.value,t,i)}),e||(Lr(n,"compositionstart",hv),Lr(n,"compositionend",Eh),Lr(n,"change",Eh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[za]=vh(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Hc(n.value):n.value,l=e??"";if(c===l)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},fv=["ctrl","shift","alt","meta"],dv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>fv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ih=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=dv[e[a]];if(c&&c(s,e))return}return n(s,...i)})},pv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=er(s.key);if(e.some(a=>a===i||pv[a]===i))return n(s)})},mv=tt({patchProp:cv},Wy);let Ah;function gv(){return Ah||(Ah=Sy(mv))}const _v=(...n)=>{const e=gv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=vv(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,yv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function yv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vv(n){return $e(n)?document.querySelector(n):n}const Ev="modulepreload",Tv=function(n){return"/CodeTrace/"+n},bh={},Sh=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Tv(l),l in bh)return;bh[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Ev,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=(n,e)=>({size:t,strokeWidth:r=2,absoluteStrokeWidth:s,color:i,class:a,...c},{attrs:l,slots:h})=>ah("svg",{...Gi,width:t||Gi.width,height:t||Gi.height,stroke:i||Gi.stroke,"stroke-width":s?Number(r)*24/Number(t):r,...l,class:["lucide",`lucide-${Iv(n)}`],...c},[...e.map(d=>ah(...d)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=Ut("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=Ut("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=Ut("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=Ut("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=Ut("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=Ut("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Ut("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=Ut("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Ut("PenLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Ut("StarIcon",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=Ut("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Nv=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Ov={class:"sidebar"},xv={class:"sidebar-tabs"},Mv={class:"input-container"},Lv={class:"problem-list"},Fv={key:0,class:"auth-message"},Uv={key:1,class:"auth-message"},jv={key:2,class:"auth-message"},Bv=["onClick"],$v={class:"problem-item-inner"},qv={class:"problem-info"},Hv={class:"problem-meta"},zv={class:"problem-id"},Kv={class:"problem-title"},Wv={key:0,class:"mini-tags"},Gv={class:"item-actions"},Qv=["onClick"],Jv=["onClick"],Yv={class:"input-container"},Xv={class:"github-search"},Zv={key:0,class:"repo-chips"},eE=["onClick"],tE={class:"github-tree"},nE={key:0,class:"auth-message"},rE={key:1,class:"auth-message"},sE={key:2},iE={key:0,class:"tree-header"},oE={class:"current-path"},aE=["onClick"],cE={class:"item-name"},lE={class:"sidebar-footer"},uE={key:0,class:"user-profile"},hE=["src"],fE={class:"user-info"},dE={class:"user-name"},pE={__name:"Sidebar",props:{activeTab:String,problems:Array,selectedId:String,currentUser:Object,isLoading:Boolean,githubIsLoading:Boolean,githubFiles:Array,githubPath:Array,githubRepo:String,favoriteRepos:Array},emits:["update:activeTab","update:selectedId","addProblem","deleteProblem","fetchRepo","toggleFavoriteRepo","navigateFolder","goBack","viewFile","login","logout"],setup(n,{emit:e}){const t=n,r=e,s=je(""),i=je(""),a=je(t.githubRepo),c=Ao(()=>{const p=i.value.toLowerCase().trim();return p?t.problems.filter(g=>g.title.toLowerCase().includes(p)||g.id.includes(p)||g.platform&&g.platform.toLowerCase().includes(p)||g.tags&&g.tags.some(v=>v.toLowerCase().includes(p))):t.problems}),l=()=>{r("addProblem",s.value),s.value=""},h=()=>{r("fetchRepo",a.value)},d=Ao(()=>t.favoriteRepos.includes(t.githubRepo));return(p,g)=>(ge(),De("div",Ov,[pe("div",xv,[pe("button",{class:dn({active:n.activeTab==="notes"}),onClick:g[0]||(g[0]=v=>p.$emit("update:activeTab","notes"))},[ke(le(kv),{size:16}),g[9]||(g[9]=Us()),g[10]||(g[10]=pe("span",null,"Notes",-1))],2),pe("button",{class:dn({active:n.activeTab==="explore"}),onClick:g[1]||(g[1]=v=>p.$emit("update:activeTab","explore"))},[ke(le(Rh),{size:16}),g[11]||(g[11]=Us()),g[12]||(g[12]=pe("span",null,"Explore",-1))],2)]),n.activeTab==="notes"?(ge(),De(mt,{key:0},[pe("div",Mv,[Ua(pe("input",{"onUpdate:modelValue":g[2]||(g[2]=v=>s.value=v),onKeyup:wh(l,["enter"]),placeholder:"프로그래머스/코드업 URL 입력",class:"url-input"},null,544),[[Ka,s.value]]),Ua(pe("input",{"onUpdate:modelValue":g[3]||(g[3]=v=>i.value=v),placeholder:"제목, ID, 태그로 검색",class:"search-input"},null,512),[[Ka,i.value]])]),pe("div",Lv,[n.currentUser?n.isLoading?(ge(),De("div",Uv,"불러오는 중...")):c.value.length===0?(ge(),De("div",jv,"검색 결과가 없습니다.")):(ge(!0),De(mt,{key:3},Ki(c.value,v=>(ge(),De("div",{key:v.id+(v.platform||""),class:dn(["problem-item",{active:n.selectedId===v.id}]),onClick:P=>p.$emit("update:selectedId",v.id)},[pe("div",$v,[pe("div",qv,[pe("div",Hv,[pe("span",zv,cn(v.id),1),v.platform?(ge(),De("span",{key:0,class:dn(["platform-tag",v.platform.toLowerCase()])},cn(v.platform),3)):Wi("",!0)]),pe("span",Kv,cn(v.title),1),v.tags&&v.tags.length>0?(ge(),De("div",Wv,[(ge(!0),De(mt,null,Ki(v.tags,P=>(ge(),De("span",{key:P,class:"mini-tag"},"#"+cn(P),1))),128))])):Wi("",!0)]),pe("div",Gv,[pe("button",{onClick:Ih(P=>p.window.open(v.url,"_blank"),["stop"]),class:"action-btn"},[ke(le(Sv),{size:14})],8,Qv),pe("button",{onClick:Ih(P=>p.$emit("deleteProblem",v.id),["stop"]),class:"delete-btn"},[ke(le(Dv),{size:14})],8,Jv)])])],10,Bv))),128)):(ge(),De("div",Fv,"로그인하여 데이터를 클라우드에 저장하세요."))])],64)):(ge(),De(mt,{key:1},[pe("div",Yv,[pe("div",Xv,[Ua(pe("input",{"onUpdate:modelValue":g[4]||(g[4]=v=>a.value=v),onKeyup:wh(h,["enter"]),placeholder:"owner/repo 입력",class:"url-input"},null,544),[[Ka,a.value]]),pe("button",{onClick:g[5]||(g[5]=v=>p.$emit("toggleFavoriteRepo")),class:dn(["star-btn",{favorited:d.value}]),title:"즐겨찾기 토글"},[ke(le(Vv),{size:18,fill:d.value?"var(--accent)":"none"},null,8,["fill"])],2),pe("button",{onClick:h,class:"search-btn"},[ke(le(Rh),{size:18})])]),n.favoriteRepos.length>0?(ge(),De("div",Zv,[(ge(!0),De(mt,null,Ki(n.favoriteRepos,v=>(ge(),De("span",{key:v,class:"repo-chip",onClick:P=>p.$emit("fetchRepo",v)},cn(v.split("/")[1]||v),9,eE))),128))])):Wi("",!0)]),pe("div",tE,[n.githubIsLoading?(ge(),De("div",nE,"탐색 중...")):n.githubFiles.length===0?(ge(),De("div",rE,"저장소를 입력하고 검색하세요.")):(ge(),De("div",sE,[n.githubPath.length>0?(ge(),De("div",iE,[pe("button",{onClick:g[6]||(g[6]=v=>p.$emit("goBack")),class:"back-btn"},[ke(le(wv),{size:14}),g[13]||(g[13]=Us(" 뒤로가기",-1))]),pe("span",oE,"/ "+cn(n.githubPath[n.githubPath.length-1].name),1)])):Wi("",!0),(ge(!0),De(mt,null,Ki(n.githubFiles,v=>(ge(),De("div",{key:v.sha,class:"tree-item",onClick:P=>v.type==="dir"?p.$emit("navigateFolder",v):p.$emit("viewFile",v)},[v.type==="dir"?(ge(),mr(le(Pv),{key:0,size:16,class:"icon-folder"})):(ge(),mr(le(Rv),{key:1,size:16,class:"icon-file"})),pe("span",cE,cn(v.name),1)],8,aE))),128))]))])],64)),pe("div",lE,[n.currentUser?(ge(),De("div",uE,[pe("img",{src:n.currentUser.photoURL,class:"user-avatar",alt:"Avatar"},null,8,hE),pe("div",fE,[pe("span",dE,cn(n.currentUser.displayName),1),pe("button",{onClick:g[7]||(g[7]=v=>p.$emit("logout")),class:"auth-btn-small"},"로그아웃")])])):(ge(),De("button",{key:1,onClick:g[8]||(g[8]=v=>p.$emit("login")),class:"login-btn"},[ke(le(Cv),{size:16,style:{"margin-right":"8px"}}),g[14]||(g[14]=Us(" GitHub 로그인 ",-1))]))])]))}},mE=Nv(pE,[["__scopeId","data-v-b4a09c6a"]]);function gE(){const n=je(!1);return{isDarkMode:n,toggleDarkMode:()=>{n.value=!n.value,document.documentElement.classList.toggle("dark-mode",n.value);const r=document.getElementById("hljs-theme");r&&r.remove();const s=document.createElement("link");s.id="hljs-theme",s.rel="stylesheet",s.href=n.value?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css",document.head.appendChild(s),localStorage.setItem("theme",n.value?"dark":"light")},initTheme:()=>{const r=localStorage.getItem("theme");(r==="dark"||!r&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(n.value=!0,document.documentElement.classList.add("dark-mode"));const i=document.getElementById("hljs-theme");i&&i.remove();const a=document.createElement("link");a.id="hljs-theme",a.rel="stylesheet",a.href=n.value?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css",document.head.appendChild(a)}}}const _E=()=>{};var Ph={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,a||(g=64)),r.push(t[d],t[p],t[g],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ep(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new vE;const g=i<<2|c>>4;if(r.push(g),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(n){const e=ep(n);return tp.encodeByteArray(e,!0)},bo=function(n){return EE(n).replace(/\./g,"")},np=function(n){try{return tp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=()=>TE().__FIREBASE_DEFAULTS__,wE=()=>{if(typeof process>"u"||typeof Ph>"u")return;const n=Ph.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},AE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&np(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return _E()||IE()||wE()||AE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rp=n=>{var e,t;return(t=(e=ta())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},bE=n=>{const e=rp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sp=()=>{var n;return(n=ta())==null?void 0:n.config},ip=n=>{var e;return(e=ta())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bo(JSON.stringify(t)),bo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function CE(){var e;const n=(e=ta())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function DE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NE(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function OE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xE(){try{return typeof indexedDB=="object"}catch{return!1}}function ME(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="FirebaseError";class Pn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=LE,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?FE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Pn(s,c,r)}}function FE(n,e){return n.replace(UE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UE=/\{\$([^}]+)}/g;function jE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function In(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ch(i)&&Ch(a)){if(!In(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ch(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function BE(n,e){const t=new $E(n,e);return t.subscribe.bind(t)}class $E{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Wa),s.error===void 0&&(s.error=Wa),s.complete===void 0&&(s.complete=Wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function op(n){return(await fetch(n,{credentials:"include"})).ok}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new SE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KE(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(n){return n===dr?void 0:n}function KE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const GE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},QE=ue.INFO,JE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},YE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=JE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=QE,this._logHandler=YE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const XE=(n,e)=>e.some(t=>n instanceof t);let kh,Vh;function ZE(){return kh||(kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ap=new WeakMap,_c=new WeakMap,cp=new WeakMap,Ga=new WeakMap,ul=new WeakMap;function tT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($n(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ap.set(t,n)}).catch(()=>{}),ul.set(e,n),e}function nT(n){if(_c.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});_c.set(n,e)}let yc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _c.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rT(n){yc=n(yc)}function sT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qa(this),e,...t);return cp.set(r,e.sort?e.sort():[e]),$n(r)}:eT().includes(n)?function(...e){return n.apply(Qa(this),e),$n(ap.get(this))}:function(...e){return $n(n.apply(Qa(this),e))}}function iT(n){return typeof n=="function"?sT(n):(n instanceof IDBTransaction&&nT(n),XE(n,ZE())?new Proxy(n,yc):n)}function $n(n){if(n instanceof IDBRequest)return tT(n);if(Ga.has(n))return Ga.get(n);const e=iT(n);return e!==n&&(Ga.set(n,e),ul.set(e,n)),e}const Qa=n=>ul.get(n);function oT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=$n(a);return r&&a.addEventListener("upgradeneeded",l=>{r($n(a.result),l.oldVersion,l.newVersion,$n(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const aT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],Ja=new Map;function Dh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Ja.set(e,i),i}rT(n=>({...n,get:(e,t,r)=>Dh(e,t)||n.get(e,t,r),has:(e,t)=>!!Dh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function uT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Nh="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new ll("@firebase/app"),hT="@firebase/app-compat",fT="@firebase/analytics-compat",dT="@firebase/analytics",pT="@firebase/app-check-compat",mT="@firebase/app-check",gT="@firebase/auth",_T="@firebase/auth-compat",yT="@firebase/database",vT="@firebase/data-connect",ET="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",wT="@firebase/installations",AT="@firebase/installations-compat",bT="@firebase/messaging",ST="@firebase/messaging-compat",RT="@firebase/performance",PT="@firebase/performance-compat",CT="@firebase/remote-config",kT="@firebase/remote-config-compat",VT="@firebase/storage",DT="@firebase/storage-compat",NT="@firebase/firestore",OT="@firebase/ai",xT="@firebase/firestore-compat",MT="firebase",LT="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="[DEFAULT]",FT={[vc]:"fire-core",[hT]:"fire-core-compat",[dT]:"fire-analytics",[fT]:"fire-analytics-compat",[mT]:"fire-app-check",[pT]:"fire-app-check-compat",[gT]:"fire-auth",[_T]:"fire-auth-compat",[yT]:"fire-rtdb",[vT]:"fire-data-connect",[ET]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[wT]:"fire-iid",[AT]:"fire-iid-compat",[bT]:"fire-fcm",[ST]:"fire-fcm-compat",[RT]:"fire-perf",[PT]:"fire-perf-compat",[CT]:"fire-rc",[kT]:"fire-rc-compat",[VT]:"fire-gcs",[DT]:"fire-gcs-compat",[NT]:"fire-fst",[xT]:"fire-fst-compat",[OT]:"fire-vertex","fire-js":"fire-js",[MT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,UT=new Map,Tc=new Map;function Oh(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(Tc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,n);for(const t of So.values())Oh(t,n);for(const t of UT.values())Oh(t,n);return!0}function hl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Ei("app","Firebase",jT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=LT;function lp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ec,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(t||(t=sp()),!t)throw qn.create("no-options");const i=So.get(s);if(i){if(In(t,i.options)&&In(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const a=new WE(s);for(const l of Tc.values())a.addComponent(l);const c=new BT(t,r,a);return So.set(s,c),c}function up(n=Ec){const e=So.get(n);if(!e&&n===Ec&&sp())return lp();if(!e)throw qn.create("no-app",{appName:n});return e}function Hn(n,e,t){let r=FT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(a.join(" "));return}ts(new wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="firebase-heartbeat-database",qT=1,ai="firebase-heartbeat-store";let Ya=null;function hp(){return Ya||(Ya=oT($T,qT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),Ya}async function HT(n){try{const t=(await hp()).transaction(ai),r=await t.objectStore(ai).get(fp(n));return await t.done,r}catch(e){if(e instanceof Pn)wn.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(t.message)}}}async function xh(n,e){try{const r=(await hp()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,fp(n)),await r.done}catch(t){if(t instanceof Pn)wn.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wn.warn(r.message)}}}function fp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1024,KT=30;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>KT){const a=JT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mh(),{heartbeatsToSend:r,unsentEntries:s}=GT(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wn.warn(t),""}}}function Mh(){return new Date().toISOString().substring(0,10)}function GT(n,e=zT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Lh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Lh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class QT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xE()?ME().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lh(n){return bo(JSON.stringify({version:2,heartbeats:n})).length}function JT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){ts(new wr("platform-logger",e=>new lT(e),"PRIVATE")),ts(new wr("heartbeat",e=>new WT(e),"PRIVATE")),Hn(vc,Nh,n),Hn(vc,Nh,"esm2020"),Hn("fire-js","")}YT("");var XT="firebase",ZT="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(XT,ZT,"app");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eI=dp,pp=new Ei("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new ll("@firebase/auth");function tI(n,...e){Ro.logLevel<=ue.WARN&&Ro.warn(`Auth (${us}): ${n}`,...e)}function io(n,...e){Ro.logLevel<=ue.ERROR&&Ro.error(`Auth (${us}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,...e){throw dl(n,...e)}function Mt(n,...e){return dl(n,...e)}function fl(n,e,t){const r={...eI(),[e]:t};return new Ei("auth","Firebase",r).create(e,{appName:n.name})}function Er(n){return fl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(n,"argument-error"),fl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return pp.create(n,...e)}function te(n,e,...t){if(!n)throw dl(e,...t)}function _n(n){const e="INTERNAL ASSERTION FAILED: "+n;throw io(e),new Error(e)}function An(n,e){n||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function rI(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rI()||VE()||"connection"in navigator)?navigator.onLine:!0}function iI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,An(t>e,"Short delay should be less than long delay!"),this.isMobile=PE()||DE()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,e){An(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cI=new wi(3e4,6e4);function ml(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function hs(n,e,t,r,s={}){return gp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ti({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return kE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(h.credentials="include"),mp.fetch()(await _p(n,n.config.apiHost,t,c),h)})}async function gp(n,e,t){n._canInitEmulator=!1;const r={...oI,...e};try{const s=new uI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Qi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Qi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Qi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw fl(n,d,h);nn(n,d)}}catch(s){if(s instanceof Pn)throw s;nn(n,"network-request-failed",{message:String(s)})}}async function lI(n,e,t,r,s={}){const i=await hs(n,e,t,r,s);return"mfaPendingCredential"in i&&nn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function _p(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?pl(n.config,s):`${n.config.apiScheme}://${s}`;return aI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class uI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),cI.get())})}}function Qi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Mt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(n,e){return hs(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return hs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fI(n,e=!1){const t=ut(n),r=await t.getIdToken(e),s=gl(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(Xa(s.auth_time)),issuedAtTime:Xs(Xa(s.iat)),expirationTime:Xs(Xa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xa(n){return Number(n)*1e3}function gl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=np(t);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Uh(n){const e=gl(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Pn&&dI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function dI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ci(n,Po(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?yp(s.providerUserInfo):[],a=gI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function mI(n){const e=ut(n);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(n,e){const t=await gp(n,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await _p(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ii(n.emulatorConfig.host)&&(l.credentials="include"),mp.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yI(n,e){return hs(n,"POST","/v2/accounts:revokeToken",ml(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Uh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await _I(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Kr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fI(this,e)}reload(){return mI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await ci(this,hI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:v,providerData:P,stsTokenManager:C}=t;te(p&&C,e,"internal-error");const D=Kr.fromJSON(this.name,C);te(typeof p=="string",e,"internal-error"),Mn(r,e.name),Mn(s,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof v=="boolean",e,"internal-error"),Mn(i,e.name),Mn(a,e.name),Mn(c,e.name),Mn(l,e.name),Mn(h,e.name),Mn(d,e.name);const H=new Nt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:v,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&(H.providerData=P.map(B=>({...B}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kr;s.updateFromServerResponse(t);const i=new Nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new Nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;function yn(n){An(n instanceof Function,"Expected a class definition");let e=jh.get(n);return e?(An(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vp.type="NONE";const Bh=vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class Wr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?Nt._fromGetAccountInfoResponse(this.auth,t,e):null}return Nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wr(yn(Bh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(Bh);const a=oo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const g=await Po(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Nt._fromGetAccountInfoResponse(e,g,d)}else p=Nt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bp(e))return"Blackberry";if(Sp(e))return"Webos";if(Tp(e))return"Safari";if((e.includes("chrome/")||Ip(e))&&!e.includes("edge/"))return"Chrome";if(Ap(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ep(n=lt()){return/firefox\//i.test(n)}function Tp(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ip(n=lt()){return/crios\//i.test(n)}function wp(n=lt()){return/iemobile/i.test(n)}function Ap(n=lt()){return/android/i.test(n)}function bp(n=lt()){return/blackberry/i.test(n)}function Sp(n=lt()){return/webos/i.test(n)}function _l(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vI(n=lt()){var e;return _l(n)&&!!((e=window.navigator)!=null&&e.standalone)}function EI(){return NE()&&document.documentMode===10}function Rp(n=lt()){return _l(n)||Ap(n)||Sp(n)||bp(n)||/windows phone/i.test(n)||wp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e=[]){let t;switch(n){case"Browser":t=$h(lt());break;case"Worker":t=`${$h(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e={}){return hs(n,"GET","/v2/passwordPolicy",ml(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=6;class AI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qh(this),this.idTokenSubscription=new qh(this),this.beforeStateQueue=new TI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Er(this));const t=e?ut(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await II(this),t=new AI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await yI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&tI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function na(n){return ut(n)}class qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SI(n){yl=n}function RI(n){return yl.loadJS(n)}function PI(){return yl.gapiScript}function CI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e){const t=hl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(In(i,e??{}))return s;nn(s,"already-initialized")}return t.initialize({options:e})}function VI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DI(n,e,t){const r=na(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cp(e),{host:a,port:c}=NI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(In(h,r.config.emulator)&&In(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ii(a)?op(`${i}//${a}${l}`):OI()}function Cp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NI(n){const e=Cp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Hh(a)}}}function Hh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function OI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,t){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(n,e){return lI(n,"POST","/v1/accounts:signInWithIdp",ml(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="http://localhost";class Ar extends kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gr(e,t)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ti(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ai{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Un.credential(t,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ai{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ai{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jn.credential(t,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Nt._fromIdTokenResponse(e,r,s),a=zh(r);return new ns({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=zh(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function zh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Pn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ko(e,t,r,s)}}function Vp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(n,i,e,r):i})}async function MI(n,e,t=!1){const r=await ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(n,e,t=!1){const{auth:r}=n;if(Dt(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await ci(n,Vp(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=gl(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(n.uid===c,r,"user-mismatch"),ns._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(n,e,t=!1){if(Dt(n.app))return Promise.reject(Er(n));const r="signIn",s=await Vp(n,r,e),i=await ns._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function UI(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function jI(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function BI(n,e,t,r){return ut(n).onAuthStateChanged(e,t,r)}function $I(n){return ut(n).signOut()}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e3,HI=10;class Np extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);EI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Np.type="LOCAL";const zI=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Op.type="SESSION";const xp=Op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await KI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=El("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function GI(n){Qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function YI(){return Mp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="firebaseLocalStorageDb",XI=1,Do="firebaseLocalStorage",Fp="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sa(n,e){return n.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function ZI(){const n=indexedDB.deleteDatabase(Lp);return new bi(n).toPromise()}function Ac(){const n=indexedDB.open(Lp,XI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Do,{keyPath:Fp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await ZI(),e(await Ac()))})})}async function Kh(n,e,t){const r=sa(n,!0).put({[Fp]:e,value:t});return new bi(r).toPromise()}async function ew(n,e){const t=sa(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function Wh(n,e){const t=sa(n,!0).delete(e);return new bi(t).toPromise()}const tw=800,nw=3;class Up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(YI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new WI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await Kh(e,Vo,"1"),await Wh(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ew(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sa(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Up.type="LOCAL";const rw=Up;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e){return e?yn(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sw(n){return FI(n.auth,new Tl(n),n.bypassAuthState)}function iw(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),LI(t,new Tl(n),n.bypassAuthState)}async function ow(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),MI(t,new Tl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sw;case"linkViaPopup":case"linkViaRedirect":return ow;case"reauthViaPopup":case"reauthViaRedirect":return iw;default:nn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new wi(2e3,1e4);async function cw(n,e,t){if(Dt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=na(n);nI(n,e,vl);const s=jp(r,t);return new gr(r,"signInViaPopup",e,s).executeNotNull()}class gr extends Bp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=El();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aw.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="pendingRedirect",ao=new Map;class uw extends Bp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hw(n,e){const t=pw(e),r=dw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function fw(n,e){ao.set(n._key(),e)}function dw(n){return yn(n._redirectPersistence)}function pw(n){return oo(lw,n.config.apiKey,n.name)}async function mw(n,e,t=!1){if(Dt(n.app))return Promise.reject(Er(n));const r=na(n),s=jp(r,e),a=await new uw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=10*60*1e3;class _w{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$p(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gh(e))}saveEventToCache(e){this.cachedEventUids.add(Gh(e)),this.lastProcessedEventTime=Date.now()}}function Gh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $p({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n,e={}){return hs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Iw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vw(n);for(const t of e)try{if(ww(t))return}catch{}nn(n,"unauthorized-domain")}function ww(n){const e=Ic(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Tw.test(t))return!1;if(Ew.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new wi(3e4,6e4);function Qh(){const n=Qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bw(n){return new Promise((e,t)=>{var s,i,a;function r(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),t(Mt(n,"network-request-failed"))},timeout:Aw.get()})}if((i=(s=Qt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Qt().gapi)!=null&&a.load)r();else{const c=CI("iframefcb");return Qt()[c]=()=>{gapi.load?r():t(Mt(n,"network-request-failed"))},RI(`${PI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw co=null,e})}let co=null;function Sw(n){return co=co||bw(n),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new wi(5e3,15e3),Pw="__/auth/iframe",Cw="emulator/auth/iframe",kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pl(e,Cw):`https://${n.config.authDomain}/${Pw}`,r={apiKey:e.apiKey,appName:n.name,v:us},s=Vw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ti(r).slice(1)}`}async function Nw(n){const e=await Sw(n),t=Qt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:Dw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(n,"network-request-failed"),c=Qt().setTimeout(()=>{i(a)},Rw.get());function l(){Qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xw=500,Mw=600,Lw="_blank",Fw="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uw(n,e,t,r=xw,s=Mw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Ow,width:r.toString(),height:s.toString(),top:i,left:a},h=lt().toLowerCase();t&&(c=Ip(h)?Lw:t),Ep(h)&&(e=e||Fw,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(vI(h)&&c!=="_self")return jw(e||"",c),new Jh(null);const p=window.open(e||"",c,d);te(p,n,"popup-blocked");try{p.focus()}catch{}return new Jh(p)}function jw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="__/auth/handler",$w="emulator/auth/handler",qw=encodeURIComponent("fac");async function Yh(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:s};if(e instanceof vl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",jE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ai){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${qw}=${encodeURIComponent(l)}`:"";return`${Hw(n)}?${Ti(c).slice(1)}${h}`}function Hw({config:n}){return n.emulator?pl(n,$w):`https://${n.authDomain}/${Bw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xp,this._completeRedirectFn=mw,this._overrideRedirectResult=fw}async _openPopup(e,t,r,s){var a;An((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Yh(e,t,r,Ic(),s);return Uw(e,i,El())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Yh(e,t,r,Ic(),s);return GI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Nw(e),r=new _w(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Za,{type:Za},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Za];i!==void 0&&t(!!i),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rp()||Tp()||_l()}}const Kw=zw;var Xh="@firebase/auth",Zh="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qw(n){ts(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pp(n)},h=new bI(r,s,i,l);return VI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new wr("auth-internal",e=>{const t=na(e.getProvider("auth").getImmediate());return(r=>new Ww(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Xh,Zh,Gw(n)),Hn(Xh,Zh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=5*60,Yw=ip("authIdTokenMaxAge")||Jw;let ef=null;const Xw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Yw)return;const s=t==null?void 0:t.token;ef!==s&&(ef=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zw(n=up()){const e=hl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kI(n,{popupRedirectResolver:Kw,persistence:[rw,zI,xp]}),r=ip("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Xw(i.toString());jI(t,a,()=>a(t.currentUser)),UI(t,c=>a(c))}}const s=rp("auth");return s&&DI(t,`http://${s}`),t}function eA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}SI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qw("Browser");var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function T(){}T.prototype=_.prototype,w.F=_.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(b,I,S){for(var E=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)E[Fe-2]=arguments[Fe];return _.prototype[I].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,T){T||(T=0);const b=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)b[I]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(I=0;I<16;++I)b[I]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=w.g[0],T=w.g[1],I=w.g[2];let S=w.g[3],E;E=_+(S^T&(I^S))+b[0]+3614090360&4294967295,_=T+(E<<7&4294967295|E>>>25),E=S+(I^_&(T^I))+b[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=I+(T^S&(_^T))+b[2]+606105819&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(_^I&(S^_))+b[3]+3250441966&4294967295,T=I+(E<<22&4294967295|E>>>10),E=_+(S^T&(I^S))+b[4]+4118548399&4294967295,_=T+(E<<7&4294967295|E>>>25),E=S+(I^_&(T^I))+b[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=I+(T^S&(_^T))+b[6]+2821735955&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(_^I&(S^_))+b[7]+4249261313&4294967295,T=I+(E<<22&4294967295|E>>>10),E=_+(S^T&(I^S))+b[8]+1770035416&4294967295,_=T+(E<<7&4294967295|E>>>25),E=S+(I^_&(T^I))+b[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=I+(T^S&(_^T))+b[10]+4294925233&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(_^I&(S^_))+b[11]+2304563134&4294967295,T=I+(E<<22&4294967295|E>>>10),E=_+(S^T&(I^S))+b[12]+1804603682&4294967295,_=T+(E<<7&4294967295|E>>>25),E=S+(I^_&(T^I))+b[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=I+(T^S&(_^T))+b[14]+2792965006&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(_^I&(S^_))+b[15]+1236535329&4294967295,T=I+(E<<22&4294967295|E>>>10),E=_+(I^S&(T^I))+b[1]+4129170786&4294967295,_=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(_^T))+b[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=I+(_^T&(S^_))+b[11]+643717713&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^_&(I^S))+b[0]+3921069994&4294967295,T=I+(E<<20&4294967295|E>>>12),E=_+(I^S&(T^I))+b[5]+3593408605&4294967295,_=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(_^T))+b[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=I+(_^T&(S^_))+b[15]+3634488961&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^_&(I^S))+b[4]+3889429448&4294967295,T=I+(E<<20&4294967295|E>>>12),E=_+(I^S&(T^I))+b[9]+568446438&4294967295,_=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(_^T))+b[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=I+(_^T&(S^_))+b[3]+4107603335&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^_&(I^S))+b[8]+1163531501&4294967295,T=I+(E<<20&4294967295|E>>>12),E=_+(I^S&(T^I))+b[13]+2850285829&4294967295,_=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(_^T))+b[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=I+(_^T&(S^_))+b[7]+1735328473&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^_&(I^S))+b[12]+2368359562&4294967295,T=I+(E<<20&4294967295|E>>>12),E=_+(T^I^S)+b[5]+4294588738&4294967295,_=T+(E<<4&4294967295|E>>>28),E=S+(_^T^I)+b[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=I+(S^_^T)+b[11]+1839030562&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^_)+b[14]+4259657740&4294967295,T=I+(E<<23&4294967295|E>>>9),E=_+(T^I^S)+b[1]+2763975236&4294967295,_=T+(E<<4&4294967295|E>>>28),E=S+(_^T^I)+b[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=I+(S^_^T)+b[7]+4139469664&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^_)+b[10]+3200236656&4294967295,T=I+(E<<23&4294967295|E>>>9),E=_+(T^I^S)+b[13]+681279174&4294967295,_=T+(E<<4&4294967295|E>>>28),E=S+(_^T^I)+b[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=I+(S^_^T)+b[3]+3572445317&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^_)+b[6]+76029189&4294967295,T=I+(E<<23&4294967295|E>>>9),E=_+(T^I^S)+b[9]+3654602809&4294967295,_=T+(E<<4&4294967295|E>>>28),E=S+(_^T^I)+b[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=I+(S^_^T)+b[15]+530742520&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^_)+b[2]+3299628645&4294967295,T=I+(E<<23&4294967295|E>>>9),E=_+(I^(T|~S))+b[0]+4096336452&4294967295,_=T+(E<<6&4294967295|E>>>26),E=S+(T^(_|~I))+b[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=I+(_^(S|~T))+b[14]+2878612391&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~_))+b[5]+4237533241&4294967295,T=I+(E<<21&4294967295|E>>>11),E=_+(I^(T|~S))+b[12]+1700485571&4294967295,_=T+(E<<6&4294967295|E>>>26),E=S+(T^(_|~I))+b[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=I+(_^(S|~T))+b[10]+4293915773&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~_))+b[1]+2240044497&4294967295,T=I+(E<<21&4294967295|E>>>11),E=_+(I^(T|~S))+b[8]+1873313359&4294967295,_=T+(E<<6&4294967295|E>>>26),E=S+(T^(_|~I))+b[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=I+(_^(S|~T))+b[6]+2734768916&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~_))+b[13]+1309151649&4294967295,T=I+(E<<21&4294967295|E>>>11),E=_+(I^(T|~S))+b[4]+4149444226&4294967295,_=T+(E<<6&4294967295|E>>>26),E=S+(T^(_|~I))+b[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=I+(_^(S|~T))+b[2]+718787259&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~_))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const T=_-this.blockSize,b=this.C;let I=this.h,S=0;for(;S<_;){if(I==0)for(;S<=T;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<_;)if(b[I++]=w.charCodeAt(S++),I==this.blockSize){s(this,b),I=0;break}}else for(;S<_;)if(b[I++]=w[S++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,T=0;T<4;++T)for(let b=0;b<32;b+=8)w[_++]=this.g[T]>>>b&255;return w};function i(w,_){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=_(w)}function a(w,_){this.h=_;const T=[];let b=!0;for(let I=w.length-1;I>=0;I--){const S=w[I]|0;b&&S==_||(T[I]=S,b=!1)}this.g=T}var c={};function l(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return D(h(-w));const _=[];let T=1;for(let b=0;w>=T;b++)_[b]=w/T|0,T*=4294967296;return new a(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(d(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(_,8));let b=p;for(let S=0;S<w.length;S+=8){var I=Math.min(8,w.length-S);const E=parseInt(w.substring(S,S+I),_);I<8?(I=h(Math.pow(_,I)),b=b.j(I).add(h(E))):(b=b.j(T),b=b.add(h(E)))}return b}var p=l(0),g=l(1),v=l(16777216);n=a.prototype,n.m=function(){if(C(this))return-D(this).m();let w=0,_=1;for(let T=0;T<this.g.length;T++){const b=this.i(T);w+=(b>=0?b:4294967296+b)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(C(this))return"-"+D(this).toString(w);const _=h(Math.pow(w,6));var T=this;let b="";for(;;){const I=G(T,_).g;T=H(T,I.j(_));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=I,P(T))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=H(this,w),C(w)?-1:P(w)?0:1};function D(w){const _=w.g.length,T=[];for(let b=0;b<_;b++)T[b]=~w.g[b];return new a(T,~w.h).add(g)}n.abs=function(){return C(this)?D(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),T=[];let b=0;for(let I=0;I<=_;I++){let S=b+(this.i(I)&65535)+(w.i(I)&65535),E=(S>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);b=E>>>16,S&=65535,E&=65535,T[I]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function H(w,_){return w.add(D(_))}n.j=function(w){if(P(this)||P(w))return p;if(C(this))return C(w)?D(this).j(D(w)):D(D(this).j(w));if(C(w))return D(this.j(D(w)));if(this.l(v)<0&&w.l(v)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,T=[];for(var b=0;b<2*_;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<w.g.length;I++){const S=this.i(b)>>>16,E=this.i(b)&65535,Fe=w.i(I)>>>16,ht=w.i(I)&65535;T[2*b+2*I]+=E*ht,B(T,2*b+2*I),T[2*b+2*I+1]+=S*ht,B(T,2*b+2*I+1),T[2*b+2*I+1]+=E*Fe,B(T,2*b+2*I+1),T[2*b+2*I+2]+=S*Fe,B(T,2*b+2*I+2)}for(w=0;w<_;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=_;w<2*_;w++)T[w]=0;return new a(T,0)};function B(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function K(w,_){this.g=w,this.h=_}function G(w,_){if(P(_))throw Error("division by zero");if(P(w))return new K(p,p);if(C(w))return _=G(D(w),_),new K(D(_.g),D(_.h));if(C(_))return _=G(w,D(_)),new K(D(_.g),_.h);if(w.g.length>30){if(C(w)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var T=g,b=_;b.l(w)<=0;)T=se(T),b=se(b);var I=_e(T,1),S=_e(b,1);for(b=_e(b,2),T=_e(T,2);!P(b);){var E=S.add(b);E.l(w)<=0&&(I=I.add(T),S=E),b=_e(b,1),T=_e(T,1)}return _=H(w,I.j(_)),new K(I,_)}for(I=p;w.l(_)>=0;){for(T=Math.max(1,Math.floor(w.m()/_.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=h(T),E=S.j(_);C(E)||E.l(w)>0;)T-=b,S=h(T),E=S.j(_);P(S)&&(S=g),I=I.add(S),w=H(w,E)}return new K(I,w)}n.B=function(w){return G(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let b=0;b<_;b++)T[b]=this.i(b)&w.i(b);return new a(T,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let b=0;b<_;b++)T[b]=this.i(b)|w.i(b);return new a(T,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let b=0;b<_;b++)T[b]=this.i(b)^w.i(b);return new a(T,this.h^w.h)};function se(w){const _=w.g.length+1,T=[];for(let b=0;b<_;b++)T[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(T,w.h)}function _e(w,_){const T=_>>5;_%=32;const b=w.g.length-T,I=[];for(let S=0;S<b;S++)I[S]=_>0?w.i(S+T)>>>_|w.i(S+T+1)<<32-_:w.i(S+T);return new a(I,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,zn=a}).apply(typeof tf<"u"?tf:typeof self<"u"?self:typeof window<"u"?window:{});var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hp,js,zp,lo,bc,Kp,Wp,Gp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ji=="object"&&Ji];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var R=o[m];if(!(R in f))break e;f=f[R]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&f.push([m,u[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(m,R,k){for(var $=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)$[ae-2]=arguments[ae];return u.prototype[R].apply(m,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function v(o){const u=o.length;if(u>0){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function P(o,u){for(let m=1;m<arguments.length;m++){const R=arguments[m];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const k=R.length||0;o.length=f+k;for(let $=0;$<k;$++)o[f+$]=R[$]}else o.push(R)}}class C{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(o){a.setTimeout(()=>{throw o},0)}function H(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class B{constructor(){this.h=this.g=null}add(u,f){const m=K.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var K=new C(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let se,_e=!1,w=new B,_=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(T)}};function T(){for(var o;o=H();){try{o.h.call(o.g)}catch(f){D(f)}var u=K;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}_e=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function Fe(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Fe,I),Fe.prototype.init=function(o,u){const f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),qe=0;function Ae(o,u,f,m,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=R,this.key=++qe,this.da=this.fa=!1}function ce(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Pe(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function gt(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Rt(o){const u={};for(const f in o)u[f]=o[f];return u}const Tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _s(o,u){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)o[f]=m[f];for(let k=0;k<Tt.length;k++)f=Tt[k],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function kr(o){this.src=o,this.g={},this.h=0}kr.prototype.add=function(o,u,f,m,R){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const $=on(o,u,m,R);return $>-1?(u=o[$],f||(u.fa=!1)):(u=new Ae(u,this.src,k,!!m,R),u.fa=f,o.push(u)),u};function ys(o,u){const f=u.type;if(f in o.g){var m=o.g[f],R=Array.prototype.indexOf.call(m,u,void 0),k;(k=R>=0)&&Array.prototype.splice.call(m,R,1),k&&(ce(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function on(o,u,f,m){for(let R=0;R<o.length;++R){const k=o[R];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return R}return-1}var Cn="closure_lm_"+(Math.random()*1e6|0),rr={};function vs(o,u,f,m,R){if(Array.isArray(u)){for(let k=0;k<u.length;k++)vs(o,u[k],f,m,R);return null}return f=q(f),o&&o[ht]?o.J(u,f,c(m)?!!m.capture:!1,R):sr(o,u,f,!1,m,R)}function sr(o,u,f,m,R,k){if(!u)throw Error("Invalid event type");const $=c(R)?!!R.capture:!!R;let ae=O(o);if(ae||(o[Cn]=ae=new kr(o)),f=ae.add(u,f,m,$,k),f.proxy)return f;if(m=Zl(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)S||(R=$),R===void 0&&(R=!1),o.addEventListener(u.toString(),m,R);else if(o.attachEvent)o.attachEvent(V(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Zl(){function o(f){return u.call(o.src,o.listener,f)}const u=F;return o}function y(o,u,f,m,R){if(Array.isArray(u))for(var k=0;k<u.length;k++)y(o,u[k],f,m,R);else m=c(m)?!!m.capture:!!m,f=q(f),o&&o[ht]?(o=o.i,k=String(u).toString(),k in o.g&&(u=o.g[k],f=on(u,f,m,R),f>-1&&(ce(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[k],o.h--)))):o&&(o=O(o))&&(u=o.g[u.toString()],o=-1,u&&(o=on(u,f,m,R)),(f=o>-1?u[o]:null)&&A(f))}function A(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ht])ys(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(V(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=O(u))?(ys(f,o),f.h==0&&(f.src=null,u[Cn]=null)):ce(o)}}}function V(o){return o in rr?rr[o]:rr[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new Fe(u,this);const f=o.listener,m=o.ha||o.src;o.fa&&A(o),o=f.call(m,u)}return o}function O(o){return o=o[Cn],o instanceof kr?o:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(o){return typeof o=="function"?o:(o[M]||(o[M]=function(u){return o.handleEvent(u)}),o[M])}function j(){b.call(this),this.i=new kr(this),this.M=this,this.G=null}p(j,b),j.prototype[ht]=!0,j.prototype.removeEventListener=function(o,u,f,m){y(this,o,u,f,m)};function U(o,u){var f,m=o.G;if(m)for(f=[];m;m=m.G)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(m,o),_s(u,R)}R=!0;let k,$;if(f)for($=f.length-1;$>=0;$--)k=u.g=f[$],R=x(k,m,!0,u)&&R;if(k=u.g=o,R=x(k,m,!0,u)&&R,R=x(k,m,!1,u)&&R,f)for($=0;$<f.length;$++)k=u.g=f[$],R=x(k,m,!1,u)&&R}j.prototype.N=function(){if(j.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let m=0;m<f.length;m++)ce(f[m]);delete o.g[u],o.h--}}this.G=null},j.prototype.J=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},j.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function x(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let k=0;k<u.length;++k){const $=u[k];if($&&!$.da&&$.capture==f){const ae=$.listener,ze=$.ha||$.src;$.fa&&ys(o.i,$),R=ae.call(ze,m)!==!1&&R}}return R&&!m.defaultPrevented}function Y(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function z(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,z(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class J extends b{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function X(o){b.call(this),this.h=o,this.g={}}p(X,b);var de=[];function ye(o){Pe(o.g,function(u,f){this.g.hasOwnProperty(f)&&A(u)},o),o.g={}}X.prototype.N=function(){X.Z.N.call(this),ye(this)},X.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=a.JSON.stringify,xe=a.JSON.parse,He=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function It(){}function wt(){}var Vt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vr(){I.call(this,"d")}p(Vr,I);function Xe(){I.call(this,"c")}p(Xe,I);var Qe={},Es=null;function ir(){return Es=Es||new j}Qe.Ia="serverreachability";function eu(o){I.call(this,Qe.Ia,o)}p(eu,I);function Ts(o){const u=ir();U(u,new eu(u))}Qe.STAT_EVENT="statevent";function tu(o,u){I.call(this,Qe.STAT_EVENT,o),this.stat=u}p(tu,I);function ft(o){const u=ir();U(u,new tu(u,o))}Qe.Ja="timingevent";function nu(o,u){I.call(this,Qe.Ja,o),this.size=u}p(nu,I);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function bg(o,u,f,m,R,k){o.info(function(){if(o.g)if(k){var $="",ae=k.split("&");for(let be=0;be<ae.length;be++){var ze=ae[be].split("=");if(ze.length>1){const Je=ze[0];ze=ze[1];const Bt=Je.split("_");$=Bt.length>=2&&Bt[1]=="type"?$+(Je+"="+ze+"&"):$+(Je+"=redacted&")}}}else $=null;else $=k;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function Sg(o,u,f,m,R,k,$){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+u+`
`+f+`
`+k+" "+$})}function Dr(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Pg(o,f)+(m?" "+m:"")})}function Rg(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function Pg(o,u){if(!o.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var f=k[o];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let $=1;$<m.length;$++)m[$]=""}}}}return ve(k)}catch{return u}}var Di={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ru={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},su;function Ea(){}p(Ea,It),Ea.prototype.g=function(){return new XMLHttpRequest},su=new Ea;function As(o){return encodeURIComponent(String(o))}function Cg(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function kn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.S=m||1,this.V=new X(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var ou={},Ta={};function Ia(o,u,f){o.M=1,o.A=Oi(jt(u)),o.u=f,o.R=!0,au(o,null)}function au(o,u){o.F=Date.now(),Ni(o),o.B=jt(o.A);var f=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Eu(f.i,"t",m),o.C=0,f=o.j.L,o.h=new iu,o.g=Fu(o.j,f?u:null,!o.u),o.P>0&&(o.O=new J(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,m=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(de[0]=R.toString()),R=de);for(let k=0;k<R.length;k++){const $=vs(f,R[k],m||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.J?Rt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Ts(),bg(o.i,o.v,o.B,o.l,o.S,o.u)}kn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Nn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const ae=Nn(this.g),ze=this.g.ya(),be=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Ru(this.g)))){this.K||ae!=4||ze==7||(ze==8||be<=0?Ts(3):Ts(2)),wa(this);var u=this.g.ca();this.X=u;var f=kg(this);if(this.o=u==200,Sg(this.i,this.v,this.B,this.l,this.S,ae,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var k=m;break t}}k=null}if(o=k)Dr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Aa(this,o);else{this.o=!1,this.m=3,ft(12),or(this),bs(this);break e}}if(this.R){o=!0;let Je;for(;!this.K&&this.C<f.length;)if(Je=Vg(this,f),Je==Ta){ae==4&&(this.m=4,ft(14),o=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==ou){this.m=4,ft(15),Dr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Dr(this.i,this.l,Je,null),Aa(this,Je);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,ft(16),o=!1),this.o=this.o&&o,!o)Dr(this.i,this.l,f,"[Invalid Chunked Response]"),or(this),bs(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Da($),$.P=!0,ft(11))}}else Dr(this.i,this.l,f,null),Aa(this,f);ae==4&&or(this),this.o&&!this.K&&(ae==4?Ou(this.j,this):(this.o=!1,Ni(this)))}else zg(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),or(this),bs(this)}}}catch{}finally{}};function kg(o){if(!cu(o))return o.g.la();const u=Ru(o.g);if(u==="")return"";let f="";const m=u.length,R=Nn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return or(o),bs(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<m;k++)o.h.h=!0,f+=o.h.i.decode(u[k],{stream:!(R&&k==m-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function cu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Vg(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?Ta:(f=Number(u.substring(f,m)),isNaN(f)?ou:(m+=1,m+f>u.length?Ta:(u=u.slice(m,m+f),o.C=m+f,u)))}kn.prototype.cancel=function(){this.K=!0,or(this)};function Ni(o){o.T=Date.now()+o.H,lu(o,o.H)}function lu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Is(h(o.aa,o),u)}function wa(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Rg(this.i,this.B),this.M!=2&&(Ts(),ft(17)),or(this),this.m=2,bs(this)):lu(this,this.T-o)};function bs(o){o.j.I==0||o.K||Ou(o.j,o)}function or(o){wa(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,ye(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Aa(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||ba(f.h,o))){if(!o.L&&ba(f.h,o)&&f.I==3){try{var m=f.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ui(f),Li(f);else break e;Va(f),ft(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Is(h(f.Va,f),6e3));fu(f.h)<=1&&f.ta&&(f.ta=void 0)}else cr(f,11)}else if((o.L||f.g==o)&&Ui(f),!E(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let be=R[u];const Je=be[0];if(!(Je<=f.K))if(f.K=Je,be=be[1],f.I==2)if(be[0]=="c"){f.M=be[1],f.ba=be[2];const Bt=be[3];Bt!=null&&(f.ka=Bt,f.j.info("VER="+f.ka));const lr=be[4];lr!=null&&(f.za=lr,f.j.info("SVER="+f.za));const On=be[5];On!=null&&typeof On=="number"&&On>0&&(m=1.5*On,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const xn=o.g;if(xn){const Bi=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var k=m.h;k.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Sa(k,k.h),k.h=null))}if(m.G){const Na=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Na&&(m.wa=Na,Ce(m.J,m.G,Na))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var $=o;if(m.na=Lu(m,m.L?m.ba:null,m.W),$.L){du(m.h,$);var ae=$,ze=m.O;ze&&(ae.H=ze),ae.D&&(wa(ae),Ni(ae)),m.g=$}else Du(m);f.i.length>0&&Fi(f)}else be[0]!="stop"&&be[0]!="close"||cr(f,7);else f.I==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?cr(f,7):ka(f):be[0]!="noop"&&f.l&&f.l.qa(be),f.A=0)}}Ts(4)}catch{}}var Dg=class{constructor(o,u){this.g=o,this.map=u}};function uu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fu(o){return o.h?1:o.g?o.g.size:0}function ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Sa(o,u){o.g?o.g.add(u):o.h=u}function du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}uu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return v(o.i)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ng(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const m=o[f].indexOf("=");let R,k=null;m>=0?(R=o[f].substring(0,m),k=o[f].substring(m+1)):R=o[f],u(R,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Vn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Vn?(this.l=o.l,Ss(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.u),this.h=o.h,Ra(this,Tu(o.i)),this.m=o.m):o&&(u=String(o).match(mu))?(this.l=!1,Ss(this,u[1]||"",!0),this.o=Ps(u[2]||""),this.g=Ps(u[3]||"",!0),Rs(this,u[4]),this.h=Ps(u[5]||"",!0),Ra(this,u[6]||"",!0),this.m=Ps(u[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}Vn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Cs(u,gu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Cs(u,gu,!0),"@"),o.push(As(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Cs(f,f.charAt(0)=="/"?Mg:xg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Cs(f,Fg)),o.join("")},Vn.prototype.resolve=function(o){const u=jt(this);let f=!!o.j;f?Ss(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var m=o.h;if(f)Rs(u,o.u);else if(f=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=u.h.lastIndexOf("/");R!=-1&&(m=u.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const k=[];for(let $=0;$<R.length;){const ae=R[$++];ae=="."?m&&$==R.length&&k.push(""):ae==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),m&&$==R.length&&k.push("")):(k.push(ae),m=!0)}m=k.join("/")}else m=R}return f?u.h=m:f=o.i.toString()!=="",f?Ra(u,Tu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function jt(o){return new Vn(o)}function Ss(o,u,f){o.j=f?Ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ra(o,u,f){u instanceof ks?(o.i=u,Ug(o.i,o.l)):(f||(u=Cs(u,Lg)),o.i=new ks(u,o.l))}function Ce(o,u,f){o.i.set(u,f)}function Oi(o){return Ce(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Og),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Og(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gu=/[#\/\?@]/g,xg=/[#\?:]/g,Mg=/[#\?]/g,Lg=/[#\?@]/g,Fg=/#/g;function ks(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ar(o){o.g||(o.g=new Map,o.h=0,o.i&&Ng(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=ks.prototype,n.add=function(o,u){ar(this),this.i=null,o=Nr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function _u(o,u){ar(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yu(o,u){return ar(o),u=Nr(o,u),o.g.has(u)}n.forEach=function(o,u){ar(this),this.g.forEach(function(f,m){f.forEach(function(R){o.call(u,R,m,this)},this)},this)};function vu(o,u){ar(o);let f=[];if(typeof u=="string")yu(o,u)&&(f=f.concat(o.g.get(Nr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return ar(this),this.i=null,o=Nr(this,o),yu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=vu(this,o),o.length>0?String(o[0]):u):u};function Eu(o,u,f){_u(o,u),f.length>0&&(o.i=null,o.g.set(Nr(o,u),v(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var f=u[m];const R=As(f);f=vu(this,f);for(let k=0;k<f.length;k++){let $=R;f[k]!==""&&($+="="+As(f[k])),o.push($)}}return this.i=o.join("&")};function Tu(o){const u=new ks;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ug(o,u){u&&!o.j&&(ar(o),o.i=null,o.g.forEach(function(f,m){const R=m.toLowerCase();m!=R&&(_u(this,m),Eu(this,R,f))},o)),o.j=u}function jg(o,u){const f=new ws;if(a.Image){const m=new Image;m.onload=d(Dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=d(Dn,f,"TestLoadImage: error",!1,u,m),m.onabort=d(Dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=d(Dn,f,"TestLoadImage: timeout",!1,u,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Bg(o,u){const f=new ws,m=new AbortController,R=setTimeout(()=>{m.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(R),k.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function $g(){this.g=new He}function Pa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Pa,It),Pa.prototype.g=function(){return new xi(this.i,this.h)};function xi(o,u){j.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xi,j),n=xi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Ds(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Iu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Iu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Vs(this):Ds(this),this.readyState==3&&Iu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Vs(this))},n.Na=function(o){this.g&&(this.response=o,Vs(this))},n.ga=function(){this.g&&Vs(this)};function Vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ds(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ds(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let u="";return Pe(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ca(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=wu(f),typeof o=="string"?f!=null&&As(f):Ce(o,u,f))}function Me(o){j.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Me,j);var qg=/^https?$/i,Hg=["POST","PUT"];n=Me.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():su.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Au(this,k);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Hg,u,void 0)>=0)||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,$]of f)this.g.setRequestHeader(k,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Au(this,k)}};function Au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,bu(o),Mi(o)}function bu(o){o.A||(o.A=!0,U(o,"complete"),U(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,U(this,"complete"),U(this,"abort"),Mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Su(this):this.Xa())},n.Xa=function(){Su(this)};function Su(o){if(o.h&&typeof i<"u"){if(o.v&&Nn(o)==4)setTimeout(o.Ca.bind(o),0);else if(U(o,"readystatechange"),Nn(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=k===0){let $=String(o.D).match(mu)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),m=!qg.test($?$.toLowerCase():"")}f=m}if(f)U(o,"complete"),U(o,"success");else{o.o=6;try{var R=Nn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",bu(o)}}finally{Mi(o)}}}}function Mi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||U(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Nn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Nn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),xe(u)}};function Ru(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zg(o){const u={};o=(o.g&&Nn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(E(o[m]))continue;var f=Cg(o[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[R]||[];u[R]=k,k.push(f)}gt(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Pu(o){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ns("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ns("baseRetryDelayMs",5e3,o),this.Za=Ns("retryDelaySeedMs",1e4,o),this.Ta=Ns("forwardChannelMaxRetries",2,o),this.va=Ns("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new uu(o&&o.concurrentRequestLimit),this.Ba=new $g,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Pu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,m){ft(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Lu(this,null,this.W),Fi(this)};function ka(o){if(Cu(o),o.I==3){var u=o.V++,f=jt(o.J);if(Ce(f,"SID",o.M),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),Os(o,f),u=new kn(o,o.j,u),u.M=2,u.A=Oi(jt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Fu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ni(u)}Mu(o)}function Li(o){o.g&&(Da(o),o.g.cancel(),o.g=null)}function Cu(o){Li(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ui(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Fi(o){if(!hu(o.h)&&!o.m){o.m=!0;var u=o.Ea;se||_(),_e||(se(),_e=!0),w.add(u,o),o.D=0}}function Kg(o,u){return fu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Is(h(o.Ea,o,u),xu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new kn(this,this.j,o);let k=this.o;if(this.U&&(k?(k=Rt(k),_s(k,this.U)):k=this.U),this.u!==null||this.R||(R.J=k,k=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Vu(this,R,u),f=jt(this.J),Ce(f,"RID",o),Ce(f,"CVER",22),this.G&&Ce(f,"X-HTTP-Session-Id",this.G),Os(this,f),k&&(this.R?u="headers="+As(wu(k))+"&"+u:this.u&&Ca(f,this.u,k)),Sa(this.h,R),this.Ra&&Ce(f,"TYPE","init"),this.S?(Ce(f,"$req",u),Ce(f,"SID","null"),R.U=!0,Ia(R,f,null)):Ia(R,f,u),this.I=2}}else this.I==3&&(o?ku(this,o):this.i.length==0||hu(this.h)||ku(this))};function ku(o,u){var f;u?f=u.l:f=o.V++;const m=jt(o.J);Ce(m,"SID",o.M),Ce(m,"RID",f),Ce(m,"AID",o.K),Os(o,m),o.u&&o.o&&Ca(m,o.u,o.o),f=new kn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Vu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Sa(o.h,f),Ia(f,m,u)}function Os(o,u){o.H&&Pe(o.H,function(f,m){Ce(u,m,f)}),o.l&&Pe({},function(f,m){Ce(u,m,f)})}function Vu(o,u,f){f=Math.min(o.i.length,f);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let ae=-1;for(;;){const ze=["count="+f];ae==-1?f>0?(ae=R[0].g,ze.push("ofs="+ae)):ae=0:ze.push("ofs="+ae);let be=!0;for(let Je=0;Je<f;Je++){var k=R[Je].g;const Bt=R[Je].map;if(k-=ae,k<0)ae=Math.max(0,R[Je].g-100),be=!1;else try{k="req"+k+"_"||"";try{var $=Bt instanceof Map?Bt:Object.entries(Bt);for(const[lr,On]of $){let xn=On;c(On)&&(xn=ve(On)),ze.push(k+lr+"="+encodeURIComponent(xn))}}catch(lr){throw ze.push(k+"type="+encodeURIComponent("_badmap")),lr}}catch{m&&m(Bt)}}if(be){$=ze.join("&");break e}}$=void 0}return o=o.i.splice(0,f),u.G=o,$}function Du(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;se||_(),_e||(se(),_e=!0),w.add(u,o),o.A=0}}function Va(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Is(h(o.Da,o),xu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Nu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Is(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Li(this),Nu(this))};function Da(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Nu(o){o.g=new kn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=jt(o.na);Ce(u,"RID","rpc"),Ce(u,"SID",o.M),Ce(u,"AID",o.K),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ce(u,"TO",o.ia),Ce(u,"TYPE","xmlhttp"),Os(o,u),o.u&&o.o&&Ca(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Oi(jt(u)),f.u=null,f.R=!0,au(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Li(this),Va(this),ft(19))};function Ui(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ou(o,u){var f=null;if(o.g==u){Ui(o),Da(o),o.g=null;var m=2}else if(ba(o.h,u))f=u.G,du(o.h,u),m=1;else return;if(o.I!=0){if(u.o)if(m==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;m=ir(),U(m,new nu(m,f)),Fi(o)}else Du(o);else if(R=u.m,R==3||R==0&&u.X>0||!(m==1&&Kg(o,u)||m==2&&Va(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function xu(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),m=o.Ua;const R=!m;m=new Vn(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ss(m,"https"),Oi(m),R?jg(m.toString(),f):Bg(m.toString(),f)}else ft(2);o.I=0,o.l&&o.l.pa(u),Mu(o),Cu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Mu(o){if(o.I=0,o.ja=[],o.l){const u=pu(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ja,u),P(o.ja,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.oa()}}function Lu(o,u,f){var m=f instanceof Vn?jt(f):new Vn(f);if(m.g!="")u&&(m.g=u+"."+m.g),Rs(m,m.u);else{var R=a.location;m=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const k=new Vn(null);m&&Ss(k,m),u&&(k.g=u),R&&Rs(k,R),f&&(k.h=f),m=k}return f=o.G,u=o.wa,f&&u&&Ce(m,f,u),Ce(m,"VER",o.ka),Os(o,m),m}function Fu(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Me(new Pa({ab:f})):new Me(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}n=Uu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ji(){}ji.prototype.g=function(o,u){return new At(o,u)};function At(o,u){j.call(this),this.g=new Pu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!E(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Or(this)}p(At,j),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ka(this.g)},At.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ve(o),o=f);u.i.push(new Dg(u.Ya++,o)),u.I==3&&Fi(u)},At.prototype.N=function(){this.g.l=null,delete this.j,ka(this.g),delete this.g,At.Z.N.call(this)};function ju(o){Vr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(ju,Vr);function Bu(){Xe.call(this),this.status=1}p(Bu,Xe);function Or(o){this.g=o}p(Or,Uu),Or.prototype.ra=function(){U(this.g,"a")},Or.prototype.qa=function(o){U(this.g,new ju(o))},Or.prototype.pa=function(o){U(this.g,new Bu)},Or.prototype.oa=function(){U(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Gp=function(){return new ji},Wp=function(){return ir()},Kp=Qe,bc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,lo=Di,ru.COMPLETE="complete",zp=ru,wt.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",j.prototype.listen=j.prototype.J,js=wt,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,Hp=Me}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="12.12.0";function tA(n){fs=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new ll("@firebase/firestore");function Fr(){return br.logLevel}function W(n,...e){if(br.logLevel<=ue.DEBUG){const t=e.map(Il);br.debug(`Firestore (${fs}): ${n}`,...t)}}function bn(n,...e){if(br.logLevel<=ue.ERROR){const t=e.map(Il);br.error(`Firestore (${fs}): ${n}`,...t)}}function Sr(n,...e){if(br.logLevel<=ue.WARN){const t=e.map(Il);br.warn(`Firestore (${fs}): ${n}`,...t)}}function Il(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Qp(n,r,t)}function Qp(n,e,t){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bn(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Qp(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class iA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class oA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function he(n,e){return n<e?-1:n>e?1:0}function Sc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ec(s)===ec(i)?he(s,i):ec(s)?1:-1}return he(n.length,e.length)}const lA=55296,uA=57343;function ec(n){const e=n.charCodeAt(0);return e>=lA&&e<=uA}function rs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="__name__";class Ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const r=Ht.isNumericId(e),s=Ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(e).compare(Ht.extractNumericId(t)):Sc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Ne extends Ht{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const hA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ht{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return hA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rf}static keyField(){return new et([rf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ne.fromString(e))}static fromName(e){return new Z(Ne.fromString(e).popFirst(5))}static empty(){return new Z(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n,e,t){if(!t)throw new Q(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dA(n,e,t,r){if(e===!0&&r===!0)throw new Q(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sf(n){if(!Z.isDocumentKey(n))throw new Q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Al(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Al(n);throw new Q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e){const t={typeString:n};return e&&(t.value=e),t}function Si(n,e){if(!Yp(n))throw new Q(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=-62135596800,af=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*af);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<of)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/af}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Si(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-of;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Be("string",Ve._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ve(0,0))}static max(){return new re(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=-1;function pA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Gn(s,Z.empty(),e)}function mA(n){return new Gn(n.readTime,n.key,li)}class Gn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gn(re.min(),Z.empty(),li)}static max(){return new Gn(re.max(),Z.empty(),li)}}function gA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==_A)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function vA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ps(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ia.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=-1;function oa(n){return n==null}function No(n){return n===0&&1/n==-1/0}function EA(n){return typeof n=="number"&&Number.isInteger(n)&&!No(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="";function TA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cf(e)),e=IA(n.get(t),e);return cf(e)}function IA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Xp:t+="";break;default:t+=i}}return t}function cf(n){return n+Xp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(e){return new uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ge(this.comparator);return t.data=e,t}}class uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new St([])}unionWith(e){let t=new Ge(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new em("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=wA.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jn(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="server_timestamp",nm="__type__",rm="__previous_value__",sm="__local_write_time__";function Sl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[nm])==null?void 0:r.stringValue)===tm}function aa(n){const e=n.mapValue.fields[rm];return Sl(e)?aa(e):e}function ui(n){const e=Qn(n.mapValue.fields[sm].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t,r,s,i,a,c,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Oo="(default)";class hi{constructor(e,t){this.projectId=e,this.database=t||Oo}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}function bA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new Q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="__type__",SA="__max__",Xi={mapValue:{}},om="__vector__",xo="value";function Yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sl(n)?4:PA(n)?9007199254740991:RA(n)?10:11:ee(28295,{value:n})}function rn(n,e){if(n===e)return!0;const t=Yn(n);if(t!==Yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ui(n).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qn(s.timestampValue),c=Qn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jn(s.bytesValue).isEqual(Jn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?No(a)===No(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(lf(a)!==lf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!rn(a[l],c[l])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function fi(n,e){return(n.values||[]).find(t=>rn(t,e))!==void 0}function ss(n,e){if(n===e)return 0;const t=Yn(n),r=Yn(e);if(t!==r)return he(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return hf(n.timestampValue,e.timestampValue);case 4:return hf(ui(n),ui(e));case 5:return Sc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Jn(i),l=Jn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=he(c[h],l[h]);if(d!==0)return d}return he(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=he(Le(i.latitude),Le(a.latitude));return c!==0?c:he(Le(i.longitude),Le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ff(n.arrayValue,e.arrayValue);case 10:return function(i,a){var g,v,P,C;const c=i.fields||{},l=a.fields||{},h=(g=c[xo])==null?void 0:g.arrayValue,d=(v=l[xo])==null?void 0:v.arrayValue,p=he(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((C=d==null?void 0:d.values)==null?void 0:C.length)||0);return p!==0?p:ff(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Xi.mapValue&&a===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(a===Xi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Sc(l[p],d[p]);if(g!==0)return g;const v=ss(c[l[p]],h[d[p]]);if(v!==0)return v}return he(l.length,d.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function hf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=Qn(n),r=Qn(e),s=he(t.seconds,r.seconds);return s!==0?s:he(t.nanos,r.nanos)}function ff(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return he(t.length,r.length)}function is(n){return Rc(n)}function Rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Rc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Rc(t.fields[a])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function uo(n){switch(Yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=aa(n);return e?16+uo(e):16;case 5:return 2*n.stringValue.length;case 6:return Jn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+uo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return tr(r.fields,(i,a)=>{s+=i.length+uo(a)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function Pc(n){return!!n&&"integerValue"in n}function Rl(n){return!!n&&"arrayValue"in n}function df(n){return!!n&&"nullValue"in n}function pf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ho(n){return!!n&&"mapValue"in n}function RA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[im])==null?void 0:r.stringValue)===om}function Zs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return tr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zs(n.arrayValue.values[t]);return e}return{...n}}function PA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ho(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(t)}setAll(e){let t=et.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Zs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ho(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Zs(this.value))}}function am(n){const e=[];return tr(n.fields,(t,r)=>{const s=new et([t]);if(ho(r)){const i=am(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ot(e,0,re.min(),re.min(),re.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new ot(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new ot(e,2,t,re.min(),re.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,re.min(),re.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.position=e,this.inclusive=t}}function mf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=ss(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t="asc"){this.field=e,this.dir=t}}function CA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{}class Ke extends cm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new VA(e,t,r):t==="array-contains"?new OA(e,r):t==="in"?new xA(e,r):t==="not-in"?new MA(e,r):t==="array-contains-any"?new LA(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DA(e,r):new NA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ss(t,this.value)):t!==null&&Yn(this.value)===Yn(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends cm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new sn(e,t)}matches(e){return lm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lm(n){return n.op==="and"}function um(n){return kA(n)&&lm(n)}function kA(n){for(const e of n.filters)if(e instanceof sn)return!1;return!0}function Cc(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+is(n.value);if(um(n))return n.filters.map(e=>Cc(e)).join(",");{const e=n.filters.map(t=>Cc(t)).join(",");return`${n.op}(${e})`}}function hm(n,e){return n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(n,e):n instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&hm(a,s.filters[c]),!0):!1}(n,e):void ee(19439)}function fm(n){return n instanceof Ke?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof sn?function(t){return t.op.toString()+" {"+t.getFilters().map(fm).join(" ,")+"}"}(n):"Filter"}class VA extends Ke{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class DA extends Ke{constructor(e,t){super(e,"in",t),this.keys=dm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class NA extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=dm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class OA extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rl(t)&&fi(t.arrayValue,this.value)}}class xA extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fi(this.value.arrayValue,t)}}class MA extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fi(this.value.arrayValue,t)}}class LA extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function _f(n,e=null,t=[],r=[],s=null,i=null,a=null){return new FA(n,e,t,r,s,i,a)}function Pl(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Cc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.Te=t}return e.Te}function Cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gf(n.startAt,e.startAt)&&gf(n.endAt,e.endAt)}function kc(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function UA(n,e,t,r,s,i,a,c){return new ca(n,e,t,r,s,i,a,c)}function kl(n){return new ca(n)}function yf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jA(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function BA(n){return n.collectionGroup!==null}function ei(n){const e=ie(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ge(et.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Lo(i,r))}),t.has(et.keyField().canonicalString())||e.Ee.push(new Lo(et.keyField(),r))}return e.Ee}function Jt(n){const e=ie(n);return e.Ie||(e.Ie=$A(e,ei(n))),e.Ie}function $A(n,e){if(n.limitType==="F")return _f(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const t=n.endAt?new Mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mo(n.startAt.position,n.startAt.inclusive):null;return _f(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vc(n,e,t){return new ca(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function la(n,e){return Cl(Jt(n),Jt(e))&&n.limitType===e.limitType}function pm(n){return`${Pl(Jt(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>fm(s)).join(", ")}]`),oa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Jt(n))}; limitType=${n.limitType})`}function ua(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=mf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(a,c,l){const h=mf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(n,e)}function qA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mm(n){return(e,t)=>{let r=!1;for(const s of ei(n)){const i=HA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ss(l,h):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Oe(Z.comparator);function Sn(){return zA}const gm=new Oe(Z.comparator);function Bs(...n){let e=gm;for(const t of n)e=e.insert(t.key,t);return e}function _m(n){let e=gm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _r(){return ti()}function ym(){return ti()}function ti(){return new Pr(n=>n.toString(),(n,e)=>n.isEqual(e))}const KA=new Oe(Z.comparator),WA=new Ge(Z.comparator);function fe(...n){let e=WA;for(const t of n)e=e.add(t);return e}const GA=new Ge(he);function QA(){return GA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function vm(n){return{integerValue:""+n}}function JA(n,e){return EA(e)?vm(e):Vl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this._=void 0}}function YA(n,e,t){return n instanceof Fo?function(s,i){const a={fields:{[nm]:{stringValue:tm},[sm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=aa(i)),i&&(a.fields[rm]=i),{mapValue:a}}(t,e):n instanceof os?Tm(n,e):n instanceof as?Im(n,e):function(s,i){const a=Em(s,i),c=vf(a)+vf(s.Ae);return Pc(a)&&Pc(s.Ae)?vm(c):Vl(s.serializer,c)}(n,e)}function XA(n,e,t){return n instanceof os?Tm(n,e):n instanceof as?Im(n,e):t}function Em(n,e){return n instanceof Uo?function(r){return Pc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fo extends ha{}class os extends ha{constructor(e){super(),this.elements=e}}function Tm(n,e){const t=wm(e);for(const r of n.elements)t.some(s=>rn(s,r))||t.push(r);return{arrayValue:{values:t}}}class as extends ha{constructor(e){super(),this.elements=e}}function Im(n,e){let t=wm(e);for(const r of n.elements)t=t.filter(s=>!rn(s,r));return{arrayValue:{values:t}}}class Uo extends ha{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function vf(n){return Le(n.integerValue||n.doubleValue)}function wm(n){return Rl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t){this.field=e,this.transform=t}}function ZA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof os&&s instanceof os||r instanceof as&&s instanceof as?rs(r.elements,s.elements,rn):r instanceof Uo&&s instanceof Uo?rn(r.Ae,s.Ae):r instanceof Fo&&s instanceof Fo}(n.transform,e.transform)}class eb{constructor(e,t){this.version=e,this.transformResults=t}}class Yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fa{}function bm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rm(n.key,Yt.none()):new Ri(n.key,n.data,Yt.none());{const t=n.data,r=Et.empty();let s=new Ge(et.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new nr(n.key,r,new St(s.toArray()),Yt.none())}}function tb(n,e,t){n instanceof Ri?function(s,i,a){const c=s.value.clone(),l=Tf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof nr?function(s,i,a){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Tf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Sm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ni(n,e,t,r){return n instanceof Ri?function(i,a,c,l){if(!fo(i.precondition,a))return c;const h=i.value.clone(),d=If(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof nr?function(i,a,c,l){if(!fo(i.precondition,a))return c;const h=If(i.fieldTransforms,l,a),d=a.data;return d.setAll(Sm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return fo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function nb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Em(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function Ef(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,a)=>ZA(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ri extends fa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends fa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tf(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,XA(a,c,t[s]))}return r}function If(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,YA(i,a,e))}return r}class Rm extends fa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rb extends fa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ym();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=bm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),fe())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(t,r)=>Ef(t,r))&&rs(this.baseMutations,e.baseMutations,(t,r)=>Ef(t,r))}}class Dl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Dl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,me;function ab(n){switch(n){case L.OK:return ee(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Pm(n){if(n===void 0)return bn("GRPC error has no .code"),L.UNKNOWN;switch(n){case Ue.OK:return L.OK;case Ue.CANCELLED:return L.CANCELLED;case Ue.UNKNOWN:return L.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return L.INTERNAL;case Ue.UNAVAILABLE:return L.UNAVAILABLE;case Ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ue.NOT_FOUND:return L.NOT_FOUND;case Ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ue.ABORTED:return L.ABORTED;case Ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ue.DATA_LOSS:return L.DATA_LOSS;default:return ee(39323,{code:n})}}(me=Ue||(Ue={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new zn([4294967295,4294967295],0);function wf(n){const e=cb().encode(n),t=new qp;return t.update(e),new Uint8Array(t.digest())}function Af(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([t,r],0),new zn([s,i],0)]}class Nl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(zn.fromNumber(r)));return s.compare(lb)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=wf(e),[r,s]=Af(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Nl(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=wf(e),[r,s]=Af(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new da(re.min(),s,new Oe(he),Sn(),fe())}}class Pi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Pi(r,t,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Cm{constructor(e,t){this.targetId=e,this.Ce=t}}class km{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bf{constructor(){this.ve=0,this.Fe=Sf(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),t=fe(),r=fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Pi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Sf()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ub{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=Zi(),this.He=Zi(),this.Ze=new Oe(he)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(kc(i))if(r===0){const a=new Z(i.path);this.et(t,a,ot.newNoDocument(a,re.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Jn(r).toUint8Array()}catch(l){if(l instanceof em)return Sr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nl(a,s,i)}catch(l){return Sr(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&kc(c.target)){const l=new Z(c.target.path);this.Et(l).has(a)||this.It(a,l)||this.et(a,l,ot.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=fe();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new da(e,t,this.Ze,this.je,r);return this.je=Sn(),this.Je=Zi(),this.He=Zi(),this.Ze=new Oe(he),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new bf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Ge(he),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ge(he),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zi(){return new Oe(Z.comparator)}function Sf(){return new Oe(Z.comparator)}const hb={asc:"ASCENDING",desc:"DESCENDING"},fb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},db={and:"AND",or:"OR"};class pb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dc(n,e){return n.useProto3Json||oa(e)?e:{value:e}}function jo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mb(n,e){return jo(n,e.toTimestamp())}function Xt(n){return Ie(!!n,49232),re.fromTimestamp(function(t){const r=Qn(t);return new Ve(r.seconds,r.nanos)}(n))}function Ol(n,e){return Nc(n,e).canonicalString()}function Nc(n,e){const t=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dm(n){const e=Ne.fromString(n);return Ie(Lm(e),10190,{key:e.toString()}),e}function Oc(n,e){return Ol(n.databaseId,e.path)}function tc(n,e){const t=Dm(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Om(t))}function Nm(n,e){return Ol(n.databaseId,e)}function gb(n){const e=Dm(n);return e.length===4?Ne.emptyPath():Om(e)}function xc(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Om(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rf(n,e,t){return{name:Oc(n,e),fields:t.value.mapValue.fields}}function _b(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),nt.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),nt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?L.UNKNOWN:Pm(h.code);return new Q(d,h.message||"")}(a);t=new km(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tc(n,r.document.name),i=Xt(r.document.updateTime),a=r.document.createTime?Xt(r.document.createTime):re.min(),c=new Et({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new po(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tc(n,r.document),i=r.readTime?Xt(r.readTime):re.min(),a=ot.newNoDocument(s,i),c=r.removedTargetIds||[];t=new po([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tc(n,r.document),i=r.removedTargetIds||[];t=new po([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ob(s,i),c=r.targetId;t=new Cm(c,a)}}return t}function yb(n,e){let t;if(e instanceof Ri)t={update:Rf(n,e.key,e.value)};else if(e instanceof Rm)t={delete:Oc(n,e.key)};else if(e instanceof nr)t={update:Rf(n,e.key,e.data),updateMask:Rb(e.fieldMask)};else{if(!(e instanceof rb))return ee(16599,{dt:e.type});t={verify:Oc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof os)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof as)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Uo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function vb(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Xt(s.updateTime):Xt(i);return a.isEqual(re.min())&&(a=Xt(i)),new eb(a,s.transformResults||[])}(t,e))):[]}function Eb(n,e){return{documents:[Nm(n,e.path)]}}function Tb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Nm(n,s);const i=function(h){if(h.length!==0)return Mm(sn.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:jr(g.field),direction:Ab(g.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Dc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Ib(n){let e=gb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const g=xm(p);return g instanceof sn&&um(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(P){return new Lo(Br(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,oa(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new Mo(v,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new Mo(v,g)}(t.endAt)),UA(e,s,a,i,c,"F",l,h)}function wb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Br(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(t.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(t.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Br(t.unaryFilter.field);return Ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ke.create(Br(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return sn.create(t.compositeFilter.filters.map(r=>xm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function Ab(n){return hb[n]}function bb(n){return fb[n]}function Sb(n){return db[n]}function jr(n){return{fieldPath:n.canonicalString()}}function Br(n){return et.fromServerFormat(n.fieldPath)}function Mm(n){return n instanceof Ke?function(t){if(t.op==="=="){if(pf(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NAN"}};if(df(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pf(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NAN"}};if(df(t.value))return{unaryFilter:{field:jr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(t.field),op:bb(t.op),value:t.value}}}(n):n instanceof sn?function(t){const r=t.getFilters().map(s=>Mm(s));return r.length===1?r[0]:{compositeFilter:{op:Sb(t.op),filters:r}}}(n):ee(54877,{filter:n})}function Rb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Fm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,r,s,i=re.min(),a=re.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.yt=e}}function Cb(n){const e=Ib({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.bn=new Vb}addToCollectionParentIndex(e,t){return this.bn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Gn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Vb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ge(Ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Um=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Um,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new cs(0)}static ar(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="LruGarbageCollector",Db=1048576;function kf([n,e],[t,r]){const s=he(n,t);return s===0?he(e,r):s}class Nb{constructor(e){this.Pr=e,this.buffer=new Ge(kf),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ob{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Cf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ps(t)?W(Cf,"Ignoring IndexedDB error during garbage collection: ",t):await ds(t)}await this.Ar(3e5)})}}class xb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ia.ce);const r=new Nb(t);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Pf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Fr()<=ue.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Mb(n,e){return new xb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changes=new Pr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ni(r.mutation,s,St.empty(),Ve.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=fe()){const s=_r();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Bs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=_r();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,fe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Sn();const a=ti(),c=function(){return ti()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof nr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new Fb(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=ti();let s=new Oe((a,c)=>a-c),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||St.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=ym();d.forEach(g=>{if(!i.has(g)){const v=bm(t.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return jA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(_r());let c=li,l=i;return a.next(h=>N.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,fe())).next(d=>({batchId:c,changes:_m(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const h=function(p,g){return new ca(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ot.newInvalidDocument(d)))});let c=Bs();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ni(d.mutation,h,St.empty(),Ve.now()),ua(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return N.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Cb(s.bundledQuery),readTime:Xt(s.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.overlays=new Oe(Z.comparator),this.Lr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_r();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=_r(),i=t.length+1,a=new Z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=_r(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=_r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return N.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ib(t,r));let i=this.Lr.get(t);i===void 0&&(i=fe(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.kr=new Ge(Ye.qr),this.Kr=new Ge(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ye(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ye(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new Z(new Ne([])),r=new Ye(t,e),s=new Ye(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new Z(new Ne([])),r=new Ye(t,e),s=new Ye(t,e+1);let i=fe();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ye(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return Z.comparator(e.key,t.key)||he(e.Jr,t.Jr)}static Ur(e,t){return he(e.Jr,t.Jr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Ge(Ye.qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sb(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?bl:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ye(t,0),s=new Ye(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ge(he);return t.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{r=r.add(c.Jr)})}),N.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new Z(i),0);let c=new Ge(he);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)},a),N.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ie(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return N.forEach(t.mutations,s=>{const i=new Ye(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ye(t,0),s=this.Hr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.ti=e,this.docs=function(){return new Oe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Sn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Sn();const a=t.path,c=new Z(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gA(mA(d),r)<=0||(s.has(d.key)||ua(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ni(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new zb(this)}getSize(e){return N.resolve(this.size)}}class zb extends Lb{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.persistence=e,this.ri=new Pr(t=>Pl(t),Cl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.ii=0,this.si=new xl,this.targetCount=0,this.oi=cs._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),N.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new cs(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.lr(t),N.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t){this._i={},this.overlays={},this.ai=new ia(0),this.ui=!1,this.ui=!0,this.ci=new $b,this.referenceDelegate=e(this),this.li=new Kb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new Hb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pb(t),this.Pi=new jb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new qb(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new Wb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return N.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Wb extends yA{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Ri=new xl,this.Ai=null}static Vi(e){return new Ml(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,r=>{const s=Z.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Bo{constructor(e,t){this.persistence=e,this.fi=new Pr(r=>TA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Mb(this,t)}static Vi(e,t){return new Bo(e,t)}Ti(){}Ei(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return N.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uo(e.data.value)),t}wr(e,t,r){return N.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return OE()?8:vA(lt())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Gb;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Fr()<=ue.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Fr()<=ue.DEBUG&&W("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Fr()<=ue.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(t))):N.resolve())}gs(e,t){if(yf(t))return N.resolve(null);let r=Jt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vc(t,null,"F"),r=Jt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=fe(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Vc(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,r,s){return yf(t)||s.isEqual(re.min())?N.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?N.resolve(null):(Fr()<=ue.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(t)),this.Ds(e,a,t,pA(s,li)).next(c=>c))})}Ss(e,t){let r=new Ge(mm(e));return t.forEach((s,i)=>{ua(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Fr()<=ue.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.fs.getDocumentsMatchingQuery(e,t,Gn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="LocalStore",Jb=3e8;class Yb{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Oe(he),this.Fs=new Pr(i=>Pl(i),Cl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ub(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Xb(n,e,t,r){return new Yb(n,e,t,r)}async function Bm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function Zb(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,g=p.keys();let v=N.resolve();return g.forEach(P=>{v=v.next(()=>d.getEntry(l,P)).next(C=>{const D=h.docVersions.get(P);Ie(D!==null,48541),C.version.compareTo(D)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),d.addEntry(C)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function $m(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function eS(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(nt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(C,D,H){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=Jb?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(g,v,d)&&c.push(t.li.updateTargetData(i,v))});let l=Sn(),h=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(tS(i,a,e.documentUpdates).next(d=>{l=d.Bs,h=d.Ls})),!r.isEqual(re.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=s,i))}function tS(n,e,t){let r=fe(),s=fe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Sn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Fl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function nS(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rS(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new Bn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Mc(n,e,t){const r=ie(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ps(a))throw a;W(Fl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Vf(n,e,t){const r=ie(n);let s=re.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=ie(l),g=p.Fs.get(d);return g!==void 0?N.resolve(p.vs.get(g)):p.li.getTargetData(h,d)}(r,a,Jt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:fe())).next(c=>(sS(r,qA(e),c),{documents:c,ks:i})))}function sS(n,e,t){let r=n.Ms.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Df{constructor(){this.activeTargetIds=QA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iS{constructor(){this.vo=new Df,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Df,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="ConnectivityMonitor";class Of{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Nf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Nf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;function Lc(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="RestConnection",aS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cS{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Lc(),c=this.Qo(e,t.toUriEncodedString());W(nc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),d=Ii(h);return this.zo(e,c,l,r,d).then(p=>(W(nc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Sr(nc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=aS[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection",Ls=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Qr extends cS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Qr.c_){const e=Wp();Ls(e,Kp.STAT_EVENT,t=>{t.stat===bc.PROXY?W(rt,"STAT_EVENT: detected buffering proxy"):t.stat===bc.NOPROXY&&W(rt,"STAT_EVENT: detected no buffering proxy")}),Qr.c_=!0}}zo(e,t,r,s,i){const a=Lc();return new Promise((c,l)=>{const h=new Hp;h.setWithCredentials(!0),h.listenOnce(zp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case lo.NO_ERROR:const p=h.getResponseJson();W(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case lo.TIMEOUT:W(rt,`RPC '${e}' ${a} timed out`),l(new Q(L.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const g=h.getStatus();if(W(rt,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const P=v==null?void 0:v.error;if(P&&P.status&&P.message){const C=function(H){const B=H.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN}(P.status);l(new Q(C,P.message))}else l(new Q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(L.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(rt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);W(rt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Lc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");W(rt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=a.createWebChannel(h,c);this.E_(d);let p=!1,g=!1;const v=new lS({Jo:P=>{g?W(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(W(rt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),W(rt,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},Ho:()=>d.close()});return Ls(d,js.EventType.OPEN,()=>{g||(W(rt,`RPC '${e}' stream ${s} transport opened.`),v.i_())}),Ls(d,js.EventType.CLOSE,()=>{g||(g=!0,W(rt,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.I_(d))}),Ls(d,js.EventType.ERROR,P=>{g||(g=!0,Sr(rt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),v.o_(new Q(L.UNAVAILABLE,"The operation could not be completed")))}),Ls(d,js.EventType.MESSAGE,P=>{var C;if(!g){const D=P.data[0];Ie(!!D,16349);const H=D,B=(H==null?void 0:H.error)||((C=H[0])==null?void 0:C.error);if(B){W(rt,`RPC '${e}' stream ${s} received error:`,B);const K=B.status;let G=function(w){const _=Ue[w];if(_!==void 0)return Pm(_)}(K),se=B.message;K==="NOT_FOUND"&&se.includes("database")&&se.includes("does not exist")&&se.includes(this.databaseId.database)&&Sr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=L.INTERNAL,se="Unknown error status: "+K+" with message "+B.message),g=!0,v.o_(new Q(G,se)),d.close()}else W(rt,`RPC '${e}' stream ${s} received:`,D),v.__(D)}}),Qr.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Gp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(n){return new Qr(n)}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n){return new pb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr.c_=!1;class qm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="PersistentStream";class Hm{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(bn(t.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new Q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(W(xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hS extends Hm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_b(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Xt(a.readTime):re.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=xc(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=kc(l)?{documents:Eb(i,l)}:{query:Tb(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Vm(i,a.resumeToken);const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=jo(i,a.snapshotVersion.toTimestamp());const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=wb(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=xc(this.serializer),t.removeTarget=e,this.q_(t)}}class fS extends Hm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vb(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=xc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yb(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{}class pS extends dS{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Nc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(L.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Nc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(L.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function mS(n,e,t,r){return new pS(n,e,t,r)}class gS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(t),this.aa=!1):W("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="RemoteStore";class _S{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{Cr(this)&&(W(Rr,"Restarting streams for network reachability change."),await async function(l){const h=ie(l);h.Ia.add(4),await Ci(h),h.Va.set("Unknown"),h.Ia.delete(4),await ma(h)}(this))})}),this.Va=new gS(r,s)}}async function ma(n){if(Cr(n))for(const e of n.Ra)await e(!0)}async function Ci(n){for(const e of n.Ra)await e(!1)}function zm(n,e){const t=ie(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),$l(t)?Bl(t):ms(t).O_()&&jl(t,e))}function Ul(n,e){const t=ie(n),r=ms(t);t.Ea.delete(e),r.O_()&&Km(t,e),t.Ea.size===0&&(r.O_()?r.L_():Cr(t)&&t.Va.set("Unknown"))}function jl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ms(n).Z_(e)}function Km(n,e){n.da.$e(e),ms(n).X_(e)}function Bl(n){n.da=new ub({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ms(n).start(),n.Va.ua()}function $l(n){return Cr(n)&&!ms(n).x_()&&n.Ea.size>0}function Cr(n){return ie(n).Ia.size===0}function Wm(n){n.da=void 0}async function yS(n){n.Va.set("Online")}async function vS(n){n.Ea.forEach((e,t)=>{jl(n,e)})}async function ES(n,e){Wm(n),$l(n)?(n.Va.ha(e),Bl(n)):n.Va.set("Unknown")}async function TS(n,e,t){if(n.Va.set("Online"),e instanceof km&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ea.delete(c),s.da.removeTarget(c))}(n,e)}catch(r){W(Rr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(n,r)}else if(e instanceof po?n.da.Xe(e):e instanceof Cm?n.da.st(e):n.da.tt(e),!t.isEqual(re.min()))try{const r=await $m(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ea.get(h);d&&i.Ea.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.Ea.get(l);if(!d)return;i.Ea.set(l,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),Km(i,l);const p=new Bn(d.target,l,h,d.sequenceNumber);jl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){W(Rr,"Failed to raise snapshot:",r),await $o(n,r)}}async function $o(n,e,t){if(!ps(e))throw e;n.Ia.add(1),await Ci(n),n.Va.set("Offline"),t||(t=()=>$m(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W(Rr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ma(n)})}function Gm(n,e){return e().catch(t=>$o(n,t,e))}async function ga(n){const e=ie(n),t=Xn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bl;for(;IS(e);)try{const s=await nS(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,wS(e,s)}catch(s){await $o(e,s)}Qm(e)&&Jm(e)}function IS(n){return Cr(n)&&n.Ta.length<10}function wS(n,e){n.Ta.push(e);const t=Xn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Qm(n){return Cr(n)&&!Xn(n).x_()&&n.Ta.length>0}function Jm(n){Xn(n).start()}async function AS(n){Xn(n).ra()}async function bS(n){const e=Xn(n);for(const t of n.Ta)e.ea(t.mutations)}async function SS(n,e,t){const r=n.Ta.shift(),s=Dl.from(r,e,t);await Gm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ga(n)}async function RS(n,e){e&&Xn(n).Y_&&await async function(r,s){if(function(a){return ab(a)&&a!==L.ABORTED}(s.code)){const i=r.Ta.shift();Xn(r).B_(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ga(r)}}(n,e),Qm(n)&&Jm(n)}async function Mf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(Rr,"RemoteStore received new credentials");const r=Cr(t);t.Ia.add(3),await Ci(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ma(t)}async function PS(n,e){const t=ie(n);e?(t.Ia.delete(2),await ma(t)):e||(t.Ia.add(2),await Ci(t),t.Va.set("Unknown"))}function ms(n){return n.ma||(n.ma=function(t,r,s){const i=ie(t);return i.sa(),new hS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:yS.bind(null,n),Yo:vS.bind(null,n),t_:ES.bind(null,n),H_:TS.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),$l(n)?Bl(n):n.Va.set("Unknown")):(await n.ma.stop(),Wm(n))})),n.ma}function Xn(n){return n.fa||(n.fa=function(t,r,s){const i=ie(t);return i.sa(),new fS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:AS.bind(null,n),t_:RS.bind(null,n),ta:bS.bind(null,n),na:SS.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await ga(n)):(await n.fa.stop(),n.Ta.length>0&&(W(Rr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ql(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(n,e){if(bn("AsyncQueue",`${e}: ${n}`),ps(n))return new Q(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static emptySet(e){return new Jr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.ga=new Oe(Z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ls{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ls(e,t,Jr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class kS{constructor(){this.queries=Ff(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Ff(),i.forEach((a,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Q(L.ABORTED,"Firestore shutting down"))}}function Ff(){return new Pr(n=>pm(n),la)}async function VS(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new CS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Hl(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&zl(t)}async function DS(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function NS(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&zl(t)}function OS(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function zl(n){n.Ca.forEach(e=>{e.next()})}var Fc,Uf;(Uf=Fc||(Fc={})).Ma="default",Uf.Cache="cache";class xS{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.key=e}}class Xm{constructor(e){this.key=e}}class MS{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=fe(),this.mutatedKeys=fe(),this.eu=mm(e),this.tu=new Jr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Lf,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),v=ua(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;g&&v?g.data.isEqual(v.data)?P!==C&&(r.track({type:3,doc:v}),D=!0):this.su(g,v)||(r.track({type:2,doc:v}),D=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),D=!0):g&&!v&&(r.track({type:1,doc:g}),D=!0,(l||h)&&(c=!0)),D&&(v?(a=a.add(v),i=C?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((d,p)=>function(v,P){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:D})}};return C(v)-C(P)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,a.length!==0||h?{snapshot:new ls(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Xm(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Ym(r))}),t}cu(e){this.Za=e.ks,this.Ya=fe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ls.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Kl="SyncEngine";class LS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class FS{constructor(e){this.key=e,this.hu=!1}}class US{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Pr(c=>pm(c),la),this.Eu=new Map,this.Iu=new Set,this.Ru=new Oe(Z.comparator),this.Au=new Map,this.Vu=new xl,this.du={},this.mu=new Map,this.fu=cs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jS(n,e,t=!0){const r=sg(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Zm(r,e,t,!0),s}async function BS(n,e){const t=sg(n);await Zm(t,e,!0,!1)}async function Zm(n,e,t,r){const s=await rS(n.localStore,Jt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await $S(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&zm(n.remoteStore,s),c}async function $S(n,e,t,r,s){n.pu=(p,g,v)=>async function(C,D,H,B){let K=D.view.ru(H);K.bs&&(K=await Vf(C.localStore,D.query,!1).then(({documents:w})=>D.view.ru(w,K)));const G=B&&B.targetChanges.get(D.targetId),se=B&&B.targetMismatches.get(D.targetId)!=null,_e=D.view.applyChanges(K,C.isPrimaryClient,G,se);return Bf(C,D.targetId,_e.au),_e.snapshot}(n,p,g,v);const i=await Vf(n.localStore,e,!0),a=new MS(e,i.ks),c=a.ru(i.documents),l=Pi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Bf(n,t,h.au);const d=new LS(e,t,a);return n.Tu.set(e,d),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot}async function qS(n,e,t){const r=ie(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(a=>!la(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ul(r.remoteStore,s.targetId),Uc(r,s.targetId)}).catch(ds)):(Uc(r,s.targetId),await Mc(r.localStore,s.targetId,!0))}async function HS(n,e){const t=ie(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ul(t.remoteStore,r.targetId))}async function zS(n,e,t){const r=XS(n);try{const s=await function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce((v,P)=>v.add(P.key),fe());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Sn(),C=fe();return l.xs.getEntries(v,d).next(D=>{P=D,P.forEach((H,B)=>{B.isValidDocument()||(C=C.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,P)).next(D=>{p=D;const H=[];for(const B of c){const K=nb(B,p.get(B.key).overlayedDocument);K!=null&&H.push(new nr(B.key,K,am(K.value.mapValue),Yt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,H,c)}).next(D=>{g=D;const H=D.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(v,D.batchId,H)})}).then(()=>({batchId:g.batchId,changes:_m(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.du[a.currentUser.toKey()];h||(h=new Oe(he)),h=h.insert(c,l),a.du[a.currentUser.toKey()]=h}(r,s.batchId,t),await ki(r,s.changes),await ga(r.remoteStore)}catch(s){const i=Hl(s,"Failed to persist write");t.reject(i)}}async function eg(n,e){const t=ie(n);try{const r=await eS(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Ie(a.hu,14607):s.removedDocuments.size>0&&(Ie(a.hu,42227),a.hu=!1))}),await ki(t,r,e)}catch(r){await ds(r)}}function jf(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&zl(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KS(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Oe(Z.comparator);a=a.insert(i,ot.newNoDocument(i,re.min()));const c=fe().add(i),l=new da(re.min(),new Map,new Oe(he),a,c);await eg(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Wl(r)}else await Mc(r.localStore,e,!1).then(()=>Uc(r,e,t)).catch(ds)}async function WS(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Zb(t.localStore,e);ng(t,r,null),tg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await ds(s)}}async function GS(n,e,t){const r=ie(n);try{const s=await function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);ng(r,e,t),tg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await ds(s)}}function tg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function ng(n,e,t){const r=ie(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Uc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||rg(n,r)})}function rg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ul(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Wl(n))}function Bf(n,e,t){for(const r of t)r instanceof Ym?(n.Vu.addReference(r.key,e),QS(n,r)):r instanceof Xm?(W(Kl,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||rg(n,r.key)):ee(19791,{wu:r})}function QS(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(W(Kl,"New document in limbo: "+t),n.Iu.add(r),Wl(n))}function Wl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Z(Ne.fromString(e)),r=n.fu.next();n.Au.set(r,new FS(t)),n.Ru=n.Ru.insert(t,r),zm(n.remoteStore,new Bn(Jt(kl(t.path)),r,"TargetPurposeLimboResolution",ia.ce))}}async function ki(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{a.push(r.pu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ll.Is(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,g=>N.forEach(g.Ts,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>N.forEach(g.Es,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!ps(p))throw p;W(Fl,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=d.vs.get(g),P=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(g,C)}}}(r.localStore,i))}async function JS(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Kl,"User change. New user:",e.toKey());const r=await Bm(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Q(L.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Ns)}}function YS(n,e){const t=ie(n),r=t.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=t.Eu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function sg(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KS.bind(null,e),e.Pu.H_=NS.bind(null,e.eventManager),e.Pu.yu=OS.bind(null,e.eventManager),e}function XS(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GS.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Xb(this.persistence,new Qb,e.initialUser,this.serializer)}Cu(e){return new jm(Ml.Vi,this.serializer)}Du(e){return new iS}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class ZS extends qo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ie(this.persistence.referenceDelegate instanceof Bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ob(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new jm(r=>Bo.Vi(r,t),this.serializer)}}class jc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await PS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kS}()}createDatastore(e){const t=pa(e.databaseInfo.databaseId),r=uS(e.databaseInfo);return mS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new _S(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>jf(this.syncEngine,t,0),function(){return Of.v()?new Of:new oS}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new US(s,i,a,c,l,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);W(Rr,"RemoteStore shutting down."),i.Ia.add(5),await Ci(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}jc.provider={build:()=>new jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class tR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=wl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sc(n,e){n.asyncQueue.verifyOperationInProgress(),W(Zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $f(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nR(n);W(Zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Mf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Mf(e.remoteStore,s)),n._onlineComponents=e}async function nR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Zn,"Using user provided OfflineComponentProvider");try{await sc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Sr("Error using user provided cache. Falling back to memory cache: "+t),await sc(n,new qo)}}else W(Zn,"Using default OfflineComponentProvider"),await sc(n,new ZS(void 0));return n._offlineComponents}async function ig(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Zn,"Using user provided OnlineComponentProvider"),await $f(n,n._uninitializedComponentsProvider._online)):(W(Zn,"Using default OnlineComponentProvider"),await $f(n,new jc))),n._onlineComponents}function rR(n){return ig(n).then(e=>e.syncEngine)}async function qf(n){const e=await ig(n),t=e.eventManager;return t.onListen=jS.bind(null,e.syncEngine),t.onUnlisten=qS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=HS.bind(null,e.syncEngine),t}function sR(n,e,t,r){const s=new eR(r),i=new xS(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>VS(await qf(n),i)),()=>{s.Nu(),n.asyncQueue.enqueueAndForget(async()=>DS(await qf(n),i))}}function iR(n,e){const t=new Tr;return n.asyncQueue.enqueueAndForget(async()=>zS(await rR(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="ComponentProvider",Hf=new Map;function aR(n,e,t,r,s){return new AA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,og(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firestore.googleapis.com",zf=!0;class Kf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ag,this.ssl=zf}else this.host=e.host,this.ssl=e.ssl??zf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Um;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Db)throw new Q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=og(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gl{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nA;switch(r.type){case"firstParty":return new oA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hf.get(t);r&&(W(oR,"Removing Datastore"),Hf.delete(t),r.terminate())}(this),Promise.resolve()}}function cR(n,e,t,r={}){var h;n=Kn(n,Gl);const s=Ii(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&op(`https://${c}`),i.host!==ag&&i.host!==c&&Sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!In(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=st.MOCK_USER;else{d=RE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new st(g)}n._authCredentials=new rA(new Jp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Si(t,We._jsonSchema))return new We(e,r||null,new Z(Ne.fromString(t.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Be("string",We._jsonSchemaVersion),referencePath:Be("string")};class di extends _a{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new Z(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function un(n,e,...t){if(n=ut(n),arguments.length===1&&(e=wl.newId()),fA("doc","path",e),n instanceof Gl){const r=Ne.fromString(e,...t);return sf(r),new We(n,null,new Z(r))}{if(!(n instanceof We||n instanceof di))throw new Q(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return sf(r),new We(n.firestore,n instanceof di?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="AsyncQueue";class Gf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qm(this,"async_queue_retry"),this._c=()=>{const r=rc();r&&W(Wf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=rc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=rc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Tr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ps(e))throw e;W(Wf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",Qf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ql.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:Qf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class pi extends Gl{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Gf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gf(e),this._firestoreClient=void 0,await e}}}function lR(n,e){const t=typeof n=="object"?n:up(),r=typeof n=="string"?n:Oo,s=hl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bE("firestore");i&&cR(s,...i)}return s}function cg(n){if(n._terminated)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uR(n),n._firestoreClient}function uR(n){var r,s,i,a;const e=n._freezeSettings(),t=aR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(nt.fromBase64String(e))}catch(t){throw new Q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Si(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Be("string",Pt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(Si(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:Be("string",Zt._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Si(e,Lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Lt(e.vectorValues);throw new Q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lt._jsonSchemaVersion="firestore/vectorValue/1.0",Lt._jsonSchema={type:Be("string",Lt._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=/^__.*__$/;class fR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}class lg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ug(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class ya{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ya({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ho(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(ug(this.dataSource)&&hR.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class dR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||pa(e)}I(e,t,r,s=!1){return new ya({dataSource:e,methodName:t,targetDoc:r,path:et.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(n){const e=n._freezeSettings(),t=pa(n._databaseId);return new dR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pR(n,e,t,r,s,i={}){const a=n.I(i.merge||i.mergeFields?2:0,e,t,s);Xl("Data must be an object, but it was:",a,r);const c=dg(r,a);let l,h;if(i.merge)l=new St(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=mi(e,p,t);if(!a.contains(g))throw new Q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);gg(d,g)||d.push(g)}l=new St(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new fR(new Et(c),l,h)}class va extends Vi{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}function fg(n,e,t){return new ya({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Jl extends Vi{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=fg(this,e,!0),r=this.Sc.map(i=>gs(i,t)),s=new os(r);return new Am(e.path,s)}isEqual(e){return e instanceof Jl&&In(this.Sc,e.Sc)}}class Yl extends Vi{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=fg(this,e,!0),r=this.Sc.map(i=>gs(i,t)),s=new as(r);return new Am(e.path,s)}isEqual(e){return e instanceof Yl&&In(this.Sc,e.Sc)}}function mR(n,e,t,r){const s=n.I(1,e,t);Xl("Data must be an object, but it was:",s,r);const i=[],a=Et.empty();tr(r,(l,h)=>{const d=mg(e,l,t);h=ut(h);const p=s.fc(d);if(h instanceof va)i.push(d);else{const g=gs(h,p);g!=null&&(i.push(d),a.set(d,g))}});const c=new St(i);return new lg(a,c,s.fieldTransforms)}function gR(n,e,t,r,s,i){const a=n.I(1,e,t),c=[mi(e,r,t)],l=[s];if(i.length%2!=0)throw new Q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(mi(e,i[g])),l.push(i[g+1]);const h=[],d=Et.empty();for(let g=c.length-1;g>=0;--g)if(!gg(h,c[g])){const v=c[g];let P=l[g];P=ut(P);const C=a.fc(v);if(P instanceof va)h.push(v);else{const D=gs(P,C);D!=null&&(h.push(v),d.set(v,D))}}const p=new St(h);return new lg(d,p,a.fieldTransforms)}function gs(n,e){if(pg(n=ut(n)))return Xl("Unsupported field value:",e,n),dg(n,e);if(n instanceof Vi)return function(r,s){if(!ug(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=gs(c,s.gc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Vm(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ol(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lt)return function(a,c){const l=a instanceof Lt?a.toArray():a;return{mapValue:{fields:{[im]:{stringValue:om},[xo]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return Vl(c.serializer,d)})}}}}}}(r,s);if(Fm(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Al(r)}`)}(n,e)}function dg(n,e){const t={};return Zp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(n,(r,s)=>{const i=gs(s,e.dc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function pg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Zt||n instanceof Pt||n instanceof We||n instanceof Vi||n instanceof Lt||Fm(n))}function Xl(n,e,t){if(!pg(t)||!Yp(t)){const r=Al(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function mi(n,e,t){if((e=ut(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return mg(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const _R=new RegExp("[~\\*/\\[\\]]");function mg(n,e,t){if(e.search(_R)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ql(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(L.INVALID_ARGUMENT,c+n+l)}function gg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{convertValue(e,t="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[xo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Le(a.doubleValue));return new Lt(t)}convertGeoPoint(e){return new Zt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=Qn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Ie(Lm(r),9688,{name:e});const s=new hi(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends yR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function yg(...n){return new Jl("arrayUnion",n)}function vg(...n){return new Yl("arrayRemove",n)}const Jf="@firebase/firestore",Yf="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(mi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vR extends Eg{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function TR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends Eg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ir._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ir._jsonSchema={type:Be("string",Ir._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class mo extends Ir{data(e={}){return super.data(e)}}class Yr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mo(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new mo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:IR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr._jsonSchemaVersion="firestore/querySnapshot/1.0",Yr._jsonSchema={type:Be("string",Yr._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};function wR(n,e,t){n=Kn(n,We);const r=Kn(n.firestore,pi),s=TR(n.converter,e),i=hg(r);return Ig(r,[pR(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Yt.none())])}function pr(n,e,t,...r){n=Kn(n,We);const s=Kn(n.firestore,pi),i=hg(s);let a;return a=typeof(e=ut(e))=="string"||e instanceof Ql?gR(i,"updateDoc",n._key,e,t,r):mR(i,"updateDoc",n._key,e),Ig(s,[a.toMutation(n._key,Yt.exists(!0))])}function Tg(n,...e){var h,d,p;n=ut(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Xf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Xf(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(d=g.error)==null?void 0:d.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,a,c;if(n instanceof We)a=Kn(n.firestore,pi),c=kl(n._key.path),i={next:g=>{e[r]&&e[r](AR(a,n,g))},error:e[r+1],complete:e[r+2]};else{const g=Kn(n,_a);a=Kn(g.firestore,pi),c=g._query;const v=new _g(a);i={next:P=>{e[r]&&e[r](new Yr(a,v,g,P))},error:e[r+1],complete:e[r+2]},ER(n._query)}const l=cg(a);return sR(l,c,s,i)}function Ig(n,e){const t=cg(n);return iR(t,e)}function AR(n,e,t){const r=t.docs.get(e._key),s=new _g(n);return new Ir(n,s,e._key,r,new qs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){tA(us),ts(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new pi(new sA(r.getProvider("auth-internal")),new aA(a,r.getProvider("app-check-internal")),bA(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Hn(Jf,Yf,e),Hn(Jf,Yf,"esm2020")})();const bR={apiKey:"AIzaSyCx8K8iblME6WYh0r9GiqoUyL-D7L5pmPw",authDomain:"codetrace-cca94.firebaseapp.com",projectId:"codetrace-cca94",storageBucket:"codetrace-cca94.firebasestorage.app",messagingSenderId:"437982024269",appId:"1:437982024269:web:f54c8223a633b2ce194204"},wg=lp(bR),ic=Zw(wg),hn=lR(wg),SR=new gn;function RR(){const n=je(null),e=async()=>{try{console.log("GitHub 로그인 시도...");const r=await cw(ic,SR);console.log("로그인 성공:",r.user)}catch(r){console.error("로그인 실패 상세:",r),alert(`로그인 실패: ${r.message}`)}},t=()=>$I(ic);return il(()=>{BI(ic,r=>{n.value=r})}),{currentUser:n,handleLogin:e,handleLogout:t}}const PR=n=>n.includes("programmers.co.kr")?"Programmers":n.includes("codeup.kr")?"CodeUp":"Unknown",CR=n=>{const t=new DOMParser().parseFromString(n,"text/html");let r=t.title||"제목 없음";r=r.replace("코딩테스트 연습 - ","").replace(" | 프로그래머스 스쿨","").replace(" | 프로그래머스","").trim();let s="";const i=t.querySelector(".guide-section")||t.querySelector(".markdown-main");return i&&(s=Ag(i)),{title:r,content:s+`

---

### 💡 나의 풀이
\`\`\`cpp
// 코드를 작성하세요
\`\`\`

### 📝 복기 및 배운 점
- 

### 🔗 참고 자료
- 
`}},kR=n=>{const t=new DOMParser().parseFromString(n,"text/html"),r=t.querySelector(".problem-title")||t.querySelector("h1")||t.querySelector(".main h1");let s=r?r.textContent.trim():"제목 없음",i="";const a=t.getElementById("pro1");return a&&(i=Ag(a)),{title:s,content:i+`

---

### 💡 나의 풀이
\`\`\`cpp
// 코드를 작성하세요
\`\`\`

### 📝 복기 및 배운 점
- 

### 🔗 참고 자료
- 
`}},Ag=n=>{const e=t=>{if(t.nodeType===3)return t.textContent;if(t.nodeType!==1)return"";const r=t.nodeName,s=t.textContent.trim();if(s==="문제 설명"||s==="문제설명")return"";switch(r){case"H1":return`
# ${s}
`;case"H2":return`
## ${s}
`;case"H3":case"H4":case"H5":return`
### ${s}
`;case"P":return`
${Array.from(t.childNodes).map(e).join("")}
`;case"UL":case"OL":let i=`
`;return t.querySelectorAll(":scope > li").forEach(a=>{i+=`- ${Array.from(a.childNodes).map(e).join("").trim()}
`}),i+`
`;case"TABLE":return VR(t);case"DIV":case"SECTION":case"ARTICLE":return Array.from(t.childNodes).map(e).join("");case"BR":return`
`;case"A":return`[${s}](${t.getAttribute("href")})`;case"PRE":return`
\`\`\`
${t.textContent.trim()}
\`\`\`
`;case"CODE":return`\`${s}​\``;case"STRONG":case"B":return` **${s}** `;default:return Array.from(t.childNodes).map(e).join("")}};return Array.from(n.childNodes).map(e).join("").trim()},VR=n=>{let e=`
`;const t=Array.from(n.querySelectorAll("tr"));return t.length===0?"":(t.forEach((r,s)=>{const i=Array.from(r.querySelectorAll("th, td"));e+=`| ${i.map(a=>a.textContent.trim().replace(/\n/g," ")).join(" | ")} |
`,s===0&&(e+=`| ${i.map(()=>"---").join(" | ")} |
`)}),e+`
`)};function DR(n){const e=je([]),t=je(!1);let r=null;const s=d=>{t.value=!0,r=Tg(un(hn,"users",d),p=>{if(p.exists()){const g=p.data();e.value=(g.problems||[]).sort((v,P)=>P.createdAt-v.createdAt)}else wR(un(hn,"users",d),{problems:[],favoriteRepos:[]});t.value=!1})};return Ws(n,d=>{d?s(d.uid):(e.value=[],r&&r())},{immediate:!0}),Yo(()=>{r&&r()}),{problems:e,isLoading:t,addProblem:async d=>{if(!(!d.trim()||!n.value))try{const p=PR(d);let g=null;if(p==="Programmers"){const B=d.match(/learn\/courses\/30\/lessons\/(\d+)/);B&&(g=B[1])}else if(p==="CodeUp"){const B=d.match(/id=(\d+)/);B&&(g=B[1])}if(!g){alert("지원하지 않는 문제 URL 형식이거나 올바르지 않은 주소입니다.");return}if(e.value.some(B=>B.id===g&&B.platform===p)){alert("이미 추가된 문제입니다.");return}t.value=!0;const v=[d,`https://api.allorigins.win/get?url=${encodeURIComponent(d)}`,`https://corsproxy.io/?${encodeURIComponent(d)}`];let P=null;for(const B of v)try{const K=new AbortController,G=setTimeout(()=>K.abort(),1e4),se=await fetch(B,{signal:K.signal});if(clearTimeout(G),se.ok){if(B===d)P=await se.text();else{const _e=await se.json();P=_e.contents||_e}if(P&&(P.includes("school.programmers.co.kr")||P.includes("codeup.kr")))break}}catch{console.warn("프록시 시도 실패")}if(!P)throw new Error("데이터 로드 실패");let C,D;p==="Programmers"?{title:C,content:D}=CR(P):{title:C,content:D}=kR(P);const H={id:g,title:C,url:d,memo:D,tags:[],platform:p,createdAt:Date.now()};return await pr(un(hn,"users",n.value.uid),{problems:yg(H)}),g}catch(p){console.error(p),alert("문제를 가져오지 못했습니다.")}finally{t.value=!1}},deleteProblem:async d=>{if(!confirm("정말 삭제하시겠습니까?"))return;const p=e.value.find(g=>g.id===d);p&&n.value&&await pr(un(hn,"users",n.value.uid),{problems:vg(p)})},updateProblemMemo:async(d,p)=>{if(!n.value||!d)return;const g=e.value.map(v=>v.id===d?{...v,memo:p}:v);await pr(un(hn,"users",n.value.uid),{problems:g})},addTag:async(d,p)=>{if(!p||!n.value||!d)return;const g=e.value.map(v=>{if(v.id===d){const P=v.tags||[];return P.includes(p)?v:{...v,tags:[...P,p]}}return v});await pr(un(hn,"users",n.value.uid),{problems:g})},removeTag:async(d,p)=>{if(!n.value||!d)return;const g=e.value.map(v=>v.id===d?{...v,tags:(v.tags||[]).filter(P=>P!==p)}:v);await pr(un(hn,"users",n.value.uid),{problems:g})}}}function NR(n){const e=je(""),t=je([]),r=je([]),s=je(!1),i=je(null),a=je([]);let c=null;const l=P=>{c=Tg(un(hn,"users",P),C=>{if(C.exists()){const D=C.data();a.value=D.favoriteRepos||[]}})};return Ws(n,P=>{P?l(P.uid):(a.value=[],c&&c())},{immediate:!0}),Yo(()=>{c&&c()}),{githubRepo:e,githubFiles:t,githubPath:r,githubIsLoading:s,selectedGithubFile:i,favoriteRepos:a,fetchRepo:async P=>{let C=P||e.value.trim();if(C){if(C.includes("github.com")){const D=C.replace("https://","").replace("http://","").split("/");D.length>=3&&(C=`${D[1]}/${D[2]}`)}s.value=!0;try{const D=await fetch(`https://api.github.com/repos/${C}/contents/`);if(!D.ok)throw new Error("저장소를 찾을 수 없습니다.");const H=await D.json();t.value=H,r.value=[],e.value=C}catch(D){alert(D.message)}finally{s.value=!1}}},navigateFolder:async P=>{s.value=!0;try{const D=await(await fetch(P.url)).json();t.value=D,r.value.push(P)}catch{alert("폴더를 열 수 없습니다.")}finally{s.value=!1}},goBack:async()=>{if(r.value.length!==0){r.value.pop(),s.value=!0;try{const P=r.value.length===0?`https://api.github.com/repos/${e.value}/contents/`:r.value[r.value.length-1].url,D=await(await fetch(P)).json();t.value=D}catch{alert("이전 경로로 돌아갈 수 없습니다.")}finally{s.value=!1}}},viewFile:async P=>{s.value=!0;try{const D=await(await fetch(P.download_url)).text();i.value={...P,content:D}}catch{alert("파일을 불러올 수 없습니다.")}finally{s.value=!1}},toggleFavoriteRepo:async()=>{if(!n.value||!e.value)return;const P=un(hn,"users",n.value.uid);a.value.includes(e.value)?await pr(P,{favoriteRepos:vg(e.value)}):await pr(P,{favoriteRepos:yg(e.value)})}}}const OR=["title"],xR={class:"main-layout"},MR={__name:"App",setup(n){const e=Ju(()=>Sh(()=>import("./NoteEditor-DLLU5xmW.js"),__vite__mapDeps([0,1,2]))),t=Ju(()=>Sh(()=>import("./GithubExplorer-BoDDzadS.js"),__vite__mapDeps([3,1,4]))),r=je("notes"),s=je(null),i=je(!1),a=je(!0),{isDarkMode:c,toggleDarkMode:l,initTheme:h}=gE(),{currentUser:d,handleLogin:p,handleLogout:g}=RR(),{problems:v,isLoading:P,addProblem:C,deleteProblem:D,updateProblemMemo:H,addTag:B,removeTag:K}=DR(d),{githubRepo:G,githubFiles:se,githubPath:_e,githubIsLoading:w,selectedGithubFile:_,favoriteRepos:T,fetchRepo:b,navigateFolder:I,goBack:S,viewFile:E,toggleFavoriteRepo:Fe}=NR(d),ht=Ao(()=>v.value.find(ce=>ce.id===s.value)),qe=async ce=>{const Pe=await C(ce);Pe&&(s.value=Pe)},Ae=()=>{if(!ht.value||!_.value)return alert("첨부할 노트를 먼저 선택해주세요.");const ce=_.value.name.split(".").pop(),gt={js:"javascript",ts:"typescript",py:"python",cpp:"cpp",java:"java"}[ce]||ce,Rt=`

---
### 📂 Attached from GitHub: ${_.value.name}
[View Original Source on GitHub](${_.value.html_url})

\`\`\`${gt}
${_.value.content}
\`\`\`
`;H(ht.value.id,ht.value.memo+Rt),r.value="notes",i.value=!1,alert("노트에 첨부되었습니다.")};return il(()=>{h()}),(ce,Pe)=>(ge(),De("div",{class:dn(["app-container",{"sidebar-closed":!a.value}])},[ke(mE,{activeTab:r.value,"onUpdate:activeTab":Pe[0]||(Pe[0]=gt=>r.value=gt),selectedId:s.value,"onUpdate:selectedId":Pe[1]||(Pe[1]=gt=>s.value=gt),problems:le(v),currentUser:le(d),isLoading:le(P),githubIsLoading:le(w),githubFiles:le(se),githubPath:le(_e),githubRepo:le(G),favoriteRepos:le(T),onAddProblem:qe,onDeleteProblem:le(D),onFetchRepo:le(b),onToggleFavoriteRepo:le(Fe),onNavigateFolder:le(I),onGoBack:le(S),onViewFile:le(E),onLogin:le(p),onLogout:le(g)},null,8,["activeTab","selectedId","problems","currentUser","isLoading","githubIsLoading","githubFiles","githubPath","githubRepo","favoriteRepos","onDeleteProblem","onFetchRepo","onToggleFavoriteRepo","onNavigateFolder","onGoBack","onViewFile","onLogin","onLogout"]),pe("button",{class:"sidebar-toggle",onClick:Pe[2]||(Pe[2]=gt=>a.value=!a.value),title:a.value?"사이드바 닫기":"사이드바 열기"},[a.value?(ge(),mr(le(Av),{key:0,size:20})):(ge(),mr(le(bv),{key:1,size:20}))],8,OR),pe("main",xR,[r.value==="notes"?(ge(),mr(le(e),{key:0,problem:ht.value,isDarkMode:le(c),isEditMode:i.value,onUpdateProblemMemo:le(H),onAddTag:le(B),onRemoveTag:le(K),onToggleDarkMode:le(l),onToggleEditMode:Pe[3]||(Pe[3]=gt=>i.value=!i.value)},null,8,["problem","isDarkMode","isEditMode","onUpdateProblemMemo","onAddTag","onRemoveTag","onToggleDarkMode"])):(ge(),mr(le(t),{key:1,selectedFile:le(_),isDarkMode:le(c),onImportToNote:Ae,onToggleDarkMode:le(l)},null,8,["selectedFile","isDarkMode","onToggleDarkMode"]))])],2))}};_v(MR).mount("#app");export{Sv as E,mt as F,kv as P,Nv as _,ge as a,De as b,Ut as c,pe as d,Us as e,Ua as f,wh as g,mr as h,je as i,ke as j,Ao as k,Sh as l,Yo as o,Ki as r,cn as t,le as u,Ka as v,Ws as w};
