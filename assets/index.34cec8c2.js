const ua=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ua();function re(){}function Xs(n){return n()}function ji(){return Object.create(null)}function Oe(n){n.forEach(Xs)}function da(n){return typeof n=="function"}function Kn(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function fa(n){return Object.keys(n).length===0}function Mt(n,...e){if(n==null)return re;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function pa(n,e,t){n.$$.on_destroy.push(Mt(e,t))}function I(n,e){n.appendChild(e)}function oe(n,e,t){n.insertBefore(e,t||null)}function ie(n){n.parentNode.removeChild(n)}function _a(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function $(n){return document.createElement(n)}function Q(n){return document.createTextNode(n)}function ne(){return Q(" ")}function ga(){return Q("")}function Lt(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function x(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ma(n){return Array.from(n.childNodes)}function ut(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let Qn;function rt(n){Qn=n}function Js(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const it=[],Ft=[],Ot=[],Vi=[],ya=Promise.resolve();let xn=!1;function va(){xn||(xn=!0,ya.then(Zs))}function kn(n){Ot.push(n)}const mn=new Set;let xt=0;function Zs(){const n=Qn;do{for(;xt<it.length;){const e=it[xt];xt++,rt(e),Ca(e.$$)}for(rt(null),it.length=0,xt=0;Ft.length;)Ft.pop()();for(let e=0;e<Ot.length;e+=1){const t=Ot[e];mn.has(t)||(mn.add(t),t())}Ot.length=0}while(it.length);for(;Vi.length;)Vi.pop()();xn=!1,mn.clear(),rt(n)}function Ca(n){if(n.fragment!==null){n.update(),Oe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(kn)}}const Dt=new Set;let Ce;function qi(){Ce={r:0,c:[],p:Ce}}function Gi(){Ce.r||Oe(Ce.c),Ce=Ce.p}function ae(n,e){n&&n.i&&(Dt.delete(n),n.i(e))}function $e(n,e,t,i){if(n&&n.o){if(Dt.has(n))return;Dt.add(n),Ce.c.push(()=>{Dt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function er(n){n&&n.c()}function Xn(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||kn(()=>{const l=r.map(Xs).filter(da);o?o.push(...l):Oe(l),n.$$.on_mount=[]}),a.forEach(kn)}function Jn(n,e){const t=n.$$;t.fragment!==null&&(Oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function wa(n,e){n.$$.dirty[0]===-1&&(it.push(n),va(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Zn(n,e,t,i,s,r,o,a=[-1]){const l=Qn;rt(n);const c=n.$$={fragment:null,ctx:null,props:r,update:re,not_equal:s,bound:ji(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ji(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...p)=>{const _=p.length?p[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&wa(n,h)),d}):[],c.update(),u=!0,Oe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=ma(e.target);c.fragment&&c.fragment.l(h),h.forEach(ie)}else c.fragment&&c.fragment.c();e.intro&&ae(n.$$.fragment),Xn(n,e.target,e.anchor,e.customElement),Zs()}rt(l)}class ei{$destroy(){Jn(this,1),this.$destroy=re}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!fa(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(n,e){if(!n)throw Ye(e)},Ye=function(n){return new Error("Firebase Database ("+tr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ea=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ea(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ir=function(n){const e=nr(n);return ti.encodeByteArray(e,!0)},sr=function(n){return ir(n).replace(/\./g,"")},zi=function(n){try{return ti.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){return rr(void 0,n)}function rr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ia(t)||(n[t]=rr(n[t],e[t]));return n}function Ia(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function or(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ta())}function Sa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Na(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ar(){return tr.NODE_ADMIN===!0}function lr(){return typeof indexedDB=="object"}function cr(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Ra(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="FirebaseError";class wt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Aa,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?xa(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,i)}}function xa(n,e){return n.replace(ka,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ka=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return JSON.parse(n)}function W(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=dt(zi(r[0])||""),t=dt(zi(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Pa=function(n){const e=hr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Oa=function(n){const e=hr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ve(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $t(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Bt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ki(r)&&Ki(o)){if(!Bt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ki(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ur(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Fa=1e3,$a=2,Ba=4*60*60*1e3,Wa=.5;function Qi(n,e=Fa,t=$a){const i=e*Math.pow(t,n),s=Math.round(Wa*i*(Math.random()-.5)*2);return Math.min(Ba,i+s)}/**
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
 */function Et(n){return n&&n._delegate?n._delegate:n}/**
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
 */function st(n,e){return new Promise((t,i)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class Xi{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new dr(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new fr(this._db.createObjectStore(e,t))}close(){this._db.close()}}class dr{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new fr(this._transaction.objectStore(e))}}class fr{constructor(e){this._store=e}index(e){return new Ji(this._store.index(e))}createIndex(e,t,i){return new Ji(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return st(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return st(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return st(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return st(e,"Error clearing IndexedDB object store")}}class Ji{constructor(e){this._index=e}get(e){const t=this._index.get(e);return st(t,"Error reading from IndexedDB")}}function pr(n,e,t){return new Promise((i,s)=>{try{const r=indexedDB.open(n,e);r.onsuccess=o=>{i(new Xi(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{t(new Xi(r.result),o.oldVersion,o.newVersion,new dr(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class he{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ye="[DEFAULT]";/**
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
 */class Ha{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ni;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ja(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===ye?void 0:n}function ja(n){return n.instantiationMode==="EAGER"}/**
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
 */class Va{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ha(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const qa={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Ga=N.INFO,za={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ya=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=za[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=Ga,this._logHandler=Ya,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}/**
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
 */class Ka{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qa(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Qa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pn="@firebase/app",Zi="0.7.21";/**
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
 */const si=new ii("@firebase/app"),Xa="@firebase/app-compat",Ja="@firebase/analytics-compat",Za="@firebase/analytics",el="@firebase/app-check-compat",tl="@firebase/app-check",nl="@firebase/auth",il="@firebase/auth-compat",sl="@firebase/database",rl="@firebase/database-compat",ol="@firebase/functions",al="@firebase/functions-compat",ll="@firebase/installations",cl="@firebase/installations-compat",hl="@firebase/messaging",ul="@firebase/messaging-compat",dl="@firebase/performance",fl="@firebase/performance-compat",pl="@firebase/remote-config",_l="@firebase/remote-config-compat",gl="@firebase/storage",ml="@firebase/storage-compat",yl="@firebase/firestore",vl="@firebase/firestore-compat",Cl="firebase",wl="9.6.11";/**
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
 */const _r="[DEFAULT]",El={[Pn]:"fire-core",[Xa]:"fire-core-compat",[Za]:"fire-analytics",[Ja]:"fire-analytics-compat",[tl]:"fire-app-check",[el]:"fire-app-check-compat",[nl]:"fire-auth",[il]:"fire-auth-compat",[sl]:"fire-rtdb",[rl]:"fire-rtdb-compat",[ol]:"fire-fn",[al]:"fire-fn-compat",[ll]:"fire-iid",[cl]:"fire-iid-compat",[hl]:"fire-fcm",[ul]:"fire-fcm-compat",[dl]:"fire-perf",[fl]:"fire-perf-compat",[pl]:"fire-rc",[_l]:"fire-rc-compat",[gl]:"fire-gcs",[ml]:"fire-gcs-compat",[yl]:"fire-fst",[vl]:"fire-fst-compat","fire-js":"fire-js",[Cl]:"fire-js-all"};/**
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
 */const Wt=new Map,On=new Map;function bl(n,e){try{n.container.addComponent(e)}catch(t){si.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pe(n){const e=n.name;if(On.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;On.set(e,n);for(const t of Wt.values())bl(t,n);return!0}function bt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Il={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ie=new nn("app","Firebase",Il);/**
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
 */class Tl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const Sl=wl;function Nl(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Ie.create("bad-app-name",{appName:String(i)});const s=Wt.get(i);if(s){if(Bt(n,s.options)&&Bt(t,s.config))return s;throw Ie.create("duplicate-app",{appName:i})}const r=new Va(i);for(const a of On.values())r.addComponent(a);const o=new Tl(n,t,r);return Wt.set(i,o),o}function gr(n=_r){const e=Wt.get(n);if(!e)throw Ie.create("no-app",{appName:n});return e}function se(n,e,t){var i;let s=(i=El[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(a.join(" "));return}pe(new he(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rl="firebase-heartbeat-database",Al=1,ft="firebase-heartbeat-store";let yn=null;function mr(){return yn||(yn=pr(Rl,Al,(n,e)=>{switch(e){case 0:n.createObjectStore(ft)}}).catch(n=>{throw Ie.create("storage-open",{originalErrorMessage:n.message})})),yn}async function xl(n){try{return(await mr()).transaction(ft).objectStore(ft).get(yr(n))}catch(e){throw Ie.create("storage-get",{originalErrorMessage:e.message})}}async function es(n,e){try{const i=(await mr()).transaction(ft,"readwrite");return await i.objectStore(ft).put(e,yr(n)),i.complete}catch(t){throw Ie.create("storage-set",{originalErrorMessage:t.message})}}function yr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kl=1024,Pl=30*24*60*60*1e3;class Ol{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ml(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ts();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Pl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ts(),{heartbeatsToSend:t,unsentEntries:i}=Dl(this._heartbeatsCache.heartbeats),s=sr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ts(){return new Date().toISOString().substring(0,10)}function Dl(n,e=kl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ns(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ns(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ml{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lr()?cr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return es(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return es(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ns(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ll(n){pe(new he("platform-logger",e=>new Ka(e),"PRIVATE")),pe(new he("heartbeat",e=>new Ol(e),"PRIVATE")),se(Pn,Zi,n),se(Pn,Zi,"esm2017"),se("fire-js","")}Ll("");const is="@firebase/database",ss="0.12.8";/**
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
 */let vr="";function Fl(n){vr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:dt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $l(e)}}catch{}return new Bl},we=Cr("localStorage"),Dn=Cr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new ii("@firebase/database"),Wl=function(){let n=1;return function(){return n++}}(),wr=function(n){const e=La(n),t=new Ma;t.update(e);const i=t.digest();return ti.encodeByteArray(i)},It=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=It.apply(null,i):typeof i=="object"?e+=W(i):e+=i,e+=" "}return e};let be=null,rs=!0;const Hl=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(He.logLevel=N.VERBOSE,be=He.log.bind(He),e&&Dn.set("logging_enabled",!0)):typeof n=="function"?be=n:(be=null,Dn.remove("logging_enabled"))},U=function(...n){if(rs===!0&&(rs=!1,be===null&&Dn.get("logging_enabled")===!0&&Hl(!0)),be){const e=It.apply(null,n);be(e)}},Tt=function(n){return function(...e){U(n,...e)}},Mn=function(...n){const e="FIREBASE INTERNAL ERROR: "+It(...n);He.error(e)},Te=function(...n){const e=`FIREBASE FATAL ERROR: ${It(...n)}`;throw He.error(e),new Error(e)},Y=function(...n){const e="FIREBASE WARNING: "+It(...n);He.warn(e)},Ul=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Er=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},qe="[MIN_NAME]",Se="[MAX_NAME]",Ke=function(n,e){if(n===e)return 0;if(n===qe||e===Se)return-1;if(e===qe||n===Se)return 1;{const t=os(n),i=os(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Vl=function(n,e){return n===e?0:n<e?-1:1},Je=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+W(e))},ri=function(n){if(typeof n!="object"||n===null)return W(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=W(e[i]),t+=":",t+=ri(n[e[i]]);return t+="}",t},br=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ir=function(n){f(!Er(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ql=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Yl=new RegExp("^-?(0*)\\d{1,10}$"),Kl=-2147483648,Ql=2147483647,os=function(n){if(Yl.test(n)){const e=Number(n);if(e>=Kl&&e<=Ql)return e}return null},St=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Y("Exception was thrown by user callback.",t),e},Math.floor(0))}},Xl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ot=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Jl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Y(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(U("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Y(e)}}class Ln{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ln.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="5",Tr="v",Sr="s",Nr="r",Rr="f",Ar=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xr="ls",ec="p",Fn="ac",kr="websocket",Pr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=we.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&we.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function nc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Or(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===kr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Pr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nc(n)&&(t.ns=n.namespace);const s=[];return z(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.counters_={}}incrementCounter(e,t=1){ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ba(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={},Cn={};function ai(n){const e=n.toString();return vn[e]||(vn[e]=new ic),vn[e]}function sc(n,e){const t=n.toString();return Cn[t]||(Cn[t]=e()),Cn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&St(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="start",oc="close",ac="pLPCommand",lc="pRTLPCB",Dr="id",Mr="pw",Lr="ser",cc="cb",hc="seg",uc="ts",dc="d",fc="dframe",Fr=1870,$r=30,pc=Fr-$r,_c=25e3,gc=3e4;class Be{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tt(e),this.stats_=ai(t),this.urlFn=l=>(this.appCheckToken&&(l[Fn]=this.appCheckToken),Or(t,Pr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new rc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gc)),jl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new li((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===as)this.id=a,this.password=l;else if(o===oc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[as]="t",i[Lr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[cc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Tr]=oi,this.transportSessionId&&(i[Sr]=this.transportSessionId),this.lastSessionId&&(i[xr]=this.lastSessionId),this.applicationId&&(i[ec]=this.applicationId),this.appCheckToken&&(i[Fn]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ar.test(location.hostname)&&(i[Nr]=Rr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Be.forceAllow_=!0}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){return Be.forceAllow_?!0:!Be.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!ql()&&!Gl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ir(t),s=br(i,pc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[fc]="t",i[Dr]=e,i[Mr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=W(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class li{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wl(),window[ac+this.uniqueCallbackIdentifier]=e,window[lc+this.uniqueCallbackIdentifier]=t,this.myIFrame=li.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){U("frame writing exception"),a.stack&&U(a.stack),U(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||U("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dr]=this.myID,e[Mr]=this.myPW,e[Lr]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$r+i.length<=Fr;){const o=this.pendingSegs.shift();i=i+"&"+hc+s+"="+o.seg+"&"+uc+s+"="+o.ts+"&"+dc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(_c)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{U("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=16384,yc=45e3;let Ht=null;typeof MozWebSocket!="undefined"?Ht=MozWebSocket:typeof WebSocket!="undefined"&&(Ht=WebSocket);class J{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tt(this.connId),this.stats_=ai(t),this.connURL=J.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[Tr]=oi,typeof location!="undefined"&&location.hostname&&Ar.test(location.hostname)&&(r[Nr]=Rr),t&&(r[Sr]=t),i&&(r[xr]=i),s&&(r[Fn]=s),Or(e,kr,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,we.set("previous_websocket_failure",!0);try{if(!ar()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ht(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){J.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ht!==null&&!J.forceDisallow_}static previouslyFailed(){return we.isInMemoryStorage||we.get("previous_websocket_failure")===!0}markConnectionHealthy(){we.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=dt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=br(t,mc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}J.responsesRequiredToBeHealthy=2;J.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Be,J]}initTransports_(e){const t=J&&J.isAvailable();let i=t&&!J.previouslyFailed();if(e.webSocketOnly&&(t||Y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[J];else{const s=this.transports_=[];for(const r of ci.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=6e4,Cc=5e3,wc=10*1024,Ec=100*1024,wn="t",ls="d",bc="s",cs="r",Ic="e",hs="o",us="a",ds="n",fs="p",Tc="h";class Sc{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tt("c:"+this.id+":"),this.transportManager_=new ci(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ec?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wn in e){const t=e[wn];t===us?this.upgradeIfSecondaryHealthy_():t===cs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===hs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Je("t",e),i=Je("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:us,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ds,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Je("t",e),i=Je("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Je(wn,e);if(ls in e){const i=e[ls];if(t===Tc)this.onHandshake_(i);else if(t===ds){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bc?this.onConnectionShutdown_(i):t===cs?this.onReset_(i):t===Ic?Mn("Server Error: "+i):t===hs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),oi!==i&&Y("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(we.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Wr{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!or()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ut}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=32,_s=768;class T{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function b(){return new T("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function _e(n){return n.pieces_.length-n.pieceNum_}function R(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new T(n.pieces_,e)}function Hr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ur(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function jr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new T(e,0)}function M(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof T)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new T(t,0)}function w(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=C(n),i=C(e);if(t===null)return e;if(t===i)return q(R(n),R(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hi(n,e){if(_e(n)!==_e(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Z(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(_e(n)>_e(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Rc{constructor(e,t){this.errorPrefix_=t,this.parts_=Ur(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sn(this.parts_[i]);Vr(this)}}function Ac(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=sn(e),Vr(n)}function xc(n){const e=n.parts_.pop();n.byteLength_-=sn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Vr(n){if(n.byteLength_>_s)throw new Error(n.errorPrefix_+"has a key path longer than "+_s+" bytes ("+n.byteLength_+").");if(n.parts_.length>ps)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ps+") or object contains a cycle "+ve(n))}function ve(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Wr{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ui}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=1e3,kc=60*5*1e3,Pc=3*1e3,gs=30*1e3,Oc=1.3,Dc=3e4,Mc="server_kill",ms=3;class ce extends Br{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ce.nextPersistentConnectionId_++,this.log_=Tt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ze,this.maxReconnectDelay_=kc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ar())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ui.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ut.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(W(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new ni,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pc),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ce.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ue(e,"w")){const i=Ve(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Y(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Oa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Pa(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Mn("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Dc&&(this.reconnectDelay_=Ze),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Oc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?U("getToken() completed but was canceled"):(U("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Sc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{Y(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Y(h),l())}}}interrupt(e){U("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){U("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yi(this.interruptReasons_)&&(this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ri(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new T(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){U("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ms&&(this.reconnectDelay_=gs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){U("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ms&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vr.replace(/\./g,"-")]=1,or()?e["framework.cordova"]=1:Na()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ut.getInstance().currentlyOnline();return Yi(this.interruptReasons_)&&e}}ce.nextPersistentConnectionId_=0;ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new y(qe,e),s=new y(qe,t);return this.compare(i,s)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt;class qr extends rn{static get __EMPTY_NODE(){return kt}static set __EMPTY_NODE(e){kt=e}compare(e,t){return Ke(e.name,t.name)}isDefinedOn(e){throw Ye("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(Se,kt)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,kt)}toString(){return".key"}}const Ue=new qr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class B{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:B.RED,this.left=s!=null?s:G.EMPTY_NODE,this.right=r!=null?r:G.EMPTY_NODE}copy(e,t,i,s,r){return new B(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return G.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return G.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}B.RED=!0;B.BLACK=!1;class Lc{copy(e,t,i,s,r){return this}insert(e,t,i){return new B(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class G{constructor(e,t=G.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new G(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))}remove(e){return new G(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pt(this.root_,null,this.comparator_,!0,e)}}G.EMPTY_NODE=new Lc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e){return Ke(n.name,e.name)}function di(n,e){return Ke(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;function $c(n){$n=n}const Gr=function(n){return typeof n=="number"?"number:"+Ir(n):"string:"+n},zr=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ue(e,".sv"),"Priority must be a string or number.")}else f(n===$n||n.isEmpty(),"priority of unexpected type.");f(n===$n||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class F{constructor(e,t=F.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zr(this.priorityNode_)}static set __childrenNodeConstructor(e){ys=e}static get __childrenNodeConstructor(){return ys}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new F(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:C(e)===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:F.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=C(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||_e(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,F.__childrenNodeConstructor.EMPTY_NODE.updateChild(R(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ir(this.value_):e+=this.value_,this.lazyHash_=wr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===F.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof F.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=F.VALUE_TYPE_ORDER.indexOf(t),r=F.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}F.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr,Kr;function Bc(n){Yr=n}function Wc(n){Kr=n}class Hc extends rn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ke(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(Se,new F("[PRIORITY-POST]",Kr))}makePost(e,t){const i=Yr(e);return new y(t,new F("[PRIORITY-POST]",i))}toString(){return".priority"}}const P=new Hc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=Math.log(2);class jc{constructor(e){const t=r=>parseInt(Math.log(r)/Uc,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jt=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new B(d,h.node,B.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=s(l,p),m=s(p+1,c);return h=n[p],d=t?t(h):h,new B(d,h.node,B.BLACK,_,m)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,m){const S=h-_,V=h;h-=_;const E=s(S+1,V),H=n[S],k=t?t(H):H;p(new B(k,H.node,m,null,E))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));m?d(S,B.BLACK):(d(S,B.BLACK),d(S,B.RED))}return u},o=new jc(n.length),a=r(o);return new G(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;const Fe={};class le{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(Fe&&P,"ChildrenNode.ts has not been loaded"),En=En||new le({".priority":Fe},{".priority":P}),En}get(e){const t=Ve(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof G?t:null}hasIndex(e){return ue(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=jt(i,e.getCompare()):a=Fe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new le(u,c)}addToIndexes(e,t){const i=$t(this.indexes_,(s,r)=>{const o=Ve(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===Fe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),jt(a,o.getCompare())}else return Fe;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new le(i,this.indexSet_)}removeFromIndexes(e,t){const i=$t(this.indexes_,s=>{if(s===Fe)return s;{const r=t.get(e.name);return r?s.remove(new y(e.name,r)):s}});return new le(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et;class g{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&zr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return et||(et=new g(new G(di),null,le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||et}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?et:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(R(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new y(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?et:this.priorityNode_;return new g(s,o,r)}}updateChild(e,t){const i=C(e);if(i===null)return t;{f(C(e)!==".priority"||_e(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(R(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(P,(o,a)=>{t[o]=a.val(e),i++,r&&g.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gr(this.getPriority().val())+":"),this.forEachChild(P,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":wr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nt?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(P),s=t.getIterator(P);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vc extends g{constructor(){super(new G(di),g.EMPTY_NODE,le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Nt=new Vc;Object.defineProperties(y,{MIN:{value:new y(qe,g.EMPTY_NODE)},MAX:{value:new y(Se,Nt)}});qr.__EMPTY_NODE=g.EMPTY_NODE;F.__childrenNodeConstructor=g;$c(Nt);Wc(Nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=!0;function j(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new F(t,j(e))}if(!(n instanceof Array)&&qc){const t=[];let i=!1;if(z(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=j(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=jt(t,Fc,o=>o.name,di);if(i){const o=jt(t,P.getCompare());return new g(r,j(e),new le({".priority":o},{".priority":P}))}else return new g(r,j(e),le.Default)}else{let t=g.EMPTY_NODE;return z(n,(i,s)=>{if(ue(n,i)&&i.substring(0,1)!=="."){const r=j(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(j(e))}}Bc(j);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends rn{constructor(e){super(),this.indexPath_=e,f(!w(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ke(e.name,t.name):r}makePost(e,t){const i=j(e),s=g.EMPTY_NODE.updateChild(this.indexPath_,i);return new y(t,s)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Nt);return new y(Se,e)}toString(){return Ur(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends rn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ke(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const i=j(e);return new y(t,i)}toString(){return".value"}}const Yc=new zc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){return{type:"value",snapshotNode:n}}function Ge(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _t(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Kc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(pt(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ge(t,i)):o.trackChildChange(_t(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(P,(s,r)=>{t.hasChild(s)||i.trackChildChange(pt(s,r))}),t.isLeafNode()||t.forEachChild(P,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(_t(s,r,o))}else i.trackChildChange(Ge(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.indexedFilter_=new fi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gt.getStartPost_(e),this.endPost_=gt.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new y(t,i))||(i=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=g.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(P,(o,a)=>{r.matches(new y(o,a))||(s=s.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.rangedFilter_=new gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new y(t,i))||(i=g.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(g.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,p)=>h(p,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:s=s.updateImmediateChild(h.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new y(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(_t(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(pt(t,h));const m=a.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ge(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(pt(c.name,c.node)),r.trackChildChange(Ge(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qe}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Se}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new pi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xc(n){return n.loadsAllData()?new fi(n.getIndex()):n.hasLimit()?new Qc(n):new gt(n)}function vs(n){const e={};if(n.isDefault())return e;let t;return n.index_===P?t="$priority":n.index_===Yc?t="$value":n.index_===Ue?t="$key":(f(n.index_ instanceof Gc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=W(t),n.startSet_&&(e.startAt=W(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+W(n.indexStartName_))),n.endSet_&&(e.endAt=W(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+W(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Cs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Br{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Tt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vt.getListenId_(e,i),a={};this.listens_[o]=a;const l=vs(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ve(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Vt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=vs(e._queryParams),i=e._path.toString(),s=new ni;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Da(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dt(a.responseText)}catch{Y("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Y("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return{value:null,children:new Map}}function Xr(n,e,t){if(w(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=C(e);n.children.has(i)||n.children.set(i,qt());const s=n.children.get(i);e=R(e),Xr(s,e,t)}}function Bn(n,e,t){n.value!==null?t(e,n.value):Zc(n,(i,s)=>{const r=new T(e.toString()+"/"+i);Bn(s,r,t)})}function Zc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&z(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=10*1e3,th=30*1e3,nh=5*60*1e3;class ih{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new eh(e);const i=ws+(th-ws)*Math.random();ot(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;z(e,(s,r)=>{r>0&&ue(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*nh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ee||(ee={}));function Jr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _i(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ee.ACK_USER_WRITE,this.source=Jr()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new T(e));return new Gt(b(),t,this.revert)}}else return f(C(this.path)===e,"operationForChild called for unrelated child."),new Gt(R(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.source=e,this.path=t,this.type=ee.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new mt(this.source,b()):new mt(this.source,R(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ee.OVERWRITE}operationForChild(e){return w(this.path)?new Ne(this.source,b(),this.snap.getImmediateChild(e)):new Ne(this.source,R(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ee.MERGE}operationForChild(e){if(w(this.path)){const t=this.children.subtree(new T(e));return t.isEmpty()?null:t.value?new Ne(this.source,b(),t.value):new yt(this.source,b(),t)}else return f(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yt(this.source,R(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rh(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kc(o.childName,o.snapshotNode))}),tt(n,s,"child_removed",e,i,t),tt(n,s,"child_added",e,i,t),tt(n,s,"child_moved",r,i,t),tt(n,s,"child_changed",e,i,t),tt(n,s,"value",e,i,t),s}function tt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>ah(n,a,l)),o.forEach(a=>{const l=oh(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function oh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ah(n,e,t){if(e.childName==null||t.childName==null)throw Ye("Should only compare child_ events.");const i=new y(e.childName,e.snapshotNode),s=new y(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){return{eventCache:n,serverCache:e}}function at(n,e,t,i){return on(new Re(e,t,i),n.serverCache)}function Zr(n,e,t,i){return on(n.eventCache,new Re(e,t,i))}function Wn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ae(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;const lh=()=>(bn||(bn=new G(Vl)),bn);class A{constructor(e,t=lh()){this.value=e,this.children=t}static fromObject(e){let t=new A(null);return z(e,(i,s)=>{t=t.set(new T(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:b(),value:this.value};if(w(e))return null;{const i=C(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(R(e),t);return r!=null?{path:M(new T(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const t=C(e),i=this.children.get(t);return i!==null?i.subtree(R(e)):new A(null)}}set(e,t){if(w(e))return new A(t,this.children);{const i=C(e),r=(this.children.get(i)||new A(null)).set(R(e),t),o=this.children.insert(i,r);return new A(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const t=C(e),i=this.children.get(t);if(i){const s=i.remove(R(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const t=C(e),i=this.children.get(t);return i?i.get(R(e)):null}}setTree(e,t){if(w(e))return t;{const i=C(e),r=(this.children.get(i)||new A(null)).setTree(R(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new A(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(M(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,b(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(w(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(R(e),M(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,b(),t)}foreachOnPath_(e,t,i){if(w(e))return this;{this.value&&i(t,this.value);const s=C(e),r=this.children.get(s);return r?r.foreachOnPath_(R(e),M(t,s),i):new A(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(M(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.writeTree_=e}static empty(){return new te(new A(null))}}function lt(n,e,t){if(w(e))return new te(new A(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=q(s,e);return r=r.updateChild(o,t),new te(n.writeTree_.set(s,r))}else{const s=new A(t),r=n.writeTree_.setTree(e,s);return new te(r)}}}function Es(n,e,t){let i=n;return z(t,(s,r)=>{i=lt(i,M(e,s),r)}),i}function bs(n,e){if(w(e))return te.empty();{const t=n.writeTree_.setTree(e,new A(null));return new te(t)}}function Hn(n,e){return De(n,e)!=null}function De(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function Is(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(i,s)=>{e.push(new y(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new y(i,s.value))}),e}function fe(n,e){if(w(e))return n;{const t=De(n,e);return t!=null?new te(new A(t)):new te(n.writeTree_.subtree(e))}}function Un(n){return n.writeTree_.isEmpty()}function ze(n,e){return eo(b(),n.writeTree_,e)}function eo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=eo(M(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(M(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){return so(e,n)}function ch(n,e,t,i,s){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=lt(n.visibleWrites,e,t)),n.lastWriteId=i}function hh(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function uh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&dh(a,i.path)?s=!1:Z(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return fh(n),!0;if(i.snap)n.visibleWrites=bs(n.visibleWrites,i.path);else{const a=i.children;z(a,l=>{n.visibleWrites=bs(n.visibleWrites,M(i.path,l))})}return!0}else return!1}function dh(n,e){if(n.snap)return Z(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Z(M(n.path,t),e))return!0;return!1}function fh(n){n.visibleWrites=to(n.allWrites,ph,b()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ph(n){return n.visible}function to(n,e,t){let i=te.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Z(t,o)?(a=q(t,o),i=lt(i,a,r.snap)):Z(o,t)&&(a=q(o,t),i=lt(i,b(),r.snap.getChild(a)));else if(r.children){if(Z(t,o))a=q(t,o),i=Es(i,a,r.children);else if(Z(o,t))if(a=q(o,t),w(a))i=Es(i,b(),r.children);else{const l=Ve(r.children,C(a));if(l){const c=l.getChild(R(a));i=lt(i,b(),c)}}}else throw Ye("WriteRecord should have .snap or .children")}}return i}function no(n,e,t,i,s){if(!i&&!s){const r=De(n.visibleWrites,e);if(r!=null)return r;{const o=fe(n.visibleWrites,e);if(Un(o))return t;if(t==null&&!Hn(o,b()))return null;{const a=t||g.EMPTY_NODE;return ze(o,a)}}}else{const r=fe(n.visibleWrites,e);if(!s&&Un(r))return t;if(!s&&t==null&&!Hn(r,b()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Z(c.path,e)||Z(e,c.path))},a=to(n.allWrites,o,e),l=t||g.EMPTY_NODE;return ze(a,l)}}}function _h(n,e,t){let i=g.EMPTY_NODE;const s=De(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(P,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=fe(n.visibleWrites,e);return t.forEachChild(P,(o,a)=>{const l=ze(fe(r,new T(o)),a);i=i.updateImmediateChild(o,l)}),Is(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=fe(n.visibleWrites,e);return Is(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function gh(n,e,t,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,t);if(Hn(n.visibleWrites,r))return null;{const o=fe(n.visibleWrites,r);return Un(o)?s.getChild(t):ze(o,s.getChild(t))}}function mh(n,e,t,i){const s=M(e,t),r=De(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=fe(n.visibleWrites,s);return ze(o,i.getNode().getImmediateChild(t))}else return null}function yh(n,e){return De(n.visibleWrites,e)}function vh(n,e,t,i,s,r,o){let a;const l=fe(n.visibleWrites,e),c=De(l,b());if(c!=null)a=c;else if(t!=null)a=ze(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function Ch(){return{visibleWrites:te.empty(),allWrites:[],lastWriteId:-1}}function zt(n,e,t,i){return no(n.writeTree,n.treePath,e,t,i)}function yi(n,e){return _h(n.writeTree,n.treePath,e)}function Ts(n,e,t,i){return gh(n.writeTree,n.treePath,e,t,i)}function Yt(n,e){return yh(n.writeTree,M(n.treePath,e))}function wh(n,e,t,i,s,r){return vh(n.writeTree,n.treePath,e,t,i,s,r)}function vi(n,e,t){return mh(n.writeTree,n.treePath,e,t)}function io(n,e){return so(M(n.treePath,e),n.writeTree)}function so(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,_t(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,pt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ge(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,_t(i,e.snapshotNode,s.oldSnap));else throw Ye("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ro=new bh;class Ci{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Re(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vi(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=wh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n){return{filter:n}}function Th(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Sh(n,e,t,i,s){const r=new Eh;let o,a;if(t.type===ee.OVERWRITE){const c=t;c.source.fromUser?o=jn(n,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!w(c.path),o=Kt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ee.MERGE){const c=t;c.source.fromUser?o=Rh(n,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ee.ACK_USER_WRITE){const c=t;c.revert?o=kh(n,e,c.path,i,s,r):o=Ah(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ee.LISTEN_COMPLETE)o=xh(n,e,t.path,i,r);else throw Ye("Unknown operation type: "+t.type);const l=r.getChanges();return Nh(e,o,l),{viewCache:o,changes:l}}function Nh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Wn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Qr(Wn(e)))}}function oo(n,e,t,i,s,r){const o=e.eventCache;if(Yt(i,t)!=null)return e;{let a,l;if(w(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ae(e),u=c instanceof g?c:g.EMPTY_NODE,h=yi(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=zt(i,Ae(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){f(_e(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ts(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=R(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ts(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=vi(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return at(e,a,o.isFullyInitialized()||w(t),n.filter.filtersNodes())}}function Kt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(w(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=C(t);if(!l.isCompleteForPath(t)&&_e(t)>1)return e;const _=R(t),S=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),p,S,_,ro,null)}const h=Zr(e,c,l.isFullyInitialized()||w(t),u.filtersNodes()),d=new Ci(s,h,r);return oo(n,h,t,s,d,a)}function jn(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ci(s,e,r);if(w(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=at(e,c,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=at(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=R(t),p=a.getNode().getImmediateChild(h);let _;if(w(d))_=i;else{const m=u.getCompleteChild(h);m!=null?Hr(d)===".priority"&&m.getChild(jr(d)).isEmpty()?_=m:_=m.updateChild(d,i):_=g.EMPTY_NODE}if(p.equals(_))l=e;else{const m=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=at(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ss(n,e){return n.eventCache.isCompleteForChild(e)}function Rh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=M(t,l);Ss(e,C(u))&&(a=jn(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=M(t,l);Ss(e,C(u))||(a=jn(n,a,u,c,s,r,o))}),a}function Ns(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Vn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;w(t)?c=i:c=new A(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Ns(n,p,d);l=Kt(n,l,new T(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),m=Ns(n,_,d);l=Kt(n,l,new T(h),m,s,r,o,a)}}),l}function Ah(n,e,t,i,s,r,o){if(Yt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(w(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Kt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(w(t)){let c=new A(null);return l.getNode().forEachChild(Ue,(u,h)=>{c=c.set(new T(u),h)}),Vn(n,e,t,c,s,r,a,o)}else return e}else{let c=new A(null);return i.foreach((u,h)=>{const d=M(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Vn(n,e,t,c,s,r,a,o)}}function xh(n,e,t,i,s){const r=e.serverCache,o=Zr(e,r.getNode(),r.isFullyInitialized()||w(t),r.isFiltered());return oo(n,o,t,i,ro,s)}function kh(n,e,t,i,s,r){let o;if(Yt(i,t)!=null)return e;{const a=new Ci(i,e,s),l=e.eventCache.getNode();let c;if(w(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zt(i,Ae(e));else{const h=e.serverCache.getNode();f(h instanceof g,"serverChildren would be complete if leaf node"),u=yi(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=C(t);let h=vi(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,R(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,g.EMPTY_NODE,R(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zt(i,Ae(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Yt(i,b())!=null,at(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new fi(i.getIndex()),r=Xc(i);this.processor_=Ih(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),u=new Re(l,o.isFullyInitialized(),s.filtersNodes()),h=new Re(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=on(h,u),this.eventGenerator_=new sh(this.query_)}get query(){return this.query_}}function Oh(n){return n.viewCache_.serverCache.getNode()}function Dh(n,e){const t=Ae(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!w(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function Rs(n){return n.eventRegistrations_.length===0}function Mh(n,e){n.eventRegistrations_.push(e)}function As(n,e,t){const i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function xs(n,e,t,i){e.type===ee.MERGE&&e.source.queryId!==null&&(f(Ae(n.viewCache_),"We should always have a full cache before handling merges"),f(Wn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Sh(n.processor_,s,e,t,i);return Th(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ao(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Lh(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(P,(r,o)=>{i.push(Ge(r,o))}),t.isFullyInitialized()&&i.push(Qr(t.getNode())),ao(n,i,t.getNode(),e)}function ao(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return rh(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;class Fh{constructor(){this.views=new Map}}function $h(n){f(!Qt,"__referenceConstructor has already been defined"),Qt=n}function Bh(){return f(Qt,"Reference.ts has not been loaded"),Qt}function Wh(n){return n.views.size===0}function wi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),xs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(xs(o,e,t,i));return r}}function Hh(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=zt(t,s?i:null),l=!1;a?l=!0:i instanceof g?(a=yi(t,i),l=!1):(a=g.EMPTY_NODE,l=!1);const c=on(new Re(a,l,!1),new Re(i,s,!1));return new Ph(e,c)}return o}function Uh(n,e,t,i,s,r){const o=Hh(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Mh(o,t),Lh(o,t)}function jh(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ge(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(As(c,t,i)),Rs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(As(l,t,i)),Rs(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ge(n)&&r.push(new(Bh())(e._repo,e._path)),{removed:r,events:o}}function lo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function je(n,e){let t=null;for(const i of n.views.values())t=t||Dh(i,e);return t}function co(n,e){if(e._queryParams.loadsAllData())return an(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ho(n,e){return co(n,e)!=null}function ge(n){return an(n)!=null}function an(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;function Vh(n){f(!Xt,"__referenceConstructor has already been defined"),Xt=n}function qh(){return f(Xt,"Reference.ts has not been loaded"),Xt}let Gh=1;class ks{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=Ch(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zh(n,e,t,i,s){return ch(n.pendingWriteTree_,e,t,i,s),s?Rt(n,new Ne(Jr(),e,t)):[]}function We(n,e,t=!1){const i=hh(n.pendingWriteTree_,e);if(uh(n.pendingWriteTree_,e)){let r=new A(null);return i.snap!=null?r=r.set(b(),!0):z(i.children,o=>{r=r.set(new T(o),!0)}),Rt(n,new Gt(i.path,r,t))}else return[]}function ln(n,e,t){return Rt(n,new Ne(_i(),e,t))}function Yh(n,e,t){const i=A.fromObject(t);return Rt(n,new yt(_i(),e,i))}function Kh(n,e){return Rt(n,new mt(_i(),e))}function Qh(n,e,t){const i=Ei(n,t);if(i){const s=bi(i),r=s.path,o=s.queryId,a=q(r,e),l=new mt(gi(o),a);return Ii(n,r,l)}else return[]}function qn(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||ho(r,e))){const a=jh(r,e,t,i);Wh(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,d)=>ge(d));if(c&&!u){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const d=Zh(h);for(let p=0;p<d.length;++p){const _=d[p],m=_.query,S=_o(n,_);n.listenProvider_.startListening(ct(m),Jt(n,m),S.hashFn,S.onComplete)}}}!u&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(ct(e),null):l.forEach(h=>{const d=n.queryToTagMap.get(cn(h));n.listenProvider_.stopListening(ct(h),d)})),eu(n,l)}return o}function Xh(n,e,t,i){const s=Ei(n,i);if(s!=null){const r=bi(s),o=r.path,a=r.queryId,l=q(o,e),c=new Ne(gi(a),l,t);return Ii(n,o,c)}else return[]}function Jh(n,e,t,i){const s=Ei(n,i);if(s){const r=bi(s),o=r.path,a=r.queryId,l=q(o,e),c=A.fromObject(t),u=new yt(gi(a),l,c);return Ii(n,o,u)}else return[]}function Ps(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(h,d)=>{const p=q(h,i);s=s||je(d,p),r=r||ge(d)});let o=n.syncPointTree_.get(i);o?(r=r||ge(o),s=s||je(o,b())):(o=new Fh,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,p)=>{const _=je(p,b());_&&(s=s.updateImmediateChild(d,_))}));const l=ho(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=cn(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=tu();n.queryToTagMap.set(h,d),n.tagToQueryMap.set(d,h)}const c=mi(n.pendingWriteTree_,i);let u=Uh(o,e,t,c,s,a);if(!l&&!r){const h=co(o,e);u=u.concat(nu(n,e,h))}return u}function uo(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=q(o,e),c=je(a,l);if(c)return c});return no(s,e,r,t,!0)}function Rt(n,e){return fo(e,n.syncPointTree_,null,mi(n.pendingWriteTree_,b()))}function fo(n,e,t,i){if(w(n.path))return po(n,e,t,i);{const s=e.get(b());t==null&&s!=null&&(t=je(s,b()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=io(i,o);r=r.concat(fo(a,l,c,u))}return s&&(r=r.concat(wi(s,n,i,t))),r}}function po(n,e,t,i){const s=e.get(b());t==null&&s!=null&&(t=je(s,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=io(i,o),u=n.operationForChild(o);u&&(r=r.concat(po(u,a,l,c)))}),s&&(r=r.concat(wi(s,n,i,t))),r}function _o(n,e){const t=e.query,i=Jt(n,t);return{hashFn:()=>(Oh(e)||g.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Qh(n,t._path,i):Kh(n,t._path);{const r=zl(s,t);return qn(n,t,null,r)}}}}function Jt(n,e){const t=cn(e);return n.queryToTagMap.get(t)}function cn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ei(n,e){return n.tagToQueryMap.get(e)}function bi(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new T(n.substr(0,e))}}function Ii(n,e,t){const i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=mi(n.pendingWriteTree_,e);return wi(i,t,s,null)}function Zh(n){return n.fold((e,t,i)=>{if(t&&ge(t))return[an(t)];{let s=[];return t&&(s=lo(t)),z(i,(r,o)=>{s=s.concat(o)}),s}})}function ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(qh())(n._repo,n._path):n}function eu(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=cn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function tu(){return Gh++}function nu(n,e,t){const i=e._path,s=Jt(n,e),r=_o(n,t),o=n.listenProvider_.startListening(ct(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)f(!ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!w(c)&&u&&ge(u))return[an(u).query];{let d=[];return u&&(d=d.concat(lo(u).map(p=>p.query))),z(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(ct(u),Jt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ti(t)}node(){return this.node_}}class Si{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=M(this.path_,e);return new Si(this.syncTree_,t)}node(){return uo(this.syncTree_,this.path_)}}const iu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Os=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return su(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ru(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},su=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},ru=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ou=function(n,e,t,i){return Ni(e,new Si(t,n),i)},au=function(n,e,t){return Ni(n,new Ti(e),t)};function Ni(n,e,t){const i=n.getPriority().val(),s=Os(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Os(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new F(a,j(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new F(s))),o.forEachChild(P,(a,l)=>{const c=Ni(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ai(n,e){let t=e instanceof T?e:new T(e),i=n,s=C(t);for(;s!==null;){const r=Ve(i.node.children,s)||{children:{},childCount:0};i=new Ri(s,i,r),t=R(t),s=C(t)}return i}function Qe(n){return n.node.value}function go(n,e){n.node.value=e,Gn(n)}function mo(n){return n.node.childCount>0}function lu(n){return Qe(n)===void 0&&!mo(n)}function hn(n,e){z(n.node.children,(t,i)=>{e(new Ri(t,n,i))})}function yo(n,e,t,i){t&&!i&&e(n),hn(n,s=>{yo(s,e,!0,i)}),t&&i&&e(n)}function cu(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function At(n){return new T(n.parent===null?n.name:At(n.parent)+"/"+n.name)}function Gn(n){n.parent!==null&&hu(n.parent,n.name,n)}function hu(n,e,t){const i=lu(t),s=ue(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Gn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Gn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=/[\[\].#$\/\u0000-\u001F\u007F]/,du=/[\[\].#$\u0000-\u001F\u007F]/,In=10*1024*1024,vo=function(n){return typeof n=="string"&&n.length!==0&&!uu.test(n)},Co=function(n){return typeof n=="string"&&n.length!==0&&!du.test(n)},fu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Co(n)},wo=function(n,e,t){const i=t instanceof T?new Rc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ve(i));if(typeof e=="function")throw new Error(n+"contains a function "+ve(i)+" with contents = "+e.toString());if(Er(e))throw new Error(n+"contains "+e.toString()+" "+ve(i));if(typeof e=="string"&&e.length>In/3&&sn(e)>In)throw new Error(n+"contains a string greater than "+In+" utf8 bytes "+ve(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vo(o)))throw new Error(n+" contains an invalid key ("+o+") "+ve(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ac(i,o),wo(n,a,i),xc(i)}),s&&r)throw new Error(n+' contains ".value" child '+ve(i)+" in addition to actual children.")}},Eo=function(n,e,t,i){if(!(i&&t===void 0)&&!Co(t))throw new Error(ur(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pu=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Eo(n,e,t,i)},_u=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!fu(t))throw new Error(ur(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bo(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!hi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Io(n,e,t){bo(n,t),To(n,i=>hi(i,e))}function Me(n,e,t){bo(n,t),To(n,i=>Z(i,e)||Z(e,i))}function To(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(mu(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function mu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();be&&U("event: "+t.toString()),St(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="repo_interrupt",vu=25;class Cu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qt(),this.transactionQueueTree_=new Ri,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wu(n,e,t){if(n.stats_=ai(n.repoInfo_),n.forceRestClient_||Xl())n.server_=new Vt(n.repoInfo_,(i,s,r,o)=>{Ds(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ms(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ce(n.repoInfo_,e,(i,s,r,o)=>{Ds(n,i,s,r,o)},i=>{Ms(n,i)},i=>{bu(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=sc(n.repoInfo_,()=>new ih(n.stats_,n.server_)),n.infoData_=new Jc,n.infoSyncTree_=new ks({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ln(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xi(n,"connected",!1),n.serverSyncTree_=new ks({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Me(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Eu(n){const t=n.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function So(n){return iu({timestamp:Eu(n)})}function Ds(n,e,t,i,s){n.dataUpdateCount++;const r=new T(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=$t(t,c=>j(c));o=Jh(n.serverSyncTree_,r,l,s)}else{const l=j(t);o=Xh(n.serverSyncTree_,r,l,s)}else if(i){const l=$t(t,c=>j(c));o=Yh(n.serverSyncTree_,r,l)}else{const l=j(t);o=ln(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Pi(n,r)),Me(n.eventQueue_,a,o)}function Ms(n,e){xi(n,"connected",e),e===!1&&Tu(n)}function bu(n,e){z(e,(t,i)=>{xi(n,t,i)})}function xi(n,e,t){const i=new T("/.info/"+e),s=j(t);n.infoData_.updateSnapshot(i,s);const r=ln(n.infoSyncTree_,i,s);Me(n.eventQueue_,i,r)}function Iu(n){return n.nextWriteId_++}function Tu(n){No(n,"onDisconnectEvents");const e=So(n),t=qt();Bn(n.onDisconnect_,b(),(s,r)=>{const o=ou(s,r,n.serverSyncTree_,e);Xr(t,s,o)});let i=[];Bn(t,b(),(s,r)=>{i=i.concat(ln(n.serverSyncTree_,s,r));const o=xu(n,s);Pi(n,o)}),n.onDisconnect_=qt(),Me(n.eventQueue_,b(),i)}function Su(n,e,t){let i;C(e._path)===".info"?i=Ps(n.infoSyncTree_,e,t):i=Ps(n.serverSyncTree_,e,t),Io(n.eventQueue_,e._path,i)}function Ls(n,e,t){let i;C(e._path)===".info"?i=qn(n.infoSyncTree_,e,t):i=qn(n.serverSyncTree_,e,t),Io(n.eventQueue_,e._path,i)}function Nu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(yu)}function No(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),U(t,...e)}function Ro(n,e,t){return uo(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function ki(n,e=n.transactionQueueTree_){if(e||un(n,e),Qe(e)){const t=xo(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Ru(n,At(e),t)}else mo(e)&&hn(e,t=>{ki(n,t)})}function Ru(n,e,t){const i=t.map(c=>c.currentWriteId),s=Ro(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{No(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(We(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();un(n,Ai(n.transactionQueueTree_,e)),ki(n,n.transactionQueueTree_),Me(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)St(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Y("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Pi(n,e)}},o)}function Pi(n,e){const t=Ao(n,e),i=At(t),s=xo(n,t);return Au(n,s,i),i}function Au(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=q(t,l.path);let u=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(We(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vu)u=!0,h="maxretry",s=s.concat(We(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ro(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){wo("transaction failed: Data returned ",p,l.path);let _=j(p);typeof p=="object"&&p!=null&&ue(p,".priority")||(_=_.updatePriority(d.getPriority()));const S=l.currentWriteId,V=So(n),E=au(_,d,V);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=E,l.currentWriteId=Iu(n),o.splice(o.indexOf(S),1),s=s.concat(zh(n.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(We(n.serverSyncTree_,S,!0))}else u=!0,h="nodata",s=s.concat(We(n.serverSyncTree_,l.currentWriteId,!0))}Me(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}un(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)St(i[a]);ki(n,n.transactionQueueTree_)}function Ao(n,e){let t,i=n.transactionQueueTree_;for(t=C(e);t!==null&&Qe(i)===void 0;)i=Ai(i,t),e=R(e),t=C(e);return i}function xo(n,e){const t=[];return ko(n,e,t),t.sort((i,s)=>i.order-s.order),t}function ko(n,e,t){const i=Qe(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);hn(e,s=>{ko(n,s,t)})}function un(n,e){const t=Qe(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,go(e,t.length>0?t:void 0)}hn(e,i=>{un(n,i)})}function xu(n,e){const t=At(Ao(n,e)),i=Ai(n.transactionQueueTree_,e);return cu(i,s=>{Tn(n,s)}),Tn(n,i),yo(i,s=>{Tn(n,s)}),t}function Tn(n,e){const t=Qe(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(We(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?go(e,void 0):t.length=r+1,Me(n.eventQueue_,At(e),s);for(let o=0;o<i.length;o++)St(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Pu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Y(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fs=function(n,e){const t=Ou(n),i=t.namespace;t.domain==="firebase.com"&&Te(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Te("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ul();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new tc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new T(t.pathString)}},Ou=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=ku(n.substring(u,h)));const d=Pu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class Oo{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Oi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return w(this._path)?null:Hr(this._path)}get ref(){return new de(this._repo,this._path)}get _queryIdentifier(){const e=Cs(this._queryParams),t=ri(e);return t==="{}"?"default":t}get _queryObject(){return Cs(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof Oi))return!1;const t=this._repo===e._repo,i=hi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nc(this._path)}}class de extends Oi{constructor(e,t){super(e,t,new pi,!1)}get parent(){const e=jr(this._path);return e===null?null:new de(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new T(e),i=me(this.ref,e);return new vt(this._node.getChild(t),i,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new vt(s,me(this.ref,i),P)))}hasChild(e){const t=new T(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mu(n,e){return n=Et(n),n._checkNotDeleted("ref"),e!==void 0?me(n._root,e):n._root}function me(n,e){return n=Et(n),C(n._path)===null?pu("child","path",e,!1):Eo("child","path",e,!1),new de(n._repo,M(n._path,e))}class Di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Po("value",this,new vt(e.snapshotNode,new de(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Oo(this,e,t):null}matches(e){return e instanceof Di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Oo(this,e,t):null}createEvent(e,t){f(e.childName!=null,"Child events should have a childName.");const i=me(new de(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Po(e.type,this,new vt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Lu(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{Ls(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Du(t,r||void 0),a=e==="value"?new Di(o):new Mi(e,o);return Su(n._repo,n,a),()=>Ls(n._repo,n,a)}function Do(n,e,t,i){return Lu(n,"value",e,t,i)}$h(de);Vh(de);/**
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
 */const Fu="FIREBASE_DATABASE_EMULATOR_HOST",zn={};let $u=!1;function Bu(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Te("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),U("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fs(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[Fu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Fs(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Ln(Ln.OWNER):new Zl(n.name,n.options,e);_u("Invalid Firebase Database URL",o),w(o.path)||Te("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hu(a,n,u,new Jl(n.name,t));return new Uu(h,n)}function Wu(n,e){const t=zn[e];(!t||t[n.key]!==n)&&Te(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Nu(n),delete t[n.key]}function Hu(n,e,t,i){let s=zn[e.name];s||(s={},zn[e.name]=s);let r=s[n.toURLString()];return r&&Te("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Cu(n,$u,t,i),s[n.toURLString()]=r,r}class Uu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new de(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Te("Cannot call "+e+" on a deleted database.")}}function ju(n=gr(),e){return bt(n,"database").getImmediate({identifier:e})}/**
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
 */function Vu(n){Fl(Sl),pe(new he("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Bu(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),se(is,ss,n),se(is,ss,"esm2017")}ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vu();var qu=typeof global=="object"&&global&&global.Object===Object&&global,Gu=qu,zu=typeof self=="object"&&self&&self.Object===Object&&self,Yu=Gu||zu||Function("return this")(),Li=Yu,Ku=Li.Symbol,Zt=Ku,Mo=Object.prototype,Qu=Mo.hasOwnProperty,Xu=Mo.toString,nt=Zt?Zt.toStringTag:void 0;function Ju(n){var e=Qu.call(n,nt),t=n[nt];try{n[nt]=void 0;var i=!0}catch{}var s=Xu.call(n);return i&&(e?n[nt]=t:delete n[nt]),s}var Zu=Object.prototype,ed=Zu.toString;function td(n){return ed.call(n)}var nd="[object Null]",id="[object Undefined]",$s=Zt?Zt.toStringTag:void 0;function sd(n){return n==null?n===void 0?id:nd:$s&&$s in Object(n)?Ju(n):td(n)}function Lo(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var rd="[object AsyncFunction]",od="[object Function]",ad="[object GeneratorFunction]",ld="[object Proxy]";function cd(n){if(!Lo(n))return!1;var e=sd(n);return e==od||e==ad||e==rd||e==ld}var hd=Li["__core-js_shared__"],Sn=hd,Bs=function(){var n=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function ud(n){return!!Bs&&Bs in n}var dd=Function.prototype,fd=dd.toString;function pd(n){if(n!=null){try{return fd.call(n)}catch{}try{return n+""}catch{}}return""}var _d=/[\\^$.*+?()[\]{}|]/g,gd=/^\[object .+?Constructor\]$/,md=Function.prototype,yd=Object.prototype,vd=md.toString,Cd=yd.hasOwnProperty,wd=RegExp("^"+vd.call(Cd).replace(_d,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ed(n){if(!Lo(n)||ud(n))return!1;var e=cd(n)?wd:gd;return e.test(pd(n))}function bd(n,e){return n==null?void 0:n[e]}function Fo(n,e){var t=bd(n,e);return Ed(t)?t:void 0}function Id(n,e){return n===e||n!==n&&e!==e}var Td=Fo(Object,"create"),Ct=Td;function Sd(){this.__data__=Ct?Ct(null):{},this.size=0}function Nd(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Rd="__lodash_hash_undefined__",Ad=Object.prototype,xd=Ad.hasOwnProperty;function kd(n){var e=this.__data__;if(Ct){var t=e[n];return t===Rd?void 0:t}return xd.call(e,n)?e[n]:void 0}var Pd=Object.prototype,Od=Pd.hasOwnProperty;function Dd(n){var e=this.__data__;return Ct?e[n]!==void 0:Od.call(e,n)}var Md="__lodash_hash_undefined__";function Ld(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ct&&e===void 0?Md:e,this}function xe(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}xe.prototype.clear=Sd;xe.prototype.delete=Nd;xe.prototype.get=kd;xe.prototype.has=Dd;xe.prototype.set=Ld;function Fd(){this.__data__=[],this.size=0}function dn(n,e){for(var t=n.length;t--;)if(Id(n[t][0],e))return t;return-1}var $d=Array.prototype,Bd=$d.splice;function Wd(n){var e=this.__data__,t=dn(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Bd.call(e,t,1),--this.size,!0}function Hd(n){var e=this.__data__,t=dn(e,n);return t<0?void 0:e[t][1]}function Ud(n){return dn(this.__data__,n)>-1}function jd(n,e){var t=this.__data__,i=dn(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function Xe(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Xe.prototype.clear=Fd;Xe.prototype.delete=Wd;Xe.prototype.get=Hd;Xe.prototype.has=Ud;Xe.prototype.set=jd;var Vd=Fo(Li,"Map"),qd=Vd;function Gd(){this.size=0,this.__data__={hash:new xe,map:new(qd||Xe),string:new xe}}function zd(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function fn(n,e){var t=n.__data__;return zd(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Yd(n){var e=fn(this,n).delete(n);return this.size-=e?1:0,e}function Kd(n){return fn(this,n).get(n)}function Qd(n){return fn(this,n).has(n)}function Xd(n,e){var t=fn(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Le(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Le.prototype.clear=Gd;Le.prototype.delete=Yd;Le.prototype.get=Kd;Le.prototype.has=Qd;Le.prototype.set=Xd;var Jd="Expected a function";function pn(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(Jd);var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=t.cache;if(r.has(s))return r.get(s);var o=n.apply(this,i);return t.cache=r.set(s,o)||r,o};return t.cache=new(pn.Cache||Le),t}pn.Cache=Le;var Zd="firebase",ef="9.6.11";/**
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
 */se(Zd,ef,"app");const $o="@firebase/installations",Fi="0.5.8";/**
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
 */const Bo=1e4,Wo=`w:${Fi}`,Ho="FIS_v2",tf="https://firebaseinstallations.googleapis.com/v1",nf=60*60*1e3,sf="installations",rf="Installations";/**
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
 */const of={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ke=new nn(sf,rf,of);function Uo(n){return n instanceof wt&&n.code.includes("request-failed")}/**
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
 */function jo({projectId:n}){return`${tf}/projects/${n}/installations`}function Vo(n){return{token:n.token,requestStatus:2,expiresIn:lf(n.expiresIn),creationTime:Date.now()}}async function qo(n,e){const i=(await e.json()).error;return ke.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Go({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function af(n,{refreshToken:e}){const t=Go(n);return t.append("Authorization",cf(e)),t}async function zo(n){const e=await n();return e.status>=500&&e.status<600?n():e}function lf(n){return Number(n.replace("s","000"))}function cf(n){return`${Ho} ${n}`}/**
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
 */async function hf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=jo(n),s=Go(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:Ho,appId:n.appId,sdkVersion:Wo},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zo(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Vo(c.authToken)}}else throw await qo("Create Installation",l)}/**
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
 */function Yo(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function uf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const df=/^[cdef][\w-]{21}$/,Yn="";function ff(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=pf(n);return df.test(t)?t:Yn}catch{return Yn}}function pf(n){return uf(n).substr(0,22)}/**
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
 */function _n(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ko=new Map;function Qo(n,e){const t=_n(n);Xo(t,e),_f(t,e)}function Xo(n,e){const t=Ko.get(n);if(!!t)for(const i of t)i(e)}function _f(n,e){const t=gf();t&&t.postMessage({key:n,fid:e}),mf()}let Ee=null;function gf(){return!Ee&&"BroadcastChannel"in self&&(Ee=new BroadcastChannel("[Firebase] FID Change"),Ee.onmessage=n=>{Xo(n.data.key,n.data.fid)}),Ee}function mf(){Ko.size===0&&Ee&&(Ee.close(),Ee=null)}/**
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
 */const yf="firebase-installations-database",vf=1,Pe="firebase-installations-store";let Nn=null;function $i(){return Nn||(Nn=pr(yf,vf,(n,e)=>{switch(e){case 0:n.createObjectStore(Pe)}})),Nn}async function en(n,e){const t=_n(n),s=(await $i()).transaction(Pe,"readwrite"),r=s.objectStore(Pe),o=await r.get(t);return await r.put(e,t),await s.complete,(!o||o.fid!==e.fid)&&Qo(n,e.fid),e}async function Jo(n){const e=_n(n),i=(await $i()).transaction(Pe,"readwrite");await i.objectStore(Pe).delete(e),await i.complete}async function gn(n,e){const t=_n(n),s=(await $i()).transaction(Pe,"readwrite"),r=s.objectStore(Pe),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.complete,a&&(!o||o.fid!==a.fid)&&Qo(n,a.fid),a}/**
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
 */async function Bi(n){let e;const t=await gn(n.appConfig,i=>{const s=Cf(i),r=wf(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Yn?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Cf(n){const e=n||{fid:ff(),registrationStatus:0};return Zo(e)}function wf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ke.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Ef(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bf(n)}:{installationEntry:e}}async function Ef(n,e){try{const t=await hf(n,e);return en(n.appConfig,t)}catch(t){throw Uo(t)&&t.customData.serverCode===409?await Jo(n.appConfig):await en(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function bf(n){let e=await Ws(n.appConfig);for(;e.registrationStatus===1;)await Yo(100),e=await Ws(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Bi(n);return i||t}return e}function Ws(n){return gn(n,e=>{if(!e)throw ke.create("installation-not-found");return Zo(e)})}function Zo(n){return If(n)?{fid:n.fid,registrationStatus:0}:n}function If(n){return n.registrationStatus===1&&n.registrationTime+Bo<Date.now()}/**
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
 */async function Tf({appConfig:n,heartbeatServiceProvider:e},t){const i=Sf(n,t),s=af(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Wo,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zo(()=>fetch(i,a));if(l.ok){const c=await l.json();return Vo(c)}else throw await qo("Generate Auth Token",l)}function Sf(n,{fid:e}){return`${jo(n)}/${e}/authTokens:generate`}/**
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
 */async function Wi(n,e=!1){let t;const i=await gn(n.appConfig,r=>{if(!ea(r))throw ke.create("not-registered");const o=r.authToken;if(!e&&Af(o))return r;if(o.requestStatus===1)return t=Nf(n,e),r;{if(!navigator.onLine)throw ke.create("app-offline");const a=kf(r);return t=Rf(n,a),a}});return t?await t:i.authToken}async function Nf(n,e){let t=await Hs(n.appConfig);for(;t.authToken.requestStatus===1;)await Yo(100),t=await Hs(n.appConfig);const i=t.authToken;return i.requestStatus===0?Wi(n,e):i}function Hs(n){return gn(n,e=>{if(!ea(e))throw ke.create("not-registered");const t=e.authToken;return Pf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Rf(n,e){try{const t=await Tf(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await en(n.appConfig,i),t}catch(t){if(Uo(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Jo(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await en(n.appConfig,i)}throw t}}function ea(n){return n!==void 0&&n.registrationStatus===2}function Af(n){return n.requestStatus===2&&!xf(n)}function xf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+nf}function kf(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Pf(n){return n.requestStatus===1&&n.requestTime+Bo<Date.now()}/**
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
 */async function Of(n){const e=n,{installationEntry:t,registrationPromise:i}=await Bi(e);return i?i.catch(console.error):Wi(e).catch(console.error),t.fid}/**
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
 */async function Df(n,e=!1){const t=n;return await Mf(t),(await Wi(t,e)).token}async function Mf(n){const{registrationPromise:e}=await Bi(n);e&&await e}/**
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
 */function Lf(n){if(!n||!n.options)throw Rn("App Configuration");if(!n.name)throw Rn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Rn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rn(n){return ke.create("missing-app-config-values",{valueName:n})}/**
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
 */const ta="installations",Ff="installations-internal",$f=n=>{const e=n.getProvider("app").getImmediate(),t=Lf(e),i=bt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Bf=n=>{const e=n.getProvider("app").getImmediate(),t=bt(e,ta).getImmediate();return{getId:()=>Of(t),getToken:s=>Df(t,s)}};function Wf(){pe(new he(ta,$f,"PUBLIC")),pe(new he(Ff,Bf,"PRIVATE"))}Wf();se($o,Fi);se($o,Fi,"esm2017");/**
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
 */const tn="analytics",Hf="firebase_id",Uf="origin",jf=60*1e3,Vf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",na="https://www.googletagmanager.com/gtag/js";/**
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
 */const K=new ii("@firebase/analytics");/**
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
 */function ia(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qf(n,e){const t=document.createElement("script");t.src=`${na}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Gf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function zf(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await ia(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){K.error(a)}n("config",s,r)}async function Yf(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await ia(t);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){K.error(r)}}function Kf(n,e,t,i){async function s(r,o,a){try{r==="event"?await Yf(n,e,t,o,a):r==="config"?await zf(n,e,t,i,o,a):n("set",o)}catch(l){K.error(l)}}return s}function Qf(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Kf(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Xf(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(na))return e;return null}/**
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
 */const Jf={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},X=new nn("analytics","Analytics",Jf);/**
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
 */const Zf=30,ep=1e3;class tp{constructor(e={},t=ep){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sa=new tp;function np(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ip(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:np(i)},r=Vf.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw X.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function sp(n,e=sa,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw X.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw X.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ap;return setTimeout(async()=>{a.abort()},t!==void 0?t:jf),ra({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ra(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=sa){const{appId:r,measurementId:o}=n;try{await rp(i,e)}catch(a){if(o)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await ip(n);return s.deleteThrottleMetadata(r),a}catch(a){if(!op(a)){if(s.deleteThrottleMetadata(r),o)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Qi(t,s.intervalMillis,Zf):Qi(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(r,c),K.debug(`Calling attemptFetch again in ${l} millis`),ra(n,c,i,s)}}function rp(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(X.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function op(n){if(!(n instanceof wt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ap{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function lp(){if(lr())try{await cr()}catch(n){return K.warn(X.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return K.warn(X.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cp(n,e,t,i,s,r,o){var a;const l=sp(n);l.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>K.error(p)),e.push(l);const c=lp().then(p=>{if(p)return i.getId()}),[u,h]=await Promise.all([l,c]);Xf()||qf(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Uf]="firebase",d.update=!0,h!=null&&(d[Hf]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class hp{constructor(e){this.app=e}_delete(){return delete ht[this.app.options.appId],Promise.resolve()}}let ht={},Us=[];const js={};let An="dataLayer",up="gtag",Vs,oa,qs=!1;function dp(){const n=[];if(Sa()&&n.push("This is a browser extension environment."),Ra()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=X.create("invalid-analytics-context",{errorInfo:e});K.warn(t.message)}}function fp(n,e,t){dp();const i=n.options.appId;if(!i)throw X.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw X.create("no-api-key");if(ht[i]!=null)throw X.create("already-exists",{id:i});if(!qs){Gf(An);const{wrappedGtag:r,gtagCore:o}=Qf(ht,Us,js,An,up);oa=r,Vs=o,qs=!0}return ht[i]=cp(n,Us,js,e,Vs,An,t),new hp(n)}/**
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
 */async function pp(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}function _p(n=gr()){n=Et(n);const e=bt(n,tn);return e.isInitialized()?e.getImmediate():gp(n)}function gp(n,e={}){const t=bt(n,tn);if(t.isInitialized()){const s=t.getImmediate();if(Bt(e,t.getOptions()))return s;throw X.create("already-initialized")}return t.initialize({options:e})}function mp(n,e,t,i){n=Et(n),pp(oa,ht[n.app.options.appId],e,t,i).catch(s=>K.error(s))}const Gs="@firebase/analytics",zs="0.7.8";function yp(){pe(new he(tn,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return fp(i,s,t)},"PUBLIC")),pe(new he("analytics-internal",n,"PRIVATE")),se(Gs,zs),se(Gs,zs,"esm2017");function n(e){try{const t=e.getProvider(tn).getImmediate();return{logEvent:(i,s,r)=>mp(t,i,s,r)}}catch(t){throw X.create("interop-component-reg-failed",{reason:t})}}}yp();const vp={apiKey:"AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0",authDomain:"showdownspace.firebaseapp.com",databaseURL:"https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"showdownspace",storageBucket:"showdownspace.appspot.com",messagingSenderId:"999073329546",appId:"1:999073329546:web:08df5e95a021605ca49873",measurementId:"G-9LV3C4S19C"},aa=Nl(vp);_p(aa);const Cp=ju(aa),Hi=Mu(Cp,"rooms/citw"),wp=me(Hi,"config"),Ep=me(wp,"stage");function la(n,e,t){return{subscribe:i=>{let s=!1;const r=Do(n,o=>{i(e(o)),s=!0});return s||i(t),r}}}const bp=la(Ep,n=>{const e=[];return n.forEach(t=>{e.push(t.val())}),e},[]),ca=pn(n=>{const e=me(Hi,`publicSubmissions/${n}/data`);return la(e,t=>{try{const i=JSON.parse(String(t.val()));return{html:String(i.html),css:String(i.css),compiledCss:String(i.compiledCss)}}catch(i){return{html:"ERROR: "+i,css:"",compiledCss:""}}},void 0)}),Ip=pn(n=>{const e=me(Hi,`presence/${n}`);let t=0;return{subscribe:i=>{const s=()=>{i(new Date().getTime()<t+6e4?"online":"offline")};s();const r=Do(e,a=>{t=+a.val()||0}),o=setInterval(s,3e3);return()=>{r(),clearInterval(o)}}}});function Tp(n){let e,t,i,s,r,o,a,l,c,u;return{c(){e=$("div"),t=$("iframe"),i=ne(),s=$("div"),r=Q("["),o=Q(n[4]),a=Q("] "),l=Q(n[0]),x(t,"sandbox","allow-same-origin"),x(t,"srcdoc",n[5]),x(t,"class","w-full h-full pointer-events-none select-none"),x(t,"title","Preview"),x(s,"class","absolute bottom-0 left-0 bg-sky-700 px-3 py-2"),x(e,"class","contestant svelte-whp29v")},m(h,d){oe(h,e,d),I(e,t),n[9](t),I(e,i),I(e,s),I(s,r),I(s,o),I(s,a),I(s,l),c||(u=[Lt(t,"load",n[6]),Lt(e,"click",n[8])],c=!0)},p(h,[d]){d&16&&ut(o,h[4]),d&1&&ut(l,h[0])},i:re,o:re,d(h){h&&ie(e),n[9](null),c=!1,Oe(u)}}}function Sp(n,e,t){let i,s,r,o=re,a=()=>(o(),o=Mt(i,E=>t(7,r=E)),i),l,c=re,u=()=>(c(),c=Mt(s,E=>t(4,l=E)),s);n.$$.on_destroy.push(()=>o()),n.$$.on_destroy.push(()=>c());let{uid:h}=e,d;const p=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle">.bg-white{background:white}</style>
</head>
<body class="bg-white">(Loading...)</body>
</html>`;function _(){m(r)}function m(E){d&&E&&(t(1,d.contentDocument.body.innerHTML=E.html,d),d.contentDocument.querySelector("#cssstyle").innerHTML=E.compiledCss)}function S(E){Js.call(this,n,E)}function V(E){Ft[E?"unshift":"push"](()=>{d=E,t(1,d)})}return n.$$set=E=>{"uid"in E&&t(0,h=E.uid)},n.$$.update=()=>{n.$$.dirty&1&&a(t(3,i=ca(h))),n.$$.dirty&1&&u(t(2,s=Ip(h))),n.$$.dirty&128&&m(r)},[h,d,s,i,l,p,_,r,S,V]}class Np extends ei{constructor(e){super(),Zn(this,e,Sp,Tp,Kn,{uid:0})}}function Rp(n){let e,t,i,s,r,o,a,l,c,u,h,d=n[1].html+"",p,_,m,S,V;return{c(){e=$("div"),t=$("div"),i=$("h1"),s=Q("Spectating Contestant "),r=$("code"),o=Q("#"),a=Q(n[0]),l=ne(),c=$("div"),u=$("div"),h=$("pre"),p=Q(d),_=ne(),m=$("iframe"),x(i,"class","text-3xl"),x(u,"class","bg-black p-8 w-3/4"),x(m,"sandbox","allow-same-origin"),x(m,"srcdoc",n[4]),x(m,"class","w-[540px] h-[720px] pointer-events-none select-none"),x(m,"title","Preview"),x(c,"class","flex justify-center mt-4 gap-4 p-8"),x(t,"class","bg-sky-900 p-8 w-full h-full"),x(e,"class","fixed z-10 inset-0 overflow-y-auto"),x(e,"aria-labelledby","modal-title"),x(e,"role","dialog"),x(e,"aria-modal","true")},m(E,H){oe(E,e,H),I(e,t),I(t,i),I(i,s),I(i,r),I(r,o),I(r,a),I(t,l),I(t,c),I(c,u),I(u,h),I(h,p),I(c,_),I(c,m),n[7](m),S||(V=[Lt(m,"load",n[5]),Lt(e,"click",n[6])],S=!0)},p(E,[H]){H&1&&ut(a,E[0]),H&2&&d!==(d=E[1].html+"")&&ut(p,d)},i:re,o:re,d(E){E&&ie(e),n[7](null),S=!1,Oe(V)}}}function Ap(n,e,t){let i,s,r=re,o=()=>(r(),r=Mt(i,_=>t(1,s=_)),i);n.$$.on_destroy.push(()=>r());let{uid:a}=e,l;const c=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle">.bg-white{background:white}</style>
</head>
<body class="bg-white">(Loading...)</body>
</html>`;function u(){h(s)}function h(_){l&&_&&(t(2,l.contentDocument.body.innerHTML=_.html,l),l.contentDocument.querySelector("#cssstyle").innerHTML=_.compiledCss)}function d(_){Js.call(this,n,_)}function p(_){Ft[_?"unshift":"push"](()=>{l=_,t(2,l)})}return n.$$set=_=>{"uid"in _&&t(0,a=_.uid)},n.$$.update=()=>{n.$$.dirty&1&&o(t(3,i=ca(a))),n.$$.dirty&2&&h(s)},[a,s,l,i,c,u,d,p]}class xp extends ei{constructor(e){super(),Zn(this,e,Ap,Rp,Kn,{uid:0})}}function Ys(n,e,t){const i=n.slice();return i[6]=e[t],i}function Ks(n){let e,t,i;function s(){return n[5](n[6])}return t=new Np({props:{uid:n[6]}}),t.$on("click",s),{c(){e=$("div"),er(t.$$.fragment)},m(r,o){oe(r,e,o),Xn(t,e,null),i=!0},p(r,o){n=r;const a={};o&2&&(a.uid=n[6]),t.$set(a)},i(r){i||(ae(t.$$.fragment,r),i=!0)},o(r){$e(t.$$.fragment,r),i=!1},d(r){r&&ie(e),Jn(t)}}}function Qs(n){let e,t;return e=new xp({props:{uid:n[0]}}),e.$on("click",n[3]),{c(){er(e.$$.fragment)},m(i,s){Xn(e,i,s),t=!0},p(i,s){const r={};s&1&&(r.uid=i[0]),e.$set(r)},i(i){t||(ae(e.$$.fragment,i),t=!0)},o(i){$e(e.$$.fragment,i),t=!1},d(i){Jn(e,i)}}}function kp(n){let e,t=n[1].length+"",i,s,r,o,a,l,c,u,h,d,p,_,m,S,V,E,H=n[1],k=[];for(let v=0;v<H.length;v+=1)k[v]=Ks(Ys(n,H,v));const ha=v=>$e(k[v],1,1,()=>{k[v]=null});let L=n[0]&&Qs(n);return{c(){e=Q("Number of users on stage: "),i=Q(t),s=ne(),r=$("div"),o=$("div"),o.innerHTML='<img src="https://cdn.discordapp.com/attachments/969252015341449256/969296584800104468/unknown.png" alt="Template"/>',a=ne();for(let v=0;v<k.length;v+=1)k[v].c();l=ne(),c=$("div"),c.textContent="(No Player)",u=ne(),h=$("div"),h.textContent="(No Player)",d=ne(),p=$("div"),p.textContent="(No Player)",_=ne(),m=$("div"),m.textContent="(No Player)",S=ne(),L&&L.c(),V=ga(),x(o,"class","template-image svelte-4m6y9p"),x(c,"class","flex items-center justify-center border"),x(h,"class","flex items-center justify-center border"),x(p,"class","flex items-center justify-center border"),x(m,"class","flex items-center justify-center border"),x(r,"class","grid-view svelte-4m6y9p")},m(v,O){oe(v,e,O),oe(v,i,O),oe(v,s,O),oe(v,r,O),I(r,o),I(r,a);for(let D=0;D<k.length;D+=1)k[D].m(r,null);I(r,l),I(r,c),I(r,u),I(r,h),I(r,d),I(r,p),I(r,_),I(r,m),oe(v,S,O),L&&L.m(v,O),oe(v,V,O),E=!0},p(v,[O]){if((!E||O&2)&&t!==(t=v[1].length+"")&&ut(i,t),O&6){H=v[1];let D;for(D=0;D<H.length;D+=1){const Ui=Ys(v,H,D);k[D]?(k[D].p(Ui,O),ae(k[D],1)):(k[D]=Ks(Ui),k[D].c(),ae(k[D],1),k[D].m(r,l))}for(qi(),D=H.length;D<k.length;D+=1)ha(D);Gi()}v[0]?L?(L.p(v,O),O&1&&ae(L,1)):(L=Qs(v),L.c(),ae(L,1),L.m(V.parentNode,V)):L&&(qi(),$e(L,1,1,()=>{L=null}),Gi())},i(v){if(!E){for(let O=0;O<H.length;O+=1)ae(k[O]);ae(L),E=!0}},o(v){k=k.filter(Boolean);for(let O=0;O<k.length;O+=1)$e(k[O]);$e(L),E=!1},d(v){v&&ie(e),v&&ie(i),v&&ie(s),v&&ie(r),_a(k,v),v&&ie(S),L&&L.d(v),v&&ie(V)}}}function Pp(n,e,t){let i,s;pa(n,bp,c=>t(4,s=c));let r=!1;function o(c){t(0,r=c)}function a(){t(0,r=!1)}const l=c=>o(c);return n.$$.update=()=>{n.$$.dirty&16&&t(1,i=s||[])},[r,i,o,a,s,l]}class Op extends ei{constructor(e){super(),Zn(this,e,Pp,kp,Kn,{})}}new Op({target:document.getElementById("app")});
