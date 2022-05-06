const ja=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ja();function ue(){}function qa(n,e){for(const t in e)n[t]=e[t];return n}function Sr(n){return n()}function ds(){return Object.create(null)}function Pt(n){n.forEach(Sr)}function Va(n){return typeof n=="function"}function wn(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function za(n){return Object.keys(n).length===0}function tn(n,...e){if(n==null)return ue;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ga(n,e,t){n.$$.on_destroy.push(tn(e,t))}function P(n,e){n.appendChild(e)}function Ce(n,e,t){n.insertBefore(e,t||null)}function fe(n){n.parentNode.removeChild(n)}function fs(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function W(n){return document.createElement(n)}function Oe(n){return document.createTextNode(n)}function be(){return Oe(" ")}function Ya(){return Oe("")}function wi(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function O(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ka(n){return Array.from(n.childNodes)}function Tr(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let Ci;function mt(n){Ci=n}function Ar(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const _t=[],ti=[],Zt=[],ps=[],Qa=Promise.resolve();let ni=!1;function Xa(){ni||(ni=!0,Qa.then(xr))}function ii(n){Zt.push(n)}const Un=new Set;let Qt=0;function xr(){const n=Ci;do{for(;Qt<_t.length;){const e=_t[Qt];Qt++,mt(e),Ja(e.$$)}for(mt(null),_t.length=0,Qt=0;ti.length;)ti.pop()();for(let e=0;e<Zt.length;e+=1){const t=Zt[e];Un.has(t)||(Un.add(t),t())}Zt.length=0}while(_t.length);for(;ps.length;)ps.pop()();ni=!1,Un.clear(),mt(n)}function Ja(n){if(n.fragment!==null){n.update(),Pt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ii)}}const en=new Set;let Re;function _s(){Re={r:0,c:[],p:Re}}function gs(){Re.r||Pt(Re.c),Re=Re.p}function ie(n,e){n&&n.i&&(en.delete(n),n.i(e))}function we(n,e,t,i){if(n&&n.o){if(en.has(n))return;en.add(n),Re.c.push(()=>{en.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function Za(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function el(n){return typeof n=="object"&&n!==null?n:{}}function Cn(n){n&&n.c()}function Ot(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||ii(()=>{const l=r.map(Sr).filter(Va);o?o.push(...l):Pt(l),n.$$.on_mount=[]}),a.forEach(ii)}function Dt(n,e){const t=n.$$;t.fragment!==null&&(Pt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function tl(n,e){n.$$.dirty[0]===-1&&(_t.push(n),Xa(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function En(n,e,t,i,s,r,o,a=[-1]){const l=Ci;mt(n);const c=n.$$={fragment:null,ctx:null,props:r,update:ue,not_equal:s,bound:ds(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ds(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(u,d,..._)=>{const y=_.length?_[0]:d;return c.ctx&&s(c.ctx[u],c.ctx[u]=y)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](y),h&&tl(n,u)),d}):[],c.update(),h=!0,Pt(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=Ka(e.target);c.fragment&&c.fragment.l(u),u.forEach(fe)}else c.fragment&&c.fragment.c();e.intro&&ie(n.$$.fragment),Ot(n,e.target,e.anchor,e.customElement),xr()}mt(l)}class In{$destroy(){Dt(this,1),this.$destroy=ue}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!za(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var nl=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>body { font-family: Noto Sans, Noto Sans Thai, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle"></style>
</head>
<body>(Loading...)</body>
</html>`;function Nr(n){return n?{html:n==null?void 0:n.html,css:n==null?void 0:n.compiledCss}:{html:'<div class="no-submission">(No data received)</div>',css:`body { background: #475569; color: #fff; }
.no-submission { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center; font-family: Karla, sans-serif; font-size: 48px; }`}}function il(n){let e,t,i;return{c(){e=W("iframe"),O(e,"sandbox","allow-same-origin"),O(e,"srcdoc",n[1]),O(e,"class","absolute top-0 left-0 w-full h-full bg-white"),O(e,"title","Preview")},m(s,r){Ce(s,e,r),n[5](e),t||(i=wi(e,"load",n[2]),t=!0)},p:ue,i:ue,o:ue,d(s){s&&fe(e),n[5](null),t=!1,i()}}}function sl(n,e,t){let{html:i}=e,{css:s}=e,r;const o=nl;function a(){l(i,s)}function l(h,u){r&&(t(0,r.contentDocument.body.innerHTML=h,r),r.contentDocument.querySelector("#cssstyle").innerHTML=u)}function c(h){ti[h?"unshift":"push"](()=>{r=h,t(0,r)})}return n.$$set=h=>{"html"in h&&t(3,i=h.html),"css"in h&&t(4,s=h.css)},n.$$.update=()=>{n.$$.dirty&24&&l(i,s)},[r,o,a,i,s,c]}class Rr extends In{constructor(e){super(),En(this,e,sl,il,wn,{html:3,css:4})}}/**
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
 */const kr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw rt(e)},rt=function(n){return new Error("Firebase Database ("+kr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Pr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),i.push(t[h],t[u],t[d],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const _=a<<4&240|c>>2;if(i.push(_),u!==64){const y=c<<6&192|u;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Or=function(n){const e=Pr(n);return Ei.encodeByteArray(e,!0)},Dr=function(n){return Or(n).replace(/\./g,"")},ms=function(n){try{return Ei.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ol(n){return Fr(void 0,n)}function Fr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!al(t)||(n[t]=Fr(n[t],e[t]));return n}function al(n){return n!=="__proto__"}/**
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
 */class Ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ll(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ll())}function cl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ul(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lr(){return kr.NODE_ADMIN===!0}function $r(){return typeof indexedDB=="object"}function Br(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function hl(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const dl="FirebaseError";class Ft extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=dl,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?fl(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,a,i)}}function fl(n,e){return n.replace(pl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const pl=/\{\$([^}]+)}/g;/**
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
 */function Et(n){return JSON.parse(n)}function z(n){return JSON.stringify(n)}/**
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
 */const Wr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Et(ms(r[0])||""),t=Et(ms(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},_l=function(n){const e=Wr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gl=function(n){const e=Wr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ge(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ys(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function sn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(vs(r)&&vs(o)){if(!sn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function vs(n){return n!==null&&typeof n=="object"}/**
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
 */function ml(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class yl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Hr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const vl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const bl=1e3,wl=2,Cl=4*60*60*1e3,El=.5;function bs(n,e=bl,t=wl){const i=e*Math.pow(t,n),s=Math.round(El*i*(Math.random()-.5)*2);return Math.min(Cl,i+s)}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function gt(n,e){return new Promise((t,i)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class ws{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new Ur(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new jr(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Ur{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new jr(this._transaction.objectStore(e))}}class jr{constructor(e){this._store=e}index(e){return new Cs(this._store.index(e))}createIndex(e,t,i){return new Cs(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return gt(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return gt(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return gt(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return gt(e,"Error clearing IndexedDB object store")}}class Cs{constructor(e){this._index=e}get(e){const t=this._index.get(e);return gt(t,"Error reading from IndexedDB")}}function qr(n,e,t){return new Promise((i,s)=>{try{const r=indexedDB.open(n,e);r.onsuccess=o=>{i(new ws(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{t(new ws(r.result),o.oldVersion,o.newVersion,new Ur(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class _e{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class Il{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ii;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tl(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sl(n){return n===xe?void 0:n}function Tl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Al{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Il(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const xl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Nl=F.INFO,Rl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},kl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Rl[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Si{constructor(e){this.name=e,this._logLevel=Nl,this._logHandler=kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
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
 */class Pl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ol(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ol(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const si="@firebase/app",Es="0.7.21";/**
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
 */const Ti=new Si("@firebase/app"),Dl="@firebase/app-compat",Fl="@firebase/analytics-compat",Ml="@firebase/analytics",Ll="@firebase/app-check-compat",$l="@firebase/app-check",Bl="@firebase/auth",Wl="@firebase/auth-compat",Hl="@firebase/database",Ul="@firebase/database-compat",jl="@firebase/functions",ql="@firebase/functions-compat",Vl="@firebase/installations",zl="@firebase/installations-compat",Gl="@firebase/messaging",Yl="@firebase/messaging-compat",Kl="@firebase/performance",Ql="@firebase/performance-compat",Xl="@firebase/remote-config",Jl="@firebase/remote-config-compat",Zl="@firebase/storage",ec="@firebase/storage-compat",tc="@firebase/firestore",nc="@firebase/firestore-compat",ic="firebase",sc="9.6.11";/**
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
 */const Vr="[DEFAULT]",rc={[si]:"fire-core",[Dl]:"fire-core-compat",[Ml]:"fire-analytics",[Fl]:"fire-analytics-compat",[$l]:"fire-app-check",[Ll]:"fire-app-check-compat",[Bl]:"fire-auth",[Wl]:"fire-auth-compat",[Hl]:"fire-rtdb",[Ul]:"fire-rtdb-compat",[jl]:"fire-fn",[ql]:"fire-fn-compat",[Vl]:"fire-iid",[zl]:"fire-iid-compat",[Gl]:"fire-fcm",[Yl]:"fire-fcm-compat",[Kl]:"fire-perf",[Ql]:"fire-perf-compat",[Xl]:"fire-rc",[Jl]:"fire-rc-compat",[Zl]:"fire-gcs",[ec]:"fire-gcs-compat",[tc]:"fire-fst",[nc]:"fire-fst-compat","fire-js":"fire-js",[ic]:"fire-js-all"};/**
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
 */const rn=new Map,ri=new Map;function oc(n,e){try{n.container.addComponent(e)}catch(t){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ie(n){const e=n.name;if(ri.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,n);for(const t of rn.values())oc(t,n);return!0}function Lt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ac={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Fe=new Sn("app","Firebase",ac);/**
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
 */class lc{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const cc=sc;function uc(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Fe.create("bad-app-name",{appName:String(i)});const s=rn.get(i);if(s){if(sn(n,s.options)&&sn(t,s.config))return s;throw Fe.create("duplicate-app",{appName:i})}const r=new Al(i);for(const a of ri.values())r.addComponent(a);const o=new lc(n,t,r);return rn.set(i,o),o}function zr(n=Vr){const e=rn.get(n);if(!e)throw Fe.create("no-app",{appName:n});return e}function he(n,e,t){var i;let s=(i=rc[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Ie(new _e(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hc="firebase-heartbeat-database",dc=1,It="firebase-heartbeat-store";let jn=null;function Gr(){return jn||(jn=qr(hc,dc,(n,e)=>{switch(e){case 0:n.createObjectStore(It)}}).catch(n=>{throw Fe.create("storage-open",{originalErrorMessage:n.message})})),jn}async function fc(n){try{return(await Gr()).transaction(It).objectStore(It).get(Yr(n))}catch(e){throw Fe.create("storage-get",{originalErrorMessage:e.message})}}async function Is(n,e){try{const i=(await Gr()).transaction(It,"readwrite");return await i.objectStore(It).put(e,Yr(n)),i.complete}catch(t){throw Fe.create("storage-set",{originalErrorMessage:t.message})}}function Yr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pc=1024,_c=30*24*60*60*1e3;class gc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ss();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=_c}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ss(),{heartbeatsToSend:t,unsentEntries:i}=mc(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ss(){return new Date().toISOString().substring(0,10)}function mc(n,e=pc){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ts(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ts(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class yc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $r()?Br().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Is(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Is(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ts(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function vc(n){Ie(new _e("platform-logger",e=>new Pl(e),"PRIVATE")),Ie(new _e("heartbeat",e=>new gc(e),"PRIVATE")),he(si,Es,n),he(si,Es,"esm2017"),he("fire-js","")}vc("");const As="@firebase/database",xs="0.12.8";/**
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
 */let Kr="";function bc(n){Kr=n}/**
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
 */class wc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Et(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Cc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Qr=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wc(e)}}catch{}return new Cc},ke=Qr("localStorage"),oi=Qr("sessionStorage");/**
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
 */const Je=new Si("@firebase/database"),Ec=function(){let n=1;return function(){return n++}}(),Xr=function(n){const e=vl(n),t=new yl;t.update(e);const i=t.digest();return Ei.encodeByteArray(i)},$t=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$t.apply(null,i):typeof i=="object"?e+=z(i):e+=i,e+=" "}return e};let De=null,Ns=!0;const Ic=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Je.logLevel=F.VERBOSE,De=Je.log.bind(Je),e&&oi.set("logging_enabled",!0)):typeof n=="function"?De=n:(De=null,oi.remove("logging_enabled"))},Y=function(...n){if(Ns===!0&&(Ns=!1,De===null&&oi.get("logging_enabled")===!0&&Ic(!0)),De){const e=$t.apply(null,n);De(e)}},Bt=function(n){return function(...e){Y(n,...e)}},ai=function(...n){const e="FIREBASE INTERNAL ERROR: "+$t(...n);Je.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${$t(...n)}`;throw Je.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+$t(...n);Je.warn(e)},Sc=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Tc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},nt="[MIN_NAME]",Le="[MAX_NAME]",ot=function(n,e){if(n===e)return 0;if(n===nt||e===Le)return-1;if(e===nt||n===Le)return 1;{const t=Rs(n),i=Rs(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ac=function(n,e){return n===e?0:n<e?-1:1},ut=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+z(e))},Ai=function(n){if(typeof n!="object"||n===null)return z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=z(e[i]),t+=":",t+=Ai(n[e[i]]);return t+="}",t},Zr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function J(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const eo=function(n){m(!Jr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},xc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const kc=new RegExp("^-?(0*)\\d{1,10}$"),Pc=-2147483648,Oc=2147483647,Rs=function(n){if(kc.test(n)){const e=Number(n);if(e>=Pc&&e<=Oc)return e}return null},Wt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},Dc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yt=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Fc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}li.OWNER="owner";/**
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
 */const xi="5",to="v",no="s",io="r",so="f",ro=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oo="ls",Lc="p",ci="ac",ao="websocket",lo="long_polling";/**
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
 */class $c{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Bc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function co(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===ao)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===lo)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bc(n)&&(t.ns=n.namespace);const s=[];return J(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Wc{constructor(){this.counters_={}}incrementCounter(e,t=1){ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ol(this.counters_)}}/**
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
 */const qn={},Vn={};function Ni(n){const e=n.toString();return qn[e]||(qn[e]=new Wc),qn[e]}function Hc(n,e){const t=n.toString();return Vn[t]||(Vn[t]=e()),Vn[t]}/**
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
 */class Uc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Wt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ks="start",jc="close",qc="pLPCommand",Vc="pRTLPCB",uo="id",ho="pw",fo="ser",zc="cb",Gc="seg",Yc="ts",Kc="d",Qc="dframe",po=1870,_o=30,Xc=po-_o,Jc=25e3,Zc=3e4;class Qe{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bt(e),this.stats_=Ni(t),this.urlFn=l=>(this.appCheckToken&&(l[ci]=this.appCheckToken),co(t,lo,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Uc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zc)),Tc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ri((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ks)this.id=a,this.password=l;else if(o===jc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ks]="t",i[fo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[zc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[to]=xi,this.transportSessionId&&(i[no]=this.transportSessionId),this.lastSessionId&&(i[oo]=this.lastSessionId),this.applicationId&&(i[Lc]=this.applicationId),this.appCheckToken&&(i[ci]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ro.test(location.hostname)&&(i[io]=so);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qe.forceAllow_=!0}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){return Qe.forceAllow_?!0:!Qe.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!xc()&&!Nc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Or(t),s=Zr(i,Xc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Qc]="t",i[uo]=e,i[ho]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ri{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ec(),window[qc+this.uniqueCallbackIdentifier]=e,window[Vc+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ri.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uo]=this.myID,e[ho]=this.myPW,e[fo]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_o+i.length<=po;){const o=this.pendingSegs.shift();i=i+"&"+Gc+s+"="+o.seg+"&"+Yc+s+"="+o.ts+"&"+Kc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Jc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const eu=16384,tu=45e3;let on=null;typeof MozWebSocket!="undefined"?on=MozWebSocket:typeof WebSocket!="undefined"&&(on=WebSocket);class se{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bt(this.connId),this.stats_=Ni(t),this.connURL=se.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[to]=xi,typeof location!="undefined"&&location.hostname&&ro.test(location.hostname)&&(r[io]=so),t&&(r[no]=t),i&&(r[oo]=i),s&&(r[ci]=s),co(e,ao,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ke.set("previous_websocket_failure",!0);try{if(!Lr()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new on(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&on!==null&&!se.forceDisallow_}static previouslyFailed(){return ke.isInMemoryStorage||ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Et(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Zr(t,eu);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}se.responsesRequiredToBeHealthy=2;se.healthyTimeout=3e4;/**
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
 */class ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qe,se]}initTransports_(e){const t=se&&se.isAvailable();let i=t&&!se.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[se];else{const s=this.transports_=[];for(const r of ki.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const nu=6e4,iu=5e3,su=10*1024,ru=100*1024,zn="t",Ps="d",ou="s",Os="r",au="e",Ds="o",Fs="a",Ms="n",Ls="p",lu="h";class cu{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bt("c:"+this.id+":"),this.transportManager_=new ki(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ru?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>su?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zn in e){const t=e[zn];t===Fs?this.upgradeIfSecondaryHealthy_():t===Os?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ds&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ut("t",e),i=ut("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ls,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ms,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ut("t",e),i=ut("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ut(zn,e);if(Ps in e){const i=e[Ps];if(t===lu)this.onHandshake_(i);else if(t===Ms){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ou?this.onConnectionShutdown_(i):t===Os?this.onReset_(i):t===au?ai("Server Error: "+i):t===Ds?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ai("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xi!==i&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),yt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ls,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class go{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class mo{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class an extends mo{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Mr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new an}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $s=32,Bs=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new D("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Se(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function yo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function uu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function vo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function bo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function j(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=N(n),i=N(e);if(t===null)return e;if(t===i)return Q(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pi(n,e){if(Se(n)!==Se(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function re(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Se(n)>Se(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class hu{constructor(e,t){this.errorPrefix_=t,this.parts_=vo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Tn(this.parts_[i]);wo(this)}}function du(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Tn(e),wo(n)}function fu(n){const e=n.parts_.pop();n.byteLength_-=Tn(e),n.parts_.length>0&&(n.byteLength_-=1)}function wo(n){if(n.byteLength_>Bs)throw new Error(n.errorPrefix_+"has a key path longer than "+Bs+" bytes ("+n.byteLength_+").");if(n.parts_.length>$s)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$s+") or object contains a cycle "+Ne(n))}function Ne(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Oi extends mo{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Oi}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ht=1e3,pu=60*5*1e3,_u=3*1e3,Ws=30*1e3,gu=1.3,mu=3e4,yu="server_kill",Hs=3;class pe extends go{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pe.nextPersistentConnectionId_++,this.log_=Bt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ht,this.maxReconnectDelay_=pu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&an.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(z(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ii,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},_u),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;pe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ge(e,"w")){const i=tt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ws)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=_l(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ai("Unrecognized action received from server: "+z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mu&&(this.reconnectDelay_=ht),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new cu(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{Z(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(yu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Z(u),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ys(this.interruptReasons_)&&(this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ai(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hs&&(this.reconnectDelay_=Ws,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kr.replace(/\./g,"-")]=1,Mr()?e["framework.cordova"]=1:ul()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=an.getInstance().currentlyOnline();return ys(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
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
 */class A{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new A(e,t)}}/**
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
 */class An{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new A(nt,e),s=new A(nt,t);return this.compare(i,s)!==0}minPost(){return A.MIN}}/**
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
 */let Xt;class Co extends An{static get __EMPTY_NODE(){return Xt}static set __EMPTY_NODE(e){Xt=e}compare(e,t){return ot(e.name,t.name)}isDefinedOn(e){throw rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return A.MIN}maxPost(){return new A(Le,Xt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new A(e,Xt)}toString(){return".key"}}const Ze=new Co;/**
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
 */class Jt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class V{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:V.RED,this.left=s!=null?s:X.EMPTY_NODE,this.right=r!=null?r:X.EMPTY_NODE}copy(e,t,i,s,r){return new V(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return X.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}V.RED=!0;V.BLACK=!1;class vu{copy(e,t,i,s,r){return this}insert(e,t,i){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,t=X.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new X(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jt(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new vu;/**
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
 */function bu(n,e){return ot(n.name,e.name)}function Di(n,e){return ot(n,e)}/**
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
 */let ui;function wu(n){ui=n}const Eo=function(n){return typeof n=="number"?"number:"+eo(n):"string:"+n},Io=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ge(e,".sv"),"Priority must be a string or number.")}else m(n===ui||n.isEmpty(),"priority of unexpected type.");m(n===ui||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Us;class q{constructor(e,t=q.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Io(this.priorityNode_)}static set __childrenNodeConstructor(e){Us=e}static get __childrenNodeConstructor(){return Us}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new q(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:N(e)===".priority"?this.priorityNode_:q.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:q.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=N(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Se(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,q.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Eo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=eo(this.value_):e+=this.value_,this.lazyHash_=Xr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===q.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof q.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=q.VALUE_TYPE_ORDER.indexOf(t),r=q.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}q.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let So,To;function Cu(n){So=n}function Eu(n){To=n}class Iu extends An{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ot(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return A.MIN}maxPost(){return new A(Le,new q("[PRIORITY-POST]",To))}makePost(e,t){const i=So(e);return new A(t,new q("[PRIORITY-POST]",i))}toString(){return".priority"}}const H=new Iu;/**
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
 */const Su=Math.log(2);class Tu{constructor(e){const t=r=>parseInt(Math.log(r)/Su,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new V(d,u.node,V.BLACK,null,null);{const _=parseInt(h/2,10)+l,y=s(l,_),g=s(_+1,c);return u=n[_],d=t?t(u):u,new V(d,u.node,V.BLACK,y,g)}},r=function(l){let c=null,h=null,u=n.length;const d=function(y,g){const v=u-y,E=u;u-=y;const f=s(v+1,E),p=n[v],b=t?t(p):p;_(new V(b,p.node,g,null,f))},_=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(y+1));g?d(v,V.BLACK):(d(v,V.BLACK),d(v,V.RED))}return h},o=new Tu(n.length),a=r(o);return new X(i||e,a)};/**
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
 */let Gn;const Ke={};class de{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Ke&&H,"ChildrenNode.ts has not been loaded"),Gn=Gn||new de({".priority":Ke},{".priority":H}),Gn}get(e){const t=tt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null}hasIndex(e){return ge(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(A.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ln(i,e.getCompare()):a=Ke;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new de(h,c)}addToIndexes(e,t){const i=nn(this.indexes_,(s,r)=>{const o=tt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Ke)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(A.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ln(a,o.getCompare())}else return Ke;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new A(e.name,a))),l.insert(e,e.node)}});return new de(i,this.indexSet_)}removeFromIndexes(e,t){const i=nn(this.indexes_,s=>{if(s===Ke)return s;{const r=t.get(e.name);return r?s.remove(new A(e.name,r)):s}});return new de(i,this.indexSet_)}}/**
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
 */let dt;class T{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Io(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dt||(dt=new T(new X(Di),null,de.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?dt:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new A(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?dt:this.priorityNode_;return new T(s,o,r)}}updateChild(e,t){const i=N(e);if(i===null)return t;{m(N(e)!==".priority"||Se(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(M(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(H,(o,a)=>{t[o]=a.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Eo(this.getPriority().val())+":"),this.forEachChild(H,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Xr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new A(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new A(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new A(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,A.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,A.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ht?-1:0}withIndex(e){if(e===Ze||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ze||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(H),s=t.getIterator(H);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ze?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Au extends T{constructor(){super(new X(Di),T.EMPTY_NODE,de.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const Ht=new Au;Object.defineProperties(A,{MIN:{value:new A(nt,T.EMPTY_NODE)},MAX:{value:new A(Le,Ht)}});Co.__EMPTY_NODE=T.EMPTY_NODE;q.__childrenNodeConstructor=T;wu(Ht);Eu(Ht);/**
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
 */const xu=!0;function K(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new q(t,K(e))}if(!(n instanceof Array)&&xu){const t=[];let i=!1;if(J(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=K(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new A(o,l)))}}),t.length===0)return T.EMPTY_NODE;const r=ln(t,bu,o=>o.name,Di);if(i){const o=ln(t,H.getCompare());return new T(r,K(e),new de({".priority":o},{".priority":H}))}else return new T(r,K(e),de.Default)}else{let t=T.EMPTY_NODE;return J(n,(i,s)=>{if(ge(n,i)&&i.substring(0,1)!=="."){const r=K(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(K(e))}}Cu(K);/**
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
 */class Nu extends An{constructor(e){super(),this.indexPath_=e,m(!R(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ot(e.name,t.name):r}makePost(e,t){const i=K(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new A(t,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,Ht);return new A(Le,e)}toString(){return vo(this.indexPath_,0).join("/")}}/**
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
 */class Ru extends An{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ot(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return A.MIN}maxPost(){return A.MAX}makePost(e,t){const i=K(e);return new A(t,i)}toString(){return".value"}}const ku=new Ru;/**
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
 */function Ao(n){return{type:"value",snapshotNode:n}}function it(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function St(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Pu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Fi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(St(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(it(t,i)):o.trackChildChange(Tt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(H,(s,r)=>{t.hasChild(s)||i.trackChildChange(St(s,r))}),t.isLeafNode()||t.forEachChild(H,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Tt(s,r,o))}else i.trackChildChange(it(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class At{constructor(e){this.indexedFilter_=new Fi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=At.getStartPost_(e),this.endPost_=At.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new A(t,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=T.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild(H,(o,a)=>{r.matches(new A(o,a))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ou{constructor(e){this.rangedFilter_=new At(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new A(t,i))||(i=T.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(d,_)=>u(_,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,h=!1;for(;l.hasNext();){const u=l.getNext();!h&&a(r,u)<=0&&(h=!0),h&&c<this.limit_&&a(u,o)<=0?c++:s=s.updateImmediateChild(u.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new A(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(h&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Tt(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(St(t,u));const g=a.updateImmediateChild(t,T.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(it(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(St(c.name,c.node)),r.trackChildChange(it(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
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
 */class Mi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=H}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Le}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===H}copy(){const e=new Mi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Du(n){return n.loadsAllData()?new Fi(n.getIndex()):n.hasLimit()?new Ou(n):new At(n)}function js(n){const e={};if(n.isDefault())return e;let t;return n.index_===H?t="$priority":n.index_===ku?t="$value":n.index_===Ze?t="$key":(m(n.index_ instanceof Nu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=z(t),n.startSet_&&(e.startAt=z(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+z(n.indexStartName_))),n.endSet_&&(e.endAt=z(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+z(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==H&&(e.i=n.index_.toString()),e}/**
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
 */class cn extends go{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Bt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=cn.getListenId_(e,i),a={};this.listens_[o]=a;const l=js(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),tt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=cn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=js(e._queryParams),i=e._path.toString(),s=new Ii;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ml(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Et(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Fu{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function un(){return{value:null,children:new Map}}function xo(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=N(e);n.children.has(i)||n.children.set(i,un());const s=n.children.get(i);e=M(e),xo(s,e,t)}}function hi(n,e,t){n.value!==null?t(e,n.value):Mu(n,(i,s)=>{const r=new D(e.toString()+"/"+i);hi(s,r,t)})}function Mu(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Lu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&J(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Vs=10*1e3,$u=30*1e3,Bu=5*60*1e3;class Wu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lu(e);const i=Vs+($u-Vs)*Math.random();yt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;J(e,(s,r)=>{r>0&&ge(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),yt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bu))}}/**
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
 */var oe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function No(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Li(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $i(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class hn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=oe.ACK_USER_WRITE,this.source=No()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new hn(k(),t,this.revert)}}else return m(N(this.path)===e,"operationForChild called for unrelated child."),new hn(M(this.path),this.affectedTree,this.revert)}}/**
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
 */class xt{constructor(e,t){this.source=e,this.path=t,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return R(this.path)?new xt(this.source,k()):new xt(this.source,M(this.path))}}/**
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
 */class $e{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=oe.OVERWRITE}operationForChild(e){return R(this.path)?new $e(this.source,k(),this.snap.getImmediateChild(e)):new $e(this.source,M(this.path),this.snap)}}/**
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
 */class Nt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=oe.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new $e(this.source,k(),t.value):new Nt(this.source,k(),t)}else return m(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Be{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Uu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pu(o.childName,o.snapshotNode))}),ft(n,s,"child_removed",e,i,t),ft(n,s,"child_added",e,i,t),ft(n,s,"child_moved",r,i,t),ft(n,s,"child_changed",e,i,t),ft(n,s,"value",e,i,t),s}function ft(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>qu(n,a,l)),o.forEach(a=>{const l=ju(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function ju(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function qu(n,e,t){if(e.childName==null||t.childName==null)throw rt("Should only compare child_ events.");const i=new A(e.childName,e.snapshotNode),s=new A(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function xn(n,e){return{eventCache:n,serverCache:e}}function vt(n,e,t,i){return xn(new Be(e,t,i),n.serverCache)}function Ro(n,e,t,i){return xn(n.eventCache,new Be(e,t,i))}function di(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function We(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Yn;const Vu=()=>(Yn||(Yn=new X(Ac)),Yn);class ${constructor(e,t=Vu()){this.value=e,this.children=t}static fromObject(e){let t=new $(null);return J(e,(i,s)=>{t=t.set(new D(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(R(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:j(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=N(e),i=this.children.get(t);return i!==null?i.subtree(M(e)):new $(null)}}set(e,t){if(R(e))return new $(t,this.children);{const i=N(e),r=(this.children.get(i)||new $(null)).set(M(e),t),o=this.children.insert(i,r);return new $(this.value,o)}}remove(e){if(R(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=N(e),i=this.children.get(t);if(i){const s=i.remove(M(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(R(e))return this.value;{const t=N(e),i=this.children.get(t);return i?i.get(M(e)):null}}setTree(e,t){if(R(e))return t;{const i=N(e),r=(this.children.get(i)||new $(null)).setTree(M(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(j(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(R(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(M(e),j(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(R(e))return this;{this.value&&i(t,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(M(e),j(t,s),i):new $(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(j(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new $(null))}}function bt(n,e,t){if(R(e))return new ae(new $(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Q(s,e);return r=r.updateChild(o,t),new ae(n.writeTree_.set(s,r))}else{const s=new $(t),r=n.writeTree_.setTree(e,s);return new ae(r)}}}function zs(n,e,t){let i=n;return J(t,(s,r)=>{i=bt(i,j(e,s),r)}),i}function Gs(n,e){if(R(e))return ae.empty();{const t=n.writeTree_.setTree(e,new $(null));return new ae(t)}}function fi(n,e){return qe(n,e)!=null}function qe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function Ys(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(H,(i,s)=>{e.push(new A(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new A(i,s.value))}),e}function Ee(n,e){if(R(e))return n;{const t=qe(n,e);return t!=null?new ae(new $(t)):new ae(n.writeTree_.subtree(e))}}function pi(n){return n.writeTree_.isEmpty()}function st(n,e){return ko(k(),n.writeTree_,e)}function ko(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=ko(j(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(j(n,".priority"),i)),t}}/**
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
 */function Bi(n,e){return Fo(e,n)}function zu(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=bt(n.visibleWrites,e,t)),n.lastWriteId=i}function Gu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Yu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ku(a,i.path)?s=!1:re(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Qu(n),!0;if(i.snap)n.visibleWrites=Gs(n.visibleWrites,i.path);else{const a=i.children;J(a,l=>{n.visibleWrites=Gs(n.visibleWrites,j(i.path,l))})}return!0}else return!1}function Ku(n,e){if(n.snap)return re(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&re(j(n.path,t),e))return!0;return!1}function Qu(n){n.visibleWrites=Po(n.allWrites,Xu,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Xu(n){return n.visible}function Po(n,e,t){let i=ae.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)re(t,o)?(a=Q(t,o),i=bt(i,a,r.snap)):re(o,t)&&(a=Q(o,t),i=bt(i,k(),r.snap.getChild(a)));else if(r.children){if(re(t,o))a=Q(t,o),i=zs(i,a,r.children);else if(re(o,t))if(a=Q(o,t),R(a))i=zs(i,k(),r.children);else{const l=tt(r.children,N(a));if(l){const c=l.getChild(M(a));i=bt(i,k(),c)}}}else throw rt("WriteRecord should have .snap or .children")}}return i}function Oo(n,e,t,i,s){if(!i&&!s){const r=qe(n.visibleWrites,e);if(r!=null)return r;{const o=Ee(n.visibleWrites,e);if(pi(o))return t;if(t==null&&!fi(o,k()))return null;{const a=t||T.EMPTY_NODE;return st(o,a)}}}else{const r=Ee(n.visibleWrites,e);if(!s&&pi(r))return t;if(!s&&t==null&&!fi(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(re(c.path,e)||re(e,c.path))},a=Po(n.allWrites,o,e),l=t||T.EMPTY_NODE;return st(a,l)}}}function Ju(n,e,t){let i=T.EMPTY_NODE;const s=qe(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(H,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ee(n.visibleWrites,e);return t.forEachChild(H,(o,a)=>{const l=st(Ee(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),Ys(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ee(n.visibleWrites,e);return Ys(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Zu(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(fi(n.visibleWrites,r))return null;{const o=Ee(n.visibleWrites,r);return pi(o)?s.getChild(t):st(o,s.getChild(t))}}function eh(n,e,t,i){const s=j(e,t),r=qe(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ee(n.visibleWrites,s);return st(o,i.getNode().getImmediateChild(t))}else return null}function th(n,e){return qe(n.visibleWrites,e)}function nh(n,e,t,i,s,r,o){let a;const l=Ee(n.visibleWrites,e),c=qe(l,k());if(c!=null)a=c;else if(t!=null)a=st(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&h.length<s;)u(_,i)!==0&&h.push(_),_=d.getNext();return h}else return[]}function ih(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function dn(n,e,t,i){return Oo(n.writeTree,n.treePath,e,t,i)}function Wi(n,e){return Ju(n.writeTree,n.treePath,e)}function Ks(n,e,t,i){return Zu(n.writeTree,n.treePath,e,t,i)}function fn(n,e){return th(n.writeTree,j(n.treePath,e))}function sh(n,e,t,i,s,r){return nh(n.writeTree,n.treePath,e,t,i,s,r)}function Hi(n,e,t){return eh(n.writeTree,n.treePath,e,t)}function Do(n,e){return Fo(j(n.treePath,e),n.writeTree)}function Fo(n,e){return{treePath:n,writeTree:e}}/**
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
 */class rh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Tt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,St(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,it(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Tt(i,e.snapshotNode,s.oldSnap));else throw rt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Mo=new oh;class Ui{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Be(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hi(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:We(this.viewCache_),r=sh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function ah(n){return{filter:n}}function lh(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ch(n,e,t,i,s){const r=new rh;let o,a;if(t.type===oe.OVERWRITE){const c=t;c.source.fromUser?o=_i(n,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!R(c.path),o=pn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===oe.MERGE){const c=t;c.source.fromUser?o=hh(n,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gi(n,e,c.path,c.children,i,s,a,r))}else if(t.type===oe.ACK_USER_WRITE){const c=t;c.revert?o=ph(n,e,c.path,i,s,r):o=dh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===oe.LISTEN_COMPLETE)o=fh(n,e,t.path,i,r);else throw rt("Unknown operation type: "+t.type);const l=r.getChanges();return uh(e,o,l),{viewCache:o,changes:l}}function uh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=di(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Ao(di(e)))}}function Lo(n,e,t,i,s,r){const o=e.eventCache;if(fn(i,t)!=null)return e;{let a,l;if(R(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=We(e),h=c instanceof T?c:T.EMPTY_NODE,u=Wi(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=dn(i,We(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){m(Se(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Ks(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=M(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ks(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Hi(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return vt(e,a,o.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function pn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(R(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),_,null)}else{const _=N(t);if(!l.isCompleteForPath(t)&&Se(t)>1)return e;const y=M(t),v=l.getNode().getImmediateChild(_).updateChild(y,i);_===".priority"?c=h.updatePriority(l.getNode(),v):c=h.updateChild(l.getNode(),_,v,y,Mo,null)}const u=Ro(e,c,l.isFullyInitialized()||R(t),h.filtersNodes()),d=new Ui(s,u,r);return Lo(n,u,t,s,d,a)}function _i(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new Ui(s,e,r);if(R(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=vt(e,c,!0,n.filter.filtersNodes());else{const u=N(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=vt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=M(t),_=a.getNode().getImmediateChild(u);let y;if(R(d))y=i;else{const g=h.getCompleteChild(u);g!=null?yo(d)===".priority"&&g.getChild(bo(d)).isEmpty()?y=g:y=g.updateChild(d,i):y=T.EMPTY_NODE}if(_.equals(y))l=e;else{const g=n.filter.updateChild(a.getNode(),u,y,d,h,o);l=vt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Qs(n,e){return n.eventCache.isCompleteForChild(e)}function hh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=j(t,l);Qs(e,N(h))&&(a=_i(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=j(t,l);Qs(e,N(h))||(a=_i(n,a,h,c,s,r,o))}),a}function Xs(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function gi(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;R(t)?c=i:c=new $(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),y=Xs(n,_,d);l=pn(n,l,new D(u),y,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===void 0;if(!h.hasChild(u)&&!_){const y=e.serverCache.getNode().getImmediateChild(u),g=Xs(n,y,d);l=pn(n,l,new D(u),g,s,r,o,a)}}),l}function dh(n,e,t,i,s,r,o){if(fn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(R(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return pn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(R(t)){let c=new $(null);return l.getNode().forEachChild(Ze,(h,u)=>{c=c.set(new D(h),u)}),gi(n,e,t,c,s,r,a,o)}else return e}else{let c=new $(null);return i.foreach((h,u)=>{const d=j(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),gi(n,e,t,c,s,r,a,o)}}function fh(n,e,t,i,s){const r=e.serverCache,o=Ro(e,r.getNode(),r.isFullyInitialized()||R(t),r.isFiltered());return Lo(n,o,t,i,Mo,s)}function ph(n,e,t,i,s,r){let o;if(fn(i,t)!=null)return e;{const a=new Ui(i,e,s),l=e.eventCache.getNode();let c;if(R(t)||N(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=dn(i,We(e));else{const u=e.serverCache.getNode();m(u instanceof T,"serverChildren would be complete if leaf node"),h=Wi(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=N(t);let u=Hi(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,M(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,T.EMPTY_NODE,M(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=dn(i,We(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||fn(i,k())!=null,vt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class _h{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Fi(i.getIndex()),r=Du(i);this.processor_=ah(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),h=new Be(l,o.isFullyInitialized(),s.filtersNodes()),u=new Be(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xn(u,h),this.eventGenerator_=new Hu(this.query_)}get query(){return this.query_}}function gh(n){return n.viewCache_.serverCache.getNode()}function mh(n,e){const t=We(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function Js(n){return n.eventRegistrations_.length===0}function yh(n,e){n.eventRegistrations_.push(e)}function Zs(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function er(n,e,t,i){e.type===oe.MERGE&&e.source.queryId!==null&&(m(We(n.viewCache_),"We should always have a full cache before handling merges"),m(di(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ch(n.processor_,s,e,t,i);return lh(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,$o(n,r.changes,r.viewCache.eventCache.getNode(),null)}function vh(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(H,(r,o)=>{i.push(it(r,o))}),t.isFullyInitialized()&&i.push(Ao(t.getNode())),$o(n,i,t.getNode(),e)}function $o(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Uu(n.eventGenerator_,e,t,s)}/**
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
 */let _n;class bh{constructor(){this.views=new Map}}function wh(n){m(!_n,"__referenceConstructor has already been defined"),_n=n}function Ch(){return m(_n,"Reference.ts has not been loaded"),_n}function Eh(n){return n.views.size===0}function ji(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),er(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(er(o,e,t,i));return r}}function Ih(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=dn(t,s?i:null),l=!1;a?l=!0:i instanceof T?(a=Wi(t,i),l=!1):(a=T.EMPTY_NODE,l=!1);const c=xn(new Be(a,l,!1),new Be(i,s,!1));return new _h(e,c)}return o}function Sh(n,e,t,i,s,r){const o=Ih(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),yh(o,t),vh(o,t)}function Th(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Te(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Zs(c,t,i)),Js(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Zs(l,t,i)),Js(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Te(n)&&r.push(new(Ch())(e._repo,e._path)),{removed:r,events:o}}function Bo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function et(n,e){let t=null;for(const i of n.views.values())t=t||mh(i,e);return t}function Wo(n,e){if(e._queryParams.loadsAllData())return Nn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ho(n,e){return Wo(n,e)!=null}function Te(n){return Nn(n)!=null}function Nn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gn;function Ah(n){m(!gn,"__referenceConstructor has already been defined"),gn=n}function xh(){return m(gn,"Reference.ts has not been loaded"),gn}let Nh=1;class tr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=ih(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rh(n,e,t,i,s){return zu(n.pendingWriteTree_,e,t,i,s),s?Ut(n,new $e(No(),e,t)):[]}function Xe(n,e,t=!1){const i=Gu(n.pendingWriteTree_,e);if(Yu(n.pendingWriteTree_,e)){let r=new $(null);return i.snap!=null?r=r.set(k(),!0):J(i.children,o=>{r=r.set(new D(o),!0)}),Ut(n,new hn(i.path,r,t))}else return[]}function Rn(n,e,t){return Ut(n,new $e(Li(),e,t))}function kh(n,e,t){const i=$.fromObject(t);return Ut(n,new Nt(Li(),e,i))}function Ph(n,e){return Ut(n,new xt(Li(),e))}function Oh(n,e,t){const i=qi(n,t);if(i){const s=Vi(i),r=s.path,o=s.queryId,a=Q(r,e),l=new xt($i(o),a);return zi(n,r,l)}else return[]}function mi(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Ho(r,e))){const a=Th(r,e,t,i);Eh(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(u,d)=>Te(d));if(c&&!h){const u=n.syncPointTree_.subtree(s);if(!u.isEmpty()){const d=Mh(u);for(let _=0;_<d.length;++_){const y=d[_],g=y.query,v=Vo(n,y);n.listenProvider_.startListening(wt(g),mn(n,g),v.hashFn,v.onComplete)}}}!h&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(wt(e),null):l.forEach(u=>{const d=n.queryToTagMap.get(kn(u));n.listenProvider_.stopListening(wt(u),d)})),Lh(n,l)}return o}function Dh(n,e,t,i){const s=qi(n,i);if(s!=null){const r=Vi(s),o=r.path,a=r.queryId,l=Q(o,e),c=new $e($i(a),l,t);return zi(n,o,c)}else return[]}function Fh(n,e,t,i){const s=qi(n,i);if(s){const r=Vi(s),o=r.path,a=r.queryId,l=Q(o,e),c=$.fromObject(t),h=new Nt($i(a),l,c);return zi(n,o,h)}else return[]}function nr(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(u,d)=>{const _=Q(u,i);s=s||et(d,_),r=r||Te(d)});let o=n.syncPointTree_.get(i);o?(r=r||Te(o),s=s||et(o,k())):(o=new bh,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=T.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,_)=>{const y=et(_,k());y&&(s=s.updateImmediateChild(d,y))}));const l=Ho(o,e);if(!l&&!e._queryParams.loadsAllData()){const u=kn(e);m(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const d=$h();n.queryToTagMap.set(u,d),n.tagToQueryMap.set(d,u)}const c=Bi(n.pendingWriteTree_,i);let h=Sh(o,e,t,c,s,a);if(!l&&!r){const u=Wo(o,e);h=h.concat(Bh(n,e,u))}return h}function Uo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Q(o,e),c=et(a,l);if(c)return c});return Oo(s,e,r,t,!0)}function Ut(n,e){return jo(e,n.syncPointTree_,null,Bi(n.pendingWriteTree_,k()))}function jo(n,e,t,i){if(R(n.path))return qo(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=et(s,k()));let r=[];const o=N(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Do(i,o);r=r.concat(jo(a,l,c,h))}return s&&(r=r.concat(ji(s,n,i,t))),r}}function qo(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=et(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Do(i,o),h=n.operationForChild(o);h&&(r=r.concat(qo(h,a,l,c)))}),s&&(r=r.concat(ji(s,n,i,t))),r}function Vo(n,e){const t=e.query,i=mn(n,t);return{hashFn:()=>(gh(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Oh(n,t._path,i):Ph(n,t._path);{const r=Rc(s,t);return mi(n,t,null,r)}}}}function mn(n,e){const t=kn(e);return n.queryToTagMap.get(t)}function kn(n){return n._path.toString()+"$"+n._queryIdentifier}function qi(n,e){return n.tagToQueryMap.get(e)}function Vi(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function zi(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=Bi(n.pendingWriteTree_,e);return ji(i,t,s,null)}function Mh(n){return n.fold((e,t,i)=>{if(t&&Te(t))return[Nn(t)];{let s=[];return t&&(s=Bo(t)),J(i,(r,o)=>{s=s.concat(o)}),s}})}function wt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xh())(n._repo,n._path):n}function Lh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=kn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function $h(){return Nh++}function Bh(n,e,t){const i=e._path,s=mn(n,e),r=Vo(n,t),o=n.listenProvider_.startListening(wt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)m(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!R(c)&&h&&Te(h))return[Nn(h).query];{let d=[];return h&&(d=d.concat(Bo(h).map(_=>_.query))),J(u,(_,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(wt(h),mn(n,h))}}return o}/**
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
 */class Gi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Gi(t)}node(){return this.node_}}class Yi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new Yi(this.syncTree_,t)}node(){return Uo(this.syncTree_,this.path_)}}const Wh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ir=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Hh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Uh(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Hh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Uh=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},jh=function(n,e,t,i){return Ki(e,new Yi(t,n),i)},qh=function(n,e,t){return Ki(n,new Gi(e),t)};function Ki(n,e,t){const i=n.getPriority().val(),s=ir(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ir(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new q(a,K(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new q(s))),o.forEachChild(H,(a,l)=>{const c=Ki(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Qi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Xi(n,e){let t=e instanceof D?e:new D(e),i=n,s=N(t);for(;s!==null;){const r=tt(i.node.children,s)||{children:{},childCount:0};i=new Qi(s,i,r),t=M(t),s=N(t)}return i}function at(n){return n.node.value}function zo(n,e){n.node.value=e,yi(n)}function Go(n){return n.node.childCount>0}function Vh(n){return at(n)===void 0&&!Go(n)}function Pn(n,e){J(n.node.children,(t,i)=>{e(new Qi(t,n,i))})}function Yo(n,e,t,i){t&&!i&&e(n),Pn(n,s=>{Yo(s,e,!0,i)}),t&&i&&e(n)}function zh(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jt(n){return new D(n.parent===null?n.name:jt(n.parent)+"/"+n.name)}function yi(n){n.parent!==null&&Gh(n.parent,n.name,n)}function Gh(n,e,t){const i=Vh(t),s=ge(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,yi(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,yi(n))}/**
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
 */const Yh=/[\[\].#$\/\u0000-\u001F\u007F]/,Kh=/[\[\].#$\u0000-\u001F\u007F]/,Kn=10*1024*1024,Ko=function(n){return typeof n=="string"&&n.length!==0&&!Yh.test(n)},Qo=function(n){return typeof n=="string"&&n.length!==0&&!Kh.test(n)},Qh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qo(n)},Xo=function(n,e,t){const i=t instanceof D?new hu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ne(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ne(i)+" with contents = "+e.toString());if(Jr(e))throw new Error(n+"contains "+e.toString()+" "+Ne(i));if(typeof e=="string"&&e.length>Kn/3&&Tn(e)>Kn)throw new Error(n+"contains a string greater than "+Kn+" utf8 bytes "+Ne(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ko(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ne(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);du(i,o),Xo(n,a,i),fu(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ne(i)+" in addition to actual children.")}},Jo=function(n,e,t,i){if(!(i&&t===void 0)&&!Qo(t))throw new Error(Hr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Xh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Jo(n,e,t,i)},Jh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ko(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Qh(t))throw new Error(Hr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zo(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Pi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function ea(n,e,t){Zo(n,t),ta(n,i=>Pi(i,e))}function Ve(n,e,t){Zo(n,t),ta(n,i=>re(i,e)||re(e,i))}function ta(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(ed(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ed(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();De&&Y("event: "+t.toString()),Wt(i)}}}/**
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
 */const td="repo_interrupt",nd=25;class id{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=un(),this.transactionQueueTree_=new Qi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sd(n,e,t){if(n.stats_=Ni(n.repoInfo_),n.forceRestClient_||Dc())n.server_=new cn(n.repoInfo_,(i,s,r,o)=>{sr(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rr(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new pe(n.repoInfo_,e,(i,s,r,o)=>{sr(n,i,s,r,o)},i=>{rr(n,i)},i=>{od(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Hc(n.repoInfo_,()=>new Wu(n.stats_,n.server_)),n.infoData_=new Fu,n.infoSyncTree_=new tr({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Rn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ji(n,"connected",!1),n.serverSyncTree_=new tr({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ve(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function rd(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function na(n){return Wh({timestamp:rd(n)})}function sr(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=nn(t,c=>K(c));o=Fh(n.serverSyncTree_,r,l,s)}else{const l=K(t);o=Dh(n.serverSyncTree_,r,l,s)}else if(i){const l=nn(t,c=>K(c));o=kh(n.serverSyncTree_,r,l)}else{const l=K(t);o=Rn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=es(n,r)),Ve(n.eventQueue_,a,o)}function rr(n,e){Ji(n,"connected",e),e===!1&&ld(n)}function od(n,e){J(e,(t,i)=>{Ji(n,t,i)})}function Ji(n,e,t){const i=new D("/.info/"+e),s=K(t);n.infoData_.updateSnapshot(i,s);const r=Rn(n.infoSyncTree_,i,s);Ve(n.eventQueue_,i,r)}function ad(n){return n.nextWriteId_++}function ld(n){ia(n,"onDisconnectEvents");const e=na(n),t=un();hi(n.onDisconnect_,k(),(s,r)=>{const o=jh(s,r,n.serverSyncTree_,e);xo(t,s,o)});let i=[];hi(t,k(),(s,r)=>{i=i.concat(Rn(n.serverSyncTree_,s,r));const o=fd(n,s);es(n,o)}),n.onDisconnect_=un(),Ve(n.eventQueue_,k(),i)}function cd(n,e,t){let i;N(e._path)===".info"?i=nr(n.infoSyncTree_,e,t):i=nr(n.serverSyncTree_,e,t),ea(n.eventQueue_,e._path,i)}function or(n,e,t){let i;N(e._path)===".info"?i=mi(n.infoSyncTree_,e,t):i=mi(n.serverSyncTree_,e,t),ea(n.eventQueue_,e._path,i)}function ud(n){n.persistentConnection_&&n.persistentConnection_.interrupt(td)}function ia(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function sa(n,e,t){return Uo(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function Zi(n,e=n.transactionQueueTree_){if(e||On(n,e),at(e)){const t=oa(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&hd(n,jt(e),t)}else Go(e)&&Pn(e,t=>{Zi(n,t)})}function hd(n,e,t){const i=t.map(c=>c.currentWriteId),s=sa(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Q(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ia(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Xe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();On(n,Xi(n.transactionQueueTree_,e)),Zi(n,n.transactionQueueTree_),Ve(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Wt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}es(n,e)}},o)}function es(n,e){const t=ra(n,e),i=jt(t),s=oa(n,t);return dd(n,s,i),i}function dd(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Q(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nd)h=!0,u="maxretry",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else{const d=sa(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Xo("transaction failed: Data returned ",_,l.path);let y=K(_);typeof _=="object"&&_!=null&&ge(_,".priority")||(y=y.updatePriority(d.getPriority()));const v=l.currentWriteId,E=na(n),f=qh(y,d,E);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=f,l.currentWriteId=ad(n),o.splice(o.indexOf(v),1),s=s.concat(Rh(n.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),s=s.concat(Xe(n.serverSyncTree_,v,!0))}else h=!0,u="nodata",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0))}Ve(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}On(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Wt(i[a]);Zi(n,n.transactionQueueTree_)}function ra(n,e){let t,i=n.transactionQueueTree_;for(t=N(e);t!==null&&at(i)===void 0;)i=Xi(i,t),e=M(e),t=N(e);return i}function oa(n,e){const t=[];return aa(n,e,t),t.sort((i,s)=>i.order-s.order),t}function aa(n,e,t){const i=at(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Pn(e,s=>{aa(n,s,t)})}function On(n,e){const t=at(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,zo(e,t.length>0?t:void 0)}Pn(e,i=>{On(n,i)})}function fd(n,e){const t=jt(ra(n,e)),i=Xi(n.transactionQueueTree_,e);return zh(i,s=>{Qn(n,s)}),Qn(n,i),Yo(i,s=>{Qn(n,s)}),t}function Qn(n,e){const t=at(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zo(e,void 0):t.length=r+1,Ve(n.eventQueue_,jt(e),s);for(let o=0;o<i.length;o++)Wt(i[o])}}/**
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
 */function pd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _d(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const ar=function(n,e){const t=gd(n),i=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $c(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},gd=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=pd(n.substring(h,u)));const d=_d(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),t=e.substring(y+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class la{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+z(this.snapshot.exportVal())}}class ca{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class md{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ts{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return R(this._path)?null:yo(this._path)}get ref(){return new me(this._repo,this._path)}get _queryIdentifier(){const e=qs(this._queryParams),t=Ai(e);return t==="{}"?"default":t}get _queryObject(){return qs(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof ts))return!1;const t=this._repo===e._repo,i=Pi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+uu(this._path)}}class me extends ts{constructor(e,t){super(e,t,new Mi,!1)}get parent(){const e=bo(this._path);return e===null?null:new me(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=Ae(this.ref,e);return new Rt(this._node.getChild(t),i,H)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Rt(s,Ae(this.ref,i),H)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yd(n,e){return n=Mt(n),n._checkNotDeleted("ref"),e!==void 0?Ae(n._root,e):n._root}function Ae(n,e){return n=Mt(n),N(n._path)===null?Xh("child","path",e,!1):Jo("child","path",e,!1),new me(n._repo,j(n._path,e))}class ns{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new la("value",this,new Rt(e.snapshotNode,new me(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ca(this,e,t):null}matches(e){return e instanceof ns?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class is{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ca(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const i=Ae(new me(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new la(e.type,this,new Rt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof is?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function vd(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,u)=>{or(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new md(t,r||void 0),a=e==="value"?new ns(o):new is(e,o);return cd(n._repo,n,a),()=>or(n._repo,n,a)}function ua(n,e,t,i){return vd(n,"value",e,t,i)}wh(me);Ah(me);/**
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
 */const bd="FIREBASE_DATABASE_EMULATOR_HOST",vi={};let wd=!1;function Cd(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ar(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[bd]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ar(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new li(li.OWNER):new Mc(n.name,n.options,e);Jh("Invalid Firebase Database URL",o),R(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Id(a,n,h,new Fc(n.name,t));return new Sd(u,n)}function Ed(n,e){const t=vi[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ud(n),delete t[n.key]}function Id(n,e,t,i){let s=vi[e.name];s||(s={},vi[e.name]=s);let r=s[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new id(n,wd,t,i),s[n.toURLString()]=r,r}class Sd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new me(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ed(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function Td(n=zr(),e){return Lt(n,"database").getImmediate({identifier:e})}/**
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
 */function Ad(n){bc(cc),Ie(new _e("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Cd(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),he(As,xs,n),he(As,xs,"esm2017")}pe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};pe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ad();var xd=typeof global=="object"&&global&&global.Object===Object&&global,Nd=xd,Rd=typeof self=="object"&&self&&self.Object===Object&&self,kd=Nd||Rd||Function("return this")(),ss=kd,Pd=ss.Symbol,yn=Pd,ha=Object.prototype,Od=ha.hasOwnProperty,Dd=ha.toString,pt=yn?yn.toStringTag:void 0;function Fd(n){var e=Od.call(n,pt),t=n[pt];try{n[pt]=void 0;var i=!0}catch{}var s=Dd.call(n);return i&&(e?n[pt]=t:delete n[pt]),s}var Md=Object.prototype,Ld=Md.toString;function $d(n){return Ld.call(n)}var Bd="[object Null]",Wd="[object Undefined]",lr=yn?yn.toStringTag:void 0;function Hd(n){return n==null?n===void 0?Wd:Bd:lr&&lr in Object(n)?Fd(n):$d(n)}function da(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Ud="[object AsyncFunction]",jd="[object Function]",qd="[object GeneratorFunction]",Vd="[object Proxy]";function zd(n){if(!da(n))return!1;var e=Hd(n);return e==jd||e==qd||e==Ud||e==Vd}var Gd=ss["__core-js_shared__"],Xn=Gd,cr=function(){var n=/[^.]+$/.exec(Xn&&Xn.keys&&Xn.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Yd(n){return!!cr&&cr in n}var Kd=Function.prototype,Qd=Kd.toString;function Xd(n){if(n!=null){try{return Qd.call(n)}catch{}try{return n+""}catch{}}return""}var Jd=/[\\^$.*+?()[\]{}|]/g,Zd=/^\[object .+?Constructor\]$/,ef=Function.prototype,tf=Object.prototype,nf=ef.toString,sf=tf.hasOwnProperty,rf=RegExp("^"+nf.call(sf).replace(Jd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function of(n){if(!da(n)||Yd(n))return!1;var e=zd(n)?rf:Zd;return e.test(Xd(n))}function af(n,e){return n==null?void 0:n[e]}function fa(n,e){var t=af(n,e);return of(t)?t:void 0}function lf(n,e){return n===e||n!==n&&e!==e}var cf=fa(Object,"create"),kt=cf;function uf(){this.__data__=kt?kt(null):{},this.size=0}function hf(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var df="__lodash_hash_undefined__",ff=Object.prototype,pf=ff.hasOwnProperty;function _f(n){var e=this.__data__;if(kt){var t=e[n];return t===df?void 0:t}return pf.call(e,n)?e[n]:void 0}var gf=Object.prototype,mf=gf.hasOwnProperty;function yf(n){var e=this.__data__;return kt?e[n]!==void 0:mf.call(e,n)}var vf="__lodash_hash_undefined__";function bf(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=kt&&e===void 0?vf:e,this}function He(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}He.prototype.clear=uf;He.prototype.delete=hf;He.prototype.get=_f;He.prototype.has=yf;He.prototype.set=bf;function wf(){this.__data__=[],this.size=0}function Dn(n,e){for(var t=n.length;t--;)if(lf(n[t][0],e))return t;return-1}var Cf=Array.prototype,Ef=Cf.splice;function If(n){var e=this.__data__,t=Dn(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Ef.call(e,t,1),--this.size,!0}function Sf(n){var e=this.__data__,t=Dn(e,n);return t<0?void 0:e[t][1]}function Tf(n){return Dn(this.__data__,n)>-1}function Af(n,e){var t=this.__data__,i=Dn(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function lt(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}lt.prototype.clear=wf;lt.prototype.delete=If;lt.prototype.get=Sf;lt.prototype.has=Tf;lt.prototype.set=Af;var xf=fa(ss,"Map"),Nf=xf;function Rf(){this.size=0,this.__data__={hash:new He,map:new(Nf||lt),string:new He}}function kf(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Fn(n,e){var t=n.__data__;return kf(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Pf(n){var e=Fn(this,n).delete(n);return this.size-=e?1:0,e}function Of(n){return Fn(this,n).get(n)}function Df(n){return Fn(this,n).has(n)}function Ff(n,e){var t=Fn(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function ze(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}ze.prototype.clear=Rf;ze.prototype.delete=Pf;ze.prototype.get=Of;ze.prototype.has=Df;ze.prototype.set=Ff;var Mf="Expected a function";function Mn(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(Mf);var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=t.cache;if(r.has(s))return r.get(s);var o=n.apply(this,i);return t.cache=r.set(s,o)||r,o};return t.cache=new(Mn.Cache||ze),t}Mn.Cache=ze;var Lf="firebase",$f="9.6.11";/**
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
 */he(Lf,$f,"app");const pa="@firebase/installations",rs="0.5.8";/**
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
 */const _a=1e4,ga=`w:${rs}`,ma="FIS_v2",Bf="https://firebaseinstallations.googleapis.com/v1",Wf=60*60*1e3,Hf="installations",Uf="Installations";/**
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
 */const jf={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ue=new Sn(Hf,Uf,jf);function ya(n){return n instanceof Ft&&n.code.includes("request-failed")}/**
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
 */function va({projectId:n}){return`${Bf}/projects/${n}/installations`}function ba(n){return{token:n.token,requestStatus:2,expiresIn:Vf(n.expiresIn),creationTime:Date.now()}}async function wa(n,e){const i=(await e.json()).error;return Ue.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ca({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qf(n,{refreshToken:e}){const t=Ca(n);return t.append("Authorization",zf(e)),t}async function Ea(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Vf(n){return Number(n.replace("s","000"))}function zf(n){return`${ma} ${n}`}/**
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
 */async function Gf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=va(n),s=Ca(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:ma,appId:n.appId,sdkVersion:ga},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ea(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:ba(c.authToken)}}else throw await wa("Create Installation",l)}/**
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
 */function Ia(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Yf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kf=/^[cdef][\w-]{21}$/,bi="";function Qf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Xf(n);return Kf.test(t)?t:bi}catch{return bi}}function Xf(n){return Yf(n).substr(0,22)}/**
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
 */function Ln(n){return`${n.appName}!${n.appId}`}/**
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
 */const Sa=new Map;function Ta(n,e){const t=Ln(n);Aa(t,e),Jf(t,e)}function Aa(n,e){const t=Sa.get(n);if(!!t)for(const i of t)i(e)}function Jf(n,e){const t=Zf();t&&t.postMessage({key:n,fid:e}),ep()}let Pe=null;function Zf(){return!Pe&&"BroadcastChannel"in self&&(Pe=new BroadcastChannel("[Firebase] FID Change"),Pe.onmessage=n=>{Aa(n.data.key,n.data.fid)}),Pe}function ep(){Sa.size===0&&Pe&&(Pe.close(),Pe=null)}/**
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
 */const tp="firebase-installations-database",np=1,je="firebase-installations-store";let Jn=null;function os(){return Jn||(Jn=qr(tp,np,(n,e)=>{switch(e){case 0:n.createObjectStore(je)}})),Jn}async function vn(n,e){const t=Ln(n),s=(await os()).transaction(je,"readwrite"),r=s.objectStore(je),o=await r.get(t);return await r.put(e,t),await s.complete,(!o||o.fid!==e.fid)&&Ta(n,e.fid),e}async function xa(n){const e=Ln(n),i=(await os()).transaction(je,"readwrite");await i.objectStore(je).delete(e),await i.complete}async function $n(n,e){const t=Ln(n),s=(await os()).transaction(je,"readwrite"),r=s.objectStore(je),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.complete,a&&(!o||o.fid!==a.fid)&&Ta(n,a.fid),a}/**
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
 */async function as(n){let e;const t=await $n(n.appConfig,i=>{const s=ip(i),r=sp(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===bi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ip(n){const e=n||{fid:Qf(),registrationStatus:0};return Na(e)}function sp(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ue.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=rp(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:op(n)}:{installationEntry:e}}async function rp(n,e){try{const t=await Gf(n,e);return vn(n.appConfig,t)}catch(t){throw ya(t)&&t.customData.serverCode===409?await xa(n.appConfig):await vn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function op(n){let e=await ur(n.appConfig);for(;e.registrationStatus===1;)await Ia(100),e=await ur(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await as(n);return i||t}return e}function ur(n){return $n(n,e=>{if(!e)throw Ue.create("installation-not-found");return Na(e)})}function Na(n){return ap(n)?{fid:n.fid,registrationStatus:0}:n}function ap(n){return n.registrationStatus===1&&n.registrationTime+_a<Date.now()}/**
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
 */async function lp({appConfig:n,heartbeatServiceProvider:e},t){const i=cp(n,t),s=qf(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:ga,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ea(()=>fetch(i,a));if(l.ok){const c=await l.json();return ba(c)}else throw await wa("Generate Auth Token",l)}function cp(n,{fid:e}){return`${va(n)}/${e}/authTokens:generate`}/**
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
 */async function ls(n,e=!1){let t;const i=await $n(n.appConfig,r=>{if(!Ra(r))throw Ue.create("not-registered");const o=r.authToken;if(!e&&dp(o))return r;if(o.requestStatus===1)return t=up(n,e),r;{if(!navigator.onLine)throw Ue.create("app-offline");const a=pp(r);return t=hp(n,a),a}});return t?await t:i.authToken}async function up(n,e){let t=await hr(n.appConfig);for(;t.authToken.requestStatus===1;)await Ia(100),t=await hr(n.appConfig);const i=t.authToken;return i.requestStatus===0?ls(n,e):i}function hr(n){return $n(n,e=>{if(!Ra(e))throw Ue.create("not-registered");const t=e.authToken;return _p(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hp(n,e){try{const t=await lp(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await vn(n.appConfig,i),t}catch(t){if(ya(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await xa(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vn(n.appConfig,i)}throw t}}function Ra(n){return n!==void 0&&n.registrationStatus===2}function dp(n){return n.requestStatus===2&&!fp(n)}function fp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Wf}function pp(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function _p(n){return n.requestStatus===1&&n.requestTime+_a<Date.now()}/**
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
 */async function gp(n){const e=n,{installationEntry:t,registrationPromise:i}=await as(e);return i?i.catch(console.error):ls(e).catch(console.error),t.fid}/**
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
 */async function mp(n,e=!1){const t=n;return await yp(t),(await ls(t,e)).token}async function yp(n){const{registrationPromise:e}=await as(n);e&&await e}/**
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
 */function vp(n){if(!n||!n.options)throw Zn("App Configuration");if(!n.name)throw Zn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Zn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Zn(n){return Ue.create("missing-app-config-values",{valueName:n})}/**
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
 */const ka="installations",bp="installations-internal",wp=n=>{const e=n.getProvider("app").getImmediate(),t=vp(e),i=Lt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Cp=n=>{const e=n.getProvider("app").getImmediate(),t=Lt(e,ka).getImmediate();return{getId:()=>gp(t),getToken:s=>mp(t,s)}};function Ep(){Ie(new _e(ka,wp,"PUBLIC")),Ie(new _e(bp,Cp,"PRIVATE"))}Ep();he(pa,rs);he(pa,rs,"esm2017");/**
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
 */const bn="analytics",Ip="firebase_id",Sp="origin",Tp=60*1e3,Ap="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pa="https://www.googletagmanager.com/gtag/js";/**
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
 */const ee=new Si("@firebase/analytics");/**
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
 */function Oa(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function xp(n,e){const t=document.createElement("script");t.src=`${Pa}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Np(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Rp(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Oa(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ee.error(a)}n("config",s,r)}async function kp(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Oa(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){ee.error(r)}}function Pp(n,e,t,i){async function s(r,o,a){try{r==="event"?await kp(n,e,t,o,a):r==="config"?await Rp(n,e,t,i,o,a):n("set",o)}catch(l){ee.error(l)}}return s}function Op(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Pp(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Dp(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(Pa))return e;return null}/**
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
 */const Fp={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},te=new Sn("analytics","Analytics",Fp);/**
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
 */const Mp=30,Lp=1e3;class $p{constructor(e={},t=Lp){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Da=new $p;function Bp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Wp(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Bp(i)},r=Ap.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw te.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Hp(n,e=Da,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw te.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw te.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qp;return setTimeout(async()=>{a.abort()},t!==void 0?t:Tp),Fa({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Fa(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=Da){const{appId:r,measurementId:o}=n;try{await Up(i,e)}catch(a){if(o)return ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Wp(n);return s.deleteThrottleMetadata(r),a}catch(a){if(!jp(a)){if(s.deleteThrottleMetadata(r),o)return ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?bs(t,s.intervalMillis,Mp):bs(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(r,c),ee.debug(`Calling attemptFetch again in ${l} millis`),Fa(n,c,i,s)}}function Up(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(te.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jp(n){if(!(n instanceof Ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class qp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function Vp(){if($r())try{await Br()}catch(n){return ee.warn(te.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return ee.warn(te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zp(n,e,t,i,s,r,o){var a;const l=Hp(n);l.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&ee.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ee.error(_)),e.push(l);const c=Vp().then(_=>{if(_)return i.getId()}),[h,u]=await Promise.all([l,c]);Dp()||xp(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Sp]="firebase",d.update=!0,u!=null&&(d[Ip]=u),s("config",h.measurementId,d),h.measurementId}/**
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
 */class Gp{constructor(e){this.app=e}_delete(){return delete Ct[this.app.options.appId],Promise.resolve()}}let Ct={},dr=[];const fr={};let ei="dataLayer",Yp="gtag",pr,Ma,_r=!1;function Kp(){const n=[];if(cl()&&n.push("This is a browser extension environment."),hl()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=te.create("invalid-analytics-context",{errorInfo:e});ee.warn(t.message)}}function Qp(n,e,t){Kp();const i=n.options.appId;if(!i)throw te.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw te.create("no-api-key");if(Ct[i]!=null)throw te.create("already-exists",{id:i});if(!_r){Np(ei);const{wrappedGtag:r,gtagCore:o}=Op(Ct,dr,fr,ei,Yp);Ma=r,pr=o,_r=!0}return Ct[i]=zp(n,dr,fr,e,pr,ei,t),new Gp(n)}/**
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
 */async function Xp(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}function Jp(n=zr()){n=Mt(n);const e=Lt(n,bn);return e.isInitialized()?e.getImmediate():Zp(n)}function Zp(n,e={}){const t=Lt(n,bn);if(t.isInitialized()){const s=t.getImmediate();if(sn(e,t.getOptions()))return s;throw te.create("already-initialized")}return t.initialize({options:e})}function e_(n,e,t,i){n=Mt(n),Xp(Ma,Ct[n.app.options.appId],e,t,i).catch(s=>ee.error(s))}const gr="@firebase/analytics",mr="0.7.8";function t_(){Ie(new _e(bn,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Qp(i,s,t)},"PUBLIC")),Ie(new _e("analytics-internal",n,"PRIVATE")),he(gr,mr),he(gr,mr,"esm2017");function n(e){try{const t=e.getProvider(bn).getImmediate();return{logEvent:(i,s,r)=>e_(t,i,s,r)}}catch(t){throw te.create("interop-component-reg-failed",{reason:t})}}}t_();const n_={apiKey:"AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0",authDomain:"showdownspace.firebaseapp.com",databaseURL:"https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"showdownspace",storageBucket:"showdownspace.appspot.com",messagingSenderId:"999073329546",appId:"1:999073329546:web:08df5e95a021605ca49873",measurementId:"G-9LV3C4S19C"},La=uc(n_);Jp(La);const i_=Td(La),cs=yd(i_,"rooms/citw"),s_=Ae(cs,"config"),r_=Ae(s_,"stage");function $a(n,e,t){return{subscribe:i=>{let s=!1;const r=ua(n,o=>{i(e(o)),s=!0});return s||i(t),r}}}const o_=$a(r_,n=>{const e=[];return n.forEach(t=>{e.push(t.val())}),e},[]),Ba=Mn(n=>{const e=Ae(cs,`publicSubmissions/${n}/data`);return $a(e,t=>{try{if(!t.val())return;const i=JSON.parse(String(t.val()));return i?{html:String(i.html),css:String(i.css),compiledCss:String(i.compiledCss)}:void 0}catch(i){return{html:"ERROR: "+i,css:"",compiledCss:""}}},void 0)}),a_=Mn(n=>{const e=Ae(cs,`presence/${n}`);let t=0;return{subscribe:i=>{const s=()=>{i(new Date().getTime()<t+6e4?"online":"offline")};s();const r=ua(e,a=>{t=+a.val()||0}),o=setInterval(s,3e3);return()=>{r(),clearInterval(o)}}}});function l_(n){let e,t,i,s,r,o,a,l,c,h=n[0]+1+"",u,d,_,y;return s=new Rr({props:{html:n[1].html,css:n[1].css}}),{c(){e=W("div"),t=W("div"),i=W("div"),Cn(s.$$.fragment),r=be(),o=W("div"),a=W("span"),c=Oe(`
    Contestant #`),u=Oe(h),O(i,"class","absolute top-0 left-0 w-[540px] h-[720px] origin-top-left [transform:scale(49%)] pointer-events-none select-none"),O(t,"class","absolute inset-0 rounded overflow-hidden"),O(a,"class",l="align-middle inline-block w-3 h-3 "+(n[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full"),O(o,"class","absolute bottom-0 left-0 bg-sky-700 px-3 py-2 rounded-tr overflow-hidden"),O(e,"class","relative w-[264px] h-[352px] overflow-hidden rounded")},m(g,v){Ce(g,e,v),P(e,t),P(t,i),Ot(s,i,null),P(e,r),P(e,o),P(o,a),P(o,c),P(o,u),d=!0,_||(y=wi(e,"click",n[8]),_=!0)},p(g,[v]){const E={};v&2&&(E.html=g[1].html),v&2&&(E.css=g[1].css),s.$set(E),(!d||v&4&&l!==(l="align-middle inline-block w-3 h-3 "+(g[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full"))&&O(a,"class",l),(!d||v&1)&&h!==(h=g[0]+1+"")&&Tr(u,h)},i(g){d||(ie(s.$$.fragment,g),d=!0)},o(g){we(s.$$.fragment,g),d=!1},d(g){g&&fe(e),Dt(s),_=!1,y()}}}function c_(n,e,t){let i,s,r,o,a,l=ue,c=()=>(l(),l=tn(i,v=>t(6,a=v)),i),h,u=ue,d=()=>(u(),u=tn(s,v=>t(7,h=v)),s);n.$$.on_destroy.push(()=>l()),n.$$.on_destroy.push(()=>u());let{uid:_}=e,{index:y}=e;function g(v){Ar.call(this,n,v)}return n.$$set=v=>{"uid"in v&&t(5,_=v.uid),"index"in v&&t(0,y=v.index)},n.$$.update=()=>{n.$$.dirty&32&&c(t(4,i=Ba(_))),n.$$.dirty&32&&d(t(3,s=a_(_))),n.$$.dirty&128&&t(2,r=h),n.$$.dirty&64&&t(1,o=Nr(a))},[y,o,r,s,i,_,a,h,g]}class u_ extends In{constructor(e){super(),En(this,e,c_,l_,wn,{uid:5,index:0})}}var yr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Wa={exports:{}};(function(n){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},a={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function f(p){return p instanceof l?new l(p.type,f(p.content),p.alias):Array.isArray(p)?p.map(f):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++r}),f.__id},clone:function f(p,b){b=b||{};var C,w;switch(a.util.type(p)){case"Object":if(w=a.util.objId(p),b[w])return b[w];C={},b[w]=C;for(var I in p)p.hasOwnProperty(I)&&(C[I]=f(p[I],b));return C;case"Array":return w=a.util.objId(p),b[w]?b[w]:(C=[],b[w]=C,p.forEach(function(x,S){C[S]=f(x,b)}),C);default:return p}},getLanguage:function(f){for(;f;){var p=s.exec(f.className);if(p)return p[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,p){f.className=f.className.replace(RegExp(s,"gi"),""),f.classList.add("language-"+p)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(f){var p=document.getElementsByTagName("script");for(var b in p)if(p[b].src==f)return p[b]}return null}},isActive:function(f,p,b){for(var C="no-"+p;f;){var w=f.classList;if(w.contains(p))return!0;if(w.contains(C))return!1;f=f.parentElement}return!!b}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(f,p){var b=a.util.clone(a.languages[f]);for(var C in p)b[C]=p[C];return b},insertBefore:function(f,p,b,C){C=C||a.languages;var w=C[f],I={};for(var x in w)if(w.hasOwnProperty(x)){if(x==p)for(var S in b)b.hasOwnProperty(S)&&(I[S]=b[S]);b.hasOwnProperty(x)||(I[x]=w[x])}var L=C[f];return C[f]=I,a.languages.DFS(a.languages,function(U,B){B===L&&U!=f&&(this[U]=I)}),I},DFS:function f(p,b,C,w){w=w||{};var I=a.util.objId;for(var x in p)if(p.hasOwnProperty(x)){b.call(p,x,p[x],C||x);var S=p[x],L=a.util.type(S);L==="Object"&&!w[I(S)]?(w[I(S)]=!0,f(S,b,null,w)):L==="Array"&&!w[I(S)]&&(w[I(S)]=!0,f(S,b,x,w))}}},plugins:{},highlightAll:function(f,p){a.highlightAllUnder(document,f,p)},highlightAllUnder:function(f,p,b){var C={callback:b,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),a.hooks.run("before-all-elements-highlight",C);for(var w=0,I;I=C.elements[w++];)a.highlightElement(I,p===!0,C.callback)},highlightElement:function(f,p,b){var C=a.util.getLanguage(f),w=a.languages[C];a.util.setLanguage(f,C);var I=f.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(I,C);var x=f.textContent,S={element:f,language:C,grammar:w,code:x};function L(B){S.highlightedCode=B,a.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,a.hooks.run("after-highlight",S),a.hooks.run("complete",S),b&&b.call(S.element)}if(a.hooks.run("before-sanity-check",S),I=S.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!S.code){a.hooks.run("complete",S),b&&b.call(S.element);return}if(a.hooks.run("before-highlight",S),!S.grammar){L(a.util.encode(S.code));return}if(p&&i.Worker){var U=new Worker(a.filename);U.onmessage=function(B){L(B.data)},U.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else L(a.highlight(S.code,S.grammar,S.language))},highlight:function(f,p,b){var C={code:f,grammar:p,language:b};if(a.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=a.tokenize(C.code,C.grammar),a.hooks.run("after-tokenize",C),l.stringify(a.util.encode(C.tokens),C.language)},tokenize:function(f,p){var b=p.rest;if(b){for(var C in b)p[C]=b[C];delete p.rest}var w=new u;return d(w,w.head,f),h(f,w,p,w.head,0),y(w)},hooks:{all:{},add:function(f,p){var b=a.hooks.all;b[f]=b[f]||[],b[f].push(p)},run:function(f,p){var b=a.hooks.all[f];if(!(!b||!b.length))for(var C=0,w;w=b[C++];)w(p)}},Token:l};i.Prism=a;function l(f,p,b,C){this.type=f,this.content=p,this.alias=b,this.length=(C||"").length|0}l.stringify=function f(p,b){if(typeof p=="string")return p;if(Array.isArray(p)){var C="";return p.forEach(function(L){C+=f(L,b)}),C}var w={type:p.type,content:f(p.content,b),tag:"span",classes:["token",p.type],attributes:{},language:b},I=p.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(w.classes,I):w.classes.push(I)),a.hooks.run("wrap",w);var x="";for(var S in w.attributes)x+=" "+S+'="'+(w.attributes[S]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+x+">"+w.content+"</"+w.tag+">"};function c(f,p,b,C){f.lastIndex=p;var w=f.exec(b);if(w&&C&&w[1]){var I=w[1].length;w.index+=I,w[0]=w[0].slice(I)}return w}function h(f,p,b,C,w,I){for(var x in b)if(!(!b.hasOwnProperty(x)||!b[x])){var S=b[x];S=Array.isArray(S)?S:[S];for(var L=0;L<S.length;++L){if(I&&I.cause==x+","+L)return;var U=S[L],B=U.inside,le=!!U.lookbehind,Ge=!!U.greedy,qt=U.alias;if(Ge&&!U.pattern.global){var Vt=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,Vt+"g")}for(var us=U.pattern||U,G=C.next,ce=w;G!==p.tail&&!(I&&ce>=I.reach);ce+=G.value.length,G=G.next){var Ye=G.value;if(p.length>f.length)return;if(!(Ye instanceof l)){var zt=1,ne;if(Ge){if(ne=c(us,ce,f,le),!ne||ne.index>=f.length)break;var Gt=ne.index,Ha=ne.index+ne[0].length,ye=ce;for(ye+=G.value.length;Gt>=ye;)G=G.next,ye+=G.value.length;if(ye-=G.value.length,ce=ye,G.value instanceof l)continue;for(var ct=G;ct!==p.tail&&(ye<Ha||typeof ct.value=="string");ct=ct.next)zt++,ye+=ct.value.length;zt--,Ye=f.slice(ce,ye),ne.index-=ce}else if(ne=c(us,0,Ye,le),!ne)continue;var Gt=ne.index,Yt=ne[0],Bn=Ye.slice(0,Gt),hs=Ye.slice(Gt+Yt.length),Wn=ce+Ye.length;I&&Wn>I.reach&&(I.reach=Wn);var Kt=G.prev;Bn&&(Kt=d(p,Kt,Bn),ce+=Bn.length),_(p,Kt,zt);var Ua=new l(x,B?a.tokenize(Yt,B):Yt,qt,Yt);if(G=d(p,Kt,Ua),hs&&d(p,G,hs),zt>1){var Hn={cause:x+","+L,reach:Wn};h(f,p,b,G.prev,ce,Hn),I&&Hn.reach>I.reach&&(I.reach=Hn.reach)}}}}}}function u(){var f={value:null,prev:null,next:null},p={value:null,prev:f,next:null};f.next=p,this.head=f,this.tail=p,this.length=0}function d(f,p,b){var C=p.next,w={value:b,prev:p,next:C};return p.next=w,C.prev=w,f.length++,w}function _(f,p,b){for(var C=p.next,w=0;w<b&&C!==f.tail;w++)C=C.next;p.next=C,C.prev=p,f.length-=w}function y(f){for(var p=[],b=f.head.next;b!==f.tail;)p.push(b.value),b=b.next;return p}if(!i.document)return i.addEventListener&&(a.disableWorkerMessageHandler||i.addEventListener("message",function(f){var p=JSON.parse(f.data),b=p.language,C=p.code,w=p.immediateClose;i.postMessage(a.highlight(C,a.languages[b],b)),w&&i.close()},!1)),a;var g=a.util.currentScript();g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0));function v(){a.manual||a.highlightAll()}if(!a.manual){var E=document.readyState;E==="loading"||E==="interactive"&&g&&g.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return a}(e);n.exports&&(n.exports=t),typeof yr!="undefined"&&(yr.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading\u2026",s=function(g,v){return"\u2716 Error "+g+" while fetching file: "+v},r="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",h="failed",u="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function d(g,v,E){var f=new XMLHttpRequest;f.open("GET",g,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?v(f.responseText):f.status>=400?E(s(f.status,f.statusText)):E(r))},f.send(null)}function _(g){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(v){var E=Number(v[1]),f=v[2],p=v[3];return f?p?[E,Number(p)]:[E,void 0]:[E,E]}}t.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),t.hooks.add("before-sanity-check",function(g){var v=g.element;if(v.matches(u)){g.code="",v.setAttribute(a,l);var E=v.appendChild(document.createElement("CODE"));E.textContent=i;var f=v.getAttribute("data-src"),p=g.language;if(p==="none"){var b=(/\.(\w+)$/.exec(f)||[,"none"])[1];p=o[b]||b}t.util.setLanguage(E,p),t.util.setLanguage(v,p);var C=t.plugins.autoloader;C&&C.loadLanguages(p),d(f,function(w){v.setAttribute(a,c);var I=_(v.getAttribute("data-range"));if(I){var x=w.split(/\r\n?|\n/g),S=I[0],L=I[1]==null?x.length:I[1];S<0&&(S+=x.length),S=Math.max(0,Math.min(S-1,x.length)),L<0&&(L+=x.length),L=Math.max(0,Math.min(L,x.length)),w=x.slice(S,L).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(S+1))}E.textContent=w,t.highlightElement(E)},function(w){v.setAttribute(a,h),E.textContent=w})}}),t.plugins.fileHighlight={highlight:function(v){for(var E=(v||document).querySelectorAll(u),f=0,p;p=E[f++];)t.highlightElement(p)}};var y=!1;t.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Wa);var ve=Wa.exports;function h_(n){var L,U;let e,t,i,s,r,o,a=n[0]+1+"",l,c,h,u,d,_,y=ve.highlight(((L=n[1])==null?void 0:L.html)||"(No data received)",ve.languages.html)+"",g,v,E,f,p=ve.highlight(((U=n[1])==null?void 0:U.css)||"",ve.languages.css)+"",b,C,w,I,x,S;return w=new Rr({props:{html:n[2].html,css:n[2].css}}),{c(){e=W("div"),t=W("div"),i=W("h1"),s=Oe("Spectating Contestant "),r=W("code"),o=Oe("#"),l=Oe(a),c=be(),h=W("div"),u=W("div"),d=W("div"),_=W("pre"),g=be(),v=W("div"),E=be(),f=W("pre"),b=be(),C=W("div"),Cn(w.$$.fragment),O(i,"class","text-3xl"),O(_,"wrap","wrap"),O(v,"class","h-px bg-gray-700 my-12"),O(f,"wrap","wrap"),O(d,"class","absolute inset-0 overflow-auto p-8"),O(u,"class","bg-black flex-auto relative"),O(C,"class","flex-none w-[540px] h-[720px] pointer-events-none select-none relative"),O(h,"class","flex justify-center mt-4 gap-4 p-8"),O(t,"class","bg-sky-900 p-8 w-full h-full"),O(e,"class","fixed z-10 inset-0 overflow-y-auto"),O(e,"aria-labelledby","modal-title"),O(e,"role","dialog"),O(e,"aria-modal","true")},m(B,le){Ce(B,e,le),P(e,t),P(t,i),P(i,s),P(i,r),P(r,o),P(r,l),P(t,c),P(t,h),P(h,u),P(u,d),P(d,_),_.innerHTML=y,P(d,g),P(d,v),P(d,E),P(d,f),f.innerHTML=p,P(h,b),P(h,C),Ot(w,C,null),I=!0,x||(S=wi(e,"click",n[5]),x=!0)},p(B,[le]){var qt,Vt;(!I||le&1)&&a!==(a=B[0]+1+"")&&Tr(l,a),(!I||le&2)&&y!==(y=ve.highlight(((qt=B[1])==null?void 0:qt.html)||"(No data received)",ve.languages.html)+"")&&(_.innerHTML=y),(!I||le&2)&&p!==(p=ve.highlight(((Vt=B[1])==null?void 0:Vt.css)||"",ve.languages.css)+"")&&(f.innerHTML=p);const Ge={};le&4&&(Ge.html=B[2].html),le&4&&(Ge.css=B[2].css),w.$set(Ge)},i(B){I||(ie(w.$$.fragment,B),I=!0)},o(B){we(w.$$.fragment,B),I=!1},d(B){B&&fe(e),Dt(w),x=!1,S()}}}function d_(n,e,t){let i,s,r,o=ue,a=()=>(o(),o=tn(i,u=>t(1,r=u)),i);n.$$.on_destroy.push(()=>o());let{uid:l}=e,{index:c}=e;function h(u){Ar.call(this,n,u)}return n.$$set=u=>{"uid"in u&&t(4,l=u.uid),"index"in u&&t(0,c=u.index)},n.$$.update=()=>{n.$$.dirty&16&&a(t(3,i=Ba(l))),n.$$.dirty&2&&t(2,s=Nr(r))},[c,r,s,i,l,h]}class f_ extends In{constructor(e){super(),En(this,e,d_,h_,wn,{uid:4,index:0})}}function vr(n,e,t){const i=n.slice();return i[6]=e[t],i[8]=t,i}function br(n,e,t){const i=n.slice();return i[9]=e[t],i[8]=t,i}function wr(n){let e,t,i;function s(){return n[5](n[9],n[8])}return t=new u_({props:{uid:n[9],index:n[8]}}),t.$on("click",s),{c(){e=W("div"),Cn(t.$$.fragment)},m(r,o){Ce(r,e,o),Ot(t,e,null),i=!0},p(r,o){n=r;const a={};o&2&&(a.uid=n[9]),t.$set(a)},i(r){i||(ie(t.$$.fragment,r),i=!0)},o(r){we(t.$$.fragment,r),i=!1},d(r){r&&fe(e),Dt(t)}}}function Cr(n){let e;return{c(){e=W("div"),e.textContent=`(No Player)
      `,O(e,"class","flex items-center justify-center rounded text-2xl bg-slate-500 shadow-inner")},m(t,i){Ce(t,e,i)},p:ue,d(t){t&&fe(e)}}}function Er(n){let e,t;const i=[n[0]];let s={};for(let r=0;r<i.length;r+=1)s=qa(s,i[r]);return e=new f_({props:s}),e.$on("click",n[3]),{c(){Cn(e.$$.fragment)},m(r,o){Ot(e,r,o),t=!0},p(r,o){const a=o&1?Za(i,[el(r[0])]):{};e.$set(a)},i(r){t||(ie(e.$$.fragment,r),t=!0)},o(r){we(e.$$.fragment,r),t=!1},d(r){Dt(e,r)}}}function p_(n){let e,t,i,s,r,o,a,l,c=n[1],h=[];for(let g=0;g<c.length;g+=1)h[g]=wr(br(n,c,g));const u=g=>we(h[g],1,1,()=>{h[g]=null});let d=Ir(n[1]),_=[];for(let g=0;g<d.length;g+=1)_[g]=Cr(vr(n,d,g));let y=n[0]&&Er(n);return{c(){e=W("div"),t=W("div"),i=W("div"),i.innerHTML='<img src="https://citw01.pages.dev/example/reference.png" alt="Template"/>',s=be();for(let g=0;g<h.length;g+=1)h[g].c();r=be();for(let g=0;g<_.length;g+=1)_[g].c();o=be(),y&&y.c(),a=Ya(),O(i,"class","template-image svelte-1qggf9"),O(t,"class","grid-view svelte-1qggf9"),O(e,"class","flex items-center justify-center inset-0 absolute")},m(g,v){Ce(g,e,v),P(e,t),P(t,i),P(t,s);for(let E=0;E<h.length;E+=1)h[E].m(t,null);P(t,r);for(let E=0;E<_.length;E+=1)_[E].m(t,null);Ce(g,o,v),y&&y.m(g,v),Ce(g,a,v),l=!0},p(g,[v]){if(v&6){c=g[1];let E;for(E=0;E<c.length;E+=1){const f=br(g,c,E);h[E]?(h[E].p(f,v),ie(h[E],1)):(h[E]=wr(f),h[E].c(),ie(h[E],1),h[E].m(t,r))}for(_s(),E=c.length;E<h.length;E+=1)u(E);gs()}if(v&2){d=Ir(g[1]);let E;for(E=0;E<d.length;E+=1){const f=vr(g,d,E);_[E]?_[E].p(f,v):(_[E]=Cr(),_[E].c(),_[E].m(t,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=d.length}g[0]?y?(y.p(g,v),v&1&&ie(y,1)):(y=Er(g),y.c(),ie(y,1),y.m(a.parentNode,a)):y&&(_s(),we(y,1,1,()=>{y=null}),gs())},i(g){if(!l){for(let v=0;v<c.length;v+=1)ie(h[v]);ie(y),l=!0}},o(g){h=h.filter(Boolean);for(let v=0;v<h.length;v+=1)we(h[v]);we(y),l=!1},d(g){g&&fe(e),fs(h,g),fs(_,g),g&&fe(o),y&&y.d(g),g&&fe(a)}}}function Ir(n){return new Array(8-n.length).fill("")}function __(n,e,t){let i,s;Ga(n,o_,c=>t(4,s=c));let r=null;function o(c,h){t(0,r={uid:c,index:h})}function a(){t(0,r=null)}const l=(c,h)=>o(c,h);return n.$$.update=()=>{n.$$.dirty&16&&t(1,i=s||[])},[r,i,o,a,s,l]}class g_ extends In{constructor(e){super(),En(this,e,__,p_,wn,{})}}new g_({target:document.getElementById("app")});
