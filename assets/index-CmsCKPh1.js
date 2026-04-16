var C_=Object.defineProperty;var dh=n=>{throw TypeError(n)};var x_=(n,e,t)=>e in n?C_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pe=(n,e,t)=>x_(n,typeof e!="symbol"?e+"":e,t),V_=(n,e,t)=>e.has(n)||dh("Cannot "+t);var ph=(n,e,t)=>e.has(n)?dh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Xi=(n,e,t)=>(V_(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Se={},Gr=[],Jt=()=>{},Sd=()=>!1,aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),la=n=>n.startsWith("onUpdate:"),at=Object.assign,lc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},D_=Object.prototype.hasOwnProperty,Te=(n,e)=>D_.call(n,e),re=Array.isArray,Qr=n=>Ai(n)==="[object Map]",Rd=n=>Ai(n)==="[object Set]",gh=n=>Ai(n)==="[object Date]",ae=n=>typeof n=="function",Be=n=>typeof n=="string",nn=n=>typeof n=="symbol",ve=n=>n!==null&&typeof n=="object",kd=n=>(ve(n)||ae(n))&&ae(n.then)&&ae(n.catch),Pd=Object.prototype.toString,Ai=n=>Pd.call(n),N_=n=>Ai(n).slice(8,-1),Cd=n=>Ai(n)==="[object Object]",cc=n=>Be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},O_=/-\w/g,Nt=ca(n=>n.replace(O_,e=>e.slice(1).toUpperCase())),M_=/\B([A-Z])/g,tr=ca(n=>n.replace(M_,"-$1").toLowerCase()),xd=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xa=ca(n=>n?`on${xd(n)}`:""),Wt=(n,e)=>!Object.is(n,e),po=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Vd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},uc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mh;const ua=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Be(r)?$_(r):hc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(n)||ve(n))return n}const L_=/;(?![^(]*\))/g,F_=/:([^]+)/,U_=/\/\*[^]*?\*\//g;function $_(n){const e={};return n.replace(U_,"").split(L_).forEach(t=>{if(t){const r=t.split(F_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ha(n){let e="";if(Be(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=ha(n[t]);r&&(e+=r+" ")}else if(ve(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const B_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=ac(B_);function Dd(n){return!!n||n===""}function z_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=fc(n[r],e[r]);return t}function fc(n,e){if(n===e)return!0;let t=gh(n),r=gh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=nn(n),r=nn(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?z_(n,e):!1;if(t=ve(n),r=ve(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!fc(n[o],e[o]))return!1}}return String(n)===String(e)}const Nd=n=>!!(n&&n.__v_isRef===!0),Mn=n=>Be(n)?n:n==null?"":re(n)||ve(n)&&(n.toString===Pd||!ae(n.toString))?Nd(n)?Mn(n.value):JSON.stringify(n,Od,2):String(n),Od=(n,e)=>Nd(e)?Od(n,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Za(r,i)+" =>"]=s,t),{})}:Rd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Za(t))}:nn(e)?Za(e):ve(e)&&!re(e)&&!Cd(e)?String(e):e,Za=(n,e="")=>{var t;return nn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class q_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=gt;try{return gt=this,e()}finally{gt=t}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function H_(){return gt}let Re;const el=new WeakSet;class Md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_h(this),Ud(this);const e=Re,t=Ot;Re=this,Ot=!0;try{return this.fn()}finally{$d(this),Re=e,Ot=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gc(e);this.deps=this.depsTail=void 0,_h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Ld=0,Xs,Zs;function Fd(n,e=!1){if(n.flags|=8,e){n.next=Zs,Zs=n;return}n.next=Xs,Xs=n}function dc(){Ld++}function pc(){if(--Ld>0)return;if(Zs){let e=Zs;for(Zs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $d(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),gc(r),K_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Il(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hi)||(n.globalVersion=hi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Il(n))))return;n.flags|=2;const e=n.dep,t=Re,r=Ot;Re=n,Ot=!0;try{Ud(n);const s=n.fn(n._value);(e.version===0||Wt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,Ot=r,$d(n),n.flags&=-3}}function gc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)gc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function K_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ot=!0;const jd=[];function yn(){jd.push(Ot),Ot=!1}function Tn(){const n=jd.pop();Ot=n===void 0?!0:n}function _h(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let hi=0;class W_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Ot||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new W_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,hi++,this.notify(e)}notify(e){dc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{pc()}}}function zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)zd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bl=new WeakMap,Tr=Symbol(""),Al=Symbol(""),fi=Symbol("");function rt(n,e,t){if(Ot&&Re){let r=bl.get(n);r||bl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new mc),s.map=r,s.key=t),s.track()}}function dn(n,e,t,r,s,i){const o=bl.get(n);if(!o){hi++;return}const l=c=>{c&&c.trigger()};if(dc(),e==="clear")o.forEach(l);else{const c=re(n),h=c&&cc(t);if(c&&t==="length"){const f=Number(r);o.forEach((p,_)=>{(_==="length"||_===fi||!nn(_)&&_>=f)&&l(p)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),h&&l(o.get(fi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Tr)),Qr(n)&&l(o.get(Al)));break;case"delete":c||(l(o.get(Tr)),Qr(n)&&l(o.get(Al)));break;case"set":Qr(n)&&l(o.get(Tr));break}}pc()}function Br(n){const e=ye(n);return e===n?e:(rt(e,"iterate",fi),Ct(n)?e:e.map(Ft))}function fa(n){return rt(n=ye(n),"iterate",fi),n}function Ht(n,e){return En(n)?ss(Er(n)?Ft(e):e):Ft(e)}const G_={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,n=>Ht(this,n))},concat(...n){return Br(this).concat(...n.map(e=>re(e)?Br(e):e))},entries(){return tl(this,"entries",n=>(n[1]=Ht(this,n[1]),n))},every(n,e){return cn(this,"every",n,e,void 0,arguments)},filter(n,e){return cn(this,"filter",n,e,t=>t.map(r=>Ht(this,r)),arguments)},find(n,e){return cn(this,"find",n,e,t=>Ht(this,t),arguments)},findIndex(n,e){return cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return cn(this,"findLast",n,e,t=>Ht(this,t),arguments)},findLastIndex(n,e){return cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return Br(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,e){return cn(this,"map",n,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...n){return $s(this,"push",n)},reduce(n,...e){return yh(this,"reduce",n,e)},reduceRight(n,...e){return yh(this,"reduceRight",n,e)},shift(){return $s(this,"shift")},some(n,e){return cn(this,"some",n,e,void 0,arguments)},splice(...n){return $s(this,"splice",n)},toReversed(){return Br(this).toReversed()},toSorted(n){return Br(this).toSorted(n)},toSpliced(...n){return Br(this).toSpliced(...n)},unshift(...n){return $s(this,"unshift",n)},values(){return tl(this,"values",n=>Ht(this,n))}};function tl(n,e,t){const r=fa(n),s=r[e]();return r!==n&&!Ct(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const Q_=Array.prototype;function cn(n,e,t,r,s,i){const o=fa(n),l=o!==n&&!Ct(n),c=o[e];if(c!==Q_[e]){const p=c.apply(n,i);return l?Ft(p):p}let h=t;o!==n&&(l?h=function(p,_){return t.call(this,Ht(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const f=c.call(o,h,r);return l&&s?s(f):f}function yh(n,e,t,r){const s=fa(n),i=s!==n&&!Ct(n);let o=t,l=!1;s!==n&&(i?(l=r.length===0,o=function(h,f,p){return l&&(l=!1,h=Ht(n,h)),t.call(this,h,Ht(n,f),p,n)}):t.length>3&&(o=function(h,f,p){return t.call(this,h,f,p,n)}));const c=s[e](o,...r);return l?Ht(n,c):c}function nl(n,e,t){const r=ye(n);rt(r,"iterate",fi);const s=r[e](...t);return(s===-1||s===!1)&&Ec(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function $s(n,e,t=[]){yn(),dc();const r=ye(n)[e].apply(n,t);return pc(),Tn(),r}const J_=ac("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(nn));function Y_(n){nn(n)||(n=String(n));const e=ye(this);return rt(e,"has",n),e.hasOwnProperty(n)}class Hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?ay:Qd:i?Gd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let c;if(o&&(c=G_[t]))return c;if(t==="hasOwnProperty")return Y_}const l=Reflect.get(e,t,ot(e)?e:r);if((nn(t)?qd.has(t):J_(t))||(s||rt(e,"get",t),i))return l;if(ot(l)){const c=o&&cc(t)?l:l.value;return s&&ve(c)?Rl(c):c}return ve(l)?s?Rl(l):yc(l):l}}class Kd extends Hd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const o=re(e)&&cc(t);if(!this._isShallow){const h=En(i);if(!Ct(r)&&!En(r)&&(i=ye(i),r=ye(r)),!o&&ot(i)&&!ot(r))return h||(i.value=r),!0}const l=o?Number(t)<e.length:Te(e,t),c=Reflect.set(e,t,r,ot(e)?e:s);return e===ye(s)&&(l?Wt(r,i)&&dn(e,"set",t,r):dn(e,"add",t,r)),c}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&dn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!nn(t)||!qd.has(t))&&rt(e,"has",t),r}ownKeys(e){return rt(e,"iterate",re(e)?"length":Tr),Reflect.ownKeys(e)}}class X_ extends Hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Z_=new Kd,ey=new X_,ty=new Kd(!0);const Sl=n=>n,Zi=n=>Reflect.getPrototypeOf(n);function ny(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),o=Qr(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,h=s[n](...r),f=t?Sl:e?ss:Ft;return!e&&rt(i,"iterate",c?Al:Tr),at(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function eo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ry(n,e){const t={get(s){const i=this.__v_raw,o=ye(i),l=ye(s);n||(Wt(s,l)&&rt(o,"get",s),rt(o,"get",l));const{has:c}=Zi(o),h=e?Sl:n?ss:Ft;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&rt(ye(s),"iterate",Tr),s.size},has(s){const i=this.__v_raw,o=ye(i),l=ye(s);return n||(Wt(s,l)&&rt(o,"has",s),rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ye(l),h=e?Sl:n?ss:Ft;return!n&&rt(c,"iterate",Tr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return at(t,n?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){const i=ye(this),o=Zi(i),l=ye(s),c=!e&&!Ct(s)&&!En(s)?l:s;return o.has.call(i,c)||Wt(s,c)&&o.has.call(i,s)||Wt(l,c)&&o.has.call(i,l)||(i.add(c),dn(i,"add",c,c)),this},set(s,i){!e&&!Ct(i)&&!En(i)&&(i=ye(i));const o=ye(this),{has:l,get:c}=Zi(o);let h=l.call(o,s);h||(s=ye(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?Wt(i,f)&&dn(o,"set",s,i):dn(o,"add",s,i),this},delete(s){const i=ye(this),{has:o,get:l}=Zi(i);let c=o.call(i,s);c||(s=ye(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,o=s.clear();return i&&dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ny(s,n,e)}),t}function _c(n,e){const t=ry(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const sy={get:_c(!1,!1)},iy={get:_c(!1,!0)},oy={get:_c(!0,!1)};const Wd=new WeakMap,Gd=new WeakMap,Qd=new WeakMap,ay=new WeakMap;function ly(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cy(n){return n.__v_skip||!Object.isExtensible(n)?0:ly(N_(n))}function yc(n){return En(n)?n:Tc(n,!1,Z_,sy,Wd)}function uy(n){return Tc(n,!1,ty,iy,Gd)}function Rl(n){return Tc(n,!0,ey,oy,Qd)}function Tc(n,e,t,r,s){if(!ve(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=cy(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Er(n){return En(n)?Er(n.__v_raw):!!(n&&n.__v_isReactive)}function En(n){return!!(n&&n.__v_isReadonly)}function Ct(n){return!!(n&&n.__v_isShallow)}function Ec(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function hy(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&Vd(n,"__v_skip",!0),n}const Ft=n=>ve(n)?yc(n):n,ss=n=>ve(n)?Rl(n):n;function ot(n){return n?n.__v_isRef===!0:!1}function un(n){return fy(n,!1)}function fy(n,e){return ot(n)?n:new dy(n,e)}class dy{constructor(e,t){this.dep=new mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Ct(e)||En(e);e=r?e:ye(e),Wt(e,t)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function Ln(n){return ot(n)?n.value:n}const py={get:(n,e,t)=>e==="__v_raw"?n:Ln(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ot(s)&&!ot(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Jd(n){return Er(n)?n:new Proxy(n,py)}class gy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function my(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new gy(r,s,t)}const to={},Co=new WeakMap;let gr;function _y(n,e=!1,t=gr){if(t){let r=Co.get(t);r||Co.set(t,r=[]),r.push(n)}}function yy(n,e,t=Se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,h=K=>s?K:Ct(K)||s===!1||s===0?pn(K,1):pn(K);let f,p,_,A,V=!1,C=!1;if(ot(n)?(p=()=>n.value,V=Ct(n)):Er(n)?(p=()=>h(n),V=!0):re(n)?(C=!0,V=n.some(K=>Er(K)||Ct(K)),p=()=>n.map(K=>{if(ot(K))return K.value;if(Er(K))return h(K);if(ae(K))return c?c(K,2):K()})):ae(n)?e?p=c?()=>c(n,2):n:p=()=>{if(_){yn();try{_()}finally{Tn()}}const K=gr;gr=f;try{return c?c(n,3,[A]):n(A)}finally{gr=K}}:p=Jt,e&&s){const K=p,oe=s===!0?1/0:s;p=()=>pn(K(),oe)}const $=H_(),W=()=>{f.stop(),$&&$.active&&lc($.effects,f)};if(i&&e){const K=e;e=(...oe)=>{K(...oe),W()}}let H=C?new Array(n.length).fill(to):to;const Y=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const oe=f.run();if(s||V||(C?oe.some((G,T)=>Wt(G,H[T])):Wt(oe,H))){_&&_();const G=gr;gr=f;try{const T=[oe,H===to?void 0:C&&H[0]===to?[]:H,A];H=oe,c?c(e,3,T):e(...T)}finally{gr=G}}}else f.run()};return l&&l(Y),f=new Md(p),f.scheduler=o?()=>o(Y,!1):Y,A=K=>_y(K,!1,f),_=f.onStop=()=>{const K=Co.get(f);if(K){if(c)c(K,4);else for(const oe of K)oe();Co.delete(f)}},e?r?Y(!0):H=f.run():o?o(Y.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function pn(n,e=1/0,t){if(e<=0||!ve(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ot(n))pn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)pn(n[r],e,t);else if(Rd(n)||Qr(n))n.forEach(r=>{pn(r,e,t)});else if(Cd(n)){for(const r in n)pn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&pn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Si(n,e,t,r){try{return r?n(...r):n()}catch(s){da(s,e,t)}}function rn(n,e,t,r){if(ae(n)){const s=Si(n,e,t,r);return s&&kd(s)&&s.catch(i=>{da(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(rn(n[i],e,t,r));return s}}function da(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Se;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){yn(),Si(i,null,10,[n,c,h]),Tn();return}}Ty(n,t,s,r,o)}function Ty(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ft=[];let zt=-1;const Jr=[];let Fn=null,jr=0;const Yd=Promise.resolve();let xo=null;function Ey(n){const e=xo||Yd;return n?e.then(this?n.bind(this):n):e}function wy(n){let e=zt+1,t=ft.length;for(;e<t;){const r=e+t>>>1,s=ft[r],i=di(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function wc(n){if(!(n.flags&1)){const e=di(n),t=ft[ft.length-1];!t||!(n.flags&2)&&e>=di(t)?ft.push(n):ft.splice(wy(e),0,n),n.flags|=1,Xd()}}function Xd(){xo||(xo=Yd.then(ep))}function vy(n){re(n)?Jr.push(...n):Fn&&n.id===-1?Fn.splice(jr+1,0,n):n.flags&1||(Jr.push(n),n.flags|=1),Xd()}function Th(n,e,t=zt+1){for(;t<ft.length;t++){const r=ft[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ft.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zd(n){if(Jr.length){const e=[...new Set(Jr)].sort((t,r)=>di(t)-di(r));if(Jr.length=0,Fn){Fn.push(...e);return}for(Fn=e,jr=0;jr<Fn.length;jr++){const t=Fn[jr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Fn=null,jr=0}}const di=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(zt=0;zt<ft.length;zt++){const e=ft[zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Si(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zt<ft.length;zt++){const e=ft[zt];e&&(e.flags&=-2)}zt=-1,ft.length=0,Zd(),xo=null,(ft.length||Jr.length)&&ep()}}let Pt=null,tp=null;function Vo(n){const e=Pt;return Pt=n,tp=n&&n.type.__scopeId||null,e}function Iy(n,e=Pt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Oo(-1);const i=Vo(e);let o;try{o=n(...s)}finally{Vo(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function no(n,e){if(Pt===null)return n;const t=_a(Pt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Se]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function hr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(yn(),rn(c,t,8,[n.el,l,n,e]),Tn())}}function by(n,e){if(dt){let t=dt.provides;const r=dt.parent&&dt.parent.provides;r===t&&(t=dt.provides=Object.create(r)),t[n]=e}}function go(n,e,t=!1){const r=IT();if(r||Yr){let s=Yr?Yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const Ay=Symbol.for("v-scx"),Sy=()=>go(Ay);function mo(n,e,t){return np(n,e,t)}function np(n,e,t=Se){const{immediate:r,deep:s,flush:i,once:o}=t,l=at({},t),c=e&&r||!e&&i!=="post";let h;if(gi){if(i==="sync"){const A=Sy();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=Jt,A.resume=Jt,A.pause=Jt,A}}const f=dt;l.call=(A,V,C)=>rn(A,f,V,C);let p=!1;i==="post"?l.scheduler=A=>{pt(A,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,V)=>{V?A():wc(A)}),l.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const _=yy(n,e,l);return gi&&(h?h.push(_):c&&_()),_}function Ry(n,e,t){const r=this.proxy,s=Be(n)?n.includes(".")?rp(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const o=Ri(this),l=np(s,i.bind(r),t);return o(),l}function rp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const ky=Symbol("_vte"),Py=n=>n.__isTeleport,Cy=Symbol("_leaveCb");function vc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,vc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function sp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Eh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Do=new WeakMap;function ei(n,e,t,r,s=!1){if(re(n)){n.forEach((C,$)=>ei(C,e&&(re(e)?e[$]:e),t,r,s));return}if(ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ei(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?_a(r.component):r.el,o=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Se?l.refs={}:l.refs,p=l.setupState,_=ye(p),A=p===Se?Sd:C=>Eh(f,C)?!1:Te(_,C),V=(C,$)=>!($&&Eh(f,$));if(h!=null&&h!==c){if(wh(e),Be(h))f[h]=null,A(h)&&(p[h]=null);else if(ot(h)){const C=e;V(h,C.k)&&(h.value=null),C.k&&(f[C.k]=null)}}if(ae(c))Si(c,l,12,[o,f]);else{const C=Be(c),$=ot(c);if(C||$){const W=()=>{if(n.f){const H=C?A(c)?p[c]:f[c]:V()||!n.k?c.value:f[n.k];if(s)re(H)&&lc(H,i);else if(re(H))H.includes(i)||H.push(i);else if(C)f[c]=[i],A(c)&&(p[c]=f[c]);else{const Y=[i];V(c,n.k)&&(c.value=Y),n.k&&(f[n.k]=Y)}}else C?(f[c]=o,A(c)&&(p[c]=o)):$&&(V(c,n.k)&&(c.value=o),n.k&&(f[n.k]=o))};if(o){const H=()=>{W(),Do.delete(n)};H.id=-1,Do.set(n,H),pt(H,t)}else wh(n),W()}}}function wh(n){const e=Do.get(n);e&&(e.flags|=8,Do.delete(n))}ua().requestIdleCallback;ua().cancelIdleCallback;const ti=n=>!!n.type.__asyncLoader,ip=n=>n.type.__isKeepAlive;function xy(n,e){op(n,"a",e)}function Vy(n,e){op(n,"da",e)}function op(n,e,t=dt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(pa(e,r,t),t){let s=t.parent;for(;s&&s.parent;)ip(s.parent.vnode)&&Dy(r,e,t,s),s=s.parent}}function Dy(n,e,t,r){const s=pa(e,n,r,!0);Ic(()=>{lc(r[e],s)},t)}function pa(n,e,t=dt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{yn();const l=Ri(t),c=rn(e,t,n,o);return l(),Tn(),c});return r?s.unshift(i):s.push(i),i}}const Sn=n=>(e,t=dt)=>{(!gi||n==="sp")&&pa(n,(...r)=>e(...r),t)},Ny=Sn("bm"),ap=Sn("m"),Oy=Sn("bu"),My=Sn("u"),Ly=Sn("bum"),Ic=Sn("um"),Fy=Sn("sp"),Uy=Sn("rtg"),$y=Sn("rtc");function By(n,e=dt){pa("ec",n,e)}const jy=Symbol.for("v-ndc");function rl(n,e,t,r){let s;const i=t,o=re(n);if(o||Be(n)){const l=o&&Er(n);let c=!1,h=!1;l&&(c=!Ct(n),h=En(n),n=fa(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(c?h?ss(Ft(n[f])):Ft(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(ve(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const kl=n=>n?Rp(n)?_a(n):kl(n.parent):null,ni=at(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kl(n.parent),$root:n=>kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>cp(n),$forceUpdate:n=>n.f||(n.f=()=>{wc(n.update)}),$nextTick:n=>n.n||(n.n=Ey.bind(n.proxy)),$watch:n=>Ry.bind(n)}),sl=(n,e)=>n!==Se&&!n.__isScriptSetup&&Te(n,e),zy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(sl(r,e))return o[e]=1,r[e];if(s!==Se&&Te(s,e))return o[e]=2,s[e];if(Te(i,e))return o[e]=3,i[e];if(t!==Se&&Te(t,e))return o[e]=4,t[e];Pl&&(o[e]=0)}}const h=ni[e];let f,p;if(h)return e==="$attrs"&&rt(n.attrs,"get",""),h(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==Se&&Te(t,e))return o[e]=4,t[e];if(p=c.config.globalProperties,Te(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return sl(s,e)?(s[e]=t,!0):r!==Se&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(t[l]||n!==Se&&l[0]!=="$"&&Te(n,l)||sl(e,l)||Te(i,l)||Te(r,l)||Te(ni,l)||Te(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pl=!0;function qy(n){const e=cp(n),t=n.proxy,r=n.ctx;Pl=!1,e.beforeCreate&&Ih(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:_,beforeUpdate:A,updated:V,activated:C,deactivated:$,beforeDestroy:W,beforeUnmount:H,destroyed:Y,unmounted:K,render:oe,renderTracked:G,renderTriggered:T,errorCaptured:m,serverPrefetch:y,expose:I,inheritAttrs:v,components:S,directives:E,filters:De}=e;if(h&&Hy(h,r,null),o)for(const Ie in o){const ge=o[Ie];ae(ge)&&(r[Ie]=ge.bind(t))}if(s){const Ie=s.call(t,t);ve(Ie)&&(n.data=yc(Ie))}if(Pl=!0,i)for(const Ie in i){const ge=i[Ie],Rt=ae(ge)?ge.bind(t,t):ae(ge.get)?ge.get.bind(t,t):Jt,Or=!ae(ge)&&ae(ge.set)?ge.set.bind(t):Jt,Ut=yo({get:Rt,set:Or});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Tt=>Ut.value=Tt})}if(l)for(const Ie in l)lp(l[Ie],r,t,Ie);if(c){const Ie=ae(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(ge=>{by(ge,Ie[ge])})}f&&Ih(f,n,"c");function Le(Ie,ge){re(ge)?ge.forEach(Rt=>Ie(Rt.bind(t))):ge&&Ie(ge.bind(t))}if(Le(Ny,p),Le(ap,_),Le(Oy,A),Le(My,V),Le(xy,C),Le(Vy,$),Le(By,m),Le($y,G),Le(Uy,T),Le(Ly,H),Le(Ic,K),Le(Fy,y),re(I))if(I.length){const Ie=n.exposed||(n.exposed={});I.forEach(ge=>{Object.defineProperty(Ie,ge,{get:()=>t[ge],set:Rt=>t[ge]=Rt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Jt&&(n.render=oe),v!=null&&(n.inheritAttrs=v),S&&(n.components=S),E&&(n.directives=E),y&&sp(n)}function Hy(n,e,t=Jt){re(n)&&(n=Cl(n));for(const r in n){const s=n[r];let i;ve(s)?"default"in s?i=go(s.from||r,s.default,!0):i=go(s.from||r):i=go(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ih(n,e,t){rn(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function lp(n,e,t,r){let s=r.includes(".")?rp(t,r):()=>t[r];if(Be(n)){const i=e[n];ae(i)&&mo(s,i)}else if(ae(n))mo(s,n.bind(t));else if(ve(n))if(re(n))n.forEach(i=>lp(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&mo(s,i,n)}}function cp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>No(c,h,o,!0)),No(c,e,o)),ve(e)&&i.set(e,c),c}function No(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&No(n,i,t,!0),s&&s.forEach(o=>No(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=Ky[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const Ky={data:bh,props:Ah,emits:Ah,methods:Hs,computed:Hs,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Hs,directives:Hs,watch:Gy,provide:bh,inject:Wy};function bh(n,e){return e?n?function(){return at(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function Wy(n,e){return Hs(Cl(n),Cl(e))}function Cl(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ht(n,e){return n?[...new Set([].concat(n,e))]:e}function Hs(n,e){return n?at(Object.create(null),n,e):e}function Ah(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:at(Object.create(null),vh(n),vh(e??{})):e}function Gy(n,e){if(!n)return e;if(!e)return n;const t=at(Object.create(null),n);for(const r in e)t[r]=ht(n[r],e[r]);return t}function up(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qy=0;function Jy(n,e){return function(r,s=null){ae(r)||(r=at({},r)),s!=null&&!ve(s)&&(s=null);const i=up(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:PT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ae(f.install)?(o.add(f),f.install(h,...p)):ae(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,_){if(!c){const A=h._ceVNode||it(r,s);return A.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(A,f,_),c=!0,h._container=f,f.__vue_app__=h,_a(A.component)}},onUnmount(f){l.push(f)},unmount(){c&&(rn(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Yr;Yr=h;try{return f()}finally{Yr=p}}};return h}}let Yr=null;const Yy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nt(e)}Modifiers`]||n[`${tr(e)}Modifiers`];function Xy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),o=i&&Yy(r,e.slice(7));o&&(o.trim&&(s=t.map(f=>Be(f)?f.trim():f)),o.number&&(s=t.map(uc)));let l,c=r[l=Xa(e)]||r[l=Xa(Nt(e))];!c&&i&&(c=r[l=Xa(tr(e))]),c&&rn(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,rn(h,n,6,s)}}const Zy=new WeakMap;function hp(n,e,t=!1){const r=t?Zy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!ae(n)){const c=h=>{const f=hp(h,e,!0);f&&(l=!0,at(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(ve(n)&&r.set(n,null),null):(re(i)?i.forEach(c=>o[c]=null):at(o,i),ve(n)&&r.set(n,o),o)}function ga(n,e){return!n||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,tr(e))||Te(n,e))}function Sh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:_,setupState:A,ctx:V,inheritAttrs:C}=n,$=Vo(n);let W,H;try{if(t.shapeFlag&4){const K=s||r,oe=K;W=Kt(h.call(oe,K,f,p,A,_,V)),H=l}else{const K=e;W=Kt(K.length>1?K(p,{attrs:l,slots:o,emit:c}):K(p,null)),H=e.props?l:eT(l)}}catch(K){ri.length=0,da(K,n,1),W=it(Gn)}let Y=W;if(H&&C!==!1){const K=Object.keys(H),{shapeFlag:oe}=Y;K.length&&oe&7&&(i&&K.some(la)&&(H=tT(H,i)),Y=is(Y,H,!1,!0))}return t.dirs&&(Y=is(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(t.dirs):t.dirs),t.transition&&vc(Y,t.transition),W=Y,Vo($),W}const eT=n=>{let e;for(const t in n)(t==="class"||t==="style"||aa(t))&&((e||(e={}))[t]=n[t]);return e},tT=(n,e)=>{const t={};for(const r in n)(!la(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function nT(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Rh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(fp(o,r,_)&&!ga(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rh(r,o,h):!0:!!o;return!1}function Rh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(fp(e,n,i)&&!ga(t,i))return!0}return!1}function fp(n,e,t){const r=n[t],s=e[t];return t==="style"&&ve(r)&&ve(s)?!fc(r,s):r!==s}function rT({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const dp={},pp=()=>Object.create(dp),gp=n=>Object.getPrototypeOf(n)===dp;function sT(n,e,t,r=!1){const s={},i=pp();n.propsDefaults=Object.create(null),mp(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:uy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function iT(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=ye(s),[c]=n.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(ga(n.emitsOptions,_))continue;const A=e[_];if(c)if(Te(i,_))A!==i[_]&&(i[_]=A,h=!0);else{const V=Nt(_);s[V]=xl(c,l,V,A,n,!1)}else A!==i[_]&&(i[_]=A,h=!0)}}}else{mp(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Te(e,p)&&((f=tr(p))===p||!Te(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=xl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&dn(n.attrs,"set","")}function mp(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ys(c))continue;const h=e[c];let f;s&&Te(s,f=Nt(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:ga(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=ye(t),h=l||Se;for(let f=0;f<i.length;f++){const p=i[f];t[p]=xl(s,c,p,h[p],n,!Te(h,p))}}return o}function xl(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=Te(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ri(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===tr(t))&&(r=!0))}return r}const oT=new WeakMap;function _p(n,e,t=!1){const r=t?oT:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!ae(n)){const f=p=>{c=!0;const[_,A]=_p(p,e,!0);at(o,_),A&&l.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return ve(n)&&r.set(n,Gr),Gr;if(re(i))for(let f=0;f<i.length;f++){const p=Nt(i[f]);kh(p)&&(o[p]=Se)}else if(i)for(const f in i){const p=Nt(f);if(kh(p)){const _=i[f],A=o[p]=re(_)||ae(_)?{type:_}:at({},_),V=A.type;let C=!1,$=!0;if(re(V))for(let W=0;W<V.length;++W){const H=V[W],Y=ae(H)&&H.name;if(Y==="Boolean"){C=!0;break}else Y==="String"&&($=!1)}else C=ae(V)&&V.name==="Boolean";A[0]=C,A[1]=$,(C||Te(A,"default"))&&l.push(p)}}const h=[o,l];return ve(n)&&r.set(n,h),h}function kh(n){return n[0]!=="$"&&!Ys(n)}const bc=n=>n==="_"||n==="_ctx"||n==="$stable",Ac=n=>re(n)?n.map(Kt):[Kt(n)],aT=(n,e,t)=>{if(e._n)return e;const r=Iy((...s)=>Ac(e(...s)),t);return r._c=!1,r},yp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(bc(s))continue;const i=n[s];if(ae(i))e[s]=aT(s,i,r);else if(i!=null){const o=Ac(i);e[s]=()=>o}}},Tp=(n,e)=>{const t=Ac(e);n.slots.default=()=>t},Ep=(n,e,t)=>{for(const r in e)(t||!bc(r))&&(n[r]=e[r])},lT=(n,e,t)=>{const r=n.slots=pp();if(n.vnode.shapeFlag&32){const s=e._;s?(Ep(r,e,t),t&&Vd(r,"_",s,!0)):yp(e,r)}else e&&Tp(n,e)},cT=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Se;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Ep(s,e,t):(i=!e.$stable,yp(e,s)),o=e}else e&&(Tp(n,e),o={default:1});if(i)for(const l in s)!bc(l)&&o[l]==null&&delete s[l]},pt=pT;function uT(n){return hT(n)}function hT(n,e){const t=ua();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:_,setScopeId:A=Jt,insertStaticContent:V}=n,C=(w,b,P,L=null,D=null,O=null,j=void 0,U=null,F=!!b.dynamicChildren)=>{if(w===b)return;w&&!Bs(w,b)&&(L=kn(w),Tt(w,D,O,!0),w=null),b.patchFlag===-2&&(F=!1,b.dynamicChildren=null);const{type:N,ref:X,shapeFlag:z}=b;switch(N){case ma:$(w,b,P,L);break;case Gn:W(w,b,P,L);break;case ol:w==null&&H(b,P,L,j);break;case _t:S(w,b,P,L,D,O,j,U,F);break;default:z&1?oe(w,b,P,L,D,O,j,U,F):z&6?E(w,b,P,L,D,O,j,U,F):(z&64||z&128)&&N.process(w,b,P,L,D,O,j,U,F,ir)}X!=null&&D?ei(X,w&&w.ref,O,b||w,!b):X==null&&w&&w.ref!=null&&ei(w.ref,null,O,w,!0)},$=(w,b,P,L)=>{if(w==null)r(b.el=l(b.children),P,L);else{const D=b.el=w.el;b.children!==w.children&&h(D,b.children)}},W=(w,b,P,L)=>{w==null?r(b.el=c(b.children||""),P,L):b.el=w.el},H=(w,b,P,L)=>{[w.el,w.anchor]=V(w.children,b,P,L,w.el,w.anchor)},Y=({el:w,anchor:b},P,L)=>{let D;for(;w&&w!==b;)D=_(w),r(w,P,L),w=D;r(b,P,L)},K=({el:w,anchor:b})=>{let P;for(;w&&w!==b;)P=_(w),s(w),w=P;s(b)},oe=(w,b,P,L,D,O,j,U,F)=>{if(b.type==="svg"?j="svg":b.type==="math"&&(j="mathml"),w==null)G(b,P,L,D,O,j,U,F);else{const N=w.el&&w.el._isVueCE?w.el:null;try{N&&N._beginPatch(),y(w,b,D,O,j,U,F)}finally{N&&N._endPatch()}}},G=(w,b,P,L,D,O,j,U)=>{let F,N;const{props:X,shapeFlag:z,transition:J,dirs:Z}=w;if(F=w.el=o(w.type,O,X&&X.is,X),z&8?f(F,w.children):z&16&&m(w.children,F,null,L,D,il(w,O),j,U),Z&&hr(w,null,L,"created"),T(F,w,w.scopeId,j,L),X){for(const me in X)me!=="value"&&!Ys(me)&&i(F,me,null,X[me],O,L);"value"in X&&i(F,"value",null,X.value,O),(N=X.onVnodeBeforeMount)&&jt(N,L,w)}Z&&hr(w,null,L,"beforeMount");const fe=fT(D,J);fe&&J.beforeEnter(F),r(F,b,P),((N=X&&X.onVnodeMounted)||fe||Z)&&pt(()=>{try{N&&jt(N,L,w),fe&&J.enter(F),Z&&hr(w,null,L,"mounted")}finally{}},D)},T=(w,b,P,L,D)=>{if(P&&A(w,P),L)for(let O=0;O<L.length;O++)A(w,L[O]);if(D){let O=D.subTree;if(b===O||bp(O.type)&&(O.ssContent===b||O.ssFallback===b)){const j=D.vnode;T(w,j,j.scopeId,j.slotScopeIds,D.parent)}}},m=(w,b,P,L,D,O,j,U,F=0)=>{for(let N=F;N<w.length;N++){const X=w[N]=U?fn(w[N]):Kt(w[N]);C(null,X,b,P,L,D,O,j,U)}},y=(w,b,P,L,D,O,j)=>{const U=b.el=w.el;let{patchFlag:F,dynamicChildren:N,dirs:X}=b;F|=w.patchFlag&16;const z=w.props||Se,J=b.props||Se;let Z;if(P&&fr(P,!1),(Z=J.onVnodeBeforeUpdate)&&jt(Z,P,b,w),X&&hr(b,w,P,"beforeUpdate"),P&&fr(P,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&f(U,""),N?I(w.dynamicChildren,N,U,P,L,il(b,D),O):j||ge(w,b,U,null,P,L,il(b,D),O,!1),F>0){if(F&16)v(U,z,J,P,D);else if(F&2&&z.class!==J.class&&i(U,"class",null,J.class,D),F&4&&i(U,"style",z.style,J.style,D),F&8){const fe=b.dynamicProps;for(let me=0;me<fe.length;me++){const _e=fe[me],Ne=z[_e],je=J[_e];(je!==Ne||_e==="value")&&i(U,_e,Ne,je,D,P)}}F&1&&w.children!==b.children&&f(U,b.children)}else!j&&N==null&&v(U,z,J,P,D);((Z=J.onVnodeUpdated)||X)&&pt(()=>{Z&&jt(Z,P,b,w),X&&hr(b,w,P,"updated")},L)},I=(w,b,P,L,D,O,j)=>{for(let U=0;U<b.length;U++){const F=w[U],N=b[U],X=F.el&&(F.type===_t||!Bs(F,N)||F.shapeFlag&198)?p(F.el):P;C(F,N,X,null,L,D,O,j,!0)}},v=(w,b,P,L,D)=>{if(b!==P){if(b!==Se)for(const O in b)!Ys(O)&&!(O in P)&&i(w,O,b[O],null,D,L);for(const O in P){if(Ys(O))continue;const j=P[O],U=b[O];j!==U&&O!=="value"&&i(w,O,U,j,D,L)}"value"in P&&i(w,"value",b.value,P.value,D)}},S=(w,b,P,L,D,O,j,U,F)=>{const N=b.el=w?w.el:l(""),X=b.anchor=w?w.anchor:l("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:Z}=b;Z&&(U=U?U.concat(Z):Z),w==null?(r(N,P,L),r(X,P,L),m(b.children||[],P,X,D,O,j,U,F)):z>0&&z&64&&J&&w.dynamicChildren&&w.dynamicChildren.length===J.length?(I(w.dynamicChildren,J,P,D,O,j,U),(b.key!=null||D&&b===D.subTree)&&wp(w,b,!0)):ge(w,b,P,X,D,O,j,U,F)},E=(w,b,P,L,D,O,j,U,F)=>{b.slotScopeIds=U,w==null?b.shapeFlag&512?D.ctx.activate(b,P,L,j,F):De(b,P,L,D,O,j,F):St(w,b,F)},De=(w,b,P,L,D,O,j)=>{const U=w.component=vT(w,L,D);if(ip(w)&&(U.ctx.renderer=ir),bT(U,!1,j),U.asyncDep){if(D&&D.registerDep(U,Le,j),!w.el){const F=U.subTree=it(Gn);W(null,F,b,P),w.placeholder=F.el}}else Le(U,w,b,P,D,O,j)},St=(w,b,P)=>{const L=b.component=w.component;if(nT(w,b,P))if(L.asyncDep&&!L.asyncResolved){Ie(L,b,P);return}else L.next=b,L.update();else b.el=w.el,L.vnode=b},Le=(w,b,P,L,D,O,j)=>{const U=()=>{if(w.isMounted){let{next:z,bu:J,u:Z,parent:fe,vnode:me}=w;{const wt=vp(w);if(wt){z&&(z.el=me.el,Ie(w,z,j)),wt.asyncDep.then(()=>{pt(()=>{w.isUnmounted||N()},D)});return}}let _e=z,Ne;fr(w,!1),z?(z.el=me.el,Ie(w,z,j)):z=me,J&&po(J),(Ne=z.props&&z.props.onVnodeBeforeUpdate)&&jt(Ne,fe,z,me),fr(w,!0);const je=Sh(w),Et=w.subTree;w.subTree=je,C(Et,je,p(Et.el),kn(Et),w,D,O),z.el=je.el,_e===null&&rT(w,je.el),Z&&pt(Z,D),(Ne=z.props&&z.props.onVnodeUpdated)&&pt(()=>jt(Ne,fe,z,me),D)}else{let z;const{el:J,props:Z}=b,{bm:fe,m:me,parent:_e,root:Ne,type:je}=w,Et=ti(b);fr(w,!1),fe&&po(fe),!Et&&(z=Z&&Z.onVnodeBeforeMount)&&jt(z,_e,b),fr(w,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(je,w.parent?w.parent.type:void 0);const wt=w.subTree=Sh(w);C(null,wt,P,L,w,D,O),b.el=wt.el}if(me&&pt(me,D),!Et&&(z=Z&&Z.onVnodeMounted)){const wt=b;pt(()=>jt(z,_e,wt),D)}(b.shapeFlag&256||_e&&ti(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&pt(w.a,D),w.isMounted=!0,b=P=L=null}};w.scope.on();const F=w.effect=new Md(U);w.scope.off();const N=w.update=F.run.bind(F),X=w.job=F.runIfDirty.bind(F);X.i=w,X.id=w.uid,F.scheduler=()=>wc(X),fr(w,!0),N()},Ie=(w,b,P)=>{b.component=w;const L=w.vnode.props;w.vnode=b,w.next=null,iT(w,b.props,L,P),cT(w,b.children,P),yn(),Th(w),Tn()},ge=(w,b,P,L,D,O,j,U,F=!1)=>{const N=w&&w.children,X=w?w.shapeFlag:0,z=b.children,{patchFlag:J,shapeFlag:Z}=b;if(J>0){if(J&128){Or(N,z,P,L,D,O,j,U,F);return}else if(J&256){Rt(N,z,P,L,D,O,j,U,F);return}}Z&8?(X&16&&ln(N,D,O),z!==N&&f(P,z)):X&16?Z&16?Or(N,z,P,L,D,O,j,U,F):ln(N,D,O,!0):(X&8&&f(P,""),Z&16&&m(z,P,L,D,O,j,U,F))},Rt=(w,b,P,L,D,O,j,U,F)=>{w=w||Gr,b=b||Gr;const N=w.length,X=b.length,z=Math.min(N,X);let J;for(J=0;J<z;J++){const Z=b[J]=F?fn(b[J]):Kt(b[J]);C(w[J],Z,P,null,D,O,j,U,F)}N>X?ln(w,D,O,!0,!1,z):m(b,P,L,D,O,j,U,F,z)},Or=(w,b,P,L,D,O,j,U,F)=>{let N=0;const X=b.length;let z=w.length-1,J=X-1;for(;N<=z&&N<=J;){const Z=w[N],fe=b[N]=F?fn(b[N]):Kt(b[N]);if(Bs(Z,fe))C(Z,fe,P,null,D,O,j,U,F);else break;N++}for(;N<=z&&N<=J;){const Z=w[z],fe=b[J]=F?fn(b[J]):Kt(b[J]);if(Bs(Z,fe))C(Z,fe,P,null,D,O,j,U,F);else break;z--,J--}if(N>z){if(N<=J){const Z=J+1,fe=Z<X?b[Z].el:L;for(;N<=J;)C(null,b[N]=F?fn(b[N]):Kt(b[N]),P,fe,D,O,j,U,F),N++}}else if(N>J)for(;N<=z;)Tt(w[N],D,O,!0),N++;else{const Z=N,fe=N,me=new Map;for(N=fe;N<=J;N++){const Je=b[N]=F?fn(b[N]):Kt(b[N]);Je.key!=null&&me.set(Je.key,N)}let _e,Ne=0;const je=J-fe+1;let Et=!1,wt=0;const xt=new Array(je);for(N=0;N<je;N++)xt[N]=0;for(N=Z;N<=z;N++){const Je=w[N];if(Ne>=je){Tt(Je,D,O,!0);continue}let We;if(Je.key!=null)We=me.get(Je.key);else for(_e=fe;_e<=J;_e++)if(xt[_e-fe]===0&&Bs(Je,b[_e])){We=_e;break}We===void 0?Tt(Je,D,O,!0):(xt[We-fe]=N+1,We>=wt?wt=We:Et=!0,C(Je,b[We],P,null,D,O,j,U,F),Ne++)}const Lr=Et?dT(xt):Gr;for(_e=Lr.length-1,N=je-1;N>=0;N--){const Je=fe+N,We=b[Je],As=b[Je+1],or=Je+1<X?As.el||Ip(As):L;xt[N]===0?C(null,We,P,or,D,O,j,U,F):Et&&(_e<0||N!==Lr[_e]?Ut(We,P,or,2):_e--)}}},Ut=(w,b,P,L,D=null)=>{const{el:O,type:j,transition:U,children:F,shapeFlag:N}=w;if(N&6){Ut(w.component.subTree,b,P,L);return}if(N&128){w.suspense.move(b,P,L);return}if(N&64){j.move(w,b,P,ir);return}if(j===_t){r(O,b,P);for(let z=0;z<F.length;z++)Ut(F[z],b,P,L);r(w.anchor,b,P);return}if(j===ol){Y(w,b,P);return}if(L!==2&&N&1&&U)if(L===0)U.beforeEnter(O),r(O,b,P),pt(()=>U.enter(O),D);else{const{leave:z,delayLeave:J,afterLeave:Z}=U,fe=()=>{w.ctx.isUnmounted?s(O):r(O,b,P)},me=()=>{O._isLeaving&&O[Cy](!0),z(O,()=>{fe(),Z&&Z()})};J?J(O,fe,me):me()}else r(O,b,P)},Tt=(w,b,P,L=!1,D=!1)=>{const{type:O,props:j,ref:U,children:F,dynamicChildren:N,shapeFlag:X,patchFlag:z,dirs:J,cacheIndex:Z,memo:fe}=w;if(z===-2&&(D=!1),U!=null&&(yn(),ei(U,null,P,w,!0),Tn()),Z!=null&&(b.renderCache[Z]=void 0),X&256){b.ctx.deactivate(w);return}const me=X&1&&J,_e=!ti(w);let Ne;if(_e&&(Ne=j&&j.onVnodeBeforeUnmount)&&jt(Ne,b,w),X&6)Is(w.component,P,L);else{if(X&128){w.suspense.unmount(P,L);return}me&&hr(w,null,b,"beforeUnmount"),X&64?w.type.remove(w,b,P,ir,L):N&&!N.hasOnce&&(O!==_t||z>0&&z&64)?ln(N,b,P,!1,!0):(O===_t&&z&384||!D&&X&16)&&ln(F,b,P),L&&vs(w)}const je=fe!=null&&Z==null;(_e&&(Ne=j&&j.onVnodeUnmounted)||me||je)&&pt(()=>{Ne&&jt(Ne,b,w),me&&hr(w,null,b,"unmounted"),je&&(w.el=null)},P)},vs=w=>{const{type:b,el:P,anchor:L,transition:D}=w;if(b===_t){Mr(P,L);return}if(b===ol){K(w);return}const O=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(w.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:U}=D,F=()=>j(P,O);U?U(w.el,O,F):F()}else O()},Mr=(w,b)=>{let P;for(;w!==b;)P=_(w),s(w),w=P;s(b)},Is=(w,b,P)=>{const{bum:L,scope:D,job:O,subTree:j,um:U,m:F,a:N}=w;Ph(F),Ph(N),L&&po(L),D.stop(),O&&(O.flags|=8,Tt(j,w,b,P)),U&&pt(U,b),pt(()=>{w.isUnmounted=!0},b)},ln=(w,b,P,L=!1,D=!1,O=0)=>{for(let j=O;j<w.length;j++)Tt(w[j],b,P,L,D)},kn=w=>{if(w.shapeFlag&6)return kn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=_(w.anchor||w.el),P=b&&b[ky];return P?_(P):b};let sr=!1;const bs=(w,b,P)=>{let L;w==null?b._vnode&&(Tt(b._vnode,null,null,!0),L=b._vnode.component):C(b._vnode||null,w,b,null,null,null,P),b._vnode=w,sr||(sr=!0,Th(L),Zd(),sr=!1)},ir={p:C,um:Tt,m:Ut,r:vs,mt:De,mc:m,pc:ge,pbc:I,n:kn,o:n};return{render:bs,hydrate:void 0,createApp:Jy(bs)}}function il({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=fn(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&wp(o,l)),l.type===ma&&(l.patchFlag===-1&&(l=s[i]=fn(l)),l.el=o.el),l.type===Gn&&!l.el&&(l.el=o.el)}}function dT(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<h?i=l+1:o=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function vp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vp(e)}function Ph(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ip(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ip(e.subTree):null}const bp=n=>n.__isSuspense;function pT(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):vy(n)}const _t=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),ol=Symbol.for("v-stc"),ri=[];let bt=null;function Me(n=!1){ri.push(bt=n?null:[])}function gT(){ri.pop(),bt=ri[ri.length-1]||null}let pi=1;function Oo(n,e=!1){pi+=n,n<0&&bt&&e&&(bt.hasOnce=!0)}function Ap(n){return n.dynamicChildren=pi>0?bt||Gr:null,gT(),pi>0&&bt&&bt.push(n),n}function Ye(n,e,t,r,s,i){return Ap(de(n,e,t,r,s,i,!0))}function Ks(n,e,t,r,s){return Ap(it(n,e,t,r,s,!0))}function Mo(n){return n?n.__v_isVNode===!0:!1}function Bs(n,e){return n.type===e.type&&n.key===e.key}const Sp=({key:n})=>n??null,_o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Be(n)||ot(n)||ae(n)?{i:Pt,r:n,k:e,f:!!t}:n:null);function de(n,e=null,t=null,r=0,s=null,i=n===_t?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Sp(e),ref:e&&_o(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return l?(Sc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Be(t)?8:16),pi>0&&!o&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const it=mT;function mT(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===jy)&&(n=Gn),Mo(n)){const l=is(n,e,!0);return t&&Sc(l,t),pi>0&&!i&&bt&&(l.shapeFlag&6?bt[bt.indexOf(n)]=l:bt.push(l)),l.patchFlag=-2,l}if(kT(n)&&(n=n.__vccOpts),e){e=_T(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=ha(l)),ve(c)&&(Ec(c)&&!re(c)&&(c=at({},c)),e.style=hc(c))}const o=Be(n)?1:bp(n)?128:Py(n)?64:ve(n)?4:ae(n)?2:0;return de(n,e,t,r,s,o,i,!0)}function _T(n){return n?Ec(n)||gp(n)?at({},n):n:null}function is(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,h=e?TT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Sp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&is(n.ssContent),ssFallback:n.ssFallback&&is(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&vc(f,c.clone(f)),f}function Vl(n=" ",e=0){return it(ma,null,n,e)}function yT(n="",e=!1){return e?(Me(),Ks(Gn,null,n)):it(Gn,null,n)}function Kt(n){return n==null||typeof n=="boolean"?it(Gn):re(n)?it(_t,null,n.slice()):Mo(n)?fn(n):it(ma,null,String(n))}function fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:is(n)}function Sc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Pt},t=32):(e=String(e),r&64?(t=16,e=[Vl(e)]):t=8);n.children=e,n.shapeFlag|=t}function TT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ha([e.class,r.class]));else if(s==="style")e.style=hc([e.style,r.style]);else if(aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!la(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function jt(n,e,t,r=null){rn(n,e,7,[t,r])}const ET=up();let wT=0;function vT(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||ET,i={uid:wT++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new q_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_p(r,s),emitsOptions:hp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xy.bind(null,i),n.ce&&n.ce(i),i}let dt=null;const IT=()=>dt||Pt;let Lo,Dl;{const n=ua(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Lo=e("__VUE_INSTANCE_SETTERS__",t=>dt=t),Dl=e("__VUE_SSR_SETTERS__",t=>gi=t)}const Ri=n=>{const e=dt;return Lo(n),n.scope.on(),()=>{n.scope.off(),Lo(e)}},Ch=()=>{dt&&dt.scope.off(),Lo(null)};function Rp(n){return n.vnode.shapeFlag&4}let gi=!1;function bT(n,e=!1,t=!1){e&&Dl(e);const{props:r,children:s}=n.vnode,i=Rp(n);sT(n,r,i,e),lT(n,s,t||e);const o=i?AT(n,e):void 0;return e&&Dl(!1),o}function AT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zy);const{setup:r}=t;if(r){yn();const s=n.setupContext=r.length>1?RT(n):null,i=Ri(n),o=Si(r,n,0,[n.props,s]),l=kd(o);if(Tn(),i(),(l||n.sp)&&!ti(n)&&sp(n),l){if(o.then(Ch,Ch),e)return o.then(c=>{xh(n,c)}).catch(c=>{da(c,n,0)});n.asyncDep=o}else xh(n,o)}else kp(n)}function xh(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ve(e)&&(n.setupState=Jd(e)),kp(n)}function kp(n,e,t){const r=n.type;n.render||(n.render=r.render||Jt);{const s=Ri(n);yn();try{qy(n)}finally{Tn(),s()}}}const ST={get(n,e){return rt(n,"get",""),n[e]}};function RT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ST),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jd(hy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ni)return ni[t](n)},has(e,t){return t in e||t in ni}})):n.proxy}function kT(n){return ae(n)&&"__vccOpts"in n}const yo=(n,e)=>my(n,e,gi);function Vh(n,e,t){try{Oo(-1);const r=arguments.length;return r===2?ve(e)&&!re(e)?Mo(e)?it(n,null,[e]):it(n,e):it(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Mo(t)&&(t=[t]),it(n,e,t))}finally{Oo(1)}}const PT="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nl;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{Nl=Dh.createPolicy("vue",{createHTML:n=>n})}catch{}const Pp=Nl?n=>Nl.createHTML(n):n=>n,CT="http://www.w3.org/2000/svg",xT="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Nh=hn&&hn.createElement("template"),VT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?hn.createElementNS(CT,n):e==="mathml"?hn.createElementNS(xT,n):t?hn.createElement(n,{is:t}):hn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>hn.createTextNode(n),createComment:n=>hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Nh.innerHTML=Pp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Nh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},DT=Symbol("_vtc");function NT(n,e,t){const r=n[DT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Oh=Symbol("_vod"),OT=Symbol("_vsh"),MT=Symbol(""),LT=/(?:^|;)\s*display\s*:/;function FT(n,e,t){const r=n.style,s=Be(t);let i=!1;if(t&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&To(r,l,"")}else for(const o in e)t[o]==null&&To(r,o,"");for(const o in t)o==="display"&&(i=!0),To(r,o,t[o])}else if(s){if(e!==t){const o=r[MT];o&&(t+=";"+o),r.cssText=t,i=LT.test(t)}}else e&&n.removeAttribute("style");Oh in n&&(n[Oh]=i?r.display:"",n[OT]&&(r.display="none"))}const Mh=/\s*!important$/;function To(n,e,t){if(re(t))t.forEach(r=>To(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=UT(n,e);Mh.test(t)?n.setProperty(tr(r),t.replace(Mh,""),"important"):n[r]=t}}const Lh=["Webkit","Moz","ms"],al={};function UT(n,e){const t=al[e];if(t)return t;let r=Nt(e);if(r!=="filter"&&r in n)return al[e]=r;r=xd(r);for(let s=0;s<Lh.length;s++){const i=Lh[s]+r;if(i in n)return al[e]=i}return e}const Fh="http://www.w3.org/1999/xlink";function Uh(n,e,t,r,s,i=j_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fh,e.slice(6,e.length)):n.setAttributeNS(Fh,e,t):t==null||i&&!Dd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":nn(t)?String(t):t)}function $h(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Dd(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function zr(n,e,t,r){n.addEventListener(e,t,r)}function $T(n,e,t,r){n.removeEventListener(e,t,r)}const Bh=Symbol("_vei");function BT(n,e,t,r,s=null){const i=n[Bh]||(n[Bh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=jT(e);if(r){const h=i[e]=HT(r,s);zr(n,l,h,c)}else o&&($T(n,l,o,c),i[e]=void 0)}}const jh=/(?:Once|Passive|Capture)$/;function jT(n){let e;if(jh.test(n)){e={};let r;for(;r=n.match(jh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let ll=0;const zT=Promise.resolve(),qT=()=>ll||(zT.then(()=>ll=0),ll=Date.now());function HT(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;rn(KT(r,t.value),e,5,[r])};return t.value=n,t.attached=qT(),t}function KT(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const zh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,WT=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?NT(n,r,o):e==="style"?FT(n,t,r):aa(e)?la(e)||BT(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GT(n,e,r,o))?($h(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uh(n,e,r,o,i,e!=="value")):n._isVueCE&&(QT(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Be(r)))?$h(n,Nt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Uh(n,e,r,o))};function GT(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&zh(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zh(e)&&Be(t)?!1:e in n}function QT(n,e){const t=n._def.props;if(!t)return!1;const r=Nt(e);return Array.isArray(t)?t.some(s=>Nt(s)===r):Object.keys(t).some(s=>Nt(s)===r)}const qh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>po(e,t):e};function JT(n){n.target.composing=!0}function Hh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cl=Symbol("_assign");function Kh(n,e,t){return e&&(n=n.trim()),t&&(n=uc(n)),n}const ro={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[cl]=qh(s);const i=r||s.props&&s.props.type==="number";zr(n,e?"change":"input",o=>{o.target.composing||n[cl](Kh(n.value,t,i))}),(t||i)&&zr(n,"change",()=>{n.value=Kh(n.value,t,i)}),e||(zr(n,"compositionstart",JT),zr(n,"compositionend",Hh),zr(n,"change",Hh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[cl]=qh(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?uc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},YT=["ctrl","shift","alt","meta"],XT={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>YT.some(t=>n[`${t}Key`]&&!e.includes(t))},Wh=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=XT[e[o]];if(l&&l(s,e))return}return n(s,...i)})},ZT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=tr(s.key);if(e.some(o=>o===i||ZT[o]===i))return n(s)})},eE=at({patchProp:WT},VT);let Qh;function tE(){return Qh||(Qh=uT(eE))}const nE=(...n)=>{const e=tE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sE(n){return Be(n)?document.querySelector(n):n}function Rc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let xr=Rc();function Cp(n){xr=n}const xp=/[&<>"']/,iE=new RegExp(xp.source,"g"),Vp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,oE=new RegExp(Vp.source,"g"),aE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jh=n=>aE[n];function It(n,e){if(e){if(xp.test(n))return n.replace(iE,Jh)}else if(Vp.test(n))return n.replace(oE,Jh);return n}const lE=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cE(n){return n.replace(lE,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const uE=/(^|[^\[])\^/g;function be(n,e){let t=typeof n=="string"?n:n.source;e=e||"";const r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(uE,"$1"),t=t.replace(s,o),r},getRegex:()=>new RegExp(t,e)};return r}function Yh(n){try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const si={exec:()=>null};function Xh(n,e){const t=n.replace(/\|/g,(i,o,l)=>{let c=!1,h=o;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function so(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function hE(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return-1}function Zh(n,e,t,r){const s=e.href,i=e.title?It(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:t,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:i,text:It(o)}}function fE(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class Fo{constructor(e){Pe(this,"options");Pe(this,"rules");Pe(this,"lexer");this.options=e||xr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:so(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],s=fE(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const s=so(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let r=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);r=so(r.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim();const s=r.length>1,i={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");const o=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",c="",h=!1;for(;e;){let f=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,W=>" ".repeat(3*W.length)),_=e.split(`
`,1)[0],A=0;this.options.pedantic?(A=2,c=p.trimStart()):(A=t[2].search(/[^ ]/),A=A>4?1:A,c=p.slice(A),A+=t[1].length);let V=!1;if(!p&&/^ *$/.test(_)&&(l+=_+`
`,e=e.substring(_.length+1),f=!0),!f){const W=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),H=new RegExp(`^ {0,${Math.min(3,A-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Y=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:\`\`\`|~~~)`),K=new RegExp(`^ {0,${Math.min(3,A-1)}}#`);for(;e;){const oe=e.split(`
`,1)[0];if(_=oe,this.options.pedantic&&(_=_.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Y.test(_)||K.test(_)||W.test(_)||H.test(e))break;if(_.search(/[^ ]/)>=A||!_.trim())c+=`
`+_.slice(A);else{if(V||p.search(/[^ ]/)>=4||Y.test(p)||K.test(p)||H.test(p))break;c+=`
`+_}!V&&!_.trim()&&(V=!0),l+=oe+`
`,e=e.substring(oe.length+1),p=_.slice(A)}}i.loose||(h?i.loose=!0:/\n *\n *$/.test(l)&&(h=!0));let C=null,$;this.options.gfm&&(C=/^\[[ xX]\] /.exec(c),C&&($=C[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:l,task:!!C,checked:$,loose:!1,text:c,tokens:[]}),i.raw+=l}i.items[i.items.length-1].raw=l.trimEnd(),i.items[i.items.length-1].text=c.trimEnd(),i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){const p=i.items[f].tokens.filter(A=>A.type==="space"),_=p.length>0&&p.some(A=>/\n.*\n/.test(A.raw));i.loose=_}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const r=Xh(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===s.length){for(const l of s)/^ *-+: *$/.test(l)?o.align.push("right"):/^ *:-+: *$/.test(l)?o.align.push("center"):/^ *:-+ *$/.test(l)?o.align.push("left"):o.align.push(null);for(const l of r)o.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of i)o.rows.push(Xh(l,o.header.length).map(c=>({text:c,tokens:this.lexer.inline(c)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:It(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=so(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=hE(t[2],"()");if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Zh(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const s=(r[2]||r[1]).replace(/\s+/g," "),i=t[s.toLowerCase()];if(!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return Zh(r,i,r[0],this.lexer)}}emStrong(e,t,r=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...s[0]].length-1;let l,c,h=o,f=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+o);(s=p.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(c=[...l].length,s[3]||s[4]){h+=c;continue}else if((s[5]||s[6])&&o%3&&!((o+c)%3)){f+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+f);const _=[...s[0]][0].length,A=e.slice(0,o+s.index+_+c);if(Math.min(o,c)%2){const C=A.slice(1,-1);return{type:"em",raw:A,text:C,tokens:this.lexer.inlineTokens(C)}}const V=A.slice(2,-2);return{type:"strong",raw:A,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=It(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let r,s;return t[2]==="@"?(r=It(t[1]),s="mailto:"+r):(r=It(t[1]),s=r),{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=It(t[0]),i="mailto:"+s;else{let o;do o=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(o!==t[0]);s=It(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=It(t[0]),{type:"text",raw:t[0],text:r}}}}const dE=/^(?: *(?:\n|$))+/,pE=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,gE=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ki=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mE=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Dp=/(?:[*+-]|\d{1,9}[.)])/,Np=be(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Dp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),kc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_E=/^[^\n]+/,Pc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,yE=be(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Pc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),TE=be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Dp).getRegex(),ya="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Cc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,EE=be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Cc).replace("tag",ya).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Op=be(kc).replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ya).getRegex(),wE=be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Op).getRegex(),xc={blockquote:wE,code:pE,def:yE,fences:gE,heading:mE,hr:ki,html:EE,lheading:Np,list:TE,newline:dE,paragraph:Op,table:si,text:_E},ef=be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ya).getRegex(),vE={...xc,table:ef,paragraph:be(kc).replace("hr",ki).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ef).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ya).getRegex()},IE={...xc,html:be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Cc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:be(kc).replace("hr",ki).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Np).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Mp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bE=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lp=/^( {2,}|\\)\n(?!\s*$)/,AE=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pi="\\p{P}\\p{S}",SE=be(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Pi).getRegex(),RE=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,kE=be(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Pi).getRegex(),PE=be("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Pi).getRegex(),CE=be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Pi).getRegex(),xE=be(/\\([punct])/,"gu").replace(/punct/g,Pi).getRegex(),VE=be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),DE=be(Cc).replace("(?:-->|$)","-->").getRegex(),NE=be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",DE).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Uo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,OE=be(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Uo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fp=be(/^!?\[(label)\]\[(ref)\]/).replace("label",Uo).replace("ref",Pc).getRegex(),Up=be(/^!?\[(ref)\](?:\[\])?/).replace("ref",Pc).getRegex(),ME=be("reflink|nolink(?!\\()","g").replace("reflink",Fp).replace("nolink",Up).getRegex(),Vc={_backpedal:si,anyPunctuation:xE,autolink:VE,blockSkip:RE,br:Lp,code:bE,del:si,emStrongLDelim:kE,emStrongRDelimAst:PE,emStrongRDelimUnd:CE,escape:Mp,link:OE,nolink:Up,punctuation:SE,reflink:Fp,reflinkSearch:ME,tag:NE,text:AE,url:si},LE={...Vc,link:be(/^!?\[(label)\]\((.*?)\)/).replace("label",Uo).getRegex(),reflink:be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Uo).getRegex()},Ol={...Vc,escape:be(Mp).replace("])","~|])").getRegex(),url:be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},FE={...Ol,br:be(Lp).replace("{2,}","*").getRegex(),text:be(Ol.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},io={normal:xc,gfm:vE,pedantic:IE},js={normal:Vc,gfm:Ol,breaks:FE,pedantic:LE};class Gt{constructor(e){Pe(this,"tokens");Pe(this,"options");Pe(this,"state");Pe(this,"tokenizer");Pe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xr,this.options.tokenizer=this.options.tokenizer||new Fo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:io.normal,inline:js.normal};this.options.pedantic?(t.block=io.pedantic,t.inline=js.pedantic):this.options.gfm&&(t.block=io.gfm,this.options.breaks?t.inline=js.breaks:t.inline=js.gfm),this.tokenizer.rules=t}static get rules(){return{block:io,inline:js}}static lex(e,t){return new Gt(t).lex(e)}static lexInline(e,t){return new Gt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,c,h)=>c+"    ".repeat(h.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(f=>{h=f.call({lexer:this},c),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,s,i,o=e,l,c,h;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(c||(h=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(r=f.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,h)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const p=e.slice(1);let _;this.options.extensions.startInline.forEach(A=>{_=A.call({lexer:this},p),typeof _=="number"&&_>=0&&(f=Math.min(f,_))}),f<1/0&&f>=0&&(i=e.substring(0,f+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(h=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class $o{constructor(e){Pe(this,"options");this.options=e||xr}code(e,t,r){var i;const s=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+It(s)+'">'+(r?e:It(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:It(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,r){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,r){const s=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e,t,r){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){const s=Yh(e);if(s===null)return r;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+r+"</a>",i}image(e,t,r){const s=Yh(e);if(s===null)return r;e=s;let i=`<img src="${e}" alt="${r}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class Dc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Qt{constructor(e){Pe(this,"options");Pe(this,"renderer");Pe(this,"textRenderer");this.options=e||xr,this.options.renderer=this.options.renderer||new $o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Dc}static parse(e,t){return new Qt(t).parse(e)}static parseInline(e,t){return new Qt(t).parseInline(e)}parse(e,t=!0){let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=l||"";continue}}switch(i.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const o=i;r+=this.renderer.heading(this.parseInline(o.tokens),o.depth,cE(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=i;r+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=i;let l="",c="";for(let f=0;f<o.header.length;f++)c+=this.renderer.tablecell(this.parseInline(o.header[f].tokens),{header:!0,align:o.align[f]});l+=this.renderer.tablerow(c);let h="";for(let f=0;f<o.rows.length;f++){const p=o.rows[f];c="";for(let _=0;_<p.length;_++)c+=this.renderer.tablecell(this.parseInline(p[_].tokens),{header:!1,align:o.align[_]});h+=this.renderer.tablerow(c)}r+=this.renderer.table(l,h);continue}case"blockquote":{const o=i,l=this.parse(o.tokens);r+=this.renderer.blockquote(l);continue}case"list":{const o=i,l=o.ordered,c=o.start,h=o.loose;let f="";for(let p=0;p<o.items.length;p++){const _=o.items[p],A=_.checked,V=_.task;let C="";if(_.task){const $=this.renderer.checkbox(!!A);h?_.tokens.length>0&&_.tokens[0].type==="paragraph"?(_.tokens[0].text=$+" "+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type==="text"&&(_.tokens[0].tokens[0].text=$+" "+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:"text",text:$+" "}):C+=$+" "}C+=this.parse(_.tokens,h),f+=this.renderer.listitem(C,V,!!A)}r+=this.renderer.list(f,l,c);continue}case"html":{const o=i;r+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=i;r+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=i,l=o.tokens?this.parseInline(o.tokens):o.text;for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],l+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);r+=t?this.renderer.paragraph(l):l;continue}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t){t=t||this.renderer;let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=o||"";continue}}switch(i.type){case"escape":{const o=i;r+=t.text(o.text);break}case"html":{const o=i;r+=t.html(o.text);break}case"link":{const o=i;r+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=i;r+=t.image(o.href,o.title,o.text);break}case"strong":{const o=i;r+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=i;r+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=i;r+=t.codespan(o.text);break}case"br":{r+=t.br();break}case"del":{const o=i;r+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=i;r+=t.text(o.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}}class ii{constructor(e){Pe(this,"options");this.options=e||xr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}Pe(ii,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Cr,Ml,$p;class UE{constructor(...e){ph(this,Cr);Pe(this,"defaults",Rc());Pe(this,"options",this.setOptions);Pe(this,"parse",Xi(this,Cr,Ml).call(this,Gt.lex,Qt.parse));Pe(this,"parseInline",Xi(this,Cr,Ml).call(this,Gt.lexInline,Qt.parseInline));Pe(this,"Parser",Qt);Pe(this,"Renderer",$o);Pe(this,"TextRenderer",Dc);Pe(this,"Lexer",Gt);Pe(this,"Tokenizer",Fo);Pe(this,"Hooks",ii);this.use(...e)}walkTokens(e,t){var s,i;let r=[];for(const o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":{const l=o;for(const c of l.header)r=r.concat(this.walkTokens(c.tokens,t));for(const c of l.rows)for(const h of c)r=r.concat(this.walkTokens(h.tokens,t));break}case"list":{const l=o;r=r.concat(this.walkTokens(l.items,t));break}default:{const l=o;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{const h=l[c].flat(1/0);r=r.concat(this.walkTokens(h,t))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,t)))}}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const o=t.renderers[i.name];o?t.renderers[i.name]=function(...l){let c=i.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),r.renderer){const i=this.defaults.renderer||new $o(this.defaults);for(const o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const l=o,c=r.renderer[l],h=i[l];i[l]=(...f)=>{let p=c.apply(i,f);return p===!1&&(p=h.apply(i,f)),p||""}}s.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Fo(this.defaults);for(const o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const l=o,c=r.tokenizer[l],h=i[l];i[l]=(...f)=>{let p=c.apply(i,f);return p===!1&&(p=h.apply(i,f)),p}}s.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new ii;for(const o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const l=o,c=r.hooks[l],h=i[l];ii.passThroughHooks.has(o)?i[l]=f=>{if(this.defaults.async)return Promise.resolve(c.call(i,f)).then(_=>h.call(i,_));const p=c.call(i,f);return h.call(i,p)}:i[l]=(...f)=>{let p=c.apply(i,f);return p===!1&&(p=h.apply(i,f)),p}}s.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,o=r.walkTokens;s.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),i&&(c=c.concat(i.call(this,l))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Gt.lex(e,t??this.defaults)}parser(e,t){return Qt.parse(e,t??this.defaults)}}Cr=new WeakSet,Ml=function(e,t){return(r,s)=>{const i={...s},o={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const l=Xi(this,Cr,$p).call(this,!!o.silent,!!o.async);if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(c=>e(c,o)).then(c=>o.hooks?o.hooks.processAllTokens(c):c).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>t(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(l);try{o.hooks&&(r=o.hooks.preprocess(r));let c=e(r,o);o.hooks&&(c=o.hooks.processAllTokens(c)),o.walkTokens&&this.walkTokens(c,o.walkTokens);let h=t(c,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(c){return l(c)}}},$p=function(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+It(r.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(r);throw r}};const br=new UE;function we(n,e){return br.parse(n,e)}we.options=we.setOptions=function(n){return br.setOptions(n),we.defaults=br.defaults,Cp(we.defaults),we};we.getDefaults=Rc;we.defaults=xr;we.use=function(...n){return br.use(...n),we.defaults=br.defaults,Cp(we.defaults),we};we.walkTokens=function(n,e){return br.walkTokens(n,e)};we.parseInline=br.parseInline;we.Parser=Qt;we.parser=Qt.parse;we.Renderer=$o;we.TextRenderer=Dc;we.Lexer=Gt;we.lexer=Gt.lex;we.Tokenizer=Fo;we.Hooks=ii;we.parse=we;we.options;we.setOptions;we.use;we.walkTokens;we.parseInline;Qt.parse;Gt.lex;/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=(n,e)=>({size:t,strokeWidth:r=2,absoluteStrokeWidth:s,color:i,class:o,...l},{attrs:c,slots:h})=>Vh("svg",{...oo,width:t||oo.width,height:t||oo.height,stroke:i||oo.stroke,"stroke-width":s?Number(r)*24/Number(t):r,...c,class:["lucide",`lucide-${$E(n)}`],...l},[...e.map(f=>Vh(...f)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Vr("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Vr("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Vr("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=Vr("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Vr("PenLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=Vr("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=Vr("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),GE=()=>{};var tf={};/**
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
 */const Bp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},QE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;c||(A=64,o||(_=64)),r.push(t[f],t[p],t[_],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):QE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new JE;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class JE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(n){const e=Bp(n);return jp.encodeByteArray(e,!0)},Bo=function(n){return YE(n).replace(/\./g,"")},zp=function(n){try{return jp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZE=()=>XE().__FIREBASE_DEFAULTS__,ew=()=>{if(typeof process>"u"||typeof tf>"u")return;const n=tf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zp(n[1]);return e&&JSON.parse(e)},Ta=()=>{try{return GE()||ZE()||ew()||tw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qp=n=>{var e,t;return(t=(e=Ta())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},nw=n=>{const e=qp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hp=()=>{var n;return(n=Ta())==null?void 0:n.config},Kp=n=>{var e;return(e=Ta())==null?void 0:e[`_${n}`]};/**
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
 */class rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function sw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Bo(JSON.stringify(t)),Bo(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function ow(){var e;const n=(e=Ta())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uw(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hw(){return!ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fw(){try{return typeof indexedDB=="object"}catch{return!1}}function dw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const pw="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pw,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,l,r)}}function gw(n,e){return n.replace(mw,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mw=/\{\$([^}]+)}/g;function _w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(nf(i)&&nf(o)){if(!wn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nf(n){return n!==null&&typeof n=="object"}/**
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
 */function xi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yw(n,e){const t=new Tw(n,e);return t.subscribe.bind(t)}class Tw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ul(){}/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Vi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wp(n){return(await fetch(n,{credentials:"include"})).ok}class Ar{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iw(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vw(n){return n===mr?void 0:n}function Iw(n){return n.instantiationMode==="EAGER"}/**
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
 */class bw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const Aw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Sw=ce.INFO,Rw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},kw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Rw[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=Sw,this._logHandler=kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Aw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Pw=(n,e)=>e.some(t=>n instanceof t);let rf,sf;function Cw(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xw(){return sf||(sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gp=new WeakMap,Ll=new WeakMap,Qp=new WeakMap,hl=new WeakMap,Oc=new WeakMap;function Vw(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(zn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gp.set(t,n)}).catch(()=>{}),Oc.set(e,n),e}function Dw(n){if(Ll.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ll.set(n,e)}let Fl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ll.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nw(n){Fl=n(Fl)}function Ow(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fl(this),e,...t);return Qp.set(r,e.sort?e.sort():[e]),zn(r)}:xw().includes(n)?function(...e){return n.apply(fl(this),e),zn(Gp.get(this))}:function(...e){return zn(n.apply(fl(this),e))}}function Mw(n){return typeof n=="function"?Ow(n):(n instanceof IDBTransaction&&Dw(n),Pw(n,Cw())?new Proxy(n,Fl):n)}function zn(n){if(n instanceof IDBRequest)return Vw(n);if(hl.has(n))return hl.get(n);const e=Mw(n);return e!==n&&(hl.set(n,e),Oc.set(e,n)),e}const fl=n=>Oc.get(n);function Lw(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=zn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zn(o.result),c.oldVersion,c.newVersion,zn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Fw=["get","getKey","getAll","getAllKeys","count"],Uw=["put","add","delete","clear"],dl=new Map;function of(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Uw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fw.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return dl.set(e,i),i}Nw(n=>({...n,get:(e,t,r)=>of(e,t)||n.get(e,t,r),has:(e,t)=>!!of(e,t)||n.has(e,t)}));/**
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
 */class $w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",af="0.14.11";/**
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
 */const vn=new Nc("@firebase/app"),jw="@firebase/app-compat",zw="@firebase/analytics-compat",qw="@firebase/analytics",Hw="@firebase/app-check-compat",Kw="@firebase/app-check",Ww="@firebase/auth",Gw="@firebase/auth-compat",Qw="@firebase/database",Jw="@firebase/data-connect",Yw="@firebase/database-compat",Xw="@firebase/functions",Zw="@firebase/functions-compat",ev="@firebase/installations",tv="@firebase/installations-compat",nv="@firebase/messaging",rv="@firebase/messaging-compat",sv="@firebase/performance",iv="@firebase/performance-compat",ov="@firebase/remote-config",av="@firebase/remote-config-compat",lv="@firebase/storage",cv="@firebase/storage-compat",uv="@firebase/firestore",hv="@firebase/ai",fv="@firebase/firestore-compat",dv="firebase",pv="12.12.0";/**
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
 */const $l="[DEFAULT]",gv={[Ul]:"fire-core",[jw]:"fire-core-compat",[qw]:"fire-analytics",[zw]:"fire-analytics-compat",[Kw]:"fire-app-check",[Hw]:"fire-app-check-compat",[Ww]:"fire-auth",[Gw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Jw]:"fire-data-connect",[Yw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Zw]:"fire-fn-compat",[ev]:"fire-iid",[tv]:"fire-iid-compat",[nv]:"fire-fcm",[rv]:"fire-fcm-compat",[sv]:"fire-perf",[iv]:"fire-perf-compat",[ov]:"fire-rc",[av]:"fire-rc-compat",[lv]:"fire-gcs",[cv]:"fire-gcs-compat",[uv]:"fire-fst",[fv]:"fire-fst-compat",[hv]:"fire-vertex","fire-js":"fire-js",[dv]:"fire-js-all"};/**
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
 */const jo=new Map,mv=new Map,Bl=new Map;function lf(n,e){try{n.container.addComponent(e)}catch(t){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function os(n){const e=n.name;if(Bl.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Bl.set(e,n);for(const t of jo.values())lf(t,n);for(const t of mv.values())lf(t,n);return!0}function Mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const _v={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Ci("app","Firebase",_v);/**
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
 */class yv{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=pv;function Jp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:$l,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(t||(t=Hp()),!t)throw qn.create("no-options");const i=jo.get(s);if(i){if(wn(t,i.options)&&wn(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new bw(s);for(const c of Bl.values())o.addComponent(c);const l=new yv(t,r,o);return jo.set(s,l),l}function Yp(n=$l){const e=jo.get(n);if(!e&&n===$l&&Hp())return Jp();if(!e)throw qn.create("no-app",{appName:n});return e}function Hn(n,e,t){let r=gv[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(o.join(" "));return}os(new Ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Tv="firebase-heartbeat-database",Ev=1,mi="firebase-heartbeat-store";let pl=null;function Xp(){return pl||(pl=Lw(Tv,Ev,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mi)}catch(t){console.warn(t)}}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),pl}async function wv(n){try{const t=(await Xp()).transaction(mi),r=await t.objectStore(mi).get(Zp(n));return await t.done,r}catch(e){if(e instanceof Rn)vn.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(t.message)}}}async function cf(n,e){try{const r=(await Xp()).transaction(mi,"readwrite");await r.objectStore(mi).put(e,Zp(n)),await r.done}catch(t){if(t instanceof Rn)vn.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vn.warn(r.message)}}}function Zp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vv=1024,Iv=30;class bv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Iv){const o=Rv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uf(),{heartbeatsToSend:r,unsentEntries:s}=Av(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vn.warn(t),""}}}function uf(){return new Date().toISOString().substring(0,10)}function Av(n,e=vv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fw()?dw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hf(n){return Bo(JSON.stringify({version:2,heartbeats:n})).length}function Rv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function kv(n){os(new Ar("platform-logger",e=>new $w(e),"PRIVATE")),os(new Ar("heartbeat",e=>new bv(e),"PRIVATE")),Hn(Ul,af,n),Hn(Ul,af,"esm2020"),Hn("fire-js","")}kv("");var Pv="firebase",Cv="12.12.0";/**
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
 */Hn(Pv,Cv,"app");function eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xv=eg,tg=new Ci("auth","Firebase",eg());/**
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
 */const zo=new Nc("@firebase/auth");function Vv(n,...e){zo.logLevel<=ce.WARN&&zo.warn(`Auth (${gs}): ${n}`,...e)}function Eo(n,...e){zo.logLevel<=ce.ERROR&&zo.error(`Auth (${gs}): ${n}`,...e)}/**
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
 */function sn(n,...e){throw Fc(n,...e)}function Mt(n,...e){return Fc(n,...e)}function Lc(n,e,t){const r={...xv(),[e]:t};return new Ci("auth","Firebase",r).create(e,{appName:n.name})}function wr(n){return Lc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(n,"argument-error"),Lc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return tg.create(n,...e)}function ne(n,e,...t){if(!n)throw Fc(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eo(e),new Error(e)}function In(n,e){n||mn(e)}/**
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
 */function jl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Nv(){return ff()==="http:"||ff()==="https:"}function ff(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nv()||lw()||"connection"in navigator)?navigator.onLine:!0}function Mv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Di{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=iw()||cw()}get(){return Ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uc(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ng{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Uv=new Di(3e4,6e4);function $c(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ms(n,e,t,r,s={}){return rg(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xi({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return aw()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Vi(n.emulatorConfig.host)&&(h.credentials="include"),ng.fetch()(await sg(n,n.config.apiHost,t,l),h)})}async function rg(n,e,t){n._canInitEmulator=!1;const r={...Lv,...e};try{const s=new Bv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ao(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lc(n,f,h);sn(n,f)}}catch(s){if(s instanceof Rn)throw s;sn(n,"network-request-failed",{message:String(s)})}}async function $v(n,e,t,r,s={}){const i=await ms(n,e,t,r,s);return"mfaPendingCredential"in i&&sn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function sg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Uc(n.config,s):`${n.config.apiScheme}://${s}`;return Fv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Bv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),Uv.get())})}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Mt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function jv(n,e){return ms(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return ms(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zv(n,e=!1){const t=ct(n),r=await t.getIdToken(e),s=Bc(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(gl(s.auth_time)),issuedAtTime:oi(gl(s.iat)),expirationTime:oi(gl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gl(n){return Number(n)*1e3}function Bc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(t);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(n){const e=Bc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&qv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(n){var p;const e=n.auth,t=await n.getIdToken(),r=await _i(n,qo(e,{idToken:t}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?ig(s.providerUserInfo):[],o=Wv(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Kv(n){const e=ct(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ig(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Gv(n,e){const t=await rg(n,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await sg(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Vi(n.emulatorConfig.host)&&(c.credentials="include"),ng.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qv(n,e){return ms(n,"POST","/v2/accounts:revokeToken",$c(n,e))}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=df(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Xr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function On(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zv(this,e)}reload(){return Kv(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await _i(this,jv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:A,providerData:V,stsTokenManager:C}=t;ne(p&&C,e,"internal-error");const $=Xr.fromJSON(this.name,C);ne(typeof p=="string",e,"internal-error"),On(r,e.name),On(s,e.name),ne(typeof _=="boolean",e,"internal-error"),ne(typeof A=="boolean",e,"internal-error"),On(i,e.name),On(o,e.name),On(l,e.name),On(c,e.name),On(h,e.name),On(f,e.name);const W=new Dt({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:$,createdAt:h,lastLoginAt:f});return V&&Array.isArray(V)&&(W.providerData=V.map(H=>({...H}))),c&&(W._redirectEventId=c),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new Xr;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ig(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Xr;l.updateFromIdToken(r);const c=new Dt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const pf=new Map;function _n(n){In(n instanceof Function,"Expected a class definition");let e=pf.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pf.set(n,e),e)}/**
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
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}og.type="NONE";const gf=og;/**
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
 */function wo(n,e,t){return`firebase:${n}:${e}:${t}`}class Zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qo(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zr(_n(gf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(gf);const o=wo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const _=await qo(e,{idToken:f}).catch(()=>{});if(!_)break;p=await Dt._fromGetAccountInfoResponse(e,_,f)}else p=Dt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Zr(i,e,r))}}/**
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
 */function mf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fg(e))return"Blackberry";if(dg(e))return"Webos";if(lg(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(hg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(n=lt()){return/firefox\//i.test(n)}function lg(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(n=lt()){return/crios\//i.test(n)}function ug(n=lt()){return/iemobile/i.test(n)}function hg(n=lt()){return/android/i.test(n)}function fg(n=lt()){return/blackberry/i.test(n)}function dg(n=lt()){return/webos/i.test(n)}function jc(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jv(n=lt()){var e;return jc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Yv(){return uw()&&document.documentMode===10}function pg(n=lt()){return jc(n)||hg(n)||dg(n)||fg(n)||/windows phone/i.test(n)||ug(n)}/**
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
 */function gg(n,e=[]){let t;switch(n){case"Browser":t=mf(lt());break;case"Worker":t=`${mf(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gs}/${r}`}/**
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
 */class Xv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Zv(n,e={}){return ms(n,"GET","/v2/passwordPolicy",$c(n,e))}/**
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
 */const eI=6;class tI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??eI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _f(this),this.idTokenSubscription=new _f(this),this.beforeStateQueue=new Xv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qo(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(wr(this));const t=e?ct(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zv(this),t=new tI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ea(n){return ct(n)}class _f{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rI(n){zc=n}function sI(n){return zc.loadJS(n)}function iI(){return zc.gapiScript}function oI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aI(n,e){const t=Mc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(wn(i,e??{}))return s;sn(s,"already-initialized")}return t.initialize({options:e})}function lI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cI(n,e,t){const r=Ea(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mg(e),{host:o,port:l}=uI(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(wn(h,r.config.emulator)&&wn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vi(o)?Wp(`${i}//${o}${c}`):hI()}function mg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uI(n){const e=mg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yf(o)}}}function yf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _g{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function es(n,e){return $v(n,"POST","/v1/accounts:signInWithIdp",$c(n,e))}/**
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
 */const fI="http://localhost";class Sr extends _g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return es(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,es(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,es(e,t)}buildRequest(){const e={requestUri:fI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xi(t)}return e}}/**
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
 */class qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Ni{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class $n extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $n.credential(t,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class gn extends Ni{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class Bn extends Ni{constructor(){super("twitter.com")}static credential(e,t){return Sr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=Tf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Tf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ko extends Rn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ko(e,t,r,s)}}function yg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(n,i,e,r):i})}async function dI(n,e,t=!1){const r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return as._forOperation(n,"link",r)}/**
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
 */async function pI(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await _i(n,yg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const o=Bc(i.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(n.uid===l,r,"user-mismatch"),as._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
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
 */async function gI(n,e,t=!1){if(Vt(n.app))return Promise.reject(wr(n));const r="signIn",s=await yg(n,r,e),i=await as._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function mI(n,e,t,r){return ct(n).onIdTokenChanged(e,t,r)}function _I(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function yI(n,e,t,r){return ct(n).onAuthStateChanged(e,t,r)}function TI(n){return ct(n).signOut()}const Wo="__sak";/**
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
 */class Tg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EI=1e3,wI=10;class Eg extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eg.type="LOCAL";const vI=Eg;/**
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
 */class wg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wg.type="SESSION";const vg=wg;/**
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
 */function II(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await II(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
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
 */function Hc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class bI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Hc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function AI(n){Yt().location.href=n}/**
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
 */function Ig(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function SI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kI(){return Ig()?self:null}/**
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
 */const bg="firebaseLocalStorageDb",PI=1,Go="firebaseLocalStorage",Ag="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function va(n,e){return n.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function CI(){const n=indexedDB.deleteDatabase(bg);return new Oi(n).toPromise()}function ql(){const n=indexedDB.open(bg,PI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Go,{keyPath:Ag})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await CI(),e(await ql()))})})}async function Ef(n,e,t){const r=va(n,!0).put({[Ag]:e,value:t});return new Oi(r).toPromise()}async function xI(n,e){const t=va(n,!1).get(e),r=await new Oi(t).toPromise();return r===void 0?null:r.value}function wf(n,e){const t=va(n,!0).delete(e);return new Oi(t).toPromise()}const VI=800,DI=3;class Sg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>DI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await SI(),!this.activeServiceWorker)return;this.sender=new bI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Ef(e,Wo,"1"),await wf(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sg.type="LOCAL";const NI=Sg;new Di(3e4,6e4);/**
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
 */function Rg(n,e){return e?_n(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Kc extends _g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,t){return es(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OI(n){return gI(n.auth,new Kc(n),n.bypassAuthState)}function MI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),pI(t,new Kc(n),n.bypassAuthState)}async function LI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),dI(t,new Kc(n),n.bypassAuthState)}/**
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
 */class kg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OI;case"linkViaPopup":case"linkViaRedirect":return LI;case"reauthViaPopup":case"reauthViaRedirect":return MI;default:sn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FI=new Di(2e3,1e4);async function UI(n,e,t){if(Vt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=Ea(n);Dv(n,e,qc);const s=Rg(r,t);return new _r(r,"signInViaPopup",e,s).executeNotNull()}class _r extends kg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FI.get())};e()}}_r.currentPopupAction=null;/**
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
 */const $I="pendingRedirect",vo=new Map;class BI extends kg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(n,e){const t=HI(e),r=qI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function zI(n,e){vo.set(n._key(),e)}function qI(n){return _n(n._redirectPersistence)}function HI(n){return wo($I,n.config.apiKey,n.name)}async function KI(n,e,t=!1){if(Vt(n.app))return Promise.reject(wr(n));const r=Ea(n),s=Rg(r,e),o=await new BI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WI=10*60*1e3;class GI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(e))}saveEventToCache(e){this.cachedEventUids.add(vf(e)),this.lastProcessedEventTime=Date.now()}}function vf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pg(n);default:return!1}}/**
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
 */async function JI(n,e={}){return ms(n,"GET","/v1/projects",e)}/**
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
 */const YI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function ZI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JI(n);for(const t of e)try{if(eb(t))return}catch{}sn(n,"unauthorized-domain")}function eb(n){const e=jl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!XI.test(t))return!1;if(YI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tb=new Di(3e4,6e4);function If(){const n=Yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nb(n){return new Promise((e,t)=>{var s,i,o;function r(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),t(Mt(n,"network-request-failed"))},timeout:tb.get()})}if((i=(s=Yt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Yt().gapi)!=null&&o.load)r();else{const l=oI("iframefcb");return Yt()[l]=()=>{gapi.load?r():t(Mt(n,"network-request-failed"))},sI(`${iI()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function rb(n){return Io=Io||nb(n),Io}/**
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
 */const sb=new Di(5e3,15e3),ib="__/auth/iframe",ob="emulator/auth/iframe",ab={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Uc(e,ob):`https://${n.config.authDomain}/${ib}`,r={apiKey:e.apiKey,appName:n.name,v:gs},s=lb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${xi(r).slice(1)}`}async function ub(n){const e=await rb(n),t=Yt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:cb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ab,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(n,"network-request-failed"),l=Yt().setTimeout(()=>{i(o)},sb.get());function c(){Yt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fb=500,db=600,pb="_blank",gb="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mb(n,e,t,r=fb,s=db){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...hb,width:r.toString(),height:s.toString(),top:i,left:o},h=lt().toLowerCase();t&&(l=cg(h)?pb:t),ag(h)&&(e=e||gb,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[A,V])=>`${_}${A}=${V},`,"");if(Jv(h)&&l!=="_self")return _b(e||"",l),new bf(null);const p=window.open(e||"",l,f);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new bf(p)}function _b(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const yb="__/auth/handler",Tb="emulator/auth/handler",Eb=encodeURIComponent("fac");async function Af(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gs,eventId:s};if(e instanceof qc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ni){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${Eb}=${encodeURIComponent(c)}`:"";return`${wb(n)}?${xi(l).slice(1)}${h}`}function wb({config:n}){return n.emulator?Uc(n,Tb):`https://${n.authDomain}/${yb}`}/**
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
 */const ml="webStorageSupport";class vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vg,this._completeRedirectFn=KI,this._overrideRedirectResult=zI}async _openPopup(e,t,r,s){var o;In((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Af(e,t,r,jl(),s);return mb(e,i,Hc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Af(e,t,r,jl(),s);return AI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ub(e),r=new GI(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ml,{type:ml},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ml];i!==void 0&&t(!!i),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pg()||lg()||jc()}}const Ib=vb;var Sf="@firebase/auth",Rf="1.13.0";/**
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
 */class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ab(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(n){os(new Ar("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(n)},h=new nI(r,s,i,c);return lI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),os(new Ar("auth-internal",e=>{const t=Ea(e.getProvider("auth").getImmediate());return(r=>new bb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Sf,Rf,Ab(n)),Hn(Sf,Rf,"esm2020")}/**
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
 */const Rb=5*60,kb=Kp("authIdTokenMaxAge")||Rb;let kf=null;const Pb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kb)return;const s=t==null?void 0:t.token;kf!==s&&(kf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cb(n=Yp()){const e=Mc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=aI(n,{popupRedirectResolver:Ib,persistence:[NI,vI,vg]}),r=Kp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Pb(i.toString());_I(t,o,()=>o(t.currentUser)),mI(t,l=>o(l))}}const s=qp("auth");return s&&cI(t,`http://${s}`),t}function xb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}rI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");var Pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kn,Cg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.F=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(I,v,S){for(var E=Array(arguments.length-2),De=2;De<arguments.length;De++)E[De-2]=arguments[De];return m.prototype[v].apply(I,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);const I=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)I[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;v<16;++v)I[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];let S=T.g[3],E;E=m+(S^y&(v^S))+I[0]+3614090360&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(v^m&(y^v))+I[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=v+(y^S&(m^y))+I[2]+606105819&4294967295,v=S+(E<<17&4294967295|E>>>15),E=y+(m^v&(S^m))+I[3]+3250441966&4294967295,y=v+(E<<22&4294967295|E>>>10),E=m+(S^y&(v^S))+I[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(v^m&(y^v))+I[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=v+(y^S&(m^y))+I[6]+2821735955&4294967295,v=S+(E<<17&4294967295|E>>>15),E=y+(m^v&(S^m))+I[7]+4249261313&4294967295,y=v+(E<<22&4294967295|E>>>10),E=m+(S^y&(v^S))+I[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(v^m&(y^v))+I[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=v+(y^S&(m^y))+I[10]+4294925233&4294967295,v=S+(E<<17&4294967295|E>>>15),E=y+(m^v&(S^m))+I[11]+2304563134&4294967295,y=v+(E<<22&4294967295|E>>>10),E=m+(S^y&(v^S))+I[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(v^m&(y^v))+I[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=v+(y^S&(m^y))+I[14]+2792965006&4294967295,v=S+(E<<17&4294967295|E>>>15),E=y+(m^v&(S^m))+I[15]+1236535329&4294967295,y=v+(E<<22&4294967295|E>>>10),E=m+(v^S&(y^v))+I[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^v&(m^y))+I[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=v+(m^y&(S^m))+I[11]+643717713&4294967295,v=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(v^S))+I[0]+3921069994&4294967295,y=v+(E<<20&4294967295|E>>>12),E=m+(v^S&(y^v))+I[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^v&(m^y))+I[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=v+(m^y&(S^m))+I[15]+3634488961&4294967295,v=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(v^S))+I[4]+3889429448&4294967295,y=v+(E<<20&4294967295|E>>>12),E=m+(v^S&(y^v))+I[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^v&(m^y))+I[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=v+(m^y&(S^m))+I[3]+4107603335&4294967295,v=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(v^S))+I[8]+1163531501&4294967295,y=v+(E<<20&4294967295|E>>>12),E=m+(v^S&(y^v))+I[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^v&(m^y))+I[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=v+(m^y&(S^m))+I[7]+1735328473&4294967295,v=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(v^S))+I[12]+2368359562&4294967295,y=v+(E<<20&4294967295|E>>>12),E=m+(y^v^S)+I[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^v)+I[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=v+(S^m^y)+I[11]+1839030562&4294967295,v=S+(E<<16&4294967295|E>>>16),E=y+(v^S^m)+I[14]+4259657740&4294967295,y=v+(E<<23&4294967295|E>>>9),E=m+(y^v^S)+I[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^v)+I[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=v+(S^m^y)+I[7]+4139469664&4294967295,v=S+(E<<16&4294967295|E>>>16),E=y+(v^S^m)+I[10]+3200236656&4294967295,y=v+(E<<23&4294967295|E>>>9),E=m+(y^v^S)+I[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^v)+I[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=v+(S^m^y)+I[3]+3572445317&4294967295,v=S+(E<<16&4294967295|E>>>16),E=y+(v^S^m)+I[6]+76029189&4294967295,y=v+(E<<23&4294967295|E>>>9),E=m+(y^v^S)+I[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^v)+I[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=v+(S^m^y)+I[15]+530742520&4294967295,v=S+(E<<16&4294967295|E>>>16),E=y+(v^S^m)+I[2]+3299628645&4294967295,y=v+(E<<23&4294967295|E>>>9),E=m+(v^(y|~S))+I[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~v))+I[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=v+(m^(S|~y))+I[14]+2878612391&4294967295,v=S+(E<<15&4294967295|E>>>17),E=y+(S^(v|~m))+I[5]+4237533241&4294967295,y=v+(E<<21&4294967295|E>>>11),E=m+(v^(y|~S))+I[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~v))+I[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=v+(m^(S|~y))+I[10]+4293915773&4294967295,v=S+(E<<15&4294967295|E>>>17),E=y+(S^(v|~m))+I[1]+2240044497&4294967295,y=v+(E<<21&4294967295|E>>>11),E=m+(v^(y|~S))+I[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~v))+I[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=v+(m^(S|~y))+I[6]+2734768916&4294967295,v=S+(E<<15&4294967295|E>>>17),E=y+(S^(v|~m))+I[13]+1309151649&4294967295,y=v+(E<<21&4294967295|E>>>11),E=m+(v^(y|~S))+I[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~v))+I[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=v+(m^(S|~y))+I[2]+718787259&4294967295,v=S+(E<<15&4294967295|E>>>17),E=y+(S^(v|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const y=m-this.blockSize,I=this.C;let v=this.h,S=0;for(;S<m;){if(v==0)for(;S<=y;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<m;)if(I[v++]=T.charCodeAt(S++),v==this.blockSize){s(this,I),v=0;break}}else for(;S<m;)if(I[v++]=T[S++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)T[m++]=this.g[y]>>>I&255;return T};function i(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function o(T,m){this.h=m;const y=[];let I=!0;for(let v=T.length-1;v>=0;v--){const S=T[v]|0;I&&S==m||(y[v]=S,I=!1)}this.g=y}var l={};function c(T){return-128<=T&&T<128?i(T,function(m){return new o([m|0],m<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return $(h(-T));const m=[];let y=1;for(let I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new o(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return $(f(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(m,8));let I=p;for(let S=0;S<T.length;S+=8){var v=Math.min(8,T.length-S);const E=parseInt(T.substring(S,S+v),m);v<8?(v=h(Math.pow(m,v)),I=I.j(v).add(h(E))):(I=I.j(y),I=I.add(h(E)))}return I}var p=c(0),_=c(1),A=c(16777216);n=o.prototype,n.m=function(){if(C(this))return-$(this).m();let T=0,m=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);T+=(I>=0?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(C(this))return"-"+$(this).toString(T);const m=h(Math.pow(T,6));var y=this;let I="";for(;;){const v=K(y,m).g;y=W(y,v.j(m));let S=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=v,V(y))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function C(T){return T.h==-1}n.l=function(T){return T=W(this,T),C(T)?-1:V(T)?0:1};function $(T){const m=T.g.length,y=[];for(let I=0;I<m;I++)y[I]=~T.g[I];return new o(y,~T.h).add(_)}n.abs=function(){return C(this)?$(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),y=[];let I=0;for(let v=0;v<=m;v++){let S=I+(this.i(v)&65535)+(T.i(v)&65535),E=(S>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=E>>>16,S&=65535,E&=65535,y[v]=E<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function W(T,m){return T.add($(m))}n.j=function(T){if(V(this)||V(T))return p;if(C(this))return C(T)?$(this).j($(T)):$($(this).j(T));if(C(T))return $(this.j($(T)));if(this.l(A)<0&&T.l(A)<0)return h(this.m()*T.m());const m=this.g.length+T.g.length,y=[];for(var I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<T.g.length;v++){const S=this.i(I)>>>16,E=this.i(I)&65535,De=T.i(v)>>>16,St=T.i(v)&65535;y[2*I+2*v]+=E*St,H(y,2*I+2*v),y[2*I+2*v+1]+=S*St,H(y,2*I+2*v+1),y[2*I+2*v+1]+=E*De,H(y,2*I+2*v+1),y[2*I+2*v+2]+=S*De,H(y,2*I+2*v+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new o(y,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Y(T,m){this.g=T,this.h=m}function K(T,m){if(V(m))throw Error("division by zero");if(V(T))return new Y(p,p);if(C(T))return m=K($(T),m),new Y($(m.g),$(m.h));if(C(m))return m=K(T,$(m)),new Y($(m.g),m.h);if(T.g.length>30){if(C(T)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,I=m;I.l(T)<=0;)y=oe(y),I=oe(I);var v=G(y,1),S=G(I,1);for(I=G(I,2),y=G(y,2);!V(I);){var E=S.add(I);E.l(T)<=0&&(v=v.add(y),S=E),I=G(I,1),y=G(y,1)}return m=W(T,v.j(m)),new Y(v,m)}for(v=p;T.l(m)>=0;){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=h(y),E=S.j(m);C(E)||E.l(T)>0;)y-=I,S=h(y),E=S.j(m);V(S)&&(S=_),v=v.add(S),T=W(T,E)}return new Y(v,T)}n.B=function(T){return K(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new o(y,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new o(y,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new o(y,this.h^T.h)};function oe(T){const m=T.g.length+1,y=[];for(let I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(y,T.h)}function G(T,m){const y=m>>5;m%=32;const I=T.g.length-y,v=[];for(let S=0;S<I;S++)v[S]=m>0?T.i(S+y)>>>m|T.i(S+y+1)<<32-m:T.i(S+y);return new o(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Kn=o}).apply(typeof Pf<"u"?Pf:typeof self<"u"?self:typeof window<"u"?window:{});var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xg,Ws,Vg,bo,Hl,Dg,Ng,Og;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lo=="object"&&lo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in d))break e;d=d[R]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=c,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,R,k){for(var B=Array(arguments.length-2),le=2;le<arguments.length;le++)B[le-2]=arguments[le];return u.prototype[R].apply(g,B)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function V(a,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const k=R.length||0;a.length=d+k;for(let B=0;B<k;B++)a[d+B]=R[B]}else a.push(R)}}class C{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function W(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,d){const g=Y.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Y=new C(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,G=!1,T=new H,m=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(y)}};function y(){for(var a;a=W();){try{a.h.call(a.g)}catch(d){$(d)}var u=Y;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}G=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function De(a,u){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(De,v),De.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Le=0;function Ie(a,u,d,g,R){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=R,this.key=++Le,this.da=this.fa=!1}function ge(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rt(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function Or(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Ut(a){const u={};for(const d in a)u[d]=a[d];return u}const Tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vs(a,u){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)a[d]=g[d];for(let k=0;k<Tt.length;k++)d=Tt[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Mr(a){this.src=a,this.g={},this.h=0}Mr.prototype.add=function(a,u,d,g,R){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const B=ln(a,u,g,R);return B>-1?(u=a[B],d||(u.fa=!1)):(u=new Ie(u,this.src,k,!!g,R),u.fa=d,a.push(u)),u};function Is(a,u){const d=u.type;if(d in a.g){var g=a.g[d],R=Array.prototype.indexOf.call(g,u,void 0),k;(k=R>=0)&&Array.prototype.splice.call(g,R,1),k&&(ge(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ln(a,u,d,g){for(let R=0;R<a.length;++R){const k=a[R];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return R}return-1}var kn="closure_lm_"+(Math.random()*1e6|0),sr={};function bs(a,u,d,g,R){if(Array.isArray(u)){for(let k=0;k<u.length;k++)bs(a,u[k],d,g,R);return null}return d=j(d),a&&a[St]?a.J(u,d,l(g)?!!g.capture:!1,R):ir(a,u,d,!1,g,R)}function ir(a,u,d,g,R,k){if(!u)throw Error("Invalid event type");const B=l(R)?!!R.capture:!!R;let le=D(a);if(le||(a[kn]=le=new Mr(a)),d=le.add(u,d,g,B,k),d.proxy)return d;if(g=bu(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(R=B),R===void 0&&(R=!1),a.addEventListener(u.toString(),g,R);else if(a.attachEvent)a.attachEvent(P(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bu(){function a(d){return u.call(a.src,a.listener,d)}const u=L;return a}function w(a,u,d,g,R){if(Array.isArray(u))for(var k=0;k<u.length;k++)w(a,u[k],d,g,R);else g=l(g)?!!g.capture:!!g,d=j(d),a&&a[St]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=ln(u,d,g,R),d>-1&&(ge(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=D(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ln(u,d,g,R)),(d=a>-1?u[a]:null)&&b(d))}function b(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[St])Is(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(P(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=D(u))?(Is(d,a),d.h==0&&(d.src=null,u[kn]=null)):ge(a)}}}function P(a){return a in sr?sr[a]:sr[a]="on"+a}function L(a,u){if(a.da)a=!0;else{u=new De(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&b(a),a=d.call(g,u)}return a}function D(a){return a=a[kn],a instanceof Mr?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function j(a){return typeof a=="function"?a:(a[O]||(a[O]=function(u){return a.handleEvent(u)}),a[O])}function U(){I.call(this),this.i=new Mr(this),this.M=this,this.G=null}p(U,I),U.prototype[St]=!0,U.prototype.removeEventListener=function(a,u,d,g){w(this,a,u,d,g)};function F(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new v(u,a);else if(u instanceof v)u.target=u.target||a;else{var R=u;u=new v(g,a),vs(u,R)}R=!0;let k,B;if(d)for(B=d.length-1;B>=0;B--)k=u.g=d[B],R=N(k,g,!0,u)&&R;if(k=u.g=a,R=N(k,g,!0,u)&&R,R=N(k,g,!1,u)&&R,d)for(B=0;B<d.length;B++)k=u.g=d[B],R=N(k,g,!1,u)&&R}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)ge(d[g]);delete a.g[u],a.h--}}this.G=null},U.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},U.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function N(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let k=0;k<u.length;++k){const B=u[k];if(B&&!B.da&&B.capture==d){const le=B.listener,ze=B.ha||B.src;B.fa&&Is(a.i,B),R=le.call(ze,g)!==!1&&R}}return R&&!g.defaultPrevented}function X(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function z(a){a.g=X(()=>{a.g=null,a.i&&(a.i=!1,z(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class J extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(a){I.call(this),this.h=a,this.g={}}p(Z,I);var fe=[];function me(a){Rt(a.g,function(u,d){this.g.hasOwnProperty(d)&&b(u)},a),a.g={}}Z.prototype.N=function(){Z.Z.N.call(this),me(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _e=o.JSON.stringify,Ne=o.JSON.parse,je=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Et(){}function wt(){}var xt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Lr(){v.call(this,"d")}p(Lr,v);function Je(){v.call(this,"c")}p(Je,v);var We={},As=null;function or(){return As=As||new U}We.Ia="serverreachability";function Au(a){v.call(this,We.Ia,a)}p(Au,v);function Ss(a){const u=or();F(u,new Au(u))}We.STAT_EVENT="statevent";function Su(a,u){v.call(this,We.STAT_EVENT,a),this.stat=u}p(Su,v);function ut(a){const u=or();F(u,new Su(u,a))}We.Ja="timingevent";function Ru(a,u){v.call(this,We.Ja,a),this.size=u}p(Ru,v);function Rs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function ks(){this.g=!0}ks.prototype.ua=function(){this.g=!1};function l_(a,u,d,g,R,k){a.info(function(){if(a.g)if(k){var B="",le=k.split("&");for(let Ae=0;Ae<le.length;Ae++){var ze=le[Ae].split("=");if(ze.length>1){const Ge=ze[0];ze=ze[1];const Bt=Ge.split("_");B=Bt.length>=2&&Bt[1]=="type"?B+(Ge+"="+ze+"&"):B+(Ge+"=redacted&")}}}else B=null;else B=k;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+d+`
`+B})}function c_(a,u,d,g,R,k,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+d+`
`+k+" "+B})}function Fr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+h_(a,d)+(g?" "+g:"")})}function u_(a,u){a.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function h_(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return _e(k)}catch{return u}}var ji={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ku={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Pu;function Fa(){}p(Fa,Et),Fa.prototype.g=function(){return new XMLHttpRequest},Pu=new Fa;function Ps(a){return encodeURIComponent(String(a))}function f_(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Pn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var xu={},Ua={};function $a(a,u,d){a.M=1,a.A=qi($t(u)),a.u=d,a.R=!0,Vu(a,null)}function Vu(a,u){a.F=Date.now(),zi(a),a.B=$t(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Hu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Cu,a.g=ch(a.j,d?u:null,!a.u),a.P>0&&(a.O=new J(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(fe[0]=R.toString()),R=fe);for(let k=0;k<R.length;k++){const B=bs(d,R[k],g||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=a.J?Ut(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ss(),l_(a.i,a.v,a.B,a.l,a.S,a.u)}Pn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Vn(a)==3?u.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const le=Vn(this.g),ze=this.g.ya(),Ae=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Xu(this.g)))){this.K||le!=4||ze==7||(ze==8||Ae<=0?Ss(3):Ss(2)),Ba(this);var u=this.g.ca();this.X=u;var d=d_(this);if(this.o=u==200,c_(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var k=g;break t}}k=null}if(a=k)Fr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ja(this,a);else{this.o=!1,this.m=3,ut(12),ar(this),Cs(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<d.length;)if(Ge=p_(this,d),Ge==Ua){le==4&&(this.m=4,ut(14),a=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==xu){this.m=4,ut(15),Fr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Fr(this.i,this.l,Ge,null),ja(this,Ge);if(Du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)Fr(this.i,this.l,d,"[Invalid Chunked Response]"),ar(this),Cs(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ja(B),B.P=!0,ut(11))}}else Fr(this.i,this.l,d,null),ja(this,d);le==4&&ar(this),this.o&&!this.K&&(le==4?ih(this.j,this):(this.o=!1,zi(this)))}else k_(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),ar(this),Cs(this)}}}catch{}finally{}};function d_(a){if(!Du(a))return a.g.la();const u=Xu(a.g);if(u==="")return"";let d="";const g=u.length,R=Vn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ar(a),Cs(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(R&&k==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Du(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function p_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ua:(d=Number(u.substring(d,g)),isNaN(d)?xu:(g+=1,g+d>u.length?Ua:(u=u.slice(g,g+d),a.C=g+d,u)))}Pn.prototype.cancel=function(){this.K=!0,ar(this)};function zi(a){a.T=Date.now()+a.H,Nu(a,a.H)}function Nu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Rs(h(a.aa,a),u)}function Ba(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Pn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(u_(this.i,this.B),this.M!=2&&(Ss(),ut(17)),ar(this),this.m=2,Cs(this)):Nu(this,this.T-a)};function Cs(a){a.j.I==0||a.K||ih(a.j,a)}function ar(a){Ba(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,me(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function ja(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||za(d.h,a))){if(!a.L&&za(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qi(d),Wi(d);else break e;Qa(d),ut(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Rs(h(d.Va,d),6e3));Lu(d.h)<=1&&d.ta&&(d.ta=void 0)}else cr(d,11)}else if((a.L||d.g==a)&&Qi(d),!E(u))for(R=d.Ba.g.parse(u),u=0;u<R.length;u++){let Ae=R[u];const Ge=Ae[0];if(!(Ge<=d.K))if(d.K=Ge,Ae=Ae[1],d.I==2)if(Ae[0]=="c"){d.M=Ae[1],d.ba=Ae[2];const Bt=Ae[3];Bt!=null&&(d.ka=Bt,d.j.info("VER="+d.ka));const ur=Ae[4];ur!=null&&(d.za=ur,d.j.info("SVER="+d.za));const Dn=Ae[5];Dn!=null&&typeof Dn=="number"&&Dn>0&&(g=1.5*Dn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Nn=a.g;if(Nn){const Yi=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var k=g.h;k.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(qa(k,k.h),k.h=null))}if(g.G){const Ya=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ya&&(g.wa=Ya,ke(g.J,g.G,Ya))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var B=a;if(g.na=lh(g,g.L?g.ba:null,g.W),B.L){Fu(g.h,B);var le=B,ze=g.O;ze&&(le.H=ze),le.D&&(Ba(le),zi(le)),g.g=B}else rh(g);d.i.length>0&&Gi(d)}else Ae[0]!="stop"&&Ae[0]!="close"||cr(d,7);else d.I==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?cr(d,7):Ga(d):Ae[0]!="noop"&&d.l&&d.l.qa(Ae),d.A=0)}}Ss(4)}catch{}}var g_=class{constructor(a,u){this.g=a,this.map=u}};function Ou(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lu(a){return a.h?1:a.g?a.g.size:0}function za(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function Fu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ou.prototype.cancel=function(){if(this.i=Uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Uu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return A(a.i)}var $u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m_(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let R,k=null;g>=0?(R=a[d].substring(0,g),k=a[d].substring(g+1)):R=a[d],u(R,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Cn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Cn?(this.l=a.l,xs(this,a.j),this.o=a.o,this.g=a.g,Vs(this,a.u),this.h=a.h,Ha(this,Ku(a.i)),this.m=a.m):a&&(u=String(a).match($u))?(this.l=!1,xs(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),Vs(this,u[4]),this.h=Ds(u[5]||"",!0),Ha(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.l=!1,this.i=new Os(null,this.l))}Cn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ns(u,Bu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,Bu,!0),"@"),a.push(Ps(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?T_:y_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,w_)),a.join("")},Cn.prototype.resolve=function(a){const u=$t(this);let d=!!a.j;d?xs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)Vs(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const k=[];for(let B=0;B<R.length;){const le=R[B++];le=="."?g&&B==R.length&&k.push(""):le==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&B==R.length&&k.push("")):(k.push(le),g=!0)}g=k.join("/")}else g=R}return d?u.h=g:d=a.i.toString()!=="",d?Ha(u,Ku(a.i)):d=!!a.m,d&&(u.m=a.m),u};function $t(a){return new Cn(a)}function xs(a,u,d){a.j=d?Ds(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Vs(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Ha(a,u,d){u instanceof Os?(a.i=u,v_(a.i,a.l)):(d||(u=Ns(u,E_)),a.i=new Os(u,a.l))}function ke(a,u,d){a.i.set(u,d)}function qi(a){return ke(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ds(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,__),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function __(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bu=/[#\/\?@]/g,y_=/[#\?:]/g,T_=/[#\?]/g,E_=/[#\?@]/g,w_=/#/g;function Os(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&m_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Os.prototype,n.add=function(a,u){lr(this),this.i=null,a=Ur(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ju(a,u){lr(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function zu(a,u){return lr(a),u=Ur(a,u),a.g.has(u)}n.forEach=function(a,u){lr(this),this.g.forEach(function(d,g){d.forEach(function(R){a.call(u,R,g,this)},this)},this)};function qu(a,u){lr(a);let d=[];if(typeof u=="string")zu(a,u)&&(d=d.concat(a.g.get(Ur(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return lr(this),this.i=null,a=Ur(this,a),zu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=qu(this,a),a.length>0?String(a[0]):u):u};function Hu(a,u,d){ju(a,u),d.length>0&&(a.i=null,a.g.set(Ur(a,u),A(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const R=Ps(d);d=qu(this,d);for(let k=0;k<d.length;k++){let B=R;d[k]!==""&&(B+="="+Ps(d[k])),a.push(B)}}return this.i=a.join("&")};function Ku(a){const u=new Os;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function v_(a,u){u&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(d,g){const R=g.toLowerCase();g!=R&&(ju(this,g),Hu(this,R,d))},a)),a.j=u}function I_(a,u){const d=new ks;if(o.Image){const g=new Image;g.onload=f(xn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(xn,d,"TestLoadImage: error",!1,u,g),g.onabort=f(xn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(xn,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function b_(a,u){const d=new ks,g=new AbortController,R=setTimeout(()=>{g.abort(),xn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(R),k.ok?xn(d,"TestPingServer: ok",!0,u):xn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),xn(d,"TestPingServer: error",!1,u)})}function xn(a,u,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function A_(){this.g=new je}function Ka(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ka,Et),Ka.prototype.g=function(){return new Hi(this.i,this.h)};function Hi(a,u){U.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Hi,U),n=Hi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Ls(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&Wu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},n.Na=function(a){this.g&&(this.response=a,Ms(this))},n.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ls(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gu(a){let u="";return Rt(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Wa(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Gu(d),typeof a=="string"?d!=null&&Ps(d):ke(a,u,d))}function Oe(a){U.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Oe,U);var S_=/^https?$/i,R_=["POST","PUT"];n=Oe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Pu.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Qu(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(R_,u,void 0)>=0)||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,B]of d)this.g.setRequestHeader(k,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Qu(this,k)}};function Qu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Ju(a),Ki(a)}function Ju(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),Ki(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),Oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Yu(this):this.Xa())},n.Xa=function(){Yu(this)};function Yu(a){if(a.h&&typeof i<"u"){if(a.v&&Vn(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=k===0){let B=String(a.D).match($u)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!S_.test(B?B.toLowerCase():"")}d=g}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var R=Vn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Ju(a)}}finally{Ki(a)}}}}function Ki(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||F(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ne(u)}};function Xu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function k_(a){const u={};a=(a.g&&Vn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var d=f_(a[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[R]||[];u[R]=k,k.push(d)}Or(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Zu(a){this.za=0,this.i=[],this.j=new ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,a),this.Za=Fs("retryDelaySeedMs",1e4,a),this.Ta=Fs("forwardChannelMaxRetries",2,a),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ou(a&&a.concurrentRequestLimit),this.Ba=new A_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Zu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){ut(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=lh(this,null,this.W),Gi(this)};function Ga(a){if(eh(a),a.I==3){var u=a.V++,d=$t(a.J);if(ke(d,"SID",a.M),ke(d,"RID",u),ke(d,"TYPE","terminate"),Us(a,d),u=new Pn(a,a.j,u),u.M=2,u.A=qi($t(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=ch(u.j,null),u.g.ea(u.A)),u.F=Date.now(),zi(u)}ah(a)}function Wi(a){a.g&&(Ja(a),a.g.cancel(),a.g=null)}function eh(a){Wi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Gi(a){if(!Mu(a.h)&&!a.m){a.m=!0;var u=a.Ea;oe||m(),G||(oe(),G=!0),T.add(u,a),a.D=0}}function P_(a,u){return Lu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Rs(h(a.Ea,a,u),oh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Pn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Ut(k),vs(k,this.U)):k=this.U),this.u!==null||this.R||(R.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=nh(this,R,u),d=$t(this.J),ke(d,"RID",a),ke(d,"CVER",22),this.G&&ke(d,"X-HTTP-Session-Id",this.G),Us(this,d),k&&(this.R?u="headers="+Ps(Gu(k))+"&"+u:this.u&&Wa(d,this.u,k)),qa(this.h,R),this.Ra&&ke(d,"TYPE","init"),this.S?(ke(d,"$req",u),ke(d,"SID","null"),R.U=!0,$a(R,d,null)):$a(R,d,u),this.I=2}}else this.I==3&&(a?th(this,a):this.i.length==0||Mu(this.h)||th(this))};function th(a,u){var d;u?d=u.l:d=a.V++;const g=$t(a.J);ke(g,"SID",a.M),ke(g,"RID",d),ke(g,"AID",a.K),Us(a,g),a.u&&a.o&&Wa(g,a.u,a.o),d=new Pn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=nh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qa(a.h,d),$a(d,g,u)}function Us(a,u){a.H&&Rt(a.H,function(d,g){ke(u,g,d)}),a.l&&Rt({},function(d,g){ke(u,g,d)})}function nh(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let le=-1;for(;;){const ze=["count="+d];le==-1?d>0?(le=R[0].g,ze.push("ofs="+le)):le=0:ze.push("ofs="+le);let Ae=!0;for(let Ge=0;Ge<d;Ge++){var k=R[Ge].g;const Bt=R[Ge].map;if(k-=le,k<0)le=Math.max(0,R[Ge].g-100),Ae=!1;else try{k="req"+k+"_"||"";try{var B=Bt instanceof Map?Bt:Object.entries(Bt);for(const[ur,Dn]of B){let Nn=Dn;l(Dn)&&(Nn=_e(Dn)),ze.push(k+ur+"="+encodeURIComponent(Nn))}}catch(ur){throw ze.push(k+"type="+encodeURIComponent("_badmap")),ur}}catch{g&&g(Bt)}}if(Ae){B=ze.join("&");break e}}B=void 0}return a=a.i.splice(0,d),u.G=a,B}function rh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;oe||m(),G||(oe(),G=!0),T.add(u,a),a.A=0}}function Qa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Rs(h(a.Da,a),oh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,sh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Rs(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Wi(this),sh(this))};function Ja(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function sh(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=$t(a.na);ke(u,"RID","rpc"),ke(u,"SID",a.M),ke(u,"AID",a.K),ke(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ke(u,"TO",a.ia),ke(u,"TYPE","xmlhttp"),Us(a,u),a.u&&a.o&&Wa(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=qi($t(u)),d.u=null,d.R=!0,Vu(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Wi(this),Qa(this),ut(19))};function Qi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ih(a,u){var d=null;if(a.g==u){Qi(a),Ja(a),a.g=null;var g=2}else if(za(a.h,u))d=u.G,Fu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var R=a.D;g=or(),F(g,new Ru(g,d)),Gi(a)}else rh(a);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&P_(a,u)||g==2&&Qa(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),R){case 1:cr(a,5);break;case 4:cr(a,10);break;case 3:cr(a,6);break;default:cr(a,2)}}}function oh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function cr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const R=!g;g=new Cn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||xs(g,"https"),qi(g),R?I_(g.toString(),d):b_(g.toString(),d)}else ut(2);a.I=0,a.l&&a.l.pa(u),ah(a),eh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function ah(a){if(a.I=0,a.ja=[],a.l){const u=Uu(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ja,u),V(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function lh(a,u,d){var g=d instanceof Cn?$t(d):new Cn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Vs(g,g.u);else{var R=o.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const k=new Cn(null);g&&xs(k,g),u&&(k.g=u),R&&Vs(k,R),d&&(k.h=d),g=k}return d=a.G,u=a.wa,d&&u&&ke(g,d,u),ke(g,"VER",a.ka),Us(a,g),g}function ch(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Oe(new Ka({ab:d})):new Oe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ji(){}Ji.prototype.g=function(a,u){return new vt(a,u)};function vt(a,u){U.call(this),this.g=new Zu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!E(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}p(vt,U),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ga(this.g)},vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=_e(a),a=d);u.i.push(new g_(u.Ya++,a)),u.I==3&&Gi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,vt.Z.N.call(this)};function hh(a){Lr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(hh,Lr);function fh(){Je.call(this),this.status=1}p(fh,Je);function $r(a){this.g=a}p($r,uh),$r.prototype.ra=function(){F(this.g,"a")},$r.prototype.qa=function(a){F(this.g,new hh(a))},$r.prototype.pa=function(a){F(this.g,new fh)},$r.prototype.oa=function(){F(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Og=function(){return new Ji},Ng=function(){return or()},Dg=We,Hl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,bo=ji,ku.COMPLETE="complete",Vg=ku,wt.EventType=xt,xt.OPEN="a",xt.CLOSE="b",xt.ERROR="c",xt.MESSAGE="d",U.prototype.listen=U.prototype.J,Ws=wt,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,xg=Oe}).apply(typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let _s="12.12.0";function Vb(n){_s=n}/**
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
 */const Rr=new Nc("@firebase/firestore");function qr(){return Rr.logLevel}function q(n,...e){if(Rr.logLevel<=ce.DEBUG){const t=e.map(Wc);Rr.debug(`Firestore (${_s}): ${n}`,...t)}}function bn(n,...e){if(Rr.logLevel<=ce.ERROR){const t=e.map(Wc);Rr.error(`Firestore (${_s}): ${n}`,...t)}}function kr(n,...e){if(Rr.logLevel<=ce.WARN){const t=e.map(Wc);Rr.warn(`Firestore (${_s}): ${n}`,...t)}}function Wc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mg(n,r,t)}function Mg(n,e,t){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bn(r),new Error(r)}function Ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Mg(e,s,r)}function ie(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class Nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vr)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new Lg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class Mb{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Lb{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Mb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ub(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Gc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ub(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Kl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return _l(s)===_l(i)?ue(s,i):_l(s)?1:-1}return ue(n.length,e.length)}const $b=55296,Bb=57343;function _l(n){const e=n.charCodeAt(0);return e>=$b&&e<=Bb}function ls(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const xf="__name__";class qt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=qt.isNumericId(e),s=qt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(t)):Kl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kn.fromString(e.substring(4,e.length-2))}}class xe extends qt{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends qt{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xf}static keyField(){return new Ze([xf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(xe.fromString(e))}static fromName(e){return new ee(xe.fromString(e).popFirst(5))}static empty(){return new ee(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new xe(e.slice()))}}/**
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
 */function zb(n,e,t){if(!t)throw new Q(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qb(n,e,t,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vf(n){if(!ee.isDocumentKey(n))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function Wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qc(n);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Mi(n,e){if(!Fg(n))throw new Q(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const Df=-62135596800,Nf=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Nf);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Df)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mi(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Df;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:$e("string",Ce._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yi=-1;function Hb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new Qn(s,ee.empty(),e)}function Kb(n){return new Qn(n.readTime,n.key,yi)}class Qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qn(se.min(),ee.empty(),yi)}static max(){return new Qn(se.max(),ee.empty(),yi)}}function Wb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ys(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Gb)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(s=>s?x.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new x((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new x((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Jb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ia.ce=-1;/**
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
 */const Jc=-1;function ba(n){return n==null}function Qo(n){return n===0&&1/n==-1/0}function Yb(n){return typeof n=="number"&&Number.isInteger(n)&&!Qo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ug="";function Xb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Of(e)),e=Zb(n.get(t),e);return Of(e)}function Zb(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ug:t+="";break;default:t+=i}}return t}function Of(n){return n+Ug+""}/**
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
 */function Mf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lf(this.data.getIterator())}getIteratorFrom(e){return new Lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class Lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new At([])}unionWith(e){let t=new Ke(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bg("Invalid base64 string: "+i):i}}(e);return new et(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=eA.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
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
 */const jg="server_timestamp",zg="__type__",qg="__previous_value__",Hg="__local_write_time__";function Yc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zg])==null?void 0:r.stringValue)===jg}function Aa(n){const e=n.mapValue.fields[qg];return Yc(e)?Aa(e):e}function Ti(n){const e=Jn(n.mapValue.fields[Hg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class tA{constructor(e,t,r,s,i,o,l,c,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Jo="(default)";class Ei{constructor(e,t){this.projectId=e,this.database=t||Jo}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Jo}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}function nA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(n.options.projectId,e)}/**
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
 */const Kg="__type__",rA="__max__",uo={mapValue:{}},Wg="__vector__",Yo="value";function Xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yc(n)?4:iA(n)?9007199254740991:sA(n)?10:11:te(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=Xn(n);if(t!==Xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ti(n).isEqual(Ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),l=Jn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Yn(s.bytesValue).isEqual(Yn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),l=Fe(i.doubleValue);return o===l?Qo(o)===Qo(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return ls(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Mf(o)!==Mf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!on(o[c],l[c])))return!1;return!0}(n,e);default:return te(52216,{left:n})}}function wi(n,e){return(n.values||[]).find(t=>on(t,e))!==void 0}function cs(n,e){if(n===e)return 0;const t=Xn(n),r=Xn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Ff(n.timestampValue,e.timestampValue);case 4:return Ff(Ti(n),Ti(e));case 5:return Kl(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Yn(i),c=Yn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ue(l[h],c[h]);if(f!==0)return f}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Fe(i.latitude),Fe(o.latitude));return l!==0?l:ue(Fe(i.longitude),Fe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Uf(n.arrayValue,e.arrayValue);case 10:return function(i,o){var _,A,V,C;const l=i.fields||{},c=o.fields||{},h=(_=l[Yo])==null?void 0:_.arrayValue,f=(A=c[Yo])==null?void 0:A.arrayValue,p=ue(((V=h==null?void 0:h.values)==null?void 0:V.length)||0,((C=f==null?void 0:f.values)==null?void 0:C.length)||0);return p!==0?p:Uf(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===uo.mapValue&&o===uo.mapValue)return 0;if(i===uo.mapValue)return 1;if(o===uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const _=Kl(c[p],f[p]);if(_!==0)return _;const A=cs(l[c[p]],h[f[p]]);if(A!==0)return A}return ue(c.length,f.length)}(n.mapValue,e.mapValue);default:throw te(23264,{he:t})}}function Ff(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Jn(n),r=Jn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Uf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cs(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function us(n){return Wl(n)}function Wl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wl(t.fields[o])}`;return s+"}"}(n.mapValue):te(61005,{value:n})}function Ao(n){switch(Xn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(n);return e?16+Ao(e):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ao(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return nr(r.fields,(i,o)=>{s+=i.length+Ao(o)}),s}(n.mapValue);default:throw te(13486,{value:n})}}function Gl(n){return!!n&&"integerValue"in n}function Xc(n){return!!n&&"arrayValue"in n}function $f(n){return!!n&&"nullValue"in n}function Bf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function So(n){return!!n&&"mapValue"in n}function sA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Kg])==null?void 0:r.stringValue)===Wg}function ai(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return nr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ai(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return{...n}}function iA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rA}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!So(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=Ze.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=ai(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());So(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){nr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(ai(this.value))}}function Gg(n){const e=[];return nr(n.fields,(t,r)=>{const s=new Ze([t]);if(So(r)){const i=Gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
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
 */class st{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,se.min(),se.min(),se.min(),yt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,se.min(),se.min(),yt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,se.min(),se.min(),yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xo{constructor(e,t){this.position=e,this.inclusive=t}}function jf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),t.key):r=cs(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zo{constructor(e,t="asc"){this.field=e,this.dir=t}}function oA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qg{}class qe extends Qg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lA(e,t,r):t==="array-contains"?new hA(e,r):t==="in"?new fA(e,r):t==="not-in"?new dA(e,r):t==="array-contains-any"?new pA(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cA(e,r):new uA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cs(t,this.value)):t!==null&&Xn(this.value)===Xn(t)&&this.matchesComparison(cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Qg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new an(e,t)}matches(e){return Jg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jg(n){return n.op==="and"}function Yg(n){return aA(n)&&Jg(n)}function aA(n){for(const e of n.filters)if(e instanceof an)return!1;return!0}function Ql(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+us(n.value);if(Yg(n))return n.filters.map(e=>Ql(e)).join(",");{const e=n.filters.map(t=>Ql(t)).join(",");return`${n.op}(${e})`}}function Xg(n,e){return n instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(n,e):n instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Xg(o,s.filters[l]),!0):!1}(n,e):void te(19439)}function Zg(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${us(t.value)}`}(n):n instanceof an?function(t){return t.op.toString()+" {"+t.getFilters().map(Zg).join(" ,")+"}"}(n):"Filter"}class lA extends qe{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class cA extends qe{constructor(e,t){super(e,"in",t),this.keys=em("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uA extends qe{constructor(e,t){super(e,"not-in",t),this.keys=em("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function em(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class hA extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xc(t)&&wi(t.arrayValue,this.value)}}class fA extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wi(this.value.arrayValue,t)}}class dA extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wi(this.value.arrayValue,t)}}class pA extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
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
 */class gA{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function qf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new gA(n,e,t,r,s,i,o)}function Zc(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ql(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ba(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>us(r)).join(",")),e.Te=t}return e.Te}function eu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zf(n.startAt,e.startAt)&&zf(n.endAt,e.endAt)}function Jl(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Sa{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function mA(n,e,t,r,s,i,o,l){return new Sa(n,e,t,r,s,i,o,l)}function tu(n){return new Sa(n)}function Hf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _A(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function yA(n){return n.collectionGroup!==null}function li(n){const e=ie(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(Ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Zo(i,r))}),t.has(Ze.keyField().canonicalString())||e.Ee.push(new Zo(Ze.keyField(),r))}return e.Ee}function Xt(n){const e=ie(n);return e.Ie||(e.Ie=TA(e,li(n))),e.Ie}function TA(n,e){if(n.limitType==="F")return qf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zo(s.field,i)});const t=n.endAt?new Xo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xo(n.startAt.position,n.startAt.inclusive):null;return qf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Yl(n,e,t){return new Sa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ra(n,e){return eu(Xt(n),Xt(e))&&n.limitType===e.limitType}function tm(n){return`${Zc(Xt(n))}|lt:${n.limitType}`}function Hr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Zg(s)).join(", ")}]`),ba(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>us(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>us(s)).join(",")),`Target(${r})`}(Xt(n))}; limitType=${n.limitType})`}function ka(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=jf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,li(r),s)||r.endAt&&!function(o,l,c){const h=jf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,li(r),s))}(n,e)}function EA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nm(n){return(e,t)=>{let r=!1;for(const s of li(n)){const i=wA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wA(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?cs(c,h):te(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
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
 */const vA=new Ve(ee.comparator);function An(){return vA}const rm=new Ve(ee.comparator);function Gs(...n){let e=rm;for(const t of n)e=e.insert(t.key,t);return e}function sm(n){let e=rm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yr(){return ci()}function im(){return ci()}function ci(){return new Dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const IA=new Ve(ee.comparator),bA=new Ke(ee.comparator);function he(...n){let e=bA;for(const t of n)e=e.add(t);return e}const AA=new Ke(ue);function SA(){return AA}/**
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
 */function nu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function om(n){return{integerValue:""+n}}function RA(n,e){return Yb(e)?om(e):nu(n,e)}/**
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
 */class Pa{constructor(){this._=void 0}}function kA(n,e,t){return n instanceof ea?function(s,i){const o={fields:{[zg]:{stringValue:jg},[Hg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yc(i)&&(i=Aa(i)),i&&(o.fields[qg]=i),{mapValue:o}}(t,e):n instanceof hs?lm(n,e):n instanceof fs?cm(n,e):function(s,i){const o=am(s,i),l=Kf(o)+Kf(s.Ae);return Gl(o)&&Gl(s.Ae)?om(l):nu(s.serializer,l)}(n,e)}function PA(n,e,t){return n instanceof hs?lm(n,e):n instanceof fs?cm(n,e):t}function am(n,e){return n instanceof ta?function(r){return Gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ea extends Pa{}class hs extends Pa{constructor(e){super(),this.elements=e}}function lm(n,e){const t=um(e);for(const r of n.elements)t.some(s=>on(s,r))||t.push(r);return{arrayValue:{values:t}}}class fs extends Pa{constructor(e){super(),this.elements=e}}function cm(n,e){let t=um(e);for(const r of n.elements)t=t.filter(s=>!on(s,r));return{arrayValue:{values:t}}}class ta extends Pa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kf(n){return Fe(n.integerValue||n.doubleValue)}function um(n){return Xc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class hm{constructor(e,t){this.field=e,this.transform=t}}function CA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hs&&s instanceof hs||r instanceof fs&&s instanceof fs?ls(r.elements,s.elements,on):r instanceof ta&&s instanceof ta?on(r.Ae,s.Ae):r instanceof ea&&s instanceof ea}(n.transform,e.transform)}class xA{constructor(e,t){this.version=e,this.transformResults=t}}class Zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ca{}function fm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pm(n.key,Zt.none()):new Li(n.key,n.data,Zt.none());{const t=n.data,r=yt.empty();let s=new Ke(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rr(n.key,r,new At(s.toArray()),Zt.none())}}function VA(n,e,t){n instanceof Li?function(s,i,o){const l=s.value.clone(),c=Gf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof rr?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Gf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(dm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ui(n,e,t,r){return n instanceof Li?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=i.value.clone(),f=Qf(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof rr?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=Qf(i.fieldTransforms,c,o),f=o.data;return f.setAll(dm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function DA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=am(r.transform,s||null);i!=null&&(t===null&&(t=yt.empty()),t.set(r.field,i))}return t||null}function Wf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>CA(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Li extends Ca{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends Ca{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gf(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,PA(o,l,t[s]))}return r}function Qf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,kA(i,o,e))}return r}class pm extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NA extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=im();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=fm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(t,r)=>Wf(t,r))&&ls(this.baseMutations,e.baseMutations,(t,r)=>Wf(t,r))}}class ru{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return IA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ru(e,t,r,s)}}/**
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
 */class MA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ue,pe;function FA(n){switch(n){case M.OK:return te(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function gm(n){if(n===void 0)return bn("GRPC error has no .code"),M.UNKNOWN;switch(n){case Ue.OK:return M.OK;case Ue.CANCELLED:return M.CANCELLED;case Ue.UNKNOWN:return M.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return M.INTERNAL;case Ue.UNAVAILABLE:return M.UNAVAILABLE;case Ue.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ue.NOT_FOUND:return M.NOT_FOUND;case Ue.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ue.ABORTED:return M.ABORTED;case Ue.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ue.DATA_LOSS:return M.DATA_LOSS;default:return te(39323,{code:n})}}(pe=Ue||(Ue={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UA(){return new TextEncoder}/**
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
 */const $A=new Kn([4294967295,4294967295],0);function Jf(n){const e=UA().encode(n),t=new Cg;return t.update(e),new Uint8Array(t.digest())}function Yf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kn([t,r],0),new Kn([s,i],0)]}class su{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Qs(`Invalid padding: ${t}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Kn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Kn.fromNumber(r)));return s.compare($A)===1&&(s=new Kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jf(e),[r,s]=Yf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new su(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=Jf(e),[r,s]=Yf(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xa(se.min(),s,new Ve(ue),An(),he())}}class Fi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Fi(r,t,he(),he(),he())}}/**
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
 */class ko{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class mm{constructor(e,t){this.targetId=e,this.Ce=t}}class _m{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Xf{constructor(){this.ve=0,this.Fe=Zf(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),t=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new Fi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Zf()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class BA{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=ho(),this.He=ho(),this.Ze=new Ve(ue)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Jl(i))if(r===0){const o=new ee(i.path);this.et(t,o,st.newNoDocument(o,se.min()))}else Ee(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Yn(r).toUint8Array()}catch(c){if(c instanceof Bg)return kr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new su(o,s,i)}catch(c){return kr(c instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Jl(l.target)){const c=new ee(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,st.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=he();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,t,this.Ze,this.je,r);return this.je=An(),this.Je=ho(),this.He=ho(),this.Ze=new Ve(ue),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Xf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Ke(ue),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ke(ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ho(){return new Ve(ee.comparator)}function Zf(){return new Ve(ee.comparator)}const jA={asc:"ASCENDING",desc:"DESCENDING"},zA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qA={and:"AND",or:"OR"};class HA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xl(n,e){return n.useProto3Json||ba(e)?e:{value:e}}function na(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ym(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function KA(n,e){return na(n,e.toTimestamp())}function en(n){return Ee(!!n,49232),se.fromTimestamp(function(t){const r=Jn(t);return new Ce(r.seconds,r.nanos)}(n))}function iu(n,e){return Zl(n,e).canonicalString()}function Zl(n,e){const t=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Tm(n){const e=xe.fromString(n);return Ee(bm(e),10190,{key:e.toString()}),e}function ec(n,e){return iu(n.databaseId,e.path)}function yl(n,e){const t=Tm(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(wm(t))}function Em(n,e){return iu(n.databaseId,e)}function WA(n){const e=Tm(n);return e.length===4?xe.emptyPath():wm(e)}function tc(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wm(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ed(n,e,t){return{name:ec(n,e),fields:t.value.mapValue.fields}}function GA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ee(f===void 0||typeof f=="string",58123),et.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),et.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:gm(h.code);return new Q(f,h.message||"")}(o);t=new _m(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yl(n,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):se.min(),l=new yt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ko(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yl(n,r.document),i=r.readTime?en(r.readTime):se.min(),o=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ko([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yl(n,r.document),i=r.removedTargetIds||[];t=new ko([],i,s,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new LA(s,i),l=r.targetId;t=new mm(l,o)}}return t}function QA(n,e){let t;if(e instanceof Li)t={update:ed(n,e.key,e.value)};else if(e instanceof pm)t={delete:ec(n,e.key)};else if(e instanceof rr)t={update:ed(n,e.key,e.data),updateMask:sS(e.fieldMask)};else{if(!(e instanceof NA))return te(16599,{dt:e.type});t={verify:ec(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(n,e.precondition)),t}function JA(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?en(s.updateTime):en(i);return o.isEqual(se.min())&&(o=en(i)),new xA(o,s.transformResults||[])}(t,e))):[]}function YA(n,e){return{documents:[Em(n,e.path)]}}function XA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Em(n,s);const i=function(h){if(h.length!==0)return Im(an.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Kr(_.field),direction:tS(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Xl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function ZA(n){let e=WA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=vm(p);return _ instanceof an&&Yg(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(V){return new Zo(Wr(V.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,ba(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,A=p.values||[];return new Xo(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,A=p.values||[];return new Xo(A,_)}(t.endAt)),mA(e,s,o,i,l,"F",c,h)}function eS(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wr(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(t.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(t.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(n):n.fieldFilter!==void 0?function(t){return qe.create(Wr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return an.create(t.compositeFilter.filters.map(r=>vm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(t.compositeFilter.op))}(n):te(30097,{filter:n})}function tS(n){return jA[n]}function nS(n){return zA[n]}function rS(n){return qA[n]}function Kr(n){return{fieldPath:n.canonicalString()}}function Wr(n){return Ze.fromServerFormat(n.fieldPath)}function Im(n){return n instanceof qe?function(t){if(t.op==="=="){if(Bf(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NAN"}};if($f(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bf(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NAN"}};if($f(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(t.field),op:nS(t.op),value:t.value}}}(n):n instanceof an?function(t){const r=t.getFilters().map(s=>Im(s));return r.length===1?r[0]:{compositeFilter:{op:rS(t.op),filters:r}}}(n):te(54877,{filter:n})}function sS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Am(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class jn{constructor(e,t,r,s,i=se.min(),o=se.min(),l=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iS{constructor(e){this.yt=e}}function oS(n){const e=ZA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yl(e,e.limit,"L"):e}/**
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
 */class aS{constructor(){this.bn=new lS}addToCollectionParentIndex(e,t){return this.bn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Qn.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class lS{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ke(xe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(xe.comparator)).toArray()}}/**
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
 */const td={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sm=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(Sm,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class ds{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ds(0)}static ar(){return new ds(-1)}}/**
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
 */const nd="LruGarbageCollector",cS=1048576;function rd([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class uS{constructor(e){this.Pr=e,this.buffer=new Ke(rd),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();rd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(nd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ts(t)?q(nd,"Ignoring IndexedDB error during garbage collection: ",t):await ys(t)}await this.Ar(3e5)})}}class fS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Ia.ce);const r=new uS(t);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(td)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),td):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),qr()<=ce.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function dS(n,e){return new fS(n,e)}/**
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
 */class pS{constructor(){this.changes=new Dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class mS{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ui(r.mutation,s,At.empty(),Ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const s=yr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Gs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=An();const o=ci(),l=function(){return ci()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ui(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):o.set(h.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>l.set(h,new gS(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ci();let s=new Ve((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||At.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||he()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=im();f.forEach(_=>{if(!i.has(_)){const A=fm(t.get(_),r.get(_));A!==null&&p.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return _A(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(yr());let l=yi,c=i;return o.next(h=>x.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,he())).next(f=>({batchId:l,changes:sm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,c=>{const h=function(p,_){return new Sa(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=Gs();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ui(f.mutation,h,At.empty(),Ce.now()),ka(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class _S{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:oS(s.bundledQuery),readTime:en(s.readTime)}}(t)),x.resolve()}}/**
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
 */class yS{constructor(){this.overlays=new Ve(ee.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=yr(),i=t.length+1,o=new ee(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return x.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MA(t,r));let i=this.Lr.get(t);i===void 0&&(i=he(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class TS{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class ou{constructor(){this.kr=new Ke(Qe.qr),this.Kr=new Ke(Qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Qe(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new ee(new xe([])),r=new Qe(t,e),s=new Qe(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ee(new xe([])),r=new Qe(t,e),s=new Qe(t,e+1);let i=he();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Qe(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ee.comparator(e.key,t.key)||ue(e.Jr,t.Jr)}static Ur(e,t){return ue(e.Jr,t.Jr)||ee.comparator(e.key,t.key)}}/**
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
 */class ES{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Qe.qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OA(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Jc:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),s=new Qe(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(ue);return t.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new ee(i),0);let l=new Ke(ue);return this.Hr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Jr)),!0)},o),x.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ee(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return x.forEach(t.mutations,s=>{const i=new Qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Qe(t,0),s=this.Hr.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class wS{constructor(e){this.ti=e,this.docs=function(){return new Ve(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const o=t.path,l=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Wb(Kb(f),r)<=0||(s.has(f.key)||ka(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ni(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new vS(this)}getSize(e){return x.resolve(this.size)}}class vS extends pS{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class IS{constructor(e){this.persistence=e,this.ri=new Dr(t=>Zc(t),eu),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.ii=0,this.si=new ou,this.targetCount=0,this.oi=ds._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ds(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
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
 */class Rm{constructor(e,t){this._i={},this.overlays={},this.ai=new Ia(0),this.ui=!1,this.ui=!0,this.ci=new TS,this.referenceDelegate=e(this),this.li=new IS(this),this.indexManager=new aS,this.remoteDocumentCache=function(s){return new wS(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new iS(t),this.Pi=new _S(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new ES(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new bS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class bS extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.Ri=new ou,this.Ai=null}static Vi(e){return new au(e)}get di(){if(this.Ai)return this.Ai;throw te(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const s=ee.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ra{constructor(e,t){this.persistence=e,this.fi=new Dr(r=>Xb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dS(this,t)}static Vi(e,t){return new ra(e,t)}Ti(){}Ei(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return x.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ao(e.data.value)),t}wr(e,t,r){return x.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=he(),s=he();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lu(e,t.fromCache,r,s)}}/**
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
 */class AS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return hw()?8:Jb(lt())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AS;return this.ys(e,t,o).next(l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(qr()<=ce.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(qr()<=ce.DEBUG&&q("QueryEngine","Query:",Hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(qr()<=ce.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(t))):x.resolve())}gs(e,t){if(Hf(t))return x.resolve(null);let r=Xt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Yl(t,null,"F"),r=Xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ss(t,l);return this.bs(t,h,o,c.readTime)?this.gs(e,Yl(t,null,"F")):this.Ds(e,h,t,c)}))})))}ps(e,t,r,s){return Hf(t)||s.isEqual(se.min())?x.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?x.resolve(null):(qr()<=ce.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(t)),this.Ds(e,o,t,Hb(s,yi)).next(l=>l))})}Ss(e,t){let r=new Ke(nm(e));return t.forEach((s,i)=>{ka(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return qr()<=ce.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Hr(t)),this.fs.getDocumentsMatchingQuery(e,t,Qn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const cu="LocalStore",RS=3e8;class kS{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ve(ue),this.Fs=new Dr(i=>Zc(i),eu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function PS(n,e,t,r){return new kS(n,e,t,r)}async function km(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=he();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function CS(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,_=p.keys();let A=x.resolve();return _.forEach(V=>{A=A.next(()=>f.getEntry(c,V)).next(C=>{const $=h.docVersions.get(V);Ee($!==null,48541),C.version.compareTo($)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=he();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Pm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function xS(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,p)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(p,A),function(C,$,W){return C.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=RS?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(_,A,f)&&l.push(t.li.updateTargetData(i,A))});let c=An(),h=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(VS(i,o,e.documentUpdates).next(f=>{c=f.Bs,h=f.Ls})),!r.isEqual(se.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.vs=s,i))}function VS(n,e,t){let r=he(),s=he();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=An();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):q(cu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function DS(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Jc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NS(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):t.li.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function nc(n,e,t){const r=ie(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ts(o))throw o;q(cu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function sd(n,e,t){const r=ie(n);let s=se.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=ie(c),_=p.Fs.get(f);return _!==void 0?x.resolve(p.vs.get(_)):p.li.getTargetData(h,f)}(r,o,Xt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:he())).next(l=>(OS(r,EA(e),l),{documents:l,ks:i})))}function OS(n,e,t){let r=n.Ms.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class id{constructor(){this.activeTargetIds=SA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MS{constructor(){this.vo=new id,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new id,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LS{Mo(e){}shutdown(){}}/**
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
 */const od="ConnectivityMonitor";class ad{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(od,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(od,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function rc(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}/**
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
 */const Tl="RestConnection",FS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class US{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Jo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=rc(),l=this.Qo(e,t.toUriEncodedString());q(Tl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(l),f=Vi(h);return this.zo(e,l,c,r,f).then(p=>(q(Tl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw kr(Tl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=FS[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class $S{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const tt="WebChannelConnection",zs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ts extends US{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ts.c_){const e=Ng();zs(e,Dg.STAT_EVENT,t=>{t.stat===Hl.PROXY?q(tt,"STAT_EVENT: detected buffering proxy"):t.stat===Hl.NOPROXY&&q(tt,"STAT_EVENT: detected no buffering proxy")}),ts.c_=!0}}zo(e,t,r,s,i){const o=rc();return new Promise((l,c)=>{const h=new xg;h.setWithCredentials(!0),h.listenOnce(Vg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case bo.NO_ERROR:const p=h.getResponseJson();q(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case bo.TIMEOUT:q(tt,`RPC '${e}' ${o} timed out`),c(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const _=h.getStatus();if(q(tt,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const V=A==null?void 0:A.error;if(V&&V.status&&V.message){const C=function(W){const H=W.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(H)>=0?H:M.UNKNOWN}(V.status);c(new Q(C,V.message))}else c(new Q(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Q(M.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(tt,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=rc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");q(tt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.E_(f);let p=!1,_=!1;const A=new $S({Jo:V=>{_?q(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(q(tt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),q(tt,`RPC '${e}' stream ${s} sending:`,V),f.send(V))},Ho:()=>f.close()});return zs(f,Ws.EventType.OPEN,()=>{_||(q(tt,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),zs(f,Ws.EventType.CLOSE,()=>{_||(_=!0,q(tt,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.I_(f))}),zs(f,Ws.EventType.ERROR,V=>{_||(_=!0,kr(tt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),A.o_(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),zs(f,Ws.EventType.MESSAGE,V=>{var C;if(!_){const $=V.data[0];Ee(!!$,16349);const W=$,H=(W==null?void 0:W.error)||((C=W[0])==null?void 0:C.error);if(H){q(tt,`RPC '${e}' stream ${s} received error:`,H);const Y=H.status;let K=function(T){const m=Ue[T];if(m!==void 0)return gm(m)}(Y),oe=H.message;Y==="NOT_FOUND"&&oe.includes("database")&&oe.includes("does not exist")&&oe.includes(this.databaseId.database)&&kr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),K===void 0&&(K=M.INTERNAL,oe="Unknown error status: "+Y+" with message "+H.message),_=!0,A.o_(new Q(K,oe)),f.close()}else q(tt,`RPC '${e}' stream ${s} received:`,$),A.__($)}}),ts.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Og()}}/**
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
 */function BS(n){return new ts(n)}function El(){return typeof document<"u"?document:null}/**
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
 */function Va(n){return new HA(n,!0)}/**
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
 */ts.c_=!1;class Cm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ld="PersistentStream";class xm{constructor(e,t,r,s,i,o,l,c){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Cm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(bn(t.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(ld,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(q(ld,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jS extends xm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=GA(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?en(o.readTime):se.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=tc(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Jl(c)?{documents:YA(i,c)}:{query:XA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ym(i,o.resumeToken);const h=Xl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=na(i,o.snapshotVersion.toTimestamp());const h=Xl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=eS(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=tc(this.serializer),t.removeTarget=e,this.q_(t)}}class zS extends xm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=JA(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=tc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>QA(this.serializer,r))};this.q_(t)}}/**
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
 */class qS{}class HS extends qS{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Zl(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Zl(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function KS(n,e,t,r){return new HS(n,e,t,r)}class WS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pr="RemoteStore";class GS{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(q(Pr,"Restarting streams for network reachability change."),await async function(c){const h=ie(c);h.Ia.add(4),await Ui(h),h.Va.set("Unknown"),h.Ia.delete(4),await Da(h)}(this))})}),this.Va=new WS(r,s)}}async function Da(n){if(Nr(n))for(const e of n.Ra)await e(!0)}async function Ui(n){for(const e of n.Ra)await e(!1)}function Vm(n,e){const t=ie(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),du(t)?fu(t):Es(t).O_()&&hu(t,e))}function uu(n,e){const t=ie(n),r=Es(t);t.Ea.delete(e),r.O_()&&Dm(t,e),t.Ea.size===0&&(r.O_()?r.L_():Nr(t)&&t.Va.set("Unknown"))}function hu(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Es(n).Z_(e)}function Dm(n,e){n.da.$e(e),Es(n).X_(e)}function fu(n){n.da=new BA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Es(n).start(),n.Va.ua()}function du(n){return Nr(n)&&!Es(n).x_()&&n.Ea.size>0}function Nr(n){return ie(n).Ia.size===0}function Nm(n){n.da=void 0}async function QS(n){n.Va.set("Online")}async function JS(n){n.Ea.forEach((e,t)=>{hu(n,e)})}async function YS(n,e){Nm(n),du(n)?(n.Va.ha(e),fu(n)):n.Va.set("Unknown")}async function XS(n,e,t){if(n.Va.set("Online"),e instanceof _m&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){q(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sa(n,r)}else if(e instanceof ko?n.da.Xe(e):e instanceof mm?n.da.st(e):n.da.tt(e),!t.isEqual(se.min()))try{const r=await Pm(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Dm(i,c);const p=new jn(f.target,c,h,f.sequenceNumber);hu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q(Pr,"Failed to raise snapshot:",r),await sa(n,r)}}async function sa(n,e,t){if(!Ts(e))throw e;n.Ia.add(1),await Ui(n),n.Va.set("Offline"),t||(t=()=>Pm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Pr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Da(n)})}function Om(n,e){return e().catch(t=>sa(n,t,e))}async function Na(n){const e=ie(n),t=Zn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jc;for(;ZS(e);)try{const s=await DS(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,e0(e,s)}catch(s){await sa(e,s)}Mm(e)&&Lm(e)}function ZS(n){return Nr(n)&&n.Ta.length<10}function e0(n,e){n.Ta.push(e);const t=Zn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Mm(n){return Nr(n)&&!Zn(n).x_()&&n.Ta.length>0}function Lm(n){Zn(n).start()}async function t0(n){Zn(n).ra()}async function n0(n){const e=Zn(n);for(const t of n.Ta)e.ea(t.mutations)}async function r0(n,e,t){const r=n.Ta.shift(),s=ru.from(r,e,t);await Om(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Na(n)}async function s0(n,e){e&&Zn(n).Y_&&await async function(r,s){if(function(o){return FA(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Zn(r).B_(),await Om(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Na(r)}}(n,e),Mm(n)&&Lm(n)}async function cd(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),q(Pr,"RemoteStore received new credentials");const r=Nr(t);t.Ia.add(3),await Ui(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Da(t)}async function i0(n,e){const t=ie(n);e?(t.Ia.delete(2),await Da(t)):e||(t.Ia.add(2),await Ui(t),t.Va.set("Unknown"))}function Es(n){return n.ma||(n.ma=function(t,r,s){const i=ie(t);return i.sa(),new jS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:QS.bind(null,n),Yo:JS.bind(null,n),t_:YS.bind(null,n),H_:XS.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),du(n)?fu(n):n.Va.set("Unknown")):(await n.ma.stop(),Nm(n))})),n.ma}function Zn(n){return n.fa||(n.fa=function(t,r,s){const i=ie(t);return i.sa(),new zS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:t0.bind(null,n),t_:s0.bind(null,n),ta:n0.bind(null,n),na:r0.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Na(n)):(await n.fa.stop(),n.Ta.length>0&&(q(Pr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class pu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new pu(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(n,e){if(bn("AsyncQueue",`${e}: ${n}`),Ts(n))return new Q(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ns{static emptySet(e){return new ns(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ud{constructor(){this.ga=new Ve(ee.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):te(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ps{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,t,ns.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class o0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class a0{constructor(){this.queries=hd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=hd(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function hd(){return new Dr(n=>tm(n),Ra)}async function l0(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new o0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=gu(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&mu(t)}async function c0(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function u0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&mu(t)}function h0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function mu(n){n.Ca.forEach(e=>{e.next()})}var sc,fd;(fd=sc||(sc={})).Ma="default",fd.Cache="cache";class f0{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sc.Cache}}/**
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
 */class Fm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class d0{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=nm(e),this.tu=new ns(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new ud,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),A=ka(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let $=!1;_&&A?_.data.isEqual(A.data)?V!==C&&(r.track({type:3,doc:A}),$=!0):this.su(_,A)||(r.track({type:2,doc:A}),$=!0,(c&&this.eu(A,c)>0||h&&this.eu(A,h)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),$=!0):_&&!A&&(r.track({type:1,doc:_}),$=!0,(c||h)&&(l=!0)),$&&(A?(o=o.add(A),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,V){const C=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:$})}};return C(A)-C(V)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new ps(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ud,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Um(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Fm(r))}),t}cu(e){this.Za=e.ks,this.Ya=he();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _u="SyncEngine";class p0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class g0{constructor(e){this.key=e,this.hu=!1}}class m0{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Dr(l=>tm(l),Ra),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ve(ee.comparator),this.Au=new Map,this.Vu=new ou,this.du={},this.mu=new Map,this.fu=ds.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _0(n,e,t=!0){const r=Hm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $m(r,e,t,!0),s}async function y0(n,e){const t=Hm(n);await $m(t,e,!0,!1)}async function $m(n,e,t,r){const s=await NS(n.localStore,Xt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await T0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vm(n.remoteStore,s),l}async function T0(n,e,t,r,s){n.pu=(p,_,A)=>async function(C,$,W,H){let Y=$.view.ru(W);Y.bs&&(Y=await sd(C.localStore,$.query,!1).then(({documents:T})=>$.view.ru(T,Y)));const K=H&&H.targetChanges.get($.targetId),oe=H&&H.targetMismatches.get($.targetId)!=null,G=$.view.applyChanges(Y,C.isPrimaryClient,K,oe);return pd(C,$.targetId,G.au),G.snapshot}(n,p,_,A);const i=await sd(n.localStore,e,!0),o=new d0(e,i.ks),l=o.ru(i.documents),c=Fi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);pd(n,t,h.au);const f=new p0(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot}async function E0(n,e,t){const r=ie(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&uu(r.remoteStore,s.targetId),ic(r,s.targetId)}).catch(ys)):(ic(r,s.targetId),await nc(r.localStore,s.targetId,!0))}async function w0(n,e){const t=ie(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),uu(t.remoteStore,r.targetId))}async function v0(n,e,t){const r=P0(n);try{const s=await function(o,l){const c=ie(o),h=Ce.now(),f=l.reduce((A,V)=>A.add(V.key),he());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let V=An(),C=he();return c.xs.getEntries(A,f).next($=>{V=$,V.forEach((W,H)=>{H.isValidDocument()||(C=C.add(W))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,V)).next($=>{p=$;const W=[];for(const H of l){const Y=DA(H,p.get(H.key).overlayedDocument);Y!=null&&W.push(new rr(H.key,Y,Gg(Y.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,W,l)}).next($=>{_=$;const W=$.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(A,$.batchId,W)})}).then(()=>({batchId:_.batchId,changes:sm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.du[o.currentUser.toKey()];h||(h=new Ve(ue)),h=h.insert(l,c),o.du[o.currentUser.toKey()]=h}(r,s.batchId,t),await $i(r,s.changes),await Na(r.remoteStore)}catch(s){const i=gu(s,"Failed to persist write");t.reject(i)}}async function Bm(n,e){const t=ie(n);try{const r=await xS(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ee(o.hu,14607):s.removedDocuments.size>0&&(Ee(o.hu,42227),o.hu=!1))}),await $i(t,r,e)}catch(r){await ys(r)}}function dd(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ie(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const _ of p.Sa)_.va(l)&&(h=!0)}),h&&mu(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ve(ee.comparator);o=o.insert(i,st.newNoDocument(i,se.min()));const l=he().add(i),c=new xa(se.min(),new Map,new Ve(ue),o,l);await Bm(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),yu(r)}else await nc(r.localStore,e,!1).then(()=>ic(r,e,t)).catch(ys)}async function b0(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await CS(t.localStore,e);zm(t,r,null),jm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $i(t,s)}catch(s){await ys(s)}}async function A0(n,e,t){const r=ie(n);try{const s=await function(o,l){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ee(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);zm(r,e,t),jm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $i(r,s)}catch(s){await ys(s)}}function jm(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function zm(n,e,t){const r=ie(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function ic(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||qm(n,r)})}function qm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(uu(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),yu(n))}function pd(n,e,t){for(const r of t)r instanceof Fm?(n.Vu.addReference(r.key,e),S0(n,r)):r instanceof Um?(q(_u,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||qm(n,r.key)):te(19791,{wu:r})}function S0(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(q(_u,"New document in limbo: "+t),n.Iu.add(r),yu(n))}function yu(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ee(xe.fromString(e)),r=n.fu.next();n.Au.set(r,new g0(t)),n.Ru=n.Ru.insert(t,r),Vm(n.remoteStore,new jn(Xt(tu(t.path)),r,"TargetPurposeLimboResolution",Ia.ce))}}async function $i(n,e,t){const r=ie(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=lu.Is(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,h){const f=ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,_=>x.forEach(_.Ts,A=>f.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>x.forEach(_.Es,A=>f.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!Ts(p))throw p;q(cu,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=f.vs.get(_),V=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(V);f.vs=f.vs.insert(_,C)}}}(r.localStore,i))}async function R0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){q(_u,"User change. New user:",e.toKey());const r=await km(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new Q(M.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $i(t,r.Ns)}}function k0(n,e){const t=ie(n),r=t.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Hm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I0.bind(null,e),e.Pu.H_=u0.bind(null,e.eventManager),e.Pu.yu=h0.bind(null,e.eventManager),e}function P0(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A0.bind(null,e),e}class ia{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Va(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return PS(this.persistence,new SS,e.initialUser,this.serializer)}Cu(e){return new Rm(au.Vi,this.serializer)}Du(e){return new MS}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ia.provider={build:()=>new ia};class C0 extends ia{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ee(this.persistence.referenceDelegate instanceof ra,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hS(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new Rm(r=>ra.Vi(r,t),this.serializer)}}class oc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R0.bind(null,this.syncEngine),await i0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new a0}()}createDatastore(e){const t=Va(e.databaseInfo.databaseId),r=BS(e.databaseInfo);return KS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new GS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>dd(this.syncEngine,t,0),function(){return ad.v()?new ad:new LS}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,f){const p=new m0(s,i,o,l,c,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);q(Pr,"RemoteStore shutting down."),i.Ia.add(5),await Ui(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}oc.provider={build:()=>new oc};/**
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
 */class x0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const er="FirestoreClient";class V0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wl(n,e){n.asyncQueue.verifyOperationInProgress(),q(er,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await km(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await D0(n);q(er,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>cd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>cd(e.remoteStore,s)),n._onlineComponents=e}async function D0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(er,"Using user provided OfflineComponentProvider");try{await wl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;kr("Error using user provided cache. Falling back to memory cache: "+t),await wl(n,new ia)}}else q(er,"Using default OfflineComponentProvider"),await wl(n,new C0(void 0));return n._offlineComponents}async function Km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(er,"Using user provided OnlineComponentProvider"),await gd(n,n._uninitializedComponentsProvider._online)):(q(er,"Using default OnlineComponentProvider"),await gd(n,new oc))),n._onlineComponents}function N0(n){return Km(n).then(e=>e.syncEngine)}async function md(n){const e=await Km(n),t=e.eventManager;return t.onListen=_0.bind(null,e.syncEngine),t.onUnlisten=E0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=y0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=w0.bind(null,e.syncEngine),t}function O0(n,e,t,r){const s=new x0(r),i=new f0(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>l0(await md(n),i)),()=>{s.Nu(),n.asyncQueue.enqueueAndForget(async()=>c0(await md(n),i))}}function M0(n,e){const t=new vr;return n.asyncQueue.enqueueAndForget(async()=>v0(await N0(n),e,t)),t.promise}/**
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
 */function Wm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const L0="ComponentProvider",_d=new Map;function F0(n,e,t,r,s){return new tA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Wm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Gm="firestore.googleapis.com",yd=!0;class Td{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gm,this.ssl=yd}else this.host=e.host,this.ssl=e.ssl??yd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cS)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Db;switch(r.type){case"firstParty":return new Lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_d.get(t);r&&(q(L0,"Removing Datastore"),_d.delete(t),r.terminate())}(this),Promise.resolve()}}function U0(n,e,t,r={}){var h;n=Wn(n,Tu);const s=Vi(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Wp(`https://${l}`),i.host!==Gm&&i.host!==l&&kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!wn(c,o)&&(n._setSettings(c),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=nt.MOCK_USER;else{f=sw(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(_)}n._authCredentials=new Nb(new Lg(f,p))}}/**
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
 */class Oa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oa(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Mi(t,He._jsonSchema))return new He(e,r||null,new ee(xe.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:$e("string",He._jsonSchemaVersion),referencePath:$e("string")};class vi extends Oa{constructor(e,t,r){super(e,t,tu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new ee(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function dr(n,e,...t){if(n=ct(n),arguments.length===1&&(e=Gc.newId()),zb("doc","path",e),n instanceof Tu){const r=xe.fromString(e,...t);return Vf(r),new He(n,null,new ee(r))}{if(!(n instanceof He||n instanceof vi))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Vf(r),new He(n.firestore,n instanceof vi?n.converter:null,new ee(r))}}/**
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
 */const Ed="AsyncQueue";class wd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Cm(this,"async_queue_retry"),this._c=()=>{const r=El();r&&q(Ed,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=El();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=El();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ts(e))throw e;q(Ed,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",vd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=pu.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:vd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ii extends Tu{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new wd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wd(e),this._firestoreClient=void 0,await e}}}function $0(n,e){const t=typeof n=="object"?n:Yp(),r=typeof n=="string"?n:Jo,s=Mc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nw("firestore");i&&U0(s,...i)}return s}function Qm(n){if(n._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||B0(n),n._firestoreClient}function B0(n){var r,s,i,o;const e=n._freezeSettings(),t=F0(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new V0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(et.fromBase64String(e))}catch(t){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mi(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:$e("string",kt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class Eu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bi{constructor(e){this._methodName=e}}/**
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
 */class tn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tn._jsonSchemaVersion}}static fromJSON(e){if(Mi(e,tn._jsonSchema))return new tn(e.latitude,e.longitude)}}tn._jsonSchemaVersion="firestore/geoPoint/1.0",tn._jsonSchema={type:$e("string",tn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class Lt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mi(e,Lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Lt(e.vectorValues);throw new Q(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lt._jsonSchemaVersion="firestore/vectorValue/1.0",Lt._jsonSchema={type:$e("string",Lt._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const j0=/^__.*__$/;class z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Li(e,this.data,t,this.fieldTransforms)}}class Jm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:n})}}class Ma{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ma({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return oa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Ym(this.dataSource)&&j0.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class q0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Va(e)}I(e,t,r,s=!1){return new Ma({dataSource:e,methodName:t,targetDoc:r,path:Ze.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xm(n){const e=n._freezeSettings(),t=Va(n._databaseId);return new q0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function H0(n,e,t,r,s,i={}){const o=n.I(i.merge||i.mergeFields?2:0,e,t,s);Iu("Data must be an object, but it was:",o,r);const l=e_(r,o);let c,h;if(i.merge)c=new At(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=bi(e,p,t);if(!o.contains(_))throw new Q(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);r_(f,_)||f.push(_)}c=new At(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new z0(new yt(l),c,h)}class La extends Bi{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function Zm(n,e,t){return new Ma({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wu extends Bi{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Zm(this,e,!0),r=this.Sc.map(i=>ws(i,t)),s=new hs(r);return new hm(e.path,s)}isEqual(e){return e instanceof wu&&wn(this.Sc,e.Sc)}}class vu extends Bi{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=Zm(this,e,!0),r=this.Sc.map(i=>ws(i,t)),s=new fs(r);return new hm(e.path,s)}isEqual(e){return e instanceof vu&&wn(this.Sc,e.Sc)}}function K0(n,e,t,r){const s=n.I(1,e,t);Iu("Data must be an object, but it was:",s,r);const i=[],o=yt.empty();nr(r,(c,h)=>{const f=n_(e,c,t);h=ct(h);const p=s.fc(f);if(h instanceof La)i.push(f);else{const _=ws(h,p);_!=null&&(i.push(f),o.set(f,_))}});const l=new At(i);return new Jm(o,l,s.fieldTransforms)}function W0(n,e,t,r,s,i){const o=n.I(1,e,t),l=[bi(e,r,t)],c=[s];if(i.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(bi(e,i[_])),c.push(i[_+1]);const h=[],f=yt.empty();for(let _=l.length-1;_>=0;--_)if(!r_(h,l[_])){const A=l[_];let V=c[_];V=ct(V);const C=o.fc(A);if(V instanceof La)h.push(A);else{const $=ws(V,C);$!=null&&(h.push(A),f.set(A,$))}}const p=new At(h);return new Jm(f,p,o.fieldTransforms)}function ws(n,e){if(t_(n=ct(n)))return Iu("Unsupported field value:",e,n),e_(n,e);if(n instanceof Bi)return function(r,s){if(!Ym(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ws(l,s.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:na(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:na(s.serializer,i)}}if(r instanceof tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:ym(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:iu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lt)return function(o,l){const c=o instanceof Lt?o.toArray():o;return{mapValue:{fields:{[Kg]:{stringValue:Wg},[Yo]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return nu(l.serializer,f)})}}}}}}(r,s);if(Am(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Qc(r)}`)}(n,e)}function e_(n,e){const t={};return $g(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(n,(r,s)=>{const i=ws(s,e.dc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function t_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof tn||n instanceof kt||n instanceof He||n instanceof Bi||n instanceof Lt||Am(n))}function Iu(n,e,t){if(!t_(t)||!Fg(t)){const r=Qc(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function bi(n,e,t){if((e=ct(e))instanceof Eu)return e._internalPath;if(typeof e=="string")return n_(n,e);throw oa("Field path arguments must be of type string or ",n,!1,void 0,t)}const G0=new RegExp("[~\\*/\\[\\]]");function n_(n,e,t){if(e.search(G0)>=0)throw oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eu(...e.split("."))._internalPath}catch{throw oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oa(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Q(M.INVALID_ARGUMENT,l+n+c)}function r_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Q0{convertValue(e,t="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return nr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Yo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Fe(o.doubleValue));return new Lt(t)}convertGeoPoint(e){return new tn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Ee(bm(r),9688,{name:e});const s=new Ei(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(t)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class s_ extends Q0{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function J0(...n){return new wu("arrayUnion",n)}function Y0(...n){return new vu("arrayRemove",n)}const Id="@firebase/firestore",bd="4.14.0";/**
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
 */function Ad(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class i_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(bi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class X0 extends i_{data(){return super.data()}}/**
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
 */function Z0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function eR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends i_{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(bi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ir._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ir._jsonSchema={type:$e("string",Ir._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Po extends Ir{data(e={}){return super.data(e)}}class rs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Po(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:tR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
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
 */rs._jsonSchemaVersion="firestore/querySnapshot/1.0",rs._jsonSchema={type:$e("string",rs._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};function nR(n,e,t){n=Wn(n,He);const r=Wn(n.firestore,Ii),s=eR(n.converter,e),i=Xm(r);return o_(r,[H0(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Zt.none())])}function qs(n,e,t,...r){n=Wn(n,He);const s=Wn(n.firestore,Ii),i=Xm(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof Eu?W0(i,"updateDoc",n._key,e,t,r):K0(i,"updateDoc",n._key,e),o_(s,[o.toMutation(n._key,Zt.exists(!0))])}function rR(n,...e){var h,f,p;n=ct(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ad(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ad(e[r])){const _=e[r];e[r]=(h=_.next)==null?void 0:h.bind(_),e[r+1]=(f=_.error)==null?void 0:f.bind(_),e[r+2]=(p=_.complete)==null?void 0:p.bind(_)}let i,o,l;if(n instanceof He)o=Wn(n.firestore,Ii),l=tu(n._key.path),i={next:_=>{e[r]&&e[r](sR(o,n,_))},error:e[r+1],complete:e[r+2]};else{const _=Wn(n,Oa);o=Wn(_.firestore,Ii),l=_._query;const A=new s_(o);i={next:V=>{e[r]&&e[r](new rs(o,A,_,V))},error:e[r+1],complete:e[r+2]},Z0(n._query)}const c=Qm(o);return O0(c,l,s,i)}function o_(n,e){const t=Qm(n);return M0(t,e)}function sR(n,e,t){const r=t.docs.get(e._key),s=new s_(n);return new Ir(n,s,e._key,r,new Js(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Vb(gs),os(new Ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ii(new Ob(r.getProvider("auth-internal")),new Fb(o,r.getProvider("app-check-internal")),nA(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Hn(Id,bd,e),Hn(Id,bd,"esm2020")})();const iR={apiKey:"AIzaSyCx8K8iblME6WYh0r9GiqoUyL-D7L5pmPw",authDomain:"codetrace-cca94.firebaseapp.com",projectId:"codetrace-cca94",storageBucket:"codetrace-cca94.firebasestorage.app",messagingSenderId:"437982024269",appId:"1:437982024269:web:f54c8223a633b2ce194204"},a_=Jp(iR),vl=Cb(a_),pr=$0(a_),oR=new gn,aR=n=>{const t=new DOMParser().parseFromString(n,"text/html");let r=t.title||"제목 없음";r=r.replace("코딩테스트 연습 - ",""),r=r.replace(" | 프로그래머스 스쿨",""),r=r.replace(" | 프로그래머스",""),r=r.trim();let s="";const i=t.querySelector(".guide-section");if(i){const l=c=>{if(c.nodeType===3)return c.textContent.trim()==="문제 설명"?"":c.textContent.replace(/^\s+|\s+$/g,"");const h=c.nodeName,f=c.textContent.trim();if(f==="문제 설명")return"";switch(h){case"H5":return`
### ${f}
`;case"P":return`
${f}
`;case"UL":case"OL":let p=`
`;return c.querySelectorAll("li").forEach(_=>{p+=`- ${_.textContent.trim()}
`}),p+`
`;case"TABLE":return lR(c);case"DIV":case"SECTION":return Array.from(c.childNodes).map(l).join("");case"BR":return`
`;case"A":return`[${f}](${c.href})`;default:return c.textContent}};s=Array.from(i.childNodes).map(l).join("").trim()}return{title:r,content:s+`

---

### 💡 나의 풀이
\`\`\`cpp
// 코드를 작성하세요
\`\`\`

### 📝 복기 및 배운 점
- 

### 🔗 참고 자료
- 
`}},lR=n=>{let e=`
`;const t=Array.from(n.querySelectorAll("tr"));return t.length===0?"":(t.forEach((r,s)=>{const i=Array.from(r.querySelectorAll("th, td"));e+=`| ${i.map(o=>o.textContent.trim()).join(" | ")} |
`,s===0&&(e+=`| ${i.map(()=>"---").join(" | ")} |
`)}),e+`
`)},cR=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},uR={class:"sidebar"},hR={class:"input-container"},fR={class:"problem-list"},dR={key:0,class:"auth-message"},pR={key:1,class:"auth-message"},gR={key:2,class:"auth-message"},mR=["onClick"],_R={class:"problem-item-inner"},yR={class:"problem-info"},TR={class:"problem-id"},ER={class:"problem-title"},wR={key:0,class:"mini-tags"},vR={class:"item-actions"},IR=["onClick"],bR=["onClick"],AR={class:"sidebar-footer"},SR={key:0,class:"user-profile"},RR=["src"],kR={class:"user-info"},PR={class:"user-name"},CR={class:"main-content"},xR={class:"editor-header"},VR={class:"header-left"},DR={class:"title-area"},NR={class:"problem-id-large"},OR={class:"problem-title-large"},MR={class:"tag-container"},LR={class:"tag-list"},FR=["onClick"],UR={class:"mode-toggle-mini"},$R=["title"],BR=["title"],jR={class:"editor-body"},zR=["innerHTML"],qR={key:1,class:"empty-state"},HR={__name:"App",setup(n){const e=un([]),t=un(null),r=un(""),s=un(""),i=un(!0),o=un(null),l=un(!0),c=un(!1),h=un(""),f=yo(()=>{const G=s.value.toLowerCase().trim();return G?e.value.filter(T=>T.title.toLowerCase().includes(G)||T.id.includes(G)||T.tags&&T.tags.some(m=>m.toLowerCase().includes(G))):e.value}),p=yo(()=>e.value.find(G=>G.id===t.value)),_=yo(()=>p.value?we(p.value.memo||""):""),A=()=>{c.value=!c.value,document.documentElement.classList.toggle("dark-mode",c.value),localStorage.setItem("theme",c.value?"dark":"light")},V=async()=>{try{await UI(vl,oR)}catch(G){console.error("로그인 실패:",G)}},C=()=>TI(vl),$=async()=>{if(!(!r.value.trim()||!o.value))try{const G=r.value.match(/learn\/courses\/30\/lessons\/(\d+)/);if(!G)return alert("프로그래머스 문제 URL을 입력해주세요.");const T=G[1];if(e.value.some(E=>E.id===T))return alert("이미 추가된 문제입니다.");l.value=!0;const m=[r.value,`https://api.allorigins.win/get?url=${encodeURIComponent(r.value)}`,`https://corsproxy.io/?${encodeURIComponent(r.value)}`];let y=null;for(const E of m)try{const De=new AbortController,St=setTimeout(()=>De.abort(),1e4),Le=await fetch(E,{signal:De.signal});if(clearTimeout(St),Le.ok){if(E===r.value)y=await Le.text();else{const Ie=await Le.json();y=Ie.contents||Ie}if(y&&y.includes("school.programmers.co.kr"))break}}catch{console.warn("프록시 시도 실패")}if(!y)throw new Error("데이터 로드 실패");const{title:I,content:v}=aR(y),S={id:T,title:I,url:r.value,memo:v,tags:[],createdAt:Date.now()};await qs(dr(pr,"users",o.value.uid),{problems:J0(S)}),r.value="",t.value=T}catch{alert("문제를 가져오지 못했습니다.")}finally{l.value=!1}},W=async()=>{const G=h.value.trim();if(!G||!p.value)return;if(p.value.tags||(p.value.tags=[]),p.value.tags.includes(G)){h.value="";return}const T=e.value.map(m=>m.id===t.value?{...m,tags:[...m.tags||[],G]}:m);await qs(dr(pr,"users",o.value.uid),{problems:T}),h.value=""},H=async G=>{const T=e.value.map(m=>m.id===t.value?{...m,tags:(m.tags||[]).filter(y=>y!==G)}:m);await qs(dr(pr,"users",o.value.uid),{problems:T})},Y=async G=>{if(!confirm("정말 삭제하시겠습니까?"))return;const T=e.value.find(m=>m.id===G);T&&(await qs(dr(pr,"users",o.value.uid),{problems:Y0(T)}),t.value===G&&(t.value=null))};let K=null;const oe=G=>{l.value=!0,K=rR(dr(pr,"users",G),T=>{T.exists()?e.value=(T.data().problems||[]).sort((m,y)=>y.createdAt-m.createdAt):nR(dr(pr,"users",G),{problems:[]}),l.value=!1})};return ap(()=>{const G=localStorage.getItem("theme");(G==="dark"||!G&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(c.value=!0,document.documentElement.classList.add("dark-mode")),yI(vl,T=>{o.value=T,T?oe(T.uid):(e.value=[],l.value=!1,K&&K())})}),Ic(()=>{K&&K()}),mo(()=>{var G;return(G=p.value)==null?void 0:G.memo},async(G,T)=>{if(o.value&&t.value&&G!==void 0&&T!==void 0){const m=dr(pr,"users",o.value.uid),y=e.value.map(I=>I.id===t.value?{...I,memo:G}:I);await qs(m,{problems:y})}}),(G,T)=>(Me(),Ye(_t,null,[de("div",uR,[de("div",hR,[no(de("input",{"onUpdate:modelValue":T[0]||(T[0]=m=>r.value=m),onKeyup:Gh($,["enter"]),placeholder:"프로그래머스 URL 입력",class:"url-input"},null,544),[[ro,r.value]]),no(de("input",{"onUpdate:modelValue":T[1]||(T[1]=m=>s.value=m),placeholder:"제목, ID, 태그로 검색",class:"search-input"},null,512),[[ro,s.value]])]),de("div",fR,[o.value?l.value?(Me(),Ye("div",pR,"불러오는 중...")):f.value.length===0?(Me(),Ye("div",gR,"검색 결과가 없습니다.")):(Me(!0),Ye(_t,{key:3},rl(f.value,m=>(Me(),Ye("div",{key:m.id,class:ha(["problem-item",{active:t.value===m.id}]),onClick:y=>t.value=m.id},[de("div",_R,[de("div",yR,[de("span",TR,Mn(m.id),1),de("span",ER,Mn(m.title),1),m.tags&&m.tags.length>0?(Me(),Ye("div",wR,[(Me(!0),Ye(_t,null,rl(m.tags,y=>(Me(),Ye("span",{key:y,class:"mini-tag"},"#"+Mn(y),1))),128))])):yT("",!0)]),de("div",vR,[de("button",{onClick:Wh(y=>G.window.open(m.url,"_blank"),["stop"]),class:"action-btn"},[it(Ln(BE),{size:14})],8,IR),de("button",{onClick:Wh(y=>Y(m.id),["stop"]),class:"delete-btn"},[it(Ln(WE),{size:14})],8,bR)])])],10,mR))),128)):(Me(),Ye("div",dR,"로그인하여 데이터를 클라우드에 저장하세요."))]),de("div",AR,[o.value?(Me(),Ye("div",SR,[de("img",{src:o.value.photoURL,class:"user-avatar",alt:"Avatar"},null,8,RR),de("div",kR,[de("span",PR,Mn(o.value.displayName),1),de("button",{onClick:C,class:"auth-btn-small"},"로그아웃")])])):(Me(),Ye("button",{key:1,onClick:V,class:"login-btn"},[it(Ln(zE),{size:16,style:{"margin-right":"8px"}}),T[5]||(T[5]=Vl(" GitHub 로그인 ",-1))]))])]),de("div",CR,[p.value?(Me(),Ye(_t,{key:0},[de("div",xR,[de("div",VR,[de("div",DR,[de("span",NR,Mn(p.value.id),1),de("h2",OR,Mn(p.value.title),1)]),de("div",MR,[de("div",LR,[(Me(!0),Ye(_t,null,rl(p.value.tags,m=>(Me(),Ye("span",{key:m,class:"tag-badge"},[Vl(" #"+Mn(m)+" ",1),de("button",{onClick:y=>H(m),class:"tag-remove"},"×",8,FR)]))),128))]),no(de("input",{"onUpdate:modelValue":T[2]||(T[2]=m=>h.value=m),onKeyup:Gh(W,["enter"]),placeholder:"+ 태그 추가 (알고리즘 등)",class:"tag-input"},null,544),[[ro,h.value]])])]),de("div",UR,[de("button",{onClick:A,title:c.value?"라이트 모드":"다크 모드",class:"toggle-icon-btn"},[c.value?(Me(),Ks(Ln(KE),{key:0,size:20})):(Me(),Ks(Ln(qE),{key:1,size:20}))],8,$R),de("button",{onClick:T[3]||(T[3]=m=>i.value=!i.value),title:i.value?"보기 모드":"편집 모드",class:"toggle-icon-btn"},[i.value?(Me(),Ks(Ln(jE),{key:0,size:20})):(Me(),Ks(Ln(HE),{key:1,size:20}))],8,BR)])]),de("div",jR,[i.value?no((Me(),Ye("textarea",{key:0,"onUpdate:modelValue":T[4]||(T[4]=m=>p.value.memo=m),class:"bear-editor",placeholder:"여기에 생각을 적어보세요..."},null,512)),[[ro,p.value.memo]]):(Me(),Ye("div",{key:1,class:"markdown-view",innerHTML:_.value},null,8,zR))])],64)):(Me(),Ye("div",qR,[...T[6]||(T[6]=[de("div",{class:"empty-icon"},"✎",-1),de("p",null,"기록할 문제를 선택하거나 URL을 입력하세요.",-1)])]))])],64))}},KR=cR(HR,[["__scopeId","data-v-073e3cde"]]);nE(KR).mount("#app");
