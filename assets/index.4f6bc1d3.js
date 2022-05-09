const au=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};au();function q(){}const la=n=>n;function lu(n,e){for(const t in e)n[t]=e[t];return n}function ca(n){return n()}function xr(){return Object.create(null)}function ut(n){n.forEach(ca)}function ua(n){return typeof n=="function"}function Dt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let qn;function Zt(n,e){return qn||(qn=document.createElement("a")),qn.href=e,n===qn.href}function cu(n){return Object.keys(n).length===0}function ln(n,...e){if(n==null)return q;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Yn(n,e,t){n.$$.on_destroy.push(ln(e,t))}const ha=typeof window!="undefined";let uu=ha?()=>window.performance.now():()=>Date.now(),Ds=ha?n=>requestAnimationFrame(n):q;const Ct=new Set;function da(n){Ct.forEach(e=>{e.c(n)||(Ct.delete(e),e.f())}),Ct.size!==0&&Ds(da)}function hu(n){let e;return Ct.size===0&&Ds(da),{promise:new Promise(t=>{Ct.add(e={c:n,f:t})}),abort(){Ct.delete(e)}}}function R(n,e){n.appendChild(e)}function fa(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function du(n){const e=P("style");return fu(fa(n),e),e.sheet}function fu(n,e){R(n.head||n,e)}function ne(n,e,t){n.insertBefore(e,t||null)}function ee(n){n.parentNode.removeChild(n)}function us(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function P(n){return document.createElement(n)}function Be(n){return document.createTextNode(n)}function oe(){return Be(" ")}function pa(){return Be("")}function Xe(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function S(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function pu(n){return Array.from(n.childNodes)}function Ms(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ga(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}const ni=new Map;let ii=0;function gu(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function _u(n,e){const t={stylesheet:du(e),rules:{}};return ni.set(n,t),t}function Dr(n,e,t,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let v=0;v<=1;v+=l){const E=e+(t-e)*r(v);c+=v*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(t,1-t)}}
}`,u=`__svelte_${gu(h)}_${a}`,d=fa(n),{stylesheet:p,rules:w}=ni.get(d)||_u(d,n);w[u]||(w[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${u} ${i}ms linear ${s}ms 1 both`,ii+=1,u}function mu(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),ii-=s,ii||yu())}function yu(){Ds(()=>{ii||(ni.forEach(n=>{const{stylesheet:e}=n;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);n.rules={}}),ni.clear())})}let cn;function en(n){cn=n}function vu(){if(!cn)throw new Error("Function called outside component initialization");return cn}function wu(){const n=vu();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const s=ga(e,t);i.slice().forEach(r=>{r.call(n,s)})}}}function bu(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Jt=[],hs=[],Qn=[],Mr=[],Iu=Promise.resolve();let ds=!1;function Eu(){ds||(ds=!0,Iu.then(_a))}function un(n){Qn.push(n)}const qi=new Set;let zn=0;function _a(){const n=cn;do{for(;zn<Jt.length;){const e=Jt[zn];zn++,en(e),Cu(e.$$)}for(en(null),Jt.length=0,zn=0;hs.length;)hs.pop()();for(let e=0;e<Qn.length;e+=1){const t=Qn[e];qi.has(t)||(qi.add(t),t())}Qn.length=0}while(Jt.length);for(;Mr.length;)Mr.pop()();ds=!1,qi.clear(),en(n)}function Cu(n){if(n.fragment!==null){n.update(),ut(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(un)}}let qt;function Tu(){return qt||(qt=Promise.resolve(),qt.then(()=>{qt=null})),qt}function zi(n,e,t){n.dispatchEvent(ga(`${e?"intro":"outro"}${t}`))}const Jn=new Set;let Te;function hn(){Te={r:0,c:[],p:Te}}function dn(){Te.r||ut(Te.c),Te=Te.p}function B(n,e){n&&n.i&&(Jn.delete(n),n.i(e))}function Z(n,e,t,i){if(n&&n.o){if(Jn.has(n))return;Jn.add(n),Te.c.push(()=>{Jn.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const Su={duration:0};function Lr(n,e,t,i){let s=e(n,t),r=i?0:1,o=null,a=null,l=null;function c(){l&&mu(n,l)}function h(d,p){const w=d.b-r;return p*=Math.abs(w),{a:r,b:d.b,d:w,duration:p,start:d.start,end:d.start+p,group:d.group}}function u(d){const{delay:p=0,duration:w=300,easing:_=la,tick:v=q,css:E}=s||Su,g={start:uu()+p,b:d};d||(g.group=Te,Te.r+=1),o||a?a=g:(E&&(c(),l=Dr(n,r,d,w,p,_,E)),d&&v(0,1),o=h(g,w),un(()=>zi(n,d,"start")),hu(f=>{if(a&&f>a.start&&(o=h(a,w),a=null,zi(n,o.b,"start"),E&&(c(),l=Dr(n,r,o.b,o.duration,0,_,s.css))),o){if(f>=o.end)v(r=o.b,1-r),zi(n,o.b,"end"),a||(o.b?c():--o.group.r||ut(o.group.c)),o=null;else if(f>=o.start){const y=f-o.start;r=o.a+o.d*_(y/o.duration),v(r,1-r)}}return!!(o||a)}))}return{run(d){ua(s)?Tu().then(()=>{s=s(),u(d)}):u(d)},end(){c(),o=a=null}}}function ku(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Ru(n){return typeof n=="object"&&n!==null?n:{}}function Mt(n){n&&n.c()}function ht(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||un(()=>{const l=r.map(ca).filter(ua);o?o.push(...l):ut(l),n.$$.on_mount=[]}),a.forEach(un)}function dt(n,e){const t=n.$$;t.fragment!==null&&(ut(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Au(n,e){n.$$.dirty[0]===-1&&(Jt.push(n),Eu(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Tn(n,e,t,i,s,r,o,a=[-1]){const l=cn;en(n);const c=n.$$={fragment:null,ctx:null,props:r,update:q,not_equal:s,bound:xr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:xr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(u,d,...p)=>{const w=p.length?p[0]:d;return c.ctx&&s(c.ctx[u],c.ctx[u]=w)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](w),h&&Au(n,u)),d}):[],c.update(),h=!0,ut(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=pu(e.target);c.fragment&&c.fragment.l(u),u.forEach(ee)}else c.fragment&&c.fragment.c();e.intro&&B(n.$$.fragment),ht(n,e.target,e.anchor,e.customElement),_a()}en(l)}class Sn{$destroy(){dt(this,1),this.$destroy=q}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!cu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Nu="/assets/citw-logotext.719fedec.png";function Fr(n,{delay:e=0,duration:t=400,easing:i=la}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}var Pu=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>body { font-family: Noto Sans, Noto Sans Thai, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle"></style>
</head>
<body id="htmlbody">(Loading...)</body>
</html>`;function ma(n){return n?{html:n==null?void 0:n.html,css:n==null?void 0:n.compiledCss}:{html:'<div class="no-submission">(No data received)</div>',css:`body { background: #475569; color: #fff; }
.no-submission { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-family: Karla, sans-serif; font-size: 48px; }`}}function Ou(n){let e,t,i;return{c(){e=P("iframe"),S(e,"sandbox","allow-same-origin"),S(e,"srcdoc",n[1]),S(e,"class","absolute top-0 left-0 w-full h-full bg-white"),S(e,"title","Preview")},m(s,r){ne(s,e,r),n[5](e),t||(i=Xe(e,"load",n[2]),t=!0)},p:q,i:q,o:q,d(s){s&&ee(e),n[5](null),t=!1,i()}}}function xu(n,e,t){let{html:i}=e,{css:s}=e,r;const o=Pu;function a(){l(i,s)}function l(h,u){const d=r==null?void 0:r.contentDocument;if(d){const p=d.querySelector("#htmlbody");p&&(p.innerHTML=h);const w=d.querySelector("#cssstyle");w&&(w.innerHTML=u)}}function c(h){hs[h?"unshift":"push"](()=>{r=h,t(0,r)})}return n.$$set=h=>{"html"in h&&t(3,i=h.html),"css"in h&&t(4,s=h.css)},n.$$.update=()=>{n.$$.dirty&24&&l(i,s)},[r,o,a,i,s,c]}class ya extends Sn{constructor(e){super(),Tn(this,e,xu,Ou,Dt,{html:3,css:4})}}/**
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
 */const va={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(n,e){if(!n)throw Lt(e)},Lt=function(n){return new Error("Firebase Database ("+va.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const wa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Du=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(t[h],t[u],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Du(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const w=c<<6&192|u;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ba=function(n){const e=wa(n);return Ls.encodeByteArray(e,!0)},Ia=function(n){return ba(n).replace(/\./g,"")},fs=function(n){try{return Ls.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mu(n){return Ea(void 0,n)}function Ea(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Lu(t)||(n[t]=Ea(n[t],e[t]));return n}function Lu(n){return n!=="__proto__"}/**
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
 */class Fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Us(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function Ca(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ta(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fu(){const n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sa(){return va.NODE_ADMIN===!0}function ka(){return typeof indexedDB=="object"}function Ra(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Uu(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const $u="FirebaseError";class qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=$u,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}}class ft{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Wu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qe(s,a,i)}}function Wu(n,e){return n.replace(Hu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Hu=/\{\$([^}]+)}/g;/**
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
 */function fn(n){return JSON.parse(n)}function K(n){return JSON.stringify(n)}/**
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
 */const Aa=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=fn(fs(r[0])||""),t=fn(fs(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Bu=function(n){const e=Aa(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ju=function(n){const e=Aa(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ps(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function si(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function pn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ur(r)&&Ur(o)){if(!pn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ur(n){return n!==null&&typeof n=="object"}/**
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
 */function Ft(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Vu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function qu(n,e){const t=new zu(n,e);return t.subscribe.bind(t)}class zu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Gu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Gi),s.error===void 0&&(s.error=Gi),s.complete===void 0&&(s.complete=Gi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gi(){}function Na(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Ku=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ti=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Yu=1e3,Qu=2,Ju=4*60*60*1e3,Xu=.5;function $r(n,e=Yu,t=Qu){const i=e*Math.pow(t,n),s=Math.round(Xu*i*(Math.random()-.5)*2);return Math.min(Ju,i+s)}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Xt(n,e){return new Promise((t,i)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class Wr{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new Pa(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Oa(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Pa{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new Oa(this._transaction.objectStore(e))}}class Oa{constructor(e){this._store=e}index(e){return new Hr(this._store.index(e))}createIndex(e,t,i){return new Hr(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return Xt(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return Xt(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return Xt(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Xt(e,"Error clearing IndexedDB object store")}}class Hr{constructor(e){this._index=e}get(e){const t=this._index.get(e);return Xt(t,"Error reading from IndexedDB")}}function xa(n,e,t){return new Promise((i,s)=>{try{const r=indexedDB.open(n,e);r.onsuccess=o=>{i(new Wr(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{t(new Wr(r.result),o.oldVersion,o.newVersion,new Pa(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class me{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ze="[DEFAULT]";/**
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
 */class Zu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Fs;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(th(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:eh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eh(n){return n===ze?void 0:n}function th(n){return n.instantiationMode==="EAGER"}/**
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
 */class nh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const ih={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},sh=F.INFO,rh={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},oh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=rh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Si{constructor(e){this.name=e,this._logLevel=sh,this._logHandler=oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ih[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
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
 */class ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",Br="0.7.21";/**
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
 */const $s=new Si("@firebase/app"),ch="@firebase/app-compat",uh="@firebase/analytics-compat",hh="@firebase/analytics",dh="@firebase/app-check-compat",fh="@firebase/app-check",ph="@firebase/auth",gh="@firebase/auth-compat",_h="@firebase/database",mh="@firebase/database-compat",yh="@firebase/functions",vh="@firebase/functions-compat",wh="@firebase/installations",bh="@firebase/installations-compat",Ih="@firebase/messaging",Eh="@firebase/messaging-compat",Ch="@firebase/performance",Th="@firebase/performance-compat",Sh="@firebase/remote-config",kh="@firebase/remote-config-compat",Rh="@firebase/storage",Ah="@firebase/storage-compat",Nh="@firebase/firestore",Ph="@firebase/firestore-compat",Oh="firebase",xh="9.6.11";/**
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
 */const Da="[DEFAULT]",Dh={[gs]:"fire-core",[ch]:"fire-core-compat",[hh]:"fire-analytics",[uh]:"fire-analytics-compat",[fh]:"fire-app-check",[dh]:"fire-app-check-compat",[ph]:"fire-auth",[gh]:"fire-auth-compat",[_h]:"fire-rtdb",[mh]:"fire-rtdb-compat",[yh]:"fire-fn",[vh]:"fire-fn-compat",[wh]:"fire-iid",[bh]:"fire-iid-compat",[Ih]:"fire-fcm",[Eh]:"fire-fcm-compat",[Ch]:"fire-perf",[Th]:"fire-perf-compat",[Sh]:"fire-rc",[kh]:"fire-rc-compat",[Rh]:"fire-gcs",[Ah]:"fire-gcs-compat",[Nh]:"fire-fst",[Ph]:"fire-fst-compat","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
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
 */const ri=new Map,_s=new Map;function Mh(n,e){try{n.container.addComponent(e)}catch(t){$s.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ce(n){const e=n.name;if(_s.has(e))return $s.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,n);for(const t of ri.values())Mh(t,n);return!0}function pt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Lh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ze=new ft("app","Firebase",Lh);/**
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
 */class Fh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const kn=xh;function Uh(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Da,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});const s=ri.get(i);if(s){if(pn(n,s.options)&&pn(t,s.config))return s;throw Ze.create("duplicate-app",{appName:i})}const r=new nh(i);for(const a of _s.values())r.addComponent(a);const o=new Fh(n,t,r);return ri.set(i,o),o}function Ws(n=Da){const e=ri.get(n);if(!e)throw Ze.create("no-app",{appName:n});return e}function ce(n,e,t){var i;let s=(i=Dh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$s.warn(a.join(" "));return}Ce(new me(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $h="firebase-heartbeat-database",Wh=1,gn="firebase-heartbeat-store";let Ki=null;function Ma(){return Ki||(Ki=xa($h,Wh,(n,e)=>{switch(e){case 0:n.createObjectStore(gn)}}).catch(n=>{throw Ze.create("storage-open",{originalErrorMessage:n.message})})),Ki}async function Hh(n){try{return(await Ma()).transaction(gn).objectStore(gn).get(La(n))}catch(e){throw Ze.create("storage-get",{originalErrorMessage:e.message})}}async function jr(n,e){try{const i=(await Ma()).transaction(gn,"readwrite");return await i.objectStore(gn).put(e,La(n)),i.complete}catch(t){throw Ze.create("storage-set",{originalErrorMessage:t.message})}}function La(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bh=1024,jh=30*24*60*60*1e3;class Vh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=jh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vr(),{heartbeatsToSend:t,unsentEntries:i}=qh(this._heartbeatsCache.heartbeats),s=Ia(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vr(){return new Date().toISOString().substring(0,10)}function qh(n,e=Bh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),qr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ka()?Ra().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qr(n){return Ia(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gh(n){Ce(new me("platform-logger",e=>new ah(e),"PRIVATE")),Ce(new me("heartbeat",e=>new Vh(e),"PRIVATE")),ce(gs,Br,n),ce(gs,Br,"esm2017"),ce("fire-js","")}Gh("");const zr="@firebase/database",Gr="0.12.8";/**
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
 */let Fa="";function Kh(n){Fa=n}/**
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
 */class Yh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Qh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ua=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yh(e)}}catch{}return new Qh},Ke=Ua("localStorage"),ms=Ua("sessionStorage");/**
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
 */const Tt=new Si("@firebase/database"),Jh=function(){let n=1;return function(){return n++}}(),$a=function(n){const e=Ku(n),t=new Vu;t.update(e);const i=t.digest();return Ls.encodeByteArray(i)},Rn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rn.apply(null,i):typeof i=="object"?e+=K(i):e+=i,e+=" "}return e};let Qe=null,Kr=!0;const Xh=function(n,e){I(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Tt.logLevel=F.VERBOSE,Qe=Tt.log.bind(Tt),e&&ms.set("logging_enabled",!0)):typeof n=="function"?Qe=n:(Qe=null,ms.remove("logging_enabled"))},J=function(...n){if(Kr===!0&&(Kr=!1,Qe===null&&ms.get("logging_enabled")===!0&&Xh(!0)),Qe){const e=Rn.apply(null,n);Qe(e)}},An=function(n){return function(...e){J(n,...e)}},ys=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rn(...n);Tt.error(e)},et=function(...n){const e=`FIREBASE FATAL ERROR: ${Rn(...n)}`;throw Tt.error(e),new Error(e)},ae=function(...n){const e="FIREBASE WARNING: "+Rn(...n);Tt.warn(e)},Zh=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ed=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pt="[MIN_NAME]",tt="[MAX_NAME]",Ut=function(n,e){if(n===e)return 0;if(n===Pt||e===tt)return-1;if(e===Pt||n===tt)return 1;{const t=Yr(n),i=Yr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},td=function(n,e){return n===e?0:n<e?-1:1},zt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+K(e))},Hs=function(n){if(typeof n!="object"||n===null)return K(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=K(e[i]),t+=":",t+=Hs(n[e[i]]);return t+="}",t},Ha=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ba=function(n){I(!Wa(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},nd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},id=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sd(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const rd=new RegExp("^-?(0*)\\d{1,10}$"),od=-2147483648,ad=2147483647,Yr=function(n){if(rd.test(n)){const e=Number(n);if(e>=od&&e<=ad)return e}return null},Nn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ae("Exception was thrown by user callback.",t),e},Math.floor(0))}},ld=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},tn=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class cd{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ae(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ud{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(J("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ae(e)}}class vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vs.OWNER="owner";/**
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
 */const Bs="5",ja="v",Va="s",qa="r",za="f",Ga=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ka="ls",hd="p",ws="ac",Ya="websocket",Qa="long_polling";/**
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
 */class dd{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fd(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ja(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===Ya)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Qa)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fd(n)&&(t.ns=n.namespace);const s=[];return re(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class pd{constructor(){this.counters_={}}incrementCounter(e,t=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Mu(this.counters_)}}/**
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
 */const Yi={},Qi={};function js(n){const e=n.toString();return Yi[e]||(Yi[e]=new pd),Yi[e]}function gd(n,e){const t=n.toString();return Qi[t]||(Qi[t]=e()),Qi[t]}/**
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
 */class _d{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Nn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qr="start",md="close",yd="pLPCommand",vd="pRTLPCB",Xa="id",Za="pw",el="ser",wd="cb",bd="seg",Id="ts",Ed="d",Cd="dframe",tl=1870,nl=30,Td=tl-nl,Sd=25e3,kd=3e4;class bt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=An(e),this.stats_=js(t),this.urlFn=l=>(this.appCheckToken&&(l[ws]=this.appCheckToken),Ja(t,Qa,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _d(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kd)),ed(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vs((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qr)this.id=a,this.password=l;else if(o===md)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qr]="t",i[el]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[wd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ja]=Bs,this.transportSessionId&&(i[Va]=this.transportSessionId),this.lastSessionId&&(i[Ka]=this.lastSessionId),this.applicationId&&(i[hd]=this.applicationId),this.appCheckToken&&(i[ws]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ga.test(location.hostname)&&(i[qa]=za);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bt.forceAllow_=!0}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){return bt.forceAllow_?!0:!bt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!nd()&&!id()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ba(t),s=Ha(i,Td);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Cd]="t",i[Xa]=e,i[Za]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jh(),window[yd+this.uniqueCallbackIdentifier]=e,window[vd+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vs.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){J("frame writing exception"),a.stack&&J(a.stack),J(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||J("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xa]=this.myID,e[Za]=this.myPW,e[el]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nl+i.length<=tl;){const o=this.pendingSegs.shift();i=i+"&"+bd+s+"="+o.seg+"&"+Id+s+"="+o.ts+"&"+Ed+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Sd)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{J("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Rd=16384,Ad=45e3;let oi=null;typeof MozWebSocket!="undefined"?oi=MozWebSocket:typeof WebSocket!="undefined"&&(oi=WebSocket);class fe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=An(this.connId),this.stats_=js(t),this.connURL=fe.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[ja]=Bs,typeof location!="undefined"&&location.hostname&&Ga.test(location.hostname)&&(r[qa]=za),t&&(r[Va]=t),i&&(r[Ka]=i),s&&(r[ws]=s),Ja(e,Ya,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ke.set("previous_websocket_failure",!0);try{if(!Sa()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new oi(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&oi!==null&&!fe.forceDisallow_}static previouslyFailed(){return Ke.isInMemoryStorage||Ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=fn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ha(t,Rd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ad))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fe.responsesRequiredToBeHealthy=2;fe.healthyTimeout=3e4;/**
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
 */class qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bt,fe]}initTransports_(e){const t=fe&&fe.isAvailable();let i=t&&!fe.previouslyFailed();if(e.webSocketOnly&&(t||ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fe];else{const s=this.transports_=[];for(const r of qs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const Nd=6e4,Pd=5e3,Od=10*1024,xd=100*1024,Ji="t",Jr="d",Dd="s",Xr="r",Md="e",Zr="o",eo="a",to="n",no="p",Ld="h";class Fd{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=An("c:"+this.id+":"),this.transportManager_=new qs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=tn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Od?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ji in e){const t=e[Ji];t===eo?this.upgradeIfSecondaryHealthy_():t===Xr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zt("t",e),i=zt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:no,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:to,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zt("t",e),i=zt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zt(Ji,e);if(Jr in e){const i=e[Jr];if(t===Ld)this.onHandshake_(i);else if(t===to){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Dd?this.onConnectionShutdown_(i):t===Xr?this.onReset_(i):t===Md?ys("Server Error: "+i):t===Zr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ys("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bs!==i&&ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),tn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:no,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class il{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class sl{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ai extends sl{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Us()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ai}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const io=32,so=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function M(){return new U("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function je(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function rl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ud(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ol(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function al(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function V(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof U)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new U(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function ie(n,e){const t=x(n),i=x(e);if(t===null)return e;if(t===i)return ie($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function zs(n,e){if(je(n)!==je(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(je(n)>je(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class $d{constructor(e,t){this.errorPrefix_=t,this.parts_=ol(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ti(this.parts_[i]);ll(this)}}function Wd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ti(e),ll(n)}function Hd(n){const e=n.parts_.pop();n.byteLength_-=Ti(e),n.parts_.length>0&&(n.byteLength_-=1)}function ll(n){if(n.byteLength_>so)throw new Error(n.errorPrefix_+"has a key path longer than "+so+" bytes ("+n.byteLength_+").");if(n.parts_.length>io)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+io+") or object contains a cycle "+Ge(n))}function Ge(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Gs extends sl{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Gs}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gt=1e3,Bd=60*5*1e3,jd=3*1e3,ro=30*1e3,Vd=1.3,qd=3e4,zd="server_kill",oo=3;class Ae extends il{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ae.nextPersistentConnectionId_++,this.log_=An("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gt,this.maxReconnectDelay_=Bd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Sa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ai.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(K(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Fs,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},jd),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ae.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Oe(e,"w")){const i=Nt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ju(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ro)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ys("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qd&&(this.reconnectDelay_=Gt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ae.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?J("getToken() completed but was canceled"):(J("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Fd(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ae(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zd)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ae(u),l())}}}interrupt(e){J("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){J("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ps(this.interruptReasons_)&&(this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Hs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new U(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){J("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oo&&(this.reconnectDelay_=ro,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){J("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Fa.replace(/\./g,"-")]=1,Us()?e["framework.cordova"]=1:Ta()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ai.getInstance().currentlyOnline();return ps(this.interruptReasons_)&&e}}Ae.nextPersistentConnectionId_=0;Ae.nextConnectionId_=0;/**
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
 */class O{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new O(e,t)}}/**
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
 */class ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new O(Pt,e),s=new O(Pt,t);return this.compare(i,s)!==0}minPost(){return O.MIN}}/**
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
 */let Gn;class cl extends ki{static get __EMPTY_NODE(){return Gn}static set __EMPTY_NODE(e){Gn=e}compare(e,t){return Ut(e.name,t.name)}isDefinedOn(e){throw Lt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return O.MIN}maxPost(){return new O(tt,Gn)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new O(e,Gn)}toString(){return".key"}}const St=new cl;/**
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
 */class Kn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:G.RED,this.left=s!=null?s:se.EMPTY_NODE,this.right=r!=null?r:se.EMPTY_NODE}copy(e,t,i,s,r){return new G(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return se.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Gd{copy(e,t,i,s,r){return this}insert(e,t,i){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class se{constructor(e,t=se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kn(this.root_,null,this.comparator_,!0,e)}}se.EMPTY_NODE=new Gd;/**
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
 */function Kd(n,e){return Ut(n.name,e.name)}function Ks(n,e){return Ut(n,e)}/**
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
 */let bs;function Yd(n){bs=n}const ul=function(n){return typeof n=="number"?"number:"+Ba(n):"string:"+n},hl=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else I(n===bs||n.isEmpty(),"priority of unexpected type.");I(n===bs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ao;class z{constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hl(this.priorityNode_)}static set __childrenNodeConstructor(e){ao=e}static get __childrenNodeConstructor(){return ao}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:x(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=x(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,z.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ul(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ba(this.value_):e+=this.value_,this.lazyHash_=$a(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dl,fl;function Qd(n){dl=n}function Jd(n){fl=n}class Xd extends ki{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ut(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return O.MIN}maxPost(){return new O(tt,new z("[PRIORITY-POST]",fl))}makePost(e,t){const i=dl(e);return new O(t,new z("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new Xd;/**
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
 */const Zd=Math.log(2);class ef{constructor(e){const t=r=>parseInt(Math.log(r)/Zd,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new G(d,u.node,G.BLACK,null,null);{const p=parseInt(h/2,10)+l,w=s(l,p),_=s(p+1,c);return u=n[p],d=t?t(u):u,new G(d,u.node,G.BLACK,w,_)}},r=function(l){let c=null,h=null,u=n.length;const d=function(w,_){const v=u-w,E=u;u-=w;const g=s(v+1,E),f=n[v],y=t?t(f):f;p(new G(y,f.node,_,null,g))},p=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<l.count;++w){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(w+1));_?d(v,G.BLACK):(d(v,G.BLACK),d(v,G.RED))}return h},o=new ef(n.length),a=r(o);return new se(i||e,a)};/**
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
 */let Xi;const vt={};class Se{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(vt&&H,"ChildrenNode.ts has not been loaded"),Xi=Xi||new Se({".priority":vt},{".priority":H}),Xi}get(e){const t=Nt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof se?t:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,t){I(e!==St,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(O.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=li(i,e.getCompare()):a=vt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Se(h,c)}addToIndexes(e,t){const i=si(this.indexes_,(s,r)=>{const o=Nt(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===vt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(O.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),li(a,o.getCompare())}else return vt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new O(e.name,a))),l.insert(e,e.node)}});return new Se(i,this.indexSet_)}removeFromIndexes(e,t){const i=si(this.indexes_,s=>{if(s===vt)return s;{const r=t.get(e.name);return r?s.remove(new O(e.name,r)):s}});return new Se(i,this.indexSet_)}}/**
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
 */let Kt;class k{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&hl(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kt||(Kt=new k(new se(Ks),null,Se.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kt}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Kt:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new O(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Kt:this.priorityNode_;return new k(s,o,r)}}updateChild(e,t){const i=x(e);if(i===null)return t;{I(x(e)!==".priority"||je(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild($(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ul(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":$a(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new O(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new O(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new O(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,O.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,O.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pn?-1:0}withIndex(e){if(e===St||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===St||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),s=t.getIterator(H);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===St?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tf extends k{constructor(){super(new se(Ks),k.EMPTY_NODE,Se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Pn=new tf;Object.defineProperties(O,{MIN:{value:new O(Pt,k.EMPTY_NODE)},MAX:{value:new O(tt,Pn)}});cl.__EMPTY_NODE=k.EMPTY_NODE;z.__childrenNodeConstructor=k;Yd(Pn);Jd(Pn);/**
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
 */const nf=!0;function X(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,X(e))}if(!(n instanceof Array)&&nf){const t=[];let i=!1;if(re(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=X(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new O(o,l)))}}),t.length===0)return k.EMPTY_NODE;const r=li(t,Kd,o=>o.name,Ks);if(i){const o=li(t,H.getCompare());return new k(r,X(e),new Se({".priority":o},{".priority":H}))}else return new k(r,X(e),Se.Default)}else{let t=k.EMPTY_NODE;return re(n,(i,s)=>{if(Oe(n,i)&&i.substring(0,1)!=="."){const r=X(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(X(e))}}Qd(X);/**
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
 */class sf extends ki{constructor(e){super(),this.indexPath_=e,I(!D(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ut(e.name,t.name):r}makePost(e,t){const i=X(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new O(t,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Pn);return new O(tt,e)}toString(){return ol(this.indexPath_,0).join("/")}}/**
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
 */class rf extends ki{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ut(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return O.MIN}maxPost(){return O.MAX}makePost(e,t){const i=X(e);return new O(t,i)}toString(){return".value"}}const of=new rf;/**
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
 */function pl(n){return{type:"value",snapshotNode:n}}function Ot(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _n(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function mn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function af(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ys{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_n(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ot(t,i)):o.trackChildChange(mn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(s,r)=>{t.hasChild(s)||i.trackChildChange(_n(s,r))}),t.isLeafNode()||t.forEachChild(H,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(mn(s,r,o))}else i.trackChildChange(Ot(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yn{constructor(e){this.indexedFilter_=new Ys(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yn.getStartPost_(e),this.endPost_=yn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new O(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new O(o,a))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class lf{constructor(e){this.rangedFilter_=new yn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new O(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(d,p)=>u(p,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,h=!1;for(;l.hasNext();){const u=l.getNext();!h&&a(r,u)<=0&&(h=!0),h&&c<this.limit_&&a(u,o)<=0?c++:s=s.updateImmediateChild(u.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new O(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(h&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(mn(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(_n(t,u));const _=a.updateImmediateChild(t,k.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ot(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_n(c.name,c.node)),r.trackChildChange(Ot(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
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
 */class Qs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pt}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new Qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cf(n){return n.loadsAllData()?new Ys(n.getIndex()):n.hasLimit()?new lf(n):new yn(n)}function lo(n){const e={};if(n.isDefault())return e;let t;return n.index_===H?t="$priority":n.index_===of?t="$value":n.index_===St?t="$key":(I(n.index_ instanceof sf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=K(t),n.startSet_&&(e.startAt=K(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+K(n.indexStartName_))),n.endSet_&&(e.endAt=K(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+K(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function co(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
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
 */class ci extends il{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=An("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ci.getListenId_(e,i),a={};this.listens_[o]=a;const l=lo(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Nt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=ci.getListenId_(e,t);delete this.listens_[i]}get(e){const t=lo(e._queryParams),i=e._path.toString(),s=new Fs;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ft(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fn(a.responseText)}catch{ae("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ae("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uf{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ui(){return{value:null,children:new Map}}function gl(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=x(e);n.children.has(i)||n.children.set(i,ui());const s=n.children.get(i);e=$(e),gl(s,e,t)}}function Is(n,e,t){n.value!==null?t(e,n.value):hf(n,(i,s)=>{const r=new U(e.toString()+"/"+i);Is(s,r,t)})}function hf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class df{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&re(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const uo=10*1e3,ff=30*1e3,pf=5*60*1e3;class gf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new df(e);const i=uo+(ff-uo)*Math.random();tn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;re(e,(s,r)=>{r>0&&Oe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),tn(this.reportStats_.bind(this),Math.floor(Math.random()*2*pf))}}/**
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
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function _l(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Js(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class hi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=_l()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new hi(M(),t,this.revert)}}else return I(x(this.path)===e,"operationForChild called for unrelated child."),new hi($(this.path),this.affectedTree,this.revert)}}/**
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
 */class vn{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new vn(this.source,M()):new vn(this.source,$(this.path))}}/**
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
 */class nt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return D(this.path)?new nt(this.source,M(),this.snap.getImmediateChild(e)):new nt(this.source,$(this.path),this.snap)}}/**
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
 */class wn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ge.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new nt(this.source,M(),t.value):new wn(this.source,M(),t)}else return I(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wn(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class it{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _f{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(af(o.childName,o.snapshotNode))}),Yt(n,s,"child_removed",e,i,t),Yt(n,s,"child_added",e,i,t),Yt(n,s,"child_moved",r,i,t),Yt(n,s,"child_changed",e,i,t),Yt(n,s,"value",e,i,t),s}function Yt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>vf(n,a,l)),o.forEach(a=>{const l=yf(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function yf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vf(n,e,t){if(e.childName==null||t.childName==null)throw Lt("Should only compare child_ events.");const i=new O(e.childName,e.snapshotNode),s=new O(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Ri(n,e){return{eventCache:n,serverCache:e}}function nn(n,e,t,i){return Ri(new it(e,t,i),n.serverCache)}function ml(n,e,t,i){return Ri(n.eventCache,new it(e,t,i))}function Es(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function st(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Zi;const wf=()=>(Zi||(Zi=new se(td)),Zi);class W{constructor(e,t=wf()){this.value=e,this.children=t}static fromObject(e){let t=new W(null);return re(e,(i,s)=>{t=t.set(new U(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:M(),value:this.value};if(D(e))return null;{const i=x(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue($(e),t);return r!=null?{path:V(new U(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=x(e),i=this.children.get(t);return i!==null?i.subtree($(e)):new W(null)}}set(e,t){if(D(e))return new W(t,this.children);{const i=x(e),r=(this.children.get(i)||new W(null)).set($(e),t),o=this.children.insert(i,r);return new W(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const t=x(e),i=this.children.get(t);if(i){const s=i.remove($(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new W(null):new W(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=x(e),i=this.children.get(t);return i?i.get($(e)):null}}setTree(e,t){if(D(e))return t;{const i=x(e),r=(this.children.get(i)||new W(null)).setTree($(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new W(this.value,o)}}fold(e){return this.fold_(M(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(V(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,M(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(D(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_($(e),V(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,M(),t)}foreachOnPath_(e,t,i){if(D(e))return this;{this.value&&i(t,this.value);const s=x(e),r=this.children.get(s);return r?r.foreachOnPath_($(e),V(t,s),i):new W(null)}}foreach(e){this.foreach_(M(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(V(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class _e{constructor(e){this.writeTree_=e}static empty(){return new _e(new W(null))}}function sn(n,e,t){if(D(e))return new _e(new W(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ie(s,e);return r=r.updateChild(o,t),new _e(n.writeTree_.set(s,r))}else{const s=new W(t),r=n.writeTree_.setTree(e,s);return new _e(r)}}}function ho(n,e,t){let i=n;return re(t,(s,r)=>{i=sn(i,V(e,s),r)}),i}function fo(n,e){if(D(e))return _e.empty();{const t=n.writeTree_.setTree(e,new W(null));return new _e(t)}}function Cs(n,e){return gt(n,e)!=null}function gt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ie(t.path,e)):null}function po(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,s)=>{e.push(new O(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new O(i,s.value))}),e}function He(n,e){if(D(e))return n;{const t=gt(n,e);return t!=null?new _e(new W(t)):new _e(n.writeTree_.subtree(e))}}function Ts(n){return n.writeTree_.isEmpty()}function xt(n,e){return yl(M(),n.writeTree_,e)}function yl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=yl(V(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(V(n,".priority"),i)),t}}/**
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
 */function Zs(n,e){return Il(e,n)}function bf(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=sn(n.visibleWrites,e,t)),n.lastWriteId=i}function If(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Ef(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Cf(a,i.path)?s=!1:pe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Tf(n),!0;if(i.snap)n.visibleWrites=fo(n.visibleWrites,i.path);else{const a=i.children;re(a,l=>{n.visibleWrites=fo(n.visibleWrites,V(i.path,l))})}return!0}else return!1}function Cf(n,e){if(n.snap)return pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pe(V(n.path,t),e))return!0;return!1}function Tf(n){n.visibleWrites=vl(n.allWrites,Sf,M()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Sf(n){return n.visible}function vl(n,e,t){let i=_e.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)pe(t,o)?(a=ie(t,o),i=sn(i,a,r.snap)):pe(o,t)&&(a=ie(o,t),i=sn(i,M(),r.snap.getChild(a)));else if(r.children){if(pe(t,o))a=ie(t,o),i=ho(i,a,r.children);else if(pe(o,t))if(a=ie(o,t),D(a))i=ho(i,M(),r.children);else{const l=Nt(r.children,x(a));if(l){const c=l.getChild($(a));i=sn(i,M(),c)}}}else throw Lt("WriteRecord should have .snap or .children")}}return i}function wl(n,e,t,i,s){if(!i&&!s){const r=gt(n.visibleWrites,e);if(r!=null)return r;{const o=He(n.visibleWrites,e);if(Ts(o))return t;if(t==null&&!Cs(o,M()))return null;{const a=t||k.EMPTY_NODE;return xt(o,a)}}}else{const r=He(n.visibleWrites,e);if(!s&&Ts(r))return t;if(!s&&t==null&&!Cs(r,M()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(pe(c.path,e)||pe(e,c.path))},a=vl(n.allWrites,o,e),l=t||k.EMPTY_NODE;return xt(a,l)}}}function kf(n,e,t){let i=k.EMPTY_NODE;const s=gt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(H,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=He(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=xt(He(r,new U(o)),a);i=i.updateImmediateChild(o,l)}),po(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=He(n.visibleWrites,e);return po(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Rf(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=V(e,t);if(Cs(n.visibleWrites,r))return null;{const o=He(n.visibleWrites,r);return Ts(o)?s.getChild(t):xt(o,s.getChild(t))}}function Af(n,e,t,i){const s=V(e,t),r=gt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=He(n.visibleWrites,s);return xt(o,i.getNode().getImmediateChild(t))}else return null}function Nf(n,e){return gt(n.visibleWrites,e)}function Pf(n,e,t,i,s,r,o){let a;const l=He(n.visibleWrites,e),c=gt(l,M());if(c!=null)a=c;else if(t!=null)a=xt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&h.length<s;)u(p,i)!==0&&h.push(p),p=d.getNext();return h}else return[]}function Of(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function di(n,e,t,i){return wl(n.writeTree,n.treePath,e,t,i)}function er(n,e){return kf(n.writeTree,n.treePath,e)}function go(n,e,t,i){return Rf(n.writeTree,n.treePath,e,t,i)}function fi(n,e){return Nf(n.writeTree,V(n.treePath,e))}function xf(n,e,t,i,s,r){return Pf(n.writeTree,n.treePath,e,t,i,s,r)}function tr(n,e,t){return Af(n.writeTree,n.treePath,e,t)}function bl(n,e){return Il(V(n.treePath,e),n.writeTree)}function Il(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Df{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,mn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,_n(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ot(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,mn(i,e.snapshotNode,s.oldSnap));else throw Lt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mf{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const El=new Mf;class nr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new it(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:st(this.viewCache_),r=xf(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Lf(n){return{filter:n}}function Ff(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Uf(n,e,t,i,s){const r=new Df;let o,a;if(t.type===ge.OVERWRITE){const c=t;c.source.fromUser?o=Ss(n,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=pi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ge.MERGE){const c=t;c.source.fromUser?o=Wf(n,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ks(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ge.ACK_USER_WRITE){const c=t;c.revert?o=jf(n,e,c.path,i,s,r):o=Hf(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ge.LISTEN_COMPLETE)o=Bf(n,e,t.path,i,r);else throw Lt("Unknown operation type: "+t.type);const l=r.getChanges();return $f(e,o,l),{viewCache:o,changes:l}}function $f(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Es(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(pl(Es(e)))}}function Cl(n,e,t,i,s,r){const o=e.eventCache;if(fi(i,t)!=null)return e;{let a,l;if(D(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=st(e),h=c instanceof k?c:k.EMPTY_NODE,u=er(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=di(i,st(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=x(t);if(c===".priority"){I(je(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=go(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=$(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=go(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=tr(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return nn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function pi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=x(t);if(!l.isCompleteForPath(t)&&je(t)>1)return e;const w=$(t),v=l.getNode().getImmediateChild(p).updateChild(w,i);p===".priority"?c=h.updatePriority(l.getNode(),v):c=h.updateChild(l.getNode(),p,v,w,El,null)}const u=ml(e,c,l.isFullyInitialized()||D(t),h.filtersNodes()),d=new nr(s,u,r);return Cl(n,u,t,s,d,a)}function Ss(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new nr(s,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=nn(e,c,!0,n.filter.filtersNodes());else{const u=x(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=nn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=$(t),p=a.getNode().getImmediateChild(u);let w;if(D(d))w=i;else{const _=h.getCompleteChild(u);_!=null?rl(d)===".priority"&&_.getChild(al(d)).isEmpty()?w=_:w=_.updateChild(d,i):w=k.EMPTY_NODE}if(p.equals(w))l=e;else{const _=n.filter.updateChild(a.getNode(),u,w,d,h,o);l=nn(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function _o(n,e){return n.eventCache.isCompleteForChild(e)}function Wf(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=V(t,l);_o(e,x(h))&&(a=Ss(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=V(t,l);_o(e,x(h))||(a=Ss(n,a,h,c,s,r,o))}),a}function mo(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ks(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=i:c=new W(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),w=mo(n,p,d);l=pi(n,l,new U(u),w,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===void 0;if(!h.hasChild(u)&&!p){const w=e.serverCache.getNode().getImmediateChild(u),_=mo(n,w,d);l=pi(n,l,new U(u),_,s,r,o,a)}}),l}function Hf(n,e,t,i,s,r,o){if(fi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return pi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(D(t)){let c=new W(null);return l.getNode().forEachChild(St,(h,u)=>{c=c.set(new U(h),u)}),ks(n,e,t,c,s,r,a,o)}else return e}else{let c=new W(null);return i.foreach((h,u)=>{const d=V(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),ks(n,e,t,c,s,r,a,o)}}function Bf(n,e,t,i,s){const r=e.serverCache,o=ml(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return Cl(n,o,t,i,El,s)}function jf(n,e,t,i,s,r){let o;if(fi(i,t)!=null)return e;{const a=new nr(i,e,s),l=e.eventCache.getNode();let c;if(D(t)||x(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=di(i,st(e));else{const u=e.serverCache.getNode();I(u instanceof k,"serverChildren would be complete if leaf node"),h=er(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=x(t);let u=tr(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,$(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,k.EMPTY_NODE,$(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=di(i,st(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(i,M())!=null,nn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Vf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ys(i.getIndex()),r=cf(i);this.processor_=Lf(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),h=new it(l,o.isFullyInitialized(),s.filtersNodes()),u=new it(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ri(u,h),this.eventGenerator_=new _f(this.query_)}get query(){return this.query_}}function qf(n){return n.viewCache_.serverCache.getNode()}function zf(n,e){const t=st(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function yo(n){return n.eventRegistrations_.length===0}function Gf(n,e){n.eventRegistrations_.push(e)}function vo(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function wo(n,e,t,i){e.type===ge.MERGE&&e.source.queryId!==null&&(I(st(n.viewCache_),"We should always have a full cache before handling merges"),I(Es(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Uf(n.processor_,s,e,t,i);return Ff(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Tl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Kf(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{i.push(Ot(r,o))}),t.isFullyInitialized()&&i.push(pl(t.getNode())),Tl(n,i,t.getNode(),e)}function Tl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return mf(n.eventGenerator_,e,t,s)}/**
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
 */let gi;class Yf{constructor(){this.views=new Map}}function Qf(n){I(!gi,"__referenceConstructor has already been defined"),gi=n}function Jf(){return I(gi,"Reference.ts has not been loaded"),gi}function Xf(n){return n.views.size===0}function ir(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),wo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(wo(o,e,t,i));return r}}function Zf(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=di(t,s?i:null),l=!1;a?l=!0:i instanceof k?(a=er(t,i),l=!1):(a=k.EMPTY_NODE,l=!1);const c=Ri(new it(a,l,!1),new it(i,s,!1));return new Vf(e,c)}return o}function ep(n,e,t,i,s,r){const o=Zf(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Gf(o,t),Kf(o,t)}function tp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ve(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(vo(c,t,i)),yo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(vo(l,t,i)),yo(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ve(n)&&r.push(new(Jf())(e._repo,e._path)),{removed:r,events:o}}function Sl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function kt(n,e){let t=null;for(const i of n.views.values())t=t||zf(i,e);return t}function kl(n,e){if(e._queryParams.loadsAllData())return Ai(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Rl(n,e){return kl(n,e)!=null}function Ve(n){return Ai(n)!=null}function Ai(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _i;function np(n){I(!_i,"__referenceConstructor has already been defined"),_i=n}function ip(){return I(_i,"Reference.ts has not been loaded"),_i}let sp=1;class bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=Of(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rp(n,e,t,i,s){return bf(n.pendingWriteTree_,e,t,i,s),s?On(n,new nt(_l(),e,t)):[]}function It(n,e,t=!1){const i=If(n.pendingWriteTree_,e);if(Ef(n.pendingWriteTree_,e)){let r=new W(null);return i.snap!=null?r=r.set(M(),!0):re(i.children,o=>{r=r.set(new U(o),!0)}),On(n,new hi(i.path,r,t))}else return[]}function Ni(n,e,t){return On(n,new nt(Js(),e,t))}function op(n,e,t){const i=W.fromObject(t);return On(n,new wn(Js(),e,i))}function ap(n,e){return On(n,new vn(Js(),e))}function lp(n,e,t){const i=sr(n,t);if(i){const s=rr(i),r=s.path,o=s.queryId,a=ie(r,e),l=new vn(Xs(o),a);return or(n,r,l)}else return[]}function Rs(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Rl(r,e))){const a=tp(r,e,t,i);Xf(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(u,d)=>Ve(d));if(c&&!h){const u=n.syncPointTree_.subtree(s);if(!u.isEmpty()){const d=hp(u);for(let p=0;p<d.length;++p){const w=d[p],_=w.query,v=Ol(n,w);n.listenProvider_.startListening(rn(_),mi(n,_),v.hashFn,v.onComplete)}}}!h&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(rn(e),null):l.forEach(u=>{const d=n.queryToTagMap.get(Pi(u));n.listenProvider_.stopListening(rn(u),d)})),dp(n,l)}return o}function cp(n,e,t,i){const s=sr(n,i);if(s!=null){const r=rr(s),o=r.path,a=r.queryId,l=ie(o,e),c=new nt(Xs(a),l,t);return or(n,o,c)}else return[]}function up(n,e,t,i){const s=sr(n,i);if(s){const r=rr(s),o=r.path,a=r.queryId,l=ie(o,e),c=W.fromObject(t),h=new wn(Xs(a),l,c);return or(n,o,h)}else return[]}function Io(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(u,d)=>{const p=ie(u,i);s=s||kt(d,p),r=r||Ve(d)});let o=n.syncPointTree_.get(i);o?(r=r||Ve(o),s=s||kt(o,M())):(o=new Yf,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=k.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,p)=>{const w=kt(p,M());w&&(s=s.updateImmediateChild(d,w))}));const l=Rl(o,e);if(!l&&!e._queryParams.loadsAllData()){const u=Pi(e);I(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const d=fp();n.queryToTagMap.set(u,d),n.tagToQueryMap.set(d,u)}const c=Zs(n.pendingWriteTree_,i);let h=ep(o,e,t,c,s,a);if(!l&&!r){const u=kl(o,e);h=h.concat(pp(n,e,u))}return h}function Al(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ie(o,e),c=kt(a,l);if(c)return c});return wl(s,e,r,t,!0)}function On(n,e){return Nl(e,n.syncPointTree_,null,Zs(n.pendingWriteTree_,M()))}function Nl(n,e,t,i){if(D(n.path))return Pl(n,e,t,i);{const s=e.get(M());t==null&&s!=null&&(t=kt(s,M()));let r=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=bl(i,o);r=r.concat(Nl(a,l,c,h))}return s&&(r=r.concat(ir(s,n,i,t))),r}}function Pl(n,e,t,i){const s=e.get(M());t==null&&s!=null&&(t=kt(s,M()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=bl(i,o),h=n.operationForChild(o);h&&(r=r.concat(Pl(h,a,l,c)))}),s&&(r=r.concat(ir(s,n,i,t))),r}function Ol(n,e){const t=e.query,i=mi(n,t);return{hashFn:()=>(qf(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?lp(n,t._path,i):ap(n,t._path);{const r=sd(s,t);return Rs(n,t,null,r)}}}}function mi(n,e){const t=Pi(e);return n.queryToTagMap.get(t)}function Pi(n){return n._path.toString()+"$"+n._queryIdentifier}function sr(n,e){return n.tagToQueryMap.get(e)}function rr(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function or(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=Zs(n.pendingWriteTree_,e);return ir(i,t,s,null)}function hp(n){return n.fold((e,t,i)=>{if(t&&Ve(t))return[Ai(t)];{let s=[];return t&&(s=Sl(t)),re(i,(r,o)=>{s=s.concat(o)}),s}})}function rn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ip())(n._repo,n._path):n}function dp(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Pi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function fp(){return sp++}function pp(n,e,t){const i=e._path,s=mi(n,e),r=Ol(n,t),o=n.listenProvider_.startListening(rn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!Ve(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!D(c)&&h&&Ve(h))return[Ai(h).query];{let d=[];return h&&(d=d.concat(Sl(h).map(p=>p.query))),re(u,(p,w)=>{d=d.concat(w)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(rn(h),mi(n,h))}}return o}/**
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
 */class ar{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ar(t)}node(){return this.node_}}class lr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=V(this.path_,e);return new lr(this.syncTree_,t)}node(){return Al(this.syncTree_,this.path_)}}const gp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Eo=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return _p(n[".sv"],e,t);if(typeof n[".sv"]=="object")return mp(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},_p=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},mp=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},yp=function(n,e,t,i){return cr(e,new lr(t,n),i)},vp=function(n,e,t){return cr(n,new ar(e),t)};function cr(n,e,t){const i=n.getPriority().val(),s=Eo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Eo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new z(a,X(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new z(s))),o.forEachChild(H,(a,l)=>{const c=cr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ur{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function hr(n,e){let t=e instanceof U?e:new U(e),i=n,s=x(t);for(;s!==null;){const r=Nt(i.node.children,s)||{children:{},childCount:0};i=new ur(s,i,r),t=$(t),s=x(t)}return i}function $t(n){return n.node.value}function xl(n,e){n.node.value=e,As(n)}function Dl(n){return n.node.childCount>0}function wp(n){return $t(n)===void 0&&!Dl(n)}function Oi(n,e){re(n.node.children,(t,i)=>{e(new ur(t,n,i))})}function Ml(n,e,t,i){t&&!i&&e(n),Oi(n,s=>{Ml(s,e,!0,i)}),t&&i&&e(n)}function bp(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function xn(n){return new U(n.parent===null?n.name:xn(n.parent)+"/"+n.name)}function As(n){n.parent!==null&&Ip(n.parent,n.name,n)}function Ip(n,e,t){const i=wp(t),s=Oe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,As(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,As(n))}/**
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
 */const Ep=/[\[\].#$\/\u0000-\u001F\u007F]/,Cp=/[\[\].#$\u0000-\u001F\u007F]/,es=10*1024*1024,Ll=function(n){return typeof n=="string"&&n.length!==0&&!Ep.test(n)},Fl=function(n){return typeof n=="string"&&n.length!==0&&!Cp.test(n)},Tp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fl(n)},Ul=function(n,e,t){const i=t instanceof U?new $d(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ge(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ge(i)+" with contents = "+e.toString());if(Wa(e))throw new Error(n+"contains "+e.toString()+" "+Ge(i));if(typeof e=="string"&&e.length>es/3&&Ti(e)>es)throw new Error(n+"contains a string greater than "+es+" utf8 bytes "+Ge(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ll(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ge(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wd(i,o),Ul(n,a,i),Hd(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ge(i)+" in addition to actual children.")}},$l=function(n,e,t,i){if(!(i&&t===void 0)&&!Fl(t))throw new Error(Na(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$l(n,e,t,i)},kp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Tp(t))throw new Error(Na(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Rp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wl(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!zs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Hl(n,e,t){Wl(n,t),Bl(n,i=>zs(i,e))}function _t(n,e,t){Wl(n,t),Bl(n,i=>pe(i,e)||pe(e,i))}function Bl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Ap(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ap(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Qe&&J("event: "+t.toString()),Nn(i)}}}/**
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
 */const Np="repo_interrupt",Pp=25;class Op{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ui(),this.transactionQueueTree_=new ur,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xp(n,e,t){if(n.stats_=js(n.repoInfo_),n.forceRestClient_||ld())n.server_=new ci(n.repoInfo_,(i,s,r,o)=>{Co(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>To(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ae(n.repoInfo_,e,(i,s,r,o)=>{Co(n,i,s,r,o)},i=>{To(n,i)},i=>{Mp(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=gd(n.repoInfo_,()=>new gf(n.stats_,n.server_)),n.infoData_=new uf,n.infoSyncTree_=new bo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ni(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dr(n,"connected",!1),n.serverSyncTree_=new bo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);_t(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Dp(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function jl(n){return gp({timestamp:Dp(n)})}function Co(n,e,t,i,s){n.dataUpdateCount++;const r=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=si(t,c=>X(c));o=up(n.serverSyncTree_,r,l,s)}else{const l=X(t);o=cp(n.serverSyncTree_,r,l,s)}else if(i){const l=si(t,c=>X(c));o=op(n.serverSyncTree_,r,l)}else{const l=X(t);o=Ni(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=pr(n,r)),_t(n.eventQueue_,a,o)}function To(n,e){dr(n,"connected",e),e===!1&&Fp(n)}function Mp(n,e){re(e,(t,i)=>{dr(n,t,i)})}function dr(n,e,t){const i=new U("/.info/"+e),s=X(t);n.infoData_.updateSnapshot(i,s);const r=Ni(n.infoSyncTree_,i,s);_t(n.eventQueue_,i,r)}function Lp(n){return n.nextWriteId_++}function Fp(n){Vl(n,"onDisconnectEvents");const e=jl(n),t=ui();Is(n.onDisconnect_,M(),(s,r)=>{const o=yp(s,r,n.serverSyncTree_,e);gl(t,s,o)});let i=[];Is(t,M(),(s,r)=>{i=i.concat(Ni(n.serverSyncTree_,s,r));const o=Bp(n,s);pr(n,o)}),n.onDisconnect_=ui(),_t(n.eventQueue_,M(),i)}function Up(n,e,t){let i;x(e._path)===".info"?i=Io(n.infoSyncTree_,e,t):i=Io(n.serverSyncTree_,e,t),Hl(n.eventQueue_,e._path,i)}function So(n,e,t){let i;x(e._path)===".info"?i=Rs(n.infoSyncTree_,e,t):i=Rs(n.serverSyncTree_,e,t),Hl(n.eventQueue_,e._path,i)}function $p(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Np)}function Vl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),J(t,...e)}function ql(n,e,t){return Al(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function fr(n,e=n.transactionQueueTree_){if(e||xi(n,e),$t(e)){const t=Gl(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Wp(n,xn(e),t)}else Dl(e)&&Oi(e,t=>{fr(n,t)})}function Wp(n,e,t){const i=t.map(c=>c.currentWriteId),s=ql(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ie(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Vl(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(It(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();xi(n,hr(n.transactionQueueTree_,e)),fr(n,n.transactionQueueTree_),_t(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Nn(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ae("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}pr(n,e)}},o)}function pr(n,e){const t=zl(n,e),i=xn(t),s=Gl(n,t);return Hp(n,s,i),i}function Hp(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ie(t,l.path);let h=!1,u;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Pp)h=!0,u="maxretry",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else{const d=ql(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ul("transaction failed: Data returned ",p,l.path);let w=X(p);typeof p=="object"&&p!=null&&Oe(p,".priority")||(w=w.updatePriority(d.getPriority()));const v=l.currentWriteId,E=jl(n),g=vp(w,d,E);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=g,l.currentWriteId=Lp(n),o.splice(o.indexOf(v),1),s=s.concat(rp(n.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(It(n.serverSyncTree_,v,!0))}else h=!0,u="nodata",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0))}_t(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}xi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Nn(i[a]);fr(n,n.transactionQueueTree_)}function zl(n,e){let t,i=n.transactionQueueTree_;for(t=x(e);t!==null&&$t(i)===void 0;)i=hr(i,t),e=$(e),t=x(e);return i}function Gl(n,e){const t=[];return Kl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Kl(n,e,t){const i=$t(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Oi(e,s=>{Kl(n,s,t)})}function xi(n,e){const t=$t(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,xl(e,t.length>0?t:void 0)}Oi(e,i=>{xi(n,i)})}function Bp(n,e){const t=xn(zl(n,e)),i=hr(n.transactionQueueTree_,e);return bp(i,s=>{ts(n,s)}),ts(n,i),Ml(i,s=>{ts(n,s)}),t}function ts(n,e){const t=$t(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(It(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xl(e,void 0):t.length=r+1,_t(n.eventQueue_,xn(e),s);for(let o=0;o<i.length;o++)Nn(i[o])}}/**
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
 */function jp(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Vp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ae(`Invalid query segment '${t}' in query '${n}'`)}return e}const ko=function(n,e){const t=qp(n),i=t.namespace;t.domain==="firebase.com"&&et(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new dd(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new U(t.pathString)}},qp=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=jp(n.substring(h,u)));const d=Vp(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Yl{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}}class Ql{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:rl(this._path)}get ref(){return new xe(this._repo,this._path)}get _queryIdentifier(){const e=co(this._queryParams),t=Hs(e);return t==="{}"?"default":t}get _queryObject(){return co(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof gr))return!1;const t=this._repo===e._repo,i=zs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ud(this._path)}}class xe extends gr{constructor(e,t){super(e,t,new Qs,!1)}get parent(){const e=al(this._path);return e===null?null:new xe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new U(e),i=ye(this.ref,e);return new bn(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new bn(s,ye(this.ref,i),H)))}hasChild(e){const t=new U(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gp(n,e){return n=ve(n),n._checkNotDeleted("ref"),e!==void 0?ye(n._root,e):n._root}function ye(n,e){return n=ve(n),x(n._path)===null?Sp("child","path",e,!1):$l("child","path",e,!1),new xe(n._repo,V(n._path,e))}class _r{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Yl("value",this,new bn(e.snapshotNode,new xe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ql(this,e,t):null}matches(e){return e instanceof _r?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class mr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ql(this,e,t):null}createEvent(e,t){I(e.childName!=null,"Child events should have a childName.");const i=ye(new xe(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Yl(e.type,this,new bn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof mr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Kp(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,u)=>{So(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new zp(t,r||void 0),a=e==="value"?new _r(o):new mr(e,o);return Up(n._repo,n,a),()=>So(n._repo,n,a)}function Jl(n,e,t,i){return Kp(n,"value",e,t,i)}Qf(xe);np(xe);/**
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
 */const Yp="FIREBASE_DATABASE_EMULATOR_HOST",Ns={};let Qp=!1;function Jp(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),J("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ko(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[Yp]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ko(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new vs(vs.OWNER):new ud(n.name,n.options,e);kp("Invalid Firebase Database URL",o),D(o.path)||et("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Zp(a,n,h,new cd(n.name,t));return new eg(u,n)}function Xp(n,e){const t=Ns[e];(!t||t[n.key]!==n)&&et(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$p(n),delete t[n.key]}function Zp(n,e,t,i){let s=Ns[e.name];s||(s={},Ns[e.name]=s);let r=s[n.toURLString()];return r&&et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Op(n,Qp,t,i),s[n.toURLString()]=r,r}class eg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xe(this._repo,M())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&et("Cannot call "+e+" on a deleted database.")}}function tg(n=Ws(),e){return pt(n,"database").getImmediate({identifier:e})}/**
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
 */function ng(n){Kh(kn),Ce(new me("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Jp(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ce(zr,Gr,n),ce(zr,Gr,"esm2017")}Ae.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ae.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ng();var ig=typeof global=="object"&&global&&global.Object===Object&&global,sg=ig,rg=typeof self=="object"&&self&&self.Object===Object&&self,og=sg||rg||Function("return this")(),yr=og,ag=yr.Symbol,yi=ag,Xl=Object.prototype,lg=Xl.hasOwnProperty,cg=Xl.toString,Qt=yi?yi.toStringTag:void 0;function ug(n){var e=lg.call(n,Qt),t=n[Qt];try{n[Qt]=void 0;var i=!0}catch{}var s=cg.call(n);return i&&(e?n[Qt]=t:delete n[Qt]),s}var hg=Object.prototype,dg=hg.toString;function fg(n){return dg.call(n)}var pg="[object Null]",gg="[object Undefined]",Ro=yi?yi.toStringTag:void 0;function _g(n){return n==null?n===void 0?gg:pg:Ro&&Ro in Object(n)?ug(n):fg(n)}function Zl(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var mg="[object AsyncFunction]",yg="[object Function]",vg="[object GeneratorFunction]",wg="[object Proxy]";function bg(n){if(!Zl(n))return!1;var e=_g(n);return e==yg||e==vg||e==mg||e==wg}var Ig=yr["__core-js_shared__"],ns=Ig,Ao=function(){var n=/[^.]+$/.exec(ns&&ns.keys&&ns.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Eg(n){return!!Ao&&Ao in n}var Cg=Function.prototype,Tg=Cg.toString;function Sg(n){if(n!=null){try{return Tg.call(n)}catch{}try{return n+""}catch{}}return""}var kg=/[\\^$.*+?()[\]{}|]/g,Rg=/^\[object .+?Constructor\]$/,Ag=Function.prototype,Ng=Object.prototype,Pg=Ag.toString,Og=Ng.hasOwnProperty,xg=RegExp("^"+Pg.call(Og).replace(kg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Dg(n){if(!Zl(n)||Eg(n))return!1;var e=bg(n)?xg:Rg;return e.test(Sg(n))}function Mg(n,e){return n==null?void 0:n[e]}function ec(n,e){var t=Mg(n,e);return Dg(t)?t:void 0}function Lg(n,e){return n===e||n!==n&&e!==e}var Fg=ec(Object,"create"),In=Fg;function Ug(){this.__data__=In?In(null):{},this.size=0}function $g(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Wg="__lodash_hash_undefined__",Hg=Object.prototype,Bg=Hg.hasOwnProperty;function jg(n){var e=this.__data__;if(In){var t=e[n];return t===Wg?void 0:t}return Bg.call(e,n)?e[n]:void 0}var Vg=Object.prototype,qg=Vg.hasOwnProperty;function zg(n){var e=this.__data__;return In?e[n]!==void 0:qg.call(e,n)}var Gg="__lodash_hash_undefined__";function Kg(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=In&&e===void 0?Gg:e,this}function rt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}rt.prototype.clear=Ug;rt.prototype.delete=$g;rt.prototype.get=jg;rt.prototype.has=zg;rt.prototype.set=Kg;function Yg(){this.__data__=[],this.size=0}function Di(n,e){for(var t=n.length;t--;)if(Lg(n[t][0],e))return t;return-1}var Qg=Array.prototype,Jg=Qg.splice;function Xg(n){var e=this.__data__,t=Di(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Jg.call(e,t,1),--this.size,!0}function Zg(n){var e=this.__data__,t=Di(e,n);return t<0?void 0:e[t][1]}function e_(n){return Di(this.__data__,n)>-1}function t_(n,e){var t=this.__data__,i=Di(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function Wt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Wt.prototype.clear=Yg;Wt.prototype.delete=Xg;Wt.prototype.get=Zg;Wt.prototype.has=e_;Wt.prototype.set=t_;var n_=ec(yr,"Map"),i_=n_;function s_(){this.size=0,this.__data__={hash:new rt,map:new(i_||Wt),string:new rt}}function r_(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Mi(n,e){var t=n.__data__;return r_(e)?t[typeof e=="string"?"string":"hash"]:t.map}function o_(n){var e=Mi(this,n).delete(n);return this.size-=e?1:0,e}function a_(n){return Mi(this,n).get(n)}function l_(n){return Mi(this,n).has(n)}function c_(n,e){var t=Mi(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function mt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}mt.prototype.clear=s_;mt.prototype.delete=o_;mt.prototype.get=a_;mt.prototype.has=l_;mt.prototype.set=c_;var u_="Expected a function";function Dn(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(u_);var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=t.cache;if(r.has(s))return r.get(s);var o=n.apply(this,i);return t.cache=r.set(s,o)||r,o};return t.cache=new(Dn.Cache||mt),t}Dn.Cache=mt;var h_="firebase",d_="9.6.11";/**
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
 */ce(h_,d_,"app");const tc="@firebase/installations",vr="0.5.8";/**
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
 */const nc=1e4,ic=`w:${vr}`,sc="FIS_v2",f_="https://firebaseinstallations.googleapis.com/v1",p_=60*60*1e3,g_="installations",__="Installations";/**
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
 */const m_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ot=new ft(g_,__,m_);function rc(n){return n instanceof qe&&n.code.includes("request-failed")}/**
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
 */function oc({projectId:n}){return`${f_}/projects/${n}/installations`}function ac(n){return{token:n.token,requestStatus:2,expiresIn:v_(n.expiresIn),creationTime:Date.now()}}async function lc(n,e){const i=(await e.json()).error;return ot.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function cc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function y_(n,{refreshToken:e}){const t=cc(n);return t.append("Authorization",w_(e)),t}async function uc(n){const e=await n();return e.status>=500&&e.status<600?n():e}function v_(n){return Number(n.replace("s","000"))}function w_(n){return`${sc} ${n}`}/**
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
 */async function b_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=oc(n),s=cc(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:sc,appId:n.appId,sdkVersion:ic},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await uc(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:ac(c.authToken)}}else throw await lc("Create Installation",l)}/**
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
 */function hc(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function I_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const E_=/^[cdef][\w-]{21}$/,Ps="";function C_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=T_(n);return E_.test(t)?t:Ps}catch{return Ps}}function T_(n){return I_(n).substr(0,22)}/**
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
 */function Li(n){return`${n.appName}!${n.appId}`}/**
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
 */const dc=new Map;function fc(n,e){const t=Li(n);pc(t,e),S_(t,e)}function pc(n,e){const t=dc.get(n);if(!!t)for(const i of t)i(e)}function S_(n,e){const t=k_();t&&t.postMessage({key:n,fid:e}),R_()}let Ye=null;function k_(){return!Ye&&"BroadcastChannel"in self&&(Ye=new BroadcastChannel("[Firebase] FID Change"),Ye.onmessage=n=>{pc(n.data.key,n.data.fid)}),Ye}function R_(){dc.size===0&&Ye&&(Ye.close(),Ye=null)}/**
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
 */const A_="firebase-installations-database",N_=1,at="firebase-installations-store";let is=null;function wr(){return is||(is=xa(A_,N_,(n,e)=>{switch(e){case 0:n.createObjectStore(at)}})),is}async function vi(n,e){const t=Li(n),s=(await wr()).transaction(at,"readwrite"),r=s.objectStore(at),o=await r.get(t);return await r.put(e,t),await s.complete,(!o||o.fid!==e.fid)&&fc(n,e.fid),e}async function gc(n){const e=Li(n),i=(await wr()).transaction(at,"readwrite");await i.objectStore(at).delete(e),await i.complete}async function Fi(n,e){const t=Li(n),s=(await wr()).transaction(at,"readwrite"),r=s.objectStore(at),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.complete,a&&(!o||o.fid!==a.fid)&&fc(n,a.fid),a}/**
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
 */async function br(n){let e;const t=await Fi(n.appConfig,i=>{const s=P_(i),r=O_(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Ps?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function P_(n){const e=n||{fid:C_(),registrationStatus:0};return _c(e)}function O_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ot.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=x_(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:D_(n)}:{installationEntry:e}}async function x_(n,e){try{const t=await b_(n,e);return vi(n.appConfig,t)}catch(t){throw rc(t)&&t.customData.serverCode===409?await gc(n.appConfig):await vi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function D_(n){let e=await No(n.appConfig);for(;e.registrationStatus===1;)await hc(100),e=await No(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await br(n);return i||t}return e}function No(n){return Fi(n,e=>{if(!e)throw ot.create("installation-not-found");return _c(e)})}function _c(n){return M_(n)?{fid:n.fid,registrationStatus:0}:n}function M_(n){return n.registrationStatus===1&&n.registrationTime+nc<Date.now()}/**
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
 */async function L_({appConfig:n,heartbeatServiceProvider:e},t){const i=F_(n,t),s=y_(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:ic,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await uc(()=>fetch(i,a));if(l.ok){const c=await l.json();return ac(c)}else throw await lc("Generate Auth Token",l)}function F_(n,{fid:e}){return`${oc(n)}/${e}/authTokens:generate`}/**
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
 */async function Ir(n,e=!1){let t;const i=await Fi(n.appConfig,r=>{if(!mc(r))throw ot.create("not-registered");const o=r.authToken;if(!e&&W_(o))return r;if(o.requestStatus===1)return t=U_(n,e),r;{if(!navigator.onLine)throw ot.create("app-offline");const a=B_(r);return t=$_(n,a),a}});return t?await t:i.authToken}async function U_(n,e){let t=await Po(n.appConfig);for(;t.authToken.requestStatus===1;)await hc(100),t=await Po(n.appConfig);const i=t.authToken;return i.requestStatus===0?Ir(n,e):i}function Po(n){return Fi(n,e=>{if(!mc(e))throw ot.create("not-registered");const t=e.authToken;return j_(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $_(n,e){try{const t=await L_(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await vi(n.appConfig,i),t}catch(t){if(rc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await gc(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vi(n.appConfig,i)}throw t}}function mc(n){return n!==void 0&&n.registrationStatus===2}function W_(n){return n.requestStatus===2&&!H_(n)}function H_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+p_}function B_(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function j_(n){return n.requestStatus===1&&n.requestTime+nc<Date.now()}/**
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
 */async function V_(n){const e=n,{installationEntry:t,registrationPromise:i}=await br(e);return i?i.catch(console.error):Ir(e).catch(console.error),t.fid}/**
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
 */async function q_(n,e=!1){const t=n;return await z_(t),(await Ir(t,e)).token}async function z_(n){const{registrationPromise:e}=await br(n);e&&await e}/**
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
 */function G_(n){if(!n||!n.options)throw ss("App Configuration");if(!n.name)throw ss("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ss(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ss(n){return ot.create("missing-app-config-values",{valueName:n})}/**
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
 */const yc="installations",K_="installations-internal",Y_=n=>{const e=n.getProvider("app").getImmediate(),t=G_(e),i=pt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Q_=n=>{const e=n.getProvider("app").getImmediate(),t=pt(e,yc).getImmediate();return{getId:()=>V_(t),getToken:s=>q_(t,s)}};function J_(){Ce(new me(yc,Y_,"PUBLIC")),Ce(new me(K_,Q_,"PRIVATE"))}J_();ce(tc,vr);ce(tc,vr,"esm2017");/**
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
 */const wi="analytics",X_="firebase_id",Z_="origin",em=60*1e3,tm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vc="https://www.googletagmanager.com/gtag/js";/**
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
 */const le=new Si("@firebase/analytics");/**
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
 */function wc(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function nm(n,e){const t=document.createElement("script");t.src=`${vc}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function im(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function sm(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await wc(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){le.error(a)}n("config",s,r)}async function rm(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await wc(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){le.error(r)}}function om(n,e,t,i){async function s(r,o,a){try{r==="event"?await rm(n,e,t,o,a):r==="config"?await sm(n,e,t,i,o,a):n("set",o)}catch(l){le.error(l)}}return s}function am(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=om(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function lm(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(vc))return e;return null}/**
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
 */const cm={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ue=new ft("analytics","Analytics",cm);/**
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
 */const um=30,hm=1e3;class dm{constructor(e={},t=hm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bc=new dm;function fm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function pm(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:fm(i)},r=tm.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function gm(n,e=bc,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw ue.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ue.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ym;return setTimeout(async()=>{a.abort()},t!==void 0?t:em),Ic({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ic(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=bc){const{appId:r,measurementId:o}=n;try{await _m(i,e)}catch(a){if(o)return le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await pm(n);return s.deleteThrottleMetadata(r),a}catch(a){if(!mm(a)){if(s.deleteThrottleMetadata(r),o)return le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?$r(t,s.intervalMillis,um):$r(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(r,c),le.debug(`Calling attemptFetch again in ${l} millis`),Ic(n,c,i,s)}}function _m(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(ue.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mm(n){if(!(n instanceof qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ym{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function vm(){if(ka())try{await Ra()}catch(n){return le.warn(ue.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return le.warn(ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wm(n,e,t,i,s,r,o){var a;const l=gm(n);l.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&le.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>le.error(p)),e.push(l);const c=vm().then(p=>{if(p)return i.getId()}),[h,u]=await Promise.all([l,c]);lm()||nm(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Z_]="firebase",d.update=!0,u!=null&&(d[X_]=u),s("config",h.measurementId,d),h.measurementId}/**
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
 */class bm{constructor(e){this.app=e}_delete(){return delete on[this.app.options.appId],Promise.resolve()}}let on={},Oo=[];const xo={};let rs="dataLayer",Im="gtag",Do,Ec,Mo=!1;function Em(){const n=[];if(Ca()&&n.push("This is a browser extension environment."),Uu()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=ue.create("invalid-analytics-context",{errorInfo:e});le.warn(t.message)}}function Cm(n,e,t){Em();const i=n.options.appId;if(!i)throw ue.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ue.create("no-api-key");if(on[i]!=null)throw ue.create("already-exists",{id:i});if(!Mo){im(rs);const{wrappedGtag:r,gtagCore:o}=am(on,Oo,xo,rs,Im);Ec=r,Do=o,Mo=!0}return on[i]=wm(n,Oo,xo,e,Do,rs,t),new bm(n)}/**
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
 */async function Tm(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}function Sm(n=Ws()){n=ve(n);const e=pt(n,wi);return e.isInitialized()?e.getImmediate():km(n)}function km(n,e={}){const t=pt(n,wi);if(t.isInitialized()){const s=t.getImmediate();if(pn(e,t.getOptions()))return s;throw ue.create("already-initialized")}return t.initialize({options:e})}function Rm(n,e,t,i){n=ve(n),Tm(Ec,on[n.app.options.appId],e,t,i).catch(s=>le.error(s))}const Lo="@firebase/analytics",Fo="0.7.8";function Am(){Ce(new me(wi,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Cm(i,s,t)},"PUBLIC")),Ce(new me("analytics-internal",n,"PRIVATE")),ce(Lo,Fo),ce(Lo,Fo,"esm2017");function n(e){try{const t=e.getProvider(wi).getImmediate();return{logEvent:(i,s,r)=>Rm(t,i,s,r)}}catch(t){throw ue.create("interop-component-reg-failed",{reason:t})}}}Am();function Er(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Cc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nm=Cc,Tc=new ft("auth","Firebase",Cc());/**
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
 */const Uo=new Si("@firebase/auth");function Xn(n,...e){Uo.logLevel<=F.ERROR&&Uo.error(`Auth (${kn}): ${n}`,...e)}/**
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
 */function Ne(n,...e){throw Cr(n,...e)}function Ie(n,...e){return Cr(n,...e)}function Pm(n,e,t){const i=Object.assign(Object.assign({},Nm()),{[e]:t});return new ft("auth","Firebase",i).create(e,{appName:n.name})}function Cr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Tc.create(n,...e)}function N(n,e,...t){if(!n)throw Cr(e,...t)}function ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xn(e),new Error(e)}function Pe(n,e){n||ke(e)}/**
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
 */const $o=new Map;function Re(n){Pe(n instanceof Function,"Expected a class definition");let e=$o.get(n);return e?(Pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$o.set(n,e),e)}/**
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
 */function Om(n,e){const t=pt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(pn(r,e!=null?e:{}))return s;Ne(s,"already-initialized")}return t.initialize({options:e})}function xm(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Re);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Os(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Dm(){return Wo()==="http:"||Wo()==="https:"}function Wo(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Mm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dm()||Ca()||"connection"in navigator)?navigator.onLine:!0}function Lm(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pe(t>e,"Short delay should be less than long delay!"),this.isMobile=Us()||Ta()}get(){return Mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tr(n,e){Pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Um=new Mn(3e4,6e4);function kc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ui(n,e,t,i,s={}){return Rc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ft(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Sc.fetch()(Nc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Rc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Fm),e);try{const s=new $m(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw os(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw os(n,"email-already-in-use",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pm(n,h,c);Ne(n,h)}}catch(s){if(s instanceof qe)throw s;Ne(n,"network-request-failed")}}async function Ac(n,e,t,i,s={}){const r=await Ui(n,e,t,i,s);return"mfaPendingCredential"in r&&Ne(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Nc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Tr(n.config,s):`${n.config.apiScheme}://${s}`}class $m{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ie(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function os(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ie(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Wm(n,e){return Ui(n,"POST","/v1/accounts:delete",e)}async function Hm(n,e){return Ui(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function an(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bm(n,e=!1){const t=ve(n),i=await t.getIdToken(e),s=Sr(i);N(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:an(as(s.auth_time)),issuedAtTime:an(as(s.iat)),expirationTime:an(as(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function as(n){return Number(n)*1e3}function Sr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const s=fs(t);return s?JSON.parse(s):(Xn("Failed to decode base64 JWT payload"),null)}catch(s){return Xn("Caught error parsing JWT payload as JSON",s),null}}function jm(n){const e=Sr(n);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function En(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qe&&Vm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Vm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=an(this.lastLoginAt),this.creationTime=an(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await En(n,Hm(t,{idToken:i}));N(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Km(r.providerUserInfo):[],a=Gm(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Pc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function zm(n){const e=ve(n);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Km(n){return n.map(e=>{var{providerId:t}=e,i=Er(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Ym(n,e){const t=await Rc(n,{},async()=>{const i=Ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Nc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ym(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Cn;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(N(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(N(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function Me(n,e){N(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Je{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Er(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Pc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bm(this,e)}reload(){return zm(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await En(this,Wm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,h;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,g=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:y,isAnonymous:m,providerData:b,stsTokenManager:C}=t;N(f&&C,e,"internal-error");const A=Cn.fromJSON(this.name,C);N(typeof f=="string",e,"internal-error"),Me(u,e.name),Me(d,e.name),N(typeof y=="boolean",e,"internal-error"),N(typeof m=="boolean",e,"internal-error"),Me(p,e.name),Me(w,e.name),Me(_,e.name),Me(v,e.name),Me(E,e.name),Me(g,e.name);const T=new Je({uid:f,auth:e,email:d,emailVerified:y,displayName:u,isAnonymous:m,photoURL:w,phoneNumber:p,tenantId:_,stsTokenManager:A,createdAt:E,lastLoginAt:g});return b&&Array.isArray(b)&&(T.providerData=b.map(L=>Object.assign({},L))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,t,i=!1){const s=new Cn;s.updateFromServerResponse(t);const r=new Je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bi(r),r}}/**
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
 */class Oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Oc.type="NONE";const Ho=Oc;/**
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
 */function Zn(n,e,t){return`firebase:${n}:${e}:${t}`}class Rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Zn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Zn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Rt(Re(Ho),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Re(Ho);const o=Zn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const u=Je._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Rt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Rt(r,e,i))}}/**
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
 */function Bo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fc(e))return"Blackberry";if(Uc(e))return"Webos";if(kr(e))return"Safari";if((e.includes("chrome/")||Dc(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xc(n=te()){return/firefox\//i.test(n)}function kr(n=te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dc(n=te()){return/crios\//i.test(n)}function Mc(n=te()){return/iemobile/i.test(n)}function Lc(n=te()){return/android/i.test(n)}function Fc(n=te()){return/blackberry/i.test(n)}function Uc(n=te()){return/webos/i.test(n)}function $i(n=te()){return/iphone|ipad|ipod/i.test(n)}function Qm(n=te()){var e;return $i(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jm(){return Fu()&&document.documentMode===10}function $c(n=te()){return $i(n)||Lc(n)||Uc(n)||Fc(n)||/windows phone/i.test(n)||Mc(n)}function Xm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wc(n,e=[]){let t;switch(n){case"Browser":t=Bo(te());break;case"Worker":t=`${Bo(te())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${i}`}/**
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
 */class Zm{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jo(this),this.idTokenSubscription=new jo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ve(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function Rr(n){return ve(n)}class jo{constructor(e){this.auth=e,this.observer=null,this.addObserver=qu(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,t){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}/**
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
 */async function At(n,e){return Ac(n,"POST","/v1/accounts:signInWithIdp",kc(n,e))}/**
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
 */const ey="http://localhost";class lt extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Er(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new lt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return At(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,At(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,At(e,t)}buildRequest(){const e={requestUri:ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ft(t)}return e}}/**
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
 */class Bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ln extends Bc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends Ln{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Ue extends Ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ue.credential(t,i)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
 */class $e extends Ln{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
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
 */class We extends Ln{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return We.credential(t,i)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
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
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Je._fromIdTokenResponse(e,i,s),o=Vo(i);return new ct({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Vo(i);return new ct({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Vo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ii extends qe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ii(e,t,i,s)}}function jc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(n,r,e,i):r})}async function ty(n,e,t=!1){const i=await En(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ct._forOperation(n,"link",i)}/**
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
 */async function ny(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await En(n,jc(i,s,e,n),t);N(r.idToken,i,"internal-error");const o=Sr(r.idToken);N(o,i,"internal-error");const{sub:a}=o;return N(n.uid===a,i,"user-mismatch"),ct._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ne(i,"user-mismatch"),r}}/**
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
 */async function iy(n,e,t=!1){const i="signIn",s=await jc(n,i,e),r=await ct._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}/**
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
 */async function sy(n,e){return Ac(n,"POST","/v1/accounts:signInWithCustomToken",kc(n,e))}/**
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
 */async function ry(n,e){const t=Rr(n),i=await sy(t,{token:e,returnSecureToken:!0}),s=await ct._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function Vc(n,e,t,i){return ve(n).onAuthStateChanged(e,t,i)}function oy(n){return ve(n).signOut()}const Ei="__sak";/**
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
 */class qc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ei,"1"),this.storage.removeItem(Ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ay(){const n=te();return kr(n)||$i(n)}const ly=1e3,cy=10;class zc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ay()&&Xm(),this.fallbackToPolling=$c(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Jm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cy):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zc.type="LOCAL";const uy=zc;/**
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
 */class Gc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gc.type="SESSION";const Kc=Gc;/**
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
 */function hy(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Wi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await hy(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wi.receivers=[];/**
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
 */function Ar(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class dy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ar("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ee(){return window}function fy(n){Ee().location.href=n}/**
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
 */function Yc(){return typeof Ee().WorkerGlobalScope!="undefined"&&typeof Ee().importScripts=="function"}async function py(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _y(){return Yc()?self:null}/**
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
 */const Qc="firebaseLocalStorageDb",my=1,Ci="firebaseLocalStorage",Jc="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hi(n,e){return n.transaction([Ci],e?"readwrite":"readonly").objectStore(Ci)}function yy(){const n=indexedDB.deleteDatabase(Qc);return new Fn(n).toPromise()}function xs(){const n=indexedDB.open(Qc,my);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ci,{keyPath:Jc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ci)?e(i):(i.close(),await yy(),e(await xs()))})})}async function qo(n,e,t){const i=Hi(n,!0).put({[Jc]:e,value:t});return new Fn(i).toPromise()}async function vy(n,e){const t=Hi(n,!1).get(e),i=await new Fn(t).toPromise();return i===void 0?null:i.value}function zo(n,e){const t=Hi(n,!0).delete(e);return new Fn(t).toPromise()}const wy=800,by=3;class Xc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>by)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wi._getInstance(_y()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await py(),!this.activeServiceWorker)return;this.sender=new dy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xs();return await qo(e,Ei,"1"),await zo(e,Ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>qo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>vy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Hi(s,!1).getAll();return new Fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xc.type="LOCAL";const Iy=Xc;/**
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
 */function Ey(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Cy(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ie("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Ey().appendChild(i)})}function Ty(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Mn(3e4,6e4);/**
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
 */function Sy(n,e){return e?Re(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nr extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,t){return At(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ky(n){return iy(n.auth,new Nr(n),n.bypassAuthState)}function Ry(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),ny(t,new Nr(n),n.bypassAuthState)}async function Ay(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),ty(t,new Nr(n),n.bypassAuthState)}/**
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
 */class Zc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ky;case"linkViaPopup":case"linkViaRedirect":return Ay;case"reauthViaPopup":case"reauthViaRedirect":return Ry;default:Ne(this.auth,"internal-error")}}resolve(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ny=new Mn(2e3,1e4);class Et extends Zc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const e=Ar();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ny.get())};e()}}Et.currentPopupAction=null;/**
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
 */const Py="pendingRedirect",ls=new Map;class Oy extends Zc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ls.get(this.auth._key());if(!e){try{const i=await xy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ls.set(this.auth._key(),e)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xy(n,e){const t=My(e),i=Dy(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Dy(n){return Re(n._redirectPersistence)}function My(n){return Zn(Py,n.config.apiKey,n.name)}async function Ly(n,e,t=!1){const i=Rr(n),s=Sy(i,e),o=await new Oy(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Fy=10*60*1e3;class Uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$y(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!eu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Go(e))}saveEventToCache(e){this.cachedEventUids.add(Go(e)),this.lastProcessedEventTime=Date.now()}}function Go(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $y(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eu(n);default:return!1}}/**
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
 */async function Wy(n,e={}){return Ui(n,"GET","/v1/projects",e)}/**
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
 */const Hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,By=/^https?/;async function jy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wy(n);for(const t of e)try{if(Vy(t))return}catch{}Ne(n,"unauthorized-domain")}function Vy(n){const e=Os(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!By.test(t))return!1;if(Hy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const qy=new Mn(3e4,6e4);function Ko(){const n=Ee().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zy(n){return new Promise((e,t)=>{var i,s,r;function o(){Ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ko(),t(Ie(n,"network-request-failed"))},timeout:qy.get()})}if(!((s=(i=Ee().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ee().gapi)===null||r===void 0)&&r.load)o();else{const a=Ty("iframefcb");return Ee()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Cy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ei=null,e})}let ei=null;function Gy(n){return ei=ei||zy(n),ei}/**
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
 */const Ky=new Mn(5e3,15e3),Yy="__/auth/iframe",Qy="emulator/auth/iframe",Jy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zy(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tr(e,Qy):`https://${n.config.authDomain}/${Yy}`,i={apiKey:e.apiKey,appName:n.name,v:kn},s=Xy.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ft(i).slice(1)}`}async function ev(n){const e=await Gy(n),t=Ee().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:Zy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=Ee().setTimeout(()=>{r(o)},Ky.get());function l(){Ee().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const tv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nv=500,iv=600,sv="_blank",rv="http://localhost";class Yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ov(n,e,t,i=nv,s=iv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=te().toLowerCase();t&&(a=Dc(c)?sv:t),xc(c)&&(e=e||rv,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(Qm(c)&&a!=="_self")return av(e||"",a),new Yo(null);const u=window.open(e||"",a,h);N(u,n,"popup-blocked");try{u.focus()}catch{}return new Yo(u)}function av(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const lv="__/auth/handler",cv="emulator/auth/handler";function Qo(n,e,t,i,s,r){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:kn,eventId:s};if(e instanceof Bc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ps(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ln){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uv(n)}?${Ft(a).slice(1)}`}function uv({config:n}){return n.emulator?Tr(n,cv):`https://${n.authDomain}/${lv}`}/**
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
 */const cs="webStorageSupport";class hv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=Ly}async _openPopup(e,t,i,s){var r;Pe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Qo(e,t,i,Os(),s);return ov(e,o,Ar())}async _openRedirect(e,t,i,s){return await this._originValidation(e),fy(Qo(e,t,i,Os(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Pe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ev(e),i=new Uy(e);return t.register("authEvent",s=>(N(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cs,{type:cs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[cs];o!==void 0&&t(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $c()||kr()||$i()}}const dv=hv;var Jo="@firebase/auth",Xo="0.19.12";/**
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
 */class fv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gv(n){Ce(new me("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{N(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(n)},h=new Zm(a,l,c);return xm(h,t),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ce(new me("auth-internal",e=>{const t=Rr(e.getProvider("auth").getImmediate());return(i=>new fv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce(Jo,Xo,pv(n)),ce(Jo,Xo,"esm2017")}/**
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
 */function _v(n=Ws()){const e=pt(n,"auth");return e.isInitialized()?e.getImmediate():Om(n,{popupRedirectResolver:dv,persistence:[Iy,uy,Kc]})}gv("Browser");const mv={apiKey:"AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0",authDomain:"showdownspace.firebaseapp.com",databaseURL:"https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"showdownspace",storageBucket:"showdownspace.appspot.com",messagingSenderId:"999073329546",appId:"1:999073329546:web:08df5e95a021605ca49873",measurementId:"G-9LV3C4S19C"},Pr=Uh(mv);Sm(Pr);const yv=tg(Pr),Un=_v(Pr),vv=new Promise(n=>{Vc(Un,e=>{n()})}),Ht=Gp(yv,"rooms/citw"),wv=ye(Ht,"config"),bv=ye(Ht,"refImage"),Iv=ye(wv,"stage"),Ev=ye(Ht,"profiles");function $n(n,e,t){return{subscribe:i=>{let s=!1;const r=Jl(n,o=>{i(e(o)),s=!0});return s||i(t),r}}}const Cv=$n(Iv,n=>{const e=[];return n.forEach(t=>{e.push(t.val())}),e},[]),Tv=$n(Ev,n=>{const e=[];return n.forEach(t=>{e.push(t.key)}),e},[]),tu=Dn(n=>{const e=ye(Ht,`publicSubmissions/${n}/data`);return $n(e,t=>{try{if(!t.val())return;const i=JSON.parse(String(t.val()));return i?{html:String(i.html),css:String(i.css),compiledCss:String(i.compiledCss)}:void 0}catch(i){return{html:"ERROR: "+i,css:"",compiledCss:""}}},void 0)}),Sv=Dn(n=>{const e=ye(Ht,`presence/${n}`);let t=0;return{subscribe:i=>{const s=()=>{i(new Date().getTime()<t+6e4?"online":"offline")};s();const r=Jl(e,a=>{t=+a.val()||0}),o=setInterval(s,3e3);return()=>{r(),clearInterval(o)}}}}),kv=Dn(n=>{const e=ye(Ht,`profiles/${n}`);return $n(e,t=>({name:t.child("name").val()||void 0}),{})}),Rv=$n(bv,n=>n.val()||"https://via.placeholder.com/540x720","https://via.placeholder.com/540x720");function Av(n){let e,t,i,s,r,o,a,l,c,h=n[0]+1+"",u,d,p,w;return s=new ya({props:{html:n[1].html,css:n[1].css}}),{c(){e=P("div"),t=P("div"),i=P("div"),Mt(s.$$.fragment),r=oe(),o=P("div"),a=P("span"),c=Be(`
    Contestant #`),u=Be(h),S(i,"class","absolute top-0 left-0 w-[540px] h-[720px] origin-top-left [transform:scale(49%)] pointer-events-none select-none"),S(t,"class","absolute inset-0 rounded overflow-hidden"),S(a,"class",l="align-middle inline-block w-3 h-3 "+(n[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full"),S(o,"class","absolute bottom-0 left-0 bg-sky-700 px-3 py-2 rounded-tr overflow-hidden"),S(e,"class","relative w-[264px] h-[352px] overflow-hidden rounded shadow-lg")},m(_,v){ne(_,e,v),R(e,t),R(t,i),ht(s,i,null),R(e,r),R(e,o),R(o,a),R(o,c),R(o,u),d=!0,p||(w=Xe(e,"click",n[8]),p=!0)},p(_,[v]){const E={};v&2&&(E.html=_[1].html),v&2&&(E.css=_[1].css),s.$set(E),(!d||v&4&&l!==(l="align-middle inline-block w-3 h-3 "+(_[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full"))&&S(a,"class",l),(!d||v&1)&&h!==(h=_[0]+1+"")&&Ms(u,h)},i(_){d||(B(s.$$.fragment,_),d=!0)},o(_){Z(s.$$.fragment,_),d=!1},d(_){_&&ee(e),dt(s),p=!1,w()}}}function Nv(n,e,t){let i,s,r,o,a,l=q,c=()=>(l(),l=ln(i,v=>t(6,a=v)),i),h,u=q,d=()=>(u(),u=ln(s,v=>t(7,h=v)),s);n.$$.on_destroy.push(()=>l()),n.$$.on_destroy.push(()=>u());let{uid:p}=e,{index:w}=e;function _(v){bu.call(this,n,v)}return n.$$set=v=>{"uid"in v&&t(5,p=v.uid),"index"in v&&t(0,w=v.index)},n.$$.update=()=>{n.$$.dirty&32&&c(t(4,i=tu(p))),n.$$.dirty&32&&d(t(3,s=Sv(p))),n.$$.dirty&128&&t(2,r=h),n.$$.dirty&64&&t(1,o=ma(a))},[w,o,r,s,i,p,a,h,_]}class nu extends Sn{constructor(e){super(),Tn(this,e,Nv,Av,Dt,{uid:5,index:0})}}var Zo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},iu={exports:{}};(function(n){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},a={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function g(f){return f instanceof l?new l(f.type,g(f.content),f.alias):Array.isArray(f)?f.map(g):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++r}),g.__id},clone:function g(f,y){y=y||{};var m,b;switch(a.util.type(f)){case"Object":if(b=a.util.objId(f),y[b])return y[b];m={},y[b]=m;for(var C in f)f.hasOwnProperty(C)&&(m[C]=g(f[C],y));return m;case"Array":return b=a.util.objId(f),y[b]?y[b]:(m=[],y[b]=m,f.forEach(function(A,T){m[T]=g(A,y)}),m);default:return f}},getLanguage:function(g){for(;g;){var f=s.exec(g.className);if(f)return f[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,f){g.className=g.className.replace(RegExp(s,"gi"),""),g.classList.add("language-"+f)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(m){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack)||[])[1];if(g){var f=document.getElementsByTagName("script");for(var y in f)if(f[y].src==g)return f[y]}return null}},isActive:function(g,f,y){for(var m="no-"+f;g;){var b=g.classList;if(b.contains(f))return!0;if(b.contains(m))return!1;g=g.parentElement}return!!y}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,f){var y=a.util.clone(a.languages[g]);for(var m in f)y[m]=f[m];return y},insertBefore:function(g,f,y,m){m=m||a.languages;var b=m[g],C={};for(var A in b)if(b.hasOwnProperty(A)){if(A==f)for(var T in y)y.hasOwnProperty(T)&&(C[T]=y[T]);y.hasOwnProperty(A)||(C[A]=b[A])}var L=m[g];return m[g]=C,a.languages.DFS(a.languages,function(j,he){he===L&&j!=g&&(this[j]=C)}),C},DFS:function g(f,y,m,b){b=b||{};var C=a.util.objId;for(var A in f)if(f.hasOwnProperty(A)){y.call(f,A,f[A],m||A);var T=f[A],L=a.util.type(T);L==="Object"&&!b[C(T)]?(b[C(T)]=!0,g(T,y,null,b)):L==="Array"&&!b[C(T)]&&(b[C(T)]=!0,g(T,y,A,b))}}},plugins:{},highlightAll:function(g,f){a.highlightAllUnder(document,g,f)},highlightAllUnder:function(g,f,y){var m={callback:y,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",m),m.elements=Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)),a.hooks.run("before-all-elements-highlight",m);for(var b=0,C;C=m.elements[b++];)a.highlightElement(C,f===!0,m.callback)},highlightElement:function(g,f,y){var m=a.util.getLanguage(g),b=a.languages[m];a.util.setLanguage(g,m);var C=g.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(C,m);var A=g.textContent,T={element:g,language:m,grammar:b,code:A};function L(he){T.highlightedCode=he,a.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,a.hooks.run("after-highlight",T),a.hooks.run("complete",T),y&&y.call(T.element)}if(a.hooks.run("before-sanity-check",T),C=T.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!T.code){a.hooks.run("complete",T),y&&y.call(T.element);return}if(a.hooks.run("before-highlight",T),!T.grammar){L(a.util.encode(T.code));return}if(f&&i.Worker){var j=new Worker(a.filename);j.onmessage=function(he){L(he.data)},j.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else L(a.highlight(T.code,T.grammar,T.language))},highlight:function(g,f,y){var m={code:g,grammar:f,language:y};if(a.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=a.tokenize(m.code,m.grammar),a.hooks.run("after-tokenize",m),l.stringify(a.util.encode(m.tokens),m.language)},tokenize:function(g,f){var y=f.rest;if(y){for(var m in y)f[m]=y[m];delete f.rest}var b=new u;return d(b,b.head,g),h(g,b,f,b.head,0),w(b)},hooks:{all:{},add:function(g,f){var y=a.hooks.all;y[g]=y[g]||[],y[g].push(f)},run:function(g,f){var y=a.hooks.all[g];if(!(!y||!y.length))for(var m=0,b;b=y[m++];)b(f)}},Token:l};i.Prism=a;function l(g,f,y,m){this.type=g,this.content=f,this.alias=y,this.length=(m||"").length|0}l.stringify=function g(f,y){if(typeof f=="string")return f;if(Array.isArray(f)){var m="";return f.forEach(function(L){m+=g(L,y)}),m}var b={type:f.type,content:g(f.content,y),tag:"span",classes:["token",f.type],attributes:{},language:y},C=f.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(b.classes,C):b.classes.push(C)),a.hooks.run("wrap",b);var A="";for(var T in b.attributes)A+=" "+T+'="'+(b.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+A+">"+b.content+"</"+b.tag+">"};function c(g,f,y,m){g.lastIndex=f;var b=g.exec(y);if(b&&m&&b[1]){var C=b[1].length;b.index+=C,b[0]=b[0].slice(C)}return b}function h(g,f,y,m,b,C){for(var A in y)if(!(!y.hasOwnProperty(A)||!y[A])){var T=y[A];T=Array.isArray(T)?T:[T];for(var L=0;L<T.length;++L){if(C&&C.cause==A+","+L)return;var j=T[L],he=j.inside,Y=!!j.lookbehind,we=!!j.greedy,Bt=j.alias;if(we&&!j.pattern.global){var Wn=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,Wn+"g")}for(var jt=j.pattern||j,Q=m.next,be=b;Q!==f.tail&&!(C&&be>=C.reach);be+=Q.value.length,Q=Q.next){var yt=Q.value;if(f.length>g.length)return;if(!(yt instanceof l)){var Hn=1,de;if(we){if(de=c(jt,be,g,Y),!de||de.index>=g.length)break;var Bn=de.index,ru=de.index+de[0].length,De=be;for(De+=Q.value.length;Bn>=De;)Q=Q.next,De+=Q.value.length;if(De-=Q.value.length,be=De,Q.value instanceof l)continue;for(var Vt=Q;Vt!==f.tail&&(De<ru||typeof Vt.value=="string");Vt=Vt.next)Hn++,De+=Vt.value.length;Hn--,yt=g.slice(be,De),de.index-=be}else if(de=c(jt,0,yt,Y),!de)continue;var Bn=de.index,jn=de[0],Bi=yt.slice(0,Bn),Or=yt.slice(Bn+jn.length),ji=be+yt.length;C&&ji>C.reach&&(C.reach=ji);var Vn=Q.prev;Bi&&(Vn=d(f,Vn,Bi),be+=Bi.length),p(f,Vn,Hn);var ou=new l(A,he?a.tokenize(jn,he):jn,Bt,jn);if(Q=d(f,Vn,ou),Or&&d(f,Q,Or),Hn>1){var Vi={cause:A+","+L,reach:ji};h(g,f,y,Q.prev,be,Vi),C&&Vi.reach>C.reach&&(C.reach=Vi.reach)}}}}}}function u(){var g={value:null,prev:null,next:null},f={value:null,prev:g,next:null};g.next=f,this.head=g,this.tail=f,this.length=0}function d(g,f,y){var m=f.next,b={value:y,prev:f,next:m};return f.next=b,m.prev=b,g.length++,b}function p(g,f,y){for(var m=f.next,b=0;b<y&&m!==g.tail;b++)m=m.next;f.next=m,m.prev=f,g.length-=b}function w(g){for(var f=[],y=g.head.next;y!==g.tail;)f.push(y.value),y=y.next;return f}if(!i.document)return i.addEventListener&&(a.disableWorkerMessageHandler||i.addEventListener("message",function(g){var f=JSON.parse(g.data),y=f.language,m=f.code,b=f.immediateClose;i.postMessage(a.highlight(m,a.languages[y],y)),b&&i.close()},!1)),a;var _=a.util.currentScript();_&&(a.filename=_.src,_.hasAttribute("data-manual")&&(a.manual=!0));function v(){a.manual||a.highlightAll()}if(!a.manual){var E=document.readyState;E==="loading"||E==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return a}(e);n.exports&&(n.exports=t),typeof Zo!="undefined"&&(Zo.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading\u2026",s=function(_,v){return"\u2716 Error "+_+" while fetching file: "+v},r="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",h="failed",u="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function d(_,v,E){var g=new XMLHttpRequest;g.open("GET",_,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?v(g.responseText):g.status>=400?E(s(g.status,g.statusText)):E(r))},g.send(null)}function p(_){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(v){var E=Number(v[1]),g=v[2],f=v[3];return g?f?[E,Number(f)]:[E,void 0]:[E,E]}}t.hooks.add("before-highlightall",function(_){_.selector+=", "+u}),t.hooks.add("before-sanity-check",function(_){var v=_.element;if(v.matches(u)){_.code="",v.setAttribute(a,l);var E=v.appendChild(document.createElement("CODE"));E.textContent=i;var g=v.getAttribute("data-src"),f=_.language;if(f==="none"){var y=(/\.(\w+)$/.exec(g)||[,"none"])[1];f=o[y]||y}t.util.setLanguage(E,f),t.util.setLanguage(v,f);var m=t.plugins.autoloader;m&&m.loadLanguages(f),d(g,function(b){v.setAttribute(a,c);var C=p(v.getAttribute("data-range"));if(C){var A=b.split(/\r\n?|\n/g),T=C[0],L=C[1]==null?A.length:C[1];T<0&&(T+=A.length),T=Math.max(0,Math.min(T-1,A.length)),L<0&&(L+=A.length),L=Math.max(0,Math.min(L,A.length)),b=A.slice(T,L).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(T+1))}E.textContent=b,t.highlightElement(E)},function(b){v.setAttribute(a,h),E.textContent=b})}}),t.plugins.fileHighlight={highlight:function(v){for(var E=(v||document).querySelectorAll(u),g=0,f;f=E[g++];)t.highlightElement(f)}};var w=!1;t.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(iu);var Le=iu.exports;function Pv(n){var j,he;let e,t,i,s,r,o,a,l,c,h,u,d,p,w,_=Le.highlight(((j=n[0])==null?void 0:j.html)||"(No data received)",Le.languages.html)+"",v,E,g,f,y=Le.highlight(((he=n[0])==null?void 0:he.css)||"",Le.languages.css)+"",m,b,C,A,T,L;return C=new ya({props:{html:n[2].html,css:n[2].css}}),{c(){e=P("div"),t=P("div"),i=P("h1"),s=Be("Spectating "),r=P("button"),o=P("strong"),a=Be(n[1]),l=oe(),c=P("button"),c.innerHTML=`<div class="bg-white h-[2px] absolute inset-x-0 top-1/2 rotate-45"></div> 
      <div class="bg-white h-[2px] absolute inset-x-0 top-1/2 -rotate-45"></div>`,h=oe(),u=P("div"),d=P("div"),p=P("div"),w=P("pre"),v=oe(),E=P("div"),g=oe(),f=P("pre"),m=oe(),b=P("div"),Mt(C.$$.fragment),S(i,"class","text-5xl text-center"),S(c,"class","absolute top-8 right-8 w-8 h-8"),S(w,"wrap","wrap"),S(E,"class","h-px bg-gray-700 my-12"),S(f,"wrap","wrap"),S(p,"class","absolute inset-0 overflow-auto p-8"),S(d,"class","bg-black flex-auto relative"),S(b,"class","flex-none w-[540px] h-[720px] pointer-events-none select-none relative"),S(u,"class","flex justify-center mt-4 gap-4 p-8"),S(t,"class","bg-gradient-to-b from-slate-800 to-slate-700 p-8 w-full h-full"),S(e,"class","absolute z-10 inset-0 overflow-y-auto"),S(e,"aria-labelledby","modal-title"),S(e,"role","dialog"),S(e,"aria-modal","true")},m(Y,we){ne(Y,e,we),R(e,t),R(t,i),R(i,s),R(i,r),R(r,o),R(o,a),R(t,l),R(t,c),R(t,h),R(t,u),R(u,d),R(d,p),R(p,w),w.innerHTML=_,R(p,v),R(p,E),R(p,g),R(p,f),f.innerHTML=y,R(u,m),R(u,b),ht(C,b,null),A=!0,T||(L=[Xe(r,"click",n[6]),Xe(c,"click",n[11])],T=!0)},p(Y,[we]){var Wn,jt;(!A||we&2)&&Ms(a,Y[1]),(!A||we&1)&&_!==(_=Le.highlight(((Wn=Y[0])==null?void 0:Wn.html)||"(No data received)",Le.languages.html)+"")&&(w.innerHTML=_),(!A||we&1)&&y!==(y=Le.highlight(((jt=Y[0])==null?void 0:jt.css)||"",Le.languages.css)+"")&&(f.innerHTML=y);const Bt={};we&4&&(Bt.html=Y[2].html),we&4&&(Bt.css=Y[2].css),C.$set(Bt)},i(Y){A||(B(C.$$.fragment,Y),A=!0)},o(Y){Z(C.$$.fragment,Y),A=!1},d(Y){Y&&ee(e),dt(C),T=!1,ut(L)}}}function Ov(n,e,t){let i,s,r,o,a,l=q,c=()=>(l(),l=ln(s,f=>t(10,a=f)),s),h,u=q,d=()=>(u(),u=ln(i,f=>t(0,h=f)),i);n.$$.on_destroy.push(()=>l()),n.$$.on_destroy.push(()=>u());let{uid:p}=e,{index:w}=e,_=!1;const v=wu(),E=()=>{t(9,_=!_)},g=()=>v("close");return n.$$set=f=>{"uid"in f&&t(7,p=f.uid),"index"in f&&t(8,w=f.index)},n.$$.update=()=>{n.$$.dirty&128&&d(t(4,i=tu(p))),n.$$.dirty&128&&c(t(3,s=kv(p))),n.$$.dirty&1&&t(2,r=ma(h)),n.$$.dirty&1792&&t(1,o=_&&a.name||`Contestant ${w+1}`)},[h,o,r,s,i,v,E,p,w,_,a,g]}class xv extends Sn{constructor(e){super(),Tn(this,e,Ov,Pv,Dt,{uid:7,index:8})}}function ea(n,e,t){const i=n.slice();return i[15]=e[t],i[14]=t,i}function ta(n,e,t){const i=n.slice();return i[12]=e[t],i[14]=t,i}function na(n,e,t){const i=n.slice();return i[15]=e[t],i[14]=t,i}function Dv(n){let e,t,i,s,r,o,a,l,c,h,u,d=n[4],p=[];for(let _=0;_<d.length;_+=1)p[_]=ia(ea(n,d,_));const w=_=>Z(p[_],1,1,()=>{p[_]=null});return{c(){e=P("div"),t=P("div"),i=P("img"),r=oe(),o=P("div"),a=P("div"),l=P("div");for(let _=0;_<p.length;_+=1)p[_].c();S(i,"class","shadow-lg rounded"),Zt(i.src,s=n[3])||S(i,"src",s),S(i,"alt","Template"),S(i,"width","540"),S(t,"class","flex-none flex flex-col justify-center p-4 bg-slate-900/50"),S(l,"class","m-auto flex-auto flex flex-wrap gap-4 justify-center px-4 py-8"),S(a,"class","absolute inset-0 flex overflow-x-hidden overflow-y-auto"),S(o,"class","flex-auto relative"),S(e,"class","flex inset-0 absolute")},m(_,v){ne(_,e,v),R(e,t),R(t,i),R(e,r),R(e,o),R(o,a),R(a,l);for(let E=0;E<p.length;E+=1)p[E].m(l,null);c=!0,h||(u=Xe(i,"click",n[10]),h=!0)},p(_,v){if((!c||v&8&&!Zt(i.src,s=_[3]))&&S(i,"src",s),v&48){d=_[4];let E;for(E=0;E<d.length;E+=1){const g=ea(_,d,E);p[E]?(p[E].p(g,v),B(p[E],1)):(p[E]=ia(g),p[E].c(),B(p[E],1),p[E].m(l,null))}for(hn(),E=d.length;E<p.length;E+=1)w(E);dn()}},i(_){if(!c){for(let v=0;v<d.length;v+=1)B(p[v]);c=!0}},o(_){p=p.filter(Boolean);for(let v=0;v<p.length;v+=1)Z(p[v]);c=!1},d(_){_&&ee(e),us(p,_),h=!1,u()}}}function Mv(n){let e,t,i,s,r,o,a,l,c,h,u,d,p,w=n[2],_=[];for(let f=0;f<w.length;f+=1)_[f]=sa(na(n,w,f));const v=f=>Z(_[f],1,1,()=>{_[f]=null});let E=aa(n[2]),g=[];for(let f=0;f<E.length;f+=1)g[f]=ra(ta(n,E,f));return{c(){e=P("div"),t=P("div"),i=P("div"),s=P("img"),o=oe();for(let f=0;f<_.length;f+=1)_[f].c();a=oe();for(let f=0;f<g.length;f+=1)g[f].c();l=oe(),c=P("img"),S(s,"class","shadow-lg rounded"),Zt(s.src,r=n[3])||S(s,"src",r),S(s,"alt","Template"),S(i,"class","template-image svelte-1qggf9"),S(t,"class","grid-view svelte-1qggf9"),S(e,"class","flex items-center justify-center inset-0 absolute"),Zt(c.src,h=Nu)||S(c,"src",h),S(c,"alt",""),S(c,"class","absolute top-8 left-8 w-[21.823vw]")},m(f,y){ne(f,e,y),R(e,t),R(t,i),R(i,s),R(t,o);for(let m=0;m<_.length;m+=1)_[m].m(t,null);R(t,a);for(let m=0;m<g.length;m+=1)g[m].m(t,null);ne(f,l,y),ne(f,c,y),u=!0,d||(p=Xe(s,"click",n[8]),d=!0)},p(f,y){if((!u||y&8&&!Zt(s.src,r=f[3]))&&S(s,"src",r),y&36){w=f[2];let m;for(m=0;m<w.length;m+=1){const b=na(f,w,m);_[m]?(_[m].p(b,y),B(_[m],1)):(_[m]=sa(b),_[m].c(),B(_[m],1),_[m].m(t,a))}for(hn(),m=w.length;m<_.length;m+=1)v(m);dn()}if(y&4){E=aa(f[2]);let m;for(m=0;m<E.length;m+=1){const b=ta(f,E,m);g[m]?g[m].p(b,y):(g[m]=ra(),g[m].c(),g[m].m(t,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=E.length}},i(f){if(!u){for(let y=0;y<w.length;y+=1)B(_[y]);u=!0}},o(f){_=_.filter(Boolean);for(let y=0;y<_.length;y+=1)Z(_[y]);u=!1},d(f){f&&ee(e),us(_,f),us(g,f),f&&ee(l),f&&ee(c),d=!1,p()}}}function ia(n){let e,t,i,s;function r(){return n[11](n[15],n[14])}return t=new nu({props:{uid:n[15],index:n[14]}}),t.$on("click",r),{c(){e=P("div"),Mt(t.$$.fragment),i=oe(),S(e,"class","flex-none")},m(o,a){ne(o,e,a),ht(t,e,null),R(e,i),s=!0},p(o,a){n=o;const l={};a&16&&(l.uid=n[15]),t.$set(l)},i(o){s||(B(t.$$.fragment,o),s=!0)},o(o){Z(t.$$.fragment,o),s=!1},d(o){o&&ee(e),dt(t)}}}function sa(n){let e,t,i;function s(){return n[9](n[15],n[14])}return t=new nu({props:{uid:n[15],index:n[14]}}),t.$on("click",s),{c(){e=P("div"),Mt(t.$$.fragment)},m(r,o){ne(r,e,o),ht(t,e,null),i=!0},p(r,o){n=r;const a={};o&4&&(a.uid=n[15]),t.$set(a)},i(r){i||(B(t.$$.fragment,r),i=!0)},o(r){Z(t.$$.fragment,r),i=!1},d(r){r&&ee(e),dt(t)}}}function ra(n){let e;return{c(){e=P("div"),e.textContent=`(No Player)
        `,S(e,"class","flex items-center justify-center rounded text-2xl bg-slate-500 shadow-lg")},m(t,i){ne(t,e,i)},p:q,d(t){t&&ee(e)}}}function oa(n){let e,t,i,s;const r=[n[0]];let o={};for(let a=0;a<r.length;a+=1)o=lu(o,r[a]);return t=new xv({props:o}),t.$on("close",n[6]),{c(){e=P("div"),Mt(t.$$.fragment),S(e,"class","absolute inset-0")},m(a,l){ne(a,e,l),ht(t,e,null),s=!0},p(a,l){const c=l&1?ku(r,[Ru(a[0])]):{};t.$set(c)},i(a){s||(B(t.$$.fragment,a),un(()=>{i||(i=Lr(e,Fr,{duration:100},!0)),i.run(1)}),s=!0)},o(a){Z(t.$$.fragment,a),i||(i=Lr(e,Fr,{duration:100},!1)),i.run(0),s=!1},d(a){a&&ee(e),dt(t),a&&i&&i.end()}}}function Lv(n){let e,t,i,s,r;const o=[Mv,Dv],a=[];function l(h,u){return h[1]==="stage"?0:1}e=l(n),t=a[e]=o[e](n);let c=n[0]&&oa(n);return{c(){t.c(),i=oe(),c&&c.c(),s=pa()},m(h,u){a[e].m(h,u),ne(h,i,u),c&&c.m(h,u),ne(h,s,u),r=!0},p(h,[u]){let d=e;e=l(h),e===d?a[e].p(h,u):(hn(),Z(a[d],1,1,()=>{a[d]=null}),dn(),t=a[e],t?t.p(h,u):(t=a[e]=o[e](h),t.c()),B(t,1),t.m(i.parentNode,i)),h[0]?c?(c.p(h,u),u&1&&B(c,1)):(c=oa(h),c.c(),B(c,1),c.m(s.parentNode,s)):c&&(hn(),Z(c,1,1,()=>{c=null}),dn())},i(h){r||(B(t),B(c),r=!0)},o(h){Z(t),Z(c),r=!1},d(h){a[e].d(h),h&&ee(i),c&&c.d(h),h&&ee(s)}}}function aa(n){return new Array(8-n.length).fill("")}function Fv(n,e,t){let i,s,r,o;Yn(n,Cv,_=>t(7,s=_)),Yn(n,Rv,_=>t(3,r=_)),Yn(n,Tv,_=>t(4,o=_));let a=null,l="stage";function c(_,v){t(0,a={uid:_,index:v})}function h(){t(0,a=null)}const u=()=>t(1,l="all"),d=(_,v)=>c(_,v),p=()=>t(1,l="stage"),w=(_,v)=>c(_,v);return n.$$.update=()=>{n.$$.dirty&128&&t(2,i=s||[])},[a,l,i,r,o,c,h,s,u,d,p,w]}class Uv extends Sn{constructor(e){super(),Tn(this,e,Fv,Lv,Dt,{})}}const wt=[];function $v(n,e=q){let t;const i=new Set;function s(a){if(Dt(n,a)&&(n=a,t)){const l=!wt.length;for(const c of i)c[1](),wt.push(c,n);if(l){for(let c=0;c<wt.length;c+=2)wt[c][0](wt[c+1]);wt.length=0}}}function r(a){s(a(n))}function o(a,l=q){const c=[a,l];return i.add(c),i.size===1&&(t=e(s)||q),a(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}const ti=$v("checking");Vc(Un,n=>{su(n)});vv.then(()=>{su(Un.currentUser)});function su(n){n?n.getIdTokenResult().then(e=>{ti.set(e.claims.management?"authorized":"unauthorized")}).catch(e=>{console.error(e),ti.set("error")}):ti.set("unauthenticated")}function Wv(n){return ry(Un,n)}Object.assign(window,{signOut:()=>oy(Un)});function Hv(n){let e,t,i,s,r,o,a,l;return{c(){e=P("div"),t=Be("Access state: "),i=Be(n[0]),s=oe(),r=P("div"),o=P("button"),o.textContent="Authenticate",S(o,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),S(r,"class","mt-4"),S(e,"class","p-6")},m(c,h){ne(c,e,h),R(e,t),R(e,i),R(e,s),R(e,r),R(r,o),a||(l=Xe(o,"click",n[2]),a=!0)},p(c,h){h&1&&Ms(i,c[0])},i:q,o:q,d(c){c&&ee(e),a=!1,l()}}}function Bv(n){let e,t;return e=new Uv({}),{c(){Mt(e.$$.fragment)},m(i,s){ht(e,i,s),t=!0},p:q,i(i){t||(B(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){dt(e,i)}}}function jv(n){let e,t,i,s;const r=[Bv,Hv],o=[];function a(l,c){return l[0]==="authorized"?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=pa()},m(l,c){o[e].m(l,c),ne(l,i,c),s=!0},p(l,[c]){let h=e;e=a(l),e===h?o[e].p(l,c):(hn(),Z(o[h],1,1,()=>{o[h]=null}),dn(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),B(t,1),t.m(i.parentNode,i))},i(l){s||(B(t),s=!0)},o(l){Z(t),s=!1},d(l){o[e].d(l),l&&ee(i)}}}function Vv(n,e,t){let i;Yn(n,ti,o=>t(0,i=o));function s(){const o=prompt("token");o&&Wv(o).catch(a=>{console.error(a),alert(String(a))})}return[i,s,()=>s()]}class qv extends Sn{constructor(e){super(),Tn(this,e,Vv,jv,Dt,{})}}new qv({target:document.getElementById("app")});
