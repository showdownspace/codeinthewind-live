const Ha=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Ha();function ae(){}function Ua(n,e){for(const t in e)n[t]=e[t];return n}function Er(n){return n()}function us(){return Object.create(null)}function Ue(n){n.forEach(Er)}function ja(n){return typeof n=="function"}function di(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function qa(n){return Object.keys(n).length===0}function Kt(n,...e){if(n==null)return ae;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Va(n,e,t){n.$$.on_destroy.push(Kt(e,t))}function O(n,e){n.appendChild(e)}function ce(n,e,t){n.insertBefore(e,t||null)}function ne(n){n.parentNode.removeChild(n)}function hs(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function W(n){return document.createElement(n)}function pe(n){return document.createTextNode(n)}function de(){return pe(" ")}function Ga(){return pe("")}function Qt(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function P(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function za(n){return Array.from(n.childNodes)}function fi(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let pi;function gt(n){pi=n}function Ir(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const pt=[],Xt=[],zt=[],ds=[],Ya=Promise.resolve();let zn=!1;function Ka(){zn||(zn=!0,Ya.then(Tr))}function Yn(n){zt.push(n)}const Dn=new Set;let qt=0;function Tr(){const n=pi;do{for(;qt<pt.length;){const e=pt[qt];qt++,gt(e),Qa(e.$$)}for(gt(null),pt.length=0,qt=0;Xt.length;)Xt.pop()();for(let e=0;e<zt.length;e+=1){const t=zt[e];Dn.has(t)||(Dn.add(t),t())}zt.length=0}while(pt.length);for(;ds.length;)ds.pop()();zn=!1,Dn.clear(),gt(n)}function Qa(n){if(n.fragment!==null){n.update(),Ue(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Yn)}}const Yt=new Set;let Ne;function fs(){Ne={r:0,c:[],p:Ne}}function ps(){Ne.r||Ue(Ne.c),Ne=Ne.p}function he(n,e){n&&n.i&&(Yt.delete(n),n.i(e))}function Ye(n,e,t,i){if(n&&n.o){if(Yt.has(n))return;Yt.add(n),Ne.c.push(()=>{Yt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function Xa(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Ja(n){return typeof n=="object"&&n!==null?n:{}}function Sr(n){n&&n.c()}function _i(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||Yn(()=>{const l=r.map(Er).filter(ja);o?o.push(...l):Ue(l),n.$$.on_mount=[]}),a.forEach(Yn)}function gi(n,e){const t=n.$$;t.fragment!==null&&(Ue(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Za(n,e){n.$$.dirty[0]===-1&&(pt.push(n),Ka(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function mi(n,e,t,i,s,r,o,a=[-1]){const l=pi;gt(n);const c=n.$$={fragment:null,ctx:null,props:r,update:ae,not_equal:s,bound:us(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:us(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(u,f,...m)=>{const y=m.length?m[0]:f;return c.ctx&&s(c.ctx[u],c.ctx[u]=y)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](y),h&&Za(n,u)),f}):[],c.update(),h=!0,Ue(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=za(e.target);c.fragment&&c.fragment.l(u),u.forEach(ne)}else c.fragment&&c.fragment.c();e.intro&&he(n.$$.fragment),_i(n,e.target,e.anchor,e.customElement),Tr()}gt(l)}class yi{$destroy(){gi(this,1),this.$destroy=ae}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!qa(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(n,e){if(!n)throw st(e)},st=function(n){return new Error("Firebase Database ("+Ar.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},el=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},vi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),i.push(t[h],t[u],t[f],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):el(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const m=a<<4&240|c>>2;if(i.push(m),u!==64){const y=c<<6&192|u;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Nr=function(n){const e=xr(n);return vi.encodeByteArray(e,!0)},Rr=function(n){return Nr(n).replace(/\./g,"")},_s=function(n){try{return vi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){return kr(void 0,n)}function kr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!nl(t)||(n[t]=kr(n[t],e[t]));return n}function nl(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(il())}function sl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Or(){return Ar.NODE_ADMIN===!0}function Dr(){return typeof indexedDB=="object"}function Fr(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function ol(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="FirebaseError";class kt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=al,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ll(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kt(s,a,i)}}function ll(n,e){return n.replace(cl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const cl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){return JSON.parse(n)}function q(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ct(_s(r[0])||""),t=Ct(_s(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},ul=function(n){const e=Mr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hl=function(n){const e=Mr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function et(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Zt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ms(r)&&ms(o)){if(!Zt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ms(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const f=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Lr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,v(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const _l=1e3,gl=2,ml=4*60*60*1e3,yl=.5;function ys(n,e=_l,t=gl){const i=e*Math.pow(t,n),s=Math.round(yl*i*(Math.random()-.5)*2);return Math.min(ml,i+s)}/**
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
 */function Pt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function _t(n,e){return new Promise((t,i)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;i(`${e}: ${(r=s.target.error)===null||r===void 0?void 0:r.message}`)}})}class vs{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new $r(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Br(this._db.createObjectStore(e,t))}close(){this._db.close()}}class $r{constructor(e){this._transaction=e,this.complete=new Promise((t,i)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new Br(this._transaction.objectStore(e))}}class Br{constructor(e){this._store=e}index(e){return new bs(this._store.index(e))}createIndex(e,t,i){return new bs(this._store.createIndex(e,t,i))}get(e){const t=this._store.get(e);return _t(t,"Error reading from IndexedDB")}put(e,t){const i=this._store.put(e,t);return _t(i,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return _t(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return _t(e,"Error clearing IndexedDB object store")}}class bs{constructor(e){this._index=e}get(e){const t=this._index.get(e);return _t(t,"Error reading from IndexedDB")}}function Wr(n,e,t){return new Promise((i,s)=>{try{const r=indexedDB.open(n,e);r.onsuccess=o=>{i(new vs(o.target.result))},r.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{t(new vs(r.result),o.oldVersion,o.newVersion,new $r(r.transaction))}}catch(r){s(`Error opening indexedDB: ${r.message}`)}})}class ge{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class vl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new bi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wl(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bl(n){return n===Ae?void 0:n}function wl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const El={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Il=F.INFO,Tl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Sl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Tl[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=Il,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?El[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}/**
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
 */class Al{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kn="@firebase/app",ws="0.7.21";/**
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
 */const Ci=new wi("@firebase/app"),Nl="@firebase/app-compat",Rl="@firebase/analytics-compat",kl="@firebase/analytics",Pl="@firebase/app-check-compat",Ol="@firebase/app-check",Dl="@firebase/auth",Fl="@firebase/auth-compat",Ml="@firebase/database",Ll="@firebase/database-compat",$l="@firebase/functions",Bl="@firebase/functions-compat",Wl="@firebase/installations",Hl="@firebase/installations-compat",Ul="@firebase/messaging",jl="@firebase/messaging-compat",ql="@firebase/performance",Vl="@firebase/performance-compat",Gl="@firebase/remote-config",zl="@firebase/remote-config-compat",Yl="@firebase/storage",Kl="@firebase/storage-compat",Ql="@firebase/firestore",Xl="@firebase/firestore-compat",Jl="firebase",Zl="9.6.11";/**
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
 */const Hr="[DEFAULT]",ec={[Kn]:"fire-core",[Nl]:"fire-core-compat",[kl]:"fire-analytics",[Rl]:"fire-analytics-compat",[Ol]:"fire-app-check",[Pl]:"fire-app-check-compat",[Dl]:"fire-auth",[Fl]:"fire-auth-compat",[Ml]:"fire-rtdb",[Ll]:"fire-rtdb-compat",[$l]:"fire-fn",[Bl]:"fire-fn-compat",[Wl]:"fire-iid",[Hl]:"fire-iid-compat",[Ul]:"fire-fcm",[jl]:"fire-fcm-compat",[ql]:"fire-perf",[Vl]:"fire-perf-compat",[Gl]:"fire-rc",[zl]:"fire-rc-compat",[Yl]:"fire-gcs",[Kl]:"fire-gcs-compat",[Ql]:"fire-fst",[Xl]:"fire-fst-compat","fire-js":"fire-js",[Jl]:"fire-js-all"};/**
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
 */const en=new Map,Qn=new Map;function tc(n,e){try{n.container.addComponent(e)}catch(t){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ee(n){const e=n.name;if(Qn.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,n);for(const t of en.values())tc(t,n);return!0}function Ot(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const nc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Oe=new mn("app","Firebase",nc);/**
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
 */class ic{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
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
 */const sc=Zl;function rc(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Oe.create("bad-app-name",{appName:String(i)});const s=en.get(i);if(s){if(Zt(n,s.options)&&Zt(t,s.config))return s;throw Oe.create("duplicate-app",{appName:i})}const r=new Cl(i);for(const a of Qn.values())r.addComponent(a);const o=new ic(n,t,r);return en.set(i,o),o}function Ur(n=Hr){const e=en.get(n);if(!e)throw Oe.create("no-app",{appName:n});return e}function ue(n,e,t){var i;let s=(i=ec[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}Ee(new ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oc="firebase-heartbeat-database",ac=1,Et="firebase-heartbeat-store";let Fn=null;function jr(){return Fn||(Fn=Wr(oc,ac,(n,e)=>{switch(e){case 0:n.createObjectStore(Et)}}).catch(n=>{throw Oe.create("storage-open",{originalErrorMessage:n.message})})),Fn}async function lc(n){try{return(await jr()).transaction(Et).objectStore(Et).get(qr(n))}catch(e){throw Oe.create("storage-get",{originalErrorMessage:e.message})}}async function Cs(n,e){try{const i=(await jr()).transaction(Et,"readwrite");return await i.objectStore(Et).put(e,qr(n)),i.complete}catch(t){throw Oe.create("storage-set",{originalErrorMessage:t.message})}}function qr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cc=1024,uc=30*24*60*60*1e3;class hc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Es();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=uc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Es(),{heartbeatsToSend:t,unsentEntries:i}=dc(this._heartbeatsCache.heartbeats),s=Rr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Es(){return new Date().toISOString().substring(0,10)}function dc(n,e=cc){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Is(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Is(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dr()?Fr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Is(n){return Rr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pc(n){Ee(new ge("platform-logger",e=>new Al(e),"PRIVATE")),Ee(new ge("heartbeat",e=>new hc(e),"PRIVATE")),ue(Kn,ws,n),ue(Kn,ws,"esm2017"),ue("fire-js","")}pc("");const Ts="@firebase/database",Ss="0.12.8";/**
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
 */let Vr="";function _c(n){Vr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ct(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gc(e)}}catch{}return new mc},Re=Gr("localStorage"),Xn=Gr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new wi("@firebase/database"),yc=function(){let n=1;return function(){return n++}}(),zr=function(n){const e=pl(n),t=new fl;t.update(e);const i=t.digest();return vi.encodeByteArray(i)},Dt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Dt.apply(null,i):typeof i=="object"?e+=q(i):e+=i,e+=" "}return e};let Pe=null,As=!0;const vc=function(n,e){v(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Xe.logLevel=F.VERBOSE,Pe=Xe.log.bind(Xe),e&&Xn.set("logging_enabled",!0)):typeof n=="function"?Pe=n:(Pe=null,Xn.remove("logging_enabled"))},z=function(...n){if(As===!0&&(As=!1,Pe===null&&Xn.get("logging_enabled")===!0&&vc(!0)),Pe){const e=Dt.apply(null,n);Pe(e)}},Ft=function(n){return function(...e){z(n,...e)}},Jn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dt(...n);Xe.error(e)},De=function(...n){const e=`FIREBASE FATAL ERROR: ${Dt(...n)}`;throw Xe.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+Dt(...n);Xe.warn(e)},bc=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tt="[MIN_NAME]",Fe="[MAX_NAME]",rt=function(n,e){if(n===e)return 0;if(n===tt||e===Fe)return-1;if(e===tt||n===Fe)return 1;{const t=xs(n),i=xs(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Cc=function(n,e){return n===e?0:n<e?-1:1},ct=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+q(e))},Ei=function(n){if(typeof n!="object"||n===null)return q(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=q(e[i]),t+=":",t+=Ei(n[e[i]]);return t+="}",t},Kr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function X(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Qr=function(n){v(!Yr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},Ec=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ic=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Sc=new RegExp("^-?(0*)\\d{1,10}$"),Ac=-2147483648,xc=2147483647,xs=function(n){if(Sc.test(n)){const e=Number(n);if(e>=Ac&&e<=xc)return e}return null},Mt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},Nc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mt=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Rc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Zn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="5",Xr="v",Jr="s",Zr="r",eo="f",to=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,no="ls",Pc="p",ei="ac",io="websocket",so="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Re.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Re.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Dc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ro(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let i;if(e===io)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===so)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dc(n)&&(t.ns=n.namespace);const s=[];return X(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.counters_={}}incrementCounter(e,t=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={},Ln={};function Ti(n){const e=n.toString();return Mn[e]||(Mn[e]=new Fc),Mn[e]}function Mc(n,e){const t=n.toString();return Ln[t]||(Ln[t]=e()),Ln[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Mt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="start",$c="close",Bc="pLPCommand",Wc="pRTLPCB",oo="id",ao="pw",lo="ser",Hc="cb",Uc="seg",jc="ts",qc="d",Vc="dframe",co=1870,uo=30,Gc=co-uo,zc=25e3,Yc=3e4;class Ke{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ft(e),this.stats_=Ti(t),this.urlFn=l=>(this.appCheckToken&&(l[ei]=this.appCheckToken),ro(t,so,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Lc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yc)),wc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Si((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ns)this.id=a,this.password=l;else if(o===$c)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ns]="t",i[lo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Hc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Xr]=Ii,this.transportSessionId&&(i[Jr]=this.transportSessionId),this.lastSessionId&&(i[no]=this.lastSessionId),this.applicationId&&(i[Pc]=this.applicationId),this.appCheckToken&&(i[ei]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&to.test(location.hostname)&&(i[Zr]=eo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ke.forceAllow_=!0}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){return Ke.forceAllow_?!0:!Ke.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Ec()&&!Ic()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Nr(t),s=Kr(i,Gc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Vc]="t",i[oo]=e,i[ao]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Si{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yc(),window[Bc+this.uniqueCallbackIdentifier]=e,window[Wc+this.uniqueCallbackIdentifier]=t,this.myIFrame=Si.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oo]=this.myID,e[ao]=this.myPW,e[lo]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uo+i.length<=co;){const o=this.pendingSegs.shift();i=i+"&"+Uc+s+"="+o.seg+"&"+jc+s+"="+o.ts+"&"+qc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(zc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=16384,Qc=45e3;let tn=null;typeof MozWebSocket!="undefined"?tn=MozWebSocket:typeof WebSocket!="undefined"&&(tn=WebSocket);class ie{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ft(this.connId),this.stats_=Ti(t),this.connURL=ie.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[Xr]=Ii,typeof location!="undefined"&&location.hostname&&to.test(location.hostname)&&(r[Zr]=eo),t&&(r[Jr]=t),i&&(r[no]=i),s&&(r[ei]=s),ro(e,io,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Re.set("previous_websocket_failure",!0);try{if(!Or()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new tn(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&tn!==null&&!ie.forceDisallow_}static previouslyFailed(){return Re.isInMemoryStorage||Re.get("previous_websocket_failure")===!0}markConnectionHealthy(){Re.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ct(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Kr(t,Kc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2;ie.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ke,ie]}initTransports_(e){const t=ie&&ie.isAvailable();let i=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ie];else{const s=this.transports_=[];for(const r of Ai.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=6e4,Jc=5e3,Zc=10*1024,eu=100*1024,$n="t",Rs="d",tu="s",ks="r",nu="e",Ps="o",Os="a",Ds="n",Fs="p",iu="h";class su{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ft("c:"+this.id+":"),this.transportManager_=new Ai(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=mt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($n in e){const t=e[$n];t===Os?this.upgradeIfSecondaryHealthy_():t===ks?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ps&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ct("t",e),i=ct("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Os,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ds,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ct("t",e),i=ct("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ct($n,e);if(Rs in e){const i=e[Rs];if(t===iu)this.onHandshake_(i);else if(t===Ds){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tu?this.onConnectionShutdown_(i):t===ks?this.onReset_(i):t===nu?Jn("Server Error: "+i):t===Ps?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ii!==i&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),mt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Re.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends fo{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nn}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=32,Ls=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new D("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ie(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function po(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ru(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _o(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function go(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function H(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function R(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=N(n),i=N(e);if(t===null)return e;if(t===i)return K(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function xi(n,e){if(Ie(n)!==Ie(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function se(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ie(n)>Ie(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ou{constructor(e,t){this.errorPrefix_=t,this.parts_=_o(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=yn(this.parts_[i]);mo(this)}}function au(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=yn(e),mo(n)}function lu(n){const e=n.parts_.pop();n.byteLength_-=yn(e),n.parts_.length>0&&(n.byteLength_-=1)}function mo(n){if(n.byteLength_>Ls)throw new Error(n.errorPrefix_+"has a key path longer than "+Ls+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ms)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ms+") or object contains a cycle "+xe(n))}function xe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends fo{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ni}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=1e3,cu=60*5*1e3,uu=3*1e3,$s=30*1e3,hu=1.3,du=3e4,fu="server_kill",Bs=3;class _e extends ho{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=_e.nextPersistentConnectionId_++,this.log_=Ft("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ut,this.maxReconnectDelay_=cu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Or())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ni.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(q(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new bi,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},uu),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;_e.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&me(e,"w")){const i=et(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$s)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ul(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jn("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>du&&(this.reconnectDelay_=ut),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+_e.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new su(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,m=>{J(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(fu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&J(u),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gs(this.interruptReasons_)&&(this.reconnectDelay_=ut,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ei(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bs&&(this.reconnectDelay_=$s,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vr.replace(/\./g,"-")]=1,Pr()?e["framework.cordova"]=1:rl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nn.getInstance().currentlyOnline();return gs(this.interruptReasons_)&&e}}_e.nextPersistentConnectionId_=0;_e.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(tt,e),s=new x(tt,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class yo extends vn{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(e){Vt=e}compare(e,t){return rt(e.name,t.name)}isDefinedOn(e){throw st("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Fe,Vt)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Vt)}toString(){return".key"}}const Je=new yo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class j{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:j.RED,this.left=s!=null?s:Q.EMPTY_NODE,this.right=r!=null?r:Q.EMPTY_NODE}copy(e,t,i,s,r){return new j(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}j.RED=!0;j.BLACK=!1;class pu{copy(e,t,i,s,r){return this}insert(e,t,i){return new j(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,t=Q.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Q(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,j.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,j.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gt(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){return rt(n.name,e.name)}function Ri(n,e){return rt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;function gu(n){ti=n}const vo=function(n){return typeof n=="number"?"number:"+Qr(n):"string:"+n},bo=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else v(n===ti||n.isEmpty(),"priority of unexpected type.");v(n===ti||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class U{constructor(e,t=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bo(this.priorityNode_)}static set __childrenNodeConstructor(e){Ws=e}static get __childrenNodeConstructor(){return Ws}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return R(e)?this:N(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=N(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||Ie(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Qr(this.value_):e+=this.value_,this.lazyHash_=zr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=U.VALUE_TYPE_ORDER.indexOf(t),r=U.VALUE_TYPE_ORDER.indexOf(i);return v(s>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo,Co;function mu(n){wo=n}function yu(n){Co=n}class vu extends vn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?rt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Fe,new U("[PRIORITY-POST]",Co))}makePost(e,t){const i=wo(e);return new x(t,new U("[PRIORITY-POST]",i))}toString(){return".priority"}}const B=new vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=Math.log(2);class wu{constructor(e){const t=r=>parseInt(Math.log(r)/bu,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sn=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,f;if(h===0)return null;if(h===1)return u=n[l],f=t?t(u):u,new j(f,u.node,j.BLACK,null,null);{const m=parseInt(h/2,10)+l,y=s(l,m),w=s(m+1,c);return u=n[m],f=t?t(u):u,new j(f,u.node,j.BLACK,y,w)}},r=function(l){let c=null,h=null,u=n.length;const f=function(y,w){const E=u-y,S=u;u-=y;const p=s(E+1,S),d=n[E],_=t?t(d):d;m(new j(_,d.node,w,null,p))},m=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),E=Math.pow(2,l.count-(y+1));w?f(E,j.BLACK):(f(E,j.BLACK),f(E,j.RED))}return h},o=new wu(n.length),a=r(o);return new Q(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;const ze={};class fe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(ze&&B,"ChildrenNode.ts has not been loaded"),Bn=Bn||new fe({".priority":ze},{".priority":B}),Bn}get(e){const t=et(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Q?t:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,t){v(e!==Je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=sn(i,e.getCompare()):a=ze;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new fe(h,c)}addToIndexes(e,t){const i=Jt(this.indexes_,(s,r)=>{const o=et(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),s===ze)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),sn(a,o.getCompare())}else return ze;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new fe(i,this.indexSet_)}removeFromIndexes(e,t){const i=Jt(this.indexes_,s=>{if(s===ze)return s;{const r=t.get(e.name);return r?s.remove(new x(e.name,r)):s}});return new fe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht;class T{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&bo(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ht||(ht=new T(new Q(Ri),null,fe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ht}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ht:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ht:this.priorityNode_;return new T(s,o,r)}}updateChild(e,t){const i=N(e);if(i===null)return t;{v(N(e)!==".priority"||Ie(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(M(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(B,(o,a)=>{t[o]=a.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vo(this.getPriority().val())+":"),this.forEachChild(B,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":zr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lt?-1:0}withIndex(e){if(e===Je||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(B),s=t.getIterator(B);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Je?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cu extends T{constructor(){super(new Q(Ri),T.EMPTY_NODE,fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const Lt=new Cu;Object.defineProperties(x,{MIN:{value:new x(tt,T.EMPTY_NODE)},MAX:{value:new x(Fe,Lt)}});yo.__EMPTY_NODE=T.EMPTY_NODE;U.__childrenNodeConstructor=T;gu(Lt);yu(Lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=!0;function Y(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new U(t,Y(e))}if(!(n instanceof Array)&&Eu){const t=[];let i=!1;if(X(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Y(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return T.EMPTY_NODE;const r=sn(t,_u,o=>o.name,Ri);if(i){const o=sn(t,B.getCompare());return new T(r,Y(e),new fe({".priority":o},{".priority":B}))}else return new T(r,Y(e),fe.Default)}else{let t=T.EMPTY_NODE;return X(n,(i,s)=>{if(me(n,i)&&i.substring(0,1)!=="."){const r=Y(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Y(e))}}mu(Y);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends vn{constructor(e){super(),this.indexPath_=e,v(!R(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?rt(e.name,t.name):r}makePost(e,t){const i=Y(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,Lt);return new x(Fe,e)}toString(){return _o(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends vn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?rt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=Y(e);return new x(t,i)}toString(){return".value"}}const Su=new Tu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){return{type:"value",snapshotNode:n}}function nt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function It(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Au(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(It(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(nt(t,i)):o.trackChildChange(Tt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(B,(s,r)=>{t.hasChild(s)||i.trackChildChange(It(s,r))}),t.isLeafNode()||t.forEachChild(B,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Tt(s,r,o))}else i.trackChildChange(nt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.indexedFilter_=new ki(e.getIndex()),this.index_=e.getIndex(),this.startPost_=St.getStartPost_(e),this.endPost_=St.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new x(t,i))||(i=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=T.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild(B,(o,a)=>{r.matches(new x(o,a))||(s=s.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.rangedFilter_=new St(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new x(t,i))||(i=T.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(T.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(f,m)=>u(m,f)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,h=!1;for(;l.hasNext();){const u=l.getNext();!h&&a(r,u)<=0&&(h=!0),h&&c<this.limit_&&a(u,o)<=0?c++:s=s.updateImmediateChild(u.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new x(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(h&&!i.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Tt(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(It(t,u));const w=a.updateImmediateChild(t,T.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(nt(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(It(c.name,c.node)),r.trackChildChange(nt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tt}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B}copy(){const e=new Pi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nu(n){return n.loadsAllData()?new ki(n.getIndex()):n.hasLimit()?new xu(n):new St(n)}function Hs(n){const e={};if(n.isDefault())return e;let t;return n.index_===B?t="$priority":n.index_===Su?t="$value":n.index_===Je?t="$key":(v(n.index_ instanceof Iu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=q(t),n.startSet_&&(e.startAt=q(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+q(n.indexStartName_))),n.endSet_&&(e.endAt=q(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+q(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Us(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==B&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ho{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ft("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=rn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Hs(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),et(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=rn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Hs(e._queryParams),i=e._path.toString(),s=new bi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dl(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ct(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return{value:null,children:new Map}}function Io(n,e,t){if(R(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=N(e);n.children.has(i)||n.children.set(i,on());const s=n.children.get(i);e=M(e),Io(s,e,t)}}function ni(n,e,t){n.value!==null?t(e,n.value):ku(n,(i,s)=>{const r=new D(e.toString()+"/"+i);ni(s,r,t)})}function ku(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&X(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=10*1e3,Ou=30*1e3,Du=5*60*1e3;class Fu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Pu(e);const i=js+(Ou-js)*Math.random();mt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;X(e,(s,r)=>{r>0&&me(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),mt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Du))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function To(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Di(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=re.ACK_USER_WRITE,this.source=To()}operationForChild(e){if(R(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new an(k(),t,this.revert)}}else return v(N(this.path)===e,"operationForChild called for unrelated child."),new an(M(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return R(this.path)?new At(this.source,k()):new At(this.source,M(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=re.OVERWRITE}operationForChild(e){return R(this.path)?new Me(this.source,k(),this.snap.getImmediateChild(e)):new Me(this.source,M(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=re.MERGE}operationForChild(e){if(R(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Me(this.source,k(),t.value):new xt(this.source,k(),t)}else return v(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xt(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(R(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Au(o.childName,o.snapshotNode))}),dt(n,s,"child_removed",e,i,t),dt(n,s,"child_added",e,i,t),dt(n,s,"child_moved",r,i,t),dt(n,s,"child_changed",e,i,t),dt(n,s,"value",e,i,t),s}function dt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Bu(n,a,l)),o.forEach(a=>{const l=$u(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function $u(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bu(n,e,t){if(e.childName==null||t.childName==null)throw st("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e){return{eventCache:n,serverCache:e}}function yt(n,e,t,i){return bn(new Le(e,t,i),n.serverCache)}function So(n,e,t,i){return bn(n.eventCache,new Le(e,t,i))}function ii(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function $e(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;const Wu=()=>(Wn||(Wn=new Q(Cc)),Wn);class L{constructor(e,t=Wu()){this.value=e,this.children=t}static fromObject(e){let t=new L(null);return X(e,(i,s)=>{t=t.set(new D(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(R(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:H(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(R(e))return this;{const t=N(e),i=this.children.get(t);return i!==null?i.subtree(M(e)):new L(null)}}set(e,t){if(R(e))return new L(t,this.children);{const i=N(e),r=(this.children.get(i)||new L(null)).set(M(e),t),o=this.children.insert(i,r);return new L(this.value,o)}}remove(e){if(R(e))return this.children.isEmpty()?new L(null):new L(null,this.children);{const t=N(e),i=this.children.get(t);if(i){const s=i.remove(M(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new L(null):new L(this.value,r)}else return this}}get(e){if(R(e))return this.value;{const t=N(e),i=this.children.get(t);return i?i.get(M(e)):null}}setTree(e,t){if(R(e))return t;{const i=N(e),r=(this.children.get(i)||new L(null)).setTree(M(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new L(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(H(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(R(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(M(e),H(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(R(e))return this;{this.value&&i(t,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(M(e),H(t,s),i):new L(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(H(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new L(null))}}function vt(n,e,t){if(R(e))return new oe(new L(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(s,r))}else{const s=new L(t),r=n.writeTree_.setTree(e,s);return new oe(r)}}}function qs(n,e,t){let i=n;return X(t,(s,r)=>{i=vt(i,H(e,s),r)}),i}function Vs(n,e){if(R(e))return oe.empty();{const t=n.writeTree_.setTree(e,new L(null));return new oe(t)}}function si(n,e){return je(n,e)!=null}function je(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function Gs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(B,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function Ce(n,e){if(R(e))return n;{const t=je(n,e);return t!=null?new oe(new L(t)):new oe(n.writeTree_.subtree(e))}}function ri(n){return n.writeTree_.isEmpty()}function it(n,e){return Ao(k(),n.writeTree_,e)}function Ao(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Ao(H(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(H(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,e){return ko(e,n)}function Hu(n,e,t,i,s){v(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=vt(n.visibleWrites,e,t)),n.lastWriteId=i}function Uu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function ju(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qu(a,i.path)?s=!1:se(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Vu(n),!0;if(i.snap)n.visibleWrites=Vs(n.visibleWrites,i.path);else{const a=i.children;X(a,l=>{n.visibleWrites=Vs(n.visibleWrites,H(i.path,l))})}return!0}else return!1}function qu(n,e){if(n.snap)return se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&se(H(n.path,t),e))return!0;return!1}function Vu(n){n.visibleWrites=xo(n.allWrites,Gu,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Gu(n){return n.visible}function xo(n,e,t){let i=oe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)se(t,o)?(a=K(t,o),i=vt(i,a,r.snap)):se(o,t)&&(a=K(o,t),i=vt(i,k(),r.snap.getChild(a)));else if(r.children){if(se(t,o))a=K(t,o),i=qs(i,a,r.children);else if(se(o,t))if(a=K(o,t),R(a))i=qs(i,k(),r.children);else{const l=et(r.children,N(a));if(l){const c=l.getChild(M(a));i=vt(i,k(),c)}}}else throw st("WriteRecord should have .snap or .children")}}return i}function No(n,e,t,i,s){if(!i&&!s){const r=je(n.visibleWrites,e);if(r!=null)return r;{const o=Ce(n.visibleWrites,e);if(ri(o))return t;if(t==null&&!si(o,k()))return null;{const a=t||T.EMPTY_NODE;return it(o,a)}}}else{const r=Ce(n.visibleWrites,e);if(!s&&ri(r))return t;if(!s&&t==null&&!si(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(se(c.path,e)||se(e,c.path))},a=xo(n.allWrites,o,e),l=t||T.EMPTY_NODE;return it(a,l)}}}function zu(n,e,t){let i=T.EMPTY_NODE;const s=je(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(B,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ce(n.visibleWrites,e);return t.forEachChild(B,(o,a)=>{const l=it(Ce(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),Gs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ce(n.visibleWrites,e);return Gs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Yu(n,e,t,i,s){v(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=H(e,t);if(si(n.visibleWrites,r))return null;{const o=Ce(n.visibleWrites,r);return ri(o)?s.getChild(t):it(o,s.getChild(t))}}function Ku(n,e,t,i){const s=H(e,t),r=je(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ce(n.visibleWrites,s);return it(o,i.getNode().getImmediateChild(t))}else return null}function Qu(n,e){return je(n.visibleWrites,e)}function Xu(n,e,t,i,s,r,o){let a;const l=Ce(n.visibleWrites,e),c=je(l,k());if(c!=null)a=c;else if(t!=null)a=it(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=f.getNext();for(;m&&h.length<s;)u(m,i)!==0&&h.push(m),m=f.getNext();return h}else return[]}function Ju(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function ln(n,e,t,i){return No(n.writeTree,n.treePath,e,t,i)}function Mi(n,e){return zu(n.writeTree,n.treePath,e)}function zs(n,e,t,i){return Yu(n.writeTree,n.treePath,e,t,i)}function cn(n,e){return Qu(n.writeTree,H(n.treePath,e))}function Zu(n,e,t,i,s,r){return Xu(n.writeTree,n.treePath,e,t,i,s,r)}function Li(n,e,t){return Ku(n.writeTree,n.treePath,e,t)}function Ro(n,e){return ko(H(n.treePath,e),n.writeTree)}function ko(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Tt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,It(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,nt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Tt(i,e.snapshotNode,s.oldSnap));else throw st("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Po=new th;class $i{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Le(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Li(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$e(this.viewCache_),r=Zu(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return{filter:n}}function ih(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sh(n,e,t,i,s){const r=new eh;let o,a;if(t.type===re.OVERWRITE){const c=t;c.source.fromUser?o=oi(n,e,c.path,c.snap,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!R(c.path),o=un(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===re.MERGE){const c=t;c.source.fromUser?o=oh(n,e,c.path,c.children,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ai(n,e,c.path,c.children,i,s,a,r))}else if(t.type===re.ACK_USER_WRITE){const c=t;c.revert?o=ch(n,e,c.path,i,s,r):o=ah(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===re.LISTEN_COMPLETE)o=lh(n,e,t.path,i,r);else throw st("Unknown operation type: "+t.type);const l=r.getChanges();return rh(e,o,l),{viewCache:o,changes:l}}function rh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ii(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Eo(ii(e)))}}function Oo(n,e,t,i,s,r){const o=e.eventCache;if(cn(i,t)!=null)return e;{let a,l;if(R(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$e(e),h=c instanceof T?c:T.EMPTY_NODE,u=Mi(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ln(i,$e(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){v(Ie(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=zs(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=M(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=zs(i,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=Li(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return yt(e,a,o.isFullyInitialized()||R(t),n.filter.filtersNodes())}}function un(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(R(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),m,null)}else{const m=N(t);if(!l.isCompleteForPath(t)&&Ie(t)>1)return e;const y=M(t),E=l.getNode().getImmediateChild(m).updateChild(y,i);m===".priority"?c=h.updatePriority(l.getNode(),E):c=h.updateChild(l.getNode(),m,E,y,Po,null)}const u=So(e,c,l.isFullyInitialized()||R(t),h.filtersNodes()),f=new $i(s,u,r);return Oo(n,u,t,s,f,a)}function oi(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new $i(s,e,r);if(R(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=yt(e,c,!0,n.filter.filtersNodes());else{const u=N(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=yt(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=M(t),m=a.getNode().getImmediateChild(u);let y;if(R(f))y=i;else{const w=h.getCompleteChild(u);w!=null?po(f)===".priority"&&w.getChild(go(f)).isEmpty()?y=w:y=w.updateChild(f,i):y=T.EMPTY_NODE}if(m.equals(y))l=e;else{const w=n.filter.updateChild(a.getNode(),u,y,f,h,o);l=yt(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ys(n,e){return n.eventCache.isCompleteForChild(e)}function oh(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=H(t,l);Ys(e,N(h))&&(a=oi(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=H(t,l);Ys(e,N(h))||(a=oi(n,a,h,c,s,r,o))}),a}function Ks(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ai(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;R(t)?c=i:c=new L(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),y=Ks(n,m,f);l=un(n,l,new D(u),y,s,r,o,a)}}),c.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===void 0;if(!h.hasChild(u)&&!m){const y=e.serverCache.getNode().getImmediateChild(u),w=Ks(n,y,f);l=un(n,l,new D(u),w,s,r,o,a)}}),l}function ah(n,e,t,i,s,r,o){if(cn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(R(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return un(n,e,t,l.getNode().getChild(t),s,r,a,o);if(R(t)){let c=new L(null);return l.getNode().forEachChild(Je,(h,u)=>{c=c.set(new D(h),u)}),ai(n,e,t,c,s,r,a,o)}else return e}else{let c=new L(null);return i.foreach((h,u)=>{const f=H(t,h);l.isCompleteForPath(f)&&(c=c.set(h,l.getNode().getChild(f)))}),ai(n,e,t,c,s,r,a,o)}}function lh(n,e,t,i,s){const r=e.serverCache,o=So(e,r.getNode(),r.isFullyInitialized()||R(t),r.isFiltered());return Oo(n,o,t,i,Po,s)}function ch(n,e,t,i,s,r){let o;if(cn(i,t)!=null)return e;{const a=new $i(i,e,s),l=e.eventCache.getNode();let c;if(R(t)||N(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ln(i,$e(e));else{const u=e.serverCache.getNode();v(u instanceof T,"serverChildren would be complete if leaf node"),h=Mi(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=N(t);let u=Li(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,M(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,T.EMPTY_NODE,M(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ln(i,$e(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||cn(i,k())!=null,yt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ki(i.getIndex()),r=Nu(i);this.processor_=nh(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),h=new Le(l,o.isFullyInitialized(),s.filtersNodes()),u=new Le(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=bn(u,h),this.eventGenerator_=new Mu(this.query_)}get query(){return this.query_}}function hh(n){return n.viewCache_.serverCache.getNode()}function dh(n,e){const t=$e(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!R(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function Qs(n){return n.eventRegistrations_.length===0}function fh(n,e){n.eventRegistrations_.push(e)}function Xs(n,e,t){const i=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Js(n,e,t,i){e.type===re.MERGE&&e.source.queryId!==null&&(v($e(n.viewCache_),"We should always have a full cache before handling merges"),v(ii(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=sh(n.processor_,s,e,t,i);return ih(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Do(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ph(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(B,(r,o)=>{i.push(nt(r,o))}),t.isFullyInitialized()&&i.push(Eo(t.getNode())),Do(n,i,t.getNode(),e)}function Do(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Lu(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;class _h{constructor(){this.views=new Map}}function gh(n){v(!hn,"__referenceConstructor has already been defined"),hn=n}function mh(){return v(hn,"Reference.ts has not been loaded"),hn}function yh(n){return n.views.size===0}function Bi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return v(r!=null,"SyncTree gave us an op for an invalid query."),Js(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Js(o,e,t,i));return r}}function vh(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ln(t,s?i:null),l=!1;a?l=!0:i instanceof T?(a=Mi(t,i),l=!1):(a=T.EMPTY_NODE,l=!1);const c=bn(new Le(a,l,!1),new Le(i,s,!1));return new uh(e,c)}return o}function bh(n,e,t,i,s,r){const o=vh(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),fh(o,t),ph(o,t)}function wh(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Te(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Xs(c,t,i)),Qs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Xs(l,t,i)),Qs(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Te(n)&&r.push(new(mh())(e._repo,e._path)),{removed:r,events:o}}function Fo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ze(n,e){let t=null;for(const i of n.views.values())t=t||dh(i,e);return t}function Mo(n,e){if(e._queryParams.loadsAllData())return wn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Lo(n,e){return Mo(n,e)!=null}function Te(n){return wn(n)!=null}function wn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;function Ch(n){v(!dn,"__referenceConstructor has already been defined"),dn=n}function Eh(){return v(dn,"Reference.ts has not been loaded"),dn}let Ih=1;class Zs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new L(null),this.pendingWriteTree_=Ju(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Th(n,e,t,i,s){return Hu(n.pendingWriteTree_,e,t,i,s),s?$t(n,new Me(To(),e,t)):[]}function Qe(n,e,t=!1){const i=Uu(n.pendingWriteTree_,e);if(ju(n.pendingWriteTree_,e)){let r=new L(null);return i.snap!=null?r=r.set(k(),!0):X(i.children,o=>{r=r.set(new D(o),!0)}),$t(n,new an(i.path,r,t))}else return[]}function Cn(n,e,t){return $t(n,new Me(Oi(),e,t))}function Sh(n,e,t){const i=L.fromObject(t);return $t(n,new xt(Oi(),e,i))}function Ah(n,e){return $t(n,new At(Oi(),e))}function xh(n,e,t){const i=Wi(n,t);if(i){const s=Hi(i),r=s.path,o=s.queryId,a=K(r,e),l=new At(Di(o),a);return Ui(n,r,l)}else return[]}function li(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||Lo(r,e))){const a=wh(r,e,t,i);yh(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(s,(u,f)=>Te(f));if(c&&!h){const u=n.syncPointTree_.subtree(s);if(!u.isEmpty()){const f=kh(u);for(let m=0;m<f.length;++m){const y=f[m],w=y.query,E=Ho(n,y);n.listenProvider_.startListening(bt(w),fn(n,w),E.hashFn,E.onComplete)}}}!h&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(bt(e),null):l.forEach(u=>{const f=n.queryToTagMap.get(En(u));n.listenProvider_.stopListening(bt(u),f)})),Ph(n,l)}return o}function Nh(n,e,t,i){const s=Wi(n,i);if(s!=null){const r=Hi(s),o=r.path,a=r.queryId,l=K(o,e),c=new Me(Di(a),l,t);return Ui(n,o,c)}else return[]}function Rh(n,e,t,i){const s=Wi(n,i);if(s){const r=Hi(s),o=r.path,a=r.queryId,l=K(o,e),c=L.fromObject(t),h=new xt(Di(a),l,c);return Ui(n,o,h)}else return[]}function er(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(u,f)=>{const m=K(u,i);s=s||Ze(f,m),r=r||Te(f)});let o=n.syncPointTree_.get(i);o?(r=r||Te(o),s=s||Ze(o,k())):(o=new _h,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=T.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const y=Ze(m,k());y&&(s=s.updateImmediateChild(f,y))}));const l=Lo(o,e);if(!l&&!e._queryParams.loadsAllData()){const u=En(e);v(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=Oh();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const c=Fi(n.pendingWriteTree_,i);let h=bh(o,e,t,c,s,a);if(!l&&!r){const u=Mo(o,e);h=h.concat(Dh(n,e,u))}return h}function $o(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=Ze(a,l);if(c)return c});return No(s,e,r,t,!0)}function $t(n,e){return Bo(e,n.syncPointTree_,null,Fi(n.pendingWriteTree_,k()))}function Bo(n,e,t,i){if(R(n.path))return Wo(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=Ze(s,k()));let r=[];const o=N(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Ro(i,o);r=r.concat(Bo(a,l,c,h))}return s&&(r=r.concat(Bi(s,n,i,t))),r}}function Wo(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=Ze(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ro(i,o),h=n.operationForChild(o);h&&(r=r.concat(Wo(h,a,l,c)))}),s&&(r=r.concat(Bi(s,n,i,t))),r}function Ho(n,e){const t=e.query,i=fn(n,t);return{hashFn:()=>(hh(e)||T.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?xh(n,t._path,i):Ah(n,t._path);{const r=Tc(s,t);return li(n,t,null,r)}}}}function fn(n,e){const t=En(e);return n.queryToTagMap.get(t)}function En(n){return n._path.toString()+"$"+n._queryIdentifier}function Wi(n,e){return n.tagToQueryMap.get(e)}function Hi(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Ui(n,e,t){const i=n.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const s=Fi(n.pendingWriteTree_,e);return Bi(i,t,s,null)}function kh(n){return n.fold((e,t,i)=>{if(t&&Te(t))return[wn(t)];{let s=[];return t&&(s=Fo(t)),X(i,(r,o)=>{s=s.concat(o)}),s}})}function bt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Eh())(n._repo,n._path):n}function Ph(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=En(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Oh(){return Ih++}function Dh(n,e,t){const i=e._path,s=fn(n,e),r=Ho(n,t),o=n.listenProvider_.startListening(bt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)v(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!R(c)&&h&&Te(h))return[wn(h).query];{let f=[];return h&&(f=f.concat(Fo(h).map(m=>m.query))),X(u,(m,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(bt(h),fn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ji(t)}node(){return this.node_}}class qi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=H(this.path_,e);return new qi(this.syncTree_,t)}node(){return $o(this.syncTree_,this.path_)}}const Fh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},tr=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Mh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lh(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Mh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Lh=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const s=e.node();if(v(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},$h=function(n,e,t,i){return Vi(e,new qi(t,n),i)},Bh=function(n,e,t){return Vi(n,new ji(e),t)};function Vi(n,e,t){const i=n.getPriority().val(),s=tr(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=tr(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new U(a,Y(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new U(s))),o.forEachChild(B,(a,l)=>{const c=Vi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function zi(n,e){let t=e instanceof D?e:new D(e),i=n,s=N(t);for(;s!==null;){const r=et(i.node.children,s)||{children:{},childCount:0};i=new Gi(s,i,r),t=M(t),s=N(t)}return i}function ot(n){return n.node.value}function Uo(n,e){n.node.value=e,ci(n)}function jo(n){return n.node.childCount>0}function Wh(n){return ot(n)===void 0&&!jo(n)}function In(n,e){X(n.node.children,(t,i)=>{e(new Gi(t,n,i))})}function qo(n,e,t,i){t&&!i&&e(n),In(n,s=>{qo(s,e,!0,i)}),t&&i&&e(n)}function Hh(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bt(n){return new D(n.parent===null?n.name:Bt(n.parent)+"/"+n.name)}function ci(n){n.parent!==null&&Uh(n.parent,n.name,n)}function Uh(n,e,t){const i=Wh(t),s=me(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ci(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ci(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=/[\[\].#$\/\u0000-\u001F\u007F]/,qh=/[\[\].#$\u0000-\u001F\u007F]/,Hn=10*1024*1024,Vo=function(n){return typeof n=="string"&&n.length!==0&&!jh.test(n)},Go=function(n){return typeof n=="string"&&n.length!==0&&!qh.test(n)},Vh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Go(n)},zo=function(n,e,t){const i=t instanceof D?new ou(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xe(i));if(typeof e=="function")throw new Error(n+"contains a function "+xe(i)+" with contents = "+e.toString());if(Yr(e))throw new Error(n+"contains "+e.toString()+" "+xe(i));if(typeof e=="string"&&e.length>Hn/3&&yn(e)>Hn)throw new Error(n+"contains a string greater than "+Hn+" utf8 bytes "+xe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(X(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vo(o)))throw new Error(n+" contains an invalid key ("+o+") "+xe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);au(i,o),zo(n,a,i),lu(i)}),s&&r)throw new Error(n+' contains ".value" child '+xe(i)+" in addition to actual children.")}},Yo=function(n,e,t,i){if(!(i&&t===void 0)&&!Go(t))throw new Error(Lr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yo(n,e,t,i)},zh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Vh(t))throw new Error(Lr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ko(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!xi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Qo(n,e,t){Ko(n,t),Xo(n,i=>xi(i,e))}function qe(n,e,t){Ko(n,t),Xo(n,i=>se(i,e)||se(e,i))}function Xo(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Kh(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Kh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Pe&&z("event: "+t.toString()),Mt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="repo_interrupt",Xh=25;class Jh{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=on(),this.transactionQueueTree_=new Gi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zh(n,e,t){if(n.stats_=Ti(n.repoInfo_),n.forceRestClient_||Nc())n.server_=new rn(n.repoInfo_,(i,s,r,o)=>{nr(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ir(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new _e(n.repoInfo_,e,(i,s,r,o)=>{nr(n,i,s,r,o)},i=>{ir(n,i)},i=>{td(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Mc(n.repoInfo_,()=>new Fu(n.stats_,n.server_)),n.infoData_=new Ru,n.infoSyncTree_=new Zs({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Cn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yi(n,"connected",!1),n.serverSyncTree_=new Zs({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);qe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ed(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jo(n){return Fh({timestamp:ed(n)})}function nr(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Jt(t,c=>Y(c));o=Rh(n.serverSyncTree_,r,l,s)}else{const l=Y(t);o=Nh(n.serverSyncTree_,r,l,s)}else if(i){const l=Jt(t,c=>Y(c));o=Sh(n.serverSyncTree_,r,l)}else{const l=Y(t);o=Cn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Qi(n,r)),qe(n.eventQueue_,a,o)}function ir(n,e){Yi(n,"connected",e),e===!1&&id(n)}function td(n,e){X(e,(t,i)=>{Yi(n,t,i)})}function Yi(n,e,t){const i=new D("/.info/"+e),s=Y(t);n.infoData_.updateSnapshot(i,s);const r=Cn(n.infoSyncTree_,i,s);qe(n.eventQueue_,i,r)}function nd(n){return n.nextWriteId_++}function id(n){Zo(n,"onDisconnectEvents");const e=Jo(n),t=on();ni(n.onDisconnect_,k(),(s,r)=>{const o=$h(s,r,n.serverSyncTree_,e);Io(t,s,o)});let i=[];ni(t,k(),(s,r)=>{i=i.concat(Cn(n.serverSyncTree_,s,r));const o=ld(n,s);Qi(n,o)}),n.onDisconnect_=on(),qe(n.eventQueue_,k(),i)}function sd(n,e,t){let i;N(e._path)===".info"?i=er(n.infoSyncTree_,e,t):i=er(n.serverSyncTree_,e,t),Qo(n.eventQueue_,e._path,i)}function sr(n,e,t){let i;N(e._path)===".info"?i=li(n.infoSyncTree_,e,t):i=li(n.serverSyncTree_,e,t),Qo(n.eventQueue_,e._path,i)}function rd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Qh)}function Zo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function ea(n,e,t){return $o(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function Ki(n,e=n.transactionQueueTree_){if(e||Tn(n,e),ot(e)){const t=na(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&od(n,Bt(e),t)}else jo(e)&&In(e,t=>{Ki(n,t)})}function od(n,e,t){const i=t.map(c=>c.currentWriteId),s=ea(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];v(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=K(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Zo(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Qe(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Tn(n,zi(n.transactionQueueTree_,e)),Ki(n,n.transactionQueueTree_),qe(n.eventQueue_,e,h);for(let f=0;f<u.length;f++)Mt(u[f])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{J("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Qi(n,e)}},o)}function Qi(n,e){const t=ta(n,e),i=Bt(t),s=na(n,t);return ad(n,s,i),i}function ad(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(t,l.path);let h=!1,u;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Xh)h=!0,u="maxretry",s=s.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0));else{const f=ea(n,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){zo("transaction failed: Data returned ",m,l.path);let y=Y(m);typeof m=="object"&&m!=null&&me(m,".priority")||(y=y.updatePriority(f.getPriority()));const E=l.currentWriteId,S=Jo(n),p=Bh(y,f,S);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=nd(n),o.splice(o.indexOf(E),1),s=s.concat(Th(n.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(Qe(n.serverSyncTree_,E,!0))}else h=!0,u="nodata",s=s.concat(Qe(n.serverSyncTree_,l.currentWriteId,!0))}qe(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Tn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Mt(i[a]);Ki(n,n.transactionQueueTree_)}function ta(n,e){let t,i=n.transactionQueueTree_;for(t=N(e);t!==null&&ot(i)===void 0;)i=zi(i,t),e=M(e),t=N(e);return i}function na(n,e){const t=[];return ia(n,e,t),t.sort((i,s)=>i.order-s.order),t}function ia(n,e,t){const i=ot(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);In(e,s=>{ia(n,s,t)})}function Tn(n,e){const t=ot(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Uo(e,t.length>0?t:void 0)}In(e,i=>{Tn(n,i)})}function ld(n,e){const t=Bt(ta(n,e)),i=zi(n.transactionQueueTree_,e);return Hh(i,s=>{Un(n,s)}),Un(n,i),qo(i,s=>{Un(n,s)}),t}function Un(n,e){const t=ot(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Uo(e,void 0):t.length=r+1,qe(n.eventQueue_,Bt(e),s);for(let o=0;o<i.length;o++)Mt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ud(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const rr=function(n,e){const t=hd(n),i=t.namespace;t.domain==="firebase.com"&&De(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&De("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Oc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},hd=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=cd(n.substring(h,u)));const f=ud(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),t=e.substring(y+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class ra{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return R(this._path)?null:po(this._path)}get ref(){return new ye(this._repo,this._path)}get _queryIdentifier(){const e=Us(this._queryParams),t=Ei(e);return t==="{}"?"default":t}get _queryObject(){return Us(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Xi))return!1;const t=this._repo===e._repo,i=xi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ru(this._path)}}class ye extends Xi{constructor(e,t){super(e,t,new Pi,!1)}get parent(){const e=go(this._path);return e===null?null:new ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=Se(this.ref,e);return new Nt(this._node.getChild(t),i,B)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Nt(s,Se(this.ref,i),B)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fd(n,e){return n=Pt(n),n._checkNotDeleted("ref"),e!==void 0?Se(n._root,e):n._root}function Se(n,e){return n=Pt(n),N(n._path)===null?Gh("child","path",e,!1):Yo("child","path",e,!1),new ye(n._repo,H(n._path,e))}class Ji{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new sa("value",this,new Nt(e.snapshotNode,new ye(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ra(this,e,t):null}matches(e){return e instanceof Ji?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Zi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ra(this,e,t):null}createEvent(e,t){v(e.childName!=null,"Child events should have a childName.");const i=Se(new ye(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new sa(e.type,this,new Nt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Zi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pd(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,u)=>{sr(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new dd(t,r||void 0),a=e==="value"?new Ji(o):new Zi(e,o);return sd(n._repo,n,a),()=>sr(n._repo,n,a)}function oa(n,e,t,i){return pd(n,"value",e,t,i)}gh(ye);Ch(ye);/**
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
 */const _d="FIREBASE_DATABASE_EMULATOR_HOST",ui={};let gd=!1;function md(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||De("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=rr(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[_d]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=rr(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new Zn(Zn.OWNER):new kc(n.name,n.options,e);zh("Invalid Firebase Database URL",o),R(o.path)||De("Database URL must point to the root of a Firebase Database (not including a child path).");const u=vd(a,n,h,new Rc(n.name,t));return new bd(u,n)}function yd(n,e){const t=ui[e];(!t||t[n.key]!==n)&&De(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rd(n),delete t[n.key]}function vd(n,e,t,i){let s=ui[e.name];s||(s={},ui[e.name]=s);let r=s[n.toURLString()];return r&&De("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Jh(n,gd,t,i),s[n.toURLString()]=r,r}class bd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ye(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&De("Cannot call "+e+" on a deleted database.")}}function wd(n=Ur(),e){return Ot(n,"database").getImmediate({identifier:e})}/**
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
 */function Cd(n){_c(sc),Ee(new ge("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return md(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ue(Ts,Ss,n),ue(Ts,Ss,"esm2017")}_e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};_e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Cd();var Ed=typeof global=="object"&&global&&global.Object===Object&&global,Id=Ed,Td=typeof self=="object"&&self&&self.Object===Object&&self,Sd=Id||Td||Function("return this")(),es=Sd,Ad=es.Symbol,pn=Ad,aa=Object.prototype,xd=aa.hasOwnProperty,Nd=aa.toString,ft=pn?pn.toStringTag:void 0;function Rd(n){var e=xd.call(n,ft),t=n[ft];try{n[ft]=void 0;var i=!0}catch{}var s=Nd.call(n);return i&&(e?n[ft]=t:delete n[ft]),s}var kd=Object.prototype,Pd=kd.toString;function Od(n){return Pd.call(n)}var Dd="[object Null]",Fd="[object Undefined]",or=pn?pn.toStringTag:void 0;function Md(n){return n==null?n===void 0?Fd:Dd:or&&or in Object(n)?Rd(n):Od(n)}function la(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Ld="[object AsyncFunction]",$d="[object Function]",Bd="[object GeneratorFunction]",Wd="[object Proxy]";function Hd(n){if(!la(n))return!1;var e=Md(n);return e==$d||e==Bd||e==Ld||e==Wd}var Ud=es["__core-js_shared__"],jn=Ud,ar=function(){var n=/[^.]+$/.exec(jn&&jn.keys&&jn.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function jd(n){return!!ar&&ar in n}var qd=Function.prototype,Vd=qd.toString;function Gd(n){if(n!=null){try{return Vd.call(n)}catch{}try{return n+""}catch{}}return""}var zd=/[\\^$.*+?()[\]{}|]/g,Yd=/^\[object .+?Constructor\]$/,Kd=Function.prototype,Qd=Object.prototype,Xd=Kd.toString,Jd=Qd.hasOwnProperty,Zd=RegExp("^"+Xd.call(Jd).replace(zd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ef(n){if(!la(n)||jd(n))return!1;var e=Hd(n)?Zd:Yd;return e.test(Gd(n))}function tf(n,e){return n==null?void 0:n[e]}function ca(n,e){var t=tf(n,e);return ef(t)?t:void 0}function nf(n,e){return n===e||n!==n&&e!==e}var sf=ca(Object,"create"),Rt=sf;function rf(){this.__data__=Rt?Rt(null):{},this.size=0}function of(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var af="__lodash_hash_undefined__",lf=Object.prototype,cf=lf.hasOwnProperty;function uf(n){var e=this.__data__;if(Rt){var t=e[n];return t===af?void 0:t}return cf.call(e,n)?e[n]:void 0}var hf=Object.prototype,df=hf.hasOwnProperty;function ff(n){var e=this.__data__;return Rt?e[n]!==void 0:df.call(e,n)}var pf="__lodash_hash_undefined__";function _f(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Rt&&e===void 0?pf:e,this}function Be(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Be.prototype.clear=rf;Be.prototype.delete=of;Be.prototype.get=uf;Be.prototype.has=ff;Be.prototype.set=_f;function gf(){this.__data__=[],this.size=0}function Sn(n,e){for(var t=n.length;t--;)if(nf(n[t][0],e))return t;return-1}var mf=Array.prototype,yf=mf.splice;function vf(n){var e=this.__data__,t=Sn(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():yf.call(e,t,1),--this.size,!0}function bf(n){var e=this.__data__,t=Sn(e,n);return t<0?void 0:e[t][1]}function wf(n){return Sn(this.__data__,n)>-1}function Cf(n,e){var t=this.__data__,i=Sn(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function at(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}at.prototype.clear=gf;at.prototype.delete=vf;at.prototype.get=bf;at.prototype.has=wf;at.prototype.set=Cf;var Ef=ca(es,"Map"),If=Ef;function Tf(){this.size=0,this.__data__={hash:new Be,map:new(If||at),string:new Be}}function Sf(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function An(n,e){var t=n.__data__;return Sf(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Af(n){var e=An(this,n).delete(n);return this.size-=e?1:0,e}function xf(n){return An(this,n).get(n)}function Nf(n){return An(this,n).has(n)}function Rf(n,e){var t=An(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Ve(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Ve.prototype.clear=Tf;Ve.prototype.delete=Af;Ve.prototype.get=xf;Ve.prototype.has=Nf;Ve.prototype.set=Rf;var kf="Expected a function";function xn(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(kf);var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],r=t.cache;if(r.has(s))return r.get(s);var o=n.apply(this,i);return t.cache=r.set(s,o)||r,o};return t.cache=new(xn.Cache||Ve),t}xn.Cache=Ve;var Pf="firebase",Of="9.6.11";/**
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
 */ue(Pf,Of,"app");const ua="@firebase/installations",ts="0.5.8";/**
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
 */const ha=1e4,da=`w:${ts}`,fa="FIS_v2",Df="https://firebaseinstallations.googleapis.com/v1",Ff=60*60*1e3,Mf="installations",Lf="Installations";/**
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
 */const $f={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},We=new mn(Mf,Lf,$f);function pa(n){return n instanceof kt&&n.code.includes("request-failed")}/**
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
 */function _a({projectId:n}){return`${Df}/projects/${n}/installations`}function ga(n){return{token:n.token,requestStatus:2,expiresIn:Wf(n.expiresIn),creationTime:Date.now()}}async function ma(n,e){const i=(await e.json()).error;return We.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ya({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Bf(n,{refreshToken:e}){const t=ya(n);return t.append("Authorization",Hf(e)),t}async function va(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Wf(n){return Number(n.replace("s","000"))}function Hf(n){return`${fa} ${n}`}/**
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
 */async function Uf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=_a(n),s=ya(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:fa,appId:n.appId,sdkVersion:da},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await va(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:ga(c.authToken)}}else throw await ma("Create Installation",l)}/**
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
 */function ba(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function jf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qf=/^[cdef][\w-]{21}$/,hi="";function Vf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Gf(n);return qf.test(t)?t:hi}catch{return hi}}function Gf(n){return jf(n).substr(0,22)}/**
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
 */function Nn(n){return`${n.appName}!${n.appId}`}/**
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
 */const wa=new Map;function Ca(n,e){const t=Nn(n);Ea(t,e),zf(t,e)}function Ea(n,e){const t=wa.get(n);if(!!t)for(const i of t)i(e)}function zf(n,e){const t=Yf();t&&t.postMessage({key:n,fid:e}),Kf()}let ke=null;function Yf(){return!ke&&"BroadcastChannel"in self&&(ke=new BroadcastChannel("[Firebase] FID Change"),ke.onmessage=n=>{Ea(n.data.key,n.data.fid)}),ke}function Kf(){wa.size===0&&ke&&(ke.close(),ke=null)}/**
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
 */const Qf="firebase-installations-database",Xf=1,He="firebase-installations-store";let qn=null;function ns(){return qn||(qn=Wr(Qf,Xf,(n,e)=>{switch(e){case 0:n.createObjectStore(He)}})),qn}async function _n(n,e){const t=Nn(n),s=(await ns()).transaction(He,"readwrite"),r=s.objectStore(He),o=await r.get(t);return await r.put(e,t),await s.complete,(!o||o.fid!==e.fid)&&Ca(n,e.fid),e}async function Ia(n){const e=Nn(n),i=(await ns()).transaction(He,"readwrite");await i.objectStore(He).delete(e),await i.complete}async function Rn(n,e){const t=Nn(n),s=(await ns()).transaction(He,"readwrite"),r=s.objectStore(He),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.complete,a&&(!o||o.fid!==a.fid)&&Ca(n,a.fid),a}/**
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
 */async function is(n){let e;const t=await Rn(n.appConfig,i=>{const s=Jf(i),r=Zf(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===hi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Jf(n){const e=n||{fid:Vf(),registrationStatus:0};return Ta(e)}function Zf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(We.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ep(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tp(n)}:{installationEntry:e}}async function ep(n,e){try{const t=await Uf(n,e);return _n(n.appConfig,t)}catch(t){throw pa(t)&&t.customData.serverCode===409?await Ia(n.appConfig):await _n(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tp(n){let e=await lr(n.appConfig);for(;e.registrationStatus===1;)await ba(100),e=await lr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await is(n);return i||t}return e}function lr(n){return Rn(n,e=>{if(!e)throw We.create("installation-not-found");return Ta(e)})}function Ta(n){return np(n)?{fid:n.fid,registrationStatus:0}:n}function np(n){return n.registrationStatus===1&&n.registrationTime+ha<Date.now()}/**
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
 */async function ip({appConfig:n,heartbeatServiceProvider:e},t){const i=sp(n,t),s=Bf(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:da,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await va(()=>fetch(i,a));if(l.ok){const c=await l.json();return ga(c)}else throw await ma("Generate Auth Token",l)}function sp(n,{fid:e}){return`${_a(n)}/${e}/authTokens:generate`}/**
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
 */async function ss(n,e=!1){let t;const i=await Rn(n.appConfig,r=>{if(!Sa(r))throw We.create("not-registered");const o=r.authToken;if(!e&&ap(o))return r;if(o.requestStatus===1)return t=rp(n,e),r;{if(!navigator.onLine)throw We.create("app-offline");const a=cp(r);return t=op(n,a),a}});return t?await t:i.authToken}async function rp(n,e){let t=await cr(n.appConfig);for(;t.authToken.requestStatus===1;)await ba(100),t=await cr(n.appConfig);const i=t.authToken;return i.requestStatus===0?ss(n,e):i}function cr(n){return Rn(n,e=>{if(!Sa(e))throw We.create("not-registered");const t=e.authToken;return up(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function op(n,e){try{const t=await ip(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await _n(n.appConfig,i),t}catch(t){if(pa(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ia(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _n(n.appConfig,i)}throw t}}function Sa(n){return n!==void 0&&n.registrationStatus===2}function ap(n){return n.requestStatus===2&&!lp(n)}function lp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ff}function cp(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function up(n){return n.requestStatus===1&&n.requestTime+ha<Date.now()}/**
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
 */async function hp(n){const e=n,{installationEntry:t,registrationPromise:i}=await is(e);return i?i.catch(console.error):ss(e).catch(console.error),t.fid}/**
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
 */async function dp(n,e=!1){const t=n;return await fp(t),(await ss(t,e)).token}async function fp(n){const{registrationPromise:e}=await is(n);e&&await e}/**
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
 */function pp(n){if(!n||!n.options)throw Vn("App Configuration");if(!n.name)throw Vn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Vn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Vn(n){return We.create("missing-app-config-values",{valueName:n})}/**
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
 */const Aa="installations",_p="installations-internal",gp=n=>{const e=n.getProvider("app").getImmediate(),t=pp(e),i=Ot(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},mp=n=>{const e=n.getProvider("app").getImmediate(),t=Ot(e,Aa).getImmediate();return{getId:()=>hp(t),getToken:s=>dp(t,s)}};function yp(){Ee(new ge(Aa,gp,"PUBLIC")),Ee(new ge(_p,mp,"PRIVATE"))}yp();ue(ua,ts);ue(ua,ts,"esm2017");/**
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
 */const gn="analytics",vp="firebase_id",bp="origin",wp=60*1e3,Cp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Z=new wi("@firebase/analytics");/**
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
 */function Na(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ep(n,e){const t=document.createElement("script");t.src=`${xa}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Ip(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Tp(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Na(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Z.error(a)}n("config",s,r)}async function Sp(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Na(t);for(const l of o){const c=a.find(u=>u.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Z.error(r)}}function Ap(n,e,t,i){async function s(r,o,a){try{r==="event"?await Sp(n,e,t,o,a):r==="config"?await Tp(n,e,t,i,o,a):n("set",o)}catch(l){Z.error(l)}}return s}function xp(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Ap(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Np(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(xa))return e;return null}/**
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
 */const Rp={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ee=new mn("analytics","Analytics",Rp);/**
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
 */const kp=30,Pp=1e3;class Op{constructor(e={},t=Pp){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ra=new Op;function Dp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Fp(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Dp(i)},r=Cp.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ee.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Mp(n,e=Ra,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw ee.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ee.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Bp;return setTimeout(async()=>{a.abort()},t!==void 0?t:wp),ka({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ka(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=Ra){const{appId:r,measurementId:o}=n;try{await Lp(i,e)}catch(a){if(o)return Z.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Fp(n);return s.deleteThrottleMetadata(r),a}catch(a){if(!$p(a)){if(s.deleteThrottleMetadata(r),o)return Z.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?ys(t,s.intervalMillis,kp):ys(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(r,c),Z.debug(`Calling attemptFetch again in ${l} millis`),ka(n,c,i,s)}}function Lp(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $p(n){if(!(n instanceof kt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Bp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function Wp(){if(Dr())try{await Fr()}catch(n){return Z.warn(ee.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return Z.warn(ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hp(n,e,t,i,s,r,o){var a;const l=Mp(n);l.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&Z.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Z.error(m)),e.push(l);const c=Wp().then(m=>{if(m)return i.getId()}),[h,u]=await Promise.all([l,c]);Np()||Ep(r,h.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[bp]="firebase",f.update=!0,u!=null&&(f[vp]=u),s("config",h.measurementId,f),h.measurementId}/**
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
 */class Up{constructor(e){this.app=e}_delete(){return delete wt[this.app.options.appId],Promise.resolve()}}let wt={},ur=[];const hr={};let Gn="dataLayer",jp="gtag",dr,Pa,fr=!1;function qp(){const n=[];if(sl()&&n.push("This is a browser extension environment."),ol()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=ee.create("invalid-analytics-context",{errorInfo:e});Z.warn(t.message)}}function Vp(n,e,t){qp();const i=n.options.appId;if(!i)throw ee.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Z.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ee.create("no-api-key");if(wt[i]!=null)throw ee.create("already-exists",{id:i});if(!fr){Ip(Gn);const{wrappedGtag:r,gtagCore:o}=xp(wt,ur,hr,Gn,jp);Pa=r,dr=o,fr=!0}return wt[i]=Hp(n,ur,hr,e,dr,Gn,t),new Up(n)}/**
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
 */async function Gp(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}function zp(n=Ur()){n=Pt(n);const e=Ot(n,gn);return e.isInitialized()?e.getImmediate():Yp(n)}function Yp(n,e={}){const t=Ot(n,gn);if(t.isInitialized()){const s=t.getImmediate();if(Zt(e,t.getOptions()))return s;throw ee.create("already-initialized")}return t.initialize({options:e})}function Kp(n,e,t,i){n=Pt(n),Gp(Pa,wt[n.app.options.appId],e,t,i).catch(s=>Z.error(s))}const pr="@firebase/analytics",_r="0.7.8";function Qp(){Ee(new ge(gn,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Vp(i,s,t)},"PUBLIC")),Ee(new ge("analytics-internal",n,"PRIVATE")),ue(pr,_r),ue(pr,_r,"esm2017");function n(e){try{const t=e.getProvider(gn).getImmediate();return{logEvent:(i,s,r)=>Kp(t,i,s,r)}}catch(t){throw ee.create("interop-component-reg-failed",{reason:t})}}}Qp();const Xp={apiKey:"AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0",authDomain:"showdownspace.firebaseapp.com",databaseURL:"https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"showdownspace",storageBucket:"showdownspace.appspot.com",messagingSenderId:"999073329546",appId:"1:999073329546:web:08df5e95a021605ca49873",measurementId:"G-9LV3C4S19C"},Oa=rc(Xp);zp(Oa);const Jp=wd(Oa),rs=fd(Jp,"rooms/citw"),Zp=Se(rs,"config"),e_=Se(Zp,"stage");function Da(n,e,t){return{subscribe:i=>{let s=!1;const r=oa(n,o=>{i(e(o)),s=!0});return s||i(t),r}}}const t_=Da(e_,n=>{const e=[];return n.forEach(t=>{e.push(t.val())}),e},[]),Fa=xn(n=>{const e=Se(rs,`publicSubmissions/${n}/data`);return Da(e,t=>{try{const i=JSON.parse(String(t.val()));return{html:String(i.html),css:String(i.css),compiledCss:String(i.compiledCss)}}catch(i){return{html:"ERROR: "+i,css:"",compiledCss:""}}},void 0)}),n_=xn(n=>{const e=Se(rs,`presence/${n}`);let t=0;return{subscribe:i=>{const s=()=>{i(new Date().getTime()<t+6e4?"online":"offline")};s();const r=oa(e,a=>{t=+a.val()||0}),o=setInterval(s,3e3);return()=>{r(),clearInterval(o)}}}});function i_(n){let e,t,i,s,r,o,a,l,c=n[0]+1+"",h,u,f;return{c(){e=W("div"),t=W("div"),i=W("iframe"),s=de(),r=W("div"),o=W("span"),l=pe(`
    Contestant #`),h=pe(c),P(i,"sandbox","allow-same-origin"),P(i,"srcdoc",n[5]),P(i,"class","w-[540px] h-[720px] pointer-events-none select-none absolute top-0 left-0 origin-top-left [transform:scale(49%)]"),P(i,"title","Preview"),P(t,"class","absolute inset-0 rounded overflow-hidden"),P(o,"class",a="align-middle inline-block w-3 h-3 "+(n[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full"),P(r,"class","absolute bottom-0 left-0 bg-sky-700 px-3 py-2 rounded-tr overflow-hidden"),P(e,"class","relative w-[264px] h-[352px] overflow-hidden rounded")},m(m,y){ce(m,e,y),O(e,t),O(t,i),n[11](i),O(e,s),O(e,r),O(r,o),O(r,l),O(r,h),u||(f=[Qt(i,"load",n[6]),Qt(e,"click",n[10])],u=!0)},p(m,[y]){y&4&&a!==(a="align-middle inline-block w-3 h-3 "+(m[2]==="offline"?"bg-red-500":"bg-green-400")+" rounded-full")&&P(o,"class",a),y&1&&c!==(c=m[0]+1+"")&&fi(h,c)},i:ae,o:ae,d(m){m&&ne(e),n[11](null),u=!1,Ue(f)}}}function s_(n,e,t){let i,s,r,o,a=ae,l=()=>(a(),a=Kt(s,_=>t(8,o=_)),s),c,h=ae,u=()=>(h(),h=Kt(i,_=>t(9,c=_)),i);n.$$.on_destroy.push(()=>a()),n.$$.on_destroy.push(()=>h());let{uid:f}=e,{index:m}=e,y;const w=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle">.bg-white{background:white}</style>
</head>
<body class="bg-white">(Loading...)</body>
</html>`;function E(){S(c)}function S(_){y&&_&&(t(1,y.contentDocument.body.innerHTML=_.html,y),y.contentDocument.querySelector("#cssstyle").innerHTML=_.compiledCss)}function p(_){Ir.call(this,n,_)}function d(_){Xt[_?"unshift":"push"](()=>{y=_,t(1,y)})}return n.$$set=_=>{"uid"in _&&t(7,f=_.uid),"index"in _&&t(0,m=_.index)},n.$$.update=()=>{n.$$.dirty&128&&u(t(4,i=Fa(f))),n.$$.dirty&128&&l(t(3,s=n_(f))),n.$$.dirty&512&&S(c),n.$$.dirty&256&&t(2,r=o)},[m,y,r,s,i,w,E,f,o,c,p,d]}class r_ extends yi{constructor(e){super(),mi(this,e,s_,i_,di,{uid:7,index:0})}}var gr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ma={exports:{}};(function(n){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},a={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function p(d){return d instanceof l?new l(d.type,p(d.content),d.alias):Array.isArray(d)?d.map(p):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++r}),p.__id},clone:function p(d,_){_=_||{};var g,b;switch(a.util.type(d)){case"Object":if(b=a.util.objId(d),_[b])return _[b];g={},_[b]=g;for(var I in d)d.hasOwnProperty(I)&&(g[I]=p(d[I],_));return g;case"Array":return b=a.util.objId(d),_[b]?_[b]:(g=[],_[b]=g,d.forEach(function(A,C){g[C]=p(A,_)}),g);default:return d}},getLanguage:function(p){for(;p;){var d=s.exec(p.className);if(d)return d[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,d){p.className=p.className.replace(RegExp(s,"gi"),""),p.classList.add("language-"+d)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(g){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(p){var d=document.getElementsByTagName("script");for(var _ in d)if(d[_].src==p)return d[_]}return null}},isActive:function(p,d,_){for(var g="no-"+d;p;){var b=p.classList;if(b.contains(d))return!0;if(b.contains(g))return!1;p=p.parentElement}return!!_}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(p,d){var _=a.util.clone(a.languages[p]);for(var g in d)_[g]=d[g];return _},insertBefore:function(p,d,_,g){g=g||a.languages;var b=g[p],I={};for(var A in b)if(b.hasOwnProperty(A)){if(A==d)for(var C in _)_.hasOwnProperty(C)&&(I[C]=_[C]);_.hasOwnProperty(A)||(I[A]=b[A])}var $=g[p];return g[p]=I,a.languages.DFS(a.languages,function(V,ve){ve===$&&V!=p&&(this[V]=I)}),I},DFS:function p(d,_,g,b){b=b||{};var I=a.util.objId;for(var A in d)if(d.hasOwnProperty(A)){_.call(d,A,d[A],g||A);var C=d[A],$=a.util.type(C);$==="Object"&&!b[I(C)]?(b[I(C)]=!0,p(C,_,null,b)):$==="Array"&&!b[I(C)]&&(b[I(C)]=!0,p(C,_,A,b))}}},plugins:{},highlightAll:function(p,d){a.highlightAllUnder(document,p,d)},highlightAllUnder:function(p,d,_){var g={callback:_,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),a.hooks.run("before-all-elements-highlight",g);for(var b=0,I;I=g.elements[b++];)a.highlightElement(I,d===!0,g.callback)},highlightElement:function(p,d,_){var g=a.util.getLanguage(p),b=a.languages[g];a.util.setLanguage(p,g);var I=p.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(I,g);var A=p.textContent,C={element:p,language:g,grammar:b,code:A};function $(ve){C.highlightedCode=ve,a.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,a.hooks.run("after-highlight",C),a.hooks.run("complete",C),_&&_.call(C.element)}if(a.hooks.run("before-sanity-check",C),I=C.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!C.code){a.hooks.run("complete",C),_&&_.call(C.element);return}if(a.hooks.run("before-highlight",C),!C.grammar){$(a.util.encode(C.code));return}if(d&&i.Worker){var V=new Worker(a.filename);V.onmessage=function(ve){$(ve.data)},V.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else $(a.highlight(C.code,C.grammar,C.language))},highlight:function(p,d,_){var g={code:p,grammar:d,language:_};if(a.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=a.tokenize(g.code,g.grammar),a.hooks.run("after-tokenize",g),l.stringify(a.util.encode(g.tokens),g.language)},tokenize:function(p,d){var _=d.rest;if(_){for(var g in _)d[g]=_[g];delete d.rest}var b=new u;return f(b,b.head,p),h(p,b,d,b.head,0),y(b)},hooks:{all:{},add:function(p,d){var _=a.hooks.all;_[p]=_[p]||[],_[p].push(d)},run:function(p,d){var _=a.hooks.all[p];if(!(!_||!_.length))for(var g=0,b;b=_[g++];)b(d)}},Token:l};i.Prism=a;function l(p,d,_,g){this.type=p,this.content=d,this.alias=_,this.length=(g||"").length|0}l.stringify=function p(d,_){if(typeof d=="string")return d;if(Array.isArray(d)){var g="";return d.forEach(function($){g+=p($,_)}),g}var b={type:d.type,content:p(d.content,_),tag:"span",classes:["token",d.type],attributes:{},language:_},I=d.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(b.classes,I):b.classes.push(I)),a.hooks.run("wrap",b);var A="";for(var C in b.attributes)A+=" "+C+'="'+(b.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+A+">"+b.content+"</"+b.tag+">"};function c(p,d,_,g){p.lastIndex=d;var b=p.exec(_);if(b&&g&&b[1]){var I=b[1].length;b.index+=I,b[0]=b[0].slice(I)}return b}function h(p,d,_,g,b,I){for(var A in _)if(!(!_.hasOwnProperty(A)||!_[A])){var C=_[A];C=Array.isArray(C)?C:[C];for(var $=0;$<C.length;++$){if(I&&I.cause==A+","+$)return;var V=C[$],ve=V.inside,os=!!V.lookbehind,as=!!V.greedy,La=V.alias;if(as&&!V.pattern.global){var $a=V.pattern.toString().match(/[imsuy]*$/)[0];V.pattern=RegExp(V.pattern.source,$a+"g")}for(var ls=V.pattern||V,G=g.next,le=b;G!==d.tail&&!(I&&le>=I.reach);le+=G.value.length,G=G.next){var Ge=G.value;if(d.length>p.length)return;if(!(Ge instanceof l)){var Wt=1,te;if(as){if(te=c(ls,le,p,os),!te||te.index>=p.length)break;var Ht=te.index,Ba=te.index+te[0].length,be=le;for(be+=G.value.length;Ht>=be;)G=G.next,be+=G.value.length;if(be-=G.value.length,le=be,G.value instanceof l)continue;for(var lt=G;lt!==d.tail&&(be<Ba||typeof lt.value=="string");lt=lt.next)Wt++,be+=lt.value.length;Wt--,Ge=p.slice(le,be),te.index-=le}else if(te=c(ls,0,Ge,os),!te)continue;var Ht=te.index,Ut=te[0],kn=Ge.slice(0,Ht),cs=Ge.slice(Ht+Ut.length),Pn=le+Ge.length;I&&Pn>I.reach&&(I.reach=Pn);var jt=G.prev;kn&&(jt=f(d,jt,kn),le+=kn.length),m(d,jt,Wt);var Wa=new l(A,ve?a.tokenize(Ut,ve):Ut,La,Ut);if(G=f(d,jt,Wa),cs&&f(d,G,cs),Wt>1){var On={cause:A+","+$,reach:Pn};h(p,d,_,G.prev,le,On),I&&On.reach>I.reach&&(I.reach=On.reach)}}}}}}function u(){var p={value:null,prev:null,next:null},d={value:null,prev:p,next:null};p.next=d,this.head=p,this.tail=d,this.length=0}function f(p,d,_){var g=d.next,b={value:_,prev:d,next:g};return d.next=b,g.prev=b,p.length++,b}function m(p,d,_){for(var g=d.next,b=0;b<_&&g!==p.tail;b++)g=g.next;d.next=g,g.prev=d,p.length-=b}function y(p){for(var d=[],_=p.head.next;_!==p.tail;)d.push(_.value),_=_.next;return d}if(!i.document)return i.addEventListener&&(a.disableWorkerMessageHandler||i.addEventListener("message",function(p){var d=JSON.parse(p.data),_=d.language,g=d.code,b=d.immediateClose;i.postMessage(a.highlight(g,a.languages[_],_)),b&&i.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function E(){a.manual||a.highlightAll()}if(!a.manual){var S=document.readyState;S==="loading"||S==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return a}(e);n.exports&&(n.exports=t),typeof gr!="undefined"&&(gr.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(s,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,s){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:t.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading\u2026",s=function(w,E){return"\u2716 Error "+w+" while fetching file: "+E},r="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",h="failed",u="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function f(w,E,S){var p=new XMLHttpRequest;p.open("GET",w,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?E(p.responseText):p.status>=400?S(s(p.status,p.statusText)):S(r))},p.send(null)}function m(w){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(E){var S=Number(E[1]),p=E[2],d=E[3];return p?d?[S,Number(d)]:[S,void 0]:[S,S]}}t.hooks.add("before-highlightall",function(w){w.selector+=", "+u}),t.hooks.add("before-sanity-check",function(w){var E=w.element;if(E.matches(u)){w.code="",E.setAttribute(a,l);var S=E.appendChild(document.createElement("CODE"));S.textContent=i;var p=E.getAttribute("data-src"),d=w.language;if(d==="none"){var _=(/\.(\w+)$/.exec(p)||[,"none"])[1];d=o[_]||_}t.util.setLanguage(S,d),t.util.setLanguage(E,d);var g=t.plugins.autoloader;g&&g.loadLanguages(d),f(p,function(b){E.setAttribute(a,c);var I=m(E.getAttribute("data-range"));if(I){var A=b.split(/\r\n?|\n/g),C=I[0],$=I[1]==null?A.length:I[1];C<0&&(C+=A.length),C=Math.max(0,Math.min(C-1,A.length)),$<0&&($+=A.length),$=Math.max(0,Math.min($,A.length)),b=A.slice(C,$).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String(C+1))}S.textContent=b,t.highlightElement(S)},function(b){E.setAttribute(a,h),S.textContent=b})}}),t.plugins.fileHighlight={highlight:function(E){for(var S=(E||document).querySelectorAll(u),p=0,d;d=S[p++];)t.highlightElement(d)}};var y=!1;t.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ma);var we=Ma.exports;function o_(n){let e,t,i,s,r,o,a=n[0]+1+"",l,c,h,u,f,m,y=we.highlight(n[1].html,we.languages.html)+"",w,E,S,p,d=we.highlight(n[1].css,we.languages.css)+"",_,g,b,I;return{c(){e=W("div"),t=W("div"),i=W("h1"),s=pe("Spectating Contestant "),r=W("code"),o=pe("#"),l=pe(a),c=de(),h=W("div"),u=W("div"),f=W("div"),m=W("pre"),w=de(),E=W("div"),S=de(),p=W("pre"),_=de(),g=W("iframe"),P(i,"class","text-3xl"),P(m,"wrap","wrap"),P(E,"class","h-px bg-gray-700 my-12"),P(p,"wrap","wrap"),P(f,"class","absolute inset-0 overflow-auto p-8"),P(u,"class","bg-black flex-auto relative"),P(g,"sandbox","allow-same-origin"),P(g,"srcdoc",n[4]),P(g,"class","flex-none w-[540px] h-[720px] pointer-events-none select-none"),P(g,"title","Preview"),P(h,"class","flex justify-center mt-4 gap-4 p-8"),P(t,"class","bg-sky-900 p-8 w-full h-full"),P(e,"class","fixed z-10 inset-0 overflow-y-auto"),P(e,"aria-labelledby","modal-title"),P(e,"role","dialog"),P(e,"aria-modal","true")},m(A,C){ce(A,e,C),O(e,t),O(t,i),O(i,s),O(i,r),O(r,o),O(r,l),O(t,c),O(t,h),O(h,u),O(u,f),O(f,m),m.innerHTML=y,O(f,w),O(f,E),O(f,S),O(f,p),p.innerHTML=d,O(h,_),O(h,g),n[8](g),b||(I=[Qt(g,"load",n[5]),Qt(e,"click",n[7])],b=!0)},p(A,[C]){C&1&&a!==(a=A[0]+1+"")&&fi(l,a),C&2&&y!==(y=we.highlight(A[1].html,we.languages.html)+"")&&(m.innerHTML=y),C&2&&d!==(d=we.highlight(A[1].css,we.languages.css)+"")&&(p.innerHTML=d)},i:ae,o:ae,d(A){A&&ne(e),n[8](null),b=!1,Ue(I)}}}function a_(n,e,t){let i,s,r=ae,o=()=>(r(),r=Kt(i,w=>t(1,s=w)),i);n.$$.on_destroy.push(()=>r());let{uid:a}=e,{index:l}=e,c;const h=`<!DOCTYPE html><html><head><meta charset="utf-8">
<base href="https://codeinthewind-editor.showdown.space/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style id="cssstyle">.bg-white{background:white}</style>
</head>
<body class="bg-white">(Loading...)</body>
</html>`;function u(){f(s)}function f(w){c&&w&&(t(2,c.contentDocument.body.innerHTML=w.html,c),c.contentDocument.querySelector("#cssstyle").innerHTML=w.compiledCss)}function m(w){Ir.call(this,n,w)}function y(w){Xt[w?"unshift":"push"](()=>{c=w,t(2,c)})}return n.$$set=w=>{"uid"in w&&t(6,a=w.uid),"index"in w&&t(0,l=w.index)},n.$$.update=()=>{n.$$.dirty&64&&o(t(3,i=Fa(a))),n.$$.dirty&2&&f(s)},[l,s,c,i,h,u,a,m,y]}class l_ extends yi{constructor(e){super(),mi(this,e,a_,o_,di,{uid:6,index:0})}}function mr(n,e,t){const i=n.slice();return i[6]=e[t],i[8]=t,i}function yr(n,e,t){const i=n.slice();return i[9]=e[t],i[8]=t,i}function vr(n){let e,t,i;function s(){return n[5](n[9],n[8])}return t=new r_({props:{uid:n[9],index:n[8]}}),t.$on("click",s),{c(){e=W("div"),Sr(t.$$.fragment)},m(r,o){ce(r,e,o),_i(t,e,null),i=!0},p(r,o){n=r;const a={};o&2&&(a.uid=n[9]),t.$set(a)},i(r){i||(he(t.$$.fragment,r),i=!0)},o(r){Ye(t.$$.fragment,r),i=!1},d(r){r&&ne(e),gi(t)}}}function br(n){let e;return{c(){e=W("div"),e.textContent=`(No Player)
      `,P(e,"class","flex items-center justify-center rounded text-2xl bg-slate-500 shadow-inner")},m(t,i){ce(t,e,i)},p:ae,d(t){t&&ne(e)}}}function wr(n){let e,t;const i=[n[0]];let s={};for(let r=0;r<i.length;r+=1)s=Ua(s,i[r]);return e=new l_({props:s}),e.$on("click",n[3]),{c(){Sr(e.$$.fragment)},m(r,o){_i(e,r,o),t=!0},p(r,o){const a=o&1?Xa(i,[Ja(r[0])]):{};e.$set(a)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){Ye(e.$$.fragment,r),t=!1},d(r){gi(e,r)}}}function c_(n){let e,t=n[1].length+"",i,s,r,o,a,l,c,h,u,f,m=n[1],y=[];for(let d=0;d<m.length;d+=1)y[d]=vr(yr(n,m,d));const w=d=>Ye(y[d],1,1,()=>{y[d]=null});let E=Cr(n[1]),S=[];for(let d=0;d<E.length;d+=1)S[d]=br(mr(n,E,d));let p=n[0]&&wr(n);return{c(){e=pe("Number of users on stage: "),i=pe(t),s=de(),r=W("div"),o=W("div"),a=W("div"),a.innerHTML='<img src="https://cdn.discordapp.com/attachments/969252015341449256/969296584800104468/unknown.png" alt="Template"/>',l=de();for(let d=0;d<y.length;d+=1)y[d].c();c=de();for(let d=0;d<S.length;d+=1)S[d].c();h=de(),p&&p.c(),u=Ga(),P(a,"class","template-image svelte-1qggf9"),P(o,"class","grid-view svelte-1qggf9"),P(r,"class","flex items-center justify-center inset-0 absolute")},m(d,_){ce(d,e,_),ce(d,i,_),ce(d,s,_),ce(d,r,_),O(r,o),O(o,a),O(o,l);for(let g=0;g<y.length;g+=1)y[g].m(o,null);O(o,c);for(let g=0;g<S.length;g+=1)S[g].m(o,null);ce(d,h,_),p&&p.m(d,_),ce(d,u,_),f=!0},p(d,[_]){if((!f||_&2)&&t!==(t=d[1].length+"")&&fi(i,t),_&6){m=d[1];let g;for(g=0;g<m.length;g+=1){const b=yr(d,m,g);y[g]?(y[g].p(b,_),he(y[g],1)):(y[g]=vr(b),y[g].c(),he(y[g],1),y[g].m(o,c))}for(fs(),g=m.length;g<y.length;g+=1)w(g);ps()}if(_&2){E=Cr(d[1]);let g;for(g=0;g<E.length;g+=1){const b=mr(d,E,g);S[g]?S[g].p(b,_):(S[g]=br(),S[g].c(),S[g].m(o,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=E.length}d[0]?p?(p.p(d,_),_&1&&he(p,1)):(p=wr(d),p.c(),he(p,1),p.m(u.parentNode,u)):p&&(fs(),Ye(p,1,1,()=>{p=null}),ps())},i(d){if(!f){for(let _=0;_<m.length;_+=1)he(y[_]);he(p),f=!0}},o(d){y=y.filter(Boolean);for(let _=0;_<y.length;_+=1)Ye(y[_]);Ye(p),f=!1},d(d){d&&ne(e),d&&ne(i),d&&ne(s),d&&ne(r),hs(y,d),hs(S,d),d&&ne(h),p&&p.d(d),d&&ne(u)}}}function Cr(n){return new Array(8-n.length).fill("")}function u_(n,e,t){let i,s;Va(n,t_,c=>t(4,s=c));let r=null;function o(c,h){t(0,r={uid:c,index:h})}function a(){t(0,r=null)}const l=(c,h)=>o(c,h);return n.$$.update=()=>{n.$$.dirty&16&&t(1,i=s||[])},[r,i,o,a,s,l]}class h_ extends yi{constructor(e){super(),mi(this,e,u_,c_,di,{})}}new h_({target:document.getElementById("app")});
