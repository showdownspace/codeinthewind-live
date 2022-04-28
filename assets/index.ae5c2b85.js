const Xo=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Xo();function Re(){}function Os(n){return n()}function Ri(){return Object.create(null)}function lt(n){n.forEach(Os)}function Jo(n){return typeof n=="function"}function Ds(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Zo(n){return Object.keys(n).length===0}function Ms(n,...e){if(n==null)return Re;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ea(n,e,t){n.$$.on_destroy.push(Ms(e,t))}function Ue(n,e){n.appendChild(e)}function we(n,e,t){n.insertBefore(e,t||null)}function ie(n){n.parentNode.removeChild(n)}function ta(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function qe(n){return document.createElement(n)}function It(n){return document.createTextNode(n)}function Bn(){return It(" ")}function na(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function ee(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ia(n){return Array.from(n.childNodes)}function Ls(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let Wn;function Ge(n){Wn=n}const Ve=[],yn=[],wt=[],Ai=[],sa=Promise.resolve();let vn=!1;function ra(){vn||(vn=!0,sa.then(Fs))}function Cn(n){wt.push(n)}const rn=new Set;let vt=0;function Fs(){const n=Wn;do{for(;vt<Ve.length;){const e=Ve[vt];vt++,Ge(e),oa(e.$$)}for(Ge(null),Ve.length=0,vt=0;yn.length;)yn.pop()();for(let e=0;e<wt.length;e+=1){const t=wt[e];rn.has(t)||(rn.add(t),t())}wt.length=0}while(Ve.length);for(;Ai.length;)Ai.pop()();vn=!1,rn.clear(),Ge(n)}function oa(n){if(n.fragment!==null){n.update(),lt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Cn)}}const bt=new Set;let se;function aa(){se={r:0,c:[],p:se}}function la(){se.r||lt(se.c),se=se.p}function ze(n,e){n&&n.i&&(bt.delete(n),n.i(e))}function En(n,e,t,i){if(n&&n.o){if(bt.has(n))return;bt.add(n),se.c.push(()=>{bt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function ca(n){n&&n.c()}function $s(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||Cn(()=>{const l=r.map(Os).filter(Jo);o?o.push(...l):lt(l),n.$$.on_mount=[]}),a.forEach(Cn)}function Bs(n,e){const t=n.$$;t.fragment!==null&&(lt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ha(n,e){n.$$.dirty[0]===-1&&(Ve.push(n),ra(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ws(n,e,t,i,s,r,o,a=[-1]){const l=Wn;Ge(n);const c=n.$$={fragment:null,ctx:null,props:r,update:Re,not_equal:s,bound:Ri(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ri(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...p)=>{const _=p.length?p[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&ha(n,h)),d}):[],c.update(),u=!0,lt(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=ia(e.target);c.fragment&&c.fragment.l(h),h.forEach(ie)}else c.fragment&&c.fragment.c();e.intro&&ze(n.$$.fragment),$s(n,e.target,e.anchor,e.customElement),Fs()}Ge(l)}class Hs{$destroy(){Bs(this,1),this.$destroy=Re}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Zo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(n,e){if(!n)throw Oe(e)},Oe=function(n){return new Error("Firebase Database ("+Us.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ua=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ua(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},js=function(n){const e=Vs(n);return Hn.encodeByteArray(e,!0)},qs=function(n){return js(n).replace(/\./g,"")},xi=function(n){try{return Hn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n){return Gs(void 0,n)}function Gs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!fa(t)||(n[t]=Gs(n[t],e[t]));return n}function fa(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zs(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pa())}function _a(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ys(){return Us.NODE_ADMIN===!0}function Ks(){return typeof indexedDB=="object"}function Qs(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function ma(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="FirebaseError";class ct extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ya,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}}class Vt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?va(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,i)}}function va(n,e){return n.replace(Ca,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ca=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return JSON.parse(n)}function x(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ze(xi(r[0])||""),t=Ze(xi(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ea=function(n){const e=Xs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},wa=function(n){const e=Xs(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ae(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ki(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function St(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Pi(r)&&Pi(o)){if(!St(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Pi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Js(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jt=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Sa=1e3,Na=2,Ra=4*60*60*1e3,Aa=.5;function Oi(n,e=Sa,t=Na){const i=e*Math.pow(t,n),s=Math.round(Aa*i*(Math.random()-.5)*2);return Math.min(Ra,i+s)}/**
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
 */function ht(n){return n&&n._delegate?n._delegate:n}/**
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
 */function je(n,e){return new Promise((t,i)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class Di{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new Zs(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new er(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Zs{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new er(this._transaction.objectStore(e))}}class er{constructor(e){this._store=e}index(e){return new Mi(this._store.index(e))}createIndex(e,t,i){return new Mi(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return je(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return je(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return je(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return je(e,"Error clearing IndexedDB object store")}}class Mi{constructor(e){this._index=e}get(e){const t=this._index.get(e);return je(t,"Error reading from IndexedDB")}}function tr(n,e,t){return new Promise((i,s)=>{try{const r=indexedDB.open(n,e);r.onsuccess=o=>{i(new Di(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{t(new Di(r.result),o.oldVersion,o.newVersion,new Zs(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class z{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const te="[DEFAULT]";/**
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
 */class xa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Un;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pa(e))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=te){return this.instances.has(e)}getOptions(e=te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ka(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=te){return this.component?this.component.multipleInstances?e:te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ka(n){return n===te?void 0:n}function Pa(n){return n.instantiationMode==="EAGER"}/**
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
 */class Oa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(w||(w={}));const Da={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},Ma=w.INFO,La={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},Fa=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=La[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vn{constructor(e){this.name=e,this._logLevel=Ma,this._logHandler=Fa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}/**
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
 */class $a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ba(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ba(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wn="@firebase/app",Li="0.7.21";/**
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
 */const jn=new Vn("@firebase/app"),Wa="@firebase/app-compat",Ha="@firebase/analytics-compat",Ua="@firebase/analytics",Va="@firebase/app-check-compat",ja="@firebase/app-check",qa="@firebase/auth",Ga="@firebase/auth-compat",za="@firebase/database",Ya="@firebase/database-compat",Ka="@firebase/functions",Qa="@firebase/functions-compat",Xa="@firebase/installations",Ja="@firebase/installations-compat",Za="@firebase/messaging",el="@firebase/messaging-compat",tl="@firebase/performance",nl="@firebase/performance-compat",il="@firebase/remote-config",sl="@firebase/remote-config-compat",rl="@firebase/storage",ol="@firebase/storage-compat",al="@firebase/firestore",ll="@firebase/firestore-compat",cl="firebase",hl="9.6.11";/**
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
 */const nr="[DEFAULT]",ul={[wn]:"fire-core",[Wa]:"fire-core-compat",[Ua]:"fire-analytics",[Ha]:"fire-analytics-compat",[ja]:"fire-app-check",[Va]:"fire-app-check-compat",[qa]:"fire-auth",[Ga]:"fire-auth-compat",[za]:"fire-rtdb",[Ya]:"fire-rtdb-compat",[Ka]:"fire-fn",[Qa]:"fire-fn-compat",[Xa]:"fire-iid",[Ja]:"fire-iid-compat",[Za]:"fire-fcm",[el]:"fire-fcm-compat",[tl]:"fire-perf",[nl]:"fire-perf-compat",[il]:"fire-rc",[sl]:"fire-rc-compat",[rl]:"fire-gcs",[ol]:"fire-gcs-compat",[al]:"fire-fst",[ll]:"fire-fst-compat","fire-js":"fire-js",[cl]:"fire-js-all"};/**
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
 */const Nt=new Map,bn=new Map;function dl(n,e){try{n.container.addComponent(e)}catch(t){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function X(n){const e=n.name;if(bn.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;bn.set(e,n);for(const t of Nt.values())dl(t,n);return!0}function ut(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const fl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},le=new Vt("app","Firebase",fl);/**
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
 */class pl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const _l=hl;function gl(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:nr,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw le.create("bad-app-name",{appName:String(i)});const s=Nt.get(i);if(s){if(St(n,s.options)&&St(t,s.config))return s;throw le.create("duplicate-app",{appName:i})}const r=new Oa(i);for(const a of bn.values())r.addComponent(a);const o=new pl(n,t,r);return Nt.set(i,o),o}function ir(n=nr){const e=Nt.get(n);if(!e)throw le.create("no-app",{appName:n});return e}function j(n,e,t){var i;let s=(i=ul[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}X(new z(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ml="firebase-heartbeat-database",yl=1,et="firebase-heartbeat-store";let on=null;function sr(){return on||(on=tr(ml,yl,(n,e)=>{switch(e){case 0:n.createObjectStore(et)}}).catch(n=>{throw le.create("storage-open",{originalErrorMessage:n.message})})),on}async function vl(n){try{return(await sr()).transaction(et).objectStore(et).get(rr(n))}catch(e){throw le.create("storage-get",{originalErrorMessage:e.message})}}async function Fi(n,e){try{const i=(await sr()).transaction(et,"readwrite");return await i.objectStore(et).put(e,rr(n)),i.complete}catch(t){throw le.create("storage-set",{originalErrorMessage:t.message})}}function rr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cl=1024,El=30*24*60*60*1e3;class wl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Il(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$i();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=El}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$i(),{heartbeatsToSend:t,unsentEntries:i}=bl(this._heartbeatsCache.heartbeats),s=qs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function $i(){return new Date().toISOString().substring(0,10)}function bl(n,e=Cl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Bi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Il{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ks()?Qs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bi(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Tl(n){X(new z("platform-logger",e=>new $a(e),"PRIVATE")),X(new z("heartbeat",e=>new wl(e),"PRIVATE")),j(wn,Li,n),j(wn,Li,"esm2017"),j("fire-js","")}Tl("");const Wi="@firebase/database",Hi="0.12.8";/**
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
 */let or="";function Sl(n){or=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ze(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Y(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nl(e)}}catch{}return new Rl},re=ar("localStorage"),In=ar("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Vn("@firebase/database"),Al=function(){let n=1;return function(){return n++}}(),lr=function(n){const e=Ta(n),t=new Ia;t.update(e);const i=t.digest();return Hn.encodeByteArray(i)},dt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=dt.apply(null,i):typeof i=="object"?e+=x(i):e+=i,e+=" "}return e};let ae=null,Ui=!0;const xl=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Te.logLevel=w.VERBOSE,ae=Te.log.bind(Te),e&&In.set("logging_enabled",!0)):typeof n=="function"?ae=n:(ae=null,In.remove("logging_enabled"))},P=function(...n){if(Ui===!0&&(Ui=!1,ae===null&&In.get("logging_enabled")===!0&&xl(!0)),ae){const e=dt.apply(null,n);ae(e)}},ft=function(n){return function(...e){P(n,...e)}},Tn=function(...n){const e="FIREBASE INTERNAL ERROR: "+dt(...n);Te.error(e)},ce=function(...n){const e=`FIREBASE FATAL ERROR: ${dt(...n)}`;throw Te.error(e),new Error(e)},F=function(...n){const e="FIREBASE WARNING: "+dt(...n);Te.warn(e)},kl=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Pl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},xe="[MIN_NAME]",he="[MAX_NAME]",De=function(n,e){if(n===e)return 0;if(n===xe||e===he)return-1;if(e===xe||n===he)return 1;{const t=Vi(n),i=Vi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ol=function(n,e){return n===e?0:n<e?-1:1},Fe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+x(e))},qn=function(n){if(typeof n!="object"||n===null)return x(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=x(e[i]),t+=":",t+=qn(n[e[i]]);return t+="}",t},hr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function L(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ur=function(n){f(!cr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Dl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ml=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ll(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Fl=new RegExp("^-?(0*)\\d{1,10}$"),$l=-2147483648,Bl=2147483647,Vi=function(n){if(Fl.test(n)){const e=Number(n);if(e>=$l&&e<=Bl)return e}return null},pt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw F("Exception was thrown by user callback.",t),e},Math.floor(0))}},Wl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ye=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Hl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){F(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(P("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)}}class Sn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="5",dr="v",fr="s",pr="r",_r="f",gr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mr="ls",Vl="p",Nn="ac",yr="websocket",vr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=re.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&re.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ql(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Cr(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===yr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===vr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ql(n)&&(t.ns=n.namespace);const s=[];return L(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.counters_={}}incrementCounter(e,t=1){Y(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return da(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={},ln={};function zn(n){const e=n.toString();return an[e]||(an[e]=new Gl),an[e]}function zl(n,e){const t=n.toString();return ln[t]||(ln[t]=e()),ln[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&pt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="start",Kl="close",Ql="pLPCommand",Xl="pRTLPCB",Er="id",wr="pw",br="ser",Jl="cb",Zl="seg",ec="ts",tc="d",nc="dframe",Ir=1870,Tr=30,ic=Ir-Tr,sc=25e3,rc=3e4;class be{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ft(e),this.stats_=zn(t),this.urlFn=l=>(this.appCheckToken&&(l[Nn]=this.appCheckToken),Cr(t,vr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rc)),Pl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yn((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ji)this.id=a,this.password=l;else if(o===Kl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ji]="t",i[br]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Jl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[dr]=Gn,this.transportSessionId&&(i[fr]=this.transportSessionId),this.lastSessionId&&(i[mr]=this.lastSessionId),this.applicationId&&(i[Vl]=this.applicationId),this.appCheckToken&&(i[Nn]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&gr.test(location.hostname)&&(i[pr]=_r);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){be.forceAllow_=!0}static forceDisallow(){be.forceDisallow_=!0}static isAvailable(){return be.forceAllow_?!0:!be.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Dl()&&!Ml()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=js(t),s=hr(i,ic);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[nc]="t",i[Er]=e,i[wr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=x(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Al(),window[Ql+this.uniqueCallbackIdentifier]=e,window[Xl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yn.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){P("frame writing exception"),a.stack&&P(a.stack),P(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||P("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Er]=this.myID,e[wr]=this.myPW,e[br]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tr+i.length<=Ir;){const o=this.pendingSegs.shift();i=i+"&"+Zl+s+"="+o.seg+"&"+ec+s+"="+o.ts+"&"+tc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(sc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{P("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=16384,ac=45e3;let Rt=null;typeof MozWebSocket!="undefined"?Rt=MozWebSocket:typeof WebSocket!="undefined"&&(Rt=WebSocket);class W{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ft(this.connId),this.stats_=zn(t),this.connURL=W.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[dr]=Gn,typeof location!="undefined"&&location.hostname&&gr.test(location.hostname)&&(r[pr]=_r),t&&(r[fr]=t),i&&(r[mr]=i),s&&(r[Nn]=s),Cr(e,yr,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,re.set("previous_websocket_failure",!0);try{if(!Ys()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Rt(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){W.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Rt!==null&&!W.forceDisallow_}static previouslyFailed(){return re.isInMemoryStorage||re.get("previous_websocket_failure")===!0}markConnectionHealthy(){re.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ze(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=hr(t,oc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ac))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}W.responsesRequiredToBeHealthy=2;W.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[be,W]}initTransports_(e){const t=W&&W.isAvailable();let i=t&&!W.previouslyFailed();if(e.webSocketOnly&&(t||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[W];else{const s=this.transports_=[];for(const r of Kn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=6e4,cc=5e3,hc=10*1024,uc=100*1024,cn="t",qi="d",dc="s",Gi="r",fc="e",zi="o",Yi="a",Ki="n",Qi="p",pc="h";class _c{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ft("c:"+this.id+":"),this.transportManager_=new Kn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ye(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cn in e){const t=e[cn];t===Yi?this.upgradeIfSecondaryHealthy_():t===Gi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fe("t",e),i=Fe("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ki,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fe("t",e),i=Fe("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fe(cn,e);if(qi in e){const i=e[qi];if(t===pc)this.onHandshake_(i);else if(t===Ki){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===dc?this.onConnectionShutdown_(i):t===Gi?this.onReset_(i):t===fc?Tn("Server Error: "+i):t===zi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gn!==i&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ye(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ye(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(re.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Nr{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!zs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new At}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=32,Ji=768;class E{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new E("")}function y(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function J(n){return n.pieces_.length-n.pieceNum_}function b(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new E(n.pieces_,e)}function Rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ar(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new E(e,0)}function N(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof E)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new E(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function D(n,e){const t=y(n),i=y(e);if(t===null)return e;if(t===i)return D(b(n),b(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qn(n,e){if(J(n)!==J(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function H(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(J(n)>J(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class mc{constructor(e,t){this.errorPrefix_=t,this.parts_=Ar(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=jt(this.parts_[i]);kr(this)}}function yc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=jt(e),kr(n)}function vc(n){const e=n.parts_.pop();n.byteLength_-=jt(e),n.parts_.length>0&&(n.byteLength_-=1)}function kr(n){if(n.byteLength_>Ji)throw new Error(n.errorPrefix_+"has a key path longer than "+Ji+" bytes ("+n.byteLength_+").");if(n.parts_.length>Xi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xi+") or object contains a cycle "+ne(n))}function ne(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Nr{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Xn}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=1e3,Cc=60*5*1e3,Ec=3*1e3,Zi=30*1e3,wc=1.3,bc=3e4,Ic="server_kill",es=3;class G extends Sr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=G.nextPersistentConnectionId_++,this.log_=ft("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$e,this.maxReconnectDelay_=Cc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ys())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&At.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(x(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Un,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Ec),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;G.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Y(e,"w")){const i=Ae(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();F(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ea(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Tn("Unrecognized action received from server: "+x(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bc&&(this.reconnectDelay_=$e),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+G.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?P("getToken() completed but was canceled"):(P("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _c(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{F(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ic)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&F(h),l())}}}interrupt(e){P("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){P("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ki(this.interruptReasons_)&&(this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>qn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new E(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){P("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=es&&(this.reconnectDelay_=Zi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){P("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=es&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+or.replace(/\./g,"-")]=1,zs()?e["framework.cordova"]=1:ga()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=At.getInstance().currentlyOnline();return ki(this.interruptReasons_)&&e}}G.nextPersistentConnectionId_=0;G.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new m(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new m(xe,e),s=new m(xe,t);return this.compare(i,s)!==0}minPost(){return m.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct;class Pr extends qt{static get __EMPTY_NODE(){return Ct}static set __EMPTY_NODE(e){Ct=e}compare(e,t){return De(e.name,t.name)}isDefinedOn(e){throw Oe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return m.MIN}maxPost(){return new m(he,Ct)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new m(e,Ct)}toString(){return".key"}}const Se=new Pr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class A{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:A.RED,this.left=s!=null?s:M.EMPTY_NODE,this.right=r!=null?r:M.EMPTY_NODE}copy(e,t,i,s,r){return new A(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return M.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return M.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,A.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,A.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}A.RED=!0;A.BLACK=!1;class Tc{copy(e,t,i,s,r){return this}insert(e,t,i){return new A(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class M{constructor(e,t=M.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new M(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,A.BLACK,null,null))}remove(e){return new M(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,A.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Et(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Et(this.root_,null,this.comparator_,!0,e)}}M.EMPTY_NODE=new Tc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e){return De(n.name,e.name)}function Jn(n,e){return De(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;function Nc(n){Rn=n}const Or=function(n){return typeof n=="number"?"number:"+ur(n):"string:"+n},Dr=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Y(e,".sv"),"Priority must be a string or number.")}else f(n===Rn||n.isEmpty(),"priority of unexpected type.");f(n===Rn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class R{constructor(e,t=R.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dr(this.priorityNode_)}static set __childrenNodeConstructor(e){ts=e}static get __childrenNodeConstructor(){return ts}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new R(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:y(e)===".priority"?this.priorityNode_:R.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:R.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=y(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||J(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,R.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Or(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ur(this.value_):e+=this.value_,this.lazyHash_=lr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===R.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof R.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=R.VALUE_TYPE_ORDER.indexOf(t),r=R.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}R.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr,Lr;function Rc(n){Mr=n}function Ac(n){Lr=n}class xc extends qt{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?De(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return m.MIN}maxPost(){return new m(he,new R("[PRIORITY-POST]",Lr))}makePost(e,t){const i=Mr(e);return new m(t,new R("[PRIORITY-POST]",i))}toString(){return".priority"}}const S=new xc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=Math.log(2);class Pc{constructor(e){const t=r=>parseInt(Math.log(r)/kc,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xt=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new A(d,h.node,A.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=s(l,p),T=s(p+1,c);return h=n[p],d=t?t(h):h,new A(d,h.node,A.BLACK,_,T)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,T){const k=h-_,nn=h;h-=_;const yt=s(k+1,nn),sn=n[k],Qo=t?t(sn):sn;p(new A(Qo,sn.node,T,null,yt))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const T=l.nextBitIsOne(),k=Math.pow(2,l.count-(_+1));T?d(k,A.BLACK):(d(k,A.BLACK),d(k,A.RED))}return u},o=new Pc(n.length),a=r(o);return new M(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const Ee={};class q{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(Ee&&S,"ChildrenNode.ts has not been loaded"),hn=hn||new q({".priority":Ee},{".priority":S}),hn}get(e){const t=Ae(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof M?t:null}hasIndex(e){return Y(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Se,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(m.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=xt(i,e.getCompare()):a=Ee;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new q(u,c)}addToIndexes(e,t){const i=Tt(this.indexes_,(s,r)=>{const o=Ae(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===Ee)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(m.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xt(a,o.getCompare())}else return Ee;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new m(e.name,a))),l.insert(e,e.node)}});return new q(i,this.indexSet_)}removeFromIndexes(e,t){const i=Tt(this.indexes_,s=>{if(s===Ee)return s;{const r=t.get(e.name);return r?s.remove(new m(e.name,r)):s}});return new q(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be;class g{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Be||(Be=new g(new M(Jn),null,q.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Be}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Be:t}}getChild(e){const t=y(e);return t===null?this:this.getImmediateChild(t).getChild(b(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new m(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Be:this.priorityNode_;return new g(s,o,r)}}updateChild(e,t){const i=y(e);if(i===null)return t;{f(y(e)!==".priority"||J(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(b(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(S,(o,a)=>{t[o]=a.val(e),i++,r&&g.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Or(this.getPriority().val())+":"),this.forEachChild(S,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":lr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new m(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new m(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new m(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,m.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,m.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_t?-1:0}withIndex(e){if(e===Se||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Se||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(S),s=t.getIterator(S);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Se?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Oc extends g{constructor(){super(new M(Jn),g.EMPTY_NODE,q.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const _t=new Oc;Object.defineProperties(m,{MIN:{value:new m(xe,g.EMPTY_NODE)},MAX:{value:new m(he,_t)}});Pr.__EMPTY_NODE=g.EMPTY_NODE;R.__childrenNodeConstructor=g;Nc(_t);Ac(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=!0;function O(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new R(t,O(e))}if(!(n instanceof Array)&&Dc){const t=[];let i=!1;if(L(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=O(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new m(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=xt(t,Sc,o=>o.name,Jn);if(i){const o=xt(t,S.getCompare());return new g(r,O(e),new q({".priority":o},{".priority":S}))}else return new g(r,O(e),q.Default)}else{let t=g.EMPTY_NODE;return L(n,(i,s)=>{if(Y(n,i)&&i.substring(0,1)!=="."){const r=O(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(O(e))}}Rc(O);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends qt{constructor(e){super(),this.indexPath_=e,f(!v(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?De(e.name,t.name):r}makePost(e,t){const i=O(e),s=g.EMPTY_NODE.updateChild(this.indexPath_,i);return new m(t,s)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,_t);return new m(he,e)}toString(){return Ar(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends qt{compare(e,t){const i=e.node.compareTo(t.node);return i===0?De(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return m.MIN}maxPost(){return m.MAX}makePost(e,t){const i=O(e);return new m(t,i)}toString(){return".value"}}const Fc=new Lc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return{type:"value",snapshotNode:n}}function ke(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function nt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $c(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(tt(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ke(t,i)):o.trackChildChange(nt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(S,(s,r)=>{t.hasChild(s)||i.trackChildChange(tt(s,r))}),t.isLeafNode()||t.forEachChild(S,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(nt(s,r,o))}else i.trackChildChange(ke(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.indexedFilter_=new Zn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=it.getStartPost_(e),this.endPost_=it.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new m(t,i))||(i=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=g.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(S,(o,a)=>{r.matches(new m(o,a))||(s=s.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.rangedFilter_=new it(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new m(t,i))||(i=g.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(g.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,p)=>h(p,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:s=s.updateImmediateChild(h.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new m(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(nt(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(tt(t,h));const T=a.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ke(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(tt(c.name,c.node)),r.trackChildChange(ke(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=S}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xe}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:he}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===S}copy(){const e=new ei;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wc(n){return n.loadsAllData()?new Zn(n.getIndex()):n.hasLimit()?new Bc(n):new it(n)}function ns(n){const e={};if(n.isDefault())return e;let t;return n.index_===S?t="$priority":n.index_===Fc?t="$value":n.index_===Se?t="$key":(f(n.index_ instanceof Mc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=x(t),n.startSet_&&(e.startAt=x(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+x(n.indexStartName_))),n.endSet_&&(e.endAt=x(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+x(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function is(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==S&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Sr{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ft("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kt.getListenId_(e,i),a={};this.listens_[o]=a;const l=ns(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ae(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=kt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ns(e._queryParams),i=e._path.toString(),s=new Un;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ba(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ze(a.responseText)}catch{F("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&F("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return{value:null,children:new Map}}function $r(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=y(e);n.children.has(i)||n.children.set(i,Pt());const s=n.children.get(i);e=b(e),$r(s,e,t)}}function An(n,e,t){n.value!==null?t(e,n.value):Uc(n,(i,s)=>{const r=new E(e.toString()+"/"+i);An(s,r,t)})}function Uc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=10*1e3,jc=30*1e3,qc=5*60*1e3;class Gc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vc(e);const i=ss+(jc-ss)*Math.random();Ye(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;L(e,(s,r)=>{r>0&&Y(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ye(this.reportStats_.bind(this),Math.floor(Math.random()*2*qc))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(U||(U={}));function Br(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ti(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ni(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=U.ACK_USER_WRITE,this.source=Br()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new E(e));return new Ot(C(),t,this.revert)}}else return f(y(this.path)===e,"operationForChild called for unrelated child."),new Ot(b(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.source=e,this.path=t,this.type=U.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new st(this.source,C()):new st(this.source,b(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=U.OVERWRITE}operationForChild(e){return v(this.path)?new ue(this.source,C(),this.snap.getImmediateChild(e)):new ue(this.source,b(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=U.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new E(e));return t.isEmpty()?null:t.value?new ue(this.source,C(),t.value):new rt(this.source,C(),t)}else return f(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rt(this.source,b(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=y(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yc(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($c(o.childName,o.snapshotNode))}),We(n,s,"child_removed",e,i,t),We(n,s,"child_added",e,i,t),We(n,s,"child_moved",r,i,t),We(n,s,"child_changed",e,i,t),We(n,s,"value",e,i,t),s}function We(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Qc(n,a,l)),o.forEach(a=>{const l=Kc(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Kc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Qc(n,e,t){if(e.childName==null||t.childName==null)throw Oe("Should only compare child_ events.");const i=new m(e.childName,e.snapshotNode),s=new m(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){return{eventCache:n,serverCache:e}}function Ke(n,e,t,i){return Gt(new de(e,t,i),n.serverCache)}function Wr(n,e,t,i){return Gt(n.eventCache,new de(e,t,i))}function xn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function fe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const Xc=()=>(un||(un=new M(Ol)),un);class I{constructor(e,t=Xc()){this.value=e,this.children=t}static fromObject(e){let t=new I(null);return L(e,(i,s)=>{t=t.set(new E(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const i=y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(b(e),t);return r!=null?{path:N(new E(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=y(e),i=this.children.get(t);return i!==null?i.subtree(b(e)):new I(null)}}set(e,t){if(v(e))return new I(t,this.children);{const i=y(e),r=(this.children.get(i)||new I(null)).set(b(e),t),o=this.children.insert(i,r);return new I(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new I(null):new I(null,this.children);{const t=y(e),i=this.children.get(t);if(i){const s=i.remove(b(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new I(null):new I(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=y(e),i=this.children.get(t);return i?i.get(b(e)):null}}setTree(e,t){if(v(e))return t;{const i=y(e),r=(this.children.get(i)||new I(null)).setTree(b(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new I(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(N(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(v(e))return null;{const r=y(e),o=this.children.get(r);return o?o.findOnPath_(b(e),N(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,i){if(v(e))return this;{this.value&&i(t,this.value);const s=y(e),r=this.children.get(s);return r?r.foreachOnPath_(b(e),N(t,s),i):new I(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(N(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.writeTree_=e}static empty(){return new V(new I(null))}}function Qe(n,e,t){if(v(e))return new V(new I(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=D(s,e);return r=r.updateChild(o,t),new V(n.writeTree_.set(s,r))}else{const s=new I(t),r=n.writeTree_.setTree(e,s);return new V(r)}}}function rs(n,e,t){let i=n;return L(t,(s,r)=>{i=Qe(i,N(e,s),r)}),i}function os(n,e){if(v(e))return V.empty();{const t=n.writeTree_.setTree(e,new I(null));return new V(t)}}function kn(n,e){return ye(n,e)!=null}function ye(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(D(t.path,e)):null}function as(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(S,(i,s)=>{e.push(new m(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new m(i,s.value))}),e}function Q(n,e){if(v(e))return n;{const t=ye(n,e);return t!=null?new V(new I(t)):new V(n.writeTree_.subtree(e))}}function Pn(n){return n.writeTree_.isEmpty()}function Pe(n,e){return Hr(C(),n.writeTree_,e)}function Hr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Hr(N(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(N(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e){return qr(e,n)}function Jc(n,e,t,i,s){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Qe(n.visibleWrites,e,t)),n.lastWriteId=i}function Zc(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function eh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&th(a,i.path)?s=!1:H(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return nh(n),!0;if(i.snap)n.visibleWrites=os(n.visibleWrites,i.path);else{const a=i.children;L(a,l=>{n.visibleWrites=os(n.visibleWrites,N(i.path,l))})}return!0}else return!1}function th(n,e){if(n.snap)return H(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&H(N(n.path,t),e))return!0;return!1}function nh(n){n.visibleWrites=Ur(n.allWrites,ih,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ih(n){return n.visible}function Ur(n,e,t){let i=V.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)H(t,o)?(a=D(t,o),i=Qe(i,a,r.snap)):H(o,t)&&(a=D(o,t),i=Qe(i,C(),r.snap.getChild(a)));else if(r.children){if(H(t,o))a=D(t,o),i=rs(i,a,r.children);else if(H(o,t))if(a=D(o,t),v(a))i=rs(i,C(),r.children);else{const l=Ae(r.children,y(a));if(l){const c=l.getChild(b(a));i=Qe(i,C(),c)}}}else throw Oe("WriteRecord should have .snap or .children")}}return i}function Vr(n,e,t,i,s){if(!i&&!s){const r=ye(n.visibleWrites,e);if(r!=null)return r;{const o=Q(n.visibleWrites,e);if(Pn(o))return t;if(t==null&&!kn(o,C()))return null;{const a=t||g.EMPTY_NODE;return Pe(o,a)}}}else{const r=Q(n.visibleWrites,e);if(!s&&Pn(r))return t;if(!s&&t==null&&!kn(r,C()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(H(c.path,e)||H(e,c.path))},a=Ur(n.allWrites,o,e),l=t||g.EMPTY_NODE;return Pe(a,l)}}}function sh(n,e,t){let i=g.EMPTY_NODE;const s=ye(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(S,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Q(n.visibleWrites,e);return t.forEachChild(S,(o,a)=>{const l=Pe(Q(r,new E(o)),a);i=i.updateImmediateChild(o,l)}),as(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Q(n.visibleWrites,e);return as(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function rh(n,e,t,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,t);if(kn(n.visibleWrites,r))return null;{const o=Q(n.visibleWrites,r);return Pn(o)?s.getChild(t):Pe(o,s.getChild(t))}}function oh(n,e,t,i){const s=N(e,t),r=ye(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Q(n.visibleWrites,s);return Pe(o,i.getNode().getImmediateChild(t))}else return null}function ah(n,e){return ye(n.visibleWrites,e)}function lh(n,e,t,i,s,r,o){let a;const l=Q(n.visibleWrites,e),c=ye(l,C());if(c!=null)a=c;else if(t!=null)a=Pe(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function ch(){return{visibleWrites:V.empty(),allWrites:[],lastWriteId:-1}}function Dt(n,e,t,i){return Vr(n.writeTree,n.treePath,e,t,i)}function si(n,e){return sh(n.writeTree,n.treePath,e)}function ls(n,e,t,i){return rh(n.writeTree,n.treePath,e,t,i)}function Mt(n,e){return ah(n.writeTree,N(n.treePath,e))}function hh(n,e,t,i,s,r){return lh(n.writeTree,n.treePath,e,t,i,s,r)}function ri(n,e,t){return oh(n.writeTree,n.treePath,e,t)}function jr(n,e){return qr(N(n.treePath,e),n.writeTree)}function qr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,nt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,tt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ke(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,nt(i,e.snapshotNode,s.oldSnap));else throw Oe("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Gr=new dh;class oi{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new de(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ri(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fe(this.viewCache_),r=hh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){return{filter:n}}function ph(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _h(n,e,t,i,s){const r=new uh;let o,a;if(t.type===U.OVERWRITE){const c=t;c.source.fromUser?o=On(n,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Lt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===U.MERGE){const c=t;c.source.fromUser?o=mh(n,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Dn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===U.ACK_USER_WRITE){const c=t;c.revert?o=Ch(n,e,c.path,i,s,r):o=yh(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===U.LISTEN_COMPLETE)o=vh(n,e,t.path,i,r);else throw Oe("Unknown operation type: "+t.type);const l=r.getChanges();return gh(e,o,l),{viewCache:o,changes:l}}function gh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Fr(xn(e)))}}function zr(n,e,t,i,s,r){const o=e.eventCache;if(Mt(i,t)!=null)return e;{let a,l;if(v(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fe(e),u=c instanceof g?c:g.EMPTY_NODE,h=si(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Dt(i,fe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=y(t);if(c===".priority"){f(J(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ls(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=b(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ls(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ri(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ke(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Lt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=y(t);if(!l.isCompleteForPath(t)&&J(t)>1)return e;const _=b(t),k=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),p,k,_,Gr,null)}const h=Wr(e,c,l.isFullyInitialized()||v(t),u.filtersNodes()),d=new oi(s,h,r);return zr(n,h,t,s,d,a)}function On(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new oi(s,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ke(e,c,!0,n.filter.filtersNodes());else{const h=y(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Ke(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=b(t),p=a.getNode().getImmediateChild(h);let _;if(v(d))_=i;else{const T=u.getCompleteChild(h);T!=null?Rr(d)===".priority"&&T.getChild(xr(d)).isEmpty()?_=T:_=T.updateChild(d,i):_=g.EMPTY_NODE}if(p.equals(_))l=e;else{const T=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=Ke(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function cs(n,e){return n.eventCache.isCompleteForChild(e)}function mh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=N(t,l);cs(e,y(u))&&(a=On(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=N(t,l);cs(e,y(u))||(a=On(n,a,u,c,s,r,o))}),a}function hs(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Dn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=i:c=new I(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=hs(n,p,d);l=Lt(n,l,new E(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),T=hs(n,_,d);l=Lt(n,l,new E(h),T,s,r,o,a)}}),l}function yh(n,e,t,i,s,r,o){if(Mt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Lt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(v(t)){let c=new I(null);return l.getNode().forEachChild(Se,(u,h)=>{c=c.set(new E(u),h)}),Dn(n,e,t,c,s,r,a,o)}else return e}else{let c=new I(null);return i.foreach((u,h)=>{const d=N(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Dn(n,e,t,c,s,r,a,o)}}function vh(n,e,t,i,s){const r=e.serverCache,o=Wr(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return zr(n,o,t,i,Gr,s)}function Ch(n,e,t,i,s,r){let o;if(Mt(i,t)!=null)return e;{const a=new oi(i,e,s),l=e.eventCache.getNode();let c;if(v(t)||y(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Dt(i,fe(e));else{const h=e.serverCache.getNode();f(h instanceof g,"serverChildren would be complete if leaf node"),u=si(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=y(t);let h=ri(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,b(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,g.EMPTY_NODE,b(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dt(i,fe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Mt(i,C())!=null,Ke(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Zn(i.getIndex()),r=Wc(i);this.processor_=fh(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),u=new de(l,o.isFullyInitialized(),s.filtersNodes()),h=new de(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gt(h,u),this.eventGenerator_=new zc(this.query_)}get query(){return this.query_}}function wh(n){return n.viewCache_.serverCache.getNode()}function bh(n,e){const t=fe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(y(e)).isEmpty())?t.getChild(e):null}function us(n){return n.eventRegistrations_.length===0}function Ih(n,e){n.eventRegistrations_.push(e)}function ds(n,e,t){const i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function fs(n,e,t,i){e.type===U.MERGE&&e.source.queryId!==null&&(f(fe(n.viewCache_),"We should always have a full cache before handling merges"),f(xn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=_h(n.processor_,s,e,t,i);return ph(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Yr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Th(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(S,(r,o)=>{i.push(ke(r,o))}),t.isFullyInitialized()&&i.push(Fr(t.getNode())),Yr(n,i,t.getNode(),e)}function Yr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Yc(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;class Sh{constructor(){this.views=new Map}}function Nh(n){f(!Ft,"__referenceConstructor has already been defined"),Ft=n}function Rh(){return f(Ft,"Reference.ts has not been loaded"),Ft}function Ah(n){return n.views.size===0}function ai(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),fs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(fs(o,e,t,i));return r}}function xh(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Dt(t,s?i:null),l=!1;a?l=!0:i instanceof g?(a=si(t,i),l=!1):(a=g.EMPTY_NODE,l=!1);const c=Gt(new de(a,l,!1),new de(i,s,!1));return new Eh(e,c)}return o}function kh(n,e,t,i,s,r){const o=xh(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ih(o,t),Th(o,t)}function Ph(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Z(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ds(c,t,i)),us(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ds(l,t,i)),us(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Z(n)&&r.push(new(Rh())(e._repo,e._path)),{removed:r,events:o}}function Kr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(const i of n.views.values())t=t||bh(i,e);return t}function Qr(n,e){if(e._queryParams.loadsAllData())return zt(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Xr(n,e){return Qr(n,e)!=null}function Z(n){return zt(n)!=null}function zt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;function Oh(n){f(!$t,"__referenceConstructor has already been defined"),$t=n}function Dh(){return f($t,"Reference.ts has not been loaded"),$t}let Mh=1;class ps{constructor(e){this.listenProvider_=e,this.syncPointTree_=new I(null),this.pendingWriteTree_=ch(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lh(n,e,t,i,s){return Jc(n.pendingWriteTree_,e,t,i,s),s?gt(n,new ue(Br(),e,t)):[]}function Ie(n,e,t=!1){const i=Zc(n.pendingWriteTree_,e);if(eh(n.pendingWriteTree_,e)){let r=new I(null);return i.snap!=null?r=r.set(C(),!0):L(i.children,o=>{r=r.set(new E(o),!0)}),gt(n,new Ot(i.path,r,t))}else return[]}function Yt(n,e,t){return gt(n,new ue(ti(),e,t))}function Fh(n,e,t){const i=I.fromObject(t);return gt(n,new rt(ti(),e,i))}function $h(n,e){return gt(n,new st(ti(),e))}function Bh(n,e,t){const i=li(n,t);if(i){const s=ci(i),r=s.path,o=s.queryId,a=D(r,e),l=new st(ni(o),a);return hi(n,r,l)}else return[]}function Mn(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Xr(r,e))){const a=Ph(r,e,t,i);Ah(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,d)=>Z(d));if(c&&!u){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const d=Uh(h);for(let p=0;p<d.length;++p){const _=d[p],T=_.query,k=to(n,_);n.listenProvider_.startListening(Xe(T),Bt(n,T),k.hashFn,k.onComplete)}}}!u&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(Xe(e),null):l.forEach(h=>{const d=n.queryToTagMap.get(Kt(h));n.listenProvider_.stopListening(Xe(h),d)})),Vh(n,l)}return o}function Wh(n,e,t,i){const s=li(n,i);if(s!=null){const r=ci(s),o=r.path,a=r.queryId,l=D(o,e),c=new ue(ni(a),l,t);return hi(n,o,c)}else return[]}function Hh(n,e,t,i){const s=li(n,i);if(s){const r=ci(s),o=r.path,a=r.queryId,l=D(o,e),c=I.fromObject(t),u=new rt(ni(a),l,c);return hi(n,o,u)}else return[]}function _s(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(h,d)=>{const p=D(h,i);s=s||Ne(d,p),r=r||Z(d)});let o=n.syncPointTree_.get(i);o?(r=r||Z(o),s=s||Ne(o,C())):(o=new Sh,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,p)=>{const _=Ne(p,C());_&&(s=s.updateImmediateChild(d,_))}));const l=Xr(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Kt(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=jh();n.queryToTagMap.set(h,d),n.tagToQueryMap.set(d,h)}const c=ii(n.pendingWriteTree_,i);let u=kh(o,e,t,c,s,a);if(!l&&!r){const h=Qr(o,e);u=u.concat(qh(n,e,h))}return u}function Jr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=D(o,e),c=Ne(a,l);if(c)return c});return Vr(s,e,r,t,!0)}function gt(n,e){return Zr(e,n.syncPointTree_,null,ii(n.pendingWriteTree_,C()))}function Zr(n,e,t,i){if(v(n.path))return eo(n,e,t,i);{const s=e.get(C());t==null&&s!=null&&(t=Ne(s,C()));let r=[];const o=y(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=jr(i,o);r=r.concat(Zr(a,l,c,u))}return s&&(r=r.concat(ai(s,n,i,t))),r}}function eo(n,e,t,i){const s=e.get(C());t==null&&s!=null&&(t=Ne(s,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=jr(i,o),u=n.operationForChild(o);u&&(r=r.concat(eo(u,a,l,c)))}),s&&(r=r.concat(ai(s,n,i,t))),r}function to(n,e){const t=e.query,i=Bt(n,t);return{hashFn:()=>(wh(e)||g.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Bh(n,t._path,i):$h(n,t._path);{const r=Ll(s,t);return Mn(n,t,null,r)}}}}function Bt(n,e){const t=Kt(e);return n.queryToTagMap.get(t)}function Kt(n){return n._path.toString()+"$"+n._queryIdentifier}function li(n,e){return n.tagToQueryMap.get(e)}function ci(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new E(n.substr(0,e))}}function hi(n,e,t){const i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=ii(n.pendingWriteTree_,e);return ai(i,t,s,null)}function Uh(n){return n.fold((e,t,i)=>{if(t&&Z(t))return[zt(t)];{let s=[];return t&&(s=Kr(t)),L(i,(r,o)=>{s=s.concat(o)}),s}})}function Xe(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Dh())(n._repo,n._path):n}function Vh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Kt(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function jh(){return Mh++}function qh(n,e,t){const i=e._path,s=Bt(n,e),r=to(n,t),o=n.listenProvider_.startListening(Xe(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)f(!Z(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!v(c)&&u&&Z(u))return[zt(u).query];{let d=[];return u&&(d=d.concat(Kr(u).map(p=>p.query))),L(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Xe(u),Bt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ui(t)}node(){return this.node_}}class di{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=N(this.path_,e);return new di(this.syncTree_,t)}node(){return Jr(this.syncTree_,this.path_)}}const Gh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gs=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yh(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Yh=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Kh=function(n,e,t,i){return fi(e,new di(t,n),i)},Qh=function(n,e,t){return fi(n,new ui(e),t)};function fi(n,e,t){const i=n.getPriority().val(),s=gs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=gs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new R(a,O(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new R(s))),o.forEachChild(S,(a,l)=>{const c=fi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function _i(n,e){let t=e instanceof E?e:new E(e),i=n,s=y(t);for(;s!==null;){const r=Ae(i.node.children,s)||{children:{},childCount:0};i=new pi(s,i,r),t=b(t),s=y(t)}return i}function Me(n){return n.node.value}function no(n,e){n.node.value=e,Ln(n)}function io(n){return n.node.childCount>0}function Xh(n){return Me(n)===void 0&&!io(n)}function Qt(n,e){L(n.node.children,(t,i)=>{e(new pi(t,n,i))})}function so(n,e,t,i){t&&!i&&e(n),Qt(n,s=>{so(s,e,!0,i)}),t&&i&&e(n)}function Jh(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function mt(n){return new E(n.parent===null?n.name:mt(n.parent)+"/"+n.name)}function Ln(n){n.parent!==null&&Zh(n.parent,n.name,n)}function Zh(n,e,t){const i=Xh(t),s=Y(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ln(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ln(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=/[\[\].#$\/\u0000-\u001F\u007F]/,tu=/[\[\].#$\u0000-\u001F\u007F]/,dn=10*1024*1024,ro=function(n){return typeof n=="string"&&n.length!==0&&!eu.test(n)},oo=function(n){return typeof n=="string"&&n.length!==0&&!tu.test(n)},nu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oo(n)},ao=function(n,e,t){const i=t instanceof E?new mc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ne(i));if(typeof e=="function")throw new Error(n+"contains a function "+ne(i)+" with contents = "+e.toString());if(cr(e))throw new Error(n+"contains "+e.toString()+" "+ne(i));if(typeof e=="string"&&e.length>dn/3&&jt(e)>dn)throw new Error(n+"contains a string greater than "+dn+" utf8 bytes "+ne(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(L(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ro(o)))throw new Error(n+" contains an invalid key ("+o+") "+ne(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yc(i,o),ao(n,a,i),vc(i)}),s&&r)throw new Error(n+' contains ".value" child '+ne(i)+" in addition to actual children.")}},lo=function(n,e,t,i){if(!(i&&t===void 0)&&!oo(t))throw new Error(Js(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iu=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lo(n,e,t,i)},su=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nu(t))throw new Error(Js(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function co(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Qn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function ho(n,e,t){co(n,t),uo(n,i=>Qn(i,e))}function ve(n,e,t){co(n,t),uo(n,i=>H(i,e)||H(e,i))}function uo(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(ou(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ou(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ae&&P("event: "+t.toString()),pt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="repo_interrupt",lu=25;class cu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ru,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pt(),this.transactionQueueTree_=new pi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hu(n,e,t){if(n.stats_=zn(n.repoInfo_),n.forceRestClient_||Wl())n.server_=new kt(n.repoInfo_,(i,s,r,o)=>{ms(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ys(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new G(n.repoInfo_,e,(i,s,r,o)=>{ms(n,i,s,r,o)},i=>{ys(n,i)},i=>{du(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=zl(n.repoInfo_,()=>new Gc(n.stats_,n.server_)),n.infoData_=new Hc,n.infoSyncTree_=new ps({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Yt(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gi(n,"connected",!1),n.serverSyncTree_=new ps({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ve(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function uu(n){const t=n.infoData_.getNode(new E(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function fo(n){return Gh({timestamp:uu(n)})}function ms(n,e,t,i,s){n.dataUpdateCount++;const r=new E(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Tt(t,c=>O(c));o=Hh(n.serverSyncTree_,r,l,s)}else{const l=O(t);o=Wh(n.serverSyncTree_,r,l,s)}else if(i){const l=Tt(t,c=>O(c));o=Fh(n.serverSyncTree_,r,l)}else{const l=O(t);o=Yt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=yi(n,r)),ve(n.eventQueue_,a,o)}function ys(n,e){gi(n,"connected",e),e===!1&&pu(n)}function du(n,e){L(e,(t,i)=>{gi(n,t,i)})}function gi(n,e,t){const i=new E("/.info/"+e),s=O(t);n.infoData_.updateSnapshot(i,s);const r=Yt(n.infoSyncTree_,i,s);ve(n.eventQueue_,i,r)}function fu(n){return n.nextWriteId_++}function pu(n){po(n,"onDisconnectEvents");const e=fo(n),t=Pt();An(n.onDisconnect_,C(),(s,r)=>{const o=Kh(s,r,n.serverSyncTree_,e);$r(t,s,o)});let i=[];An(t,C(),(s,r)=>{i=i.concat(Yt(n.serverSyncTree_,s,r));const o=vu(n,s);yi(n,o)}),n.onDisconnect_=Pt(),ve(n.eventQueue_,C(),i)}function _u(n,e,t){let i;y(e._path)===".info"?i=_s(n.infoSyncTree_,e,t):i=_s(n.serverSyncTree_,e,t),ho(n.eventQueue_,e._path,i)}function vs(n,e,t){let i;y(e._path)===".info"?i=Mn(n.infoSyncTree_,e,t):i=Mn(n.serverSyncTree_,e,t),ho(n.eventQueue_,e._path,i)}function gu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(au)}function po(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),P(t,...e)}function _o(n,e,t){return Jr(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function mi(n,e=n.transactionQueueTree_){if(e||Xt(n,e),Me(e)){const t=mo(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&mu(n,mt(e),t)}else io(e)&&Qt(e,t=>{mi(n,t)})}function mu(n,e,t){const i=t.map(c=>c.currentWriteId),s=_o(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=D(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{po(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Ie(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Xt(n,_i(n.transactionQueueTree_,e)),mi(n,n.transactionQueueTree_),ve(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)pt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{F("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}yi(n,e)}},o)}function yi(n,e){const t=go(n,e),i=mt(t),s=mo(n,t);return yu(n,s,i),i}function yu(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=D(t,l.path);let u=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=lu)u=!0,h="maxretry",s=s.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else{const d=_o(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){ao("transaction failed: Data returned ",p,l.path);let _=O(p);typeof p=="object"&&p!=null&&Y(p,".priority")||(_=_.updatePriority(d.getPriority()));const k=l.currentWriteId,nn=fo(n),yt=Qh(_,d,nn);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=yt,l.currentWriteId=fu(n),o.splice(o.indexOf(k),1),s=s.concat(Lh(n.serverSyncTree_,l.path,yt,l.currentWriteId,l.applyLocally)),s=s.concat(Ie(n.serverSyncTree_,k,!0))}else u=!0,h="nodata",s=s.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0))}ve(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Xt(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)pt(i[a]);mi(n,n.transactionQueueTree_)}function go(n,e){let t,i=n.transactionQueueTree_;for(t=y(e);t!==null&&Me(i)===void 0;)i=_i(i,t),e=b(e),t=y(e);return i}function mo(n,e){const t=[];return yo(n,e,t),t.sort((i,s)=>i.order-s.order),t}function yo(n,e,t){const i=Me(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Qt(e,s=>{yo(n,s,t)})}function Xt(n,e){const t=Me(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,no(e,t.length>0?t:void 0)}Qt(e,i=>{Xt(n,i)})}function vu(n,e){const t=mt(go(n,e)),i=_i(n.transactionQueueTree_,e);return Jh(i,s=>{fn(n,s)}),fn(n,i),so(i,s=>{fn(n,s)}),t}function fn(n,e){const t=Me(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ie(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?no(e,void 0):t.length=r+1,ve(n.eventQueue_,mt(e),s);for(let o=0;o<i.length;o++)pt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Eu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):F(`Invalid query segment '${t}' in query '${n}'`)}return e}const Cs=function(n,e){const t=wu(n),i=t.namespace;t.domain==="firebase.com"&&ce(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ce("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||kl();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new E(t.pathString)}},wu=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=Cu(n.substring(u,h)));const d=Eu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class Co{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return v(this._path)?null:Rr(this._path)}get ref(){return new K(this._repo,this._path)}get _queryIdentifier(){const e=is(this._queryParams),t=qn(e);return t==="{}"?"default":t}get _queryObject(){return is(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof vi))return!1;const t=this._repo===e._repo,i=Qn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+gc(this._path)}}class K extends vi{constructor(e,t){super(e,t,new ei,!1)}get parent(){const e=xr(this._path);return e===null?null:new K(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ot{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new E(e),i=pe(this.ref,e);return new ot(this._node.getChild(t),i,S)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ot(s,pe(this.ref,i),S)))}hasChild(e){const t=new E(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Iu(n,e){return n=ht(n),n._checkNotDeleted("ref"),e!==void 0?pe(n._root,e):n._root}function pe(n,e){return n=ht(n),y(n._path)===null?iu("child","path",e,!1):lo("child","path",e,!1),new K(n._repo,N(n._path,e))}class Ci{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new vo("value",this,new ot(e.snapshotNode,new K(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Co(this,e,t):null}matches(e){return e instanceof Ci?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ei{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Co(this,e,t):null}createEvent(e,t){f(e.childName!=null,"Child events should have a childName.");const i=pe(new K(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new vo(e.type,this,new ot(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ei?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Tu(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{vs(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new bu(t,r||void 0),a=e==="value"?new Ci(o):new Ei(e,o);return _u(n._repo,n,a),()=>vs(n._repo,n,a)}function Su(n,e,t,i){return Tu(n,"value",e,t,i)}Nh(K);Oh(K);/**
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
 */const Nu="FIREBASE_DATABASE_EMULATOR_HOST",Fn={};let Ru=!1;function Au(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ce("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),P("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Cs(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[Nu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Cs(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Sn(Sn.OWNER):new Ul(n.name,n.options,e);su("Invalid Firebase Database URL",o),v(o.path)||ce("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ku(a,n,u,new Hl(n.name,t));return new Pu(h,n)}function xu(n,e){const t=Fn[e];(!t||t[n.key]!==n)&&ce(`Database ${e}(${n.repoInfo_}) has already been deleted.`),gu(n),delete t[n.key]}function ku(n,e,t,i){let s=Fn[e.name];s||(s={},Fn[e.name]=s);let r=s[n.toURLString()];return r&&ce("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cu(n,Ru,t,i),s[n.toURLString()]=r,r}class Pu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new K(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ce("Cannot call "+e+" on a deleted database.")}}function Ou(n=ir(),e){return ut(n,"database").getImmediate({identifier:e})}/**
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
 */function Du(n){Sl(_l),X(new z("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Au(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),j(Wi,Hi,n),j(Wi,Hi,"esm2017")}G.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};G.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Du();var Mu=typeof global=="object"&&global&&global.Object===Object&&global,Lu=Mu,Fu=typeof self=="object"&&self&&self.Object===Object&&self,$u=Lu||Fu||Function("return this")(),wi=$u,Bu=wi.Symbol,Wt=Bu,Eo=Object.prototype,Wu=Eo.hasOwnProperty,Hu=Eo.toString,He=Wt?Wt.toStringTag:void 0;function Uu(n){var e=Wu.call(n,He),t=n[He];try{n[He]=void 0;var i=!0}catch{}var s=Hu.call(n);return i&&(e?n[He]=t:delete n[He]),s}var Vu=Object.prototype,ju=Vu.toString;function qu(n){return ju.call(n)}var Gu="[object Null]",zu="[object Undefined]",Es=Wt?Wt.toStringTag:void 0;function Yu(n){return n==null?n===void 0?zu:Gu:Es&&Es in Object(n)?Uu(n):qu(n)}function wo(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Ku="[object AsyncFunction]",Qu="[object Function]",Xu="[object GeneratorFunction]",Ju="[object Proxy]";function Zu(n){if(!wo(n))return!1;var e=Yu(n);return e==Qu||e==Xu||e==Ku||e==Ju}var ed=wi["__core-js_shared__"],pn=ed,ws=function(){var n=/[^.]+$/.exec(pn&&pn.keys&&pn.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function td(n){return!!ws&&ws in n}var nd=Function.prototype,id=nd.toString;function sd(n){if(n!=null){try{return id.call(n)}catch{}try{return n+""}catch{}}return""}var rd=/[\\^$.*+?()[\]{}|]/g,od=/^\[object .+?Constructor\]$/,ad=Function.prototype,ld=Object.prototype,cd=ad.toString,hd=ld.hasOwnProperty,ud=RegExp("^"+cd.call(hd).replace(rd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dd(n){if(!wo(n)||td(n))return!1;var e=Zu(n)?ud:od;return e.test(sd(n))}function fd(n,e){return n==null?void 0:n[e]}function bo(n,e){var t=fd(n,e);return dd(t)?t:void 0}function pd(n,e){return n===e||n!==n&&e!==e}var _d=bo(Object,"create"),at=_d;function gd(){this.__data__=at?at(null):{},this.size=0}function md(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var yd="__lodash_hash_undefined__",vd=Object.prototype,Cd=vd.hasOwnProperty;function Ed(n){var e=this.__data__;if(at){var t=e[n];return t===yd?void 0:t}return Cd.call(e,n)?e[n]:void 0}var wd=Object.prototype,bd=wd.hasOwnProperty;function Id(n){var e=this.__data__;return at?e[n]!==void 0:bd.call(e,n)}var Td="__lodash_hash_undefined__";function Sd(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=at&&e===void 0?Td:e,this}function _e(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}_e.prototype.clear=gd;_e.prototype.delete=md;_e.prototype.get=Ed;_e.prototype.has=Id;_e.prototype.set=Sd;function Nd(){this.__data__=[],this.size=0}function Jt(n,e){for(var t=n.length;t--;)if(pd(n[t][0],e))return t;return-1}var Rd=Array.prototype,Ad=Rd.splice;function xd(n){var e=this.__data__,t=Jt(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Ad.call(e,t,1),--this.size,!0}function kd(n){var e=this.__data__,t=Jt(e,n);return t<0?void 0:e[t][1]}function Pd(n){return Jt(this.__data__,n)>-1}function Od(n,e){var t=this.__data__,i=Jt(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function Le(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Le.prototype.clear=Nd;Le.prototype.delete=xd;Le.prototype.get=kd;Le.prototype.has=Pd;Le.prototype.set=Od;var Dd=bo(wi,"Map"),Md=Dd;function Ld(){this.size=0,this.__data__={hash:new _e,map:new(Md||Le),string:new _e}}function Fd(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Zt(n,e){var t=n.__data__;return Fd(e)?t[typeof e=="string"?"string":"hash"]:t.map}function $d(n){var e=Zt(this,n).delete(n);return this.size-=e?1:0,e}function Bd(n){return Zt(this,n).get(n)}function Wd(n){return Zt(this,n).has(n)}function Hd(n,e){var t=Zt(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Ce(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Ce.prototype.clear=Ld;Ce.prototype.delete=$d;Ce.prototype.get=Bd;Ce.prototype.has=Wd;Ce.prototype.set=Hd;var Ud="Expected a function";function bi(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(Ud);var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=t.cache;if(r.has(s))return r.get(s);var o=n.apply(this,i);return t.cache=r.set(s,o)||r,o};return t.cache=new(bi.Cache||Ce),t}bi.Cache=Ce;var Vd="firebase",jd="9.6.11";/**
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
 */j(Vd,jd,"app");const Io="@firebase/installations",Ii="0.5.8";/**
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
 */const To=1e4,So=`w:${Ii}`,No="FIS_v2",qd="https://firebaseinstallations.googleapis.com/v1",Gd=60*60*1e3,zd="installations",Yd="Installations";/**
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
 */const Kd={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ge=new Vt(zd,Yd,Kd);function Ro(n){return n instanceof ct&&n.code.includes("request-failed")}/**
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
 */function Ao({projectId:n}){return`${qd}/projects/${n}/installations`}function xo(n){return{token:n.token,requestStatus:2,expiresIn:Xd(n.expiresIn),creationTime:Date.now()}}async function ko(n,e){const i=(await e.json()).error;return ge.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Po({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Qd(n,{refreshToken:e}){const t=Po(n);return t.append("Authorization",Jd(e)),t}async function Oo(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Xd(n){return Number(n.replace("s","000"))}function Jd(n){return`${No} ${n}`}/**
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
 */async function Zd({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Ao(n),s=Po(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:No,appId:n.appId,sdkVersion:So},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Oo(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:xo(c.authToken)}}else throw await ko("Create Installation",l)}/**
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
 */function Do(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ef(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tf=/^[cdef][\w-]{21}$/,$n="";function nf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=sf(n);return tf.test(t)?t:$n}catch{return $n}}function sf(n){return ef(n).substr(0,22)}/**
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
 */function en(n){return`${n.appName}!${n.appId}`}/**
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
 */const Mo=new Map;function Lo(n,e){const t=en(n);Fo(t,e),rf(t,e)}function Fo(n,e){const t=Mo.get(n);if(!!t)for(const i of t)i(e)}function rf(n,e){const t=of();t&&t.postMessage({key:n,fid:e}),af()}let oe=null;function of(){return!oe&&"BroadcastChannel"in self&&(oe=new BroadcastChannel("[Firebase] FID Change"),oe.onmessage=n=>{Fo(n.data.key,n.data.fid)}),oe}function af(){Mo.size===0&&oe&&(oe.close(),oe=null)}/**
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
 */const lf="firebase-installations-database",cf=1,me="firebase-installations-store";let _n=null;function Ti(){return _n||(_n=tr(lf,cf,(n,e)=>{switch(e){case 0:n.createObjectStore(me)}})),_n}async function Ht(n,e){const t=en(n),s=(await Ti()).transaction(me,"readwrite"),r=s.objectStore(me),o=await r.get(t);return await r.put(e,t),await s.complete,(!o||o.fid!==e.fid)&&Lo(n,e.fid),e}async function $o(n){const e=en(n),i=(await Ti()).transaction(me,"readwrite");await i.objectStore(me).delete(e),await i.complete}async function tn(n,e){const t=en(n),s=(await Ti()).transaction(me,"readwrite"),r=s.objectStore(me),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.complete,a&&(!o||o.fid!==a.fid)&&Lo(n,a.fid),a}/**
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
 */async function Si(n){let e;const t=await tn(n.appConfig,i=>{const s=hf(i),r=uf(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===$n?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hf(n){const e=n||{fid:nf(),registrationStatus:0};return Bo(e)}function uf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ge.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=df(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ff(n)}:{installationEntry:e}}async function df(n,e){try{const t=await Zd(n,e);return Ht(n.appConfig,t)}catch(t){throw Ro(t)&&t.customData.serverCode===409?await $o(n.appConfig):await Ht(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ff(n){let e=await bs(n.appConfig);for(;e.registrationStatus===1;)await Do(100),e=await bs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Si(n);return i||t}return e}function bs(n){return tn(n,e=>{if(!e)throw ge.create("installation-not-found");return Bo(e)})}function Bo(n){return pf(n)?{fid:n.fid,registrationStatus:0}:n}function pf(n){return n.registrationStatus===1&&n.registrationTime+To<Date.now()}/**
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
 */async function _f({appConfig:n,heartbeatServiceProvider:e},t){const i=gf(n,t),s=Qd(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:So,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Oo(()=>fetch(i,a));if(l.ok){const c=await l.json();return xo(c)}else throw await ko("Generate Auth Token",l)}function gf(n,{fid:e}){return`${Ao(n)}/${e}/authTokens:generate`}/**
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
 */async function Ni(n,e=!1){let t;const i=await tn(n.appConfig,r=>{if(!Wo(r))throw ge.create("not-registered");const o=r.authToken;if(!e&&vf(o))return r;if(o.requestStatus===1)return t=mf(n,e),r;{if(!navigator.onLine)throw ge.create("app-offline");const a=Ef(r);return t=yf(n,a),a}});return t?await t:i.authToken}async function mf(n,e){let t=await Is(n.appConfig);for(;t.authToken.requestStatus===1;)await Do(100),t=await Is(n.appConfig);const i=t.authToken;return i.requestStatus===0?Ni(n,e):i}function Is(n){return tn(n,e=>{if(!Wo(e))throw ge.create("not-registered");const t=e.authToken;return wf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yf(n,e){try{const t=await _f(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Ht(n.appConfig,i),t}catch(t){if(Ro(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $o(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ht(n.appConfig,i)}throw t}}function Wo(n){return n!==void 0&&n.registrationStatus===2}function vf(n){return n.requestStatus===2&&!Cf(n)}function Cf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Gd}function Ef(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wf(n){return n.requestStatus===1&&n.requestTime+To<Date.now()}/**
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
 */async function bf(n){const e=n,{installationEntry:t,registrationPromise:i}=await Si(e);return i?i.catch(console.error):Ni(e).catch(console.error),t.fid}/**
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
 */async function If(n,e=!1){const t=n;return await Tf(t),(await Ni(t,e)).token}async function Tf(n){const{registrationPromise:e}=await Si(n);e&&await e}/**
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
 */function Sf(n){if(!n||!n.options)throw gn("App Configuration");if(!n.name)throw gn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw gn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function gn(n){return ge.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ho="installations",Nf="installations-internal",Rf=n=>{const e=n.getProvider("app").getImmediate(),t=Sf(e),i=ut(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Af=n=>{const e=n.getProvider("app").getImmediate(),t=ut(e,Ho).getImmediate();return{getId:()=>bf(t),getToken:s=>If(t,s)}};function xf(){X(new z(Ho,Rf,"PUBLIC")),X(new z(Nf,Af,"PRIVATE"))}xf();j(Io,Ii);j(Io,Ii,"esm2017");/**
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
 */const Ut="analytics",kf="firebase_id",Pf="origin",Of=60*1e3,Df="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uo="https://www.googletagmanager.com/gtag/js";/**
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
 */const $=new Vn("@firebase/analytics");/**
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
 */function Vo(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Mf(n,e){const t=document.createElement("script");t.src=`${Uo}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Lf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ff(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Vo(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){$.error(a)}n("config",s,r)}async function $f(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Vo(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){$.error(r)}}function Bf(n,e,t,i){async function s(r,o,a){try{r==="event"?await $f(n,e,t,o,a):r==="config"?await Ff(n,e,t,i,o,a):n("set",o)}catch(l){$.error(l)}}return s}function Wf(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Bf(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Hf(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(Uo))return e;return null}/**
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
 */const Uf={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},B=new Vt("analytics","Analytics",Uf);/**
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
 */const Vf=30,jf=1e3;class qf{constructor(e={},t=jf){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jo=new qf;function Gf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function zf(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Gf(i)},r=Df.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw B.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Yf(n,e=jo,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw B.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw B.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xf;return setTimeout(async()=>{a.abort()},t!==void 0?t:Of),qo({appId:i,apiKey:s,measurementId:r},o,a,e)}async function qo(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=jo){const{appId:r,measurementId:o}=n;try{await Kf(i,e)}catch(a){if(o)return $.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await zf(n);return s.deleteThrottleMetadata(r),a}catch(a){if(!Qf(a)){if(s.deleteThrottleMetadata(r),o)return $.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Oi(t,s.intervalMillis,Vf):Oi(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(r,c),$.debug(`Calling attemptFetch again in ${l} millis`),qo(n,c,i,s)}}function Kf(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(B.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qf(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Xf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function Jf(){if(Ks())try{await Qs()}catch(n){return $.warn(B.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return $.warn(B.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zf(n,e,t,i,s,r,o){var a;const l=Yf(n);l.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&$.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>$.error(p)),e.push(l);const c=Jf().then(p=>{if(p)return i.getId()}),[u,h]=await Promise.all([l,c]);Hf()||Mf(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Pf]="firebase",d.update=!0,h!=null&&(d[kf]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class ep{constructor(e){this.app=e}_delete(){return delete Je[this.app.options.appId],Promise.resolve()}}let Je={},Ts=[];const Ss={};let mn="dataLayer",tp="gtag",Ns,Go,Rs=!1;function np(){const n=[];if(_a()&&n.push("This is a browser extension environment."),ma()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=B.create("invalid-analytics-context",{errorInfo:e});$.warn(t.message)}}function ip(n,e,t){np();const i=n.options.appId;if(!i)throw B.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)$.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw B.create("no-api-key");if(Je[i]!=null)throw B.create("already-exists",{id:i});if(!Rs){Lf(mn);const{wrappedGtag:r,gtagCore:o}=Wf(Je,Ts,Ss,mn,tp);Go=r,Ns=o,Rs=!0}return Je[i]=Zf(n,Ts,Ss,e,Ns,mn,t),new ep(n)}/**
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
 */async function sp(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}function rp(n=ir()){n=ht(n);const e=ut(n,Ut);return e.isInitialized()?e.getImmediate():op(n)}function op(n,e={}){const t=ut(n,Ut);if(t.isInitialized()){const s=t.getImmediate();if(St(e,t.getOptions()))return s;throw B.create("already-initialized")}return t.initialize({options:e})}function ap(n,e,t,i){n=ht(n),sp(Go,Je[n.app.options.appId],e,t,i).catch(s=>$.error(s))}const As="@firebase/analytics",xs="0.7.8";function lp(){X(new z(Ut,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ip(i,s,t)},"PUBLIC")),X(new z("analytics-internal",n,"PRIVATE")),j(As,xs),j(As,xs,"esm2017");function n(e){try{const t=e.getProvider(Ut).getImmediate();return{logEvent:(i,s,r)=>ap(t,i,s,r)}}catch(t){throw B.create("interop-component-reg-failed",{reason:t})}}}lp();const cp={apiKey:"AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0",authDomain:"showdownspace.firebaseapp.com",databaseURL:"https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"showdownspace",storageBucket:"showdownspace.appspot.com",messagingSenderId:"999073329546",appId:"1:999073329546:web:08df5e95a021605ca49873",measurementId:"G-9LV3C4S19C"},zo=gl(cp);rp(zo);const hp=Ou(zo),Yo=Iu(hp,"rooms/citw"),up=pe(Yo,"config"),dp=pe(up,"stage");function Ko(n,e,t){return{subscribe:i=>{let s=!1;const r=Su(n,o=>{i(e(o)),s=!0});return s||i(t),r}}}const fp=Ko(dp,n=>{const e=[];return n.forEach(t=>{e.push(t.val())}),e},[]),pp=bi(n=>{const e=pe(Yo,`publicSubmissions/${n}/data`);return Ko(e,t=>{try{const i=JSON.parse(String(t.val()));return{html:String(i.html),css:String(i.css),compiledCss:String(i.compiledCss)}}catch(i){return{html:"ERROR: "+i,css:"",compiledCss:""}}},void 0)});function _p(n){let e,t,i,s,r,o,a;return{c(){e=qe("div"),t=qe("iframe"),i=Bn(),s=qe("div"),r=It(n[0]),ee(t,"sandbox","allow-same-origin"),ee(t,"srcdoc",n[3]),ee(t,"class","w-[540px] h-[720px]"),ee(t,"title","Preview"),ee(s,"class","absolute bottom-0 left-0 bg-sky-700 px-3 py-2"),ee(e,"class","relative")},m(l,c){we(l,e,c),Ue(e,t),n[6](t),Ue(e,i),Ue(e,s),Ue(s,r),o||(a=na(t,"load",n[4]),o=!0)},p(l,[c]){c&1&&Ls(r,l[0])},i:Re,o:Re,d(l){l&&ie(e),n[6](null),o=!1,a()}}}function gp(n,e,t){let i,s,r=Re,o=()=>(r(),r=Ms(i,p=>t(5,s=p)),i);n.$$.on_destroy.push(()=>r());let{uid:a}=e,l;const c=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle">.bg-white{background:white}</style>
</head>
<body class="bg-white">(Loading...)</body>
</html>`;function u(){h(s)}function h(p){l&&p&&(t(1,l.contentDocument.body.innerHTML=p.html,l),l.contentDocument.querySelector("#cssstyle").innerHTML=p.compiledCss)}function d(p){yn[p?"unshift":"push"](()=>{l=p,t(1,l)})}return n.$$set=p=>{"uid"in p&&t(0,a=p.uid)},n.$$.update=()=>{n.$$.dirty&1&&o(t(2,i=pp(a))),n.$$.dirty&32&&h(s)},[a,l,i,c,u,s,d]}class mp extends Hs{constructor(e){super(),Ws(this,e,gp,_p,Ds,{uid:0})}}function ks(n,e,t){const i=n.slice();return i[2]=e[t],i}function Ps(n){let e,t,i,s;return t=new mp({props:{uid:n[2]}}),{c(){e=qe("li"),ca(t.$$.fragment),i=Bn()},m(r,o){we(r,e,o),$s(t,e,null),Ue(e,i),s=!0},p(r,o){const a={};o&1&&(a.uid=r[2]),t.$set(a)},i(r){s||(ze(t.$$.fragment,r),s=!0)},o(r){En(t.$$.fragment,r),s=!1},d(r){r&&ie(e),Bs(t)}}}function yp(n){let e,t=n[0].length+"",i,s,r,o,a=n[0],l=[];for(let u=0;u<a.length;u+=1)l[u]=Ps(ks(n,a,u));const c=u=>En(l[u],1,1,()=>{l[u]=null});return{c(){e=It("Number of users on stage: "),i=It(t),s=Bn(),r=qe("ul");for(let u=0;u<l.length;u+=1)l[u].c();ee(r,"class","flex flex-wrap gap-3")},m(u,h){we(u,e,h),we(u,i,h),we(u,s,h),we(u,r,h);for(let d=0;d<l.length;d+=1)l[d].m(r,null);o=!0},p(u,[h]){if((!o||h&1)&&t!==(t=u[0].length+"")&&Ls(i,t),h&1){a=u[0];let d;for(d=0;d<a.length;d+=1){const p=ks(u,a,d);l[d]?(l[d].p(p,h),ze(l[d],1)):(l[d]=Ps(p),l[d].c(),ze(l[d],1),l[d].m(r,null))}for(aa(),d=a.length;d<l.length;d+=1)c(d);la()}},i(u){if(!o){for(let h=0;h<a.length;h+=1)ze(l[h]);o=!0}},o(u){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)En(l[h]);o=!1},d(u){u&&ie(e),u&&ie(i),u&&ie(s),u&&ie(r),ta(l,u)}}}function vp(n,e,t){let i;ea(n,fp,r=>t(1,i=r));let s;return n.$$.update=()=>{n.$$.dirty&2&&t(0,s=i||[])},[s,i]}class Cp extends Hs{constructor(e){super(),Ws(this,e,vp,yp,Ds,{})}}new Cp({target:document.getElementById("app")});
