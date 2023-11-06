import{a as Y_,r as kd,b as $_,e as K_,f as Z_,h as J_,o as Q_}from"./entry.872d718e.js";import{_ as eg}from"./_plugin-vue_export-helper.c27b6911.js";var br={};function tg(l){window.console&&window.console.error&&window.console.error(l)}function sg(l){window.console&&window.console.log&&window.console.log(l)}function ig(l,e){br[l]=!0,e!==void 0&&tg(e)}function ng(l){var e=l.getError;l.getError=function(){var t;do t=e.apply(l),t!=l.NO_ERROR&&(br[t]=!0);while(t!=l.NO_ERROR);for(var t in br)if(br[t])return delete br[t],parseInt(t);return l.NO_ERROR}}var ia=function l(e){var t=e.gl;this.ext=e,this.isAlive=!0,this.hasBeenBound=!1,this.elementArrayBuffer=null,this.attribs=new Array(e.maxVertexAttribs);for(var s=0;s<this.attribs.length;s++){var i=new l.VertexAttrib(t);this.attribs[s]=i}this.maxAttrib=0};ia.VertexAttrib=function(e){this.enabled=!1,this.buffer=null,this.size=4,this.type=e.FLOAT,this.normalized=!1,this.stride=16,this.offset=0,this.cached="",this.recache()};ia.VertexAttrib.prototype.recache=function(){this.cached=[this.size,this.type,this.normalized,this.stride,this.offset].join(":")};var Zi=function(e){var t=this;this.gl=e,ng(e);var s=this.original={getParameter:e.getParameter,enableVertexAttribArray:e.enableVertexAttribArray,disableVertexAttribArray:e.disableVertexAttribArray,bindBuffer:e.bindBuffer,getVertexAttrib:e.getVertexAttrib,vertexAttribPointer:e.vertexAttribPointer};e.getParameter=function(n){return n==t.VERTEX_ARRAY_BINDING_OES?t.currentVertexArrayObject==t.defaultVertexArrayObject?null:t.currentVertexArrayObject:s.getParameter.apply(this,arguments)},e.enableVertexAttribArray=function(n){var r=t.currentVertexArrayObject;r.maxAttrib=Math.max(r.maxAttrib,n);var a=r.attribs[n];return a.enabled=!0,s.enableVertexAttribArray.apply(this,arguments)},e.disableVertexAttribArray=function(n){var r=t.currentVertexArrayObject;r.maxAttrib=Math.max(r.maxAttrib,n);var a=r.attribs[n];return a.enabled=!1,s.disableVertexAttribArray.apply(this,arguments)},e.bindBuffer=function(n,r){switch(n){case e.ARRAY_BUFFER:t.currentArrayBuffer=r;break;case e.ELEMENT_ARRAY_BUFFER:t.currentVertexArrayObject.elementArrayBuffer=r;break}return s.bindBuffer.apply(this,arguments)},e.getVertexAttrib=function(n,r){var a=t.currentVertexArrayObject,o=a.attribs[n];switch(r){case e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:return o.buffer;case e.VERTEX_ATTRIB_ARRAY_ENABLED:return o.enabled;case e.VERTEX_ATTRIB_ARRAY_SIZE:return o.size;case e.VERTEX_ATTRIB_ARRAY_STRIDE:return o.stride;case e.VERTEX_ATTRIB_ARRAY_TYPE:return o.type;case e.VERTEX_ATTRIB_ARRAY_NORMALIZED:return o.normalized;default:return s.getVertexAttrib.apply(this,arguments)}},e.vertexAttribPointer=function(n,r,a,o,h,c){var d=t.currentVertexArrayObject;d.maxAttrib=Math.max(d.maxAttrib,n);var u=d.attribs[n];return u.buffer=t.currentArrayBuffer,u.size=r,u.type=a,u.normalized=o,u.stride=h,u.offset=c,u.recache(),s.vertexAttribPointer.apply(this,arguments)},e.instrumentExtension&&e.instrumentExtension(this,"OES_vertex_array_object"),e.canvas.addEventListener("webglcontextrestored",function(){sg("OESVertexArrayObject emulation library context restored"),t.reset_()},!0),this.reset_()};Zi.prototype.VERTEX_ARRAY_BINDING_OES=34229;Zi.prototype.reset_=function(){var e=this.vertexArrayObjects!==void 0;if(e)for(var t=0;t<this.vertexArrayObjects.length;++t)this.vertexArrayObjects.isAlive=!1;var s=this.gl;this.maxVertexAttribs=s.getParameter(s.MAX_VERTEX_ATTRIBS),this.defaultVertexArrayObject=new ia(this),this.currentVertexArrayObject=null,this.currentArrayBuffer=null,this.vertexArrayObjects=[this.defaultVertexArrayObject],this.bindVertexArrayOES(null)};Zi.prototype.createVertexArrayOES=function(){var e=new ia(this);return this.vertexArrayObjects.push(e),e};Zi.prototype.deleteVertexArrayOES=function(e){e.isAlive=!1,this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(e),1),this.currentVertexArrayObject==e&&this.bindVertexArrayOES(null)};Zi.prototype.isVertexArrayOES=function(e){return!!(e&&e instanceof ia&&e.hasBeenBound&&e.ext==this)};Zi.prototype.bindVertexArrayOES=function(e){var t=this.gl;if(e&&!e.isAlive){ig(t.INVALID_OPERATION,"bindVertexArrayOES: attempt to bind deleted arrayObject");return}var s=this.original,i=this.currentVertexArrayObject;this.currentVertexArrayObject=e||this.defaultVertexArrayObject,this.currentVertexArrayObject.hasBeenBound=!0;var n=this.currentVertexArrayObject;if(i!=n){(!i||n.elementArrayBuffer!=i.elementArrayBuffer)&&s.bindBuffer.call(t,t.ELEMENT_ARRAY_BUFFER,n.elementArrayBuffer);for(var r=this.currentArrayBuffer,a=Math.max(i?i.maxAttrib:0,n.maxAttrib),o=0;o<=a;o++){var h=n.attribs[o],c=i?i.attribs[o]:null;if((!i||h.enabled!=c.enabled)&&(h.enabled?s.enableVertexAttribArray.call(t,o):s.disableVertexAttribArray.call(t,o)),h.enabled){var d=!1;(!i||h.buffer!=c.buffer)&&(r!=h.buffer&&(s.bindBuffer.call(t,t.ARRAY_BUFFER,h.buffer),r=h.buffer),d=!0),(d||h.cached!=c.cached)&&s.vertexAttribPointer.call(t,o,h.size,h.type,h.normalized,h.stride,h.offset)}}this.currentArrayBuffer!=r&&s.bindBuffer.call(t,t.ARRAY_BUFFER,this.currentArrayBuffer)}};const rg=function(e){if(e.getSupportedExtensions){var t=e.getSupportedExtensions();if(t.indexOf("OES_vertex_array_object")!=-1)return}else if(e.getExtension){var s=e.getExtension("OES_vertex_array_object");if(s)return}if(e.getSupportedExtensions){var i=e.getSupportedExtensions;e.getSupportedExtensions=function(){var a=i.call(this)||[];return a.push("OES_vertex_array_object"),a}}var n=e.getExtension;e.getExtension=function(a){return a=="OES_vertex_array_object"?(e.__OESVertexArrayObject||(e.__OESVertexArrayObject=new Zi(e)),e.__OESVertexArrayObject):n?n.call(this,a):null}},ag="1.58.2",og="a12f6a8c4",lg=function(){const l={},e=["Array","Object","Function","Date","RegExp","Float32Array"];for(let t=0;t<e.length;t++)l["[object "+e[t]+"]"]=e[t].toLowerCase();return l}();function zd(l){if(l===null)return"null";const e=typeof l;return e==="undefined"||e==="number"||e==="string"||e==="boolean"?e:lg[Object.prototype.toString.call(l)]}function ci(l,e){for(const t in e){const s=e[t];zd(s)==="object"?l[t]=ci({},s):zd(s)==="array"?l[t]=ci([],s):l[t]=s}return l}function Ud(l){let e;return l!==e}class le{constructor(){this._callbacks={},this._callbackActive={}}initEventHandler(){this._callbacks={},this._callbackActive={}}_addCallback(e,t,s,i=!1){!e||typeof e!="string"||!t||(this._callbacks[e]||(this._callbacks[e]=[]),this._callbackActive[e]&&this._callbackActive[e]===this._callbacks[e]&&(this._callbackActive[e]=this._callbackActive[e].slice()),this._callbacks[e].push({callback:t,scope:s||this,once:i}))}on(e,t,s){return this._addCallback(e,t,s,!1),this}off(e,t,s){if(e)this._callbackActive[e]&&this._callbackActive[e]===this._callbacks[e]&&(this._callbackActive[e]=this._callbackActive[e].slice());else for(const i in this._callbackActive)this._callbacks[i]&&this._callbacks[i]===this._callbackActive[i]&&(this._callbackActive[i]=this._callbackActive[i].slice());if(!e)this._callbacks={};else if(!t)this._callbacks[e]&&(this._callbacks[e]=[]);else{const i=this._callbacks[e];if(!i)return this;let n=i.length;for(let r=0;r<n;r++)i[r].callback===t&&(s&&i[r].scope!==s||(i[r--]=i[--n]));i.length=n}return this}fire(e,t,s,i,n,r,a,o,h){if(!e||!this._callbacks[e])return this;let c;this._callbackActive[e]?(this._callbackActive[e]===this._callbacks[e]&&(this._callbackActive[e]=this._callbackActive[e].slice()),c=this._callbacks[e].slice()):this._callbackActive[e]=this._callbacks[e];for(let d=0;(c||this._callbackActive[e])&&d<(c||this._callbackActive[e]).length;d++){const u=(c||this._callbackActive[e])[d];if(u.callback.call(u.scope,t,s,i,n,r,a,o,h),u.once){const f=this._callbacks[e],p=f?f.indexOf(u):-1;p!==-1&&(this._callbackActive[e]===f&&(this._callbackActive[e]=this._callbackActive[e].slice()),this._callbacks[e].splice(p,1))}}return c||(this._callbackActive[e]=null),this}once(e,t,s){return this._addCallback(e,t,s,!0),this}hasEvent(e){return this._callbacks[e]&&this._callbacks[e].length!==0||!1}}const Jc={attach:function(l){const e=Jc;return l._addCallback=e._addCallback,l.on=e.on,l.off=e.off,l.fire=e.fire,l.once=e.once,l.hasEvent=e.hasEvent,l._callbacks={},l._callbackActive={},l},_addCallback:le.prototype._addCallback,on:le.prototype.on,off:le.prototype.off,fire:le.prototype.fire,once:le.prototype.once,hasEvent:le.prototype.hasEvent},hg={create:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){const e=Math.random()*16|0;return(l==="x"?e:e&3|8).toString(16)})}},re={delimiter:"/",join:function(){const l=arguments.length;let e=arguments[0];for(let t=0;t<l-1;++t){const s=arguments[t],i=arguments[t+1];if(!Ud(s)||!Ud(i))throw new Error("undefined argument to pc.path.join");if(i[0]===re.delimiter){e=i;continue}s&&i&&s[s.length-1]!==re.delimiter&&i[0]!==re.delimiter?e+=re.delimiter+i:e+=i}return e},normalize:function(l){const e=l.startsWith(re.delimiter),t=l.endsWith(re.delimiter),s=l.split("/");let i="",n=[];for(let r=0;r<s.length;r++)if(s[r]!==""&&s[r]!=="."){if(s[r]===".."&&n.length>0){n=n.slice(0,n.length-2);continue}r>0&&n.push(re.delimiter),n.push(s[r])}return i=n.join(""),!e&&i[0]===re.delimiter&&(i=i.slice(1)),t&&i[i.length-1]!==re.delimiter&&(i+=re.delimiter),i},split:function(l){const e=l.split(re.delimiter),t=e.slice(e.length-1)[0];return[e.slice(0,e.length-1).join(re.delimiter),t]},getBasename:function(l){return re.split(l)[1]},getDirectory:function(l){const e=l.split(re.delimiter);return e.slice(0,e.length-1).join(re.delimiter)},getExtension:function(l){const e=l.split("?")[0].split(".").pop();return e!==l?"."+e:""},isRelativePath:function(l){return l.charAt(0)!=="/"&&l.match(/:\/\//)===null},extractPath:function(l){let e="";const t=l.split("/");let s=0;if(t.length>1)if(re.isRelativePath(l))if(t[0]===".")for(s=0;s<t.length-1;++s)e+=s===0?t[s]:"/"+t[s];else if(t[0]==="..")for(s=0;s<t.length-1;++s)e+=s===0?t[s]:"/"+t[s];else for(e=".",s=0;s<t.length-1;++s)e+="/"+t[s];else for(s=0;s<t.length-1;++s)e+=s===0?t[s]:"/"+t[s];return e}};let wr=!1,no=!1,yp=!1,xp=!1,vp=!1,Sp=!1,bp=!1,wp=!1,Tp=!1,Cp=!1;if(typeof navigator<"u"){const l=navigator.userAgent;/(windows|mac os|linux|cros)/i.test(l)&&(wr=!0),/xbox/i.test(l)&&(xp=!0),/(windows phone|iemobile|wpdesktop)/i.test(l)?(wr=!1,no=!0,yp=!0):/android/i.test(l)?(wr=!1,no=!0,vp=!0):/ip([ao]d|hone)/i.test(l)&&(wr=!1,no=!0,Sp=!0),typeof window<"u"&&(bp="ontouchstart"in window||"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0),wp="getGamepads"in navigator,Tp=typeof Worker<"u";try{const e=Object.defineProperty({},"passive",{get:function(){return Cp=!0,!1}});window.addEventListener("testpassive",null,e),window.removeEventListener("testpassive",null,e)}catch{}}const Xl=typeof window<"u"?"browser":"node",st={environment:Xl,global:Xl==="browser"?window:global,browser:Xl==="browser",desktop:wr,mobile:no,ios:Sp,android:vp,windows:yp,xbox:xp,gamepads:wp,touch:bp,workers:Tp,passiveEvents:Cp},Ap="abcdefghijklmnopqrstuvwxyz",Mp="ABCDEFGHIJKLMNOPQRSTUVWXYZ",cg=Ap+Mp,Xh=55296,Pp=56319,Nd=56320,dg=57343,ug=8205,Vd=127462,Gd=127487,fg=127995,pg=127999,mg=8400,_g=8447,qh=65024,jh=65039;function Yh(l,e=0){const t=l.length;if(e<0||e>=t)return null;const s=l.charCodeAt(e);if(t>1&&s>=Xh&&s<=Pp){const i=l.charCodeAt(e+1);if(i>=Nd&&i<=dg)return{code:(s-Xh)*1024+i-Nd+65536,long:!0}}return{code:s,long:!1}}function ii(l,e,t){if(!l)return!1;const s=Yh(l);if(s){const i=s.code;return i>=e&&i<=t}return!1}function gg(l,e){if(e===l.length-1)return 1;if(ii(l[e],Xh,Pp)){const t=l.substring(e,e+2),s=l.substring(e+2,e+4);return ii(s,fg,pg)||ii(t,Vd,Gd)&&ii(s,Vd,Gd)?4:ii(s,qh,jh)?3:2}return ii(l[e+1],qh,jh)?2:1}const ro={ASCII_LOWERCASE:Ap,ASCII_UPPERCASE:Mp,ASCII_LETTERS:cg,format:function(l){for(let e=1;e<arguments.length;e++)l=l.replace("{"+(e-1)+"}",arguments[e]);return l},toBool:function(l,e=!1){if(l==="true")return!0;if(e){if(l==="false")return!1;throw new TypeError("Not a boolean string")}return!1},getCodePoint:function(l,e){const t=Yh(l,e);return t&&t.code},getCodePoints:function(l){if(typeof l!="string")throw new TypeError("Not a string");let e=0;const t=[];let s;for(;s=Yh(l,e);)t.push(s.code),e+=s.long?2:1;return t},getSymbols:function(l){if(typeof l!="string")throw new TypeError("Not a string");let e=0;const t=l.length,s=[];let i=0,n;for(;e<t;){if(i+=gg(l,e+i),n=l[e+i],ii(n,mg,_g)&&(n=l[e+i++]),ii(n,qh,jh)&&(n=l[e+i++]),n&&n.charCodeAt(0)===ug){n=l[e+i++];continue}const r=l.substring(e,e+i);s.push(r),e+=i,i=0}return s},fromCodePoint:function(){const l=[];let e,t,s;for(let i=0;i<arguments.length;++i)e=Number(arguments[i]),t=e-65536,s=e>65535?[(t>>10)+55296,t%1024+56320]:[e],l.push(String.fromCharCode.apply(null,s));return l.join("")}};class yg{constructor(){this._list=[],this._index={}}push(e,t){if(this._index[e])throw Error("Key already in index "+e);const s=this._list.push(t)-1;this._index[e]=s}has(e){return this._index[e]!==void 0}get(e){const t=this._index[e];return t!==void 0?this._list[t]:null}remove(e){const t=this._index[e];if(t!==void 0){this._list.splice(t,1),delete this._index[e];for(e in this._index){const s=this._index[e];s>t&&(this._index[e]=s-1)}return!0}return!1}list(){return this._list}clear(){this._list.length=0;for(const e in this._index)delete this._index[e]}}const xg=l=>{const e={};let t=e;return()=>(t===e&&(t=l()),t)};class Pt{static loadScript(e,t){const s=document.createElement("script");s.setAttribute("src",e),s.onload=()=>{t(null)},s.onerror=()=>{t(`Failed to load script='${e}'`)},document.body.appendChild(s)}static loadWasm(e,t,s){const i=Pt.wasmSupported()&&t.glueUrl&&t.wasmUrl?t.glueUrl:t.fallbackUrl;i?Pt.loadScript(i,n=>{if(n)s(n,null);else{const r=window[e];window[e]=void 0,r({locateFile:()=>t.wasmUrl,onAbort:()=>{s("wasm module aborted.")}}).then(a=>{s(null,a)})}}):s("No supported wasm modules found.",null)}static getModule(e){return Pt.modules.hasOwnProperty(e)||(Pt.modules[e]={config:null,initializing:!1,instance:null,callbacks:[]}),Pt.modules[e]}static initialize(e,t){if(t.initializing)return;const s=t.config;(s.glueUrl||s.wasmUrl||s.fallbackUrl)&&(t.initializing=!0,Pt.loadWasm(e,s,(i,n)=>{i?s.errorHandler?s.errorHandler(i):console.error(`failed to initialize module=${e} error=${i}`):(t.instance=n,t.callbacks.forEach(r=>{r(n)}))}))}}Pt.modules={};Pt.wasmSupported=xg(()=>{try{if(typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"){const l=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(l instanceof WebAssembly.Module)return new WebAssembly.Instance(l)instanceof WebAssembly.Instance}}catch{}return!1});class vg{static setConfig(e,t){const s=Pt.getModule(e);s.config=t,s.callbacks.length>0&&Pt.initialize(e,s)}static getInstance(e,t){const s=Pt.getModule(e);s.instance?t(s.instance):(s.callbacks.push(t),s.config&&Pt.initialize(e,s))}}class Ep{constructor(e){this.arraybuffer=e,this.dataView=new DataView(e),this.offset=0,this.stack=[]}get remainingBytes(){return this.dataView.byteLength-this.offset}reset(e=0){this.offset=e}skip(e){this.offset+=e}align(e){this.offset=this.offset+e-1&~(e-1)}_inc(e){return this.offset+=e,this.offset-e}readChar(){return String.fromCharCode(this.dataView.getUint8(this.offset++))}readChars(e){let t="";for(let s=0;s<e;++s)t+=this.readChar();return t}readU8(){return this.dataView.getUint8(this.offset++)}readU16(){return this.dataView.getUint16(this._inc(2),!0)}readU32(){return this.dataView.getUint32(this._inc(4),!0)}readU64(){return this.readU32()+2**32*this.readU32()}readU32be(){return this.dataView.getUint32(this._inc(4),!1)}readArray(e){for(let t=0;t<e.length;++t)e[t]=this.readU8()}readLine(){const e=this.dataView;let t="";for(;!(this.offset>=e.byteLength);){const s=String.fromCharCode(this.readU8());if(s===`
`)break;t+=s}return t}}class xo{constructor(e){this.items=[],this.length=0,this.loopIndex=-1,this._sortBy=e.sortBy,this._sortHandler=this._doSort.bind(this)}_binarySearch(e){let t=0,s=this.items.length-1;const i=e[this._sortBy];let n,r;for(;t<=s;)n=Math.floor((t+s)/2),r=this.items[n][this._sortBy],r<=i?t=n+1:r>i&&(s=n-1);return t}_doSort(e,t){const s=this._sortBy;return e[s]-t[s]}insert(e){const t=this._binarySearch(e);this.items.splice(t,0,e),this.length++,this.loopIndex>=t&&this.loopIndex++}append(e){this.items.push(e),this.length++}remove(e){const t=this.items.indexOf(e);t<0||(this.items.splice(t,1),this.length--,this.loopIndex>=t&&this.loopIndex--)}sort(){const e=this.loopIndex>=0?this.items[this.loopIndex]:null;this.items.sort(this._sortHandler),e!==null&&(this.loopIndex=this.items.indexOf(e))}}class Rp extends le{constructor(e){super(),this._index={},this._list=[],this._parent=e}add(){let e=!1;const t=this._processArguments(arguments,!0);if(!t.length)return e;for(let s=0;s<t.length;s++)this._index[t[s]]||(e=!0,this._index[t[s]]=!0,this._list.push(t[s]),this.fire("add",t[s],this._parent));return e&&this.fire("change",this._parent),e}remove(){let e=!1;if(!this._list.length)return e;const t=this._processArguments(arguments,!0);if(!t.length)return e;for(let s=0;s<t.length;s++)this._index[t[s]]&&(e=!0,delete this._index[t[s]],this._list.splice(this._list.indexOf(t[s]),1),this.fire("remove",t[s],this._parent));return e&&this.fire("change",this._parent),e}clear(){if(!this._list.length)return;const e=this._list.slice(0);this._list=[],this._index={};for(let t=0;t<e.length;t++)this.fire("remove",e[t],this._parent);this.fire("change",this._parent)}has(){return this._list.length?this._has(this._processArguments(arguments)):!1}_has(e){if(!this._list.length||!e.length)return!1;for(let t=0;t<e.length;t++)if(e[t].length===1){if(this._index[e[t][0]])return!0}else{let s=!0;for(let i=0;i<e[t].length;i++)if(!this._index[e[t][i]]){s=!1;break}if(s)return!0}return!1}list(){return this._list.slice(0)}_processArguments(e,t){const s=[];let i=[];if(!e||!e.length)return s;for(let n=0;n<e.length;n++)if(e[n]instanceof Array){t||(i=[]);for(let r=0;r<e[n].length;r++)typeof e[n][r]=="string"&&(t?s.push(e[n][r]):i.push(e[n][r]));!t&&i.length&&s.push(i)}else typeof e[n]=="string"&&(t?s.push(e[n]):s.push([e[n]]));return s}get size(){return this._list.length}}const fi=typeof window<"u"&&window.performance&&window.performance.now&&window.performance.timing?performance.now.bind(performance):Date.now,Sg=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class ql{constructor(e){const t=e.match(Sg);this.scheme=t[2],this.authority=t[4],this.path=t[5],this.query=t[7],this.fragment=t[9]}toString(){let e="";return this.scheme&&(e+=this.scheme+":"),this.authority&&(e+="//"+this.authority),e+=this.path,this.query&&(e+="?"+this.query),this.fragment&&(e+="#"+this.fragment),e}getQuery(){const e={};if(this.query){const t=decodeURIComponent(this.query).split("&");for(const s of t){const i=s.split("=");e[i[0]]=i[1]}}return e}setQuery(e){let t="";for(const s in e)e.hasOwnProperty(s)&&(t!==""&&(t+="&"),t+=encodeURIComponent(s)+"="+encodeURIComponent(e[s]));this.query=t}}const bg=0,Qc=1,Wd=2,wg=3,Hd=4,Tg=5,k={DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,clamp:function(l,e,t){return l>=t?t:l<=e?e:l},intToBytes24:function(l){const e=l>>16&255,t=l>>8&255,s=l&255;return[e,t,s]},intToBytes32:function(l){const e=l>>24&255,t=l>>16&255,s=l>>8&255,i=l&255;return[e,t,s,i]},bytesToInt24:function(l,e,t){return l.length&&(t=l[2],e=l[1],l=l[0]),l<<16|e<<8|t},bytesToInt32:function(l,e,t,s){return l.length&&(s=l[3],t=l[2],e=l[1],l=l[0]),(l<<24|e<<16|t<<8|s)>>>0},lerp:function(l,e,t){return l+(e-l)*k.clamp(t,0,1)},lerpAngle:function(l,e,t){return e-l>180&&(e-=360),e-l<-180&&(e+=360),k.lerp(l,e,k.clamp(t,0,1))},powerOfTwo:function(l){return l!==0&&!(l&l-1)},nextPowerOfTwo:function(l){return l--,l|=l>>1,l|=l>>2,l|=l>>4,l|=l>>8,l|=l>>16,l++,l},nearestPowerOfTwo:function(l){return Math.pow(2,Math.round(Math.log(l)/Math.log(2)))},random:function(l,e){const t=e-l;return Math.random()*t+l},smoothstep:function(l,e,t){return t<=l?0:t>=e?1:(t=(t-l)/(e-l),t*t*(3-2*t))},smootherstep:function(l,e,t){return t<=l?0:t>=e?1:(t=(t-l)/(e-l),t*t*t*(t*(t*6-15)+10))},roundUp:function(l,e){return e===0?l:Math.ceil(l/e)*e},between:function(l,e,t,s){const i=Math.min(e,t),n=Math.max(e,t);return s?l>=i&&l<=n:l>i&&l<n}};class G{constructor(e=0,t=0,s=0,i=1){const n=e.length;n===3||n===4?(this.r=e[0],this.g=e[1],this.b=e[2],this.a=e[3]!==void 0?e[3]:1):(this.r=e,this.g=t,this.b=s,this.a=i)}clone(){const e=this.constructor;return new e(this.r,this.g,this.b,this.a)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}set(e,t,s,i=1){return this.r=e,this.g=t,this.b=s,this.a=i,this}lerp(e,t,s){return this.r=e.r+s*(t.r-e.r),this.g=e.g+s*(t.g-e.g),this.b=e.b+s*(t.b-e.b),this.a=e.a+s*(t.a-e.a),this}fromString(e){const t=parseInt(e.replace("#","0x"),16);let s;return e.length>7?s=k.intToBytes32(t):(s=k.intToBytes24(t),s[3]=255),this.set(s[0]/255,s[1]/255,s[2]/255,s[3]/255),this}toString(e){let t="#"+(16777216+(Math.round(this.r*255)<<16)+(Math.round(this.g*255)<<8)+Math.round(this.b*255)).toString(16).slice(1);if(e===!0){const s=Math.round(this.a*255).toString(16);this.a<16/255?t+="0"+s:t+=s}return t}}G.BLACK=Object.freeze(new G(0,0,0,1));G.BLUE=Object.freeze(new G(0,0,1,1));G.CYAN=Object.freeze(new G(0,1,1,1));G.GRAY=Object.freeze(new G(.5,.5,.5,1));G.GREEN=Object.freeze(new G(0,1,0,1));G.MAGENTA=Object.freeze(new G(1,0,1,1));G.RED=Object.freeze(new G(1,0,0,1));G.WHITE=Object.freeze(new G(1,1,1,1));G.YELLOW=Object.freeze(new G(1,1,0,1));class Ip{constructor(e,t=0){this._curve=e,this._left=-1/0,this._right=1/0,this._recip=0,this._p0=0,this._p1=0,this._m0=0,this._m1=0,this._reset(t)}evaluate(e,t=!1){(t||e<this._left||e>=this._right)&&this._reset(e);let s;const i=this._curve.type;if(i===Tg)s=this._p0;else{const n=this._recip===0?0:(e-this._left)*this._recip;i===bg?s=k.lerp(this._p0,this._p1,n):i===Qc?s=k.lerp(this._p0,this._p1,n*n*(3-2*n)):s=this._evaluateHermite(this._p0,this._p1,this._m0,this._m1,n)}return s}_reset(e){const t=this._curve.keys,s=t.length;if(!s)this._left=-1/0,this._right=1/0,this._recip=0,this._p0=this._p1=this._m0=this._m1=0;else if(e<t[0][0])this._left=-1/0,this._right=t[0][0],this._recip=0,this._p0=this._p1=t[0][1],this._m0=this._m1=0;else if(e>=t[s-1][0])this._left=t[s-1][0],this._right=1/0,this._recip=0,this._p0=this._p1=t[s-1][1],this._m0=this._m1=0;else{let i=0;for(;e>=t[i+1][0];)i++;this._left=t[i][0],this._right=t[i+1][0];const n=1/(this._right-this._left);this._recip=isFinite(n)?n:0,this._p0=t[i][1],this._p1=t[i+1][1],this._isHermite()&&this._calcTangents(t,i)}}_isHermite(){return this._curve.type===Wd||this._curve.type===wg||this._curve.type===Hd}_calcTangents(e,t){let s;const i=e[t],n=e[t+1];let r;if(t===0?s=[e[0][0]+(e[0][0]-e[1][0]),e[0][1]+(e[0][1]-e[1][1])]:s=e[t-1],t===e.length-2?r=[e[t+1][0]+(e[t+1][0]-e[t][0]),e[t+1][1]+(e[t+1][1]-e[t][1])]:r=e[t+2],this._curve.type===Hd){const a=2*(n[0]-i[0])/(n[0]-s[0]),o=2*(n[0]-i[0])/(r[0]-i[0]);this._m0=this._curve.tension*(isFinite(a)?a:0)*(n[1]-s[1]),this._m1=this._curve.tension*(isFinite(o)?o:0)*(r[1]-i[1])}else{const a=(n[0]-i[0])/(i[0]-s[0]),o=(n[0]-i[0])/(r[0]-n[0]),h=i[1]+(s[1]-i[1])*(isFinite(a)?a:0),c=n[1]+(r[1]-n[1])*(isFinite(o)?o:0),d=this._curve.type===Wd?.5:this._curve.tension;this._m0=d*(n[1]-h),this._m1=d*(c-i[1])}}_evaluateHermite(e,t,s,i,n){const r=n*n,a=n+n,o=1-n,h=o*o;return e*((1+a)*h)+s*(n*h)+t*(r*(3-a))+i*(r*(n-1))}}class Ut{constructor(e){if(this.keys=[],this.type=Qc,this.tension=.5,this._eval=new Ip(this),e)for(let t=0;t<e.length-1;t+=2)this.keys.push([e[t],e[t+1]]);this.sort()}get length(){return this.keys.length}add(e,t){const s=this.keys,i=s.length;let n=0;for(;n<i&&!(s[n][0]>e);n++);const r=[e,t];return this.keys.splice(n,0,r),r}get(e){return this.keys[e]}sort(){this.keys.sort(function(e,t){return e[0]-t[0]})}value(e){return this._eval.evaluate(e,!0)}closest(e){const t=this.keys,s=t.length;let i=2,n=null;for(let r=0;r<s;r++){const a=Math.abs(e-t[r][0]);if(i>=a)i=a,n=t[r];else break}return n}clone(){const e=new this.constructor;return e.keys=ci(e.keys,this.keys),e.type=this.type,e.tension=this.tension,e}quantize(e){e=Math.max(e,2);const t=new Float32Array(e),s=1/(e-1);t[0]=this._eval.evaluate(0,!0);for(let i=1;i<e;i++)t[i]=this._eval.evaluate(s*i);return t}quantizeClamped(e,t,s){const i=this.quantize(e);for(let n=0;n<i.length;++n)i[n]=Math.min(s,Math.max(t,i[n]));return i}}class di{constructor(){if(this.curves=[],this._type=Qc,arguments.length>1)for(let e=0;e<arguments.length;e++)this.curves.push(new Ut(arguments[e]));else if(arguments.length===0)this.curves.push(new Ut);else{const e=arguments[0];if(typeof e=="number")for(let t=0;t<e;t++)this.curves.push(new Ut);else for(let t=0;t<e.length;t++)this.curves.push(new Ut(e[t]))}}get length(){return this.curves.length}set type(e){this._type=e;for(let t=0;t<this.curves.length;t++)this.curves[t].type=e}get type(){return this._type}get(e){return this.curves[e]}value(e,t=[]){const s=this.curves.length;t.length=s;for(let i=0;i<s;i++)t[i]=this.curves[i].value(e);return t}clone(){const e=new this.constructor;e.curves=[];for(let t=0;t<this.curves.length;t++)e.curves.push(this.curves[t].clone());return e._type=this._type,e}quantize(e){e=Math.max(e,2);const t=this.curves.length,s=new Float32Array(e*t),i=1/(e-1);for(let n=0;n<t;n++){const r=new Ip(this.curves[n]);for(let a=0;a<e;a++)s[a*t+n]=r.evaluate(i*a)}return s}quantizeClamped(e,t,s){const i=this.quantize(e);for(let n=0;n<i.length;++n)i[n]=Math.min(s,Math.max(t,i[n]));return i}}class b{constructor(e=0,t=0,s=0){e.length===3?(this.x=e[0],this.y=e[1],this.z=e[2]):(this.x=e,this.y=t,this.z=s)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}add2(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}clone(){const e=this.constructor;return new e(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}cross(e,t){const s=e.x,i=e.y,n=e.z,r=t.x,a=t.y,o=t.z;return this.x=i*o-a*n,this.y=n*r-o*s,this.z=s*a-r*i,this}distance(e){const t=this.x-e.x,s=this.y-e.y,i=this.z-e.z;return Math.sqrt(t*t+s*s+i*i)}div(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}div2(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}divScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}equals(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}lerp(e,t,s){return this.x=e.x+s*(t.x-e.x),this.y=e.y+s*(t.y-e.y),this.z=e.z+s*(t.z-e.z),this}mul(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}mul2(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}mulScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}normalize(){const e=this.x*this.x+this.y*this.y+this.z*this.z;if(e>0){const t=1/Math.sqrt(e);this.x*=t,this.y*=t,this.z*=t}return this}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}min(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),this}max(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),this}project(e){const t=this.x*e.x+this.y*e.y+this.z*e.z,s=e.x*e.x+e.y*e.y+e.z*e.z,i=t/s;return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this}set(e,t,s){return this.x=e,this.y=t,this.z=s,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}sub2(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}toString(){return`[${this.x}, ${this.y}, ${this.z}]`}}b.ZERO=Object.freeze(new b(0,0,0));b.ONE=Object.freeze(new b(1,1,1));b.UP=Object.freeze(new b(0,1,0));b.DOWN=Object.freeze(new b(0,-1,0));b.RIGHT=Object.freeze(new b(1,0,0));b.LEFT=Object.freeze(new b(-1,0,0));b.FORWARD=Object.freeze(new b(0,0,-1));b.BACK=Object.freeze(new b(0,0,1));class Wt{constructor(){const e=new Float32Array(9);e[0]=e[4]=e[8]=1,this.data=e}clone(){const e=this.constructor;return new e().copy(this)}copy(e){const t=e.data,s=this.data;return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],this}set(e){const t=this.data;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],this}equals(e){const t=this.data,s=e.data;return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]&&t[4]===s[4]&&t[5]===s[5]&&t[6]===s[6]&&t[7]===s[7]&&t[8]===s[8]}isIdentity(){const e=this.data;return e[0]===1&&e[1]===0&&e[2]===0&&e[3]===0&&e[4]===1&&e[5]===0&&e[6]===0&&e[7]===0&&e[8]===1}setIdentity(){const e=this.data;return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,this}toString(){return"["+this.data.join(", ")+"]"}transpose(){const e=this.data;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}setFromMat4(e){const t=e.data,s=this.data;return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[4],s[4]=t[5],s[5]=t[6],s[6]=t[8],s[7]=t[9],s[8]=t[10],this}transformVector(e,t=new b){const s=this.data,i=e.x,n=e.y,r=e.z;return t.x=i*s[0]+n*s[3]+r*s[6],t.y=i*s[1]+n*s[4]+r*s[7],t.z=i*s[2]+n*s[5]+r*s[8],t}}Wt.IDENTITY=Object.freeze(new Wt);Wt.ZERO=Object.freeze(new Wt().set([0,0,0,0,0,0,0,0,0]));class V{constructor(e=0,t=0){e.length===2?(this.x=e[0],this.y=e[1]):(this.x=e,this.y=t)}add(e){return this.x+=e.x,this.y+=e.y,this}add2(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScalar(e){return this.x+=e,this.y+=e,this}clone(){const e=this.constructor;return new e(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}cross(e){return this.x*e.y-this.y*e.x}distance(e){const t=this.x-e.x,s=this.y-e.y;return Math.sqrt(t*t+s*s)}div(e){return this.x/=e.x,this.y/=e.y,this}div2(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this}divScalar(e){return this.x/=e,this.y/=e,this}dot(e){return this.x*e.x+this.y*e.y}equals(e){return this.x===e.x&&this.y===e.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}lengthSq(){return this.x*this.x+this.y*this.y}lerp(e,t,s){return this.x=e.x+s*(t.x-e.x),this.y=e.y+s*(t.y-e.y),this}mul(e){return this.x*=e.x,this.y*=e.y,this}mul2(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this}mulScalar(e){return this.x*=e,this.y*=e,this}normalize(){const e=this.x*this.x+this.y*this.y;if(e>0){const t=1/Math.sqrt(e);this.x*=t,this.y*=t}return this}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}min(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),this}max(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),this}set(e,t){return this.x=e,this.y=t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}sub2(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}subScalar(e){return this.x-=e,this.y-=e,this}toString(){return`[${this.x}, ${this.y}]`}static angleRad(e,t){return Math.atan2(e.x*t.y-e.y*t.x,e.x*t.x+e.y*t.y)}}V.ZERO=Object.freeze(new V(0,0));V.ONE=Object.freeze(new V(1,1));V.UP=Object.freeze(new V(0,1));V.DOWN=Object.freeze(new V(0,-1));V.RIGHT=Object.freeze(new V(1,0));V.LEFT=Object.freeze(new V(-1,0));class K{constructor(e=0,t=0,s=0,i=0){e.length===4?(this.x=e[0],this.y=e[1],this.z=e[2],this.w=e[3]):(this.x=e,this.y=t,this.z=s,this.w=i)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}add2(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}clone(){const e=this.constructor;return new e(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}div(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}div2(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this.w=e.w/t.w,this}divScalar(e){return this.x/=e,this.y/=e,this.z/=e,this.w/=e,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}equals(e){return this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}lerp(e,t,s){return this.x=e.x+s*(t.x-e.x),this.y=e.y+s*(t.y-e.y),this.z=e.z+s*(t.z-e.z),this.w=e.w+s*(t.w-e.w),this}mul(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}mul2(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this.w=e.w*t.w,this}mulScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}normalize(){const e=this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;if(e>0){const t=1/Math.sqrt(e);this.x*=t,this.y*=t,this.z*=t,this.w*=t}return this}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}min(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this}max(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this}set(e,t,s,i){return this.x=e,this.y=t,this.z=s,this.w=i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}sub2(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}toString(){return`[${this.x}, ${this.y}, ${this.z}, ${this.w}]`}}K.ZERO=Object.freeze(new K(0,0,0,0));K.ONE=Object.freeze(new K(1,1,1,1));const Qn=new V,vi=new b,Ys=new b,$s=new b,ga=new b;class H{constructor(){const e=new Float32Array(16);e[0]=e[5]=e[10]=e[15]=1,this.data=e}static _getPerspectiveHalfSize(e,t,s,i,n){n?(e.x=i*Math.tan(t*Math.PI/360),e.y=e.x/s):(e.y=i*Math.tan(t*Math.PI/360),e.x=e.y*s)}add2(e,t){const s=e.data,i=t.data,n=this.data;return n[0]=s[0]+i[0],n[1]=s[1]+i[1],n[2]=s[2]+i[2],n[3]=s[3]+i[3],n[4]=s[4]+i[4],n[5]=s[5]+i[5],n[6]=s[6]+i[6],n[7]=s[7]+i[7],n[8]=s[8]+i[8],n[9]=s[9]+i[9],n[10]=s[10]+i[10],n[11]=s[11]+i[11],n[12]=s[12]+i[12],n[13]=s[13]+i[13],n[14]=s[14]+i[14],n[15]=s[15]+i[15],this}add(e){return this.add2(this,e)}clone(){const e=this.constructor;return new e().copy(this)}copy(e){const t=e.data,s=this.data;return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15],this}equals(e){const t=this.data,s=e.data;return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]&&t[4]===s[4]&&t[5]===s[5]&&t[6]===s[6]&&t[7]===s[7]&&t[8]===s[8]&&t[9]===s[9]&&t[10]===s[10]&&t[11]===s[11]&&t[12]===s[12]&&t[13]===s[13]&&t[14]===s[14]&&t[15]===s[15]}isIdentity(){const e=this.data;return e[0]===1&&e[1]===0&&e[2]===0&&e[3]===0&&e[4]===0&&e[5]===1&&e[6]===0&&e[7]===0&&e[8]===0&&e[9]===0&&e[10]===1&&e[11]===0&&e[12]===0&&e[13]===0&&e[14]===0&&e[15]===1}mul2(e,t){const s=e.data,i=t.data,n=this.data,r=s[0],a=s[1],o=s[2],h=s[3],c=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],w=s[12],v=s[13],y=s[14],T=s[15];let C,S,A,x;return C=i[0],S=i[1],A=i[2],x=i[3],n[0]=r*C+c*S+p*A+w*x,n[1]=a*C+d*S+_*A+v*x,n[2]=o*C+u*S+m*A+y*x,n[3]=h*C+f*S+g*A+T*x,C=i[4],S=i[5],A=i[6],x=i[7],n[4]=r*C+c*S+p*A+w*x,n[5]=a*C+d*S+_*A+v*x,n[6]=o*C+u*S+m*A+y*x,n[7]=h*C+f*S+g*A+T*x,C=i[8],S=i[9],A=i[10],x=i[11],n[8]=r*C+c*S+p*A+w*x,n[9]=a*C+d*S+_*A+v*x,n[10]=o*C+u*S+m*A+y*x,n[11]=h*C+f*S+g*A+T*x,C=i[12],S=i[13],A=i[14],x=i[15],n[12]=r*C+c*S+p*A+w*x,n[13]=a*C+d*S+_*A+v*x,n[14]=o*C+u*S+m*A+y*x,n[15]=h*C+f*S+g*A+T*x,this}mulAffine2(e,t){const s=e.data,i=t.data,n=this.data,r=s[0],a=s[1],o=s[2],h=s[4],c=s[5],d=s[6],u=s[8],f=s[9],p=s[10],_=s[12],m=s[13],g=s[14];let w,v,y;return w=i[0],v=i[1],y=i[2],n[0]=r*w+h*v+u*y,n[1]=a*w+c*v+f*y,n[2]=o*w+d*v+p*y,n[3]=0,w=i[4],v=i[5],y=i[6],n[4]=r*w+h*v+u*y,n[5]=a*w+c*v+f*y,n[6]=o*w+d*v+p*y,n[7]=0,w=i[8],v=i[9],y=i[10],n[8]=r*w+h*v+u*y,n[9]=a*w+c*v+f*y,n[10]=o*w+d*v+p*y,n[11]=0,w=i[12],v=i[13],y=i[14],n[12]=r*w+h*v+u*y+_,n[13]=a*w+c*v+f*y+m,n[14]=o*w+d*v+p*y+g,n[15]=1,this}mul(e){return this.mul2(this,e)}transformPoint(e,t=new b){const s=this.data,i=e.x,n=e.y,r=e.z;return t.x=i*s[0]+n*s[4]+r*s[8]+s[12],t.y=i*s[1]+n*s[5]+r*s[9]+s[13],t.z=i*s[2]+n*s[6]+r*s[10]+s[14],t}transformVector(e,t=new b){const s=this.data,i=e.x,n=e.y,r=e.z;return t.x=i*s[0]+n*s[4]+r*s[8],t.y=i*s[1]+n*s[5]+r*s[9],t.z=i*s[2]+n*s[6]+r*s[10],t}transformVec4(e,t=new K){const s=this.data,i=e.x,n=e.y,r=e.z,a=e.w;return t.x=i*s[0]+n*s[4]+r*s[8]+a*s[12],t.y=i*s[1]+n*s[5]+r*s[9]+a*s[13],t.z=i*s[2]+n*s[6]+r*s[10]+a*s[14],t.w=i*s[3]+n*s[7]+r*s[11]+a*s[15],t}setLookAt(e,t,s){$s.sub2(e,t).normalize(),Ys.copy(s).normalize(),vi.cross(Ys,$s).normalize(),Ys.cross($s,vi);const i=this.data;return i[0]=vi.x,i[1]=vi.y,i[2]=vi.z,i[3]=0,i[4]=Ys.x,i[5]=Ys.y,i[6]=Ys.z,i[7]=0,i[8]=$s.x,i[9]=$s.y,i[10]=$s.z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}setFrustum(e,t,s,i,n,r){const a=2*n,o=t-e,h=i-s,c=r-n,d=this.data;return d[0]=a/o,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=a/h,d[6]=0,d[7]=0,d[8]=(t+e)/o,d[9]=(i+s)/h,d[10]=(-r-n)/c,d[11]=-1,d[12]=0,d[13]=0,d[14]=-a*r/c,d[15]=0,this}setPerspective(e,t,s,i,n){return H._getPerspectiveHalfSize(Qn,e,t,s,n),this.setFrustum(-Qn.x,Qn.x,-Qn.y,Qn.y,s,i)}setOrtho(e,t,s,i,n,r){const a=this.data;return a[0]=2/(t-e),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(i-s),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=-2/(r-n),a[11]=0,a[12]=-(t+e)/(t-e),a[13]=-(i+s)/(i-s),a[14]=-(r+n)/(r-n),a[15]=1,this}setFromAxisAngle(e,t){t*=k.DEG_TO_RAD;const s=e.x,i=e.y,n=e.z,r=Math.cos(t),a=Math.sin(t),o=1-r,h=o*s,c=o*i,d=this.data;return d[0]=h*s+r,d[1]=h*i+a*n,d[2]=h*n-a*i,d[3]=0,d[4]=h*i-a*n,d[5]=c*i+r,d[6]=c*n+a*s,d[7]=0,d[8]=h*n+a*i,d[9]=c*n-s*a,d[10]=o*n*n+r,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,this}setTranslate(e,t,s){const i=this.data;return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=e,i[13]=t,i[14]=s,i[15]=1,this}setScale(e,t,s){const i=this.data;return i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=t,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}setViewport(e,t,s,i){const n=this.data;return n[0]=s*.5,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i*.5,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=.5,n[11]=0,n[12]=e+s*.5,n[13]=t+i*.5,n[14]=.5,n[15]=1,this}invert(){const e=this.data,t=e[0],s=e[1],i=e[2],n=e[3],r=e[4],a=e[5],o=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],w=t*a-s*r,v=t*o-i*r,y=t*h-n*r,T=s*o-i*a,C=s*h-n*a,S=i*h-n*o,A=c*_-d*p,x=c*m-u*p,P=c*g-f*p,I=d*m-u*_,E=d*g-f*_,O=u*g-f*m,D=w*O-v*E+y*I+T*P-C*x+S*A;if(D===0)this.setIdentity();else{const U=1/D;e[0]=(a*O-o*E+h*I)*U,e[1]=(-s*O+i*E-n*I)*U,e[2]=(_*S-m*C+g*T)*U,e[3]=(-d*S+u*C-f*T)*U,e[4]=(-r*O+o*P-h*x)*U,e[5]=(t*O-i*P+n*x)*U,e[6]=(-p*S+m*y-g*v)*U,e[7]=(c*S-u*y+f*v)*U,e[8]=(r*E-a*P+h*A)*U,e[9]=(-t*E+s*P-n*A)*U,e[10]=(p*C-_*y+g*w)*U,e[11]=(-c*C+d*y-f*w)*U,e[12]=(-r*I+a*x-o*A)*U,e[13]=(t*I-s*x+i*A)*U,e[14]=(-p*T+_*v-m*w)*U,e[15]=(c*T-d*v+u*w)*U}return this}set(e){const t=this.data;return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],this}setIdentity(){const e=this.data;return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}setTRS(e,t,s){const i=t.x,n=t.y,r=t.z,a=t.w,o=s.x,h=s.y,c=s.z,d=i+i,u=n+n,f=r+r,p=i*d,_=i*u,m=i*f,g=n*u,w=n*f,v=r*f,y=a*d,T=a*u,C=a*f,S=this.data;return S[0]=(1-(g+v))*o,S[1]=(_+C)*o,S[2]=(m-T)*o,S[3]=0,S[4]=(_-C)*h,S[5]=(1-(p+v))*h,S[6]=(w+y)*h,S[7]=0,S[8]=(m+T)*c,S[9]=(w-y)*c,S[10]=(1-(p+g))*c,S[11]=0,S[12]=e.x,S[13]=e.y,S[14]=e.z,S[15]=1,this}transpose(){let e;const t=this.data;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}invertTo3x3(e){const t=this.data,s=e.data,i=t[0],n=t[1],r=t[2],a=t[4],o=t[5],h=t[6],c=t[8],d=t[9],u=t[10],f=u*o-h*d,p=-u*n+r*d,_=h*n-r*o,m=-u*a+h*c,g=u*i-r*c,w=-h*i+r*a,v=d*a-o*c,y=-d*i+n*c,T=o*i-n*a,C=i*f+n*m+r*v;if(C===0)return this;const S=1/C;return s[0]=S*f,s[1]=S*p,s[2]=S*_,s[3]=S*m,s[4]=S*g,s[5]=S*w,s[6]=S*v,s[7]=S*y,s[8]=S*T,this}getTranslation(e=new b){return e.set(this.data[12],this.data[13],this.data[14])}getX(e=new b){return e.set(this.data[0],this.data[1],this.data[2])}getY(e=new b){return e.set(this.data[4],this.data[5],this.data[6])}getZ(e=new b){return e.set(this.data[8],this.data[9],this.data[10])}getScale(e=new b){return this.getX(vi),this.getY(Ys),this.getZ($s),e.set(vi.length(),Ys.length(),$s.length()),e}setFromEulerAngles(e,t,s){e*=k.DEG_TO_RAD,t*=k.DEG_TO_RAD,s*=k.DEG_TO_RAD;const i=Math.sin(-e),n=Math.cos(-e),r=Math.sin(-t),a=Math.cos(-t),o=Math.sin(-s),h=Math.cos(-s),c=this.data;return c[0]=a*h,c[1]=-a*o,c[2]=r,c[3]=0,c[4]=n*o+h*i*r,c[5]=n*h-i*r*o,c[6]=-a*i,c[7]=0,c[8]=i*o-n*h*r,c[9]=h*i+n*r*o,c[10]=n*a,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,this}getEulerAngles(e=new b){this.getScale(ga);const t=ga.x,s=ga.y,i=ga.z;if(t===0||s===0||i===0)return e.set(0,0,0);const n=this.data,r=Math.asin(-n[2]/t),a=Math.PI*.5;let o,h;return r<a?r>-a?(o=Math.atan2(n[6]/s,n[10]/i),h=Math.atan2(n[1]/t,n[0]/t)):(h=0,o=-Math.atan2(n[4]/s,n[5]/s)):(h=0,o=Math.atan2(n[4]/s,n[5]/s)),e.set(o,r,h).mulScalar(k.RAD_TO_DEG)}toString(){return"["+this.data.join(", ")+"]"}}H.IDENTITY=Object.freeze(new H);H.ZERO=Object.freeze(new H().set([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));class ee{constructor(e=0,t=0,s=0,i=1){e.length===4?(this.x=e[0],this.y=e[1],this.z=e[2],this.w=e[3]):(this.x=e,this.y=t,this.z=s,this.w=i)}clone(){const e=this.constructor;return new e(this.x,this.y,this.z,this.w)}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}equals(e){return this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w}getAxisAngle(e){let t=Math.acos(this.w)*2;const s=Math.sin(t/2);return s!==0?(e.x=this.x/s,e.y=this.y/s,e.z=this.z/s,(e.x<0||e.y<0||e.z<0)&&(e.x*=-1,e.y*=-1,e.z*=-1,t*=-1)):(e.x=1,e.y=0,e.z=0),t*k.RAD_TO_DEG}getEulerAngles(e=new b){let t,s,i;const n=this.x,r=this.y,a=this.z,o=this.w,h=2*(o*r-n*a);return h<=-.99999?(t=2*Math.atan2(n,o),s=-Math.PI/2,i=0):h>=.99999?(t=2*Math.atan2(n,o),s=Math.PI/2,i=0):(t=Math.atan2(2*(o*n+r*a),1-2*(n*n+r*r)),s=Math.asin(h),i=Math.atan2(2*(o*a+n*r),1-2*(r*r+a*a))),e.set(t,s,i).mulScalar(k.RAD_TO_DEG)}invert(){return this.conjugate().normalize()}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}mul(e){const t=this.x,s=this.y,i=this.z,n=this.w,r=e.x,a=e.y,o=e.z,h=e.w;return this.x=n*r+t*h+s*o-i*a,this.y=n*a+s*h+i*r-t*o,this.z=n*o+i*h+t*a-s*r,this.w=n*h-t*r-s*a-i*o,this}mul2(e,t){const s=e.x,i=e.y,n=e.z,r=e.w,a=t.x,o=t.y,h=t.z,c=t.w;return this.x=r*a+s*c+i*h-n*o,this.y=r*o+i*c+n*a-s*h,this.z=r*h+n*c+s*o-i*a,this.w=r*c-s*a-i*o-n*h,this}normalize(){let e=this.length();return e===0?(this.x=this.y=this.z=0,this.w=1):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}set(e,t,s,i){return this.x=e,this.y=t,this.z=s,this.w=i,this}setFromAxisAngle(e,t){t*=.5*k.DEG_TO_RAD;const s=Math.sin(t),i=Math.cos(t);return this.x=s*e.x,this.y=s*e.y,this.z=s*e.z,this.w=i,this}setFromEulerAngles(e,t,s){if(e instanceof b){const d=e;e=d.x,t=d.y,s=d.z}const i=.5*k.DEG_TO_RAD;e*=i,t*=i,s*=i;const n=Math.sin(e),r=Math.cos(e),a=Math.sin(t),o=Math.cos(t),h=Math.sin(s),c=Math.cos(s);return this.x=n*o*c-r*a*h,this.y=r*a*c+n*o*h,this.z=r*o*h-n*a*c,this.w=r*o*c+n*a*h,this}setFromMat4(e){let t,s,i,n,r,a,o,h,c,d,u,f,p,_;if(e=e.data,t=e[0],s=e[1],i=e[2],n=e[4],r=e[5],a=e[6],o=e[8],h=e[9],c=e[10],f=t*t+s*s+i*i,f===0)return this;if(f=1/Math.sqrt(f),p=n*n+r*r+a*a,p===0)return this;if(p=1/Math.sqrt(p),_=o*o+h*h+c*c,_===0)return this;_=1/Math.sqrt(_),t*=f,s*=f,i*=f,n*=p,r*=p,a*=p,o*=_,h*=_,c*=_;const m=t+r+c;return m>=0?(d=Math.sqrt(m+1),this.w=d*.5,d=.5/d,this.x=(a-h)*d,this.y=(o-i)*d,this.z=(s-n)*d):t>r?t>c?(u=t-(r+c)+1,u=Math.sqrt(u),this.x=u*.5,u=.5/u,this.w=(a-h)*u,this.y=(s+n)*u,this.z=(i+o)*u):(u=c-(t+r)+1,u=Math.sqrt(u),this.z=u*.5,u=.5/u,this.w=(s-n)*u,this.x=(o+i)*u,this.y=(h+a)*u):r>c?(u=r-(c+t)+1,u=Math.sqrt(u),this.y=u*.5,u=.5/u,this.w=(o-i)*u,this.z=(a+h)*u,this.x=(n+s)*u):(u=c-(t+r)+1,u=Math.sqrt(u),this.z=u*.5,u=.5/u,this.w=(s-n)*u,this.x=(o+i)*u,this.y=(h+a)*u),this}slerp(e,t,s){const i=e.x,n=e.y,r=e.z,a=e.w;let o=t.x,h=t.y,c=t.z,d=t.w,u=a*d+i*o+n*h+r*c;if(u<0&&(d=-d,o=-o,h=-h,c=-c,u=-u),Math.abs(u)>=1)return this.w=a,this.x=i,this.y=n,this.z=r,this;const f=Math.acos(u),p=Math.sqrt(1-u*u);if(Math.abs(p)<.001)return this.w=a*.5+d*.5,this.x=i*.5+o*.5,this.y=n*.5+h*.5,this.z=r*.5+c*.5,this;const _=Math.sin((1-s)*f)/p,m=Math.sin(s*f)/p;return this.w=a*_+d*m,this.x=i*_+o*m,this.y=n*_+h*m,this.z=r*_+c*m,this}transformVector(e,t=new b){const s=e.x,i=e.y,n=e.z,r=this.x,a=this.y,o=this.z,h=this.w,c=h*s+a*n-o*i,d=h*i+o*s-r*n,u=h*n+r*i-a*s,f=-r*s-a*i-o*n;return t.x=c*h+f*-r+d*-o-u*-a,t.y=d*h+f*-a+u*-r-c*-o,t.z=u*h+f*-o+c*-a-d*-r,t}toString(){return`[${this.x}, ${this.y}, ${this.z}, ${this.w}]`}}ee.IDENTITY=Object.freeze(new ee(0,0,0,1));ee.ZERO=Object.freeze(new ee(0,0,0,0));const sn=new b,nn=new b,Xd=new b,qd=new b,Cg=new b;class _e{constructor(e=new b,t=new b(.5,.5,.5)){this.center=e,this.halfExtents=t,this._min=new b,this._max=new b}add(e){const t=this.center,s=t.x,i=t.y,n=t.z,r=this.halfExtents,a=r.x,o=r.y,h=r.z;let c=s-a,d=s+a,u=i-o,f=i+o,p=n-h,_=n+h;const m=e.center,g=m.x,w=m.y,v=m.z,y=e.halfExtents,T=y.x,C=y.y,S=y.z,A=g-T,x=g+T,P=w-C,I=w+C,E=v-S,O=v+S;A<c&&(c=A),x>d&&(d=x),P<u&&(u=P),I>f&&(f=I),E<p&&(p=E),O>_&&(_=O),t.x=(c+d)*.5,t.y=(u+f)*.5,t.z=(p+_)*.5,r.x=(d-c)*.5,r.y=(f-u)*.5,r.z=(_-p)*.5}copy(e){this.center.copy(e.center),this.halfExtents.copy(e.halfExtents)}clone(){return new _e(this.center.clone(),this.halfExtents.clone())}intersects(e){const t=this.getMax(),s=this.getMin(),i=e.getMax(),n=e.getMin();return s.x<=i.x&&t.x>=n.x&&s.y<=i.y&&t.y>=n.y&&s.z<=i.z&&t.z>=n.z}_intersectsRay(e,t){const s=sn.copy(this.getMin()).sub(e.origin),i=nn.copy(this.getMax()).sub(e.origin),n=e.direction;n.x===0?(s.x=s.x<0?-Number.MAX_VALUE:Number.MAX_VALUE,i.x=i.x<0?-Number.MAX_VALUE:Number.MAX_VALUE):(s.x/=n.x,i.x/=n.x),n.y===0?(s.y=s.y<0?-Number.MAX_VALUE:Number.MAX_VALUE,i.y=i.y<0?-Number.MAX_VALUE:Number.MAX_VALUE):(s.y/=n.y,i.y/=n.y),n.z===0?(s.z=s.z<0?-Number.MAX_VALUE:Number.MAX_VALUE,i.z=i.z<0?-Number.MAX_VALUE:Number.MAX_VALUE):(s.z/=n.z,i.z/=n.z);const r=Xd.set(Math.min(s.x,i.x),Math.min(s.y,i.y),Math.min(s.z,i.z)),a=qd.set(Math.max(s.x,i.x),Math.max(s.y,i.y),Math.max(s.z,i.z)),o=Math.min(Math.min(a.x,a.y),a.z),h=Math.max(Math.max(r.x,r.y),r.z),c=o>=h&&h>=0;return c&&t.copy(e.direction).mulScalar(h).add(e.origin),c}_fastIntersectsRay(e){const t=sn,s=nn,i=Xd,n=qd,r=Cg,a=e.direction;return t.sub2(e.origin,this.center),n.set(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z)),i.mul2(t,a),!(n.x>this.halfExtents.x&&i.x>=0||n.y>this.halfExtents.y&&i.y>=0||n.z>this.halfExtents.z&&i.z>=0||(r.set(Math.abs(a.x),Math.abs(a.y),Math.abs(a.z)),s.cross(a,t),s.set(Math.abs(s.x),Math.abs(s.y),Math.abs(s.z)),s.x>this.halfExtents.y*r.z+this.halfExtents.z*r.y)||s.y>this.halfExtents.x*r.z+this.halfExtents.z*r.x||s.z>this.halfExtents.x*r.y+this.halfExtents.y*r.x)}intersectsRay(e,t){return t?this._intersectsRay(e,t):this._fastIntersectsRay(e)}setMinMax(e,t){this.center.add2(t,e).mulScalar(.5),this.halfExtents.sub2(t,e).mulScalar(.5)}getMin(){return this._min.copy(this.center).sub(this.halfExtents)}getMax(){return this._max.copy(this.center).add(this.halfExtents)}containsPoint(e){const t=this.getMin(),s=this.getMax();return!(e.x<t.x||e.x>s.x||e.y<t.y||e.y>s.y||e.z<t.z||e.z>s.z)}setFromTransformedAabb(e,t,s=!1){const i=e.center,n=e.halfExtents,r=t.data;let a=r[0],o=r[4],h=r[8],c=r[1],d=r[5],u=r[9],f=r[2],p=r[6],_=r[10];if(s){let m=a*a+o*o+h*h;if(m>0){const g=1/Math.sqrt(m);a*=g,o*=g,h*=g}if(m=c*c+d*d+u*u,m>0){const g=1/Math.sqrt(m);c*=g,d*=g,u*=g}if(m=f*f+p*p+_*_,m>0){const g=1/Math.sqrt(m);f*=g,p*=g,_*=g}}this.center.set(r[12]+a*i.x+o*i.y+h*i.z,r[13]+c*i.x+d*i.y+u*i.z,r[14]+f*i.x+p*i.y+_*i.z),this.halfExtents.set(Math.abs(a)*n.x+Math.abs(o)*n.y+Math.abs(h)*n.z,Math.abs(c)*n.x+Math.abs(d)*n.y+Math.abs(u)*n.z,Math.abs(f)*n.x+Math.abs(p)*n.y+Math.abs(_)*n.z)}static computeMinMax(e,t,s,i=e.length/3){if(i>0){t.set(e[0],e[1],e[2]),s.set(e[0],e[1],e[2]);for(let n=1;n<i;n++){const r=e[n*3+0],a=e[n*3+1],o=e[n*3+2];r<t.x&&(t.x=r),a<t.y&&(t.y=a),o<t.z&&(t.z=o),r>s.x&&(s.x=r),a>s.y&&(s.y=a),o>s.z&&(s.z=o)}}}compute(e,t){_e.computeMinMax(e,sn,nn,t),this.setMinMax(sn,nn)}intersectsBoundingSphere(e){return this._distanceToBoundingSphereSq(e)<=e.radius*e.radius}_distanceToBoundingSphereSq(e){const t=this.getMin(),s=this.getMax();let i=0;const n=["x","y","z"];for(let r=0;r<3;++r){let a=0;const o=e.center[n[r]],h=t[n[r]],c=s[n[r]];let d=0;o<h&&(d=h-o,a+=d*d),o>c&&(d=o-c,a+=d*d),i+=a}return i}_expand(e,t){sn.add2(this.getMin(),e),nn.add2(this.getMax(),t),this.setMinMax(sn,nn)}}const ya=new b,Ag=new b;class dl{constructor(e=new b,t=.5){this.center=e,this.radius=t}containsPoint(e){const t=ya.sub2(e,this.center).lengthSq(),s=this.radius;return t<s*s}intersectsRay(e,t){const s=ya.copy(e.origin).sub(this.center),i=s.dot(Ag.copy(e.direction).normalize()),n=s.dot(s)-this.radius*this.radius;if(n>0&&i>0)return!1;const r=i*i-n;if(r<0)return!1;const a=Math.abs(-i-Math.sqrt(r));return t&&t.copy(e.direction).mulScalar(a).add(e.origin),!0}intersectsBoundingSphere(e){ya.sub2(e.center,this.center);const t=e.radius+this.radius;return ya.lengthSq()<=t*t}}class Mg{constructor(){this.planes=[];for(let e=0;e<6;e++)this.planes[e]=[]}setFromMat4(e){const t=e.data;let s;const i=this.planes;s=i[0],s[0]=t[3]-t[0],s[1]=t[7]-t[4],s[2]=t[11]-t[8],s[3]=t[15]-t[12];let n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n,s=i[1],s[0]=t[3]+t[0],s[1]=t[7]+t[4],s[2]=t[11]+t[8],s[3]=t[15]+t[12],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n,s=i[2],s[0]=t[3]+t[1],s[1]=t[7]+t[5],s[2]=t[11]+t[9],s[3]=t[15]+t[13],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n,s=i[3],s[0]=t[3]-t[1],s[1]=t[7]-t[5],s[2]=t[11]-t[9],s[3]=t[15]-t[13],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n,s=i[4],s[0]=t[3]-t[2],s[1]=t[7]-t[6],s[2]=t[11]-t[10],s[3]=t[15]-t[14],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n,s=i[5],s[0]=t[3]+t[2],s[1]=t[7]+t[6],s[2]=t[11]+t[10],s[3]=t[15]+t[14],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),s[0]/=n,s[1]/=n,s[2]/=n,s[3]/=n}containsPoint(e){let t,s;for(t=0;t<6;t++)if(s=this.planes[t],s[0]*e.x+s[1]*e.y+s[2]*e.z+s[3]<=0)return!1;return!0}containsSphere(e){let t=0,s,i;const n=e.radius,r=e.center,a=r.x,o=r.y,h=r.z,c=this.planes;let d;for(i=0;i<6;i++){if(d=c[i],s=d[0]*a+d[1]*o+d[2]*h+d[3],s<=-n)return 0;s>n&&t++}return t===6?2:1}}class $h{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}}const Pg=new b;class Eg{constructor(e=new b,t=new b(0,0,1)){this.point=e,this.normal=t}intersectsLine(e,t,s){const i=-this.normal.dot(this.point),n=this.normal.dot(e)+i,r=this.normal.dot(t)+i,a=n/(n-r),o=a>=0&&a<=1;return o&&s&&s.lerp(e,t,a),o}intersectsRay(e,t){const s=Pg.sub2(this.point,e.origin),i=this.normal.dot(s)/this.normal.dot(e.direction),n=i>=0;return n&&t&&t.copy(e.direction).mulScalar(i).add(e.origin),n}}const ul="linear",fl="inverse",Lp="exponential",it=0,se=1,ed=2,Fi=0,Ie=1,jd=2,xa=4,Yd=5,va=6,Sa=8,qe=0,$d=3,Kd=4,Rt=0,Nr=1,Rg=2,Ig=3,Ar=1,Mr=2,vo=4,_t=0,Xn=1,So=2,Dp=3,ve=0,$e=1,pl=2,ml=3,_l=4,Xi=5,Lg=0,td=1,bo=2,gl=3,Dg=4,Fg=5,Og=6,Vi=7,Fp=0,Bs=1,qi=2,Kh=0,Zh=1,wo=2,To=3,Jh=4,Co=5,ks=6,he=7,kn=8,Pr=9,Gi=10,Er=11,gt=12,Rr=13,nt=14,Op=15,Vr=16,yl=17,xl=18,sd=19,id=20,Gr=21,nd=22,rd=23,Wr=24,Hr=25,vl=26,Sl=27,Bp=28,kp=29,zp=30,na=0,bl=1,Up=2,Np=3,ts=4,ra=5,ji=6,Ne="POSITION",xt="NORMAL",ps="TANGENT",ms="BLENDWEIGHT",Et="BLENDINDICES",lt="COLOR",Zd="TEXCOORD",It="TEXCOORD0",yi="TEXCOORD1",wl="TEXCOORD2",Tl="TEXCOORD3",Cl="TEXCOORD4",Al="TEXCOORD5",Ml="TEXCOORD6",Pl="TEXCOORD7",Bg="ATTR",Ao="ATTR0",Qh="ATTR1",Vp="ATTR2",Gp="ATTR3",Wp="ATTR4",kg="ATTR5",zg="ATTR6",Ug="ATTR7",Wi="ATTR8",Hi="ATTR9",ec="ATTR10",tc="ATTR11",Ir="ATTR12",Lr="ATTR13",Dr="ATTR14",zi="ATTR15",Ng=1,Bt=0,Vg=2,Gg=3,Wg=5,Hg=2,Nt="default",pi="rgbm",ad="rgbe",Hp="rgbp",El="swizzleGGGR",Xp="2d",Xg="float",qg="unfilterable-float",jg="none",sc="cube",Jd="equirect",Yg="octahedral",Rl=0,zs=1,Il=2,Kn=3,qp=4,jp=5,ge=6,ao=0,Mo=1,Xr=2,qr=3,jr=4,Yr=5,Fr=6,Or=7,Br=8,ic=9,nc=10,rc=11,Po=12,Eo=13,Ro=14,$g=15,Kg=16,Yp=17,Zg=18,Jg=19,Qg=20,$p=21,Kp=22,Zp=23,ey=["bool","int","float","vec2","vec3","vec4","ivec2","ivec3","ivec4","bec2","bec3","bec4","mat2","mat3","mat4","sampler2D","samplerCube","","sampler2DShadow","samplerCubeShadow","sampler3D","","",""],Jp="webgl",Qd="webgpu",ty=1,eu=2,ac=0,sy=1,Qp="default",iy=["view","mesh"],zn=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array],Io=[1,1,2,2,4,4,4],oc=[Uint8Array,Uint16Array,Uint32Array],ny=[1,2,4],ye={};ye[Ne]=0;ye[xt]=1;ye[ms]=2;ye[Et]=3;ye[lt]=4;ye[It]=5;ye[yi]=6;ye[wl]=7;ye[Tl]=8;ye[Cl]=9;ye[Al]=10;ye[Ml]=11;ye[Pl]=12;ye[ps]=13;ye[Ao]=0;ye[Qh]=1;ye[Vp]=2;ye[Gp]=3;ye[Wp]=4;ye[kg]=5;ye[zg]=6;ye[Ug]=7;ye[Wi]=8;ye[Hi]=9;ye[ec]=10;ye[tc]=11;ye[Ir]=12;ye[Lr]=13;ye[Dr]=14;ye[zi]=15;const ry="1.55",ay="1.57";let oy=0;class Us{constructor(e,t,s,i=Rt,n){this.device=e,this.format=t,this.numVertices=s,this.usage=i,this.id=oy++,this.impl=e.createVertexBufferImpl(this,t),this.instancing=!1,this.numBytes=t.verticesByteSize?t.verticesByteSize:t.size*s,this.adjustVramSizeTracking(e._vram,this.numBytes),n?this.setData(n):this.storage=new ArrayBuffer(this.numBytes),this.device.buffers.push(this)}destroy(){const e=this.device,t=e.buffers.indexOf(this);t!==-1&&e.buffers.splice(t,1),this.impl.initialized&&(this.impl.destroy(e),this.adjustVramSizeTracking(e._vram,-this.storage.byteLength))}adjustVramSizeTracking(e,t){e.vb+=t}loseContext(){this.impl.loseContext()}getFormat(){return this.format}getUsage(){return this.usage}getNumVertices(){return this.numVertices}lock(){return this.storage}unlock(){this.impl.unlock(this)}setData(e){return e.byteLength!==this.numBytes?!1:(this.storage=e,this.unlock(),!0)}}function $r(l){let e=0;for(let t=0,s=l.length;t<s;t++)e=(e<<5)-e+l.charCodeAt(t),e|=0;return e}class dt{constructor(e,t,s){this._elements=[],this.hasUv0=!1,this.hasUv1=!1,this.hasColor=!1,this.hasTangents=!1,this.verticesByteSize=0,this.vertexCount=s,this.interleaved=s===void 0,this.size=t.reduce((r,a)=>r+Math.ceil(a.components*Io[a.type]/4)*4,0);let i=0,n;for(let r=0,a=t.length;r<a;r++){const o=t[r];n=o.components*Io[o.type],s&&(i=k.roundUp(i,n));const h={name:o.semantic,offset:s?i:o.hasOwnProperty("offset")?o.offset:i,stride:s?n:o.hasOwnProperty("stride")?o.stride:this.size,dataType:o.type,numComponents:o.components,normalize:o.normalize===void 0?!1:o.normalize,size:n};this._elements.push(h),s?i+=n*s:i+=Math.ceil(n/4)*4,o.semantic===It?this.hasUv0=!0:o.semantic===yi?this.hasUv1=!0:o.semantic===lt?this.hasColor=!0:o.semantic===ps&&(this.hasTangents=!0)}s&&(this.verticesByteSize=i),this._evaluateHash()}get elements(){return this._elements}static get defaultInstancingFormat(){return dt._defaultInstancingFormat||(dt._defaultInstancingFormat=new dt(null,[{semantic:Ir,components:4,type:ge},{semantic:Lr,components:4,type:ge},{semantic:Dr,components:4,type:ge},{semantic:zi,components:4,type:ge}])),dt._defaultInstancingFormat}_evaluateHash(){let e;const t=[];let s;const i=[],n=this._elements.length;for(let r=0;r<n;r++){const a=this._elements[r];e=a.name,e+=a.dataType,e+=a.numComponents,e+=a.normalize,t.push(e),s=e,s+=a.offset,s+=a.stride,s+=a.size,i.push(s)}t.sort(),this.batchingHash=$r(t.join()),this.renderingingHashString=i.join("_"),this.renderingingHash=$r(this.renderingingHashString)}}dt._defaultInstancingFormat=null;class Zn{constructor(){this._cache=new Map}get(e,t){return this._cache.has(e)||(this._cache.set(e,t()),e.on("destroy",()=>{this.remove(e)})),this._cache.get(e)}remove(e){var t;(t=this._cache.get(e))==null||t.destroy(),this._cache.delete(e)}}const ly={type:ra,base:0,count:4,indexed:!1},hy=new Zn;function cy(l){return hy.get(l,()=>{const e=new dt(l,[{semantic:Ne,components:2,type:ge}]),t=new Float32Array(8);return t.set([-1,-1,1,-1,-1,1,1,1]),new Us(l,e,4,Rt,t)})}function ss(l,e,t,s,i,n=!1){const r=l.renderTarget;l.setRenderTarget(e),l.updateBegin();let a,o,h,c,d,u,f,p;s?(a=s.x,o=s.y,h=s.z,c=s.w):(h=e?e.width:l.width,c=e?e.height:l.height,a=0,o=0),i?(d=i.x,u=i.y,f=i.z,p=i.w):(d=a,u=o,f=h,p=c);const _=l.vx,m=l.vy,g=l.vw,w=l.vh;l.setViewport(a,o,h,c);const v=l.sx,y=l.sy,T=l.sw,C=l.sh;l.setScissor(d,u,f,p);const S=l.getDepthTest(),A=l.getDepthWrite(),x=l.getCullMode(),P=l.writeRed,I=l.writeGreen,E=l.writeBlue,O=l.writeAlpha;l.setDepthTest(!1),l.setDepthWrite(!1),l.setCullMode(_t),l.setColorWrite(!0,!0,!0,!0),n||l.setBlending(!1),l.setVertexBuffer(cy(l),0),l.setShader(t),l.draw(ly),l.setDepthTest(S),l.setDepthWrite(A),l.setCullMode(x),l.setColorWrite(P,I,E,O),l.updateEnd(),l.setRenderTarget(r),l.updateBegin(),l.setViewport(_,m,g,w),l.setScissor(v,y,T,C)}class em{constructor(){this.globalId=0,this.revision=0}equals(e){return this.globalId===e.globalId&&this.revision===e.revision}copy(e){this.globalId=e.globalId,this.revision=e.revision}reset(){this.globalId=0,this.revision=0}}let tu=0;class dy{constructor(){tu++,this.version=new em,this.version.globalId=tu}increment(){this.version.revision++}}class uy{constructor(e){this.name=e,this.value=null,this.versionObject=new dy}toJSON(e){}setValue(e){this.value=e,this.versionObject.increment()}getValue(){return this.value}}class fy{constructor(e){this.name=e,this.variables=new Map}resolve(e){return this.variables.has(e)||this.variables.set(e,new uy(e)),this.variables.get(e)}removeValue(e){for(const t in this.variables){const s=this.variables[t];s.value===e&&(s.value=null)}}}const su="resizecanvas";class od extends le{constructor(e){super(),this.canvas=void 0,this.deviceType=void 0,this.scope=void 0,this.boneLimit=void 0,this.maxAnisotropy=void 0,this.maxCubeMapSize=void 0,this.maxTextureSize=void 0,this.maxVolumeSize=void 0,this.precision=void 0,this.renderTarget=null,this.insideRenderPass=!1,this.supportsInstancing=void 0,this.supportsUniformBuffers=!1,this.textureFloatRenderable=void 0,this.textureHalfFloatRenderable=void 0,this.canvas=e,this._width=0,this._height=0,this._maxPixelRatio=1,this.shaders=[],this.buffers=[],this.textures=[],this.targets=[],this._vram={tex:0,vb:0,ib:0,ub:0},this._shaderStats={vsCompiled:0,fsCompiled:0,linked:0,materialShaders:0,compileTime:0},this.initializeContextCaches(),this._drawCallsPerFrame=0,this._shaderSwitchesPerFrame=0,this._primsPerFrame=[];for(let t=na;t<=ji;t++)this._primsPerFrame[t]=0;this._renderTargetCreationTime=0,this.scope=new fy("Device"),this.textureBias=this.scope.resolve("textureBias"),this.textureBias.setValue(0)}destroy(){this.fire("destroy")}onDestroyShader(e){this.fire("destroy:shader",e);const t=this.shaders.indexOf(e);t!==-1&&this.shaders.splice(t,1)}postDestroy(){this.scope=null,this.canvas=null}toJSON(e){}initializeContextCaches(){this.indexBuffer=null,this.vertexBuffers=[],this.shader=null,this.renderTarget=null}setRenderTarget(e){this.renderTarget=e}setIndexBuffer(e){this.indexBuffer=e}setVertexBuffer(e){e&&this.vertexBuffers.push(e)}getRenderTarget(){return this.renderTarget}initRenderTarget(e){e.initialized||(e.init(),this.targets.push(e))}_isBrowserInterface(e){return this._isImageBrowserInterface(e)||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement}_isImageBrowserInterface(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement}resizeCanvas(e,t){this._width=e,this._height=t;const s=Math.min(this._maxPixelRatio,st.browser?window.devicePixelRatio:1);e=Math.floor(e*s),t=Math.floor(t*s),(this.canvas.width!==e||this.canvas.height!==t)&&(this.canvas.width=e,this.canvas.height=t,this.fire(su,e,t))}setResolution(e,t){this._width=e,this._height=t,this.canvas.width=e,this.canvas.height=t,this.fire(su,e,t)}updateClientRect(){this.clientRect=this.canvas.getBoundingClientRect()}get width(){return this.canvas.width}get height(){return this.canvas.height}set fullscreen(e){}get fullscreen(){return!1}set maxPixelRatio(e){this._maxPixelRatio=e,this.resizeCanvas(this._width,this._height)}get maxPixelRatio(){return this._maxPixelRatio}getBoneLimit(){return this.boneLimit}setBoneLimit(e){this.boneLimit=e}}let py=0;class mi{constructor(e,t,s,i=Rt,n){this.device=e,this.format=t,this.numIndices=s,this.usage=i,this.id=py++,this.impl=e.createIndexBufferImpl(this);const r=ny[t];this.bytesPerIndex=r,this.numBytes=this.numIndices*r,n?this.setData(n):this.storage=new ArrayBuffer(this.numBytes),this.adjustVramSizeTracking(e._vram,this.numBytes),this.device.buffers.push(this)}destroy(){const e=this.device,t=e.buffers.indexOf(this);t!==-1&&e.buffers.splice(t,1),this.device.indexBuffer===this&&(this.device.indexBuffer=null),this.impl.initialized&&(this.impl.destroy(e),this.adjustVramSizeTracking(e._vram,-this.storage.byteLength))}adjustVramSizeTracking(e,t){e.ib+=t}loseContext(){this.impl.loseContext()}getFormat(){return this.format}getNumIndices(){return this.numIndices}lock(){return this.storage}unlock(){this.impl.unlock(this)}setData(e){return e.byteLength!==this.numBytes?!1:(this.storage=e,this.unlock(),!0)}_lockTypedArray(){const e=this.lock();return this.format===qi?new Uint32Array(e):this.format===Bs?new Uint16Array(e):new Uint8Array(e)}writeData(e,t){const s=this._lockTypedArray();if(e.length>t)if(ArrayBuffer.isView(e))e=e.subarray(0,t),s.set(e);else for(let i=0;i<t;i++)s[i]=e[i];else s.set(e);this.unlock()}readData(e){const t=this._lockTypedArray(),s=this.numIndices;if(ArrayBuffer.isView(e))e.set(t);else{e.length=0;for(let i=0;i<s;i++)e[i]=t[i]}return s}}const my={depth:!0,face:0};let _y=0;class ht{constructor(e){var t,s;this.id=_y++;const i=arguments[1],n=arguments[2];if(e instanceof od?(this._colorBuffer=i,e=n):this._colorBuffer=e.colorBuffer,this._colorBuffer&&(this._colorBuffer._isRenderTarget=!0),e=e!==void 0?e:my,this._depthBuffer=e.depthBuffer,this._face=e.face!==void 0?e.face:0,this._depthBuffer){const h=this._depthBuffer._format;h===Vr?(this._depth=!0,this._stencil=!1):h===yl?(this._depth=!0,this._stencil=!0):(this._depth=!1,this._stencil=!1)}else this._depth=e.depth!==void 0?e.depth:!0,this._stencil=e.stencil!==void 0?e.stencil:!1;const r=((t=this._colorBuffer)==null?void 0:t.device)||((s=this._depthBuffer)==null?void 0:s.device)||e.graphicsDevice;if(this._device=r,this._samples=e.samples!==void 0?Math.min(e.samples,this._device.maxSamples):1,this.autoResolve=e.autoResolve!==void 0?e.autoResolve:!0,this.name=e.name,!this.name){var a;this.name=(a=this._colorBuffer)==null?void 0:a.name}if(!this.name){var o;this.name=(o=this._depthBuffer)==null?void 0:o.name}this.name||(this.name="Untitled"),this.flipY=!!e.flipY,this.impl=r.createRenderTargetImpl(this)}destroy(){const e=this._device;if(e){const t=e.targets.indexOf(this);t!==-1&&e.targets.splice(t,1),e.renderTarget===this&&e.setRenderTarget(null),this.destroyFrameBuffers()}}destroyFrameBuffers(){const e=this._device;e&&this.impl.destroy(e)}destroyTextureBuffers(){this._depthBuffer&&(this._depthBuffer.destroy(),this._depthBuffer=null),this._colorBuffer&&(this._colorBuffer.destroy(),this._colorBuffer=null)}init(){this.impl.init(this._device,this)}get initialized(){return this.impl.initialized}loseContext(){this.impl.loseContext()}resolve(e=!0,t=!!this._depthBuffer){this._device&&this._samples>1&&this.impl.resolve(this._device,this,e,t)}copy(e,t,s){if(!this._device)if(e._device)this._device=e._device;else return!1;return this._device.copyRenderTarget(e,this,t,s)}get samples(){return this._samples}get depth(){return this._depth}get stencil(){return this._stencil}get colorBuffer(){return this._colorBuffer}get depthBuffer(){return this._depthBuffer}get face(){return this._face}get width(){var e,t;return((e=this._colorBuffer)==null?void 0:e.width)||((t=this._depthBuffer)==null?void 0:t.width)||this._device.width}get height(){var e,t;return((e=this._colorBuffer)==null?void 0:e.height)||((t=this._depthBuffer)==null?void 0:t.height)||this._device.height}}const Ks=/[ \t]*#(ifn?def|if|endif|else|elif|define|undef|extension)/g,iu=/define[ \t]+([^\n]+)\r?(?:\n|$)/g,nu=/extension[ \t]+([\w-]+)[ \t]*:[ \t]*enable/g,ru=/undef[ \t]+([^\n]+)\r?(?:\n|$)/g,jl=/(ifdef|ifndef|if)[ \t]*([^\r\n]+)\r?\n/g,Yl=/(endif|else|elif)([ \t]+[^\r\n]+)?\r?(?:\n|$)/g,au=/([\w-]+)/,gy=/(!|\s)?defined\(([\w-]+)\)/,yy=/[><=|&+-]/g;class ni{static run(e){return e=e.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1"),e=e.split(/\r?\n/).map(t=>t.trimEnd()).join(`
`),e=this._preprocess(e),e!==null&&(e=e.split(/\r?\n/).map(t=>t.trim()===""?"":t).join(`
`),e=e.replace(/(\n\n){3,}/gm,`

`)),e}static _preprocess(e){const t=e,s=[];let i=!1;const n=new Map;let r;for(;(r=Ks.exec(e))!==null;){const a=r[1];switch(a){case"define":{iu.lastIndex=r.index;const o=iu.exec(e);i||(i=o===null);const h=o[1];au.lastIndex=o.index;const d=au.exec(h)[1];let u=h.substring(d.length).trim();u===""&&(u="true"),ni._keep(s)&&n.set(d,u),Ks.lastIndex=o.index+o[0].length;break}case"undef":{ru.lastIndex=r.index;const o=ru.exec(e),h=o[1].trim();ni._keep(s)&&n.delete(h),Ks.lastIndex=o.index+o[0].length;break}case"extension":{nu.lastIndex=r.index;const o=nu.exec(e);if(i||(i=o===null),o){const h=o[1];ni._keep(s)&&n.set(h,"true")}Ks.lastIndex=o.index+o[0].length;break}case"ifdef":case"ifndef":case"if":{jl.lastIndex=r.index;const o=jl.exec(e),h=o[2],c=ni.evaluate(h,n);i||(i=c.error);let d=c.result;a==="ifndef"&&(d=!d),s.push({anyKeep:d,keep:d,start:r.index,end:jl.lastIndex}),Ks.lastIndex=o.index+o[0].length;break}case"endif":case"else":case"elif":{Yl.lastIndex=r.index;const o=Yl.exec(e),h=s.pop(),c=h.keep?e.substring(h.end,r.index):"";e=e.substring(0,h.start)+c+e.substring(Yl.lastIndex),Ks.lastIndex=h.start+c.length;const d=o[1];if(d==="else"||d==="elif"){let u=!1;if(!h.anyKeep)if(d==="else")u=!h.keep;else{const f=ni.evaluate(o[2],n);u=f.result,i||(i=f.error)}s.push({anyKeep:h.anyKeep||u,keep:u,start:Ks.lastIndex,end:Ks.lastIndex})}break}}}return i?(console.warn("Failed to preprocess shader: ",{source:t}),t):e}static _keep(e){for(let t=0;t<e.length;t++)if(!e[t].keep)return!1;return!0}static evaluate(e,t){const s=yy.exec(e)===null;let i=!1;const n=gy.exec(e);n&&(i=n[1]==="!",e=n[2]),e=e.trim();let r=t.has(e);return i&&(r=!r),{result:r,error:!s}}}let xy=0;class qn{constructor(e,t){this.meshUniformBufferFormat=void 0,this.meshBindGroupFormat=void 0,this.id=xy++,this.device=e,this.definition=t,this.name=t.name||"Untitled",t.vshader=ni.run(t.vshader),t.fshader=ni.run(t.fshader),this.init(),this.impl=e.createShaderImpl(this)}init(){this.ready=!1,this.failed=!1}destroy(){this.device.onDestroyShader(this),this.impl.destroy(this)}loseContext(){this.init(),this.impl.loseContext()}restoreContext(){this.impl.restoreContext(this.device,this)}}let ze=null,et=null,vy=0;class ae{constructor(e,t){this.id=vy++,this.device=e,this.name=null,this._width=4,this._height=4,this._depth=1,this._format=he,this.type=Nt,this.projection=jg,this._cubemap=!1,this._volume=!1,this.fixCubemapSeams=!1,this._flipY=!1,this._premultiplyAlpha=!1,this._isRenderTarget=!1,this._mipmaps=!0,this._minFilter=Xi,this._magFilter=$e,this._anisotropy=1,this._addressU=it,this._addressV=it,this._addressW=it,this._compareOnRead=!1,this._compareFunc=td,t!==void 0&&(t.name!==void 0&&(this.name=t.name),this._width=t.width!==void 0?t.width:this._width,this._height=t.height!==void 0?t.height:this._height,this._format=t.format!==void 0?t.format:this._format,t.hasOwnProperty("type")?this.type=t.type:t.hasOwnProperty("rgbm")?this.type=t.rgbm?pi:Nt:t.hasOwnProperty("swizzleGGGR")&&(this.type=t.swizzleGGGR?El:Nt),t.mipmaps!==void 0?this._mipmaps=t.mipmaps:this._mipmaps=t.autoMipmap!==void 0?t.autoMipmap:this._mipmaps,this._levels=t.levels,this._cubemap=t.cubemap!==void 0?t.cubemap:this._cubemap,this.fixCubemapSeams=t.fixCubemapSeams!==void 0?t.fixCubemapSeams:this.fixCubemapSeams,this._cubemap?this.projection=sc:t.projection&&t.projection!==sc&&(this.projection=t.projection),this._minFilter=t.minFilter!==void 0?t.minFilter:this._minFilter,this._magFilter=t.magFilter!==void 0?t.magFilter:this._magFilter,this._anisotropy=t.anisotropy!==void 0?t.anisotropy:this._anisotropy,this._addressU=t.addressU!==void 0?t.addressU:this._addressU,this._addressV=t.addressV!==void 0?t.addressV:this._addressV,this._compareOnRead=t.compareOnRead!==void 0?t.compareOnRead:this._compareOnRead,this._compareFunc=t._compareFunc!==void 0?t._compareFunc:this._compareFunc,this._flipY=t.flipY!==void 0?t.flipY:this._flipY,this._premultiplyAlpha=t.premultiplyAlpha!==void 0?t.premultiplyAlpha:this._premultiplyAlpha,e.webgl2&&(this._depth=t.depth!==void 0?t.depth:this._depth,this._volume=t.volume!==void 0?t.volume:this._volume,this._addressW=t.addressW!==void 0?t.addressW:this._addressW)),this._compressed=this._format===kn||this._format===Pr||this._format===Gi||this._format>=Gr,this._invalid=!1,this._lockedLevel=-1,this._levels||(this._levels=this._cubemap?[[null,null,null,null,null,null]]:[null]),this.dirtyAll(),this._gpuSize=0,this.impl=e.createTextureImpl(this),e.textures.push(this)}destroy(){if(this.device){const e=this.device,t=e.textures.indexOf(this);t!==-1&&e.textures.splice(t,1),e.scope.removeValue(this),this.impl.destroy(e),this.adjustVramSizeTracking(e._vram,-this._gpuSize),this._levels=null,this.device=null}}loseContext(){this.impl.loseContext(),this.dirtyAll()}adjustVramSizeTracking(e,t){e.tex+=t}set minFilter(e){this._minFilter!==e&&(this._minFilter=e,this._parameterFlags|=1)}get minFilter(){return this._minFilter}set magFilter(e){this._magFilter!==e&&(this._magFilter=e,this._parameterFlags|=2)}get magFilter(){return this._magFilter}set addressU(e){this._addressU!==e&&(this._addressU=e,this._parameterFlags|=4)}get addressU(){return this._addressU}set addressV(e){this._addressV!==e&&(this._addressV=e,this._parameterFlags|=8)}get addressV(){return this._addressV}set addressW(e){this.device.webgl2&&this._volume&&e!==this._addressW&&(this._addressW=e,this._parameterFlags|=16)}get addressW(){return this._addressW}set compareOnRead(e){this._compareOnRead!==e&&(this._compareOnRead=e,this._parameterFlags|=32)}get compareOnRead(){return this._compareOnRead}set compareFunc(e){this._compareFunc!==e&&(this._compareFunc=e,this._parameterFlags|=64)}get compareFunc(){return this._compareFunc}set anisotropy(e){this._anisotropy!==e&&(this._anisotropy=e,this._parameterFlags|=128)}get anisotropy(){return this._anisotropy}set autoMipmap(e){this._mipmaps=e}get autoMipmap(){return this._mipmaps}set mipmaps(e){this._mipmaps!==e&&(this._mipmaps=e,e&&(this._needsMipmapsUpload=!0))}get mipmaps(){return this._mipmaps}get width(){return this._width}get height(){return this._height}get depth(){return this._depth}get format(){return this._format}get cubemap(){return this._cubemap}get gpuSize(){const e=this.pot&&this._mipmaps&&!(this._compressed&&this._levels.length===1);return ae.calcGpuSize(this._width,this._height,this._depth,this._format,e,this._cubemap)}get volume(){return this._volume}set flipY(e){this._flipY!==e&&(this._flipY=e,this._needsUpload=!0)}get flipY(){return this._flipY}set premultiplyAlpha(e){this._premultiplyAlpha!==e&&(this._premultiplyAlpha=e,this._needsUpload=!0)}get premultiplyAlpha(){return this._premultiplyAlpha}get pot(){return k.powerOfTwo(this._width)&&k.powerOfTwo(this._height)}get encoding(){switch(this.type){case pi:return"rgbm";case ad:return"rgbe";case Hp:return"rgbp";default:return this.format===Er||this.format===Rr||this.format===gt||this.format===nt?"linear":"srgb"}}static calcGpuSize(e,t,s,i,n,r){ze||(ze=[],ze[Kh]=1,ze[Zh]=1,ze[wo]=2,ze[To]=2,ze[Jh]=2,ze[Co]=2,ze[ks]=4,ze[he]=4,ze[Er]=8,ze[gt]=8,ze[Rr]=16,ze[nt]=16,ze[Op]=4,ze[Vr]=4,ze[yl]=4,ze[xl]=4,ze[sd]=4,ze[id]=4),et||(et=[],et[Gr]=8,et[nd]=8,et[Wr]=8,et[Hr]=8,et[vl]=8,et[Sl]=8,et[kn]=8,et[kp]=8,et[rd]=16,et[Pr]=16,et[Gi]=16,et[Bp]=16,et[zp]=16);const a=ze.hasOwnProperty(i)?ze[i]:0,o=et.hasOwnProperty(i)?et[i]:0;let h=0;for(;;){if(a>0)h+=e*t*s*a;else{let c=Math.floor((e+3)/4);const d=Math.floor((t+3)/4),u=Math.floor((s+3)/4);(i===Wr||i===Hr)&&(c=Math.max(Math.floor(c/2),1)),h+=c*d*u*o}if(!n||e===1&&t===1&&s===1)break;e=Math.max(Math.floor(e/2),1),t=Math.max(Math.floor(t/2),1),s=Math.max(Math.floor(s/2),1)}return h*(r?6:1)}dirtyAll(){this._levelsUpdated=this._cubemap?[[!0,!0,!0,!0,!0,!0]]:[!0],this._needsUpload=!0,this._needsMipmapsUpload=this._mipmaps,this._mipmapsUploaded=!1,this._parameterFlags=255}lock(e={}){if(e.level===void 0&&(e.level=0),e.face===void 0&&(e.face=0),e.mode===void 0&&(e.mode=Hg),this._lockedLevel=e.level,this._levels[e.level]===null)switch(this._format){case Kh:case Zh:this._levels[e.level]=new Uint8Array(this._width*this._height*this._depth);break;case wo:this._levels[e.level]=new Uint8Array(this._width*this._height*this._depth*2);break;case To:case Jh:case Co:this._levels[e.level]=new Uint16Array(this._width*this._height*this._depth);break;case ks:this._levels[e.level]=new Uint8Array(this._width*this._height*this._depth*3);break;case he:this._levels[e.level]=new Uint8Array(this._width*this._height*this._depth*4);break;case kn:this._levels[e.level]=new Uint8Array(Math.floor((this._width+3)/4)*Math.floor((this._height+3)/4)*8*this._depth);break;case Pr:case Gi:this._levels[e.level]=new Uint8Array(Math.floor((this._width+3)/4)*Math.floor((this._height+3)/4)*16*this._depth);break;case Er:this._levels[e.level]=new Uint16Array(this._width*this._height*this._depth*3);break;case Rr:this._levels[e.level]=new Float32Array(this._width*this._height*this._depth*3);break;case gt:this._levels[e.level]=new Uint16Array(this._width*this._height*this._depth*4);break;case nt:this._levels[e.level]=new Float32Array(this._width*this._height*this._depth*4);break}return this._levels[e.level]}setSource(e,t=0){let s=!1,i,n;if(this._cubemap){if(e[0]){i=e[0].width||0,n=e[0].height||0;for(let r=0;r<6;r++){const a=e[r];if(!a||a.width!==i||a.height!==n||!this.device._isBrowserInterface(a)){s=!0;break}}}else s=!0;if(!s)for(let r=0;r<6;r++)this._levels[t][r]!==e[r]&&(this._levelsUpdated[t][r]=!0)}else this.device._isBrowserInterface(e)||(s=!0),s||(e!==this._levels[t]&&(this._levelsUpdated[t]=!0),i=e.width,n=e.height);if(s)if(this._width=4,this._height=4,this._cubemap)for(let r=0;r<6;r++)this._levels[t][r]=null,this._levelsUpdated[t][r]=!0;else this._levels[t]=null,this._levelsUpdated[t]=!0;else t===0&&(this._width=i,this._height=n),this._levels[t]=e;(this._invalid!==s||!s)&&(this._invalid=s,this.upload())}getSource(e=0){return this._levels[e]}unlock(){this._lockedLevel,this.upload(),this._lockedLevel=-1}upload(){this._needsUpload=!0,this._needsMipmapsUpload=this._mipmaps}getDds(){let e=128,t=0;for(;this._levels[t];){if(this.cubemap)for(let v=0;v<6;v++){if(!this._levels[t][v])return;const y=this._levels[t][v].length;if(!y)return;e+=y}else{const v=this._levels[t].length;if(!v)return;e+=v}e+=this._levels[t].length,t++}const s=new ArrayBuffer(e),i=new Uint32Array(s,0,128/4),n=542327876,r=124,a=528391,o=131072,h=32,c=65,d=4096,u=4194304,f=8,p=65024;let _=a;this._levels.length>1&&(_|=o);let m=d;this._levels.length>1&&(m|=u),(this._levels.length>1||this.cubemap)&&(m|=f);const g=this.cubemap?p:0;i[0]=n,i[1]=r,i[2]=_,i[3]=this.height,i[4]=this.width,i[5]=this.width*this.height*4,i[6]=0,i[7]=this._levels.length;for(let v=0;v<11;v++)i[8+v]=0;i[19]=h,i[20]=c,i[21]=0,i[22]=32,i[23]=16711680,i[24]=65280,i[25]=255,i[26]=4278190080,i[27]=m,i[28]=g,i[29]=0,i[30]=0,i[31]=0;let w=128;if(this.cubemap)for(let v=0;v<6;v++)for(let y=0;y<this._levels.length;y++){const T=this._levels[y][v],C=new Uint8Array(s,w,T.length);for(let S=0;S<T.length;S++)C[S]=T[S];w+=T.length}else for(let v=0;v<this._levels.length;v++){const y=this._levels[v],T=new Uint8Array(s,w,y.length);for(let C=0;C<y.length;C++)T[C]=y[C];w+=y.length}return s}}var tm=`
#define texture2DBias texture2D

#ifndef SUPPORTS_TEXLOD

// fallback for lod instructions
#define texture2DLodEXT texture2D
#define texture2DProjLodEXT textureProj
#define textureCubeLodEXT textureCube
#define textureShadow texture2D

#else

#define textureShadow(res, uv) texture2DGradEXT(res, uv, vec2(1, 1), vec2(1, 1))

#endif

`,sm=`
#define varying in
out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define texture2D texture
#define texture2DBias texture
#define textureCube texture
#define texture2DProj textureProj
#define texture2DLodEXT textureLod
#define texture2DProjLodEXT textureProjLod
#define textureCubeLodEXT textureLod
#define texture2DGradEXT textureGrad
#define texture2DProjGradEXT textureProjGrad
#define textureCubeGradEXT textureGrad

// sample shadows using textureGrad to remove derivates in the dynamic loops (which are used by
// clustered lighting) - as DirectX shader compiler tries to unroll the loops and takes long time
// to compile the shader. Using textureLod would be even better, but WebGl does not translate it to
// lod instruction for DirectX correctly and uses SampleCmp instead of SampleCmpLevelZero or similar.
#define textureShadow(res, uv) textureGrad(res, uv, vec2(1, 1), vec2(1, 1))

#define GL2
#define SUPPORTS_TEXLOD
`,im=`
#define attribute in
#define varying out
#define texture2D texture
#define GL2
#define VERTEXSHADER
`,nm=`

layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor

#define texture2D(res, uv) texture(sampler2D(res, res ## _sampler), uv)
#define texture2DBias(res, uv, bias) texture(sampler2D(res, res ## _sampler), uv, bias)
#define texture2DLodEXT(res, uv, lod) textureLod(sampler2D(res, res ## _sampler), uv, lod)

// TODO: implement other texture sampling macros
// #define textureCube texture
// #define texture2DProj textureProj
// #define texture2DProjLodEXT textureProjLod
// #define textureCubeLodEXT textureLod
// #define texture2DGradEXT textureGrad
// #define texture2DProjGradEXT textureProjGrad
// #define textureCubeGradEXT textureGrad
#define GL2
#define SUPPORTS_TEXLOD
`,rm=`
#define texture2D(res, uv) texture(sampler2D(res, res ## _sampler), uv)

#define GL2
#define VERTEXSHADER
`;const Sy={vertex_position:Ne,vertex_normal:xt,vertex_tangent:ps,vertex_texCoord0:It,vertex_texCoord1:yi,vertex_texCoord2:wl,vertex_texCoord3:Tl,vertex_texCoord4:Cl,vertex_texCoord5:Al,vertex_texCoord6:Ml,vertex_texCoord7:Pl,vertex_color:lt,vertex_boneIndices:Et,vertex_boneWeights:ms};class Ke{static createDefinition(e,t){var s,i;const n=(u,f,p,_)=>e.deviceType===Qd?u:e.webgl2?f:Ke.gl1Extensions(e,t)+p,r=(s=t.name)!=null?s:"Untitled",a=t.vertexDefines||n(rm,im,""),o=Ke.versionCode(e)+a+Ke.getShaderNameCode(r)+t.vertexCode,h=t.fragmentDefines||n(nm,sm,tm),c=(t.fragmentPreamble||"")+Ke.versionCode(e)+Ke.precisionCode(e)+`
`+h+Ke.getShaderNameCode(r)+(t.fragmentCode||Ke.dummyFragmentCode()),d=(i=t.attributes)!=null?i:Ke.collectAttributes(t.vertexCode);return{name:r,attributes:d,vshader:o,fshader:c,useTransformFeedback:t.useTransformFeedback}}static getShaderNameCode(e){return`#define SHADER_NAME ${e}
`}static gl1Extensions(e,t,s){let i;return s?i=t.vertexExtensions?`${t.vertexExtensions}
`:"":(i=t.fragmentExtensions?`${t.fragmentExtensions}
`:"",e.extStandardDerivatives&&(i+=`#extension GL_OES_standard_derivatives : enable
`),e.extTextureLod&&(i+=`#extension GL_EXT_shader_texture_lod : enable
`,i+=`#define SUPPORTS_TEXLOD
`)),i}static dummyFragmentCode(){return"void main(void) {gl_FragColor = vec4(0.0);}"}static versionCode(e){return e.deviceType===Qd?`#version 450
`:e.webgl2?`#version 300 es
`:""}static precisionCode(e,t){let s="";if(e.deviceType===Jp){t&&t!=="highp"&&t!=="mediump"&&t!=="lowp"&&(t=null),t&&(t==="highp"&&e.maxPrecision!=="highp"&&(t="mediump"),t==="mediump"&&e.maxPrecision==="lowp"&&(t="lowp"));const i=t||e.precision;s=`precision ${i} float;
`,e.webgl2&&(s+=`precision ${i} sampler2DShadow;
`)}return s}static collectAttributes(e){const t={};let s=0,i=e.indexOf("attribute");for(;i>=0&&!(i>0&&e[i-1]==="/");){const n=e.indexOf(";",i),r=e.lastIndexOf(" ",n),a=e.substring(r+1,n),o=Sy[a];o!==void 0?t[a]=o:(t[a]="ATTR"+s,s++),i=e.indexOf("attribute",i+1)}return t}}function by(l){this.array[this.index]=l}function wy(l,e){this.array[this.index]=l,this.array[this.index+1]=e}function Ty(l,e,t){this.array[this.index]=l,this.array[this.index+1]=e,this.array[this.index+2]=t}function Cy(l,e,t,s){this.array[this.index]=l,this.array[this.index+1]=e,this.array[this.index+2]=t,this.array[this.index+3]=s}function Ay(l,e,t){this.array[l]=e[t]}function My(l,e,t){this.array[l]=e[t],this.array[l+1]=e[t+1]}function Py(l,e,t){this.array[l]=e[t],this.array[l+1]=e[t+1],this.array[l+2]=e[t+2]}function Ey(l,e,t){this.array[l]=e[t],this.array[l+1]=e[t+1],this.array[l+2]=e[t+2],this.array[l+3]=e[t+3]}function Ry(l,e,t){e[t]=this.array[l]}function Iy(l,e,t){e[t]=this.array[l],e[t+1]=this.array[l+1]}function Ly(l,e,t){e[t]=this.array[l],e[t+1]=this.array[l+1],e[t+2]=this.array[l+2]}function Dy(l,e,t){e[t]=this.array[l],e[t+1]=this.array[l+1],e[t+2]=this.array[l+2],e[t+3]=this.array[l+3]}class Fy{constructor(e,t,s){switch(this.index=0,this.numComponents=t.numComponents,s.interleaved?this.array=new zn[t.dataType](e,t.offset):this.array=new zn[t.dataType](e,t.offset,s.vertexCount*t.numComponents),this.stride=t.stride/this.array.constructor.BYTES_PER_ELEMENT,t.numComponents){case 1:this.set=by,this.getToArray=Ry,this.setFromArray=Ay;break;case 2:this.set=wy,this.getToArray=Iy,this.setFromArray=My;break;case 3:this.set=Ty,this.getToArray=Ly,this.setFromArray=Py;break;case 4:this.set=Cy,this.getToArray=Dy,this.setFromArray=Ey;break}}get(e){return this.array[this.index+e]}set(e,t,s,i){}getToArray(e,t,s){}setFromArray(e,t,s){}}class kr{constructor(e){this.vertexBuffer=e,this.vertexFormatSize=e.getFormat().size,this.buffer=this.vertexBuffer.lock(),this.accessors=[],this.element={};const t=this.vertexBuffer.getFormat();for(let s=0;s<t.elements.length;s++){const i=t.elements[s];this.accessors[s]=new Fy(this.buffer,i,t),this.element[i.name]=this.accessors[s]}}next(e=1){let t=0;const s=this.accessors,i=this.accessors.length;for(;t<i;){const n=s[t++];n.index+=e*n.stride}}end(){this.vertexBuffer.unlock()}writeData(e,t,s){const i=this.element[e];if(i){s>this.vertexBuffer.numVertices&&(s=this.vertexBuffer.numVertices);const n=i.numComponents;if(this.vertexBuffer.getFormat().interleaved){let r=0;for(let a=0;a<s;a++)i.setFromArray(r,t,a*n),r+=i.stride}else if(t.length>s*n){const r=s*n;if(ArrayBuffer.isView(t))t=t.subarray(0,r),i.array.set(t);else for(let a=0;a<r;a++)i.array[a]=t[a]}else i.array.set(t)}}readData(e,t){const s=this.element[e];let i=0;if(s){i=this.vertexBuffer.numVertices;let n;const r=s.numComponents;if(this.vertexBuffer.getFormat().interleaved){Array.isArray(t)&&(t.length=0),s.index=0;let a=0;for(n=0;n<i;n++)s.getToArray(a,t,n*r),a+=s.stride}else if(ArrayBuffer.isView(t))t.set(s.array);else{t.length=0;const a=i*r;for(n=0;n<a;n++)t[n]=s.array[n]}}return i}}class am{constructor(){this.bufferId=null}destroy(e){this.bufferId&&(e.gl.deleteBuffer(this.bufferId),this.bufferId=null)}get initialized(){return!!this.bufferId}loseContext(){this.bufferId=null}unlock(e,t,s,i){const n=e.gl;this.bufferId||(this.bufferId=n.createBuffer());let r;switch(t){case Rt:r=n.STATIC_DRAW;break;case Nr:r=n.DYNAMIC_DRAW;break;case Rg:r=n.STREAM_DRAW;break;case Ig:e.webgl2?r=n.DYNAMIC_COPY:r=n.STATIC_DRAW;break}n.bindBuffer(s,this.bufferId),n.bufferData(s,i,r)}}class Oy extends am{constructor(...e){super(...e),this.vao=null}destroy(e){super.destroy(e),e.boundVao=null,e.gl.bindVertexArray(null)}loseContext(){super.loseContext(),this.vao=null}unlock(e){const t=e.device;super.unlock(t,e.usage,t.gl.ARRAY_BUFFER,e.storage)}}class By extends am{constructor(e){super();const t=e.device.gl,s=e.format;s===Fp?this.glFormat=t.UNSIGNED_BYTE:s===Bs?this.glFormat=t.UNSIGNED_SHORT:s===qi&&(this.glFormat=t.UNSIGNED_INT)}unlock(e){const t=e.device;super.unlock(t,e.usage,t.gl.ELEMENT_ARRAY_BUFFER,e.storage)}}class ou{constructor(e,t,s,i){if(this.locationId=i,this.scopeId=e.scope.resolve(t),this.version=new em,t.substring(t.length-3)==="[0]")switch(s){case Xr:s=Yp;break;case qr:s=$p;break;case jr:s=Kp;break;case Yr:s=Zp;break}this.dataType=s,this.value=[null,null,null,null],this.array=[]}}const ky=["gl_VertexID","gl_InstanceID","gl_DrawID","gl_BaseVertex","gl_BaseInstance"];class zy{constructor(e){this.compileDuration=0,this.init(),this.compileAndLink(e.device,e),e.device.shaders.push(e)}destroy(e){this.glProgram&&(e.device.gl.deleteProgram(this.glProgram),this.glProgram=null)}init(){this.uniforms=[],this.samplers=[],this.attributes=[],this.glProgram=null,this.glVertexShader=null,this.glFragmentShader=null}loseContext(){this.init()}restoreContext(e,t){this.compileAndLink(e,t)}compileAndLink(e,t){const s=t.definition,i=this._compileShaderSource(e,s.vshader,!0),n=this._compileShaderSource(e,s.fshader,!1),r=e.gl,a=r.createProgram();r.attachShader(a,i),r.attachShader(a,n);const o=s.attributes;if(e.webgl2&&s.useTransformFeedback){const h=[];for(const c in o)o.hasOwnProperty(c)&&h.push("out_"+c);r.transformFeedbackVaryings(a,h,r.INTERLEAVED_ATTRIBS)}for(const h in o)if(o.hasOwnProperty(h)){const c=o[h],d=ye[c];r.bindAttribLocation(a,d,h)}r.linkProgram(a),this.glVertexShader=i,this.glFragmentShader=n,this.glProgram=a}_compileShaderSource(e,t,s){const i=e.gl,n=s?e.vertexShaderCache:e.fragmentShaderCache;let r=n[t];return r||(r=i.createShader(s?i.VERTEX_SHADER:i.FRAGMENT_SHADER),i.shaderSource(r,t),i.compileShader(r),n[t]=r),r}postLink(e,t){const s=e.gl,i=this.glProgram,n=t.definition;if(!this._isCompiled(e,t,this.glVertexShader,n.vshader,"vertex")||!this._isCompiled(e,t,this.glFragmentShader,n.fshader,"fragment"))return!1;if(!s.getProgramParameter(i,s.LINK_STATUS)){const h="Failed to link shader program. Error: "+s.getProgramInfoLog(i);return console.error(h),!1}let r=0;const a=s.getProgramParameter(i,s.ACTIVE_ATTRIBUTES);for(;r<a;){const h=s.getActiveAttrib(i,r++),c=s.getAttribLocation(i,h.name);if(ky.indexOf(h.name)!==-1)continue;n.attributes[h.name]===void 0&&console.error(`Vertex shader attribute "${h.name}" is not mapped to a semantic in shader definition.`);const d=new ou(e,n.attributes[h.name],e.pcUniformType[h.type],c);this.attributes.push(d)}r=0;const o=s.getProgramParameter(i,s.ACTIVE_UNIFORMS);for(;r<o;){const h=s.getActiveUniform(i,r++),c=s.getUniformLocation(i,h.name),d=new ou(e,h.name,e.pcUniformType[h.type],c);h.type===s.SAMPLER_2D||h.type===s.SAMPLER_CUBE||e.webgl2&&(h.type===s.SAMPLER_2D_SHADOW||h.type===s.SAMPLER_CUBE_SHADOW||h.type===s.SAMPLER_3D)?this.samplers.push(d):this.uniforms.push(d)}return t.ready=!0,!0}_isCompiled(e,t,s,i,n){const r=e.gl;if(!r.getShaderParameter(s,r.COMPILE_STATUS)){const a=r.getShaderInfoLog(s),[o,h]=this._processError(i,a),c=`Failed to compile ${n} shader:

${a}
${o}`;return console.error(c),!1}return!0}_processError(e,t){const s={};let i="";if(e){const n=e.split(`
`);let r=0,a=n.length;if(t&&t.startsWith("ERROR:")){const o=t.match(/^ERROR:\s([0-9]+):([0-9]+):\s*(.+)/);o&&(s.message=o[3],s.line=parseInt(o[2],10),r=Math.max(0,s.line-6),a=Math.min(n.length,s.line+5))}for(let o=r;o<a;o++)i+=o+1+":	"+n[o]+`
`;s.source=e}return[i,s]}}function lu(l,e){const t=l.width,s=l.height;if(t>e||s>e){const i=e/Math.max(t,s),n=Math.floor(t*i),r=Math.floor(s*i),a=document.createElement("canvas");return a.width=n,a.height=r,a.getContext("2d").drawImage(l,0,0,t,s,0,0,n,r),a}return l}class Uy{constructor(){this._glTexture=null,this._glTarget=void 0,this._glFormat=void 0,this._glInternalFormat=void 0,this._glPixelType=void 0}destroy(e){if(this._glTexture){for(let t=0;t<e.textureUnits.length;t++){const s=e.textureUnits[t];for(let i=0;i<s.length;i++)s[i]===this._glTexture&&(s[i]=null)}e.gl.deleteTexture(this._glTexture),this._glTexture=null}}loseContext(){this._glTexture=null}initialize(e,t){const s=e.gl;switch(this._glTexture=s.createTexture(),this._glTarget=t._cubemap?s.TEXTURE_CUBE_MAP:t._volume?s.TEXTURE_3D:s.TEXTURE_2D,t._format){case Kh:this._glFormat=s.ALPHA,this._glInternalFormat=s.ALPHA,this._glPixelType=s.UNSIGNED_BYTE;break;case Zh:this._glFormat=s.LUMINANCE,this._glInternalFormat=s.LUMINANCE,this._glPixelType=s.UNSIGNED_BYTE;break;case wo:this._glFormat=s.LUMINANCE_ALPHA,this._glInternalFormat=s.LUMINANCE_ALPHA,this._glPixelType=s.UNSIGNED_BYTE;break;case To:this._glFormat=s.RGB,this._glInternalFormat=s.RGB,this._glPixelType=s.UNSIGNED_SHORT_5_6_5;break;case Jh:this._glFormat=s.RGBA,this._glInternalFormat=s.RGBA,this._glPixelType=s.UNSIGNED_SHORT_5_5_5_1;break;case Co:this._glFormat=s.RGBA,this._glInternalFormat=s.RGBA,this._glPixelType=s.UNSIGNED_SHORT_4_4_4_4;break;case ks:this._glFormat=s.RGB,this._glInternalFormat=e.webgl2?s.RGB8:s.RGB,this._glPixelType=s.UNSIGNED_BYTE;break;case he:this._glFormat=s.RGBA,this._glInternalFormat=e.webgl2?s.RGBA8:s.RGBA,this._glPixelType=s.UNSIGNED_BYTE;break;case kn:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTextureS3TC.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Pr:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTextureS3TC.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Gi:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTextureS3TC.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;case Gr:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTextureETC1.COMPRESSED_RGB_ETC1_WEBGL;break;case Wr:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTexturePVRTC.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;break;case Hr:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTexturePVRTC.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;break;case vl:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTexturePVRTC.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;break;case Sl:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTexturePVRTC.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;break;case nd:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTextureETC.COMPRESSED_RGB8_ETC2;break;case rd:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTextureETC.COMPRESSED_RGBA8_ETC2_EAC;break;case Bp:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTextureASTC.COMPRESSED_RGBA_ASTC_4x4_KHR;break;case kp:this._glFormat=s.RGB,this._glInternalFormat=e.extCompressedTextureATC.COMPRESSED_RGB_ATC_WEBGL;break;case zp:this._glFormat=s.RGBA,this._glInternalFormat=e.extCompressedTextureATC.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL;break;case Er:this._glFormat=s.RGB,e.webgl2?(this._glInternalFormat=s.RGB16F,this._glPixelType=s.HALF_FLOAT):(this._glInternalFormat=s.RGB,this._glPixelType=e.extTextureHalfFloat.HALF_FLOAT_OES);break;case gt:this._glFormat=s.RGBA,e.webgl2?(this._glInternalFormat=s.RGBA16F,this._glPixelType=s.HALF_FLOAT):(this._glInternalFormat=s.RGBA,this._glPixelType=e.extTextureHalfFloat.HALF_FLOAT_OES);break;case Rr:this._glFormat=s.RGB,e.webgl2?this._glInternalFormat=s.RGB32F:this._glInternalFormat=s.RGB,this._glPixelType=s.FLOAT;break;case nt:this._glFormat=s.RGBA,e.webgl2?this._glInternalFormat=s.RGBA32F:this._glInternalFormat=s.RGBA,this._glPixelType=s.FLOAT;break;case Op:this._glFormat=s.RED,this._glInternalFormat=s.R32F,this._glPixelType=s.FLOAT;break;case Vr:e.webgl2?(this._glFormat=s.DEPTH_COMPONENT,this._glInternalFormat=s.DEPTH_COMPONENT32F,this._glPixelType=s.FLOAT):(this._glFormat=s.DEPTH_COMPONENT,this._glInternalFormat=s.DEPTH_COMPONENT,this._glPixelType=s.UNSIGNED_SHORT);break;case yl:this._glFormat=s.DEPTH_STENCIL,e.webgl2?(this._glInternalFormat=s.DEPTH24_STENCIL8,this._glPixelType=s.UNSIGNED_INT_24_8):(this._glInternalFormat=s.DEPTH_STENCIL,this._glPixelType=e.extDepthTexture.UNSIGNED_INT_24_8_WEBGL);break;case xl:this._glFormat=s.RGB,this._glInternalFormat=s.R11F_G11F_B10F,this._glPixelType=s.UNSIGNED_INT_10F_11F_11F_REV;break;case sd:this._glFormat=s.RGB,this._glInternalFormat=s.SRGB8,this._glPixelType=s.UNSIGNED_BYTE;break;case id:this._glFormat=s.RGBA,this._glInternalFormat=s.SRGB8_ALPHA8,this._glPixelType=s.UNSIGNED_BYTE;break}}upload(e,t){const s=e.gl;if(!t._needsUpload&&(t._needsMipmapsUpload&&t._mipmapsUploaded||!t.pot))return;let i=0,n,r;const a=Math.log2(Math.max(t._width,t._height))+1;for(;t._levels[i]||i===0;){if(!t._needsUpload&&i===0){i++;continue}else if(i&&(!t._needsMipmapsUpload||!t._mipmaps))break;if(n=t._levels[i],i===1&&!t._compressed&&t._levels.length<a&&(s.generateMipmap(this._glTarget),t._mipmapsUploaded=!0),t._cubemap){let o;if(e._isBrowserInterface(n[0]))for(o=0;o<6;o++){if(!t._levelsUpdated[0][o])continue;let h=n[o];e._isImageBrowserInterface(h)&&(h.width>e.maxCubeMapSize||h.height>e.maxCubeMapSize)&&(h=lu(h,e.maxCubeMapSize),i===0&&(t._width=h.width,t._height=h.height)),e.setUnpackFlipY(!1),e.setUnpackPremultiplyAlpha(t._premultiplyAlpha),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,this._glInternalFormat,this._glFormat,this._glPixelType,h)}else for(r=1/Math.pow(2,i),o=0;o<6;o++){if(!t._levelsUpdated[0][o])continue;const h=n[o];t._compressed?s.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,this._glInternalFormat,Math.max(t._width*r,1),Math.max(t._height*r,1),0,h):(e.setUnpackFlipY(!1),e.setUnpackPremultiplyAlpha(t._premultiplyAlpha),s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+o,i,this._glInternalFormat,Math.max(t._width*r,1),Math.max(t._height*r,1),0,this._glFormat,this._glPixelType,h))}}else t._volume?(r=1/Math.pow(2,i),t._compressed?s.compressedTexImage3D(s.TEXTURE_3D,i,this._glInternalFormat,Math.max(t._width*r,1),Math.max(t._height*r,1),Math.max(t._depth*r,1),0,n):(e.setUnpackFlipY(!1),e.setUnpackPremultiplyAlpha(t._premultiplyAlpha),s.texImage3D(s.TEXTURE_3D,i,this._glInternalFormat,Math.max(t._width*r,1),Math.max(t._height*r,1),Math.max(t._depth*r,1),0,this._glFormat,this._glPixelType,n))):(e._isBrowserInterface(n)?(e._isImageBrowserInterface(n)&&(n.width>e.maxTextureSize||n.height>e.maxTextureSize)&&(n=lu(n,e.maxTextureSize),i===0&&(t._width=n.width,t._height=n.height)),e.setUnpackFlipY(t._flipY),e.setUnpackPremultiplyAlpha(t._premultiplyAlpha),s.texImage2D(s.TEXTURE_2D,i,this._glInternalFormat,this._glFormat,this._glPixelType,n)):(r=1/Math.pow(2,i),t._compressed?s.compressedTexImage2D(s.TEXTURE_2D,i,this._glInternalFormat,Math.max(Math.floor(t._width*r),1),Math.max(Math.floor(t._height*r),1),0,n):(e.setUnpackFlipY(!1),e.setUnpackPremultiplyAlpha(t._premultiplyAlpha),s.texImage2D(s.TEXTURE_2D,i,this._glInternalFormat,Math.max(t._width*r,1),Math.max(t._height*r,1),0,this._glFormat,this._glPixelType,n))),i===0?t._mipmapsUploaded=!1:t._mipmapsUploaded=!0);i++}if(t._needsUpload)if(t._cubemap)for(let o=0;o<6;o++)t._levelsUpdated[0][o]=!1;else t._levelsUpdated[0]=!1;!t._compressed&&t._mipmaps&&t._needsMipmapsUpload&&(t.pot||e.webgl2)&&t._levels.length===1&&(s.generateMipmap(this._glTarget),t._mipmapsUploaded=!0),t._gpuSize&&t.adjustVramSizeTracking(e._vram,-t._gpuSize),t._gpuSize=t.gpuSize,t.adjustVramSizeTracking(e._vram,t._gpuSize)}}class Ny{constructor(){this._glFrameBuffer=null,this._glDepthBuffer=null,this._glResolveFrameBuffer=null,this._glMsaaColorBuffer=null,this._glMsaaDepthBuffer=null}destroy(e){const t=e.gl;this._glFrameBuffer&&(t.deleteFramebuffer(this._glFrameBuffer),this._glFrameBuffer=null),this._glDepthBuffer&&(t.deleteRenderbuffer(this._glDepthBuffer),this._glDepthBuffer=null),this._glResolveFrameBuffer&&(t.deleteFramebuffer(this._glResolveFrameBuffer),this._glResolveFrameBuffer=null),this._glMsaaColorBuffer&&(t.deleteRenderbuffer(this._glMsaaColorBuffer),this._glMsaaColorBuffer=null),this._glMsaaDepthBuffer&&(t.deleteRenderbuffer(this._glMsaaDepthBuffer),this._glMsaaDepthBuffer=null)}get initialized(){return this._glFrameBuffer!==null}init(e,t){const s=e.gl;this._glFrameBuffer=s.createFramebuffer(),e.setFramebuffer(this._glFrameBuffer);const i=t._colorBuffer;i&&(i.impl._glTexture||(i._width=Math.min(i.width,e.maxRenderBufferSize),i._height=Math.min(i.height,e.maxRenderBufferSize),e.setTexture(i,0)),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,i._cubemap?s.TEXTURE_CUBE_MAP_POSITIVE_X+t._face:s.TEXTURE_2D,i.impl._glTexture,0));const n=t._depthBuffer;if(n)n.impl._glTexture||(n._width=Math.min(n.width,e.maxRenderBufferSize),n._height=Math.min(n.height,e.maxRenderBufferSize),e.setTexture(n,0)),t._stencil?s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,n._cubemap?s.TEXTURE_CUBE_MAP_POSITIVE_X+t._face:s.TEXTURE_2D,t._depthBuffer.impl._glTexture,0):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,n._cubemap?s.TEXTURE_CUBE_MAP_POSITIVE_X+t._face:s.TEXTURE_2D,t._depthBuffer.impl._glTexture,0);else if(t._depth&&!(t._samples>1&&e.webgl2)){if(this._glDepthBuffer||(this._glDepthBuffer=s.createRenderbuffer()),s.bindRenderbuffer(s.RENDERBUFFER,this._glDepthBuffer),t._stencil)s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,this._glDepthBuffer);else{const a=e.webgl2?s.DEPTH_COMPONENT32F:s.DEPTH_COMPONENT16;s.renderbufferStorage(s.RENDERBUFFER,a,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,this._glDepthBuffer)}s.bindRenderbuffer(s.RENDERBUFFER,null)}e.webgl2&&t._samples>1&&(this._glResolveFrameBuffer=this._glFrameBuffer,this._glFrameBuffer=s.createFramebuffer(),e.setFramebuffer(this._glFrameBuffer),i&&(this._glMsaaColorBuffer||(this._glMsaaColorBuffer=s.createRenderbuffer()),s.bindRenderbuffer(s.RENDERBUFFER,this._glMsaaColorBuffer),s.renderbufferStorageMultisample(s.RENDERBUFFER,t._samples,i.impl._glInternalFormat,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,this._glMsaaColorBuffer)),t._depth&&(this._glMsaaDepthBuffer||(this._glMsaaDepthBuffer=s.createRenderbuffer()),s.bindRenderbuffer(s.RENDERBUFFER,this._glMsaaDepthBuffer),t._stencil?(s.renderbufferStorageMultisample(s.RENDERBUFFER,t._samples,s.DEPTH24_STENCIL8,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,this._glMsaaDepthBuffer)):(s.renderbufferStorageMultisample(s.RENDERBUFFER,t._samples,s.DEPTH_COMPONENT32F,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,this._glMsaaDepthBuffer))))}_checkFbo(e,t,s=""){const i=e.gl;switch(i.checkFramebufferStatus(i.FRAMEBUFFER)){case i.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:break;case i.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:break;case i.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:break;case i.FRAMEBUFFER_UNSUPPORTED:break}}loseContext(){this._glFrameBuffer=null,this._glDepthBuffer=null,this._glResolveFrameBuffer=null,this._glMsaaColorBuffer=null,this._glMsaaDepthBuffer=null}resolve(e,t,s,i){if(e.webgl2){const n=e.gl;n.bindFramebuffer(n.READ_FRAMEBUFFER,this._glFrameBuffer),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,this._glResolveFrameBuffer),n.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,(s?n.COLOR_BUFFER_BIT:0)|(i?n.DEPTH_BUFFER_BIT:0),n.NEAREST),n.bindFramebuffer(n.FRAMEBUFFER,this._glFrameBuffer)}}}const rn=[],lc=`
attribute vec2 vertex_position;
varying vec2 vUv0;
void main(void)
{
    gl_Position = vec4(vertex_position, 0.5, 1.0);
    vUv0 = vertex_position.xy*0.5+0.5;
}
`,Vy=`
void main(void) { 
    gl_FragColor = vec4(2147483648.0);
}
`,Gy=`
uniform sampler2D source;
vec4 packFloat(float depth) {
    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);
    res -= res.xxyz * bit_mask;
    return res;
}
void main(void) {
    float c = texture2D(source, vec2(0.0)).r;
    float diff = abs(c - 2147483648.0) / 2147483648.0;
    gl_FragColor = packFloat(diff);
}
`,Wy=`
varying vec2 vUv0;
uniform sampler2D source;
void main(void) {
    gl_FragColor = texture2D(source, vUv0);
}
`;function hu(l,e){let t=!0;const s=l.createTexture();l.bindTexture(l.TEXTURE_2D,s),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,2,2,0,l.RGBA,e,null);const i=l.createFramebuffer();return l.bindFramebuffer(l.FRAMEBUFFER,i),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,s,0),l.checkFramebufferStatus(l.FRAMEBUFFER)!==l.FRAMEBUFFER_COMPLETE&&(t=!1),l.bindTexture(l.TEXTURE_2D,null),l.deleteTexture(s),l.bindFramebuffer(l.FRAMEBUFFER,null),l.deleteFramebuffer(i),t}function Hy(l,e){let t=!0;const s=l.createTexture();l.bindTexture(l.TEXTURE_2D,s),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);const i=new Uint16Array(4*2*2);return l.texImage2D(l.TEXTURE_2D,0,l.RGBA,2,2,0,l.RGBA,e,i),l.getError()!==l.NO_ERROR&&(t=!1,console.log("Above error related to HALF_FLOAT_OES can be ignored, it was triggered by testing half float texture support")),l.bindTexture(l.TEXTURE_2D,null),l.deleteTexture(s),t}function Xy(l){if(!l.textureFloatRenderable)return!1;const e=new qn(l,Ke.createDefinition(l,{name:"ptest1",vertexCode:lc,fragmentCode:Vy})),t=new qn(l,Ke.createDefinition(l,{name:"ptest2",vertexCode:lc,fragmentCode:Gy})),s={format:nt,width:1,height:1,mipmaps:!1,minFilter:ve,magFilter:ve,name:"testFHP"},i=new ae(l,s),n=new ht({colorBuffer:i,depth:!1});ss(l,n,e),s.format=he;const r=new ae(l,s),a=new ht({colorBuffer:r,depth:!1});l.constantTexSource.setValue(i),ss(l,a,t);const o=l.activeFramebuffer;l.setFramebuffer(a.impl._glFrameBuffer);const h=new Uint8Array(4);l.readPixels(0,0,1,1,h),l.setFramebuffer(o);const c=h[0]/255,d=h[1]/255,u=h[2]/255,f=h[3]/255,p=c/(256*256*256)+d/(256*256)+u/256+f;return i.destroy(),n.destroy(),r.destroy(),a.destroy(),e.destroy(),t.destroy(),p===0}function qy(l){const e=new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1,8,6,0,0,0,31,21,196,137,0,0,0,13,73,68,65,84,120,218,99,100,100,98,182,7,0,0,89,0,71,67,133,148,237,0,0,0,0,73,69,78,68,174,66,96,130]);return createImageBitmap(new Blob([e],{type:"image/png"}),{premultiplyAlpha:"none"}).then(t=>{const s=new ae(l,{width:1,height:1,format:he,mipmaps:!1,levels:[t]}),i=new ht({colorBuffer:s,depth:!1});l.setFramebuffer(i.impl._glFrameBuffer),l.initRenderTarget(i);const n=new Uint8ClampedArray(4);return l.gl.readPixels(0,0,1,1,l.gl.RGBA,l.gl.UNSIGNED_BYTE,n),i.destroy(),s.destroy(),n[0]===1&&n[1]===2&&n[2]===3&&n[3]===63}).catch(t=>!1)}class jy extends od{constructor(e,t={}){super(e),this.gl=void 0,this.webgl2=void 0,this.deviceType=Jp,this.defaultFramebuffer=null,this.defaultFramebufferAlpha=t.alpha,this.updateClientRect(),this.contextLost=!1,this._contextLostHandler=_=>{_.preventDefault(),this.contextLost=!0,this.loseContext(),this.fire("devicelost")},this._contextRestoredHandler=()=>{this.restoreContext(),this.contextLost=!1,this.fire("devicerestored")},t.stencil=!0,t.powerPreference||(t.powerPreference="high-performance");const s=typeof navigator<"u"&&navigator.userAgent;this.forceDisableMultisampling=s&&s.includes("AppleWebKit")&&(s.includes("15.4")||s.includes("15_4")),this.forceDisableMultisampling&&(t.antialias=!1);const n=(t.preferWebGl2!==void 0?t.preferWebGl2:!0)?["webgl2","webgl","experimental-webgl"]:["webgl","experimental-webgl"];let r=null;for(let _=0;_<n.length;_++)if(r=e.getContext(n[_],t),r){this.webgl2=n[_]==="webgl2";break}if(!r)throw new Error("WebGL not supported");const a=st.browser&&!!window.chrome,o=st.browser&&navigator.appVersion.indexOf("Mac")!==-1;this.gl=r,this._tempEnableSafariTextureUnitWorkaround=st.browser&&!!window.safari,this._tempMacChromeBlitFramebufferWorkaround=o&&a&&!t.alpha,this.webgl2||rg(r),e.addEventListener("webglcontextlost",this._contextLostHandler,!1),e.addEventListener("webglcontextrestored",this._contextRestoredHandler,!1),this.initializeExtensions(),this.initializeCapabilities(),this.initializeRenderState(),this.initializeContextCaches(),this.supportsImageBitmap=null,typeof ImageBitmap<"u"&&qy(this).then(_=>{this.supportsImageBitmap=_}),this.defaultClearOptions={color:[0,0,0,1],depth:1,stencil:0,flags:Ar|Mr},this.glAddress=[r.REPEAT,r.CLAMP_TO_EDGE,r.MIRRORED_REPEAT],this.glBlendEquation=[r.FUNC_ADD,r.FUNC_SUBTRACT,r.FUNC_REVERSE_SUBTRACT,this.webgl2?r.MIN:this.extBlendMinmax?this.extBlendMinmax.MIN_EXT:r.FUNC_ADD,this.webgl2?r.MAX:this.extBlendMinmax?this.extBlendMinmax.MAX_EXT:r.FUNC_ADD],this.glBlendFunction=[r.ZERO,r.ONE,r.SRC_COLOR,r.ONE_MINUS_SRC_COLOR,r.DST_COLOR,r.ONE_MINUS_DST_COLOR,r.SRC_ALPHA,r.SRC_ALPHA_SATURATE,r.ONE_MINUS_SRC_ALPHA,r.DST_ALPHA,r.ONE_MINUS_DST_ALPHA,r.CONSTANT_COLOR,r.ONE_MINUS_CONSTANT_COLOR,r.CONSTANT_ALPHA,r.ONE_MINUS_CONSTANT_ALPHA],this.glComparison=[r.NEVER,r.LESS,r.EQUAL,r.LEQUAL,r.GREATER,r.NOTEQUAL,r.GEQUAL,r.ALWAYS],this.glStencilOp=[r.KEEP,r.ZERO,r.REPLACE,r.INCR,r.INCR_WRAP,r.DECR,r.DECR_WRAP,r.INVERT],this.glClearFlag=[0,r.COLOR_BUFFER_BIT,r.DEPTH_BUFFER_BIT,r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT,r.STENCIL_BUFFER_BIT,r.STENCIL_BUFFER_BIT|r.COLOR_BUFFER_BIT,r.STENCIL_BUFFER_BIT|r.DEPTH_BUFFER_BIT,r.STENCIL_BUFFER_BIT|r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT],this.glCull=[0,r.BACK,r.FRONT,r.FRONT_AND_BACK],this.glFilter=[r.NEAREST,r.LINEAR,r.NEAREST_MIPMAP_NEAREST,r.NEAREST_MIPMAP_LINEAR,r.LINEAR_MIPMAP_NEAREST,r.LINEAR_MIPMAP_LINEAR],this.glPrimitive=[r.POINTS,r.LINES,r.LINE_LOOP,r.LINE_STRIP,r.TRIANGLES,r.TRIANGLE_STRIP,r.TRIANGLE_FAN],this.glType=[r.BYTE,r.UNSIGNED_BYTE,r.SHORT,r.UNSIGNED_SHORT,r.INT,r.UNSIGNED_INT,r.FLOAT],this.pcUniformType={},this.pcUniformType[r.BOOL]=ao,this.pcUniformType[r.INT]=Mo,this.pcUniformType[r.FLOAT]=Xr,this.pcUniformType[r.FLOAT_VEC2]=qr,this.pcUniformType[r.FLOAT_VEC3]=jr,this.pcUniformType[r.FLOAT_VEC4]=Yr,this.pcUniformType[r.INT_VEC2]=Fr,this.pcUniformType[r.INT_VEC3]=Or,this.pcUniformType[r.INT_VEC4]=Br,this.pcUniformType[r.BOOL_VEC2]=ic,this.pcUniformType[r.BOOL_VEC3]=nc,this.pcUniformType[r.BOOL_VEC4]=rc,this.pcUniformType[r.FLOAT_MAT2]=Po,this.pcUniformType[r.FLOAT_MAT3]=Eo,this.pcUniformType[r.FLOAT_MAT4]=Ro,this.pcUniformType[r.SAMPLER_2D]=$g,this.pcUniformType[r.SAMPLER_CUBE]=Kg,this.webgl2&&(this.pcUniformType[r.SAMPLER_2D_SHADOW]=Zg,this.pcUniformType[r.SAMPLER_CUBE_SHADOW]=Jg,this.pcUniformType[r.SAMPLER_3D]=Qg),this.targetToSlot={},this.targetToSlot[r.TEXTURE_2D]=0,this.targetToSlot[r.TEXTURE_CUBE_MAP]=1,this.targetToSlot[r.TEXTURE_3D]=2;let h,c,d,u,f;this.commitFunction=[],this.commitFunction[ao]=function(_,m){_.value!==m&&(r.uniform1i(_.locationId,m),_.value=m)},this.commitFunction[Mo]=this.commitFunction[ao],this.commitFunction[Xr]=function(_,m){_.value!==m&&(r.uniform1f(_.locationId,m),_.value=m)},this.commitFunction[qr]=function(_,m){f=_.value,h=m[0],c=m[1],(f[0]!==h||f[1]!==c)&&(r.uniform2fv(_.locationId,m),f[0]=h,f[1]=c)},this.commitFunction[jr]=function(_,m){f=_.value,h=m[0],c=m[1],d=m[2],(f[0]!==h||f[1]!==c||f[2]!==d)&&(r.uniform3fv(_.locationId,m),f[0]=h,f[1]=c,f[2]=d)},this.commitFunction[Yr]=function(_,m){f=_.value,h=m[0],c=m[1],d=m[2],u=m[3],(f[0]!==h||f[1]!==c||f[2]!==d||f[3]!==u)&&(r.uniform4fv(_.locationId,m),f[0]=h,f[1]=c,f[2]=d,f[3]=u)},this.commitFunction[Fr]=function(_,m){f=_.value,h=m[0],c=m[1],(f[0]!==h||f[1]!==c)&&(r.uniform2iv(_.locationId,m),f[0]=h,f[1]=c)},this.commitFunction[ic]=this.commitFunction[Fr],this.commitFunction[Or]=function(_,m){f=_.value,h=m[0],c=m[1],d=m[2],(f[0]!==h||f[1]!==c||f[2]!==d)&&(r.uniform3iv(_.locationId,m),f[0]=h,f[1]=c,f[2]=d)},this.commitFunction[nc]=this.commitFunction[Or],this.commitFunction[Br]=function(_,m){f=_.value,h=m[0],c=m[1],d=m[2],u=m[3],(f[0]!==h||f[1]!==c||f[2]!==d||f[3]!==u)&&(r.uniform4iv(_.locationId,m),f[0]=h,f[1]=c,f[2]=d,f[3]=u)},this.commitFunction[rc]=this.commitFunction[Br],this.commitFunction[Po]=function(_,m){r.uniformMatrix2fv(_.locationId,!1,m)},this.commitFunction[Eo]=function(_,m){r.uniformMatrix3fv(_.locationId,!1,m)},this.commitFunction[Ro]=function(_,m){r.uniformMatrix4fv(_.locationId,!1,m)},this.commitFunction[Yp]=function(_,m){r.uniform1fv(_.locationId,m)},this.commitFunction[$p]=function(_,m){r.uniform2fv(_.locationId,m)},this.commitFunction[Kp]=function(_,m){r.uniform3fv(_.locationId,m)},this.commitFunction[Zp]=function(_,m){r.uniform4fv(_.locationId,m)},this.supportsBoneTextures=this.extTextureFloat&&this.maxVertexTextures>0;let p=this.vertexUniformsCount;p-=4*4,p-=8,p-=1,p-=4*4,this.boneLimit=Math.floor(p/3),this.boneLimit=Math.min(this.boneLimit,128),this.unmaskedRenderer==="Mali-450 MP"&&(this.boneLimit=34),this.constantTexSource=this.scope.resolve("source"),this.extTextureFloat?this.webgl2?this.textureFloatRenderable=!!this.extColorBufferFloat:this.textureFloatRenderable=hu(r,r.FLOAT):this.textureFloatRenderable=!1,this.extColorBufferHalfFloat?this.textureHalfFloatRenderable=!!this.extColorBufferHalfFloat:this.extTextureHalfFloat?this.webgl2?this.textureHalfFloatRenderable=!!this.extColorBufferFloat:this.textureHalfFloatRenderable=hu(r,this.extTextureHalfFloat.HALF_FLOAT_OES):this.textureHalfFloatRenderable=!1,this.supportsMorphTargetTexturesCore=this.maxPrecision==="highp"&&this.maxVertexTextures>=2,this._textureFloatHighPrecision=void 0,this._textureHalfFloatUpdatable=void 0,this.areaLightLutFormat=he,this.extTextureHalfFloat&&this.textureHalfFloatUpdatable&&this.extTextureHalfFloatLinear?this.areaLightLutFormat=gt:this.extTextureFloat&&this.extTextureFloatLinear&&(this.areaLightLutFormat=nt)}destroy(){super.destroy();const e=this.gl;this.webgl2&&this.feedback&&e.deleteTransformFeedback(this.feedback),this.clearShaderCache(),this.clearVertexArrayObjectCache(),this.canvas.removeEventListener("webglcontextlost",this._contextLostHandler,!1),this.canvas.removeEventListener("webglcontextrestored",this._contextRestoredHandler,!1),this._contextLostHandler=null,this._contextRestoredHandler=null,this.gl=null,super.postDestroy()}createVertexBufferImpl(e,t){return new Oy}createIndexBufferImpl(e){return new By(e)}createShaderImpl(e){return new zy(e)}createTextureImpl(e){return new Uy}createRenderTargetImpl(e){return new Ny}getPrecision(){const e=this.gl;let t="highp";if(e.getShaderPrecisionFormat){const s=e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT),i=e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT),n=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT),r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),a=s.precision>0&&n.precision>0,o=i.precision>0&&r.precision>0;a||(o?t="mediump":t="lowp")}return t}initializeExtensions(){const e=this.gl,t=e.getSupportedExtensions(),s=function(){for(let n=0;n<arguments.length;n++)if(t.indexOf(arguments[n])!==-1)return e.getExtension(arguments[n]);return null};if(this.webgl2)this.extBlendMinmax=!0,this.extDrawBuffers=!0,this.extInstancing=!0,this.extStandardDerivatives=!0,this.extTextureFloat=!0,this.extTextureHalfFloat=!0,this.extTextureLod=!0,this.extUintElement=!0,this.extVertexArrayObject=!0,this.extColorBufferFloat=s("EXT_color_buffer_float"),this.extDisjointTimerQuery=s("EXT_disjoint_timer_query_webgl2","EXT_disjoint_timer_query"),this.extDepthTexture=!0;else{if(this.extBlendMinmax=s("EXT_blend_minmax"),this.extDrawBuffers=s("EXT_draw_buffers"),this.extInstancing=s("ANGLE_instanced_arrays"),this.extInstancing){const i=this.extInstancing;e.drawArraysInstanced=i.drawArraysInstancedANGLE.bind(i),e.drawElementsInstanced=i.drawElementsInstancedANGLE.bind(i),e.vertexAttribDivisor=i.vertexAttribDivisorANGLE.bind(i)}if(this.extStandardDerivatives=s("OES_standard_derivatives"),this.extTextureFloat=s("OES_texture_float"),this.extTextureHalfFloat=s("OES_texture_half_float"),this.extTextureLod=s("EXT_shader_texture_lod"),this.extUintElement=s("OES_element_index_uint"),this.extVertexArrayObject=s("OES_vertex_array_object"),this.extVertexArrayObject){const i=this.extVertexArrayObject;e.createVertexArray=i.createVertexArrayOES.bind(i),e.deleteVertexArray=i.deleteVertexArrayOES.bind(i),e.isVertexArray=i.isVertexArrayOES.bind(i),e.bindVertexArray=i.bindVertexArrayOES.bind(i)}this.extColorBufferFloat=null,this.extDisjointTimerQuery=null,this.extDepthTexture=e.getExtension("WEBGL_depth_texture")}this.extDebugRendererInfo=s("WEBGL_debug_renderer_info"),this.extTextureFloatLinear=s("OES_texture_float_linear"),this.extTextureHalfFloatLinear=s("OES_texture_half_float_linear"),this.extFloatBlend=s("EXT_float_blend"),this.extTextureFilterAnisotropic=s("EXT_texture_filter_anisotropic","WEBKIT_EXT_texture_filter_anisotropic"),this.extCompressedTextureETC1=s("WEBGL_compressed_texture_etc1"),this.extCompressedTextureETC=s("WEBGL_compressed_texture_etc"),this.extCompressedTexturePVRTC=s("WEBGL_compressed_texture_pvrtc","WEBKIT_WEBGL_compressed_texture_pvrtc"),this.extCompressedTextureS3TC=s("WEBGL_compressed_texture_s3tc","WEBKIT_WEBGL_compressed_texture_s3tc"),this.extCompressedTextureATC=s("WEBGL_compressed_texture_atc"),this.extCompressedTextureASTC=s("WEBGL_compressed_texture_astc"),this.extParallelShaderCompile=s("KHR_parallel_shader_compile"),this.extColorBufferHalfFloat=s("EXT_color_buffer_half_float")}initializeCapabilities(){const e=this.gl;let t;const s=typeof navigator<"u"?navigator.userAgent:"";this.maxPrecision=this.precision=this.getPrecision();const i=e.getContextAttributes();this.supportsMsaa=i.antialias,this.supportsStencil=i.stencil,this.supportsInstancing=!!this.extInstancing,this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxCubeMapSize=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),this.maxRenderBufferSize=e.getParameter(e.MAX_RENDERBUFFER_SIZE),this.maxTextures=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.maxCombinedTextures=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.maxVertexTextures=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),this.vertexUniformsCount=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),this.fragmentUniformsCount=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),this.webgl2?(this.maxDrawBuffers=e.getParameter(e.MAX_DRAW_BUFFERS),this.maxColorAttachments=e.getParameter(e.MAX_COLOR_ATTACHMENTS),this.maxVolumeSize=e.getParameter(e.MAX_3D_TEXTURE_SIZE)):(t=this.extDrawBuffers,this.maxDrawBuffers=t?e.getParameter(t.MAX_DRAW_BUFFERS_EXT):1,this.maxColorAttachments=t?e.getParameter(t.MAX_COLOR_ATTACHMENTS_EXT):1,this.maxVolumeSize=1),t=this.extDebugRendererInfo,this.unmaskedRenderer=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):"",this.unmaskedVendor=t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):"";const n=/SM-[a-zA-Z0-9]+/;this.supportsGpuParticles=!(this.unmaskedVendor==="ARM"&&s.match(n)),t=this.extTextureFilterAnisotropic,this.maxAnisotropy=t?e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT):1,this.samples=e.getParameter(e.SAMPLES),this.maxSamples=this.webgl2&&!this.forceDisableMultisampling?e.getParameter(e.MAX_SAMPLES):1,this.supportsAreaLights=this.webgl2||!st.android,this.maxTextures<=8&&(this.supportsAreaLights=!1)}initializeRenderState(){const e=this.gl;this.blending=!1,e.disable(e.BLEND),this.blendSrc=Ie,this.blendDst=Fi,this.blendSrcAlpha=Ie,this.blendDstAlpha=Fi,this.separateAlphaBlend=!1,this.blendEquation=qe,this.blendAlphaEquation=qe,this.separateAlphaEquation=!1,e.blendFunc(e.ONE,e.ZERO),e.blendEquation(e.FUNC_ADD),this.blendColor=new G(0,0,0,0),e.blendColor(0,0,0,0),this.writeRed=!0,this.writeGreen=!0,this.writeBlue=!0,this.writeAlpha=!0,e.colorMask(!0,!0,!0,!0),this.cullMode=Xn,e.enable(e.CULL_FACE),e.cullFace(e.BACK),this.depthTest=!0,e.enable(e.DEPTH_TEST),this.depthFunc=gl,e.depthFunc(e.LEQUAL),this.depthWrite=!0,e.depthMask(!0),this.stencil=!1,e.disable(e.STENCIL_TEST),this.stencilFuncFront=this.stencilFuncBack=Vi,this.stencilRefFront=this.stencilRefBack=0,this.stencilMaskFront=this.stencilMaskBack=255,e.stencilFunc(e.ALWAYS,0,255),this.stencilFailFront=this.stencilFailBack=Bt,this.stencilZfailFront=this.stencilZfailBack=Bt,this.stencilZpassFront=this.stencilZpassBack=Bt,this.stencilWriteMaskFront=255,this.stencilWriteMaskBack=255,e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.stencilMask(255),this.alphaToCoverage=!1,this.raster=!0,this.webgl2&&(e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.disable(e.RASTERIZER_DISCARD)),this.depthBiasEnabled=!1,e.disable(e.POLYGON_OFFSET_FILL),this.clearDepth=1,e.clearDepth(1),this.clearColor=new G(0,0,0,0),e.clearColor(0,0,0,0),this.clearStencil=0,e.clearStencil(0),this.vx=this.vy=this.vw=this.vh=0,this.sx=this.sy=this.sw=this.sh=0,this.webgl2?e.hint(e.FRAGMENT_SHADER_DERIVATIVE_HINT,e.NICEST):this.extStandardDerivatives&&e.hint(this.extStandardDerivatives.FRAGMENT_SHADER_DERIVATIVE_HINT_OES,e.NICEST),e.enable(e.SCISSOR_TEST),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),this.unpackFlipY=!1,e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),this.unpackPremultiplyAlpha=!1,e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,1)}initializeContextCaches(){super.initializeContextCaches(),this.vertexShaderCache={},this.fragmentShaderCache={},this._vaoMap=new Map,this.boundVao=null,this.activeFramebuffer=null,this.feedback=null,this.transformFeedbackBuffer=null,this.textureUnit=0,this.textureUnits=[];for(let e=0;e<this.maxCombinedTextures;e++)this.textureUnits.push([null,null,null])}loseContext(){for(const e of this.shaders)e.loseContext();for(const e of this.textures)e.loseContext();for(const e of this.buffers)e.loseContext();for(const e of this.targets)e.loseContext()}restoreContext(){this.initializeExtensions(),this.initializeCapabilities(),this.initializeRenderState(),this.initializeContextCaches();for(const e of this.shaders)e.restoreContext();for(const e of this.buffers)e.unlock()}setViewport(e,t,s,i){(this.vx!==e||this.vy!==t||this.vw!==s||this.vh!==i)&&(this.gl.viewport(e,t,s,i),this.vx=e,this.vy=t,this.vw=s,this.vh=i)}setScissor(e,t,s,i){(this.sx!==e||this.sy!==t||this.sw!==s||this.sh!==i)&&(this.gl.scissor(e,t,s,i),this.sx=e,this.sy=t,this.sw=s,this.sh=i)}setFramebuffer(e){if(this.activeFramebuffer!==e){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,e),this.activeFramebuffer=e}}copyRenderTarget(e,t,s,i){const n=this.gl;if(!this.webgl2&&i)return!1;if(s){if(t){if(e&&(!e._colorBuffer||!t._colorBuffer||e._colorBuffer._format!==t._colorBuffer._format))return!1}else if(!e._colorBuffer)return!1}if(i&&e&&!e._depth&&(!e._depthBuffer||!t._depthBuffer||e._depthBuffer._format!==t._depthBuffer._format))return!1;if(this.webgl2&&t){const r=this.renderTarget;this.renderTarget=t,this.updateBegin(),n.bindFramebuffer(n.READ_FRAMEBUFFER,e?e.impl._glFrameBuffer:null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,t.impl._glFrameBuffer);const a=e?e.width:t.width,o=e?e.height:t.height;n.blitFramebuffer(0,0,a,o,0,0,a,o,(s?n.COLOR_BUFFER_BIT:0)|(i?n.DEPTH_BUFFER_BIT:0),n.NEAREST),this.renderTarget=r,n.bindFramebuffer(n.FRAMEBUFFER,r?r.impl._glFrameBuffer:null)}else{const r=this.getCopyShader();this.constantTexSource.setValue(e._colorBuffer),ss(this,t,r)}return!0}getCopyShader(){return this._copyShader||(this._copyShader=new qn(this,Ke.createDefinition(this,{name:"outputTex2D",vertexCode:lc,fragmentCode:Wy}))),this._copyShader}startPass(e){this.setRenderTarget(e.renderTarget),this.updateBegin();const t=e.colorOps,s=e.depthStencilOps;if(t.clear||s.clearDepth||s.clearStencil){const i=e.renderTarget,n=i?i.width:this.width,r=i?i.height:this.height;this.setViewport(0,0,n,r),this.setScissor(0,0,n,r);let a=0;const o={};t.clear&&(a|=Ar,o.color=[t.clearValue.r,t.clearValue.g,t.clearValue.b,t.clearValue.a]),s.clearDepth&&(a|=Mr,o.depth=s.clearDepthValue),s.clearStencil&&(a|=vo,o.stencil=s.clearStencilValue),o.flags=a,this.clear(o)}this.insideRenderPass=!0}endPass(e){this.unbindVertexArray();const t=this.renderTarget;if(t){if(this.webgl2){rn.length=0;const s=this.gl;e.colorOps.store||e.colorOps.resolve||rn.push(s.COLOR_ATTACHMENT0),e.depthStencilOps.storeDepth||rn.push(s.DEPTH_ATTACHMENT),e.depthStencilOps.storeStencil||rn.push(s.STENCIL_ATTACHMENT),rn.length>0&&e.fullSizeClearRect&&s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rn)}if(e.colorOps.resolve&&this.webgl2&&e.samples>1&&t.autoResolve&&t.resolve(!0,!1),e.colorOps.mipmaps){const s=t._colorBuffer;s&&s.impl._glTexture&&s.mipmaps&&(s.pot||this.webgl2)&&(this.activeTexture(this.maxCombinedTextures-1),this.bindTexture(s),this.gl.generateMipmap(s.impl._glTarget))}}this.insideRenderPass=!1}updateBegin(){if(this.boundVao=null,this._tempEnableSafariTextureUnitWorkaround)for(let t=0;t<this.textureUnits.length;++t)for(let s=0;s<3;++s)this.textureUnits[t][s]=null;const e=this.renderTarget;e?e.impl.initialized?this.setFramebuffer(e.impl._glFrameBuffer):this.initRenderTarget(e):this.setFramebuffer(this.defaultFramebuffer)}updateEnd(){this.unbindVertexArray();const e=this.renderTarget;if(e){this.webgl2&&e._samples>1&&e.autoResolve&&e.resolve();const t=e._colorBuffer;t&&t.impl._glTexture&&t.mipmaps&&(t.pot||this.webgl2)&&(this.activeTexture(this.maxCombinedTextures-1),this.bindTexture(t),this.gl.generateMipmap(t.impl._glTarget))}}setUnpackFlipY(e){if(this.unpackFlipY!==e){this.unpackFlipY=e;const t=this.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,e)}}setUnpackPremultiplyAlpha(e){if(this.unpackPremultiplyAlpha!==e){this.unpackPremultiplyAlpha=e;const t=this.gl;t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e)}}activeTexture(e){this.textureUnit!==e&&(this.gl.activeTexture(this.gl.TEXTURE0+e),this.textureUnit=e)}bindTexture(e){const t=e.impl,s=t._glTarget,i=t._glTexture,n=this.textureUnit,r=this.targetToSlot[s];this.textureUnits[n][r]!==i&&(this.gl.bindTexture(s,i),this.textureUnits[n][r]=i)}bindTextureOnUnit(e,t){const s=e.impl,i=s._glTarget,n=s._glTexture,r=this.targetToSlot[i];this.textureUnits[t][r]!==n&&(this.activeTexture(t),this.gl.bindTexture(i,n),this.textureUnits[t][r]=n)}setTextureParameters(e){const t=this.gl,s=e._parameterFlags,i=e.impl._glTarget;if(s&1){let n=e._minFilter;(!e.pot&&!this.webgl2||!e._mipmaps||e._compressed&&e._levels.length===1)&&(n===pl||n===ml?n=ve:(n===_l||n===Xi)&&(n=$e)),t.texParameteri(i,t.TEXTURE_MIN_FILTER,this.glFilter[n])}if(s&2&&t.texParameteri(i,t.TEXTURE_MAG_FILTER,this.glFilter[e._magFilter]),s&4&&(this.webgl2?t.texParameteri(i,t.TEXTURE_WRAP_S,this.glAddress[e._addressU]):t.texParameteri(i,t.TEXTURE_WRAP_S,this.glAddress[e.pot?e._addressU:se])),s&8&&(this.webgl2?t.texParameteri(i,t.TEXTURE_WRAP_T,this.glAddress[e._addressV]):t.texParameteri(i,t.TEXTURE_WRAP_T,this.glAddress[e.pot?e._addressV:se])),s&16&&this.webgl2&&t.texParameteri(i,t.TEXTURE_WRAP_R,this.glAddress[e._addressW]),s&32&&this.webgl2&&t.texParameteri(i,t.TEXTURE_COMPARE_MODE,e._compareOnRead?t.COMPARE_REF_TO_TEXTURE:t.NONE),s&64&&this.webgl2&&t.texParameteri(i,t.TEXTURE_COMPARE_FUNC,this.glComparison[e._compareFunc]),s&128){const n=this.extTextureFilterAnisotropic;n&&t.texParameterf(i,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.max(1,Math.min(Math.round(e._anisotropy),this.maxAnisotropy)))}}setTexture(e,t){e.impl._glTexture||e.impl.initialize(this,e),e._parameterFlags>0||e._needsUpload||e._needsMipmapsUpload?(this.activeTexture(t),this.bindTexture(e),e._parameterFlags&&(this.setTextureParameters(e),e._parameterFlags=0),(e._needsUpload||e._needsMipmapsUpload)&&(e.impl.upload(this,e),e._needsUpload=!1,e._needsMipmapsUpload=!1)):this.bindTextureOnUnit(e,t)}createVertexArray(e){let t,s;const i=e.length>1;if(i){t="";for(let n=0;n<e.length;n++){const r=e[n];t+=r.id+r.format.renderingingHash}s=this._vaoMap.get(t)}if(!s){const n=this.gl;s=n.createVertexArray(),n.bindVertexArray(s),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null);for(let r=0;r<e.length;r++){const a=e[r];n.bindBuffer(n.ARRAY_BUFFER,a.impl.bufferId);const o=a.format.elements;for(let h=0;h<o.length;h++){const c=o[h],d=ye[c.name];n.vertexAttribPointer(d,c.numComponents,this.glType[c.dataType],c.normalize,c.stride,c.offset),n.enableVertexAttribArray(d),a.instancing&&n.vertexAttribDivisor(d,1)}}n.bindVertexArray(null),n.bindBuffer(n.ARRAY_BUFFER,null),i&&this._vaoMap.set(t,s)}return s}unbindVertexArray(){this.boundVao&&(this.boundVao=null,this.gl.bindVertexArray(null))}setBuffers(){const e=this.gl;let t;if(this.vertexBuffers.length===1){const i=this.vertexBuffers[0];i.impl.vao||(i.impl.vao=this.createVertexArray(this.vertexBuffers)),t=i.impl.vao}else t=this.createVertexArray(this.vertexBuffers);this.boundVao!==t&&(this.boundVao=t,e.bindVertexArray(t)),this.vertexBuffers.length=0;const s=this.indexBuffer?this.indexBuffer.impl.bufferId:null;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s)}draw(e,t,s){const i=this.gl;let n,r,a,o,h,c,d,u;const f=this.shader;if(!f)return;const p=f.impl.samplers,_=f.impl.uniforms;s||this.setBuffers();let m=0;for(let v=0,y=p.length;v<y;v++)if(n=p[v],r=n.scopeId.value,!!r)if(r instanceof ae)a=r,this.setTexture(a,m),n.slot!==m&&(i.uniform1i(n.locationId,m),n.slot=m),m++;else{n.array.length=0,o=r.length;for(let T=0;T<o;T++)a=r[T],this.setTexture(a,m),n.array[T]=m,m++;i.uniform1iv(n.locationId,n.array)}for(let v=0,y=_.length;v<y;v++)h=_[v],c=h.scopeId,d=h.version,u=c.versionObject.version,(d.globalId!==u.globalId||d.revision!==u.revision)&&(d.globalId=u.globalId,d.revision=u.revision,c.value!==null&&this.commitFunction[h.dataType](h,c.value));this.webgl2&&this.transformFeedbackBuffer&&(i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.transformFeedbackBuffer.impl.bufferId),i.beginTransformFeedback(i.POINTS));const g=this.glPrimitive[e.type],w=e.count;if(e.indexed){const v=this.indexBuffer,y=v.impl.glFormat,T=e.base*v.bytesPerIndex;t>0?i.drawElementsInstanced(g,w,y,T,t):i.drawElements(g,w,y,T)}else{const v=e.base;t>0?i.drawArraysInstanced(g,v,w,t):i.drawArrays(g,v,w)}this.webgl2&&this.transformFeedbackBuffer&&(i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null)),this._drawCallsPerFrame++}clear(e){const t=this.defaultClearOptions;e=e||t;const s=e.flags===void 0?t.flags:e.flags;if(s!==0){const i=this.gl;if(s&Ar){const n=e.color===void 0?t.color:e.color;this.setClearColor(n[0],n[1],n[2],n[3]),this.setColorWrite(!0,!0,!0,!0)}if(s&Mr){const n=e.depth===void 0?t.depth:e.depth;this.setClearDepth(n),this.setDepthWrite(!0)}if(s&vo){const n=e.stencil===void 0?t.stencil:e.stencil;this.setClearStencil(n)}i.clear(this.glClearFlag[s])}}readPixels(e,t,s,i,n){const r=this.gl;r.readPixels(e,t,s,i,r.RGBA,r.UNSIGNED_BYTE,n)}setClearDepth(e){e!==this.clearDepth&&(this.gl.clearDepth(e),this.clearDepth=e)}setClearColor(e,t,s,i){const n=this.clearColor;(e!==n.r||t!==n.g||s!==n.b||i!==n.a)&&(this.gl.clearColor(e,t,s,i),this.clearColor.set(e,t,s,i))}setClearStencil(e){e!==this.clearStencil&&(this.gl.clearStencil(e),this.clearStencil=e)}getDepthTest(){return this.depthTest}setDepthTest(e){if(this.depthTest!==e){const t=this.gl;e?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),this.depthTest=e}}setDepthFunc(e){this.depthFunc!==e&&(this.gl.depthFunc(this.glComparison[e]),this.depthFunc=e)}getDepthWrite(){return this.depthWrite}setDepthWrite(e){this.depthWrite!==e&&(this.gl.depthMask(e),this.depthWrite=e)}setColorWrite(e,t,s,i){(this.writeRed!==e||this.writeGreen!==t||this.writeBlue!==s||this.writeAlpha!==i)&&(this.gl.colorMask(e,t,s,i),this.writeRed=e,this.writeGreen=t,this.writeBlue=s,this.writeAlpha=i)}setAlphaToCoverage(e){this.webgl2&&this.alphaToCoverage!==e&&(this.alphaToCoverage=e,e?this.gl.enable(this.gl.SAMPLE_ALPHA_TO_COVERAGE):this.gl.disable(this.gl.SAMPLE_ALPHA_TO_COVERAGE))}setTransformFeedbackBuffer(e){if(this.transformFeedbackBuffer!==e&&(this.transformFeedbackBuffer=e,this.webgl2)){const t=this.gl;e?(this.feedback||(this.feedback=t.createTransformFeedback()),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,this.feedback)):t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null)}}setRaster(e){this.raster!==e&&(this.raster=e,this.webgl2&&(e?this.gl.disable(this.gl.RASTERIZER_DISCARD):this.gl.enable(this.gl.RASTERIZER_DISCARD)))}setDepthBias(e){this.depthBiasEnabled!==e&&(this.depthBiasEnabled=e,e?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL))}setDepthBiasValues(e,t){this.gl.polygonOffset(t,e)}getBlending(){return this.blending}setBlending(e){if(this.blending!==e){const t=this.gl;e?t.enable(t.BLEND):t.disable(t.BLEND),this.blending=e}}setStencilTest(e){if(this.stencil!==e){const t=this.gl;e?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),this.stencil=e}}setStencilFunc(e,t,s){(this.stencilFuncFront!==e||this.stencilRefFront!==t||this.stencilMaskFront!==s||this.stencilFuncBack!==e||this.stencilRefBack!==t||this.stencilMaskBack!==s)&&(this.gl.stencilFunc(this.glComparison[e],t,s),this.stencilFuncFront=this.stencilFuncBack=e,this.stencilRefFront=this.stencilRefBack=t,this.stencilMaskFront=this.stencilMaskBack=s)}setStencilFuncFront(e,t,s){if(this.stencilFuncFront!==e||this.stencilRefFront!==t||this.stencilMaskFront!==s){const i=this.gl;i.stencilFuncSeparate(i.FRONT,this.glComparison[e],t,s),this.stencilFuncFront=e,this.stencilRefFront=t,this.stencilMaskFront=s}}setStencilFuncBack(e,t,s){if(this.stencilFuncBack!==e||this.stencilRefBack!==t||this.stencilMaskBack!==s){const i=this.gl;i.stencilFuncSeparate(i.BACK,this.glComparison[e],t,s),this.stencilFuncBack=e,this.stencilRefBack=t,this.stencilMaskBack=s}}setStencilOperation(e,t,s,i){(this.stencilFailFront!==e||this.stencilZfailFront!==t||this.stencilZpassFront!==s||this.stencilFailBack!==e||this.stencilZfailBack!==t||this.stencilZpassBack!==s)&&(this.gl.stencilOp(this.glStencilOp[e],this.glStencilOp[t],this.glStencilOp[s]),this.stencilFailFront=this.stencilFailBack=e,this.stencilZfailFront=this.stencilZfailBack=t,this.stencilZpassFront=this.stencilZpassBack=s),(this.stencilWriteMaskFront!==i||this.stencilWriteMaskBack!==i)&&(this.gl.stencilMask(i),this.stencilWriteMaskFront=i,this.stencilWriteMaskBack=i)}setStencilOperationFront(e,t,s,i){(this.stencilFailFront!==e||this.stencilZfailFront!==t||this.stencilZpassFront!==s)&&(this.gl.stencilOpSeparate(this.gl.FRONT,this.glStencilOp[e],this.glStencilOp[t],this.glStencilOp[s]),this.stencilFailFront=e,this.stencilZfailFront=t,this.stencilZpassFront=s),this.stencilWriteMaskFront!==i&&(this.gl.stencilMaskSeparate(this.gl.FRONT,i),this.stencilWriteMaskFront=i)}setStencilOperationBack(e,t,s,i){(this.stencilFailBack!==e||this.stencilZfailBack!==t||this.stencilZpassBack!==s)&&(this.gl.stencilOpSeparate(this.gl.BACK,this.glStencilOp[e],this.glStencilOp[t],this.glStencilOp[s]),this.stencilFailBack=e,this.stencilZfailBack=t,this.stencilZpassBack=s),this.stencilWriteMaskBack!==i&&(this.gl.stencilMaskSeparate(this.gl.BACK,i),this.stencilWriteMaskBack=i)}setBlendFunction(e,t){(this.blendSrc!==e||this.blendDst!==t||this.separateAlphaBlend)&&(this.gl.blendFunc(this.glBlendFunction[e],this.glBlendFunction[t]),this.blendSrc=e,this.blendDst=t,this.separateAlphaBlend=!1)}setBlendFunctionSeparate(e,t,s,i){(this.blendSrc!==e||this.blendDst!==t||this.blendSrcAlpha!==s||this.blendDstAlpha!==i||!this.separateAlphaBlend)&&(this.gl.blendFuncSeparate(this.glBlendFunction[e],this.glBlendFunction[t],this.glBlendFunction[s],this.glBlendFunction[i]),this.blendSrc=e,this.blendDst=t,this.blendSrcAlpha=s,this.blendDstAlpha=i,this.separateAlphaBlend=!0)}setBlendEquation(e){(this.blendEquation!==e||this.separateAlphaEquation)&&(this.gl.blendEquation(this.glBlendEquation[e]),this.blendEquation=e,this.separateAlphaEquation=!1)}setBlendEquationSeparate(e,t){(this.blendEquation!==e||this.blendAlphaEquation!==t||!this.separateAlphaEquation)&&(this.gl.blendEquationSeparate(this.glBlendEquation[e],this.glBlendEquation[t]),this.blendEquation=e,this.blendAlphaEquation=t,this.separateAlphaEquation=!0)}setBlendColor(e,t,s,i){const n=this.blendColor;(e!==n.r||t!==n.g||s!==n.b||i!==n.a)&&(this.gl.blendColor(e,t,s,i),n.set(e,t,s,i))}setCullMode(e){if(this.cullMode!==e){if(e===_t)this.gl.disable(this.gl.CULL_FACE);else{this.cullMode===_t&&this.gl.enable(this.gl.CULL_FACE);const t=this.glCull[e];this.cullFace!==t&&(this.gl.cullFace(t),this.cullFace=t)}this.cullMode=e}}getCullMode(){return this.cullMode}setShader(e){if(e!==this.shader){if(e.failed)return!1;if(!e.ready&&!e.impl.postLink(this,e))return e.failed=!0,!1;this.shader=e,this.gl.useProgram(e.impl.glProgram),this.attributesInvalidated=!0}return!0}getHdrFormat(){return this.textureHalfFloatRenderable?gt:this.textureFloatRenderable?nt:he}clearShaderCache(){const e=this.gl;for(const t in this.fragmentShaderCache)e.deleteShader(this.fragmentShaderCache[t]),delete this.fragmentShaderCache[t];for(const t in this.vertexShaderCache)e.deleteShader(this.vertexShaderCache[t]),delete this.vertexShaderCache[t]}clearVertexArrayObjectCache(){const e=this.gl;this._vaoMap.forEach((t,s,i)=>{e.deleteVertexArray(t)}),this._vaoMap.clear()}get width(){return this.gl.drawingBufferWidth||this.canvas.width}get height(){return this.gl.drawingBufferHeight||this.canvas.height}set fullscreen(e){e?this.gl.canvas.requestFullscreen():document.exitFullscreen()}get fullscreen(){return!!document.fullscreenElement}get textureFloatHighPrecision(){return this._textureFloatHighPrecision===void 0&&(this._textureFloatHighPrecision=Xy(this)),this._textureFloatHighPrecision}get textureHalfFloatUpdatable(){return this._textureHalfFloatUpdatable===void 0&&(this.webgl2?this._textureHalfFloatUpdatable=!0:this._textureHalfFloatUpdatable=Hy(this.gl,this.extTextureHalfFloat.HALF_FLOAT_OES)),this._textureHalfFloatUpdatable}}const Yy="mousewheel";class de{get(e,t,s){return typeof t=="function"&&(s=t,t={}),this.request("GET",e,t,s)}post(e,t,s,i){return typeof s=="function"&&(i=s,s={}),s.postdata=t,this.request("POST",e,s,i)}put(e,t,s,i){return typeof s=="function"&&(i=s,s={}),s.postdata=t,this.request("PUT",e,s,i)}del(e,t,s){return typeof t=="function"&&(s=t,t={}),this.request("DELETE",e,t,s)}request(e,t,s,i){let n,r,a,o=!1;if(typeof s=="function"&&(i=s,s={}),s.retry&&(s=Object.assign({retries:0,maxRetries:5},s)),s.callback=i,s.async==null&&(s.async=!0),s.headers==null&&(s.headers={}),s.postdata!=null)if(s.postdata instanceof Document)a=s.postdata;else if(s.postdata instanceof FormData)a=s.postdata;else if(s.postdata instanceof Object){let c=s.headers["Content-Type"];switch(c===void 0&&(s.headers["Content-Type"]=de.ContentType.FORM_URLENCODED,c=s.headers["Content-Type"]),c){case de.ContentType.FORM_URLENCODED:{a="";let d=!0;for(const u in s.postdata)if(s.postdata.hasOwnProperty(u)){d?d=!1:a+="&";const f=encodeURIComponent(u),p=encodeURIComponent(s.postdata[u]);a+=`${f}=${p}`}break}default:case de.ContentType.JSON:c==null&&(s.headers["Content-Type"]=de.ContentType.JSON),a=JSON.stringify(s.postdata);break}}else a=s.postdata;if(s.cache===!1){const c=fi();n=new ql(t),n.query?n.query=n.query+"&ts="+c:n.query="ts="+c,t=n.toString()}s.query&&(n=new ql(t),r=ci(n.getQuery(),s.query),n.setQuery(r),t=n.toString());const h=new XMLHttpRequest;h.open(e,t,s.async),h.withCredentials=s.withCredentials!==void 0?s.withCredentials:!1,h.responseType=s.responseType||this._guessResponseType(t);for(const c in s.headers)s.headers.hasOwnProperty(c)&&h.setRequestHeader(c,s.headers[c]);h.onreadystatechange=()=>{this._onReadyStateChange(e,t,s,h)},h.onerror=()=>{this._onError(e,t,s,h),o=!0};try{h.send(a)}catch(c){o||s.error(h.status,h,c)}return h}_guessResponseType(e){const t=new ql(e),s=re.getExtension(t.path);return de.binaryExtensions.indexOf(s)>=0?de.ResponseType.ARRAY_BUFFER:s===".xml"?de.ResponseType.DOCUMENT:de.ResponseType.TEXT}_isBinaryContentType(e){return[de.ContentType.BASIS,de.ContentType.BIN,de.ContentType.DDS,de.ContentType.GLB,de.ContentType.MP3,de.ContentType.MP4,de.ContentType.OGG,de.ContentType.OPUS,de.ContentType.WAV].indexOf(e)>=0}_isBinaryResponseType(e){return e===de.ResponseType.ARRAY_BUFFER||e===de.ResponseType.BLOB||e===de.ResponseType.JSON}_onReadyStateChange(e,t,s,i){if(i.readyState===4)switch(i.status){case 0:{i.responseURL&&i.responseURL.startsWith("file:///")?this._onSuccess(e,t,s,i):this._onError(e,t,s,i);break}case 200:case 201:case 206:case 304:{this._onSuccess(e,t,s,i);break}default:{this._onError(e,t,s,i);break}}}_onSuccess(e,t,s,i){let n,r;const a=i.getResponseHeader("Content-Type");a&&(r=a.split(";")[0].trim());try{r===de.ContentType.JSON||t.split("?")[0].endsWith(".json")?n=JSON.parse(i.responseText):this._isBinaryContentType(r)||this._isBinaryResponseType(i.responseType)?n=i.response:i.responseType===de.ResponseType.DOCUMENT||r===de.ContentType.XML?n=i.responseXML:n=i.responseText,s.callback(null,n)}catch(o){s.callback(o)}}_onError(e,t,s,i){if(!s.retrying)if(s.retry&&s.retries<s.maxRetries){s.retries++,s.retrying=!0;const n=k.clamp(Math.pow(2,s.retries)*de.retryDelay,0,s.maxRetryDelay||5e3);console.log(`${e}: ${t} - Error ${i.status}. Retrying in ${n} ms`),setTimeout(()=>{s.retrying=!1,this.request(e,t,s,s.callback)},n)}else s.callback(i.status===0?"Network error":i.status,null)}}de.ContentType={AAC:"audio/aac",BASIS:"image/basis",BIN:"application/octet-stream",DDS:"image/dds",FORM_URLENCODED:"application/x-www-form-urlencoded",GIF:"image/gif",GLB:"model/gltf-binary",JPEG:"image/jpeg",JSON:"application/json",MP3:"audio/mpeg",MP4:"audio/mp4",OGG:"audio/ogg",OPUS:'audio/ogg; codecs="opus"',PNG:"image/png",TEXT:"text/plain",WAV:"audio/x-wav",XML:"application/xml"};de.ResponseType={TEXT:"text",ARRAY_BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json"};de.binaryExtensions=[".model",".wav",".ogg",".mp3",".mp4",".m4a",".aac",".dds",".basis",".glb",".opus"];de.retryDelay=100;const De=new de;function Ws(){return typeof AudioContext<"u"||typeof webkitAudioContext<"u"}class Lo{constructor(e,t,s={}){if(this.volume=s.volume===void 0?1:s.volume,this.loop=s.loop===void 0?!1:s.loop,this.pitch=s.pitch===void 0?1:s.pitch,this.sound=t,this.paused=!1,this.suspended=!1,this.manager=e,this.source=null,Ws()){this.startTime=0,this.startOffset=0;const i=e.context;this.gain=i.createGain()}else t.audio&&(this.source=t.audio.cloneNode(!1),this.source.pause())}getVolume(){return this.volume}getLoop(){return this.loop}setLoop(e){this.loop=e,this.source&&(this.source.loop=e)}getPitch(){return this.pitch}onManagerVolumeChange(){this.setVolume(this.getVolume())}onManagerSuspend(){this.isPlaying()&&!this.suspended&&(this.suspended=!0,this.pause())}onManagerResume(){this.suspended&&(this.suspended=!1,this.unpause())}play(){if(this.source)throw new Error("Call stop() before calling play()");this._createSource(),this.source&&(this.startTime=this.manager.context.currentTime,this.source.start(0,this.startOffset%this.source.buffer.duration),this.setVolume(this.volume),this.setLoop(this.loop),this.setPitch(this.pitch),this.manager.on("volumechange",this.onManagerVolumeChange,this),this.manager.on("suspend",this.onManagerSuspend,this),this.manager.on("resume",this.onManagerResume,this),this.manager.suspended&&this.onManagerSuspend())}pause(){this.source&&(this.paused=!0,this.startOffset+=this.manager.context.currentTime-this.startTime,this.source.stop(0),this.source=null)}unpause(){if(this.source||!this.paused){console.warn("Call pause() before unpausing.");return}this._createSource(),this.source&&(this.startTime=this.manager.context.currentTime,this.source.start(0,this.startOffset%this.source.buffer.duration),this.setVolume(this.volume),this.setLoop(this.loop),this.setPitch(this.pitch),this.paused=!1)}stop(){this.source&&(this.source.stop(0),this.source=null),this.manager.off("volumechange",this.onManagerVolumeChange,this),this.manager.off("suspend",this.onManagerSuspend,this),this.manager.off("resume",this.onManagerResume,this)}setVolume(e){e=k.clamp(e,0,1),this.volume=e,this.gain&&(this.gain.gain.value=e*this.manager.volume)}setPitch(e){this.pitch=e,this.source&&(this.source.playbackRate.value=e)}isPlaying(){return!this.paused&&this.source.playbackState===this.source.PLAYING_STATE}getDuration(){return this.source?this.source.buffer.duration:0}_createSource(){const e=this.manager.context;this.sound.buffer&&(this.source=e.createBufferSource(),this.source.buffer=this.sound.buffer,this.source.connect(this.gain),this.gain.connect(e.destination),this.loop||(this.source.onended=this.pause.bind(this)))}}Ws()||Object.assign(Lo.prototype,{play:function(){this.source&&(this.paused=!1,this.setVolume(this.volume),this.setLoop(this.loop),this.setPitch(this.pitch),this.source.play()),this.manager.on("volumechange",this.onManagerVolumeChange,this),this.manager.on("suspend",this.onManagerSuspend,this),this.manager.on("resume",this.onManagerResume,this),this.manager.suspended&&this.onManagerSuspend()},pause:function(){this.source&&(this.paused=!0,this.source.pause())},unpause:function(){this.source&&(this.paused=!1,this.source.play())},stop:function(){this.source&&this.source.pause(),this.manager.off("volumechange",this.onManagerVolumeChange,this),this.manager.off("suspend",this.onManagerSuspend,this),this.manager.off("resume",this.onManagerResume,this)},setVolume:function(l){l=k.clamp(l,0,1),this.volume=l,this.source&&(this.source.volume=l*this.manager.volume)},setPitch:function(l){this.pitch=l,this.source&&(this.source.playbackRate=l)},getDuration:function(){return this.source&&!isNaN(this.source.duration)?this.source.duration:0},isPlaying:function(){return!this.source.paused}});const $y=1e4;class li extends Lo{constructor(e,t,s){super(e,t,s),this.position=new b,this.velocity=new b,Ws()?this.panner=e.context.createPanner():(this.maxDistance=$y,this.minDistance=1,this.rollOffFactor=1,this.distanceModel=fl)}getPosition(){return this.position}setPosition(e){this.position.copy(e);const t=this.panner;"positionX"in t?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition&&t.setPosition(e.x,e.y,e.z)}getVelocity(){return this.velocity}setVelocity(e){this.velocity.copy(e)}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){this.panner.maxDistance=e}getMinDistance(){return this.panner.refDistance}setMinDistance(e){this.panner.refDistance=e}getRollOffFactor(){return this.panner.rolloffFactor}setRollOffFactor(e){this.panner.rolloffFactor=e}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){this.panner.distanceModel=e}_createSource(){const e=this.manager.context;this.source=e.createBufferSource(),this.source.buffer=this.sound.buffer,this.source.connect(this.panner),this.panner.connect(this.gain),this.gain.connect(e.destination),this.loop||(this.source.onended=this.pause.bind(this))}}if(!Ws()){let l=new b;const e=function(s,i,n,r,a,o){l=l.sub2(s,i);const h=l.length();if(h<n)return 1;if(h>r)return 0;let c=0;return o===ul?c=1-a*(h-n)/(r-n):o===fl?c=n/(n+a*(h-n)):o===Lp&&(c=Math.pow(h/n,-a)),k.clamp(c,0,1)};Object.assign(li.prototype,{setPosition:function(t){if(this.position.copy(t),this.source){const i=this.manager.listener.getPosition(),n=e(i,this.position,this.minDistance,this.maxDistance,this.rollOffFactor,this.distanceModel),r=this.getVolume();this.source.volume=r*n}},getMaxDistance:function(){return this.maxDistance},setMaxDistance:function(t){this.maxDistance=t},getMinDistance:function(){return this.minDistance},setMinDistance:function(t){this.minDistance=t},getRollOffFactor:function(){return this.rollOffFactor},setRollOffFactor:function(t){this.rollOffFactor=t},getDistanceModel:function(){return this.distanceModel},setDistanceModel:function(t){this.distanceModel=t}})}class Ky{constructor(e){this._manager=e,this.position=new b,this.velocity=new b,this.orientation=new H}getPosition(){return this.position}setPosition(e){this.position.copy(e);const t=this.listener;t&&("positionX"in t?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition&&t.setPosition(e.x,e.y,e.z))}getVelocity(){return this.velocity}setVelocity(e){}setOrientation(e){this.orientation.copy(e);const t=this.listener;if(t){const s=e.data;"forwardX"in t?(t.forwardX.value=-s[8],t.forwardY.value=-s[9],t.forwardZ.value=-s[10],t.upX.value=s[4],t.upY.value=s[5],t.upZ.value=s[6]):t.setOrientation&&t.setOrientation(-s[8],-s[9],-s[10],s[4],s[5],s[6])}}getOrientation(){return this.orientation}get listener(){const e=this._manager.context;return e?e.listener:null}}const ba="running",cu=["click","touchstart","mousedown"];class Zy extends le{constructor(){super(),this._context=null,this.AudioContext=typeof AudioContext<"u"&&AudioContext||typeof webkitAudioContext<"u"&&webkitAudioContext,this.AudioContext,this._unlockHandlerFunc=this._unlockHandler.bind(this),this._userSuspended=!1,this.listener=new Ky(this),this._volume=1}set volume(e){e=k.clamp(e,0,1),this._volume=e,this.fire("volumechange",e)}get volume(){return this._volume}get suspended(){return this._userSuspended}get context(){return!this._context&&this.AudioContext&&(this._context=new this.AudioContext,this._context.state!==ba&&this._registerUnlockListeners()),this._context}suspend(){this._userSuspended||(this._userSuspended=!0,this._context&&this._context.state===ba&&this._suspend())}resume(){this._userSuspended&&(this._userSuspended=!1,this._context&&this._context.state!==ba&&this._resume())}destroy(){if(this.fire("destroy"),this._context){var e;this._removeUnlockListeners(),(e=this._context)==null||e.close(),this._context=null}}playSound(e,t={}){let s=null;return Lo&&(s=new Lo(this,e,t),s.play()),s}playSound3d(e,t,s={}){let i=null;return li&&(i=new li(this,e,s),i.setPosition(t),s.volume&&i.setVolume(s.volume),s.loop&&i.setLoop(s.loop),s.maxDistance&&i.setMaxDistance(s.maxDistance),s.minDistance&&i.setMinDistance(s.minDistance),s.rollOffFactor&&i.setRollOffFactor(s.rollOffFactor),s.distanceModel&&i.setDistanceModel(s.distanceModel),i.play()),i}_resume(){this._context.resume().then(()=>{const e=this._context.createBufferSource();e.buffer=this._context.createBuffer(1,1,this._context.sampleRate),e.connect(this._context.destination),e.start(0),e.onended=t=>{e.disconnect(0),this.fire("resume")}},e=>{}).catch(e=>{})}_suspend(){this._context.suspend().then(()=>{this.fire("suspend")},e=>{}).catch(e=>{})}_unlockHandler(){this._removeUnlockListeners(),!this._userSuspended&&this._context.state!==ba&&this._resume()}_registerUnlockListeners(){cu.forEach(e=>{window.addEventListener(e,this._unlockHandlerFunc,!1)})}_removeUnlockListeners(){cu.forEach(e=>{window.removeEventListener(e,this._unlockHandlerFunc,!1)})}}class Jy{constructor(e){this.audio=void 0,this.buffer=void 0,e instanceof Audio?this.audio=e:this.buffer=e}get duration(){let e=0;return this.buffer?e=this.buffer.duration:this.audio&&(e=this.audio.duration),e||0}}const ft=0,Ln=1,Zt=2;function pt(l,e){return l%e||0}class Oi extends le{constructor(e,t,s){super(),this.source=null,this._manager=e,this._volume=s.volume!==void 0?k.clamp(Number(s.volume)||0,0,1):1,this._pitch=s.pitch!==void 0?Math.max(.01,Number(s.pitch)||0):1,this._loop=!!(s.loop!==void 0&&s.loop),this._sound=t,this._state=Zt,this._suspended=!1,this._suspendEndEvent=0,this._suspendInstanceEvents=!1,this._playWhenLoaded=!0,this._startTime=Math.max(0,Number(s.startTime)||0),this._duration=Math.max(0,Number(s.duration)||0),this._startOffset=null,this._onPlayCallback=s.onPlay,this._onPauseCallback=s.onPause,this._onResumeCallback=s.onResume,this._onStopCallback=s.onStop,this._onEndCallback=s.onEnd,Ws()?(this._startedAt=0,this._currentTime=0,this._currentOffset=0,this._inputNode=null,this._connectorNode=null,this._firstNode=null,this._lastNode=null,this._waitingContextSuspension=!1,this._initializeNodes(),this._endedHandler=this._onEnded.bind(this)):(this._isReady=!1,this._loadedMetadataHandler=this._onLoadedMetadata.bind(this),this._timeUpdateHandler=this._onTimeUpdate.bind(this),this._endedHandler=this._onEnded.bind(this),this._createSource())}set currentTime(e){if(!(e<0))if(this._state===ft){const t=this._suspendInstanceEvents;this._suspendInstanceEvents=!0,this.stop(),this._startOffset=e,this.play(),this._suspendInstanceEvents=t}else this._startOffset=e,this._currentTime=e}get currentTime(){return this._startOffset!==null?this._startOffset:this._state===Ln?this._currentTime:this._state===Zt||!this.source?0:(this._updateCurrentTime(),this._currentTime)}set duration(e){this._duration=Math.max(0,Number(e)||0);const t=this._state===ft;this.stop(),t&&this.play()}get duration(){return this._sound?this._duration?pt(this._duration,this._sound.duration):this._sound.duration:0}get isPaused(){return this._state===Ln}get isPlaying(){return this._state===ft}get isStopped(){return this._state===Zt}get isSuspended(){return this._suspended}set loop(e){this._loop=!!e,this.source&&(this.source.loop=this._loop)}get loop(){return this._loop}set pitch(e){this._currentOffset=this.currentTime,this._startedAt=this._manager.context.currentTime,this._pitch=Math.max(Number(e)||0,.01),this.source&&(this.source.playbackRate.value=this._pitch)}get pitch(){return this._pitch}set sound(e){this._sound=e,this._state!==Zt?this.stop():this._createSource()}get sound(){return this._sound}set startTime(e){this._startTime=Math.max(0,Number(e)||0);const t=this._state===ft;this.stop(),t&&this.play()}get startTime(){return this._startTime}set volume(e){e=k.clamp(e,0,1),this._volume=e,this.gain&&(this.gain.gain.value=e*this._manager.volume)}get volume(){return this._volume}_onPlay(){this.fire("play"),this._onPlayCallback&&this._onPlayCallback(this)}_onPause(){this.fire("pause"),this._onPauseCallback&&this._onPauseCallback(this)}_onResume(){this.fire("resume"),this._onResumeCallback&&this._onResumeCallback(this)}_onStop(){this.fire("stop"),this._onStopCallback&&this._onStopCallback(this)}_onEnded(){if(this._suspendEndEvent>0){this._suspendEndEvent--;return}this.fire("end"),this._onEndCallback&&this._onEndCallback(this),this.stop()}_onManagerVolumeChange(){this.volume=this._volume}_onManagerSuspend(){this._state===ft&&!this._suspended&&(this._suspended=!0,this.pause())}_onManagerResume(){this._suspended&&(this._suspended=!1,this.resume())}_initializeNodes(){this.gain=this._manager.context.createGain(),this._inputNode=this.gain,this._connectorNode=this.gain,this._connectorNode.connect(this._manager.context.destination)}play(){return this._state!==Zt&&this.stop(),this._state=ft,this._playWhenLoaded=!1,this._waitingContextSuspension?!1:this._manager.suspended?(this._manager.once("resume",this._playAudioImmediate,this),this._waitingContextSuspension=!0,!1):(this._playAudioImmediate(),!0)}_playAudioImmediate(){if(this._waitingContextSuspension=!1,this._state!==ft)return;this.source||this._createSource();let e=pt(this._startOffset,this.duration);e=pt(this._startTime+e,this._sound.duration),this._startOffset=null,this._duration?this.source.start(0,e,this._duration):this.source.start(0,e),this._startedAt=this._manager.context.currentTime,this._currentTime=0,this._currentOffset=e,this.volume=this._volume,this.loop=this._loop,this.pitch=this._pitch,this._manager.on("volumechange",this._onManagerVolumeChange,this),this._manager.on("suspend",this._onManagerSuspend,this),this._manager.on("resume",this._onManagerResume,this),this._manager.on("destroy",this._onManagerDestroy,this),this._suspendInstanceEvents||this._onPlay()}pause(){return this._playWhenLoaded=!1,this._state!==ft?!1:(this._state=Ln,this._waitingContextSuspension||(this._updateCurrentTime(),this._suspendEndEvent++,this.source.stop(0),this.source=null,this._startOffset=null,this._suspendInstanceEvents||this._onPause()),!0)}resume(){if(this._state!==Ln)return!1;if(this._state=ft,this._waitingContextSuspension)return!0;this.source||this._createSource();let e=this.currentTime;return this._startOffset!==null&&(e=pt(this._startOffset,this.duration),e=pt(this._startTime+e,this._sound.duration),this._startOffset=null),this._duration?this.source.start(0,e,this._duration):this.source.start(0,e),this._startedAt=this._manager.context.currentTime,this._currentOffset=e,this.volume=this._volume,this.loop=this._loop,this.pitch=this._pitch,this._playWhenLoaded=!1,this._suspendInstanceEvents||this._onResume(),!0}stop(){if(this._playWhenLoaded=!1,this._state===Zt)return!1;const e=this._state===ft;return this._state=Zt,this._waitingContextSuspension||(this._manager.off("volumechange",this._onManagerVolumeChange,this),this._manager.off("suspend",this._onManagerSuspend,this),this._manager.off("resume",this._onManagerResume,this),this._manager.off("destroy",this._onManagerDestroy,this),this._startedAt=0,this._currentTime=0,this._currentOffset=0,this._startOffset=null,this._suspendEndEvent++,e&&this.source&&this.source.stop(0),this.source=null,this._suspendInstanceEvents||this._onStop()),!0}setExternalNodes(e,t){if(!e){console.error("The firstNode must be a valid Audio Node");return}t||(t=e);const s=this._manager.context.destination;this._firstNode!==e&&(this._firstNode?this._connectorNode.disconnect(this._firstNode):this._connectorNode.disconnect(s),this._firstNode=e,this._connectorNode.connect(e)),this._lastNode!==t&&(this._lastNode&&this._lastNode.disconnect(s),this._lastNode=t,this._lastNode.connect(s))}clearExternalNodes(){const e=this._manager.context.destination;this._firstNode&&(this._connectorNode.disconnect(this._firstNode),this._firstNode=null),this._lastNode&&(this._lastNode.disconnect(e),this._lastNode=null),this._connectorNode.connect(e)}getExternalNodes(){return[this._firstNode,this._lastNode]}_createSource(){if(!this._sound)return null;const e=this._manager.context;return this._sound.buffer&&(this.source=e.createBufferSource(),this.source.buffer=this._sound.buffer,this.source.connect(this._inputNode),this.source.onended=this._endedHandler,this.source.loopStart=pt(this._startTime,this.source.buffer.duration),this._duration&&(this.source.loopEnd=Math.max(this.source.loopStart,pt(this._startTime+this._duration,this.source.buffer.duration)))),this.source}_updateCurrentTime(){this._currentTime=pt((this._manager.context.currentTime-this._startedAt)*this._pitch+this._currentOffset,this.duration)}_onManagerDestroy(){this.source&&this._state===ft&&(this.source.stop(0),this.source=null)}}Ws()||(Object.assign(Oi.prototype,{play:function(){return this._state!==Zt&&this.stop(),!this.source&&!this._createSource()?!1:(this.volume=this._volume,this.pitch=this._pitch,this.loop=this._loop,this.source.play(),this._state=ft,this._playWhenLoaded=!1,this._manager.on("volumechange",this._onManagerVolumeChange,this),this._manager.on("suspend",this._onManagerSuspend,this),this._manager.on("resume",this._onManagerResume,this),this._manager.on("destroy",this._onManagerDestroy,this),this._manager.suspended&&this._onManagerSuspend(),this._suspendInstanceEvents||this._onPlay(),!0)},pause:function(){return!this.source||this._state!==ft?!1:(this._suspendEndEvent++,this.source.pause(),this._playWhenLoaded=!1,this._state=Ln,this._startOffset=null,this._suspendInstanceEvents||this._onPause(),!0)},resume:function(){return!this.source||this._state!==Ln?!1:(this._state=ft,this._playWhenLoaded=!1,this.source.paused&&(this.source.play(),this._suspendInstanceEvents||this._onResume()),!0)},stop:function(){return!this.source||this._state===Zt?!1:(this._manager.off("volumechange",this._onManagerVolumeChange,this),this._manager.off("suspend",this._onManagerSuspend,this),this._manager.off("resume",this._onManagerResume,this),this._manager.off("destroy",this._onManagerDestroy,this),this._suspendEndEvent++,this.source.pause(),this._playWhenLoaded=!1,this._state=Zt,this._startOffset=null,this._suspendInstanceEvents||this._onStop(),!0)},setExternalNodes:function(){},clearExternalNodes:function(){},getExternalNodes:function(){return[null,null]},_onLoadedMetadata:function(){this.source.removeEventListener("loadedmetadata",this._loadedMetadataHandler),this._isReady=!0;let l=pt(this._startOffset,this.duration);l=pt(this._startTime+l,this._sound.duration),this._startOffset=null,this.source.currentTime=l},_createSource:function(){return this._sound&&this._sound.audio&&(this._isReady=!1,this.source=this._sound.audio.cloneNode(!0),this.source.addEventListener("loadedmetadata",this._loadedMetadataHandler),this.source.addEventListener("timeupdate",this._timeUpdateHandler),this.source.onended=this._endedHandler),this.source},_onTimeUpdate:function(){this._duration&&this.source.currentTime>pt(this._startTime+this._duration,this.source.duration)&&(this.loop?this.source.currentTime=pt(this._startTime,this.source.duration):(this.source.removeEventListener("timeupdate",this._timeUpdateHandler),this.source.pause(),this._onEnded()))},_onManagerDestroy:function(){this.source&&this.source.pause()}}),Object.defineProperty(Oi.prototype,"volume",{get:function(){return this._volume},set:function(l){l=k.clamp(l,0,1),this._volume=l,this.source&&(this.source.volume=l*this._manager.volume)}}),Object.defineProperty(Oi.prototype,"pitch",{get:function(){return this._pitch},set:function(l){this._pitch=Math.max(Number(l)||0,.01),this.source&&(this.source.playbackRate=this._pitch)}}),Object.defineProperty(Oi.prototype,"sound",{get:function(){return this._sound},set:function(l){this.stop(),this._sound=l}}),Object.defineProperty(Oi.prototype,"currentTime",{get:function(){return this._startOffset!==null?this._startOffset:this._state===Zt||!this.source?0:this.source.currentTime-this._startTime},set:function(l){l<0||(this._startOffset=l,this.source&&this._isReady&&(this.source.currentTime=pt(this._startTime+pt(l,this.duration),this._sound.duration),this._startOffset=null))}}));const Qy=1e4;class Pn extends Oi{constructor(e,t,s={}){super(e,t,s),this._position=new b,this._velocity=new b,s.position&&(this.position=s.position),this.maxDistance=s.maxDistance!==void 0?Number(s.maxDistance):Qy,this.refDistance=s.refDistance!==void 0?Number(s.refDistance):1,this.rollOffFactor=s.rollOffFactor!==void 0?Number(s.rollOffFactor):1,this.distanceModel=s.distanceModel!==void 0?s.distanceModel:ul}_initializeNodes(){this.gain=this._manager.context.createGain(),this.panner=this._manager.context.createPanner(),this.panner.connect(this.gain),this._inputNode=this.panner,this._connectorNode=this.gain,this._connectorNode.connect(this._manager.context.destination)}set position(e){this._position.copy(e);const t=this.panner;"positionX"in t?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition&&t.setPosition(e.x,e.y,e.z)}get position(){return this._position}set velocity(e){this._velocity.copy(e)}get velocity(){return this._velocity}set maxDistance(e){this.panner.maxDistance=e}get maxDistance(){return this.panner.maxDistance}set refDistance(e){this.panner.refDistance=e}get refDistance(){return this.panner.refDistance}set rollOffFactor(e){this.panner.rolloffFactor=e}get rollOffFactor(){return this.panner.rolloffFactor}set distanceModel(e){this.panner.distanceModel=e}get distanceModel(){return this.panner.distanceModel}}if(!Ws()){let l=new b;const e=function(s,i,n,r,a,o){l=l.sub2(s,i);const h=l.length();if(h<n)return 1;if(h>r)return 0;let c=0;return o===ul?c=1-a*(h-n)/(r-n):o===fl?c=n/(n+a*(h-n)):o===Lp&&(c=Math.pow(h/n,-a)),k.clamp(c,0,1)};Object.defineProperty(Pn.prototype,"position",{get:function(){return this._position},set:function(t){if(this._position.copy(t),this.source){const i=this._manager.listener.getPosition(),n=e(i,this._position,this.refDistance,this.maxDistance,this.rollOffFactor,this.distanceModel),r=this.volume;this.source.volume=r*n*this._manager.volume}}}),Object.defineProperty(Pn.prototype,"maxDistance",{get:function(){return this._maxDistance},set:function(t){this._maxDistance=t}}),Object.defineProperty(Pn.prototype,"refDistance",{get:function(){return this._refDistance},set:function(t){this._refDistance=t}}),Object.defineProperty(Pn.prototype,"rollOffFactor",{get:function(){return this._rollOffFactor},set:function(t){this._rollOffFactor=t}}),Object.defineProperty(Pn.prototype,"distanceModel",{get:function(){return this._distanceModel},set:function(t){this._distanceModel=t}})}const e0=0,Do=1,yt=2,Vt=3,_i=4,Fo=5,Oo=6,hc=7,cc=8,dc=9,uc=10,ld="none",t0="linear",hd=2,s0=0,i0=2,om=15,Hs=0,ut=1,cd=2,Bo=3,Kr=4,ie=0,ue=1,pe=2,n0=3,at=0,r0=1,a0=2,o0=3,dd=0,l0=1,Ze=0,hs=1,Is=2,ds=3,us=4,h0=5,er=6,Ji={};Ji[Ze]="PCF3";Ji[hs]="VSM8";Ji[Is]="VSM16";Ji[ds]="VSM32";Ji[us]="PCF5";Ji[h0]="PCF1";const ud=1,fc=0,lm=0,as=0,c0=1,oo=0,d0=1,os=0,Un=1,zr=0,Ii=1,wa=2,u0=0,f0=1,Ns=0,Ll=1,p0="mul",pc=0,hm=1,m0=2,ko=3,zo=0,_0=1,g0=2,y0=3,x0=4,v0=0,Zr=1,mc=2,_c=1,Uo=2,cm=4,dm=8,um=16,fm=32,No=64,fd=128,Vo=256,pm=512,Go=1024,Wo=2048,Ho=4096,pd=8192,Jr=0,Qr=1,Xo=2,Ls=0,gc=1,fs=1,Ds=2,Fs=4,Nn=0,Os=1,Qt=2,jn=3,Bi=4,$l="forward",S0="depth",b0="pick",du="shadow",ri=0,je=1,We=2,lo=1,Ta=0,yc=0,w0=1,T0=2,uu=3,C0=4,A0=5,fu=1,En=2,pu=4,M0=8,md=0,xc=1,ce=0,Se=1;class _d{constructor(){this._refCount=0}incRefCount(){this._refCount++}decRefCount(){this._refCount--}get refCount(){return this._refCount}}class Vs{static set(e){Vs._graphicsDevice=e}static get(){return Vs._graphicsDevice}}Vs._graphicsDevice=null;let P0=0;class ls{constructor(){this.initDefaults()}initDefaults(){this.recreate=!1,this.verticesUsage=Rt,this.indicesUsage=Rt,this.maxVertices=0,this.maxIndices=0,this.vertexCount=0,this.indexCount=0,this.vertexStreamsUpdated=!1,this.indexStreamUpdated=!1,this.vertexStreamDictionary={},this.indices=null}_changeVertexCount(e,t){this.vertexCount||(this.vertexCount=e)}}ls.DEFAULT_COMPONENTS_POSITION=3;ls.DEFAULT_COMPONENTS_NORMAL=3;ls.DEFAULT_COMPONENTS_UV=2;ls.DEFAULT_COMPONENTS_COLORS=4;class E0{constructor(e,t,s,i){this.data=e,this.componentCount=t,this.dataType=s,this.dataTypeNormalize=i}}class Ht extends _d{constructor(e){super(),this.id=P0++,this.device=e||Vs.get(),this.vertexBuffer=null,this.indexBuffer=[null],this.primitive=[{type:0,base:0,count:0}],this.skin=null,this._morph=null,this._geometryData=null,this._aabb=new _e,this.boneAabb=null}set morph(e){e!==this._morph&&(this._morph&&this._morph.decRefCount(),this._morph=e,e&&e.incRefCount())}get morph(){return this._morph}set aabb(e){this._aabb=e}get aabb(){return this._aabb}destroy(){const e=this.morph;e&&(this.morph=null,e.refCount<1&&e.destroy()),this.vertexBuffer&&(this.vertexBuffer.destroy(),this.vertexBuffer=null);for(let t=0;t<this.indexBuffer.length;t++)this._destroyIndexBuffer(t);this.indexBuffer.length=0,this._geometryData=null}_destroyIndexBuffer(e){this.indexBuffer[e]&&(this.indexBuffer[e].destroy(),this.indexBuffer[e]=null)}_initBoneAabbs(e){this.boneAabb=[],this.boneUsed=[];let t,s,i,n,r;const a=[],o=[],h=this.boneUsed,c=this.skin.boneNames.length;let d,u,f;for(let y=0;y<c;y++)a[y]=new b(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),o[y]=new b(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);const p=new kr(this.vertexBuffer),_=p.element[Ne],m=p.element[ms],g=p.element[Et],w=this.vertexBuffer.numVertices;for(let y=0;y<w;y++){for(let T=0;T<4;T++)if(m.array[m.index+T]>0){const S=g.array[g.index+T];if(h[S]=!0,t=_.array[_.index],s=_.array[_.index+1],i=_.array[_.index+2],n=o[S],r=a[S],r.x>t&&(r.x=t),r.y>s&&(r.y=s),r.z>i&&(r.z=i),n.x<t&&(n.x=t),n.y<s&&(n.y=s),n.z<i&&(n.z=i),e){let A=d=t,x=u=s,P=f=i;for(let I=0;I<e.length;I++){const E=e[I],O=E.deltaPositions[y*3],D=E.deltaPositions[y*3+1],U=E.deltaPositions[y*3+2];O<0?A+=O:d+=O,D<0?x+=D:u+=D,U<0?P+=U:f+=U}r.x>A&&(r.x=A),r.y>x&&(r.y=x),r.z>P&&(r.z=P),n.x<d&&(n.x=d),n.y<u&&(n.y=u),n.z<f&&(n.z=f)}}p.next()}const v=this.vertexBuffer.getFormat().elements.find(y=>y.name===Ne);if(v&&v.normalize){const y=(()=>{switch(v.dataType){case Rl:return T=>Math.max(T/127,-1);case zs:return T=>T/255;case Il:return T=>Math.max(T/32767,-1);case Kn:return T=>T/65535;default:return T=>T}})();for(let T=0;T<c;T++)if(h[T]){const C=a[T],S=o[T];C.set(y(C.x),y(C.y),y(C.z)),S.set(y(S.x),y(S.y),y(S.z))}}for(let y=0;y<c;y++){const T=new _e;T.setMinMax(a[y],o[y]),this.boneAabb.push(T)}}_initGeometryData(){this._geometryData||(this._geometryData=new ls,this.vertexBuffer&&(this._geometryData.vertexCount=this.vertexBuffer.numVertices,this._geometryData.maxVertices=this.vertexBuffer.numVertices),this.indexBuffer.length>0&&this.indexBuffer[0]&&(this._geometryData.indexCount=this.indexBuffer[0].numIndices,this._geometryData.maxIndices=this.indexBuffer[0].numIndices))}clear(e,t,s=0,i=0){this._initGeometryData(),this._geometryData.initDefaults(),this._geometryData.recreate=!0,this._geometryData.maxVertices=s,this._geometryData.maxIndices=i,this._geometryData.verticesUsage=e?Rt:Nr,this._geometryData.indicesUsage=t?Rt:Nr}setVertexStream(e,t,s,i,n=ge,r=!1){this._initGeometryData();const a=i||t.length/s;this._geometryData._changeVertexCount(a,e),this._geometryData.vertexStreamsUpdated=!0,this._geometryData.vertexStreamDictionary[e]=new E0(t,s,n,r)}getVertexStream(e,t){let s=0,i=!1;if(this._geometryData){const n=this._geometryData.vertexStreamDictionary[e];n&&(i=!0,s=this._geometryData.vertexCount,ArrayBuffer.isView(t)?t.set(n.data):(t.length=0,t.push(n.data)))}return i||this.vertexBuffer&&(s=new kr(this.vertexBuffer).readData(e,t)),s}setPositions(e,t=ls.DEFAULT_COMPONENTS_POSITION,s){this.setVertexStream(Ne,e,t,s,ge,!1)}setNormals(e,t=ls.DEFAULT_COMPONENTS_NORMAL,s){this.setVertexStream(xt,e,t,s,ge,!1)}setUvs(e,t,s=ls.DEFAULT_COMPONENTS_UV,i){this.setVertexStream(Zd+e,t,s,i,ge,!1)}setColors(e,t=ls.DEFAULT_COMPONENTS_COLORS,s){this.setVertexStream(lt,e,t,s,ge,!1)}setColors32(e,t){this.setVertexStream(lt,e,ls.DEFAULT_COMPONENTS_COLORS,t,zs,!0)}setIndices(e,t){this._initGeometryData(),this._geometryData.indexStreamUpdated=!0,this._geometryData.indices=e,this._geometryData.indexCount=t||e.length}getPositions(e){return this.getVertexStream(Ne,e)}getNormals(e){return this.getVertexStream(xt,e)}getUvs(e,t){return this.getVertexStream(Zd+e,t)}getColors(e){return this.getVertexStream(lt,e)}getIndices(e){let t=0;if(this._geometryData&&this._geometryData.indices){const s=this._geometryData.indices;t=this._geometryData.indexCount,ArrayBuffer.isView(e)?e.set(s):(e.length=0,e.push(s))}else this.indexBuffer.length>0&&this.indexBuffer[0]&&(t=this.indexBuffer[0].readData(e));return t}update(e=ts,t=!0){if(this._geometryData){if(t){const n=this._geometryData.vertexStreamDictionary[Ne];n&&n.componentCount===3&&this._aabb.compute(n.data,this._geometryData.vertexCount)}let s=this._geometryData.recreate;this._geometryData.vertexCount>this._geometryData.maxVertices&&(s=!0,this._geometryData.maxVertices=this._geometryData.vertexCount),s&&this.vertexBuffer&&(this.vertexBuffer.destroy(),this.vertexBuffer=null);let i=this._geometryData.recreate;this._geometryData.indexCount>this._geometryData.maxIndices&&(i=!0,this._geometryData.maxIndices=this._geometryData.indexCount),i&&this.indexBuffer.length>0&&this.indexBuffer[0]&&(this.indexBuffer[0].destroy(),this.indexBuffer[0]=null),this._geometryData.vertexStreamsUpdated&&this._updateVertexBuffer(),this._geometryData.indexStreamUpdated&&this._updateIndexBuffer(),this.primitive[0].type=e,this.indexBuffer.length>0&&this.indexBuffer[0]?this._geometryData.indexStreamUpdated&&(this.primitive[0].count=this._geometryData.indexCount,this.primitive[0].indexed=!0):this._geometryData.vertexStreamsUpdated&&(this.primitive[0].count=this._geometryData.vertexCount,this.primitive[0].indexed=!1),this._geometryData.vertexCount=0,this._geometryData.indexCount=0,this._geometryData.vertexStreamsUpdated=!1,this._geometryData.indexStreamUpdated=!1,this._geometryData.recreate=!1,this.updateRenderStates()}}_buildVertexFormat(e){const t=[];for(const s in this._geometryData.vertexStreamDictionary){const i=this._geometryData.vertexStreamDictionary[s];t.push({semantic:s,components:i.componentCount,type:i.dataType,normalize:i.dataTypeNormalize})}return new dt(this.device,t,e)}_updateVertexBuffer(){if(!this.vertexBuffer){const s=this._geometryData.maxVertices,i=this._buildVertexFormat(s);this.vertexBuffer=new Us(this.device,i,s,this._geometryData.verticesUsage)}const e=new kr(this.vertexBuffer),t=this._geometryData.vertexCount;for(const s in this._geometryData.vertexStreamDictionary){const i=this._geometryData.vertexStreamDictionary[s];e.writeData(s,i.data,t),delete this._geometryData.vertexStreamDictionary[s]}e.end()}_updateIndexBuffer(){if(this.indexBuffer.length<=0||!this.indexBuffer[0]){const t=this._geometryData.maxVertices>65535?qi:Bs;this.indexBuffer[0]=new mi(this.device,t,this._geometryData.maxIndices,this._geometryData.indicesUsage)}const e=this._geometryData.indices;e&&(this.indexBuffer[0].writeData(e,this._geometryData.indexCount),this._geometryData.indices=null)}prepareRenderState(e){e===Ii?this.generateWireframe():e===wa&&(this.primitive[wa]={type:na,base:0,count:this.vertexBuffer?this.vertexBuffer.numVertices:0,indexed:!1})}updateRenderStates(){this.primitive[wa]&&this.prepareRenderState(wa),this.primitive[Ii]&&this.prepareRenderState(Ii)}generateWireframe(){this._destroyIndexBuffer(Ii);const e=[];let t;if(this.indexBuffer.length>0&&this.indexBuffer[0]){const n=[[0,1],[1,2],[2,0]],r=this.primitive[zr].base,a=this.primitive[zr].count,o=this.indexBuffer[zr],h=new oc[o.format](o.storage),c={};for(let d=r;d<r+a;d+=3)for(let u=0;u<3;u++){const f=h[d+n[u][0]],p=h[d+n[u][1]],_=f>p?p<<16|f:f<<16|p;c[_]===void 0&&(c[_]=0,e.push(f,p))}t=o.format}else{for(let n=0;n<this.vertexBuffer.numVertices;n+=3)e.push(n,n+1,n+1,n+2,n+2,n);t=e.length>65535?qi:Bs}const s=new mi(this.vertexBuffer.device,t,e.length);new oc[s.format](s.storage).set(e),s.unlock(),this.primitive[Ii]={type:bl,base:0,count:e.length,indexed:!0},this.indexBuffer[Ii]=s}}const At=4/64,Ft=1-At*2,tr=[];function R0(l,e){const t=e.length/3,s=l.length/3,i=new b,n=new b,r=new b,a=new b,o=new b,h=new b,c=[];for(let d=0;d<l.length;d++)c[d]=0;for(let d=0;d<t;d++){const u=e[d*3],f=e[d*3+1],p=e[d*3+2];i.set(l[u*3],l[u*3+1],l[u*3+2]),n.set(l[f*3],l[f*3+1],l[f*3+2]),r.set(l[p*3],l[p*3+1],l[p*3+2]),a.sub2(n,i),o.sub2(r,i),h.cross(a,o).normalize(),c[u*3]+=h.x,c[u*3+1]+=h.y,c[u*3+2]+=h.z,c[f*3]+=h.x,c[f*3+1]+=h.y,c[f*3+2]+=h.z,c[p*3]+=h.x,c[p*3+1]+=h.y,c[p*3+2]+=h.z}for(let d=0;d<s;d++){const u=c[d*3],f=c[d*3+1],p=c[d*3+2],_=1/Math.sqrt(u*u+f*f+p*p);c[d*3]*=_,c[d*3+1]*=_,c[d*3+2]*=_}return c}function Qi(l,e,t,s){const i=s.length/3,n=l.length/3,r=new b,a=new b,o=new b,h=new V,c=new V,d=new V,u=new b,f=new b,p=new Float32Array(n*3),_=new Float32Array(n*3),m=[];for(let T=0;T<i;T++){const C=s[T*3],S=s[T*3+1],A=s[T*3+2];r.set(l[C*3],l[C*3+1],l[C*3+2]),a.set(l[S*3],l[S*3+1],l[S*3+2]),o.set(l[A*3],l[A*3+1],l[A*3+2]),h.set(t[C*2],t[C*2+1]),c.set(t[S*2],t[S*2+1]),d.set(t[A*2],t[A*2+1]);const x=a.x-r.x,P=o.x-r.x,I=a.y-r.y,E=o.y-r.y,O=a.z-r.z,D=o.z-r.z,U=c.x-h.x,W=d.x-h.x,M=c.y-h.y,R=d.y-h.y,L=U*R-W*M;if(L===0)u.set(0,1,0),f.set(1,0,0);else{const F=1/L;u.set((R*x-M*P)*F,(R*I-M*E)*F,(R*O-M*D)*F),f.set((U*P-W*x)*F,(U*E-W*I)*F,(U*D-W*O)*F)}p[C*3+0]+=u.x,p[C*3+1]+=u.y,p[C*3+2]+=u.z,p[S*3+0]+=u.x,p[S*3+1]+=u.y,p[S*3+2]+=u.z,p[A*3+0]+=u.x,p[A*3+1]+=u.y,p[A*3+2]+=u.z,_[C*3+0]+=f.x,_[C*3+1]+=f.y,_[C*3+2]+=f.z,_[S*3+0]+=f.x,_[S*3+1]+=f.y,_[S*3+2]+=f.z,_[A*3+0]+=f.x,_[A*3+1]+=f.y,_[A*3+2]+=f.z}const g=new b,w=new b,v=new b,y=new b;for(let T=0;T<n;T++){v.set(e[T*3],e[T*3+1],e[T*3+2]),g.set(p[T*3],p[T*3+1],p[T*3+2]),w.set(_[T*3],_[T*3+1],_[T*3+2]);const C=v.dot(g);y.copy(v).mulScalar(C),y.sub2(g,y).normalize(),m[T*4]=y.x,m[T*4+1]=y.y,m[T*4+2]=y.z,y.cross(v,g),m[T*4+3]=y.dot(w)<0?-1:1}return m}function Gs(l,e,t){const s=new Ht(l);return s.setPositions(e),t&&(t.normals&&s.setNormals(t.normals),t.tangents&&s.setVertexStream(ps,t.tangents,4),t.colors&&s.setColors32(t.colors),t.uvs&&s.setUvs(0,t.uvs),t.uvs1&&s.setUvs(1,t.uvs1),t.blendIndices&&s.setVertexStream(Et,t.blendIndices,4,t.blendIndices.length/4,zs),t.blendWeights&&s.setVertexStream(ms,t.blendWeights,4),t.indices&&s.setIndices(t.indices)),s.update(),s}function I0(l,e){const t=e&&e.tubeRadius!==void 0?e.tubeRadius:.2,s=e&&e.ringRadius!==void 0?e.ringRadius:.3,i=e&&e.segments!==void 0?e.segments:30,n=e&&e.sides!==void 0?e.sides:20,r=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,a=[],o=[],h=[],c=[];for(let u=0;u<=n;u++)for(let f=0;f<=i;f++){const p=Math.cos(2*Math.PI*f/i)*(s+t*Math.cos(2*Math.PI*u/n)),_=Math.sin(2*Math.PI*u/n)*t,m=Math.sin(2*Math.PI*f/i)*(s+t*Math.cos(2*Math.PI*u/n)),g=Math.cos(2*Math.PI*f/i)*Math.cos(2*Math.PI*u/n),w=Math.sin(2*Math.PI*u/n),v=Math.sin(2*Math.PI*f/i)*Math.cos(2*Math.PI*u/n),y=u/n,T=1-f/i;if(a.push(p,_,m),o.push(g,w,v),h.push(y,1-T),u<n&&f<i){const C=u*(i+1)+f,S=(u+1)*(i+1)+f,A=u*(i+1)+(f+1),x=(u+1)*(i+1)+(f+1);c.push(C,S,A),c.push(S,x,A)}}const d={normals:o,uvs:h,uvs1:h,indices:c};return r&&(d.tangents=Qi(a,o,h,c)),Gs(l,a,d)}function gd(l,e,t,s,i,n){const r=new b,a=new b,o=new b,h=new b,c=new b,d=new b,u=[],f=[],p=[],_=[],m=[];let g;if(t>0)for(let w=0;w<=s;w++)for(let v=0;v<=i;v++){const y=v/i*2*Math.PI-Math.PI,T=Math.sin(y),C=Math.cos(y);c.set(T*l,-t/2,C*l),h.set(T*e,t/2,C*e),r.lerp(c,h,w/s),a.sub2(h,c).normalize(),d.set(C,0,-T),o.cross(d,a).normalize(),u.push(r.x,r.y,r.z),f.push(o.x,o.y,o.z);let S=v/i,A=w/s;p.push(S,1-A);const x=A;if(A=S,S=x,S=S*Ft+At,A=A*Ft+At,S/=3,_.push(S,1-A),w<s&&v<i){const P=w*(i+1)+v,I=w*(i+1)+(v+1),E=(w+1)*(i+1)+v,O=(w+1)*(i+1)+(v+1);m.push(P,I,E),m.push(I,O,E)}}if(n){const w=Math.floor(i/2),v=i,y=t/2;for(let T=0;T<=w;T++){const C=T*Math.PI*.5/w,S=Math.sin(C),A=Math.cos(C);for(let x=0;x<=v;x++){const P=x*2*Math.PI/v-Math.PI/2,I=Math.sin(P),O=Math.cos(P)*S,D=A,U=I*S;let W=1-x/v,M=1-T/w;u.push(O*e,D*e+y,U*e),f.push(O,D,U),p.push(W,1-M),W=W*Ft+At,M=M*Ft+At,W/=3,M/=3,W+=1/3,_.push(W,1-M)}}g=(s+1)*(i+1);for(let T=0;T<w;++T)for(let C=0;C<v;++C){const S=T*(v+1)+C,A=S+v+1;m.push(g+S+1,g+A,g+S),m.push(g+S+1,g+A+1,g+A)}for(let T=0;T<=w;T++){const C=Math.PI*.5+T*Math.PI*.5/w,S=Math.sin(C),A=Math.cos(C);for(let x=0;x<=v;x++){const P=x*2*Math.PI/v-Math.PI/2,I=Math.sin(P),O=Math.cos(P)*S,D=A,U=I*S;let W=1-x/v,M=1-T/w;u.push(O*e,D*e-y,U*e),f.push(O,D,U),p.push(W,1-M),W=W*Ft+At,M=M*Ft+At,W/=3,M/=3,W+=2/3,_.push(W,1-M)}}g=(s+1)*(i+1)+(v+1)*(w+1);for(let T=0;T<w;++T)for(let C=0;C<v;++C){const S=T*(v+1)+C,A=S+v+1;m.push(g+S+1,g+A,g+S),m.push(g+S+1,g+A+1,g+A)}}else{if(g=(s+1)*(i+1),l>0)for(let w=0;w<i;w++){const v=w/i*2*Math.PI,y=Math.sin(v),T=-t/2,C=Math.cos(v);let S=1-(y+1)/2,A=(C+1)/2;u.push(y*l,T,C*l),f.push(0,-1,0),p.push(S,1-A),S=S*Ft+At,A=A*Ft+At,S/=3,A/=3,S+=1/3,_.push(S,1-A),w>1&&m.push(g,g+w,g+w-1)}if(g+=i,e>0)for(let w=0;w<i;w++){const v=w/i*2*Math.PI,y=Math.sin(v),T=t/2,C=Math.cos(v);let S=1-(y+1)/2,A=(C+1)/2;u.push(y*e,T,C*e),f.push(0,1,0),p.push(S,1-A),S=S*Ft+At,A=A*Ft+At,S/=3,A/=3,S+=2/3,_.push(S,1-A),w>1&&m.push(g,g+w-1,g+w)}}return{positions:u,normals:f,uvs:p,uvs1:_,indices:m}}function L0(l,e){let t=e&&(e.radius||e.baseRadius);t=t!==void 0?t:.5;const s=e&&e.height!==void 0?e.height:1,i=e&&e.heightSegments!==void 0?e.heightSegments:5,n=e&&e.capSegments!==void 0?e.capSegments:20,r=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,a=gd(t,t,s,i,n,!1);return r&&(a.tangents=Qi(a.positions,a.normals,a.uvs,a.indices)),Gs(l,a.positions,a)}function D0(l,e){const t=e&&e.radius!==void 0?e.radius:.3,s=e&&e.height!==void 0?e.height:1,i=e&&e.heightSegments!==void 0?e.heightSegments:1,n=e&&e.sides!==void 0?e.sides:20,r=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,a=gd(t,t,s-2*t,i,n,!0);return r&&(a.tangents=Qi(a.positions,a.normals,a.uvs,a.indices)),Gs(l,a.positions,a)}function F0(l,e){const t=e&&e.baseRadius!==void 0?e.baseRadius:.5,s=e&&e.peakRadius!==void 0?e.peakRadius:0,i=e&&e.height!==void 0?e.height:1,n=e&&e.heightSegments!==void 0?e.heightSegments:5,r=e&&e.capSegments!==void 0?e.capSegments:18,a=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,o=gd(t,s,i,n,r,!1);return a&&(o.tangents=Qi(o.positions,o.normals,o.uvs,o.indices)),Gs(l,o.positions,o)}function O0(l,e){const t=e&&e.radius!==void 0?e.radius:.5,s=e&&e.latitudeBands!==void 0?e.latitudeBands:16,i=e&&e.longitudeBands!==void 0?e.longitudeBands:16,n=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,r=[],a=[],o=[],h=[];for(let d=0;d<=s;d++){const u=d*Math.PI/s,f=Math.sin(u),p=Math.cos(u);for(let _=0;_<=i;_++){const m=_*2*Math.PI/i-Math.PI/2,g=Math.sin(m),v=Math.cos(m)*f,y=p,T=g*f,C=1-_/i,S=1-d/s;r.push(v*t,y*t,T*t),a.push(v,y,T),o.push(C,1-S)}}for(let d=0;d<s;++d)for(let u=0;u<i;++u){const f=d*(i+1)+u,p=f+i+1;h.push(f+1,p,f),h.push(f+1,p+1,p)}const c={normals:a,uvs:o,uvs1:o,indices:h};return n&&(c.tangents=Qi(r,a,o,h)),Gs(l,r,c)}function B0(l,e){const t=e&&e.halfExtents!==void 0?e.halfExtents:new V(.5,.5),s=e&&e.widthSegments!==void 0?e.widthSegments:5,i=e&&e.lengthSegments!==void 0?e.lengthSegments:5,n=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,r=[],a=[],o=[],h=[];let c=0;for(let u=0;u<=s;u++)for(let f=0;f<=i;f++){const p=-t.x+2*t.x*u/s,_=0,m=-(-t.y+2*t.y*f/i),g=u/s,w=f/i;r.push(p,_,m),a.push(0,1,0),o.push(g,1-w),u<s&&f<i&&(h.push(c+i+1,c+1,c),h.push(c+i+1,c+i+2,c+1)),c++}const d={normals:a,uvs:o,uvs1:o,indices:h};return n&&(d.tangents=Qi(r,a,o,h)),Gs(l,r,d)}function mm(l,e){const t=e&&e.halfExtents!==void 0?e.halfExtents:new b(.5,.5,.5),s=e&&e.widthSegments!==void 0?e.widthSegments:1,i=e&&e.lengthSegments!==void 0?e.lengthSegments:1,n=e&&e.heightSegments!==void 0?e.heightSegments:1,r=e&&e.calculateTangents!==void 0?e.calculateTangents:!1,a=[new b(-t.x,-t.y,t.z),new b(t.x,-t.y,t.z),new b(t.x,t.y,t.z),new b(-t.x,t.y,t.z),new b(t.x,-t.y,-t.z),new b(-t.x,-t.y,-t.z),new b(-t.x,t.y,-t.z),new b(t.x,t.y,-t.z)],o=[[0,1,3],[4,5,7],[3,2,6],[1,0,4],[1,4,2],[5,0,6]],h=[[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,0],[-1,0,0]],c={FRONT:0,BACK:1,TOP:2,BOTTOM:3,RIGHT:4,LEFT:5},d=[],u=[],f=[],p=[],_=[];let m=0;const g=(v,y,T)=>{const C=new b,S=new b,A=new b,x=new b;for(let P=0;P<=y;P++)for(let I=0;I<=T;I++){C.lerp(a[o[v][0]],a[o[v][1]],P/y),S.lerp(a[o[v][0]],a[o[v][2]],I/T),A.sub2(S,a[o[v][0]]),x.add2(C,A);let E=P/y,O=I/T;d.push(x.x,x.y,x.z),u.push(h[v][0],h[v][1],h[v][2]),f.push(E,1-O),E=E*Ft+At,O=O*Ft+At,E/=3,O/=3,E+=v%3/3,O+=Math.floor(v/3)/3,p.push(E,1-O),P<y&&I<T&&(_.push(m+T+1,m+1,m),_.push(m+T+1,m+T+2,m+1)),m++}};g(c.FRONT,s,n),g(c.BACK,s,n),g(c.TOP,s,i),g(c.BOTTOM,s,i),g(c.RIGHT,i,n),g(c.LEFT,i,n);const w={normals:u,uvs:f,uvs1:p,indices:_};return r&&(w.tangents=Qi(d,u,f,_)),Gs(l,d,w)}function _m(l,e){let t=null;for(let s=0;s<tr.length;s++)tr[s].type===e&&tr[s].device===l&&(t=tr[s].primData);if(!t){let s,i;switch(e){case"box":s=mm(l,{halfExtents:new b(.5,.5,.5)}),i={x:2,y:2,z:2,uv:2/3};break;case"capsule":s=D0(l,{radius:.5,height:2}),i={x:Math.PI*2,y:Math.PI,z:Math.PI*2,uv:1/3+1/3/3*2};break;case"cone":s=F0(l,{baseRadius:.5,peakRadius:0,height:1}),i={x:2.54,y:2.54,z:2.54,uv:1/3+1/3/3};break;case"cylinder":s=L0(l,{radius:.5,height:1}),i={x:Math.PI,y:.79*2,z:Math.PI,uv:1/3+1/3/3*2};break;case"plane":s=B0(l,{halfExtents:new V(.5,.5),widthSegments:1,lengthSegments:1}),i={x:0,y:1,z:0,uv:1};break;case"sphere":s=O0(l,{radius:.5}),i={x:Math.PI,y:Math.PI,z:Math.PI,uv:1};break;case"torus":s=I0(l,{tubeRadius:.2,ringRadius:.3}),i={x:Math.PI*.5*.5-Math.PI*.1*.1,y:.4,z:.4,uv:1};break;default:throw new Error("Invalid primitive type: "+e)}s.incRefCount(),t={mesh:s,area:i},tr.push({type:e,device:l,primData:t})}return t}var k0=`
uniform float alpha_ref;

void alphaTest(float a) {
    if (a < alpha_ref) discard;
}
`,z0=`
void addAmbient() {
    dDiffuseLight += light_globalAmbient;
}
`,U0=`
#ifndef ENV_ATLAS
#define ENV_ATLAS
uniform sampler2D texture_envAtlas;
#endif

void addAmbient() {
    vec3 dir = normalize(cubeMapRotate(dNormalW) * vec3(-1.0, 1.0, 1.0));
    vec2 uv = mapUv(toSphericalUv(dir), vec4(128.0, 256.0 + 128.0, 64.0, 32.0) / atlasSize);

    vec4 raw = texture2D(texture_envAtlas, uv);
    vec3 linear = $DECODE(raw);
    dDiffuseLight += processEnvironment(linear);
}
`,N0=`
uniform vec3 ambientSH[9];

void addAmbient() {
    vec3 n = cubeMapRotate(dNormalW);

    vec3 color =
        ambientSH[0] +
        ambientSH[1] * n.x +
        ambientSH[2] * n.y +
        ambientSH[3] * n.z +
        ambientSH[4] * n.x * n.z +
        ambientSH[5] * n.z * n.y +
        ambientSH[6] * n.y * n.x +
        ambientSH[7] * (3.0 * n.z * n.z - 1.0) +
        ambientSH[8] * (n.x * n.x - n.y * n.y);

    dDiffuseLight += processEnvironment(max(color, vec3(0.0)));
}
`,V0=`

void getAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif
}
`,G0=`
void occludeDiffuse() {
    dDiffuseLight *= dAo;
}
`,W0=`
uniform float material_occludeSpecularIntensity;

void occludeSpecular() {
    // approximated specular occlusion from AO
    float specPow = exp2(dGlossiness * 11.0);
    // http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx
    float specOcc = saturate(pow(dot(dNormalW, dViewDirW) + dAo, 0.01*specPow) - 1.0 + dAo);
    specOcc = mix(1.0, specOcc, material_occludeSpecularIntensity);

    dSpecularLight *= specOcc;
    dReflection *= specOcc;
}
`,H0=`
void occludeSpecular() {
    // approximated specular occlusion from AO
    float specPow = exp2(dGlossiness * 11.0);
    // http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx
    float specOcc = saturate(pow(dot(dNormalW, dViewDirW) + dAo, 0.01*specPow) - 1.0 + dAo);

    dSpecularLight *= specOcc;
    dReflection *= specOcc;
}
`,X0=`
void occludeSpecular() {
    dSpecularLight *= dAo;
    dReflection *= dAo;
}
`,q0=`
uniform float material_occludeSpecularIntensity;

void occludeSpecular() {
    float specOcc = mix(1.0, dAo, material_occludeSpecularIntensity);
    dSpecularLight *= specOcc;
    dReflection *= specOcc;
}
`,j0=`
uniform vec3 view_position;

uniform vec3 light_globalAmbient;

float square(float x) {
    return x*x;
}

float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

vec3 saturate(vec3 x) {
    return clamp(x, vec3(0.0), vec3(1.0));
}
`,Y0=`
attribute vec3 vertex_position;
attribute vec3 vertex_normal;
attribute vec4 vertex_tangent;
attribute vec2 vertex_texCoord0;
attribute vec2 vertex_texCoord1;
attribute vec4 vertex_color;

uniform mat4 matrix_viewProjection;
uniform mat4 matrix_model;
uniform mat3 matrix_normal;

vec3 dPositionW;
mat4 dModelMatrix;
mat3 dNormalMatrix;
`,$0=`
#define NINESLICED

varying vec2 vMask;
varying vec2 vTiledUv;

uniform mediump vec4 innerOffset;
uniform mediump vec2 outerScale;
uniform mediump vec4 atlasRect;

vec2 nineSlicedUv;
`,K0=`
#define NINESLICED

varying vec2 vMask;
varying vec2 vTiledUv;

uniform mediump vec4 innerOffset;
uniform mediump vec2 outerScale;
uniform mediump vec4 atlasRect;
`,Z0=`
#define NINESLICED
#define NINESLICETILED

varying vec2 vMask;
varying vec2 vTiledUv;

uniform mediump vec4 innerOffset;
uniform mediump vec2 outerScale;
uniform mediump vec4 atlasRect;

vec2 nineSlicedUv;
`,J0=`
#define SHADOWBIAS

float getShadowBias(float resolution, float maxBias) {
    return maxBias;
}
`,Q0=`
varying vec2 vUv0;

uniform sampler2D source;
uniform vec2 pixelOffset;

#ifdef GAUSS
uniform float weight[SAMPLES];
#endif

#ifdef PACKED
float decodeFloatRG(vec2 rg) {
    return rg.y*(1.0/255.0) + rg.x;
}

vec2 encodeFloatRG( float v ) {
    vec2 enc = vec2(1.0, 255.0) * v;
    enc = fract(enc);
    enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);
    return enc;
}
#endif

void main(void) {
    vec3 moments = vec3(0.0);
    vec2 uv = vUv0 - pixelOffset * (float(SAMPLES) * 0.5);
    for (int i=0; i<SAMPLES; i++) {
        vec4 c = texture2D(source, uv + pixelOffset * float(i));

        #ifdef PACKED
        c.xy = vec2(decodeFloatRG(c.xy), decodeFloatRG(c.zw));
        #endif

        #ifdef GAUSS
        moments += c.xyz * weight[i];
        #else
        moments += c.xyz;
        #endif
    }

    #ifndef GAUSS
    moments /= float(SAMPLES);
    #endif

    #ifdef PACKED
    gl_FragColor = vec4(encodeFloatRG(moments.x), encodeFloatRG(moments.y));
    #else
    gl_FragColor = vec4(moments.x, moments.y, moments.z, 1.0);
    #endif
}
`,ex=`
#ifdef MAPFLOAT
uniform float material_clearCoat;
#endif

void getClearCoat() {
    ccSpecularity = 1.0;

    #ifdef MAPFLOAT
    ccSpecularity *= material_clearCoat;
    #endif

    #ifdef MAPTEXTURE
    ccSpecularity *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    ccSpecularity *= saturate(vVertexColor.$VC);
    #endif
}
`,tx=`
#ifdef MAPFLOAT
uniform float material_clearCoatGlossiness;
#endif

void getClearCoatGlossiness() {
    ccGlossiness = 1.0;

    #ifdef MAPFLOAT
    ccGlossiness *= material_clearCoatGlossiness;
    #endif

    #ifdef MAPTEXTURE
    ccGlossiness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    ccGlossiness *= saturate(vVertexColor.$VC);
    #endif

    ccGlossiness += 0.0000001;
}
`,sx=`
#ifdef MAPTEXTURE
uniform float material_clearCoatBumpiness;
#endif

void getClearCoatNormal() {
#ifdef MAPTEXTURE
    vec3 normalMap = unpackNormal(texture2DBias($SAMPLER, $UV, textureBias));
    normalMap = mix(vec3(0.0, 0.0, 1.0), normalMap, material_clearCoatBumpiness);
    ccNormalW = normalize(dTBN * normalMap);
#else
    ccNormalW = dVertexNormalW;
#endif
}
`,ix=`
// Converts unnormalized direction vector to a cubemap face index [0..5] and uv coordinates within the face in [0..1] range.
// Additionally offset to a tile in atlas within 3x3 subdivision is provided
vec2 getCubemapFaceCoordinates(const vec3 dir, out float faceIndex, out vec2 tileOffset)
{
    vec3 vAbs = abs(dir);
    float ma;
    vec2 uv;
    if (vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {   // front / back

        faceIndex = dir.z < 0.0 ? 5.0 : 4.0;
        ma = 0.5 / vAbs.z;
        uv = vec2(dir.z < 0.0 ? -dir.x : dir.x, -dir.y);

        tileOffset.x = 2.0;
        tileOffset.y = dir.z < 0.0 ? 1.0 : 0.0;

    } else if(vAbs.y >= vAbs.x) {  // top index 2, bottom index 3

        faceIndex = dir.y < 0.0 ? 3.0 : 2.0;
        ma = 0.5 / vAbs.y;
        uv = vec2(dir.x, dir.y < 0.0 ? -dir.z : dir.z);

        tileOffset.x = 1.0;
        tileOffset.y = dir.y < 0.0 ? 1.0 : 0.0;

    } else {    // left / right

        faceIndex = dir.x < 0.0 ? 1.0 : 0.0;
        ma = 0.5 / vAbs.x;
        uv = vec2(dir.x < 0.0 ? dir.z : -dir.z, -dir.y);

        tileOffset.x = 0.0;
        tileOffset.y = dir.x < 0.0 ? 1.0 : 0.0;

    }
    return uv * ma + 0.5;
}

// converts unnormalized direction vector to a texture coordinate for a cubemap face stored within texture atlas described by the viewport
vec2 getCubemapAtlasCoordinates(const vec3 omniAtlasViewport, float shadowEdgePixels, float shadowTextureResolution, const vec3 dir) {

    float faceIndex;
    vec2 tileOffset;
    vec2 uv = getCubemapFaceCoordinates(dir, faceIndex, tileOffset);

    // move uv coordinates inwards inside to compensate for larger fov when rendering shadow into atlas
    float atlasFaceSize = omniAtlasViewport.z;
    float tileSize = shadowTextureResolution * atlasFaceSize;
    float offset = shadowEdgePixels / tileSize;
    uv = uv * vec2(1.0 - offset * 2.0) + vec2(offset * 1.0);

    // scale uv coordinates to cube face area within the viewport
    uv *= atlasFaceSize;

    // offset into face of the atlas (3x3 grid)
    uv += tileOffset * atlasFaceSize;

    // offset into the atlas viewport
    uv += omniAtlasViewport.xy;

    return uv;
}
`,nx=`
vec3 _getCookieClustered(sampler2D tex, vec2 uv, float intensity, bool isRgb, vec4 cookieChannel) {
    vec4 pixel = mix(vec4(1.0), texture2D(tex, uv), intensity);
    return isRgb == true ? pixel.rgb : vec3(dot(pixel, cookieChannel));
}

// getCookie2D for clustered lighting including channel selector
vec3 getCookie2DClustered(sampler2D tex, mat4 transform, vec3 worldPosition, float intensity, bool isRgb, vec4 cookieChannel) {
    vec4 projPos = transform * vec4(worldPosition, 1.0);
    return _getCookieClustered(tex, projPos.xy / projPos.w, intensity, isRgb, cookieChannel);
}

// getCookie for clustered omni light with the cookie texture being stored in the cookie atlas
vec3 getCookieCubeClustered(sampler2D tex, vec3 dir, float intensity, bool isRgb, vec4 cookieChannel, float shadowTextureResolution, float shadowEdgePixels, vec3 omniAtlasViewport) {
    vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);
    return _getCookieClustered(tex, uv, intensity, isRgb, cookieChannel);
}
`,rx=`
// Clustered Omni Sampling using atlas

#ifdef GL2

    #if defined(CLUSTER_SHADOW_TYPE_PCF1)

    float getShadowOmniClusteredPCF1(sampler2DShadow shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        return textureShadow(shadowMap, vec3(uv, shadowZ));
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF3)

    float getShadowOmniClusteredPCF3(sampler2DShadow shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        dShadowCoord = vec3(uv, shadowZ);
        return getShadowPCF3x3(shadowMap, shadowParams.xyz);
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF5)

    float getShadowOmniClusteredPCF5(sampler2DShadow shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        dShadowCoord = vec3(uv, shadowZ);
        return getShadowPCF5x5(shadowMap, shadowParams.xyz);
    }

    #endif

#else

    #if defined(CLUSTER_SHADOW_TYPE_PCF1)

    float getShadowOmniClusteredPCF1(sampler2D shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        // no filter shadow sampling
        float depth = unpackFloat(textureShadow(shadowMap, uv));
        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        return depth > shadowZ ? 1.0 : 0.0;
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF3)

    float getShadowOmniClusteredPCF3(sampler2D shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        // pcf3
        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        dShadowCoord = vec3(uv, shadowZ);
        return getShadowPCF3x3(shadowMap, shadowParams.xyz);
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF5)

    // we don't have PCF5 implementation for webgl1, use PCF3
    float getShadowOmniClusteredPCF5(sampler2D shadowMap, vec4 shadowParams, vec3 omniAtlasViewport, float shadowEdgePixels, vec3 dir) {

        float shadowTextureResolution = shadowParams.x;
        vec2 uv = getCubemapAtlasCoordinates(omniAtlasViewport, shadowEdgePixels, shadowTextureResolution, dir);

        // pcf3
        float shadowZ = length(dir) * shadowParams.w + shadowParams.z;
        dShadowCoord = vec3(uv, shadowZ);
        return getShadowPCF3x3(shadowMap, shadowParams.xyz);
    }

    #endif

#endif


// Clustered Spot Sampling using atlas

#ifdef GL2

    #if defined(CLUSTER_SHADOW_TYPE_PCF1)

    float getShadowSpotClusteredPCF1(sampler2DShadow shadowMap, vec4 shadowParams) {
        return textureShadow(shadowMap, dShadowCoord);
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF3)

    float getShadowSpotClusteredPCF3(sampler2DShadow shadowMap, vec4 shadowParams) {
        return getShadowSpotPCF3x3(shadowMap, shadowParams);
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF5)

    float getShadowSpotClusteredPCF5(sampler2DShadow shadowMap, vec4 shadowParams) {
        return getShadowPCF5x5(shadowMap, shadowParams.xyz);
    }
    #endif

#else

    #if defined(CLUSTER_SHADOW_TYPE_PCF1)

    float getShadowSpotClusteredPCF1(sampler2D shadowMap, vec4 shadowParams) {

        float depth = unpackFloat(textureShadow(shadowMap, dShadowCoord.xy));

        return depth > dShadowCoord.z ? 1.0 : 0.0;

    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF3)

    float getShadowSpotClusteredPCF3(sampler2D shadowMap, vec4 shadowParams) {
        return getShadowSpotPCF3x3(shadowMap, shadowParams);
    }

    #endif

    #if defined(CLUSTER_SHADOW_TYPE_PCF5)

    // we don't have PCF5 implementation for webgl1, use PCF3
    float getShadowSpotClusteredPCF5(sampler2D shadowMap, vec4 shadowParams) {
        return getShadowSpotPCF3x3(shadowMap, shadowParams);
    }

    #endif

#endif
`,ax=`
uniform sampler2D clusterWorldTexture;
uniform sampler2D lightsTexture8;
uniform highp sampler2D lightsTextureFloat;

// complex ifdef expression are not supported, handle it here
// defined(CLUSTER_COOKIES) || defined(CLUSTER_SHADOWS)
#if defined(CLUSTER_COOKIES)
    #define CLUSTER_COOKIES_OR_SHADOWS
#endif
#if defined(CLUSTER_SHADOWS)
    #define CLUSTER_COOKIES_OR_SHADOWS
#endif

#ifdef CLUSTER_SHADOWS
    #ifdef GL2
        // TODO: when VSM shadow is supported, it needs to use sampler2D in webgl2
        uniform sampler2DShadow shadowAtlasTexture;
    #else
        uniform sampler2D shadowAtlasTexture;
    #endif
#endif

#ifdef CLUSTER_COOKIES
    uniform sampler2D cookieAtlasTexture;
#endif

uniform float clusterPixelsPerCell;
uniform vec3 clusterCellsCountByBoundsSize;
uniform vec4 lightsTextureInvSize;
uniform vec3 clusterTextureSize;
uniform vec3 clusterBoundsMin;
uniform vec3 clusterBoundsDelta;
uniform vec3 clusterCellsDot;
uniform vec3 clusterCellsMax;
uniform vec2 clusterCompressionLimit0;
uniform vec2 shadowAtlasParams;

// structure storing light properties of a clustered light
struct ClusterLightData {

    // v coordinate to look up the light textures
    float lightV;

    // type of the light (spot or omni)
    float type;

    // area light shape
    float shape;

    // area light sizes / orientation
    vec3 halfWidth;
    vec3 halfHeight;

    // light follow mode
    float falloffMode;

    // 0.0 if the light doesn't cast shadows
    float shadowIntensity;

    // shadow bias values
    float shadowBias;
    float shadowNormalBias;

    // world space position
    vec3 position;

    // world space direction (spot light only)
    vec3 direction;

    // range of the light
    float range;

    // spot light inner and outer angle cosine
    float innerConeAngleCos;
    float outerConeAngleCos;

    // color
    vec3 color;

    // atlas viewport for omni light shadow and cookie (.xy is offset to the viewport slot, .z is size of the face in the atlas)
    vec3 omniAtlasViewport;

    // 1.0 if the light has a cookie texture
    float cookie;

    // 1.0 if cookie texture is rgb, otherwise it is using a single channel selectable by cookieChannelMask
    float cookieRgb;

    // intensity of the cookie
    float cookieIntensity;

    // channel mask - one of the channels has 1, the others are 0
    vec4 cookieChannelMask;

    // light mask
    float mask;
};

// Note: on some devices (tested on Pixel 3A XL), this matrix when stored inside the light struct has lower precision compared to
// when stored outside, so we store it outside to avoid spot shadow flickering. This might need to be done to other / all members
// of the structure if further similar issues are observed.

// shadow (spot light only) / cookie projection matrix
mat4 lightProjectionMatrix;

// macros for light properties
#define isClusteredLightCastShadow(light) ( light.shadowIntensity > 0.0 )
#define isClusteredLightCookie(light) (light.cookie > 0.5 )
#define isClusteredLightCookieRgb(light) (light.cookieRgb > 0.5 )
#define isClusteredLightSpot(light) ( light.type > 0.5 )
#define isClusteredLightFalloffLinear(light) ( light.falloffMode < 0.5 )

// macros to test light shape
// Note: Following functions need to be called serially in listed order as they do not test both '>' and '<'
#define isClusteredLightArea(light) ( light.shape > 0.1 )
#define isClusteredLightRect(light) ( light.shape < 0.3 )
#define isClusteredLightDisk(light) ( light.shape < 0.6 )

// macro to test light mask (mesh accepts dynamic vs lightmapped lights)
#ifdef CLUSTER_MESH_DYNAMIC_LIGHTS
    // accept lights marked as dynamic or both dynamic and lightmapped
    #define acceptLightMask(light) ( light.mask < 0.75)
#else
    // accept lights marked as lightmapped or both dynamic and lightmapped
    #define acceptLightMask(light) ( light.mask > 0.25)
#endif

vec4 decodeClusterLowRange4Vec4(vec4 d0, vec4 d1, vec4 d2, vec4 d3) {
    return vec4(
        bytes2floatRange4(d0, -2.0, 2.0),
        bytes2floatRange4(d1, -2.0, 2.0),
        bytes2floatRange4(d2, -2.0, 2.0),
        bytes2floatRange4(d3, -2.0, 2.0)
    );
}

vec4 sampleLightsTexture8(const ClusterLightData clusterLightData, float index) {
    return texture2DLodEXT(lightsTexture8, vec2(index * lightsTextureInvSize.z, clusterLightData.lightV), 0.0);
}

vec4 sampleLightTextureF(const ClusterLightData clusterLightData, float index) {
    return texture2DLodEXT(lightsTextureFloat, vec2(index * lightsTextureInvSize.x, clusterLightData.lightV), 0.0);
}

void decodeClusterLightCore(inout ClusterLightData clusterLightData, float lightIndex) {

    // read omni light properties
    clusterLightData.lightV = (lightIndex + 0.5) * lightsTextureInvSize.w;

    // shared data from 8bit texture
    vec4 lightInfo = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_FLAGS);
    clusterLightData.type = lightInfo.x;
    clusterLightData.shape = lightInfo.y;
    clusterLightData.falloffMode = lightInfo.z;
    clusterLightData.shadowIntensity = lightInfo.w;

    // color
    vec4 colorA = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_COLOR_A);
    vec4 colorB = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_COLOR_B);
    clusterLightData.color = vec3(bytes2float2(colorA.xy), bytes2float2(colorA.zw), bytes2float2(colorB.xy)) * clusterCompressionLimit0.y;

    // cookie
    clusterLightData.cookie = colorB.z;

    // light mask
    clusterLightData.mask = colorB.w;

    #ifdef CLUSTER_TEXTURE_FLOAT

        vec4 lightPosRange = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_POSITION_RANGE);
        clusterLightData.position = lightPosRange.xyz;
        clusterLightData.range = lightPosRange.w;

        // spot light direction
        vec4 lightDir_Unused = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_SPOT_DIRECTION);
        clusterLightData.direction = lightDir_Unused.xyz;

    #else   // 8bit

        vec4 encPosX = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_POSITION_X);
        vec4 encPosY = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_POSITION_Y);
        vec4 encPosZ = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_POSITION_Z);
        clusterLightData.position = vec3(bytes2float4(encPosX), bytes2float4(encPosY), bytes2float4(encPosZ)) * clusterBoundsDelta + clusterBoundsMin;

        vec4 encRange = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_RANGE);
        clusterLightData.range = bytes2float4(encRange) * clusterCompressionLimit0.x;

        // spot light direction
        vec4 encDirX = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_SPOT_DIRECTION_X);
        vec4 encDirY = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_SPOT_DIRECTION_Y);
        vec4 encDirZ = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_SPOT_DIRECTION_Z);
        clusterLightData.direction = vec3(bytes2float4(encDirX), bytes2float4(encDirY), bytes2float4(encDirZ)) * 2.0 - 1.0;

    #endif
}

void decodeClusterLightSpot(inout ClusterLightData clusterLightData) {

    // spot light cos angles
    vec4 coneAngle = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_SPOT_ANGLES);
    clusterLightData.innerConeAngleCos = bytes2float2(coneAngle.xy) * 2.0 - 1.0;
    clusterLightData.outerConeAngleCos = bytes2float2(coneAngle.zw) * 2.0 - 1.0;
}

void decodeClusterLightOmniAtlasViewport(inout ClusterLightData clusterLightData) {
    #ifdef CLUSTER_TEXTURE_FLOAT
        clusterLightData.omniAtlasViewport = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_PROJ_MAT_0).xyz;
    #else
        vec4 viewportA = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_ATLAS_VIEWPORT_A);
        vec4 viewportB = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_ATLAS_VIEWPORT_B);
        clusterLightData.omniAtlasViewport = vec3(bytes2float2(viewportA.xy), bytes2float2(viewportA.zw), bytes2float2(viewportB.xy));
    #endif
}

void decodeClusterLightAreaData(inout ClusterLightData clusterLightData) {
    #ifdef CLUSTER_TEXTURE_FLOAT
        clusterLightData.halfWidth = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_AREA_DATA_WIDTH).xyz;
        clusterLightData.halfHeight = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_AREA_DATA_HEIGHT).xyz;
    #else
        vec4 areaWidthX = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_WIDTH_X);
        vec4 areaWidthY = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_WIDTH_Y);
        vec4 areaWidthZ = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_WIDTH_Z);
        clusterLightData.halfWidth = vec3(mantissaExponent2Float(areaWidthX), mantissaExponent2Float(areaWidthY), mantissaExponent2Float(areaWidthZ));

        vec4 areaHeightX = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_HEIGHT_X);
        vec4 areaHeightY = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_HEIGHT_Y);
        vec4 areaHeightZ = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_AREA_DATA_HEIGHT_Z);
        clusterLightData.halfHeight = vec3(mantissaExponent2Float(areaHeightX), mantissaExponent2Float(areaHeightY), mantissaExponent2Float(areaHeightZ));
    #endif
}

void decodeClusterLightProjectionMatrixData(inout ClusterLightData clusterLightData) {
    
    // shadow matrix
    #ifdef CLUSTER_TEXTURE_FLOAT
        vec4 m0 = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_PROJ_MAT_0);
        vec4 m1 = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_PROJ_MAT_1);
        vec4 m2 = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_PROJ_MAT_2);
        vec4 m3 = sampleLightTextureF(clusterLightData, CLUSTER_TEXTURE_F_PROJ_MAT_3);
    #else
        vec4 m00 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_00);
        vec4 m01 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_01);
        vec4 m02 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_02);
        vec4 m03 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_03);
        vec4 m0 = decodeClusterLowRange4Vec4(m00, m01, m02, m03);

        vec4 m10 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_10);
        vec4 m11 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_11);
        vec4 m12 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_12);
        vec4 m13 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_13);
        vec4 m1 = decodeClusterLowRange4Vec4(m10, m11, m12, m13);

        vec4 m20 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_20);
        vec4 m21 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_21);
        vec4 m22 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_22);
        vec4 m23 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_23);
        vec4 m2 = decodeClusterLowRange4Vec4(m20, m21, m22, m23);

        vec4 m30 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_30);
        vec4 m31 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_31);
        vec4 m32 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_32);
        vec4 m33 = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_PROJ_MAT_33);
        vec4 m3 = vec4(mantissaExponent2Float(m30), mantissaExponent2Float(m31), mantissaExponent2Float(m32), mantissaExponent2Float(m33));
    #endif
    
    lightProjectionMatrix = mat4(m0, m1, m2, m3);
}

void decodeClusterLightShadowData(inout ClusterLightData clusterLightData) {
    
    // shadow biases
    vec4 biases = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_SHADOW_BIAS);
    clusterLightData.shadowBias = bytes2floatRange2(biases.xy, -1.0, 20.0),
    clusterLightData.shadowNormalBias = bytes2float2(biases.zw);
}

void decodeClusterLightCookieData(inout ClusterLightData clusterLightData) {

    vec4 cookieA = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_COOKIE_A);
    clusterLightData.cookieIntensity = cookieA.x;
    clusterLightData.cookieRgb = cookieA.y;

    clusterLightData.cookieChannelMask = sampleLightsTexture8(clusterLightData, CLUSTER_TEXTURE_8_COOKIE_B);
}

void evaluateLight(ClusterLightData light) {

    dAtten3 = vec3(1.0);

    // evaluate omni part of the light
    getLightDirPoint(light.position);

    #ifdef CLUSTER_AREALIGHTS

    // distance attenuation
    if (isClusteredLightArea(light)) { // area light

        // area lights
        decodeClusterLightAreaData(light);

        // handle light shape
        if (isClusteredLightRect(light)) {
            calcRectLightValues(light.position, light.halfWidth, light.halfHeight);
        } else if (isClusteredLightDisk(light)) {
            calcDiskLightValues(light.position, light.halfWidth, light.halfHeight);
        } else { // sphere
            calcSphereLightValues(light.position, light.halfWidth, light.halfHeight);
        }

        dAtten = getFalloffWindow(light.range);

    } else

    #endif

    {   // punctual light

        if (isClusteredLightFalloffLinear(light))
            dAtten = getFalloffLinear(light.range);
        else
            dAtten = getFalloffInvSquared(light.range);
    }

    if (dAtten > 0.00001) {

        #ifdef CLUSTER_AREALIGHTS

        if (isClusteredLightArea(light)) { // area light

            // handle light shape
            if (isClusteredLightRect(light)) {
                dAttenD = getRectLightDiffuse() * 16.0;
            } else if (isClusteredLightDisk(light)) {
                dAttenD = getDiskLightDiffuse() * 16.0;
            } else { // sphere
                dAttenD = getSphereLightDiffuse() * 16.0;
            }

        } else

        #endif

        {
            dAtten *= getLightDiffuse();
        }

        // spot light falloff
        if (isClusteredLightSpot(light)) {
            decodeClusterLightSpot(light);
            dAtten *= getSpotEffect(light.direction, light.innerConeAngleCos, light.outerConeAngleCos);
        }

        #if defined(CLUSTER_COOKIES_OR_SHADOWS)

        if (dAtten > 0.00001) {

            // shadow / cookie
            if (isClusteredLightCastShadow(light) || isClusteredLightCookie(light)) {

                // shared shadow / cookie data depends on light type
                if (isClusteredLightSpot(light)) {
                    decodeClusterLightProjectionMatrixData(light);
                } else {
                    decodeClusterLightOmniAtlasViewport(light);
                }

                float shadowTextureResolution = shadowAtlasParams.x;
                float shadowEdgePixels = shadowAtlasParams.y;

                #ifdef CLUSTER_COOKIES

                // cookie
                if (isClusteredLightCookie(light)) {
                    decodeClusterLightCookieData(light);

                    if (isClusteredLightSpot(light)) {
                        dAtten3 = getCookie2DClustered(cookieAtlasTexture, lightProjectionMatrix, vPositionW, light.cookieIntensity, isClusteredLightCookieRgb(light), light.cookieChannelMask);
                    } else {
                        dAtten3 = getCookieCubeClustered(cookieAtlasTexture, dLightDirW, light.cookieIntensity, isClusteredLightCookieRgb(light), light.cookieChannelMask, shadowTextureResolution, shadowEdgePixels, light.omniAtlasViewport);
                    }
                }

                #endif

                #ifdef CLUSTER_SHADOWS

                // shadow
                if (isClusteredLightCastShadow(light)) {
                    decodeClusterLightShadowData(light);

                    vec4 shadowParams = vec4(shadowTextureResolution, light.shadowNormalBias, light.shadowBias, 1.0 / light.range);

                    if (isClusteredLightSpot(light)) {

                        // spot shadow
                        getShadowCoordPerspZbufferNormalOffset(lightProjectionMatrix, shadowParams);
                        
                        #if defined(CLUSTER_SHADOW_TYPE_PCF1)
                            float shadow = getShadowSpotClusteredPCF1(shadowAtlasTexture, shadowParams);
                        #elif defined(CLUSTER_SHADOW_TYPE_PCF3)
                            float shadow = getShadowSpotClusteredPCF3(shadowAtlasTexture, shadowParams);
                        #elif defined(CLUSTER_SHADOW_TYPE_PCF5)
                            float shadow = getShadowSpotClusteredPCF5(shadowAtlasTexture, shadowParams);
                        #endif
                        dAtten *= mix(1.0, shadow, light.shadowIntensity);

                    } else {

                        // omni shadow
                        normalOffsetPointShadow(shadowParams);  // normalBias adjusted for distance

                        #if defined(CLUSTER_SHADOW_TYPE_PCF1)
                            float shadow = getShadowOmniClusteredPCF1(shadowAtlasTexture, shadowParams, light.omniAtlasViewport, shadowEdgePixels, dLightDirW);
                        #elif defined(CLUSTER_SHADOW_TYPE_PCF3)
                            float shadow = getShadowOmniClusteredPCF3(shadowAtlasTexture, shadowParams, light.omniAtlasViewport, shadowEdgePixels, dLightDirW);
                        #elif defined(CLUSTER_SHADOW_TYPE_PCF5)
                            float shadow = getShadowOmniClusteredPCF5(shadowAtlasTexture, shadowParams, light.omniAtlasViewport, shadowEdgePixels, dLightDirW);
                        #endif
                        dAtten *= mix(1.0, shadow, light.shadowIntensity);
                    }
                }

                #endif
            }
        }

        #endif

        // diffuse / specular / clearcoat
        #ifdef CLUSTER_AREALIGHTS

        if (isClusteredLightArea(light)) { // area light

            // area light diffuse
            {
                vec3 areaDiffuse = (dAttenD * dAtten) * light.color * dAtten3;

                #if defined(LIT_SPECULAR)
                    #if defined(LIT_CONSERVE_ENERGY)
                        areaDiffuse = mix(areaDiffuse, vec3(0), dLTCSpecFres);
                    #endif
                #endif

                // area light diffuse - it does not mix diffuse lighting into specular attenuation
                dDiffuseLight += areaDiffuse;
            }

            // specular and clear coat are material settings and get included by a define based on the material
            #ifdef LIT_SPECULAR

                // area light specular
                float areaLightSpecular;

                if (isClusteredLightRect(light)) {
                    areaLightSpecular = getRectLightSpecular();
                } else if (isClusteredLightDisk(light)) {
                    areaLightSpecular = getDiskLightSpecular();
                } else { // sphere
                    areaLightSpecular = getSphereLightSpecular();
                }

                dSpecularLight += dLTCSpecFres * areaLightSpecular * dAtten * light.color * dAtten3;

                #ifdef LIT_CLEARCOAT

                    // area light specular clear coat
                    float areaLightSpecularCC;

                    if (isClusteredLightRect(light)) {
                        areaLightSpecularCC = getRectLightSpecularCC();
                    } else if (isClusteredLightDisk(light)) {
                        areaLightSpecularCC = getDiskLightSpecularCC();
                    } else { // sphere
                        areaLightSpecularCC = getSphereLightSpecularCC();
                    }

                    ccSpecularLight += ccLTCSpecFres * areaLightSpecularCC * dAtten * light.color  * dAtten3;

                #endif

            #endif

        } else

        #endif

        {    // punctual light

            // punctual light diffuse
            {
                vec3 punctualDiffuse = dAtten * light.color * dAtten3;

                #if defined(CLUSTER_AREALIGHTS)
                #if defined(LIT_SPECULAR)
                #if defined(LIT_CONSERVE_ENERGY)
                    punctualDiffuse = mix(punctualDiffuse, vec3(0), dSpecularity);
                #endif
                #endif
                #endif

                dDiffuseLight += punctualDiffuse;
            }
   
            // specular and clear coat are material settings and get included by a define based on the material
            #ifdef LIT_SPECULAR

                vec3 halfDir = normalize(-dLightDirNormW + dViewDirW);
                
                // specular
                #ifdef LIT_SPECULAR_FRESNEL
                    dSpecularLight += getLightSpecular(halfDir) * dAtten * light.color * dAtten3 * getFresnel(dot(dViewDirW, halfDir), dSpecularity);
                #else
                    dSpecularLight += getLightSpecular(halfDir) * dAtten * light.color * dAtten3 * dSpecularity;
                #endif

                #ifdef LIT_CLEARCOAT
                    #ifdef LIT_SPECULAR_FRESNEL
                        ccSpecularLight += getLightSpecularCC(halfDir) * dAtten * light.color * dAtten3 * getFresnelCC(dot(dViewDirW, halfDir));
                    #else
                        ccSpecularLight += getLightSpecularCC(halfDir) * dAtten * light.color * dAtten3;
                    #endif
                #endif

                #ifdef LIT_SHEEN
                    sSpecularLight += getLightSpecularSheen(halfDir) * dAtten * light.color * dAtten3;
                #endif

            #endif
        }
    }
}

void evaluateClusterLight(float lightIndex) {

    // decode core light data from textures
    ClusterLightData clusterLightData;
    decodeClusterLightCore(clusterLightData, lightIndex);

    // evaluate light if it uses accepted light mask
    if (acceptLightMask(clusterLightData))
        evaluateLight(clusterLightData);
}

void addClusteredLights() {
    // world space position to 3d integer cell cordinates in the cluster structure
    vec3 cellCoords = floor((vPositionW - clusterBoundsMin) * clusterCellsCountByBoundsSize);

    // no lighting when cell coordinate is out of range
    if (!(any(lessThan(cellCoords, vec3(0.0))) || any(greaterThanEqual(cellCoords, clusterCellsMax)))) {

        // cell index (mapping from 3d cell coordinates to linear memory)
        float cellIndex = dot(clusterCellsDot, cellCoords);

        // convert cell index to uv coordinates
        float clusterV = floor(cellIndex * clusterTextureSize.y);
        float clusterU = cellIndex - (clusterV * clusterTextureSize.x);
        clusterV = (clusterV + 0.5) * clusterTextureSize.z;

        // loop over maximum possible number of supported light cells
        const float maxLightCells = 256.0 / 4.0;  // 8 bit index, each stores 4 lights
        for (float lightCellIndex = 0.5; lightCellIndex < maxLightCells; lightCellIndex++) {

            vec4 lightIndices = texture2DLodEXT(clusterWorldTexture, vec2(clusterTextureSize.y * (clusterU + lightCellIndex), clusterV), 0.0);
            vec4 indices = lightIndices * 255.0;

            // evaluate up to 4 lights. This is written using a loop instead of manually unrolling to keep shader compile time smaller
            for (int i = 0; i < 4; i++) {
                
                if (indices.x <= 0.0)
                    return;

                evaluateClusterLight(indices.x); 
                indices = indices.yzwx;
            }

            // end of the cell array
            if (lightCellIndex > clusterPixelsPerCell) {
                break;
            }
        }
    }
}
`,ox=`
vec3 combineColor() {
    vec3 ret = vec3(0);
#ifdef LIT_OLD_AMBIENT
    ret += (dDiffuseLight - light_globalAmbient) * dAlbedo + material_ambient * light_globalAmbient;
#else
    ret += dAlbedo * dDiffuseLight;
#endif
#ifdef LIT_SPECULAR
    ret += dSpecularLight;
#endif
#ifdef LIT_REFLECTIONS
    ret += dReflection.rgb * dReflection.a;
#endif

#ifdef LIT_SHEEN
    float sheenScaling = 1.0 - max(max(sSpecularity.r, sSpecularity.g), sSpecularity.b) * 0.157;
    ret = ret * sheenScaling + (sSpecularLight + sReflection.rgb) * sSpecularity;
#endif
#ifdef LIT_CLEARCOAT
    float clearCoatScaling = 1.0 - ccFresnel * ccSpecularity;
    ret = ret * clearCoatScaling + (ccSpecularLight + ccReflection.rgb) * ccSpecularity;
#endif

    return ret;
}
`,lx=`
// light cookie functionality for non-clustered lights
vec4 getCookie2D(sampler2D tex, mat4 transform, float intensity) {
    vec4 projPos = transform * vec4(vPositionW, 1.0);
    projPos.xy /= projPos.w;
    return mix(vec4(1.0), texture2D(tex, projPos.xy), intensity);
}

vec4 getCookie2DClip(sampler2D tex, mat4 transform, float intensity) {
    vec4 projPos = transform * vec4(vPositionW, 1.0);
    projPos.xy /= projPos.w;
    if (projPos.x < 0.0 || projPos.x > 1.0 || projPos.y < 0.0 || projPos.y > 1.0 || projPos.z < 0.0) return vec4(0.0);
    return mix(vec4(1.0), texture2D(tex, projPos.xy), intensity);
}

vec4 getCookie2DXform(sampler2D tex, mat4 transform, float intensity, vec4 cookieMatrix, vec2 cookieOffset) {
    vec4 projPos = transform * vec4(vPositionW, 1.0);
    projPos.xy /= projPos.w;
    projPos.xy += cookieOffset;
    vec2 uv = mat2(cookieMatrix) * (projPos.xy-vec2(0.5)) + vec2(0.5);
    return mix(vec4(1.0), texture2D(tex, uv), intensity);
}

vec4 getCookie2DClipXform(sampler2D tex, mat4 transform, float intensity, vec4 cookieMatrix, vec2 cookieOffset) {
    vec4 projPos = transform * vec4(vPositionW, 1.0);
    projPos.xy /= projPos.w;
    projPos.xy += cookieOffset;
    if (projPos.x < 0.0 || projPos.x > 1.0 || projPos.y < 0.0 || projPos.y > 1.0 || projPos.z < 0.0) return vec4(0.0);
    vec2 uv = mat2(cookieMatrix) * (projPos.xy-vec2(0.5)) + vec2(0.5);
    return mix(vec4(1.0), texture2D(tex, uv), intensity);
}

vec4 getCookieCube(samplerCube tex, mat4 transform, float intensity) {
    return mix(vec4(1.0), textureCube(tex, dLightDirNormW * mat3(transform)), intensity);
}
`,hx=`
uniform vec3 envBoxMin, envBoxMax;

vec3 cubeMapProject(vec3 nrdir) {
    nrdir = cubeMapRotate(nrdir);

    vec3 rbmax = (envBoxMax - vPositionW) / nrdir;
    vec3 rbmin = (envBoxMin - vPositionW) / nrdir;

    vec3 rbminmax;
    rbminmax.x = nrdir.x>0.0? rbmax.x : rbmin.x;
    rbminmax.y = nrdir.y>0.0? rbmax.y : rbmin.y;
    rbminmax.z = nrdir.z>0.0? rbmax.z : rbmin.z;

    float fa = min(min(rbminmax.x, rbminmax.y), rbminmax.z);

    vec3 posonbox = vPositionW + nrdir * fa;
    vec3 envBoxPos = (envBoxMin + envBoxMax) * 0.5;
    return normalize(posonbox - envBoxPos);
}
`,cx=`
vec3 cubeMapProject(vec3 dir) {
    return cubeMapRotate(dir);
}
`,dx=`
#ifdef CUBEMAP_ROTATION
uniform mat3 cubeMapRotationMatrix;
#endif

vec3 cubeMapRotate(vec3 refDir) {
#ifdef CUBEMAP_ROTATION
    return refDir * cubeMapRotationMatrix;
#else
    return refDir;
#endif
}
`,gm=`
vec3 decodeLinear(vec4 raw) {
    return raw.rgb;
}

float decodeGamma(float raw) {
    return pow(raw, 2.2);
}

vec3 decodeGamma(vec3 raw) {
    return pow(raw, vec3(2.2));
}

vec3 decodeGamma(vec4 raw) {
    return pow(raw.xyz, vec3(2.2));
}

vec3 decodeRGBM(vec4 raw) {
    vec3 color = (8.0 * raw.a) * raw.rgb;
    return color * color;
}

vec3 decodeRGBP(vec4 raw) {
    vec3 color = raw.rgb * (-raw.a * 7.0 + 8.0);
    return color * color;
}

vec3 decodeRGBE(vec4 raw) {
    if (raw.a == 0.0) {
        return vec3(0.0, 0.0, 0.0);
    } else {
        return raw.xyz * pow(2.0, raw.w * 255.0 - 128.0);
    }
}

vec4 passThrough(vec4 raw) {
    return raw;
}
`,ux=`
vec3 detailMode_mul(vec3 c1, vec3 c2) {
    return c1 * c2;
}

vec3 detailMode_add(vec3 c1, vec3 c2) {
    return c1 + c2;
}

// https://en.wikipedia.org/wiki/Blend_modes#Screen
vec3 detailMode_screen(vec3 c1, vec3 c2) {
    return 1.0 - (1.0 - c1)*(1.0 - c2);
}

// https://en.wikipedia.org/wiki/Blend_modes#Overlay
vec3 detailMode_overlay(vec3 c1, vec3 c2) {
    return mix(1.0 - 2.0*(1.0 - c1)*(1.0 - c2), 2.0*c1*c2, step(c1, vec3(0.5)));
}

vec3 detailMode_min(vec3 c1, vec3 c2) {
    return min(c1, c2);
}

vec3 detailMode_max(vec3 c1, vec3 c2) {
    return max(c1, c2);
}
`,fx=`
#ifdef MAPCOLOR
uniform vec3 material_diffuse;
#endif

void getAlbedo() {
    dAlbedo = vec3(1.0);

#ifdef MAPCOLOR
    dAlbedo *= material_diffuse.rgb;
#endif

#ifdef MAPTEXTURE
    vec3 albedoBase = $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    dAlbedo *= addAlbedoDetail(albedoBase);
#endif

#ifdef MAPVERTEX
    dAlbedo *= gammaCorrectInput(saturate(vVertexColor.$VC));
#endif
}
`,px=`
vec3 addAlbedoDetail(vec3 albedo) {
#ifdef MAPTEXTURE
    vec3 albedoDetail = $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    return detailMode_$DETAILMODE(albedo, albedoDetail);
#else
    return albedo;
#endif
}
`,mx=`
#ifdef MAPCOLOR
uniform vec3 material_emissive;
#endif

#ifdef MAPFLOAT
uniform float material_emissiveIntensity;
#endif

void getEmission() {
    dEmission = vec3(1.0);

    #ifdef MAPFLOAT
    dEmission *= material_emissiveIntensity;
    #endif

    #ifdef MAPCOLOR
    dEmission *= material_emissive;
    #endif

    #ifdef MAPTEXTURE
    dEmission *= $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    #endif

    #ifdef MAPVERTEX
    dEmission *= gammaCorrectInput(saturate(vVertexColor.$VC));
    #endif
}
`,ym=`
vec4 encodeLinear(vec3 source) {
    return vec4(source, 1.0);
}

vec4 encodeGamma(vec3 source) {
    return vec4(pow(source + 0.0000001, vec3(1.0 / 2.2)), 1.0);
}

vec4 encodeRGBM(vec3 source) { // modified RGBM
    vec4 result;
    result.rgb = pow(source.rgb, vec3(0.5));
    result.rgb *= 1.0 / 8.0;

    result.a = saturate( max( max( result.r, result.g ), max( result.b, 1.0 / 255.0 ) ) );
    result.a = ceil(result.a * 255.0) / 255.0;

    result.rgb /= result.a;
    return result;
}

vec4 encodeRGBP(vec3 source) {
    // convert incoming linear to gamma(ish)
    vec3 gamma = pow(source, vec3(0.5));

    // calculate the maximum component clamped to 1..8
    float maxVal = min(8.0, max(1.0, max(gamma.x, max(gamma.y, gamma.z))));

    // calculate storage factor
    float v = 1.0 - ((maxVal - 1.0) / 7.0);

    // round the value for storage in 8bit channel
    v = ceil(v * 255.0) / 255.0;

    return vec4(gamma / (-v * 7.0 + 8.0), v);    
}

vec4 encodeRGBE(vec3 source) {
    float maxVal = max(source.x, max(source.y, source.z));
    if (maxVal < 1e-32) {
        return vec4(0, 0, 0, 0);
    } else {
        float e = ceil(log2(maxVal));
        return vec4(source / pow(2.0, e), (e + 128.0) / 255.0);
    }
}
`,_x=`
    gl_FragColor.rgb = combineColor();

    gl_FragColor.rgb += dEmission;
    gl_FragColor.rgb = addFog(gl_FragColor.rgb);

    #ifndef HDR
    gl_FragColor.rgb = toneMap(gl_FragColor.rgb);
    gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);
    #endif
`,gx=`
`,yx=`
// the envAtlas is fixed at 512 pixels. every equirect is generated with 1 pixel boundary.
const float atlasSize = 512.0;
const float seamSize = 1.0 / atlasSize;

// map a normalized equirect UV to the given rectangle (taking 1 pixel seam into account).
vec2 mapUv(vec2 uv, vec4 rect) {
    return vec2(mix(rect.x + seamSize, rect.x + rect.z - seamSize, uv.x),
                mix(rect.y + seamSize, rect.y + rect.w - seamSize, uv.y));
}

// map a normalized equirect UV and roughness level to the correct atlas rect.
vec2 mapRoughnessUv(vec2 uv, float level) {
    float t = 1.0 / exp2(level);
    return mapUv(uv, vec4(0, 1.0 - t, t, t * 0.5));
}

// map shiny level UV
vec2 mapShinyUv(vec2 uv, float level) {
    float t = 1.0 / exp2(level);
    return mapUv(uv, vec4(1.0 - t, 1.0 - t, t, t * 0.5));
}
`,xx=`
vec3 processEnvironment(vec3 color) {
    return color;
}
`,vx=`
uniform float skyboxIntensity;

vec3 processEnvironment(vec3 color) {
    return color * skyboxIntensity;
}
`,Sx=`
`,bx=`
`,wx=`
float getFalloffWindow(float lightRadius) {
    float sqrDist = dot(dLightDirW, dLightDirW);
    float invRadius = 1.0 / lightRadius;
    return square( saturate( 1.0 - square( sqrDist * square(invRadius) ) ) );
}

float getFalloffInvSquared(float lightRadius) {
    float sqrDist = dot(dLightDirW, dLightDirW);
    float falloff = 1.0 / (sqrDist + 1.0);
    float invRadius = 1.0 / lightRadius;

    falloff *= 16.0;
    falloff *= square( saturate( 1.0 - square( sqrDist * square(invRadius) ) ) );

    return falloff;
}
`,Tx=`
float getFalloffLinear(float lightRadius) {
    float d = length(dLightDirW);
    return max(((lightRadius - d) / lightRadius), 0.0);
}
`,Cx=`
vec3 fixSeams(vec3 vec, float mipmapIndex) {
    return vec;
}

vec3 fixSeams(vec3 vec) {
    return vec;
}

vec3 fixSeamsStatic(vec3 vec, float invRecMipSize) {
    return vec;
}

vec3 calcSeam(vec3 vec) {
    return vec3(0);
}

vec3 applySeam(vec3 vec, vec3 seam, float scale) {
    return vec;
}
`,Ax=`
vec3 fixSeams(vec3 vec, float mipmapIndex) {
    vec3 avec = abs(vec);
    float scale = 1.0 - exp2(mipmapIndex) / 128.0;
    float M = max(max(avec.x, avec.y), avec.z);
    if (avec.x != M) vec.x *= scale;
    if (avec.y != M) vec.y *= scale;
    if (avec.z != M) vec.z *= scale;
    return vec;
}

vec3 fixSeams(vec3 vec) {
    vec3 avec = abs(vec);
    float scale = 1.0 - 1.0 / 128.0;
    float M = max(max(avec.x, avec.y), avec.z);
    if (avec.x != M) vec.x *= scale;
    if (avec.y != M) vec.y *= scale;
    if (avec.z != M) vec.z *= scale;
    return vec;
}

vec3 fixSeamsStatic(vec3 vec, float invRecMipSize) {
    vec3 avec = abs(vec);
    float scale = invRecMipSize;
    float M = max(max(avec.x, avec.y), avec.z);
    if (avec.x != M) vec.x *= scale;
    if (avec.y != M) vec.y *= scale;
    if (avec.z != M) vec.z *= scale;
    return vec;
}

vec3 calcSeam(vec3 vec) {
    vec3 avec = abs(vec);
    float M = max(avec.x, max(avec.y, avec.z));
    return vec3(avec.x != M ? 1.0 : 0.0,
                avec.y != M ? 1.0 : 0.0,
                avec.z != M ? 1.0 : 0.0);
}

vec3 applySeam(vec3 vec, vec3 seam, float scale) {
    return vec * (seam * -scale + vec3(1.0));
}
`,Mx=`
// float unpacking functionality, complimentary to float-packing.js
float bytes2float2(vec2 data) {
    return dot(data, vec2(1.0, 1.0 / 255.0));
}

float bytes2float3(vec3 data) {
    return dot(data, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));
}

float bytes2float4(vec4 data) {
    return dot(data, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));
}

float bytes2floatRange2(vec2 data, float min, float max) {
    return mix(min, max, bytes2float2(data));
}

float bytes2floatRange3(vec3 data, float min, float max) {
    return mix(min, max, bytes2float3(data));
}

float bytes2floatRange4(vec4 data, float min, float max) {
    return mix(min, max, bytes2float4(data));
}

float mantissaExponent2Float(vec4 pack)
{
    float value = bytes2floatRange3(pack.xyz, -1.0, 1.0);
    float exponent = floor(pack.w * 255.0 - 127.0);
    return value * exp2(exponent);
}
`,Px=`
uniform vec3 fog_color;
uniform float fog_density;
float dBlendModeFogFactor = 1.0;

vec3 addFog(vec3 color) {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = exp(-depth * fog_density);
    fogFactor = clamp(fogFactor, 0.0, 1.0);
    return mix(fog_color * dBlendModeFogFactor, color, fogFactor);
}
`,Ex=`
uniform vec3 fog_color;
uniform float fog_density;
float dBlendModeFogFactor = 1.0;

vec3 addFog(vec3 color) {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = exp(-depth * depth * fog_density * fog_density);
    fogFactor = clamp(fogFactor, 0.0, 1.0);
    return mix(fog_color * dBlendModeFogFactor, color, fogFactor);
}
`,Rx=`
uniform vec3 fog_color;
uniform float fog_start;
uniform float fog_end;
float dBlendModeFogFactor = 1.0;

vec3 addFog(vec3 color) {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = (fog_end - depth) / (fog_end - fog_start);
    fogFactor = clamp(fogFactor, 0.0, 1.0);
    return mix(fog_color * dBlendModeFogFactor, color, fogFactor);
}
`,Ix=`
float dBlendModeFogFactor = 1.0;

vec3 addFog(vec3 color) {
    return color;
}
`,Lx=`
// Schlick's approximation
vec3 getFresnel(float cosTheta, vec3 f0) {
    float fresnel = pow(1.0 - max(cosTheta, 0.0), 5.0);
    float glossSq = dGlossiness * dGlossiness;
    vec3 ret = f0 + (max(vec3(glossSq), f0) - f0) * fresnel;
    #ifdef LIT_IRIDESCENCE
        return mix(ret, dIridescenceFresnel, vec3(dIridescence));
    #else
        return ret;
    #endif    
}

float getFresnelCC(float cosTheta) {
    float fresnel = pow(1.0 - max(cosTheta, 0.0), 5.0);
    return 0.04 + (1.0 - 0.04) * fresnel;
}
`,Dx=`
varying vec2 vUv0;

uniform sampler2D source;

void main(void) {
    gl_FragColor = texture2D(source, vUv0);
}
`,Fx=`
attribute vec2 vertex_position;

varying vec2 vUv0;

void main(void)
{
    gl_Position = vec4(vertex_position, 0.5, 1.0);
    vUv0 = vertex_position.xy*0.5+0.5;
}
`,Ox=`
float gammaCorrectInput(float color) {
    return color;
}

vec3 gammaCorrectInput(vec3 color) {
    return color;
}

vec4 gammaCorrectInput(vec4 color) {
    return color;
}

vec3 gammaCorrectOutput(vec3 color) {
    return color;
}
`,Bx=`
float gammaCorrectInput(float color) {
    return decodeGamma(color);
}

vec3 gammaCorrectInput(vec3 color) {
    return decodeGamma(color);
}

vec4 gammaCorrectInput(vec4 color) {
    return vec4(decodeGamma(color.xyz), color.w);
}

vec3 gammaCorrectOutput(vec3 color) {
#ifdef HDR
    return color;
#else
    return pow(color + 0.0000001, vec3(1.0 / 2.2));
#endif
}
`,kx=`
#ifdef MAPFLOAT
uniform float material_shininess;
#endif

void getGlossiness() {
    dGlossiness = 1.0;

    #ifdef MAPFLOAT
    dGlossiness *= material_shininess;
    #endif

    #ifdef MAPTEXTURE
    dGlossiness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dGlossiness *= saturate(vVertexColor.$VC);
    #endif

    dGlossiness += 0.0000001;
}
`,zx=`
uniform float material_iridescenceRefractionIndex;

#ifndef PI
#define PI 3.14159265
#endif

float iridescence_iorToFresnel(float transmittedIor, float incidentIor) {
    return pow((transmittedIor - incidentIor) / (transmittedIor + incidentIor), 2.0);
}

vec3 iridescence_iorToFresnel(vec3 transmittedIor, float incidentIor) {
    return pow((transmittedIor - vec3(incidentIor)) / (transmittedIor + vec3(incidentIor)), vec3(2.0));
}

vec3 iridescence_fresnelToIor(vec3 f0) {
    vec3 sqrtF0 = sqrt(f0);
    return (vec3(1.0) + sqrtF0) / (vec3(1.0) - sqrtF0);
}

vec3 iridescence_sensitivity(float opd, vec3 shift) {
    float phase = 2.0 * PI * opd * 1.0e-9;
    const vec3 val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);
    const vec3 pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);
    const vec3 var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);

    vec3 xyz = val * sqrt(2.0 * PI * var) * cos(pos * phase + shift) * exp(-pow(phase, 2.0) * var);
    xyz.x += 9.7470e-14 * sqrt(2.0 * PI * 4.5282e+09) * cos(2.2399e+06 * phase + shift[0]) * exp(-4.5282e+09 * pow(phase, 2.0));
    xyz /= vec3(1.0685e-07);

    const mat3 XYZ_TO_REC709 = mat3(
        3.2404542, -0.9692660,  0.0556434,
       -1.5371385,  1.8760108, -0.2040259,
       -0.4985314,  0.0415560,  1.0572252
    );

    return XYZ_TO_REC709 * xyz;
}

float iridescence_fresnel(float cosTheta, float f0) {
    float x = clamp(1.0 - cosTheta, 0.0, 1.0);
    float x2 = x * x;
    float x5 = x * x2 * x2;
    return f0 + (1.0 - f0) * x5;
} 

vec3 iridescence_fresnel(float cosTheta, vec3 f0) {
    float x = clamp(1.0 - cosTheta, 0.0, 1.0);
    float x2 = x * x;
    float x5 = x * x2 * x2; 
    return f0 + (vec3(1.0) - f0) * x5;
}

vec3 calcIridescence(float outsideIor, float cosTheta, vec3 base_f0) {

    float iridescenceIor = mix(outsideIor, material_iridescenceRefractionIndex, smoothstep(0.0, 0.03, dIridescenceThickness));
    float sinTheta2Sq = pow(outsideIor / iridescenceIor, 2.0) * (1.0 - pow(cosTheta, 2.0));
    float cosTheta2Sq = 1.0 - sinTheta2Sq;

    if (cosTheta2Sq < 0.0) {
        return vec3(1.0);
    }

    float cosTheta2 = sqrt(cosTheta2Sq);

    float r0 = iridescence_iorToFresnel(iridescenceIor, outsideIor);
    float r12 = iridescence_fresnel(cosTheta, r0);
    float r21 = r12;
    float t121 = 1.0 - r12;

    float phi12 = iridescenceIor < outsideIor ? PI : 0.0;
    float phi21 = PI - phi12;

    vec3 baseIor = iridescence_fresnelToIor(base_f0 + vec3(0.0001));
    vec3 r1 = iridescence_iorToFresnel(baseIor, iridescenceIor);
    vec3 r23 = iridescence_fresnel(cosTheta2, r1);

    vec3 phi23 = vec3(0.0);
    if (baseIor[0] < iridescenceIor) phi23[0] = PI;
    if (baseIor[1] < iridescenceIor) phi23[1] = PI;
    if (baseIor[2] < iridescenceIor) phi23[2] = PI;
    float opd = 2.0 * iridescenceIor * dIridescenceThickness * cosTheta2;
    vec3 phi = vec3(phi21) + phi23; 

    vec3 r123Sq = clamp(r12 * r23, 1e-5, 0.9999);
    vec3 r123 = sqrt(r123Sq);
    vec3 rs = pow(t121, 2.0) * r23 / (1.0 - r123Sq);

    vec3 c0 = r12 + rs;
    vec3 i = c0;

    vec3 cm = rs - t121;
    for (int m = 1; m <= 2; m++) {
        cm *= r123;
        vec3 sm = 2.0 * iridescence_sensitivity(float(m) * opd, float(m) * phi);
        i += cm * sm;
    }
    return max(i, vec3(0.0));
}

void getIridescence(float cosTheta) {
    dIridescenceFresnel = calcIridescence(1.0, cosTheta, dSpecularity);
}
`,Ux=`
#ifdef MAPFLOAT
uniform float material_iridescence;
#endif

void getIridescence() {
    float iridescence = 1.0;

    #ifdef MAPFLOAT
    iridescence *= material_iridescence;
    #endif

    #ifdef MAPTEXTURE
    iridescence *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    dIridescence = iridescence; 
}
`,Nx=`
uniform float material_iridescenceThicknessMax;

#ifdef MAPTEXTURE
uniform float material_iridescenceThicknessMin;
#endif

void getIridescenceThickness() {

    #ifdef MAPTEXTURE
    float blend = texture2DBias($SAMPLER, $UV, textureBias).$CH;
    float iridescenceThickness = mix(material_iridescenceThicknessMin, material_iridescenceThicknessMax, blend);
    #else
    float iridescenceThickness = material_iridescenceThicknessMax;
    #endif

    dIridescenceThickness = iridescenceThickness; 
}
`,Vx=`
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;
`,Gx=`
float getLightDiffuse() {
    return max(dot(dNormalW, -dLightDirNormW), 0.0);
}
`,Wx=`
void getLightDirPoint(vec3 lightPosW) {
    dLightDirW = vPositionW - lightPosW;
    dLightDirNormW = normalize(dLightDirW);
    dLightPosW = lightPosW;
}
`,Hx=`
void addLightMap() {
    dDiffuseLight += dLightmap;
}
`,Xx=`
void addLightMap() {
    if (dot(dLightmapDir, dLightmapDir) < 0.0001) {
        dDiffuseLight += dLightmap;
    } else {
        dLightDirNormW = dLightmapDir;

        float vlight = saturate(dot(dLightDirNormW, -dVertexNormalW));
        float flight = saturate(dot(dLightDirNormW, -dNormalW));
        float nlight = (flight / max(vlight, 0.01)) * 0.5;

        dDiffuseLight += dLightmap * nlight * 2.0;

        vec3 halfDirW = normalize(-dLightmapDir + dViewDirW);
        vec3 specularLight = dLightmap * getLightSpecular(halfDirW);

        #ifdef LIT_SPECULAR_FRESNEL
        specularLight *= getFresnel(dot(dViewDirW, halfDirW), dSpecularity);
        #endif

        dSpecularLight += specularLight;
    }
}
`,qx=`
uniform sampler2D texture_lightMap;
uniform sampler2D texture_dirLightMap;

void getLightMap() {
    dLightmap = $DECODE(texture2DBias(texture_lightMap, $UV, textureBias)).$CH;

    vec3 dir = texture2DBias(texture_dirLightMap, $UV, textureBias).xyz * 2.0 - 1.0;
    float dirDot = dot(dir, dir);
    dLightmapDir = (dirDot > 0.001) ? dir / sqrt(dirDot) : vec3(0.0);
}
`,jx=`
void getLightMap() {
    dLightmap = vec3(1.0);

    #ifdef MAPTEXTURE
    dLightmap *= $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    #endif

    #ifdef MAPVERTEX
    dLightmap *= saturate(vVertexColor.$VC);
    #endif
}
`,Yx=`
// Anisotropic GGX
float calcLightSpecular(float tGlossiness, vec3 tNormalW, vec3 h) {
    float PI = 3.141592653589793;
    float roughness = max((1.0 - tGlossiness) * (1.0 - tGlossiness), 0.001);
    float anisotropy = material_anisotropy * roughness;
 
    float at = max((roughness + anisotropy), roughness / 4.0);
    float ab = max((roughness - anisotropy), roughness / 4.0);

    float NoH = dot(tNormalW, h);
    float ToH = dot(dTBN[0], h);
    float BoH = dot(dTBN[1], h);

    float a2 = at * ab;
    vec3 v = vec3(ab * ToH, at * BoH, a2 * NoH);
    float v2 = dot(v, v);
    float w2 = a2 / v2;
    float D = a2 * w2 * w2 * (1.0 / PI);

    float ToV = dot(dTBN[0], dViewDirW);
    float BoV = dot(dTBN[1], dViewDirW);
    float ToL = dot(dTBN[0], -dLightDirNormW);
    float BoL = dot(dTBN[1], -dLightDirNormW);
    float NoV = dot(tNormalW, dViewDirW);
    float NoL = dot(tNormalW, -dLightDirNormW);

    float lambdaV = NoL * length(vec3(at * ToV, ab * BoV, NoV));
    float lambdaL = NoV * length(vec3(at * ToL, ab * BoL, NoL));
    float G = 0.5 / (lambdaV + lambdaL);

    return D * G;
}

float getLightSpecular(vec3 h) {
    return calcLightSpecular(dGlossiness, dNormalW, h);
}

#ifdef LIT_CLEARCOAT
float getLightSpecularCC(vec3 h) {
    return calcLightSpecular(ccGlossiness, ccNormalW, h);
}
#endif
`,$x=`
// Energy-conserving (hopefully) Blinn-Phong
float calcLightSpecular(float tGlossiness, vec3 tNormalW, vec3 h) {
    float nh = max( dot( h, tNormalW ), 0.0 );

    float specPow = exp2(tGlossiness * 11.0); // glossiness is linear, power is not; 0 - 2048

    // Hack: On Mac OS X, calling pow with zero for the exponent generates hideous artifacts so bias up a little
    specPow = max(specPow, 0.0001);

    return pow(nh, specPow) * (specPow + 2.0) / 8.0;
}

float getLightSpecular(vec3 h) {
    return calcLightSpecular(dGlossiness, dNormalW, h);
}

#ifdef LIT_CLEARCOAT
float getLightSpecularCC(vec3 h) {
    return calcLightSpecular(ccGlossiness, ccNormalW, h);
}
#endif
`,Kx=`
float calcLightSpecular(float tGlossiness, vec3 tReflDirW, vec3 h) {
    float specPow = tGlossiness;

    // Hack: On Mac OS X, calling pow with zero for the exponent generates hideous artifacts so bias up a little
    return pow(max(dot(tReflDirW, -dLightDirNormW), 0.0), specPow + 0.0001);
}

float getLightSpecular(vec3 h) {
    return calcLightSpecular(dGlossiness, dReflDirW, h);
}

#ifdef LIT_CLEARCOAT
float getLightSpecularCC(vec3 h) {
    return calcLightSpecular(ccGlossiness, ccReflDirW,h );
}
#endif
`,Zx=`

float sheenD(vec3 normal, vec3 h, float roughness) {
    float invR = 1.0 / (roughness * roughness);
    float cos2h = max(dot(normal, h), 0.0);
    cos2h *= cos2h;
    float sin2h = max(1.0 - cos2h, 0.0078125);
    return (2.0 + invR) * pow(sin2h, invR * 0.5) / (2.0 * PI);
}

float sheenV(vec3 normal, vec3 view, vec3 light) {
    float NoV = max(dot(normal, view), 0.000001);
    float NoL = max(dot(normal, light), 0.000001);
    return 1.0 / (4.0 * (NoL + NoV - NoL * NoV));
}

float getLightSpecularSheen(vec3 h) {
    float D = sheenD(dNormalW, h, sGlossiness);
    float V = sheenV(dNormalW, dViewDirW, -dLightDirNormW);
    return D * V;
}
`,Jx=`
// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

mat3 transposeMat3( const in mat3 m ) {
    mat3 tmp;
    tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
    tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
    tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
    return tmp;
}

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
    const float LUT_SIZE = 64.0;
    const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
    const float LUT_BIAS = 0.5 / LUT_SIZE;
    float dotNV = saturate( dot( N, V ) );
    // texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
    vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
    uv = uv * LUT_SCALE + LUT_BIAS;
    return uv;
}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {
    // Real-Time Area Lighting: a Journey from Research to Production (p.102)
    // An approximation of the form factor of a horizon-clipped rectangle.
    float l = length( f );
    return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
    float x = dot( v1, v2 );
    float y = abs( x );
    // rational polynomial approximation to theta / sin( theta ) / 2PI
    float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
    float b = 3.4175940 + ( 4.1616724 + y ) * y;
    float v = a / b;
    float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
    return cross( v1, v2 ) * theta_sintheta;
}

struct Coords {
    vec3 coord0;
    vec3 coord1;
    vec3 coord2;
    vec3 coord3;
};

float LTC_EvaluateRect( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in Coords rectCoords) {
    // bail if point is on back side of plane of light
    // assumes ccw winding order of light vertices
    vec3 v1 = rectCoords.coord1 - rectCoords.coord0;
    vec3 v2 = rectCoords.coord3 - rectCoords.coord0;
    
    vec3 lightNormal = cross( v1, v2 );
    // if( dot( lightNormal, P - rectCoords.coord0 ) < 0.0 ) return 0.0;
    float factor = sign(-dot( lightNormal, P - rectCoords.coord0 ));

    // construct orthonormal basis around N
    vec3 T1, T2;
    T1 = normalize( V - N * dot( V, N ) );
    T2 =  factor * cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system
    // compute transform
    mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
    // transform rect
    vec3 coords[ 4 ];
    coords[ 0 ] = mat * ( rectCoords.coord0 - P );
    coords[ 1 ] = mat * ( rectCoords.coord1 - P );
    coords[ 2 ] = mat * ( rectCoords.coord2 - P );
    coords[ 3 ] = mat * ( rectCoords.coord3 - P );
    // project rect onto sphere
    coords[ 0 ] = normalize( coords[ 0 ] );
    coords[ 1 ] = normalize( coords[ 1 ] );
    coords[ 2 ] = normalize( coords[ 2 ] );
    coords[ 3 ] = normalize( coords[ 3 ] );
    // calculate vector form factor
    vec3 vectorFormFactor = vec3( 0.0 );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
    // adjust for horizon clipping
    float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

    return result;
}

Coords dLTCCoords;
Coords getLTCLightCoords(vec3 lightPos, vec3 halfWidth, vec3 halfHeight){
    Coords coords;
    coords.coord0 = lightPos + halfWidth - halfHeight;
    coords.coord1 = lightPos - halfWidth - halfHeight;
    coords.coord2 = lightPos - halfWidth + halfHeight;
    coords.coord3 = lightPos + halfWidth + halfHeight;
    return coords;
}

float dSphereRadius;
Coords getSphereLightCoords(vec3 lightPos, vec3 halfWidth, vec3 halfHeight){
    // used for simple sphere light falloff
    // also, the code only handles a spherical light, it cannot be non-uniformly scaled in world space, and so we enforce it here
    dSphereRadius = max(length(halfWidth), length(halfHeight));

    // Billboard the 2d light quad to reflection vector, as it's used for specular. This allows us to use disk math for the sphere.
    vec3 f = reflect(normalize(lightPos - view_position), vNormalW);
    vec3 w = normalize(cross(f, halfHeight));
    vec3 h = normalize(cross(f, w));

    return getLTCLightCoords(lightPos, w * dSphereRadius, h * dSphereRadius);
}

// used for LTC LUT texture lookup
vec2 dLTCUV;
#ifdef LIT_CLEARCOAT
vec2 ccLTCUV;
#endif
vec2 getLTCLightUV(float tGlossiness, vec3 tNormalW)
{
    float roughness = max((1.0 - tGlossiness) * (1.0 - tGlossiness), 0.001);
    return LTC_Uv( tNormalW, dViewDirW, roughness );
}

//used for energy conservation and to modulate specular
vec3 dLTCSpecFres;
#ifdef LIT_CLEARCOAT
vec3 ccLTCSpecFres;
#endif
vec3 getLTCLightSpecFres(vec2 uv, vec3 tSpecularity)
{
    vec4 t2 = texture2DLodEXT(areaLightsLutTex2, uv, 0.0);

    #ifdef AREA_R8_G8_B8_A8_LUTS
    t2 *= vec4(0.693103,1,1,1);
    t2 += vec4(0.306897,0,0,0);
    #endif

    return tSpecularity * t2.x + ( vec3( 1.0 ) - tSpecularity) * t2.y;
}

void calcLTCLightValues()
{
    dLTCUV = getLTCLightUV(dGlossiness, dNormalW);
    dLTCSpecFres = getLTCLightSpecFres(dLTCUV, dSpecularity); 

#ifdef LIT_CLEARCOAT
    ccLTCUV = getLTCLightUV(ccGlossiness, ccNormalW);
    ccLTCSpecFres = getLTCLightSpecFres(ccLTCUV, vec3(ccSpecularity));
#endif
}

void calcRectLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight)
{
    dLTCCoords = getLTCLightCoords(lightPos, halfWidth, halfHeight);
}
void calcDiskLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight)
{
    calcRectLightValues(lightPos, halfWidth, halfHeight);
}
void calcSphereLightValues(vec3 lightPos, vec3 halfWidth, vec3 halfHeight)
{
    dLTCCoords = getSphereLightCoords(lightPos, halfWidth, halfHeight);
}

// An extended version of the implementation from
// "How to solve a cubic equation, revisited"
// http://momentsingraphics.de/?p=105
vec3 SolveCubic(vec4 Coefficient)
{
    float pi = 3.14159;
    // Normalize the polynomial
    Coefficient.xyz /= Coefficient.w;
    // Divide middle coefficients by three
    Coefficient.yz /= 3.0;

    float A = Coefficient.w;
    float B = Coefficient.z;
    float C = Coefficient.y;
    float D = Coefficient.x;

    // Compute the Hessian and the discriminant
    vec3 Delta = vec3(
        -Coefficient.z * Coefficient.z + Coefficient.y,
        -Coefficient.y * Coefficient.z + Coefficient.x,
        dot(vec2(Coefficient.z, -Coefficient.y), Coefficient.xy)
    );

    float Discriminant = dot(vec2(4.0 * Delta.x, -Delta.y), Delta.zy);

    vec3 RootsA, RootsD;

    vec2 xlc, xsc;

    // Algorithm A
    {
        float A_a = 1.0;
        float C_a = Delta.x;
        float D_a = -2.0 * B * Delta.x + Delta.y;

        // Take the cubic root of a normalized complex number
        float Theta = atan(sqrt(Discriminant), -D_a) / 3.0;

        float x_1a = 2.0 * sqrt(-C_a) * cos(Theta);
        float x_3a = 2.0 * sqrt(-C_a) * cos(Theta + (2.0 / 3.0) * pi);

        float xl;
        if ((x_1a + x_3a) > 2.0 * B)
            xl = x_1a;
        else
            xl = x_3a;

        xlc = vec2(xl - B, A);
    }

    // Algorithm D
    {
        float A_d = D;
        float C_d = Delta.z;
        float D_d = -D * Delta.y + 2.0 * C * Delta.z;

        // Take the cubic root of a normalized complex number
        float Theta = atan(D * sqrt(Discriminant), -D_d) / 3.0;

        float x_1d = 2.0 * sqrt(-C_d) * cos(Theta);
        float x_3d = 2.0 * sqrt(-C_d) * cos(Theta + (2.0 / 3.0) * pi);

        float xs;
        if (x_1d + x_3d < 2.0 * C)
            xs = x_1d;
        else
            xs = x_3d;

        xsc = vec2(-D, xs + C);
    }

    float E =  xlc.y * xsc.y;
    float F = -xlc.x * xsc.y - xlc.y * xsc.x;
    float G =  xlc.x * xsc.x;

    vec2 xmc = vec2(C * F - B * G, -B * F + C * E);

    vec3 Root = vec3(xsc.x / xsc.y, xmc.x / xmc.y, xlc.x / xlc.y);

    if (Root.x < Root.y && Root.x < Root.z)
        Root.xyz = Root.yxz;
    else if (Root.z < Root.x && Root.z < Root.y)
        Root.xyz = Root.xzy;

    return Root;
}

float LTC_EvaluateDisk(vec3 N, vec3 V, vec3 P, mat3 Minv, Coords points)
{
    // construct orthonormal basis around N
    vec3 T1, T2;
    T1 = normalize(V - N * dot(V, N));
    T2 = cross(N, T1);

    // rotate area light in (T1, T2, N) basis
    //mat3 R = transpose(mat3(T1, T2, N));
    mat3 R = transposeMat3( mat3( T1, T2, N ) );
    // polygon (allocate 5 vertices for clipping)
    vec3 L_[ 3 ];
    L_[ 0 ] = R * ( points.coord0 - P );
    L_[ 1 ] = R * ( points.coord1 - P );
    L_[ 2 ] = R * ( points.coord2 - P );

    vec3 Lo_i = vec3(0);

    // init ellipse
    vec3 C  = 0.5 * (L_[0] + L_[2]);
    vec3 V1 = 0.5 * (L_[1] - L_[2]);
    vec3 V2 = 0.5 * (L_[1] - L_[0]);

    C  = Minv * C;
    V1 = Minv * V1;
    V2 = Minv * V2;

    //if(dot(cross(V1, V2), C) > 0.0)
    //    return 0.0;

    // compute eigenvectors of ellipse
    float a, b;
    float d11 = dot(V1, V1);
    float d22 = dot(V2, V2);
    float d12 = dot(V1, V2);
    if (abs(d12) / sqrt(d11 * d22) > 0.0001)
    {
        float tr = d11 + d22;
        float det = -d12 * d12 + d11 * d22;

        // use sqrt matrix to solve for eigenvalues
        det = sqrt(det);
        float u = 0.5 * sqrt(tr - 2.0 * det);
        float v = 0.5 * sqrt(tr + 2.0 * det);
        float e_max = (u + v) * (u + v);
        float e_min = (u - v) * (u - v);

        vec3 V1_, V2_;

        if (d11 > d22)
        {
            V1_ = d12 * V1 + (e_max - d11) * V2;
            V2_ = d12 * V1 + (e_min - d11) * V2;
        }
        else
        {
            V1_ = d12*V2 + (e_max - d22)*V1;
            V2_ = d12*V2 + (e_min - d22)*V1;
        }

        a = 1.0 / e_max;
        b = 1.0 / e_min;
        V1 = normalize(V1_);
        V2 = normalize(V2_);
    }
    else
    {
        a = 1.0 / dot(V1, V1);
        b = 1.0 / dot(V2, V2);
        V1 *= sqrt(a);
        V2 *= sqrt(b);
    }

    vec3 V3 = cross(V1, V2);
    if (dot(C, V3) < 0.0)
        V3 *= -1.0;

    float L  = dot(V3, C);
    float x0 = dot(V1, C) / L;
    float y0 = dot(V2, C) / L;

    float E1 = inversesqrt(a);
    float E2 = inversesqrt(b);

    a *= L * L;
    b *= L * L;

    float c0 = a * b;
    float c1 = a * b * (1.0 + x0 * x0 + y0 * y0) - a - b;
    float c2 = 1.0 - a * (1.0 + x0 * x0) - b * (1.0 + y0 * y0);
    float c3 = 1.0;

    vec3 roots = SolveCubic(vec4(c0, c1, c2, c3));
    float e1 = roots.x;
    float e2 = roots.y;
    float e3 = roots.z;

    vec3 avgDir = vec3(a * x0 / (a - e2), b * y0 / (b - e2), 1.0);

    mat3 rotate = mat3(V1, V2, V3);

    avgDir = rotate * avgDir;
    avgDir = normalize(avgDir);

    float L1 = sqrt(-e2 / e3);
    float L2 = sqrt(-e2 / e1);

    float formFactor = L1 * L2 * inversesqrt((1.0 + L1 * L1) * (1.0 + L2 * L2));
    
    const float LUT_SIZE = 64.0;
    const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
    const float LUT_BIAS = 0.5 / LUT_SIZE;

    // use tabulated horizon-clipped sphere
    vec2 uv = vec2(avgDir.z * 0.5 + 0.5, formFactor);
    uv = uv*LUT_SCALE + LUT_BIAS;

    float scale = texture2DLodEXT(areaLightsLutTex2, uv, 0.0).w;

    return formFactor*scale;
}

float getRectLightDiffuse() {
    return LTC_EvaluateRect( dNormalW, dViewDirW, vPositionW, mat3( 1.0 ), dLTCCoords );
}

float getDiskLightDiffuse() {
    return LTC_EvaluateDisk( dNormalW, dViewDirW, vPositionW, mat3( 1.0 ), dLTCCoords );
}

float getSphereLightDiffuse() {
    // NB: this could be improved further with distance based wrap lighting
    float falloff = dSphereRadius / (dot(dLightDirW, dLightDirW) + dSphereRadius);
    return getLightDiffuse()*falloff;
}

mat3 getLTCLightInvMat(vec2 uv)
{
    vec4 t1 = texture2DLodEXT(areaLightsLutTex1, uv, 0.0);

    #ifdef AREA_R8_G8_B8_A8_LUTS
    t1 *= vec4(1.001, 0.3239, 0.60437568, 1.0);
    t1 += vec4(0.0, -0.2976, -0.01381, 0.0);
    #endif

    return mat3(
        vec3( t1.x, 0, t1.y ),
        vec3(    0, 1,    0 ),
        vec3( t1.z, 0, t1.w )
    );
}

float calcRectLightSpecular(vec3 tNormalW, vec2 uv) {
    mat3 mInv = getLTCLightInvMat(uv);
    return LTC_EvaluateRect( tNormalW, dViewDirW, vPositionW, mInv, dLTCCoords );
}

float getRectLightSpecular() {
    return calcRectLightSpecular(dNormalW, dLTCUV);
}

#ifdef LIT_CLEARCOAT
float getRectLightSpecularCC() {
    return calcRectLightSpecular(ccNormalW, ccLTCUV);
}
#endif

float calcDiskLightSpecular(vec3 tNormalW, vec2 uv) {
    mat3 mInv = getLTCLightInvMat(uv);
    return LTC_EvaluateDisk( tNormalW, dViewDirW, vPositionW, mInv, dLTCCoords );
}

float getDiskLightSpecular() {
    return calcDiskLightSpecular(dNormalW, dLTCUV);
}

#ifdef LIT_CLEARCOAT
float getDiskLightSpecularCC() {
    return calcDiskLightSpecular(ccNormalW, ccLTCUV);
}
#endif

float getSphereLightSpecular() {
    return calcDiskLightSpecular(dNormalW, dLTCUV);
}

#ifdef LIT_CLEARCOAT
float getSphereLightSpecularCC() {
    return calcDiskLightSpecular(ccNormalW, ccLTCUV);
}
#endif
`,Qx=`
#ifdef MAPFLOAT
uniform float material_metalness;
#endif

void getMetalness() {
    float metalness = 1.0;

    #ifdef MAPFLOAT
    metalness *= material_metalness;
    #endif

    #ifdef MAPTEXTURE
    metalness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    metalness *= saturate(vVertexColor.$VC);
    #endif

    dMetalness = metalness;
}
`,ev=`
uniform sampler2D texture_msdfMap;

#ifdef GL_OES_standard_derivatives
#define USE_FWIDTH
#endif

#ifdef GL2
#define USE_FWIDTH
#endif

float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
}

float map (float min, float max, float v) {
    return (v - min) / (max - min);
}

uniform float font_sdfIntensity; // intensity is used to boost the value read from the SDF, 0 is no boost, 1.0 is max boost
uniform float font_pxrange;      // the number of pixels between inside and outside the font in SDF
uniform float font_textureWidth; // the width of the texture atlas

#ifdef UNIFORM_TEXT_PARAMETERS
uniform vec4 outline_color;
uniform float outline_thickness;
uniform vec4 shadow_color;
uniform vec2 shadow_offset;
#else
varying vec4 outline_color;
varying float outline_thickness;
varying vec4 shadow_color;
varying vec2 shadow_offset;
#endif

vec4 applyMsdf(vec4 color) {
    // sample the field
    vec3 tsample = texture2D(texture_msdfMap, vUv0).rgb;
    vec2 uvShdw = vUv0 - shadow_offset;
    vec3 ssample = texture2D(texture_msdfMap, uvShdw).rgb;
    // get the signed distance value
    float sigDist = median(tsample.r, tsample.g, tsample.b);
    float sigDistShdw = median(ssample.r, ssample.g, ssample.b);

    // smoothing limit - smaller value makes for sharper but more aliased text, especially on angles
    // too large value (0.5) creates a dark glow around the letters
    float smoothingMax = 0.2;

    #ifdef USE_FWIDTH
    // smoothing depends on size of texture on screen
    vec2 w = fwidth(vUv0);
    float smoothing = clamp(w.x * font_textureWidth / font_pxrange, 0.0, smoothingMax);
    #else
    float font_size = 16.0; // TODO fix this
    // smoothing gets smaller as the font size gets bigger
    // don't have fwidth we can approximate from font size, this doesn't account for scaling
    // so a big font scaled down will be wrong...
    float smoothing = clamp(font_pxrange / font_size, 0.0, smoothingMax);
    #endif

    float mapMin = 0.05;
    float mapMax = clamp(1.0 - font_sdfIntensity, mapMin, 1.0);

    // remap to a smaller range (used on smaller font sizes)
    float sigDistInner = map(mapMin, mapMax, sigDist);
    float sigDistOutline = map(mapMin, mapMax, sigDist + outline_thickness);
    sigDistShdw = map(mapMin, mapMax, sigDistShdw + outline_thickness);

    float center = 0.5;
    // calculate smoothing and use to generate opacity
    float inside = smoothstep(center-smoothing, center+smoothing, sigDistInner);
    float outline = smoothstep(center-smoothing, center+smoothing, sigDistOutline);
    float shadow = smoothstep(center-smoothing, center+smoothing, sigDistShdw);

    vec4 tcolor = (outline > inside) ? outline * vec4(outline_color.a * outline_color.rgb, outline_color.a) : vec4(0.0);
    tcolor = mix(tcolor, color, inside);

    vec4 scolor = (shadow > outline) ? shadow * vec4(shadow_color.a * shadow_color.rgb, shadow_color.a) : tcolor;
    tcolor = mix(scolor, tcolor, outline);
    
    return tcolor;
}
`,tv=`

uniform float material_f0;

void getMetalnessModulate() {
    vec3 dielectricF0 = material_f0 * dSpecularity;
    dSpecularity = mix(dielectricF0, dAlbedo, dMetalness);
    dAlbedo *= 1.0 - dMetalness;
}
`,sv=`
attribute vec3 vertex_outlineParameters;
attribute vec3 vertex_shadowParameters;

varying vec4 outline_color;
varying float outline_thickness;
varying vec4 shadow_color;
varying vec2 shadow_offset;

void unpackMsdfParams() {
    vec3 little = mod(vertex_outlineParameters, 256.);
    vec3 big = (vertex_outlineParameters - little) / 256.;

    outline_color.rb = little.xy / 255.;
    outline_color.ga = big.xy / 255.;

    // _outlineThicknessScale === 0.2
    outline_thickness = little.z / 255. * 0.2;

    little = mod(vertex_shadowParameters, 256.);
    big = (vertex_shadowParameters - little) / 256.;

    shadow_color.rb = little.xy / 255.;
    shadow_color.ga = big.xy / 255.;

    // vec2(little.z, big.z) / 127. - 1. remaps shadow offset from [0, 254] to [-1, 1]
    // _shadowOffsetScale === 0.005
    shadow_offset = (vec2(little.z, big.z) / 127. - 1.) * 0.005;
}
`,iv=`
#ifdef MORPHING_TEXTURE_BASED_NORMAL
uniform highp sampler2D morphNormalTex;
#endif

vec3 getNormal() {
    #ifdef SKIN
    dNormalMatrix = mat3(dModelMatrix[0].xyz, dModelMatrix[1].xyz, dModelMatrix[2].xyz);
    #elif defined(INSTANCING)
    dNormalMatrix = mat3(instance_line1.xyz, instance_line2.xyz, instance_line3.xyz);
    #else
    dNormalMatrix = matrix_normal;
    #endif

    vec3 tempNormal = vertex_normal;

    #ifdef MORPHING
    #ifdef MORPHING_NRM03
    tempNormal += morph_weights_a[0] * morph_nrm0;
    tempNormal += morph_weights_a[1] * morph_nrm1;
    tempNormal += morph_weights_a[2] * morph_nrm2;
    tempNormal += morph_weights_a[3] * morph_nrm3;
    #endif
    #ifdef MORPHING_NRM47
    tempNormal += morph_weights_b[0] * morph_nrm4;
    tempNormal += morph_weights_b[1] * morph_nrm5;
    tempNormal += morph_weights_b[2] * morph_nrm6;
    tempNormal += morph_weights_b[3] * morph_nrm7;
    #endif
    #endif

    #ifdef MORPHING_TEXTURE_BASED_NORMAL
    // apply morph offset from texture
    vec2 morphUV = getTextureMorphCoords();
    vec3 morphNormal = texture2D(morphNormalTex, morphUV).xyz;
    tempNormal += morphNormal;
    #endif

    return normalize(dNormalMatrix * tempNormal);
}
`,nv=`
#ifdef MAPTEXTURE
uniform float material_normalDetailMapBumpiness;

vec3 blendNormals(vec3 n1, vec3 n2) {
    // https://blog.selfshadow.com/publications/blending-in-detail/#detail-oriented
    n1 += vec3(0, 0, 1);
    n2 *= vec3(-1, -1, 1);
    return n1 * dot(n1, n2) / n1.z - n2;
}
#endif

vec3 addNormalDetail(vec3 normalMap) {
#ifdef MAPTEXTURE
    vec3 normalDetailMap = unpackNormal(texture2DBias($SAMPLER, $UV, textureBias));
    normalDetailMap = mix(vec3(0.0, 0.0, 1.0), normalDetailMap, material_normalDetailMapBumpiness);
    return blendNormals(normalMap, normalDetailMap);
#else
    return normalMap;
#endif
}
`,rv=`
vec3 getNormal() {
    dNormalMatrix = mat3(instance_line1.xyz, instance_line2.xyz, instance_line3.xyz);
    return normalize(dNormalMatrix * vertex_normal);
}
`,av=`
#ifdef MAPTEXTURE
uniform float material_bumpiness;
#endif

void getNormal() {
#ifdef MAPTEXTURE
    vec3 normalMap = unpackNormal(texture2DBias($SAMPLER, $UV, textureBias));
    normalMap = mix(vec3(0.0, 0.0, 1.0), normalMap, material_bumpiness);
    dNormalW = normalize(dTBN * addNormalDetail(normalMap));
#else
    dNormalW = dVertexNormalW;
#endif
}
`,ov=`
vec3 getNormal() {
    dNormalMatrix = mat3(dModelMatrix[0].xyz, dModelMatrix[1].xyz, dModelMatrix[2].xyz);
    return normalize(dNormalMatrix * vertex_normal);
}
`,lv=`
vec3 unpackNormal(vec4 nmap) {
    vec3 normal;
    normal.xy = nmap.wy * 2.0 - 1.0;
    normal.z = sqrt(1.0 - saturate(dot(normal.xy, normal.xy)));
    return normal;
}
`,hv=`
vec3 unpackNormal(vec4 nmap) {
    return nmap.xyz * 2.0 - 1.0;
}
`,cv=`
#ifdef MAPFLOAT
uniform float material_opacity;
#endif

void getOpacity() {
    dAlpha = 1.0;

    #ifdef MAPFLOAT
    dAlpha *= material_opacity;
    #endif

    #ifdef MAPTEXTURE
    dAlpha *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAlpha *= clamp(vVertexColor.$VC, 0.0, 1.0);
    #endif
}
`,dv=`
gl_FragColor.a = dAlpha;
`,uv=`
    gl_FragColor.a = 1.0;
`,fv=`
gl_FragColor.rgb *= dAlpha;
gl_FragColor.a = dAlpha;
`,pv=`
varying vec2 vUv0;

uniform sampler2D source;

void main(void) {
    gl_FragColor = texture2D(source, vUv0);
}
`,mv=`
// Packing a float in GLSL with multiplication and mod
// http://blog.gradientstudios.com/2012/08/23/shadow-map-improvement
vec4 packFloat(float depth) {
    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
    const vec4 bit_mask  = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);

    // combination of mod and multiplication and division works better
    vec4 res = mod(depth * bit_shift * vec4(255), vec4(256) ) / vec4(255);
    res -= res.xxyz * bit_mask;
    return res;
}
`,_v=`

#ifdef MAPCOLOR
uniform vec3 material_sheen;
#endif

void getSheen() {
    vec3 sheenColor = vec3(1, 1, 1);

    #ifdef MAPCOLOR
    sheenColor *= material_sheen;
    #endif

    #ifdef MAPTEXTURE
    sheenColor *= $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    #endif

    #ifdef MAPVERTEX
    sheenColor *= saturate(vVertexColor.$VC);
    #endif

    sSpecularity = sheenColor;
}
`,gv=`
#ifdef MAPFLOAT
uniform float material_sheenGloss;
#endif

void getSheenGlossiness() {
    float sheenGlossiness = 1.0;

    #ifdef MAPFLOAT
    sheenGlossiness *= material_sheenGloss;
    #endif

    #ifdef MAPTEXTURE
    sheenGlossiness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    sheenGlossiness *= saturate(vVertexColor.$VC);
    #endif

    sheenGlossiness += 0.0000001;
    sGlossiness = sheenGlossiness;
}
`,yv=`
uniform float material_heightMapFactor;

void getParallax() {
    float parallaxScale = material_heightMapFactor;

    float height = texture2DBias($SAMPLER, $UV, textureBias).$CH;
    height = height * parallaxScale - parallaxScale*0.5;
    vec3 viewDirT = dViewDirW * dTBN;

    viewDirT.z += 0.42;
    dUvOffset = height * (viewDirT.xy / viewDirT.z);
}
`,xv=`
varying vec4 texCoordsAlphaLife;

uniform sampler2D colorMap;
uniform sampler2D colorParam;
uniform float graphSampleSize;
uniform float graphNumSamples;

#ifndef CAMERAPLANES
#define CAMERAPLANES
uniform vec4 camera_params;
#endif

uniform float softening;
uniform float colorMult;

float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

#ifndef UNPACKFLOAT
#define UNPACKFLOAT
float unpackFloat(vec4 rgbaDepth) {
    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);
    float depth = dot(rgbaDepth, bitShift);
    return depth;
}
#endif

void main(void) {
    vec4 tex  = gammaCorrectInput(texture2D(colorMap, vec2(texCoordsAlphaLife.x, 1.0 - texCoordsAlphaLife.y)));
    vec4 ramp = gammaCorrectInput(texture2D(colorParam, vec2(texCoordsAlphaLife.w, 0.0)));
    ramp.rgb *= colorMult;

    ramp.a += texCoordsAlphaLife.z;

    vec3 rgb = tex.rgb * ramp.rgb;
    float a  = tex.a * ramp.a;
`,vv=`
vec3 unpack3NFloats(float src) {
    float r = fract(src);
    float g = fract(src * 256.0);
    float b = fract(src * 65536.0);
    return vec3(r, g, b);
}

float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

vec4 tex1Dlod_lerp(highp sampler2D tex, vec2 tc) {
    return mix( texture2D(tex,tc), texture2D(tex,tc + graphSampleSize), fract(tc.x*graphNumSamples) );
}

vec4 tex1Dlod_lerp(highp sampler2D tex, vec2 tc, out vec3 w) {
    vec4 a = texture2D(tex,tc);
    vec4 b = texture2D(tex,tc + graphSampleSize);
    float c = fract(tc.x*graphNumSamples);

    vec3 unpackedA = unpack3NFloats(a.w);
    vec3 unpackedB = unpack3NFloats(b.w);
    w = mix(unpackedA, unpackedB, c);

    return mix(a, b, c);
}

vec2 rotate(vec2 quadXY, float pRotation, out mat2 rotMatrix) {
    float c = cos(pRotation);
    float s = sin(pRotation);

    mat2 m = mat2(c, -s, s, c);
    rotMatrix = m;

    return m * quadXY;
}

vec3 billboard(vec3 InstanceCoords, vec2 quadXY) {
    #ifdef SCREEN_SPACE
        vec3 pos = vec3(-1, 0, 0) * quadXY.x + vec3(0, -1, 0) * quadXY.y;
    #else
        vec3 pos = -matrix_viewInverse[0].xyz * quadXY.x + -matrix_viewInverse[1].xyz * quadXY.y;
    #endif

    return pos;
}

vec3 customFace(vec3 InstanceCoords, vec2 quadXY) {
    vec3 pos = faceTangent * quadXY.x + faceBinorm * quadXY.y;
    return pos;
}

vec2 safeNormalize(vec2 v) {
    float l = length(v);
    return (l > 1e-06) ? v / l : v;
}

void main(void) {
    vec3 meshLocalPos = particle_vertexData.xyz;
    float id = floor(particle_vertexData.w);

    float rndFactor = fract(sin(id + 1.0 + seed));
    vec3 rndFactor3 = vec3(rndFactor, fract(rndFactor*10.0), fract(rndFactor*100.0));

    float uv = id / numParticlesPot;
    readInput(uv);

#ifdef LOCAL_SPACE
    inVel = mat3(matrix_model) * inVel;
#endif
    vec2 velocityV = safeNormalize((mat3(matrix_view) * inVel).xy); // should be removed by compiler if align/stretch is not used

    float particleLifetime = lifetime;

    if (inLife <= 0.0 || inLife > particleLifetime || !inShow) meshLocalPos = vec3(0.0);
    vec2 quadXY = meshLocalPos.xy;
    float nlife = clamp(inLife / particleLifetime, 0.0, 1.0);

    vec3 paramDiv;
    vec4 params = tex1Dlod_lerp(internalTex2, vec2(nlife, 0), paramDiv);
    float scale = params.y;
    float scaleDiv = paramDiv.x;
    float alphaDiv = paramDiv.z;

    scale += (scaleDiv * 2.0 - 1.0) * scaleDivMult * fract(rndFactor*10000.0);

#ifndef USE_MESH
    texCoordsAlphaLife = vec4(quadXY * -0.5 + 0.5, (alphaDiv * 2.0 - 1.0) * alphaDivMult * fract(rndFactor*1000.0), nlife);
#else
    texCoordsAlphaLife = vec4(particle_uv, (alphaDiv * 2.0 - 1.0) * alphaDivMult * fract(rndFactor*1000.0), nlife);
#endif

    vec3 particlePos = inPos;
    vec3 particlePosMoved = vec3(0.0);

    mat2 rotMatrix;
`,Sv=`
    float animFrame = min(floor(texCoordsAlphaLife.w * animTexParams.y) + animTexParams.x, animTexParams.z);
`,bv=`
    float animFrame = floor(mod(texCoordsAlphaLife.w * animTexParams.y + animTexParams.x, animTexParams.z + 1.0));
`,wv=`
    float animationIndex;

    if (animTexIndexParams.y == 1.0) {
        animationIndex = floor((animTexParams.w + 1.0) * rndFactor3.z) * (animTexParams.z + 1.0);
    } else {
        animationIndex = animTexIndexParams.x * (animTexParams.z + 1.0);
    }

    float atlasX = (animationIndex + animFrame) * animTexTilesParams.x;
    float atlasY = 1.0 - floor(atlasX + 1.0) * animTexTilesParams.y;
    atlasX = fract(atlasX);

    texCoordsAlphaLife.xy *= animTexTilesParams.xy;
    texCoordsAlphaLife.xy += vec2(atlasX, atlasY);
`,Tv=`
void readInput(float uv) {
    vec4 tex = texture2D(particleTexIN, vec2(uv, 0.25));
    vec4 tex2 = texture2D(particleTexIN, vec2(uv, 0.75));

    inPos = tex.xyz;
    inVel = tex2.xyz;
    inAngle = (tex.w < 0.0? -tex.w : tex.w) - 1000.0;
    inShow = tex.w >= 0.0;
    inLife = tex2.w;
}
`,Cv=`
//RG=X, BA=Y
//RG=Z, BA=A
//RGB=V, A=visMode
//RGBA=life

#define PI2 6.283185307179586

uniform vec3 inBoundsSize;
uniform vec3 inBoundsCenter;

uniform float maxVel;

float decodeFloatRG(vec2 rg) {
    return rg.y*(1.0/255.0) + rg.x;
}

float decodeFloatRGBA( vec4 rgba ) {
  return dot( rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );
}

void readInput(float uv) {
    vec4 tex0 = texture2D(particleTexIN, vec2(uv, 0.125));
    vec4 tex1 = texture2D(particleTexIN, vec2(uv, 0.375));
    vec4 tex2 = texture2D(particleTexIN, vec2(uv, 0.625));
    vec4 tex3 = texture2D(particleTexIN, vec2(uv, 0.875));

    inPos = vec3(decodeFloatRG(tex0.rg), decodeFloatRG(tex0.ba), decodeFloatRG(tex1.rg));
    inPos = (inPos - vec3(0.5)) * inBoundsSize + inBoundsCenter;

    inVel = tex2.xyz;
    inVel = (inVel - vec3(0.5)) * maxVel;

    inAngle = decodeFloatRG(tex1.ba) * PI2;
    inShow = tex2.a > 0.5;

    inLife = decodeFloatRGBA(tex3);
    float maxNegLife = max(lifetime, (numParticles - 1.0) * (rate+rateDiv));
    float maxPosLife = lifetime+1.0;
    inLife = inLife * (maxNegLife + maxPosLife) - maxNegLife;
}
`,Av=`
void writeOutput() {
    if (gl_FragCoord.y<1.0) {
        gl_FragColor = vec4(outPos, (outAngle + 1000.0) * visMode);
    } else {
        gl_FragColor = vec4(outVel, outLife);
    }
}
`,Mv=`
uniform vec3 outBoundsMul;
uniform vec3 outBoundsAdd;

vec2 encodeFloatRG( float v ) {
    vec2 enc = vec2(1.0, 255.0) * v;
    enc = fract(enc);
    enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);
    return enc;
}

vec4 encodeFloatRGBA( float v ) {
    vec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * v;
    enc = fract(enc);
    enc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);
    return enc;
}

void writeOutput() {
    outPos = outPos * outBoundsMul + outBoundsAdd;
    outAngle = fract(outAngle / PI2);

    outVel = (outVel / maxVel) + vec3(0.5); // TODO: mul

    float maxNegLife = max(lifetime, (numParticles - 1.0) * (rate+rateDiv));
    float maxPosLife = lifetime+1.0;
    outLife = (outLife + maxNegLife) / (maxNegLife + maxPosLife);

    if (gl_FragCoord.y < 1.0) {
        gl_FragColor = vec4(encodeFloatRG(outPos.x), encodeFloatRG(outPos.y));
    } else if (gl_FragCoord.y < 2.0) {
        gl_FragColor = vec4(encodeFloatRG(outPos.z), encodeFloatRG(outAngle));
    } else if (gl_FragCoord.y < 3.0) {
        gl_FragColor = vec4(outVel, visMode*0.5+0.5);
    } else {
        gl_FragColor = encodeFloatRGBA(outLife);
    }
}
`,Pv=`
uniform mat3 spawnBounds;
uniform vec3 spawnPosInnerRatio;

vec3 calcSpawnPosition(vec3 inBounds, float rndFactor) {
    vec3 pos = inBounds - vec3(0.5);

    vec3 posAbs = abs(pos);
    vec3 maxPos = vec3(max(posAbs.x, max(posAbs.y, posAbs.z)));

    vec3 edge = maxPos + (vec3(0.5) - maxPos) * spawnPosInnerRatio;

    pos.x = edge.x * (maxPos.x == posAbs.x ? sign(pos.x) : 2.0 * pos.x);
    pos.y = edge.y * (maxPos.y == posAbs.y ? sign(pos.y) : 2.0 * pos.y);
    pos.z = edge.z * (maxPos.z == posAbs.z ? sign(pos.z) : 2.0 * pos.z);

#ifndef LOCAL_SPACE
    return emitterPos + spawnBounds * pos;
#else
    return spawnBounds * pos;
#endif
}

void addInitialVelocity(inout vec3 localVelocity, vec3 inBounds) {
    localVelocity -= vec3(0, 0, initialVelocity);
}
`,Ev=`
    writeOutput();
}
`,Rv=`
varying vec2 vUv0;

uniform highp sampler2D particleTexIN;
uniform highp sampler2D internalTex0;
uniform highp sampler2D internalTex1;
uniform highp sampler2D internalTex2;
uniform highp sampler2D internalTex3;

uniform mat3 emitterMatrix, emitterMatrixInv;
uniform vec3 emitterScale;

uniform vec3 emitterPos, frameRandom, localVelocityDivMult, velocityDivMult;
uniform float delta, rate, rateDiv, lifetime, numParticles, rotSpeedDivMult, radialSpeedDivMult, seed;
uniform float startAngle, startAngle2;
uniform float initialVelocity;

uniform float graphSampleSize;
uniform float graphNumSamples;

vec3 inPos;
vec3 inVel;
float inAngle;
bool inShow;
float inLife;
float visMode;

vec3 outPos;
vec3 outVel;
float outAngle;
bool outShow;
float outLife;
`,Iv=`
    if (outLife >= lifetime) {
        outLife -= max(lifetime, (numParticles - 1.0) * particleRate);
        visMode = -1.0;
    }
`,Lv=`
    visMode = outLife < 0.0? -1.0: visMode;
`,Dv=`
    if (outLife >= lifetime) {
        outLife -= max(lifetime, (numParticles - 1.0) * particleRate);
        visMode = 1.0;
    }
    visMode = outLife < 0.0? 1.0: visMode;
`,Fv=`
uniform float spawnBoundsSphere;
uniform float spawnBoundsSphereInnerRatio;

vec3 calcSpawnPosition(vec3 inBounds, float rndFactor) {
    float rnd4 = fract(rndFactor * 1000.0);
    vec3 norm = normalize(inBounds.xyz - vec3(0.5));
    float r = rnd4 * (1.0 - spawnBoundsSphereInnerRatio) + spawnBoundsSphereInnerRatio;
#ifndef LOCAL_SPACE
    return emitterPos + norm * r * spawnBoundsSphere;
#else
    return norm * r * spawnBoundsSphere;
#endif
}

void addInitialVelocity(inout vec3 localVelocity, vec3 inBounds) {
    localVelocity += normalize(inBounds - vec3(0.5)) * initialVelocity;
}
`,Ov=`
float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

vec3 unpack3NFloats(float src) {
    float r = fract(src);
    float g = fract(src * 256.0);
    float b = fract(src * 65536.0);
    return vec3(r, g, b);
}

vec3 tex1Dlod_lerp(highp sampler2D tex, vec2 tc, out vec3 w) {
    vec4 a = texture2D(tex, tc);
    vec4 b = texture2D(tex, tc + graphSampleSize);
    float c = fract(tc.x * graphNumSamples);

    vec3 unpackedA = unpack3NFloats(a.w);
    vec3 unpackedB = unpack3NFloats(b.w);
    w = mix(unpackedA, unpackedB, c);

    return mix(a.xyz, b.xyz, c);
}

#define HASHSCALE4 vec4(1031, .1030, .0973, .1099)
vec4 hash41(float p) {
    vec4 p4 = fract(vec4(p) * HASHSCALE4);
    p4 += dot(p4, p4.wzxy+19.19);
    return fract(vec4((p4.x + p4.y)*p4.z, (p4.x + p4.z)*p4.y, (p4.y + p4.z)*p4.w, (p4.z + p4.w)*p4.x));
}

void main(void) {
    if (gl_FragCoord.x > numParticles) discard;

    readInput(vUv0.x);
    visMode = inShow? 1.0 : -1.0;

    vec4 rndFactor = hash41(gl_FragCoord.x + seed);

    float particleRate = rate + rateDiv * rndFactor.x;

    outLife = inLife + delta;
    float nlife = clamp(outLife / lifetime, 0.0, 1.0);

    vec3 localVelocityDiv;
    vec3 velocityDiv;
    vec3 paramDiv;
    vec3 localVelocity = tex1Dlod_lerp(internalTex0, vec2(nlife, 0), localVelocityDiv);
    vec3 velocity =      tex1Dlod_lerp(internalTex1, vec2(nlife, 0), velocityDiv);
    vec3 params =        tex1Dlod_lerp(internalTex2, vec2(nlife, 0), paramDiv);
    float rotSpeed = params.x;
    float rotSpeedDiv = paramDiv.y;

    vec3 radialParams = tex1Dlod_lerp(internalTex3, vec2(nlife, 0), paramDiv);
    float radialSpeed = radialParams.x;
    float radialSpeedDiv = radialParams.y;

    bool respawn = inLife <= 0.0 || outLife >= lifetime;
    inPos = respawn ? calcSpawnPosition(rndFactor.xyz, rndFactor.x) : inPos;
    inAngle = respawn ? mix(startAngle, startAngle2, rndFactor.x) : inAngle;

#ifndef LOCAL_SPACE
    vec3 radialVel = inPos - emitterPos;
#else
    vec3 radialVel = inPos;
#endif
    radialVel = (dot(radialVel, radialVel) > 1.0E-8) ? radialSpeed * normalize(radialVel) : vec3(0.0);
    radialVel += (radialSpeedDiv * vec3(2.0) - vec3(1.0)) * radialSpeedDivMult * rndFactor.xyz;

    localVelocity +=    (localVelocityDiv * vec3(2.0) - vec3(1.0)) * localVelocityDivMult * rndFactor.xyz;
    velocity +=         (velocityDiv * vec3(2.0) - vec3(1.0)) * velocityDivMult * rndFactor.xyz;
    rotSpeed +=         (rotSpeedDiv * 2.0 - 1.0) * rotSpeedDivMult * rndFactor.y;

    addInitialVelocity(localVelocity, rndFactor.xyz);

#ifndef LOCAL_SPACE
    outVel = emitterMatrix * localVelocity + (radialVel + velocity) * emitterScale;
#else
    outVel = (localVelocity + radialVel) / emitterScale + emitterMatrixInv * velocity;
#endif

    outPos = inPos + outVel * delta;
    outAngle = inAngle + rotSpeed * delta;
`,Bv=`
    quadXY = rotate(quadXY, inAngle, rotMatrix);
    vec3 localPos = billboard(particlePos, quadXY);
`,kv=`
    dBlendModeFogFactor = 0.0;
    rgb *= saturate(gammaCorrectInput(max(a, 0.0)));
    if ((rgb.r + rgb.g + rgb.b) < 0.000001) discard;
`,zv=`
    rgb = mix(vec3(1.0), rgb, vec3(a));
    if (rgb.r + rgb.g + rgb.b > 2.99) discard;
`,Uv=`
    if (a < 0.01) discard;
`,Nv=`
attribute vec4 particle_vertexData;   // XYZ = world pos, W = life
attribute vec4 particle_vertexData2;  // X = angle, Y = scale, Z = alpha, W = velocity.x
attribute vec4 particle_vertexData3;  // XYZ = particle local pos, W = velocity.y
attribute float particle_vertexData4; // particle id
#ifndef USE_MESH
#define VDATA5TYPE vec2
#else
#define VDATA5TYPE vec4
#endif
attribute VDATA5TYPE particle_vertexData5; // VDATA4TYPE depends on useMesh property. Start with X = velocity.z, Y = particle ID and for mesh particles proceeds with Z = mesh UV.x, W = mesh UV.y

uniform mat4 matrix_viewProjection;
uniform mat4 matrix_model;

#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif

uniform mat3 matrix_normal;
uniform mat4 matrix_viewInverse;

uniform float numParticles;
uniform float lifetime;
uniform float stretch;
uniform float seed;
uniform vec3 wrapBounds, emitterScale, faceTangent, faceBinorm;
uniform sampler2D texLifeAndSourcePosOUT;
uniform highp sampler2D internalTex0;
uniform highp sampler2D internalTex1;
uniform highp sampler2D internalTex2;
uniform vec3 emitterPos;

varying vec4 texCoordsAlphaLife;

vec2 rotate(vec2 quadXY, float pRotation, out mat2 rotMatrix)
{
    float c = cos(pRotation);
    float s = sin(pRotation);
    //vec4 rotationMatrix = vec4(c, -s, s, c);

    mat2 m = mat2(c, -s, s, c);
    rotMatrix = m;

    return m * quadXY;
}

vec3 billboard(vec3 InstanceCoords, vec2 quadXY)
{
    vec3 pos = -matrix_viewInverse[0].xyz * quadXY.x + -matrix_viewInverse[1].xyz * quadXY.y;
    return pos;
}

vec3 customFace(vec3 InstanceCoords, vec2 quadXY)
{
    vec3 pos = faceTangent * quadXY.x + faceBinorm * quadXY.y;
    return pos;
}

void main(void)
{
    vec3 particlePos = particle_vertexData.xyz;
    vec3 inPos = particlePos;
    vec3 vertPos = particle_vertexData3.xyz;
    vec3 inVel = vec3(particle_vertexData2.w, particle_vertexData3.w, particle_vertexData5.x);

    float id = floor(particle_vertexData4);
    float rndFactor = fract(sin(id + 1.0 + seed));
    vec3 rndFactor3 = vec3(rndFactor, fract(rndFactor*10.0), fract(rndFactor*100.0));

#ifdef LOCAL_SPACE
    inVel = mat3(matrix_model) * inVel;
#endif
    vec2 velocityV = normalize((mat3(matrix_view) * inVel).xy); // should be removed by compiler if align/stretch is not used

    vec2 quadXY = vertPos.xy;

#ifdef USE_MESH
    texCoordsAlphaLife = vec4(particle_vertexData5.zw, particle_vertexData2.z, particle_vertexData.w);
#else
    texCoordsAlphaLife = vec4(quadXY * -0.5 + 0.5, particle_vertexData2.z, particle_vertexData.w);
#endif
    mat2 rotMatrix;

    float inAngle = particle_vertexData2.x;
    vec3 particlePosMoved = vec3(0.0);
    vec3 meshLocalPos = particle_vertexData3.xyz;
`,Vv=`
    localPos *= particle_vertexData2.y * emitterScale;
    localPos += particlePos;

    gl_Position = matrix_viewProjection * vec4(localPos, 1.0);
`,Gv=`
    quadXY = rotate(quadXY, inAngle, rotMatrix);
    vec3 localPos = customFace(particlePos, quadXY);
`,Wv=`
    rgb = addFog(rgb);
    rgb = toneMap(rgb);
    rgb = gammaCorrectOutput(rgb);
    gl_FragColor = vec4(rgb, a);
}
`,Hv=`
    localPos *= scale * emitterScale;
    localPos += particlePos;

    #ifdef SCREEN_SPACE
    gl_Position = vec4(localPos.x, localPos.y, 0.0, 1.0);
    #else
    gl_Position = matrix_viewProjection * vec4(localPos.xyz, 1.0);
    #endif
`,Xv=`
    vec3 negNormal = normal*0.5+0.5;
    vec3 posNormal = -normal*0.5+0.5;
    negNormal *= negNormal;
    posNormal *= posNormal;
`,qv=`
attribute vec4 particle_vertexData; // XYZ = particle position, W = particle ID + random factor
#ifdef USE_MESH
attribute vec2 particle_uv;         // mesh UV
#endif

uniform mat4 matrix_viewProjection;
uniform mat4 matrix_model;
uniform mat3 matrix_normal;
uniform mat4 matrix_viewInverse;

#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif

uniform float numParticles, numParticlesPot;
uniform float graphSampleSize;
uniform float graphNumSamples;
uniform float stretch;
uniform vec3 wrapBounds;
uniform vec3 emitterScale, emitterPos, faceTangent, faceBinorm;
uniform float rate, rateDiv, lifetime, deltaRandomnessStatic, scaleDivMult, alphaDivMult, seed, delta;
uniform sampler2D particleTexOUT, particleTexIN;
uniform highp sampler2D internalTex0;
uniform highp sampler2D internalTex1;
uniform highp sampler2D internalTex2;

#ifndef CAMERAPLANES
#define CAMERAPLANES
uniform vec4 camera_params;
#endif

varying vec4 texCoordsAlphaLife;

vec3 inPos;
vec3 inVel;
float inAngle;
bool inShow;
float inLife;
`,jv=`
    vec3 negNormal = max(normal, vec3(0.0));
    vec3 posNormal = max(-normal, vec3(0.0));
`,Yv=`
    vec3 light = negNormal.x*lightCube[0] + posNormal.x*lightCube[1] +
                        negNormal.y*lightCube[2] + posNormal.y*lightCube[3] +
                        negNormal.z*lightCube[4] + posNormal.z*lightCube[5];

    rgb *= light;
`,$v=`
    particlePos = (matrix_model * vec4(particlePos, 1.0)).xyz;
`,Kv=`
    vec3 localPos = meshLocalPos;
    localPos.xy = rotate(localPos.xy, inAngle, rotMatrix);
    localPos.yz = rotate(localPos.yz, inAngle, rotMatrix);

    billboard(particlePos, quadXY);
`,Zv=`
    Normal = normalize(localPos + matrix_viewInverse[2].xyz);
`,Jv=`
    vec3 normalMap = normalize(texture2D(normalMap, vec2(texCoordsAlphaLife.x, 1.0 - texCoordsAlphaLife.y)).xyz * 2.0 - 1.0);
    vec3 normal = ParticleMat * normalMap;
`,Qv=`
    inAngle = atan(velocityV.x, velocityV.y); // not the fastest way, but easier to plug in; TODO: create rot matrix right from vectors

`,eS=`
    float depth = getLinearScreenDepth();
    float particleDepth = vDepth;
    float depthDiff = saturate(abs(particleDepth - depth) * softening);
    a *= depthDiff;
`,tS=`
    vDepth = getLinearDepth(localPos);
`,sS=`
    vec3 moveDir = inVel * stretch;
    vec3 posPrev = particlePos - moveDir;
    posPrev += particlePosMoved;

    vec2 centerToVertexV = normalize((mat3(matrix_view) * localPos).xy);

    float interpolation = dot(-velocityV, centerToVertexV) * 0.5 + 0.5;

    particlePos = mix(particlePos, posPrev, interpolation);
`,iS=`
    mat3 rot3 = mat3(rotMatrix[0][0], rotMatrix[0][1], 0.0, rotMatrix[1][0], rotMatrix[1][1], 0.0, 0.0, 0.0, 1.0);
    ParticleMat = mat3(-matrix_viewInverse[0].xyz, -matrix_viewInverse[1].xyz, matrix_viewInverse[2].xyz) * rot3;
`,nS=`
    vec3 origParticlePos = particlePos;
    particlePos -= matrix_model[3].xyz;
    particlePos = mod(particlePos, wrapBounds) - wrapBounds * 0.5;
    particlePos += matrix_model[3].xyz;
    particlePosMoved = particlePos - origParticlePos;
`,rS=`
void getReflDir() {
    dReflDirW = normalize(-reflect(dViewDirW, dNormalW));
}
`,aS=`
void getReflDir() {
    float roughness = sqrt(1.0 - min(dGlossiness, 1.0));
    float anisotropy = material_anisotropy * roughness;
    vec3 anisotropicDirection = anisotropy >= 0.0 ? dTBN[1] : dTBN[0];
    vec3 anisotropicTangent = cross(anisotropicDirection, dViewDirW);
    vec3 anisotropicNormal = cross(anisotropicTangent, anisotropicDirection);
    vec3 bentNormal = normalize(mix(normalize(dNormalW), normalize(anisotropicNormal), anisotropy));
    dReflDirW = reflect(-dViewDirW, bentNormal);
}
`,oS=`
#ifdef LIT_CLEARCOAT
void addReflectionCC() {
    ccReflection += calcReflection(ccReflDirW, ccGlossiness);
}
#endif
`,lS=`
uniform samplerCube texture_cubeMap;
uniform float material_reflectivity;

vec3 calcReflection(vec3 tReflDirW, float tGlossiness) {
    vec3 lookupVec = fixSeams(cubeMapProject(tReflDirW));
    lookupVec.x *= -1.0;
    return $DECODE(textureCube(texture_cubeMap, lookupVec));
}

void addReflection() {   
    dReflection += vec4(calcReflection(dReflDirW, dGlossiness), material_reflectivity);
}
`,hS=`
#ifndef ENV_ATLAS
#define ENV_ATLAS
uniform sampler2D texture_envAtlas;
#endif
uniform samplerCube texture_cubeMap;
uniform float material_reflectivity;

vec3 calcReflection(vec3 tReflDirW, float tGlossiness) {
    vec3 dir = cubeMapProject(tReflDirW) * vec3(-1.0, 1.0, 1.0);
    vec2 uv = toSphericalUv(dir);

    // calculate roughness level
    float level = saturate(1.0 - tGlossiness) * 5.0;
    float ilevel = floor(level);
    float flevel = level - ilevel;

    vec3 sharp = $DECODE(textureCube(texture_cubeMap, fixSeams(dir)));
    vec3 roughA = $DECODE(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel)));
    vec3 roughB = $DECODE(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel + 1.0)));

    return processEnvironment(mix(sharp, mix(roughA, roughB, flevel), min(level, 1.0)));
}

void addReflection() {   
    dReflection += vec4(calcReflection(dReflDirW, dGlossiness), material_reflectivity);
}
`,cS=`
#ifndef ENV_ATLAS
#define ENV_ATLAS
uniform sampler2D texture_envAtlas;
#endif
uniform float material_reflectivity;

// calculate mip level for shiny reflection given equirect coords uv.
float shinyMipLevel(vec2 uv) {
    vec2 dx = dFdx(uv);
    vec2 dy = dFdy(uv);

    // calculate second dF at 180 degrees
    vec2 uv2 = vec2(fract(uv.x + 0.5), uv.y);
    vec2 dx2 = dFdx(uv2);
    vec2 dy2 = dFdy(uv2);

    // calculate min of both sets of dF to handle discontinuity at the azim edge
    float maxd = min(max(dot(dx, dx), dot(dy, dy)), max(dot(dx2, dx2), dot(dy2, dy2)));

    return clamp(0.5 * log2(maxd) - 1.0 + textureBias, 0.0, 5.0);
}

vec3 calcReflection(vec3 tReflDirW, float tGlossiness) {
    vec3 dir = cubeMapProject(tReflDirW) * vec3(-1.0, 1.0, 1.0);
    vec2 uv = toSphericalUv(dir);

    // calculate roughness level
    float level = saturate(1.0 - tGlossiness) * 5.0;
    float ilevel = floor(level);

    // accessing the shiny (top level) reflection - perform manual mipmap lookup
    float level2 = shinyMipLevel(uv * atlasSize);
    float ilevel2 = floor(level2);

    vec2 uv0, uv1;
    float weight;
    if (ilevel == 0.0) {
        uv0 = mapShinyUv(uv, ilevel2);
        uv1 = mapShinyUv(uv, ilevel2 + 1.0);
        weight = level2 - ilevel2;
    } else {
        // accessing rough reflection - just sample the same part twice
        uv0 = uv1 = mapRoughnessUv(uv, ilevel);
        weight = 0.0;
    }

    vec3 linearA = $DECODE(texture2D(texture_envAtlas, uv0));
    vec3 linearB = $DECODE(texture2D(texture_envAtlas, uv1));
    vec3 linear0 = mix(linearA, linearB, weight);
    vec3 linear1 = $DECODE(texture2D(texture_envAtlas, mapRoughnessUv(uv, ilevel + 1.0)));

    return processEnvironment(mix(linear0, linear1, level - ilevel));
}

void addReflection() {   
    dReflection += vec4(calcReflection(dReflDirW, dGlossiness), material_reflectivity);
}
`,dS=`
#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif
uniform sampler2D texture_sphereMap;
uniform float material_reflectivity;

vec3 calcReflection(vec3 tReflDirW, float tGlossiness) {
    vec3 reflDirV = (mat3(matrix_view) * tReflDirW).xyz;

    float m = 2.0 * sqrt( dot(reflDirV.xy, reflDirV.xy) + (reflDirV.z+1.0)*(reflDirV.z+1.0) );
    vec2 sphereMapUv = reflDirV.xy / m + 0.5;

    return $DECODE(texture2D(texture_sphereMap, sphereMapUv));
}

void addReflection() {   
    dReflection += vec4(calcReflection(dReflDirW, dGlossiness), material_reflectivity);
}
`,uS=`
uniform sampler2D texture_sphereMap;
uniform float material_reflectivity;

vec3 calcReflection(vec3 tReflDirW, float tGlossiness) {
    vec3 reflDirV = vNormalV;

    vec2 sphereMapUv = reflDirV.xy * 0.5 + 0.5;
    return $DECODE(texture2D(texture_sphereMap, sphereMapUv));
}

void addReflection() {   
    dReflection += vec4(calcReflection(dReflDirW, dGlossiness), material_reflectivity);
}
`,fS=`

void addReflectionSheen() {
    float NoV = dot(dNormalW, dViewDirW);
    float alphaG = sGlossiness * sGlossiness;

    // Avoid using a LUT and approximate the values analytically
    float a = sGlossiness < 0.25 ? -339.2 * alphaG + 161.4 * sGlossiness - 25.9 : -8.48 * alphaG + 14.3 * sGlossiness - 9.95;
    float b = sGlossiness < 0.25 ? 44.0 * alphaG - 23.7 * sGlossiness + 3.26 : 1.97 * alphaG - 3.27 * sGlossiness + 0.72;
    float DG = exp( a * NoV + b ) + ( sGlossiness < 0.25 ? 0.0 : 0.1 * ( sGlossiness - 0.25 ) );
    sReflection += calcReflection(dNormalW, 0.0) * saturate(DG);
}
`,pS=`
uniform float material_refractionIndex;

vec3 refract2(vec3 viewVec, vec3 Normal, float IOR) {
    float vn = dot(viewVec, Normal);
    float k = 1.0 - IOR * IOR * (1.0 - vn * vn);
    vec3 refrVec = IOR * viewVec - (IOR * vn + sqrt(k)) * Normal;
    return refrVec;
}

void addRefraction() {
    // use same reflection code with refraction vector
    vec3 tmpDir = dReflDirW;
    vec4 tmpRefl = dReflection;
    dReflDirW = refract2(-dViewDirW, dNormalW, material_refractionIndex);
    dReflection = vec4(0);
    addReflection();
    dDiffuseLight = mix(dDiffuseLight, dReflection.rgb * dAlbedo, dTransmission);
    dReflection = tmpRefl;
    dReflDirW = tmpDir;
}
`,mS=`
uniform float material_refractionIndex;
uniform float material_invAttenuationDistance;
uniform vec3 material_attenuation;

vec3 refract2(vec3 viewVec, vec3 Normal, float IOR) {
    float vn = dot(viewVec, Normal);
    float k = 1.0 - IOR * IOR * (1.0 - vn * vn);
    vec3 refrVec = IOR * viewVec - (IOR * vn + sqrt(k)) * Normal;
    return refrVec;
}

void addRefraction() {

    // Extract scale from the model transform
    vec3 modelScale;
    modelScale.x = length(vec3(matrix_model[0].xyz));
    modelScale.y = length(vec3(matrix_model[1].xyz));
    modelScale.z = length(vec3(matrix_model[2].xyz));

    // Calculate the refraction vector, scaled by the thickness and scale of the object
    vec3 refractionVector = normalize(refract(-dViewDirW, dNormalW, material_refractionIndex)) * dThickness * modelScale;

    // The refraction point is the entry point + vector to exit point
    vec4 pointOfRefraction = vec4(vPositionW + refractionVector, 1.0);

    // Project to texture space so we can sample it
    vec4 projectionPoint = matrix_viewProjection * pointOfRefraction;
    vec2 uv = projectionPoint.xy / projectionPoint.ww;
    uv += vec2(1.0);
    uv *= vec2(0.5);

    #ifdef SUPPORTS_TEXLOD
        // Use IOR and roughness to select mip
        float iorToRoughness = (1.0 - dGlossiness) * clamp((1.0 / material_refractionIndex) * 2.0 - 2.0, 0.0, 1.0);
        float refractionLod = log2(uScreenSize.x) * iorToRoughness;
        vec3 refraction = texture2DLodEXT(uSceneColorMap, uv, refractionLod).rgb;
    #else
        vec3 refraction = texture2D(uSceneColorMap, uv).rgb;
    #endif

    // Transmittance is our final refraction color
    vec3 transmittance;
    if (material_invAttenuationDistance != 0.0)
    {
        vec3 attenuation = -log(material_attenuation) * material_invAttenuationDistance;
        transmittance = exp(-attenuation * length(refractionVector));
    }
    else
    {
        transmittance = refraction;
    }

    // Apply fresnel effect on refraction
    vec3 fresnel = vec3(1.0) - getFresnel(dot(dViewDirW, dNormalW), dSpecularity);
    dDiffuseLight = mix(dDiffuseLight, refraction * transmittance * fresnel, dTransmission);
}
`,_S=`
// This shader requires the following #DEFINEs:
//
// PROCESS_FUNC - must be one of reproject, prefilter
// DECODE_FUNC - must be one of decodeRGBM, decodeRGBE, decodeGamma or decodeLinear
// ENCODE_FUNC - must be one of encodeRGBM, encodeRGBE, encideGamma or encodeLinear
// SOURCE_FUNC - must be one of sampleCubemap, sampleEquirect, sampleOctahedral
// TARGET_FUNC - must be one of getDirectionCubemap, getDirectionEquirect, getDirectionOctahedral
//
// When filtering:
// NUM_SAMPLES - number of samples
// NUM_SAMPLES_SQRT - sqrt of number of samples
//
// SUPPORTS_TEXLOD - whether supports texlod is supported

varying vec2 vUv0;

// source
uniform sampler2D sourceTex;
uniform samplerCube sourceCube;

// samples
uniform sampler2D samplesTex;
uniform vec2 samplesTexInverseSize;

// params:
// x - target cubemap face 0..6
// y - specular power (when prefiltering)
// z - source cubemap seam scale (0 to disable)
// w - target cubemap size for seam calc (0 to disable)
uniform vec4 params;

// params2:
// x - target image total pixels
// y - source cubemap size
uniform vec2 params2;

float targetFace() { return params.x; }
float specularPower() { return params.y; }
float sourceCubeSeamScale() { return params.z; }
float targetCubeSeamScale() { return params.w; }

float targetTotalPixels() { return params2.x; }
float sourceTotalPixels() { return params2.y; }

float PI = 3.141592653589793;

float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

${gm}
${ym}

//-- supported projections

vec3 modifySeams(vec3 dir, float scale) {
    vec3 adir = abs(dir);
    float M = max(max(adir.x, adir.y), adir.z);
    return dir / M * vec3(
        adir.x == M ? 1.0 : scale,
        adir.y == M ? 1.0 : scale,
        adir.z == M ? 1.0 : scale
    );
}

vec2 toSpherical(vec3 dir) {
    return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));
}

vec3 fromSpherical(vec2 uv) {
    return vec3(cos(uv.y) * sin(uv.x),
                sin(uv.y),
                cos(uv.y) * cos(uv.x));
}

vec3 getDirectionEquirect() {
    return fromSpherical((vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0) * vec2(PI, PI * 0.5));
}

vec4 sampleEquirect(vec2 sph) {
    vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;
    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
}

vec4 sampleEquirect(vec3 dir) {
    return sampleEquirect(toSpherical(dir));
}

vec4 sampleCubemap(vec3 dir) {
    return textureCube(sourceCube, modifySeams(dir, 1.0 - sourceCubeSeamScale()));
}

vec4 sampleCubemap(vec2 sph) {
    return sampleCubemap(fromSpherical(sph));
}

vec4 sampleEquirect(vec2 sph, float mipLevel) {
    vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;
#ifdef SUPPORTS_TEXLOD
    return texture2DLodEXT(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);
#else
    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
#endif
}

vec4 sampleEquirect(vec3 dir, float mipLevel) {
    return sampleEquirect(toSpherical(dir), mipLevel);
}

vec4 sampleCubemap(vec3 dir, float mipLevel) {
#ifdef SUPPORTS_TEXLOD
    return textureCubeLodEXT(sourceCube, modifySeams(dir, 1.0 - exp2(mipLevel) * sourceCubeSeamScale()), mipLevel);
#else
    return textureCube(sourceCube, modifySeams(dir, 1.0 - exp2(mipLevel) * sourceCubeSeamScale()));
#endif
}

vec4 sampleCubemap(vec2 sph, float mipLevel) {
    return sampleCubemap(fromSpherical(sph), mipLevel);
}

// octahedral code, based on http://jcgt.org/published/0003/02/01
// "Survey of Efficient Representations for Independent Unit Vectors" by Cigolle, Donow, Evangelakos, Mara, McGuire, Meyer

float signNotZero(float k){
    return(k >= 0.0) ? 1.0 : -1.0;
}

vec2 signNotZero(vec2 v) {
    return vec2(signNotZero(v.x), signNotZero(v.y));
}

// Returns a unit vector. Argument o is an octahedral vector packed via octEncode, on the [-1, +1] square
vec3 octDecode(vec2 o) {
    vec3 v = vec3(o.x, 1.0 - abs(o.x) - abs(o.y), o.y);
    if (v.y < 0.0) {
        v.xz = (1.0 - abs(v.zx)) * signNotZero(v.xz);
    }
    return normalize(v);
}

vec3 getDirectionOctahedral() {
    return octDecode(vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0);
}

// Assumes that v is a unit vector. The result is an octahedral vector on the [-1, +1] square
vec2 octEncode(in vec3 v) {
    float l1norm = abs(v.x) + abs(v.y) + abs(v.z);
    vec2 result = v.xz * (1.0 / l1norm);
    if (v.y < 0.0) {
        result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
    }
    return result;
}

vec4 sampleOctahedral(vec3 dir) {
    vec2 uv = octEncode(dir) * 0.5 + 0.5;
    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
}

vec4 sampleOctahedral(vec2 sph) {
    return sampleOctahedral(fromSpherical(sph));
}

vec4 sampleOctahedral(vec3 dir, float mipLevel) {
    vec2 uv = octEncode(dir) * 0.5 + 0.5;
#ifdef SUPPORTS_TEXLOD
    return texture2DLodEXT(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);
#else
    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));
#endif
}

vec4 sampleOctahedral(vec2 sph, float mipLevel) {
    return sampleOctahedral(fromSpherical(sph), mipLevel);
}

/////////////////////////////////////////////////////////////////////

vec3 getDirectionCubemap() {
    vec2 st = vUv0 * 2.0 - 1.0;
    float face = targetFace();

    vec3 vec;
    if (face == 0.0) {
        vec = vec3(1, -st.y, -st.x);
    } else if (face == 1.0) {
        vec = vec3(-1, -st.y, st.x);
    } else if (face == 2.0) {
        vec = vec3(st.x, 1, st.y);
    } else if (face == 3.0) {
        vec = vec3(st.x, -1, -st.y);
    } else if (face == 4.0) {
        vec = vec3(st.x, -st.y, 1);
    } else {
        vec = vec3(-st.x, -st.y, -1);
    }

    return normalize(modifySeams(vec, 1.0 / (1.0 - targetCubeSeamScale())));
}

mat3 matrixFromVector(vec3 n) { // frisvad
    float a = 1.0 / (1.0 + n.z);
    float b = -n.x * n.y * a;
    vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);
    vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);
    return mat3(b1, b2, n);
}

mat3 matrixFromVectorSlow(vec3 n) {
    vec3 up = (1.0 - abs(n.y) <= 0.0000001) ? vec3(0.0, 0.0, n.y > 0.0 ? 1.0 : -1.0) : vec3(0.0, 1.0, 0.0);
    vec3 x = normalize(cross(up, n));
    vec3 y = cross(n, x);
    return mat3(x, y, n);
}

vec4 reproject() {
    if (NUM_SAMPLES <= 1) {
        // single sample
        return ENCODE_FUNC(DECODE_FUNC(SOURCE_FUNC(TARGET_FUNC())));
    } else {
        // multi sample
        vec3 t = TARGET_FUNC();
        vec3 tu = dFdx(t);
        vec3 tv = dFdy(t);

        vec3 result = vec3(0.0);
        for (float u = 0.0; u < NUM_SAMPLES_SQRT; ++u) {
            for (float v = 0.0; v < NUM_SAMPLES_SQRT; ++v) {
                result += DECODE_FUNC(SOURCE_FUNC(normalize(t +
                                                            tu * (u / NUM_SAMPLES_SQRT - 0.5) +
                                                            tv * (v / NUM_SAMPLES_SQRT - 0.5))));
            }
        }
        return ENCODE_FUNC(result / (NUM_SAMPLES_SQRT * NUM_SAMPLES_SQRT));
    }
}

vec4 unpackFloat = vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);

void unpackSample(int i, out vec3 L, out float mipLevel) {
    float u = (float(i * 4) + 0.5) * samplesTexInverseSize.x;
    float v = (floor(u) + 0.5) * samplesTexInverseSize.y;

    vec4 raw;
    raw.x = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
    raw.y = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
    raw.z = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;
    raw.w = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat);

    L.xyz = raw.xyz * 2.0 - 1.0;
    mipLevel = raw.w * 8.0;
}

// convolve an environment given pre-generated samples
vec4 prefilterSamples() {
    // construct vector space given target direction
    mat3 vecSpace = matrixFromVectorSlow(TARGET_FUNC());

    vec3 L;
    float mipLevel;

    vec3 result = vec3(0.0);
    float totalWeight = 0.0;
    for (int i = 0; i < NUM_SAMPLES; ++i) {
        unpackSample(i, L, mipLevel);
        result += DECODE_FUNC(SOURCE_FUNC(vecSpace * L, mipLevel)) * L.z;
        totalWeight += L.z;
    }

    return ENCODE_FUNC(result / totalWeight);
}

// unweighted version of prefilterSamples
vec4 prefilterSamplesUnweighted() {
    // construct vector space given target direction
    mat3 vecSpace = matrixFromVectorSlow(TARGET_FUNC());

    vec3 L;
    float mipLevel;

    vec3 result = vec3(0.0);
    float totalWeight = 0.0;
    for (int i = 0; i < NUM_SAMPLES; ++i) {
        unpackSample(i, L, mipLevel);
        result += DECODE_FUNC(SOURCE_FUNC(vecSpace * L, mipLevel));
    }

    return ENCODE_FUNC(result / float(NUM_SAMPLES));
}

void main(void) {
    gl_FragColor = PROCESS_FUNC();
}
`,gS=`
uniform highp sampler2D uSceneDepthMap;

#ifndef SCREENSIZE
#define SCREENSIZE
uniform vec4 uScreenSize;
#endif

#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif



#ifndef CAMERAPLANES
#define CAMERAPLANES
uniform vec4 camera_params; // 1 / camera_far,      camera_far,     camera_near,        is_ortho
#endif

#ifdef GL2
float linearizeDepth(float z) {
    if (camera_params.w == 0.0)
        return (camera_params.z * camera_params.y) / (camera_params.y + z * (camera_params.z - camera_params.y));
    else
        return camera_params.z + z * (camera_params.y - camera_params.z);
}
#else
#ifndef UNPACKFLOAT
#define UNPACKFLOAT
float unpackFloat(vec4 rgbaDepth) {
    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);
    return dot(rgbaDepth, bitShift);
}
#endif
#endif

// Retrieves rendered linear camera depth by UV
float getLinearScreenDepth(vec2 uv) {
    #ifdef GL2
        return linearizeDepth(texture2D(uSceneDepthMap, uv).r);
    #else
        return unpackFloat(texture2D(uSceneDepthMap, uv)) * camera_params.y;
    #endif
}

#ifndef VERTEXSHADER
// Retrieves rendered linear camera depth under the current pixel
float getLinearScreenDepth() {
    vec2 uv = gl_FragCoord.xy * uScreenSize.zw;
    return getLinearScreenDepth(uv);
}
#endif

// Generates linear camera depth for the given world position
float getLinearDepth(vec3 pos) {
    return -(matrix_view * vec4(pos, 1.0)).z;
}
`,yS=`
const float maxCascades = 4.0;

// shadow matrix for selected cascade
mat4 cascadeShadowMat;

// function which selects a shadow projection matrix based on cascade distances 
void getShadowCascadeMatrix(mat4 shadowMatrixPalette[4], float shadowCascadeDistances[4], float shadowCascadeCount) {

    // depth in 0 .. far plane range
    float depth = 1.0 / gl_FragCoord.w;

    // find cascade index based on the depth (loop as there is no per component vec compare operator in webgl)
    float cascadeIndex = 0.0;
    for (float i = 0.0; i < maxCascades; i++) {
        if (depth < shadowCascadeDistances[int(i)]) {
            cascadeIndex = i;
            break;
        }
    }

    // limit to actual number of used cascades
    cascadeIndex = min(cascadeIndex, shadowCascadeCount - 1.0);

    // pick shadow matrix
    #ifdef GL2
        cascadeShadowMat = shadowMatrixPalette[int(cascadeIndex)];
    #else
        // webgl 1 does not allow non-cost index array lookup
        if (cascadeIndex == 0.0) {
            cascadeShadowMat = shadowMatrixPalette[0];
        }
        else if (cascadeIndex == 1.0) {
            cascadeShadowMat = shadowMatrixPalette[1];
        }
        else if (cascadeIndex == 2.0) {
            cascadeShadowMat = shadowMatrixPalette[2];
        }
        else {
            cascadeShadowMat = shadowMatrixPalette[3];
        }
    #endif
}

void fadeShadow(float shadowCascadeDistances[4]) {                  

    // if the pixel is past the shadow distance, remove shadow
    // this enforces straight line instead of corner of shadow which moves when camera rotates  
    float depth = 1.0 / gl_FragCoord.w;
    if (depth > shadowCascadeDistances[int(maxCascades - 1.0)]) {
        dShadowCoord.z = -9999999.0;
    }
}
`,xS=`
void normalOffsetPointShadow(vec4 shadowParams) {
    float distScale = length(dLightDirW);
    vec3 wPos = vPositionW + dVertexNormalW * shadowParams.y * clamp(1.0 - dot(dVertexNormalW, -dLightDirNormW), 0.0, 1.0) * distScale; //0.02
    vec3 dir = wPos - dLightPosW;
    dLightDirW = dir;
}
`,vS=`
void _getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams, vec3 wPos) {
    dShadowCoord = (shadowMatrix * vec4(wPos, 1.0)).xyz;
    dShadowCoord.z = saturate(dShadowCoord.z) - 0.0001;

    #ifdef SHADOWBIAS
    dShadowCoord.z += getShadowBias(shadowParams.x, shadowParams.z);
    #endif
}

void _getShadowCoordPersp(mat4 shadowMatrix, vec4 shadowParams, vec3 wPos) {
    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);
    projPos.xy /= projPos.w;
    dShadowCoord.xy = projPos.xy;
    dShadowCoord.z = length(dLightDirW) * shadowParams.w;

    #ifdef SHADOWBIAS
    dShadowCoord.z += getShadowBias(shadowParams.x, shadowParams.z);
    #endif
}

void getShadowCoordOrtho(mat4 shadowMatrix, vec3 shadowParams) {
    _getShadowCoordOrtho(shadowMatrix, shadowParams, vPositionW);
}

void getShadowCoordPersp(mat4 shadowMatrix, vec4 shadowParams) {
    _getShadowCoordPersp(shadowMatrix, shadowParams, vPositionW);
}

void getShadowCoordPerspNormalOffset(mat4 shadowMatrix, vec4 shadowParams) {
    float distScale = abs(dot(vPositionW - dLightPosW, dLightDirNormW)); // fov?
    vec3 wPos = vPositionW + dVertexNormalW * shadowParams.y * clamp(1.0 - dot(dVertexNormalW, -dLightDirNormW), 0.0, 1.0) * distScale;

    _getShadowCoordPersp(shadowMatrix, shadowParams, wPos);
}

void getShadowCoordOrthoNormalOffset(mat4 shadowMatrix, vec3 shadowParams) {
    vec3 wPos = vPositionW + dVertexNormalW * shadowParams.y * clamp(1.0 - dot(dVertexNormalW, -dLightDirNormW), 0.0, 1.0); //0.08

    _getShadowCoordOrtho(shadowMatrix, shadowParams, wPos);
}
`,SS=`
void _getShadowCoordPerspZbuffer(mat4 shadowMatrix, vec4 shadowParams, vec3 wPos) {
    vec4 projPos = shadowMatrix * vec4(wPos, 1.0);
    projPos.xyz /= projPos.w;
    dShadowCoord = projPos.xyz;
    // depth bias is already applied on render
}

void getShadowCoordPerspZbufferNormalOffset(mat4 shadowMatrix, vec4 shadowParams) {
    vec3 wPos = vPositionW + dVertexNormalW * shadowParams.y;
    _getShadowCoordPerspZbuffer(shadowMatrix, shadowParams, wPos);
}

void getShadowCoordPerspZbuffer(mat4 shadowMatrix, vec4 shadowParams) {
    _getShadowCoordPerspZbuffer(shadowMatrix, shadowParams, vPositionW);
}
`,bS=`
float VSM$(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {
    vec3 moments = texture2D(tex, texCoords).xyz;
    return calculateEVSM(moments, Z, vsmBias, exponent);
}

float getShadowVSM$(sampler2D shadowMap, vec3 shadowParams, float exponent) {
    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, exponent);
}

float getShadowSpotVSM$(sampler2D shadowMap, vec4 shadowParams, float exponent) {
    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, exponent);
}
`,wS=`
float VSM$(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {
    float pixelSize = 1.0 / resolution;
    texCoords -= vec2(pixelSize);
    vec3 s00 = texture2D(tex, texCoords).xyz;
    vec3 s10 = texture2D(tex, texCoords + vec2(pixelSize, 0)).xyz;
    vec3 s01 = texture2D(tex, texCoords + vec2(0, pixelSize)).xyz;
    vec3 s11 = texture2D(tex, texCoords + vec2(pixelSize)).xyz;
    vec2 fr = fract(texCoords * resolution);
    vec3 h0 = mix(s00, s10, fr.x);
    vec3 h1 = mix(s01, s11, fr.x);
    vec3 moments = mix(h0, h1, fr.y);
    return calculateEVSM(moments, Z, vsmBias, exponent);
}

float getShadowVSM$(sampler2D shadowMap, vec3 shadowParams, float exponent) {
    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, exponent);
}

float getShadowSpotVSM$(sampler2D shadowMap, vec4 shadowParams, float exponent) {
    return VSM$(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, exponent);
}
`,TS=`
vec3 lessThan2(vec3 a, vec3 b) {
    return clamp((b - a)*1000.0, 0.0, 1.0); // softer version
}

#ifndef UNPACKFLOAT
#define UNPACKFLOAT
float unpackFloat(vec4 rgbaDepth) {
    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);
    return dot(rgbaDepth, bitShift);
}
#endif

// ----- Direct/Spot Sampling -----

#ifdef GL2
float _getShadowPCF3x3(sampler2DShadow shadowMap, vec3 shadowParams) {
    float z = dShadowCoord.z;
    vec2 uv = dShadowCoord.xy * shadowParams.x; // 1 unit - 1 texel
    float shadowMapSizeInv = 1.0 / shadowParams.x;
    vec2 base_uv = floor(uv + 0.5);
    float s = (uv.x + 0.5 - base_uv.x);
    float t = (uv.y + 0.5 - base_uv.y);
    base_uv -= vec2(0.5);
    base_uv *= shadowMapSizeInv;

    float sum = 0.0;

    float uw0 = (3.0 - 2.0 * s);
    float uw1 = (1.0 + 2.0 * s);

    float u0 = (2.0 - s) / uw0 - 1.0;
    float u1 = s / uw1 + 1.0;

    float vw0 = (3.0 - 2.0 * t);
    float vw1 = (1.0 + 2.0 * t);

    float v0 = (2.0 - t) / vw0 - 1.0;
    float v1 = t / vw1 + 1.0;

    u0 = u0 * shadowMapSizeInv + base_uv.x;
    v0 = v0 * shadowMapSizeInv + base_uv.y;

    u1 = u1 * shadowMapSizeInv + base_uv.x;
    v1 = v1 * shadowMapSizeInv + base_uv.y;

    sum += uw0 * vw0 * textureShadow(shadowMap, vec3(u0, v0, z));
    sum += uw1 * vw0 * textureShadow(shadowMap, vec3(u1, v0, z));
    sum += uw0 * vw1 * textureShadow(shadowMap, vec3(u0, v1, z));
    sum += uw1 * vw1 * textureShadow(shadowMap, vec3(u1, v1, z));

    sum *= 1.0f / 16.0;
    return sum;
}

float getShadowPCF3x3(sampler2DShadow shadowMap, vec3 shadowParams) {
    return _getShadowPCF3x3(shadowMap, shadowParams);
}

float getShadowSpotPCF3x3(sampler2DShadow shadowMap, vec4 shadowParams) {
    return _getShadowPCF3x3(shadowMap, shadowParams.xyz);
}
#else
float _xgetShadowPCF3x3(mat3 depthKernel, sampler2D shadowMap, vec3 shadowParams) {
    mat3 shadowKernel;
    vec3 shadowCoord = dShadowCoord;
    vec3 shadowZ = vec3(shadowCoord.z);
    shadowKernel[0] = vec3(greaterThan(depthKernel[0], shadowZ));
    shadowKernel[1] = vec3(greaterThan(depthKernel[1], shadowZ));
    shadowKernel[2] = vec3(greaterThan(depthKernel[2], shadowZ));

    vec2 fractionalCoord = fract( shadowCoord.xy * shadowParams.x );

    shadowKernel[0] = mix(shadowKernel[0], shadowKernel[1], fractionalCoord.x);
    shadowKernel[1] = mix(shadowKernel[1], shadowKernel[2], fractionalCoord.x);

    vec4 shadowValues;
    shadowValues.x = mix(shadowKernel[0][0], shadowKernel[0][1], fractionalCoord.y);
    shadowValues.y = mix(shadowKernel[0][1], shadowKernel[0][2], fractionalCoord.y);
    shadowValues.z = mix(shadowKernel[1][0], shadowKernel[1][1], fractionalCoord.y);
    shadowValues.w = mix(shadowKernel[1][1], shadowKernel[1][2], fractionalCoord.y);

    return dot( shadowValues, vec4( 1.0 ) ) * 0.25;
}

float _getShadowPCF3x3(sampler2D shadowMap, vec3 shadowParams) {
    vec3 shadowCoord = dShadowCoord;

    float xoffset = 1.0 / shadowParams.x; // 1/shadow map width
    float dx0 = -xoffset;
    float dx1 = xoffset;

    mat3 depthKernel;
    depthKernel[0][0] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx0, dx0)));
    depthKernel[0][1] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx0, 0.0)));
    depthKernel[0][2] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx0, dx1)));
    depthKernel[1][0] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(0.0, dx0)));
    depthKernel[1][1] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy));
    depthKernel[1][2] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(0.0, dx1)));
    depthKernel[2][0] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx1, dx0)));
    depthKernel[2][1] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx1, 0.0)));
    depthKernel[2][2] = unpackFloat(textureShadow(shadowMap, shadowCoord.xy + vec2(dx1, dx1)));

    return _xgetShadowPCF3x3(depthKernel, shadowMap, shadowParams);
}

float getShadowPCF3x3(sampler2D shadowMap, vec3 shadowParams) {
    return _getShadowPCF3x3(shadowMap, shadowParams);
}

float getShadowSpotPCF3x3(sampler2D shadowMap, vec4 shadowParams) {
    return _getShadowPCF3x3(shadowMap, shadowParams.xyz);
}
#endif


// ----- Omni Sampling -----

float _getShadowPoint(samplerCube shadowMap, vec4 shadowParams, vec3 dir) {

    vec3 tc = normalize(dir);
    vec3 tcAbs = abs(tc);

    vec4 dirX = vec4(1,0,0, tc.x);
    vec4 dirY = vec4(0,1,0, tc.y);
    float majorAxisLength = tc.z;
    if ((tcAbs.x > tcAbs.y) && (tcAbs.x > tcAbs.z)) {
        dirX = vec4(0,0,1, tc.z);
        dirY = vec4(0,1,0, tc.y);
        majorAxisLength = tc.x;
    } else if ((tcAbs.y > tcAbs.x) && (tcAbs.y > tcAbs.z)) {
        dirX = vec4(1,0,0, tc.x);
        dirY = vec4(0,0,1, tc.z);
        majorAxisLength = tc.y;
    }

    float shadowParamsInFaceSpace = ((1.0/shadowParams.x) * 2.0) * abs(majorAxisLength);

    vec3 xoffset = (dirX.xyz * shadowParamsInFaceSpace);
    vec3 yoffset = (dirY.xyz * shadowParamsInFaceSpace);
    vec3 dx0 = -xoffset;
    vec3 dy0 = -yoffset;
    vec3 dx1 = xoffset;
    vec3 dy1 = yoffset;

    mat3 shadowKernel;
    mat3 depthKernel;

    depthKernel[0][0] = unpackFloat(textureCube(shadowMap, tc + dx0 + dy0));
    depthKernel[0][1] = unpackFloat(textureCube(shadowMap, tc + dx0));
    depthKernel[0][2] = unpackFloat(textureCube(shadowMap, tc + dx0 + dy1));
    depthKernel[1][0] = unpackFloat(textureCube(shadowMap, tc + dy0));
    depthKernel[1][1] = unpackFloat(textureCube(shadowMap, tc));
    depthKernel[1][2] = unpackFloat(textureCube(shadowMap, tc + dy1));
    depthKernel[2][0] = unpackFloat(textureCube(shadowMap, tc + dx1 + dy0));
    depthKernel[2][1] = unpackFloat(textureCube(shadowMap, tc + dx1));
    depthKernel[2][2] = unpackFloat(textureCube(shadowMap, tc + dx1 + dy1));

    vec3 shadowZ = vec3(length(dir) * shadowParams.w + shadowParams.z);

    shadowKernel[0] = vec3(lessThan2(depthKernel[0], shadowZ));
    shadowKernel[1] = vec3(lessThan2(depthKernel[1], shadowZ));
    shadowKernel[2] = vec3(lessThan2(depthKernel[2], shadowZ));

    vec2 uv = (vec2(dirX.w, dirY.w) / abs(majorAxisLength)) * 0.5;

    vec2 fractionalCoord = fract( uv * shadowParams.x );

    shadowKernel[0] = mix(shadowKernel[0], shadowKernel[1], fractionalCoord.x);
    shadowKernel[1] = mix(shadowKernel[1], shadowKernel[2], fractionalCoord.x);

    vec4 shadowValues;
    shadowValues.x = mix(shadowKernel[0][0], shadowKernel[0][1], fractionalCoord.y);
    shadowValues.y = mix(shadowKernel[0][1], shadowKernel[0][2], fractionalCoord.y);
    shadowValues.z = mix(shadowKernel[1][0], shadowKernel[1][1], fractionalCoord.y);
    shadowValues.w = mix(shadowKernel[1][1], shadowKernel[1][2], fractionalCoord.y);

    return 1.0 - dot( shadowValues, vec4( 1.0 ) ) * 0.25;
}

float getShadowPointPCF3x3(samplerCube shadowMap, vec4 shadowParams) {
    return _getShadowPoint(shadowMap, shadowParams, dLightDirW);
}
`,CS=`
float _getShadowPCF5x5(sampler2DShadow shadowMap, vec3 shadowParams) {
    // http://the-witness.net/news/2013/09/shadow-mapping-summary-part-1/

    float z = dShadowCoord.z;
    vec2 uv = dShadowCoord.xy * shadowParams.x; // 1 unit - 1 texel
    float shadowMapSizeInv = 1.0 / shadowParams.x;
    vec2 base_uv = floor(uv + 0.5);
    float s = (uv.x + 0.5 - base_uv.x);
    float t = (uv.y + 0.5 - base_uv.y);
    base_uv -= vec2(0.5);
    base_uv *= shadowMapSizeInv;


    float uw0 = (4.0 - 3.0 * s);
    float uw1 = 7.0;
    float uw2 = (1.0 + 3.0 * s);

    float u0 = (3.0 - 2.0 * s) / uw0 - 2.0;
    float u1 = (3.0 + s) / uw1;
    float u2 = s / uw2 + 2.0;

    float vw0 = (4.0 - 3.0 * t);
    float vw1 = 7.0;
    float vw2 = (1.0 + 3.0 * t);

    float v0 = (3.0 - 2.0 * t) / vw0 - 2.0;
    float v1 = (3.0 + t) / vw1;
    float v2 = t / vw2 + 2.0;

    float sum = 0.0;

    u0 = u0 * shadowMapSizeInv + base_uv.x;
    v0 = v0 * shadowMapSizeInv + base_uv.y;

    u1 = u1 * shadowMapSizeInv + base_uv.x;
    v1 = v1 * shadowMapSizeInv + base_uv.y;

    u2 = u2 * shadowMapSizeInv + base_uv.x;
    v2 = v2 * shadowMapSizeInv + base_uv.y;

    sum += uw0 * vw0 * textureShadow(shadowMap, vec3(u0, v0, z));
    sum += uw1 * vw0 * textureShadow(shadowMap, vec3(u1, v0, z));
    sum += uw2 * vw0 * textureShadow(shadowMap, vec3(u2, v0, z));

    sum += uw0 * vw1 * textureShadow(shadowMap, vec3(u0, v1, z));
    sum += uw1 * vw1 * textureShadow(shadowMap, vec3(u1, v1, z));
    sum += uw2 * vw1 * textureShadow(shadowMap, vec3(u2, v1, z));

    sum += uw0 * vw2 * textureShadow(shadowMap, vec3(u0, v2, z));
    sum += uw1 * vw2 * textureShadow(shadowMap, vec3(u1, v2, z));
    sum += uw2 * vw2 * textureShadow(shadowMap, vec3(u2, v2, z));

    sum *= 1.0f / 144.0;

    sum = gammaCorrectInput(sum); // gives softer gradient
    sum = saturate(sum);

    return sum;
}

float getShadowPCF5x5(sampler2DShadow shadowMap, vec3 shadowParams) {
    return _getShadowPCF5x5(shadowMap, shadowParams);
}

float getShadowSpotPCF5x5(sampler2DShadow shadowMap, vec4 shadowParams) {
    return _getShadowPCF5x5(shadowMap, shadowParams.xyz);
}
`,AS=`
float calculateVSM8(vec3 moments, float Z, float vsmBias) {
    float VSMBias = vsmBias;//0.01 * 0.25;
    float depthScale = VSMBias * Z;
    float minVariance1 = depthScale * depthScale;
    return chebyshevUpperBound(moments.xy, Z, minVariance1, 0.1);
}

float decodeFloatRG(vec2 rg) {
    return rg.y*(1.0/255.0) + rg.x;
}

float VSM8(sampler2D tex, vec2 texCoords, float resolution, float Z, float vsmBias, float exponent) {
    vec4 c = texture2D(tex, texCoords);
    vec3 moments = vec3(decodeFloatRG(c.xy), decodeFloatRG(c.zw), 0.0);
    return calculateVSM8(moments, Z, vsmBias);
}

float getShadowVSM8(sampler2D shadowMap, vec3 shadowParams, float exponent) {
    return VSM8(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z, shadowParams.y, 0.0);
}

float getShadowSpotVSM8(sampler2D shadowMap, vec4 shadowParams, float exponent) {
    return VSM8(shadowMap, dShadowCoord.xy, shadowParams.x, length(dLightDirW) * shadowParams.w + shadowParams.z, shadowParams.y, 0.0);
}
`,MS=`
float linstep(float a, float b, float v) {
    return saturate((v - a) / (b - a));
}

float reduceLightBleeding(float pMax, float amount) {
   // Remove the [0, amount] tail and linearly rescale (amount, 1].
   return linstep(amount, 1.0, pMax);
}

float chebyshevUpperBound(vec2 moments, float mean, float minVariance, float lightBleedingReduction) {
    // Compute variance
    float variance = moments.y - (moments.x * moments.x);
    variance = max(variance, minVariance);

    // Compute probabilistic upper bound
    float d = mean - moments.x;
    float pMax = variance / (variance + (d * d));

    pMax = reduceLightBleeding(pMax, lightBleedingReduction);

    // One-tailed Chebyshev
    return (mean <= moments.x ? 1.0 : pMax);
}

float calculateEVSM(vec3 moments, float Z, float vsmBias, float exponent) {
    Z = 2.0 * Z - 1.0;
    float warpedDepth = exp(exponent * Z);

    moments.xy += vec2(warpedDepth, warpedDepth*warpedDepth) * (1.0 - moments.z);

    float VSMBias = vsmBias;//0.01 * 0.25;
    float depthScale = VSMBias * exponent * warpedDepth;
    float minVariance1 = depthScale * depthScale;
    return chebyshevUpperBound(moments.xy, warpedDepth, minVariance1, 0.1);
}
`,PS=`
attribute float vertex_boneIndices;

uniform vec4 matrix_pose[BONE_LIMIT * 3];

mat4 getBoneMatrix(const in float i) {
    // read 4x3 matrix
    vec4 v1 = matrix_pose[int(3.0 * i)];
    vec4 v2 = matrix_pose[int(3.0 * i + 1.0)];
    vec4 v3 = matrix_pose[int(3.0 * i + 2.0)];

    // transpose to 4x4 matrix
    return mat4(
        v1.x, v2.x, v3.x, 0,
        v1.y, v2.y, v3.y, 0,
        v1.z, v2.z, v3.z, 0,
        v1.w, v2.w, v3.w, 1
    );
}
`,ES=`
attribute float vertex_boneIndices;

uniform highp sampler2D texture_poseMap;
uniform vec4 texture_poseMapSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 3.0;
    float dx = texture_poseMapSize.z;
    float dy = texture_poseMapSize.w;

    float y = floor(j * dx);
    float x = j - (y * texture_poseMapSize.x);
    y = dy * (y + 0.5);

    // read elements of 4x3 matrix
    vec4 v1 = texture2D(texture_poseMap, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(texture_poseMap, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(texture_poseMap, vec2(dx * (x + 2.5), y));

    // transpose to 4x4 matrix
    return mat4(
        v1.x, v2.x, v3.x, 0,
        v1.y, v2.y, v3.y, 0,
        v1.z, v2.z, v3.z, 0,
        v1.w, v2.w, v3.w, 1
    );
}
`,RS=`
attribute vec4 vertex_boneWeights;
attribute vec4 vertex_boneIndices;

uniform vec4 matrix_pose[BONE_LIMIT * 3];

void getBoneMatrix(const in float i, out vec4 v1, out vec4 v2, out vec4 v3) {
    // read 4x3 matrix
    v1 = matrix_pose[int(3.0 * i)];
    v2 = matrix_pose[int(3.0 * i + 1.0)];
    v3 = matrix_pose[int(3.0 * i + 2.0)];
}

mat4 getSkinMatrix(const in vec4 indices, const in vec4 weights) {
    // get 4 bone matrices
    vec4 a1, a2, a3;
    getBoneMatrix(indices.x, a1, a2, a3);

    vec4 b1, b2, b3;
    getBoneMatrix(indices.y, b1, b2, b3);

    vec4 c1, c2, c3;
    getBoneMatrix(indices.z, c1, c2, c3);

    vec4 d1, d2, d3;
    getBoneMatrix(indices.w, d1, d2, d3);

    // multiply them by weights and add up to get final 4x3 matrix
    vec4 v1 = a1 * weights.x + b1 * weights.y + c1 * weights.z + d1 * weights.w;
    vec4 v2 = a2 * weights.x + b2 * weights.y + c2 * weights.z + d2 * weights.w;
    vec4 v3 = a3 * weights.x + b3 * weights.y + c3 * weights.z + d3 * weights.w;

    // add up weights
    float one = dot(weights, vec4(1.0));

    // transpose to 4x4 matrix
    return mat4(
        v1.x, v2.x, v3.x, 0,
        v1.y, v2.y, v3.y, 0,
        v1.z, v2.z, v3.z, 0,
        v1.w, v2.w, v3.w, one
    );
}
`,IS=`
attribute vec4 vertex_boneWeights;
attribute vec4 vertex_boneIndices;

uniform highp sampler2D texture_poseMap;
uniform vec4 texture_poseMapSize;

void getBoneMatrix(const in float i, out vec4 v1, out vec4 v2, out vec4 v3) {
    float j = i * 3.0;
    float dx = texture_poseMapSize.z;
    float dy = texture_poseMapSize.w;
    
    float y = floor(j * dx);
    float x = j - (y * texture_poseMapSize.x);
    y = dy * (y + 0.5);

    // read elements of 4x3 matrix
    v1 = texture2D(texture_poseMap, vec2(dx * (x + 0.5), y));
    v2 = texture2D(texture_poseMap, vec2(dx * (x + 1.5), y));
    v3 = texture2D(texture_poseMap, vec2(dx * (x + 2.5), y));
}

mat4 getSkinMatrix(const in vec4 indices, const in vec4 weights) {
    // get 4 bone matrices
    vec4 a1, a2, a3;
    getBoneMatrix(indices.x, a1, a2, a3);

    vec4 b1, b2, b3;
    getBoneMatrix(indices.y, b1, b2, b3);

    vec4 c1, c2, c3;
    getBoneMatrix(indices.z, c1, c2, c3);

    vec4 d1, d2, d3;
    getBoneMatrix(indices.w, d1, d2, d3);

    // multiply them by weights and add up to get final 4x3 matrix
    vec4 v1 = a1 * weights.x + b1 * weights.y + c1 * weights.z + d1 * weights.w;
    vec4 v2 = a2 * weights.x + b2 * weights.y + c2 * weights.z + d2 * weights.w;
    vec4 v3 = a3 * weights.x + b3 * weights.y + c3 * weights.z + d3 * weights.w;

    // add up weights
    float one = dot(weights, vec4(1.0));

    // transpose to 4x4 matrix
    return mat4(
        v1.x, v2.x, v3.x, 0,
        v1.y, v2.y, v3.y, 0,
        v1.z, v2.z, v3.z, 0,
        v1.w, v2.w, v3.w, one
    );
}
`,LS=`
varying vec3 vViewDir;

uniform sampler2D texture_envAtlas;
uniform float mipLevel;

void main(void) {
    vec3 dir = vViewDir * vec3(-1.0, 1.0, 1.0);
    vec2 uv = toSphericalUv(normalize(dir));

    vec3 linear = $DECODE(texture2D(texture_envAtlas, mapRoughnessUv(uv, mipLevel)));

    gl_FragColor = vec4(gammaCorrectOutput(toneMap(processEnvironment(linear))), 1.0);
}
`,DS=`
varying vec3 vViewDir;

uniform samplerCube texture_cubeMap;

void main(void) {
    vec3 dir=vViewDir;
    dir.x *= -1.0;

    vec3 linear = $DECODE(textureCube(texture_cubeMap, fixSeamsStatic(dir, $FIXCONST)));

    gl_FragColor = vec4(gammaCorrectOutput(toneMap(processEnvironment(linear))), 1.0);
}
`,FS=`
attribute vec3 aPosition;

#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif

uniform mat4 matrix_projectionSkybox;
uniform mat3 cubeMapRotationMatrix;

varying vec3 vViewDir;

void main(void) {
    mat4 view = matrix_view;
    view[3][0] = view[3][1] = view[3][2] = 0.0;
    gl_Position = matrix_projectionSkybox * view * vec4(aPosition, 1.0);

    // Force skybox to far Z, regardless of the clip planes on the camera
    // Subtract a tiny fudge factor to ensure floating point errors don't
    // still push pixels beyond far Z. See:
    // http://www.opengl.org/discussion_boards/showthread.php/171867-skybox-problem

    gl_Position.z = gl_Position.w - 0.00001;
    vViewDir = aPosition * cubeMapRotationMatrix;
}
`,OS=`

#ifdef MAPCOLOR
uniform vec3 material_specular;
#endif

void getSpecularity() {
    vec3 specularColor = vec3(1,1,1);

    #ifdef MAPCOLOR
    specularColor *= material_specular;
    #endif

    #ifdef MAPTEXTURE
    specularColor *= $DECODE(texture2DBias($SAMPLER, $UV, textureBias)).$CH;
    #endif

    #ifdef MAPVERTEX
    specularColor *= saturate(vVertexColor.$VC);
    #endif

    dSpecularity = specularColor;
}
`,BS=`
// equirectangular helper functions
const float PI = 3.141592653589793;

vec2 toSpherical(vec3 dir) {
    return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));
}

vec2 toSphericalUv(vec3 dir) {
    vec2 uv = toSpherical(dir) / vec2(PI * 2.0, PI) + 0.5;
    return vec2(uv.x, 1.0 - uv.y);
}
`,kS=`

#ifdef MAPFLOAT
uniform float material_specularityFactor;
#endif

void getSpecularityFactor() {
    float specularityFactor = 1.0;

    #ifdef MAPFLOAT
    specularityFactor *= material_specularityFactor;
    #endif

    #ifdef MAPTEXTURE
    specularityFactor *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    specularityFactor *= saturate(vVertexColor.$VC);
    #endif

    dSpecularityFactor = specularityFactor;
}
`,zS=`
float getSpotEffect(vec3 lightSpotDirW, float lightInnerConeAngle, float lightOuterConeAngle) {
    float cosAngle = dot(dLightDirNormW, lightSpotDirW);
    return smoothstep(lightOuterConeAngle, lightInnerConeAngle, cosAngle);
}
`,US=`
void main(void) {
    dReflection = vec4(0);

    #ifdef LIT_CLEARCOAT
    ccSpecularLight = vec3(0);
    ccReflection = vec3(0);
    #endif
`,NS=`
void main(void) {
    gl_Position = getPosition();
`,VS=`
    nineSlicedUv = vUv0;
    nineSlicedUv.y = 1.0 - nineSlicedUv.y;

`,GS=`
    vec2 tileMask = step(vMask, vec2(0.99999));
    vec2 tileSize = 0.5 * (innerOffset.xy + innerOffset.zw);
    vec2 tileScale = vec2(1.0) / (vec2(1.0) - tileSize);
    vec2 clampedUv = mix(innerOffset.xy * 0.5, vec2(1.0) - innerOffset.zw * 0.5, fract((vTiledUv - tileSize) * tileScale));
    clampedUv = clampedUv * atlasRect.zw + atlasRect.xy;
    nineSlicedUv = vUv0 * tileMask + clampedUv * (vec2(1.0) - tileMask);
    nineSlicedUv.y = 1.0 - nineSlicedUv.y;
    
`,WS=`
float exponent = VSM_EXPONENT;

depth = 2.0 * depth - 1.0;
depth =  exp(exponent * depth);
gl_FragColor = vec4(depth, depth*depth, 1.0, 1.0);
`,HS=`
vec3 getTangent() {
    return normalize(dNormalMatrix * vertex_tangent.xyz);
}

vec3 getBinormal() {
    return cross(vNormalW, vTangentW) * vertex_tangent.w;
}

vec3 getObjectSpaceUp() {
    return normalize(dNormalMatrix * vec3(0, 1, 0));
}
`,XS=`
void getTBN() {
    dTBN = mat3(normalize(dTangentW), normalize(dBinormalW), normalize(dVertexNormalW));
}
`,qS=`
uniform float tbnBasis;

// http://www.thetenthplanet.de/archives/1180
void getTBN() {
    vec2 uv = $UV;

    // get edge vectors of the pixel triangle
    vec3 dp1 = dFdx( vPositionW );
    vec3 dp2 = dFdy( vPositionW );
    vec2 duv1 = dFdx( uv );
    vec2 duv2 = dFdy( uv );

    // solve the linear system
    vec3 dp2perp = cross( dp2, dVertexNormalW );
    vec3 dp1perp = cross( dVertexNormalW, dp1 );
    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;

    // construct a scale-invariant frame
    float denom = max( dot(T,T), dot(B,B) );
    float invmax = (denom == 0.0) ? 0.0 : tbnBasis / sqrt( denom );
    dTBN = mat3(T * invmax, -B * invmax, dVertexNormalW );
}
`,jS=`
void getTBN() {
    dTBN = mat3(dTangentW, dBinormalW, dVertexNormalW);
}
`,YS=`
void getTBN() {

    vec3 B = cross(dVertexNormalW, vObjectSpaceUpW);
    vec3 T = cross(dVertexNormalW, B);

    if (dot(B,B)==0.0) // deal with case when vObjectSpaceUpW dVertexNormalW are parallel
    {
        float major=max(max(dVertexNormalW.x, dVertexNormalW.y),dVertexNormalW.z);

        if (dVertexNormalW.x==major)
        {
            B=cross(dVertexNormalW, vec3(0,1,0));
            T=cross(dVertexNormalW, B);
        }
        else if (dVertexNormalW.y==major)
        {
            B=cross(dVertexNormalW, vec3(0,0,1));
            T=cross(dVertexNormalW, B);
        }
        else if (dVertexNormalW.z==major)
        {
            B=cross(dVertexNormalW, vec3(1,0,0));
            T=cross(dVertexNormalW, B);
        }
    }

    dTBN = mat3(normalize(T), normalize(B), normalize(dVertexNormalW));
}
`,$S=`
vec4 texture2DSRGB(sampler2D tex, vec2 uv) {
    return gammaCorrectInput(texture2D(tex, uv));
}

vec4 texture2DSRGB(sampler2D tex, vec2 uv, float bias) {
    return gammaCorrectInput(texture2D(tex, uv, bias));
}

vec3 texture2DRGBM(sampler2D tex, vec2 uv) {
    return decodeRGBM(texture2D(tex, uv));
}

vec3 texture2DRGBM(sampler2D tex, vec2 uv, float bias) {
    return decodeRGBM(texture2D(tex, uv, bias));
}

vec3 texture2DRGBE(sampler2D tex, vec2 uv) {
    return decodeRGBM(texture2D(tex, uv));
}

vec3 texture2DRGBE(sampler2D tex, vec2 uv, float bias) {
    return decodeRGBM(texture2D(tex, uv, bias));
}
`,KS=`
#ifdef MAPFLOAT
uniform float material_thickness;
#endif

void getThickness() {
    dThickness = 1.0;

    #ifdef MAPFLOAT
    dThickness *= material_thickness;
    #endif

    #ifdef MAPTEXTURE
    dThickness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dThickness *= saturate(vVertexColor.$VC);
    #endif
}
`,ZS=`
uniform float exposure;

vec3 toneMap(vec3 color) {
    float tA = 2.51;
    float tB = 0.03;
    float tC = 2.43;
    float tD = 0.59;
    float tE = 0.14;
    vec3 x = color * exposure;
    return (x*(tA*x+tB))/(x*(tC*x+tD)+tE);
}
`,JS=`
uniform float exposure;

// ACES approximation by Stephen Hill

// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
const mat3 ACESInputMat = mat3(
    0.59719, 0.35458, 0.04823,
    0.07600, 0.90834, 0.01566,
    0.02840, 0.13383, 0.83777
);

// ODT_SAT => XYZ => D60_2_D65 => sRGB
const mat3 ACESOutputMat = mat3(
     1.60475, -0.53108, -0.07367,
    -0.10208,  1.10813, -0.00605,
    -0.00327, -0.07276,  1.07602
);

vec3 RRTAndODTFit(vec3 v) {
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
}

vec3 toneMap(vec3 color) {
    color *= exposure;
    color = color * ACESInputMat;

    // Apply RRT and ODT
    color = RRTAndODTFit(color);
    color = color * ACESOutputMat;

    // Clamp to [0, 1]
    color = clamp(color, 0.0, 1.0);

    return color;
}
`,QS=`
const float A =  0.15;
const float B =  0.50;
const float C =  0.10;
const float D =  0.20;
const float E =  0.02;
const float F =  0.30;
const float W =  11.2;

uniform float exposure;

vec3 uncharted2Tonemap(vec3 x) {
   return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;
}

vec3 toneMap(vec3 color) {
    color = uncharted2Tonemap(color * exposure);
    vec3 whiteScale = 1.0 / uncharted2Tonemap(vec3(W,W,W));
    color = color * whiteScale;

    return color;
}
`,eb=`
uniform float exposure;

vec3 toneMap(vec3 color) {
    color *= exposure;
    const float  A = 0.22, B = 0.3, C = .1, D = 0.2, E = .01, F = 0.3;
    const float Scl = 1.25;

    vec3 h = max( vec3(0.0), color - vec3(0.004) );
    return (h*((Scl*A)*h+Scl*vec3(C*B,C*B,C*B))+Scl*vec3(D*E,D*E,D*E)) / (h*(A*h+vec3(B,B,B))+vec3(D*F,D*F,D*F)) - Scl*vec3(E/F,E/F,E/F);
}
`,tb=`
uniform float exposure;

vec3 toneMap(vec3 color) {
    return color * exposure;
}
`,sb=`
vec3 toneMap(vec3 color) {
    return color;
}
`,ib=`
#ifdef PIXELSNAP
uniform vec4 uScreenSize;
#endif

#ifdef SCREENSPACE
uniform float projectionFlipY;
#endif

#ifdef MORPHING
uniform vec4 morph_weights_a;
uniform vec4 morph_weights_b;
#endif

#ifdef MORPHING_TEXTURE_BASED
uniform vec4 morph_tex_params;

vec2 getTextureMorphCoords() {
    float vertexId = morph_vertex_id;
    vec2 textureSize = morph_tex_params.xy;
    vec2 invTextureSize = morph_tex_params.zw;

    // turn vertexId into int grid coordinates
    float morphGridV = floor(vertexId * invTextureSize.x);
    float morphGridU = vertexId - (morphGridV * textureSize.x);

    // convert grid coordinates to uv coordinates with half pixel offset
    return (vec2(morphGridU, morphGridV) * invTextureSize) + (0.5 * invTextureSize);
}
#endif

#ifdef MORPHING_TEXTURE_BASED_POSITION
uniform highp sampler2D morphPositionTex;
#endif

mat4 getModelMatrix() {
    #ifdef DYNAMICBATCH
    return getBoneMatrix(vertex_boneIndices);
    #elif defined(SKIN)
    return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
    #elif defined(INSTANCING)
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
    #else
    return matrix_model;
    #endif
}

vec4 getPosition() {
    dModelMatrix = getModelMatrix();
    vec3 localPos = vertex_position;

    #ifdef NINESLICED
    // outer and inner vertices are at the same position, scale both
    localPos.xz *= outerScale;

    // offset inner vertices inside
    // (original vertices must be in [-1;1] range)
    vec2 positiveUnitOffset = clamp(vertex_position.xz, vec2(0.0), vec2(1.0));
    vec2 negativeUnitOffset = clamp(-vertex_position.xz, vec2(0.0), vec2(1.0));
    localPos.xz += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;

    vTiledUv = (localPos.xz - outerScale + innerOffset.xy) * -0.5 + 1.0; // uv = local pos - inner corner

    localPos.xz *= -0.5; // move from -1;1 to -0.5;0.5
    localPos = localPos.xzy;
    #endif

    #ifdef MORPHING
    #ifdef MORPHING_POS03
    localPos.xyz += morph_weights_a[0] * morph_pos0;
    localPos.xyz += morph_weights_a[1] * morph_pos1;
    localPos.xyz += morph_weights_a[2] * morph_pos2;
    localPos.xyz += morph_weights_a[3] * morph_pos3;
    #endif // MORPHING_POS03
    #ifdef MORPHING_POS47
    localPos.xyz += morph_weights_b[0] * morph_pos4;
    localPos.xyz += morph_weights_b[1] * morph_pos5;
    localPos.xyz += morph_weights_b[2] * morph_pos6;
    localPos.xyz += morph_weights_b[3] * morph_pos7;
    #endif // MORPHING_POS47
    #endif // MORPHING

    #ifdef MORPHING_TEXTURE_BASED_POSITION
    // apply morph offset from texture
    vec2 morphUV = getTextureMorphCoords();
    vec3 morphPos = texture2D(morphPositionTex, morphUV).xyz;
    localPos += morphPos;
    #endif

    vec4 posW = dModelMatrix * vec4(localPos, 1.0);
    #ifdef SCREENSPACE
    posW.zw = vec2(0.0, 1.0);
    #endif
    dPositionW = posW.xyz;

    vec4 screenPos;
    #ifdef UV1LAYOUT
    screenPos = vec4(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1);
    #else
    #ifdef SCREENSPACE
    screenPos = posW;
    screenPos.y *= projectionFlipY;
    #else
    screenPos = matrix_viewProjection * posW;
    #endif

    #ifdef PIXELSNAP
    // snap vertex to a pixel boundary
    screenPos.xy = (screenPos.xy * 0.5) + 0.5;
    screenPos.xy *= uScreenSize.xy;
    screenPos.xy = floor(screenPos.xy);
    screenPos.xy *= uScreenSize.zw;
    screenPos.xy = (screenPos.xy * 2.0) - 1.0;
    #endif
    #endif

    return screenPos;
}

vec3 getWorldPosition() {
    return dPositionW;
}
`,nb=`
attribute vec3 vertex_position;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

vec3 dPositionW;
mat4 dModelMatrix;
`,rb=`

#ifdef MAPFLOAT
uniform float material_refraction;
#endif

void getRefraction() {
    float refraction = 1.0;

    #ifdef MAPFLOAT
    refraction = material_refraction;
    #endif

    #ifdef MAPTEXTURE
    refraction *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    refraction *= saturate(vVertexColor.$VC);
    #endif

    dTransmission = refraction;
}
`,ab=`
#ifdef NINESLICED
vec2 getUv0() {
    vec2 uv = vertex_position.xz;

    // offset inner vertices inside
    // (original vertices must be in [-1;1] range)
    vec2 positiveUnitOffset = clamp(vertex_position.xz, vec2(0.0), vec2(1.0));
    vec2 negativeUnitOffset = clamp(-vertex_position.xz, vec2(0.0), vec2(1.0));
    uv += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;

    uv = uv * -0.5 + 0.5;
    uv = uv * atlasRect.zw + atlasRect.xy;

    vMask = vertex_texCoord0.xy;

    return uv;
}
#else
vec2 getUv0() {
    return vertex_texCoord0;
}
#endif
`,ob=`
vec2 getUv1() {
    return vertex_texCoord1;
}
`,lb=`
void getViewDir() {
    dViewDirW = normalize(view_position - vPositionW);
}
`,hb=`
#ifndef VIEWMATRIX
#define VIEWMATRIX
uniform mat4 matrix_view;
#endif

vec3 getViewNormal() {
    return mat3(matrix_view) * vNormalW;
}
`;const B={alphaTestPS:k0,ambientConstantPS:z0,ambientEnvPS:U0,ambientSHPS:N0,aoPS:V0,aoDiffuseOccPS:G0,aoSpecOccPS:W0,aoSpecOccConstPS:H0,aoSpecOccConstSimplePS:X0,aoSpecOccSimplePS:q0,basePS:j0,baseVS:Y0,baseNineSlicedPS:$0,baseNineSlicedVS:K0,baseNineSlicedTiledPS:Z0,biasConstPS:J0,blurVSMPS:Q0,clearCoatPS:ex,clearCoatGlossPS:tx,clearCoatNormalPS:sx,clusteredLightCookiesPS:nx,clusteredLightShadowsPS:rx,clusteredLightUtilsPS:ix,clusteredLightPS:ax,combinePS:ox,cookiePS:lx,cubeMapProjectBoxPS:hx,cubeMapProjectNonePS:cx,cubeMapRotatePS:dx,detailModesPS:ux,diffusePS:fx,diffuseDetailMapPS:px,decodePS:gm,emissivePS:mx,encodePS:ym,endPS:_x,endVS:gx,envAtlasPS:yx,envConstPS:xx,envMultiplyPS:vx,extensionPS:Sx,extensionVS:bx,falloffInvSquaredPS:wx,falloffLinearPS:Tx,fixCubemapSeamsNonePS:Cx,fixCubemapSeamsStretchPS:Ax,floatUnpackingPS:Mx,fogExpPS:Px,fogExp2PS:Ex,fogLinearPS:Rx,fogNonePS:Ix,fresnelSchlickPS:Lx,fullscreenQuadPS:Dx,fullscreenQuadVS:Fx,gamma1_0PS:Ox,gamma2_2PS:Bx,gles2PS:tm,gles3PS:sm,gles3VS:im,glossPS:kx,iridescenceDiffractionPS:zx,iridescencePS:Ux,iridescenceThicknessPS:Nx,instancingVS:Vx,lightDiffuseLambertPS:Gx,lightDirPointPS:Wx,lightmapAddPS:Hx,lightmapDirAddPS:Xx,lightmapDirPS:qx,lightmapSinglePS:jx,lightSpecularAnisoGGXPS:Yx,lightSpecularBlinnPS:$x,lightSpecularPhongPS:Kx,lightSheenPS:Zx,ltc:Jx,metalnessPS:Qx,metalnessModulatePS:tv,msdfPS:ev,msdfVS:sv,normalVS:iv,normalDetailMapPS:nv,normalInstancedVS:rv,normalMapPS:av,normalSkinnedVS:ov,normalXYPS:lv,normalXYZPS:hv,opacityPS:cv,outputAlphaPS:dv,outputAlphaOpaquePS:uv,outputAlphaPremulPS:fv,outputTex2DPS:pv,packDepthPS:mv,sheenPS:_v,sheenGlossPS:gv,parallaxPS:yv,particlePS:xv,particleVS:vv,particleAnimFrameClampVS:Sv,particleAnimFrameLoopVS:bv,particleAnimTexVS:wv,particleInputFloatPS:Tv,particleInputRgba8PS:Cv,particleOutputFloatPS:Av,particleOutputRgba8PS:Mv,particleUpdaterAABBPS:Pv,particleUpdaterEndPS:Ev,particleUpdaterInitPS:Rv,particleUpdaterNoRespawnPS:Iv,particleUpdaterOnStopPS:Lv,particleUpdaterRespawnPS:Dv,particleUpdaterSpherePS:Fv,particleUpdaterStartPS:Ov,particle_billboardVS:Bv,particle_blendAddPS:kv,particle_blendMultiplyPS:zv,particle_blendNormalPS:Uv,particle_cpuVS:Nv,particle_cpu_endVS:Vv,particle_customFaceVS:Gv,particle_endPS:Wv,particle_endVS:Hv,particle_halflambertPS:Xv,particle_initVS:qv,particle_lambertPS:jv,particle_lightingPS:Yv,particle_localShiftVS:$v,particle_meshVS:Kv,particle_normalVS:Zv,particle_normalMapPS:Jv,particle_pointAlongVS:Qv,particle_softPS:eS,particle_softVS:tS,particle_stretchVS:sS,particle_TBNVS:iS,particle_wrapVS:nS,reflDirPS:rS,reflDirAnisoPS:aS,reflectionCCPS:oS,reflectionCubePS:lS,reflectionEnvHQPS:hS,reflectionEnvPS:cS,reflectionSpherePS:dS,reflectionSphereLowPS:uS,reflectionSheenPS:fS,refractionCubePS:pS,refractionDynamicPS:mS,reprojectPS:_S,screenDepthPS:gS,shadowCascadesPS:yS,shadowCommonPS:xS,shadowCoordPS:vS,shadowCoordPerspZbufferPS:SS,shadowEVSMPS:bS,shadowEVSMnPS:wS,shadowStandardPS:TS,shadowStandardGL2PS:CS,shadowVSM8PS:AS,shadowVSM_commonPS:MS,skinBatchConstVS:PS,skinBatchTexVS:ES,skinConstVS:RS,skinTexVS:IS,skyboxEnvPS:LS,skyboxHDRPS:DS,skyboxVS:FS,specularPS:OS,sphericalPS:BS,specularityFactorPS:kS,spotPS:zS,startPS:US,startVS:NS,startNineSlicedPS:VS,startNineSlicedTiledPS:GS,storeEVSMPS:WS,tangentBinormalVS:HS,TBNPS:XS,TBNderivativePS:qS,TBNfastPS:jS,TBNObjectSpacePS:YS,textureSamplePS:$S,thicknessPS:KS,tonemappingAcesPS:ZS,tonemappingAces2PS:JS,tonemappingFilmicPS:QS,tonemappingHejlPS:eb,tonemappingLinearPS:tb,tonemappingNonePS:sb,transformVS:ib,transformDeclVS:nb,transmissionPS:rb,uv0VS:ab,uv1VS:ob,viewDirPS:lb,viewNormalVS:hb,webgpuPS:nm,webgpuVS:rm};class mt{static getType(e){switch(e){case Nn:case Os:return $l;case Qt:return S0;case jn:return b0;default:return e>=Bi&&e<Bi+er*n0?du:$l}}static isForward(e){return this.getType(e)===$l}static isShadow(e){return this.getType(e)===du}static toLightType(e){const t=e-Bi;return Math.floor(t/er)}static toShadowType(e){const t=e-Bi,s=Math.floor(t/er);return t-s*er}static getShadow(e,t){const s=t+e*er;return Bi+s}static getPassShaderDefine(e){return e===jn?`#define PICK_PASS
`:e===Qt?`#define DEPTH_PASS
`:mt.isShadow(e)?`#define SHADOW_PASS
`:""}}function qo(l,e){return e||(e=B),l===hm||l===m0?e.gamma2_2PS?e.gamma2_2PS:B.gamma2_2PS:l===ko?`#define HDR
`+(e.gamma2_2PS?e.gamma2_2PS:B.gamma2_2PS):e.gamma1_0PS?e.gamma1_0PS:B.gamma1_0PS}function jo(l,e){return e||(e=B),l===_0?e.tonemappingFilmicPS?e.tonemappingFilmicPS:B.tonemappingFilmicPS:l===zo?e.tonemappingLinearPS?e.tonemappingLinearPS:B.tonemappingLinearPS:l===g0?e.tonemappingHejlPS?e.tonemappingHejlPS:B.tonemappingHejlPS:l===y0?e.tonemappingAcesPS?e.tonemappingAcesPS:B.tonemappingAcesPS:l===x0?e.tonemappingAces2PS?e.tonemappingAces2PS:B.tonemappingAces2PS:e.tonemapingNonePS?e.tonemapingNonePS:B.tonemappingNonePS}function xm(l,e){return e||(e=B),l==="linear"?e.fogLinearPS?e.fogLinearPS:B.fogLinearPS:l==="exp"?e.fogExpPS?e.fogExpPS:B.fogExpPS:l==="exp2"?e.fogExp2PS?e.fogExp2PS:B.fogExp2PS:e.fogNonePS?e.fogNonePS:B.fogNonePS}function vm(l,e){return e||(e=B),l.supportsBoneTextures?e.skinTexVS:"#define BONE_LIMIT "+l.getBoneLimit()+`
`+e.skinConstVS}function Ur(){return`void main(void)
{
`}function Dn(){return`}
`}const cb={generateKey:function(l){let e="basic";return l.fog&&(e+="_fog"),l.alphaTest&&(e+="_atst"),l.vertexColors&&(e+="_vcol"),l.diffuseMap&&(e+="_diff"),l.skin&&(e+="_skin"),l.screenSpace&&(e+="_ss"),l.useInstancing&&(e+="_inst"),l.useMorphPosition&&(e+="_morphp"),l.useMorphNormal&&(e+="_morphn"),l.useMorphTextureBased&&(e+="_morpht"),e+="_"+l.pass,e},createShaderDefinition:function(l,e){const t={vertex_position:Ne};e.skin&&(t.vertex_boneWeights=ms,t.vertex_boneIndices=Et),e.vertexColors&&(t.vertex_color=lt),e.diffuseMap&&(t.vertex_texCoord0=It);const s=mt.getPassShaderDefine(e.pass);let i=s;i+=B.transformDeclVS,e.skin?(i+=vm(l),i+=B.transformSkinnedVS):i+=B.transformVS,e.vertexColors&&(i+=`attribute vec4 vertex_color;
`,i+=`varying vec4 vColor;
`),e.diffuseMap&&(i+=`attribute vec2 vertex_texCoord0;
`,i+=`varying vec2 vUv0;
`),e.pass===Qt&&(i+=`varying float vDepth;
`,i+=`#ifndef VIEWMATRIX
`,i+=`#define VIEWMATRIX
`,i+=`uniform mat4 matrix_view;
`,i+=`#endif
`,i+=`#ifndef CAMERAPLANES
`,i+=`#define CAMERAPLANES
`,i+=`uniform vec4 camera_params;

`,i+=`#endif
`),i+=Ur(),i+=`   gl_Position = getPosition();
`,e.pass===Qt&&(i+=`    vDepth = -(matrix_view * vec4(getWorldPosition(),1.0)).z * camera_params.x;
`),e.vertexColors&&(i+=`    vColor = vertex_color;
`),e.diffuseMap&&(i+=`    vUv0 = vertex_texCoord0;
`),i+=Dn();let n=s;return e.vertexColors?n+=`varying vec4 vColor;
`:n+=`uniform vec4 uColor;
`,e.diffuseMap&&(n+=`varying vec2 vUv0;
`,n+=`uniform sampler2D texture_diffuseMap;
`),e.fog&&(n+=xm(e.fog)),e.alphaTest&&(n+=B.alphaTestPS),e.pass===Qt&&(n+=`varying float vDepth;
`,n+=B.packDepthPS),n+=Ur(),e.vertexColors?n+=`    gl_FragColor = vColor;
`:n+=`    gl_FragColor = uColor;
`,e.diffuseMap&&(n+=`    gl_FragColor *= texture2D(texture_diffuseMap, vUv0);
`),e.alphaTest&&(n+=`   alphaTest(gl_FragColor.a);
`),e.pass!==jn&&(e.pass===Qt?n+=`    gl_FragColor = packFloat(vDepth);
`:e.fog&&(n+=`   glFragColor.rgb = addFog(gl_FragColor.rgb);
`)),n+=Dn(),Ke.createDefinition(l,{name:"BasicShader",attributes:t,vertexCode:i,fragmentCode:n})}};class yd{constructor(e,t){this.uniformFormats=[],this.bindGroupFormats=[],this.uniformFormats[ac]=e,this.bindGroupFormats[ac]=t}hasUniform(e){for(let t=0;t<this.uniformFormats.length;t++)if(this.uniformFormats[t].get(e))return!0;return!1}hasTexture(e){for(let t=0;t<this.bindGroupFormats.length;t++)if(this.bindGroupFormats[t].getTexture(e))return!0;return!1}}const Sm=new Zn;function en(l){return Sm.get(l)}function db(l,e){Sm.get(l,()=>e)}const bm=new Zn;function aa(l){return bm.get(l)}function ub(l,e){bm.get(l,()=>e)}let fb=0;class gi{constructor(){this._shader=null,this.meshInstances=[],this.name="Untitled",this.id=fb++,this.variants={},this.parameters={},this.alphaTest=0,this.alphaToCoverage=!1,this.blend=!1,this.blendSrc=Ie,this.blendDst=Fi,this.blendEquation=qe,this.separateAlphaBlend=!1,this.blendSrcAlpha=Ie,this.blendDstAlpha=Fi,this.blendAlphaEquation=qe,this.cull=Xn,this.depthTest=!0,this.depthFunc=gl,this.depthWrite=!0,this.stencilFront=null,this.stencilBack=null,this.depthBias=0,this.slopeDepthBias=0,this.redWrite=!0,this.greenWrite=!0,this.blueWrite=!0,this.alphaWrite=!0,this._shaderVersion=0,this._scene=null,this._dirtyBlend=!1,this.dirty=!0}set shader(e){this._shader=e}get shader(){return this._shader}get transparent(){return this.blend}set blendType(e){let t=!0;switch(e){case Vt:t=!1,this.blendSrc=Ie,this.blendDst=Fi,this.blendEquation=qe;break;case yt:this.blendSrc=va,this.blendDst=Sa,this.blendEquation=qe;break;case _i:this.blendSrc=Ie,this.blendDst=Sa,this.blendEquation=qe;break;case Do:this.blendSrc=Ie,this.blendDst=Ie,this.blendEquation=qe;break;case Oo:this.blendSrc=va,this.blendDst=Ie,this.blendEquation=qe;break;case hc:this.blendSrc=xa,this.blendDst=jd,this.blendEquation=qe;break;case cc:this.blendSrc=Yd,this.blendDst=Ie,this.blendEquation=qe;break;case Fo:this.blendSrc=xa,this.blendDst=Fi,this.blendEquation=qe;break;case dc:this.blendSrc=Ie,this.blendDst=Ie,this.blendEquation=$d;break;case uc:this.blendSrc=Ie,this.blendDst=Ie,this.blendEquation=Kd;break}this.blend!==t&&(this.blend=t,this._scene?this._scene.layers._dirtyBlend=!0:this._dirtyBlend=!0),this._updateMeshInstanceKeys()}get blendType(){return this.blend?this.blendSrc===va&&this.blendDst===Sa&&this.blendEquation===qe?yt:this.blendSrc===Ie&&this.blendDst===Ie&&this.blendEquation===qe?Do:this.blendSrc===va&&this.blendDst===Ie&&this.blendEquation===qe?Oo:this.blendSrc===xa&&this.blendDst===jd&&this.blendEquation===qe?hc:this.blendSrc===Yd&&this.blendDst===Ie&&this.blendEquation===qe?cc:this.blendSrc===Ie&&this.blendDst===Ie&&this.blendEquation===$d?dc:this.blendSrc===Ie&&this.blendDst===Ie&&this.blendEquation===Kd?uc:this.blendSrc===xa&&this.blendDst===Fi&&this.blendEquation===qe?Fo:this.blendSrc===Ie&&this.blendDst===Sa&&this.blendEquation===qe?_i:yt:Vt}copy(e){return this.name=e.name,this._shader=e._shader,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.blend=e.blend,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.separateAlphaBlend=e.separateAlphaBlend,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendAlphaEquation=e.blendAlphaEquation,this.cull=e.cull,this.depthTest=e.depthTest,this.depthFunc=e.depthFunc,this.depthWrite=e.depthWrite,this.depthBias=e.depthBias,this.slopeDepthBias=e.slopeDepthBias,e.stencilFront&&(this.stencilFront=e.stencilFront.clone()),e.stencilBack&&(e.stencilFront===e.stencilBack?this.stencilBack=this.stencilFront:this.stencilBack=e.stencilBack.clone()),this.redWrite=e.redWrite,this.greenWrite=e.greenWrite,this.blueWrite=e.blueWrite,this.alphaWrite=e.alphaWrite,this}clone(){return new this.constructor().copy(this)}_updateMeshInstanceKeys(){const e=this.meshInstances;for(let t=0;t<e.length;t++)e[t].updateKey()}updateUniforms(e,t){}getShaderVariant(e,t,s,i,n,r,a,o){const h=`shader-id-${this._shader.id}`,c=this._shader.definition,d={generateKey:function(m){return h},createShaderDefinition:function(m,g){return c}},u="shader",f=en(e);f.register(u,d);const p=new yd(a,o),_=f.getProgram(u,{},p);return f.unregister(u),_}update(){this.dirty=!0,this._shader&&(this._shader.failed=!1)}clearParameters(){this.parameters={}}getParameters(){return this.parameters}clearVariants(){this.variants={};const e=this.meshInstances,t=e.length;for(let s=0;s<t;s++)e[s].clearShaders()}getParameter(e){return this.parameters[e]}setParameter(e,t){if(t===void 0&&typeof e=="object"){const i=e;if(i.length){for(let n=0;n<i.length;n++)this.setParameter(i[n]);return}e=i.name,t=i.value}const s=this.parameters[e];s?s.data=t:this.parameters[e]={scopeId:null,data:t}}deleteParameter(e){this.parameters[e]&&delete this.parameters[e]}setParameters(e,t){const s=this.parameters;t===void 0&&(t=s);for(const i in t){const n=s[i];n&&(n.scopeId||(n.scopeId=e.scope.resolve(i)),n.scopeId.setValue(n.data))}}destroy(){this.variants={},this._shader=null;for(let e=0;e<this.meshInstances.length;e++){const t=this.meshInstances[e];if(t.clearShaders(),t._material=null,t.mesh){const s=aa(t.mesh.device);this!==s&&(t.material=s)}}this.meshInstances.length=0}addMeshInstanceRef(e){this.meshInstances.push(e)}removeMeshInstanceRef(e){const t=this.meshInstances,s=t.indexOf(e);s!==-1&&t.splice(s,1)}}class pb extends gi{constructor(){super(),this.color=new G(1,1,1,1),this.colorUniform=new Float32Array(4),this.colorMap=null,this.vertexColors=!1}copy(e){return super.copy(e),this.color.copy(e.color),this.colorMap=e.colorMap,this.vertexColors=e.vertexColors,this}updateUniforms(e,t){this.clearParameters(),this.colorUniform[0]=this.color.r,this.colorUniform[1]=this.color.g,this.colorUniform[2]=this.color.b,this.colorUniform[3]=this.color.a,this.setParameter("uColor",this.colorUniform),this.colorMap&&this.setParameter("texture_diffuseMap",this.colorMap)}getShaderVariant(e,t,s,i,n,r,a,o){if(this.updateShader)return this.updateShader(e,t,s,i,n,r),this.shader;const h={skin:s&&(s&Uo)!==0,screenSpace:s&&(s&Vo)!==0,useInstancing:s&&(s&fm)!==0,useMorphPosition:s&&(s&Go)!==0,useMorphNormal:s&&(s&Wo)!==0,useMorphTextureBased:s&&(s&Ho)!==0,alphaTest:this.alphaTest>0,vertexColors:this.vertexColors,diffuseMap:!!this.colorMap,pass:n},c=new yd(a,o),d=en(e);return d.register("basic",cb),d.getProgram("basic",h,c)}}class mu{constructor(e,t,s){this.origMeshInstances=e,this._aabb=new _e,this.meshInstance=null,this.dynamic=t,this.batchGroupId=s}destroy(e,t){this.meshInstance&&(this.removeFromLayers(e,t),this.meshInstance.destroy())}addToLayers(e,t){for(let s=0;s<t.length;s++){const i=e.layers.getLayerById(t[s]);i&&i.addMeshInstances([this.meshInstance])}}removeFromLayers(e,t){for(let s=0;s<t.length;s++){const i=e.layers.getLayerById(t[s]);i&&i.removeMeshInstances([this.meshInstance])}}updateBoundingBox(){this._aabb.copy(this.origMeshInstances[0].aabb);for(let e=1;e<this.origMeshInstances.length;e++)this._aabb.add(this.origMeshInstances[e].aabb);this.meshInstance.aabb=this._aabb,this.meshInstance._aabbVer=0}}class He{constructor(e,t,s,i,n=[Hs]){this.dynamic=s,this.maxAabbSize=i,this.id=e,this.name=t,this.layers=n,this._ui=!1,this._sprite=!1,this._obj={model:[],element:[],sprite:[],render:[]}}}He.MODEL="model";He.ELEMENT="element";He.SPRITE="sprite";He.RENDER="render";const _u=new H;class oa{constructor(e){this.bones=void 0,this._dirty=!0,this._rootBone=null,this._skinUpdateIndex=-1,this._updateBeforeCull=!0,e&&this.initSkin(e)}set rootBone(e){this._rootBone=e}get rootBone(){return this._rootBone}init(e,t){if(e.supportsBoneTextures){const s=t*3;let i=Math.ceil(Math.sqrt(s));i=k.roundUp(i,3);const n=Math.ceil(s/i);this.boneTexture=new ae(e,{width:i,height:n,format:nt,mipmaps:!1,minFilter:ve,magFilter:ve,name:"skin"}),this.matrixPalette=this.boneTexture.lock()}else this.matrixPalette=new Float32Array(t*12)}destroy(){this.boneTexture&&(this.boneTexture.destroy(),this.boneTexture=null)}resolve(e,t){this.rootBone=e;const s=this.skin,i=[];for(let n=0;n<s.boneNames.length;n++){const r=s.boneNames[n];let a=e.findByName(r);a||(a=t),i.push(a)}this.bones=i}initSkin(e){this.skin=e,this.bones=[];const t=e.inverseBindPose.length;this.init(e.device,t),this.matrices=[];for(let s=0;s<t;s++)this.matrices[s]=new H}uploadBones(e){e.supportsBoneTextures&&(this.boneTexture.lock(),this.boneTexture.unlock())}_updateMatrices(e,t){if(this._skinUpdateIndex!==t){this._skinUpdateIndex=t,_u.copy(e.getWorldTransform()).invert();for(let s=this.bones.length-1;s>=0;s--)this.matrices[s].mulAffine2(_u,this.bones[s].getWorldTransform()),this.matrices[s].mulAffine2(this.matrices[s],this.skin.inverseBindPose[s])}}updateMatrices(e,t){this._updateBeforeCull&&this._updateMatrices(e,t)}updateMatrixPalette(e,t){this._updateMatrices(e,t);const s=this.matrixPalette,i=this.bones.length;for(let n=0;n<i;n++){const r=this.matrices[n].data,a=n*12;s[a]=r[0],s[a+1]=r[4],s[a+2]=r[8],s[a+3]=r[12],s[a+4]=r[1],s[a+5]=r[5],s[a+6]=r[9],s[a+7]=r[13],s[a+8]=r[2],s[a+9]=r[6],s[a+10]=r[10],s[a+11]=r[14]}this.uploadBones(this.skin.device)}}class gu extends oa{constructor(e,t,s){super();const i=t.length;this.init(e,i),this.device=e,this.rootNode=s,this.bones=t}updateMatrices(e,t){}updateMatrixPalette(e,t){const s=this.matrixPalette,i=this.bones.length;for(let n=0;n<i;n++){const r=this.bones[n].getWorldTransform().data,a=n*12;s[a]=r[0],s[a+1]=r[4],s[a+2]=r[8],s[a+3]=r[12],s[a+4]=r[1],s[a+5]=r[5],s[a+6]=r[9],s[a+7]=r[13],s[a+8]=r[2],s[a+9]=r[6],s[a+10]=r[10],s[a+11]=r[14]}this.uploadBones(this.device)}}class wm{constructor(e,t,s){this.device=e,this.format=t,this.dirty=!0,this.impl=e.createBindGroupImpl(this),this.textures=[],this.uniformBuffers=[],this.defaultUniformBuffer=s,s&&this.setUniformBuffer(Qp,s)}destroy(){this.impl.destroy(),this.impl=null,this.format=null,this.defaultUniformBuffer=null}setUniformBuffer(e,t){const s=this.format.bufferFormatsMap.get(e);this.uniformBuffers[s]!==t&&(this.uniformBuffers[s]=t,this.dirty=!0)}setTexture(e,t){const s=this.format.textureFormatsMap.get(e);this.textures[s]!==t&&(this.textures[s]=t,this.dirty=!0)}update(){const e=this.format.textureFormats;for(let t=0;t<e.length;t++){const s=e[t],i=s.scopeId.value;this.setTexture(s.name,i)}this.dirty&&(this.dirty=!1,this.impl.update(this))}}const ns=[];ns[Xr]=function(l,e,t){const s=l.storageFloat32;s[t]=e};ns[qr]=(l,e,t)=>{const s=l.storageFloat32;s[t]=e[0],s[t+1]=e[1]};ns[jr]=(l,e,t)=>{const s=l.storageFloat32;s[t]=e[0],s[t+1]=e[1],s[t+2]=e[2]};ns[Yr]=(l,e,t)=>{const s=l.storageFloat32;s[t]=e[0],s[t+1]=e[1],s[t+2]=e[2],s[t+3]=e[3]};ns[Mo]=function(l,e,t){const s=l.storageInt32;s[t]=e};ns[Fr]=function(l,e,t){const s=l.storageInt32;s[t]=e[0],s[t+1]=e[1]};ns[Or]=function(l,e,t){const s=l.storageInt32;s[t]=e[0],s[t+1]=e[1],s[t+2]=e[2]};ns[Br]=function(l,e,t){const s=l.storageInt32;s[t]=e[0],s[t+1]=e[1],s[t+2]=e[2],s[t+3]=e[3]};ns[Po]=(l,e,t)=>{const s=l.storageFloat32;s[t]=e[0],s[t+1]=e[1],s[t+4]=e[2],s[t+5]=e[3],s[t+8]=e[4],s[t+9]=e[5]};ns[Eo]=(l,e,t)=>{const s=l.storageFloat32;s[t]=e[0],s[t+1]=e[1],s[t+2]=e[2],s[t+4]=e[3],s[t+5]=e[4],s[t+6]=e[5],s[t+8]=e[6],s[t+9]=e[7],s[t+10]=e[8]};class Tm{constructor(e,t){this.device=e,this.format=t,this.impl=e.createUniformBufferImpl(this),this.storage=new ArrayBuffer(t.byteSize),this.storageFloat32=new Float32Array(this.storage),this.storageInt32=new Int32Array(this.storage),e._vram.ub+=this.format.byteSize}destroy(){const e=this.device;this.impl.destroy(e),e._vram.ub-=this.format.byteSize}loseContext(){this.impl.loseContext()}setUniform(e){const t=e.offset,s=e.scopeId.value;if(s!=null){const i=ns[e.type];i?i(this,s,t):this.storageFloat32.set(s,t)}}set(e){const t=this.format.map.get(e);t&&this.setUniform(t)}update(){const e=this.format.uniforms;for(let t=0;t<e.length;t++)this.setUniform(e[t]);this.impl.unlock(this)}}const yu=new H,Kl=new b,xu=new ee,Zl=new ee,vu=new b,Su=new b,mb=new H,_b=new ee,vt=new b,bu=new H,St=new ee,an=new ee,wu=new H,Jl=new b,Ca=new b;class Qe extends le{constructor(e="Untitled"){super(),this.name=e,this.tags=new Rp(this),this._labels={},this.localPosition=new b,this.localRotation=new ee,this.localScale=new b(1,1,1),this.localEulerAngles=new b,this.position=new b,this.rotation=new ee,this.eulerAngles=new b,this._scale=null,this.localTransform=new H,this._dirtyLocal=!1,this._aabbVer=0,this._frozen=!1,this.worldTransform=new H,this._dirtyWorld=!1,this._normalMatrix=new Wt,this._dirtyNormal=!0,this._right=null,this._up=null,this._forward=null,this._parent=null,this._children=[],this._graphDepth=0,this._enabled=!0,this._enabledInHierarchy=!1,this.scaleCompensation=!1}get right(){return this._right||(this._right=new b),this.getWorldTransform().getX(this._right).normalize()}get up(){return this._up||(this._up=new b),this.getWorldTransform().getY(this._up).normalize()}get forward(){return this._forward||(this._forward=new b),this.getWorldTransform().getZ(this._forward).normalize().mulScalar(-1)}get normalMatrix(){const e=this._normalMatrix;return this._dirtyNormal&&(this.getWorldTransform().invertTo3x3(e),e.transpose(),this._dirtyNormal=!1),e}set enabled(e){if(this._enabled!==e){var t;this._enabled=e,(e&&(t=this._parent)!=null&&t.enabled||!e)&&this._notifyHierarchyStateChanged(this,e)}}get enabled(){return this._enabled&&this._enabledInHierarchy}get parent(){return this._parent}get path(){let e=this._parent;if(!e)return"";let t=this.name;for(;e&&e._parent;)t=`${e.name}/${t}`,e=e._parent;return t}get root(){let e=this;for(;e._parent;)e=e._parent;return e}get children(){return this._children}get graphDepth(){return this._graphDepth}_notifyHierarchyStateChanged(e,t){e._onHierarchyStateChanged(t);const s=e._children;for(let i=0,n=s.length;i<n;i++)s[i]._enabled&&this._notifyHierarchyStateChanged(s[i],t)}_onHierarchyStateChanged(e){this._enabledInHierarchy=e,e&&!this._frozen&&this._unfreezeParentToRoot()}_cloneInternal(e){e.name=this.name;const t=this.tags._list;e.tags.clear();for(let s=0;s<t.length;s++)e.tags.add(t[s]);e._labels=Object.assign({},this._labels),e.localPosition.copy(this.localPosition),e.localRotation.copy(this.localRotation),e.localScale.copy(this.localScale),e.localEulerAngles.copy(this.localEulerAngles),e.position.copy(this.position),e.rotation.copy(this.rotation),e.eulerAngles.copy(this.eulerAngles),e.localTransform.copy(this.localTransform),e._dirtyLocal=this._dirtyLocal,e.worldTransform.copy(this.worldTransform),e._dirtyWorld=this._dirtyWorld,e._dirtyNormal=this._dirtyNormal,e._aabbVer=this._aabbVer+1,e._enabled=this._enabled,e.scaleCompensation=this.scaleCompensation,e._enabledInHierarchy=!1}clone(){const e=new this.constructor;return this._cloneInternal(e),e}copy(e){return e._cloneInternal(this),this}find(e,t){let s,i=[];const n=this._children.length;if(e instanceof Function){const r=e;s=r(this),s&&i.push(this);for(let a=0;a<n;a++){const o=this._children[a].find(r);o.length&&(i=i.concat(o))}}else{let r;this[e]&&(this[e]instanceof Function?r=this[e]():r=this[e],r===t&&i.push(this));for(let a=0;a<n;++a){const o=this._children[a].find(e,t);o.length&&(i=i.concat(o))}}return i}findOne(e,t){const s=this._children.length;let i=null;if(e instanceof Function){const n=e;if(i=n(this),i)return this;for(let r=0;r<s;r++)if(i=this._children[r].findOne(n),i)return i}else{let n;if(this[e]&&(this[e]instanceof Function?n=this[e]():n=this[e],n===t))return this;for(let r=0;r<s;r++)if(i=this._children[r].findOne(e,t),i!==null)return i}return null}findByTag(){const e=arguments,t=[],s=(i,n)=>{n&&i.tags.has(...e)&&t.push(i);for(let r=0;r<i._children.length;r++)s(i._children[r],!0)};return s(this,!1),t}findByName(e){if(this.name===e)return this;for(let t=0;t<this._children.length;t++){const s=this._children[t].findByName(e);if(s!==null)return s}return null}findByPath(e){const t=Array.isArray(e)?e:e.split("/");let s=this;for(let i=0,n=t.length;i<n;++i)if(s=s.children.find(r=>r.name===t[i]),!s)return null;return s}forEach(e,t){e.call(t,this);const s=this._children;for(let i=0;i<s.length;i++)s[i].forEach(e,t)}isDescendantOf(e){let t=this._parent;for(;t;){if(t===e)return!0;t=t._parent}return!1}isAncestorOf(e){return e.isDescendantOf(this)}getEulerAngles(){return this.getWorldTransform().getEulerAngles(this.eulerAngles),this.eulerAngles}getLocalEulerAngles(){return this.localRotation.getEulerAngles(this.localEulerAngles),this.localEulerAngles}getLocalPosition(){return this.localPosition}getLocalRotation(){return this.localRotation}getLocalScale(){return this.localScale}getLocalTransform(){return this._dirtyLocal&&(this.localTransform.setTRS(this.localPosition,this.localRotation,this.localScale),this._dirtyLocal=!1),this.localTransform}getPosition(){return this.getWorldTransform().getTranslation(this.position),this.position}getRotation(){return this.rotation.setFromMat4(this.getWorldTransform()),this.rotation}getScale(){return this._scale||(this._scale=new b),this.getWorldTransform().getScale(this._scale)}getWorldTransform(){return!this._dirtyLocal&&!this._dirtyWorld?this.worldTransform:(this._parent&&this._parent.getWorldTransform(),this._sync(),this.worldTransform)}reparent(e,t){const s=this._parent;s&&s.removeChild(this),e&&(t>=0?e.insertChild(this,t):e.addChild(this))}setLocalEulerAngles(e,t,s){this.localRotation.setFromEulerAngles(e,t,s),this._dirtyLocal||this._dirtifyLocal()}setLocalPosition(e,t,s){e instanceof b?this.localPosition.copy(e):this.localPosition.set(e,t,s),this._dirtyLocal||this._dirtifyLocal()}setLocalRotation(e,t,s,i){e instanceof ee?this.localRotation.copy(e):this.localRotation.set(e,t,s,i),this._dirtyLocal||this._dirtifyLocal()}setLocalScale(e,t,s){e instanceof b?this.localScale.copy(e):this.localScale.set(e,t,s),this._dirtyLocal||this._dirtifyLocal()}_dirtifyLocal(){this._dirtyLocal||(this._dirtyLocal=!0,this._dirtyWorld||this._dirtifyWorld())}_unfreezeParentToRoot(){let e=this._parent;for(;e;)e._frozen=!1,e=e._parent}_dirtifyWorld(){this._dirtyWorld||this._unfreezeParentToRoot(),this._dirtifyWorldInternal()}_dirtifyWorldInternal(){if(!this._dirtyWorld){this._frozen=!1,this._dirtyWorld=!0;for(let e=0;e<this._children.length;e++)this._children[e]._dirtyWorld||this._children[e]._dirtifyWorldInternal()}this._dirtyNormal=!0,this._aabbVer++}setPosition(e,t,s){e instanceof b?vt.copy(e):vt.set(e,t,s),this._parent===null?this.localPosition.copy(vt):(bu.copy(this._parent.getWorldTransform()).invert(),bu.transformPoint(vt,this.localPosition)),this._dirtyLocal||this._dirtifyLocal()}setRotation(e,t,s,i){if(e instanceof ee?St.copy(e):St.set(e,t,s,i),this._parent===null)this.localRotation.copy(St);else{const n=this._parent.getRotation();an.copy(n).invert(),this.localRotation.copy(an).mul(St)}this._dirtyLocal||this._dirtifyLocal()}setEulerAngles(e,t,s){if(this.localRotation.setFromEulerAngles(e,t,s),this._parent!==null){const i=this._parent.getRotation();an.copy(i).invert(),this.localRotation.mul2(an,this.localRotation)}this._dirtyLocal||this._dirtifyLocal()}addChild(e){this._prepareInsertChild(e),this._children.push(e),this._onInsertChild(e)}addChildAndSaveTransform(e){const t=e.getPosition(),s=e.getRotation();this._prepareInsertChild(e),e.setPosition(mb.copy(this.worldTransform).invert().transformPoint(t)),e.setRotation(_b.copy(this.getRotation()).invert().mul(s)),this._children.push(e),this._onInsertChild(e)}insertChild(e,t){this._prepareInsertChild(e),this._children.splice(t,0,e),this._onInsertChild(e)}_prepareInsertChild(e){e._parent&&e._parent.removeChild(e)}_fireOnHierarchy(e,t,s){this.fire(e,s);for(let i=0;i<this._children.length;i++)this._children[i]._fireOnHierarchy(t,t,s)}_onInsertChild(e){e._parent=this;const t=e._enabled&&this.enabled;e._enabledInHierarchy!==t&&(e._enabledInHierarchy=t,e._notifyHierarchyStateChanged(e,t)),e._updateGraphDepth(),e._dirtifyWorld(),this._frozen&&e._unfreezeParentToRoot(),e._fireOnHierarchy("insert","inserthierarchy",this),this.fire&&this.fire("childinsert",e)}_updateGraphDepth(){this._graphDepth=this._parent?this._parent._graphDepth+1:0;for(let e=0,t=this._children.length;e<t;e++)this._children[e]._updateGraphDepth()}removeChild(e){const t=this._children.indexOf(e);t!==-1&&(this._children.splice(t,1),e._parent=null,e._fireOnHierarchy("remove","removehierarchy",this),this.fire("childremove",e))}_sync(){if(this._dirtyLocal&&(this.localTransform.setTRS(this.localPosition,this.localRotation,this.localScale),this._dirtyLocal=!1),this._dirtyWorld){if(this._parent===null)this.worldTransform.copy(this.localTransform);else if(this.scaleCompensation){let e;const t=this._parent;let s=this.localScale,i=t;if(i){for(;i&&i.scaleCompensation;)i=i._parent;i&&(i=i._parent,i&&(e=i.worldTransform.getScale(),vu.mul2(e,this.localScale),s=vu))}Zl.setFromMat4(t.worldTransform),xu.mul2(Zl,this.localRotation);let n=t.worldTransform;t.scaleCompensation&&(Su.mul2(e,t.getLocalScale()),yu.setTRS(t.worldTransform.getTranslation(Kl),Zl,Su),n=yu),n.transformPoint(this.localPosition,Kl),this.worldTransform.setTRS(Kl,xu,s)}else this.worldTransform.mulAffine2(this._parent.worldTransform,this.localTransform);this._dirtyWorld=!1}}syncHierarchy(){if(!this._enabled||this._frozen)return;this._frozen=!0,(this._dirtyLocal||this._dirtyWorld)&&this._sync();const e=this._children;for(let t=0,s=e.length;t<s;t++)e[t].syncHierarchy()}lookAt(e,t,s,i=0,n=1,r=0){if(e instanceof b)Jl.copy(e),t instanceof b?Ca.copy(t):Ca.copy(b.UP);else{if(s===void 0)return;Jl.set(e,t,s),Ca.set(i,n,r)}wu.setLookAt(this.getPosition(),Jl,Ca),St.setFromMat4(wu),this.setRotation(St)}translate(e,t,s){e instanceof b?vt.copy(e):vt.set(e,t,s),vt.add(this.getPosition()),this.setPosition(vt)}translateLocal(e,t,s){e instanceof b?vt.copy(e):vt.set(e,t,s),this.localRotation.transformVector(vt,vt),this.localPosition.add(vt),this._dirtyLocal||this._dirtifyLocal()}rotate(e,t,s){if(St.setFromEulerAngles(e,t,s),this._parent===null)this.localRotation.mul2(St,this.localRotation);else{const i=this.getRotation(),n=this._parent.getRotation();an.copy(n).invert(),St.mul2(an,St),this.localRotation.mul2(St,i)}this._dirtyLocal||this._dirtifyLocal()}rotateLocal(e,t,s){St.setFromEulerAngles(e,t,s),this.localRotation.mul(St),this._dirtyLocal||this._dirtifyLocal()}}class gb{constructor(){this.cache=new Map}destroy(){this.cache.forEach((e,t)=>{t.destroy()}),this.cache.clear()}incRef(e){const t=(this.cache.get(e)||0)+1;this.cache.set(e,t)}decRef(e){if(e){let t=this.cache.get(e);t&&(t--,t===0?(this.cache.delete(e),e.destroy()):this.cache.set(e,t))}}}class Ps{static incRef(e){this.cache.incRef(e)}static decRef(e){this.cache.decRef(e)}static destroy(){this.cache.destroy()}}Ps.cache=new gb;const yb=new _e,Aa=new _e,Ql=new dl,eh=new Set;class xb{constructor(e){this.vertexBuffer=null,this.count=e}}class we{constructor(e,t,s=null){if(this._material=void 0,this._shader=[],this._bindGroups=[],e instanceof Qe){const i=e;e=t,t=s,s=i}this._key=[0,0],this.isStatic=!1,this._staticLightList=null,this._staticSource=null,this.node=s,this._mesh=e,e.incRefCount(),this.material=t,this._shaderDefs=fs<<16,this._shaderDefs|=e.vertexBuffer.format.hasUv0?cm:0,this._shaderDefs|=e.vertexBuffer.format.hasUv1?dm:0,this._shaderDefs|=e.vertexBuffer.format.hasColor?um:0,this._shaderDefs|=e.vertexBuffer.format.hasTangents?pm:0,this._lightHash=0,this.visible=!0,this.layer=om,this._renderStyle=zr,this.castShadow=!1,this._receiveShadow=!0,this._screenSpace=!1,this._noDepthDrawGl1=!1,this.cull=!0,this.pick=!0,this._updateAabb=!0,this._updateAabbFunc=null,this._calculateSortDistance=null,this.updateKey(),this._skinInstance=null,this._morphInstance=null,this.instancingData=null,this._customAabb=null,this.aabb=new _e,this._aabbVer=-1,this.drawOrder=0,this.visibleThisFrame=!1,this.isVisibleFunc=null,this.parameters={},this.stencilFront=null,this.stencilBack=null,this.flipFaces=!1}set renderStyle(e){this._renderStyle=e,this.mesh.prepareRenderState(e)}get renderStyle(){return this._renderStyle}set mesh(e){e!==this._mesh&&(this._mesh&&this._mesh.decRefCount(),this._mesh=e,e&&e.incRefCount())}get mesh(){return this._mesh}set aabb(e){this._aabb=e}get aabb(){if(!this._updateAabb)return this._aabb;if(this._updateAabbFunc)return this._updateAabbFunc(this._aabb);let e=this._customAabb,t=!!e;if(!e)if(e=yb,this.skinInstance){if(!this.mesh.boneAabb){const n=this._morphInstance?this._morphInstance.morph._targets:null;this.mesh._initBoneAabbs(n)}const s=this.mesh.boneUsed;let i=!0;for(let n=0;n<this.mesh.boneAabb.length;n++)s[n]&&(Aa.setFromTransformedAabb(this.mesh.boneAabb[n],this.skinInstance.matrices[n]),i?(i=!1,e.center.copy(Aa.center),e.halfExtents.copy(Aa.halfExtents)):e.add(Aa));t=!0}else this.node._aabbVer!==this._aabbVer&&(this.mesh?(e.center.copy(this.mesh.aabb.center),e.halfExtents.copy(this.mesh.aabb.halfExtents)):(e.center.set(0,0,0),e.halfExtents.set(0,0,0)),this.mesh&&this.mesh.morph&&e._expand(this.mesh.morph.aabb.getMin(),this.mesh.morph.aabb.getMax()),t=!0,this._aabbVer=this.node._aabbVer);return t&&this._aabb.setFromTransformedAabb(e,this.node.getWorldTransform()),this._aabb}clearShaders(){const e=this._shader;for(let t=0;t<e.length;t++)e[t]=null;this.destroyBindGroups()}destroyBindGroups(){const e=this._bindGroups;for(let t=0;t<e.length;t++){const s=e[t];if(s){const i=s.defaultUniformBuffer;i&&i.destroy(),s.destroy()}}e.length=0}getBindGroup(e,t){let s=this._bindGroups[t];if(!s){const i=this._shader[t],n=i.meshUniformBufferFormat,r=new Tm(e,n),a=i.meshBindGroupFormat;s=new wm(e,a,r),this._bindGroups[t]=s}return s}set material(e){this.clearShaders();const t=this._material;if(t&&t.removeMeshInstanceRef(this),this._material=e,e){e.addMeshInstanceRef(this),this.updateKey();const s=t&&t.transparent;if(e.transparent!==s){const i=this._material._scene||(t==null?void 0:t._scene);i?i.layers._dirtyBlend=!0:e._dirtyBlend=!0}}}get material(){return this._material}set layer(e){this._layer=e,this.updateKey()}get layer(){return this._layer}set calculateSortDistance(e){this._calculateSortDistance=e}get calculateSortDistance(){return this._calculateSortDistance}set receiveShadow(e){this._receiveShadow=e,this._shaderDefs=e?this._shaderDefs&~_c:this._shaderDefs|_c,this._shader[Nn]=null,this._shader[Os]=null}get receiveShadow(){return this._receiveShadow}set skinInstance(e){this._skinInstance=e;let t=this._shaderDefs;t=e?t|Uo:t&~Uo,t!==this._shaderDefs&&(this._shaderDefs=t,this.clearShaders()),this._setupSkinUpdate()}get skinInstance(){return this._skinInstance}set morphInstance(e){var t;(t=this._morphInstance)==null||t.destroy(),this._morphInstance=e;let s=this._shaderDefs;s=e&&e.morph.useTextureMorph?s|Ho:s&~Ho,s=e&&e.morph.morphPositions?s|Go:s&~Go,s=e&&e.morph.morphNormals?s|Wo:s&~Wo,s!==this._shaderDefs&&(this._shaderDefs=s,this.clearShaders())}get morphInstance(){return this._morphInstance}set screenSpace(e){this._screenSpace=e,this._shaderDefs=e?this._shaderDefs|Vo:this._shaderDefs&~Vo,this._shader[Nn]=null}get screenSpace(){return this._screenSpace}set key(e){this._key[Ls]=e}get key(){return this._key[Ls]}set mask(e){const t=this._shaderDefs&65535;this._shaderDefs=t|e<<16,this._shader[Nn]=null,this._shader[Os]=null}get mask(){return this._shaderDefs>>16}set instancingCount(e){this.instancingData&&(this.instancingData.count=e)}get instancingCount(){return this.instancingData?this.instancingData.count:0}destroy(){var e,t;const s=this.mesh;s&&(this.mesh=null,s.refCount<1&&s.destroy()),this.setRealtimeLightmap(we.lightmapParamNames[0],null),this.setRealtimeLightmap(we.lightmapParamNames[1],null),(e=this._skinInstance)==null||e.destroy(),this._skinInstance=null,(t=this.morphInstance)==null||t.destroy(),this.morphInstance=null,this.clearShaders(),this.material=null}static _prepareRenderStyleForArray(e,t){if(e){for(let s=0;s<e.length;s++){e[s]._renderStyle=t;const i=e[s].mesh;eh.has(i)||(eh.add(i),i.prepareRenderState(t))}eh.clear()}}_isVisible(e){return this.visible?this.isVisibleFunc?this.isVisibleFunc(e):(Ql.center=this.aabb.center,Ql.radius=this._aabb.halfExtents.length(),e.frustum.containsSphere(Ql)):!1}updateKey(){const e=this.material;this._key[Ls]=vb(this.layer,e.alphaToCoverage||e.alphaTest?yt:e.blendType,!1,e.id)}setInstancing(e){e?(this.instancingData=new xb(e.numVertices),this.instancingData.vertexBuffer=e,e.instancing=!0,this.cull=!1):(this.instancingData=null,this.cull=!0)}updatePassShader(e,t,s,i,n,r){this._shader[t]=this.material.getShaderVariant(this.mesh.device,e,this._shaderDefs,s,t,i,n,r)}ensureMaterial(e){this.material||(this.material=aa(e))}clearParameters(){this.parameters={}}getParameters(){return this.parameters}getParameter(e){return this.parameters[e]}setParameter(e,t,s=-262141){if(t===void 0&&typeof e=="object"){const n=e;if(n.length){for(let r=0;r<n.length;r++)this.setParameter(n[r]);return}e=n.name,t=n.value}const i=this.parameters[e];i?(i.data=t,i.passFlags=s):this.parameters[e]={scopeId:null,data:t,passFlags:s}}setRealtimeLightmap(e,t){const s=this.getParameter(e);s!==t&&(s&&Ps.decRef(s.data),t?(Ps.incRef(t),this.setParameter(e,t)):this.deleteParameter(e))}deleteParameter(e){this.parameters[e]&&delete this.parameters[e]}setParameters(e,t){const s=this.parameters;for(const i in s){const n=s[i];n.passFlags&t&&(n.scopeId||(n.scopeId=e.scope.resolve(i)),n.scopeId.setValue(n.data))}}setLightmapped(e){e?this.mask=(this.mask|Ds)&~(fs|Fs):(this.setRealtimeLightmap(we.lightmapParamNames[0],null),this.setRealtimeLightmap(we.lightmapParamNames[1],null),this._shaderDefs&=~(No|fd|pd),this.mask=(this.mask|fs)&~(Ds|Fs))}setCustomAabb(e){e?this._customAabb?this._customAabb.copy(e):this._customAabb=e.clone():(this._customAabb=null,this._aabbVer=-1),this._setupSkinUpdate()}_setupSkinUpdate(){this._skinInstance&&(this._skinInstance._updateBeforeCull=!this._customAabb)}}we.lightmapParamNames=["texture_lightMap","texture_dirLightMap"];function vb(l,e,t,s){return(l&15)<<27|(e===Vt?1:0)<<26|(t?1:0)<<25|(s&33554431)<<0}function Tu(l,e){if(l&&!e||!l&&e)return!1;if(l=l.data,e=e.data,l===e)return!0;if(l instanceof Float32Array&&e instanceof Float32Array){if(l.length!==e.length)return!1;for(let t=0;t<l.length;t++)if(l[t]!==e[t])return!1;return!0}return!1}function Sb(l,e){for(const t in l)if(l.hasOwnProperty(t)&&!Tu(l[t],e[t]))return!1;for(const t in e)if(e.hasOwnProperty(t)&&!Tu(e[t],l[t]))return!1;return!0}function bb(l,e){for(let t=0;t<l.length;t++)if(e.indexOf(l[t])<0)return!1;for(let t=0;t<e.length;t++)if(l.indexOf(e[t])<0)return!1;return!0}const th=new Wt,Ma=new b,Cu=new b,Au=new b;function sh(l){const e=l.node.worldTransform;return e.getX(Ma),e.getY(Cu),e.getZ(Au),Ma.cross(Ma,Cu),Ma.dot(Au)>=0?1:-1}class wb{constructor(e,t,s){this.device=e,this.rootNode=t,this.scene=s,this._init=!1,this._batchGroups={},this._batchGroupCounter=0,this._batchList=[],this._dirtyGroups=[]}destroy(){this.device=null,this.rootNode=null,this.scene=null,this._batchGroups={},this._batchList=[],this._dirtyGroups=[]}addGroup(e,t,s,i,n){if(i===void 0&&(i=this._batchGroupCounter,this._batchGroupCounter++),this._batchGroups[i])return;const r=new He(i,e,t,s,n);return this._batchGroups[i]=r,r}removeGroup(e){if(!this._batchGroups[e])return;const t=[];for(let s=0;s<this._batchList.length;s++)this._batchList[s].batchGroupId===e?this.destroyBatch(this._batchList[s]):t.push(this._batchList[s]);this._batchList=t,this._removeModelsFromBatchGroup(this.rootNode,e),delete this._batchGroups[e]}markGroupDirty(e){this._dirtyGroups.indexOf(e)<0&&this._dirtyGroups.push(e)}getGroupByName(e){const t=this._batchGroups;for(const s in t)if(t.hasOwnProperty(s)&&t[s].name===e)return t[s];return null}getBatches(e){const t=[],s=this._batchList.length;for(let i=0;i<s;i++){const n=this._batchList[i];n.batchGroupId===e&&t.push(n)}return t}_removeModelsFromBatchGroup(e,t){if(e.enabled){e.model&&e.model.batchGroupId===t&&(e.model.batchGroupId=-1),e.render&&e.render.batchGroupId===t&&(e.render.batchGroupId=-1),e.element&&e.element.batchGroupId===t&&(e.element.batchGroupId=-1),e.sprite&&e.sprite.batchGroupId===t&&(e.sprite.batchGroupId=-1);for(let s=0;s<e._children.length;s++)this._removeModelsFromBatchGroup(e._children[s],t)}}insert(e,t,s){const i=this._batchGroups[t];i&&i._obj[e].indexOf(s)<0&&(i._obj[e].push(s),this.markGroupDirty(t))}remove(e,t,s){const i=this._batchGroups[t];if(i){const n=i._obj[e].indexOf(s);n>=0&&(i._obj[e].splice(n,1),this.markGroupDirty(t))}}_extractRender(e,t,s,i){if(e.render){if(e.render.isStatic){const n=this.scene.drawCalls,r=e.render.meshInstances;for(let a=0;a<n.length;a++)n[a]._staticSource&&(r.indexOf(n[a]._staticSource)<0||t.push(n[a]));for(let a=0;a<r.length;a++)n.indexOf(r[a])>=0&&t.push(r[a])}else t=i[e.render.batchGroupId]=t.concat(e.render.meshInstances);e.render.removeFromLayers()}return t}_extractModel(e,t,s,i){if(e.model&&e.model.model){if(e.model.isStatic){const n=this.scene.drawCalls,r=e.model.meshInstances;for(let a=0;a<n.length;a++)n[a]._staticSource&&(r.indexOf(n[a]._staticSource)<0||t.push(n[a]));for(let a=0;a<r.length;a++)n.indexOf(r[a])>=0&&t.push(r[a])}else t=i[e.model.batchGroupId]=t.concat(e.model.meshInstances);e.model.removeModelFromLayers()}return t}_extractElement(e,t,s){if(!e.element)return;let i=!1;e.element._text&&e.element._text._model.meshInstances.length>0?(t.push(e.element._text._model.meshInstances[0]),e.element.removeModelFromLayers(e.element._text._model),i=!0):e.element._image&&(t.push(e.element._image._renderable.meshInstance),e.element.removeModelFromLayers(e.element._image._renderable.model),e.element._image._renderable.unmaskMeshInstance&&(t.push(e.element._image._renderable.unmaskMeshInstance),(!e.element._image._renderable.unmaskMeshInstance.stencilFront||!e.element._image._renderable.unmaskMeshInstance.stencilBack)&&(e.element._dirtifyMask(),e.element._onPrerender())),i=!0),i&&(s._ui=!0)}_collectAndRemoveMeshInstances(e,t){for(let s=0;s<t.length;s++){const i=t[s],n=this._batchGroups[i];if(!n)continue;let r=e[i];r||(r=e[i]=[]);for(let a=0;a<n._obj.model.length;a++)r=this._extractModel(n._obj.model[a],r,n,e);for(let a=0;a<n._obj.render.length;a++)r=this._extractRender(n._obj.render[a],r,n,e);for(let a=0;a<n._obj.element.length;a++)this._extractElement(n._obj.element[a],r,n);for(let a=0;a<n._obj.sprite.length;a++){const o=n._obj.sprite[a];o.sprite&&o.sprite._meshInstance&&(n.dynamic||o.sprite.sprite._renderMode===ri)&&(r.push(o.sprite._meshInstance),o.sprite.removeModelFromLayers(),n._sprite=!0,o.sprite._batchGroup=n)}}}generate(e){const t={};e||(e=Object.keys(this._batchGroups));const s=[];for(let o=0;o<this._batchList.length;o++){if(e.indexOf(this._batchList[o].batchGroupId)<0){s.push(this._batchList[o]);continue}this.destroyBatch(this._batchList[o])}if(this._batchList=s,this._collectAndRemoveMeshInstances(t,e),e===this._dirtyGroups)this._dirtyGroups.length=0;else{const o=[];for(let h=0;h<this._dirtyGroups.length;h++)e.indexOf(this._dirtyGroups[h])<0&&o.push(this._dirtyGroups[h]);this._dirtyGroups=o}let i,n,r,a;for(const o in t)if(t.hasOwnProperty(o)&&(i=t[o],r=this._batchGroups[o],!!r)){n=this.prepare(i,r.dynamic,r.maxAabbSize,r._ui||r._sprite);for(let h=0;h<n.length;h++)a=this.create(n[h],r.dynamic,parseInt(o,10)),a&&a.addToLayers(this.scene,r.layers)}}prepare(e,t,s=Number.POSITIVE_INFINITY,i){if(e.length===0)return[];const n=s*.5,r=this.device.supportsBoneTextures?1024:this.device.boneLimit,a=this.device.extUintElement?4294967295:65535,o=new _e,h=new _e;let c=null,d;const u=[];let f=0;i&&e.sort(function(g,w){return g.drawOrder-w.drawOrder});let p=e,_;const m=i?function(g){c?c.add(g.aabb):c=g.aabb.clone(),_.push(g)}:function(g){_.push(g)};for(;p.length>0;){u[f]=[p[0]],_=[];const g=p[0].material,w=p[0].layer,v=p[0]._shaderDefs,y=p[0].parameters,T=p[0].stencilFront,C=p[0]._staticLightList;let S=p[0].mesh.vertexBuffer.getNumVertices();const A=p[0].drawOrder;o.copy(p[0].aabb);const x=sh(p[0]),P=p[0].mesh.vertexBuffer.format.batchingHash,I=p[0].mesh.primitive[0].indexed;c=null;for(let E=1;E<p.length;E++){const O=p[E];if(t&&u[f].length>=r){_=_.concat(p.slice(E));break}if(g!==O.material||w!==O.layer||P!==O.mesh.vertexBuffer.format.batchingHash||I!==O.mesh.primitive[0].indexed||v!==O._shaderDefs||S+O.mesh.vertexBuffer.getNumVertices()>a){m(O);continue}if(h.copy(o),h.add(O.aabb),h.halfExtents.x>n||h.halfExtents.y>n||h.halfExtents.z>n){m(O);continue}if(T&&(!(d=O.stencilFront)||T.func!==d.func||T.zpass!==d.zpass)){m(O);continue}if(x!==sh(O)){m(O);continue}if(!Sb(y,O.parameters)){m(O);continue}const D=O._staticLightList;if(C&&D){if(!bb(C,D)){m(O);continue}}else if(C||D){m(O);continue}if(i&&c&&c.intersects(O.aabb)&&O.drawOrder!==A){m(O);continue}o.add(O.aabb),S+=O.mesh.vertexBuffer.getNumVertices(),u[f].push(O)}f++,p=_}return u}collectBatchedMeshData(e,t){let s=null,i=0,n=0,r=null;for(let a=0;a<e.length;a++)if(e[a].visible){const o=e[a].mesh,h=o.vertexBuffer.numVertices;if(i+=h,n+=o.primitive[0].indexed?o.primitive[0].count:o.primitive[0].type===ji&&o.primitive[0].count===4?6:0,!s){r=e[a].material,s={};const c=o.vertexBuffer.format.elements;for(let d=0;d<c.length;d++){const u=c[d].name;s[u]={numComponents:c[d].numComponents,dataType:c[d].dataType,normalize:c[d].normalize,count:0}}t&&(s[Et]={numComponents:1,dataType:ge,normalize:!1,count:0})}}return{streams:s,batchNumVerts:i,batchNumIndices:n,material:r}}create(e,t,s){if(!this._init){const c="#define BONE_LIMIT "+this.device.getBoneLimit()+`
`;this.transformVS=c+`#define DYNAMICBATCH
`+B.transformVS,this.skinTexVS=B.skinBatchTexVS,this.skinConstVS=B.skinBatchConstVS,this.vertexFormats={},this._init=!0}let i=null,n,r,a,o=null;const h=this.collectBatchedMeshData(e,t);if(h.streams){const c=h.streams;let d=h.material;const u=h.batchNumVerts,f=h.batchNumIndices;o=new mu(e,t,s),this._batchList.push(o);let p,_,m,g=0,w=0,v;const y=new b,T=u<=65535?Uint16Array:Uint32Array,C=new T(f);for(n in c)i=c[n],i.typeArrayType=zn[i.dataType],i.elementByteSize=Io[i.dataType],i.buffer=new i.typeArrayType(u*i.numComponents);for(let x=0;x<e.length;x++)if(e[x].visible){r=e[x].mesh,a=r.vertexBuffer.numVertices,t||(v=e[x].node.getWorldTransform());for(n in c)if(n!==Et){i=c[n];const P=new i.typeArrayType(i.buffer.buffer,i.elementByteSize*i.count),I=r.getVertexStream(n,P)*i.numComponents;if(i.count+=I,!t&&i.numComponents>=3){if(n===Ne)for(let E=0;E<I;E+=i.numComponents)y.set(P[E],P[E+1],P[E+2]),v.transformPoint(y,y),P[E]=y.x,P[E+1]=y.y,P[E+2]=y.z;else if(n===xt||n===ps){v.invertTo3x3(th),th.transpose();for(let E=0;E<I;E+=i.numComponents)y.set(P[E],P[E+1],P[E+2]),th.transformVector(y,y),P[E]=y.x,P[E+1]=y.y,P[E+2]=y.z}}}if(t){i=c[Et];for(let P=0;P<a;P++)i.buffer[i.count++]=x}if(r.primitive[0].indexed){p=r.primitive[0].base,_=r.primitive[0].count;const P=r.indexBuffer[0].getFormat();m=new oc[P](r.indexBuffer[0].storage)}else if(r.primitive[0].type===ji&&r.primitive[0].count===4)p=0,_=6,m=[0,1,3,2,3,1];else{_=0;continue}for(let P=0;P<_;P++)C[P+w]=m[p+P]+g;w+=_,g+=a}r=new Ht(this.device);for(n in c)i=c[n],r.setVertexStream(n,i.buffer,i.numComponents,void 0,i.dataType,i.normalize);C.length>0&&r.setIndices(C),r.update(ts,!1),t&&(d=d.clone(),d.chunks.transformVS=this.transformVS,d.chunks.skinTexVS=this.skinTexVS,d.chunks.skinConstVS=this.skinConstVS,d.update());const S=new we(r,d,this.rootNode);S.castShadow=o.origMeshInstances[0].castShadow,S.parameters=o.origMeshInstances[0].parameters,S.isStatic=o.origMeshInstances[0].isStatic,S.layer=o.origMeshInstances[0].layer,S._staticLightList=o.origMeshInstances[0]._staticLightList,S._shaderDefs=o.origMeshInstances[0]._shaderDefs,S.cull=o.origMeshInstances[0].cull;const A=this._batchGroups[s];if(A&&A._ui&&(S.cull=!1),t){const x=[];for(let P=0;P<o.origMeshInstances.length;P++)x.push(o.origMeshInstances[P].node);S.skinInstance=new gu(this.device,x,this.rootNode)}S._updateAabb=!1,S.drawOrder=o.origMeshInstances[0].drawOrder,S.stencilFront=o.origMeshInstances[0].stencilFront,S.stencilBack=o.origMeshInstances[0].stencilBack,S.flipFaces=sh(o.origMeshInstances[0])<0,S.castShadow=o.origMeshInstances[0].castShadow,o.meshInstance=S,o.updateBoundingBox()}return o}updateAll(){this._dirtyGroups.length>0&&this.generate(this._dirtyGroups);for(let e=0;e<this._batchList.length;e++)this._batchList[e].dynamic&&this._batchList[e].updateBoundingBox()}clone(e,t){const s=new mu(t,e.dynamic,e.batchGroupId);this._batchList.push(s);const i=[];for(let n=0;n<t.length;n++)i.push(t[n].node);return s.meshInstance=new we(e.meshInstance.mesh,e.meshInstance.material,e.meshInstance.node),s.meshInstance._updateAabb=!1,s.meshInstance.parameters=t[0].parameters,s.meshInstance.isStatic=t[0].isStatic,s.meshInstance.cull=t[0].cull,s.meshInstance.layer=t[0].layer,s.meshInstance._staticLightList=t[0]._staticLightList,e.dynamic&&(s.meshInstance.skinInstance=new gu(this.device,i,this.rootNode)),s.meshInstance.castShadow=e.meshInstance.castShadow,s.meshInstance._shader=e.meshInstance._shader.slice(),s.meshInstance.castShadow=e.meshInstance.castShadow,s}destroyBatch(e){e.destroy(this.scene,this._batchGroups[e.batchGroupId].layers)}}const on=new b,sr=new b,Mu=new b,Pu=new H,Tb=[new b,new b,new b,new b,new b,new b,new b,new b];class la{constructor(){this._aspectRatio=16/9,this._aspectRatioMode=md,this._calculateProjection=null,this._calculateTransform=null,this._clearColor=new G(.75,.75,.75,1),this._clearColorBuffer=!0,this._clearDepth=1,this._clearDepthBuffer=!0,this._clearStencil=0,this._clearStencilBuffer=!0,this._cullingMask=4294967295,this._cullFaces=!0,this._farClip=1e3,this._flipFaces=!1,this._fov=45,this._frustumCulling=!0,this._horizontalFov=!1,this._layers=[Hs,ut,cd,Kr,Bo],this._layersSet=new Set(this._layers),this._nearClip=.1,this._node=null,this._orthoHeight=10,this._projection=os,this._rect=new K(0,0,1,1),this._renderTarget=null,this._scissorRect=new K(0,0,1,1),this._scissorRectClear=!1,this._aperture=16,this._shutter=1/1e3,this._sensitivity=1e3,this._projMat=new H,this._projMatDirty=!0,this._projMatSkybox=new H,this._viewMat=new H,this._viewMatDirty=!0,this._viewProjMat=new H,this._viewProjMatDirty=!0,this.frustum=new Mg}get fullSizeClearRect(){const e=this._scissorRectClear?this.scissorRect:this._rect;return e.x===0&&e.y===0&&e.z===1&&e.w===1}set aspectRatio(e){this._aspectRatio!==e&&(this._aspectRatio=e,this._projMatDirty=!0)}get aspectRatio(){return this._aspectRatio}set aspectRatioMode(e){this._aspectRatioMode!==e&&(this._aspectRatioMode=e,this._projMatDirty=!0)}get aspectRatioMode(){return this._aspectRatioMode}set calculateProjection(e){this._calculateProjection=e,this._projMatDirty=!0}get calculateProjection(){return this._calculateProjection}set calculateTransform(e){this._calculateTransform=e}get calculateTransform(){return this._calculateTransform}set clearColor(e){this._clearColor.copy(e)}get clearColor(){return this._clearColor}set clearColorBuffer(e){this._clearColorBuffer=e}get clearColorBuffer(){return this._clearColorBuffer}set clearDepth(e){this._clearDepth=e}get clearDepth(){return this._clearDepth}set clearDepthBuffer(e){this._clearDepthBuffer=e}get clearDepthBuffer(){return this._clearDepthBuffer}set clearStencil(e){this._clearStencil=e}get clearStencil(){return this._clearStencil}set clearStencilBuffer(e){this._clearStencilBuffer=e}get clearStencilBuffer(){return this._clearStencilBuffer}set cullingMask(e){this._cullingMask=e}get cullingMask(){return this._cullingMask}set cullFaces(e){this._cullFaces=e}get cullFaces(){return this._cullFaces}set farClip(e){this._farClip!==e&&(this._farClip=e,this._projMatDirty=!0)}get farClip(){return this._farClip}set flipFaces(e){this._flipFaces=e}get flipFaces(){return this._flipFaces}set fov(e){this._fov!==e&&(this._fov=e,this._projMatDirty=!0)}get fov(){return this._fov}set frustumCulling(e){this._frustumCulling=e}get frustumCulling(){return this._frustumCulling}set horizontalFov(e){this._horizontalFov!==e&&(this._horizontalFov=e,this._projMatDirty=!0)}get horizontalFov(){return this._horizontalFov}set layers(e){this._layers=e.slice(0),this._layersSet=new Set(this._layers)}get layers(){return this._layers}get layersSet(){return this._layersSet}set nearClip(e){this._nearClip!==e&&(this._nearClip=e,this._projMatDirty=!0)}get nearClip(){return this._nearClip}set node(e){this._node=e}get node(){return this._node}set orthoHeight(e){this._orthoHeight!==e&&(this._orthoHeight=e,this._projMatDirty=!0)}get orthoHeight(){return this._orthoHeight}set projection(e){this._projection!==e&&(this._projection=e,this._projMatDirty=!0)}get projection(){return this._projection}get projectionMatrix(){return this._evaluateProjectionMatrix(),this._projMat}set rect(e){this._rect.copy(e)}get rect(){return this._rect}set renderTarget(e){this._renderTarget=e}get renderTarget(){return this._renderTarget}set scissorRect(e){this._scissorRect.copy(e)}get scissorRect(){return this._scissorRect}get viewMatrix(){if(this._viewMatDirty){const e=this._node.getWorldTransform();this._viewMat.copy(e).invert(),this._viewMatDirty=!1}return this._viewMat}set aperture(e){this._aperture=e}get aperture(){return this._aperture}set sensitivity(e){this._sensitivity=e}get sensitivity(){return this._sensitivity}set shutter(e){this._shutter=e}get shutter(){return this._shutter}clone(){return new la().copy(this)}copy(e){return this.aspectRatio=e.aspectRatio,this.aspectRatioMode=e.aspectRatioMode,this.calculateProjection=e.calculateProjection,this.calculateTransform=e.calculateTransform,this.clearColor=e.clearColor,this.clearColorBuffer=e.clearColorBuffer,this.clearDepth=e.clearDepth,this.clearDepthBuffer=e.clearDepthBuffer,this.clearStencil=e.clearStencil,this.clearStencilBuffer=e.clearStencilBuffer,this.cullFaces=e.cullFaces,this.cullingMask=e.cullingMask,this.farClip=e.farClip,this.flipFaces=e.flipFaces,this.fov=e.fov,this.frustumCulling=e.frustumCulling,this.horizontalFov=e.horizontalFov,this.layers=e.layers,this.nearClip=e.nearClip,this.orthoHeight=e.orthoHeight,this.projection=e.projection,this.rect=e.rect,this.renderTarget=e.renderTarget,this.scissorRect=e.scissorRect,this.aperture=e.aperture,this.shutter=e.shutter,this.sensitivity=e.sensitivity,this}_updateViewProjMat(){(this._projMatDirty||this._viewMatDirty||this._viewProjMatDirty)&&(this._viewProjMat.mul2(this.projectionMatrix,this.viewMatrix),this._viewProjMatDirty=!1)}worldToScreen(e,t,s,i=new b){this._updateViewProjMat(),this._viewProjMat.transformPoint(e,i);const n=this._viewProjMat.data,r=e.x*n[3]+e.y*n[7]+e.z*n[11]+1*n[15];return i.x=(i.x/r+1)*.5*t,i.y=(1-i.y/r)*.5*s,i}screenToWorld(e,t,s,i,n,r=new b){const a=this._farClip-this._nearClip;if(on.set(e/i,(n-t)/n,s/a),on.mulScalar(2),on.sub(b.ONE),this._projection===os){H._getPerspectiveHalfSize(sr,this._fov,this._aspectRatio,this._nearClip,this._horizontalFov),sr.x*=on.x,sr.y*=on.y;const o=this._node.getWorldTransform();sr.z=-this._nearClip,o.transformPoint(sr,Mu);const h=this._node.getPosition();r.sub2(Mu,h),r.normalize(),r.mulScalar(s),r.add(h)}else this._updateViewProjMat(),Pu.copy(this._viewProjMat).invert(),Pu.transformPoint(on,r);return r}_evaluateProjectionMatrix(){if(this._projMatDirty){if(this._projection===os)this._projMat.setPerspective(this._fov,this._aspectRatio,this._nearClip,this._farClip,this._horizontalFov),this._projMatSkybox.copy(this._projMat);else{const e=this._orthoHeight,t=e*this._aspectRatio;this._projMat.setOrtho(-t,t,-e,e,this._nearClip,this._farClip),this._projMatSkybox.setPerspective(this._fov,this._aspectRatio,this._nearClip,this._farClip)}this._projMatDirty=!1}}getProjectionMatrixSkybox(){return this._evaluateProjectionMatrix(),this._projMatSkybox}getExposure(){const e=Math.log2(this._aperture*this._aperture/this._shutter*100/this._sensitivity);return 1/(Math.pow(2,e)*1.2)}getScreenSize(e){if(this._projection===os){const t=this._node.getPosition().distance(e.center);if(t<e.radius)return 1;const s=Math.asin(e.radius/t),i=Math.tan(s),n=Math.tan(this._fov/2*k.DEG_TO_RAD);return Math.min(i/n,1)}return k.clamp(e.radius/this._orthoHeight,0,1)}getFrustumCorners(e=this._nearClip,t=this._farClip){const s=this._fov*Math.PI/180;let i=this._projection===os?Math.tan(s/2)*e:this._orthoHeight,n=i*this._aspectRatio;const r=Tb;return r[0].x=n,r[0].y=-i,r[0].z=-e,r[1].x=n,r[1].y=i,r[1].z=-e,r[2].x=-n,r[2].y=i,r[2].z=-e,r[3].x=-n,r[3].y=-i,r[3].z=-e,this._projection===os&&(i=Math.tan(s/2)*t,n=i*this._aspectRatio),r[4].x=n,r[4].y=-i,r[4].z=-t,r[5].x=n,r[5].y=i,r[5].z=-t,r[6].x=-n,r[6].y=i,r[6].z=-t,r[7].x=-n,r[7].y=-i,r[7].z=-t,r}}const ih=1/255,Cm=new Float32Array(1),Cb=new Int32Array(Cm.buffer);class Le{static float2Half(e){Cm[0]=e;const t=Cb[0];let s=t>>16&32768,i=t>>12&2047;const n=t>>23&255;return n<103?s:n>142?(s|=31744,s|=(n===255?0:1)&&t&8388607,s):n<113?(i|=2048,s|=(i>>114-n)+(i>>113-n&1),s):(s|=n-112<<10|i>>1,s+=i&1,s)}static float2Bytes(e,t,s,i){const n=255*e%1;if(t[s+0]=Math.round((e%1-ih*n)*255),i>1){const r=65025*e%1;if(t[s+1]=Math.round((n-ih*r)*255),i>2){const a=16581375*e%1;t[s+2]=Math.round((r-ih*a)*255),i>3&&(t[s+3]=Math.round(a*255))}}}static float2BytesRange(e,t,s,i,n,r){e=k.clamp((e-i)/(n-i),0,1),Le.float2Bytes(e,t,s,r)}static float2MantissaExponent(e,t,s,i){const n=Math.floor(Math.log2(Math.abs(e)))+1;e/=Math.pow(2,n),Le.float2BytesRange(e,t,s,-1,1,i-1),t[s+i-1]=Math.round(n+127)}}const Eu=new H,Ru=new H,Iu=new H;class es{static create(e,t,s){const i=new la;switch(i.node=new Qe(e),i.aspectRatio=1,i.aspectRatioMode=xc,i._scissorRectClear=!0,t){case ue:i.node.setRotation(es.pointLightRotations[s]),i.fov=90,i.projection=os;break;case pe:i.projection=os;break;case ie:i.projection=Un;break}return i}static evalSpotCookieMatrix(e){let t=es._spotCookieCamera;t||(t=es.create("SpotCookieCamera",pe),es._spotCookieCamera=t),t.fov=e._outerConeAngle*2;const s=t._node;s.setPosition(e._node.getPosition()),s.setRotation(e._node.getRotation()),s.rotateLocal(-90,0,0),Eu.setTRS(s.getPosition(),s.getRotation(),b.ONE).invert(),Ru.mul2(t.projectionMatrix,Eu);const i=e.cookieMatrix,n=e.atlasViewport;return Iu.setViewport(n.x,n.y,n.z,n.w),i.mul2(Iu,Ru),i}}es.pointLightRotations=[new ee().setFromEulerAngles(0,90,180),new ee().setFromEulerAngles(0,-90,180),new ee().setFromEulerAngles(90,0,0),new ee().setFromEulerAngles(-90,0,0),new ee().setFromEulerAngles(0,180,180),new ee().setFromEulerAngles(0,0,180)];es._spotCookieCamera=null;const ir=1e-6,tt=new b,Si=new Float32Array(6),Ab=new b(-.5,0,0),Mb=new b(0,0,.5),bt={FLAGS:0,COLOR_A:1,COLOR_B:2,SPOT_ANGLES:3,SHADOW_BIAS:4,COOKIE_A:5,COOKIE_B:6,COUNT_ALWAYS:7,POSITION_X:7,POSITION_Y:8,POSITION_Z:9,RANGE:10,SPOT_DIRECTION_X:11,SPOT_DIRECTION_Y:12,SPOT_DIRECTION_Z:13,PROJ_MAT_00:14,ATLAS_VIEWPORT_A:14,PROJ_MAT_01:15,ATLAS_VIEWPORT_B:15,PROJ_MAT_02:16,PROJ_MAT_03:17,PROJ_MAT_10:18,PROJ_MAT_11:19,PROJ_MAT_12:20,PROJ_MAT_13:21,PROJ_MAT_20:22,PROJ_MAT_21:23,PROJ_MAT_22:24,PROJ_MAT_23:25,PROJ_MAT_30:26,PROJ_MAT_31:27,PROJ_MAT_32:28,PROJ_MAT_33:29,AREA_DATA_WIDTH_X:30,AREA_DATA_WIDTH_Y:31,AREA_DATA_WIDTH_Z:32,AREA_DATA_HEIGHT_X:33,AREA_DATA_HEIGHT_Y:34,AREA_DATA_HEIGHT_Z:35,COUNT:36},Ye={POSITION_RANGE:0,SPOT_DIRECTION:1,PROJ_MAT_0:2,ATLAS_VIEWPORT:2,PROJ_MAT_1:3,PROJ_MAT_2:4,PROJ_MAT_3:5,AREA_DATA_WIDTH:6,AREA_DATA_HEIGHT:7,COUNT:8};class Me{static initShaderDefines(){const e=Me.lightTextureFormat===Me.FORMAT_FLOAT?"FLOAT":"8BIT";Me.shaderDefines=`
            
#define CLUSTER_TEXTURE_${e}
            ${Me.buildShaderDefines(bt,"CLUSTER_TEXTURE_8_")}
            ${Me.buildShaderDefines(Ye,"CLUSTER_TEXTURE_F_")}
        `}static buildShaderDefines(e,t){let s="";return Object.keys(e).forEach(i=>{s+=`
#define ${t}${i} ${e[i]}.5`}),s}static init(e){Me.lightTextureFormat=e.extTextureFloat&&e.maxTextures>8?Me.FORMAT_FLOAT:Me.FORMAT_8BIT,Me.initShaderDefines()}static createTexture(e,t,s,i,n){return new ae(e,{name:n,width:t,height:s,mipmaps:!1,format:i,addressU:se,addressV:se,type:Nt,magFilter:ve,minFilter:ve,anisotropy:1})}constructor(e){this.device=e,this.cookiesEnabled=!1,this.shadowsEnabled=!1,this.areaLightsEnabled=!1,this.maxLights=255;let t=bt.COUNT_ALWAYS,s=0;Me.lightTextureFormat===Me.FORMAT_FLOAT?s=Ye.COUNT:t=bt.COUNT,this.lights8=new Uint8ClampedArray(4*t*this.maxLights),this.lightsTexture8=Me.createTexture(this.device,t,this.maxLights,he,"LightsTexture8"),this._lightsTexture8Id=this.device.scope.resolve("lightsTexture8"),s?(this.lightsFloat=new Float32Array(4*s*this.maxLights),this.lightsTextureFloat=Me.createTexture(this.device,s,this.maxLights,nt,"LightsTextureFloat"),this._lightsTextureFloatId=this.device.scope.resolve("lightsTextureFloat")):(this.lightsFloat=null,this.lightsTextureFloat=null,this._lightsTextureFloatId=void 0),this._lightsTextureInvSizeId=this.device.scope.resolve("lightsTextureInvSize"),this._lightsTextureInvSizeData=new Float32Array(4),this._lightsTextureInvSizeData[0]=s?1/this.lightsTextureFloat.width:0,this._lightsTextureInvSizeData[1]=s?1/this.lightsTextureFloat.height:0,this._lightsTextureInvSizeData[2]=1/this.lightsTexture8.width,this._lightsTextureInvSizeData[3]=1/this.lightsTexture8.height,this.invMaxColorValue=0,this.invMaxAttenuation=0,this.boundsMin=new b,this.boundsDelta=new b}destroy(){this.lightsTexture8&&(this.lightsTexture8.destroy(),this.lightsTexture8=null),this.lightsTextureFloat&&(this.lightsTextureFloat.destroy(),this.lightsTextureFloat=null)}setCompressionRanges(e,t){this.invMaxColorValue=1/t,this.invMaxAttenuation=1/e}setBounds(e,t){this.boundsMin.copy(e),this.boundsDelta.copy(t)}uploadTextures(){this.lightsTextureFloat&&(this.lightsTextureFloat.lock().set(this.lightsFloat),this.lightsTextureFloat.unlock()),this.lightsTexture8.lock().set(this.lights8),this.lightsTexture8.unlock()}updateUniforms(){this._lightsTexture8Id.setValue(this.lightsTexture8),Me.lightTextureFormat===Me.FORMAT_FLOAT&&this._lightsTextureFloatId.setValue(this.lightsTextureFloat),this._lightsTextureInvSizeId.setValue(this._lightsTextureInvSizeData)}getSpotDirection(e,t){t._node.getWorldTransform().getY(e).mulScalar(-1),e.normalize()}getLightAreaSizes(e){const t=e._node.getWorldTransform();return t.transformVector(Ab,tt),Si[0]=tt.x,Si[1]=tt.y,Si[2]=tt.z,t.transformVector(Mb,tt),Si[3]=tt.x,Si[4]=tt.y,Si[5]=tt.z,Si}addLightDataFlags(e,t,s,i,n,r){e[t+0]=i?255:0,e[t+1]=s._shape*64,e[t+2]=s._falloffMode*255,e[t+3]=n?r*255:0}addLightDataColor(e,t,s,i,n){const r=this.invMaxColorValue,a=i?s._linearFinalColor:s._finalColor;Le.float2Bytes(a[0]*r,e,t+0,2),Le.float2Bytes(a[1]*r,e,t+2,2),Le.float2Bytes(a[2]*r,e,t+4,2),e[t+6]=n?255:0;const o=!!(s.mask&fs),h=!!(s.mask&Ds);e[t+7]=o&&h?127:h?255:0}addLightDataSpotAngles(e,t,s){Le.float2Bytes(s._innerConeAngleCos*(.5-ir)+.5,e,t+0,2),Le.float2Bytes(s._outerConeAngleCos*(.5-ir)+.5,e,t+2,2)}addLightDataShadowBias(e,t,s){const i=s.getRenderData(null,0),n=s._getUniformBiasValues(i);Le.float2BytesRange(n.bias,e,t,-1,20,2),Le.float2Bytes(n.normalBias,e,t+2,2)}addLightDataPositionRange(e,t,s,i){const n=tt.sub2(i,this.boundsMin).div(this.boundsDelta);Le.float2Bytes(n.x,e,t+0,4),Le.float2Bytes(n.y,e,t+4,4),Le.float2Bytes(n.z,e,t+8,4),Le.float2Bytes(s.attenuationEnd*this.invMaxAttenuation,e,t+12,4)}addLightDataSpotDirection(e,t,s){this.getSpotDirection(tt,s),Le.float2Bytes(tt.x*(.5-ir)+.5,e,t+0,4),Le.float2Bytes(tt.y*(.5-ir)+.5,e,t+4,4),Le.float2Bytes(tt.z*(.5-ir)+.5,e,t+8,4)}addLightDataLightProjMatrix(e,t,s){const i=s.data;for(let n=0;n<12;n++)Le.float2BytesRange(i[n],e,t+4*n,-2,2,4);for(let n=12;n<16;n++)Le.float2MantissaExponent(i[n],e,t+4*n,4)}addLightDataCookies(e,t,s){const i=s._cookieChannel==="rgb";if(e[t+0]=Math.floor(s.cookieIntensity*255),e[t+1]=i?255:0,!i){const n=s._cookieChannel;e[t+4]=n==="rrr"?255:0,e[t+5]=n==="ggg"?255:0,e[t+6]=n==="bbb"?255:0,e[t+7]=n==="aaa"?255:0}}addLightAtlasViewport(e,t,s){Le.float2Bytes(s.x,e,t+0,2),Le.float2Bytes(s.y,e,t+2,2),Le.float2Bytes(s.z/3,e,t+4,2)}addLightAreaSizes(e,t,s){const i=this.getLightAreaSizes(s);for(let n=0;n<6;n++)Le.float2MantissaExponent(i[n],e,t+4*n,4)}addLightData(e,t,s){const i=e._type===pe,n=e.atlasViewportAllocated,r=this.cookiesEnabled&&!!e._cookie&&n,a=this.areaLightsEnabled&&e.shape!==at,o=this.shadowsEnabled&&e.castShadows&&n,h=e._node.getPosition();let c=null,d=null;i?o?c=e.getRenderData(null,0).shadowMatrix:r&&(c=es.evalSpotCookieMatrix(e)):(o||r)&&(d=e.atlasViewport);const u=this.lights8,f=t*this.lightsTexture8.width*4;if(this.addLightDataFlags(u,f+4*bt.FLAGS,e,i,o,e.shadowIntensity),this.addLightDataColor(u,f+4*bt.COLOR_A,e,s,r),i&&this.addLightDataSpotAngles(u,f+4*bt.SPOT_ANGLES,e),e.castShadows&&this.addLightDataShadowBias(u,f+4*bt.SHADOW_BIAS,e),r&&this.addLightDataCookies(u,f+4*bt.COOKIE_A,e),Me.lightTextureFormat===Me.FORMAT_FLOAT){const p=this.lightsFloat,_=t*this.lightsTextureFloat.width*4;if(p[_+4*Ye.POSITION_RANGE+0]=h.x,p[_+4*Ye.POSITION_RANGE+1]=h.y,p[_+4*Ye.POSITION_RANGE+2]=h.z,p[_+4*Ye.POSITION_RANGE+3]=e.attenuationEnd,i&&(this.getSpotDirection(tt,e),p[_+4*Ye.SPOT_DIRECTION+0]=tt.x,p[_+4*Ye.SPOT_DIRECTION+1]=tt.y,p[_+4*Ye.SPOT_DIRECTION+2]=tt.z),c){const m=c.data;for(let g=0;g<16;g++)p[_+4*Ye.PROJ_MAT_0+g]=m[g]}if(d&&(p[_+4*Ye.ATLAS_VIEWPORT+0]=d.x,p[_+4*Ye.ATLAS_VIEWPORT+1]=d.y,p[_+4*Ye.ATLAS_VIEWPORT+2]=d.z/3),a){const m=this.getLightAreaSizes(e);p[_+4*Ye.AREA_DATA_WIDTH+0]=m[0],p[_+4*Ye.AREA_DATA_WIDTH+1]=m[1],p[_+4*Ye.AREA_DATA_WIDTH+2]=m[2],p[_+4*Ye.AREA_DATA_HEIGHT+0]=m[3],p[_+4*Ye.AREA_DATA_HEIGHT+1]=m[4],p[_+4*Ye.AREA_DATA_HEIGHT+2]=m[5]}}else this.addLightDataPositionRange(u,f+4*bt.POSITION_X,e,h),i&&this.addLightDataSpotDirection(u,f+4*bt.SPOT_DIRECTION_X,e),c&&this.addLightDataLightProjMatrix(u,f+4*bt.PROJ_MAT_00,c),d&&this.addLightAtlasViewport(u,f+4*bt.ATLAS_VIEWPORT_A,d),a&&this.addLightAreaSizes(u,f+4*bt.AREA_DATA_WIDTH_X,e)}}Me.FORMAT_FLOAT=0;Me.FORMAT_8BIT=1;Me.lightTextureFormat=Me.FORMAT_8BIT;Me.shaderDefines="";const Pa=new b,Ea=new b,Ra=new b,nh=new _e,Lu=1e-6;class Du{constructor(){this.light=null,this.min=new b,this.max=new b}}class vc{constructor(e){this.device=e,this.name="Untitled",this.reportCount=0,this.boundsMin=new b,this.boundsMax=new b,this.boundsDelta=new b,this._cells=new b(1,1,1),this._cellsLimit=new b,this.cells=this._cells,this._maxCellLightCount=0,this._pixelsPerCellCount=0,this.maxCellLightCount=4,this._maxAttenuation=0,this._maxColorValue=0,this._usedLights=[],this._usedLights.push(new Du),this.lightsBuffer=new Me(e),this.registerUniforms(e)}set maxCellLightCount(e){const t=k.roundUp(e,4);t!==this._maxCellLightCount&&(this._maxCellLightCount=t,this._pixelsPerCellCount=this._maxCellLightCount/4,this._cellsDirty=!0)}get maxCellLightCount(){return this._maxCellLightCount}set cells(e){Pa.copy(e).floor(),this._cells.equals(Pa)||(this._cells.copy(Pa),this._cellsLimit.copy(Pa).sub(b.ONE),this._cellsDirty=!0)}get cells(){return this._cells}destroy(){this.lightsBuffer.destroy(),this.releaseClusterTexture()}releaseClusterTexture(){this.clusterTexture&&(this.clusterTexture.destroy(),this.clusterTexture=null)}registerUniforms(e){this._clusterWorldTextureId=e.scope.resolve("clusterWorldTexture"),this._clusterPixelsPerCellId=e.scope.resolve("clusterPixelsPerCell"),this._clusterTextureSizeId=e.scope.resolve("clusterTextureSize"),this._clusterTextureSizeData=new Float32Array(3),this._clusterBoundsMinId=e.scope.resolve("clusterBoundsMin"),this._clusterBoundsMinData=new Float32Array(3),this._clusterBoundsDeltaId=e.scope.resolve("clusterBoundsDelta"),this._clusterBoundsDeltaData=new Float32Array(3),this._clusterCellsCountByBoundsSizeId=e.scope.resolve("clusterCellsCountByBoundsSize"),this._clusterCellsCountByBoundsSizeData=new Float32Array(3),this._clusterCellsDotId=e.scope.resolve("clusterCellsDot"),this._clusterCellsDotData=new Float32Array(3),this._clusterCellsMaxId=e.scope.resolve("clusterCellsMax"),this._clusterCellsMaxData=new Float32Array(3),this._clusterCompressionLimit0Id=e.scope.resolve("clusterCompressionLimit0"),this._clusterCompressionLimit0Data=new Float32Array(2)}updateParams(e){e&&(this.cells=e.cells,this.maxCellLightCount=e.maxLightsPerCell,this.lightsBuffer.cookiesEnabled=e.cookiesEnabled,this.lightsBuffer.shadowsEnabled=e.shadowsEnabled,this.lightsBuffer.areaLightsEnabled=e.areaLightsEnabled)}updateCells(){if(this._cellsDirty){this._cellsDirty=!1;const e=this._cells.x,t=this._cells.y,s=this._cells.z,i=e*t*s,n=this._pixelsPerCellCount*i;let r=Math.ceil(Math.sqrt(n));r=k.roundUp(r,this._pixelsPerCellCount);const a=Math.ceil(n/r);this._clusterCellsMaxData[0]=e,this._clusterCellsMaxData[1]=t,this._clusterCellsMaxData[2]=s,this._clusterCellsDotData[0]=this._pixelsPerCellCount,this._clusterCellsDotData[1]=e*s*this._pixelsPerCellCount,this._clusterCellsDotData[2]=e*this._pixelsPerCellCount,this.clusters=new Uint8ClampedArray(4*n),this.counts=new Int32Array(i),this._clusterTextureSizeData[0]=r,this._clusterTextureSizeData[1]=1/r,this._clusterTextureSizeData[2]=1/a,this.releaseClusterTexture(),this.clusterTexture=Me.createTexture(this.device,r,a,he,"ClusterTexture")}}uploadTextures(){this.clusterTexture.lock().set(this.clusters),this.clusterTexture.unlock(),this.lightsBuffer.uploadTextures()}updateUniforms(){this.lightsBuffer.updateUniforms(),this._clusterWorldTextureId.setValue(this.clusterTexture);const e=this.boundsDelta;this._clusterCellsCountByBoundsSizeData[0]=this._cells.x/e.x,this._clusterCellsCountByBoundsSizeData[1]=this._cells.y/e.y,this._clusterCellsCountByBoundsSizeData[2]=this._cells.z/e.z,this._clusterCellsCountByBoundsSizeId.setValue(this._clusterCellsCountByBoundsSizeData),this._clusterBoundsMinData[0]=this.boundsMin.x,this._clusterBoundsMinData[1]=this.boundsMin.y,this._clusterBoundsMinData[2]=this.boundsMin.z,this._clusterBoundsDeltaData[0]=e.x,this._clusterBoundsDeltaData[1]=e.y,this._clusterBoundsDeltaData[2]=e.z,this._clusterCompressionLimit0Data[0]=this._maxAttenuation,this._clusterCompressionLimit0Data[1]=this._maxColorValue,this._clusterPixelsPerCellId.setValue(this._pixelsPerCellCount),this._clusterTextureSizeId.setValue(this._clusterTextureSizeData),this._clusterBoundsMinId.setValue(this._clusterBoundsMinData),this._clusterBoundsDeltaId.setValue(this._clusterBoundsDeltaData),this._clusterCellsDotId.setValue(this._clusterCellsDotData),this._clusterCellsMaxId.setValue(this._clusterCellsMaxData),this._clusterCompressionLimit0Id.setValue(this._clusterCompressionLimit0Data)}evalLightCellMinMax(e,t,s){t.copy(e.min),t.sub(this.boundsMin),t.div(this.boundsDelta),t.mul2(t,this.cells),t.floor(),s.copy(e.max),s.sub(this.boundsMin),s.div(this.boundsDelta),s.mul2(s,this.cells),s.ceil(),t.max(b.ZERO),s.min(this._cellsLimit)}collectLights(e){const t=this.lightsBuffer.maxLights,s=this._usedLights;let i=1;e.forEach(n=>{const r=!!(n.mask&(fs|Ds));if(n.enabled&&n.type!==ie&&n.visibleThisFrame&&n.intensity>0&&r&&i<t){let a;i<s.length?a=s[i]:(a=new Du,s.push(a)),a.light=n,n.getBoundingBox(nh),a.min.copy(nh.getMin()),a.max.copy(nh.getMax()),i++}}),s.length=i}evaluateBounds(){const e=this._usedLights,t=this.boundsMin,s=this.boundsMax;if(e.length>1){t.copy(e[1].min),s.copy(e[1].max);for(let i=2;i<e.length;i++)t.min(e[i].min),s.max(e[i].max)}else t.set(0,0,0),s.set(1,1,1);this.boundsDelta.sub2(s,t),this.lightsBuffer.setBounds(t,this.boundsDelta)}evaluateCompressionLimits(e){let t=0,s=0;const i=this._usedLights;for(let n=1;n<i.length;n++){const r=i[n].light;t=Math.max(r.attenuationEnd,t);const a=e?r._linearFinalColor:r._finalColor;s=Math.max(a[0],s),s=Math.max(a[1],s),s=Math.max(a[2],s)}this._maxAttenuation=t+Lu,this._maxColorValue=s+Lu,this.lightsBuffer.setCompressionRanges(this._maxAttenuation,this._maxColorValue)}updateClusters(e){this.counts.fill(0),this.clusters.fill(0);const t=this._cells.x,s=this._cells.z,i=this.counts,n=this._maxCellLightCount,r=this.clusters,a=this._pixelsPerCellCount,o=this._usedLights;for(let h=1;h<o.length;h++){const c=o[h],d=c.light;this.lightsBuffer.addLightData(d,h,e),this.evalLightCellMinMax(c,Ea,Ra);const u=Ea.x,f=Ra.x,p=Ea.y,_=Ra.y,m=Ea.z,g=Ra.z;for(let w=u;w<=f;w++)for(let v=m;v<=g;v++)for(let y=p;y<=_;y++){const T=w+t*(v+y*s),C=i[T];C<n&&(r[a*T*4+C]=h,i[T]=C+1)}}}update(e,t,s){this.updateParams(s),this.updateCells(),this.collectLights(e),this.evaluateBounds(),this.evaluateCompressionLimits(t),this.updateClusters(t),this.uploadTextures()}activate(){this.updateUniforms()}}const ct=[];ct[Xr]=1;ct[qr]=2;ct[jr]=3;ct[Yr]=4;ct[Mo]=1;ct[Fr]=2;ct[Or]=3;ct[Br]=4;ct[ao]=1;ct[ic]=2;ct[nc]=3;ct[rc]=4;ct[Po]=8;ct[Eo]=12;ct[Ro]=16;class Pb{constructor(e,t,s=1){this.name=void 0,this.type=void 0,this.byteSize=void 0,this.offset=void 0,this.scopeId=void 0,this.count=void 0,this.name=e,this.type=t,this.count=s;const i=ct[t];this.byteSize=s*i*4}calculateOffset(e){const t=this.byteSize<=8?this.byteSize:16;e=k.roundUp(e,t),this.offset=e/4}}class Eb{constructor(e,t){this.byteSize=0,this.map=new Map,this.scope=e.scope,this.uniforms=t;let s=0;for(let i=0;i<t.length;i++){const n=t[i];n.calculateOffset(s),s=n.offset*4+n.byteSize,n.scopeId=this.scope.resolve(n.name),this.map.set(n.name,n)}this.byteSize=k.roundUp(s,16)}get(e){return this.map.get(e)}getShaderDeclaration(e,t){const s=iy[e];let i=`layout(set = ${e}, binding = ${t}, std140) uniform ub_${s} {
`;return this.uniforms.forEach(n=>{const r=ey[n.type];i+=`    ${r} ${n.name};
`}),i+`};
`}}class Rb{constructor(e,t){this.name=e,this.visibility=t}}class Ib{constructor(e,t,s=Xp,i=Xg){this.scopeId=void 0,this.name=e,this.visibility=t,this.textureDimension=s,this.sampleType=i}}class Lb{constructor(e,t,s){this.device=e,this.bufferFormats=t,this.bufferFormatsMap=new Map,t.forEach((n,r)=>this.bufferFormatsMap.set(n.name,r)),this.textureFormats=s;const i=e.scope;this.textureFormatsMap=new Map,s.forEach((n,r)=>{this.textureFormatsMap.set(n.name,r),n.scopeId=i.resolve(n.name)}),this.impl=e.createBindGroupFormatImpl(this)}destroy(){this.impl.destroy()}getTexture(e){const t=this.textureFormatsMap.get(e);return t!==void 0?this.textureFormats[t]:null}getShaderDeclarationTextures(e){let t="",s=this.bufferFormats.length;return this.textureFormats.forEach(i=>{t+=`layout(set = ${e}, binding = ${s++}) uniform texture2D ${i.name};
layout(set = ${e}, binding = ${s++}) uniform sampler ${i.name}_sampler;
`}),t}loseContext(){}}class Db{constructor(){this.clearValue=new G(0,0,0,1),this.clear=!1,this.store=!1,this.resolve=!0,this.mipmaps=!1}}class Fb{constructor(){this.clearDepthValue=1,this.clearStencilValue=0,this.clearDepth=!1,this.clearStencil=!1,this.storeDepth=!1,this.storeStencil=!1}}class nr{constructor(e,t){this.name=void 0,this.renderTarget=void 0,this.samples=0,this.colorOps=void 0,this.depthStencilOps=void 0,this.requiresCubemaps=!0,this.fullSizeClearRect=!0,this.device=e,this.execute=t}init(e){var t,s;this.renderTarget=e||null,this.colorOps=new Db,this.depthStencilOps=new Fb,this.samples=Math.max(this.renderTarget?this.renderTarget.samples:this.device.samples,1),this.samples===1&&(this.colorOps.store=!0,this.colorOps.resolve=!1),(t=this.renderTarget)!=null&&(s=t.colorBuffer)!=null&&s.mipmaps&&(this.colorOps.mipmaps=!0)}setClearColor(e){this.colorOps.clearValue.copy(e),this.colorOps.clear=!0}setClearDepth(e){this.depthStencilOps.clearDepthValue=e,this.depthStencilOps.clearDepth=!0}setClearStencil(e){this.depthStencilOps.clearStencilValue=e,this.depthStencilOps.clearStencil=!0}render(){const e=this.device,t=this.renderTarget!==void 0;t&&e.startPass(this),this.execute(),t&&e.endPass(this)}}function Ob(l,e,t,s=!1){return new qn(l,Ke.createDefinition(l,{name:`${e}_${t}`,vertexCode:B[e],fragmentCode:B[t],useTransformFeedback:s}))}function Gt(l,e,t,s,i=!1,n=""){const r=en(l);let a=r.getCachedShader(s);return a||(a=new qn(l,Ke.createDefinition(l,{name:s,vertexCode:e,fragmentCode:t,fragmentPreamble:n,useTransformFeedback:i})),r.setCachedShader(s,a)),a}B.createShader=Ob;B.createShaderFromCode=Gt;const Bb=`
    attribute vec2 vertex_position;
    varying vec2 uv0;
    void main(void) {
        gl_Position = vec4(vertex_position, 0.5, 1.0);
        uv0 = vertex_position.xy * 0.5 + 0.5;
    }`,kb=`
    varying vec2 uv0;
    uniform sampler2D blitTexture;
    void main(void) {
        gl_FragColor = texture2D(blitTexture, uv0);
    }`,zb=`
    varying vec2 uv0;
    uniform samplerCube blitTexture;
    uniform mat4 invViewProj;
    void main(void) {
        vec4 projPos = vec4(uv0 * 2.0 - 1.0, 0.5, 1.0);
        vec4 worldPos = invViewProj * projPos;
        gl_FragColor = textureCube(blitTexture, worldPos.xyz);
    }`,Zs=new K;class hi{constructor(e,t){this.device=e,this.lightTextureAtlas=t,this.blitShader2d=null,this.blitShaderCube=null,this.blitTextureId=null,this.invViewProjId=null}destroy(){}getShader(e,t){return this[e]||(this[e]=Gt(this.device,Bb,t,`cookie_renderer_${e}`)),this.blitTextureId||(this.blitTextureId=this.device.scope.resolve("blitTexture")),this.invViewProjId||(this.invViewProjId=this.device.scope.resolve("invViewProj")),this[e]}get shader2d(){return this.getShader("blitShader2d",kb)}get shaderCube(){return this.getShader("blitShaderCube",zb)}static createTexture(e,t){return new ae(e,{name:"CookieAtlas",width:t,height:t,format:he,cubemap:!1,mipmaps:!1,minFilter:ve,magFilter:ve,addressU:se,addressV:se})}initInvViewProjMatrices(){if(!hi._invViewProjMatrices){hi._invViewProjMatrices=[];for(let e=0;e<6;e++){const t=es.create(null,ue,e),s=t.projectionMatrix,i=t.node.getLocalTransform().clone().invert();hi._invViewProjMatrices[e]=new H().mul2(s,i).invert()}}}render(e,t){if(e.enabled&&e.cookie&&e.visibleThisFrame){const s=e.numShadowFaces,i=s>1?this.shaderCube:this.shader2d,n=this.device;s>1&&this.initInvViewProjMatrices(),this.blitTextureId.setValue(e.cookie);for(let r=0;r<s;r++){if(Zs.copy(e.atlasViewport),s>1){const a=Zs.z/3,o=this.lightTextureAtlas.cubeSlotsOffsets[r];Zs.x+=a*o.x,Zs.y+=a*o.y,Zs.z=a,Zs.w=a,this.invViewProjId.setValue(hi._invViewProjMatrices[r].data)}Zs.mulScalar(t.colorBuffer.width),ss(n,t,i,Zs)}}}}hi._invViewProjMatrices=null;class Yi{constructor(e,t){this.texture=e,this.cached=!1,this.renderTargets=t}destroy(){this.texture&&(this.texture.destroy(),this.texture=null);const e=this.renderTargets;for(let t=0;t<e.length;t++)e[t].destroy();this.renderTargets.length=0}static getShadowFormat(e,t){return t===ds?nt:t===Is?gt:t===us||t===Ze&&e.webgl2?Vr:he}static getShadowFiltering(e,t){return t===Ze&&!e.webgl2?ve:t===ds?e.extTextureFloatLinear?$e:ve:t===Is?e.extTextureHalfFloatLinear?$e:ve:$e}static create(e,t){let s=null;return t._type===ue?s=this.createCubemap(e,t._shadowResolution):s=this.create2dMap(e,t._shadowResolution,t._shadowType),s}static createAtlas(e,t,s){const i=this.create2dMap(e,t,s),n=i.renderTargets,r=n[0];for(let a=0;a<5;a++)n.push(r);return i}static create2dMap(e,t,s){const i=this.getShadowFormat(e,s),n=this.getShadowFiltering(e,s),r=new ae(e,{format:i,width:t,height:t,mipmaps:!1,minFilter:n,magFilter:n,addressU:se,addressV:se,name:"ShadowMap2D"});let a=null;return s===us||s===Ze&&e.webgl2?(r.compareOnRead=!0,r.compareFunc=td,a=new ht({depthBuffer:r})):a=new ht({colorBuffer:r,depth:!0}),new Yi(r,[a])}static createCubemap(e,t){const s=new ae(e,{format:he,width:t,height:t,cubemap:!0,mipmaps:!1,minFilter:ve,magFilter:ve,addressU:se,addressV:se,name:"ShadowMapCube"}),i=[];for(let n=0;n<6;n++){const r=new ht({colorBuffer:s,face:n,depth:!0});i.push(r)}return new Yi(s,i)}}const Ub=[],Nb=[],_s=new K,rh=new K;class ah{constructor(e){this.size=Math.floor(e.w*1024),this.used=!1,this.lightId=-1,this.rect=e}}class Vb{constructor(e){this.device=e,this.version=1,this.shadowAtlasResolution=2048,this.shadowAtlas=null,this.shadowEdgePixels=3,this.cookieAtlasResolution=2048,this.cookieAtlas=null,this.cookieRenderTarget=null,this.slots=[],this.atlasSplit=[],this.cubeSlotsOffsets=[new V(0,0),new V(0,1),new V(1,0),new V(1,1),new V(2,0),new V(2,1)],this.scissorVec=new K,this.allocateShadowAtlas(1),this.allocateCookieAtlas(1),this.allocateUniforms()}destroy(){this.destroyShadowAtlas(),this.destroyCookieAtlas()}destroyShadowAtlas(){this.shadowAtlas&&(this.shadowAtlas.destroy(),this.shadowAtlas=null)}destroyCookieAtlas(){this.cookieAtlas&&(this.cookieAtlas.destroy(),this.cookieAtlas=null),this.cookieRenderTarget&&(this.cookieRenderTarget.destroy(),this.cookieRenderTarget=null)}allocateShadowAtlas(e){if(!this.shadowAtlas||this.shadowAtlas.texture.width!==e){this.version++,this.destroyShadowAtlas(),this.shadowAtlas=Yi.createAtlas(this.device,e,Ze),this.shadowAtlas.cached=!0;const t=4/this.shadowAtlasResolution;this.scissorVec.set(t,t,-2*t,-2*t)}}allocateCookieAtlas(e){(!this.cookieAtlas||this.cookieAtlas.width!==e)&&(this.version++,this.destroyCookieAtlas(),this.cookieAtlas=hi.createTexture(this.device,e),this.cookieRenderTarget=new ht({colorBuffer:this.cookieAtlas,depth:!1,flipY:!0}))}allocateUniforms(){this._shadowAtlasTextureId=this.device.scope.resolve("shadowAtlasTexture"),this._shadowAtlasParamsId=this.device.scope.resolve("shadowAtlasParams"),this._shadowAtlasParams=new Float32Array(2),this._cookieAtlasTextureId=this.device.scope.resolve("cookieAtlasTexture")}updateUniforms(){const t=this.shadowAtlas.renderTargets[0],s=this.device.webgl2?t.depthBuffer:t.colorBuffer;this._shadowAtlasTextureId.setValue(s),this._shadowAtlasParams[0]=this.shadowAtlasResolution,this._shadowAtlasParams[1]=this.shadowEdgePixels,this._shadowAtlasParamsId.setValue(this._shadowAtlasParams),this._cookieAtlasTextureId.setValue(this.cookieAtlas)}subdivide(e,t){let s=t.atlasSplit;if(!s){const n=Math.ceil(Math.sqrt(e));s=Nb,s[0]=n,s.length=1}if(!((n,r)=>n.length===r.length&&n.every((a,o)=>a===r[o]))(s,this.atlasSplit)){this.version++,this.slots.length=0,this.atlasSplit.length=0,this.atlasSplit.push(...s);const n=this.atlasSplit[0];if(n>1){const r=1/n;for(let a=0;a<n;a++)for(let o=0;o<n;o++){const h=new K(a*r,o*r,r,r),c=this.atlasSplit[1+a*n+o];if(c>1)for(let d=0;d<c;d++)for(let u=0;u<c;u++){const f=r/c,p=new K(h.x+d*f,h.y+u*f,f,f);this.slots.push(new ah(p))}else this.slots.push(new ah(h))}}else this.slots.push(new ah(new K(0,0,1,1)));this.slots.sort((r,a)=>a.size-r.size)}}collectLights(e,t,s){const i=s.cookiesEnabled,n=s.shadowsEnabled;let r=!1,a=!1;const o=Ub;o.length=0;const h=c=>{for(let d=0;d<c.length;d++){const u=c[d];if(u.visibleThisFrame){const f=n&&u.castShadows,p=i&&!!u.cookie;r||(r=f),a||(a=p),(f||p)&&o.push(u)}}};return(i||n)&&(h(e),h(t)),o.sort((c,d)=>d.maxScreenSize-c.maxScreenSize),r&&this.allocateShadowAtlas(this.shadowAtlasResolution),a&&this.allocateCookieAtlas(this.cookieAtlasResolution),(r||a)&&this.subdivide(o.length,s),o}setupSlot(e,t){e.atlasViewport.copy(t);const s=e.numShadowFaces;for(let i=0;i<s;i++)if(e.castShadows||e._cookie){if(_s.copy(t),rh.copy(t),e._type===pe&&_s.add(this.scissorVec),e._type===ue){const n=_s.z/3,r=this.cubeSlotsOffsets[i];_s.x+=n*r.x,_s.y+=n*r.y,_s.z=n,_s.w=n,rh.copy(_s)}if(e.castShadows){const n=e.getRenderData(null,i);n.shadowViewport.copy(_s),n.shadowScissor.copy(rh)}}}assignSlot(e,t,s){e.atlasViewportAllocated=!0;const i=this.slots[t];i.lightId=e.id,i.used=!0,s&&(e.atlasSlotUpdated=!0,e.atlasVersion=this.version,e.atlasSlotIndex=t)}update(e,t,s){this.shadowAtlasResolution=s.shadowAtlasResolution,this.cookieAtlasResolution=s.cookieAtlasResolution;const i=this.collectLights(e,t,s);if(i.length>0){const n=this.slots;for(let o=0;o<n.length;o++)n[o].used=!1;const r=Math.min(i.length,n.length);for(let o=0;o<r;o++){const h=i[o];h.castShadows&&(h._shadowMap=this.shadowAtlas);const c=n[h.atlasSlotIndex];if(h.atlasVersion===this.version&&h.id===(c==null?void 0:c.lightId)){const d=n[h.atlasSlotIndex];d.size===n[o].size&&!d.used&&this.assignSlot(h,h.atlasSlotIndex,!1)}}let a=0;for(let o=0;o<r;o++){for(;a<n.length&&n[a].used;)a++;const h=i[o];h.atlasViewportAllocated||this.assignSlot(h,a,!0);const c=n[h.atlasSlotIndex];this.setupSlot(h,c.rect)}}this.updateUniforms()}}class Gb{constructor(){this.shadowMapCache=new Map}destroy(){this.clear(),this.shadowMapCache=null}clear(){this.shadowMapCache.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.shadowMapCache.clear()}getKey(e){const t=e._type===ue,s=e._shadowType,i=e._shadowResolution;return`${t}-${s}-${i}`}get(e,t){const s=this.getKey(t),i=this.shadowMapCache.get(s);if(i&&i.length)return i.pop();const n=Yi.create(e,t);return n.cached=!0,n}add(e,t){const s=this.getKey(e),i=this.shadowMapCache.get(s);i?i.push(t):this.shadowMapCache.set(s,[t])}}const Ce=[new b,new b,new b,new b,new b,new b,new b,new b],oh={min:0,max:0};function Wb(l,e,t){Ce[0].x=Ce[1].x=Ce[2].x=Ce[3].x=e.x,Ce[1].y=Ce[3].y=Ce[7].y=Ce[5].y=e.y,Ce[2].z=Ce[3].z=Ce[6].z=Ce[7].z=e.z,Ce[4].x=Ce[5].x=Ce[6].x=Ce[7].x=t.x,Ce[0].y=Ce[2].y=Ce[4].y=Ce[6].y=t.y,Ce[0].z=Ce[1].z=Ce[4].z=Ce[5].z=t.z;let s=9999999999,i=-9999999999;for(let n=0;n<8;++n){l.transformPoint(Ce[n],Ce[n]);const r=Ce[n].z;r<s&&(s=r),r>i&&(i=r)}return oh.min=s,oh.max=i,oh}function Hb(l,e){return Math.exp(-(l*l)/(2*e*e))}const Fu=25;function Xb(l){l>Fu&&(l=Fu);const e=(l-1)/(2*3),t=(l-1)*.5,s=new Array(l);let i=0;for(let n=0;n<l;++n)s[n]=Hb(n-t,e),i+=s[n];for(let n=0;n<l;++n)s[n]/=i;return s}const Ia=new _e,La=new H,Ou=new H,bi=new Float32Array(2),rr=new K(1,1,0,0),qb={r:1,g:2,b:3,a:4},gs=new b,Bu=new H;function jb(l){const e=l.material,t=l.skinInstance?10:0;let s=0;if(e.opacityMap){const i=e.opacityMapChannel;i&&(s=qb[i])}return t+s}class Dl{constructor(e,t){this.device=e.device,this.forwardRenderer=e,this.lightTextureAtlas=t;const s=this.device.scope;this.polygonOffsetId=s.resolve("polygonOffset"),this.polygonOffset=new Float32Array(2),this.sourceId=s.resolve("source"),this.pixelOffsetId=s.resolve("pixelOffset"),this.weightId=s.resolve("weight[0]"),this.blurVsmShaderCode=[B.blurVSMPS,`#define GAUSS
`+B.blurVSMPS];const i=`#define PACKED
`;this.blurPackedVsmShaderCode=[i+this.blurVsmShaderCode[0],i+this.blurVsmShaderCode[1]],this.blurVsmShader=[{},{}],this.blurPackedVsmShader=[{},{}],this.blurVsmWeights={},this.shadowMapLightRadiusId=s.resolve("light_radius"),this.shadowMapCache=new Gb}destroy(){this.shadowMapCache.destroy(),this.shadowMapCache=null}static createShadowCamera(e,t,s,i){const n=es.create("ShadowCamera",s,i);return t>=hs&&t<=ds?n.clearColor=new G(0,0,0,0):n.clearColor=new G(1,1,1,1),n.clearDepthBuffer=!0,n.clearStencilBuffer=!1,n}static setShadowCameraSettings(e,t,s,i,n){let r=s===us||s===Ze&&t.webgl2;i===ue&&!n&&(r=!1),e.clearColorBuffer=!r}cullShadowCasters(e,t,s){let i=0;const n=e.length;for(let r=0;r<n;r++){const a=e[r];(!a.cull||a._isVisible(s))&&(a.visibleThisFrame=!0,t[i]=a,i++)}t.length=i,t.sort(this.forwardRenderer.depthSortCompare)}cullLocal(e,t){const s=this.forwardRenderer.scene.clusteredLightingEnabled;e.visibleThisFrame=!0,s||e._shadowMap||(e._shadowMap=Yi.create(this.device,e));const i=e._type,n=i===pe?1:6;for(let r=0;r<n;r++){const a=e.getRenderData(null,r),o=a.shadowCamera;o.nearClip=e.attenuationEnd/1e3,o.farClip=e.attenuationEnd;const h=o._node,c=e._node;if(h.setPosition(c.getPosition()),i===pe)o.fov=e._outerConeAngle*2,h.setRotation(c.getRotation()),h.rotateLocal(-90,0,0);else if(i===ue)if(s){const f=2/(this.lightTextureAtlas.shadowAtlasResolution*e.atlasViewport.z/3)*this.lightTextureAtlas.shadowEdgePixels;o.fov=Math.atan(1+f)*k.RAD_TO_DEG*2}else o.fov=90;this.forwardRenderer.updateCameraFrustum(o),this.cullShadowCasters(t,a.visibleCasters,o)}}generateSplitDistances(e,t,s){e._shadowCascadeDistances.fill(s);for(let i=1;i<e.numCascades;i++){const n=i/e.numCascades,r=t+(s-t)*n,a=t*(s/t)**n,o=k.lerp(r,a,e.cascadeDistribution);e._shadowCascadeDistances[i-1]=o}}cullDirectional(e,t,s){e.visibleThisFrame=!0,e._shadowMap||(e._shadowMap=Yi.create(this.device,e));const i=s._nearClip;this.generateSplitDistances(e,i,e.shadowDistance);for(let n=0;n<e.numCascades;n++){const r=e.getRenderData(s,n),a=r.shadowCamera;a.renderTarget=e._shadowMap.renderTargets[0],r.shadowViewport.copy(e.cascades[n]),r.shadowScissor.copy(e.cascades[n]);const o=a._node,h=e._node;o.setPosition(h.getPosition()),o.setRotation(h.getRotation()),o.rotateLocal(-90,0,0);const c=n===0?i:e._shadowCascadeDistances[n-1],d=e._shadowCascadeDistances[n],u=s.getFrustumCorners(c,d);gs.set(0,0,0);const f=s.node.getWorldTransform();for(let E=0;E<8;E++)f.transformPoint(u[E],u[E]),gs.add(u[E]);gs.mulScalar(1/8);let p=0;for(let E=0;E<8;E++){const O=u[E].sub(gs).length();O>p&&(p=O)}const _=o.right,m=o.up,g=o.forward,w=.25*e._shadowResolution/p,v=Math.ceil(gs.dot(m)*w)/w,y=Math.ceil(gs.dot(_)*w)/w,T=m.mulScalar(v),C=_.mulScalar(y),S=gs.dot(g),A=g.mulScalar(S);gs.add2(T,C).add(A),o.setPosition(gs),o.translateLocal(0,0,1e6),a.nearClip=.01,a.farClip=2e6,a.orthoHeight=p,this.forwardRenderer.updateCameraFrustum(a),this.cullShadowCasters(t,r.visibleCasters,a);let x=!0;const P=r.visibleCasters;for(let E=0;E<P.length;E++){const O=P[E];x?(x=!1,Ia.copy(O.aabb)):Ia.add(O.aabb)}La.copy(o.getWorldTransform()).invert();const I=Wb(La,Ia.getMin(),Ia.getMax());o.translateLocal(0,0,I.max+.1),a.farClip=I.max-I.min+.2}}setupRenderState(e,t){const s=this.forwardRenderer.scene.clusteredLightingEnabled;e.webgl2?t._type===ue&&!s?e.setDepthBias(!1):(e.setDepthBias(!0),e.setDepthBiasValues(t.shadowBias*-1e3,t.shadowBias*-1e3)):e.extStandardDerivatives&&(t._type===ue?(this.polygonOffset[0]=0,this.polygonOffset[1]=0,this.polygonOffsetId.setValue(this.polygonOffset)):(this.polygonOffset[0]=t.shadowBias*-1e3,this.polygonOffset[1]=t.shadowBias*-1e3,this.polygonOffsetId.setValue(this.polygonOffset))),e.setBlending(!1),e.setDepthWrite(!0),e.setDepthTest(!0),e.setDepthFunc(gl),(s?t._isPcf&&e.webgl2:t._isPcf&&e.webgl2&&t._type!==ue)?e.setColorWrite(!1,!1,!1,!1):e.setColorWrite(!0,!0,!0,!0)}restoreRenderState(e){e.webgl2?e.setDepthBias(!1):e.extStandardDerivatives&&(this.polygonOffset[0]=0,this.polygonOffset[1]=0,this.polygonOffsetId.setValue(this.polygonOffset))}dispatchUniforms(e,t,s,i){const n=t._node;e._type!==ie&&(this.forwardRenderer.dispatchViewPos(n.getPosition()),this.shadowMapLightRadiusId.setValue(e.attenuationEnd)),La.setTRS(n.getPosition(),n.getRotation(),b.ONE).invert(),Ou.mul2(t.projectionMatrix,La);const r=s.shadowViewport;t.rect=r,t.scissorRect=s.shadowScissor,Bu.setViewport(r.x,r.y,r.z,r.w),s.shadowMatrix.mul2(Bu,Ou),e._type===ie&&e._shadowMatrixPalette.set(s.shadowMatrix.data,i*16)}submitCasters(e,t){const s=this.device,i=this.forwardRenderer,n=i.scene,r=1<<Bi,a=mt.getShadow(t._type,t._shadowType),o=e.length;for(let h=0;h<o;h++){const c=e[h],d=c.mesh;c.ensureMaterial(s);const u=c.material;i.setBaseConstants(s,u),i.setSkinning(s,c,u),u.dirty&&(u.updateUniforms(s,n),u.dirty=!1),u.chunks&&(i.setCullMode(!0,!1,c),u.setParameters(s),c.setParameters(s,r));let f=c._shader[a];f||(c.updatePassShader(n,a),f=c._shader[a],c._key[gc]=jb(c)),!f.failed&&s.setShader(f),i.setVertexBuffers(s,d),i.setMorphing(s,c.morphInstance);const p=c.renderStyle;s.setIndexBuffer(d.indexBuffer[p]),i.drawInstance(s,c,d,p),i._shadowDrawCalls++}}render(e,t){if(e.enabled&&e.castShadows&&e.shadowUpdateMode!==Jr&&e.visibleThisFrame){const s=this.device;e.shadowUpdateMode===Qr&&(e.shadowUpdateMode=Jr);const i=e._type,n=e._shadowType,r=e.numShadowFaces,a=this.forwardRenderer;a._shadowMapUpdates+=r;const o=a.scene.clusteredLightingEnabled;this.setupRenderState(s,e);for(let h=0;h<r;h++){const c=e.getRenderData(i===ie?t:null,h),d=c.shadowCamera;Dl.setShadowCameraSettings(d,s,n,i,o);const u=i===ie?0:h;d.renderTarget=e._shadowMap.renderTargets[u],this.dispatchUniforms(e,d,c,h),a.setCamera(d,d.renderTarget,!0),this.submitCasters(c.visibleCasters,e)}e._isVsm&&e._vsmBlurSize>1&&(!this.forwardRenderer.scene.clusteredLightingEnabled||i===ie)&&this.applyVsmBlur(e,t),this.restoreRenderState(s)}}getVsmBlurShader(e,t,s){let i=(e?this.blurPackedVsmShader:this.blurVsmShader)[t][s];if(!i){this.blurVsmWeights[s]=Xb(s);const n=B.fullscreenQuadVS;let r="#define SAMPLES "+s+`
`;e?r+=this.blurPackedVsmShaderCode[t]:r+=this.blurVsmShaderCode[t];const a="blurVsm"+t+s+e;i=Gt(this.device,n,r,a),e?this.blurPackedVsmShader[t][s]=i:this.blurVsmShader[t][s]=i}return i}applyVsmBlur(e,t){const s=this.device,r=e.getRenderData(e._type===ie?t:null,0).shadowCamera.renderTarget,a=this.shadowMapCache.get(s,e),o=a.renderTargets[0],h=e._shadowType===hs,c=e.vsmBlurMode,d=e._vsmBlurSize,u=this.getVsmBlurShader(h,c,d);rr.z=e._shadowResolution-2,rr.w=rr.z,this.sourceId.setValue(r.colorBuffer),bi[0]=1/e._shadowResolution,bi[1]=0,this.pixelOffsetId.setValue(bi),c===ud&&this.weightId.setValue(this.blurVsmWeights[d]),ss(s,o,u,null,rr),this.sourceId.setValue(o.colorBuffer),bi[1]=bi[0],bi[0]=0,this.pixelOffsetId.setValue(bi),ss(s,r,u,null,rr),this.shadowMapCache.add(e,a)}}const ar=new dl;class Fn{static lightCompare(e,t){return e.key-t.key}static prepare(e,t,s,i){const n=s,r=n.length,a=[],o=new b,h=new b,c=new _e,d=new H,u=[],f=[],p=[],_=[];for(let m=0;m<r;m++){const g=n[m];if(!g.isStatic)a.push(g);else{const w=g.aabb;_.length=0;for(let D=ue;D<=pe;D++)for(let U=0;U<i.length;U++){const W=i[U];if(W._type===D&&W.enabled&&W.mask&g.mask&&W.isStatic){if(f[U]||(f[U]=new _e,W._node.getWorldTransform(),W.getBoundingSphere(ar),f[U].center.copy(ar.center),f[U].halfExtents.set(ar.radius,ar.radius,ar.radius)),!f[U].intersects(w))continue;_.push(U)}}if(_.length===0){a.push(g);continue}const v=g.mesh,y=v.vertexBuffer,T=v.indexBuffer[g.renderStyle],C=T.bytesPerIndex===2?new Uint16Array(T.lock()):new Uint32Array(T.lock()),S=v.primitive[g.renderStyle].count/3,A=v.primitive[g.renderStyle].base,x=y.format.elements,P=y.format.size/4,I=new Float32Array(y.storage);let E;for(let D=0;D<x.length;D++)x[D].name===Ne&&(E=x[D].offset/4);u.length=S;for(let D=0;D<S;D++)u[D]=0;let O=!1;p.length=S*6;for(let D=0;D<S;D++){let U=Number.MAX_VALUE,W=Number.MAX_VALUE,M=Number.MAX_VALUE,R=-Number.MAX_VALUE,L=-Number.MAX_VALUE,F=-Number.MAX_VALUE;for(let z=0;z<3;z++){let q=C[D*3+z+A];q=q*P+E;const Y=I[q],Z=I[q+1],j=I[q+2];Y<U&&(U=Y),Z<W&&(W=Z),j<M&&(M=j),Y>R&&(R=Y),Z>L&&(L=Z),j>F&&(F=j)}const N=D*6;p[N]=U,p[N+1]=W,p[N+2]=M,p[N+3]=R,p[N+4]=L,p[N+5]=F}for(let D=0;D<_.length;D++){const U=_[D];d.copy(g.node.worldTransform).invert(),c.setFromTransformedAabb(f[U],d);const W=c.getMin(),M=c.getMax(),R=1<<D;for(let L=0;L<S;L++){const F=L*6;p[F]<=M.x&&p[F+3]>=W.x&&p[F+1]<=M.y&&p[F+4]>=W.y&&p[F+2]<=M.z&&p[F+5]>=W.z&&(u[L]|=R,O=!0)}}if(O){const D={};for(let U=0;U<S;U++){const W=U*3+A,M=u[U];D[M]||(D[M]=[]);const R=D[M];R.push(C[W]),R.push(C[W+1]),R.push(C[W+2])}for(const U in D){const W=D[U],M=new mi(e,T.format,W.length,T.usage);(M.bytesPerIndex===2?new Uint16Array(M.lock()):new Uint32Array(M.lock())).set(W),M.unlock();let L=Number.MAX_VALUE,F=Number.MAX_VALUE,N=Number.MAX_VALUE,z=-Number.MAX_VALUE,q=-Number.MAX_VALUE,Y=-Number.MAX_VALUE;for(let me=0;me<W.length;me++){const ke=W[me],Oe=I[ke*P+E],Xe=I[ke*P+E+1],Xt=I[ke*P+E+2];Oe<L&&(L=Oe),Xe<F&&(F=Xe),Xt<N&&(N=Xt),Oe>z&&(z=Oe),Xe>q&&(q=Xe),Xt>Y&&(Y=Xt)}o.set(L,F,N),h.set(z,q,Y);const Z=new _e;Z.setMinMax(o,h);const j=new Ht(e);j.vertexBuffer=y,j.indexBuffer[0]=M,j.primitive[0].type=ts,j.primitive[0].base=0,j.primitive[0].count=W.length,j.primitive[0].indexed=!0,j.aabb=Z;const X=new we(j,g.material,g.node);X.isStatic=g.isStatic,X.visible=g.visible,X.layer=g.layer,X.castShadow=g.castShadow,X._receiveShadow=g._receiveShadow,X.cull=g.cull,X.pick=g.pick,X.mask=g.mask,X.parameters=g.parameters,X._shaderDefs=g._shaderDefs,X._staticSource=g,g._staticLightList?X._staticLightList=g._staticLightList:X._staticLightList=[];for(let me=0;me<_.length;me++){const ke=1<<me;if(U&ke){const Oe=i[_[me]];X._staticLightList.indexOf(Oe)<0&&X._staticLightList.push(Oe)}}X._staticLightList.sort(Fn.lightCompare),a.push(X)}}else a.push(g)}}s.length=a.length;for(let m=0;m<a.length;m++)s[m]=a[m]}static revert(e){const t=e,s=t.length,i=[];let n;for(let r=0;r<s;r++){const a=t[r];a._staticSource?a._staticSource!==n&&(i.push(a._staticSource),n=a._staticSource):i.push(a)}e.length=i.length;for(let r=0;r<i.length;r++)e[r]=i[r]}}const Yb={linear:"decodeLinear",srgb:"decodeGamma",rgbm:"decodeRGBM",rgbe:"decodeRGBE",rgbp:"decodeRGBP"},$b={linear:"encodeLinear",srgb:"encodeGamma",rgbm:"encodeRGBM",rgbe:"encodeRGBE",rgbp:"encodeRGBP"};class cs{static decodeFunc(e){return Yb[e]||"decodeGamma"}static encodeFunc(e){return $b[e]||"encodeGamma"}}const lh={vertex_normal:xt,vertex_tangent:ps,vertex_texCoord0:It,vertex_texCoord1:yi,vertex_color:lt,vertex_boneWeights:ms,vertex_boneIndices:Et},ku={vVertexColor:"vec4",vPositionW:"vec3",vNormalV:"vec3",vNormalW:"vec3",vTangentW:"vec3",vBinormalW:"vec3",vObjectSpaceUpW:"vec3",vUv0:"vec2",vUv1:"vec2"};class Kb{constructor(e,t){if(this.device=e,this.options=t,this.attributes={vertex_position:Ne},t.chunks){this.chunks={};const s=t.chunks;for(const i in B)if(s.hasOwnProperty(i)){const n=s[i];for(const r in lh)lh.hasOwnProperty(r)&&n.indexOf(r)>=0&&(this.attributes[r]=lh[r]);this.chunks[i]=n}else this.chunks[i]=B[i]}else this.chunks=B;this.lighting=t.lights.length>0||!!t.dirLightMap||!!t.clusteredLightingEnabled,this.reflections=!!t.reflectionSource,t.useSpecular||(t.specularMap=t.glossMap=null),this.shadowPass=mt.isShadow(t.pass),this.needsNormal=this.lighting||this.reflections||t.useSpecular||t.ambientSH||t.heightMap||t.enableGGXSpecular||t.clusteredLightingEnabled&&!this.shadowPass||t.clearCoatNormalMap,this.needsSceneColor=t.useDynamicRefraction,this.needsScreenSize=t.useDynamicRefraction,this.needsTransforms=t.useDynamicRefraction,this.varyings="",this.vshader=null,this.frontendDecl=null,this.frontendCode=null,this.frontendFunc=null,this.lightingUv=null,this.defines=[],this.fshader=null}_vsAddBaseCode(e,t,s){return e+=t.baseVS,(s.nineSlicedMode===je||s.nineSlicedMode===We)&&(e+=t.baseNineSlicedVS),e}_vsAddTransformCode(e,t,s,i){return e+=this.chunks.transformVS,e}_setMapTransform(e,t,s,i){const n=s+i*100;if(!e[3][n]){const r=`texture_${t}MapTransform`;e[0]+=`uniform vec3 ${r}0;
`,e[0]+=`uniform vec3 ${r}1;
`,e[1]+=`varying vec2 vUV${i}_${s};
`,e[2]+=`   vUV${i}_${s} = vec2(dot(vec3(uv${i}, 1), ${r}0), dot(vec3(uv${i}, 1), ${r}1));
`,e[3][n]=!0}return e}_fsGetBaseCode(){const e=this.options,t=this.chunks;let s=this.chunks.basePS;return e.nineSlicedMode===je?s+=t.baseNineSlicedPS:e.nineSlicedMode===We&&(s+=t.baseNineSlicedTiledPS),s}_fsGetStartCode(e,t,s,i){let n=s.startPS;return i.nineSlicedMode===je?n+=s.startNineSlicedPS:i.nineSlicedMode===We&&(n+=s.startNineSlicedTiledPS),n}_directionalShadowMapProjection(e,t,s,i,n){let r="";return e.numCascades>1&&(r+=`getShadowCascadeMatrix(light${i}_shadowMatrixPalette, light${i}_shadowCascadeDistances, light${i}_shadowCascadeCount);
`,t=`(cascadeShadowMat, ${s});
`),r+=n+t,r+=`fadeShadow(light${i}_shadowCascadeDistances);
`,r}_nonPointShadowMapProjection(e,t,s,i,n){const r=`(${s}, ${i});
`;return!t._normalOffsetBias||t._isVsm?t._type===pe?t._isPcf&&(e.webgl2||e.extStandardDerivatives)?"       getShadowCoordPerspZbuffer"+r:"       getShadowCoordPersp"+r:this._directionalShadowMapProjection(t,r,i,n,"getShadowCoordOrtho"):t._type===pe?t._isPcf&&(e.webgl2||e.extStandardDerivatives)?"       getShadowCoordPerspZbufferNormalOffset"+r:"       getShadowCoordPerspNormalOffset"+r:this._directionalShadowMapProjection(t,r,i,n,"getShadowCoordOrthoNormalOffset")}_getLightSourceShapeString(e){switch(e){case r0:return"Rect";case a0:return"Disk";case o0:return"Sphere";default:return""}}generateVertexShader(e,t,s){const i=this.device,n=this.options,r=this.chunks;let a="",o="";a=this._vsAddBaseCode(a,r,n),o+=`   vPositionW    = getWorldPosition();
`,this.options.pass===Qt&&(a+=`varying float vDepth;
`,a+=`#ifndef VIEWMATRIX
`,a+=`#define VIEWMATRIX
`,a+=`uniform mat4 matrix_view;
`,a+=`#endif
`,a+=`#ifndef CAMERAPLANES
`,a+=`#define CAMERAPLANES
`,a+=`uniform vec4 camera_params;

`,a+=`#endif
`,o+=`    vDepth = -(matrix_view * vec4(vPositionW,1.0)).z * camera_params.x;
`),this.options.useInstancing&&(this.attributes.instance_line1=Ir,this.attributes.instance_line2=Lr,this.attributes.instance_line3=Dr,this.attributes.instance_line4=zi,a+=r.instancingVS),this.needsNormal&&(this.attributes.vertex_normal=xt,o+=`   vNormalW = getNormal();
`,n.reflectionSource==="sphereMap"&&i.fragmentUniformsCount<=16&&(a+=r.viewNormalVS,o+=`   vNormalV    = getViewNormal();
`),n.hasTangents&&(n.heightMap||n.normalMap||n.enableGGXSpecular)?(this.attributes.vertex_tangent=ps,a+=r.tangentBinormalVS,o+=`   vTangentW   = getTangent();
`,o+=`   vBinormalW  = getBinormal();
`):(n.enableGGXSpecular||!i.extStandardDerivatives)&&(a+=r.tangentBinormalVS,o+=`   vObjectSpaceUpW  = getObjectSpaceUp();
`));const h=2;for(let u=0;u<h;u++)e[u]&&(this.attributes["vertex_texCoord"+u]="TEXCOORD"+u,a+=r["uv"+u+"VS"],o+="   vec2 uv"+u+" = getUv"+u+`();
`),t[u]&&(o+="   vUv"+u+" = uv"+u+`;
`);const c=[a,this.varyings,o,[]];s.forEach(u=>{this._setMapTransform(c,u.name,u.id,u.uv)}),a=c[0],this.varyings=c[1],o=c[2],n.vertexColors&&(this.attributes.vertex_color=lt,o+=`   vVertexColor = vertex_color;
`),n.msdf&&n.msdfTextAttribute&&(this.attributes.vertex_outlineParameters=Wi,this.attributes.vertex_shadowParameters=Hi,o+=`    unpackMsdfParams();
`,a+=r.msdfVS),(n.useMorphPosition||n.useMorphNormal)&&(n.useMorphTextureBased?(a+=`#define MORPHING_TEXTURE_BASED
`,n.useMorphPosition&&(a+=`#define MORPHING_TEXTURE_BASED_POSITION
`),n.useMorphNormal&&(a+=`#define MORPHING_TEXTURE_BASED_NORMAL
`),this.attributes.morph_vertex_id=zi,a+=`attribute float morph_vertex_id;
`):(a+=`#define MORPHING
`,n.useMorphPosition?(this.attributes.morph_pos0=Wi,this.attributes.morph_pos1=Hi,this.attributes.morph_pos2=ec,this.attributes.morph_pos3=tc,a+=`#define MORPHING_POS03
`,a+=`attribute vec3 morph_pos0;
`,a+=`attribute vec3 morph_pos1;
`,a+=`attribute vec3 morph_pos2;
`,a+=`attribute vec3 morph_pos3;
`):n.useMorphNormal&&(this.attributes.morph_nrm0=Wi,this.attributes.morph_nrm1=Hi,this.attributes.morph_nrm2=ec,this.attributes.morph_nrm3=tc,a+=`#define MORPHING_NRM03
`,a+=`attribute vec3 morph_nrm0;
`,a+=`attribute vec3 morph_nrm1;
`,a+=`attribute vec3 morph_nrm2;
`,a+=`attribute vec3 morph_nrm3;
`),n.useMorphNormal?(this.attributes.morph_nrm4=Ir,this.attributes.morph_nrm5=Lr,this.attributes.morph_nrm6=Dr,this.attributes.morph_nrm7=zi,a+=`#define MORPHING_NRM47
`,a+=`attribute vec3 morph_nrm4;
`,a+=`attribute vec3 morph_nrm5;
`,a+=`attribute vec3 morph_nrm6;
`,a+=`attribute vec3 morph_nrm7;
`):(this.attributes.morph_pos4=Ir,this.attributes.morph_pos5=Lr,this.attributes.morph_pos6=Dr,this.attributes.morph_pos7=zi,a+=`#define MORPHING_POS47
`,a+=`attribute vec3 morph_pos4;
`,a+=`attribute vec3 morph_pos5;
`,a+=`attribute vec3 morph_pos6;
`,a+=`attribute vec3 morph_pos7;
`))),n.skin?(this.attributes.vertex_boneWeights=ms,this.attributes.vertex_boneIndices=Et,a+=vm(i,r),a+=`#define SKIN
`):n.useInstancing&&(a+=`#define INSTANCING
`),n.screenSpace&&(a+=`#define SCREENSPACE
`),n.pixelSnap&&(a+=`#define PIXELSNAP
`),a=this._vsAddTransformCode(a,i,r,n),this.needsNormal&&(a+=r.normalVS),a+=`
`,a+=r.startVS,a+=o,a+=r.endVS,a+="}",Object.keys(ku).forEach(u=>{a.indexOf(u)>=0&&(this.varyings+=`varying ${ku[u]} ${u};
`)});const d=mt.getPassShaderDefine(this.options.pass);this.vshader=d+this.varyings+a}_fsGetBeginCode(){let e=mt.getPassShaderDefine(this.options.pass);for(let t=0;t<this.defines.length;t++)e+=`#define ${this.defines[t]}
`;return e}_fsGetPickPassCode(){let e=this._fsGetBeginCode();return e+=`uniform vec4 uColor;
`,e+=this.varyings,e+=this.frontendDecl,e+=this.frontendCode,e+=Ur(),e+=this.frontendFunc,e+=`    gl_FragColor = uColor;
`,e+=Dn(),e}_fsGetDepthPassCode(){const e=this.chunks;let t=this._fsGetBeginCode();return t+=`varying float vDepth;
`,t+=this.varyings,t+=e.packDepthPS,t+=this.frontendDecl,t+=this.frontendCode,t+=Ur(),t+=this.frontendFunc,t+=`    gl_FragColor = packFloat(vDepth);
`,t+=Dn(),t}_fsGetShadowPassCode(){const e=this.device,t=this.options,s=this.chunks,i=this.varyings,n=mt.toLightType(t.pass),r=mt.toShadowType(t.pass);let a=this._fsGetBeginCode();e.extStandardDerivatives&&!e.webgl2&&(a+=`uniform vec2 polygonOffset;
`),r===ds?e.textureFloatHighPrecision?a+=`#define VSM_EXPONENT 15.0

`:a+=`#define VSM_EXPONENT 5.54

`:r===Is&&(a+=`#define VSM_EXPONENT 5.54

`),n!==ie&&(a+=`uniform vec3 view_position;
`,a+=`uniform float light_radius;
`),a+=i,a+=this.frontendDecl,a+=this.frontendCode,r===Ze&&(!e.webgl2||n===ue)?a+=s.packDepthPS:r===hs&&(a+=`vec2 encodeFloatRG( float v ) {
`,a+=`    vec2 enc = vec2(1.0, 255.0) * v;
`,a+=`    enc = fract(enc);
`,a+=`    enc -= enc.yy * vec2(1.0/255.0, 1.0/255.0);
`,a+=`    return enc;
`,a+=`}

`),a+=Ur(),a+=this.frontendFunc;const o=r===hs||r===Is||r===ds,h=!e.webgl2&&e.extStandardDerivatives;return n===ue||o&&n!==ie?a+=`    float depth = min(distance(view_position, vPositionW) / light_radius, 0.99999);
`:a+=`    float depth = gl_FragCoord.z;
`,h&&(a+=`    float minValue = 2.3374370500153186e-10; //(1.0 / 255.0) / (256.0 * 256.0 * 256.0);
`,a+=`    depth += polygonOffset.x * max(abs(dFdx(depth)), abs(dFdy(depth))) + minValue * polygonOffset.y;
`),r===Ze&&(!e.webgl2||n===ue&&!t.clusteredLightingEnabled)?a+=`    gl_FragColor = packFloat(depth);
`:r===Ze||r===us?(a+=`    gl_FragColor = vec4(1.0);
`,t.clusteredLightingEnabled&&n===ue&&e.webgl2&&(a+=`    gl_FragDepth = depth;
`)):r===hs?a+=`    gl_FragColor = vec4(encodeFloatRG(depth), encodeFloatRG(depth*depth));
`:a+=s.storeEVSMPS,a+=Dn(),a}_fsGetLitPassCode(){const e=this.device,t=this.options,s=this.chunks;let i="";t.opacityFadesSpecular===!1&&(i+=`uniform float material_alphaFade;
`),t.useSpecular&&(this.defines.push("LIT_SPECULAR"),this.reflections&&this.defines.push("LIT_REFLECTIONS"),t.clearCoat&&this.defines.push("LIT_CLEARCOAT"),t.fresnelModel>0&&this.defines.push("LIT_SPECULAR_FRESNEL"),t.conserveEnergy&&this.defines.push("LIT_CONSERVE_ENERGY"),t.sheen&&this.defines.push("LIT_SHEEN"),t.iridescence&&this.defines.push("LIT_IRIDESCENCE"));const n=[];let r=0,a=!1,o=!1,h=!1,c=t.lights.some(function(x){return x._shape&&x._shape!==at});t.clusteredLightingEnabled&&t.clusteredLightingAreaLightsEnabled&&(c=!0);let d="highp";e.areaLightLutFormat===he&&(i+=`#define AREA_R8_G8_B8_A8_LUTS
`,d="lowp"),(c||t.clusteredLightingEnabled)&&(i+=`#define AREA_LIGHTS
`,i+=`uniform ${d} sampler2D areaLightsLutTex1;
`,i+=`uniform ${d} sampler2D areaLightsLutTex2;
`);for(let x=0;x<t.lights.length;x++){const P=t.lights[x],I=P._type;if(t.clusteredLightingEnabled&&I!==ie)continue;const E=c&&P._shape?P._shape:at;i+="uniform vec3 light"+x+`_color;
`,I===ie?i+="uniform vec3 light"+x+`_direction;
`:(i+="uniform vec3 light"+x+`_position;
`,i+="uniform float light"+x+`_radius;
`,I===pe&&(i+="uniform vec3 light"+x+`_direction;
`,i+="uniform float light"+x+`_innerConeAngle;
`,i+="uniform float light"+x+`_outerConeAngle;
`)),E!==at&&(I===ie&&(i+="uniform vec3 light"+x+`_position;
`),i+="uniform vec3 light"+x+`_halfWidth;
`,i+="uniform vec3 light"+x+`_halfHeight;
`),P.castShadows&&!t.noShadow&&(i+="uniform mat4 light"+x+`_shadowMatrix;
`,i+="uniform float light"+x+`_shadowIntensity;
`,I===ie&&(i+="uniform mat4 light"+x+`_shadowMatrixPalette[4];
`,i+="uniform float light"+x+`_shadowCascadeDistances[4];
`,i+="uniform float light"+x+`_shadowCascadeCount;
`),I!==ie?i+="uniform vec4 light"+x+`_shadowParams;
`:(a=!0,i+="uniform vec3 light"+x+`_shadowParams;
`),I===ue?i+="uniform samplerCube light"+x+`_shadowMap;
`:P._isPcf&&e.webgl2?i+="uniform sampler2DShadow light"+x+`_shadowMap;
`:i+="uniform sampler2D light"+x+`_shadowMap;
`,r++,n[P._shadowType]=!0,P._isVsm&&(o=!0),P._isPcf&&(e.webgl2||e.extStandardDerivatives)&&I===pe&&(h=!0)),P._cookie&&(P._cookie._cubemap?I===ue&&(i+="uniform samplerCube light"+x+`_cookie;
`,i+="uniform float light"+x+`_cookieIntensity;
`,(!P.castShadows||t.noShadow)&&(i+="uniform mat4 light"+x+`_shadowMatrix;
`)):I===pe&&(i+="uniform sampler2D light"+x+`_cookie;
`,i+="uniform float light"+x+`_cookieIntensity;
`,(!P.castShadows||t.noShadow)&&(i+="uniform mat4 light"+x+`_shadowMatrix;
`),P._cookieTransform&&(i+="uniform vec4 light"+x+`_cookieMatrix;
`,i+="uniform vec2 light"+x+`_cookieOffset;
`)))}i+=`
`;const u=this.needsNormal&&(t.normalMap||t.clearCoatNormalMap||t.enableGGXSpecular&&!t.heightMap);u&&(t.hasTangents?i+=t.fastTbn?s.TBNfastPS:s.TBNPS:e.extStandardDerivatives&&(t.normalMap||t.clearCoatNormalMap)?i+=s.TBNderivativePS.replace(/\$UV/g,this.lightingUv):i+=s.TBNObjectSpacePS),i+=s.sphericalPS,i+=s.decodePS,i+=qo(t.gamma,s),i+=jo(t.toneMap,s),i+=xm(t.fog,s),i+=this.frontendCode,t.useCubeMapRotation&&(i+=`#define CUBEMAP_ROTATION
`),this.needsNormal&&(i+=s.cubeMapRotatePS,i+=t.cubeMapProjection>0?s.cubeMapProjectBoxPS:s.cubeMapProjectNonePS,i+=t.skyboxIntensity?s.envMultiplyPS:s.envConstPS),(this.lighting&&t.useSpecular||this.reflections)&&(t.useMetalness&&(i+=s.metalnessModulatePS),t.fresnelModel===hd&&(i+=s.fresnelSchlickPS),t.iridescence&&(i+=s.iridescenceDiffractionPS));const f=t.aoMap||t.aoVertexColor;if(f)switch(i+=s.aoDiffuseOccPS,t.occludeSpecular){case Zr:i+=t.occludeSpecularFloat?s.aoSpecOccSimplePS:s.aoSpecOccConstSimplePS;break;case mc:i+=t.occludeSpecularFloat?s.aoSpecOccPS:s.aoSpecOccConstPS;break}if(t.reflectionSource==="envAtlasHQ")i+=t.fixSeams?s.fixCubemapSeamsStretchPS:s.fixCubemapSeamsNonePS,i+=s.envAtlasPS,i+=s.reflectionEnvHQPS.replace(/\$DECODE/g,cs.decodeFunc(t.reflectionEncoding));else if(t.reflectionSource==="envAtlas")i+=s.envAtlasPS,i+=s.reflectionEnvPS.replace(/\$DECODE/g,cs.decodeFunc(t.reflectionEncoding));else if(t.reflectionSource==="cubeMap")i+=t.fixSeams?s.fixCubemapSeamsStretchPS:s.fixCubemapSeamsNonePS,i+=s.reflectionCubePS.replace(/\$DECODE/g,cs.decodeFunc(t.reflectionEncoding));else if(t.reflectionSource==="sphereMap"){const x=e.fragmentUniformsCount>16?s.reflectionSpherePS:s.reflectionSphereLowPS;i+=x.replace(/\$DECODE/g,cs.decodeFunc(t.reflectionEncoding))}this.reflections&&(t.clearCoat&&(i+=s.reflectionCCPS),t.sheen&&(i+=s.reflectionSheenPS)),t.refraction&&(t.useDynamicRefraction?i+=s.refractionDynamicPS:this.reflections&&(i+=s.refractionCubePS)),t.sheen&&(i+=s.lightSheenPS),t.clusteredLightingEnabled&&(i+=s.clusteredLightUtilsPS,t.clusteredLightingCookiesEnabled&&(i+=s.clusteredLightCookiesPS),t.clusteredLightingShadowsEnabled&&!t.noShadow&&(n[Ze]=!0,n[us]=!0),h=!0),(r>0||t.clusteredLightingEnabled)&&(a&&(i+=s.shadowCascadesPS),n[Ze]&&(i+=s.shadowStandardPS),n[us]&&e.webgl2&&(i+=s.shadowStandardGL2PS),o&&(i+=s.shadowVSM_commonPS,n[hs]&&(i+=s.shadowVSM8PS),n[Is]&&(i+=e.extTextureHalfFloatLinear?s.shadowEVSMPS.replace(/\$/g,"16"):s.shadowEVSMnPS.replace(/\$/g,"16")),n[ds]&&(i+=e.extTextureFloatLinear?s.shadowEVSMPS.replace(/\$/g,"32"):s.shadowEVSMnPS.replace(/\$/g,"32"))),e.webgl2||e.extStandardDerivatives||(i+=s.biasConstPS),i+=s.shadowCoordPS+s.shadowCommonPS,h&&(i+=s.shadowCoordPerspZbufferPS)),t.enableGGXSpecular&&(i+=`uniform float material_anisotropy;
`),this.lighting&&(i+=s.lightDiffuseLambertPS,(c||t.clusteredLightingEnabled)&&(i+=s.ltc)),i+=`
`;let p=!1;t.useSpecular&&(this.lighting&&(i+=t.shadingModel===Ns?s.lightSpecularPhongPS:t.enableGGXSpecular?s.lightSpecularAnisoGGXPS:s.lightSpecularBlinnPS),!t.fresnelModel&&!this.reflections&&!t.diffuseMap&&(i+=`    uniform vec3 material_ambient;
`,i+="#define LIT_OLD_AMBIENT",p=!0)),i+=s.combinePS,(t.lightMap||t.lightVertexColor)&&(i+=t.useSpecular&&t.dirLightMap?s.lightmapDirAddPS:s.lightmapAddPS);const _=!t.lightMap&&!t.lightVertexColor||t.lightMapWithoutAmbient;_&&(t.ambientSource==="ambientSH"?i+=s.ambientSHPS:t.ambientSource==="envAtlas"?(t.reflectionSource!=="envAtlas"&&t.reflectionSource!=="envAtlasHQ"&&(i+=s.envAtlasPS),i+=s.ambientEnvPS.replace(/\$DECODE/g,cs.decodeFunc(t.ambientEncoding))):i+=s.ambientConstantPS),t.ambientTint&&!p&&(i+=`uniform vec3 material_ambient;
`),t.msdf&&(t.msdfTextAttribute||(i+=`
#define UNIFORM_TEXT_PARAMETERS`),i+=s.msdfPS),this.needsNormal&&(i+=s.viewDirPS,t.useSpecular&&(i+=t.enableGGXSpecular?s.reflDirAnisoPS:s.reflDirPS));let m=!1,g=!1,w=!1,v=!1,y=!1,T;if(t.clusteredLightingEnabled&&this.lighting&&(v=!0,m=!0,g=!0,y=!0,i+=s.floatUnpackingPS,t.lightMaskDynamic&&(i+=`
#define CLUSTER_MESH_DYNAMIC_LIGHTS`),t.clusteredLightingCookiesEnabled&&(i+=`
#define CLUSTER_COOKIES`),t.clusteredLightingShadowsEnabled&&!t.noShadow&&(i+=`
#define CLUSTER_SHADOWS`,i+=`
#define CLUSTER_SHADOW_TYPE_`+Ji[t.clusteredLightingShadowType]),t.clusteredLightingAreaLightsEnabled&&(i+=`
#define CLUSTER_AREALIGHTS`),i+=Me.shaderDefines,t.clusteredLightingShadowsEnabled&&!t.noShadow&&(i+=s.clusteredLightShadowsPS),i+=s.clusteredLightPS),t.twoSidedLighting&&(i+=`uniform float twoSidedLightingNegScaleFactor;
`),i+=this._fsGetStartCode(i,e,s,t),this.needsNormal&&(t.twoSidedLighting?i+=`    dVertexNormalW = normalize(gl_FrontFacing ? vNormalW * twoSidedLightingNegScaleFactor : -vNormalW * twoSidedLightingNegScaleFactor);
`:i+=`    dVertexNormalW = normalize(vNormalW);
`,(t.heightMap||t.normalMap)&&t.hasTangents&&(t.twoSidedLighting?(i+=`    dTangentW = gl_FrontFacing ? vTangentW * twoSidedLightingNegScaleFactor : -vTangentW * twoSidedLightingNegScaleFactor;
`,i+=`    dBinormalW = gl_FrontFacing ? vBinormalW * twoSidedLightingNegScaleFactor : -vBinormalW * twoSidedLightingNegScaleFactor;
`):(i+=`    dTangentW = vTangentW;
`,i+=`    dBinormalW = vBinormalW;
`)),i+=`    getViewDir();
`,u&&(i+=`    getTBN();
`)),i+=this.frontendFunc,this.needsNormal&&(t.useSpecular&&(i+=`    getReflDir();
`),t.clearCoat&&(i+=`    ccReflDirW = normalize(-reflect(dViewDirW, ccNormalW));
`)),(this.lighting&&t.useSpecular||this.reflections)&&(t.useMetalness&&(i+=`    getMetalnessModulate();
`),t.iridescence&&(i+=`    getIridescence(saturate(dot(dViewDirW, dNormalW)));
`)),_&&(i+=`    addAmbient();
`,t.separateAmbient&&(i+=`
                    vec3 dAmbientLight = dDiffuseLight;
                    dDiffuseLight = vec3(0);
                `)),t.ambientTint&&!p&&(i+=`    dDiffuseLight *= material_ambient;
`),f&&!t.occludeDirect&&(i+=`    occludeDiffuse();
`),(t.lightMap||t.lightVertexColor)&&(i+=`    addLightMap();
`),this.lighting||this.reflections){this.reflections&&(t.clearCoat&&(i+=`    addReflectionCC();
`,t.fresnelModel>0?(i+=`    ccFresnel = getFresnelCC(dot(dViewDirW, ccNormalW));
`,i+=`    ccReflection.rgb *= ccFresnel;
`):i+=`    ccFresnel = 0.0;
`),t.useSpecularityFactor&&(i+=`    ccReflection.rgb *= dSpecularityFactor;
`),t.sheen&&(i+=`    addReflectionSheen();
`),i+=`    addReflection();
`,t.fresnelModel>0?i+=`    dReflection.rgb *= getFresnel(dot(dViewDirW, dNormalW), dSpecularity);
`:i+=`    dReflection.rgb *= dSpecularity;
`,t.useSpecularityFactor&&(i+=`    dReflection.rgb *= dSpecularityFactor;
`)),c&&(i+=`    dSpecularLight *= dSpecularity;
`,t.useSpecular&&(i+=`    calcLTCLightValues();
`));for(let x=0;x<t.lights.length;x++){const P=t.lights[x],I=P._type;if(t.clusteredLightingEnabled&&I!==ie)continue;T=!1;const E=c&&P._shape?P.shape:at,O=c&&P._shape?this._getLightSourceShapeString(E):"";if(E!==at&&(i+="    calc"+O+"LightValues(light"+x+"_position, light"+x+"_halfWidth, light"+x+`_halfHeight);
`),I===ie?(i+="    dLightDirNormW = light"+x+`_direction;
`,i+=`    dAtten = 1.0;
`):(P._cookie&&(I===pe&&!P._cookie._cubemap||I===ue&&P._cookie._cubemap)&&(y=!0,T=!0),i+="    getLightDirPoint(light"+x+`_position);
`,m=!0,T&&(I===pe?i+="    dAtten3 = getCookie2D"+(P._cookieFalloff?"":"Clip")+(P._cookieTransform?"Xform":"")+"(light"+x+"_cookie, light"+x+"_shadowMatrix, light"+x+"_cookieIntensity"+(P._cookieTransform?", light"+x+"_cookieMatrix, light"+x+"_cookieOffset":"")+")."+P._cookieChannel+`;
`:i+="    dAtten3 = getCookieCube(light"+x+"_cookie, light"+x+"_shadowMatrix, light"+x+"_cookieIntensity)."+P._cookieChannel+`;
`),E===at?P._falloffMode===dd?(i+="    dAtten = getFalloffLinear(light"+x+`_radius);
`,g=!0):(i+="    dAtten = getFalloffInvSquared(light"+x+`_radius);
`,w=!0):(i+="    dAtten = getFalloffWindow(light"+x+`_radius);
`,w=!0),i+=`    if (dAtten > 0.00001) {
`,I===pe&&(T&&!P._cookieFalloff||(i+="    dAtten *= getSpotEffect(light"+x+"_direction, light"+x+"_innerConeAngle, light"+x+`_outerConeAngle);
`,v=!0))),E!==at?I===ie?i+=`    dAttenD = getLightDiffuse();
`:i+="    dAttenD = get"+O+`LightDiffuse() * 16.0;
`:i+=`    dAtten *= getLightDiffuse();
`,P.castShadows&&!t.noShadow){let D=null,U;if(P._shadowType===hs?(D="VSM8",U="0.0"):P._shadowType===Is?(D="VSM16",U="5.54"):P._shadowType===ds?(D="VSM32",e.textureFloatHighPrecision?U="15.0":U="5.54"):P._shadowType===us?D="PCF5x5":D="PCF3x3",D!==null)if(I===ue){const W="(light"+x+"_shadowMap, light"+x+`_shadowParams);
`;P._normalOffsetBias&&(i+="    normalOffsetPointShadow(light"+x+`_shadowParams);
`),i+=`    float shadow${x} = getShadowPoint${D}${W}`,i+=`    dAtten *= mix(1.0, shadow${x}, light${x}_shadowIntensity);
`}else{const W=`light${x}_shadowMatrix`,M=`light${x}_shadowParams`;i+=this._nonPointShadowMapProjection(e,t.lights[x],W,M,x),I===pe&&(D="Spot"+D),i+=`    float shadow${x} = getShadow${D}(light${x}_shadowMap, light${x}_shadowParams${P._isVsm?", "+U:""});
`,i+=`    dAtten *= mix(1.0, shadow${x}, light${x}_shadowIntensity);
`}}if(E!==at?t.conserveEnergy&&t.useSpecular?i+="    dDiffuseLight += mix((dAttenD * dAtten) * light"+x+"_color"+(T?" * dAtten3":"")+`, vec3(0), dLTCSpecFres);
`:i+="    dDiffuseLight += (dAttenD * dAtten) * light"+x+"_color"+(T?" * dAtten3":"")+`;
`:c&&t.conserveEnergy&&t.useSpecular?i+="    dDiffuseLight += mix(dAtten * light"+x+"_color"+(T?" * dAtten3":"")+`, vec3(0), dSpecularity);
`:i+="    dDiffuseLight += dAtten * light"+x+"_color"+(T?" * dAtten3":"")+`;
`,t.useSpecular&&(i+=`    dHalfDirW = normalize(-dLightDirNormW + dViewDirW);
`),E!==at)t.clearCoat&&(i+="    ccSpecularLight += ccLTCSpecFres * get"+O+"LightSpecularCC() * dAtten * light"+x+"_color"+(T?" * dAtten3":"")+`;
`),t.useSpecular&&(i+="    dSpecularLight += dLTCSpecFres * get"+O+"LightSpecular() * dAtten * light"+x+"_color"+(T?" * dAtten3":"")+`;
`);else{var C=!1;I===ie&&t.fresnelModel>0&&(C=!0),t.clearCoat&&(i+="    ccSpecularLight += getLightSpecularCC(dHalfDirW) * dAtten * light"+x+"_color",i+=T?" * dAtten3":"",i+=C?" * getFresnelCC(dot(dViewDirW, dHalfDirW))":"",i+=`;
`),t.sheen&&(i+="    sSpecularLight += getLightSpecularSheen(dHalfDirW) * dAtten * light"+x+"_color",i+=T?" * dAtten3":"",i+=`;
`),t.useSpecular&&(i+="    dSpecularLight += getLightSpecular(dHalfDirW) * dAtten * light"+x+"_color",i+=T?" * dAtten3":"",i+=C?" * getFresnel(dot(dViewDirW, dHalfDirW), dSpecularity)":"* dSpecularity",i+=`;
`)}I!==ie&&(i+=`    }
`),i+=`
`}t.clusteredLightingEnabled&&this.lighting&&(g=!0,w=!0,m=!0,i+=`    addClusteredLights();
`),c&&(t.clearCoat&&(i+=`    ccSpecularity = 1.0;
`),t.useSpecular&&(i+=`    dSpecularity = vec3(1);
`)),t.refraction&&(i+=`    addRefraction();
`)}i+=`
`,f&&(t.occludeDirect&&(i+=`    occludeDiffuse();
`),(t.occludeSpecular===Zr||t.occludeSpecular===mc)&&(i+=`    occludeSpecular();
`)),t.useSpecularityFactor&&(i+=`    dSpecularLight *= dSpecularityFactor;
`),t.opacityFadesSpecular===!1&&((t.blendType===yt||t.blendType===_i)&&(i+=`float specLum = dot((dSpecularLight + dReflection.rgb * dReflection.a), vec3( 0.2126, 0.7152, 0.0722 ));
`,i+=`#ifdef LIT_CLEARCOAT
 specLum += dot(ccSpecularLight * ccSpecularity + ccReflection.rgb * ccSpecularity, vec3( 0.2126, 0.7152, 0.0722 ));
#endif
`,i+=`dAlpha = clamp(dAlpha + gammaCorrectInput(specLum), 0.0, 1.0);
`),i+=`dAlpha *= material_alphaFade;
`),i+=s.endPS,t.blendType===yt||t.blendType===Oo||t.alphaToCoverage?i+=s.outputAlphaPS:t.blendType===_i?i+=s.outputAlphaPremulPS:i+=s.outputAlphaOpaquePS,t.msdf&&(i+=`    gl_FragColor = applyMsdf(gl_FragColor);
`),i+=`
`,i+=Dn(),m&&(i=s.lightDirPointPS+i),g&&(i=s.falloffLinearPS+i),w&&(i=s.falloffInvSquaredPS+i),v&&(i=s.spotPS+i),y&&!t.clusteredLightingEnabled&&(i=s.cookiePS+i);let S="";return i.includes("dReflection")&&(S+=`vec4 dReflection;
`),i.includes("dTBN")&&(S+=`mat3 dTBN;
`),i.includes("dVertexNormalW")&&(S+=`vec3 dVertexNormalW;
`),i.includes("dTangentW")&&(S+=`vec3 dTangentW;
`),i.includes("dBinormalW")&&(S+=`vec3 dBinormalW;
`),i.includes("dViewDirW")&&(S+=`vec3 dViewDirW;
`),i.includes("dReflDirW")&&(S+=`vec3 dReflDirW;
`),i.includes("dHalfDirW")&&(S+=`vec3 dHalfDirW;
`),i.includes("dDiffuseLight")&&(S+=`vec3 dDiffuseLight;
`),i.includes("dSpecularLight")&&(S+=`vec3 dSpecularLight;
`),i.includes("dLightDirNormW")&&(S+=`vec3 dLightDirNormW;
`),i.includes("dLightDirW")&&(S+=`vec3 dLightDirW;
`),i.includes("dLightPosW")&&(S+=`vec3 dLightPosW;
`),i.includes("dShadowCoord")&&(S+=`vec3 dShadowCoord;
`),i.includes("dAtten")&&(S+=`float dAtten;
`),i.includes("dAttenD")&&(S+=`float dAttenD;
`),i.includes("dAtten3")&&(S+=`vec3 dAtten3;
`),i.includes("dMsdf")&&(S+=`vec4 dMsdf;
`),i.includes("ccFresnel")&&(S+=`float ccFresnel;
`),i.includes("ccReflection")&&(S+=`vec3 ccReflection;
`),i.includes("ccReflDirW")&&(S+=`vec3 ccReflDirW;
`),i.includes("ccSpecularLight")&&(S+=`vec3 ccSpecularLight;
`),i.includes("ccSpecularityNoFres")&&(S+=`float ccSpecularityNoFres;
`),i.includes("sSpecularLight")&&(S+=`vec3 sSpecularLight;
`),i.includes("sReflection")&&(S+=`vec3 sReflection;
`),this._fsGetBeginCode()+this.varyings+this._fsGetBaseCode()+(t.detailModes?s.detailModesPS:"")+S+this.frontendDecl+i}generateFragmentShader(e,t,s,i){const n=this.options;this.frontendDecl=e,this.frontendCode=t,this.frontendFunc=s,this.lightingUv=i,n.pass===jn?this.fshader=this._fsGetPickPassCode():n.pass===Qt?this.fshader=this._fsGetDepthPassCode():this.shadowPass?this.fshader=this._fsGetShadowPassCode():n.customFragmentShader?this.fshader=this._fsGetBeginCode()+n.customFragmentShader:this.fshader=this._fsGetLitPassCode()}getDefinition(){const e=Ke.createDefinition(this.device,{name:"LitShader",attributes:this.attributes,vertexCode:this.vshader,fragmentCode:this.fshader});return mt.isForward(this.options.pass)&&(e.tag=Ng),e}}class hh{constructor(){this.code=""}append(...e){e.forEach(t=>{t.endsWith(`
`)?this.code+=t:this.code+=t+`
`})}prepend(...e){e.forEach(t=>{t.endsWith(`
`)?this.code=t+this.code:this.code=t+`
`+this.code})}}const Vn=[],ch={optionsContext:{},optionsContextMin:{},generateKey:function(l){const e=function(n){const r=[];for(const a in n)n.hasOwnProperty(a)&&a!=="chunks"&&a!=="lights"&&r.push(a);return r.sort()};let t;l===this.optionsContextMin?(this.propsMin||(this.propsMin=e(l)),t=this.propsMin):l===this.optionsContext?(this.props||(this.props=e(l)),t=this.props):t=e(l);let s="standard";for(let i=0;i<t.length;i++)l[t[i]]&&(s+=t[i]+l[t[i]]);if(l.chunks){const i=[];for(const n in l.chunks)l.chunks.hasOwnProperty(n)&&i.push(n+l.chunks[n]);i.sort(),s+=i}if(l.lights){const i=l.clusteredLightingEnabled;for(let n=0;n<l.lights.length;n++){const r=l.lights[n];(!i||r._type===ie)&&(s+=r.key)}}return $r(s)},_getUvSourceExpression:function(l,e,t){const s=t[l],i=t[e],n=mt.isForward(t.pass);let r;return n&&t.nineSlicedMode===je||n&&t.nineSlicedMode===We?r="nineSlicedUv":(s===0?r="vUv"+i:r="vUV"+i+"_"+s,t.heightMap&&l!=="heightMapTransform"&&(r+=" + dUvOffset")),r},_addMapDef:function(l,e){return e?`#define ${l}
`:`#undef ${l}
`},_addMapDefs:function(l,e,t,s){return this._addMapDef("MAPFLOAT",l)+this._addMapDef("MAPCOLOR",e)+this._addMapDef("MAPVERTEX",t)+this._addMapDef("MAPTEXTURE",s)},_addMap:function(l,e,t,s,i,n=null){const r=l+"Map",a=r+"Uv",o=r+"Identifier",h=r+"Transform",c=r+"Channel",d=l+"VertexColorChannel",u=l+"Tint",f=l+"VertexColor",p=l+"Mode",_=t[u],m=t[f],g=t[r],w=t[o],v=t[p];let y=s[e];if(g){const S=this._getUvSourceExpression(h,a,t);if(y=y.replace(/\$UV/g,S).replace(/\$CH/g,t[c]),i&&y.search(/\$SAMPLER/g)!==-1){let A="texture_"+r;const x=i[w];x?A=x:i[w]=A,y=y.replace(/\$SAMPLER/g,A)}if(n&&(t[c]==="aaa"?y=y.replace(/\$DECODE/g,"passThrough"):y=y.replace(/\$DECODE/g,cs.decodeFunc(!t.gamma&&n==="srgb"?"linear":n)),y.indexOf("$texture2DSAMPLE"))){const A={linear:"texture2D",srgb:"texture2DSRGB",rgbm:"texture2DRGBM",rgbe:"texture2DRGBE"};y=y.replace(/\$texture2DSAMPLE/g,A[n]||"texture2D")}}m&&(y=y.replace(/\$VC/g,t[d])),v&&(y=y.replace(/\$DETAILMODE/g,v));const T=!!(_&1),C=!!(_&2);return y=this._addMapDefs(T,C,m,g)+y,y.replace(/\$/g,"")},_correctChannel:function(l,e,t){if(t[l]>0){if(t[l]<e.length)return e.substring(0,t[l]);if(t[l]>e.length){let s=e;const i=s.charAt(s.length-1),n=t[l]-s.length;for(let r=0;r<n;r++)s+=i;return s}return e}},createShaderDefinition:function(l,e){const t=new Kb(l,e),s=[],i=[],n=[],r=2,a={};for(const u in Vn){const f=u+"Map";if(e[u+"VertexColor"]){const p=u+"VertexColorChannel";e[p]=this._correctChannel(u,e[p],Vn)}if(e[f]){const p=f+"Channel",_=f+"Transform",m=f+"Uv";e[m]=Math.min(e[m],r-1),e[p]=this._correctChannel(u,e[p],Vn);const g=e[m];s[g]=!0,i[g]=i[g]||e[f]&&!e[_],e[_]&&n.push({name:u,id:e[_],uv:e[m]})}}e.forceUv1&&(s[1]=!0,i[1]=i[1]!==void 0?i[1]:!0),t.generateVertexShader(s,i,n),e.shadingModel===Ns?(e.fresnelModel=0,e.ambientSH=!1):e.fresnelModel=e.fresnelModel===0?hd:e.fresnelModel;const o=new hh,h=new hh,c=new hh;let d="";if(e.nineSlicedMode===We?o.append("const float textureBias = -1000.0;"):o.append("uniform float textureBias;"),mt.isForward(e.pass)){if(e.heightMap&&(o.append("vec2 dUvOffset;"),h.append(this._addMap("height","parallaxPS",e,t.chunks,a)),c.append("getParallax();")),e.blendType!==Vt||e.alphaTest||e.alphaToCoverage?(o.append("float dAlpha;"),h.append(this._addMap("opacity","opacityPS",e,t.chunks,a)),c.append("getOpacity();"),e.alphaTest&&(h.append(t.chunks.alphaTestPS),c.append("alphaTest(dAlpha);"))):o.append("float dAlpha = 1.0;"),t.needsNormal){if((e.normalMap||e.clearCoatNormalMap)&&(h.append(e.packedNormal?t.chunks.normalXYPS:t.chunks.normalXYZPS),!e.hasTangents)){const u=e.normalMap?"normalMap":"clearCoatNormalMap";d=this._getUvSourceExpression(`${u}Transform`,`${u}Uv`,e)}o.append("vec3 dNormalW;"),h.append(this._addMap("normalDetail","normalDetailMapPS",e,t.chunks,a)),h.append(this._addMap("normal","normalMapPS",e,t.chunks,a)),c.append("getNormal();")}if(t.needsSceneColor&&o.append("uniform sampler2D uSceneColorMap;"),t.needsScreenSize&&o.append("uniform vec4 uScreenSize;"),t.needsTransforms&&(o.append("uniform mat4 matrix_viewProjection;"),o.append("uniform mat4 matrix_model;")),o.append("vec3 dAlbedo;"),e.diffuseDetail&&h.append(this._addMap("diffuseDetail","diffuseDetailMapPS",e,t.chunks,a,e.diffuseDetailEncoding)),h.append(this._addMap("diffuse","diffusePS",e,t.chunks,a,e.diffuseEncoding)),c.append("getAlbedo();"),e.refraction&&(o.append("float dTransmission;"),h.append(this._addMap("refraction","transmissionPS",e,t.chunks,a)),c.append("getRefraction();"),o.append("float dThickness;"),h.append(this._addMap("thickness","thicknessPS",e,t.chunks,a)),c.append("getThickness();")),e.iridescence&&(o.append("vec3 dIridescenceFresnel;"),o.append("float dIridescence;"),h.append(this._addMap("iridescence","iridescencePS",e,t.chunks,a)),c.append("getIridescence();"),o.append("float dIridescenceThickness;"),h.append(this._addMap("iridescenceThickness","iridescenceThicknessPS",e,t.chunks,a)),c.append("getIridescenceThickness();")),t.lighting&&e.useSpecular||t.reflections?(o.append("vec3 dSpecularity;"),o.append("float dGlossiness;"),e.sheen&&(o.append("vec3 sSpecularity;"),h.append(this._addMap("sheen","sheenPS",e,t.chunks,a,e.sheenEncoding)),c.append("getSheen();"),o.append("float sGlossiness;"),h.append(this._addMap("sheenGlossiness","sheenGlossPS",e,t.chunks,a)),c.append("getSheenGlossiness();")),e.useMetalness&&(o.append("float dMetalness;"),h.append(this._addMap("metalness","metalnessPS",e,t.chunks,a)),c.append("getMetalness();")),e.useSpecularityFactor&&(o.append("float dSpecularityFactor;"),h.append(this._addMap("specularityFactor","specularityFactorPS",e,t.chunks,a)),c.append("getSpecularityFactor();")),e.useSpecularColor?h.append(this._addMap("specular","specularPS",e,t.chunks,a,e.specularEncoding)):h.append("void getSpecularity() { dSpecularity = vec3(1); }"),h.append(this._addMap("gloss","glossPS",e,t.chunks,a)),c.append("getGlossiness();"),c.append("getSpecularity();")):(o.append("vec3 dSpecularity = vec3(0.0);"),o.append("float dGlossiness = 0.0;")),(e.aoMap||e.aoVertexColor)&&(o.append("float dAo;"),h.append(this._addMap("ao","aoPS",e,t.chunks,a)),c.append("getAO();")),o.append("vec3 dEmission;"),h.append(this._addMap("emissive","emissivePS",e,t.chunks,a,e.emissiveEncoding)),c.append("getEmission();"),e.clearCoat>0&&(o.append("float ccSpecularity;"),o.append("float ccGlossiness;"),o.append("vec3 ccNormalW;"),h.append(this._addMap("clearCoat","clearCoatPS",e,t.chunks,a)),h.append(this._addMap("clearCoatGloss","clearCoatGlossPS",e,t.chunks,a)),h.append(this._addMap("clearCoatNormal","clearCoatNormalPS",e,t.chunks,a)),c.append("getClearCoat();"),c.append("getClearCoatGlossiness();"),c.append("getClearCoatNormal();")),e.lightMap||e.lightVertexColor){const u=e.dirLightMap&&e.useSpecular,f=u?"lightmapDirPS":"lightmapSinglePS";o.append("vec3 dLightmap;"),u&&o.append("vec3 dLightmapDir;"),h.append(this._addMap("light",f,e,t.chunks,a,e.lightMapEncoding)),c.append("getLightMap();")}(h.code.indexOf("texture2DSRGB")!==-1||h.code.indexOf("texture2DRGBM")!==-1||h.code.indexOf("texture2DRGBE")!==-1)&&h.prepend(t.chunks.textureSamplePS)}else e.alphaTest&&(o.append("float dAlpha;"),h.append(this._addMap("opacity","opacityPS",e,t.chunks,a)),h.append(t.chunks.alphaTestPS),c.append("getOpacity();"),c.append("alphaTest(dAlpha);"));for(const u in a)o.append(`uniform sampler2D ${a[u]};`);return c.code=`
${c.code.split(`
`).map(u=>`    ${u}`).join(`
`)}

`,t.generateFragmentShader(o.code,h.code,c.code,d),t.getDefinition()}},zu=2.399963229728653,ha={circlePoint:function(l){const e=Math.sqrt(Math.random()),t=Math.random()*2*Math.PI;l.x=e*Math.cos(t),l.y=e*Math.sin(t)},circlePointDeterministic:function(l,e,t){const s=e*zu,i=Math.sqrt(e)/Math.sqrt(t);l.x=i*Math.cos(s),l.y=i*Math.sin(s)},spherePointDeterministic:function(l,e,t,s=0,i=1){s=1-2*s,i=1-2*i;const n=k.lerp(s,i,e/t),r=Math.sqrt(1-n*n),a=zu*e;l.x=Math.cos(a)*r,l.y=n,l.z=Math.sin(a)*r},radicalInverse:function(l){let e=(l<<16|l>>>16)>>>0;return e=((e&1431655765)<<1|(e&2863311530)>>>1)>>>0,e=((e&858993459)<<2|(e&3435973836)>>>2)>>>0,e=((e&252645135)<<4|(e&4042322160)>>>4)>>>0,e=((e&16711935)<<8|(e&4278255360)>>>8)>>>0,e*23283064365386963e-26}},Uu=l=>{switch(l){case sc:return"Cubemap";case Yg:return"Octahedral";default:return"Equirect"}},Da=(l,e,t)=>{if(l<=0)e[t+0]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;else if(l>=1)e[t+0]=255,e[t+1]=0,e[t+2]=0,e[t+3]=0;else{let s=1*l%1,i=255*l%1,n=65025*l%1;const r=16581375*l%1;s-=i/255,i-=n/255,n-=r/255,e[t+0]=Math.min(255,Math.floor(s*256)),e[t+1]=Math.min(255,Math.floor(i*256)),e[t+2]=Math.min(255,Math.floor(n*256)),e[t+3]=Math.min(255,Math.floor(r*256))}},Zb=l=>{const e=l.length,t=Math.min(e,512),s=Math.ceil(e/t),i=new Uint8Array(t*s*4);let n=0;for(let r=0;r<e;r+=4)Da(l[r+0]*.5+.5,i,n+0),Da(l[r+1]*.5+.5,i,n+4),Da(l[r+2]*.5+.5,i,n+8),Da(l[r+3]/8,i,n+12),n+=16;return{width:t,height:s,data:i}},Jb=(l,e,t,s)=>{const i=t*2*Math.PI,n=Math.pow(1-e,1/(s+1)),r=Math.sqrt(1-n*n);l.set(Math.cos(i)*r,Math.sin(i)*r,n).normalize()},Qb=(l,e,t)=>{const s=t*2*Math.PI,i=Math.sqrt(1-e),n=Math.sqrt(e);l.set(Math.cos(s)*n,Math.sin(s)*n,i).normalize()},ew=(l,e,t,s)=>{const i=t*2*Math.PI,n=Math.sqrt((1-e)/(1+(s*s-1)*e)),r=Math.sqrt(1-n*n);l.set(Math.cos(i)*r,Math.sin(i)*r,n).normalize()},tw=(l,e)=>{const t=l*e,s=e/(1-l*l+t*t);return s*s*(1/Math.PI)},sw=(l,e)=>{const t=new b,s=[];for(let i=0;i<l;++i)Jb(t,i/l,ha.radicalInverse(i),e),s.push(t.x,t.y,t.z,0);return s},iw=(l,e)=>{const t=e/l,s=new b,i=[];for(let n=0;n<l;++n){Qb(s,n/l,ha.radicalInverse(n));const r=s.z/Math.PI,a=.5*Math.log2(t/r);i.push(s.x,s.y,s.z,a)}return i},nw={16:{2:26,8:20,32:17,128:16,512:16},32:{2:53,8:40,32:34,128:32,512:32},128:{2:214,8:163,32:139,128:130,512:128},1024:{2:1722,8:1310,32:1114,128:1041,512:1025}},rw=(l,e)=>{const t=nw[l];return t&&t[e]||l},aw=(l,e,t)=>{const s=t/l,i=1-Math.log2(e)/11,n=i*i,r=new b,a=new b,o=new b(0,0,1),h=[],c=rw(l,e);for(let d=0;d<c;++d){ew(r,d/c,ha.radicalInverse(d),n);const u=r.z;if(a.set(r.x,r.y,r.z).mulScalar(2*u).sub(o),a.z>0){const f=tw(Math.min(1,u),n)/4+.001,p=.5*Math.log2(s/f);h.push(a.x,a.y,a.z,p)}}for(;h.length<l*4;)h.push(0,0,0,0);return h},ow=(l,e,t)=>{const s=Zb(t);return new ae(l,{name:e,width:s.width,height:s.height,mipmaps:!1,minFilter:ve,magFilter:ve,levels:[s.data]})};class Am{constructor(e=!0){this.map=new Map,this.destroyContent=e}destroy(){this.destroyContent&&this.map.forEach((e,t)=>{e.destroy()})}get(e,t){if(!this.map.has(e)){const s=t();return this.map.set(e,s),s}return this.map.get(e)}}const lw=new Am(!1),hw=new Zn,xd=(l,e,t)=>hw.get(l,()=>new Am).get(e,()=>ow(l,e,lw.get(e,t))),cw=(l,e,t)=>{const s=`lambert-samples-${e}-${t}`;return xd(l,s,()=>iw(e,t))},dw=(l,e,t)=>{const s=`phong-samples-${e}-${t}`;return xd(l,s,()=>sw(e,t))},uw=(l,e,t,s)=>{const i=`ggx-samples-${e}-${t}-${s}`;return xd(l,i,()=>aw(e,t,s))},fw=`
attribute vec2 vertex_position;

uniform vec4 uvMod;

varying vec2 vUv0;

void main(void) {
    gl_Position = vec4(vertex_position, 0.5, 1.0);
    vUv0 = (vertex_position.xy * 0.5 + 0.5) * uvMod.xy + uvMod.zw;
}
`;function ys(l,e,t={}){var s;l instanceof od&&(l=arguments[1],e=arguments[2],t={},arguments[3]!==void 0&&(t.specularPower=arguments[3]),arguments[4]!==void 0&&(t.numSamples=arguments[4]));const i={none:"reproject",lambert:"prefilterSamplesUnweighted",phong:"prefilterSamplesUnweighted",ggx:"prefilterSamples"},n=t.hasOwnProperty("specularPower")?t.specularPower:1,r=t.hasOwnProperty("face")?t.face:null,a=t.hasOwnProperty("distribution")?t.distribution:n===1?"none":"phong",o=i[a]||"reproject",h=cs.decodeFunc(l.encoding),c=cs.encodeFunc(e.encoding),d=`sample${Uu(l.projection)}`,u=`getDirection${Uu(e.projection)}`,f=t.hasOwnProperty("numSamples")?t.numSamples:1024,p=`${o}_${h}_${c}_${d}_${u}_${f}`,_=l.device;let m=en(_).getCachedShader(p);if(!m){const A=`#define PROCESS_FUNC ${o}
#define DECODE_FUNC ${h}
#define ENCODE_FUNC ${c}
#define SOURCE_FUNC ${d}
#define TARGET_FUNC ${u}
#define NUM_SAMPLES ${f}
#define NUM_SAMPLES_SQRT ${Math.round(Math.sqrt(f)).toFixed(1)}
`+(_.extTextureLod?`#define SUPPORTS_TEXLOD
`:"");let x="";_.webgl2||(x=`#extension GL_OES_standard_derivatives: enable
`,_.extTextureLod&&(x+=`#extension GL_EXT_shader_texture_lod: enable

`)),m=Gt(_,fw,`${A}
${B.reprojectPS}`,p,!1,x)}_.scope.resolve(l.cubemap?"sourceCube":"sourceTex").setValue(l);const w=_.scope.resolve("params"),v=_.scope.resolve("params2"),y=_.scope.resolve("uvMod");if((s=t)!=null&&s.seamPixels){const A=t.seamPixels,x=t.rect?t.rect.z:e.width,P=t.rect?t.rect.w:e.height,I=x-A*2,E=P-A*2;y.setValue([(I+A*2)/I,(E+A*2)/E,-A/I,-A/E])}else y.setValue([1,1,0,0]);const T=[0,n,l.fixCubemapSeams?1/l.width:0,e.fixCubemapSeams?1/e.width:0],C=[e.width*e.height*(e.cubemap?6:1),l.width*l.height*(l.cubemap?6:1)];if(o.startsWith("prefilterSamples")){const A=l.width*l.height*(l.cubemap?6:1),x=a==="ggx"?uw(_,f,n,A):a==="lambert"?cw(_,f,A):dw(_,f,n);_.scope.resolve("samplesTex").setValue(x),_.scope.resolve("samplesTexInverseSize").setValue([1/x.width,1/x.height])}for(let A=0;A<(e.cubemap?6:1);A++)if(r===null||A===r){var S;const x=new ht({colorBuffer:e,face:A,depth:!1});T[0]=A,w.setValue(T),v.setValue(C),ss(_,x,m,(S=t)==null?void 0:S.rect),x.destroy()}}const pw=!0,Sc=pi,dh=(l,e=0)=>1+Math.floor(Math.log2(Math.max(l,e))),mw=l=>l.extTextureHalfFloat&&l.textureHalfFloatRenderable,_w=l=>l.extTextureFloat&&l.textureFloatRenderable,gw=l=>mw(l)?gt:_w(l)?nt:he,yw=l=>he,xw=(l,e,t,s)=>new ae(l,{name:`lighting-${e}`,cubemap:!0,width:e,height:e,format:t,type:t===he?Sc:Nt,addressU:se,addressV:se,fixCubemapSeams:pw,mipmaps:!!s});class Mm{static generateSkyboxCubemap(e,t){const s=e.device,i=xw(s,t||(e.cubemap?e.width:e.width/4),he,!1);return ys(e,i,{numSamples:1024}),i}static generateLightingSource(e,t){const s=e.device,i=gw(s),n=(t==null?void 0:t.target)||new ae(s,{name:"lighting-source",cubemap:!0,width:(t==null?void 0:t.size)||128,height:(t==null?void 0:t.size)||128,format:i,type:i===he?Sc:Nt,addressU:se,addressV:se,fixCubemapSeams:!1,mipmaps:!0});return ys(e,n,{numSamples:e.mipmaps?1:1024}),n}static generateAtlas(e,t){const s=e.device,i=yw(),n=(t==null?void 0:t.target)||new ae(s,{name:"envAtlas",width:(t==null?void 0:t.size)||512,height:(t==null?void 0:t.size)||512,format:i,type:Sc,projection:Jd,addressU:se,addressV:se,mipmaps:!1}),r=n.width/512,a=new K(0,0,512*r,256*r),o=dh(256)-dh(4);for(let h=0;h<o;++h)ys(e,n,{numSamples:1,rect:a,seamPixels:r}),a.x+=a.w,a.y+=a.w,a.z=Math.max(1,Math.floor(a.z*.5)),a.w=Math.max(1,Math.floor(a.w*.5));a.set(0,256*r,256*r,128*r);for(let h=1;h<7;++h)ys(e,n,{numSamples:(t==null?void 0:t.numReflectionSamples)||1024,distribution:(t==null?void 0:t.distribution)||"ggx",specularPower:Math.max(1,2048>>h*2),rect:a,seamPixels:r}),a.y+=a.w,a.z=Math.max(1,Math.floor(a.z*.5)),a.w=Math.max(1,Math.floor(a.w*.5));return a.set(128*r,(256+128)*r,64*r,32*r),ys(e,n,{numSamples:(t==null?void 0:t.numAmbientSamples)||2048,distribution:"lambert",rect:a,seamPixels:r}),n}static generatePrefilteredAtlas(e,t){const s=e[0].device,i=e[0].format,n=e[0].type,r=(t==null?void 0:t.target)||new ae(s,{name:"envPrefilteredAtlas",width:(t==null?void 0:t.size)||512,height:(t==null?void 0:t.size)||512,format:i,type:n,projection:Jd,addressU:se,addressV:se,mipmaps:!1}),a=r.width/512,o=new K(0,0,512*a,256*a),h=dh(512);for(let c=0;c<h;++c)ys(e[0],r,{numSamples:1,rect:o,seamPixels:a}),o.x+=o.w,o.y+=o.w,o.z=Math.max(1,Math.floor(o.z*.5)),o.w=Math.max(1,Math.floor(o.w*.5));o.set(0,256*a,256*a,128*a);for(let c=1;c<e.length;++c)ys(e[c],r,{numSamples:1,rect:o,seamPixels:a}),o.y+=o.w,o.z=Math.max(1,Math.floor(o.z*.5)),o.w=Math.max(1,Math.floor(o.w*.5));return o.set(128*a,(256+128)*a,64*a,32*a),t!=null&&t.legacyAmbient?ys(e[5],r,{numSamples:1,rect:o,seamPixels:a}):ys(e[0],r,{numSamples:(t==null?void 0:t.numSamples)||2048,distribution:"lambert",rect:o,seamPixels:a}),r}}const Nu=(l,e)=>{if(l.length!==e.length)return!1;for(let t=0;t<l.length;++t)if(l[t]!==e[t])return!1;return!0},Fa=l=>l.r!==1||l.g!==1||l.b!==1,vw=l=>l.r!==0||l.g!==0||l.b!==0;class Sw{constructor(){this._mapXForms=null}updateMinRef(e,t,s,i,n,r,a){this._updateSharedOptions(e,t,s,i,r),this._updateMinOptions(e,s),this._updateUVOptions(e,s,i,!0)}updateRef(e,t,s,i,n,r,a){this._updateSharedOptions(e,t,s,i,r),this._updateEnvOptions(e,s,t),this._updateMaterialOptions(e,s),r===Os&&(e.gamma&&(e.gamma=ko),e.toneMap=zo),e.hasTangents=i&&(i&pm)!==0,this._updateLightOptions(e,s,i,a,n),this._updateUVOptions(e,s,i,!1)}_updateSharedOptions(e,t,s,i,n){e.pass=n,e.alphaTest=s.alphaTest>0,e.forceFragmentPrecision=s.forceFragmentPrecision||"",e.chunks=s.chunks||"",e.blendType=s.blendType,e.forceUv1=s.forceUv1,e.separateAmbient=!1,e.screenSpace=i&&(i&Vo)!==0,e.skin=i&&(i&Uo)!==0,e.useInstancing=i&&(i&fm)!==0,e.useMorphPosition=i&&(i&Go)!==0,e.useMorphNormal=i&&(i&Wo)!==0,e.useMorphTextureBased=i&&(i&Ho)!==0,e.nineSlicedMode=s.nineSlicedMode||0,t.clusteredLightingEnabled&&s.useLighting?(e.clusteredLightingEnabled=!0,e.clusteredLightingCookiesEnabled=t.lighting.cookiesEnabled,e.clusteredLightingShadowsEnabled=t.lighting.shadowsEnabled,e.clusteredLightingShadowType=t.lighting.shadowType,e.clusteredLightingAreaLightsEnabled=t.lighting.areaLightsEnabled):(e.clusteredLightingEnabled=!1,e.clusteredLightingCookiesEnabled=!1,e.clusteredLightingShadowsEnabled=!1,e.clusteredLightingAreaLightsEnabled=!1)}_updateUVOptions(e,t,s,i){let n=!1,r=!1,a=!1;s&&(n=(s&cm)!==0,r=(s&dm)!==0,a=(s&um)!==0),e.vertexColors=!1,this._mapXForms=[];const o={};for(const h in Vn)this._updateTexOptions(e,t,h,n,r,a,i,o);this._mapXForms=null}_updateMinOptions(e,t){e.opacityTint=t.opacity!==1&&t.blendType!==Vt,e.lights=[]}_updateMaterialOptions(e,t){var s,i,n,r;const a=(t.diffuseTint||!t.diffuseMap&&!t.diffuseVertexColor)&&Fa(t.diffuse),o=!!(t.useMetalness||t.specularMap||t.sphereMap||t.cubeMap||vw(t.specular)||t.specularityFactor>0&&t.useMetalness||t.enableGGXSpecular||t.clearCoat>0),h=!t.useMetalness||t.useMetalnessSpecularColor,c=o&&(t.specularTint||!t.specularMap&&!t.specularVertexColor)&&Fa(t.specular),d=o&&t.useMetalnessSpecularColor&&(t.specularityFactorTint||t.specularityFactor<1&&!t.specularityFactorMap),u=!t.emissiveMap||Fa(t.emissive)&&t.emissiveTint,f=t.emissiveIntensity!==1,p=t.normalMap?t.normalMap.format===Gi||t.normalMap.type===El:!1;e.opacityTint=t.opacity!==1&&t.blendType!==Vt?1:0,e.blendMapsWithColors=!0,e.ambientTint=t.ambientTint,e.diffuseTint=a?2:0,e.specularTint=c?2:0,e.specularityFactorTint=d?1:0,e.useSpecularityFactor=(d||!!t.specularityFactorMap)&&t.useMetalnessSpecularColor,e.useSpecularColor=h,e.metalnessTint=t.useMetalness&&t.metalness<1?1:0,e.glossTint=1,e.emissiveTint=(u?2:0)+(f?1:0),e.alphaToCoverage=t.alphaToCoverage,e.normalizeNormalMap=t.normalizeNormalMap,e.ambientSH=!!t.ambientSH,e.useSpecular=o,e.diffuseEncoding=(s=t.diffuseMap)==null?void 0:s.encoding,e.diffuseDetailEncoding=(i=t.diffuseDetailMap)==null?void 0:i.encoding,e.emissiveEncoding=(n=t.emissiveMap)==null?void 0:n.encoding,e.lightMapEncoding=(r=t.lightMap)==null?void 0:r.encoding,e.conserveEnergy=t.conserveEnergy,e.opacityFadesSpecular=t.opacityFadesSpecular,e.alphaFade=t.alphaFade,e.occludeSpecular=t.occludeSpecular,e.occludeSpecularFloat=t.occludeSpecularIntensity!==1,e.occludeDirect=t.occludeDirect,e.shadingModel=t.shadingModel,e.fresnelModel=t.fresnelModel,e.packedNormal=p,e.fastTbn=t.fastTbn,e.cubeMapProjection=t.cubeMapProjection,e.customFragmentShader=t.customFragmentShader,e.refraction=(t.refraction||!!t.refractionMap)&&(t.useDynamicRefraction||!!e.reflectionSource),e.refractionTint=t.refraction!==1?1:0,e.useDynamicRefraction=t.useDynamicRefraction,e.refractionIndexTint=t.refractionIndex!==1/1.5?1:0,e.thicknessTint=t.useDynamicRefraction&&t.thickness!==1?1:0,e.useMetalness=t.useMetalness,e.specularEncoding=t.specularEncoding||"linear",e.sheenEncoding=t.sheenEncoding||"linear",e.enableGGXSpecular=t.enableGGXSpecular,e.msdf=!!t.msdfMap,e.msdfTextAttribute=!!t.msdfTextAttribute,e.twoSidedLighting=t.twoSidedLighting,e.pixelSnap=t.pixelSnap,e.aoMapUv=t.aoUvSet,e.diffuseDetail=!!t.diffuseMap,e.normalDetail=!!t.normalMap,e.diffuseDetailMode=t.diffuseDetailMode,e.detailModes=!!e.diffuseDetail,e.clearCoat=!!t.clearCoat,e.clearCoatTint=t.clearCoat!==1?1:0,e.clearCoatGlossiness=!!t.clearCoatGlossiness,e.clearCoatGlossTint=t.clearCoatGlossiness!==1?1:0,e.iridescence=t.useIridescence&&t.iridescence!==0,e.iridescenceTint=t.iridescence!==1?1:0,e.sheen=t.useSheen,e.sheenTint=t.useSheen&&Fa(t.sheen)?2:0,e.sheenGlossinessTint=1}_updateEnvOptions(e,t,s){e.fog=t.useFog?s.fog:"none",e.gamma=t.useGammaTonemap?s.gammaCorrection:pc,e.toneMap=t.useGammaTonemap?s.toneMapping:-1,e.fixSeams=t.cubeMap?t.cubeMap.fixCubemapSeams:!1;const i=t.shadingModel===Ns;let n=!1;if(t.envAtlas&&t.cubeMap&&!i?(e.reflectionSource="envAtlasHQ",e.reflectionEncoding=t.envAtlas.encoding):t.envAtlas&&!i?(e.reflectionSource="envAtlas",e.reflectionEncoding=t.envAtlas.encoding):t.cubeMap?(e.reflectionSource="cubeMap",e.reflectionEncoding=t.cubeMap.encoding):t.sphereMap?(e.reflectionSource="sphereMap",e.reflectionEncoding=t.sphereMap.encoding):t.useSkybox&&s.envAtlas&&s.skybox&&!i?(e.reflectionSource="envAtlasHQ",e.reflectionEncoding=s.envAtlas.encoding,n=!0):t.useSkybox&&s.envAtlas&&!i?(e.reflectionSource="envAtlas",e.reflectionEncoding=s.envAtlas.encoding,n=!0):t.useSkybox&&s.skybox?(e.reflectionSource="cubeMap",e.reflectionEncoding=s.skybox.encoding,n=!0):(e.reflectionSource=null,e.reflectionEncoding=null),t.ambientSH&&!i)e.ambientSource="ambientSH",e.ambientEncoding=null;else{const r=t.envAtlas||(t.useSkybox&&s.envAtlas?s.envAtlas:null);r&&!i?(e.ambientSource="envAtlas",e.ambientEncoding=r.encoding):(e.ambientSource="constant",e.ambientEncoding=null)}e.skyboxIntensity=n&&(s.skyboxIntensity!==1||s.physicalUnits),e.useCubeMapRotation=n&&s.skyboxRotation&&!s.skyboxRotation.equals(ee.IDENTITY)}_updateLightOptions(e,t,s,i,n){if(e.lightMap=!1,e.lightMapChannel="",e.lightMapUv=0,e.lightMapTransform=0,e.lightMapWithoutAmbient=!1,e.dirLightMap=!1,s&&(e.noShadow=(s&_c)!==0,s&No&&(e.lightMapEncoding="rgbm",e.lightMap=!0,e.lightMapChannel="rgb",e.lightMapUv=1,e.lightMapTransform=0,e.lightMapWithoutAmbient=!t.lightMap,s&fd&&(e.dirLightMap=!0),s&pd&&(e.lightMapWithoutAmbient=!1))),t.useLighting){const r=[],a=s?s>>16:fs;e.lightMaskDynamic=!!(a&fs),i&&(this._collectLights(ie,i[ie],r,a),this._collectLights(ue,i[ue],r,a,n),this._collectLights(pe,i[pe],r,a,n)),e.lights=r}else e.lights=[];e.lights.length===0&&(e.noShadow=!0)}_updateTexOptions(e,t,s,i,n,r,a,o){const h=s+"Map",c=s+"VertexColor",d=s+"VertexColorChannel",u=h+"Channel",f=h+"Transform",p=h+"Uv",_=h+"Identifier";s!=="light"&&(e[h]=!1,e[u]="",e[f]=0,e[p]=0,e[_]=void 0),e[c]=!1,e[d]="";const m=s==="opacity";if(!(m&&t.blendType===Vt&&t.alphaTest===0&&!t.alphaToCoverage)&&(!a||m)&&(s!=="height"&&t[c]&&r&&(e[c]=t[c],e[d]=t[d],e.vertexColors=!0),t[h])){let g=!0;if(t[p]===0&&!i&&(g=!1),t[p]===1&&!n&&(g=!1),g){const w=t[h].id;let v=o[w];v===void 0&&(o[w]=s,v=s),e[h]=!!t[h],e[_]=v,e[f]=this._getMapTransformID(t.getUniform(f),t[p]),e[u]=t[u],e[p]=t[p]}}}_collectLights(e,t,s,i,n){for(let r=0;r<t.length;r++){const a=t[r];if(a.enabled&&a.mask&i){if(e!==ie&&a.isStatic)continue;s.push(a)}}if(n)for(let r=0;r<n.length;r++){const a=n[r];a._type===e&&s.push(a)}}_getMapTransformID(e,t){if(!e)return 0;let s=this._mapXForms[t];s||(s=[],this._mapXForms[t]=s);for(let i=0;i<s.length;i++)if(Nu(s[i][0].value,e[0].value)&&Nu(s[i][1].value,e[1].value))return i+1;return s.push(e)}}function $i(){return $i=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(l[s]=t[s])}return l},$i.apply(this,arguments)}function Ue(l,e=!0){const t={};return t[`${l}Map`]="texture",e&&(t[`${l}MapChannel`]="string"),t[`${l}MapUv`]="number",t[`${l}MapTiling`]="vec2",t[`${l}MapOffset`]="vec2",t[`${l}MapRotation`]="number",t}const Yn=$i({name:"string",chunks:"chunks",mappingFormat:"string",_engine:"boolean",ambient:"rgb",ambientTint:"boolean",aoVertexColor:"boolean",aoVertexColorChannel:"string"},Ue("ao"),{diffuse:"rgb",diffuseTint:"boolean",diffuseVertexColor:"boolean",diffuseVertexColorChannel:"string"},Ue("diffuse"),Ue("diffuseDetail"),{diffuseDetailMode:"string",specular:"rgb",specularTint:"boolean",specularVertexColor:"boolean",specularVertexColorChannel:"string"},Ue("specular"),{occludeSpecular:"enum:occludeSpecular",specularityFactor:"number",specularityFactorTint:"boolean",specularityFactorVertexColor:"boolean",specularityFactorVertexColorChannel:"string"},Ue("specularityFactor"),{useMetalness:"boolean",metalness:"number",enableGGXSpecular:"boolean",anisotropy:"number",metalnessTint:"boolean",metalnessVertexColor:"boolean",metalnessVertexColorChannel:"string"},Ue("metalness"),{useMetalnessSpecularColor:"boolean",conserveEnergy:"boolean",shininess:"number",glossVertexColor:"boolean",glossVertexColorChannel:"string"},Ue("gloss"),{clearCoat:"number",clearCoatVertexColor:"boolean",clearCoatVertexColorChannel:"string"},Ue("clearCoat"),{clearCoatGlossiness:"number",clearCoatGlossVertexColor:"boolean",clearCoatGlossVertexColorChannel:"string"},Ue("clearCoatGloss"),{clearCoatBumpiness:"number"},Ue("clearCoatNormal",!1),{useSheen:"boolean",sheen:"rgb"},Ue("sheen"),{sheenTint:"boolean",sheenVertexColor:"boolean",sheenVertexColorChannel:"string",sheenGloss:"number"},Ue("sheenGloss"),{sheenGlossTint:"boolean",sheenGlossVertexColor:"boolean",sheenGlossVertexColorChannel:"string",fresnelModel:"number",emissive:"rgb",emissiveTint:"boolean",emissiveVertexColor:"boolean",emissiveVertexColorChannel:"string"},Ue("emissive"),{emissiveIntensity:"number"},Ue("normal",!1),{bumpiness:"number"},Ue("normalDetail",!1),{normalDetailMapBumpiness:"number"},Ue("height"),{heightMapFactor:"number",alphaToCoverage:"boolean",alphaTest:"number",alphaFade:"number",opacity:"number",opacityVertexColor:"boolean",opacityVertexColorChannel:"string"},Ue("opacity"),{opacityFadesSpecular:"boolean",reflectivity:"number",refraction:"number"},Ue("refraction"),{refractionTint:"boolean",refractionVertexColor:"boolean",refractionVertexColorChannel:"string",refractionIndex:"number",thickness:"number"},Ue("thickness"),{thicknessTint:"boolean",thicknessVertexColor:"boolean",thicknessVertexColorChannel:"string",attenuation:"rgb",attenuationDistance:"number",useDynamicRefraction:"boolean",sphereMap:"texture",cubeMap:"cubemap",cubeMapProjection:"number",cubeMapProjectionBox:"boundingbox",useIridescence:"boolean",iridescence:"number"},Ue("iridescence"),{iridescenceTint:"boolean",iridescenceVertexColor:"boolean",iridescenceVertexColorChannel:"string",iridescenceThicknessMin:"number",iridescenceThicknessMax:"number"},Ue("iridescenceThickness"),{iridescenceThicknessTint:"boolean",iridescenceThicknessVertexColor:"boolean",iridescenceThicknessVertexColorChannel:"string",iridescenceRefractionIndex:"number",lightVertexColor:"boolean",lightVertexColorChannel:"string"},Ue("light"),{depthTest:"boolean",depthFunc:"enum:depthFunc",depthWrite:"boolean",depthBias:"number",slopeDepthBias:"number",cull:"enum:cull",blendType:"enum:blendType",shadingModel:"enum:shadingModel",useFog:"boolean",useLighting:"boolean",useSkybox:"boolean",useGammaTonemap:"boolean",envAtlas:"texture"}),Fl=[];for(const l in Yn)Yn[l]==="texture"&&Fl.push(l);const vd=[];for(const l in Yn)Yn[l]==="cubemap"&&vd.push(l);const bw={aoMapVertexColor:"boolean",diffuseMapTint:"boolean",diffuseMapVertexColor:"boolean",emissiveMapTint:"boolean",emissiveMapVertexColor:"boolean",glossMapVertexColor:"boolean",metalnessMapVertexColor:"boolean",opacityMapVertexColor:"boolean",specularAntialias:"boolean",specularMapTint:"boolean",specularMapVertexColor:"boolean"},ho={},Pm={};let or=new Set;class is extends gi{constructor(){super(),this._dirtyShader=!0,this._assetReferences={},this._activeParams=new Set,this._activeLightingParams=new Set,this.shaderOptBuilder=new Sw,this.reset()}reset(){Object.keys(ho).forEach(e=>{this[`_${e}`]=ho[e].value()}),this._chunks={},this._uniformCache={}}set shader(e){}get shader(){return null}set chunks(e){this._dirtyShader=!0,this._chunks=e}get chunks(){return this._dirtyShader=!0,this._chunks}copy(e){super.copy(e),Object.keys(ho).forEach(t=>{this[t]=e[t]});for(const t in e._chunks)e._chunks.hasOwnProperty(t)&&(this._chunks[t]=e._chunks[t]);return this}_setParameter(e,t){or.add(e),this.setParameter(e,t)}_setParameters(e){e.forEach(t=>{this._setParameter(t.name,t.value)})}_processParameters(e){const t=this[e];t.forEach(s=>{or.has(s)||delete this.parameters[s]}),this[e]=or,or=t,or.clear()}_updateMap(e){const t=e+"Map",s=this[t];if(s){this._setParameter("texture_"+t,s);const i=t+"Transform",n=this.getUniform(i);n&&this._setParameters(n)}}_allocUniform(e,t){let s=this._uniformCache[e];return s||(s=t(),this._uniformCache[e]=s),s}getUniform(e,t,s){return Pm[e](this,t,s)}updateUniforms(e,t){const s=n=>this.getUniform(n,e,t);if(this._setParameter("material_ambient",s("ambient")),(!this.diffuseMap||this.diffuseTint)&&this._setParameter("material_diffuse",s("diffuse")),!this.useMetalness)(!this.specularMap||this.specularTint)&&this._setParameter("material_specular",s("specular"));else if((!this.metalnessMap||this.metalness<1)&&this._setParameter("material_metalness",this.metalness),(!this.specularMap||this.specularTint)&&this._setParameter("material_specular",s("specular")),(!this.specularityFactorMap||this.specularityFactorTint)&&this._setParameter("material_specularityFactor",this.specularityFactor),(!this.sheenMap||this.sheenTint)&&this._setParameter("material_sheen",s("sheen")),(!this.sheenGlossMap||this.sheenGlossTint)&&this._setParameter("material_sheenGloss",this.sheenGloss),this.refractionIndex!==1/1.5){const n=1/this.refractionIndex,r=(n-1)/(n+1);this._setParameter("material_f0",r*r)}else this._setParameter("material_f0",.04);this.enableGGXSpecular&&this._setParameter("material_anisotropy",this.anisotropy),this.clearCoat>0&&(this._setParameter("material_clearCoat",this.clearCoat),this._setParameter("material_clearCoatGlossiness",this.clearCoatGlossiness),this._setParameter("material_clearCoatBumpiness",this.clearCoatBumpiness)),this._setParameter("material_shininess",s("shininess")),(!this.emissiveMap||this.emissiveTint)&&this._setParameter("material_emissive",s("emissive")),this.emissiveIntensity!==1&&this._setParameter("material_emissiveIntensity",this.emissiveIntensity),this.refraction>0&&(this._setParameter("material_refraction",this.refraction),this._setParameter("material_refractionIndex",this.refractionIndex)),this.useDynamicRefraction&&(this._setParameter("material_thickness",this.thickness),this._setParameter("material_attenuation",s("attenuation")),this._setParameter("material_invAttenuationDistance",this.attenuationDistance===0?0:1/this.attenuationDistance)),this.useIridescence&&(this._setParameter("material_iridescence",this.iridescence),this._setParameter("material_iridescenceRefractionIndex",this.iridescenceRefractionIndex),this._setParameter("material_iridescenceThicknessMin",this.iridescenceThicknessMin),this._setParameter("material_iridescenceThicknessMax",this.iridescenceThicknessMax)),this._setParameter("material_opacity",this.opacity),this.opacityFadesSpecular===!1&&this._setParameter("material_alphaFade",this.alphaFade),this.occludeSpecular&&this._setParameter("material_occludeSpecularIntensity",this.occludeSpecularIntensity),this.cubeMapProjection===f0&&this._setParameter(s("cubeMapProjectionBox"));for(const n in Vn)this._updateMap(n);this.ambientSH&&this._setParameter("ambientSH[0]",this.ambientSH),this.normalMap&&this._setParameter("material_bumpiness",this.bumpiness),this.normalMap&&this.normalDetailMap&&this._setParameter("material_normalDetailMapBumpiness",this.normalDetailMapBumpiness),this.heightMap&&this._setParameter("material_heightMapFactor",s("heightMapFactor"));const i=this.shadingModel===Ns;this.envAtlas&&this.cubeMap&&!i?(this._setParameter("texture_envAtlas",this.envAtlas),this._setParameter("texture_cubeMap",this.cubeMap)):this.envAtlas&&!i?this._setParameter("texture_envAtlas",this.envAtlas):this.cubeMap?this._setParameter("texture_cubeMap",this.cubeMap):this.sphereMap&&this._setParameter("texture_sphereMap",this.sphereMap),this._setParameter("material_reflectivity",this.reflectivity),this._processParameters("_activeParams"),this._dirtyShader&&this.clearVariants()}updateEnvUniforms(e,t){const s=this.shadingModel===Ns;!(this.envAtlas&&!s||this.cubeMap||this.sphereMap)&&this.useSkybox&&(t.envAtlas&&t.skybox&&!s?(this._setParameter("texture_envAtlas",t.envAtlas),this._setParameter("texture_cubeMap",t.skybox)):t.envAtlas&&!s?this._setParameter("texture_envAtlas",t.envAtlas):t.skybox&&this._setParameter("texture_cubeMap",t.skybox)),this._processParameters("_activeLightingParams")}getShaderVariant(e,t,s,i,n,r,a,o){this.updateEnvUniforms(e,t);const h=n===Qt||n===jn||mt.isShadow(n);let c=h?ch.optionsContextMin:ch.optionsContext;h?this.shaderOptBuilder.updateMinRef(c,t,this,s,i,n,r):this.shaderOptBuilder.updateRef(c,t,this,s,i,n,r),this.onUpdateShader&&(c=this.onUpdateShader(c));const d=new yd(a,o),u=en(e);u.register("standard",ch);const f=u.getProgram("standard",c,d);return this._dirtyShader=!1,f}destroy(){for(const e in this._assetReferences)this._assetReferences[e]._unbind();this._assetReferences=null,super.destroy()}}is.TEXTURE_PARAMETERS=Fl;is.CUBEMAP_PARAMETERS=vd;const Ol=(l,e)=>{Pm[l]=e},Sd=(l,e,t,s)=>{Object.defineProperty(is.prototype,l,{get:s||function(){return this[`_${l}`]},set:t}),ho[l]={value:e}},ww=l=>{const e=`_${l.name}`,t=l.dirtyShaderFunc||(()=>!0),s=function(n){const r=this[e];r!==n&&(this._dirtyShader=this._dirtyShader||t(r,n),this[e]=n)};Sd(l.name,()=>l.defaultValue,s,l.getterFunc)},Tw=l=>{const e=`_${l.name}`,t=l.dirtyShaderFunc||(()=>!0),s=function(n){const r=this[e];r.equals(n)||(this._dirtyShader=this._dirtyShader||t(r,n),this[e]=r.copy(n))};Sd(l.name,()=>l.defaultValue.clone(),s,l.getterFunc)},Mt=l=>l.defaultValue&&l.defaultValue.clone?Tw(l):ww(l);function Be(l,e,t,s,i,n){Vn[l]=t,Mt({name:`${l}Map`,defaultValue:null,dirtyShaderFunc:(c,d)=>!!c!=!!d||c&&(c.type!==d.type||c.fixCubemapSeams!==d.fixCubemapSeams||c.format!==d.format)}),Mt({name:`${l}MapTiling`,defaultValue:new V(1,1)}),Mt({name:`${l}MapOffset`,defaultValue:new V(0,0)}),Mt({name:`${l}MapRotation`,defaultValue:0}),Mt({name:`${l}MapUv`,defaultValue:e}),t>0&&Mt({name:`${l}MapChannel`,defaultValue:s||(t>1?"rgb":"g")}),i&&(Mt({name:`${l}VertexColor`,defaultValue:!1}),t>0&&Mt({name:`${l}VertexColorChannel`,defaultValue:s||(t>1?"rgb":"g")})),n&&Mt({name:`${l}Mode`,defaultValue:p0});const r=`${l}MapTiling`,a=`${l}MapOffset`,o=`${l}MapRotation`,h=`${l}MapTransform`;Ol(h,(c,d,u)=>{const f=c[r],p=c[a],_=c[o];if(f.x===1&&f.y===1&&p.x===0&&p.y===0&&_===0)return null;const m=c._allocUniform(h,()=>[{name:`texture_${h}0`,value:new Float32Array(3)},{name:`texture_${h}1`,value:new Float32Array(3)}]),g=Math.cos(_*k.DEG_TO_RAD),w=Math.sin(_*k.DEG_TO_RAD),v=m[0].value;v[0]=g*f.x,v[1]=-w*f.y,v[2]=p.x;const y=m[1].value;return y[0]=w*f.x,y[1]=g*f.y,y[2]=1-f.y-p.y,m})}function ln(l,e){Mt({name:l,defaultValue:e,getterFunc:function(){return this._dirtyShader=!0,this[`_${l}`]}}),Ol(l,(t,s,i)=>{const n=t._allocUniform(l,()=>new Float32Array(3)),r=t[l];return t.useGammaTonemap&&i.gammaCorrection?(n[0]=Math.pow(r.r,2.2),n[1]=Math.pow(r.g,2.2),n[2]=Math.pow(r.b,2.2)):(n[0]=r.r,n[1]=r.g,n[2]=r.b),n})}function Ee(l,e,t){Mt({name:l,defaultValue:e,dirtyShaderFunc:(s,i)=>(s===0||s===1)!=(i===0||i===1)}),Ol(l,t)}function lr(l,e){Mt({name:l,defaultValue:null,dirtyShaderFunc:(t,s)=>!!t==!!s}),Ol(l,e)}function xe(l,e){Mt({name:l,defaultValue:e})}function Cw(){ln("ambient",new G(.7,.7,.7)),ln("diffuse",new G(1,1,1)),ln("specular",new G(0,0,0)),ln("emissive",new G(0,0,0)),ln("sheen",new G(1,1,1)),ln("attenuation",new G(1,1,1)),Ee("emissiveIntensity",1),Ee("specularityFactor",1),Ee("sheenGloss",0),Ee("shininess",25,(s,i,n)=>s.shadingModel===Ns?Math.pow(2,s.shininess*.01*11):s.shininess*.01),Ee("heightMapFactor",1,(s,i,n)=>s.heightMapFactor*.025),Ee("opacity",1),Ee("alphaFade",1),Ee("alphaTest",0),Ee("bumpiness",1),Ee("normalDetailMapBumpiness",1),Ee("reflectivity",1),Ee("occludeSpecularIntensity",1),Ee("refraction",0),Ee("refractionIndex",1/1.5),Ee("thickness",0),Ee("attenuationDistance",0),Ee("metalness",1),Ee("anisotropy",0),Ee("clearCoat",0),Ee("clearCoatGlossiness",1),Ee("clearCoatBumpiness",1),Ee("aoUvSet",0,null),Ee("iridescence",0),Ee("iridescenceRefractionIndex",1/1.5),Ee("iridescenceThicknessMin",0),Ee("iridescenceThicknessMax",0),lr("ambientSH"),lr("cubeMapProjectionBox",(s,i,n)=>{const r=s._allocUniform("cubeMapProjectionBox",()=>[{name:"envBoxMin",value:new Float32Array(3)},{name:"envBoxMax",value:new Float32Array(3)}]),a=s.cubeMapProjectionBox.getMin(),o=r[0].value;o[0]=a.x,o[1]=a.y,o[2]=a.z;const h=s.cubeMapProjectionBox.getMax(),c=r[1].value;return c[0]=h.x,c[1]=h.y,c[2]=h.z,r}),xe("ambientTint",!1),xe("diffuseTint",!1),xe("specularTint",!1),xe("specularityFactorTint",!1),xe("emissiveTint",!1),xe("fastTbn",!1),xe("useMetalness",!1),xe("useMetalnessSpecularColor",!1),xe("useSheen",!1),xe("enableGGXSpecular",!1),xe("occludeDirect",!1),xe("normalizeNormalMap",!0),xe("conserveEnergy",!0),xe("opacityFadesSpecular",!0),xe("occludeSpecular",Zr),xe("shadingModel",Ll),xe("fresnelModel",hd),xe("useDynamicRefraction",!1),xe("cubeMapProjection",u0),xe("customFragmentShader",null),xe("forceFragmentPrecision",null),xe("useFog",!0),xe("useLighting",!0),xe("useGammaTonemap",!0),xe("useSkybox",!0),xe("forceUv1",!1),xe("pixelSnap",!1),xe("twoSidedLighting",!1),xe("nineSlicedMode",void 0),xe("msdfTextAttribute",!1),xe("useIridescence",!1),Be("diffuse",0,3,"",!0),Be("specular",0,3,"",!0),Be("emissive",0,3,"",!0),Be("thickness",0,1,"",!0),Be("specularityFactor",0,1,"",!0),Be("normal",0,-1,"",!1),Be("metalness",0,1,"",!0),Be("gloss",0,1,"",!0),Be("opacity",0,1,"a",!0),Be("refraction",0,1,"",!0),Be("height",0,1,"",!1),Be("ao",0,1,"",!0),Be("light",1,3,"",!0),Be("msdf",0,3,"",!1),Be("diffuseDetail",0,3,"",!1,!0),Be("normalDetail",0,-1,"",!1),Be("clearCoat",0,1,"",!0),Be("clearCoatGloss",0,1,"",!0),Be("clearCoatNormal",0,-1,"",!1),Be("sheen",0,3,"",!0),Be("sheenGloss",0,1,"",!0),Be("iridescence",0,1,"",!0),Be("iridescenceThickness",0,1,"",!0),lr("cubeMap"),lr("sphereMap"),lr("envAtlas");const l=function(){return this._prefilteredCubemaps},e=function(i){const n=this._prefilteredCubemaps;i=i||[];let r=!1,a=!0;for(let o=0;o<6;++o){const h=i[o]||null;n[o]!==h&&(n[o]=h,r=!0),a=a&&!!n[o]}r&&(a?this.envAtlas=Mm.generatePrefilteredAtlas(n,{target:this.envAtlas}):this.envAtlas&&(this.envAtlas.destroy(),this.envAtlas=null),this._dirtyShader=!0)},t=[null,null,null,null,null,null];Sd("prefilteredCubemaps",()=>t.slice(),e,l)}Cw();const Js=new H,hn=new H,Vu=new Wt,Qs=new H;let wi;const Gu=new H().setScale(1,-1,1),Wu=new H,Hu=new H,ei=new b,Oa=new b,Ba=new b,Aw=new G(254/255,254/255,254/255,254/255),uh=new dl,hr=[0,0,0,0];let cn,xs,Xu,dn,un,fh=0;const ti={drawCalls:[],isNewMaterial:[],lightMaskChanged:[]},fn=new Set;class Mw{constructor(e){this.clustersDebugRendered=!1,this.device=e;const t=this.device;this.scene=null,this._shadowDrawCalls=0,this._forwardDrawCalls=0,this._skinDrawCalls=0,this._numDrawCallsCulled=0,this._instancedDrawCalls=0,this._camerasRendered=0,this._materialSwitches=0,this._shadowMapUpdates=0,this._shadowMapTime=0,this._depthMapTime=0,this._forwardTime=0,this._cullTime=0,this._sortTime=0,this._skinTime=0,this._morphTime=0,this._layerCompositionUpdateTime=0,this._lightClustersTime=0,this._lightClusters=0,this.lightTextureAtlas=new Vb(t),this._shadowRenderer=new Dl(this,this.lightTextureAtlas),this._cookieRenderer=new hi(t,this.lightTextureAtlas);const s=t.scope;this.projId=s.resolve("matrix_projection"),this.projSkyboxId=s.resolve("matrix_projectionSkybox"),this.viewId=s.resolve("matrix_view"),this.viewId3=s.resolve("matrix_view3"),this.viewInvId=s.resolve("matrix_viewInverse"),this.viewProjId=s.resolve("matrix_viewProjection"),this.flipYId=s.resolve("projectionFlipY"),this.viewPos=new Float32Array(3),this.viewPosId=s.resolve("view_position"),this.nearClipId=s.resolve("camera_near"),this.farClipId=s.resolve("camera_far"),this.cameraParamsId=s.resolve("camera_params"),this.tbnBasis=s.resolve("tbnBasis"),this.fogColorId=s.resolve("fog_color"),this.fogStartId=s.resolve("fog_start"),this.fogEndId=s.resolve("fog_end"),this.fogDensityId=s.resolve("fog_density"),this.modelMatrixId=s.resolve("matrix_model"),this.normalMatrixId=s.resolve("matrix_normal"),this.poseMatrixId=s.resolve("matrix_pose[0]"),this.boneTextureId=s.resolve("texture_poseMap"),this.boneTextureSizeId=s.resolve("texture_poseMapSize"),this.morphWeightsA=s.resolve("morph_weights_a"),this.morphWeightsB=s.resolve("morph_weights_b"),this.morphPositionTex=s.resolve("morphPositionTex"),this.morphNormalTex=s.resolve("morphNormalTex"),this.morphTexParams=s.resolve("morph_tex_params"),this.alphaTestId=s.resolve("alpha_ref"),this.opacityMapId=s.resolve("texture_opacityMap"),this.ambientId=s.resolve("light_globalAmbient"),this.exposureId=s.resolve("exposure"),this.skyboxIntensityId=s.resolve("skyboxIntensity"),this.cubeMapRotationMatrixId=s.resolve("cubeMapRotationMatrix"),this.lightColorId=[],this.lightDir=[],this.lightDirId=[],this.lightShadowMapId=[],this.lightShadowMatrixId=[],this.lightShadowParamsId=[],this.lightShadowIntensity=[],this.lightRadiusId=[],this.lightPos=[],this.lightPosId=[],this.lightWidth=[],this.lightWidthId=[],this.lightHeight=[],this.lightHeightId=[],this.lightInAngleId=[],this.lightOutAngleId=[],this.lightCookieId=[],this.lightCookieIntId=[],this.lightCookieMatrixId=[],this.lightCookieOffsetId=[],this.shadowMatrixPaletteId=[],this.shadowCascadeDistancesId=[],this.shadowCascadeCountId=[],this.screenSizeId=s.resolve("uScreenSize"),this._screenSize=new Float32Array(4),this.twoSidedLightingNegScaleFactorId=s.resolve("twoSidedLightingNegScaleFactor"),this.fogColor=new Float32Array(3),this.ambientColor=new Float32Array(3),this.cameraParams=new Float32Array(4),this.viewUniformFormat=null,this.viewBindGroupFormat=null}destroy(){this._shadowRenderer.destroy(),this._shadowRenderer=null,this._cookieRenderer.destroy(),this._cookieRenderer=null,this.lightTextureAtlas.destroy(),this.lightTextureAtlas=null}sortCompare(e,t){if(e.layer===t.layer){if(e.drawOrder&&t.drawOrder)return e.drawOrder-t.drawOrder;if(e.zdist&&t.zdist)return t.zdist-e.zdist;if(e.zdist2&&t.zdist2)return e.zdist2-t.zdist2}return t._key[Ls]-e._key[Ls]}sortCompareMesh(e,t){if(e.layer===t.layer){if(e.drawOrder&&t.drawOrder)return e.drawOrder-t.drawOrder;if(e.zdist&&t.zdist)return t.zdist-e.zdist}return dn=e._key[Ls],un=t._key[Ls],dn===un&&e.mesh&&t.mesh?t.mesh.id-e.mesh.id:un-dn}depthSortCompare(e,t){return dn=e._key[gc],un=t._key[gc],dn===un&&e.mesh&&t.mesh?t.mesh.id-e.mesh.id:un-dn}updateCameraFrustum(e){if(e.xr&&e.xr.views.length){const t=e.xr.views[0];Qs.mul2(t.projMat,t.viewOffMat),e.frustum.setFromMat4(Qs);return}if(wi=e.projectionMatrix,e.calculateProjection&&e.calculateProjection(wi,Ta),e.calculateTransform)e.calculateTransform(Js,Ta);else{const t=e._node.getPosition(),s=e._node.getRotation();Js.setTRS(t,s,b.ONE),this.viewInvId.setValue(Js.data)}hn.copy(Js).invert(),Qs.mul2(wi,hn),e.frustum.setFromMat4(Qs)}initViewBindGroupFormat(){this.device.supportsUniformBuffers&&!this.viewUniformFormat&&(this.viewUniformFormat=new Eb(this.device,[new Pb("matrix_viewProjection",Ro)]),this.viewBindGroupFormat=new Lb(this.device,[new Rb(Qp,ty|eu)],[new Ib("lightsTextureFloat",eu,Xp,qg)]))}setCameraUniforms(e,t,s){let i,n=1;if(e.xr&&e.xr.session){const o=e._node.parent;o&&(i=o.getWorldTransform());const h=e.xr.views;n=h.length;for(let c=0;c<n;c++){const d=h[c];o?(d.viewInvOffMat.mul2(i,d.viewInvMat),d.viewOffMat.copy(d.viewInvOffMat).invert()):(d.viewInvOffMat.copy(d.viewInvMat),d.viewOffMat.copy(d.viewMat)),d.viewMat3.setFromMat4(d.viewOffMat),d.projViewOffMat.mul2(d.projMat,d.viewOffMat),d.position[0]=d.viewInvOffMat.data[12],d.position[1]=d.viewInvOffMat.data[13],d.position[2]=d.viewInvOffMat.data[14],e.frustum.setFromMat4(d.projViewOffMat)}}else{if(wi=e.projectionMatrix,e.calculateProjection&&e.calculateProjection(wi,Ta),this.projId.setValue(wi.data),this.projSkyboxId.setValue(e.getProjectionMatrixSkybox().data),e.calculateTransform)e.calculateTransform(Js,Ta);else{const o=e._node.getPosition(),h=e._node.getRotation();Js.setTRS(o,h,b.ONE)}this.viewInvId.setValue(Js.data),hn.copy(Js).invert(),this.viewId.setValue(hn.data),Vu.setFromMat4(hn),this.viewId3.setValue(Vu.data),Qs.mul2(wi,hn),t&&t.flipY?(Wu.mul2(Gu,Qs),Hu.mul2(Gu,e.getProjectionMatrixSkybox()),this.viewProjId.setValue(Wu.data),this.projSkyboxId.setValue(Hu.data)):(this.viewProjId.setValue(Qs.data),this.projSkyboxId.setValue(e.getProjectionMatrixSkybox().data)),this.flipYId.setValue(t!=null&&t.flipY?-1:1),this.dispatchViewPos(e._node.getPosition()),e.frustum.setFromMat4(Qs)}this.tbnBasis.setValue(t&&t.flipY?-1:1),this.nearClipId.setValue(e._nearClip),this.farClipId.setValue(e._farClip),this.scene.physicalUnits?this.exposureId.setValue(e.getExposure()):this.exposureId.setValue(this.scene.exposure);const r=e._nearClip,a=e._farClip;this.cameraParams[0]=1/a,this.cameraParams[1]=a,this.cameraParams[2]=r,this.cameraParams[3]=e.projection===Un?1:0,this.cameraParamsId.setValue(this.cameraParams),this.device.supportsUniformBuffers&&this.setupViewUniformBuffers(s,n)}setCamera(e,t,s,i=null){this.setCameraUniforms(e,t,i),this.clearView(e,t,s,!1)}setupViewUniformBuffers(e,t){if(e){const s=this.device;for(;e.viewBindGroups.length<t;){const n=new Tm(s,this.viewUniformFormat),r=new wm(s,this.viewBindGroupFormat,n);e.viewBindGroups.push(r)}const i=e.viewBindGroups[0];i.defaultUniformBuffer.update(),i.update(),s.setBindGroup(ac,i)}}setupViewport(e,t){const s=this.device,i=t?t.width:s.width,n=t?t.height:s.height,r=e.rect;let a=Math.floor(r.x*i),o=Math.floor(r.y*n),h=Math.floor(r.z*i),c=Math.floor(r.w*n);if(s.setViewport(a,o,h,c),e._scissorRectClear){const d=e.scissorRect;a=Math.floor(d.x*i),o=Math.floor(d.y*n),h=Math.floor(d.z*i),c=Math.floor(d.w*n)}s.setScissor(a,o,h,c)}clear(e,t){this.device.clear({color:[t._clearColor.r,t._clearColor.g,t._clearColor.b,t._clearColor.a],depth:t._clearDepth,stencil:t._clearStencil,flags:(e.clearColor?Ar:0)|(e.clearDepth?Mr:0)|(e.clearStencil?vo:0)})}clearView(e,t,s,i){const n=this.device;if(n.setRenderTarget(t),n.updateBegin(),i&&(n.setColorWrite(!0,!0,!0,!0),n.setDepthWrite(!0)),this.setupViewport(e,t),s){const r=e._clearOptions;n.clear(r||{color:[e._clearColor.r,e._clearColor.g,e._clearColor.b,e._clearColor.a],depth:e._clearDepth,flags:(e._clearColorBuffer?Ar:0)|(e._clearDepthBuffer?Mr:0)|(e._clearStencilBuffer?vo:0),stencil:e._clearStencil})}}dispatchGlobalLights(e){if(this.ambientColor[0]=e.ambientLight.r,this.ambientColor[1]=e.ambientLight.g,this.ambientColor[2]=e.ambientLight.b,e.gammaCorrection)for(let t=0;t<3;t++)this.ambientColor[t]=Math.pow(this.ambientColor[t],2.2);if(e.physicalUnits)for(let t=0;t<3;t++)this.ambientColor[t]*=e.ambientLuminance;this.ambientId.setValue(this.ambientColor),this.skyboxIntensityId.setValue(e.physicalUnits?e.skyboxLuminance:e.skyboxIntensity),this.cubeMapRotationMatrixId.setValue(e._skyboxRotationMat3.data)}_resolveLight(e,t){const s="light"+t;this.lightColorId[t]=e.resolve(s+"_color"),this.lightDir[t]=new Float32Array(3),this.lightDirId[t]=e.resolve(s+"_direction"),this.lightShadowMapId[t]=e.resolve(s+"_shadowMap"),this.lightShadowMatrixId[t]=e.resolve(s+"_shadowMatrix"),this.lightShadowParamsId[t]=e.resolve(s+"_shadowParams"),this.lightShadowIntensity[t]=e.resolve(s+"_shadowIntensity"),this.lightRadiusId[t]=e.resolve(s+"_radius"),this.lightPos[t]=new Float32Array(3),this.lightPosId[t]=e.resolve(s+"_position"),this.lightWidth[t]=new Float32Array(3),this.lightWidthId[t]=e.resolve(s+"_halfWidth"),this.lightHeight[t]=new Float32Array(3),this.lightHeightId[t]=e.resolve(s+"_halfHeight"),this.lightInAngleId[t]=e.resolve(s+"_innerConeAngle"),this.lightOutAngleId[t]=e.resolve(s+"_outerConeAngle"),this.lightCookieId[t]=e.resolve(s+"_cookie"),this.lightCookieIntId[t]=e.resolve(s+"_cookieIntensity"),this.lightCookieMatrixId[t]=e.resolve(s+"_cookieMatrix"),this.lightCookieOffsetId[t]=e.resolve(s+"_cookieOffset"),this.shadowMatrixPaletteId[t]=e.resolve(s+"_shadowMatrixPalette[0]"),this.shadowCascadeDistancesId[t]=e.resolve(s+"_shadowCascadeDistances[0]"),this.shadowCascadeCountId[t]=e.resolve(s+"_shadowCascadeCount")}setLTCDirectionalLight(e,t,s,i,n){this.lightPos[t][0]=i.x-s.x*n,this.lightPos[t][1]=i.y-s.y*n,this.lightPos[t][2]=i.z-s.z*n,this.lightPosId[t].setValue(this.lightPos[t]);const r=e.transformVector(new b(-.5,0,0));this.lightWidth[t][0]=r.x*n,this.lightWidth[t][1]=r.y*n,this.lightWidth[t][2]=r.z*n,this.lightWidthId[t].setValue(this.lightWidth[t]);const a=e.transformVector(new b(0,0,.5));this.lightHeight[t][0]=a.x*n,this.lightHeight[t][1]=a.y*n,this.lightHeight[t][2]=a.z*n,this.lightHeightId[t].setValue(this.lightHeight[t])}dispatchDirectLights(e,t,s,i){let n=0;const r=this.device.scope;for(let a=0;a<e.length;a++){if(!(e[a].mask&s))continue;const o=e[a],h=o._node.getWorldTransform();if(this.lightColorId[n]||this._resolveLight(r,n),this.lightColorId[n].setValue(t.gammaCorrection?o._linearFinalColor:o._finalColor),h.getY(o._direction).mulScalar(-1),o._direction.normalize(),this.lightDir[n][0]=o._direction.x,this.lightDir[n][1]=o._direction.y,this.lightDir[n][2]=o._direction.z,this.lightDirId[n].setValue(this.lightDir[n]),o.shape!==at&&this.setLTCDirectionalLight(h,n,o._direction,i._node.getPosition(),i.farClip),o.castShadows){const c=o.getRenderData(i,0),d=o._getUniformBiasValues(c);this.lightShadowMapId[n].setValue(c.shadowBuffer),this.lightShadowMatrixId[n].setValue(c.shadowMatrix.data),this.shadowMatrixPaletteId[n].setValue(o._shadowMatrixPalette),this.shadowCascadeDistancesId[n].setValue(o._shadowCascadeDistances),this.shadowCascadeCountId[n].setValue(o.numCascades),this.lightShadowIntensity[n].setValue(o.shadowIntensity);const u=o._shadowRenderParams;u.length=3,u[0]=o._shadowResolution,u[1]=d.normalBias,u[2]=d.bias,this.lightShadowParamsId[n].setValue(u)}n++}return n}setLTCPositionalLight(e,t){const s=e.transformVector(new b(-.5,0,0));this.lightWidth[t][0]=s.x,this.lightWidth[t][1]=s.y,this.lightWidth[t][2]=s.z,this.lightWidthId[t].setValue(this.lightWidth[t]);const i=e.transformVector(new b(0,0,.5));this.lightHeight[t][0]=i.x,this.lightHeight[t][1]=i.y,this.lightHeight[t][2]=i.z,this.lightHeightId[t].setValue(this.lightHeight[t])}dispatchOmniLight(e,t,s,i){const n=s._node.getWorldTransform();if(this.lightColorId[i]||this._resolveLight(t,i),this.lightRadiusId[i].setValue(s.attenuationEnd),this.lightColorId[i].setValue(e.gammaCorrection?s._linearFinalColor:s._finalColor),n.getTranslation(s._position),this.lightPos[i][0]=s._position.x,this.lightPos[i][1]=s._position.y,this.lightPos[i][2]=s._position.z,this.lightPosId[i].setValue(this.lightPos[i]),s.shape!==at&&this.setLTCPositionalLight(n,i),s.castShadows){const r=s.getRenderData(null,0);this.lightShadowMapId[i].setValue(r.shadowBuffer);const a=s._getUniformBiasValues(r),o=s._shadowRenderParams;o.length=4,o[0]=s._shadowResolution,o[1]=a.normalBias,o[2]=a.bias,o[3]=1/s.attenuationEnd,this.lightShadowParamsId[i].setValue(o),this.lightShadowIntensity[i].setValue(s.shadowIntensity)}s._cookie&&(this.lightCookieId[i].setValue(s._cookie),this.lightShadowMatrixId[i].setValue(n.data),this.lightCookieIntId[i].setValue(s.cookieIntensity))}dispatchSpotLight(e,t,s,i){const n=s._node.getWorldTransform();if(this.lightColorId[i]||this._resolveLight(t,i),this.lightInAngleId[i].setValue(s._innerConeAngleCos),this.lightOutAngleId[i].setValue(s._outerConeAngleCos),this.lightRadiusId[i].setValue(s.attenuationEnd),this.lightColorId[i].setValue(e.gammaCorrection?s._linearFinalColor:s._finalColor),n.getTranslation(s._position),this.lightPos[i][0]=s._position.x,this.lightPos[i][1]=s._position.y,this.lightPos[i][2]=s._position.z,this.lightPosId[i].setValue(this.lightPos[i]),s.shape!==at&&this.setLTCPositionalLight(n,i),n.getY(s._direction).mulScalar(-1),s._direction.normalize(),this.lightDir[i][0]=s._direction.x,this.lightDir[i][1]=s._direction.y,this.lightDir[i][2]=s._direction.z,this.lightDirId[i].setValue(this.lightDir[i]),s.castShadows){const r=s.getRenderData(null,0);this.lightShadowMapId[i].setValue(r.shadowBuffer),this.lightShadowMatrixId[i].setValue(r.shadowMatrix.data);const a=s._getUniformBiasValues(r),o=s._shadowRenderParams;o.length=4,o[0]=s._shadowResolution,o[1]=a.normalBias,o[2]=a.bias,o[3]=1/s.attenuationEnd,this.lightShadowParamsId[i].setValue(o),this.lightShadowIntensity[i].setValue(s.shadowIntensity)}if(s._cookie){if(!s.castShadows){const r=es.evalSpotCookieMatrix(s);this.lightShadowMatrixId[i].setValue(r.data)}this.lightCookieId[i].setValue(s._cookie),this.lightCookieIntId[i].setValue(s.cookieIntensity),s._cookieTransform&&(s._cookieTransformUniform[0]=s._cookieTransform.x,s._cookieTransformUniform[1]=s._cookieTransform.y,s._cookieTransformUniform[2]=s._cookieTransform.z,s._cookieTransformUniform[3]=s._cookieTransform.w,this.lightCookieMatrixId[i].setValue(s._cookieTransformUniform),s._cookieOffsetUniform[0]=s._cookieOffset.x,s._cookieOffsetUniform[1]=s._cookieOffset.y,this.lightCookieOffsetId[i].setValue(s._cookieOffsetUniform))}}dispatchLocalLights(e,t,s,i,n){let r=i;const a=this.device.scope,o=e[ue],h=o.length;for(let f=0;f<h;f++){const p=o[f];p.mask&s&&(p.isStatic||(this.dispatchOmniLight(t,a,p,r),r++))}let c=0;if(n){let f=n[c];for(;f&&f._type===ue;)this.dispatchOmniLight(t,a,f,r),r++,c++,f=n[c]}const d=e[pe],u=d.length;for(let f=0;f<u;f++){const p=d[f];p.mask&s&&(p.isStatic||(this.dispatchSpotLight(t,a,p,r),r++))}if(n){let f=n[c];for(;f&&f._type===pe;)this.dispatchSpotLight(t,a,f,r),r++,c++,f=n[c]}}cull(e,t,s){let i=0;const n=t.length,r=e.cullingMask||4294967295;if(!e.frustumCulling){for(let a=0;a<n;a++){const o=t[a];!o.visible&&!o.command||o.mask&&!(o.mask&r)||(s[i]=o,i++,o.visibleThisFrame=!0)}return i}for(let a=0;a<n;a++){const o=t[a];if(o.command)s[i]=o,i++,o.visibleThisFrame=!0;else{if(!o.visible)continue;let h=!0;if(o.mask&&!(o.mask&r))continue;o.cull&&(h=o._isVisible(e)),h&&(s[i]=o,i++,o.visibleThisFrame=!0)}}return i}cullLights(e,t){const s=this.scene.clusteredLightingEnabled,i=this.scene.physicalUnits;for(let n=0;n<t.length;n++){const r=t[n];if(r.enabled)if(r._type!==ie)if(r.getBoundingSphere(uh),e.frustum.containsSphere(uh)){r.visibleThisFrame=!0,r.usePhysicalUnits=i;const a=e.getScreenSize(uh);r.maxScreenSize=Math.max(r.maxScreenSize,a)}else s||r.castShadows&&!r.shadowMap&&(r.visibleThisFrame=!0);else r.usePhysicalUnits=this.scene.physicalUnits}}updateCpuSkinMatrices(e){fh++;const t=e.length;if(t!==0)for(let s=0;s<t;s++){const i=e[s].skinInstance;i&&(i.updateMatrices(e[s].node,fh),i._dirty=!0)}}updateGpuSkinMatrices(e){const t=e.length;for(let s=0;s<t;s++){if(!e[s].visibleThisFrame)continue;const i=e[s].skinInstance;i&&i._dirty&&(i.updateMatrixPalette(e[s].node,fh),i._dirty=!1)}}updateMorphing(e){const t=e.length;for(let s=0;s<t;s++){const i=e[s].morphInstance;i&&i._dirty&&e[s].visibleThisFrame&&i.update()}}setBaseConstants(e,t){e.setCullMode(t.cull),t.opacityMap&&(this.opacityMapId.setValue(t.opacityMap),this.alphaTestId.setValue(t.alphaTest))}setSkinning(e,t,s){t.skinInstance&&(this._skinDrawCalls++,e.supportsBoneTextures?(cn=t.skinInstance.boneTexture,this.boneTextureId.setValue(cn),hr[0]=cn.width,hr[1]=cn.height,hr[2]=1/cn.width,hr[3]=1/cn.height,this.boneTextureSizeId.setValue(hr)):this.poseMatrixId.setValue(t.skinInstance.matrixPalette))}drawInstance(e,t,s,i,n){xs=t.instancingData,xs?xs.count>0&&(this._instancedDrawCalls++,e.setVertexBuffer(xs.vertexBuffer),e.draw(s.primitive[i],xs.count)):(Xu=t.node.worldTransform,this.modelMatrixId.setValue(Xu.data),n&&this.normalMatrixId.setValue(t.node.normalMatrix.data),e.draw(s.primitive[i]))}drawInstance2(e,t,s,i){xs=t.instancingData,xs?xs.count>0&&(this._instancedDrawCalls++,e.draw(s.primitive[i],xs.count,!0)):e.draw(s.primitive[i],void 0,!0)}renderShadows(e,t){const s=this.scene.clusteredLightingEnabled;for(let i=0;i<e.length;i++){const n=e[i];if(s&&n._type!==ie){if(!n.atlasViewportAllocated)continue;n.atlasSlotUpdated&&n.shadowUpdateMode===Jr&&(n.shadowUpdateMode=Qr)}this._shadowRenderer.render(n,t)}}renderCookies(e){const t=this.lightTextureAtlas.cookieRenderTarget;for(let s=0;s<e.length;s++){const i=e[s];i.atlasViewportAllocated&&i.atlasSlotUpdated&&this._cookieRenderer.render(i,t)}}setCullMode(e,t,s){const i=s.material;let n=_t;if(e){let r=1;if(i.cull>_t&&i.cull<Dp){s.flipFaces&&(r*=-1),t&&(r*=-1);const a=s.node.worldTransform;a.getX(ei),a.getY(Oa),a.getZ(Ba),ei.cross(ei,Oa),ei.dot(Ba)<0&&(r*=-1)}r<0?n=i.cull===So?Xn:So:n=i.cull}if(this.device.setCullMode(n),n===_t&&i.cull===_t){const r=s.node.worldTransform;r.getX(ei),r.getY(Oa),r.getZ(Ba),ei.cross(ei,Oa),ei.dot(Ba)<0?this.twoSidedLightingNegScaleFactorId.setValue(-1):this.twoSidedLightingNegScaleFactorId.setValue(1)}}setVertexBuffers(e,t){e.setVertexBuffer(t.vertexBuffer)}setMorphing(e,t){if(t)if(t.morph.useTextureMorph)e.setVertexBuffer(t.morph.vertexBufferIds),this.morphPositionTex.setValue(t.texturePositions),this.morphNormalTex.setValue(t.textureNormals),this.morphTexParams.setValue(t._textureParams);else{for(let s=0;s<t._activeVertexBuffers.length;s++){const i=t._activeVertexBuffers[s];if(i){const n=Bg+(s+8);i.format.elements[0].name=n,i.format.elements[0].scopeId=e.scope.resolve(n),i.format.update(),e.setVertexBuffer(i)}}this.morphWeightsA.setValue(t._shaderMorphWeightsA),this.morphWeightsB.setValue(t._shaderMorphWeightsB)}}dispatchViewPos(e){const t=this.viewPos;t[0]=e.x,t[1]=e.y,t[2]=e.z,this.viewPosId.setValue(t)}renderForwardPrepareMaterials(e,t,s,i,n,r,a){const o=(m,g,w)=>{ti.drawCalls.push(m),ti.isNewMaterial.push(g),ti.lightMaskChanged.push(w)};ti.drawCalls.length=0,ti.isNewMaterial.length=0,ti.lightMaskChanged.length=0;const h=this.device,c=this.scene,d=r?r._lightHash:0;let u=null,f,p,_;for(let m=0;m<s;m++){const g=t[m];if(!(n&&g.mask&&!(n&g.mask)))if(g.command)o(g,!1,!1);else{g.ensureMaterial(h);const w=g.material,v=g._shaderDefs,y=g.mask;if(w&&w===u&&v!==f&&(u=null),(g.isStatic||p)&&(u=null),w!==u&&(this._materialSwitches++,w._scene=c,w.dirty&&(w.updateUniforms(h,c),w.dirty=!1),w._dirtyBlend&&(c.layers._dirtyBlend=!0)),!g._shader[a]||g._shaderDefs!==v||g._lightHash!==d){if(g.isStatic)g.updatePassShader(c,a,g._staticLightList,i,this.viewUniformFormat,this.viewBindGroupFormat);else{const T=a+"_"+v+"_"+d;g._shader[a]=w.variants[T],g._shader[a]||(g.updatePassShader(c,a,null,i,this.viewUniformFormat,this.viewBindGroupFormat),w.variants[T]=g._shader[a])}g._lightHash=d}o(g,w!==u,!u||y!==_),u=w,f=v,_=y,p=g.isStatic}}return ti}renderForwardInternal(e,t,s,i,n,r){const a=this.device,o=a.supportsUniformBuffers,h=this.scene,c=1<<i,d=t.drawCalls.length;for(let u=0;u<d;u++){const f=t.drawCalls[u];if(f.command)f.command();else{const p=t.isNewMaterial[u],_=t.lightMaskChanged[u],m=f.material;f._shaderDefs;const g=f.mask;if(p){const C=f._shader[i];if(!C.failed&&a.setShader(C),m.setParameters(a),_){const S=this.dispatchDirectLights(s[ie],h,g,e);this.dispatchLocalLights(s,h,g,S,f._staticLightList)}this.alphaTestId.setValue(m.alphaTest),a.setBlending(m.blend),m.blend&&(m.separateAlphaBlend?(a.setBlendFunctionSeparate(m.blendSrc,m.blendDst,m.blendSrcAlpha,m.blendDstAlpha),a.setBlendEquationSeparate(m.blendEquation,m.blendAlphaEquation)):(a.setBlendFunction(m.blendSrc,m.blendDst),a.setBlendEquation(m.blendEquation))),a.setColorWrite(m.redWrite,m.greenWrite,m.blueWrite,m.alphaWrite),a.setDepthWrite(m.depthWrite),m.depthWrite&&!m.depthTest?(a.setDepthFunc(Vi),a.setDepthTest(!0)):(a.setDepthFunc(m.depthFunc),a.setDepthTest(m.depthTest)),a.setAlphaToCoverage(m.alphaToCoverage),m.depthBias||m.slopeDepthBias?(a.setDepthBias(!0),a.setDepthBiasValues(m.depthBias,m.slopeDepthBias)):a.setDepthBias(!1)}this.setCullMode(e._cullFaces,r,f);const w=f.stencilFront||m.stencilFront,v=f.stencilBack||m.stencilBack;w||v?(a.setStencilTest(!0),w===v?(a.setStencilFunc(w.func,w.ref,w.readMask),a.setStencilOperation(w.fail,w.zfail,w.zpass,w.writeMask)):(w?(a.setStencilFuncFront(w.func,w.ref,w.readMask),a.setStencilOperationFront(w.fail,w.zfail,w.zpass,w.writeMask)):(a.setStencilFuncFront(Vi,0,255),a.setStencilOperationFront(Bt,Bt,Bt,255)),v?(a.setStencilFuncBack(v.func,v.ref,v.readMask),a.setStencilOperationBack(v.fail,v.zfail,v.zpass,v.writeMask)):(a.setStencilFuncBack(Vi,0,255),a.setStencilOperationBack(Bt,Bt,Bt,255)))):a.setStencilTest(!1);const y=f.mesh;if(f.setParameters(a,c),this.setVertexBuffers(a,y),this.setMorphing(a,f.morphInstance),this.setSkinning(a,f,m),o){this.modelMatrixId.setValue(f.node.worldTransform.data),this.normalMatrixId.setValue(f.node.normalMatrix.data);const C=f.getBindGroup(a,i);C.defaultUniformBuffer.update(),C.update(),a.setBindGroup(sy,C)}const T=f.renderStyle;if(a.setIndexBuffer(y.indexBuffer[T]),n&&n(f,u),e.xr&&e.xr.session&&e.xr.views.length){const C=e.xr.views;for(let S=0;S<C.length;S++){const A=C[S];a.setViewport(A.viewport.x,A.viewport.y,A.viewport.z,A.viewport.w),this.projId.setValue(A.projMat.data),this.projSkyboxId.setValue(A.projMat.data),this.viewId.setValue(A.viewOffMat.data),this.viewInvId.setValue(A.viewInvOffMat.data),this.viewId3.setValue(A.viewMat3.data),this.viewProjId.setValue(A.projViewOffMat.data),this.viewPosId.setValue(A.position),S===0?this.drawInstance(a,f,y,T,!0):this.drawInstance2(a,f,y,T),this._forwardDrawCalls++}}else this.drawInstance(a,f,y,T,!0),this._forwardDrawCalls++;u<d-1&&!t.isNewMaterial[u+1]&&m.setParameters(a,f.parameters)}}}renderForward(e,t,s,i,n,r,a,o,h){const c=this.renderForwardPrepareMaterials(e,t,s,i,r,o,n);this.renderForwardInternal(e,c,i,n,a,h),ti.length=0}updateShaders(e,t){const s=e.length;for(let i=0;i<s;i++){const n=e[i].material;if(n&&!fn.has(n)&&(fn.add(n),n.getShaderVariant!==gi.prototype.getShaderVariant)){if(t&&(!n.useLighting||n.emitter&&!n.emitter.lighting))continue;n.clearVariants()}}fn.clear()}beginFrame(e,t){const s=e._meshInstances,i=this.scene;if(i.updateShaders||t){const o=!i.updateShaders&&t;this.updateShaders(s,o),i.updateShaders=!1,i._shaderVersion++}this.updateCpuSkinMatrices(s);const n=s.length;for(let o=0;o<n;o++)s[o].visibleThisFrame=!1;const r=e._lights,a=r.length;for(let o=0;o<a;o++)r[o].beginFrame()}updateLayerComposition(e,t){const s=e.layerList.length;for(let a=0;a<s;a++)e.layerList[a]._postRenderCounter=0;const i=this.scene,n=i._shaderVersion;for(let a=0;a<s;a++){const o=e.layerList[a];o._shaderVersion=n,o._preRenderCalledForCameras=0,o._postRenderCalledForCameras=0,e.subLayerList[a]?o._postRenderCounter|=2:o._postRenderCounter|=1,o._postRenderCounterMax=o._postRenderCounter;for(let c=0;c<o.cameras.length;c++)o.instances.prepare(c);o._needsStaticPrepare&&o._staticLightHash&&!this.scene.clusteredLightingEnabled&&(o._staticPrepareDone&&(Fn.revert(o.opaqueMeshInstances),Fn.revert(o.transparentMeshInstances)),Fn.prepare(this.device,i,o.opaqueMeshInstances,o._lights),Fn.prepare(this.device,i,o.transparentMeshInstances,o._lights),e._dirty=!0,i.updateShaders=!0,o._needsStaticPrepare=!1,o._staticPrepareDone=!0)}return e._update(this.device,t)}gpuUpdate(e){this.updateGpuSkinMatrices(e),this.updateMorphing(e)}setSceneConstants(){const e=this.scene;if(this.dispatchGlobalLights(e),e.fog!==ld){if(this.fogColor[0]=e.fogColor.r,this.fogColor[1]=e.fogColor.g,this.fogColor[2]=e.fogColor.b,e.gammaCorrection)for(let s=0;s<3;s++)this.fogColor[s]=Math.pow(this.fogColor[s],2.2);this.fogColorId.setValue(this.fogColor),e.fog===t0?(this.fogStartId.setValue(e.fogStart),this.fogEndId.setValue(e.fogEnd)):this.fogDensityId.setValue(e.fogDensity)}const t=this.device;this._screenSize[0]=t.width,this._screenSize[1]=t.height,this._screenSize[2]=1/t.width,this._screenSize[3]=1/t.height,this.screenSizeId.setValue(this._screenSize)}updateLightStats(e,t){}cullShadowmaps(e){for(let s=0;s<e._lights.length;s++){const i=e._lights[s];if(i._type!==ie&&i.visibleThisFrame&&i.castShadows&&i.shadowUpdateMode!==Jr){const n=e._lightCompositionData[s].shadowCastersList;this._shadowRenderer.cullLocal(i,n)}}const t=e._renderActions;for(let s=0;s<t.length;s++){const i=t[s],n=i.directionalLightsIndices.length;for(let r=0;r<n;r++){const a=i.directionalLightsIndices[r],o=e._lights[a],h=e._lightCompositionData[a].shadowCastersList;this._shadowRenderer.cullDirectional(o,h,i.camera.camera)}}}cullComposition(e){const t=e._renderActions;for(let s=0;s<t.length;s++){const i=t[s],n=i.layerIndex,r=e.layerList[n];if(!r.enabled||!e.subLayerEnabled[n])continue;const a=e.subLayerList[n],o=i.cameraIndex,h=r.cameras[o];if(h){h.frameUpdate(i.renderTarget),i.firstCameraUse&&(this.updateCameraFrustum(h.camera),this._camerasRendered++),this.cullLights(h.camera,r._lights);const c=r.instances,d=a?c.visibleTransparent[o]:c.visibleOpaque[o];if(!d.done){r.onPreCull&&r.onPreCull(o);const u=a?r.transparentMeshInstances:r.opaqueMeshInstances;d.length=this.cull(h.camera,u,d.list),d.done=!0,r.onPostCull&&r.onPostCull(o)}}}this.cullShadowmaps(e)}updateLightTextureAtlas(e){this.lightTextureAtlas.update(e._splitLights[pe],e._splitLights[ue],this.scene.lighting)}updateClusters(e){const t=e.getEmptyWorldClusters(this.device),s=e._renderActions;for(let i=0;i<s.length;i++){const n=s[i],r=n.lightClusters;if(r&&r!==t&&!fn.has(r)){fn.add(r);const a=e.layerList[n.layerIndex];r.update(a.clusteredLightsSet,this.scene.gammaCorrection,this.scene.lighting)}}fn.clear()}buildFrameGraph(e,t){e.reset(),this.update(t);const s=this.scene.clusteredLightingEnabled;if(s){this.updateLightTextureAtlas(t);const h=new nr(this.device,()=>{this.scene.lighting.cookiesEnabled&&(this.renderCookies(t._splitLights[pe]),this.renderCookies(t._splitLights[ue]))});h.requiresCubemaps=!1,e.addRenderPass(h)}const i=new nr(this.device,()=>{(!s||s&&this.scene.lighting.shadowsEnabled)&&(this.renderShadows(t._splitLights[pe]),this.renderShadows(t._splitLights[ue])),s&&this.updateClusters(t)});i.requiresCubemaps=!1,e.addRenderPass(i);let n=0,r=!0,a=null;const o=t._renderActions;for(let h=n;h<o.length;h++){const c=o[h],d=t.layerList[c.layerIndex],u=d.cameras[c.cameraIndex];if(!c.isLayerEnabled(t))continue;const p=d.id===ut&&(u.renderSceneColorMap||u.renderSceneDepthMap);if(c.hasDirectionalShadowLights&&u){const v=new nr(this.device,()=>{this.renderPassDirectionalShadows(c,t)});v.requiresCubemaps=!1,e.addRenderPass(v)}r&&(r=!1,n=h,a=c.renderTarget);let _=h+1;for(;o[_]&&!o[_].isLayerEnabled(t);)_++;const m=o[_],w=(m?t.layerList[m.layerIndex].id===ut:!1)&&(u.renderSceneColorMap||u.renderSceneDepthMap);if(!m||m.renderTarget!==a||m.hasDirectionalShadowLights||w||p){if(this.addMainRenderPass(e,t,a,n,h,p),c.triggerPostprocess&&u!=null&&u.onPostprocessing){const v=new nr(this.device,()=>{this.renderPassPostprocessing(c,t)});v.requiresCubemaps=!1,e.addRenderPass(v)}r=!0}}}addMainRenderPass(e,t,s,i,n,r){const a={start:i,end:n},o=new nr(this.device,()=>{this.renderPassRenderActions(t,a)}),c=t._renderActions[i],u=t.layerList[c.layerIndex].cameras[c.cameraIndex],f=r&&!this.device.webgl2&&u.renderSceneDepthMap;(!r||f)&&(o.init(s),o.fullSizeClearRect=u.camera.fullSizeClearRect,f?(o.setClearColor(Aw),o.setClearDepth(1)):o.fullSizeClearRect&&(c.clearColor&&o.setClearColor(u.camera.clearColor),c.clearDepth&&o.setClearDepth(u.camera.clearDepth),c.clearStencil&&o.setClearStencil(u.camera.clearStencil))),e.addRenderPass(o)}update(e){const t=this.scene.clusteredLightingEnabled;this.clustersDebugRendered=!1,this.initViewBindGroupFormat(),this.scene._updateSky(this.device);const s=this.updateLayerComposition(e,t),i=(s&En)!==0;this.updateLightStats(e,s),this.beginFrame(e,i),this.setSceneConstants(),this.cullComposition(e),this.gpuUpdate(e._meshInstances)}renderPassDirectionalShadows(e,t){const i=t.layerList[e.layerIndex].cameras[e.cameraIndex];this.renderShadows(e.directionalLights,i.camera)}renderPassPostprocessing(e,t){t.layerList[e.layerIndex].cameras[e.cameraIndex].onPostprocessing()}renderPassRenderActions(e,t){const s=e._renderActions;for(let i=t.start;i<=t.end;i++)this.renderRenderAction(e,s[i],i===t.start)}renderRenderAction(e,t,s){const i=this.scene.clusteredLightingEnabled,n=this.device,r=t.layerIndex,a=e.layerList[r],o=e.subLayerList[r],h=t.cameraIndex,c=a.cameras[h];if(t.isLayerEnabled(e)){if(c&&t.firstCameraUse&&c.onPreRender&&c.onPreRender(),!o&&a.onPreRenderOpaque?a.onPreRenderOpaque(h):o&&a.onPreRenderTransparent&&a.onPreRenderTransparent(h),a._preRenderCalledForCameras&1<<h||(a.onPreRender&&a.onPreRender(h),a._preRenderCalledForCameras|=1<<h),c){var d;this.setupViewport(c.camera,t.renderTarget),(!s||!c.camera.fullSizeClearRect)&&this.clear(t,c.camera),a._sortVisible(o,c.camera.node,h);const u=a.instances,f=o?u.visibleTransparent[h]:u.visibleOpaque[h];this.scene.immediate.onPreRenderLayer(a,f,o),i&&t.lightClusters&&(t.lightClusters.activate(this.lightTextureAtlas),!this.clustersDebugRendered&&this.scene.lighting.debugLayer===a.id&&(this.clustersDebugRendered=!0)),this.scene._activeCamera=c.camera,this.setCameraUniforms(c.camera,t.renderTarget,t);const p=!!(c.camera._flipFaces^(t==null||(d=t.renderTarget)==null?void 0:d.flipY)),_=this._forwardDrawCalls;this.renderForward(c.camera,f.list,f.length,a._splitLights,a.shaderPass,a.cullingMask,a.onDrawCall,a,p),a._forwardDrawCalls+=this._forwardDrawCalls-_,n.setColorWrite(!0,!0,!0,!0),n.setStencilTest(!1),n.setAlphaToCoverage(!1),n.setDepthBias(!1),t.lastCameraUse&&c.onPostRender&&c.onPostRender()}!o&&a.onPostRenderOpaque?a.onPostRenderOpaque(h):o&&a.onPostRenderTransparent&&a.onPostRenderTransparent(h),a.onPostRender&&!(a._postRenderCalledForCameras&1<<h)&&(a._postRenderCounter&=~(o?2:1),a._postRenderCounter===0&&(a.onPostRender(h),a._postRenderCalledForCameras|=1<<h,a._postRenderCounter=a._postRenderCounterMax))}}}let ph,mh,ka,za;function Pw(l,e){return l.drawOrder-e.drawOrder}function Ew(l,e){return ph=l._key[Ls],mh=e._key[Ls],ph===mh&&l.mesh&&e.mesh?e.mesh.id-l.mesh.id:mh-ph}function Rw(l,e){return e.zdist-l.zdist}function Iw(l,e){return l.zdist-e.zdist}const Lw=[null,Pw,Ew,Rw,Iw];function Dw(l,e){return e.key-l.key}let _h=0;class qu{constructor(){this.list=[],this.length=0,this.done=!1}}class Fw{constructor(){this.opaqueMeshInstances=[],this.transparentMeshInstances=[],this.shadowCasters=[],this.visibleOpaque=[],this.visibleTransparent=[]}prepare(e){this.visibleOpaque[e]||(this.visibleOpaque[e]=new qu),this.visibleTransparent[e]||(this.visibleTransparent[e]=new qu),this.visibleOpaque[e].done=!1,this.visibleTransparent[e].done=!1}delete(e){e<this.visibleOpaque.length&&this.visibleOpaque.splice(e,1),e<this.visibleTransparent.length&&this.visibleTransparent.splice(e,1)}}class ki{constructor(e={}){e.id!==void 0?(this.id=e.id,_h=Math.max(this.id+1,_h)):this.id=_h++,this.name=e.name,this._enabled=e.enabled===void 0?!0:e.enabled,this._refCounter=this._enabled?1:0,this.opaqueSortMode=e.opaqueSortMode===void 0?T0:e.opaqueSortMode,this.transparentSortMode=e.transparentSortMode===void 0?uu:e.transparentSortMode,e.renderTarget&&(this.renderTarget=e.renderTarget),this.shaderPass=e.shaderPass===void 0?Nn:e.shaderPass,this.passThrough=e.passThrough===void 0?!1:e.passThrough,this._clearColorBuffer=!!e.clearColorBuffer,this._clearDepthBuffer=!!e.clearDepthBuffer,this._clearStencilBuffer=!!e.clearStencilBuffer,this.onPreCull=e.onPreCull,this.onPreRender=e.onPreRender,this.onPreRenderOpaque=e.onPreRenderOpaque,this.onPreRenderTransparent=e.onPreRenderTransparent,this.onPostCull=e.onPostCull,this.onPostRender=e.onPostRender,this.onPostRenderOpaque=e.onPostRenderOpaque,this.onPostRenderTransparent=e.onPostRenderTransparent,this.onDrawCall=e.onDrawCall,this.onEnable=e.onEnable,this.onDisable=e.onDisable,this._enabled&&this.onEnable&&this.onEnable(),this.layerReference=e.layerReference,this.instances=e.layerReference?e.layerReference.instances:new Fw,this.cullingMask=e.cullingMask?e.cullingMask:4294967295,this.opaqueMeshInstances=this.instances.opaqueMeshInstances,this.transparentMeshInstances=this.instances.transparentMeshInstances,this.shadowCasters=this.instances.shadowCasters,this.customSortCallback=null,this.customCalculateSortValues=null,this._lights=[],this._lightsSet=new Set,this._clusteredLightsSet=new Set,this._splitLights=[[],[],[]],this.cameras=[],this._dirty=!1,this._dirtyLights=!1,this._dirtyCameras=!1,this._lightHash=0,this._staticLightHash=0,this._needsStaticPrepare=!0,this._staticPrepareDone=!1,this._shaderVersion=-1,this._lightCube=null}get hasClusteredLights(){return this._clusteredLightsSet.size>0}set renderTarget(e){this._renderTarget=e,this._dirtyCameras=!0}get renderTarget(){return this._renderTarget}set enabled(e){e!==this._enabled&&(this._enabled=e,e?(this.incrementCounter(),this.onEnable&&this.onEnable()):(this.decrementCounter(),this.onDisable&&this.onDisable()))}get enabled(){return this._enabled}set clearColorBuffer(e){this._clearColorBuffer=e,this._dirtyCameras=!0}get clearColorBuffer(){return this._clearColorBuffer}set clearDepthBuffer(e){this._clearDepthBuffer=e,this._dirtyCameras=!0}get clearDepthBuffer(){return this._clearDepthBuffer}set clearStencilBuffer(e){this._clearStencilBuffer=e,this._dirtyCameras=!0}get clearStencilBuffer(){return this._clearStencilBuffer}get clusteredLightsSet(){return this._clusteredLightsSet}incrementCounter(){this._refCounter===0&&(this._enabled=!0,this.onEnable&&this.onEnable()),this._refCounter++}decrementCounter(){if(this._refCounter===1)this._enabled=!1,this.onDisable&&this.onDisable();else if(this._refCounter===0)return;this._refCounter--}addMeshInstances(e,t){const s=this._shaderVersion,i=this.shadowCasters;for(let n=0;n<e.length;n++){const r=e[n],a=r.material,o=a.blendType===Vt?this.opaqueMeshInstances:this.transparentMeshInstances;this.opaqueMeshInstances.indexOf(r)<0&&this.transparentMeshInstances.indexOf(r)<0&&o.push(r),!t&&r.castShadow&&i.indexOf(r)<0&&i.push(r),!this.passThrough&&s>=0&&a._shaderVersion!==s&&(a.getShaderVariant!==gi.prototype.getShaderVariant&&a.clearVariants(),a._shaderVersion=s)}this.passThrough||(this._dirty=!0)}removeMeshInstanceFromArray(e,t){let s=-1,i=0;const n=t.length;for(let r=0;r<n;r++){const a=t[r];if(a===e){s=r,i=1;break}if(a._staticSource===e)s<0&&(s=r),i++;else if(s>=0)break}s>=0&&t.splice(s,i)}removeMeshInstances(e,t){const s=this.opaqueMeshInstances,i=this.transparentMeshInstances,n=this.shadowCasters;for(let r=0;r<e.length;r++){const a=e[r];if(this.removeMeshInstanceFromArray(a,s),this.removeMeshInstanceFromArray(a,i),!t){const o=n.indexOf(a);o>=0&&n.splice(o,1)}}this._dirty=!0}clearMeshInstances(e){this.opaqueMeshInstances.length===0&&this.transparentMeshInstances.length===0&&(e||this.shadowCasters.length===0)||(this.opaqueMeshInstances.length=0,this.transparentMeshInstances.length=0,e||(this.shadowCasters.length=0),this.passThrough||(this._dirty=!0))}addLight(e){const t=e.light;this._lightsSet.has(t)||(this._lightsSet.add(t),this._lights.push(t),this._dirtyLights=!0,this._generateLightHash()),t.type!==ie&&this._clusteredLightsSet.add(t)}removeLight(e){const t=e.light;this._lightsSet.has(t)&&(this._lightsSet.delete(t),this._lights.splice(this._lights.indexOf(t),1),this._dirtyLights=!0,this._generateLightHash()),t.type!==ie&&this._clusteredLightsSet.delete(t)}clearLights(){this._lightsSet.clear(),this._clusteredLightsSet.clear(),this._lights.length=0,this._dirtyLights=!0}addShadowCasters(e){const t=this.shadowCasters;for(let s=0;s<e.length;s++){const i=e[s];i.castShadow&&t.indexOf(i)<0&&t.push(i)}this._dirtyLights=!0}removeShadowCasters(e){const t=this.shadowCasters;for(let s=0;s<e.length;s++){const i=t.indexOf(e[s]);i>=0&&t.splice(i,1)}this._dirtyLights=!0}_generateLightHash(){if(this._lights.length>0){this._lights.sort(Dw);let e="",t="";for(let s=0;s<this._lights.length;s++)this._lights[s].isStatic?t+=this._lights[s].key:e+=this._lights[s].key;e.length===0?this._lightHash=0:this._lightHash=$r(e),t.length===0?this._staticLightHash=0:this._staticLightHash=$r(t)}else this._lightHash=0,this._staticLightHash=0}addCamera(e){this.cameras.indexOf(e)>=0||(this.cameras.push(e),this._dirtyCameras=!0)}removeCamera(e){const t=this.cameras.indexOf(e);t>=0&&(this.cameras.splice(t,1),this._dirtyCameras=!0,this.instances.delete(t))}clearCameras(){this.cameras.length=0,this._dirtyCameras=!0}_calculateSortDistances(e,t,s,i){for(let n=0;n<t;n++){const r=e[n];if(r.command||r.layer<=i0)continue;if(r.calculateSortDistance){r.zdist=r.calculateSortDistance(r,s,i);continue}const a=r.aabb.center,o=a.x-s.x,h=a.y-s.y,c=a.z-s.z;r.zdist=o*i.x+h*i.y+c*i.z}}_sortVisible(e,t,s){const i=this.instances,n=e?this.transparentSortMode:this.opaqueSortMode;if(n===yc)return;const r=e?i.visibleTransparent[s]:i.visibleOpaque[s];n===A0?(ka=t.getPosition(),za=t.forward,this.customCalculateSortValues&&this.customCalculateSortValues(r.list,r.length,ka,za),r.list.length!==r.length&&(r.list.length=r.length),this.customSortCallback&&r.list.sort(this.customSortCallback)):((n===uu||n===C0)&&(ka=t.getPosition(),za=t.forward,this._calculateSortDistances(r.list,r.length,ka,za)),r.list.length!==r.length&&(r.list.length=r.length),r.list.sort(Lw[n]))}}const Ow={equals:function(l,e){if(l.size!==e.size)return!1;for(const t of l)if(!e.has(t))return!1;return!0}},Bw=(l,e)=>l.priority-e.priority,ea=l=>l.sort(Bw);class kw{constructor(){this.layerIndex=0,this.cameraIndex=0,this.camera=null,this.renderTarget=null,this.lightClusters=null,this.clearColor=!1,this.clearDepth=!1,this.clearStencil=!1,this.triggerPostprocess=!1,this.firstCameraUse=!1,this.lastCameraUse=!1,this.directionalLightsSet=new Set,this.directionalLights=[],this.directionalLightsIndices=[],this.viewBindGroups=[]}destroy(){this.viewBindGroups.forEach(e=>{e.defaultUniformBuffer.destroy(),e.destroy()}),this.viewBindGroups.length=0}get hasDirectionalShadowLights(){return this.directionalLights.length>0}reset(){this.lightClusters=null,this.directionalLightsSet.clear(),this.directionalLights.length=0,this.directionalLightsIndices.length=0}isLayerEnabled(e){return e.layerList[this.layerIndex].enabled&&e.subLayerEnabled[this.layerIndex]}collectDirectionalLights(e,t,s){this.directionalLightsSet.clear(),this.directionalLights.length=0,this.directionalLightsIndices.length=0;for(let i=0;i<t.length;i++){const n=t[i];if(n.castShadows){for(let r=0;r<e.length;r++)if(e[r]._splitLights[ie].indexOf(n)>=0&&!this.directionalLightsSet.has(n)){this.directionalLightsSet.add(n),this.directionalLights.push(n);const a=s.indexOf(n);this.directionalLightsIndices.push(a)}}}}}class zw{constructor(){this.shadowCastersSet=new Set,this.shadowCastersList=[]}clearShadowCasters(){this.shadowCastersSet.clear(),this.shadowCastersList.length=0}addShadowCasters(e){for(let t=0;t<e.length;t++){const s=e[t];this.shadowCastersSet.has(s)||(this.shadowCastersSet.add(s),this.shadowCastersList.push(s))}}}const pn=new Set,cr=[];class ju extends le{constructor(e="Untitled"){super(),this.name=e,this.layerList=[],this.subLayerList=[],this.subLayerEnabled=[],this._opaqueOrder={},this._transparentOrder={},this._dirty=!1,this._dirtyBlend=!1,this._dirtyLights=!1,this._dirtyCameras=!1,this._meshInstances=[],this._meshInstancesSet=new Set,this._lights=[],this._lightsMap=new Map,this._lightCompositionData=[],this._splitLights=[[],[],[]],this.cameras=[],this._renderActions=[],this._worldClusters=[],this._emptyWorldClusters=null}destroy(){this._emptyWorldClusters&&(this._emptyWorldClusters.destroy(),this._emptyWorldClusters=null),this._worldClusters.forEach(e=>{e.destroy()}),this._worldClusters=null,this._renderActions.forEach(e=>e.destroy()),this._renderActions=null}getEmptyWorldClusters(e){return this._emptyWorldClusters||(this._emptyWorldClusters=new vc(e),this._emptyWorldClusters.name="ClusterEmpty",this._emptyWorldClusters.update([],!1,null)),this._emptyWorldClusters}_splitLightsArray(e){const t=e._lights;e._splitLights[ie].length=0,e._splitLights[ue].length=0,e._splitLights[pe].length=0;for(let s=0;s<t.length;s++){const i=t[s];i.enabled&&e._splitLights[i._type].push(i)}}_update(e,t=!1){const s=this.layerList.length;let i=0;if(!this._dirty||!this._dirtyLights||!this._dirtyCameras)for(let a=0;a<s;a++){const o=this.layerList[a];o._dirty&&(this._dirty=!0),o._dirtyLights&&(this._dirtyLights=!0),o._dirtyCameras&&(this._dirtyCameras=!0)}function n(a,o,h){let c=!1;const d=h.length;for(let u=0;u<d;u++){const f=h[u];if(!o.has(f)){o.add(f),a.push(f);const p=f.material;p&&p._dirtyBlend&&(c=!0,p._dirtyBlend=!1)}}return c}if(this._dirty){i|=fu,this._meshInstances.length=0,this._meshInstancesSet.clear();for(let a=0;a<s;a++){const o=this.layerList[a];o.passThrough||(this._dirtyBlend=n(this._meshInstances,this._meshInstancesSet,o.opaqueMeshInstances)||this._dirtyBlend,this._dirtyBlend=n(this._meshInstances,this._meshInstancesSet,o.transparentMeshInstances)||this._dirtyBlend),o._dirty=!1}this._dirty=!1}function r(a,o,h){for(let d=0;d<o.length;){var c;((c=o[d].material)==null?void 0:c.transparent)===h?(a.push(o[d]),o[d]=o[o.length-1],o.length--):d++}}if(this._dirtyBlend){i|=M0;for(let a=0;a<s;a++){const o=this.layerList[a];o.passThrough||(r(o.opaqueMeshInstances,o.transparentMeshInstances,!1),r(o.transparentMeshInstances,o.opaqueMeshInstances,!0))}this._dirtyBlend=!1}if(this._dirtyLights&&(i|=En,this._dirtyLights=!1,this.updateLights()),i&&this.updateShadowCasters(),this._dirtyCameras||i&En){this._dirtyCameras=!1,i|=pu,this.cameras.length=0;for(let h=0;h<s;h++){const c=this.layerList[h];c._dirtyCameras=!1;for(let d=0;d<c.cameras.length;d++){const u=c.cameras[d];this.cameras.indexOf(u)<0&&this.cameras.push(u)}}this.cameras.length>1&&ea(this.cameras);const a=[];let o=0;for(let h=0;h<this.cameras.length;h++){const c=this.cameras[h];a.length=0;let d=!0;const u=o;let f=null,p=!1;for(let _=0;_<s;_++){const m=this.layerList[_];if(m&&m.cameras.length>0&&c.layers.indexOf(m.id)>=0){a.push(m),!p&&m.id===c.disablePostEffectsLayer&&(p=!0,f&&(f.triggerPostprocess=!0));const g=m.cameras.indexOf(c);g>=0&&(f=this.addRenderAction(this._renderActions,o,m,_,g,d,p),o++,d=!1)}}u<o&&(this._renderActions[u].collectDirectionalLights(a,this._splitLights[ie],this._lights),f.lastCameraUse=!0),!p&&f&&(f.triggerPostprocess=!0),c.renderTarget&&c.postEffectsEnabled&&this.propagateRenderTarget(u-1,c)}for(let h=o;h<this._renderActions.length;h++)this._renderActions[h].destroy();this._renderActions.length=o}return i&(pu|En|fu)&&t&&this.allocateLightClusters(e),i&(En|En)&&this._logRenderActions(),i}updateShadowCasters(){const e=this._lights.length;for(let s=0;s<e;s++)this._lightCompositionData[s].clearShadowCasters();const t=this.layerList.length;for(let s=0;s<t;s++){const i=this.layerList[s];if(!pn.has(i)){pn.add(i);const n=i._lights;for(let r=0;r<n.length;r++)if(n[r].castShadows){const a=this._lightsMap.get(n[r]);this._lightCompositionData[a].addShadowCasters(i.shadowCasters)}}}pn.clear()}updateLights(){this._lights.length=0,this._lightsMap.clear();const e=this.layerList.length;for(let s=0;s<e;s++){const i=this.layerList[s];if(!pn.has(i)){pn.add(i);const n=i._lights;for(let r=0;r<n.length;r++){const a=n[r];let o=this._lightsMap.get(a);if(o===void 0){o=this._lights.length,this._lightsMap.set(a,o),this._lights.push(a);let h=this._lightCompositionData[o];h||(h=new zw,this._lightCompositionData[o]=h)}}}this._splitLightsArray(i),i._dirtyLights=!1}pn.clear(),this._splitLightsArray(this);const t=this._lights.length;this._lightCompositionData.length=t}findCompatibleCluster(e,t,s){for(let i=0;i<t;i++){const n=this._renderActions[i],r=this.layerList[n.layerIndex];if(n.lightClusters!==s&&(e===r||n.lightClusters&&Ow.equals(e._clusteredLightsSet,r._clusteredLightsSet)))return n.lightClusters}return null}allocateLightClusters(e){cr.push(...this._worldClusters);const t=this.getEmptyWorldClusters(e);this._worldClusters.length=0;const s=this._renderActions.length;for(let i=0;i<s;i++){const n=this._renderActions[i],r=this.layerList[n.layerIndex];if(r.hasClusteredLights&&(this.subLayerList[n.layerIndex]?r.transparentMeshInstances:r.opaqueMeshInstances).length){let h=this.findCompatibleCluster(r,i,t);h||(cr.length&&(h=cr.pop()),h||(h=new vc(e)),h.name="Cluster-"+this._worldClusters.length,this._worldClusters.push(h)),n.lightClusters=h}n.lightClusters||(n.lightClusters=t)}cr.forEach(i=>{i.destroy()}),cr.length=0}addRenderAction(e,t,s,i,n,r,a){let o=e[t];o||(o=e[t]=new kw);let h=s.renderTarget;const c=s.cameras[n];c&&c.renderTarget&&s.id!==ut&&(h=c.renderTarget);let d=!1;for(let m=t-1;m>=0;m--)if(e[m].camera===c&&e[m].renderTarget===h){d=!0;break}const u=r||!d;let f=u?c.clearColorBuffer:!1,p=u?c.clearDepthBuffer:!1,_=u?c.clearStencilBuffer:!1;return f||(f=s.clearColorBuffer),p||(p=s.clearDepthBuffer),_||(_=s.clearStencilBuffer),a&&c.postEffectsEnabled&&(h=null),o.reset(),o.triggerPostprocess=!1,o.layerIndex=i,o.cameraIndex=n,o.camera=c,o.renderTarget=h,o.clearColor=f,o.clearDepth=p,o.clearStencil=_,o.firstCameraUse=r,o.lastCameraUse=!1,o}propagateRenderTarget(e,t){for(let s=e;s>=0;s--){const i=this._renderActions[s],n=this.layerList[i.layerIndex];if(i.renderTarget&&n.id!==ut)break;if(n.id===ut)continue;const r=i==null?void 0:i.camera.camera;if(r&&(!t.camera.rect.equals(r.rect)||!t.camera.scissorRect.equals(r.scissorRect)))break;i.renderTarget=t.renderTarget}}_logRenderActions(){}_isLayerAdded(e){return this.layerList.indexOf(e)>=0}_isSublayerAdded(e,t){for(let s=0;s<this.layerList.length;s++)if(this.layerList[s]===e&&this.subLayerList[s]===t)return!0;return!1}push(e){this._isLayerAdded(e)||(this.layerList.push(e),this.layerList.push(e),this._opaqueOrder[e.id]=this.subLayerList.push(!1)-1,this._transparentOrder[e.id]=this.subLayerList.push(!0)-1,this.subLayerEnabled.push(!0),this.subLayerEnabled.push(!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e))}insert(e,t){if(this._isLayerAdded(e))return;this.layerList.splice(t,0,e,e),this.subLayerList.splice(t,0,!1,!0);const s=this.layerList.length;this._updateOpaqueOrder(t,s-1),this._updateTransparentOrder(t,s-1),this.subLayerEnabled.splice(t,0,!0,!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e)}remove(e){let t=this.layerList.indexOf(e);for(delete this._opaqueOrder[t],delete this._transparentOrder[t];t>=0;)this.layerList.splice(t,1),this.subLayerList.splice(t,1),this.subLayerEnabled.splice(t,1),t=this.layerList.indexOf(e),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("remove",e);const s=this.layerList.length;this._updateOpaqueOrder(0,s-1),this._updateTransparentOrder(0,s-1)}pushOpaque(e){this._isSublayerAdded(e,!1)||(this.layerList.push(e),this._opaqueOrder[e.id]=this.subLayerList.push(!1)-1,this.subLayerEnabled.push(!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e))}insertOpaque(e,t){if(this._isSublayerAdded(e,!1))return;this.layerList.splice(t,0,e),this.subLayerList.splice(t,0,!1);const s=this.subLayerList.length;this._updateOpaqueOrder(t,s-1),this.subLayerEnabled.splice(t,0,!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e)}removeOpaque(e){for(let t=0,s=this.layerList.length;t<s;t++)if(this.layerList[t]===e&&!this.subLayerList[t]){this.layerList.splice(t,1),this.subLayerList.splice(t,1),s--,this._updateOpaqueOrder(t,s-1),this.subLayerEnabled.splice(t,1),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.layerList.indexOf(e)<0&&this.fire("remove",e);return}}pushTransparent(e){this._isSublayerAdded(e,!0)||(this.layerList.push(e),this._transparentOrder[e.id]=this.subLayerList.push(!0)-1,this.subLayerEnabled.push(!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e))}insertTransparent(e,t){if(this._isSublayerAdded(e,!0))return;this.layerList.splice(t,0,e),this.subLayerList.splice(t,0,!0);const s=this.subLayerList.length;this._updateTransparentOrder(t,s-1),this.subLayerEnabled.splice(t,0,!0),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.fire("add",e)}removeTransparent(e){for(let t=0,s=this.layerList.length;t<s;t++)if(this.layerList[t]===e&&this.subLayerList[t]){this.layerList.splice(t,1),this.subLayerList.splice(t,1),s--,this._updateTransparentOrder(t,s-1),this.subLayerEnabled.splice(t,1),this._dirty=!0,this._dirtyLights=!0,this._dirtyCameras=!0,this.layerList.indexOf(e)<0&&this.fire("remove",e);return}}_getSublayerIndex(e,t){let s=this.layerList.indexOf(e);return s<0||this.subLayerList[s]!==t&&(s=this.layerList.indexOf(e,s+1),s<0||this.subLayerList[s]!==t)?-1:s}getOpaqueIndex(e){return this._getSublayerIndex(e,!1)}getTransparentIndex(e){return this._getSublayerIndex(e,!0)}getLayerById(e){for(let t=0;t<this.layerList.length;t++)if(this.layerList[t].id===e)return this.layerList[t];return null}getLayerByName(e){for(let t=0;t<this.layerList.length;t++)if(this.layerList[t].name===e)return this.layerList[t];return null}_updateOpaqueOrder(e,t){for(let s=e;s<=t;s++)this.subLayerList[s]===!1&&(this._opaqueOrder[this.layerList[s].id]=s)}_updateTransparentOrder(e,t){for(let s=e;s<=t;s++)this.subLayerList[s]===!0&&(this._transparentOrder[this.layerList[s].id]=s)}_sortLayersDescending(e,t,s){let i=-1,n=-1;for(let r=0,a=e.length;r<a;r++){const o=e[r];s.hasOwnProperty(o)&&(i=Math.max(i,s[o]))}for(let r=0,a=t.length;r<a;r++){const o=t[r];s.hasOwnProperty(o)&&(n=Math.max(n,s[o]))}return i===-1&&n!==-1?1:n===-1&&i!==-1?-1:n-i}sortTransparentLayers(e,t){return this._sortLayersDescending(e,t,this._transparentOrder)}sortOpaqueLayers(e,t){return this._sortLayersDescending(e,t,this._opaqueOrder)}}const Ua=new b,qt={bias:0,normalBias:0},gh={r:0,g:1,b:2,a:3},bc={directional:ie,omni:ue,point:ue,spot:pe},Uw=[[new K(0,0,1,1)],[new K(0,0,.5,.5),new K(0,.5,.5,.5)],[new K(0,0,.5,.5),new K(0,.5,.5,.5),new K(.5,0,.5,.5)],[new K(0,0,.5,.5),new K(0,.5,.5,.5),new K(.5,0,.5,.5),new K(.5,.5,.5,.5)]];let Nw=0;class Vw{constructor(e,t,s,i){this.light=i,this.camera=t,this.shadowCamera=Dl.createShadowCamera(e,i._shadowType,i._type,s),this.shadowMatrix=new H,this.shadowViewport=new K(0,0,1,1),this.shadowScissor=new K(0,0,1,1),this.face=s,this.visibleCasters=[]}get shadowBuffer(){const e=this.shadowCamera.renderTarget;if(e){const t=this.light;return t._type===ue?e.colorBuffer:t._isPcf&&t.device.webgl2?e.depthBuffer:e.colorBuffer}return null}}class ta{constructor(e){this.device=e,this.id=Nw++,this._type=ie,this._color=new G(.8,.8,.8),this._intensity=1,this._luminance=0,this._castShadows=!1,this._enabled=!1,this.mask=fs,this.isStatic=!1,this.key=0,this.bakeDir=!0,this.bakeNumSamples=1,this.bakeArea=0,this.attenuationStart=10,this.attenuationEnd=10,this._falloffMode=dd,this._shadowType=Ze,this._vsmBlurSize=11,this.vsmBlurMode=ud,this.vsmBias=.01*.25,this._cookie=null,this.cookieIntensity=1,this._cookieFalloff=!0,this._cookieChannel="rgb",this._cookieTransform=null,this._cookieTransformUniform=new Float32Array(4),this._cookieOffset=null,this._cookieOffsetUniform=new Float32Array(2),this._cookieTransformSet=!1,this._cookieOffsetSet=!1,this._innerConeAngle=40,this._outerConeAngle=45,this.cascades=null,this._shadowMatrixPalette=null,this._shadowCascadeDistances=null,this.numCascades=1,this.cascadeDistribution=.5,this._shape=at,this._finalColor=new Float32Array([.8,.8,.8]);const t=Math.pow(this._finalColor[0],2.2);this._linearFinalColor=new Float32Array([t,t,t]),this._position=new b(0,0,0),this._direction=new b(0,0,0),this._innerConeAngleCos=Math.cos(this._innerConeAngle*Math.PI/180),this._updateOuterAngle(this._outerConeAngle),this._usePhysicalUnits=void 0,this._shadowMap=null,this._shadowRenderParams=[],this.shadowDistance=40,this._shadowResolution=1024,this.shadowBias=-5e-4,this.shadowIntensity=1,this._normalOffsetBias=0,this.shadowUpdateMode=Xo,this._isVsm=!1,this._isPcf=!0,this._cookieMatrix=null,this._atlasViewport=null,this.atlasViewportAllocated=!1,this.atlasVersion=0,this.atlasSlotIndex=0,this.atlasSlotUpdated=!1,this._scene=null,this._node=null,this._renderData=[],this.visibleThisFrame=!1,this.maxScreenSize=0}destroy(){this._destroyShadowMap(),this._renderData=null}set numCascades(e){(!this.cascades||this.numCascades!==e)&&(this.cascades=Uw[e-1],this._shadowMatrixPalette=new Float32Array(4*16),this._shadowCascadeDistances=new Float32Array(4),this._destroyShadowMap(),this.updateKey())}get numCascades(){return this.cascades.length}set shadowMap(e){this._shadowMap!==e&&(this._destroyShadowMap(),this._shadowMap=e)}get shadowMap(){return this._shadowMap}get numShadowFaces(){const e=this._type;return e===ie?this.numCascades:e===ue?6:1}set type(e){if(this._type===e)return;this._type=e,this._destroyShadowMap(),this.updateKey();const t=this._shadowType;this._shadowType=null,this.shadowType=t}get type(){return this._type}set shape(e){if(this._shape===e)return;this._shape=e,this._destroyShadowMap(),this.updateKey();const t=this._shadowType;this._shadowType=null,this.shadowType=t}get shape(){return this._shape}set usePhysicalUnits(e){this._usePhysicalUnits!==e&&(this._usePhysicalUnits=e,this._updateFinalColor())}get usePhysicalUnits(){return this._usePhysicalUnits}set shadowType(e){if(this._shadowType===e)return;const t=this.device;this._type===ue&&(e=Ze),e===us&&!t.webgl2&&(e=Ze),e===ds&&!t.textureFloatRenderable&&(e=Is),e===Is&&!t.textureHalfFloatRenderable&&(e=hs),this._isVsm=e>=hs&&e<=ds,this._isPcf=e===us||e===Ze,this._shadowType=e,this._destroyShadowMap(),this.updateKey()}get shadowType(){return this._shadowType}set enabled(e){this._enabled!==e&&(this._enabled=e,this.layersDirty())}get enabled(){return this._enabled}set castShadows(e){this._castShadows!==e&&(this._castShadows=e,this._destroyShadowMap(),this.layersDirty(),this.updateKey())}get castShadows(){return this._castShadows&&this.mask!==Fs&&this.mask!==0}set shadowResolution(e){this._shadowResolution!==e&&(this._type===ue?e=Math.min(e,this.device.maxCubeMapSize):e=Math.min(e,this.device.maxTextureSize),this._shadowResolution=e,this._destroyShadowMap())}get shadowResolution(){return this._shadowResolution}set vsmBlurSize(e){this._vsmBlurSize!==e&&(e%2===0&&e++,this._vsmBlurSize=e)}get vsmBlurSize(){return this._vsmBlurSize}set normalOffsetBias(e){this._normalOffsetBias!==e&&((!this._normalOffsetBias&&e||this._normalOffsetBias&&!e)&&this.updateKey(),this._normalOffsetBias=e)}get normalOffsetBias(){return this._normalOffsetBias}set falloffMode(e){this._falloffMode!==e&&(this._falloffMode=e,this.updateKey())}get falloffMode(){return this._falloffMode}set innerConeAngle(e){this._innerConeAngle!==e&&(this._innerConeAngle=e,this._innerConeAngleCos=Math.cos(e*Math.PI/180),this._usePhysicalUnits&&this._updateFinalColor())}get innerConeAngle(){return this._innerConeAngle}set outerConeAngle(e){this._outerConeAngle!==e&&(this._outerConeAngle=e,this._updateOuterAngle(e),this._usePhysicalUnits&&this._updateFinalColor())}get outerConeAngle(){return this._outerConeAngle}_updateOuterAngle(e){const t=e*Math.PI/180;this._outerConeAngleCos=Math.cos(t),this._outerConeAngleSin=Math.sin(t)}set intensity(e){this._intensity!==e&&(this._intensity=e,this._updateFinalColor())}get intensity(){return this._intensity}set luminance(e){this._luminance!==e&&(this._luminance=e,this._updateFinalColor())}get luminance(){return this._luminance}get cookieMatrix(){return this._cookieMatrix||(this._cookieMatrix=new H),this._cookieMatrix}get atlasViewport(){return this._atlasViewport||(this._atlasViewport=new K(0,0,1,1)),this._atlasViewport}set cookie(e){this._cookie!==e&&(this._cookie=e,this.updateKey())}get cookie(){return this._cookie}set cookieFalloff(e){this._cookieFalloff!==e&&(this._cookieFalloff=e,this.updateKey())}get cookieFalloff(){return this._cookieFalloff}set cookieChannel(e){if(this._cookieChannel!==e){if(e.length<3){const t=e.charAt(e.length-1),s=3-e.length;for(let i=0;i<s;i++)e+=t}this._cookieChannel=e,this.updateKey()}}get cookieChannel(){return this._cookieChannel}set cookieTransform(e){this._cookieTransform!==e&&(this._cookieTransform=e,this._cookieTransformSet=!!e,e&&!this._cookieOffset&&(this.cookieOffset=new V,this._cookieOffsetSet=!1),this.updateKey())}get cookieTransform(){return this._cookieTransform}set cookieOffset(e){if(this._cookieOffset===e)return;!!(this._cookieTransformSet||e)&&!e&&this._cookieOffset?this._cookieOffset.set(0,0):this._cookieOffset=e,this._cookieOffsetSet=!!e,e&&!this._cookieTransform&&(this.cookieTransform=new K(1,1,0,0),this._cookieTransformSet=!1),this.updateKey()}get cookieOffset(){return this._cookieOffset}beginFrame(){this.visibleThisFrame=this._type===ie&&this._enabled,this.maxScreenSize=0,this.atlasViewportAllocated=!1,this.atlasSlotUpdated=!1}_destroyShadowMap(){this._renderData&&(this._renderData.length=0),this._shadowMap&&(this._shadowMap.cached||this._shadowMap.destroy(),this._shadowMap=null),this.shadowUpdateMode===Jr&&(this.shadowUpdateMode=Qr)}getRenderData(e,t){for(let i=0;i<this._renderData.length;i++){const n=this._renderData[i];if(n.camera===e&&n.face===t)return n}const s=new Vw(this.device,e,t,this);return this._renderData.push(s),s}clone(){const e=new ta(this.device);return e.type=this._type,e.setColor(this._color),e.intensity=this._intensity,e.luminance=this._luminance,e.castShadows=this.castShadows,e._enabled=this._enabled,e.attenuationStart=this.attenuationStart,e.attenuationEnd=this.attenuationEnd,e.falloffMode=this._falloffMode,e.shadowType=this._shadowType,e.vsmBlurSize=this._vsmBlurSize,e.vsmBlurMode=this.vsmBlurMode,e.vsmBias=this.vsmBias,e.shadowUpdateMode=this.shadowUpdateMode,e.mask=this.mask,e.innerConeAngle=this._innerConeAngle,e.outerConeAngle=this._outerConeAngle,e.numCascades=this.numCascades,e.cascadeDistribution=this.cascadeDistribution,e.shape=this._shape,e.shadowBias=this.shadowBias,e.normalOffsetBias=this._normalOffsetBias,e.shadowResolution=this._shadowResolution,e.shadowDistance=this.shadowDistance,e.shadowIntensity=this.shadowIntensity,e}static getLightUnitConversion(e,t=Math.PI/4,s=0){switch(e){case pe:{const i=Math.cos(t),n=Math.cos(s);return 2*Math.PI*(1-n+(n-i)/2)}case ue:return 4*Math.PI;case ie:return 1}}_getUniformBiasValues(e){const t=e.shadowCamera._farClip;switch(this._type){case ue:qt.bias=this.shadowBias,qt.normalBias=this._normalOffsetBias;break;case pe:this._isVsm?qt.bias=-1e-5*20:(qt.bias=this.shadowBias*20,!this.device.webgl2&&this.device.extStandardDerivatives&&(qt.bias*=-100)),qt.normalBias=this._isVsm?this.vsmBias/(this.attenuationEnd/7):this._normalOffsetBias;break;case ie:this._isVsm?qt.bias=-1e-5*20:(qt.bias=this.shadowBias/t*100,!this.device.webgl2&&this.device.extStandardDerivatives&&(qt.bias*=-100)),qt.normalBias=this._isVsm?this.vsmBias/(t/7):this._normalOffsetBias;break}return qt}getColor(){return this._color}getBoundingSphere(e){if(this._type===pe){const t=this.attenuationEnd,s=this._outerConeAngle,i=this._outerConeAngleCos,n=this._node;Ua.copy(n.up),s>45?(e.radius=t*this._outerConeAngleSin,Ua.mulScalar(-t*i)):(e.radius=t/(2*i),Ua.mulScalar(-e.radius)),e.center.add2(n.getPosition(),Ua)}else this._type===ue&&(e.center=this._node.getPosition(),e.radius=this.attenuationEnd)}getBoundingBox(e){if(this._type===pe){const t=this.attenuationEnd,s=this._outerConeAngle,i=this._node,n=Math.abs(Math.sin(s*k.DEG_TO_RAD)*t);e.center.set(0,-t*.5,0),e.halfExtents.set(n,t*.5,n),e.setFromTransformedAabb(e,i.getWorldTransform(),!0)}else this._type===ue&&(e.center.copy(this._node.getPosition()),e.halfExtents.set(this.attenuationEnd,this.attenuationEnd,this.attenuationEnd))}_updateFinalColor(){const e=this._color,t=e.r,s=e.g,i=e.b;let n=this._intensity;this._usePhysicalUnits&&(n=this._luminance/ta.getLightUnitConversion(this._type,this._outerConeAngle*k.DEG_TO_RAD,this._innerConeAngle*k.DEG_TO_RAD));const r=this._finalColor,a=this._linearFinalColor;r[0]=t*n,r[1]=s*n,r[2]=i*n,n>=1?(a[0]=Math.pow(t,2.2)*n,a[1]=Math.pow(s,2.2)*n,a[2]=Math.pow(i,2.2)*n):(a[0]=Math.pow(r[0],2.2),a[1]=Math.pow(r[1],2.2),a[2]=Math.pow(r[2],2.2))}setColor(){arguments.length===1?this._color.set(arguments[0].r,arguments[0].g,arguments[0].b):arguments.length===3&&this._color.set(arguments[0],arguments[1],arguments[2]),this._updateFinalColor()}updateShadow(){this.shadowUpdateMode!==Xo&&(this.shadowUpdateMode=Qr)}layersDirty(){var e;(e=this._scene)!=null&&e.layers&&(this._scene.layers._dirtyLights=!0)}updateKey(){let e=this._type<<29|(this._castShadows?1:0)<<28|this._shadowType<<25|this._falloffMode<<23|(this._normalOffsetBias!==0?1:0)<<22|(this._cookie?1:0)<<21|(this._cookieFalloff?1:0)<<20|gh[this._cookieChannel.charAt(0)]<<18|(this._cookieTransform?1:0)<<12|this._shape<<10|this.numCascades-1<<8;this._cookieChannel.length===3&&(e|=gh[this._cookieChannel.charAt(1)]<<16,e|=gh[this._cookieChannel.charAt(2)]<<14),e!==this.key&&this._scene!==null&&this.layersDirty(),this.key=e}}class Em{constructor(e,t,s){this._maxTextureSize=t,this._supportsAreaLights=e,this._dirtyLightsFnc=s,this._areaLightsEnabled=!1,this._cells=new b(10,3,10),this._maxLightsPerCell=255,this._shadowsEnabled=!0,this._shadowType=Ze,this._shadowAtlasResolution=2048,this._cookiesEnabled=!1,this._cookieAtlasResolution=2048,this.atlasSplit=null,this.debugLayer=void 0}applySettings(e){this.shadowsEnabled=e.lightingShadowsEnabled,this.cookiesEnabled=e.lightingCookiesEnabled,this.areaLightsEnabled=e.lightingAreaLightsEnabled,this.shadowAtlasResolution=e.lightingShadowAtlasResolution,this.cookieAtlasResolution=e.lightingCookieAtlasResolution,this.maxLightsPerCell=e.lightingMaxLightsPerCell,this.shadowType=e.lightingShadowType,this.cell=new b(e.lightingCells)}set cells(e){this._cells.copy(e)}get cells(){return this._cells}set maxLightsPerCell(e){this._maxLightsPerCell=k.clamp(e,1,255)}get maxLightsPerCell(){return this._maxLightsPerCell}set cookieAtlasResolution(e){this._cookieAtlasResolution=k.clamp(e,32,this._maxTextureSize)}get cookieAtlasResolution(){return this._cookieAtlasResolution}set shadowAtlasResolution(e){this._shadowAtlasResolution=k.clamp(e,32,this._maxTextureSize)}get shadowAtlasResolution(){return this._shadowAtlasResolution}set shadowType(e){this._shadowType!==e&&(this._shadowType=e,this._dirtyLightsFnc())}get shadowType(){return this._shadowType}set cookiesEnabled(e){this._cookiesEnabled!==e&&(this._cookiesEnabled=e,this._dirtyLightsFnc())}get cookiesEnabled(){return this._cookiesEnabled}set areaLightsEnabled(e){this._supportsAreaLights&&this._areaLightsEnabled!==e&&(this._areaLightsEnabled=e,this._dirtyLightsFnc())}get areaLightsEnabled(){return this._areaLightsEnabled}set shadowsEnabled(e){this._shadowsEnabled!==e&&(this._shadowsEnabled=e,this._dirtyLightsFnc())}get shadowsEnabled(){return this._shadowsEnabled}}const Yu=.2;class kt extends _d{constructor(e,t){super(),this.device=t||Vs.get(),e.forEach(s=>{}),this._targets=e.slice(),this.device.supportsMorphTargetTexturesCore&&(this.device.extTextureHalfFloat&&this.device.textureHalfFloatRenderable?this._renderTextureFormat=kt.FORMAT_HALF_FLOAT:this.device.extTextureFloat&&this.device.textureFloatRenderable&&(this._renderTextureFormat=kt.FORMAT_FLOAT),this.device.extTextureHalfFloat&&this.device.textureHalfFloatUpdatable?this._textureFormat=kt.FORMAT_HALF_FLOAT:this.device.extTextureFloat&&(this._textureFormat=kt.FORMAT_FLOAT),this._renderTextureFormat!==void 0&&this._textureFormat!==void 0&&(this._useTextureMorph=!0)),this._init(),this._updateMorphFlags(),this._calculateAabb()}get morphPositions(){return this._morphPositions}get morphNormals(){return this._morphNormals}get maxActiveTargets(){return this._useTextureMorph?this._targets.length:this._morphPositions&&this._morphNormals?4:8}get useTextureMorph(){return this._useTextureMorph}_init(){if(this._useTextureMorph&&(this._useTextureMorph=this._initTextureBased()),!this._useTextureMorph)for(let e=0;e<this._targets.length;e++)this._targets[e]._initVertexBuffers(this.device);for(let e=0;e<this._targets.length;e++)this._targets[e]._postInit()}_initTextureBased(){const e=[],t=[];for(let m=0;m<this._targets.length;m++){const g=this._targets[m];g.options.deltaPositions&&(e.push(g.options.deltaPositions),t.push({target:g,name:"texturePositions"})),g.options.deltaNormals&&(e.push(g.options.deltaNormals),t.push({target:g,name:"textureNormals"}))}const s=[],i=[];let n=1;const r=e[0].length;for(let m=0;m<r;m+=3){let g=!1;for(let w=0;w<e.length;w++){const v=e[w];if(v[m]!==0||v[m+1]!==0||v[m+2]!==0){g=!0;break}}g?(s.push(n+Yu),i.push(m/3),n++):s.push(0+Yu)}const a=Math.min(this.device.maxTextureSize,4096);let o=Math.ceil(Math.sqrt(n));o=Math.min(o,a);const h=Math.ceil(n/o);if(h>a)return!1;this.morphTextureWidth=o,this.morphTextureHeight=h;let c=!1,d=3;const u=Le.float2Half;this._textureFormat===kt.FORMAT_HALF_FLOAT&&(c=!0,d=4);const f=this.morphTextureWidth*this.morphTextureHeight*d,p=c?new Uint16Array(f):new Float32Array(f);for(let m=0;m<e.length;m++){const g=e[m];for(let y=0;y<i.length;y++){const T=i[y];c?(p[y*d+d]=u(g[T*3]),p[y*d+d+1]=u(g[T*3+1]),p[y*d+d+2]=u(g[T*3+2])):(p[y*d+d]=g[T*3],p[y*d+d+1]=g[T*3+1],p[y*d+d+2]=g[T*3+2])}const w=t[m].target,v=this._textureFormat===kt.FORMAT_FLOAT?Rr:gt;w._setTexture(t[m].name,this._createTexture("MorphTarget",v,p))}const _=[{semantic:zi,components:1,type:ge}];return this.vertexBufferIds=new Us(this.device,new dt(this.device,_),s.length,Rt,new Float32Array(s)),!0}destroy(){var e;(e=this.vertexBufferIds)==null||e.destroy(),this.vertexBufferIds=null;for(let t=0;t<this._targets.length;t++)this._targets[t].destroy();this._targets.length=0}get targets(){return this._targets}_updateMorphFlags(){this._morphPositions=!1,this._morphNormals=!1;for(let e=0;e<this._targets.length;e++){const t=this._targets[e];t.morphPositions&&(this._morphPositions=!0),t.morphNormals&&(this._morphNormals=!0)}}_calculateAabb(){const e=new b,t=new b;for(let s=0;s<this._targets.length;s++){const i=this._targets[s].aabb;e.min(i.getMin()),t.max(i.getMax())}this.aabb=new _e,this.aabb.setMinMax(e,t)}_createTexture(e,t,s){const i=new ae(this.device,{width:this.morphTextureWidth,height:this.morphTextureHeight,format:t,cubemap:!1,mipmaps:!1,minFilter:ve,magFilter:ve,addressU:se,addressV:se,name:e});return s&&(i.lock().set(s),i.unlock()),i}}kt.FORMAT_FLOAT=0;kt.FORMAT_HALF_FLOAT=1;const Gw=`
    attribute vec2 vertex_position;
    varying vec2 uv0;
    void main(void) {
        gl_Position = vec4(vertex_position, 0.5, 1.0);
        uv0 = vertex_position.xy * 0.5 + 0.5;
    }
    `;class Ki{constructor(e){this.morph=e,e.incRefCount(),this.device=e.device,this._weights=[],this._weightMap=new Map;for(let t=0;t<e._targets.length;t++){const s=e._targets[t];s.name&&this._weightMap.set(s.name,t),this.setWeight(t,s.defaultWeight)}if(this._activeTargets=[],e.useTextureMorph){this.shaderCache={},this.maxSubmitCount=this.device.maxTextures,this._shaderMorphWeights=new Float32Array(this.maxSubmitCount);const t=(s,i)=>{const n=e._renderTextureFormat===kt.FORMAT_FLOAT?nt:gt;return this[i]=e._createTexture(s,n),new ht({colorBuffer:this[i],depth:!1})};e.morphPositions&&(this.rtPositions=t("MorphRTPos","texturePositions")),e.morphNormals&&(this.rtNormals=t("MorphRTNrm","textureNormals")),this._textureParams=new Float32Array([e.morphTextureWidth,e.morphTextureHeight,1/e.morphTextureWidth,1/e.morphTextureHeight]);for(let s=0;s<this.maxSubmitCount;s++)this["morphBlendTex"+s]=this.device.scope.resolve("morphBlendTex"+s);this.morphFactor=this.device.scope.resolve("morphFactor[0]"),this.zeroTextures=!1}else this.maxSubmitCount=8,this._shaderMorphWeights=new Float32Array(this.maxSubmitCount),this._shaderMorphWeightsA=new Float32Array(this._shaderMorphWeights.buffer,0,4),this._shaderMorphWeightsB=new Float32Array(this._shaderMorphWeights.buffer,4*4,4),this._activeVertexBuffers=new Array(this.maxSubmitCount)}destroy(){this.shader=null;const e=this.morph;e&&(this.morph=null,e.decRefCount(),e.refCount<1&&e.destroy()),this.rtPositions&&(this.rtPositions.destroy(),this.rtPositions=null),this.texturePositions&&(this.texturePositions.destroy(),this.texturePositions=null),this.rtNormals&&(this.rtNormals.destroy(),this.rtNormals=null),this.textureNormals&&(this.textureNormals.destroy(),this.textureNormals=null)}clone(){return new Ki(this.morph)}_getWeightIndex(e){return typeof e=="string"?this._weightMap.get(e):e}getWeight(e){const t=this._getWeightIndex(e);return this._weights[t]}setWeight(e,t){const s=this._getWeightIndex(e);this._weights[s]=t,this._dirty=!0}_getFragmentShader(e){let t="";e>0&&(t+=`varying vec2 uv0;
uniform highp float morphFactor[`+e+`];
`);for(let s=0;s<e;s++)t+="uniform highp sampler2D morphBlendTex"+s+`;
`;t+=`void main (void) {
    highp vec4 color = vec4(0, 0, 0, 1);
`;for(let s=0;s<e;s++)t+="    color.xyz += morphFactor["+s+"] * texture2D(morphBlendTex"+s+`, uv0).xyz;
`;return t+=`    gl_FragColor = color;
}
`,t}_getShader(e){let t=this.shaderCache[e];if(!t){const s=this._getFragmentShader(e);t=Gt(this.device,Gw,s,"textureMorph"+e),this.shaderCache[e]=t}return t}_updateTextureRenderTarget(e,t){const s=this.device,i=(o,h)=>{this.morphFactor.setValue(this._shaderMorphWeights),s.setBlending(h),h&&(s.setBlendFunction(Ie,Ie),s.setBlendEquation(qe));const c=this._getShader(o);ss(s,e,c,void 0,void 0,h)};let n=0,r=!1;const a=this._activeTargets.length;for(let o=0;o<a;o++){const h=this._activeTargets[o],c=h.target[t];c&&(this["morphBlendTex"+n].setValue(c),this._shaderMorphWeights[n]=h.weight,n++,n>=this.maxSubmitCount&&(i(n,r),n=0,r=!0))}(n>0||a===0&&!this.zeroTextures)&&i(n,r)}_updateTextureMorph(){this.device,(this._activeTargets.length>0||!this.zeroTextures)&&(this._updateTextureRenderTarget(this.rtPositions,"texturePositions"),this._updateTextureRenderTarget(this.rtNormals,"textureNormals"),this.zeroTextures=this._activeTargets.length===0)}_updateVertexMorph(){const e=this.maxSubmitCount;for(let i=0;i<e;i++)this._shaderMorphWeights[i]=0,this._activeVertexBuffers[i]=null;let t=0,s=this.morph.morphPositions?4:0;for(let i=0;i<this._activeTargets.length;i++){const n=this._activeTargets[i].target;n._vertexBufferPositions&&(this._activeVertexBuffers[t]=n._vertexBufferPositions,this._shaderMorphWeights[t]=this._activeTargets[i].weight,t++),n._vertexBufferNormals&&(this._activeVertexBuffers[s]=n._vertexBufferNormals,this._shaderMorphWeights[s]=this._activeTargets[i].weight,s++)}}update(){this._dirty=!1;const e=this.morph._targets;let t=0;const s=1e-5;for(let n=0;n<e.length;n++){const r=Math.abs(this.getWeight(n));if(r>s){this._activeTargets.length<=t&&(this._activeTargets[t]={});const a=this._activeTargets[t++];a.absWeight=r,a.weight=this.getWeight(n),a.target=e[n]}}this._activeTargets.length=t;const i=this.morph.maxActiveTargets;this._activeTargets.length>i&&(this._activeTargets.sort(function(n,r){return n.absWeight<r.absWeight?1:r.absWeight<n.absWeight?-1:0}),this._activeTargets.length=i),this.morph.useTextureMorph?this._updateTextureMorph():this._updateVertexMorph()}}class Xs{constructor(){this.graph=null,this.meshInstances=[],this.skinInstances=[],this.morphInstances=[],this.cameras=[],this.lights=[],this._shadersVersion=0,this._immutable=!1}getGraph(){return this.graph}setGraph(e){this.graph=e}getCameras(){return this.cameras}setCameras(e){this.cameras=e}getLights(){return this.lights}setLights(e){this.lights=e}getMaterials(){const e=[];for(let t=0;t<this.meshInstances.length;t++){const s=this.meshInstances[t];e.indexOf(s.material)===-1&&e.push(s.material)}return e}clone(){const e=[],t=[],i=function h(c){const d=c.clone();e.push(c),t.push(d);for(let u=0;u<c._children.length;u++)d.addChild(h(c._children[u]));return d}(this.graph),n=[],r=[],a=[];for(let h=0;h<this.skinInstances.length;h++){const c=this.skinInstances[h].skin,d=new oa(c),u=[];for(let f=0;f<c.boneNames.length;f++){const p=c.boneNames[f],_=i.findByName(p);u.push(_)}d.bones=u,r.push(d)}for(let h=0;h<this.morphInstances.length;h++){const c=this.morphInstances[h].morph,d=new Ki(c);a.push(d)}for(let h=0;h<this.meshInstances.length;h++){const c=this.meshInstances[h],d=e.indexOf(c.node),u=new we(c.mesh,c.material,t[d]);if(c.skinInstance){const f=this.skinInstances.indexOf(c.skinInstance);u.skinInstance=r[f]}if(c.morphInstance){const f=this.morphInstances.indexOf(c.morphInstance);u.morphInstance=a[f]}n.push(u)}const o=new Xs;return o.graph=i,o.meshInstances=n,o.skinInstances=r,o.morphInstances=a,o.getGraph().syncHierarchy(),o}destroy(){const e=this.meshInstances;for(let t=0;t<e.length;t++)e[t].destroy();this.meshInstances.length=0}generateWireframe(){we._prepareRenderStyleForArray(this.meshInstances,Ii)}}class Bl{constructor(e){this.used=!1,arguments.length===2&&(e=arguments[1]),this.options=e,this._name=e.name,this._defaultWeight=e.defaultWeight||0,this.aabb=e.aabb,this.aabb||(this.aabb=new _e,e.deltaPositions&&this.aabb.compute(e.deltaPositions)),this.deltaPositions=e.deltaPositions}destroy(){var e,t,s,i;(e=this._vertexBufferPositions)==null||e.destroy(),this._vertexBufferPositions=null,(t=this._vertexBufferNormals)==null||t.destroy(),this._vertexBufferNormals=null,(s=this.texturePositions)==null||s.destroy(),this.texturePositions=null,(i=this.textureNormals)==null||i.destroy(),this.textureNormals=null}get name(){return this._name}get defaultWeight(){return this._defaultWeight}get morphPositions(){return!!this._vertexBufferPositions||!!this.texturePositions}get morphNormals(){return!!this._vertexBufferNormals||!!this.textureNormals}clone(){return new Bl(this.options)}_postInit(){this.options.preserveData||(this.options=null),this.used=!0}_initVertexBuffers(e){const t=this.options;this._vertexBufferPositions=this._createVertexBuffer(e,t.deltaPositions,t.deltaPositionsType),this._vertexBufferNormals=this._createVertexBuffer(e,t.deltaNormals,t.deltaNormalsType),this._vertexBufferPositions&&(this.deltaPositions=this._vertexBufferPositions.lock())}_createVertexBuffer(e,t,s=ge){if(t){const i=[{semantic:Ao,components:3,type:s}];return new Us(e,new dt(e,i),t.length/3,Rt,t)}return null}_setTexture(e,t){this[e]=t}}const Ww={generateKey:function(l){let e="particle";for(const t in l)l.hasOwnProperty(t)&&(e+=l[t]);return e},_animTex:function(l){let e="";return e+=l.animTexLoop?B.particleAnimFrameLoopVS:B.particleAnimFrameClampVS,e+=B.particleAnimTexVS,e},createShaderDefinition:function(l,e){let t=`#define PARTICLE
`,s=`#define VERTEXSHADER
`;e.mesh&&(s+=`#define USE_MESH
`),e.localSpace&&(s+=`#define LOCAL_SPACE
`),e.screenSpace&&(s+=`#define SCREEN_SPACE
`),e.animTex&&(s+=`
uniform vec2 animTexTilesParams;
`),e.animTex&&(s+=`
uniform vec4 animTexParams;
`),e.animTex&&(s+=`
uniform vec2 animTexIndexParams;
`),e.normal===2&&(s+=`
varying mat3 ParticleMat;
`),e.normal===1&&(s+=`
varying vec3 Normal;
`),e.soft&&(s+=`
varying float vDepth;
`);const i=e.customFace?B.particle_customFaceVS:B.particle_billboardVS;return e.useCpu?(e.soft>0&&(s+=B.screenDepthPS),s+=B.particle_cpuVS,e.localSpace&&(s+=B.particle_localShiftVS),e.animTex&&(s+=this._animTex(e)),e.alignToMotion&&(s+=B.particle_pointAlongVS),s+=e.mesh?B.particle_meshVS:i,e.normal===1&&(s+=B.particle_normalVS),e.normal===2&&(s+=B.particle_TBNVS),e.stretch>0&&(s+=B.particle_stretchVS),s+=B.particle_cpu_endVS,e.soft>0&&(s+=B.particle_softVS)):(s+=B.particle_initVS,s+=e.pack8?B.particleInputRgba8PS:B.particleInputFloatPS,e.soft>0&&(s+=B.screenDepthPS),s+=B.particleVS,e.localSpace&&(s+=B.particle_localShiftVS),e.animTex&&(s+=this._animTex(e)),e.wrap&&(s+=B.particle_wrapVS),e.alignToMotion&&(s+=B.particle_pointAlongVS),s+=e.mesh?B.particle_meshVS:i,e.normal===1&&(s+=B.particle_normalVS),e.normal===2&&(s+=B.particle_TBNVS),e.stretch>0&&(s+=B.particle_stretchVS),s+=B.particle_endVS,e.soft>0&&(s+=B.particle_softVS)),s+=`}
`,e.normal>0&&(e.normal===1?t+=`
varying vec3 Normal;
`:e.normal===2&&(t+=`
varying mat3 ParticleMat;
`),t+=`
uniform vec3 lightCube[6];
`),e.soft&&(t+=`
varying float vDepth;
`),e.normal===0&&e.fog==="none"&&(e.srgb=!1),t+=B.decodePS,t+=qo(e.gamma),t+=jo(e.toneMap),e.fog==="linear"?t+=B.fogLinearPS:e.fog==="exp"?t+=B.fogExpPS:e.fog==="exp2"?t+=B.fogExp2PS:t+=B.fogNonePS,e.normal===2&&(t+=`
uniform sampler2D normalMap;
`),e.soft>0&&(t+=B.screenDepthPS),t+=B.particlePS,e.soft>0&&(t+=B.particle_softPS),e.normal===1&&(t+=`
vec3 normal = Normal;
`),e.normal===2&&(t+=B.particle_normalMapPS),e.normal>0&&(t+=e.halflambert?B.particle_halflambertPS:B.particle_lambertPS),e.normal>0&&(t+=B.particle_lightingPS),e.blend===yt?t+=B.particle_blendNormalPS:e.blend===Do?t+=B.particle_blendAddPS:e.blend===Fo&&(t+=B.particle_blendMultiplyPS),t+=B.particle_endPS,Ke.createDefinition(l,{vertexCode:s,fragmentCode:t})}};let vs,$u=1;const J=4,yh=new H,xh=new H,rs=new b,Re=new b,jt=new b,mn=new b,wt=new b,Ve=new b,_n=new b,gn=new b,dr=new b,Ku=new b,rt=new b,Na=new b,Ti=new b;function On(l){return l-Math.floor(l)}function Hw(l){return Math.max(Math.min(l,1),0)}function vh(l,e){return l-e*Math.floor(l/e)}function Xw(l){let e=On(l),t=On(255*l),s=On(65025*l),i=On(160581375*l);return e-=t/255,t-=s/255,s-=i/255,i-=i/255,[e,t,s,i]}function Va(l){let e=On(l),t=On(255*l);return e-=t/255,t-=t/255,[e,t]}class qw{constructor(e){this._emitter=e}calcSpawnPosition(e,t,s,i,n){const r=this._emitter,a=Math.random(),o=Math.random(),h=Math.random(),c=Math.random();if(r.useCpu&&(e[n*J+0+r.numParticlesPot*2*J]=a,e[n*J+1+r.numParticlesPot*2*J]=o,e[n*J+2+r.numParticlesPot*2*J]=h),Re.x=a-.5,Re.y=o-.5,Re.z=h-.5,r.emitterShape===as){const f=Math.max(Math.abs(Re.x),Math.max(Math.abs(Re.y),Math.abs(Re.z))),p=f+(.5-f)*s[0],_=f+(.5-f)*s[1],m=f+(.5-f)*s[2];Re.x=p*(f===Math.abs(Re.x)?Math.sign(Re.x):2*Re.x),Re.y=_*(f===Math.abs(Re.y)?Math.sign(Re.y):2*Re.y),Re.z=m*(f===Math.abs(Re.z)?Math.sign(Re.z):2*Re.z),r.localSpace?rs.copy(t.transformPoint(Re)):rs.copy(i).add(t.transformPoint(Re))}else{Re.normalize();const f=r.emitterRadius===0?0:r.emitterRadiusInner/r.emitterRadius,p=c*(1-f)+f;r.localSpace?rs.copy(Re.mulScalar(p*r.emitterRadius)):rs.copy(i).add(Re.mulScalar(p*r.emitterRadius))}let u=-k.lerp(r.rate,r.rate2,a)*n;if(r.pack8){const f=(rs.x-r.worldBounds.center.x)/r.worldBoundsSize.x+.5,p=(rs.y-r.worldBounds.center.y)/r.worldBoundsSize.y+.5,_=(rs.z-r.worldBounds.center.z)/r.worldBoundsSize.z+.5;let m=k.lerp(r.startAngle*k.DEG_TO_RAD,r.startAngle2*k.DEG_TO_RAD,a);m=m%(Math.PI*2)/(Math.PI*2);const g=Va(f);e[n*J]=g[0],e[n*J+1]=g[1];const w=Va(p);e[n*J+2]=w[0],e[n*J+3]=w[1];const v=Va(_);e[n*J+0+r.numParticlesPot*J]=v[0],e[n*J+1+r.numParticlesPot*J]=v[1];const y=Va(m);e[n*J+2+r.numParticlesPot*J]=y[0],e[n*J+3+r.numParticlesPot*J]=y[1];const T=1;e[n*J+3+r.numParticlesPot*J*2]=T;const C=Math.max(r.lifetime,(r.numParticles-1)*Math.max(r.rate,r.rate2)),S=r.lifetime+1;u=(u+C)/(C+S);const A=Xw(u);e[n*J+0+r.numParticlesPot*J*3]=A[0],e[n*J+1+r.numParticlesPot*J*3]=A[1],e[n*J+2+r.numParticlesPot*J*3]=A[2],e[n*J+3+r.numParticlesPot*J*3]=A[3]}else e[n*J]=rs.x,e[n*J+1]=rs.y,e[n*J+2]=rs.z,e[n*J+3]=k.lerp(r.startAngle*k.DEG_TO_RAD,r.startAngle2*k.DEG_TO_RAD,a),e[n*J+3+r.numParticlesPot*J]=u}update(e,t,s,i,n,r,a,o){let h,c,d;const u=this._emitter;if(u.meshInstance.node){const x=u.meshInstance.node.worldTransform;for(let P=0;P<12;P++)yh.data[P]=x.data[P];xh.copy(yh),xh.invert(),vs=u.meshInstance.node.localScale,$u=Math.max(Math.max(vs.x,vs.y),vs.z)}r=u.meshInstance.node===null||u.localSpace?b.ZERO:u.meshInstance.node.getPosition();const f=u.camera?u.camera._node.getPosition():b.ZERO,p=u.useMesh?17:15;let _,m,g,w,v,y,T,C,S;const A=u.precision-1;for(let x=0;x<u.numParticles;x++){const P=Math.floor(u.vbCPU[x*u.numParticleVerts*(u.useMesh?6:4)+3]),I=s[P*J+0+u.numParticlesPot*2*J];jt.x=I,jt.y=s[P*J+1+u.numParticlesPot*2*J],jt.z=s[P*J+2+u.numParticlesPot*2*J];const E=u.rate+(u.rate2-u.rate)*I,O=u.lifetime;let D=s[P*J+3+u.numParticlesPot*J]+a;const U=Hw(D/O);let W=0,M=0;const R=0;(D-a<=0||D>=O)&&this.calcSpawnPosition(s,i,n,r,P);let F=D>0&&D<O;F&&(d=U*A,_=Math.floor(d),m=Math.ceil(d),d%=1,h=u.qRotSpeed[_],c=u.qRotSpeed[m],g=h+(c-h)*d,h=u.qRotSpeed2[_],c=u.qRotSpeed2[m],w=h+(c-h)*d,h=u.qScale[_],c=u.qScale[m],W=h+(c-h)*d,h=u.qScale2[_],c=u.qScale2[m],v=h+(c-h)*d,h=u.qAlpha[_],c=u.qAlpha[m],y=h+(c-h)*d,h=u.qAlpha2[_],c=u.qAlpha2[m],T=h+(c-h)*d,h=u.qRadialSpeed[_],c=u.qRadialSpeed[m],C=h+(c-h)*d,h=u.qRadialSpeed2[_],c=u.qRadialSpeed2[m],S=h+(c-h)*d,C+=(S-C)*(I*100%1),mn.x=s[P*J],mn.y=s[P*J+1],mn.z=s[P*J+2],u.localSpace?dr.copy(mn):dr.copy(mn).sub(r),dr.normalize().mulScalar(C),_*=3,m*=3,h=u.qLocalVelocity[_],c=u.qLocalVelocity[m],Ve.x=h+(c-h)*d,h=u.qLocalVelocity[_+1],c=u.qLocalVelocity[m+1],Ve.y=h+(c-h)*d,h=u.qLocalVelocity[_+2],c=u.qLocalVelocity[m+2],Ve.z=h+(c-h)*d,h=u.qLocalVelocity2[_],c=u.qLocalVelocity2[m],gn.x=h+(c-h)*d,h=u.qLocalVelocity2[_+1],c=u.qLocalVelocity2[m+1],gn.y=h+(c-h)*d,h=u.qLocalVelocity2[_+2],c=u.qLocalVelocity2[m+2],gn.z=h+(c-h)*d,h=u.qVelocity[_],c=u.qVelocity[m],wt.x=h+(c-h)*d,h=u.qVelocity[_+1],c=u.qVelocity[m+1],wt.y=h+(c-h)*d,h=u.qVelocity[_+2],c=u.qVelocity[m+2],wt.z=h+(c-h)*d,h=u.qVelocity2[_],c=u.qVelocity2[m],_n.x=h+(c-h)*d,h=u.qVelocity2[_+1],c=u.qVelocity2[m+1],_n.y=h+(c-h)*d,h=u.qVelocity2[_+2],c=u.qVelocity2[m+2],_n.z=h+(c-h)*d,Ve.x+=(gn.x-Ve.x)*jt.x,Ve.y+=(gn.y-Ve.y)*jt.y,Ve.z+=(gn.z-Ve.z)*jt.z,u.initialVelocity>0&&(u.emitterShape===c0?(Re.copy(jt).mulScalar(2).sub(b.ONE).normalize(),Ve.add(Re.mulScalar(u.initialVelocity))):Ve.add(b.FORWARD.mulScalar(u.initialVelocity))),wt.x+=(_n.x-wt.x)*jt.x,wt.y+=(_n.y-wt.y)*jt.y,wt.z+=(_n.z-wt.z)*jt.z,g+=(w-g)*jt.y,W=(W+(v-W)*(I*1e4%1))*$u,M=(T-y)*(I*1e3%1),u.meshInstance.node&&(u.localSpace?(Ve.x/=vs.x,Ve.y/=vs.y,Ve.z/=vs.z):yh.transformPoint(Ve,Ve)),u.localSpace?(xh.transformPoint(wt,wt),Ve.add(wt).add(dr)):(Ve.add(wt.mul(vs)),Ve.add(dr.mul(vs))),Na.copy(Ve),Ku.copy(mn).add(Ve.mulScalar(a)),rt.copy(Ku),s[P*J]=rt.x,s[P*J+1]=rt.y,s[P*J+2]=rt.z,s[P*J+3]+=g*a,u.wrap&&u.wrapBounds&&(u.localSpace||rt.sub(r),rt.x=vh(rt.x,u.wrapBounds.x)-u.wrapBounds.x*.5,rt.y=vh(rt.y,u.wrapBounds.y)-u.wrapBounds.y*.5,rt.z=vh(rt.z,u.wrapBounds.z)-u.wrapBounds.z*.5,u.localSpace||rt.add(r)),u.sort>0&&(u.sort===1?(Ti.copy(rt).sub(f),u.particleDistance[P]=-(Ti.x*Ti.x+Ti.y*Ti.y+Ti.z*Ti.z)):u.sort===2?u.particleDistance[P]=D:u.sort===3&&(u.particleDistance[P]=-D))),o?D<0&&(s[P*J+3+u.numParticlesPot*2*J]=-1):(D>=O&&(D-=Math.max(O,(u.numParticles-1)*E),s[P*J+3+u.numParticlesPot*2*J]=u.loop?1:-1),D<0&&u.loop&&(s[P*J+3+u.numParticlesPot*2*J]=1)),s[P*J+3+u.numParticlesPot*2*J]<0&&(F=!1),s[P*J+3+u.numParticlesPot*J]=D;for(let N=0;N<u.numParticleVerts;N++){const z=(x*u.numParticleVerts+N)*(u.useMesh?6:4);let q=u.vbCPU[z],Y=u.vbCPU[z+1],Z=u.vbCPU[z+2];F||(q=Y=Z=0);const j=x*u.numParticleVerts*p+N*p;e[j]=rt.x,e[j+1]=rt.y,e[j+2]=rt.z,e[j+3]=U,e[j+4]=u.alignToMotion?R:s[P*J+3],e[j+5]=W,e[j+6]=M,e[j+7]=Na.x,e[j+8]=q,e[j+9]=Y,e[j+10]=Z,e[j+11]=Na.y,e[j+12]=P,e[j+13]=Na.z,e[j+14]=u.vbCPU[z+3],u.useMesh&&(e[j+15]=u.vbCPU[z+4],e[j+16]=u.vbCPU[z+5])}}if(u.sort>fc&&u.camera){const x=u.useMesh?6:4,P=u.particleDistance;for(let I=0;I<u.numParticles;I++)t[I][0]=I,t[I][1]=P[Math.floor(u.vbCPU[I*u.numParticleVerts*x+3])];u.vbOld.set(u.vbCPU),t.sort(function(I,E){return I[1]-E[1]});for(let I=0;I<u.numParticles;I++){const E=t[I][0]*u.numParticleVerts*x,O=I*u.numParticleVerts*x;for(let D=0;D<u.numParticleVerts*x;D++)u.vbCPU[O+D]=u.vbOld[E+D]}}}}const Zu=new Wt,Ju=new Wt,Qu=new Wt;class jw{constructor(e,t){this._emitter=e,this.frameRandomUniform=new Float32Array(3),this.emitterPosUniform=new Float32Array(3),this.emitterScaleUniform=new Float32Array([1,1,1]),this.worldBoundsMulUniform=new Float32Array(3),this.worldBoundsAddUniform=new Float32Array(3),this.inBoundsSizeUniform=new Float32Array(3),this.inBoundsCenterUniform=new Float32Array(3),this.constantParticleTexIN=t.scope.resolve("particleTexIN"),this.constantParticleTexOUT=t.scope.resolve("particleTexOUT"),this.constantEmitterPos=t.scope.resolve("emitterPos"),this.constantEmitterScale=t.scope.resolve("emitterScale"),this.constantSpawnBounds=t.scope.resolve("spawnBounds"),this.constantSpawnPosInnerRatio=t.scope.resolve("spawnPosInnerRatio"),this.constantSpawnBoundsSphere=t.scope.resolve("spawnBoundsSphere"),this.constantSpawnBoundsSphereInnerRatio=t.scope.resolve("spawnBoundsSphereInnerRatio"),this.constantInitialVelocity=t.scope.resolve("initialVelocity"),this.constantFrameRandom=t.scope.resolve("frameRandom"),this.constantDelta=t.scope.resolve("delta"),this.constantRate=t.scope.resolve("rate"),this.constantRateDiv=t.scope.resolve("rateDiv"),this.constantLifetime=t.scope.resolve("lifetime"),this.constantGraphSampleSize=t.scope.resolve("graphSampleSize"),this.constantGraphNumSamples=t.scope.resolve("graphNumSamples"),this.constantInternalTex0=t.scope.resolve("internalTex0"),this.constantInternalTex1=t.scope.resolve("internalTex1"),this.constantInternalTex2=t.scope.resolve("internalTex2"),this.constantInternalTex3=t.scope.resolve("internalTex3"),this.constantEmitterMatrix=t.scope.resolve("emitterMatrix"),this.constantEmitterMatrixInv=t.scope.resolve("emitterMatrixInv"),this.constantNumParticles=t.scope.resolve("numParticles"),this.constantNumParticlesPot=t.scope.resolve("numParticlesPot"),this.constantLocalVelocityDivMult=t.scope.resolve("localVelocityDivMult"),this.constantVelocityDivMult=t.scope.resolve("velocityDivMult"),this.constantRotSpeedDivMult=t.scope.resolve("rotSpeedDivMult"),this.constantSeed=t.scope.resolve("seed"),this.constantStartAngle=t.scope.resolve("startAngle"),this.constantStartAngle2=t.scope.resolve("startAngle2"),this.constantOutBoundsMul=t.scope.resolve("outBoundsMul"),this.constantOutBoundsAdd=t.scope.resolve("outBoundsAdd"),this.constantInBoundsSize=t.scope.resolve("inBoundsSize"),this.constantInBoundsCenter=t.scope.resolve("inBoundsCenter"),this.constantMaxVel=t.scope.resolve("maxVel"),this.constantFaceTangent=t.scope.resolve("faceTangent"),this.constantFaceBinorm=t.scope.resolve("faceBinorm")}_setInputBounds(){this.inBoundsSizeUniform[0]=this._emitter.prevWorldBoundsSize.x,this.inBoundsSizeUniform[1]=this._emitter.prevWorldBoundsSize.y,this.inBoundsSizeUniform[2]=this._emitter.prevWorldBoundsSize.z,this.constantInBoundsSize.setValue(this.inBoundsSizeUniform),this.inBoundsCenterUniform[0]=this._emitter.prevWorldBoundsCenter.x,this.inBoundsCenterUniform[1]=this._emitter.prevWorldBoundsCenter.y,this.inBoundsCenterUniform[2]=this._emitter.prevWorldBoundsCenter.z,this.constantInBoundsCenter.setValue(this.inBoundsCenterUniform)}randomize(){this.frameRandomUniform[0]=Math.random(),this.frameRandomUniform[1]=Math.random(),this.frameRandomUniform[2]=Math.random()}update(e,t,s,i,n){const r=this._emitter;e.setBlending(!1),e.setColorWrite(!0,!0,!0,!0),e.setCullMode(_t),e.setDepthTest(!1),e.setDepthWrite(!1),this.randomize(),this.constantGraphSampleSize.setValue(1/r.precision),this.constantGraphNumSamples.setValue(r.precision),this.constantNumParticles.setValue(r.numParticles),this.constantNumParticlesPot.setValue(r.numParticlesPot),this.constantInternalTex0.setValue(r.internalTex0),this.constantInternalTex1.setValue(r.internalTex1),this.constantInternalTex2.setValue(r.internalTex2),this.constantInternalTex3.setValue(r.internalTex3);const a=r.meshInstance.node,o=a===null?b.ONE:a.localScale;if(r.pack8){this.worldBoundsMulUniform[0]=r.worldBoundsMul.x,this.worldBoundsMulUniform[1]=r.worldBoundsMul.y,this.worldBoundsMulUniform[2]=r.worldBoundsMul.z,this.constantOutBoundsMul.setValue(this.worldBoundsMulUniform),this.worldBoundsAddUniform[0]=r.worldBoundsAdd.x,this.worldBoundsAddUniform[1]=r.worldBoundsAdd.y,this.worldBoundsAddUniform[2]=r.worldBoundsAdd.z,this.constantOutBoundsAdd.setValue(this.worldBoundsAddUniform),this._setInputBounds();let f=r.maxVel*Math.max(Math.max(o.x,o.y),o.z);f=Math.max(f,1),this.constantMaxVel.setValue(f)}const h=a===null||r.localSpace?b.ZERO:a.getPosition(),c=a===null?H.IDENTITY:a.getWorldTransform();r.emitterShape===as?(Zu.setFromMat4(t),this.constantSpawnBounds.setValue(Zu.data),this.constantSpawnPosInnerRatio.setValue(s)):(this.constantSpawnBoundsSphere.setValue(r.emitterRadius),this.constantSpawnBoundsSphereInnerRatio.setValue(r.emitterRadius===0?0:r.emitterRadiusInner/r.emitterRadius)),this.constantInitialVelocity.setValue(r.initialVelocity),Ju.setFromMat4(c),c.invertTo3x3(Qu),this.emitterPosUniform[0]=h.x,this.emitterPosUniform[1]=h.y,this.emitterPosUniform[2]=h.z,this.constantEmitterPos.setValue(this.emitterPosUniform),this.constantFrameRandom.setValue(this.frameRandomUniform),this.constantDelta.setValue(i),this.constantRate.setValue(r.rate),this.constantRateDiv.setValue(r.rate2-r.rate),this.constantStartAngle.setValue(r.startAngle*k.DEG_TO_RAD),this.constantStartAngle2.setValue(r.startAngle2*k.DEG_TO_RAD),this.constantSeed.setValue(r.seed),this.constantLifetime.setValue(r.lifetime),this.emitterScaleUniform[0]=o.x,this.emitterScaleUniform[1]=o.y,this.emitterScaleUniform[2]=o.z,this.constantEmitterScale.setValue(this.emitterScaleUniform),this.constantEmitterMatrix.setValue(Ju.data),this.constantEmitterMatrixInv.setValue(Qu.data),this.constantLocalVelocityDivMult.setValue(r.localVelocityUMax),this.constantVelocityDivMult.setValue(r.velocityUMax),this.constantRotSpeedDivMult.setValue(r.rotSpeedUMax[0]);let d=r.swapTex?r.particleTexOUT:r.particleTexIN;d=r.beenReset?r.particleTexStart:d;const u=r.swapTex?r.particleTexIN:r.particleTexOUT;this.constantParticleTexIN.setValue(d),ss(e,r.swapTex?r.rtParticleTexIN:r.rtParticleTexOUT,n?r.shaderParticleUpdateOnStop:r.loop?r.shaderParticleUpdateRespawn:r.shaderParticleUpdateNoRespawn),r.material.setParameter("particleTexOUT",d),r.material.setParameter("particleTexIN",u),r.beenReset=!1,r.swapTex=!r.swapTex,e.setDepthTest(!0),e.setDepthWrite(!0),r.prevWorldBoundsSize.copy(r.worldBoundsSize),r.prevWorldBoundsCenter.copy(r.worldBounds.center),r.pack8&&this._setInputBounds()}}const ef=[[-1,-1],[1,-1],[1,1],[-1,1]];function Lt(l,e,t,s,i=nt,n,r){let a=ve;r&&i===he&&(a=$e);const o=new ae(l,{width:e,height:t,format:i,cubemap:!1,mipmaps:!1,minFilter:a,magFilter:a,addressU:se,addressV:se,name:"ParticleSystemTexture"}),h=o.lock();if(i===he){const c=new Uint8Array(s.length);for(let d=0;d<s.length;d++)c[d]=s[d]*n*255;s=c}return h.set(s),o.unlock(),o}function tf(l){return Math.max(Math.min(l,1),0)}const sf=new Ut([0,0,1,0]),nf=new Ut([0,1,1,1]),rf=new di([0,0,1,0],[0,0,1,0],[0,0,1,0]),Yw=new di([0,1,1,1],[0,1,1,1],[0,1,1,1]);let Ss=2;const Ga=4,bs=new Float32Array(3),Ci=new H,af=new b,Wa=new b,Ha=new b;let wc,co;function Q(l,e){co[l]!==void 0&&co[l]!==null?wc[l]=co[l]:wc[l]=e}function Rm(l,e,t){return(l*255<<16|e*255<<8|t*255)/(1<<24)}function of(l,e){const t=l.length/3,s=new Array(t*4);for(let i=0;i<t;i++)s[i*4]=l[i*3],s[i*4+1]=l[i*3+1],s[i*4+2]=l[i*3+2],s[i*4+3]=Rm(e[i*3],e[i*3+1],e[i*3+2]);return s}function $w(l,e){const t=new Array(e.length*4);for(let s=0;s<e.length;s++)t[s*4]=l[s*3],t[s*4+1]=l[s*3+1],t[s*4+2]=l[s*3+2],t[s*4+3]=e[s];return t}function Kw(l,e,t,s,i){const n=new Array(l.length*4);for(let r=0;r<l.length;r++)n[r*4]=l[r],n[r*4+1]=e[r],n[r*4+2]=0,n[r*4+3]=Rm(t[r],s[r],i[r]);return n}function Zw(l,e){const t=new Array(l.length*4);for(let s=0;s<l.length;s++)t[s*4]=l[s],t[s*4+1]=e[s],t[s*4+2]=0,t[s*4+3]=0;return t}function Jw(l){const e=Math.max(l.rate,l.rate2)*l.numParticles+l.lifetime;return Date.now()+e*1e3}function Qw(l,e){const t=new Float32Array(l.length);for(let s=0;s<l.length;s++)t[s]=l[s]-e[s];return t}function Li(l,e){const t=e.length,s=l.length/t;for(let i=0;i<s;i++)for(let n=0;n<t;n++){const r=Math.abs(l[i*t+n]);e[n]=Math.max(e[n],r)}}function eT(l,e){const t=e.length,s=l.length/t;for(let i=0;i<s;i++)for(let n=0;n<t;n++)l[i*t+n]/=e[n]===0?1:e[n],l[i*t+n]*=.5,l[i*t+n]+=.5}function Ai(l,e,t){const s=Qw(e,l);return Li(s,t),eT(s,t),s}const tT=new Zn;class sT{constructor(e,t){this.graphicsDevice=e;const s=e,i=32;this.precision=i,this._addTimeTime=0,wc=this,co=t,Q("numParticles",1),this.numParticles>e.maxTextureSize&&(this.numParticles=e.maxTextureSize),Q("rate",1),Q("rate2",this.rate),Q("lifetime",50),Q("emitterExtents",new b(0,0,0)),Q("emitterExtentsInner",new b(0,0,0)),Q("emitterRadius",0),Q("emitterRadiusInner",0),Q("emitterShape",as),Q("initialVelocity",1),Q("wrap",!1),Q("localSpace",!1),Q("screenSpace",!1),Q("wrapBounds",null),Q("colorMap",this.defaultParamTexture),Q("normalMap",null),Q("loop",!0),Q("preWarm",!1),Q("sort",fc),Q("mode",lm),Q("scene",null),Q("lighting",!1),Q("halfLambert",!1),Q("intensity",1),Q("stretch",0),Q("alignToMotion",!1),Q("depthSoftening",0),Q("mesh",null),Q("particleNormal",new b(0,1,0)),Q("orientation",oo),Q("depthWrite",!1),Q("noFog",!1),Q("blendType",yt),Q("node",null),Q("startAngle",0),Q("startAngle2",this.startAngle),Q("animTilesX",1),Q("animTilesY",1),Q("animStartFrame",0),Q("animNumFrames",1),Q("animNumAnimations",1),Q("animIndex",0),Q("randomizeAnimIndex",!1),Q("animSpeed",1),Q("animLoop",!0),this._gpuUpdater=new jw(this,s),this._cpuUpdater=new qw(this),this.constantLightCube=s.scope.resolve("lightCube[0]"),this.emitterPosUniform=new Float32Array(3),this.wrapBoundsUniform=new Float32Array(3),this.emitterScaleUniform=new Float32Array([1,1,1]),Q("colorGraph",Yw),Q("colorGraph2",this.colorGraph),Q("scaleGraph",nf),Q("scaleGraph2",this.scaleGraph),Q("alphaGraph",nf),Q("alphaGraph2",this.alphaGraph),Q("localVelocityGraph",rf),Q("localVelocityGraph2",this.localVelocityGraph),Q("velocityGraph",rf),Q("velocityGraph2",this.velocityGraph),Q("rotationSpeedGraph",sf),Q("rotationSpeedGraph2",this.rotationSpeedGraph),Q("radialSpeedGraph",sf),Q("radialSpeedGraph2",this.radialSpeedGraph),this.lightCube=new Float32Array(6*3),this.lightCubeDir=new Array(6),this.lightCubeDir[0]=new b(-1,0,0),this.lightCubeDir[1]=new b(1,0,0),this.lightCubeDir[2]=new b(0,-1,0),this.lightCubeDir[3]=new b(0,1,0),this.lightCubeDir[4]=new b(0,0,-1),this.lightCubeDir[5]=new b(0,0,1),this.animTilesParams=new Float32Array(2),this.animParams=new Float32Array(4),this.animIndexParams=new Float32Array(2),this.internalTex0=null,this.internalTex1=null,this.internalTex2=null,this.colorParam=null,this.vbToSort=null,this.vbOld=null,this.particleDistance=null,this.camera=null,this.swapTex=!1,this.useMesh=!0,this.useCpu=!e.supportsGpuParticles,this.pack8=!0,this.localBounds=new _e,this.worldBoundsNoTrail=new _e,this.worldBoundsTrail=[new _e,new _e],this.worldBounds=new _e,this.worldBoundsSize=new b,this.prevWorldBoundsSize=new b,this.prevWorldBoundsCenter=new b,this.prevEmitterExtents=this.emitterExtents,this.prevEmitterRadius=this.emitterRadius,this.worldBoundsMul=new b,this.worldBoundsAdd=new b,this.timeToSwitchBounds=0,this.shaderParticleUpdateRespawn=null,this.shaderParticleUpdateNoRespawn=null,this.shaderParticleUpdateOnStop=null,this.numParticleVerts=0,this.numParticleIndices=0,this.material=null,this.meshInstance=null,this.drawOrder=0,this.seed=Math.random(),this.fixedTimeStep=1/60,this.maxSubSteps=10,this.simTime=0,this.simTimeTotal=0,this.beenReset=!1,this._layer=null,this.rebuild()}get defaultParamTexture(){return tT.get(this.graphicsDevice,()=>{const s=new Float32Array(1024);for(let n=0;n<16;n++)for(let r=0;r<16;r++){const a=r+1-8.5,o=n+1-8.5,h=tf(1-tf(Math.sqrt(a*a+o*o)/16)-.5),c=n*16+r;s[c*4]=1,s[c*4+1]=1,s[c*4+2]=1,s[c*4+3]=h}const i=Lt(this.graphicsDevice,16,16,s,he,1,!0);return i.minFilter=$e,i.magFilter=$e,i})}onChangeCamera(){this.regenShader(),this.resetMaterial()}calculateBoundsMad(){this.worldBoundsMul.x=1/this.worldBoundsSize.x,this.worldBoundsMul.y=1/this.worldBoundsSize.y,this.worldBoundsMul.z=1/this.worldBoundsSize.z,this.worldBoundsAdd.copy(this.worldBounds.center).mul(this.worldBoundsMul).mulScalar(-1),this.worldBoundsAdd.x+=.5,this.worldBoundsAdd.y+=.5,this.worldBoundsAdd.z+=.5}calculateWorldBounds(){if(!this.node)return;if(this.prevWorldBoundsSize.copy(this.worldBoundsSize),this.prevWorldBoundsCenter.copy(this.worldBounds.center),!this.useCpu){let s=!1;this.emitterShape===as?s=!this.emitterExtents.equals(this.prevEmitterExtents):s=this.emitterRadius!==this.prevEmitterRadius,s&&this.calculateLocalBounds()}const e=this.node.getWorldTransform();this.localSpace?this.worldBoundsNoTrail.copy(this.localBounds):this.worldBoundsNoTrail.setFromTransformedAabb(this.localBounds,e),this.worldBoundsTrail[0].add(this.worldBoundsNoTrail),this.worldBoundsTrail[1].add(this.worldBoundsNoTrail);const t=this.simTimeTotal;t>=this.timeToSwitchBounds&&(this.worldBoundsTrail[0].copy(this.worldBoundsTrail[1]),this.worldBoundsTrail[1].copy(this.worldBoundsNoTrail),this.timeToSwitchBounds=t+this.lifetime),this.worldBounds.copy(this.worldBoundsTrail[0]),this.worldBoundsSize.copy(this.worldBounds.halfExtents).mulScalar(2),this.localSpace?(this.meshInstance.aabb.setFromTransformedAabb(this.worldBounds,e),this.meshInstance.mesh.aabb.setFromTransformedAabb(this.worldBounds,e)):(this.meshInstance.aabb.copy(this.worldBounds),this.meshInstance.mesh.aabb.copy(this.worldBounds)),this.meshInstance._aabbVer=1-this.meshInstance._aabbVer,this.pack8&&this.calculateBoundsMad()}resetWorldBounds(){this.node&&(this.worldBoundsNoTrail.setFromTransformedAabb(this.localBounds,this.localSpace?H.IDENTITY:this.node.getWorldTransform()),this.worldBoundsTrail[0].copy(this.worldBoundsNoTrail),this.worldBoundsTrail[1].copy(this.worldBoundsNoTrail),this.worldBounds.copy(this.worldBoundsTrail[0]),this.worldBoundsSize.copy(this.worldBounds.halfExtents).mulScalar(2),this.prevWorldBoundsSize.copy(this.worldBoundsSize),this.prevWorldBoundsCenter.copy(this.worldBounds.center),this.simTimeTotal=0,this.timeToSwitchBounds=0)}calculateLocalBounds(){let e=Number.MAX_VALUE,t=Number.MAX_VALUE,s=Number.MAX_VALUE,i=-Number.MAX_VALUE,n=-Number.MAX_VALUE,r=-Number.MAX_VALUE,a=0,o=0;const h=this.lifetime/this.precision,c=[this.qVelocity,this.qVelocity2],d=[this.qLocalVelocity,this.qLocalVelocity2],u=[0,0],f=[0,0],p=[0,0],_=[0,0],m=[0,0];let g,w,v;for(let T=0;T<this.precision+1;T++){const C=Math.min(T,this.precision-1);for(let S=0;S<2;S++)g=d[S][C*3+0]*h+u[S],w=d[S][C*3+1]*h+f[S],v=d[S][C*3+2]*h+p[S],e=Math.min(g,e),t=Math.min(w,t),s=Math.min(v,s),i=Math.max(g,i),n=Math.max(w,n),r=Math.max(v,r),u[S]=g,f[S]=w,p[S]=v;for(let S=0;S<2;S++)m[S]+=h*Math.sqrt(c[S][C*3+0]*c[S][C*3+0]+c[S][C*3+1]*c[S][C*3+1]+c[S][C*3+2]*c[S][C*3+2]);_[0]+=this.qRadialSpeed[C]*h,_[1]+=this.qRadialSpeed2[C]*h,a=Math.max(a,Math.max(Math.abs(_[0]),Math.abs(_[1]))),o=Math.max(o,this.qScale[C])}this.emitterShape===as?(g=this.emitterExtents.x*.5,w=this.emitterExtents.y*.5,v=this.emitterExtents.z*.5):(g=this.emitterRadius,w=this.emitterRadius,v=this.emitterRadius);const y=Math.max(m[0],m[1]);Wa.x=e-o-g-a-y,Wa.y=t-o-w-a-y,Wa.z=s-o-v-a-y,Ha.x=i+o+g+a+y,Ha.y=n+o+w+a+y,Ha.z=r+o+v+a+y,this.localBounds.setMinMax(Wa,Ha)}rebuild(){const e=this.graphicsDevice;this.colorMap===null&&(this.colorMap=this.defaultParamTexture),this.spawnBounds=this.emitterShape===as?this.emitterExtents:this.emitterRadius,this.useCpu=this.useCpu||this.sort>fc||e.maxVertexTextures<=1||e.fragmentUniformsCount<64||e.forceCpuParticles||!e.extTextureFloat,this._destroyResources(),this.pack8=(this.pack8||!e.textureFloatRenderable)&&!this.useCpu,Ss=this.useCpu||this.pack8?4:2,this.useMesh=!1,this.mesh&&(this.numParticles*this.mesh.vertexBuffer.numVertices>65535||(this.useMesh=!0)),this.numParticlesPot=k.nextPowerOfTwo(this.numParticles),this.rebuildGraphs(),this.calculateLocalBounds(),this.resetWorldBounds(),this.node&&(this.worldBounds.setFromTransformedAabb(this.localBounds,this.localSpace?H.IDENTITY:this.node.getWorldTransform()),this.worldBoundsTrail[0].copy(this.worldBounds),this.worldBoundsTrail[1].copy(this.worldBounds),this.worldBoundsSize.copy(this.worldBounds.halfExtents).mulScalar(2),this.prevWorldBoundsSize.copy(this.worldBoundsSize),this.prevWorldBoundsCenter.copy(this.worldBounds.center),this.pack8&&this.calculateBoundsMad()),this.vbToSort=new Array(this.numParticles);for(let c=0;c<this.numParticles;c++)this.vbToSort[c]=[0,0];this.particleDistance=new Float32Array(this.numParticles),this._gpuUpdater.randomize(),this.particleTex=new Float32Array(this.numParticlesPot*Ss*Ga);const t=this.node===null||this.localSpace?b.ZERO:this.node.getPosition();this.emitterShape===as&&(this.node===null||this.localSpace?Ci.setTRS(b.ZERO,ee.IDENTITY,this.spawnBounds):Ci.setTRS(b.ZERO,this.node.getRotation(),af.copy(this.spawnBounds).mul(this.node.localScale)),bs[0]=this.emitterExtents.x!==0?this.emitterExtentsInner.x/this.emitterExtents.x:0,bs[1]=this.emitterExtents.y!==0?this.emitterExtentsInner.y/this.emitterExtents.y:0,bs[2]=this.emitterExtents.z!==0?this.emitterExtentsInner.z/this.emitterExtents.z:0);for(let c=0;c<this.numParticles;c++)this._cpuUpdater.calcSpawnPosition(this.particleTex,Ci,bs,t,c),this.useCpu&&(this.particleTex[c*Ga+3+this.numParticlesPot*2*Ga]=1);this.particleTexStart=new Float32Array(this.numParticlesPot*Ss*Ga);for(let c=0;c<this.particleTexStart.length;c++)this.particleTexStart[c]=this.particleTex[c];this.useCpu||(this.pack8?(this.particleTexIN=Lt(e,this.numParticlesPot,Ss,this.particleTex,he,1,!1),this.particleTexOUT=Lt(e,this.numParticlesPot,Ss,this.particleTex,he,1,!1),this.particleTexStart=Lt(e,this.numParticlesPot,Ss,this.particleTexStart,he,1,!1)):(this.particleTexIN=Lt(e,this.numParticlesPot,Ss,this.particleTex),this.particleTexOUT=Lt(e,this.numParticlesPot,Ss,this.particleTex),this.particleTexStart=Lt(e,this.numParticlesPot,Ss,this.particleTexStart)),this.rtParticleTexIN=new ht({colorBuffer:this.particleTexIN,depth:!1}),this.rtParticleTexOUT=new ht({colorBuffer:this.particleTexOUT,depth:!1}),this.swapTex=!1);const s=(this.localSpace?`#define LOCAL_SPACE
`:"")+B.particleUpdaterInitPS+(this.pack8?B.particleInputRgba8PS+B.particleOutputRgba8PS:B.particleInputFloatPS+B.particleOutputFloatPS)+(this.emitterShape===as?B.particleUpdaterAABBPS:B.particleUpdaterSpherePS)+B.particleUpdaterStartPS,i=s+B.particleUpdaterRespawnPS+B.particleUpdaterEndPS,n=s+B.particleUpdaterNoRespawnPS+B.particleUpdaterEndPS,r=s+B.particleUpdaterOnStopPS+B.particleUpdaterEndPS,a=this.emitterShape+""+this.pack8+this.localSpace;this.shaderParticleUpdateRespawn=Gt(e,B.fullscreenQuadVS,i,"fsQuad0"+a),this.shaderParticleUpdateNoRespawn=Gt(e,B.fullscreenQuadVS,n,"fsQuad1"+a),this.shaderParticleUpdateOnStop=Gt(e,B.fullscreenQuadVS,r,"fsQuad2"+a),this.numParticleVerts=this.useMesh?this.mesh.vertexBuffer.numVertices:4,this.numParticleIndices=this.useMesh?this.mesh.indexBuffer[0].numIndices:6,this._allocate(this.numParticles);const o=new Ht(e);o.vertexBuffer=this.vertexBuffer,o.indexBuffer[0]=this.indexBuffer,o.primitive[0].type=ts,o.primitive[0].base=0,o.primitive[0].count=this.numParticles*this.numParticleIndices,o.primitive[0].indexed=!0,this.material=new gi,this.material.name=this.node.name,this.material.cull=_t,this.material.alphaWrite=!1,this.material.blend=!0,this.material.blendType=this.blendType,this.material.depthWrite=this.depthWrite,this.material.emitter=this,this.regenShader(),this.resetMaterial();const h=this.meshInstance?this.meshInstance.visible:!0;this.meshInstance=new we(o,this.material,this.node),this.meshInstance.pick=!1,this.meshInstance.updateKey(),this.meshInstance.cull=!0,this.meshInstance._noDepthDrawGl1=!0,this.localSpace?this.meshInstance.aabb.setFromTransformedAabb(this.worldBounds,this.node.getWorldTransform()):this.meshInstance.aabb.copy(this.worldBounds),this.meshInstance._updateAabb=!1,this.meshInstance.visible=h,this._initializeTextures(),this.resetTime(),this.addTime(0,!1),this.preWarm&&this.prewarm(this.lifetime)}_isAnimated(){return this.animNumFrames>=1&&(this.animTilesX>1||this.animTilesY>1)&&(this.colorMap&&this.colorMap!==this.defaultParamTexture||this.normalMap)}rebuildGraphs(){const e=this.precision,t=this.graphicsDevice;this.qLocalVelocity=this.localVelocityGraph.quantize(e),this.qVelocity=this.velocityGraph.quantize(e),this.qColor=this.colorGraph.quantizeClamped(e,0,1),this.qRotSpeed=this.rotationSpeedGraph.quantize(e),this.qScale=this.scaleGraph.quantize(e),this.qAlpha=this.alphaGraph.quantize(e),this.qRadialSpeed=this.radialSpeedGraph.quantize(e),this.qLocalVelocity2=this.localVelocityGraph2.quantize(e),this.qVelocity2=this.velocityGraph2.quantize(e),this.qColor2=this.colorGraph2.quantizeClamped(e,0,1),this.qRotSpeed2=this.rotationSpeedGraph2.quantize(e),this.qScale2=this.scaleGraph2.quantize(e),this.qAlpha2=this.alphaGraph2.quantize(e),this.qRadialSpeed2=this.radialSpeedGraph2.quantize(e);for(let s=0;s<e;s++)this.qRotSpeed[s]*=k.DEG_TO_RAD,this.qRotSpeed2[s]*=k.DEG_TO_RAD;if(this.localVelocityUMax=new Float32Array(3),this.velocityUMax=new Float32Array(3),this.colorUMax=new Float32Array(3),this.rotSpeedUMax=[0],this.scaleUMax=[0],this.alphaUMax=[0],this.radialSpeedUMax=[0],this.qLocalVelocityDiv=Ai(this.qLocalVelocity,this.qLocalVelocity2,this.localVelocityUMax),this.qVelocityDiv=Ai(this.qVelocity,this.qVelocity2,this.velocityUMax),this.qColorDiv=Ai(this.qColor,this.qColor2,this.colorUMax),this.qRotSpeedDiv=Ai(this.qRotSpeed,this.qRotSpeed2,this.rotSpeedUMax),this.qScaleDiv=Ai(this.qScale,this.qScale2,this.scaleUMax),this.qAlphaDiv=Ai(this.qAlpha,this.qAlpha2,this.alphaUMax),this.qRadialSpeedDiv=Ai(this.qRadialSpeed,this.qRadialSpeed2,this.radialSpeedUMax),this.pack8){const s=[0,0,0];Li(this.qVelocity,s);const i=[0,0,0];Li(this.qVelocity2,i);const n=[0,0,0];Li(this.qLocalVelocity,n);const r=[0,0,0];Li(this.qLocalVelocity2,r);const a=[0];Li(this.qRadialSpeed,a);const o=[0];Li(this.qRadialSpeed2,o);let h=Math.max(s[0],i[0]);h=Math.max(h,s[1]),h=Math.max(h,i[1]),h=Math.max(h,s[2]),h=Math.max(h,i[2]);let c=Math.max(n[0],r[0]);c=Math.max(c,n[1]),c=Math.max(c,r[1]),c=Math.max(c,n[2]),c=Math.max(c,r[2]);const d=Math.max(a[0],o[0]);this.maxVel=h+c+d}this.useCpu||(this.internalTex0=Lt(t,e,1,of(this.qLocalVelocity,this.qLocalVelocityDiv)),this.internalTex1=Lt(t,e,1,of(this.qVelocity,this.qVelocityDiv)),this.internalTex2=Lt(t,e,1,Kw(this.qRotSpeed,this.qScale,this.qScaleDiv,this.qRotSpeedDiv,this.qAlphaDiv)),this.internalTex3=Lt(t,e,1,Zw(this.qRadialSpeed,this.qRadialSpeedDiv))),this.colorParam=Lt(t,e,1,$w(this.qColor,this.qAlpha),he,1,!0)}_initializeTextures(){this.colorMap&&(this.material.setParameter("colorMap",this.colorMap),this.lighting&&this.normalMap&&this.material.setParameter("normalMap",this.normalMap))}regenShader(){const e=en(this.graphicsDevice);e.register("particle",Ww);const t=this.normalMap!==null;this.normalOption=0,this.lighting&&(this.normalOption=t?2:1),this.material.getShaderVariant=function(s,i,n,r,a,o,h,c){this.emitter.scene&&this.emitter.camera!==this.emitter.scene._activeCamera&&(this.emitter.camera=this.emitter.scene._activeCamera,this.emitter.onChangeCamera());const d=this.emitter.inTools;return e.getProgram("particle",{useCpu:this.emitter.useCpu,normal:this.emitter.normalOption,halflambert:this.emitter.halfLambert,stretch:this.emitter.stretch,alignToMotion:this.emitter.alignToMotion,soft:this.emitter.depthSoftening,mesh:this.emitter.useMesh,gamma:this.emitter.scene?this.emitter.scene.gammaCorrection:0,toneMap:this.emitter.scene?this.emitter.scene.toneMapping:0,fog:this.emitter.scene&&!this.emitter.noFog?this.emitter.scene.fog:"none",wrap:this.emitter.wrap&&this.emitter.wrapBounds,localSpace:this.emitter.localSpace,screenSpace:d?!1:this.emitter.screenSpace,blend:this.blendType,animTex:this.emitter._isAnimated(),animTexLoop:this.emitter.animLoop,pack8:this.emitter.pack8,customFace:this.emitter.orientation!==oo})},this.material.shader=this.material.getShaderVariant()}resetMaterial(){const e=this.material;e.setParameter("stretch",this.stretch),this._isAnimated()&&(e.setParameter("animTexTilesParams",this.animTilesParams),e.setParameter("animTexParams",this.animParams),e.setParameter("animTexIndexParams",this.animIndexParams)),e.setParameter("colorMult",this.intensity),this.useCpu||(e.setParameter("internalTex0",this.internalTex0),e.setParameter("internalTex1",this.internalTex1),e.setParameter("internalTex2",this.internalTex2),e.setParameter("internalTex3",this.internalTex3)),e.setParameter("colorParam",this.colorParam),e.setParameter("numParticles",this.numParticles),e.setParameter("numParticlesPot",this.numParticlesPot),e.setParameter("lifetime",this.lifetime),e.setParameter("rate",this.rate),e.setParameter("rateDiv",this.rate2-this.rate),e.setParameter("seed",this.seed),e.setParameter("scaleDivMult",this.scaleUMax[0]),e.setParameter("alphaDivMult",this.alphaUMax[0]),e.setParameter("radialSpeedDivMult",this.radialSpeedUMax[0]),e.setParameter("graphNumSamples",this.precision),e.setParameter("graphSampleSize",1/this.precision),e.setParameter("emitterScale",new Float32Array([1,1,1])),this.pack8&&(this._gpuUpdater._setInputBounds(),e.setParameter("inBoundsSize",this._gpuUpdater.inBoundsSizeUniform),e.setParameter("inBoundsCenter",this._gpuUpdater.inBoundsCenterUniform),e.setParameter("maxVel",this.maxVel)),this.wrap&&this.wrapBounds&&(this.wrapBoundsUniform[0]=this.wrapBounds.x,this.wrapBoundsUniform[1]=this.wrapBounds.y,this.wrapBoundsUniform[2]=this.wrapBounds.z,e.setParameter("wrapBounds",this.wrapBoundsUniform)),this.colorMap&&e.setParameter("colorMap",this.colorMap),this.lighting&&this.normalMap&&e.setParameter("normalMap",this.normalMap),this.depthSoftening>0&&e.setParameter("softening",1/(this.depthSoftening*this.depthSoftening*100)),this.stretch>0&&(e.cull=_t),this._compParticleFaceParams()}_compParticleFaceParams(){let e,t;if(this.orientation===oo)e=new Float32Array([1,0,0]),t=new Float32Array([0,0,1]);else{let s;this.orientation===d0?s=this.particleNormal.normalize():s=(this.node===null?H.IDENTITY:this.node.getWorldTransform()).transformVector(this.particleNormal).normalize();const i=new b(1,0,0);Math.abs(i.dot(s))===1&&i.set(0,0,1);const n=new b().cross(s,i).normalize();i.cross(n,s).normalize(),e=new Float32Array([i.x,i.y,i.z]),t=new Float32Array([n.x,n.y,n.z])}this.material.setParameter("faceTangent",e),this.material.setParameter("faceBinorm",t)}_allocate(e){const t=e*this.numParticleVerts,s=e*this.numParticleIndices;if(this.vertexBuffer===void 0||this.vertexBuffer.getNumVertices()!==t){if(this.useCpu){const c=[{semantic:Ao,components:4,type:ge},{semantic:Qh,components:4,type:ge},{semantic:Vp,components:4,type:ge},{semantic:Gp,components:1,type:ge},{semantic:Wp,components:this.useMesh?4:2,type:ge}],d=new dt(this.graphicsDevice,c);this.vertexBuffer=new Us(this.graphicsDevice,d,t,Nr),this.indexBuffer=new mi(this.graphicsDevice,Bs,s)}else{const c=[{semantic:Ao,components:4,type:ge}];this.useMesh&&c.push({semantic:Qh,components:2,type:ge});const d=new dt(this.graphicsDevice,c);this.vertexBuffer=new Us(this.graphicsDevice,d,t,Nr),this.indexBuffer=new mi(this.graphicsDevice,Bs,s)}const i=new Float32Array(this.vertexBuffer.lock());let n,r,a;if(this.useMesh){n=new Float32Array(this.mesh.vertexBuffer.lock()),r=n.length/this.mesh.vertexBuffer.numVertices;for(let c=0;c<this.mesh.vertexBuffer.format.elements.length;c++)if(this.mesh.vertexBuffer.format.elements[c].name===It){a=this.mesh.vertexBuffer.format.elements[c].offset/4;break}}for(let c=0;c<t;c++){const d=Math.floor(c/this.numParticleVerts);if(this.useMesh){const u=c%this.numParticleVerts;i[c*6]=n[u*r],i[c*6+1]=n[u*r+1],i[c*6+2]=n[u*r+2],i[c*6+3]=d,i[c*6+4]=n[u*r+a+0],i[c*6+5]=1-n[u*r+a+1]}else{const u=c%4;i[c*4]=ef[u][0],i[c*4+1]=ef[u][1],i[c*4+2]=0,i[c*4+3]=d}}this.useCpu&&(this.vbCPU=new Float32Array(i),this.vbOld=new Float32Array(this.vbCPU.length)),this.vertexBuffer.unlock(),this.useMesh&&this.mesh.vertexBuffer.unlock();let o=0;const h=new Uint16Array(this.indexBuffer.lock());this.useMesh&&(n=new Uint16Array(this.mesh.indexBuffer[0].lock()));for(let c=0;c<e;c++)if(this.useMesh)for(let d=0;d<this.numParticleIndices;d++)h[c*this.numParticleIndices+d]=n[d]+c*this.numParticleVerts;else{const d=c*4;h[o++]=d,h[o++]=d+1,h[o++]=d+2,h[o++]=d,h[o++]=d+2,h[o++]=d+3}this.indexBuffer.unlock(),this.useMesh&&this.mesh.indexBuffer[0].unlock()}}reset(){if(this.beenReset=!0,this.seed=Math.random(),this.material.setParameter("seed",this.seed),this.useCpu)for(let t=0;t<this.particleTexStart.length;t++)this.particleTex[t]=this.particleTexStart[t];else this._initializeTextures();this.resetWorldBounds(),this.resetTime();const e=this.loop;this.loop=!0,this.addTime(0,!1),this.loop=e,this.preWarm&&this.prewarm(this.lifetime)}prewarm(e){const t=e/this.lifetime,s=Math.min(Math.floor(t*this.precision),this.precision),i=e/s;for(let n=0;n<s;n++)this.addTime(i,!1)}resetTime(){this.endTime=Jw(this)}finishFrame(){this.useCpu&&this.vertexBuffer.unlock()}addTime(e,t){const s=this.graphicsDevice;if(this.simTimeTotal+=e,this.calculateWorldBounds(),this._isAnimated()){const r=this.animTilesParams;r[0]=1/this.animTilesX,r[1]=1/this.animTilesY;const a=this.animParams;a[0]=this.animStartFrame,a[1]=this.animNumFrames*this.animSpeed,a[2]=this.animNumFrames-1,a[3]=this.animNumAnimations-1;const o=this.animIndexParams;o[0]=this.animIndex,o[1]=this.randomizeAnimIndex}this.scene&&this.camera!==this.scene._activeCamera&&(this.camera=this.scene._activeCamera,this.onChangeCamera()),this.emitterShape===as&&(bs[0]=this.emitterExtents.x!==0?this.emitterExtentsInner.x/this.emitterExtents.x:0,bs[1]=this.emitterExtents.y!==0?this.emitterExtentsInner.y/this.emitterExtents.y:0,bs[2]=this.emitterExtents.z!==0?this.emitterExtentsInner.z/this.emitterExtents.z:0,this.meshInstance.node===null?Ci.setTRS(b.ZERO,ee.IDENTITY,this.emitterExtents):Ci.setTRS(b.ZERO,this.meshInstance.node.getRotation(),af.copy(this.emitterExtents).mul(this.meshInstance.node.localScale)));let i;const n=this.meshInstance.node===null?b.ONE:this.meshInstance.node.localScale;if(this.emitterScaleUniform[0]=n.x,this.emitterScaleUniform[1]=n.y,this.emitterScaleUniform[2]=n.z,this.material.setParameter("emitterScale",this.emitterScaleUniform),this.localSpace&&this.meshInstance.node&&(i=this.meshInstance.node.getPosition(),this.emitterPosUniform[0]=i.x,this.emitterPosUniform[1]=i.y,this.emitterPosUniform[2]=i.z,this.material.setParameter("emitterPos",this.emitterPosUniform)),this._compParticleFaceParams(),!this.useCpu)this._gpuUpdater.update(s,Ci,bs,e,t);else{const r=new Float32Array(this.vertexBuffer.lock());this._cpuUpdater.update(r,this.vbToSort,this.particleTex,Ci,bs,i,e,t)}this.loop||Date.now()>this.endTime&&(this.onFinished&&this.onFinished(),this.meshInstance.visible=!1),this.meshInstance&&(this.meshInstance.drawOrder=this.drawOrder)}_destroyResources(){this.particleTexIN&&(this.particleTexIN.destroy(),this.particleTexIN=null),this.particleTexOUT&&(this.particleTexOUT.destroy(),this.particleTexOUT=null),this.particleTexStart&&this.particleTexStart.destroy&&(this.particleTexStart.destroy(),this.particleTexStart=null),this.rtParticleTexIN&&(this.rtParticleTexIN.destroy(),this.rtParticleTexIN=null),this.rtParticleTexOUT&&(this.rtParticleTexOUT.destroy(),this.rtParticleTexOUT=null),this.internalTex0&&(this.internalTex0.destroy(),this.internalTex0=null),this.internalTex1&&(this.internalTex1.destroy(),this.internalTex1=null),this.internalTex2&&(this.internalTex2.destroy(),this.internalTex2=null),this.internalTex3&&(this.internalTex3.destroy(),this.internalTex3=null),this.colorParam&&(this.colorParam.destroy(),this.colorParam=null),this.vertexBuffer&&(this.vertexBuffer.destroy(),this.vertexBuffer=void 0),this.indexBuffer&&(this.indexBuffer.destroy(),this.indexBuffer=void 0),this.material&&(this.material.destroy(),this.material=null)}destroy(){this.camera=null,this._destroyResources()}}const iT={generateKey:function(l){return l.type==="cubemap"?`skybox-${l.type}-${l.encoding}-${l.useIntensity}-${l.gamma}-${l.toneMapping}-${l.fixSeams}-${l.mip}`:`skybox-${l.type}-${l.encoding}-${l.useIntensity}-${l.gamma}-${l.toneMapping}`},createShaderDefinition:function(l,e){let t="";if(e.type==="cubemap"){const s=[128,64,16,8,4,2];t+=e.mip?B.fixCubemapSeamsStretchPS:B.fixCubemapSeamsNonePS,t+=e.useIntensity?B.envMultiplyPS:B.envConstPS,t+=B.decodePS,t+=qo(e.gamma),t+=jo(e.toneMapping),t+=B.skyboxHDRPS.replace(/\$DECODE/g,cs.decodeFunc(e.encoding)).replace(/\$FIXCONST/g,1-1/s[e.mip]+"")}else t+=e.useIntensity?B.envMultiplyPS:B.envConstPS,t+=B.decodePS,t+=qo(e.gamma),t+=jo(e.toneMapping),t+=B.sphericalPS,t+=B.envAtlasPS,t+=B.skyboxEnvPS.replace(/\$DECODE/g,cs.decodeFunc(e.encoding));return Ke.createDefinition(l,{attributes:{aPosition:Ne},vertexCode:B.skyboxVS,fragmentCode:t})}};class nT{constructor(e,t,s){this.meshInstance=void 0;const i=new gi;i.getShaderVariant=function(r,a,o,h,c,d,u,f){const p=en(e);return p.register("skybox",iT),s.cubemap?p.getProgram("skybox",{type:"cubemap",encoding:s.encoding,useIntensity:t.skyboxIntensity!==1||t.physicalUnits,mip:s.fixCubemapSeams?t.skyboxMip:0,fixSeams:s.fixCubemapSeams,gamma:c===Os?t.gammaCorrection?ko:pc:t.gammaCorrection,toneMapping:c===Os?zo:t.toneMapping}):p.getProgram("skybox",{type:"envAtlas",encoding:s.encoding,useIntensity:t.skyboxIntensity!==1||t.physicalUnits,gamma:c===Os?t.gammaCorrection?ko:pc:t.gammaCorrection,toneMapping:c===Os?zo:t.toneMapping})},s.cubemap?i.setParameter("texture_cubeMap",s):(i.setParameter("texture_envAtlas",s),i.setParameter("mipLevel",t._skyboxMip)),i.cull=So,i.depthWrite=!1;const n=t.layers.getLayerById(cd);if(n){const r=new Qe("Skybox"),a=mm(e),o=new we(a,i,r);this.meshInstance=o,o.cull=!1,o._noDepthDrawGl1=!0,o.pick=!1,n.addMeshInstances([o]),this.skyLayer=n}}destroy(){this.meshInstance&&(this.skyLayer&&this.skyLayer.removeMeshInstances([this.meshInstance]),this.meshInstance.destroy(),this.meshInstance=null)}}const Yo=new Qe;Yo.worldTransform=H.IDENTITY;Yo._dirtyWorld=Yo._dirtyNormal=!1;class rT{constructor(e,t,s){this.material=t,this.layer=s,this.positions=[],this.colors=[],this.mesh=new Ht(e),this.meshInstance=null}addLines(e,t){const s=this.positions,i=e.length;for(let r=0;r<i;r++){const a=e[r];s.push(a.x,a.y,a.z)}const n=this.colors;if(t.length)for(let r=0;r<i;r++){const a=t[r];n.push(a.r,a.g,a.b,a.a)}else for(let r=0;r<i;r++)n.push(t.r,t.g,t.b,t.a)}addLinesArrays(e,t){const s=this.positions;for(let n=0;n<e.length;n+=3)s.push(e[n],e[n+1],e[n+2]);const i=this.colors;if(t.length)for(let n=0;n<t.length;n+=4)i.push(t[n],t[n+1],t[n+2],t[n+3]);else{const n=e.length/3;for(let r=0;r<n;r++)i.push(t.r,t.g,t.b,t.a)}}onPreRender(e,t){this.positions.length>0&&this.material.transparent===t&&(this.mesh.setPositions(this.positions),this.mesh.setColors(this.colors),this.mesh.update(bl,!1),this.meshInstance||(this.meshInstance=new we(this.mesh,this.material,Yo)),this.positions.length=0,this.colors.length=0,e.list.push(this.meshInstance),e.length++)}}class aT{constructor(e){this.device=e,this.map=new Map}getBatch(e,t){let s=this.map.get(e);return s||(s=new rT(this.device,e,t),this.map.set(e,s)),s}onPreRender(e,t){this.map.forEach(s=>{s.onPreRender(e,t)})}}const Yt=[];class $o{constructor(e){this.device=e,this.quadMesh=null,this.textureShader=null,this.depthTextureShader=null,this.cubeLocalPos=null,this.cubeWorldPos=null,this.batchesMap=new Map,this.allBatches=new Set,this.updatedLayers=new Set,this._materialDepth=null,this._materialNoDepth=null,this.layerMeshInstances=new Map}createMaterial(e){const t=new pb;return t.vertexColors=!0,t.blend=!0,t.blendType=yt,t.depthTest=e,t.update(),t}get materialDepth(){return this._materialDepth||(this._materialDepth=this.createMaterial(!0)),this._materialDepth}get materialNoDepth(){return this._materialNoDepth||(this._materialNoDepth=this.createMaterial(!1)),this._materialNoDepth}getBatch(e,t){let s=this.batchesMap.get(e);s||(s=new aT(this.device),this.batchesMap.set(e,s)),this.allBatches.add(s);const i=t?this.materialDepth:this.materialNoDepth;return s.getBatch(i,e)}static getTextureVS(){return`
            attribute vec2 vertex_position;
            uniform mat4 matrix_model;
            varying vec2 uv0;
            void main(void) {
                gl_Position = matrix_model * vec4(vertex_position, 0, 1);
                uv0 = vertex_position.xy + 0.5;
            }
        `}getTextureShader(){if(!this.textureShader){const e=`
                varying vec2 uv0;
                uniform sampler2D colorMap;
                void main (void) {
                    gl_FragColor = vec4(texture2D(colorMap, uv0).xyz, 1);
                }
            `;this.textureShader=Gt(this.device,$o.getTextureVS(),e,"DebugTextureShader")}return this.textureShader}getDepthTextureShader(){if(!this.depthTextureShader){const e=`
                ${B.screenDepthPS}
                varying vec2 uv0;
                void main() {
                    float depth = getLinearScreenDepth(uv0) * camera_params.x;
                    gl_FragColor = vec4(vec3(depth), 1.0);
                }
            `;this.depthTextureShader=Gt(this.device,$o.getTextureVS(),e,"DebugDepthTextureShader")}return this.depthTextureShader}getQuadMesh(){return this.quadMesh||(this.quadMesh=new Ht(this.device),this.quadMesh.setPositions([-.5,-.5,0,.5,-.5,0,-.5,.5,0,.5,.5,0]),this.quadMesh.update(ra)),this.quadMesh}drawMesh(e,t,s,i,n){if(!i){const a=this.getGraphNode(t);i=new we(s,e,a)}let r=this.layerMeshInstances.get(n);r||(r=[],this.layerMeshInstances.set(n,r)),r.push(i)}drawWireAlignedBox(e,t,s,i,n){Yt.push(e.x,e.y,e.z,e.x,t.y,e.z,e.x,t.y,e.z,t.x,t.y,e.z,t.x,t.y,e.z,t.x,e.y,e.z,t.x,e.y,e.z,e.x,e.y,e.z,e.x,e.y,t.z,e.x,t.y,t.z,e.x,t.y,t.z,t.x,t.y,t.z,t.x,t.y,t.z,t.x,e.y,t.z,t.x,e.y,t.z,e.x,e.y,t.z,e.x,e.y,e.z,e.x,e.y,t.z,e.x,t.y,e.z,e.x,t.y,t.z,t.x,t.y,e.z,t.x,t.y,t.z,t.x,e.y,e.z,t.x,e.y,t.z),this.getBatch(n,i).addLinesArrays(Yt,s),Yt.length=0}drawWireSphere(e,t,s,i,n,r){const a=2*Math.PI/i;let o=0;for(let c=0;c<i;c++){const d=Math.sin(o),u=Math.cos(o);o+=a;const f=Math.sin(o),p=Math.cos(o);Yt.push(e.x+t*d,e.y,e.z+t*u),Yt.push(e.x+t*f,e.y,e.z+t*p),Yt.push(e.x+t*d,e.y+t*u,e.z),Yt.push(e.x+t*f,e.y+t*p,e.z),Yt.push(e.x,e.y+t*d,e.z+t*u),Yt.push(e.x,e.y+t*f,e.z+t*p)}this.getBatch(r,n).addLinesArrays(Yt,s),Yt.length=0}getGraphNode(e){const t=new Qe("ImmediateDebug");return t.worldTransform=e,t._dirtyWorld=t._dirtyNormal=!1,t}onPreRenderLayer(e,t,s){if(this.batchesMap.forEach((i,n)=>{n===e&&i.onPreRender(t,s)}),!this.updatedLayers.has(e)){this.updatedLayers.add(e);const i=this.layerMeshInstances.get(e);if(i){for(let n=0;n<i.length;n++)t.list[t.length+n]=i[n];t.length+=i.length,i.length=0}}}onPostRender(){this.allBatches.clear(),this.updatedLayers.clear()}}class oT extends le{constructor(e){super(),this.ambientBake=!1,this.ambientBakeOcclusionBrightness=0,this.ambientBakeOcclusionContrast=0,this.ambientLight=new G(0,0,0),this.ambientLuminance=0,this.exposure=1,this.fogColor=new G(0,0,0),this.fogDensity=0,this.fogEnd=1e3,this.fogStart=1,this.lightmapSizeMultiplier=1,this.lightmapMaxResolution=2048,this.lightmapMode=lo,this.lightmapFilterEnabled=!1,this.root=null,this.sky=null,this.physicalUnits=!1,this.device=e||Vs.get(),this._gravity=new b(0,-9.8,0),this._layers=null,this._fog=ld,this._gammaCorrection=hm,this._toneMapping=0,this._skyboxCubeMap=null,this._prefilteredCubemaps=[null,null,null,null,null,null],this._envAtlas=null,this._internalEnvAtlas=null,this._skyboxIntensity=1,this._skyboxLuminance=0,this._skyboxMip=0,this._skyboxRotation=new ee,this._skyboxRotationMat3=new Wt,this._skyboxRotationMat4=new H,this._ambientBakeNumSamples=1,this._ambientBakeSpherePart=.4,this._lightmapFilterRange=10,this._lightmapFilterSmoothness=.2,this._clusteredLightingEnabled=!0,this._lightingParams=new Em(this.device.supportsAreaLights,this.device.maxTextureSize,()=>{this._layers._dirtyLights=!0}),this._stats={meshInstances:0,lights:0,dynamicLights:0,bakedLights:0,lastStaticPrepareFullTime:0,lastStaticPrepareSearchTime:0,lastStaticPrepareWriteTime:0,lastStaticPrepareTriAabbTime:0,lastStaticPrepareCombineTime:0,updateShadersTime:0},this.updateShaders=!0,this._shaderVersion=0,this._statsUpdated=!1,this.immediate=new $o(this.device)}get defaultDrawLayer(){return this.layers.getLayerById(Bo)}set ambientBakeNumSamples(e){this._ambientBakeNumSamples=k.clamp(Math.floor(e),1,255)}get ambientBakeNumSamples(){return this._ambientBakeNumSamples}set ambientBakeSpherePart(e){this._ambientBakeSpherePart=k.clamp(e,.001,1)}get ambientBakeSpherePart(){return this._ambientBakeSpherePart}set clusteredLightingEnabled(e){if(!this._clusteredLightingEnabled&&e){console.error("Turning on disabled clustered lighting is not currently supported");return}this._clusteredLightingEnabled=e}get clusteredLightingEnabled(){return this._clusteredLightingEnabled}set drawCalls(e){}get drawCalls(){let e=this.layers._meshInstances;return e.length||(this.layers._update(this.device,this.clusteredLightingEnabled),e=this.layers._meshInstances),e}set envAtlas(e){e!==this._envAtlas&&(this._envAtlas=e,this.updateShaders=!0)}get envAtlas(){return this._envAtlas}set fog(e){e!==this._fog&&(this._fog=e,this.updateShaders=!0)}get fog(){return this._fog}set gammaCorrection(e){e!==this._gammaCorrection&&(this._gammaCorrection=e,this.updateShaders=!0)}get gammaCorrection(){return this._gammaCorrection}set layers(e){const t=this._layers;this._layers=e,this.fire("set:layers",t,e)}get layers(){return this._layers}get lighting(){return this._lightingParams}set lightmapFilterRange(e){this._lightmapFilterRange=Math.max(e,.001)}get lightmapFilterRange(){return this._lightmapFilterRange}set lightmapFilterSmoothness(e){this._lightmapFilterSmoothness=Math.max(e,.001)}get lightmapFilterSmoothness(){return this._lightmapFilterSmoothness}set prefilteredCubemaps(e){const t=this._prefilteredCubemaps;e=e||[];let s=!1,i=!0;for(let n=0;n<6;++n){const r=e[n]||null;t[n]!==r&&(t[n]=r,s=!0),i=i&&!!t[n]}s&&(this._resetSky(),i?(this._internalEnvAtlas=Mm.generatePrefilteredAtlas(t,{target:this._internalEnvAtlas}),this._envAtlas||(this.envAtlas=this._internalEnvAtlas)):this._internalEnvAtlas&&(this._envAtlas===this._internalEnvAtlas&&(this.envAtlas=null),this._internalEnvAtlas.destroy(),this._internalEnvAtlas=null))}get prefilteredCubemaps(){return this._prefilteredCubemaps}set skybox(e){e!==this._skyboxCubeMap&&(this._skyboxCubeMap=e,this._resetSky())}get skybox(){return this._skyboxCubeMap}set skyboxIntensity(e){e!==this._skyboxIntensity&&(this._skyboxIntensity=e,this._resetSky())}get skyboxIntensity(){return this._skyboxIntensity}set skyboxLuminance(e){e!==this._skyboxLuminance&&(this._skyboxLuminance=e,this._resetSky())}get skyboxLuminance(){return this._skyboxLuminance}set skyboxMip(e){e!==this._skyboxMip&&(this._skyboxMip=e,this._resetSky())}get skyboxMip(){return this._skyboxMip}set skyboxRotation(e){this._skyboxRotation.equals(e)||(this._skyboxRotation.copy(e),e.equals(ee.IDENTITY)?this._skyboxRotationMat3.setIdentity():(this._skyboxRotationMat4.setTRS(b.ZERO,e,b.ONE),this._skyboxRotationMat4.invertTo3x3(this._skyboxRotationMat3)),this._resetSky())}get skyboxRotation(){return this._skyboxRotation}set toneMapping(e){e!==this._toneMapping&&(this._toneMapping=e,this.updateShaders=!0)}get toneMapping(){return this._toneMapping}destroy(){this._resetSky(),this.root=null,this.off()}drawLine(e,t,s=G.WHITE,i=!0,n=this.defaultDrawLayer){this.immediate.getBatch(n,i).addLines([e,t],[s,s])}drawLines(e,t,s=!0,i=this.defaultDrawLayer){this.immediate.getBatch(i,s).addLines(e,t)}drawLineArrays(e,t,s=!0,i=this.defaultDrawLayer){this.immediate.getBatch(i,s).addLinesArrays(e,t)}applySettings(e){const t=e.physics,s=e.render;this._gravity.set(t.gravity[0],t.gravity[1],t.gravity[2]),this.ambientLight.set(s.global_ambient[0],s.global_ambient[1],s.global_ambient[2]),this.ambientLuminance=s.ambientLuminance,this._fog=s.fog,this.fogColor.set(s.fog_color[0],s.fog_color[1],s.fog_color[2]),this.fogStart=s.fog_start,this.fogEnd=s.fog_end,this.fogDensity=s.fog_density,this._gammaCorrection=s.gamma_correction,this._toneMapping=s.tonemapping,this.lightmapSizeMultiplier=s.lightmapSizeMultiplier,this.lightmapMaxResolution=s.lightmapMaxResolution,this.lightmapMode=s.lightmapMode,this.exposure=s.exposure,this._skyboxIntensity=s.skyboxIntensity===void 0?1:s.skyboxIntensity,this._skyboxLuminance=s.skyboxLuminance===void 0?2e4:s.skyboxLuminance,this._skyboxMip=s.skyboxMip===void 0?0:s.skyboxMip,s.skyboxRotation&&(this.skyboxRotation=new ee().setFromEulerAngles(s.skyboxRotation[0],s.skyboxRotation[1],s.skyboxRotation[2])),this.clusteredLightingEnabled=s.clusteredLightingEnabled,this.lighting.applySettings(s),["lightmapFilterEnabled","lightmapFilterRange","lightmapFilterSmoothness","ambientBake","ambientBakeNumSamples","ambientBakeSpherePart","ambientBakeOcclusionBrightness","ambientBakeOcclusionContrast"].forEach(i=>{s.hasOwnProperty(i)&&(this[i]=s[i])}),this._resetSky()}_getSkyboxTex(){const e=this._prefilteredCubemaps;return this._skyboxMip?e[[0,1,3,4,5,6][this._skyboxMip]]||this._envAtlas||e[0]||this._skyboxCubeMap:this._skyboxCubeMap||e[0]||this._envAtlas}_updateSky(e){if(!this.sky){const t=this._getSkyboxTex();t&&(this.sky=new nT(e,this,t),this.fire("set:skybox",t))}}_resetSky(){var e;(e=this.sky)==null||e.destroy(),this.sky=null,this.updateShaders=!0}setSkybox(e){e?(this.skybox=e[0]||null,this.prefilteredCubemaps=e.slice(1)):(this.skybox=null,this.prefilteredCubemaps=[null,null,null,null,null,null])}}class Im{constructor(e,t,s){this.device=e,this.inverseBindPose=t,this.boneNames=s}}const lT=[0,0,1,0,0,1,0,0,1,0,0,1],hT=[0,1,3,2,3,1];class cT extends le{constructor(e,t){super(),this._device=e,this._pixelsPerUnit=t&&t.pixelsPerUnit!==void 0?t.pixelsPerUnit:1,this._renderMode=t&&t.renderMode!==void 0?t.renderMode:ri,this._atlas=t&&t.atlas!==void 0?t.atlas:null,this._frameKeys=t&&t.frameKeys!==void 0?t.frameKeys:null,this._meshes=[],this._updatingProperties=!1,this._meshesDirty=!1,this._atlas&&this._frameKeys&&this._createMeshes()}set frameKeys(e){this._frameKeys=e,this._atlas&&this._frameKeys&&(this._updatingProperties?this._meshesDirty=!0:this._createMeshes()),this.fire("set:frameKeys",e)}get frameKeys(){return this._frameKeys}set atlas(e){e!==this._atlas&&(this._atlas&&(this._atlas.off("set:frames",this._onSetFrames,this),this._atlas.off("set:frame",this._onFrameChanged,this),this._atlas.off("remove:frame",this._onFrameRemoved,this)),this._atlas=e,this._atlas&&this._frameKeys&&(this._atlas.on("set:frames",this._onSetFrames,this),this._atlas.on("set:frame",this._onFrameChanged,this),this._atlas.on("remove:frame",this._onFrameRemoved,this),this._updatingProperties?this._meshesDirty=!0:this._createMeshes()),this.fire("set:atlas",e))}get atlas(){return this._atlas}set pixelsPerUnit(e){this._pixelsPerUnit!==e&&(this._pixelsPerUnit=e,this.fire("set:pixelsPerUnit",e),this._atlas&&this._frameKeys&&this.renderMode===ri&&(this._updatingProperties?this._meshesDirty=!0:this._createMeshes()))}get pixelsPerUnit(){return this._pixelsPerUnit}set renderMode(e){if(this._renderMode===e)return;const t=this._renderMode;this._renderMode=e,this.fire("set:renderMode",e),(t===ri||e===ri)&&this._atlas&&this._frameKeys&&(this._updatingProperties?this._meshesDirty=!0:this._createMeshes())}get renderMode(){return this._renderMode}get meshes(){return this._meshes}_createMeshes(){const e=this._meshes.length;for(let i=0;i<e;i++){const n=this._meshes[i];n&&n.destroy()}const t=this._frameKeys.length;this._meshes=new Array(t);const s=this.renderMode===je||this._renderMode===We?this._create9SliceMesh:this._createSimpleMesh;for(let i=0;i<t;i++){const n=this._atlas.frames[this._frameKeys[i]];this._meshes[i]=n?s.call(this,n):null}this.fire("set:meshes")}_createSimpleMesh(e){const t=e.rect,s=this._atlas.texture.width,i=this._atlas.texture.height,n=t.z/this._pixelsPerUnit,r=t.w/this._pixelsPerUnit,a=e.pivot.x,o=e.pivot.y,h=[-a*n,-o*r,0,(1-a)*n,-o*r,0,(1-a)*n,(1-o)*r,0,-a*n,(1-o)*r,0],c=t.x/s,d=1-t.y/i,u=(t.x+t.z)/s,f=1-(t.y+t.w)/i,p=[c,d,u,d,u,f,c,f];return Gs(this._device,h,{uvs:p,normals:lT,indices:hT})}_create9SliceMesh(){const e=V.ONE,t=3,s=3,i=[],n=[],r=[],a=[];let o=0;for(let c=0;c<=t;c++){const d=c===0||c===t?0:1;for(let u=0;u<=s;u++){const f=-e.x+2*e.x*(c<=1?0:3)/t,p=0,_=-(-e.y+2*e.y*(u<=1?0:3)/s),m=u===0||u===s?0:1;i.push(-f,p,_),n.push(0,1,0),r.push(d,m),c<t&&u<s&&(a.push(o+s+1,o+1,o),a.push(o+s+1,o+s+2,o+1)),o++}}const h={normals:n,uvs:r,indices:a};return Gs(this._device,i,h)}_onSetFrames(e){this._updatingProperties?this._meshesDirty=!0:this._createMeshes()}_onFrameChanged(e,t){const s=this._frameKeys.indexOf(e);s<0||(t?this.renderMode===ri&&(this._meshes[s]=this._createSimpleMesh(t)):this._meshes[s]=null,this.fire("set:meshes"))}_onFrameRemoved(e){const t=this._frameKeys.indexOf(e);t<0||(this._meshes[t]=null,this.fire("set:meshes"))}startUpdate(){this._updatingProperties=!0,this._meshesDirty=!1}endUpdate(){this._updatingProperties=!1,this._meshesDirty&&this._atlas&&this._frameKeys&&this._createMeshes(),this._meshesDirty=!1}destroy(){for(const e of this._meshes)e&&e.destroy();this._meshes.length=0}}class Gn{constructor(e){this.func=e.func===void 0?Vi:e.func,this.ref=e.ref||0,this.readMask=e.readMask===void 0?255:e.readMask,this.writeMask=e.writeMask===void 0?255:e.writeMask,this.fail=e.fail||Bt,this.zfail=e.zfail||Bt,this.zpass=e.zpass||Bt}clone(){return new Gn({func:this.func,ref:this.ref,readMask:this.readMask,writeMask:this.writeMask,fail:this.fail,zfail:this.zfail,zpass:this.zpass})}}class dT extends le{constructor(){super(),this._texture=null,this._frames=null}set texture(e){this._texture=e,this.fire("set:texture",e)}get texture(){return this._texture}set frames(e){this._frames=e,this.fire("set:frames",e)}get frames(){return this._frames}setFrame(e,t){let s=this._frames[e];s?(s.rect.copy(t.rect),s.pivot.copy(t.pivot),s.border.copy(t.border)):(s={rect:t.rect.clone(),pivot:t.pivot.clone(),border:t.border.clone()},this._frames[e]=s),this.fire("set:frame",e.toString(),s)}removeFrame(e){const t=this._frames[e];t&&(delete this._frames[e],this.fire("remove:frame",e.toString(),t))}destroy(){this._texture&&this._texture.destroy()}}class lf{constructor(e,t,s,i){this.time=e,this.position=t,this.rotation=s,this.scale=i}}class hf{constructor(){this._name="",this._keys=[]}}class cf{constructor(){this.name="",this.duration=0,this._nodes=[],this._nodeDict={}}getNode(e){return this._nodeDict[e]}addNode(e){this._nodes.push(e),this._nodeDict[e._name]=e}get nodes(){return this._nodes}}class uT{constructor(){this._written=!1,this._name="",this._keyFrames=[],this._quat=new ee,this._pos=new b,this._scale=new b,this._targetNode=null}getTarget(){return this._targetNode}setTarget(e){this._targetNode=e}}class Sh{constructor(e){this.looping=!0,this._animation=null,this._time=0,this._interpolatedKeys=[],this._interpolatedKeyDict={},this._currKeyIndices={},this.graph=null;const t=s=>{const i=new uT;i._name=s.name,this._interpolatedKeys.push(i),this._interpolatedKeyDict[s.name]=i,this._currKeyIndices[s.name]=0;for(let n=0;n<s._children.length;n++)t(s._children[n])};t(e)}set animation(e){this._animation=e,this.currentTime=0}get animation(){return this._animation}set currentTime(e){this._time=e;const t=this._interpolatedKeys.length;for(let s=0;s<t;s++){const n=this._interpolatedKeys[s]._name;this._currKeyIndices[n]=0}this.addTime(0),this.updateGraph()}get currentTime(){return this._time}get numNodes(){return this._interpolatedKeys.length}addTime(e){if(this._animation!==null){const t=this._animation._nodes,s=this._animation.duration;if(this._time===s&&!this.looping)return;if(this._time+=e,this._time>s){this._time=this.looping?0:s;for(let n=0;n<t.length;n++){const a=t[n]._name;this._currKeyIndices[a]=0}}else if(this._time<0){this._time=this.looping?s:0;for(let n=0;n<t.length;n++){const r=t[n],a=r._name;this._currKeyIndices[a]=r._keys.length-2}}const i=e>=0?1:-1;for(let n=0;n<t.length;n++){const r=t[n],a=r._name,o=r._keys,h=this._interpolatedKeyDict[a];if(h===void 0)continue;let c=!1;if(o.length!==1)for(let d=this._currKeyIndices[a];d<o.length-1&&d>=0;d+=i){const u=o[d],f=o[d+1];if(u.time<=this._time&&f.time>=this._time){const p=(this._time-u.time)/(f.time-u.time);h._pos.lerp(u.position,f.position,p),h._quat.slerp(u.rotation,f.rotation,p),h._scale.lerp(u.scale,f.scale,p),h._written=!0,this._currKeyIndices[a]=d,c=!0;break}}(o.length===1||!c&&this._time===0&&this.looping)&&(h._pos.copy(o[0].position),h._quat.copy(o[0].rotation),h._scale.copy(o[0].scale),h._written=!0)}}}blend(e,t,s){const i=this._interpolatedKeys.length;for(let n=0;n<i;n++){const r=e._interpolatedKeys[n],a=t._interpolatedKeys[n],o=this._interpolatedKeys[n];r._written&&a._written?(o._quat.slerp(r._quat,t._interpolatedKeys[n]._quat,s),o._pos.lerp(r._pos,t._interpolatedKeys[n]._pos,s),o._scale.lerp(r._scale,a._scale,s),o._written=!0):r._written?(o._quat.copy(r._quat),o._pos.copy(r._pos),o._scale.copy(r._scale),o._written=!0):a._written&&(o._quat.copy(a._quat),o._pos.copy(a._pos),o._scale.copy(a._scale),o._written=!0)}}setGraph(e){if(this.graph=e,e)for(let t=0;t<this._interpolatedKeys.length;t++){const s=this._interpolatedKeys[t],i=e.findByName(s._name);this._interpolatedKeys[t].setTarget(i)}else for(let t=0;t<this._interpolatedKeys.length;t++)this._interpolatedKeys[t].setTarget(null)}updateGraph(){if(this.graph)for(let e=0;e<this._interpolatedKeys.length;e++){const t=this._interpolatedKeys[e];if(t._written){const s=t.getTarget();s.localPosition.copy(t._pos),s.localRotation.copy(t._quat),s.localScale.copy(t._scale),s._dirtyLocal||s._dirtifyLocal(),t._written=!1}}}}class fT{constructor(e,t){this.processedCache=new Map,this.definitionsCache=new Map,this._device=e,this._generators={},this._isClearingCache=!1,this._precached=!1,this._programsCollection=[],this._defaultStdMatOption={},this._defaultStdMatOptionMin={},t.shaderOptBuilder.updateRef(this._defaultStdMatOption,{},t,null,[],Nn,null),t.shaderOptBuilder.updateMinRef(this._defaultStdMatOptionMin,{},t,null,[],Bi,null),e.on("destroy:shader",s=>{this.removeFromCache(s)})}destroy(){this.clearCache()}register(e,t){this.isRegistered(e)||(this._generators[e]=t)}unregister(e){this.isRegistered(e)&&delete this._generators[e]}isRegistered(e){return this._generators[e]!==void 0}generateShaderDefinition(e,t,s,i){let n=this.definitionsCache.get(s);if(!n){let r;i.lights&&(r=i.lights,i.lights=r.map(function(o){const h=o.clone?o.clone():o;return h.key=o.key,h})),this.storeNewProgram(t,i),i.lights&&(i.lights=r),this._precached;const a=this._device;n=e.createShaderDefinition(a,i),n.name=`${t}-pass:${i.pass}`,this.definitionsCache.set(s,n)}return n}getCachedShader(e){return this.processedCache.get(e)}setCachedShader(e,t){this.processedCache.set(e,t)}getProgram(e,t,s){const i=this._generators[e];if(!i)return null;const n=i.generateKey(t),r=JSON.stringify(s),a=`${n}#${r}`;let o=this.getCachedShader(a);if(!o){const h=this.generateShaderDefinition(i,e,n,t),c={name:e,attributes:h.attributes,vshader:h.vshader,fshader:h.fshader,processingOptions:s};o=new qn(this._device,c),this.setCachedShader(a,o)}return o}storeNewProgram(e,t){let s={};if(e==="standard"){const i=this._getDefaultStdMatOptions(t.pass);for(const n in t)(t.hasOwnProperty(n)&&i[n]!==t[n]||n==="pass")&&(s[n]=t[n])}else s=t;this._programsCollection.push(JSON.stringify({name:e,options:s}))}dumpPrograms(){let e=`let device = pc.app ? pc.app.graphicsDevice : pc.Application.getApplication().graphicsDevice;
`;e+="let shaders = [",this._programsCollection[0]&&(e+=`
	`+this._programsCollection[0]);for(let s=1;s<this._programsCollection.length;++s)e+=`,
	`+this._programsCollection[s];e+=`
];
`,e+=`device.getProgramLibrary().precompile(shaders);
`,e+='if (pc.version != "'+ag+'" || pc.revision != "'+og+`")
`,e+='	console.warn("precompile-shaders.js: engine version mismatch, rebuild shaders lib with current engine");';const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","precompile-shaders.js"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}clearCache(){this._isClearingCache=!0,this.processedCache.forEach(e=>{e.destroy()}),this.processedCache.clear(),this._isClearingCache=!1}removeFromCache(e){this._isClearingCache||this.processedCache.forEach((t,s)=>{e===t&&this.processedCache.delete(s)})}_getDefaultStdMatOptions(e){return e===Qt||e===jn||mt.isShadow(e)?this._defaultStdMatOptionMin:this._defaultStdMatOption}precompile(e){if(e){const t=new Array(e.length);for(let s=0;s<e.length;s++){if(e[s].name==="standard"){const i=e[s].options,n=this._getDefaultStdMatOptions(i.pass);for(const r in n)n.hasOwnProperty(r)&&i[r]===void 0&&(i[r]=n[r])}t[s]=this.getProgram(e[s].name,e[s].options)}}this._precached=!0}}var pT=`
    vec4 dirLm = texture2D(texture_dirLightMap, vUv1);

    if (bakeDir > 0.5) {
        if (dAtten > 0.00001) {
            dirLm.xyz = dirLm.xyz * 2.0 - vec3(1.0);
            dAtten = saturate(dAtten);
            gl_FragColor.rgb = normalize(dLightDirNormW.xyz*dAtten + dirLm.xyz*dirLm.w) * 0.5 + vec3(0.5);
            gl_FragColor.a = dirLm.w + dAtten;
            gl_FragColor.a = max(gl_FragColor.a, 1.0 / 255.0);
        } else {
            gl_FragColor = dirLm;
        }
    } else {
        gl_FragColor.rgb = dirLm.xyz;
        gl_FragColor.a = max(dirLm.w, dAtten > 0.00001? (1.0/255.0) : 0.0);
    }
`,mT=`
    gl_FragColor.rgb = dDiffuseLight;
    gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(0.5));
    gl_FragColor.rgb /= 8.0;
    gl_FragColor.a = clamp( max( max( gl_FragColor.r, gl_FragColor.g ), max( gl_FragColor.b, 1.0 / 255.0 ) ), 0.0,1.0 );
    gl_FragColor.a = ceil(gl_FragColor.a * 255.0) / 255.0;
    gl_FragColor.rgb /= gl_FragColor.a;
`,_T=`

varying vec2 vUv0;

uniform sampler2D source;
uniform vec2 pixelOffset;

void main(void) {
    vec4 c = texture2D(source, vUv0);
    c = c.a>0.0? c : texture2D(source, vUv0 - pixelOffset);
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(0, -pixelOffset.y));
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(pixelOffset.x, -pixelOffset.y));
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(-pixelOffset.x, 0));
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(pixelOffset.x, 0));
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(-pixelOffset.x, pixelOffset.y));
    c = c.a>0.0? c : texture2D(source, vUv0 + vec2(0, pixelOffset.y));
    c = c.a>0.0? c : texture2D(source, vUv0 + pixelOffset);
    gl_FragColor = c;
}
`,gT=`
// bilateral filter, based on https://www.shadertoy.com/view/4dfGDH# and
// http://people.csail.mit.edu/sparis/bf_course/course_notes.pdf

// A bilateral filter is a non-linear, edge-preserving, and noise-reducing smoothing filter for images.
// It replaces the intensity of each pixel with a weighted average of intensity values from nearby pixels.
// This weight can be based on a Gaussian distribution. Crucially, the weights depend not only on
// Euclidean distance of pixels, but also on the radiometric differences (e.g., range differences, such
// as color intensity, depth distance, etc.). This preserves sharp edges.

float normpdf3(in vec3 v, in float sigma) {
    return 0.39894 * exp(-0.5 * dot(v, v) / (sigma * sigma)) / sigma;
}

vec3 decodeRGBM(vec4 rgbm) {
    vec3 color = (8.0 * rgbm.a) * rgbm.rgb;
    return color * color;
}

float saturate(float x) {
    return clamp(x, 0.0, 1.0);
}

vec4 encodeRGBM(vec3 color) { // modified RGBM
    vec4 encoded;
    encoded.rgb = pow(color.rgb, vec3(0.5));
    encoded.rgb *= 1.0 / 8.0;

    encoded.a = saturate( max( max( encoded.r, encoded.g ), max( encoded.b, 1.0 / 255.0 ) ) );
    encoded.a = ceil(encoded.a * 255.0) / 255.0;

    encoded.rgb /= encoded.a;
    return encoded;
}

// filter size
#define MSIZE 15

varying vec2 vUv0;
uniform sampler2D source;
uniform vec2 pixelOffset;
uniform vec2 sigmas;
uniform float bZnorm;
uniform float kernel[MSIZE];

void main(void) {
    
    vec4 pixelRgbm = texture2D(source, vUv0);

    // lightmap specific optimization - skip pixels that were not baked
    // this also allows dilate filter that work on the output of this to work correctly, as it depends on .a being zero
    // to dilate, which the following blur filter would otherwise modify
    if (pixelRgbm.a <= 0.0) {
        gl_FragColor = pixelRgbm;
        return ;
    }

    // range sigma - controls blurriness based on a pixel distance
    float sigma = sigmas.x;

    // domain sigma - controls blurriness based on a pixel similarity (to preserve edges)
    float bSigma = sigmas.y;

    vec3 pixelHdr = decodeRGBM(pixelRgbm);
    vec3 accumulatedHdr = vec3(0.0);
    float accumulatedFactor = 0.0;

    // read out the texels
    const int kSize = (MSIZE-1)/2;
    for (int i = -kSize; i <= kSize; ++i) {
        for (int j = -kSize; j <= kSize; ++j) {
            
            // sample the pixel with offset
            vec2 coord = vUv0 + vec2(float(i), float(j)) * pixelOffset;
            vec4 rgbm = texture2D(source, coord);

            // lightmap - only use baked pixels
            if (rgbm.a > 0.0) {
                vec3 hdr = decodeRGBM(rgbm);

                // bilateral factors
                float factor = kernel[kSize + j] * kernel[kSize + i];
                factor *= normpdf3(hdr - pixelHdr, bSigma) * bZnorm;

                // accumulate
                accumulatedHdr += factor * hdr;
                accumulatedFactor += factor;
            }
        }
    }

    gl_FragColor = encodeRGBM(accumulatedHdr / accumulatedFactor);
}
`;const Ko={bakeDirLmEndPS:pT,bakeLmEndPS:mT,dilatePS:_T,bilateralDeNoisePS:gT},Lm="FILL_WINDOW",df="KEEP_ASPECT",Tc="AUTO",yT="FIXED";let Dm;function ui(){return Dm}function Cc(l){Dm=l,Vs.set(l==null?void 0:l.graphicsDevice)}class Jt{static push(e,t){t&&Jt._types.length>0?console.assert("Script Ordering Error. Contact support@playcanvas.com"):Jt._types.push(e)}}Jt._types=[];let Zo=!1,uf=!1;const zt={app:null,create:function(l,e){if(!Zo)return;const t=e(zt.app);t._pcScriptName=l,Jt.push(t,Zo),this.fire("created",l,e)},attribute:function(l,e,t,s){},createLoadingScreen:function(l){if(uf)return;uf=!0;const e=ui();l(e)}};Object.defineProperty(zt,"legacy",{get:function(){return Zo},set:function(l){Zo=l}});Jc.attach(zt);class xT{constructor(){this.renderPasses=[],this.renderTargetMap=new Map}addRenderPass(e){this.renderPasses.push(e)}reset(){this.renderPasses.length=0}compile(){const e=this.renderTargetMap,t=this.renderPasses;for(let n=0;n<t.length;n++){const r=t[n],a=r.renderTarget;if(a!==void 0){const o=e.get(a);o&&(r.colorOps.clear||(o.colorOps.store=!0),r.depthStencilOps.clearDepth||(o.depthStencilOps.storeDepth=!0),r.depthStencilOps.clearStencil||(o.depthStencilOps.storeStencil=!0)),e.set(a,r)}}let s=null,i=null;for(let n=0;n<t.length;n++){const r=t[n],a=r.renderTarget,o=a==null?void 0:a.colorBuffer;o!=null&&o.cubemap?(s===o&&(i.colorOps.mipmaps=!1),s=a.colorBuffer,i=r):r.requiresCubemaps&&(s=null,i=null)}e.forEach((n,r)=>{r===null&&(n.colorOps.store=!0,n.colorOps.resolve=!1,n.colorOps.mipmaps=!1)}),e.clear(),this.log()}render(){this.compile();const e=this.renderPasses;for(let t=0;t<e.length;t++)e[t].render()}log(){}}class vT{constructor(e,t){this.texture0=e,this.texture1=t}destroy(){var e,t;(e=this.texture0)==null||e.destroy(),(t=this.texture1)==null||t.destroy()}}const ff=new Zn;class Ui{static createTexture(e,t,s,i=""){return new ae(e,{width:s,height:s,format:t,addressU:se,addressV:se,type:Nt,magFilter:$e,minFilter:ve,anisotropy:1,name:`AreaLightLUT${i}`})}static applyTextures(e,t,s){ff.remove(e),ff.get(e,()=>new vT(t,t===s?null:s)),e.scope.resolve("areaLightsLutTex1").setValue(t),e.scope.resolve("areaLightsLutTex2").setValue(s)}static createPlaceholder(e){const t=Ui.createTexture(e,he,2,"placeholder");t.lock().fill(0),t.unlock(),Ui.applyTextures(e,t,t)}static set(e,t,s){function i(_,m,g){const w=Ui.createTexture(_,g,64);return w.lock().set(m),w.unlock(),w.upload(),w}function n(_,m,g){const w=_.length,v=new Float32Array(w);for(let y=0;y<w;y++){const T=y%4;v[y]=(_[y]+m[T])*g[T]}return v}function r(_){const m=_.length,g=new Uint16Array(m),w=Le.float2Half;for(let v=0;v<m;v++)g[v]=w(_[v]);return g}function a(_){const m=_.length,g=new Uint8ClampedArray(m);for(let w=0;w<m;w++)g[w]=_[w]*255;return g}const o=t,h=s;let c,d;const u=e.areaLightLutFormat;if(u===nt)c=o,d=h;else if(u===gt)c=r(o),d=r(h);else{const _=[0,.2976,.01381,0],m=[.999,3.08737,1.6546,.603249],g=[-.306897,0,0,0],w=[1.442787,1,1,1];c=a(n(o,_,m)),d=a(n(h,g,w))}const f=i(e,c,u),p=i(e,d,u);Ui.applyTextures(e,f,p)}}class ST{constructor(e){this._blobUrls={};for(let t=0,s=e.length;t<s;t++)e[t].url&&(this._blobUrls[e[t].name]=e[t].url)}hasBlobUrl(e){return!!this._blobUrls[e]}getBlobUrl(e){return this._blobUrls[e]}destroy(){for(const e in this._blobUrls)URL.revokeObjectURL(this._blobUrls[e]);this._blobUrls=null}}let Fm;function Om(l){let e,t;if(typeof TextDecoder<"u")try{e=new TextDecoder("utf-8"),t=new TextDecoder("windows-1252")}catch{console.warn("TextDecoder not supported - pc.Untar module will not work")}else console.warn("TextDecoder not supported - pc.Untar module will not work");function s(n){this._fields=n}s.parse=function(n,r,a){const o=new Uint8Array(n,r,a);let h=0;const c=[];for(;h<a;){let d;for(d=h;d<a&&o[d]!==32;d++);if(d>=a)throw new Error("Invalid PAX header data format.");const u=parseInt(e.decode(new Uint8Array(n,r+h,d-h)),10),p=e.decode(new Uint8Array(n,r+d+1,u-(d-h)-2)).split("=");if(p.length!==2)throw new Error("Invalid PAX header data format.");p[1].length===0&&(p[1]=null),c.push({name:p[0],value:p[1]}),h+=u}return new s(c)},s.prototype.applyHeader=function(n){for(let r=0;r<this._fields.length;r++){let a=this._fields[r].name;const o=this._fields[r].value;a==="path"&&(a="name"),o===null?delete n[a]:n[a]=o}};function i(n){this._arrayBuffer=n||new ArrayBuffer(0),this._bufferView=new DataView(this._arrayBuffer),this._globalPaxHeader=null,this._paxHeader=null,this._bytesRead=0}l||(Fm=i),i.prototype._hasNext=function(){return this._bytesRead+4<this._arrayBuffer.byteLength&&this._bufferView.getUint32(this._bytesRead)!==0},i.prototype._readNextFile=function(){const n=new DataView(this._arrayBuffer,this._bytesRead,512),r=t.decode(n);this._bytesRead+=512;let a=r.substring(0,100).replace(/\0/g,"");const o=r.substring(257,263),h=parseInt(r.substring(124,136),8),c=r.substring(156,157),d=this._bytesRead;let u=null,f=!1;switch(c){case"0":case"":if(f=!0,!l){const m=new Blob([this._arrayBuffer.slice(this._bytesRead,this._bytesRead+h)]);u=URL.createObjectURL(m)}break;case"g":this._globalPaxHeader=s.parse(this._arrayBuffer,this._bytesRead,h);break;case"x":this._paxHeader=s.parse(this._arrayBuffer,this._bytesRead,h);break}this._bytesRead+=h;const p=h%512;if(p!==0&&(this._bytesRead+=512-p),!f)return null;if(o.indexOf("ustar")!==-1){const m=r.substring(345,500).replace(/\0/g,"");m.length>0&&(a=m.trim()+a.trim())}const _={name:a,start:d,size:h,url:u};return this._globalPaxHeader&&this._globalPaxHeader.applyHeader(_),this._paxHeader&&(this._paxHeader.applyHeader(_),this._paxHeader=null),_},i.prototype.untar=function(n){if(!e)return console.error("Cannot untar because TextDecoder interface is not available for this platform."),[];const r=[];for(;this._hasNext();){const a=this._readNextFile();a&&(n&&a.name&&(a.name=n+a.name),r.push(a))}return r},l&&(self.onmessage=function(n){const r=n.data.id;try{const o=new i(n.data.arrayBuffer).untar(n.data.prefix);postMessage({id:r,files:o,arrayBuffer:n.data.arrayBuffer},[n.data.arrayBuffer])}catch(a){postMessage({id:r,error:a.toString()})}})}let bh=null;function bT(){if(!bh){const l="("+Om.toString()+`)(true)

`,e=new Blob([l],{type:"application/javascript"});bh=URL.createObjectURL(e)}return bh}class wT{constructor(e){this._requestId=0,this._pendingRequests={},this._filenamePrefix=e,this._worker=new Worker(bT()),this._worker.addEventListener("message",this._onMessage.bind(this))}_onMessage(e){const t=e.data.id;if(!this._pendingRequests[t])return;const s=this._pendingRequests[t];if(delete this._pendingRequests[t],e.data.error)s(e.data.error);else{const i=e.data.arrayBuffer;for(let n=0,r=e.data.files.length;n<r;n++){const a=e.data.files[n],o=new Blob([i.slice(a.start,a.start+a.size)]);a.url=URL.createObjectURL(o)}s(null,e.data.files)}}untar(e,t){const s=this._requestId++;this._pendingRequests[s]=t,this._worker.postMessage({id:s,prefix:this._filenamePrefix,arrayBuffer:e},[e])}hasPendingRequests(){return Object.keys(this._pendingRequests).length>0}destroy(){this._worker&&(this._worker.terminate(),this._worker=null,this._pendingRequests=null)}}Om();class TT{constructor(e){this.handlerType="bundle",this._assets=e.assets,this._worker=null,this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s=this;De.get(e.load,{responseType:de.ResponseType.ARRAY_BUFFER,retry:this.maxRetries>0,maxRetries:this.maxRetries},function(i,n){if(i)t("Error loading bundle resource "+e.original+": "+i);else try{s._untar(n,t)}catch(r){t("Error loading bundle resource "+e.original+": "+r)}})}_untar(e,t){const s=this;if(st.workers)s._worker||(s._worker=new wT(s._assets.prefix)),s._worker.untar(e,function(i,n){t(i,n),s._worker.hasPendingRequests()||(s._worker.destroy(),s._worker=null)});else{const n=new Fm(e).untar(s._assets.prefix);t(null,n)}}open(e,t){return new ST(t)}patch(e,t){}}class CT{constructor(e){this._handlers={},this._requests={},this._cache={},this._app=e}addHandler(e,t){this._handlers[e]=t,t._loader=this}removeHandler(e){delete this._handlers[e]}getHandler(e){return this._handlers[e]}load(e,t,s,i){const n=this._handlers[t];if(!n){const a=`No resource handler for asset type: '${t}' when loading [${e}]`;s(a);return}if(!e){this._loadNull(n,s,i);return}const r=e+t;if(this._cache[r]!==void 0)s(null,this._cache[r]);else if(this._requests[r])this._requests[r].push(s);else{this._requests[r]=[s];const a=this,o=function(d,u){if(d){a._onFailure(r,d);return}n.load(u,function(f,p,_){if(a._requests[r]){if(f){a._onFailure(r,f);return}try{a._onSuccess(r,n.open(u.original,p,i),_)}catch(m){a._onFailure(r,m)}}},i)},h=e.split("?")[0];if(this._app.enableBundles&&this._app.bundles.hasUrl(h)){if(!this._app.bundles.canLoadUrl(h)){o(`Bundle for ${e} not loaded yet`);return}this._app.bundles.loadUrl(h,function(c,d){o(c,{load:d,original:h})})}else o(null,{load:e,original:i&&i.file.filename||e})}}_loadNull(e,t,s){const i=function(r,a,o){if(r)t(r);else try{t(null,e.open(null,a,s),o)}catch(h){t(h)}};e.load(null,i,s)}_onSuccess(e,t,s){this._cache[e]=t;for(let i=0;i<this._requests[e].length;i++)this._requests[e][i](null,t,s);delete this._requests[e]}_onFailure(e,t){if(console.error(t),this._requests[e]){for(let s=0;s<this._requests[e].length;s++)this._requests[e][s](t);delete this._requests[e]}}open(e,t){const s=this._handlers[e];return s?s.open(null,t):(console.warn("No resource handler found for: "+e),t)}patch(e,t){const s=this._handlers[e.type];if(!s){console.warn("No resource handler found for: "+e.type);return}s.patch&&s.patch(e,t)}clearCache(e,t){delete this._cache[e+t]}getFromCache(e,t){if(this._cache[e+t])return this._cache[e+t]}enableRetry(e=5){e=Math.max(0,e)||0;for(const t in this._handlers)this._handlers[t].maxRetries=e}disableRetry(){for(const e in this._handlers)this._handlers[e].maxRetries=0}destroy(){this._handlers={},this._requests={},this._cache={}}}const Jo="en-US",Qo={en:"en-US",es:"en-ES",zh:"zh-CN","zh-HK":"zh-TW","zh-TW":"zh-HK","zh-MO":"zh-HK",fr:"fr-FR",de:"de-DE",it:"it-IT",ru:"ru-RU",ja:"ja-JP"},bd={};function xi(l,e){for(let t=0,s=l.length;t<s;t++)bd[l[t]]=e}function As(l){const e=l.indexOf("-");return e!==-1?l.substring(0,e):l}function AT(l,e){const t=l.indexOf("-");return t!==-1?e+l.substring(t):e}function Bm(l,e){if(e[l])return l;let t=Qo[l];if(t&&e[t])return t;const s=As(l);return t=Qo[s],e[t]?t:e[s]?s:Jo}xi(["ja","ko","th","vi","zh","id"],function(l){return 0});xi(["fa","hi"],function(l){return l>=0&&l<=1?0:1});xi(["fr","pt"],function(l){return l>=0&&l<2?0:1});xi(["da"],function(l){return l===1||!Number.isInteger(l)&&l>=0&&l<=1?0:1});xi(["de","en","it","el","es","tr","fi","sv","nb","no","ur"],function(l){return l===1?0:1});xi(["ru","uk"],function(l){if(Number.isInteger(l)){const e=l%10,t=l%100;if(e===1&&t!==11)return 0;if(e>=2&&e<=4&&(t<12||t>14))return 1;if(e===0||e>=5&&e<=9||t>=11&&t<=14)return 2}return 3});xi(["pl"],function(l){if(Number.isInteger(l)){if(l===1)return 0;const e=l%10,t=l%100;if(e>=2&&e<=4&&(t<12||t>14))return 1;if(e>=0&&e<=1||e>=5&&e<=9||t>=12&&t<=14)return 2}return 3});xi(["ar"],function(l){if(l===0)return 0;if(l===1)return 1;if(l===2)return 2;if(Number.isInteger(l)){const e=l%100;if(e>=3&&e<=10)return 3;if(e>=11&&e<=99)return 4}return 5});const MT=bd[As(Jo)];function wh(l){return bd[l]||MT}const el=new RegExp("^\\s*(?:(?:[a-z]+[a-z0-9\\-\\+\\.]*:)?//|data:|blob:)","i");class PT{constructor(e,t,s,i,n,r){this.url=e||"",this.filename=t||"",this.hash=s===void 0?null:s,this.size=i===void 0?null:i,this.opt=n===void 0?null:n,this.contents=r||null}equals(e){return this.url===e.url&&this.filename===e.filename&&this.hash===e.hash&&this.size===e.size&&this.opt===e.opt&&this.contents===e.contents}}let ET=-1;const RT={pvr:"extCompressedTexturePVRTC",dxt:"extCompressedTextureS3TC",etc2:"extCompressedTextureETC",etc1:"extCompressedTextureETC1",basis:"canvas"},pf=["pvr","dxt","etc2","etc1","basis"];class ne extends le{constructor(e,t,s,i,n){super(),this._id=ET--,this.name=e||"",this.type=t,this.tags=new Rp(this),this._preload=!1,this._file=null,this._data=i||{},this.options=n||{},this._resources=[],this._i18n={},this.loaded=!1,this.loading=!1,this.registry=null,s&&(this.file=s)}set id(e){this._id=e}get id(){return this._id}set file(e){if(e&&e.variants&&["texture","textureatlas","bundle"].indexOf(this.type)!==-1){var t,s;const r=((t=this.registry)==null||(s=t._loader)==null?void 0:s._app)||ui(),a=r==null?void 0:r.graphicsDevice;if(a)for(let o=0,h=pf.length;o<h;o++){const c=pf[o];if(e.variants[c]&&a[RT[c]]){e=e.variants[c];break}if(r.enableBundles){const d=r.bundles.listBundlesForAsset(this);if(d&&d.find(u=>{var f;return u==null||(f=u.file)==null?void 0:f.variants[c]}))break}}}const i=this._file,n=e?new PT(e.url,e.filename,e.hash,e.size,e.opt,e.contents):null;(!!n!=!!i||n&&!n.equals(i))&&(this._file=n,this.fire("change",this,"file",n,i),this.reload())}get file(){return this._file}set data(e){const t=this._data;this._data=e,e!==t&&(this.fire("change",this,"data",e,t),this.loaded&&this.registry._loader.patch(this,this.registry))}get data(){return this._data}set resource(e){const t=this._resources[0];this._resources[0]=e,this.fire("change",this,"resource",e,t)}get resource(){return this._resources[0]}set resources(e){const t=this._resources;this._resources=e,this.fire("change",this,"resources",e,t)}get resources(){return this._resources}set preload(e){e=!!e,this._preload!==e&&(this._preload=e,this._preload&&!this.loaded&&!this.loading&&this.registry&&this.registry.load(this))}get preload(){return this._preload}set loadFaces(e){e=!!e,(!this.hasOwnProperty("_loadFaces")||e!==this._loadFaces)&&(this._loadFaces=e,this.loaded&&this.registry._loader.patch(this,this.registry))}get loadFaces(){return this._loadFaces}getFileUrl(){const e=this.file;if(!e||!e.url)return null;let t=e.url;if(this.registry&&this.registry.prefix&&!el.test(t)&&(t=this.registry.prefix+t),this.type!=="script"&&e.hash){const s=t.indexOf("?")!==-1?"&":"?";t+=s+"t="+e.hash}return t}getAbsoluteUrl(e){if(e.startsWith("blob:")||e.startsWith("data:"))return e;const t=re.getDirectory(this.file.url);return re.join(t,e)}getLocalizedAssetId(e){return e=Bm(e,this._i18n),this._i18n[e]||null}addLocalizedAssetId(e,t){this._i18n[e]=t,this.fire("add:localized",e,t)}removeLocalizedAssetId(e){const t=this._i18n[e];t&&(delete this._i18n[e],this.fire("remove:localized",e,t))}ready(e,t){t=t||this,this.loaded?e.call(t,this):this.once("load",function(s){e.call(t,s)})}reload(){this.loaded&&(this.loaded=!1,this.registry.load(this))}unload(){if(!this.loaded&&this._resources.length===0)return;this.fire("unload",this),this.registry.fire("unload:"+this.id,this);const e=this._resources;this.resources=[],this.loaded=!1,this.file&&this.registry._loader.clearCache(this.getFileUrl(),this.type);for(let t=0;t<e.length;++t){const s=e[t];s&&s.destroy&&s.destroy()}}static fetchArrayBuffer(e,t,s,i=0){var n;s!=null&&(n=s.file)!=null&&n.contents?setTimeout(()=>{t(null,s.file.contents)}):De.get(e,{cache:!0,responseType:"arraybuffer",retry:i>0,maxRetries:i},t)}}class IT{constructor(e=null){this._index={},this._key=e}addItem(e){const t=e.tags._list;for(const s of t)this.add(s,e)}removeItem(e){const t=e.tags._list;for(const s of t)this.remove(s,e)}add(e,t){this._index[e]&&this._index[e].list.indexOf(t)!==-1||(this._index[e]||(this._index[e]={list:[]},this._key&&(this._index[e].keys={})),this._index[e].list.push(t),this._key&&(this._index[e].keys[t[this._key]]=t))}remove(e,t){if(!this._index[e]||this._key&&!this._index[e].keys[t[this._key]])return;const s=this._index[e].list.indexOf(t);s!==-1&&(this._index[e].list.splice(s,1),this._key&&delete this._index[e].keys[t[this._key]],this._index[e].list.length===0&&delete this._index[e])}find(e){const t={},s=[];let i,n,r,a,o;const h=(c,d)=>this._index[c].list.length-this._index[d].list.length;for(let c=0;c<e.length;c++){if(n=e[c],n instanceof Array){if(n.length===0)continue;if(n.length===1)n=n[0];else{o=!1;for(let d=0;d<n.length;d++)if(!this._index[n[d]]){o=!0;break}if(o)continue;r=n.slice(0).sort(h),a=r.slice(1),a.length===1&&(a=a[0]);for(let d=0;d<this._index[r[0]].list.length;d++)i=this._index[r[0]].list[d],(this._key?!t[i[this._key]]:s.indexOf(i)===-1)&&i.tags.has(a)&&(this._key&&(t[i[this._key]]=!0),s.push(i));continue}}if(n&&typeof n=="string"&&this._index[n])for(let d=0;d<this._index[n].list.length;d++)i=this._index[n].list[d],this._key?t[i[this._key]]||(t[i[this._key]]=!0,s.push(i)):s.indexOf(i)===-1&&s.push(i)}return s}}class LT extends le{constructor(e){super(),this._loader=e,this._assets=[],this._cache={},this._names={},this._tags=new IT("_id"),this._urls={},this.prefix=null}list(e){return e=e||{},this._assets.filter(t=>{let s=!0;return e.preload!==void 0&&(s=t.preload===e.preload),s})}add(e){const t=this._assets.push(e)-1;let s;this._cache[e.id]=t,this._names[e.name]||(this._names[e.name]=[]),this._names[e.name].push(t),e.file&&(s=e.file.url,this._urls[s]=t),e.registry=this,this._tags.addItem(e),e.tags.on("add",this._onTagAdd,this),e.tags.on("remove",this._onTagRemove,this),this.fire("add",e),this.fire("add:"+e.id,e),s&&this.fire("add:url:"+s,e),e.preload&&this.load(e)}remove(e){const t=this._cache[e.id],s=e.file?e.file.url:null;if(t!==void 0){this._assets.splice(t,1),delete this._cache[e.id],this._names={},this._urls=[];for(let i=0,n=this._assets.length;i<n;i++){const r=this._assets[i];this._cache[r.id]=i,this._names[r.name]||(this._names[r.name]=[]),this._names[r.name].push(i),r.file&&(this._urls[r.file.url]=i)}return this._tags.removeItem(e),e.tags.off("add",this._onTagAdd,this),e.tags.off("remove",this._onTagRemove,this),e.fire("remove",e),this.fire("remove",e),this.fire("remove:"+e.id,e),s&&this.fire("remove:url:"+s,e),!0}return!1}get(e){const t=this._cache[e];return this._assets[t]}getByUrl(e){const t=this._urls[e];return this._assets[t]}load(e){if(e.loading||e.loaded)return;const t=e.file,s=n=>{n instanceof Array?e.resources=n:e.resource=n,this._loader.patch(e,this),this.fire("load",e),this.fire("load:"+e.id,e),t&&t.url&&this.fire("load:url:"+t.url,e),e.fire("load",e)},i=(n,r,a)=>{if(e.loaded=!0,e.loading=!1,n)this.fire("error",n,e),this.fire("error:"+e.id,n,e),e.fire("error",n,e);else{if(!zt.legacy&&e.type==="script"){const o=this._loader.getHandler("script");o._cache[e.id]&&o._cache[e.id].parentNode===document.head&&document.head.removeChild(o._cache[e.id]),o._cache[e.id]=a}s(r)}};if(t||e.type==="cubemap")this.fire("load:start",e),this.fire("load:"+e.id+":start",e),e.loading=!0,this._loader.load(e.getFileUrl(),e.type,i,e);else{const n=this._loader.open(e.type,e.data);e.loaded=!0,s(n)}}loadFromUrl(e,t,s){this.loadFromUrlAndFilename(e,null,t,s)}loadFromUrlAndFilename(e,t,s,i){const n=re.getBasename(t||e),r={filename:t||n,url:e};let a=this.getByUrl(e);if(!a)a=new ne(n,s,r),this.add(a);else if(a.loaded){i(a.loadFromUrlError||null,a);return}const o=h=>{h.once("load",c=>{s==="material"?this._loadTextures(c,(d,u)=>{i(d,c)}):i(null,c)}),h.once("error",c=>{c&&(this.loadFromUrlError=c),i(c,h)}),this.load(h)};a.resource?i(null,a):s==="model"?this._loadModel(a,o):o(a)}_loadModel(e,t){const s=e.getFileUrl(),i=re.getExtension(s);if(i===".json"||i===".glb"){const n=re.getDirectory(s),r=re.getBasename(s),a=re.join(n,r.replace(i,".mapping.json"));this._loader.load(a,"json",(o,h)=>{o?(e.data={mapping:[]},t(e)):this._loadMaterials(e,h,(c,d)=>{e.data=h,t(e)})})}else t(e)}_loadMaterials(e,t,s){const i=[];let n=0;const r=(a,o)=>{this._loadTextures(o,(h,c)=>{i.push(o),i.length===n&&s(null,i)})};for(let a=0;a<t.mapping.length;a++){const o=t.mapping[a].path;if(o){n++;const h=e.getAbsoluteUrl(o);this.loadFromUrl(h,"material",r)}}n===0&&s(null,i)}_loadTextures(e,t){const s=[];let i=0;const n=e.data;if(n.mappingFormat!=="path"){t(null,s);return}const r=(o,h)=>{o&&console.error(o),s.push(h),s.length===i&&t(null,s)},a=Fl;for(let o=0;o<a.length;o++){const h=n[a[o]];if(h&&typeof h=="string"){i++;const c=e.getAbsoluteUrl(h);this.loadFromUrl(c,"texture",r)}}i===0&&t(null,s)}findAll(e,t){const s=this._names[e];if(s){const i=s.map(n=>this._assets[n]);return t?i.filter(n=>n.type===t):i}return[]}_onTagAdd(e,t){this._tags.add(e,t)}_onTagRemove(e,t){this._tags.remove(e,t)}findByTag(){return this._tags.find(arguments)}filter(e){return this._assets.filter(t=>e(t))}find(e,t){const s=this.findAll(e,t);return s.length>0?s[0]:null}}class DT{constructor(e){this._assets=e,this._bundleAssets={},this._assetsInBundles={},this._urlsInBundles={},this._fileRequests={},this._assets.on("add",this._onAssetAdded,this),this._assets.on("remove",this._onAssetRemoved,this)}_onAssetAdded(e){if(e.type==="bundle"){this._bundleAssets[e.id]=e,this._registerBundleEventListeners(e.id);for(let t=0,s=e.data.assets.length;t<s;t++)this._indexAssetInBundle(e.data.assets[t],e)}else this._assetsInBundles[e.id]&&this._indexAssetFileUrls(e)}_registerBundleEventListeners(e){this._assets.on("load:"+e,this._onBundleLoaded,this),this._assets.on("error:"+e,this._onBundleError,this)}_unregisterBundleEventListeners(e){this._assets.off("load:"+e,this._onBundleLoaded,this),this._assets.off("error:"+e,this._onBundleError,this)}_indexAssetInBundle(e,t){if(!this._assetsInBundles[e])this._assetsInBundles[e]=[t];else{const i=this._assetsInBundles[e];i.indexOf(t)===-1&&i.push(t)}const s=this._assets.get(e);s&&this._indexAssetFileUrls(s)}_indexAssetFileUrls(e){const t=this._getAssetFileUrls(e);if(t)for(let s=0,i=t.length;s<i;s++){const n=t[s];this._urlsInBundles[n]=this._assetsInBundles[e.id]}}_getAssetFileUrls(e){let t=e.getFileUrl();if(!t)return null;t=this._normalizeUrl(t);const s=[t];if(e.type==="font"){const i=e.data.info.maps.length;for(let n=1;n<i;n++)s.push(t.replace(".png",n+".png"))}return s}_normalizeUrl(e){return e&&e.split("?")[0]}_onAssetRemoved(e){if(e.type==="bundle"){delete this._bundleAssets[e.id],this._unregisterBundleEventListeners(e.id);for(const t in this._assetsInBundles){const s=this._assetsInBundles[t],i=s.indexOf(e);if(i!==-1&&(s.splice(i,1),!s.length)){delete this._assetsInBundles[t];for(const n in this._urlsInBundles)this._urlsInBundles[n]===s&&delete this._urlsInBundles[n]}}this._onBundleError(`Bundle ${e.id} was removed`,e)}else if(this._assetsInBundles[e.id]){delete this._assetsInBundles[e.id];const t=this._getAssetFileUrls(e);for(let s=0,i=t.length;s<i;s++)delete this._urlsInBundles[t[s]]}}_onBundleLoaded(e){if(!e.resource){this._onBundleError(`Bundle ${e.id} failed to load`,e);return}requestAnimationFrame(()=>{if(this._fileRequests)for(const t in this._fileRequests){const s=this._urlsInBundles[t];if(!s||s.indexOf(e)===-1)continue;const i=decodeURIComponent(t);let n=null;e.resource.hasBlobUrl(i)||(n=`Bundle ${e.id} does not contain URL ${t}`);const r=this._fileRequests[t];for(let a=0,o=r.length;a<o;a++)n?r[a](n):r[a](null,e.resource.getBlobUrl(i));delete this._fileRequests[t]}})}_onBundleError(e,t){for(const s in this._fileRequests)if(!this._findLoadedOrLoadingBundleForUrl(s)){const n=this._fileRequests[s];for(let r=0,a=n.length;r<a;r++)n[r](e);delete this._fileRequests[s]}}_findLoadedOrLoadingBundleForUrl(e){const t=this._urlsInBundles[e];if(!t)return null;const s=t.length;for(let i=0;i<s;i++)if(t[i].loaded&&t[i].resource)return t[i];for(let i=0;i<s;i++)if(t[i].loading)return t[i];return null}listBundlesForAsset(e){return this._assetsInBundles[e.id]||null}list(){const e=[];for(const t in this._bundleAssets)e.push(this._bundleAssets[t]);return e}hasUrl(e){return!!this._urlsInBundles[e]}canLoadUrl(e){return!!this._findLoadedOrLoadingBundleForUrl(e)}loadUrl(e,t){const s=this._findLoadedOrLoadingBundleForUrl(e);if(!s){t(`URL ${e} not found in any bundles`);return}if(s.loaded){const i=decodeURIComponent(e);if(!s.resource.hasBlobUrl(i)){t(`Bundle ${s.id} does not contain URL ${e}`);return}t(null,s.resource.getBlobUrl(i))}else this._fileRequests.hasOwnProperty(e)?this._fileRequests[e].push(t):this._fileRequests[e]=[t]}destroy(){this._assets.off("add",this._onAssetAdded,this),this._assets.off("remove",this._onAssetRemoved,this);for(const e in this._bundleAssets)this._unregisterBundleEventListeners(e);this._assets=null,this._bundleAssets=null,this._assetsInBundles=null,this._urlsInBundles=null,this._fileRequests=null}}class FT extends le{constructor(e){super(),this.app=e,this._scripts={},this._list=[]}destroy(){this.app=null,this.off()}add(e){const t=e.__name;return this._scripts.hasOwnProperty(t)?(setTimeout(()=>{if(e.prototype.swap){const s=this._scripts[t],i=this._list.indexOf(s);this._list[i]=e,this._scripts[t]=e,this.fire("swap",t,e),this.fire("swap:"+t,e)}else console.warn(`script registry already has '${t}' script, define 'swap' method for new script type to enable code hot swapping`)}),!1):(this._scripts[t]=e,this._list.push(e),this.fire("add",t,e),this.fire("add:"+t,e),setTimeout(()=>{if(!this._scripts.hasOwnProperty(t)||!this.app||!this.app.systems||!this.app.systems.script)return;const s=this.app.systems.script._components;let i;const n=[],r=[];for(s.loopIndex=0;s.loopIndex<s.length;s.loopIndex++){const a=s.items[s.loopIndex];if(a._scriptsIndex[t]&&a._scriptsIndex[t].awaiting){a._scriptsData&&a._scriptsData[t]&&(i=a._scriptsData[t].attributes);const o=a.create(t,{preloading:!0,ind:a._scriptsIndex[t].ind,attributes:i});o&&n.push(o)}}for(let a=0;a<n.length;a++)n[a].__initializeAttributes();for(let a=0;a<n.length;a++)n[a].enabled&&(n[a]._initialized=!0,r.push(n[a]),n[a].initialize&&n[a].initialize());for(let a=0;a<r.length;a++)!r[a].enabled||r[a]._postInitialized||(r[a]._postInitialized=!0,r[a].postInitialize&&r[a].postInitialize())}),!0)}remove(e){let t=e,s=e;if(typeof s!="string"?s=t.__name:t=this.get(s),this.get(s)!==t)return!1;delete this._scripts[s];const i=this._list.indexOf(t);return this._list.splice(i,1),this.fire("remove",s,t),this.fire("remove:"+s,t),!0}get(e){return this._scripts[e]||null}has(e){if(typeof e=="string")return this._scripts.hasOwnProperty(e);if(!e)return!1;const t=e.__name;return this._scripts[t]===e}list(){return this._list}}class OT{_validate(e){if(!e.header)throw new Error('pc.I18n#addData: Missing "header" field');if(!e.header.version)throw new Error('pc.I18n#addData: Missing "header.version" field');if(e.header.version!==1)throw new Error('pc.I18n#addData: Invalid "header.version" field');if(e.data){if(!Array.isArray(e.data))throw new Error('pc.I18n#addData: "data" field must be an array')}else throw new Error('pc.I18n#addData: Missing "data" field');for(let t=0,s=e.data.length;t<s;t++){const i=e.data[t];if(!i.info)throw new Error(`pc.I18n#addData: missing "data[${t}].info" field`);if(!i.info.locale)throw new Error(`pc.I18n#addData: missing "data[${t}].info.locale" field`);if(typeof i.info.locale!="string")throw new Error(`pc.I18n#addData: "data[${t}].info.locale" must be a string`);if(!i.messages)throw new Error(`pc.I18n#addData: missing "data[${t}].messages" field`)}}parse(e){return e.data}}class BT extends le{constructor(e){super(),this.locale=Jo,this._translations={},this._availableLangs={},this._app=e,this._assets=[],this._parser=new OT}set assets(e){const t={};for(let i=0,n=e.length;i<n;i++){const r=e[i]instanceof ne?e[i].id:e[i];t[r]=!0}let s=this._assets.length;for(;s--;){const i=this._assets[s];if(!t[i]){this._app.assets.off("add:"+i,this._onAssetAdd,this);const n=this._app.assets.get(i);n&&this._onAssetRemove(n),this._assets.splice(s,1)}}for(const i in t){const n=parseInt(i,10);if(this._assets.indexOf(n)!==-1)continue;this._assets.push(n);const r=this._app.assets.get(n);r?this._onAssetAdd(r):this._app.assets.once("add:"+n,this._onAssetAdd,this)}}get assets(){return this._assets}set locale(e){if(this._locale===e)return;let t=As(e);if(t==="in"&&(t="id",e=AT(e,t),this._locale===e))return;const s=this._locale;this._locale=e,this._lang=t,this._pluralFn=wh(this._lang),this.fire("set:locale",e,s)}get locale(){return this._locale}static findAvailableLocale(e,t){return Bm(e,t)}findAvailableLocale(e){if(this._translations[e])return e;const t=As(e);return this._findFallbackLocale(e,t)}getText(e,t){let s=e,i;t||(t=this._locale,i=this._lang);let n=this._translations[t];return n||(i||(i=As(t)),t=this._findFallbackLocale(t,i),n=this._translations[t]),n&&n.hasOwnProperty(e)&&(s=n[e],Array.isArray(s)&&(s=s[0]),s==null&&(s=e)),s}getPluralText(e,t,s){let i=e,n,r;s?(n=As(s),r=wh(n)):(s=this._locale,n=this._lang,r=this._pluralFn);let a=this._translations[s];if(a||(s=this._findFallbackLocale(s,n),n=As(s),r=wh(n),a=this._translations[s]),a&&a[e]&&r){const o=r(t);i=a[e][o],i==null&&(i=e)}return i}addData(e){let t;try{t=this._parser.parse(e)}catch(s){console.error(s);return}for(let s=0,i=t.length;s<i;s++){const n=t[s],r=n.info.locale,a=n.messages;if(!this._translations[r]){this._translations[r]={};const o=As(r);this._availableLangs[o]||(this._availableLangs[o]=r)}Object.assign(this._translations[r],a),this.fire("data:add",r,a)}}removeData(e){let t;try{t=this._parser.parse(e)}catch(s){console.error(s);return}for(let s=0,i=t.length;s<i;s++){const n=t[s],r=n.info.locale,a=this._translations[r];if(!a)continue;const o=n.messages;for(const h in o)delete a[h];Object.keys(a).length===0&&(delete this._translations[r],delete this._availableLangs[As(r)]),this.fire("data:remove",r,o)}}destroy(){this._translations=null,this._availableLangs=null,this._assets=null,this._parser=null,this.off()}_findFallbackLocale(e,t){let s=Qo[e];return s&&this._translations[s]||(s=Qo[t],s&&this._translations[s])||(s=this._availableLangs[t],s&&this._translations[s])?s:Jo}_onAssetAdd(e){e.on("load",this._onAssetLoad,this),e.on("change",this._onAssetChange,this),e.on("remove",this._onAssetRemove,this),e.on("unload",this._onAssetUnload,this),e.resource&&this._onAssetLoad(e)}_onAssetLoad(e){this.addData(e.resource)}_onAssetChange(e){e.resource&&this.addData(e.resource)}_onAssetRemove(e){e.off("load",this._onAssetLoad,this),e.off("change",this._onAssetChange,this),e.off("remove",this._onAssetRemove,this),e.off("unload",this._onAssetUnload,this),e.resource&&this.removeData(e.resource),this._app.assets.once("add:"+e.id,this._onAssetAdd,this)}_onAssetUnload(e){e.resource&&this.removeData(e.resource)}}class kT extends le{constructor(){super(),this.anim=void 0,this.animation=void 0,this.audiolistener=void 0,this.audiosource=void 0,this.button=void 0,this.camera=void 0,this.collision=void 0,this.element=void 0,this.joint=void 0,this.layoutchild=void 0,this.layoutgroup=void 0,this.light=void 0,this.model=void 0,this.particlesystem=void 0,this.render=void 0,this.rigidbody=void 0,this.screen=void 0,this.script=void 0,this.scrollbar=void 0,this.scrollview=void 0,this.sound=void 0,this.sprite=void 0,this.zone=void 0,this.list=[]}add(e){const t=e.id;if(this[t])throw new Error(`ComponentSystem name '${t}' already registered or not allowed`);this[t]=e,this.list.push(e)}remove(e){const t=e.id;if(!this[t])throw new Error(`No ComponentSystem named '${t}' registered`);delete this[t];const s=this.list.indexOf(this[t]);s!==-1&&this.list.splice(s,1)}destroy(){this.off();for(let e=0;e<this.list.length;e++)this.list[e].destroy()}}class zT{constructor(e){this.frame={fps:0,ms:0,dt:0,updateStart:0,updateTime:0,renderStart:0,renderTime:0,physicsStart:0,physicsTime:0,cullTime:0,sortTime:0,skinTime:0,morphTime:0,instancingTime:0,triangles:0,otherPrimitives:0,shaders:0,materials:0,cameras:0,shadowMapUpdates:0,shadowMapTime:0,depthMapTime:0,forwardTime:0,lightClustersTime:0,lightClusters:0,_timeToCountFrames:0,_fpsAccum:0},this.drawCalls={forward:0,depth:0,shadow:0,immediate:0,misc:0,total:0,skinned:0,instanced:0,removedByInstancing:0},this.misc={renderTargetCreationTime:0},this.particles={updatesPerFrame:0,_updatesPerFrame:0,frameTime:0,_frameTime:0},this.shaders=e._shaderStats,this.vram=e._vram,Object.defineProperty(this.vram,"totalUsed",{get:function(){return this.tex+this.vb+this.ib}}),Object.defineProperty(this.vram,"geom",{get:function(){return this.vb+this.ib}})}get scene(){return ui().scene._stats}get lightmapper(){var e;return(e=ui().lightmapper)==null?void 0:e.stats}get batcher(){const e=ui()._batcher;return e?e._stats:null}}const ur=[];class be extends Qe{constructor(e,t=ui()){super(e),this.anim=void 0,this.animation=void 0,this.audiolistener=void 0,this.button=void 0,this.camera=void 0,this.collision=void 0,this.element=void 0,this.layoutchild=void 0,this.layoutgroup=void 0,this.light=void 0,this.model=void 0,this.particlesystem=void 0,this.render=void 0,this.rigidbody=void 0,this.screen=void 0,this.script=void 0,this.scrollbar=void 0,this.scrollview=void 0,this.sound=void 0,this.sprite=void 0,this.c={},this._app=void 0,this._destroying=!1,this._guid=null,this._template=!1,this._app=t}addComponent(e,t){const s=this._app.systems[e];return!s||this.c[e]?null:s.addComponent(this,t)}removeComponent(e){const t=this._app.systems[e];t&&this.c[e]&&t.removeComponent(this)}findComponent(e){const t=this.findOne(function(s){return s.c&&s.c[e]});return t&&t.c[e]}findComponents(e){return this.find(function(s){return s.c&&s.c[e]}).map(function(s){return s.c[e]})}getGuid(){return this._guid||this.setGuid(hg.create()),this._guid}setGuid(e){const t=this._app._entityIndex;this._guid&&delete t[this._guid],this._guid=e,t[this._guid]=this}_notifyHierarchyStateChanged(e,t){let s=!1;e===this&&ur.length===0&&(s=!0),e._beingEnabled=!0,e._onHierarchyStateChanged(t),e._onHierarchyStatePostChanged&&ur.push(e);const i=e._children;for(let n=0,r=i.length;n<r;n++)i[n]._enabled&&this._notifyHierarchyStateChanged(i[n],t);if(e._beingEnabled=!1,s){for(let n=0;n<ur.length;n++)ur[n]._onHierarchyStatePostChanged();ur.length=0}}_onHierarchyStateChanged(e){super._onHierarchyStateChanged(e);const t=this.c;for(const s in t)if(t.hasOwnProperty(s)){const i=t[s];i.enabled&&(e?i.onEnable():i.onDisable())}}_onHierarchyStatePostChanged(){const e=this.c;for(const t in e)e.hasOwnProperty(t)&&e[t].onPostStateChange()}findByGuid(e){if(this._guid===e)return this;const t=this._app._entityIndex[e];return t&&(t===this||t.isDescendantOf(this))?t:null}destroy(){this._destroying=!0;for(const t in this.c)this.c[t].enabled=!1;for(const t in this.c)this.c[t].system.removeComponent(this);this._parent&&this._parent.removeChild(this);const e=this._children;for(;e.length;){const t=e.pop();t._parent=null,t instanceof be&&t.destroy()}this.fire("destroy",this),this.off(),this._guid&&delete this._app._entityIndex[this._guid],this._destroying=!1}clone(){const e={},t=this._cloneRecursively(e);return e[this.getGuid()]=t,km(this,this,t,e),t}_cloneRecursively(e){const t=new this.constructor(void 0,this._app);super._cloneInternal(t);for(const s in this.c)this.c[s].system.cloneComponent(this,t);for(let s=0;s<this._children.length;s++){const i=this._children[s];if(i instanceof be){const n=i._cloneRecursively(e);t.addChild(n),e[i.getGuid()]=n}}return t}}function km(l,e,t,s){if(e instanceof be){const i=e.c;for(const a in i){const o=i[a],h=o.system.getPropertiesOfType("entity");for(let c=0,d=h.length;c<d;c++){const f=h[c].name,p=o[f];if(!!l.findByGuid(p)){const m=s[p].getGuid();m&&(t.c[a][f]=m)}}}i.script&&!t._app.useLegacyScriptAttributeCloning&&t.script.resolveDuplicatedEntityReferenceProperties(i.script,s),i.render&&t.render.resolveDuplicatedEntityReferenceProperties(i.render,s),i.anim&&t.anim.resolveDuplicatedEntityReferenceProperties(i.anim,s);const n=e.children.filter(function(a){return a instanceof be}),r=t.children.filter(function(a){return a instanceof be});for(let a=0,o=n.length;a<o;a++)km(l,n[a],r[a],s)}}class mf{constructor(e,t){this.name=e,this.url=t,this.data=null,this._loading=!1,this._onLoadedCallbacks=[]}get loaded(){return!!this.data}get loading(){return this._loading}}class UT{constructor(e){this._app=e,this._list=[],this._index={},this._urlIndex={}}destroy(){this._app=null}list(){return this._list}add(e,t){if(this._index.hasOwnProperty(e))return!1;const s=new mf(e,t),i=this._list.push(s);return this._index[s.name]=i-1,this._urlIndex[s.url]=i-1,!0}find(e){return this._index.hasOwnProperty(e)?this._list[this._index[e]]:null}findByUrl(e){return this._urlIndex.hasOwnProperty(e)?this._list[this._urlIndex[e]]:null}remove(e){if(this._index.hasOwnProperty(e)){const t=this._index[e];let s=this._list[t];delete this._urlIndex[s.url],delete this._index[e],this._list.splice(t,1);for(let i=0;i<this._list.length;i++)s=this._list[i],this._index[s.name]=i,this._urlIndex[s.url]=i}}_loadSceneData(e,t,s){const i=this._app;let n=e;if(typeof e=="string"&&(e=this.findByUrl(n)||this.find(n)||new mf("Untitled",n)),n=e.url,!n){s("Cannot find scene to load");return}if(e.loaded){s(null,e);return}i.assets&&i.assets.prefix&&!el.test(n)&&(n=re.join(i.assets.prefix,n)),e._onLoadedCallbacks.push(s),e._loading||i.loader.getHandler("hierarchy").load(n,(a,o)=>{e.data=o,e._loading=!1;for(let h=0;h<e._onLoadedCallbacks.length;h++)e._onLoadedCallbacks[h](a,e);t||(e.data=null),e._onLoadedCallbacks.length=0}),e._loading=!0}loadSceneData(e,t){this._loadSceneData(e,!0,t)}unloadSceneData(e){typeof e=="string"&&(e=this.findByUrl(e)),e&&(e.data=null)}_loadSceneHierarchy(e,t,s){this._loadSceneData(e,!1,(i,n)=>{if(i){s&&s(i);return}t&&t(n);const r=this._app,a=()=>{const o=r.loader.getHandler("hierarchy");r.systems.script.preloading=!0;const h=o.open(n.url,n.data);r.systems.script.preloading=!1,r.loader.clearCache(n.url,"hierarchy"),r.root.addChild(h),r.systems.fire("initialize",h),r.systems.fire("postInitialize",h),r.systems.fire("postPostInitialize",h),s&&s(null,h)};r._preloadScripts(n.data,a)})}loadSceneHierarchy(e,t){this._loadSceneHierarchy(e,null,t)}loadSceneSettings(e,t){this._loadSceneData(e,!1,(s,i)=>{s?t&&t(s):(this._app.applySceneSettings(i.data.settings),t&&t(null))})}changeScene(e,t){const s=this._app,i=n=>{const r=s.root.children;for(;r.length>0;){const a=r[0];a.reparent(null),a.destroy==null||a.destroy()}s.applySceneSettings(n.data.settings)};this._loadSceneHierarchy(e,i,t)}loadScene(e,t){const s=this._app,i=s.loader.getHandler("scene");s.assets&&s.assets.prefix&&!el.test(e)&&(e=re.join(s.assets.prefix,e)),i.load(e,(n,r)=>{if(n)t&&t(n);else{const a=()=>{s.systems.script.preloading=!0;const o=i.open(e,r),h=this.findByUrl(e);h&&!h.loaded&&(h.data=r),s.systems.script.preloading=!1,s.loader.clearCache(e,"scene"),s.loader.patch({resource:o,type:"scene"},s.assets),s.root.addChild(o.root),s.systems.rigidbody&&typeof Ammo<"u"&&s.systems.rigidbody.gravity.set(o._gravity.x,o._gravity.y,o._gravity.z),t&&t(null,o)};s._preloadScripts(r,a)}})}}const _f=["uSceneDepthMap","uDepthMap"],gf=["uSceneColorMap","texture_grabPass"];class NT{constructor(e){this.application=e,this.device=e.graphicsDevice,this.layer=null,this.colorFormat=this.device.defaultFramebufferAlpha?he:ks,this.device.webgl2?this.initWebGl2():this.initWebGl1()}setupUniform(e,t,s){(t?_f:gf).forEach(n=>e.scope.resolve(n).setValue(s))}allocateTexture(e,t,s,i,n,r){return new ae(e,{name:s,format:i,width:t?t.colorBuffer.width:e.width,height:t?t.colorBuffer.height:e.height,mipmaps:r,minFilter:n?ve:r?Xi:$e,magFilter:n?ve:$e,addressU:se,addressV:se})}resizeCondition(e,t,s){const i=(t==null?void 0:t.width)||s.width,n=(t==null?void 0:t.height)||s.height;return!e||i!==e.width||n!==e.height}allocateRenderTarget(e,t,s,i,n,r,a){const o=a?_f:gf,h=this.allocateTexture(s,t,o[0],i,n,r);return e?(e.destroyFrameBuffers(),n?e._depthBuffer=h:e._colorBuffer=h):e=new ht({name:"renderTargetSceneGrab",colorBuffer:n?null:h,depthBuffer:n?h:null,depth:!n,stencil:s.supportsStencil,autoResolve:!1}),e}releaseRenderTarget(e){e&&(e.destroyTextureBuffers(),e.destroy())}initWebGl2(){const e=this.application,t=this;this.layer=new ki({enabled:!1,name:"Depth",id:ut,onDisable:function(){t.releaseRenderTarget(this.depthRenderTarget),this.depthRenderTarget=null,t.releaseRenderTarget(this.colorRenderTarget),this.colorRenderTarget=null},onPreRenderOpaque:function(s){const i=e.graphicsDevice,n=this.cameras[s];if(n.renderSceneColorMap){var r;t.resizeCondition(this.colorRenderTarget,(r=n.renderTarget)==null?void 0:r.colorBuffer,i)&&(t.releaseRenderTarget(this.colorRenderTarget),this.colorRenderTarget=t.allocateRenderTarget(this.colorRenderTarget,n.renderTarget,i,this.colorFormat,!1,!0,!1)),i.copyRenderTarget(i.renderTarget,this.colorRenderTarget,!0,!1),i.activeTexture(i.maxCombinedTextures-1);const o=this.colorRenderTarget.colorBuffer;i.bindTexture(o),i.gl.generateMipmap(o.impl._glTarget),t.setupUniform(i,!1,o)}if(n.renderSceneDepthMap){var a;t.resizeCondition(this.depthRenderTarget,(a=n.renderTarget)==null?void 0:a.depthBuffer,i)&&(t.releaseRenderTarget(this.depthRenderTarget),this.depthRenderTarget=t.allocateRenderTarget(this.depthRenderTarget,n.renderTarget,i,yl,!0,!1,!0)),i.copyRenderTarget(i.renderTarget,this.depthRenderTarget,!1,!0),t.setupUniform(i,!0,this.depthRenderTarget.depthBuffer)}},onPostRenderOpaque:function(s){}})}initWebGl1(){const e=this.application,t=this;this.layer=new ki({enabled:!1,name:"Depth",id:ut,shaderPass:Qt,onEnable:function(){this.depthRenderTarget=new ht({name:"depthRenderTarget-webgl1",depth:!0,stencil:e.graphicsDevice.supportsStencil,autoResolve:!1,graphicsDevice:e.graphicsDevice}),this.renderTarget=this.depthRenderTarget},onDisable:function(){this.depthRenderTarget.destroyTextureBuffers(),this.renderTarget=null,t.releaseRenderTarget(this.colorRenderTarget),this.colorRenderTarget=null},onPostCull:function(s){const i=e.graphicsDevice,n=this.cameras[s];if(n.renderSceneDepthMap){var r;(!this.depthRenderTarget.depthBuffer||t.resizeCondition(this.depthRenderTarget,(r=n.renderTarget)==null?void 0:r.depthBuffer,i))&&(this.depthRenderTarget.destroyTextureBuffers(),this.depthRenderTarget=t.allocateRenderTarget(this.depthRenderTarget,n.renderTarget,i,he,!1,!1,!0));const a=this.instances.visibleOpaque[s],o=a.list,h=e.scene.layers,c=h.subLayerEnabled,d=h.subLayerList,u=e.scene.layers.getLayerById(Hs).renderTarget,f=this.cameras[s];let p=0;const _=h.layerList;for(let m=0;m<_.length;m++){const g=_[m];if(g===this)break;if(g.renderTarget!==u||!g.enabled||!c[m])continue;const w=g.cameras.indexOf(f);if(w<0)continue;let y=d[m]?g.instances.visibleTransparent[w]:g.instances.visibleOpaque[w];const T=y.length;y=y.list;for(let C=0;C<T;C++){const S=y[C];S.material&&S.material.depthWrite&&!S._noDepthDrawGl1&&(o[p]=S,p++)}}a.length=p}},onPreRenderOpaque:function(s){const i=e.graphicsDevice,n=this.cameras[s];if(n.renderSceneColorMap){var r;t.resizeCondition(this.colorRenderTarget,(r=n.renderTarget)==null?void 0:r.colorBuffer,i)&&(t.releaseRenderTarget(this.colorRenderTarget),this.colorRenderTarget=t.allocateRenderTarget(this.colorRenderTarget,n.renderTarget,i,this.colorFormat,!1,!1,!1));const a=this.colorRenderTarget._colorBuffer;a.impl._glTexture||a.impl.initialize(i,a),i.bindTexture(a);const o=i.gl;o.copyTexImage2D(o.TEXTURE_2D,0,a.impl._glFormat,0,0,a.width,a.height,0),a._needsUpload=!1,a._needsMipmapsUpload=!1,t.setupUniform(i,!1,a)}n.renderSceneDepthMap&&t.setupUniform(i,!0,this.depthRenderTarget.colorBuffer)},onDrawCall:function(){e.graphicsDevice.setColorWrite(!0,!0,!0,!0)},onPostRenderOpaque:function(s){if(this.cameras[s].renderSceneDepthMap){const n=this.instances.visibleOpaque[s];n.length=0}}})}patch(e){e.onEnable=this.layer.onEnable,e.onDisable=this.layer.onDisable,e.onPreRenderOpaque=this.layer.onPreRenderOpaque,e.onPostRenderOpaque=this.layer.onPostRenderOpaque,e.shaderPass=this.layer.shaderPass,e.onPostCull=this.layer.onPostCull,e.onDrawCall=this.layer.onDrawCall}}class yf{constructor(e){this.length=e,this.count=0}inc(){this.count++}done(){return this.count===this.length}}class Wn extends le{constructor(e){super(),Wn._applications[e.id]=this,Cc(this),this._destroyRequested=!1,this._inFrameUpdate=!1,this._time=0,this.timeScale=1,this.maxDeltaTime=.1,this.frame=0,this.autoRender=!0,this.renderNextFrame=!1,this.useLegacyScriptAttributeCloning=zt.legacy,this._librariesLoaded=!1,this._fillMode=df,this._resolutionMode=yT,this._allowResize=!0,this.context=this}init(e){const t=e.graphicsDevice;this.graphicsDevice=t,Vs.set(t),this._initDefaultMaterial(),this._initProgramLibrary(),this.stats=new zT(t),this._soundManager=e.soundManager,this.loader=new CT(this),Me.init(t),this._entityIndex={},this.scene=new oT(t),this._registerSceneImmediate(this.scene),this.root=new be,this.root._enabledInHierarchy=!0,this.assets=new LT(this.loader),e.assetPrefix&&(this.assets.prefix=e.assetPrefix),this.bundles=new DT(this.assets),this.enableBundles=typeof TextDecoder<"u",this.scriptsOrder=e.scriptsOrder||[],this.scripts=new FT(this),this.i18n=new BT(this),this.scenes=new UT(this);const s=this;this.defaultLayerWorld=new ki({name:"World",id:Hs}),this.sceneGrab=new NT(this),this.defaultLayerDepth=this.sceneGrab.layer,this.defaultLayerSkybox=new ki({enabled:!0,name:"Skybox",id:cd,opaqueSortMode:yc}),this.defaultLayerUi=new ki({enabled:!0,name:"UI",id:Kr,transparentSortMode:w0,passThrough:!1}),this.defaultLayerImmediate=new ki({enabled:!0,name:"Immediate",id:Bo,opaqueSortMode:yc,passThrough:!0});const i=new ju("default");i.pushOpaque(this.defaultLayerWorld),i.pushOpaque(this.defaultLayerDepth),i.pushOpaque(this.defaultLayerSkybox),i.pushTransparent(this.defaultLayerWorld),i.pushOpaque(this.defaultLayerImmediate),i.pushTransparent(this.defaultLayerImmediate),i.pushTransparent(this.defaultLayerUi),this.scene.layers=i,this.scene.on("set:layers",function(n,r){const a=r.layerList;let o;for(let h=0;h<a.length;h++)switch(o=a[h],o.id){case ut:s.sceneGrab.patch(o);break;case Kr:o.passThrough=s.defaultLayerUi.passThrough;break;case Bo:o.passThrough=s.defaultLayerImmediate.passThrough;break}}),Ui.createPlaceholder(t),this.renderer=new Mw(t),this.renderer.scene=this.scene,this.frameGraph=new xT,this.lightmapper=null,e.lightmapper&&(this.lightmapper=new e.lightmapper(t,this.root,this.scene,this.renderer,this.assets),this.once("prerender",this._firstBake,this)),this._batcher=null,e.batchManager&&(this._batcher=new e.batchManager(t,this.root,this.scene),this.once("prerender",this._firstBatch,this)),this.keyboard=e.keyboard||null,this.mouse=e.mouse||null,this.touch=e.touch||null,this.gamepads=e.gamepads||null,this.elementInput=e.elementInput||null,this.elementInput&&(this.elementInput.app=this),this.xr=e.xr?new e.xr(this):null,this.elementInput&&this.elementInput.attachSelectEvents(),this._inTools=!1,this._skyboxAsset=null,this._scriptPrefix=e.scriptPrefix||"",this.enableBundles&&this.loader.addHandler("bundle",new TT(this)),e.resourceHandlers.forEach(n=>{const r=new n(this);this.loader.addHandler(r.handlerType,r)}),this.systems=new kT,e.componentSystems.forEach(n=>{this.systems.add(new n(this))}),this._visibilityChangeHandler=this.onVisibilityChange.bind(this),typeof document<"u"&&(document.hidden!==void 0?(this._hiddenAttr="hidden",document.addEventListener("visibilitychange",this._visibilityChangeHandler,!1)):document.mozHidden!==void 0?(this._hiddenAttr="mozHidden",document.addEventListener("mozvisibilitychange",this._visibilityChangeHandler,!1)):document.msHidden!==void 0?(this._hiddenAttr="msHidden",document.addEventListener("msvisibilitychange",this._visibilityChangeHandler,!1)):document.webkitHidden!==void 0&&(this._hiddenAttr="webkitHidden",document.addEventListener("webkitvisibilitychange",this._visibilityChangeHandler,!1))),this.tick=VT(this)}static getApplication(e){return e?Wn._applications[e]:ui()}_initDefaultMaterial(){const e=new is;e.name="Default Material",e.shadingModel=Ll,ub(this.graphicsDevice,e)}_initProgramLibrary(){const e=new fT(this.graphicsDevice,new is);db(this.graphicsDevice,e)}get soundManager(){return this._soundManager}get batcher(){return this._batcher}get fillMode(){return this._fillMode}get resolutionMode(){return this._resolutionMode}configure(e,t){De.get(e,(s,i)=>{if(s){t(s);return}const n=i.application_properties,r=i.scenes,a=i.assets;this._parseApplicationProperties(n,o=>{this._parseScenes(r),this._parseAssets(a),t(o||null)})})}preload(e){this.fire("preload:start");const t=this.assets.list({preload:!0}),s=new yf(t.length);let i=!1;const n=()=>{this.graphicsDevice&&!i&&s.done()&&(i=!0,this.fire("preload:end"),e())},r=t.length;if(s.length){const a=h=>{s.inc(),this.fire("preload:progress",s.count/r),s.done()&&n()},o=(h,c)=>{s.inc(),this.fire("preload:progress",s.count/r),s.done()&&n()};for(let h=0;h<t.length;h++)t[h].loaded?(s.inc(),this.fire("preload:progress",s.count/r),s.done()&&n()):(t[h].once("load",a),t[h].once("error",o),this.assets.load(t[h]))}else n()}_preloadScripts(e,t){if(!zt.legacy){t();return}this.systems.script.preloading=!0;const s=this._getScriptReferences(e),i=s.length,n=new yf(i),r=/^http(s)?:\/\//;if(i){const a=(o,h)=>{o&&console.error(o),n.inc(),n.done()&&(this.systems.script.preloading=!1,t())};for(let o=0;o<i;o++){let h=s[o];!r.test(h.toLowerCase())&&this._scriptPrefix&&(h=re.join(this._scriptPrefix,s[o])),this.loader.load(h,"script",a)}}else this.systems.script.preloading=!1,t()}_parseApplicationProperties(e,t){if(typeof e.maxAssetRetries=="number"&&e.maxAssetRetries>0&&this.loader.enableRetry(e.maxAssetRetries),e.useDevicePixelRatio||(e.useDevicePixelRatio=e.use_device_pixel_ratio),e.resolutionMode||(e.resolutionMode=e.resolution_mode),e.fillMode||(e.fillMode=e.fill_mode),this._width=e.width,this._height=e.height,e.useDevicePixelRatio&&(this.graphicsDevice.maxPixelRatio=window.devicePixelRatio),this.setCanvasResolution(e.resolutionMode,this._width,this._height),this.setCanvasFillMode(e.fillMode,this._width,this._height),e.layers&&e.layerOrder){const s=new ju("application"),i={};for(const n in e.layers){const r=e.layers[n];r.id=parseInt(n,10),r.enabled=r.id!==ut,i[n]=new ki(r)}for(let n=0,r=e.layerOrder.length;n<r;n++){const a=e.layerOrder[n],o=i[a.layer];o&&(a.transparent?s.pushTransparent(o):s.pushOpaque(o),s.subLayerEnabled[n]=a.enabled)}this.scene.layers=s}if(e.batchGroups){const s=this.batcher;if(s)for(let i=0,n=e.batchGroups.length;i<n;i++){const r=e.batchGroups[i];s.addGroup(r.name,r.dynamic,r.maxAabbSize,r.id,r.layers)}}e.i18nAssets&&(this.i18n.assets=e.i18nAssets),this._loadLibraries(e.libraries,t)}_loadLibraries(e,t){const s=e.length;let i=s;const n=/^http(s)?:\/\//;if(s){const r=(a,o)=>{i--,a?t(a):i===0&&(this.onLibrariesLoaded(),t(null))};for(let a=0;a<s;++a){let o=e[a];!n.test(o.toLowerCase())&&this._scriptPrefix&&(o=re.join(this._scriptPrefix,o)),this.loader.load(o,"script",r)}}else this.onLibrariesLoaded(),t(null)}_parseScenes(e){if(e)for(let t=0;t<e.length;t++)this.scenes.add(e[t].name,e[t].url)}_parseAssets(e){const t=[],s={},i={};if(zt.legacy){if(this.enableBundles)for(const n in e)e[n].type==="bundle"&&(i[n]=!0,t.push(e[n]));for(const n in e)i[n]||t.push(e[n])}else{for(let n=0;n<this.scriptsOrder.length;n++){const r=this.scriptsOrder[n];e[r]&&(s[r]=!0,t.push(e[r]))}if(this.enableBundles)for(const n in e)e[n].type==="bundle"&&(i[n]=!0,t.push(e[n]));for(const n in e)s[n]||i[n]||t.push(e[n])}for(let n=0;n<t.length;n++){const r=t[n],a=new ne(r.name,r.type,r.file,r.data);if(a.id=parseInt(r.id,10),a.preload=r.preload?r.preload:!1,a.loaded=r.type==="script"&&r.data&&r.data.loadingType>0,a.tags.add(r.tags),r.i18n)for(const o in r.i18n)a.addLocalizedAssetId(o,r.i18n[o]);this.assets.add(a)}}_getScriptReferences(e){let t=[];e.settings.priority_scripts&&(t=e.settings.priority_scripts);const s=[],i={};for(let r=0;r<t.length;r++)s.push(t[r]),i[t[r]]=!0;const n=e.entities;for(const r in n){if(!n[r].components.script)continue;const a=n[r].components.script.scripts;for(let o=0;o<a.length;o++)i[a[o].url]||(s.push(a[o].url),i[a[o].url]=!0)}return s}start(){this.frame=0,this.fire("start",{timestamp:fi(),target:this}),this._librariesLoaded||this.onLibrariesLoaded(),this.systems.fire("initialize",this.root),this.fire("initialize"),this.systems.fire("postInitialize",this.root),this.systems.fire("postPostInitialize",this.root),this.fire("postinitialize"),this.tick()}inputUpdate(e){this.controller&&this.controller.update(e),this.mouse&&this.mouse.update(),this.keyboard&&this.keyboard.update(),this.gamepads&&this.gamepads.update()}update(e){this.frame++,this.graphicsDevice.updateClientRect(),zt.legacy&&this.systems.fire("fixedUpdate",1/60),this.systems.fire(this._inTools?"toolsUpdate":"update",e),this.systems.fire("animationUpdate",e),this.systems.fire("postUpdate",e),this.fire("update",e),this.inputUpdate(e)}render(){this.fire("prerender"),this.root.syncHierarchy(),this._batcher&&this._batcher.updateAll(),this.renderComposition(this.scene.layers),this.fire("postrender")}renderComposition(e){this.renderer.buildFrameGraph(this.frameGraph,e),this.frameGraph.render()}_fillFrameStatsBasic(e,t,s){const i=this.stats.frame;i.dt=t,i.ms=s,e>i._timeToCountFrames?(i.fps=i._fpsAccum,i._fpsAccum=0,i._timeToCountFrames=e+1e3):i._fpsAccum++,this.stats.drawCalls.total=this.graphicsDevice._drawCallsPerFrame,this.graphicsDevice._drawCallsPerFrame=0}_fillFrameStats(){let e=this.stats.frame;e.cameras=this.renderer._camerasRendered,e.materials=this.renderer._materialSwitches,e.shaders=this.graphicsDevice._shaderSwitchesPerFrame,e.shadowMapUpdates=this.renderer._shadowMapUpdates,e.shadowMapTime=this.renderer._shadowMapTime,e.depthMapTime=this.renderer._depthMapTime,e.forwardTime=this.renderer._forwardTime;const t=this.graphicsDevice._primsPerFrame;e.triangles=t[ts]/3+Math.max(t[ra]-2,0)+Math.max(t[ji]-2,0),e.cullTime=this.renderer._cullTime,e.sortTime=this.renderer._sortTime,e.skinTime=this.renderer._skinTime,e.morphTime=this.renderer._morphTime,e.lightClusters=this.renderer._lightClusters,e.lightClustersTime=this.renderer._lightClustersTime,e.otherPrimitives=0;for(let s=0;s<t.length;s++)s<ts&&(e.otherPrimitives+=t[s]),t[s]=0;this.renderer._camerasRendered=0,this.renderer._materialSwitches=0,this.renderer._shadowMapUpdates=0,this.graphicsDevice._shaderSwitchesPerFrame=0,this.renderer._cullTime=0,this.renderer._layerCompositionUpdateTime=0,this.renderer._lightClustersTime=0,this.renderer._sortTime=0,this.renderer._skinTime=0,this.renderer._morphTime=0,this.renderer._shadowMapTime=0,this.renderer._depthMapTime=0,this.renderer._forwardTime=0,e=this.stats.drawCalls,e.forward=this.renderer._forwardDrawCalls,e.culled=this.renderer._numDrawCallsCulled,e.depth=0,e.shadow=this.renderer._shadowDrawCalls,e.skinned=this.renderer._skinDrawCalls,e.immediate=0,e.instanced=0,e.removedByInstancing=0,e.misc=e.total-(e.forward+e.shadow),this.renderer._depthDrawCalls=0,this.renderer._shadowDrawCalls=0,this.renderer._forwardDrawCalls=0,this.renderer._numDrawCallsCulled=0,this.renderer._skinDrawCalls=0,this.renderer._immediateRendered=0,this.renderer._instancedDrawCalls=0,this.stats.misc.renderTargetCreationTime=this.graphicsDevice.renderTargetCreationTime,e=this.stats.particles,e.updatesPerFrame=e._updatesPerFrame,e.frameTime=e._frameTime,e._updatesPerFrame=0,e._frameTime=0}setCanvasFillMode(e,t,s){this._fillMode=e,this.resizeCanvas(t,s)}setCanvasResolution(e,t,s){this._resolutionMode=e,e===Tc&&t===void 0&&(t=this.graphicsDevice.canvas.clientWidth,s=this.graphicsDevice.canvas.clientHeight),this.graphicsDevice.resizeCanvas(t,s)}isHidden(){return document[this._hiddenAttr]}onVisibilityChange(){this.isHidden()?this._soundManager&&this._soundManager.suspend():this._soundManager&&this._soundManager.resume()}resizeCanvas(e,t){if(!this._allowResize||this.xr&&this.xr.session)return;const s=window.innerWidth,i=window.innerHeight;if(this._fillMode===df){const n=this.graphicsDevice.canvas.width/this.graphicsDevice.canvas.height,r=s/i;n>r?(e=s,t=e/n):(t=i,e=t*n)}else this._fillMode===Lm&&(e=s,t=i);return this.graphicsDevice.canvas.style.width=e+"px",this.graphicsDevice.canvas.style.height=t+"px",this.updateCanvasSize(),{width:e,height:t}}updateCanvasSize(){var e;if(!(!this._allowResize||(e=this.xr)!=null&&e.active)&&this._resolutionMode===Tc){const t=this.graphicsDevice.canvas;this.graphicsDevice.resizeCanvas(t.clientWidth,t.clientHeight)}}onLibrariesLoaded(){this._librariesLoaded=!0,this.systems.rigidbody&&this.systems.rigidbody.onLibraryLoaded()}applySceneSettings(e){let t;if(this.systems.rigidbody&&typeof Ammo<"u"){const s=e.physics.gravity;this.systems.rigidbody.gravity.set(s[0],s[1],s[2])}this.scene.applySettings(e),e.render.hasOwnProperty("skybox")&&(e.render.skybox?(t=this.assets.get(e.render.skybox),t?this.setSkybox(t):this.assets.once("add:"+e.render.skybox,this.setSkybox,this)):this.setSkybox(null))}setAreaLightLuts(e,t){e&&t&&Ui.set(this.graphicsDevice,e,t)}setSkybox(e){if(e!==this._skyboxAsset){const t=()=>{this.setSkybox(null)},s=()=>{this.scene.setSkybox(this._skyboxAsset?this._skyboxAsset.resources:null)};this._skyboxAsset&&(this.assets.off("load:"+this._skyboxAsset.id,s,this),this.assets.off("remove:"+this._skyboxAsset.id,t,this),this._skyboxAsset.off("change",s,this)),this._skyboxAsset=e,this._skyboxAsset&&(this.assets.on("load:"+this._skyboxAsset.id,s,this),this.assets.once("remove:"+this._skyboxAsset.id,t,this),this._skyboxAsset.on("change",s,this),this.scene.skyboxMip===0&&!this._skyboxAsset.loadFaces&&(this._skyboxAsset.loadFaces=!0),this.assets.load(this._skyboxAsset)),s()}}_firstBake(){var e;(e=this.lightmapper)==null||e.bake(null,this.scene.lightmapMode)}_firstBatch(){var e;(e=this.batcher)==null||e.generate()}_processTimestamp(e){return e}drawLine(e,t,s,i,n){this.scene.drawLine(e,t,s,i,n)}drawLines(e,t,s=!0,i=this.scene.defaultDrawLayer){this.scene.drawLines(e,t,s,i)}drawLineArrays(e,t,s=!0,i=this.scene.defaultDrawLayer){this.scene.drawLineArrays(e,t,s,i)}drawWireSphere(e,t,s=G.WHITE,i=20,n=!0,r=this.scene.defaultDrawLayer){this.scene.immediate.drawWireSphere(e,t,s,i,n,r)}drawWireAlignedBox(e,t,s=G.WHITE,i=!0,n=this.scene.defaultDrawLayer){this.scene.immediate.drawWireAlignedBox(e,t,s,i,n)}drawMeshInstance(e,t=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(null,null,null,e,t)}drawMesh(e,t,s,i=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(t,s,e,null,i)}drawQuad(e,t,s=this.scene.defaultDrawLayer){this.scene.immediate.drawMesh(t,e,this.scene.immediate.getQuadMesh(),null,s)}drawTexture(e,t,s,i,n,r,a=this.scene.defaultDrawLayer){const o=new H;o.setTRS(new b(e,t,0),ee.IDENTITY,new b(s,i,0)),r||(r=new gi,r.setParameter("colorMap",n),r.shader=this.scene.immediate.getTextureShader(),r.update()),this.drawQuad(o,r,a)}drawDepthTexture(e,t,s,i,n=this.scene.defaultDrawLayer){const r=new gi;r.shader=this.scene.immediate.getDepthTextureShader(),r.update(),this.drawTexture(e,t,s,i,null,r,n)}destroy(){var e;if(this._inFrameUpdate){this._destroyRequested=!0;return}const t=this.graphicsDevice.canvas.id;this.off("librariesloaded"),typeof document<"u"&&(document.removeEventListener("visibilitychange",this._visibilityChangeHandler,!1),document.removeEventListener("mozvisibilitychange",this._visibilityChangeHandler,!1),document.removeEventListener("msvisibilitychange",this._visibilityChangeHandler,!1),document.removeEventListener("webkitvisibilitychange",this._visibilityChangeHandler,!1)),this._visibilityChangeHandler=null,this.root.destroy(),this.root=null,this.mouse&&(this.mouse.off(),this.mouse.detach(),this.mouse=null),this.keyboard&&(this.keyboard.off(),this.keyboard.detach(),this.keyboard=null),this.touch&&(this.touch.off(),this.touch.detach(),this.touch=null),this.elementInput&&(this.elementInput.detach(),this.elementInput=null),this.controller&&(this.controller=null),this.systems.destroy(),this.scene.layers&&this.scene.layers.destroy();const s=this.assets.list();for(let i=0;i<s.length;i++)s[i].unload(),s[i].off();this.assets.off(),this.bundles.destroy(),this.bundles=null,this.i18n.destroy(),this.i18n=null;for(const i in this.loader.getHandler("script")._cache){const n=this.loader.getHandler("script")._cache[i],r=n.parentNode;r&&r.removeChild(n)}this.loader.getHandler("script")._cache={},this.loader.destroy(),this.loader=null,this.scene.destroy(),this.scene=null,this.systems=null,this.context=null,this.scripts.destroy(),this.scripts=null,this.scenes.destroy(),this.scenes=null,(e=this.lightmapper)==null||e.destroy(),this.lightmapper=null,this._batcher&&(this._batcher.destroy(),this._batcher=null),this._entityIndex={},this.defaultLayerDepth.onPreRenderOpaque=null,this.defaultLayerDepth.onPostRenderOpaque=null,this.defaultLayerDepth.onDisable=null,this.defaultLayerDepth.onEnable=null,this.defaultLayerDepth=null,this.defaultLayerWorld=null,this==null||this.xr.end(),this==null||this.xr.destroy(),this.renderer.destroy(),this.renderer=null,this.graphicsDevice.destroy(),this.graphicsDevice=null,this.tick=null,this.off(),this._soundManager&&(this._soundManager.destroy(),this._soundManager=null),zt.app=null,Wn._applications[t]=null,ui()===this&&Cc(null)}getEntityFromIndex(e){return this._entityIndex[e]}_registerSceneImmediate(e){this.on("postrender",e.immediate.onPostRender,e.immediate)}}Wn._applications={};const Th={},VT=function(e){const t=e;let s;return function(i,n){var r;if(!t.graphicsDevice)return;Cc(t),s&&(window.cancelAnimationFrame(s),s=null);const a=t._processTimestamp(i)||fi(),o=a-(t._time||a);let h=o/1e3;if(h=k.clamp(h,0,t.maxDeltaTime),h*=t.timeScale,t._time=a,(r=t.xr)!=null&&r.session?s=t.xr.session.requestAnimationFrame(t.tick):s=st.browser?window.requestAnimationFrame(t.tick):null,t.graphicsDevice.contextLost)return;t._fillFrameStatsBasic(a,h,o),t._inFrameUpdate=!0,t.fire("frameupdate",o);let c=!0;if(n){var d;c=(d=t.xr)==null?void 0:d.update(n),t.graphicsDevice.defaultFramebuffer=n.session.renderState.baseLayer.framebuffer}else t.graphicsDevice.defaultFramebuffer=null;c&&(t.update(h),t.fire("framerender"),(t.autoRender||t.renderNextFrame)&&(t.updateCanvasSize(),t.render(),t.renderNextFrame=!1),Th.timestamp=fi(),Th.target=t,t.fire("frameend",Th)),t._inFrameUpdate=!1,t._destroyRequested&&t.destroy()}};class GT{constructor(){this.elementInput=void 0,this.keyboard=void 0,this.mouse=void 0,this.touch=void 0,this.gamepads=void 0,this.scriptPrefix=void 0,this.assetPrefix=void 0,this.scriptsOrder=void 0,this.soundManager=void 0,this.graphicsDevice=void 0,this.lightmapper=void 0,this.batchManager=void 0,this.xr=void 0,this.componentSystems=[],this.resourceHandlers=[]}}const fr=new dl;class zm{constructor(e,t){this.scene=e,this.light=t,this.store(),t.numCascades=1,t.type!==ie&&(t._node.getWorldTransform(),t.getBoundingSphere(fr),this.lightBounds=new _e,this.lightBounds.center.copy(fr.center),this.lightBounds.halfExtents.set(fr.radius,fr.radius,fr.radius))}store(){this.mask=this.light.mask,this.shadowUpdateMode=this.light.shadowUpdateMode,this.enabled=this.light.enabled,this.intensity=this.light.intensity,this.rotation=this.light._node.getLocalRotation().clone(),this.numCascades=this.light.numCascades}restore(){const e=this.light;e.mask=this.mask,e.shadowUpdateMode=this.shadowUpdateMode,e.enabled=this.enabled,e.intensity=this.intensity,e._node.setLocalRotation(this.rotation),e.numCascades=this.numCascades}startBake(){this.light.enabled=!0,this.light._destroyShadowMap(),this.light.beginFrame()}endBake(e){const t=this.light;t.enabled=!1,t.shadowMap&&(t.shadowMap.cached&&e.add(t,t.shadowMap),t.shadowMap=null)}}const Xa=new V;class WT extends zm{get numVirtualLights(){return this.light.type===ie?this.light.bakeNumSamples:1}prepareVirtualLight(e,t){const s=this.light;if(s._node.setLocalRotation(this.rotation),e>0){const r=s.bakeArea;ha.circlePointDeterministic(Xa,e,t),Xa.mulScalar(r*.5),s._node.rotateLocal(Xa.x,0,Xa.y)}s._node.getWorldTransform();const i=this.scene.gammaCorrection?2.2:1,n=Math.pow(this.intensity,i);s.intensity=Math.pow(n/t,1/i)}}const xf=new b;class vf extends zm{constructor(e){const t=new be("AmbientLight");t.addComponent("light",{type:"directional",affectDynamic:!0,affectLightmapped:!1,bake:!0,bakeNumSamples:e.ambientBakeNumSamples,castShadows:!0,normalOffsetBias:.05,shadowBias:.2,shadowDistance:1,shadowResolution:2048,shadowType:Ze,color:G.WHITE,intensity:1,bakeDir:!1}),super(e,t.light.light)}get numVirtualLights(){return this.light.bakeNumSamples}prepareVirtualLight(e,t){ha.spherePointDeterministic(xf,e,t,0,this.scene.ambientBakeSpherePart),this.light._node.lookAt(xf.mulScalar(-1)),this.light._node.rotateLocal(90,0,0);const s=this.scene.gammaCorrection?2.2:1,i=2*Math.PI*this.scene.ambientBakeSpherePart,n=Math.pow(i,s);this.light.intensity=Math.pow(n/t,1/s)}}class qa{constructor(e,t=null){this.node=e,this.component=e.render||e.model,t=t||this.component.meshInstances,this.store(),this.meshInstances=t,this.bounds=null,this.renderTargets=[]}store(){this.castShadows=this.component.castShadows}restore(){this.component.castShadows=this.castShadows}}const Sf=15;class HT{constructor(e){this.device=e,this.shaderDilate=Gt(e,B.fullscreenQuadVS,Ko.dilatePS,"lmDilate"),this.constantTexSource=e.scope.resolve("source"),this.constantPixelOffset=e.scope.resolve("pixelOffset"),this.pixelOffset=new Float32Array(2),this.shaderDenoise=null,this.sigmas=null,this.constantSigmas=null,this.kernel=null}setSourceTexture(e){this.constantTexSource.setValue(e)}prepare(e,t){this.pixelOffset[0]=1/e,this.pixelOffset[1]=1/t,this.constantPixelOffset.setValue(this.pixelOffset)}prepareDenoise(e,t){this.shaderDenoise||(this.shaderDenoise=Gt(this.device,B.fullscreenQuadVS,Ko.bilateralDeNoisePS,"lmBilateralDeNoise"),this.sigmas=new Float32Array(2),this.constantSigmas=this.device.scope.resolve("sigmas"),this.constantKernel=this.device.scope.resolve("kernel[0]"),this.bZnorm=this.device.scope.resolve("bZnorm")),this.sigmas[0]=e,this.sigmas[1]=t,this.constantSigmas.setValue(this.sigmas),this.evaluateDenoiseUniforms(e,t)}evaluateDenoiseUniforms(e,t){function s(a,o){return .39894*Math.exp(-.5*a*a/(o*o))/o}this.kernel=this.kernel||new Float32Array(Sf);const i=this.kernel,n=Math.floor((Sf-1)/2);for(let a=0;a<=n;++a){const o=s(a,e);i[n+a]=o,i[n-a]=o}this.constantKernel.setValue(this.kernel);const r=1/s(0,t);this.bZnorm.setValue(r)}}const XT=2048,qT=0,jT=1,ja=new b;class YT{constructor(e,t,s,i,n){this.device=e,this.root=t,this.scene=s,this.renderer=i,this.assets=n,this.shadowMapCache=i._shadowRenderer.shadowMapCache,this._tempSet=new Set,this._initCalled=!1,this.passMaterials=[],this.ambientAOMaterial=null,this.fog="",this.ambientLight=new G,this.renderTargets=new Map,this.stats={renderPasses:0,lightmapCount:0,totalRenderTime:0,forwardTime:0,fboTime:0,shadowMapTime:0,compileTime:0,shadersLinked:0}}destroy(){Ps.decRef(this.blackTex),this.blackTex=null,Ps.destroy(),this.device=null,this.root=null,this.scene=null,this.renderer=null,this.assets=null}initBake(e){if(!this._initCalled){this._initCalled=!0,this.lightmapFilters=new HT(e),this.constantBakeDir=e.scope.resolve("bakeDir"),this.materials=[],this.blackTex=new ae(this.device,{width:4,height:4,format:he,type:pi,name:"lightmapBlack"}),Ps.incRef(this.blackTex);const t=new la;t.clearColor.set(0,0,0,0),t.clearColorBuffer=!0,t.clearDepthBuffer=!1,t.clearStencilBuffer=!1,t.frustumCulling=!1,t.projection=Un,t.aspectRatio=1,t.node=new Qe,this.camera=t}if(this.scene.clusteredLightingEnabled){const t=new Em(e.supportsAreaLights,e.maxTextureSize,()=>{});this.lightingParams=t;const s=this.scene.lighting;t.shadowsEnabled=s.shadowsEnabled,t.shadowAtlasResolution=s.shadowAtlasResolution,t.cookiesEnabled=s.cookiesEnabled,t.cookieAtlasResolution=s.cookieAtlasResolution,t.areaLightsEnabled=s.areaLightsEnabled,t.cells=new b(3,3,3),t.maxLightsPerCell=4,this.worldClusters=new vc(e),this.worldClusters.name="ClusterLightmapper"}}finishBake(e){this.materials=[];function t(s){Ps.decRef(s.colorBuffer),s.destroy()}this.renderTargets.forEach(s=>{t(s)}),this.renderTargets.clear(),e.forEach(s=>{s.renderTargets.forEach(i=>{t(i)}),s.renderTargets.length=0}),this.ambientAOMaterial=null,this.worldClusters&&(this.worldClusters.destroy(),this.worldClusters=null)}createMaterialForPass(e,t,s,i){const n=new is;if(n.name=`lmMaterial-pass:${s}-ambient:${i}`,n.chunks.APIVersion=ry,n.chunks.transformVS=`#define UV1LAYOUT
`+B.transformVS,s===qT){let r=Ko.bakeLmEndPS;i?r=`
                    dDiffuseLight = ((dDiffuseLight - 0.5) * max(${t.ambientBakeOcclusionContrast.toFixed(1)} + 1.0, 0.0)) + 0.5;
                    dDiffuseLight += vec3(${t.ambientBakeOcclusionBrightness.toFixed(1)});
                    dDiffuseLight = saturate(dDiffuseLight);
                    dDiffuseLight *= dAmbientLight;
                `+r:(n.ambient=new G(0,0,0),n.ambientTint=!0),n.chunks.endPS=r,n.lightMap=this.blackTex}else n.chunks.basePS=B.basePS+`
uniform sampler2D texture_dirLightMap;
uniform float bakeDir;
`,n.chunks.endPS=Ko.bakeDirLmEndPS;return n.chunks.outputAlphaPS=`
`,n.chunks.outputAlphaOpaquePS=`
`,n.chunks.outputAlphaPremulPS=`
`,n.cull=_t,n.forceUv1=!0,n.update(),n}createMaterials(e,t,s){for(let i=0;i<s;i++)this.passMaterials[i]||(this.passMaterials[i]=this.createMaterialForPass(e,t,i,!1));this.ambientAOMaterial||(this.ambientAOMaterial=this.createMaterialForPass(e,t,0,!0),this.ambientAOMaterial.onUpdateShader=function(i){return i.lightMapWithoutAmbient=!0,i.separateAmbient=!0,i})}createTexture(e,t,s){return new ae(this.device,{width:e,height:e,format:he,mipmaps:!1,type:t,minFilter:ve,magFilter:ve,addressU:se,addressV:se,name:s})}collectModels(e,t,s){var i,n,r;if(!e.enabled)return;let a;if((i=e.model)!=null&&i.model&&(n=e.model)!=null&&n.enabled&&(s&&s.push(new qa(e)),e.model.lightmapped&&t&&(a=e.model.model.meshInstances)),(r=e.render)!=null&&r.enabled&&(s&&s.push(new qa(e)),e.render.lightmapped&&t&&(a=e.render.meshInstances)),a){let o=!0;for(let h=0;h<a.length;h++)if(!a[h].mesh.vertexBuffer.format.hasUv1){o=!1;break}if(o){const h=[];for(let c=0;c<a.length;c++){const d=a[c].mesh;this._tempSet.has(d)?t.push(new qa(e,[a[c]])):h.push(a[c]),this._tempSet.add(d)}this._tempSet.clear(),h.length>0&&t.push(new qa(e,h))}}for(let o=0;o<e._children.length;o++)this.collectModels(e._children[o],t,s)}prepareShadowCasters(e){const t=[];for(let s=0;s<e.length;s++){const i=e[s].component;if(i.castShadows=i.castShadowsLightmap,i.castShadowsLightmap){const n=e[s].meshInstances;for(let r=0;r<n.length;r++)n[r].visibleThisFrame=!0,t.push(n[r])}}return t}updateTransforms(e){for(let t=0;t<e.length;t++){const s=e[t].meshInstances;for(let i=0;i<s.length;i++)s[i].node.getWorldTransform()}}calculateLightmapSize(e){let t;const s=this.scene.lightmapSizeMultiplier||16,i=ja;let n,r;e.model?(r=e.model.lightmapSizeMultiplier,e.model.asset?(t=this.assets.get(e.model.asset).data,t.area&&(n=t.area)):e.model._area&&(t=e.model,t._area&&(n=t._area))):e.render&&(r=e.render.lightmapSizeMultiplier,e.render.type!=="asset"&&e.render._area&&(t=e.render,t._area&&(n=t._area)));const a={x:1,y:1,z:1,uv:1};n&&(a.x=n.x,a.y=n.y,a.z=n.z,a.uv=n.uv);const o=r||1;a.x*=o,a.y*=o,a.z*=o;const h=e.render||e.model,c=this.computeNodeBounds(h.meshInstances);i.copy(c.halfExtents);let d=a.x*i.y*i.z+a.y*i.x*i.z+a.z*i.x*i.y;return d/=a.uv,d=Math.sqrt(d),Math.min(k.nextPowerOfTwo(d*s),this.scene.lightmapMaxResolution||XT)}setLightmapping(e,t,s,i){for(let n=0;n<e.length;n++){const r=e[n],a=r.meshInstances;for(let o=0;o<a.length;o++){const h=a[o];if(h.setLightmapped(t),t){i&&(h._shaderDefs|=i),h.mask=Ds;for(let c=0;c<s;c++){const d=r.renderTargets[c].colorBuffer;d.minFilter=$e,d.magFilter=$e,h.setRealtimeLightmap(we.lightmapParamNames[c],d)}}}}}bake(e,t=lo){const s=this.device,i=fi();this.scene._updateSky(s),this.stats.renderPasses=0,this.stats.shadowMapTime=0,this.stats.forwardTime=0;const n=s._shaderStats.linked,r=s._renderTargetCreationTime,a=s._shaderStats.compileTime,o=[],h=[];if(e){for(let d=0;d<e.length;d++)this.collectModels(e[d],o,null);this.collectModels(this.root,null,h)}else this.collectModels(this.root,o,h);if(o.length>0){const d=t===lo?2:1;this.setLightmapping(o,!1,d),this.initBake(s),this.bakeInternal(d,o,h);let u=No;t===lo&&(u|=fd),this.scene.ambientBake&&(u|=pd),this.setLightmapping(o,!0,d,u),this.finishBake(o)}const c=fi();this.stats.totalRenderTime=c-i,this.stats.shadersLinked=s._shaderStats.linked-n,this.stats.compileTime=s._shaderStats.compileTime-a,this.stats.fboTime=s._renderTargetCreationTime-r,this.stats.lightmapCount=o.length}allocateTextures(e,t){for(let s=0;s<e.length;s++){const i=e[s],n=this.calculateLightmapSize(i.node);for(let r=0;r<t;r++){const a=this.createTexture(n,Nt,"lightmapper_lightmap_"+s);Ps.incRef(a),i.renderTargets[r]=new ht({colorBuffer:a,depth:!1})}if(!this.renderTargets.has(n)){const r=this.createTexture(n,Nt,"lightmapper_temp_lightmap_"+n);Ps.incRef(r),this.renderTargets.set(n,new ht({colorBuffer:r,depth:!1}))}}}prepareLightsToBake(e,t,s){if(this.scene.ambientBake){const n=new vf(this.scene);s.push(n)}const i=e._lights;for(let n=0;n<i.length;n++){const r=i[n],a=new WT(this.scene,r);t.push(a),r.enabled&&r.mask&Fs&&(r.isStatic=!1,r.mask=4294967295,r.shadowUpdateMode=r.type===ie?Xo:Qr,s.push(a))}s.sort()}restoreLights(e){for(let t=0;t<e.length;t++)e[t].restore()}setupScene(){this.revertStatic=!1,this.scene._needsStaticPrepare&&(this.scene._needsStaticPrepare=!1,this.revertStatic=!0),this.fog=this.scene.fog,this.ambientLight.copy(this.scene.ambientLight),this.scene.fog=ld,this.scene.ambientBake||this.scene.ambientLight.set(0,0,0),this.renderer.setSceneConstants()}restoreScene(){this.scene.fog=this.fog,this.scene.ambientLight.copy(this.ambientLight),this.revertStatic&&(this.scene._needsStaticPrepare=!0)}computeNodeBounds(e){const t=new _e;if(e.length>0){t.copy(e[0].aabb);for(let s=1;s<e.length;s++)t.add(e[s].aabb)}return t}computeNodesBounds(e){for(let t=0;t<e.length;t++){const s=e[t].meshInstances;e[t].bounds=this.computeNodeBounds(s)}}computeBounds(e){const t=new _e;for(let s=0;s<e.length;s++){t.copy(e[0].aabb);for(let i=1;i<e.length;i++)t.add(e[i].aabb)}return t}backupMaterials(e){for(let t=0;t<e.length;t++)this.materials[t]=e[t].material}restoreMaterials(e){for(let t=0;t<e.length;t++)e[t].material=this.materials[t]}lightCameraPrepare(e,t){const s=t.light;let i;return s.type===pe&&(i=s.getRenderData(null,0).shadowCamera,i._node.setPosition(s._node.getPosition()),i._node.setRotation(s._node.getRotation()),i._node.rotateLocal(-90,0,0),i.projection=os,i.nearClip=s.attenuationEnd/1e3,i.farClip=s.attenuationEnd,i.aspectRatio=1,i.fov=s._outerConeAngle*2,this.renderer.updateCameraFrustum(i)),i}lightCameraPrepareAndCull(e,t,s,i){const n=e.light;let r=!0;if(n.type===ie){ja.copy(i.center),ja.y+=i.halfExtents.y,this.camera.node.setPosition(ja),this.camera.node.setEulerAngles(-90,0,0),this.camera.nearClip=0,this.camera.farClip=i.halfExtents.y*2;const a=Math.max(i.halfExtents.x,i.halfExtents.z);this.camera.orthoHeight=a}else e.lightBounds.intersects(t.bounds)||(r=!1);if(n.type===pe){let a=!1;const o=t.meshInstances;for(let h=0;h<o.length;h++)if(o[h]._isVisible(s)){a=!0;break}a||(r=!1)}return r}setupLightArray(e,t){e[ie].length=0,e[ue].length=0,e[pe].length=0,e[t.type][0]=t,t.visibleThisFrame=!0}renderShadowMap(e,t,s,i){const n=i.light;return!e&&n.castShadows&&(!n.shadowMap&&!this.scene.clusteredLightingEnabled&&(n.shadowMap=this.shadowMapCache.get(this.device,n)),n.type===ie?this.renderer._shadowRenderer.cullDirectional(n,t,this.camera):this.renderer._shadowRenderer.cullLocal(n,t),this.renderer.renderShadows(s[n.type],this.camera)),!0}postprocessTextures(e,t,s){const n=this.lightmapFilters.shaderDilate,r=this.scene.lightmapFilterEnabled;r&&this.lightmapFilters.prepareDenoise(this.scene.lightmapFilterRange,this.scene.lightmapFilterSmoothness);for(let a=0;a<t.length;a++){const o=t[a];for(let h=0;h<s;h++){const c=o.renderTargets[h],d=c.colorBuffer,u=this.renderTargets.get(d.width),f=u.colorBuffer;this.lightmapFilters.prepare(d.width,d.height);for(let p=0;p<1;p++)this.lightmapFilters.setSourceTexture(d),ss(e,u,r&&h===0&&p===0?this.lightmapFilters.shaderDenoise:n),this.lightmapFilters.setSourceTexture(f),ss(e,c,n)}}}bakeInternal(e,t,s){const i=this.scene,n=this.device,r=i.clusteredLightingEnabled;this.createMaterials(n,i,e),this.setupScene(),i.layers._update(),this.computeNodesBounds(t),this.allocateTextures(t,e);const a=[],o=[];this.prepareLightsToBake(i.layers,a,o),this.updateTransforms(s);const h=this.prepareShadowCasters(s);this.renderer.updateCpuSkinMatrices(h),this.renderer.gpuUpdate(h);const c=this.computeBounds(h);let d,u,f,p;for(d=0;d<t.length;d++)for(f=t[d].meshInstances,u=0;u<f.length;u++)p=f[u],p.setLightmapped(!1),p.mask=Fs,p.setRealtimeLightmap(we.lightmapParamNames[0],p.material.lightMap?p.material.lightMap:this.blackTex),p.setRealtimeLightmap(we.lightmapParamNames[1],this.blackTex);for(u=0;u<o.length;u++)o[u].light.enabled=!1;const _=[[],[],[]];let m,g,w=!1;for(d=0;d<o.length;d++){const v=o[d],y=v instanceof vf;let T=v.numVirtualLights;e>1&&T>1&&v.light.bakeDir&&(T=1);for(let C=0;C<T;C++){T>1&&v.prepareVirtualLight(C,T),v.startBake();let S=!1;const A=this.lightCameraPrepare(n,v);for(g=0;g<t.length;g++){const x=t[g];if(f=x.meshInstances,!!this.lightCameraPrepareAndCull(v,x,A,c)){if(this.setupLightArray(_,v.light),r&&this.renderer.lightTextureAtlas.update(_[pe],_[ue],this.lightingParams),S=this.renderShadowMap(S,h,_,v),r){const I=_[pe].concat(_[ue]);this.worldClusters.update(I,this.scene.gammaCorrection,this.lightingParams)}for(this.backupMaterials(f),m=0;m<e&&!(m>0&&C>0||y&&m>0);m++){const I=x.renderTargets[m],E=x.renderTargets[m].colorBuffer.width,O=this.renderTargets.get(E),D=O.colorBuffer;m===0?w=i.updateShaders:w&&(i.updateShaders=!0);let U=this.passMaterials[m];for(y&&C+1===T&&m===0&&(U=this.ambientAOMaterial),u=0;u<f.length;u++)f[u].material=U;for(this.renderer.updateShaders(f),this.renderer.setCamera(this.camera,O,!0),m===jT&&this.constantBakeDir.setValue(v.light.bakeDir?1:0),r&&this.worldClusters.activate(this.renderer.lightTextureAtlas),this.renderer._forwardTime=0,this.renderer._shadowMapTime=0,this.renderer.renderForward(this.camera,f,f.length,_,Os),n.updateEnd(),x.renderTargets[m]=O,this.renderTargets.set(E,I),u=0;u<f.length;u++)p=f[u],p.setRealtimeLightmap(we.lightmapParamNames[m],D),p._shaderDefs|=No}this.restoreMaterials(f)}}v.endBake(this.shadowMapCache)}}for(this.postprocessTextures(n,t,e),g=0;g<s.length;g++)s[g].restore();this.restoreLights(a),this.restoreScene(),r||this.shadowMapCache.clear()}}class te extends le{constructor(e,t){super(),this.system=void 0,this.entity=void 0,this.system=e,this.entity=t,this.system.schema&&!this._accessorsBuilt&&this.buildAccessors(this.system.schema),this.on("set",function(s,i,n){this.fire("set_"+s,s,i,n)}),this.on("set_enabled",this.onSetEnabled,this)}static _buildAccessors(e,t){t.forEach(function(s){const i=typeof s=="object"?s.name:s;Object.defineProperty(e,i,{get:function(){return this.data[i]},set:function(n){const r=this.data,a=r[i];r[i]=n,this.fire("set",i,a,n)},configurable:!0})}),e._accessorsBuilt=!0}buildAccessors(e){te._buildAccessors(this,e)}onSetEnabled(e,t,s){t!==s&&this.entity.enabled&&(s?this.onEnable():this.onDisable())}onEnable(){}onDisable(){}onPostStateChange(){}get data(){const e=this.system.store[this.entity.getGuid()];return e?e.data:null}}class Fe extends le{constructor(e){super(),this.app=e,this.store={},this.schema=[]}addComponent(e,t={}){const s=new this.ComponentType(this,e),i=new this.DataType;return this.store[e.getGuid()]={entity:e,data:i},e[this.id]=s,e.c[this.id]=s,this.initializeComponentData(s,t,[]),this.fire("add",e,s),s}removeComponent(e){const t=this.store[e.getGuid()],s=e.c[this.id];this.fire("beforeremove",e,s),delete this.store[e.getGuid()],e[this.id]=void 0,delete e.c[this.id],this.fire("remove",e,t.data)}cloneComponent(e,t){const s=this.store[e.getGuid()];return this.addComponent(t,s.data)}initializeComponentData(e,t={},s){for(let i=0,n=s.length;i<n;i++){const r=s[i];let a,o;typeof r=="object"?(a=r.name,o=r.type):(a=r,o=void 0);let h=t[a];h!==void 0?(o!==void 0&&(h=$T(h,o)),e[a]=h):e[a]=e.data[a]}e.enabled&&e.entity.enabled&&e.onEnable()}getPropertiesOfType(e){const t=[];return(this.schema||[]).forEach(function(i){i&&typeof i=="object"&&i.type===e&&t.push(i)}),t}destroy(){this.off()}}function $T(l,e){if(!l)return l;switch(e){case"rgb":return l instanceof G?l.clone():new G(l[0],l[1],l[2]);case"rgba":return l instanceof G?l.clone():new G(l[0],l[1],l[2],l[3]);case"vec2":return l instanceof V?l.clone():new V(l[0],l[1]);case"vec3":return l instanceof b?l.clone():new b(l[0],l[1],l[2]);case"vec4":return l instanceof K?l.clone():new K(l[0],l[1],l[2],l[3]);case"boolean":case"number":case"string":return l;case"entity":return l;default:throw new Error("Could not convert unhandled type: "+e)}}const Um=0,Ac=1,Mc=2;class KT{constructor(){this._left=1/0,this._right=-1/0,this._len=0,this._recip=0,this._p0=0,this._p1=0,this._t=0,this._hermite={valid:!1,p0:0,m0:0,p1:0,m1:0}}update(e,t){if(e<this._left||e>=this._right){const s=t.length;if(!s)this._left=-1/0,this._right=1/0,this._len=0,this._recip=0,this._p0=this._p1=0;else if(e<t[0])this._left=-1/0,this._right=t[0],this._len=0,this._recip=0,this._p0=this._p1=0;else if(e>=t[s-1])this._left=t[s-1],this._right=1/0,this._len=0,this._recip=0,this._p0=this._p1=s-1;else{const i=this._findKey(e,t);this._left=t[i],this._right=t[i+1],this._len=this._right-this._left;const n=1/this._len;this._recip=isFinite(n)?n:0,this._p0=i,this._p1=i+1}}this._t=this._recip===0?0:(e-this._left)*this._recip,this._hermite.valid=!1}_findKey(e,t){let s=0;for(;e>=t[s+1];)s++;return s}eval(e,t,s){const i=s._data,n=s._components,r=this._p0*n;if(t===Um)for(let a=0;a<n;++a)e[a]=i[r+a];else{const a=this._t,o=this._p1*n;switch(t){case Ac:for(let h=0;h<n;++h)e[h]=k.lerp(i[r+h],i[o+h],a);break;case Mc:{const h=this._hermite;if(!h.valid){const p=a*a,_=a+a,m=1-a,g=m*m;h.valid=!0,h.p0=(1+_)*g,h.m0=a*g,h.p1=p*(3-_),h.m1=p*(a-1)}const c=(this._p0*3+1)*n,d=(this._p0*3+2)*n,u=(this._p1*3+1)*n,f=(this._p1*3+0)*n;for(let p=0;p<n;++p)e[p]=h.p0*i[c+p]+h.m0*i[d+p]*this._len+h.p1*i[u+p]+h.m1*i[f+p]*this._len;break}}}}}class ZT{constructor(e){this._name=e.name+"Snapshot",this._time=-1,this._cache=[],this._results=[];for(let i=0;i<e._inputs.length;++i)this._cache[i]=new KT;const t=e._curves,s=e._outputs;for(let i=0;i<t.length;++i){const n=t[i],r=s[n._output],a=[];for(let o=0;o<r._components;++o)a[o]=0;this._results[i]=a}}}class Nm{constructor(e,t,s,i,n,r){this._name=e.name,this._track=e,this._snapshot=new ZT(e),this._playing=i,this._time=t,this._speed=s,this._loop=n,this._blendWeight=1,this._blendOrder=0,this._eventHandler=r,this.alignCursorToCurrentTime()}set name(e){this._name=e}get name(){return this._name}get track(){return this._track}get snapshot(){return this._snapshot}set time(e){this._time=e,this.alignCursorToCurrentTime()}get time(){return this._time}set speed(e){this._speed=e}get speed(){return this._speed}set loop(e){this._loop=e}get loop(){return this._loop}set blendWeight(e){this._blendWeight=e}get blendWeight(){return this._blendWeight}set blendOrder(e){this._blendOrder=e}get blendOrder(){return this._blendOrder}set eventCursor(e){this._eventCursor=e}get eventCursor(){return this._eventCursor}alignCursorToCurrentTime(){for(this._eventCursor=0;this._track.events[this._eventCursor]&&this._track.events[this._eventCursor].time<this.time;)this._eventCursor++}activeEventsForFrame(e,t){e===0&&(this.eventCursor=0);let s;for(t>this.track.duration&&(s=t-this.track.duration,t=this.track.duration);this.track.events[this.eventCursor]&&this.track.events[this.eventCursor].time>=e&&(t===this.track.duration?this.track.events[this.eventCursor].time<=t:this.track.events[this.eventCursor].time<t);){const i=this.track.events[this.eventCursor];this._eventHandler.fire(i.name,$i({track:this.track},i)),this.eventCursor++}Number.isFinite(s)&&this.activeEventsForFrame(0,s)}_update(e){if(this._playing){let t=this._time;const s=this._track.duration,i=this._speed,n=this._loop;this._track.events.length>0&&s>0&&this.activeEventsForFrame(t,t+i*e),t+=i*e,i>=0?t>s&&(n?t=t%s||0:(t=this._track.duration,this.pause())):t<0&&(n?t=s+(t%s||0):(t=0,this.pause())),this._time=t}this._time!==this._snapshot._time&&this._track.eval(this._time,this._snapshot)}play(){this._playing=!0,this._time=0}stop(){this._playing=!1,this._time=0}pause(){this._playing=!1}resume(){this._playing=!0}reset(){this._time=0}}const Vm="NONE",JT="PREV_STATE",QT="NEXT_STATE",eC="PREV_STATE_NEXT_STATE",tC="NEXT_STATE_PREV_STATE",sC="GREATER_THAN",iC="LESS_THAN",nC="GREATER_THAN_EQUAL_TO",rC="LESS_THAN_EQUAL_TO",aC="EQUAL_TO",oC="NOT_EQUAL_TO",bf="INTEGER",wf="FLOAT",Tf="BOOLEAN",uo="TRIGGER",lC="1D",hC="2D_DIRECTIONAL",cC="2D_CARTESIAN",dC="DIRECT",Rn="START",fo="END",Di="ANY",tl=[Rn,fo,Di],Gm="OVERWRITE",uC="ADDITIVE";class ot{static dot(e,t){const s=e.length;let i=0;for(let n=0;n<s;++n)i+=e[n]*t[n];return i}static normalize(e){let t=ot.dot(e,e);if(t>0){t=1/Math.sqrt(t);const s=e.length;for(let i=0;i<s;++i)e[i]*=t}}static set(e,t,s){const i=e.length;if(s==="quaternion"){let n=ot.dot(t,t);n>0&&(n=1/Math.sqrt(n));for(let r=0;r<i;++r)e[r]=t[r]*n}else for(let n=0;n<i;++n)e[n]=t[n]}static blendVec(e,t,s,i){const n=i?1:1-s,r=e.length;for(let a=0;a<r;++a)e[a]=e[a]*n+t[a]*s}static blendQuat(e,t,s,i){const n=e.length,r=i?1:1-s;ot.dot(e,t)<0&&(s=-s);for(let a=0;a<n;++a)e[a]=e[a]*r+t[a]*s;i||ot.normalize(e)}static blend(e,t,s,i,n){i==="quaternion"?ot.blendQuat(e,t,s,n):ot.blendVec(e,t,s,n)}static stableSort(e,t){const s=e.length;for(let i=0;i<s-1;++i)for(let n=i+1;n<s;++n)if(t(e[n],e[i])){const r=e[i];e[i]=e[n],e[n]=r}}}class Pe{constructor(e,t){this._component=e,this.mask=new Int8Array(e.layers.length),this.weights=new Float32Array(e.layers.length),this.totalWeight=0,this.counter=0,this.layerCounter=0,this.valueType=t,this.dirty=!0,this.value=t===Pe.TYPE_QUAT?[0,0,0,1]:[0,0,0],this.baseValue=null,this.setter=null}get _normalizeWeights(){return this._component.normalizeWeights}getWeight(e){return this.dirty&&this.updateWeights(),this._normalizeWeights&&this.totalWeight===0||!this.mask[e]?0:this._normalizeWeights?this.weights[e]/this.totalWeight:k.clamp(this.weights[e],0,1)}_layerBlendType(e){return this._component.layers[e].blendType}setMask(e,t){this.mask[e]=t,this._normalizeWeights&&(this._component.layers[e].blendType===Gm&&(this.mask=this.mask.fill(0,0,e)),this.dirty=!0)}updateWeights(){this.totalWeight=0;for(let e=0;e<this.weights.length;e++)this.weights[e]=this._component.layers[e].weight,this.totalWeight+=this.mask[e]*this.weights[e];this.dirty=!1}updateValue(e,t){if(this.counter===0&&(ot.set(this.value,Pe.IDENTITY_QUAT_ARR,this.valueType),this._normalizeWeights||ot.blend(this.value,this.baseValue,1,this.valueType)),!(!this.mask[e]||this.getWeight(e)===0)){if(this._layerBlendType(e)===uC&&!this._normalizeWeights)if(this.valueType===Pe.TYPE_QUAT){const s=Pe.q1.set(this.value[0],this.value[1],this.value[2],this.value[3]),i=Pe.q2.set(this.baseValue[0],this.baseValue[1],this.baseValue[2],this.baseValue[3]),n=Pe.q3.set(t[0],t[1],t[2],t[3]),r=i.invert().mul(n);r.slerp(ee.IDENTITY,r,this.getWeight(e)),s.mul(r),Pe.quatArr[0]=s.x,Pe.quatArr[1]=s.y,Pe.quatArr[2]=s.z,Pe.quatArr[3]=s.w,ot.set(this.value,Pe.quatArr,this.valueType)}else Pe.vecArr[0]=t[0]-this.baseValue[0],Pe.vecArr[1]=t[1]-this.baseValue[1],Pe.vecArr[2]=t[2]-this.baseValue[2],ot.blend(this.value,Pe.vecArr,this.getWeight(e),this.valueType,!0);else ot.blend(this.value,t,this.getWeight(e),this.valueType);this.setter&&this.setter(this.value)}}unbind(){this.setter&&this.setter(this.baseValue)}}Pe.TYPE_QUAT="quaternion";Pe.TYPE_VEC3="vector3";Pe.q1=new ee;Pe.q2=new ee;Pe.q3=new ee;Pe.quatArr=[0,0,0,1];Pe.vecArr=[0,0,0];Pe.IDENTITY_QUAT_ARR=[0,0,0,1];class Wm{constructor(e){this._binder=e,this._clips=[],this._inputs=[],this._outputs=[],this._targets={}}get clips(){return this._clips}addClip(e){const t=this._targets,s=this._binder,i=e.track.curves,n=e.snapshot,r=[],a=[];for(let o=0;o<i.length;++o){const c=i[o].paths;for(let d=0;d<c.length;++d){const u=c[d],f=s.resolve(u);let p=t[f&&f.targetPath||null];if(!p&&f){p={target:f,value:[],curves:0,blendCounter:0};for(let _=0;_<p.target.components;++_)p.value.push(0);if(t[f.targetPath]=p,s.animComponent){if(!s.animComponent.targets[f.targetPath]){let _;f.targetPath.substring(f.targetPath.length-13)==="localRotation"?_=Pe.TYPE_QUAT:_=Pe.TYPE_VEC3,s.animComponent.targets[f.targetPath]=new Pe(s.animComponent,_)}s.animComponent.targets[f.targetPath].layerCounter++,s.animComponent.targets[f.targetPath].setMask(s.layerIndex,1)}}p&&(p.curves++,r.push(n._results[o]),a.push(p))}}this._clips.push(e),this._inputs.push(r),this._outputs.push(a)}removeClip(e){const t=this._targets,s=this._binder,i=this._clips,r=i[e].track.curves;for(let a=0;a<r.length;++a){const h=r[a].paths;for(let c=0;c<h.length;++c){const d=h[c],u=this._binder.resolve(d);u&&(u.curves--,u.curves===0&&(s.unresolve(d),delete t[u.targetPath],s.animComponent&&s.animComponent.targets[u.targetPath].layerCounter--))}}i.splice(e,1),this._inputs.splice(e,1),this._outputs.splice(e,1)}removeClips(){for(;this._clips.length>0;)this.removeClip(0)}findClip(e){const t=this._clips;for(let s=0;s<t.length;++s){const i=t[s];if(i.name===e)return i}return null}rebind(){this._binder.rebind(),this._targets={};const e=[...this.clips];this.removeClips(),e.forEach(t=>{this.addClip(t)})}assignMask(e){return this._binder.assignMask(e)}update(e){const t=this._clips,s=t.map(function(r,a){return a});ot.stableSort(s,function(r,a){return t[r].blendOrder<t[a].blendOrder});for(let r=0;r<s.length;++r){const a=s[r],o=t[a],h=this._inputs[a],c=this._outputs[a],d=o.blendWeight;d>0&&o._update(e);let u,f,p;if(d>=1)for(let _=0;_<h.length;++_)u=h[_],f=c[_],p=f.value,ot.set(p,u,f.target.type),f.blendCounter++;else if(d>0)for(let _=0;_<h.length;++_)u=h[_],f=c[_],p=f.value,f.blendCounter===0?ot.set(p,u,f.target.type):ot.blend(p,u,d,f.target.type),f.blendCounter++}const i=this._targets,n=this._binder;for(const r in i)if(i.hasOwnProperty(r)){const a=i[r];if(n.animComponent&&a.target.isTransform){const o=n.animComponent.targets[r];o.counter===o.layerCounter&&(o.counter=0),o.path||(o.path=r,o.baseValue=a.target.get(),o.setter=a.target.set),o.updateValue(n.layerIndex,a.value),o.counter++}else a.target.set(a.value);a.blendCounter=0}n.update(e)}}class Hm{constructor(e){this._events=[...e],this._events.sort((t,s)=>t.time-s.time)}get events(){return this._events}}class kl{constructor(e,t,s,i,n,r=new Hm([])){this._name=e,this._duration=t,this._inputs=s,this._outputs=i,this._curves=n,this._animEvents=r}get name(){return this._name}get duration(){return this._duration}get inputs(){return this._inputs}get outputs(){return this._outputs}get curves(){return this._curves}set events(e){this._animEvents=e}get events(){return this._animEvents.events}eval(e,t){t._time=e;const s=this._inputs,i=this._outputs,n=this._curves,r=t._cache,a=t._results;for(let o=0;o<s.length;++o)r[o].update(e,s[o]._data);for(let o=0;o<n.length;++o){const h=n[o],c=i[h._output],d=a[o];r[h._input].eval(d,h._interpolation,c)}}}class Bn{static joinPath(e,t){t=t||".";const s=function(n){return n.replace(/\\/g,"\\\\").replace(new RegExp("\\"+t,"g"),"\\"+t)};return e.map(s).join(t)}static splitPath(e,t){t=t||".";const s=[];let i="",n=0;for(;n<e.length;){let r=e[n++];r==="\\"&&n<e.length?(r=e[n++],r==="\\"||r===t?i+=r:i+="\\"+r):r===t?(s.push(i),i=""):i+=r}return i.length>0&&s.push(i),s}static encode(e,t,s){return`${Array.isArray(e)?e.join("/"):e}/${t}/${Array.isArray(s)?s.join("/"):s}`}resolve(e){return null}unresolve(e){}update(e){}}class Pc{constructor(e,t,s,i){e.set?(this._set=e.set,this._get=e.get):this._set=e,this._type=t,this._components=s,this._targetPath=i,this._isTransform=this._targetPath.substring(this._targetPath.length-13)==="localRotation"||this._targetPath.substring(this._targetPath.length-13)==="localPosition"||this._targetPath.substring(this._targetPath.length-10)==="localScale"}get set(){return this._set}get get(){return this._get}get type(){return this._type}get components(){return this._components}get targetPath(){return this._targetPath}get isTransform(){return this._isTransform}}class ai{constructor(e){if(this._isPathInMask=(n,r)=>{const a=this._mask[n];if(a){if(a.children||r&&a.value!==!1)return!0}else return!1;return!1},this.graph=e,!e)return;this._mask=null;const t={};(function n(r){t[r.name]=r;for(let a=0;a<r.children.length;++a)n(r.children[a])})(e),this.nodes=t,this.targetCache={};const i=function(r){let a=r;for(;a&&!(a instanceof be);)a=a.parent;let o;return a&&(a.render?o=a.render.meshInstances:a.model&&(o=a.model.meshInstances)),o};this.nodeCounts={},this.activeNodes=[],this.handlers={localPosition:function(n){const r=n.localPosition,a=function(h){r.set(...h)};return ai.createAnimTarget(a,"vector",3,n,"localPosition")},localRotation:function(n){const r=n.localRotation,a=function(h){r.set(...h)};return ai.createAnimTarget(a,"quaternion",4,n,"localRotation")},localScale:function(n){const r=n.localScale,a=function(h){r.set(...h)};return ai.createAnimTarget(a,"vector",3,n,"localScale")},weight:function(n,r){r.indexOf("name.")===0?r=r.replace("name.",""):r=Number(r);const a=i(n);if(a){for(let o=0;o<a.length;++o)if(a[o].node.name===n.name&&a[o].morphInstance){const h=a[o].morphInstance,c=d=>{h.setWeight(r,d[0])};return ai.createAnimTarget(c,"number",1,n,`weight.${r}`)}}return null},materialTexture:(n,r)=>{const a=i(n);if(a){let o;for(let h=0;h<a.length;++h)if(a[h].node.name===n.name){o=a[h];break}if(o){const h=c=>{const d=this.animComponent.system.app.assets.get(c[0]);d&&d.resource&&d.type==="texture"&&(o.material[r]=d.resource,o.material.update())};return ai.createAnimTarget(h,"vector",1,n,"materialTexture","material")}}return null}}}_isPathActive(e){if(!this._mask)return!0;const t=[e.entityPath[0],this.graph.name];for(let s=0;s<t.length;++s){let i=t[s];if(this._isPathInMask(i,e.entityPath.length===1))return!0;for(let n=1;n<e.entityPath.length;n++)if(i+="/"+e.entityPath[n],this._isPathInMask(i,n===e.entityPath.length-1))return!0}return!1}findNode(e){if(!this._isPathActive(e))return null;let t;return this.graph&&(t=this.graph.findByPath(e.entityPath),t||(t=this.graph.findByPath(e.entityPath.slice(1)))),t||(t=this.nodes[e.entityPath[e.entityPath.length-1]||""]),t}static createAnimTarget(e,t,s,i,n,r){const a=Bn.encode(i.path,r||"entity",n);return new Pc(e,t,s,a)}resolve(e){const t=Bn.encode(e.entityPath,e.component,e.propertyPath);let s=this.targetCache[t];if(s)return s;const i=this.findNode(e);if(!i)return null;const n=this.handlers[e.propertyPath];return!n||(s=n(i),!s)?null:(this.targetCache[t]=s,this.nodeCounts[i.path]?this.nodeCounts[i.path]++:(this.activeNodes.push(i),this.nodeCounts[i.path]=1),s)}unresolve(e){if(e.component!=="graph")return;const t=this.nodes[e.entityPath[e.entityPath.length-1]||""];if(this.nodeCounts[t.path]--,this.nodeCounts[t.path]===0){const s=this.activeNodes,i=s.indexOf(t.node),n=s.length;i<n-1&&(s[i]=s[n-1]),s.pop()}}update(e){const t=this.activeNodes;for(let s=0;s<t.length;++s)t[s]._dirtifyLocal()}assignMask(e){return e!==this._mask?(this._mask=e,!0):!1}}class Xm extends te{constructor(e,t){super(e,t),this._animations={},this._assets=[],this._loop=!0,this.animEvaluator=null,this.model=null,this.skeleton=null,this.fromSkel=null,this.toSkel=null,this.animationsIndex={},this.prevAnim=null,this.currAnim=null,this.blend=0,this.blending=!1,this.blendSpeed=0,this.activate=!0,this.speed=1}set animations(e){this._animations=e,this.onSetAnimations()}get animations(){return this._animations}set assets(e){const t=this._assets;if(t&&t.length){for(let i=0;i<t.length;i++)if(t[i]){const n=this.system.app.assets.get(t[i]);if(n){n.off("change",this.onAssetChanged,this),n.off("remove",this.onAssetRemoved,this);const r=this.animationsIndex[n.id];this.currAnim===r&&this._stopCurrentAnimation(),delete this.animations[r],delete this.animationsIndex[n.id]}}}this._assets=e;const s=e.map(i=>i instanceof ne?i.id:i);this.loadAnimationAssets(s)}get assets(){return this._assets}set currentTime(e){if(this.skeleton&&(this.skeleton.currentTime=e,this.skeleton.addTime(0),this.skeleton.updateGraph()),this.animEvaluator){const t=this.animEvaluator.clips;for(let s=0;s<t.length;++s)t[s].time=e}}get currentTime(){if(this.skeleton)return this.skeleton._time;if(this.animEvaluator){const e=this.animEvaluator.clips;if(e.length>0)return e[e.length-1].time}return 0}get duration(){return this.currAnim?this.animations[this.currAnim].duration:0}set loop(e){if(this._loop=e,this.skeleton&&(this.skeleton.looping=e),this.animEvaluator)for(let t=0;t<this.animEvaluator.clips.length;++t)this.animEvaluator.clips[t].loop=e}get loop(){return this._loop}play(e,t=0){if(!(!this.enabled||!this.entity.enabled)&&this.animations[e]){if(this.prevAnim=this.currAnim,this.currAnim=e,this.model){!this.skeleton&&!this.animEvaluator&&this._createAnimationController();const s=this.animations[this.prevAnim],i=this.animations[this.currAnim];if(this.blending=t>0&&!!this.prevAnim,this.blending&&(this.blend=0,this.blendSpeed=1/t),this.skeleton&&(this.blending?(this.fromSkel.animation=s,this.fromSkel.addTime(this.skeleton._time),this.toSkel.animation=i):this.skeleton.animation=i),this.animEvaluator){const n=this.animEvaluator;if(this.blending)for(;n.clips.length>1;)n.removeClip(0);else this.animEvaluator.removeClips();const r=new Nm(this.animations[this.currAnim],0,1,!0,this.loop);r.name=this.currAnim,r.blendWeight=this.blending?0:1,r.reset(),this.animEvaluator.addClip(r)}}this.playing=!0}}getAnimation(e){return this.animations[e]}setModel(e){e!==this.model&&(this._resetAnimationController(),this.model=e,this.animations&&this.currAnim&&this.animations[this.currAnim]&&this.play(this.currAnim))}onSetAnimations(){const e=this.entity.model;if(e){const t=e.model;t&&t!==this.model&&this.setModel(t)}if(!this.currAnim&&this.activate&&this.enabled&&this.entity.enabled){const t=Object.keys(this._animations);t.length>0&&this.play(t[0])}}_resetAnimationController(){this.skeleton=null,this.fromSkel=null,this.toSkel=null,this.animEvaluator=null}_createAnimationController(){const e=this.model,t=this.animations;let s=!1,i=!1;for(const r in t)t.hasOwnProperty(r)&&(t[r].constructor===kl?i=!0:s=!0);const n=e.getGraph();s?(this.fromSkel=new Sh(n),this.toSkel=new Sh(n),this.skeleton=new Sh(n),this.skeleton.looping=this.loop,this.skeleton.setGraph(n)):i&&(this.animEvaluator=new Wm(new ai(this.entity)))}loadAnimationAssets(e){if(!e||!e.length)return;const t=this.system.app.assets,s=n=>{if(n.resources.length>1)for(let r=0;r<n.resources.length;r++)this.animations[n.resources[r].name]=n.resources[r],this.animationsIndex[n.id]=n.resources[r].name;else this.animations[n.name]=n.resource,this.animationsIndex[n.id]=n.name;this.animations=this.animations},i=n=>{n.off("change",this.onAssetChanged,this),n.on("change",this.onAssetChanged,this),n.off("remove",this.onAssetRemoved,this),n.on("remove",this.onAssetRemoved,this),n.resource?s(n):(n.once("load",s,this),this.enabled&&this.entity.enabled&&t.load(n))};for(let n=0,r=e.length;n<r;n++){const a=t.get(e[n]);a?i(a):t.on("add:"+e[n],i)}}onAssetChanged(e,t,s,i){if(t==="resource"||t==="resources")if(t==="resources"&&s&&s.length===0&&(s=null),s){let n=!1;if(s.length>1){if(i&&i.length>1)for(let r=0;r<i.length;r++)delete this.animations[i[r].name];else delete this.animations[e.name];n=!1;for(let r=0;r<s.length;r++)this.animations[s[r].name]=s[r],!n&&this.currAnim===s[r].name&&this.playing&&this.enabled&&this.entity.enabled&&(n=!0,this.play(s[r].name));n||(this._stopCurrentAnimation(),this.onSetAnimations())}else{if(i&&i.length>1)for(let r=0;r<i.length;r++)delete this.animations[i[r].name];this.animations[e.name]=s[0]||s,n=!1,this.currAnim===e.name&&this.playing&&this.enabled&&this.entity.enabled&&(n=!0,this.play(e.name)),n||(this._stopCurrentAnimation(),this.onSetAnimations())}this.animationsIndex[e.id]=e.name}else{if(i.length>1)for(let n=0;n<i.length;n++)delete this.animations[i[n].name],this.currAnim===i[n].name&&this._stopCurrentAnimation();else delete this.animations[e.name],this.currAnim===e.name&&this._stopCurrentAnimation();delete this.animationsIndex[e.id]}}onAssetRemoved(e){if(e.off("remove",this.onAssetRemoved,this),this.animations){if(e.resources.length>1)for(let t=0;t<e.resources.length;t++)delete this.animations[e.resources[t].name],this.currAnim===e.resources[t].name&&this._stopCurrentAnimation();else delete this.animations[e.name],this.currAnim===e.name&&this._stopCurrentAnimation();delete this.animationsIndex[e.id]}}_stopCurrentAnimation(){if(this.currAnim=null,this.playing=!1,this.skeleton&&(this.skeleton.currentTime=0,this.skeleton.animation=null),this.animEvaluator){for(let e=0;e<this.animEvaluator.clips.length;++e)this.animEvaluator.clips[e].stop();this.animEvaluator.update(0),this.animEvaluator.removeClips()}}onEnable(){super.onEnable();const e=this.assets,t=this.system.app.assets;if(e)for(let s=0,i=e.length;s<i;s++){let n=e[s];n instanceof ne||(n=t.get(n)),n&&!n.resource&&t.load(n)}if(this.activate&&!this.currAnim){const s=Object.keys(this.animations);s.length>0&&this.play(s[0])}}onBeforeRemove(){for(let e=0;e<this.assets.length;e++){let t=this.assets[e];typeof t=="number"&&(t=this.system.app.assets.get(t)),t&&(t.off("change",this.onAssetChanged,this),t.off("remove",this.onAssetRemoved,this))}this.skeleton=null,this.fromSkel=null,this.toSkel=null,this.animEvaluator=null}update(e){if(this.blending&&(this.blend+=e*this.blendSpeed,this.blend>=1&&(this.blend=1)),this.playing){const s=this.skeleton;if(s!==null&&this.model!==null){if(this.blending)s.blend(this.fromSkel,this.toSkel,this.blend);else{const i=e*this.speed;s.addTime(i),this.speed>0&&s._time===s.animation.duration&&!this.loop?this.playing=!1:this.speed<0&&s._time===0&&!this.loop&&(this.playing=!1)}this.blending&&this.blend===1&&(s.animation=this.toSkel.animation),s.updateGraph()}}const t=this.animEvaluator;if(t){for(let s=0;s<t.clips.length;++s){const i=t.clips[s];i.speed=this.speed,this.playing?i.resume():i.pause()}this.blending&&t.clips.length>1&&(t.clips[1].blendWeight=this.blend),t.update(e)}this.blending&&this.blend===1&&(this.blending=!1)}}class fC{constructor(){this.enabled=!0}}const Ec=["enabled"];class pC extends Fe{constructor(e){super(e),this.id="animation",this.ComponentType=Xm,this.DataType=fC,this.schema=Ec,this.on("beforeremove",this.onBeforeRemove,this),this.app.systems.on("update",this.onUpdate,this)}initializeComponentData(e,t,s){s=["activate","enabled","loop","speed","assets"];for(const i of s)t.hasOwnProperty(i)&&(e[i]=t[i]);super.initializeComponentData(e,t,Ec)}cloneComponent(e,t){this.addComponent(t,{}),t.animation.assets=e.animation.assets.slice(),t.animation.speed=e.animation.speed,t.animation.loop=e.animation.loop,t.animation.activate=e.animation.activate,t.animation.enabled=e.animation.enabled;const s={},i=e.animation.animations;for(const a in i)i.hasOwnProperty(a)&&(s[a]=i[a]);t.animation.animations=s;const n={},r=e.animation.animationsIndex;for(const a in r)r.hasOwnProperty(a)&&(n[a]=r[a]);return t.animation.animationsIndex=n,t.animation}onBeforeRemove(e,t){t.onBeforeRemove()}onUpdate(e){const t=this.store;for(const s in t)if(t.hasOwnProperty(s)){const i=t[s];i.data.enabled&&i.entity.enabled&&i.entity.animation.update(e)}}destroy(){super.destroy(),this.app.systems.off("update",this.onUpdate,this)}}te._buildAccessors(Xm.prototype,Ec);class sa{constructor(e,t,s,i,n=1){this._state=e,this._parent=t,this._name=s,Array.isArray(i)?(this._point=new V(i[0],i[1]),this._pointLength=this._point.length()):(this._point=i,this._pointLength=i),this._speed=n,this._weightedSpeed=1,this._weight=1,this._animTrack=null}get parent(){return this._parent}get name(){return this._name}get path(){return this._parent?this._parent.path+"."+this._name:this._name}get point(){return this._point}get pointLength(){return this._pointLength}set weight(e){this._weight=e}get weight(){return this._parent?this._parent.weight*this._weight:this._weight}get normalizedWeight(){const e=this._state.totalWeight;return e===0?0:this.weight/e}get speed(){return this._weightedSpeed*this._speed}get absoluteSpeed(){return Math.abs(this._speed)}set weightedSpeed(e){this._weightedSpeed=e}get weightedSpeed(){return this._weightedSpeed}set animTrack(e){this._animTrack=e}get animTrack(){return this._animTrack}}class Jn extends sa{constructor(e,t,s,i,n,r,a,o,h){super(e,t,s,i),this._parameters=n,this._parameterValues=new Array(n.length),this._children=[],this._findParameter=h,this._syncAnimations=a!==!1,this._pointCache={};for(let c=0;c<r.length;c++){const d=r[c];d.children?this._children.push(o(d.type,this,null,s,1,d.parameter?[d.parameter]:d.parameters,d.children,o,h)):this._children.push(new sa(e,this,d.name,d.point,d.speed))}}get weight(){return this.calculateWeights(),this._parent?this._parent.weight*this._weight:this._weight}get syncAnimations(){return this._syncAnimations}getChild(e){for(let t=0;t<this._children.length;t++)if(this._children[t].name===e)return this._children[t];return null}updateParameterValues(){let e=!0;for(let t=0;t<this._parameterValues.length;t++){const s=this._findParameter(this._parameters[t]).value;this._parameterValues[t]!==s&&(this._parameterValues[t]=s,e=!1)}return e}getNodeWeightedDuration(e){return this._children[e].animTrack.duration/this._children[e].speedMultiplier*this._children[e].weight}getNodeCount(){let e=0;for(let t=0;t<this._children.length;t++)this._children[t].constructor===Jn?e+=this._children[t].getNodeCount():e++;return e}}class mC extends Jn{constructor(e,t,s,i,n,r,a,o,h){r.sort((c,d)=>c.point-d.point),super(e,t,s,i,n,r,a,o,h)}calculateWeights(){if(this.updateParameterValues())return;let e=0;this._children[0].weight=0;for(let t=0;t<this._children.length;t++){const s=this._children[t];if(t!==this._children.length-1){const i=this._children[t+1];if(s.point===i.point)s.weight=.5,i.weight=.5;else if(k.between(this._parameterValues[0],s.point,i.point,!0)){const n=Math.abs(s.point-i.point),r=Math.abs(s.point-this._parameterValues[0]),a=(n-r)/n;s.weight=a,i.weight=1-a}else i.weight=0}this._syncAnimations&&(e+=s.animTrack.duration/s.absoluteSpeed*s.weight)}if(this._syncAnimations)for(let t=0;t<this._children.length;t++){const s=this._children[t];s.weightedSpeed=s.animTrack.duration/s.absoluteSpeed/e}}}class Es extends Jn{pointDistanceCache(e,t){const s=`${e}${t}`;return this._pointCache[s]||(this._pointCache[s]=this._children[t].point.clone().sub(this._children[e].point)),this._pointCache[s]}calculateWeights(){if(this.updateParameterValues())return;let e,t;Es._p.set(...this._parameterValues),e=0,t=0;for(let s=0;s<this._children.length;s++){const i=this._children[s],n=i.point;Es._pip.set(Es._p.x,Es._p.y).sub(n);let r=Number.MAX_VALUE;for(let a=0;a<this._children.length;a++){if(s===a)continue;const o=this.pointDistanceCache(s,a),h=k.clamp(1-Es._pip.dot(o)/o.lengthSq(),0,1);h<r&&(r=h)}i.weight=r,e+=r,this._syncAnimations&&(t+=i.animTrack.duration/i.absoluteSpeed*i.weight)}for(let s=0;s<this._children.length;s++){const i=this._children[s];i.weight=i._weight/e,this._syncAnimations&&(i.weightedSpeed=i.animTrack.duration/i.absoluteSpeed/t)}}}Es._p=new V;Es._pip=new V;class Rs extends Jn{pointCache(e,t){const s=`${e}${t}`;return this._pointCache[s]||(this._pointCache[s]=new V((this._children[t].pointLength-this._children[e].pointLength)/((this._children[t].pointLength+this._children[e].pointLength)/2),V.angleRad(this._children[e].point,this._children[t].point)*2)),this._pointCache[s]}calculateWeights(){if(this.updateParameterValues())return;let e,t;Rs._p.set(...this._parameterValues);const s=Rs._p.length();e=0,t=0;for(let i=0;i<this._children.length;i++){const n=this._children[i],r=n.point,a=n.pointLength;let o=Number.MAX_VALUE;for(let h=0;h<this._children.length;h++){if(i===h)continue;const c=this.pointCache(i,h),d=this._children[h].pointLength;Rs._pip.set((s-a)/((d+a)/2),V.angleRad(r,Rs._p)*2);const u=k.clamp(1-Math.abs(Rs._pip.dot(c)/c.lengthSq()),0,1);u<o&&(o=u)}n.weight=o,e+=o,this._syncAnimations&&(t+=n.animTrack.duration/n.absoluteSpeed*n.weight)}for(let i=0;i<this._children.length;i++){const n=this._children[i];if(n.weight=n._weight/e,this._syncAnimations){const r=n.animTrack.duration/t*e;n.weightedSpeed=n.absoluteSpeed*r}}}}Rs._p=new V;Rs._pip=new V;class _C extends Jn{calculateWeights(){if(this.updateParameterValues())return;let e=0,t=0;for(let s=0;s<this._children.length;s++)if(e+=Math.max(this._parameterValues[s],0),this._syncAnimations){const i=this._children[s];t+=i.animTrack.duration/i.absoluteSpeed*i.weight}for(let s=0;s<this._children.length;s++){const i=this._children[s],n=Math.max(this._parameterValues[s],0);e?(i.weight=n/e,this._syncAnimations&&(i.weightedSpeed=i.animTrack.duration/i.absoluteSpeed/t)):(i.weight=0,this._syncAnimations&&(i.weightedSpeed=0))}}}class Cf{constructor(e,t,s,i,n){this._controller=e,this._name=t,this._animations={},this._animationList=[],this._speed=s||1,this._loop=i===void 0?!0:i;const r=this._controller.findParameter.bind(this._controller);n?this._blendTree=this._createTree(n.type,this,null,t,1,n.parameter?[n.parameter]:n.parameters,n.children,n.syncAnimations,this._createTree,r):this._blendTree=new sa(this,null,t,1,s)}_createTree(e,t,s,i,n,r,a,o,h,c){switch(e){case lC:return new mC(t,s,i,n,r,a,o,h,c);case cC:return new Es(t,s,i,n,r,a,o,h,c);case hC:return new Rs(t,s,i,n,r,a,o,h,c);case dC:return new _C(t,s,i,n,r,a,o,h,c)}}_getNodeFromPath(e){let t=this._blendTree;for(let s=1;s<e.length;s++)t=t.getChild(e[s]);return t}addAnimation(e,t){const s=e.join("."),i=this._animationList.findIndex(function(n){return n.path===s});if(i>=0)this._animationList[i].animTrack=t;else{const n=this._getNodeFromPath(e);n.animTrack=t,this._animationList.push(n)}}get name(){return this._name}set animations(e){this._animationList=e}get animations(){return this._animationList}set speed(e){this._speed=e}get speed(){return this._speed}set loop(e){this._loop=e}get loop(){return this._loop}get nodeCount(){return!this._blendTree||this._blendTree.constructor===sa?1:this._blendTree.getNodeCount()}get playable(){return tl.indexOf(this.name)!==-1||this.animations.length===this.nodeCount}get looping(){if(this.animations.length>0){const e=this.name+"."+this.animations[0].animTrack.name,t=this._controller.animEvaluator.findClip(e);if(t)return t.loop}return!1}get totalWeight(){let e=0;for(let t=0;t<this.animations.length;t++)e+=this.animations[t].weight;return e}get timelineDuration(){let e=0;for(let t=0;t<this.animations.length;t++){const s=this.animations[t];s.animTrack.duration>e&&(e=s.animTrack.duration)}return e}}class sl{constructor({from:e,to:t,time:s=0,priority:i=0,conditions:n=[],exitTime:r=null,transitionOffset:a=null,interruptionSource:o=Vm}){this._from=e,this._to=t,this._time=s,this._priority=i,this._conditions=n,this._exitTime=r,this._transitionOffset=a,this._interruptionSource=o}get from(){return this._from}set to(e){this._to=e}get to(){return this._to}get time(){return this._time}get priority(){return this._priority}get conditions(){return this._conditions}get exitTime(){return this._exitTime}get transitionOffset(){return this._transitionOffset}get interruptionSource(){return this._interruptionSource}get hasExitTime(){return!!this.exitTime}}class gC{constructor(e,t,s,i,n,r,a){this._animEvaluator=e,this._states={},this._stateNames=[],this._eventHandler=r,this._consumedTriggers=a;for(let o=0;o<t.length;o++)this._states[t[o].name]=new Cf(this,t[o].name,t[o].speed,t[o].loop,t[o].blendTree),this._stateNames.push(t[o].name);this._transitions=s.map(o=>new sl($i({},o))),this._findTransitionsFromStateCache={},this._findTransitionsBetweenStatesCache={},this._parameters=i,this._previousStateName=null,this._activeStateName=Rn,this._playing=!1,this._activate=n,this._currTransitionTime=1,this._totalTransitionTime=1,this._isTransitioning=!1,this._transitionInterruptionSource=Vm,this._transitionPreviousStates=[],this._timeInState=0,this._timeInStateBefore=0}get animEvaluator(){return this._animEvaluator}set activeState(e){this._activeStateName=e}get activeState(){return this._findState(this._activeStateName)}get activeStateName(){return this._activeStateName}get activeStateAnimations(){return this.activeState.animations}set previousState(e){this._previousStateName=e}get previousState(){return this._findState(this._previousStateName)}get previousStateName(){return this._previousStateName}get playable(){let e=!0;for(let t=0;t<this._stateNames.length;t++)this._states[this._stateNames[t]].playable||(e=!1);return e}set playing(e){this._playing=e}get playing(){return this._playing}get activeStateProgress(){return this._getActiveStateProgressForTime(this._timeInState)}get activeStateDuration(){if(this.activeStateName===Rn||this.activeStateName===fo)return 0;let e=0;for(let t=0;t<this.activeStateAnimations.length;t++){const s=this._animEvaluator.findClip(this.activeStateAnimations[t].name);s&&(e=Math.max(e,s.track.duration))}return e}set activeStateCurrentTime(e){this._timeInStateBefore=e,this._timeInState=e;for(let t=0;t<this.activeStateAnimations.length;t++){const s=this.animEvaluator.findClip(this.activeStateAnimations[t].name);s&&(s.time=e)}}get activeStateCurrentTime(){return this._timeInState}get transitioning(){return this._isTransitioning}get transitionProgress(){return this._currTransitionTime/this._totalTransitionTime}get states(){return this._stateNames}assignMask(e){return this._animEvaluator.assignMask(e)}_findState(e){return this._states[e]}_getActiveStateProgressForTime(e){if(this.activeStateName===Rn||this.activeStateName===fo||this.activeStateName===Di)return 1;const t=this._animEvaluator.findClip(this.activeStateAnimations[0].name);return t?e/t.track.duration:null}_findTransitionsFromState(e){let t=this._findTransitionsFromStateCache[e];return t||(t=this._transitions.filter(function(s){return s.from===e}),ea(t),this._findTransitionsFromStateCache[e]=t),t}_findTransitionsBetweenStates(e,t){let s=this._findTransitionsBetweenStatesCache[e+"->"+t];return s||(s=this._transitions.filter(function(i){return i.from===e&&i.to===t}),ea(s),this._findTransitionsBetweenStatesCache[e+"->"+t]=s),s}_transitionHasConditionsMet(e){const t=e.conditions;for(let s=0;s<t.length;s++){const i=t[s],n=this.findParameter(i.parameterName);switch(i.predicate){case sC:if(!(n.value>i.value))return!1;break;case iC:if(!(n.value<i.value))return!1;break;case nC:if(!(n.value>=i.value))return!1;break;case rC:if(!(n.value<=i.value))return!1;break;case aC:if(n.value!==i.value)return!1;break;case oC:if(n.value===i.value)return!1;break}}return!0}_findTransition(e,t){let s=[];if(e&&t)s=s.concat(this._findTransitionsBetweenStates(e,t));else if(!this._isTransitioning)s=s.concat(this._findTransitionsFromState(this._activeStateName)),s=s.concat(this._findTransitionsFromState(Di));else switch(this._transitionInterruptionSource){case JT:s=s.concat(this._findTransitionsFromState(this._previousStateName)),s=s.concat(this._findTransitionsFromState(Di));break;case QT:s=s.concat(this._findTransitionsFromState(this._activeStateName)),s=s.concat(this._findTransitionsFromState(Di));break;case eC:s=s.concat(this._findTransitionsFromState(this._previousStateName)),s=s.concat(this._findTransitionsFromState(this._activeStateName)),s=s.concat(this._findTransitionsFromState(Di));break;case tC:s=s.concat(this._findTransitionsFromState(this._activeStateName)),s=s.concat(this._findTransitionsFromState(this._previousStateName)),s=s.concat(this._findTransitionsFromState(Di));break}if(s=s.filter(i=>{if(i.to===this.activeStateName)return!1;if(i.hasExitTime){let n=this._getActiveStateProgressForTime(this._timeInStateBefore),r=this._getActiveStateProgressForTime(this._timeInState);if(i.exitTime<1&&this.activeState.loop&&(n-=Math.floor(n),r-=Math.floor(r)),!(i.exitTime>n&&i.exitTime<=r))return null}return this._transitionHasConditionsMet(i)}),s.length>0){const i=s[0];if(i.to===fo){const n=this._findTransitionsFromState(Rn)[0];i.to=n.to}return i}return null}updateStateFromTransition(e){let t,s,i;this.previousState=e.from?this.activeStateName:null,this.activeState=e.to;for(let h=0;h<e.conditions.length;h++){const c=e.conditions[h];this.findParameter(c.parameterName).type===uo&&this._consumedTriggers.add(c.parameterName)}if(this.previousState){this._isTransitioning||(this._transitionPreviousStates=[]),this._transitionPreviousStates.push({name:this._previousStateName,weight:1});const h=Math.min(this._totalTransitionTime!==0?this._currTransitionTime/this._totalTransitionTime:1,1);for(let c=0;c<this._transitionPreviousStates.length;c++){this._isTransitioning?c!==this._transitionPreviousStates.length-1?this._transitionPreviousStates[c].weight*=1-h:this._transitionPreviousStates[c].weight=h:this._transitionPreviousStates[c].weight=1,t=this._findState(this._transitionPreviousStates[c].name);for(let d=0;d<t.animations.length;d++)s=t.animations[d],i=this._animEvaluator.findClip(s.name+".previous."+c),i||(i=this._animEvaluator.findClip(s.name),i.name=s.name+".previous."+c),c!==this._transitionPreviousStates.length-1&&i.pause()}}this._isTransitioning=!0,this._totalTransitionTime=e.time,this._currTransitionTime=0,this._transitionInterruptionSource=e.interruptionSource;const n=this.activeState,r=e.transitionOffset&&e.transitionOffset>0&&e.transitionOffset<1;let a=0,o=0;if(r){const h=n.timelineDuration*e.transitionOffset;a=h,o=h}this._timeInState=a,this._timeInStateBefore=o;for(let h=0;h<n.animations.length;h++){if(i=this._animEvaluator.findClip(n.animations[h].name),i)i.reset();else{const c=Number.isFinite(n.animations[h].speed)?n.animations[h].speed:n.speed;i=new Nm(n.animations[h].animTrack,this._timeInState,c,!0,n.loop,this._eventHandler),i.name=n.animations[h].name,this._animEvaluator.addClip(i)}if(e.time>0?i.blendWeight=0:i.blendWeight=n.animations[h].normalizedWeight,i.play(),r)i.time=n.timelineDuration*e.transitionOffset;else{const c=n.speed>=0?0:this.activeStateDuration;i.time=c}}}_transitionToState(e){if(!this._findState(e))return;let t=this._findTransition(this._activeStateName,e);t||(this._animEvaluator.removeClips(),t=new sl({from:null,to:e})),this.updateStateFromTransition(t)}assignAnimation(e,t,s,i){const n=e.split(".");let r=this._findState(n[0]);r||(r=new Cf(this,n[0],1),this._states[n[0]]=r,this._stateNames.push(n[0])),r.addAnimation(n,t),s!==void 0&&(r.speed=s),i!==void 0&&(r.loop=i),!this._playing&&this._activate&&this.playable&&this.play()}removeNodeAnimations(e){if(tl.indexOf(e)!==-1)return!1;const t=this._findState(e);return t?(t.animations=[],!0):!1}play(e){e&&this._transitionToState(e),this._playing=!0}pause(){this._playing=!1}reset(){this._previousStateName=null,this._activeStateName=Rn,this._playing=!1,this._currTransitionTime=1,this._totalTransitionTime=1,this._isTransitioning=!1,this._timeInState=0,this._timeInStateBefore=0,this._animEvaluator.removeClips()}rebind(){this._animEvaluator.rebind()}update(e){if(!this._playing)return;let t,s,i;this._timeInStateBefore=this._timeInState,this._timeInState+=e;const n=this._findTransition(this._activeStateName);if(n&&this.updateStateFromTransition(n),this._isTransitioning)if(this._currTransitionTime+=e,this._currTransitionTime<=this._totalTransitionTime){const r=this._totalTransitionTime!==0?this._currTransitionTime/this._totalTransitionTime:1;for(let a=0;a<this._transitionPreviousStates.length;a++){t=this._findState(this._transitionPreviousStates[a].name);const o=this._transitionPreviousStates[a].weight;for(let h=0;h<t.animations.length;h++)s=t.animations[h],i=this._animEvaluator.findClip(s.name+".previous."+a),i&&(i.blendWeight=(1-r)*s.normalizedWeight*o)}t=this.activeState;for(let a=0;a<t.animations.length;a++)s=t.animations[a],this._animEvaluator.findClip(s.name).blendWeight=r*s.normalizedWeight}else{this._isTransitioning=!1;const r=this.activeStateAnimations.length,a=this._animEvaluator.clips.length;for(let o=0;o<a-r;o++)this._animEvaluator.removeClip(0);this._transitionPreviousStates=[],t=this.activeState;for(let o=0;o<t.animations.length;o++)s=t.animations[o],i=this._animEvaluator.findClip(s.name),i&&(i.blendWeight=s.normalizedWeight)}else if(this.activeState._blendTree.constructor!==sa){t=this.activeState;for(let r=0;r<t.animations.length;r++)s=t.animations[r],i=this._animEvaluator.findClip(s.name),i&&(i.blendWeight=s.normalizedWeight,s.parent.syncAnimations&&(i.speed=s.speed))}this._animEvaluator.update(e)}findParameter(e){return this._parameters[e]}}const Ch=new V,Ya=new b,pr=new K,mr=new G,_r=new ee;class Ms extends ai{constructor(e,t,s,i,n){super(t),this.animComponent=e,this._mask=i,this.layerName=s,this.layerIndex=n}static _packFloat(e){return e[0]}static _packBoolean(e){return!!e[0]}static _packVec2(e){return Ch.x=e[0],Ch.y=e[1],Ch}static _packVec3(e){return Ya.x=e[0],Ya.y=e[1],Ya.z=e[2],Ya}static _packVec4(e){return pr.x=e[0],pr.y=e[1],pr.z=e[2],pr.w=e[3],pr}static _packColor(e){return mr.r=e[0],mr.g=e[1],mr.b=e[2],mr.a=e[3],mr}static _packQuat(e){return _r.x=e[0],_r.y=e[1],_r.z=e[2],_r.w=e[3],_r}resolve(e){const t=Bn.encode(e.entityPath,e.component,e.propertyPath);let s=this.targetCache[t];if(s)return s;let i,n,r;switch(e.component){case"entity":i=this._getEntityFromHierarchy(e.entityPath),r=Bn.encode(i.path,"entity",e.propertyPath),n=i;break;case"graph":if(n=this.findNode(e),!n)return null;r=Bn.encode(n.path,"graph",e.propertyPath);break;default:if(i=this._getEntityFromHierarchy(e.entityPath),n=i.findComponent(e.component),!n)return null;r=Bn.encode(i.path,e.component,e.propertyPath);break}return s=this._createAnimTargetForProperty(n,e.propertyPath,r),this.targetCache[t]=s,s}update(e){const t=this.activeNodes;if(t)for(let s=0;s<t.length;s++)t[s]._dirtifyLocal()}_getEntityFromHierarchy(e){if(!this.animComponent.entity.name===e[0])return null;const t=this.animComponent.entity;return e.length===1?t:t._parent.findByPath(e)}_resolvePath(e,t,s){const i=t.length-(s?0:1);for(let n=0;n<i;n++)e=e[t[n]];return e}_setter(e,t,s){const i=this._resolvePath(e,t),n=t[t.length-1],r="set"+n.substring(0,1).toUpperCase()+n.substring(1);if(i[r]){let h=i["get"+n.substring(0,1).toUpperCase()+n.substring(1)].bind(i)();h=[h.x,h.y,h.z,h.w];const c=i[r].bind(i);return{set:d=>{c(s(d))},get:()=>h}}const a=i[n];if(typeof a=="object"&&a.hasOwnProperty("copy"))return function(o){a.copy(s(o))};if([V,b,K,G,ee].indexOf(i.constructor)!==-1&&t.length>1){const o=t.length>2?this._resolvePath(e,t.slice(0,-1)):e,h=t[t.length-2];return function(c){i[n]=s(c),o[h]=i}}return function(o){i[n]=s(o)}}_createAnimTargetForProperty(e,t,s){if(this.handlers&&t[0].startsWith("weight."))return this.handlers.weight(e,t[0].replace("weight.",""));if(this.handlers&&t[0]==="material"&&t.length===2){const o=t[1];if(o.endsWith("Map"))return this.handlers.materialTexture(e,o)}const i=this._resolvePath(e,t,!0);if(typeof i>"u")return null;let n,r,a;if(typeof i=="number")n=this._setter(e,t,Ms._packFloat),r="vector",a=1;else if(typeof i=="boolean")n=this._setter(e,t,Ms._packBoolean),r="vector",a=1;else if(typeof i=="object")switch(i.constructor){case V:n=this._setter(e,t,Ms._packVec2),r="vector",a=2;break;case b:n=this._setter(e,t,Ms._packVec3),r="vector",a=3;break;case K:n=this._setter(e,t,Ms._packVec4),r="vector",a=4;break;case G:n=this._setter(e,t,Ms._packColor),r="vector",a=4;break;case ee:n=this._setter(e,t,Ms._packQuat),r="quaternion",a=4;break;default:return null}return t.indexOf("material")!==-1?new Pc(function(o){n(o),e.material.update()},r,a,s):new Pc(n,r,a,s)}rebind(){this.targetCache={},this.animComponent.rootBone?this.graph=this.animComponent.rootBone:this.graph=this.animComponent.entity;const e={};(function s(i){e[i.name]=i;for(let n=0;n<i.children.length;++n)s(i.children[n])})(this.graph),this.nodes=e}}class yC{constructor(e,t,s,i=1,n=Gm,r=!0){this._name=e,this._controller=t,this._component=s,this._weight=i,this._blendType=n,this._normalizedWeight=r,this._mask=null,this._blendTime=0,this._blendTimeElapsed=0,this._startingWeight=0,this._targetWeight=0}get name(){return this._name}set playing(e){this._controller.playing=e}get playing(){return this._controller.playing}get playable(){return this._controller.playable}get activeState(){return this._controller.activeStateName}get previousState(){return this._controller.previousStateName}get activeStateProgress(){return this._controller.activeStateProgress}get activeStateDuration(){return this._controller.activeStateDuration}set activeStateCurrentTime(e){const t=this._controller,s=t.playing;t.playing=!0,t.activeStateCurrentTime=e,s||t.update(0),t.playing=s}get activeStateCurrentTime(){return this._controller.activeStateCurrentTime}get transitioning(){return this._controller.transitioning}get transitionProgress(){return this.transitioning?this._controller.transitionProgress:null}get states(){return this._controller.states}set weight(e){this._weight=e,this._component.dirtifyTargets()}get weight(){return this._weight}set blendType(e){e!==this._blendType&&(this._blendType=e,this._controller.normalizeWeights&&this._component.rebind())}get blendType(){return this._blendType}set mask(e){this._controller.assignMask(e)&&this._component.rebind(),this._mask=e}get mask(){return this._mask}play(e){this._controller.play(e)}pause(){this._controller.pause()}reset(){this._controller.reset()}rebind(){this._controller.rebind()}update(e){this._blendTime&&(this._blendTimeElapsed<this._blendTime?(this.weight=k.lerp(this._startingWeight,this._targetWeight,this._blendTimeElapsed/this._blendTime),this._blendTimeElapsed+=e):(this.weight=this._targetWeight,this._blendTime=0,this._blendTimeElapsed=0,this._startingWeight=0,this._targetWeight=0)),this._controller.update(e)}blendToWeight(e,t){this._startingWeight=this.weight,this._targetWeight=e,this._blendTime=Math.max(0,t),this._blendTimeElapsed=0}assignMask(e){this._controller.assignMask(e)&&this._component.rebind(),this._mask=e}assignAnimation(e,t,s,i){t.constructor===kl&&(this._controller.assignAnimation(e,t,s,i),this._controller._transitions.length===0&&this._controller._transitions.push(new sl({from:"START",to:e})),this._component.activate&&this._component.playable&&(this._component.playing=!0))}removeNodeAnimations(e){this._controller.removeNodeAnimations(e)&&(this._component.playing=!1)}getAnimationAsset(e){return this._component.animationAssets[`${this.name}:${e}`]}transition(e,t=0,s=null){this._controller.updateStateFromTransition(new sl({from:this._controller.activeStateName,to:e,time:t,transitionOffset:s}))}}class po{constructor(e){if(this._layers=[],this._parameters={},Array.isArray(e.layers))this._layers=e.layers;else for(const t in e.layers){const s=e.layers[t],i={name:s.name,blendType:s.blendType,weight:s.weight,states:[],transitions:[]};for(let n=0;n<s.states.length;n++)i.states.push(e.states[s.states[n]]);for(let n=0;n<s.transitions.length;n++){const r=e.transitions[s.transitions[n]];if(r.conditions&&!Array.isArray(r.conditions)){const a=Object.keys(r.conditions),o=[];for(let h=0;h<a.length;h++){const c=r.conditions[a[h]];c.parameterName&&o.push(c)}r.conditions=o}Number.isInteger(r.from)&&(r.from=e.states[r.from].name),Number.isInteger(r.to)&&(r.to=e.states[r.to].name),i.transitions.push(r)}this._layers.push(i)}for(const t in e.parameters){const s=e.parameters[t];this._parameters[s.name]={type:s.type,value:s.value}}}get parameters(){return Object.assign({},this._parameters)}get layers(){return this._layers}}class qm extends te{constructor(e,t){super(e,t),this._stateGraphAsset=null,this._animationAssets={},this._speed=1,this._activate=!0,this._playing=!1,this._rootBone=null,this._stateGraph=null,this._layers=[],this._layerIndices={},this._parameters={},this._targets={},this._consumedTriggers=new Set,this._normalizeWeights=!1}set stateGraphAsset(e){if(e===null){this.removeStateGraph();return}this._stateGraphAsset&&this.system.app.assets.get(this._stateGraphAsset).off("change",this._onStateGraphAssetChangeEvent,this);let t,s;e instanceof ne?(t=e.id,s=this.system.app.assets.get(t),s||(this.system.app.assets.add(e),s=this.system.app.assets.get(t))):(t=e,s=this.system.app.assets.get(t)),!(!s||this._stateGraphAsset===t)&&(s.resource?(this._stateGraph=s.resource,this.loadStateGraph(this._stateGraph),s.on("change",this._onStateGraphAssetChangeEvent,this)):(s.once("load",i=>{this._stateGraph=i.resource,this.loadStateGraph(this._stateGraph)}),s.on("change",this._onStateGraphAssetChangeEvent,this),this.system.app.assets.load(s)),this._stateGraphAsset=t)}get stateGraphAsset(){return this._stateGraphAsset}set normalizeWeights(e){this._normalizeWeights=e,this.unbind()}get normalizeWeights(){return this._normalizeWeights}set animationAssets(e){this._animationAssets=e,this.loadAnimationAssets()}get animationAssets(){return this._animationAssets}set speed(e){this._speed=e}get speed(){return this._speed}set activate(e){this._activate=e}get activate(){return this._activate}set playing(e){this._playing=e}get playing(){return this._playing}set rootBone(e){if(typeof e=="string"){const t=this.entity.root.findByGuid(e);this._rootBone=t}else e instanceof be?this._rootBone=e:this._rootBone=null;this.rebind()}get rootBone(){return this._rootBone}set stateGraph(e){this._stateGraph=e}get stateGraph(){return this._stateGraph}get layers(){return this._layers}set layerIndices(e){this._layerIndices=e}get layerIndices(){return this._layerIndices}set parameters(e){this._parameters=e}get parameters(){return this._parameters}set targets(e){this._targets=e}get targets(){return this._targets}get playable(){for(let e=0;e<this._layers.length;e++)if(!this._layers[e].playable)return!1;return!0}get baseLayer(){return this._layers.length>0?this._layers[0]:null}_onStateGraphAssetChangeEvent(e){const t=this.animationAssets,s=this.layers.map(i=>i.mask);this.removeStateGraph(),this._stateGraph=new po(e._data),this.loadStateGraph(this._stateGraph),this.animationAssets=t,this.loadAnimationAssets(),this.layers.forEach((i,n)=>{i.mask=s[n]}),this.rebind()}dirtifyTargets(){const e=Object.values(this._targets);for(let t=0;t<e.length;t++)e[t].dirty=!0}_addLayer({name:e,states:t,transitions:s,weight:i,mask:n,blendType:r}){let a;this.rootBone?a=this.rootBone:a=this.entity;const o=this._layers.length,h=new Ms(this,a,e,n,o),c=new Wm(h),d=new gC(c,t,s,this._parameters,this._activate,this,this._consumedTriggers);return this._layers.push(new yC(e,d,this,i,r)),this._layerIndices[e]=o,this._layers[o]}addLayer(e,t,s,i){const n=this.findAnimationLayer(e);if(n)return n;const r=[{name:"START",speed:1}],a=[];return this._addLayer({name:e,states:r,transitions:a,weight:t,mask:s,blendType:i})}loadStateGraph(e){this._stateGraph=e,this._parameters={};const t=Object.keys(e.parameters);for(let s=0;s<t.length;s++){const i=t[s];this._parameters[i]={type:e.parameters[i].type,value:e.parameters[i].value}}this._layers=[];for(let s=0;s<e.layers.length;s++){const i=e.layers[s];this._addLayer.bind(this)($i({},i))}this.setupAnimationAssets()}setupAnimationAssets(){for(let e=0;e<this._layers.length;e++){const t=this._layers[e],s=t.name;for(let i=0;i<t.states.length;i++){const n=t.states[i];if(tl.indexOf(n)===-1){const r=s+":"+n;this._animationAssets[r]||(this._animationAssets[r]={asset:null})}}}this.loadAnimationAssets()}loadAnimationAssets(){for(let e=0;e<this._layers.length;e++){const t=this._layers[e];for(let s=0;s<t.states.length;s++){const i=t.states[s];if(tl.indexOf(i)!==-1)continue;const n=this._animationAssets[t.name+":"+i];if(!n||!n.asset){this.removeNodeAnimations(i,t.name);continue}const r=n.asset,a=this.system.app.assets.get(r);a&&(a.resource?this.onAnimationAssetLoaded(t.name,i,a):(a.once("load",function(o,h){return function(c){this.onAnimationAssetLoaded(o,h,c)}.bind(this)}.bind(this)(t.name,i)),this.system.app.assets.load(a)))}}}onAnimationAssetLoaded(e,t,s){this.findAnimationLayer(e).assignAnimation(t,s.resource)}removeStateGraph(){this._stateGraph=null,this._stateGraphAsset=null,this._animationAssets={},this._layers=[],this._layerIndices={},this._parameters={},this._playing=!1,this.unbind(),this._targets={}}reset(){this._parameters=Object.assign({},this._stateGraph.parameters);for(let e=0;e<this._layers.length;e++){const t=this._layers[e].playing;this._layers[e].reset(),this._layers[e].playing=t}}unbind(){this._normalizeWeights||Object.keys(this._targets).forEach(e=>{this._targets[e].unbind()})}rebind(){this._targets={};for(let e=0;e<this._layers.length;e++)this._layers[e].rebind()}findAnimationLayer(e){const t=this._layerIndices[e];return this._layers[t]||null}addAnimationState(e,t,s=1,i=!0,n="Base"){this._stateGraph||this.loadStateGraph(new po({layers:[{name:n,states:[{name:"START",speed:1},{name:e,speed:s,loop:i,defaultState:!0}],transitions:[{from:"START",to:e}]}],parameters:{}}));const r=this.findAnimationLayer(n);if(r)r.assignAnimation(e,t,s,i);else{var a;(a=this.addLayer(n))==null||a.assignAnimation(e,t,s,i)}}assignAnimation(e,t,s,i=1,n=!0){if(!this._stateGraph&&e.indexOf(".")===-1){this.loadStateGraph(new po({layers:[{name:"Base",states:[{name:"START",speed:1},{name:e,speed:i,loop:n,defaultState:!0}],transitions:[{from:"START",to:e}]}],parameters:{}})),this.baseLayer.assignAnimation(e,t);return}const r=s?this.findAnimationLayer(s):this.baseLayer;r&&r.assignAnimation(e,t,i,n)}removeNodeAnimations(e,t){const s=t?this.findAnimationLayer(t):this.baseLayer;s&&s.removeNodeAnimations(e)}getParameterValue(e,t){const s=this._parameters[e];if(s&&s.type===t)return s.value}setParameterValue(e,t,s){const i=this._parameters[e];if(i&&i.type===t){i.value=s;return}}getFloat(e){return this.getParameterValue(e,wf)}setFloat(e,t){this.setParameterValue(e,wf,t)}getInteger(e){return this.getParameterValue(e,bf)}setInteger(e,t){typeof t=="number"&&t%1===0&&this.setParameterValue(e,bf,t)}getBoolean(e){return this.getParameterValue(e,Tf)}setBoolean(e,t){this.setParameterValue(e,Tf,!!t)}getTrigger(e){return this.getParameterValue(e,uo)}setTrigger(e,t=!1){this.setParameterValue(e,uo,!0),t&&this._consumedTriggers.add(e)}resetTrigger(e){this.setParameterValue(e,uo,!1)}onBeforeRemove(){Number.isFinite(this._stateGraphAsset)&&this.system.app.assets.get(this._stateGraphAsset).off("change",this._onStateGraphAssetChangeEvent,this)}update(e){for(let t=0;t<this.layers.length;t++)this.layers[t].update(e*this.speed);this._consumedTriggers.forEach(t=>{this.parameters[t].value=!1}),this._consumedTriggers.clear()}resolveDuplicatedEntityReferenceProperties(e,t){e.rootBone&&t[e.rootBone.getGuid()]?this.rootBone=t[e.rootBone.getGuid()]:this.rebind()}}class xC{constructor(){this.enabled=!0}}const Rc=["enabled"];class vC extends Fe{constructor(e){super(e),this.id="anim",this.ComponentType=qm,this.DataType=xC,this.schema=Rc,this.on("beforeremove",this.onBeforeRemove,this),this.app.systems.on("animationUpdate",this.onAnimationUpdate,this)}initializeComponentData(e,t,s){super.initializeComponentData(e,t,Rc);const i=["animationAssets","stateGraph","layers","masks"];Object.keys(t).forEach(n=>{i.includes(n)||(e[n]=t[n])}),t.stateGraph&&(e.stateGraph=t.stateGraph,e.loadStateGraph(e.stateGraph)),t.layers?t.layers.forEach((n,r)=>{n._controller.states.forEach(a=>{n._controller._states[a]._animationList.forEach(o=>{e.layers[r].assignAnimation(o.name,o.animTrack)})})}):t.animationAssets&&(e.animationAssets=Object.assign(e.animationAssets,t.animationAssets)),t.masks&&Object.keys(t.masks).forEach(n=>{if(e.layers[n]){const r=t.masks[n].mask,a={};Object.keys(r).forEach(o=>{a[decodeURI(o)]=r[o]}),e.layers[n].mask=a}})}onAnimationUpdate(e){const t=this.store;for(const s in t)if(t.hasOwnProperty(s)){const i=t[s].entity.anim;i.data.enabled&&i.entity.enabled&&i.playing&&i.update(e)}}cloneComponent(e,t){let s;(!e.anim.rootBone||e.anim.rootBone===e)&&(s={},e.anim.layers.forEach((n,r)=>{if(n.mask){const a={};Object.keys(n.mask).forEach(o=>{const h=o.split("/");h.shift();const c=[t.name,...h].join("/");a[c]=n.mask[o]}),s[r]={mask:a}}}));const i={stateGraphAsset:e.anim.stateGraphAsset,animationAssets:e.anim.animationAssets,speed:e.anim.speed,activate:e.anim.activate,playing:e.anim.playing,rootBone:e.anim.rootBone,stateGraph:e.anim.stateGraph,layers:e.anim.layers,layerIndices:e.anim.layerIndices,parameters:e.anim.parameters,normalizeWeights:e.anim.normalizeWeights,masks:s};return this.addComponent(t,i)}onBeforeRemove(e,t){t.onBeforeRemove()}destroy(){super.destroy(),this.app.systems.off("animationUpdate",this.onAnimationUpdate,this)}}te._buildAccessors(qm.prototype,Rc);class jm extends te{constructor(e,t){super(e,t)}setCurrentListener(){if(this.enabled&&this.entity.audiolistener&&this.entity.enabled){this.system.current=this.entity;const e=this.system.current.getPosition();this.system.manager.listener.setPosition(e)}}onEnable(){this.setCurrentListener()}onDisable(){this.system.current===this.entity&&(this.system.current=null)}}class SC{constructor(){this.enabled=!0}}const Ym=["enabled"];class bC extends Fe{constructor(e){super(e),this.id="audiolistener",this.ComponentType=jm,this.DataType=SC,this.schema=Ym,this.manager=e.soundManager,this.current=null,this.app.systems.on("update",this.onUpdate,this)}initializeComponentData(e,t,s){s=["enabled"],super.initializeComponentData(e,t,s)}onUpdate(e){if(this.current){const t=this.current.getPosition();this.manager.listener.setPosition(t);const s=this.current.getWorldTransform();this.manager.listener.setOrientation(s)}}destroy(){super.destroy(),this.app.systems.off("update",this.onUpdate,this)}}te._buildAccessors(jm.prototype,Ym);class $m extends te{constructor(e,t){super(e,t),this.on("set_assets",this.onSetAssets,this),this.on("set_loop",this.onSetLoop,this),this.on("set_volume",this.onSetVolume,this),this.on("set_pitch",this.onSetPitch,this),this.on("set_minDistance",this.onSetMinDistance,this),this.on("set_maxDistance",this.onSetMaxDistance,this),this.on("set_rollOffFactor",this.onSetRollOffFactor,this),this.on("set_distanceModel",this.onSetDistanceModel,this),this.on("set_3d",this.onSet3d,this)}play(e){if(!this.enabled||!this.entity.enabled)return;this.channel&&this.stop();let t;const s=this.data;if(s.sources[e])if(!s["3d"])t=this.system.manager.playSound(s.sources[e],s),s.currentSource=e,s.channel=t;else{const i=this.entity.getPosition();t=this.system.manager.playSound3d(s.sources[e],i,s),s.currentSource=e,s.channel=t}}pause(){this.channel&&this.channel.pause()}unpause(){this.channel&&this.channel.paused&&this.channel.unpause()}stop(){this.channel&&(this.channel.stop(),this.channel=null)}onSetAssets(e,t,s){const i=[],n=s.length;if(t&&t.length){for(let r=0;r<t.length;r++)if(t[r]){const a=this.system.app.assets.get(t[r]);a&&(a.off("change",this.onAssetChanged,this),a.off("remove",this.onAssetRemoved,this),this.currentSource===a.name&&this.stop())}}if(n)for(let r=0;r<n;r++)t.indexOf(s[r])<0&&(s[r]instanceof ne?i.push(s[r].id):i.push(s[r]));!this.system._inTools&&i.length&&this.loadAudioSourceAssets(i)}onAssetChanged(e,t,s,i){t==="resource"&&this.data.sources&&(this.data.sources[e.name]=s,this.data.currentSource===e.name&&this.channel&&(this.channel.paused?(this.play(e.name),this.pause()):this.play(e.name)))}onAssetRemoved(e){e.off("remove",this.onAssetRemoved,this),this.data.sources[e.name]&&(delete this.data.sources[e.name],this.data.currentSource===e.name&&(this.stop(),this.data.currentSource=null))}onSetLoop(e,t,s){t!==s&&this.channel&&this.channel.setLoop(s)}onSetVolume(e,t,s){t!==s&&this.channel&&this.channel.setVolume(s)}onSetPitch(e,t,s){t!==s&&this.channel&&this.channel.setPitch(s)}onSetMaxDistance(e,t,s){t!==s&&this.channel instanceof li&&this.channel.setMaxDistance(s)}onSetMinDistance(e,t,s){t!==s&&this.channel instanceof li&&this.channel.setMinDistance(s)}onSetRollOffFactor(e,t,s){t!==s&&this.channel instanceof li&&this.channel.setRollOffFactor(s)}onSetDistanceModel(e,t,s){t!==s&&this.channel instanceof li&&this.channel.setDistanceModel(s)}onSet3d(e,t,s){if(t!==s&&this.system.initialized&&this.currentSource){let i=!1,n=!1;this.channel&&(i=this.channel.paused,n=this.channel.suspended),this.play(this.currentSource),this.channel&&(this.channel.paused=i,this.channel.suspended=n)}}onEnable(){const e=this.data.assets;if(e){const t=this.system.app.assets;for(let s=0,i=e.length;s<i;s++){let n=e[s];n instanceof ne||(n=t.get(n)),n&&!n.resource&&t.load(n)}}this.system.initialized&&(this.data.activate&&!this.channel?this.play(this.currentSource):this.unpause())}onDisable(){this.pause()}loadAudioSourceAssets(e){const t=e.map(o=>this.system.app.assets.get(o)),s={};let i=null,n=t.length;const r=o=>{n--},a=()=>{this.data.sources=s,this.data.currentSource=i,this.enabled&&this.activate&&i&&this.onEnable()};t.forEach((o,h)=>{o?(i=i||o.name,o.off("change",this.onAssetChanged,this),o.on("change",this.onAssetChanged,this),o.off("remove",this.onAssetRemoved,this),o.on("remove",this.onAssetRemoved,this),o.off("error",r,this),o.on("error",r,this),o.ready(c=>{s[c.name]=c.resource,n--,n===0&&a()}),!o.resource&&this.enabled&&this.entity.enabled&&this.system.app.assets.load(o)):(n--,n===0&&a(),this.system.app.assets.on("add:"+e[h],c=>{c.ready(d=>{this.data.sources[d.name]=d.resource}),c.resource||this.system.app.assets.load(c)}))})}}class wC{constructor(){this.enabled=!0,this.assets=[],this.activate=!0,this.volume=1,this.pitch=1,this.loop=!1,this["3d"]=!0,this.minDistance=1,this.maxDistance=1e4,this.rollOffFactor=1,this.distanceModel=fl,this.paused=!0,this.sources={},this.currentSource=null,this.channel=null}}const Km=["enabled","assets","volume","pitch","loop","activate","3d","minDistance","maxDistance","rollOffFactor","distanceModel","sources","currentSource","channel"];class TC extends Fe{constructor(e){super(e),this.id="audiosource",this.ComponentType=$m,this.DataType=wC,this.schema=Km,this.manager=e.soundManager,this.initialized=!1,this.app.systems.on("initialize",this.onInitialize,this),this.app.systems.on("update",this.onUpdate,this),this.on("remove",this.onRemove,this)}initializeComponentData(e,t,s){s=["activate","volume","pitch","loop","3d","minDistance","maxDistance","rollOffFactor","distanceModel","enabled","assets"],super.initializeComponentData(e,t,s),e.paused=!(e.enabled&&e.activate)}onInitialize(e){e.audiosource&&e.enabled&&e.audiosource.enabled&&e.audiosource.activate&&e.audiosource.play(e.audiosource.currentSource);const t=e._children;for(let s=0,i=t.length;s<i;s++)t[s]instanceof be&&this.onInitialize(t[s]);this.initialized=!0}onUpdate(e){const t=this.store;for(const s in t)if(t.hasOwnProperty(s)){const i=t[s],n=i.entity,r=i.data;if(r.enabled&&n.enabled&&r.channel instanceof li){const a=n.getPosition();r.channel.setPosition(a)}}}onRemove(e,t){t.channel&&(t.channel.stop(),t.channel=null)}setVolume(e){this.manager.setVolume(e)}destroy(){super.destroy(),this.app.systems.off("initialize",this.onInitialize,this),this.app.systems.off("update",this.onUpdate,this)}}te._buildAccessors($m.prototype,Km);class Ni extends le{constructor(e,t,s){if(super(),!e||!(e instanceof te))throw new Error("The parentComponent argument is required and must be a Component");if(!t||typeof t!="string")throw new Error("The propertyName argument is required and must be a string");if(s&&typeof s!="object")throw new Error("If provided, the eventConfig argument must be an object");this._parentComponent=e,this._entityPropertyName=t,this._entity=null,this._app=e.system.app,this._configureEventListeners(s||{},{"entity#destroy":this._onEntityDestroy}),this._toggleLifecycleListeners("on")}_configureEventListeners(e,t){const s=this._parseEventListenerConfig(e,"external",this._parentComponent),i=this._parseEventListenerConfig(t,"internal",this);this._eventListenerConfigs=s.concat(i),this._listenerStatusFlags={},this._gainListeners={},this._loseListeners={}}_parseEventListenerConfig(e,t,s){return Object.keys(e).map(function(i,n){const r=i.split("#"),a=r[0],o=r[1],h=e[i];if(r.length!==2||typeof a!="string"||a.length===0||typeof o!="string"||o.length===0)throw new Error("Invalid event listener description: `"+i+"`");if(typeof h!="function")throw new Error("Invalid or missing callback for event listener `"+i+"`");return{id:t+"_"+n+"_"+i,sourceName:a,eventName:o,callback:h,scope:s}},this)}_toggleLifecycleListeners(e){this._parentComponent[e]("set_"+this._entityPropertyName,this._onSetEntity,this),this._parentComponent.system[e]("beforeremove",this._onParentComponentRemove,this),this._app.systems[e]("postPostInitialize",this._updateEntityReference,this),this._app[e]("tools:sceneloaded",this._onSceneLoaded,this);const t=[];for(let s=0;s<this._eventListenerConfigs.length;++s){const i=this._eventListenerConfigs[s],n=this._app.systems[i.sourceName];n&&(t.indexOf(n)===-1&&t.push(n),n&&i.eventName==="gain"&&(this._gainListeners[i.sourceName]=i),n&&i.eventName==="lose"&&(this._loseListeners[i.sourceName]=i))}for(let s=0;s<t.length;++s)t[s][e]("add",this._onComponentAdd,this),t[s][e]("beforeremove",this._onComponentRemove,this)}_onSetEntity(e,t,s){if(s instanceof be)this._updateEntityReference();else{if(s!=null&&typeof s!="string"){console.warn("Entity field `"+this._entityPropertyName+"` was set to unexpected type '"+typeof s+"'");return}t!==s&&this._updateEntityReference()}}onParentComponentEnable(){this._entity||this._updateEntityReference()}_onSceneLoaded(){this._updateEntityReference()}_updateEntityReference(){let e=this._parentComponent.data[this._entityPropertyName],t;if(e instanceof be)t=e,e=t.getGuid(),this._parentComponent.data[this._entityPropertyName]=e;else{const i=this._parentComponent.system.app.root;t=this._parentComponent.entity.isDescendantOf(i)&&e?i.findByGuid(e):null}this._entity!==t&&(this._entity&&this._onBeforeEntityChange(),this._entity=t,this._entity&&this._onAfterEntityChange(),this.fire("set:entity",this._entity))}_onBeforeEntityChange(){this._toggleEntityListeners("off"),this._callAllGainOrLoseListeners(this._loseListeners)}_onAfterEntityChange(){this._toggleEntityListeners("on"),this._callAllGainOrLoseListeners(this._gainListeners)}_onComponentAdd(e,t){const s=t.system.id;e===this._entity&&(this._callGainOrLoseListener(s,this._gainListeners),this._toggleComponentListeners("on",s))}_onComponentRemove(e,t){const s=t.system.id;e===this._entity&&(this._callGainOrLoseListener(s,this._loseListeners),this._toggleComponentListeners("off",s,!0))}_callAllGainOrLoseListeners(e){for(const t in this._entity.c)this._callGainOrLoseListener(t,e)}_callGainOrLoseListener(e,t){if(this._entity.c.hasOwnProperty(e)&&t[e]){const s=t[e];s.callback.call(s.scope)}}_toggleEntityListeners(e,t){if(this._entity)for(let s=0;s<this._eventListenerConfigs.length;++s)this._safeToggleListener(e,this._eventListenerConfigs[s],t)}_toggleComponentListeners(e,t,s){for(let i=0;i<this._eventListenerConfigs.length;++i){const n=this._eventListenerConfigs[i];n.sourceName===t&&this._safeToggleListener(e,n,s)}}_safeToggleListener(e,t,s){const i=e==="on";if(i&&this._listenerStatusFlags[t.id])return;const n=this._getEventSource(t.sourceName,s);n&&(n[e](t.eventName,t.callback,t.scope),this._listenerStatusFlags[t.id]=i)}_getEventSource(e,t){if(e==="entity")return this._entity;const s=this._entity[e];return s||(t||console.warn("Entity has no component with name "+e),null)}_onEntityDestroy(e){this._entity===e&&(this._toggleEntityListeners("off",!0),this._entity=null)}_onParentComponentRemove(e,t){t===this._parentComponent&&(this._toggleLifecycleListeners("off"),this._toggleEntityListeners("off",!0))}hasComponent(e){return this._entity&&this._entity.c?!!this._entity.c[e]:!1}get entity(){return this._entity}}const Ic=0,Af=1,mo="group",Lc="image",Zm="text",_o="stretch",CC="contain",AC="cover",Ge={DEFAULT:"DEFAULT",HOVER:"HOVER",PRESSED:"PRESSED",INACTIVE:"INACTIVE"},ca={};ca[Ge.DEFAULT]="_defaultTint";ca[Ge.HOVER]="hoverTint";ca[Ge.PRESSED]="pressedTint";ca[Ge.INACTIVE]="inactiveTint";const da={};da[Ge.DEFAULT]="_defaultSpriteAsset";da[Ge.HOVER]="hoverSpriteAsset";da[Ge.PRESSED]="pressedSpriteAsset";da[Ge.INACTIVE]="inactiveSpriteAsset";const ua={};ua[Ge.DEFAULT]="_defaultSpriteFrame";ua[Ge.HOVER]="hoverSpriteFrame";ua[Ge.PRESSED]="pressedSpriteFrame";ua[Ge.INACTIVE]="inactiveSpriteFrame";class Jm extends te{constructor(e,t){super(e,t),this._visualState=Ge.DEFAULT,this._isHovering=!1,this._hoveringCounter=0,this._isPressed=!1,this._defaultTint=new G(1,1,1,1),this._defaultSpriteAsset=null,this._defaultSpriteFrame=0,this._imageReference=new Ni(this,"imageEntity",{"element#gain":this._onImageElementGain,"element#lose":this._onImageElementLose,"element#set:color":this._onSetColor,"element#set:opacity":this._onSetOpacity,"element#set:spriteAsset":this._onSetSpriteAsset,"element#set:spriteFrame":this._onSetSpriteFrame}),this._toggleLifecycleListeners("on",e)}_toggleLifecycleListeners(e,t){this[e]("set_active",this._onSetActive,this),this[e]("set_transitionMode",this._onSetTransitionMode,this),this[e]("set_hoverTint",this._onSetTransitionValue,this),this[e]("set_pressedTint",this._onSetTransitionValue,this),this[e]("set_inactiveTint",this._onSetTransitionValue,this),this[e]("set_hoverSpriteAsset",this._onSetTransitionValue,this),this[e]("set_hoverSpriteFrame",this._onSetTransitionValue,this),this[e]("set_pressedSpriteAsset",this._onSetTransitionValue,this),this[e]("set_pressedSpriteFrame",this._onSetTransitionValue,this),this[e]("set_inactiveSpriteAsset",this._onSetTransitionValue,this),this[e]("set_inactiveSpriteFrame",this._onSetTransitionValue,this),t.app.systems.element[e]("add",this._onElementComponentAdd,this),t.app.systems.element[e]("beforeremove",this._onElementComponentRemove,this)}_onSetActive(e,t,s){t!==s&&this._updateVisualState()}_onSetTransitionMode(e,t,s){t!==s&&(this._cancelTween(),this._resetToDefaultVisualState(t),this._forceReapplyVisualState())}_onSetTransitionValue(e,t,s){t!==s&&this._forceReapplyVisualState()}_onElementComponentRemove(e){this.entity===e&&this._toggleHitElementListeners("off")}_onElementComponentAdd(e){this.entity===e&&this._toggleHitElementListeners("on")}_onImageElementLose(){this._cancelTween(),this._resetToDefaultVisualState(this.transitionMode)}_onImageElementGain(){this._storeDefaultVisualState(),this._forceReapplyVisualState()}_toggleHitElementListeners(e){if(this.entity.element){const t=e==="on";if(t&&this._hasHitElementListeners)return;this.entity.element[e]("mouseenter",this._onMouseEnter,this),this.entity.element[e]("mouseleave",this._onMouseLeave,this),this.entity.element[e]("mousedown",this._onMouseDown,this),this.entity.element[e]("mouseup",this._onMouseUp,this),this.entity.element[e]("touchstart",this._onTouchStart,this),this.entity.element[e]("touchend",this._onTouchEnd,this),this.entity.element[e]("touchleave",this._onTouchLeave,this),this.entity.element[e]("touchcancel",this._onTouchCancel,this),this.entity.element[e]("selectstart",this._onSelectStart,this),this.entity.element[e]("selectend",this._onSelectEnd,this),this.entity.element[e]("selectenter",this._onSelectEnter,this),this.entity.element[e]("selectleave",this._onSelectLeave,this),this.entity.element[e]("click",this._onClick,this),this._hasHitElementListeners=t}}_storeDefaultVisualState(){if(this._imageReference.hasComponent("element")){const e=this._imageReference.entity.element;e.type!==mo&&(this._storeDefaultColor(e.color),this._storeDefaultOpacity(e.opacity),this._storeDefaultSpriteAsset(e.spriteAsset),this._storeDefaultSpriteFrame(e.spriteFrame))}}_storeDefaultColor(e){this._defaultTint.r=e.r,this._defaultTint.g=e.g,this._defaultTint.b=e.b}_storeDefaultOpacity(e){this._defaultTint.a=e}_storeDefaultSpriteAsset(e){this._defaultSpriteAsset=e}_storeDefaultSpriteFrame(e){this._defaultSpriteFrame=e}_onSetColor(e){this._isApplyingTint||(this._storeDefaultColor(e),this._forceReapplyVisualState())}_onSetOpacity(e){this._isApplyingTint||(this._storeDefaultOpacity(e),this._forceReapplyVisualState())}_onSetSpriteAsset(e){this._isApplyingSprite||(this._storeDefaultSpriteAsset(e),this._forceReapplyVisualState())}_onSetSpriteFrame(e){this._isApplyingSprite||(this._storeDefaultSpriteFrame(e),this._forceReapplyVisualState())}_onMouseEnter(e){this._isHovering=!0,this._updateVisualState(),this._fireIfActive("mouseenter",e)}_onMouseLeave(e){this._isHovering=!1,this._isPressed=!1,this._updateVisualState(),this._fireIfActive("mouseleave",e)}_onMouseDown(e){this._isPressed=!0,this._updateVisualState(),this._fireIfActive("mousedown",e)}_onMouseUp(e){this._isPressed=!1,this._updateVisualState(),this._fireIfActive("mouseup",e)}_onTouchStart(e){this._isPressed=!0,this._updateVisualState(),this._fireIfActive("touchstart",e)}_onTouchEnd(e){e.event.preventDefault(),this._isPressed=!1,this._updateVisualState(),this._fireIfActive("touchend",e)}_onTouchLeave(e){this._isPressed=!1,this._updateVisualState(),this._fireIfActive("touchleave",e)}_onTouchCancel(e){this._isPressed=!1,this._updateVisualState(),this._fireIfActive("touchcancel",e)}_onSelectStart(e){this._isPressed=!0,this._updateVisualState(),this._fireIfActive("selectstart",e)}_onSelectEnd(e){this._isPressed=!1,this._updateVisualState(),this._fireIfActive("selectend",e)}_onSelectEnter(e){this._hoveringCounter++,this._hoveringCounter===1&&(this._isHovering=!0,this._updateVisualState()),this._fireIfActive("selectenter",e)}_onSelectLeave(e){this._hoveringCounter--,this._hoveringCounter===0&&(this._isHovering=!1,this._isPressed=!1,this._updateVisualState()),this._fireIfActive("selectleave",e)}_onClick(e){this._fireIfActive("click",e)}_fireIfActive(e,t){this.data.active&&this.fire(e,t)}_updateVisualState(e){const t=this._visualState,s=this._determineVisualState();if((t!==s||e)&&this.enabled)switch(this._visualState=s,t===Ge.HOVER&&this._fireIfActive("hoverend"),t===Ge.PRESSED&&this._fireIfActive("pressedend"),s===Ge.HOVER&&this._fireIfActive("hoverstart"),s===Ge.PRESSED&&this._fireIfActive("pressedstart"),this.transitionMode){case Ic:{const i=ca[this._visualState],n=this[i];this._applyTint(n);break}case Af:{const i=da[this._visualState],n=ua[this._visualState],r=this[i],a=this[n];this._applySprite(r,a);break}}}_forceReapplyVisualState(){this._updateVisualState(!0)}_resetToDefaultVisualState(e){if(this._imageReference.hasComponent("element"))switch(e){case Ic:this._cancelTween(),this._applyTintImmediately(this._defaultTint);break;case Af:this._applySprite(this._defaultSpriteAsset,this._defaultSpriteFrame);break}}_determineVisualState(){if(this.active){if(this._isPressed)return Ge.PRESSED;if(this._isHovering)return Ge.HOVER}else return Ge.INACTIVE;return Ge.DEFAULT}_applySprite(e,t){t=t||0,this._imageReference.hasComponent("element")&&(this._isApplyingSprite=!0,this._imageReference.entity.element.spriteAsset!==e&&(this._imageReference.entity.element.spriteAsset=e),this._imageReference.entity.element.spriteFrame!==t&&(this._imageReference.entity.element.spriteFrame=t),this._isApplyingSprite=!1)}_applyTint(e){this._cancelTween(),this.fadeDuration===0?this._applyTintImmediately(e):this._applyTintWithTween(e)}_applyTintImmediately(e){if(!e||!this._imageReference.hasComponent("element")||this._imageReference.entity.element.type===mo)return;const t=Mf(e);this._isApplyingTint=!0,t.equals(this._imageReference.entity.element.color)||(this._imageReference.entity.element.color=t),this._imageReference.entity.element.opacity!==e.a&&(this._imageReference.entity.element.opacity=e.a),this._isApplyingTint=!1}_applyTintWithTween(e){if(!e||!this._imageReference.hasComponent("element")||this._imageReference.entity.element.type===mo)return;const t=Mf(e),s=this._imageReference.entity.element.color,i=this._imageReference.entity.element.opacity;t.equals(s)&&e.a===i||(this._tweenInfo={startTime:fi(),from:new G(s.r,s.g,s.b,i),to:e.clone(),lerpColor:new G})}_updateTintTween(){const e=fi()-this._tweenInfo.startTime;let t=this.fadeDuration===0?1:e/this.fadeDuration;if(t=k.clamp(t,0,1),Math.abs(t-1)>1e-5){const s=this._tweenInfo.lerpColor;s.lerp(this._tweenInfo.from,this._tweenInfo.to,t),this._applyTintImmediately(new G(s.r,s.g,s.b,s.a))}else this._applyTintImmediately(this._tweenInfo.to),this._cancelTween()}_cancelTween(){delete this._tweenInfo}onUpdate(){this._tweenInfo&&this._updateTintTween()}onEnable(){this._isHovering=!1,this._hoveringCounter=0,this._isPressed=!1,this._imageReference.onParentComponentEnable(),this._toggleHitElementListeners("on"),this._forceReapplyVisualState()}onDisable(){this._toggleHitElementListeners("off"),this._resetToDefaultVisualState(this.transitionMode)}onRemove(){this._toggleLifecycleListeners("off",this.system),this.onDisable()}}function Mf(l){return new G(l.r,l.g,l.b)}class MC{constructor(){this.enabled=!0,this.active=!0,this.imageEntity=null,this.hitPadding=new K,this.transitionMode=Ic,this.hoverTint=new G(.75,.75,.75),this.pressedTint=new G(.5,.5,.5),this.inactiveTint=new G(.25,.25,.25),this.fadeDuration=0,this.hoverSpriteAsset=null,this.hoverSpriteFrame=0,this.pressedSpriteAsset=null,this.pressedSpriteFrame=0,this.inactiveSpriteAsset=null,this.inactiveSpriteFrame=0}}const Dc=["enabled","active",{name:"imageEntity",type:"entity"},{name:"hitPadding",type:"vec4"},"transitionMode",{name:"hoverTint",type:"rgba"},{name:"pressedTint",type:"rgba"},{name:"inactiveTint",type:"rgba"},"fadeDuration","hoverSpriteAsset","hoverSpriteFrame","pressedSpriteAsset","pressedSpriteFrame","inactiveSpriteAsset","inactiveSpriteFrame"];class PC extends Fe{constructor(e){super(e),this.id="button",this.ComponentType=Jm,this.DataType=MC,this.schema=Dc,this.on("beforeremove",this._onRemoveComponent,this),this.app.systems.on("update",this.onUpdate,this)}initializeComponentData(e,t,s){super.initializeComponentData(e,t,Dc)}onUpdate(e){const t=this.store;for(const s in t){const i=t[s].entity,n=i.button;n.enabled&&i.enabled&&n.onUpdate()}}_onRemoveComponent(e,t){t.onRemove()}destroy(){super.destroy(),this.app.systems.off("update",this.onUpdate,this)}}te._buildAccessors(Jm.prototype,Dc);class Qm extends te{constructor(e,t){super(e,t),this._compoundParent=null,this.entity.on("insert",this._onInsert,this),this.on("set_type",this.onSetType,this),this.on("set_halfExtents",this.onSetHalfExtents,this),this.on("set_radius",this.onSetRadius,this),this.on("set_height",this.onSetHeight,this),this.on("set_axis",this.onSetAxis,this),this.on("set_asset",this.onSetAsset,this),this.on("set_renderAsset",this.onSetRenderAsset,this),this.on("set_model",this.onSetModel,this),this.on("set_render",this.onSetRender,this)}onSetType(e,t,s){t!==s&&this.system.changeType(this,t,s)}onSetHalfExtents(e,t,s){const i=this.data.type;this.data.initialized&&i==="box"&&this.system.recreatePhysicalShapes(this)}onSetRadius(e,t,s){const i=this.data.type;this.data.initialized&&(i==="sphere"||i==="capsule"||i==="cylinder"||i==="cone")&&this.system.recreatePhysicalShapes(this)}onSetHeight(e,t,s){const i=this.data.type;this.data.initialized&&(i==="capsule"||i==="cylinder"||i==="cone")&&this.system.recreatePhysicalShapes(this)}onSetAxis(e,t,s){const i=this.data.type;this.data.initialized&&(i==="capsule"||i==="cylinder"||i==="cone")&&this.system.recreatePhysicalShapes(this)}onSetAsset(e,t,s){const i=this.system.app.assets;if(t){const n=i.get(t);n&&n.off("remove",this.onAssetRemoved,this)}if(s){s instanceof ne&&(this.data.asset=s.id);const n=i.get(this.data.asset);n&&(n.off("remove",this.onAssetRemoved,this),n.on("remove",this.onAssetRemoved,this))}this.data.initialized&&this.data.type==="mesh"&&(s||(this.data.model=null),this.system.recreatePhysicalShapes(this))}onSetRenderAsset(e,t,s){const i=this.system.app.assets;if(t){const n=i.get(t);n&&n.off("remove",this.onRenderAssetRemoved,this)}if(s){s instanceof ne&&(this.data.renderAsset=s.id);const n=i.get(this.data.renderAsset);n&&(n.off("remove",this.onRenderAssetRemoved,this),n.on("remove",this.onRenderAssetRemoved,this))}this.data.initialized&&this.data.type==="mesh"&&(s||(this.data.render=null),this.system.recreatePhysicalShapes(this))}onSetModel(e,t,s){this.data.initialized&&this.data.type==="mesh"&&this.system.implementations.mesh.doRecreatePhysicalShape(this)}onSetRender(e,t,s){this.onSetModel(e,t,s)}onAssetRemoved(e){e.off("remove",this.onAssetRemoved,this),this.data.asset===e.id&&(this.asset=null)}onRenderAssetRemoved(e){e.off("remove",this.onRenderAssetRemoved,this),this.data.renderAsset===e.id&&(this.renderAsset=null)}_getCompoundChildShapeIndex(e){const t=this.data.shape,s=t.getNumChildShapes();for(let i=0;i<s;i++)if(t.getChildShape(i).ptr===e.ptr)return i;return null}_onInsert(e){if(!(typeof Ammo>"u")){if(this._compoundParent)this.system.recreatePhysicalShapes(this);else if(!this.entity.rigidbody){let t=this.entity.parent;for(;t;){if(t.collision&&t.collision.type==="compound"){t.collision.shape.getNumChildShapes()===0?this.system.recreatePhysicalShapes(t.collision):this.system.recreatePhysicalShapes(this);break}t=t.parent}}}}_updateCompound(){const e=this.entity;if(e._dirtyWorld){let t=e._dirtyLocal,s=e;for(;s&&!t&&!(s.collision&&s.collision===this._compoundParent);)s._dirtyLocal&&(t=!0),s=s.parent;if(t){e.forEach(this.system.implementations.compound._updateEachDescendantTransform,e);const i=this._compoundParent.entity.rigidbody;i&&i.activate()}}}onEnable(){if(this.data.type==="mesh"&&(this.data.asset||this.data.renderAsset)&&this.data.initialized){const e=this.system.app.assets.get(this.data.asset||this.data.renderAsset);if(e&&(!e.resource||!this.data.shape)){this.system.recreatePhysicalShapes(this);return}}if(this.entity.rigidbody)this.entity.rigidbody.enabled&&this.entity.rigidbody.enableSimulation();else if(this._compoundParent&&this!==this._compoundParent)if(this._compoundParent.shape.getNumChildShapes()===0)this.system.recreatePhysicalShapes(this._compoundParent);else{const e=this.system._getNodeTransform(this.entity,this._compoundParent.entity);this._compoundParent.shape.addChildShape(e,this.data.shape),Ammo.destroy(e),this._compoundParent.entity.rigidbody&&this._compoundParent.entity.rigidbody.activate()}else this.entity.trigger&&this.entity.trigger.enable()}onDisable(){this.entity.rigidbody?this.entity.rigidbody.disableSimulation():this._compoundParent&&this!==this._compoundParent?this._compoundParent.entity._destroying||(this.system._removeCompoundChild(this._compoundParent,this.data.shape),this._compoundParent.entity.rigidbody&&this._compoundParent.entity.rigidbody.activate()):this.entity.trigger&&this.entity.trigger.disable()}onBeforeRemove(){this.asset&&(this.asset=null),this.renderAsset&&(this.renderAsset=null),this.entity.off("insert",this._onInsert,this),this.off()}}class EC{constructor(){this.enabled=!0,this.type="box",this.halfExtents=new b(.5,.5,.5),this.radius=.5,this.axis=1,this.height=2,this.asset=null,this.renderAsset=null,this.shape=null,this.model=null,this.render=null,this.initialized=!1}}const gr="static",$t="dynamic",yn="kinematic",RC=2,Tr=4,Fc=1,Pf=4,e_=5,IC=1,Ef=2,LC=4,Rf=16,If=65535,Oc=65533;let ws,yr,xn;class t_{constructor(e,t,s){this.entity=t.entity,this.component=t,this.app=e,typeof Ammo<"u"&&!ws&&(ws=new Ammo.btVector3,yr=new Ammo.btQuaternion,xn=new Ammo.btTransform),this.initialize(s)}initialize(e){const t=this.entity,s=e.shape;if(s&&typeof Ammo<"u"){t.trigger&&t.trigger.destroy();const i=1,n=t.getPosition(),r=t.getRotation();ws.setValue(n.x,n.y,n.z),yr.setValue(r.x,r.y,r.z,r.w),xn.setOrigin(ws),xn.setRotation(yr);const a=this.app.systems.rigidbody.createBody(i,s,xn);a.setRestitution(0),a.setFriction(0),a.setDamping(0,0),ws.setValue(0,0,0),a.setLinearFactor(ws),a.setAngularFactor(ws),a.setCollisionFlags(a.getCollisionFlags()|Tr),a.entity=t,this.body=a,this.component.enabled&&t.enabled&&this.enable()}}destroy(){const e=this.body;e&&(this.disable(),this.app.systems.rigidbody.destroyBody(e))}_getEntityTransform(e){const t=this.entity.getPosition(),s=this.entity.getRotation();ws.setValue(t.x,t.y,t.z),yr.setValue(s.x,s.y,s.z,s.w),e.setOrigin(ws),e.setRotation(yr)}updateTransform(){this._getEntityTransform(xn);const e=this.body;e.setWorldTransform(xn),e.activate()}enable(){const e=this.body;if(!e)return;const t=this.app.systems;t.rigidbody.addBody(e,Rf,Oc^Rf),t.rigidbody._triggers.push(this),e.forceActivationState(Fc),this.updateTransform()}disable(){const e=this.body;if(!e)return;const t=this.app.systems,s=t.rigidbody._triggers.indexOf(this);s>-1&&t.rigidbody._triggers.splice(s,1),t.rigidbody.removeBody(e),e.forceActivationState(e_)}}const $a=new H,DC=new b,FC=new ee,OC=new Qe,s_=["enabled","type","halfExtents","radius","axis","height","asset","renderAsset","shape","model","render"];class tn{constructor(e){this.system=e}beforeInitialize(e,t){t.shape=null,t.model=new Xs,t.model.graph=new Qe}afterInitialize(e,t){this.recreatePhysicalShapes(e),e.data.initialized=!0}reset(e,t){this.beforeInitialize(e,t),this.afterInitialize(e,t)}recreatePhysicalShapes(e){const t=e.entity,s=e.data;if(typeof Ammo<"u"){t.trigger&&(t.trigger.destroy(),delete t.trigger),s.shape&&(e._compoundParent&&(this.system._removeCompoundChild(e._compoundParent,s.shape),e._compoundParent.entity.rigidbody&&e._compoundParent.entity.rigidbody.activate()),Ammo.destroy(s.shape),s.shape=null),s.shape=this.createPhysicalShape(e.entity,s);const i=!e._compoundParent;if(s.type==="compound"&&(!e._compoundParent||e===e._compoundParent))e._compoundParent=e,t.forEach(this._addEachDescendant,e);else if(s.type!=="compound"&&(e._compoundParent&&e===e._compoundParent&&t.forEach(this.system.implementations.compound._updateEachDescendant,e),!e.rigidbody)){e._compoundParent=null;let n=t.parent;for(;n;){if(n.collision&&n.collision.type==="compound"){e._compoundParent=n.collision;break}n=n.parent}}e._compoundParent&&e!==e._compoundParent&&(i&&e._compoundParent.shape.getNumChildShapes()===0?this.system.recreatePhysicalShapes(e._compoundParent):(this.system.updateCompoundChildTransform(t),e._compoundParent.entity.rigidbody&&e._compoundParent.entity.rigidbody.activate())),t.rigidbody?(t.rigidbody.disableSimulation(),t.rigidbody.createBody(),t.enabled&&t.rigidbody.enabled&&t.rigidbody.enableSimulation()):e._compoundParent||(t.trigger?t.trigger.initialize(s):t.trigger=new t_(this.system.app,e,s))}}createPhysicalShape(e,t){}updateTransform(e,t,s,i){e.entity.trigger&&e.entity.trigger.updateTransform()}beforeRemove(e,t){t.data.shape&&(t._compoundParent&&!t._compoundParent.entity._destroying&&(this.system._removeCompoundChild(t._compoundParent,t.data.shape),t._compoundParent.entity.rigidbody&&t._compoundParent.entity.rigidbody.activate()),t._compoundParent=null,Ammo.destroy(t.data.shape),t.data.shape=null)}remove(e,t){e.rigidbody&&e.rigidbody.body&&e.rigidbody.disableSimulation(),e.trigger&&(e.trigger.destroy(),delete e.trigger)}clone(e,t){const s=this.system.store[e.getGuid()],i={enabled:s.data.enabled,type:s.data.type,halfExtents:[s.data.halfExtents.x,s.data.halfExtents.y,s.data.halfExtents.z],radius:s.data.radius,axis:s.data.axis,height:s.data.height,asset:s.data.asset,renderAsset:s.data.renderAsset,model:s.data.model,render:s.data.render};return this.system.addComponent(t,i)}}class BC extends tn{createPhysicalShape(e,t){if(typeof Ammo<"u"){const s=t.halfExtents,i=new Ammo.btVector3(s?s.x:.5,s?s.y:.5,s?s.z:.5),n=new Ammo.btBoxShape(i);return Ammo.destroy(i),n}}}class kC extends tn{createPhysicalShape(e,t){if(typeof Ammo<"u")return new Ammo.btSphereShape(t.radius)}}class zC extends tn{createPhysicalShape(e,t){const s=t.axis!==void 0?t.axis:1,i=t.radius||.5,n=Math.max((t.height||2)-2*i,0);let r=null;if(typeof Ammo<"u")switch(s){case 0:r=new Ammo.btCapsuleShapeX(i,n);break;case 1:r=new Ammo.btCapsuleShape(i,n);break;case 2:r=new Ammo.btCapsuleShapeZ(i,n);break}return r}}class UC extends tn{createPhysicalShape(e,t){const s=t.axis!==void 0?t.axis:1,i=t.radius!==void 0?t.radius:.5,n=t.height!==void 0?t.height:1;let r=null,a=null;if(typeof Ammo<"u")switch(s){case 0:r=new Ammo.btVector3(n*.5,i,i),a=new Ammo.btCylinderShapeX(r);break;case 1:r=new Ammo.btVector3(i,n*.5,i),a=new Ammo.btCylinderShape(r);break;case 2:r=new Ammo.btVector3(i,i,n*.5),a=new Ammo.btCylinderShapeZ(r);break}return r&&Ammo.destroy(r),a}}class NC extends tn{createPhysicalShape(e,t){const s=t.axis!==void 0?t.axis:1,i=t.radius!==void 0?t.radius:.5,n=t.height!==void 0?t.height:1;let r=null;if(typeof Ammo<"u")switch(s){case 0:r=new Ammo.btConeShapeX(i,n);break;case 1:r=new Ammo.btConeShape(i,n);break;case 2:r=new Ammo.btConeShapeZ(i,n);break}return r}}class VC extends tn{beforeInitialize(e,t){}createAmmoMesh(e,t,s){let i;if(this.system._triMeshCache[e.id])i=this.system._triMeshCache[e.id];else{const h=e.vertexBuffer,c=h.getFormat();let d,u;for(let C=0;C<c.elements.length;C++){const S=c.elements[C];if(S.name===Ne){u=new Float32Array(h.lock(),S.offset),d=S.stride/4;break}}const f=[];e.getIndices(f);const p=e.primitive[0].count/3,_=new Ammo.btVector3,m=new Ammo.btVector3,g=new Ammo.btVector3;let w,v,y;const T=e.primitive[0].base;i=new Ammo.btTriangleMesh,this.system._triMeshCache[e.id]=i;for(let C=0;C<p;C++)w=f[T+C*3]*d,v=f[T+C*3+1]*d,y=f[T+C*3+2]*d,_.setValue(u[w],u[w+1],u[w+2]),m.setValue(u[v],u[v+1],u[v+2]),g.setValue(u[y],u[y+1],u[y+2]),i.addTriangle(_,m,g,!0);Ammo.destroy(_),Ammo.destroy(m),Ammo.destroy(g)}const n=!0,r=new Ammo.btBvhTriangleMeshShape(i,n),a=this.system._getNodeScaling(t);r.setLocalScaling(a),Ammo.destroy(a);const o=this.system._getNodeTransform(t);s.addChildShape(o,r),Ammo.destroy(o)}createPhysicalShape(e,t){if(!(typeof Ammo>"u")&&(t.model||t.render)){const s=new Ammo.btCompoundShape;if(t.model){const a=t.model.meshInstances;for(let o=0;o<a.length;o++)this.createAmmoMesh(a[o].mesh,a[o].node,s)}else if(t.render){const a=t.render.meshes;for(let o=0;o<a.length;o++)this.createAmmoMesh(a[o],OC,s)}const n=e.getWorldTransform().getScale(),r=new Ammo.btVector3(n.x,n.y,n.z);return s.setLocalScaling(r),Ammo.destroy(r),s}}recreatePhysicalShapes(e){const t=e.data;if((t.renderAsset||t.asset)&&e.enabled&&e.entity.enabled){this.loadAsset(e,t.renderAsset||t.asset,t.renderAsset?"render":"model");return}this.doRecreatePhysicalShape(e)}loadAsset(e,t,s){const i=e.data,n=this.system.app.assets,r=n.get(t);r?(r.ready(a=>{i[s]=a.resource,this.doRecreatePhysicalShape(e)}),n.load(r)):n.once("add:"+t,a=>{a.ready(o=>{i[s]=o.resource,this.doRecreatePhysicalShape(e)}),n.load(a)})}doRecreatePhysicalShape(e){const t=e.entity,s=e.data;s.model||s.render?(this.destroyShape(s),s.shape=this.createPhysicalShape(t,s),t.rigidbody?(t.rigidbody.disableSimulation(),t.rigidbody.createBody(),t.enabled&&t.rigidbody.enabled&&t.rigidbody.enableSimulation()):t.trigger?t.trigger.initialize(s):t.trigger=new t_(this.system.app,e,s)):(this.beforeRemove(t,e),this.remove(t,s))}updateTransform(e,t,s,i){if(e.shape){const r=e.entity.getWorldTransform().getScale(),a=e.shape.getLocalScaling();(r.x!==a.x()||r.y!==a.y()||r.z!==a.z())&&this.doRecreatePhysicalShape(e)}super.updateTransform(e,t,s,i)}destroyShape(e){if(!e.shape)return;const t=e.shape.getNumChildShapes();for(let s=0;s<t;s++){const i=e.shape.getChildShape(s);Ammo.destroy(i)}Ammo.destroy(e.shape),e.shape=null}remove(e,t){this.destroyShape(t),super.remove(e,t)}}class GC extends tn{createPhysicalShape(e,t){if(typeof Ammo<"u")return new Ammo.btCompoundShape}_addEachDescendant(e){!e.collision||e.rigidbody||(e.collision._compoundParent=this,e!==this.entity&&e.collision.system.recreatePhysicalShapes(e.collision))}_updateEachDescendant(e){e.collision&&e.collision._compoundParent===this&&(e.collision._compoundParent=null,e!==this.entity&&!e.rigidbody&&e.collision.system.recreatePhysicalShapes(e.collision))}_updateEachDescendantTransform(e){!e.collision||e.collision._compoundParent!==this.collision._compoundParent||this.collision.system.updateCompoundChildTransform(e)}}class WC extends Fe{constructor(e){super(e),this.id="collision",this.ComponentType=Qm,this.DataType=EC,this.schema=s_,this.implementations={},this._triMeshCache={},this.on("beforeremove",this.onBeforeRemove,this),this.on("remove",this.onRemove,this)}initializeComponentData(e,t,s){s=["type","halfExtents","radius","axis","height","shape","model","asset","render","renderAsset","enabled"];const i={};for(let a=0,o=s.length;a<o;a++){const h=s[a];i[h]=t[h]}let n;t.hasOwnProperty("asset")?(n=s.indexOf("model"),n!==-1&&s.splice(n,1),n=s.indexOf("render"),n!==-1&&s.splice(n,1)):t.hasOwnProperty("model")&&(n=s.indexOf("asset"),n!==-1&&s.splice(n,1)),i.type||(i.type=e.data.type),e.data.type=i.type,i.halfExtents&&Array.isArray(i.halfExtents)&&(i.halfExtents=new b(i.halfExtents[0],i.halfExtents[1],i.halfExtents[2]));const r=this._createImplementation(i.type);r.beforeInitialize(e,i),super.initializeComponentData(e,i,s),r.afterInitialize(e,i)}_createImplementation(e){if(this.implementations[e]===void 0){let t;switch(e){case"box":t=new BC(this);break;case"sphere":t=new kC(this);break;case"capsule":t=new zC(this);break;case"cylinder":t=new UC(this);break;case"cone":t=new NC(this);break;case"mesh":t=new VC(this);break;case"compound":t=new GC(this);break}this.implementations[e]=t}return this.implementations[e]}_getImplementation(e){return this.implementations[e.collision.data.type]}cloneComponent(e,t){return this._getImplementation(e).clone(e,t)}onBeforeRemove(e,t){this.implementations[t.data.type].beforeRemove(e,t),t.onBeforeRemove()}onRemove(e,t){this.implementations[t.type].remove(e,t)}updateCompoundChildTransform(e){if(this._removeCompoundChild(e.collision._compoundParent,e.collision.data.shape),e.enabled&&e.collision.enabled){const t=this._getNodeTransform(e,e.collision._compoundParent.entity);e.collision._compoundParent.shape.addChildShape(t,e.collision.data.shape),Ammo.destroy(t)}}_removeCompoundChild(e,t){if(e.shape.removeChildShape)e.shape.removeChildShape(t);else{const s=e._getCompoundChildShapeIndex(t);s!==null&&e.shape.removeChildShapeByIndex(s)}}onTransformChanged(e,t,s,i){this.implementations[e.data.type].updateTransform(e,t,s,i)}changeType(e,t,s){this.implementations[t].beforeRemove(e.entity,e),this.implementations[t].remove(e.entity,e.data),this._createImplementation(s).reset(e,e.data)}recreatePhysicalShapes(e){this.implementations[e.data.type].recreatePhysicalShapes(e)}_calculateNodeRelativeTransform(e,t){if(e===t){const s=e.getWorldTransform().getScale();$a.setScale(s.x,s.y,s.z)}else this._calculateNodeRelativeTransform(e.parent,t),$a.mul(e.getLocalTransform())}_getNodeScaling(e){const s=e.getWorldTransform().getScale();return new Ammo.btVector3(s.x,s.y,s.z)}_getNodeTransform(e,t){let s,i;t?(this._calculateNodeRelativeTransform(e,t),s=DC,i=FC,$a.getTranslation(s),i.setFromMat4($a)):(s=e.getPosition(),i=e.getRotation());const n=new Ammo.btTransform;n.setIdentity();const r=n.getOrigin();r.setValue(s.x,s.y,s.z);const a=new Ammo.btQuaternion;return a.setValue(i.x,i.y,i.z,i.w),n.setRotation(a),Ammo.destroy(a),Ammo.destroy(r),n}destroy(){for(const e in this._triMeshCache)Ammo.destroy(this._triMeshCache[e]);this._triMeshCache=null,super.destroy()}}te._buildAccessors(Qm.prototype,s_);class HC{constructor(e,t,s){this._entity=e,this._element=e.element,this.model=new Xs,this.node=new Qe,this.model.graph=this.node,this.mesh=t,this.meshInstance=new we(this.mesh,s,this.node),this.meshInstance.name="ImageElement: "+e.name,this.meshInstance.castShadow=!1,this.meshInstance.receiveShadow=!1,this._meshDirty=!1,this.model.meshInstances.push(this.meshInstance),this._entity.addChild(this.model.graph),this.model._entity=this._entity,this.unmaskMeshInstance=null}destroy(){this.setMaterial(null),this._element.removeModelFromLayers(this.model),this.model.destroy(),this.model=null,this.node=null,this.mesh=null,this.meshInstance=null,this._entity=null,this._element=null}setMesh(e){this.meshInstance&&(this.mesh=e,this.meshInstance.mesh=e,this.meshInstance.visible=!!e,this.unmaskMeshInstance&&(this.unmaskMeshInstance.mesh=e),this.forceUpdateAabb())}setMask(e){if(this.meshInstance){if(e){this.unmaskMeshInstance=new we(this.mesh,this.meshInstance.material,this.node),this.unmaskMeshInstance.name="Unmask: "+this._entity.name,this.unmaskMeshInstance.castShadow=!1,this.unmaskMeshInstance.receiveShadow=!1,this.unmaskMeshInstance.pick=!1,this.model.meshInstances.push(this.unmaskMeshInstance);for(const t in this.meshInstance.parameters)this.unmaskMeshInstance.setParameter(t,this.meshInstance.parameters[t].data)}else{const t=this.model.meshInstances.indexOf(this.unmaskMeshInstance);t>=0&&this.model.meshInstances.splice(t,1),this.unmaskMeshInstance=null}this._entity.enabled&&this._element.enabled&&(this._element.removeModelFromLayers(this.model),this._element.addModelToLayers(this.model))}}setMaterial(e){this.meshInstance&&(this.meshInstance.material=e,this.unmaskMeshInstance&&(this.unmaskMeshInstance.material=e))}setParameter(e,t){this.meshInstance&&(this.meshInstance.setParameter(e,t),this.unmaskMeshInstance&&this.unmaskMeshInstance.setParameter(e,t))}deleteParameter(e){this.meshInstance&&(this.meshInstance.deleteParameter(e),this.unmaskMeshInstance&&this.unmaskMeshInstance.deleteParameter(e))}setUnmaskDrawOrder(){if(!this.meshInstance)return;const e=function t(s){let i;const n=s.children,r=n.length;if(r){for(let o=0;o<r;o++)n[o].element&&(i=n[o]);if(!i)return null;const a=t(i);return a||i}return null};if(this.unmaskMeshInstance){const t=e(this._entity);t&&t.element?this.unmaskMeshInstance.drawOrder=t.element.drawOrder+t.element.getMaskOffset():this.unmaskMeshInstance.drawOrder=this.meshInstance.drawOrder+this._element.getMaskOffset()}}setDrawOrder(e){this.meshInstance&&(this.meshInstance.drawOrder=e)}setCull(e){if(!this.meshInstance)return;const t=this._element;let s=null;e&&t._isScreenSpace()&&(s=function(i){return t.isVisibleForCamera(i)}),this.meshInstance.cull=e,this.meshInstance.isVisibleFunc=s,this.unmaskMeshInstance&&(this.unmaskMeshInstance.cull=e,this.unmaskMeshInstance.isVisibleFunc=s)}setScreenSpace(e){this.meshInstance&&(this.meshInstance.screenSpace=e,this.unmaskMeshInstance&&(this.unmaskMeshInstance.screenSpace=e))}setLayer(e){this.meshInstance&&(this.meshInstance.layer=e,this.unmaskMeshInstance&&(this.unmaskMeshInstance.layer=e))}forceUpdateAabb(e){this.meshInstance&&(this.meshInstance._aabbVer=-1,this.unmaskMeshInstance&&(this.unmaskMeshInstance._aabbVer=-1))}setAabbFunc(e){this.meshInstance&&(this.meshInstance._updateAabbFunc=e,this.unmaskMeshInstance&&(this.unmaskMeshInstance._updateAabbFunc=e))}}class XC{constructor(e){this._element=e,this._entity=e.entity,this._system=e.system,this._textureAsset=null,this._texture=null,this._materialAsset=null,this._material=null,this._spriteAsset=null,this._sprite=null,this._spriteFrame=0,this._pixelsPerUnit=null,this._targetAspectRatio=-1,this._rect=new K(0,0,1,1),this._mask=!1,this._maskRef=0,this._outerScale=new V,this._outerScaleUniform=new Float32Array(2),this._innerOffset=new K,this._innerOffsetUniform=new Float32Array(4),this._atlasRect=new K,this._atlasRectUniform=new Float32Array(4),this._defaultMesh=this._createMesh(),this._renderable=new HC(this._entity,this._defaultMesh,this._material),this._color=new G(1,1,1,1),this._colorUniform=new Float32Array([1,1,1]),this._renderable.setParameter("material_emissive",this._colorUniform),this._renderable.setParameter("material_opacity",1),this._updateAabbFunc=this._updateAabb.bind(this),this._onScreenChange(this._element.screen),this._element.on("resize",this._onParentResizeOrPivotChange,this),this._element.on("set:pivot",this._onParentResizeOrPivotChange,this),this._element.on("screen:set:screenspace",this._onScreenSpaceChange,this),this._element.on("set:screen",this._onScreenChange,this),this._element.on("set:draworder",this._onDrawOrderChange,this),this._element.on("screen:set:resolution",this._onResolutionChange,this)}destroy(){this.textureAsset=null,this.spriteAsset=null,this.materialAsset=null,this._renderable.setMesh(this._defaultMesh),this._renderable.destroy(),this._defaultMesh=null,this._element.off("resize",this._onParentResizeOrPivotChange,this),this._element.off("set:pivot",this._onParentResizeOrPivotChange,this),this._element.off("screen:set:screenspace",this._onScreenSpaceChange,this),this._element.off("set:screen",this._onScreenChange,this),this._element.off("set:draworder",this._onDrawOrderChange,this),this._element.off("screen:set:resolution",this._onResolutionChange,this)}_onResolutionChange(e){}_onParentResizeOrPivotChange(){this._renderable.mesh&&this._updateMesh(this._renderable.mesh)}_onScreenSpaceChange(e){this._updateMaterial(e)}_onScreenChange(e,t){e?this._updateMaterial(e.screen.screenSpace):this._updateMaterial(!1)}_onDrawOrderChange(e){this._renderable.setDrawOrder(e),this.mask&&this._element.screen&&this._element.screen.screen.once("syncdraworder",function(){this._renderable.setUnmaskDrawOrder()},this)}_hasUserMaterial(){return!!this._materialAsset||!!this._material&&this._system.defaultImageMaterials.indexOf(this._material)===-1}_use9Slicing(){return this.sprite&&(this.sprite.renderMode===je||this.sprite.renderMode===We)}_updateMaterial(e){const t=!!this._mask,s=!!(this.sprite&&this.sprite.renderMode===je),i=!!(this.sprite&&this.sprite.renderMode===We);this._hasUserMaterial()||(this._material=this._system.getImageElementMaterial(e,t,s,i)),this._renderable&&(this._renderable.setCull(!this._element._isScreenSpace()||this._element._isScreenCulled()),this._renderable.setMaterial(this._material),this._renderable.setScreenSpace(e),this._renderable.setLayer(e?s0:om))}_createMesh(){const e=this._element,t=e.calculatedWidth,s=e.calculatedHeight,i=this._rect,n=new ArrayBuffer(4*8*4),r=new Float32Array(n);r[5]=1,r[6]=i.x,r[7]=1-i.y,r[8]=t,r[13]=1,r[14]=i.x+i.z,r[15]=1-i.y,r[16]=t,r[17]=s,r[21]=1,r[22]=i.x+i.z,r[23]=1-(i.y+i.w),r[25]=s,r[29]=1,r[30]=i.x,r[31]=1-(i.y+i.w);const a=[{semantic:Ne,components:3,type:ge},{semantic:xt,components:3,type:ge},{semantic:It,components:2,type:ge}],o=this._system.app.graphicsDevice,h=new dt(o,a),c=new Us(o,h,4,Rt,n),d=new Ht(o);return d.vertexBuffer=c,d.primitive[0].type=ji,d.primitive[0].base=0,d.primitive[0].count=4,d.primitive[0].indexed=!1,d.aabb.setMinMax(b.ZERO,new b(t,s,0)),this._updateMesh(d),d}_updateMesh(e){const t=this._element;let s=t.calculatedWidth,i=t.calculatedHeight;if(t.fitMode!==_o&&this._targetAspectRatio>0){const r=t.calculatedWidth/t.calculatedHeight;t.fitMode===CC&&r>this._targetAspectRatio||t.fitMode===AC&&r<this._targetAspectRatio?s=t.calculatedHeight*this._targetAspectRatio:i=t.calculatedWidth/this._targetAspectRatio}const n=t._isScreenSpace();if(this._updateMaterial(n),this._renderable&&this._renderable.forceUpdateAabb(),this.sprite&&(this.sprite.renderMode===je||this.sprite.renderMode===We)){const r=this._sprite.atlas.frames[this._sprite.frameKeys[this._spriteFrame]],a=2/r.rect.z,o=2/r.rect.w;this._innerOffset.set(r.border.x*a,r.border.y*o,r.border.z*a,r.border.w*o);const h=this.sprite.atlas.texture;this._atlasRect.set(r.rect.x/h.width,r.rect.y/h.height,r.rect.z/h.width,r.rect.w/h.height);const c=this._pixelsPerUnit!==null?this._pixelsPerUnit:this.sprite.pixelsPerUnit,d=r.rect.z/c,u=r.rect.w/c;this._outerScale.set(Math.max(s,this._innerOffset.x*d),Math.max(i,this._innerOffset.y*u));let f=d,p=u;this._outerScale.x/=d,this._outerScale.y/=u,f*=k.clamp(s/(this._innerOffset.x*d),1e-4,1),p*=k.clamp(i/(this._innerOffset.y*u),1e-4,1),this._renderable&&(this._innerOffsetUniform[0]=this._innerOffset.x,this._innerOffsetUniform[1]=this._innerOffset.y,this._innerOffsetUniform[2]=this._innerOffset.z,this._innerOffsetUniform[3]=this._innerOffset.w,this._renderable.setParameter("innerOffset",this._innerOffsetUniform),this._atlasRectUniform[0]=this._atlasRect.x,this._atlasRectUniform[1]=this._atlasRect.y,this._atlasRectUniform[2]=this._atlasRect.z,this._atlasRectUniform[3]=this._atlasRect.w,this._renderable.setParameter("atlasRect",this._atlasRectUniform),this._outerScaleUniform[0]=this._outerScale.x,this._outerScaleUniform[1]=this._outerScale.y,this._renderable.setParameter("outerScale",this._outerScaleUniform),this._renderable.setAabbFunc(this._updateAabbFunc),this._renderable.node.setLocalScale(f,p,1),this._renderable.node.setLocalPosition((.5-t.pivot.x)*s,(.5-t.pivot.y)*i,0))}else{const r=e.vertexBuffer,a=new Float32Array(r.lock()),o=t.pivot.x,h=t.pivot.y;a[0]=0-o*s,a[1]=0-h*i,a[8]=s-o*s,a[9]=0-h*i,a[16]=s-o*s,a[17]=i-h*i,a[24]=0-o*s,a[25]=i-h*i;let c=1,d=1,u=this._rect;if(this._sprite&&this._sprite.frameKeys[this._spriteFrame]&&this._sprite.atlas){const _=this._sprite.atlas.frames[this._sprite.frameKeys[this._spriteFrame]];_&&(u=_.rect,c=this._sprite.atlas.texture.width,d=this._sprite.atlas.texture.height)}a[6]=u.x/c,a[7]=1-u.y/d,a[14]=(u.x+u.z)/c,a[15]=1-u.y/d,a[22]=(u.x+u.z)/c,a[23]=1-(u.y+u.w)/d,a[30]=u.x/c,a[31]=1-(u.y+u.w)/d,r.unlock();const f=new b(0-o*s,0-h*i,0),p=new b(s-o*s,i-h*i,0);e.aabb.setMinMax(f,p),this._renderable&&(this._renderable.node.setLocalScale(1,1,1),this._renderable.node.setLocalPosition(0,0,0),this._renderable.setAabbFunc(null))}this._meshDirty=!1}_updateSprite(){let e=!1,t=null;if(this._targetAspectRatio=-1,this._sprite&&this._sprite.atlas){t=this._sprite.meshes[this.spriteFrame],e=this._sprite.renderMode===je||this._sprite.renderMode===We;const s=this._sprite.atlas.frames[this._sprite.frameKeys[this._spriteFrame]];(s==null?void 0:s.rect.w)>0&&(this._targetAspectRatio=s.rect.z/s.rect.w)}this.mesh=e?t:this._defaultMesh,this.refreshMesh()}refreshMesh(){this.mesh&&(this._element._beingInitialized?this._meshDirty=!0:this._updateMesh(this.mesh))}_updateAabb(e){return e.center.set(0,0,0),e.halfExtents.set(this._outerScale.x*.5,this._outerScale.y*.5,.001),e.setFromTransformedAabb(e,this._renderable.node.getWorldTransform()),e}_toggleMask(){this._element._dirtifyMask();const e=this._element._isScreenSpace();this._updateMaterial(e),this._renderable.setMask(!!this._mask)}_onMaterialLoad(e){this.material=e.resource}_onMaterialAdded(e){this._system.app.assets.off("add:"+e.id,this._onMaterialAdded,this),this._materialAsset===e.id&&this._bindMaterialAsset(e)}_bindMaterialAsset(e){this._entity.enabled&&(e.on("load",this._onMaterialLoad,this),e.on("change",this._onMaterialChange,this),e.on("remove",this._onMaterialRemove,this),e.resource?this._onMaterialLoad(e):this._system.app.assets.load(e))}_unbindMaterialAsset(e){e.off("load",this._onMaterialLoad,this),e.off("change",this._onMaterialChange,this),e.off("remove",this._onMaterialRemove,this)}_onMaterialChange(){}_onMaterialRemove(){}_onTextureAdded(e){this._system.app.assets.off("add:"+e.id,this._onTextureAdded,this),this._textureAsset===e.id&&this._bindTextureAsset(e)}_bindTextureAsset(e){this._entity.enabled&&(e.on("load",this._onTextureLoad,this),e.on("change",this._onTextureChange,this),e.on("remove",this._onTextureRemove,this),e.resource?this._onTextureLoad(e):this._system.app.assets.load(e))}_unbindTextureAsset(e){e.off("load",this._onTextureLoad,this),e.off("change",this._onTextureChange,this),e.off("remove",this._onTextureRemove,this)}_onTextureLoad(e){this.texture=e.resource}_onTextureChange(e){}_onTextureRemove(e){}_onSpriteAssetAdded(e){this._system.app.assets.off("add:"+e.id,this._onSpriteAssetAdded,this),this._spriteAsset===e.id&&this._bindSpriteAsset(e)}_bindSpriteAsset(e){this._entity.enabled&&(e.on("load",this._onSpriteAssetLoad,this),e.on("change",this._onSpriteAssetChange,this),e.on("remove",this._onSpriteAssetRemove,this),e.resource?this._onSpriteAssetLoad(e):this._system.app.assets.load(e))}_unbindSpriteAsset(e){e.off("load",this._onSpriteAssetLoad,this),e.off("change",this._onSpriteAssetChange,this),e.off("remove",this._onSpriteAssetRemove,this),e.data.textureAtlasAsset&&this._system.app.assets.off("load:"+e.data.textureAtlasAsset,this._onTextureAtlasLoad,this)}_onSpriteAssetLoad(e){if(!e||!e.resource)this.sprite=null;else if(e.resource.atlas)this.sprite=e.resource;else{const t=e.data.textureAtlasAsset;if(t){const s=this._system.app.assets;s.off("load:"+t,this._onTextureAtlasLoad,this),s.once("load:"+t,this._onTextureAtlasLoad,this)}}}_onSpriteAssetChange(e){this._onSpriteAssetLoad(e)}_onSpriteAssetRemove(e){}_bindSprite(e){e.on("set:meshes",this._onSpriteMeshesChange,this),e.on("set:pixelsPerUnit",this._onSpritePpuChange,this),e.on("set:atlas",this._onAtlasTextureChange,this),e.atlas&&e.atlas.on("set:texture",this._onAtlasTextureChange,this)}_unbindSprite(e){e.off("set:meshes",this._onSpriteMeshesChange,this),e.off("set:pixelsPerUnit",this._onSpritePpuChange,this),e.off("set:atlas",this._onAtlasTextureChange,this),e.atlas&&e.atlas.off("set:texture",this._onAtlasTextureChange,this)}_onSpriteMeshesChange(){this._sprite&&(this._spriteFrame=k.clamp(this._spriteFrame,0,this._sprite.frameKeys.length-1)),this._updateSprite()}_onSpritePpuChange(){this.sprite.renderMode!==ri&&this._pixelsPerUnit===null&&this._updateSprite()}_onAtlasTextureChange(){this.sprite&&this.sprite.atlas&&this.sprite.atlas.texture?(this._renderable.setParameter("texture_emissiveMap",this._sprite.atlas.texture),this._renderable.setParameter("texture_opacityMap",this._sprite.atlas.texture)):(this._renderable.deleteParameter("texture_emissiveMap"),this._renderable.deleteParameter("texture_opacityMap"))}_onTextureAtlasLoad(e){const t=this._spriteAsset;t instanceof ne?this._onSpriteAssetLoad(t):this._onSpriteAssetLoad(this._system.app.assets.get(t))}onEnable(){if(this._materialAsset){const e=this._system.app.assets.get(this._materialAsset);e&&e.resource!==this._material&&this._bindMaterialAsset(e)}if(this._textureAsset){const e=this._system.app.assets.get(this._textureAsset);e&&e.resource!==this._texture&&this._bindTextureAsset(e)}if(this._spriteAsset){const e=this._system.app.assets.get(this._spriteAsset);e&&e.resource!==this._sprite&&this._bindSpriteAsset(e)}this._element.addModelToLayers(this._renderable.model)}onDisable(){this._element.removeModelFromLayers(this._renderable.model)}_setStencil(e){this._renderable.meshInstance.stencilFront=e,this._renderable.meshInstance.stencilBack=e;let t=0;if(this._element.maskedBy&&(t=this._element.maskedBy.element._image._maskRef),this._renderable.unmaskMeshInstance){const s=new Gn({ref:t+1,func:bo,zpass:Wg});this._renderable.unmaskMeshInstance.stencilFront=s,this._renderable.unmaskMeshInstance.stencilBack=s}}set color(e){const t=e.r,s=e.g,i=e.b;(this._color.r!==t||this._color.g!==s||this._color.b!==i)&&(this._color.r=t,this._color.g=s,this._color.b=i,this._colorUniform[0]=t,this._colorUniform[1]=s,this._colorUniform[2]=i,this._renderable.setParameter("material_emissive",this._colorUniform)),this._element&&this._element.fire("set:color",this._color)}get color(){return this._color}set opacity(e){e!==this._color.a&&(this._color.a=e,this._renderable.setParameter("material_opacity",e)),this._element&&this._element.fire("set:opacity",e)}get opacity(){return this._color.a}set rect(e){let t,s,i,n;e instanceof K?(t=e.x,s=e.y,i=e.z,n=e.w):(t=e[0],s=e[1],i=e[2],n=e[3]),!(t===this._rect.x&&s===this._rect.y&&i===this._rect.z&&n===this._rect.w)&&(this._rect.set(t,s,i,n),this._renderable.mesh&&(this._element._beingInitialized?this._meshDirty=!0:this._updateMesh(this._renderable.mesh)))}get rect(){return this._rect}set material(e){if(this._material!==e){if(!e){const t=this._element._isScreenSpace();this.mask?e=t?this._system.defaultScreenSpaceImageMaskMaterial:this._system.defaultImageMaskMaterial:e=t?this._system.defaultScreenSpaceImageMaterial:this._system.defaultImageMaterial}this._material=e,e&&(this._renderable.setMaterial(e),this._hasUserMaterial()?(this._renderable.deleteParameter("material_opacity"),this._renderable.deleteParameter("material_emissive")):(this._colorUniform[0]=this._color.r,this._colorUniform[1]=this._color.g,this._colorUniform[2]=this._color.b,this._renderable.setParameter("material_emissive",this._colorUniform),this._renderable.setParameter("material_opacity",this._color.a)))}}get material(){return this._material}set materialAsset(e){const t=this._system.app.assets;let s=e;if(e instanceof ne&&(s=e.id),this._materialAsset!==s){if(this._materialAsset){t.off("add:"+this._materialAsset,this._onMaterialAdded,this);const i=t.get(this._materialAsset);i&&(i.off("load",this._onMaterialLoad,this),i.off("change",this._onMaterialChange,this),i.off("remove",this._onMaterialRemove,this))}if(this._materialAsset=s,this._materialAsset){const i=t.get(this._materialAsset);i?this._bindMaterialAsset(i):(this.material=null,t.on("add:"+this._materialAsset,this._onMaterialAdded,this))}else this.material=null}}get materialAsset(){return this._materialAsset}set texture(e){if(this._texture!==e){if(this._textureAsset){const t=this._system.app.assets.get(this._textureAsset);t&&t.resource!==e&&(this.textureAsset=null)}if(this._texture=e,e){this._spriteAsset&&(this.spriteAsset=null),this._renderable.setParameter("texture_emissiveMap",this._texture),this._renderable.setParameter("texture_opacityMap",this._texture),this._colorUniform[0]=this._color.r,this._colorUniform[1]=this._color.g,this._colorUniform[2]=this._color.b,this._renderable.setParameter("material_emissive",this._colorUniform),this._renderable.setParameter("material_opacity",this._color.a);const t=this._texture.width/this._texture.height;t!==this._targetAspectRatio&&(this._targetAspectRatio=t,this._element.fitMode!==_o&&this.refreshMesh())}else this._renderable.deleteParameter("texture_emissiveMap"),this._renderable.deleteParameter("texture_opacityMap"),this._targetAspectRatio=-1,this._element.fitMode!==_o&&this.refreshMesh()}}get texture(){return this._texture}set textureAsset(e){const t=this._system.app.assets;let s=e;if(e instanceof ne&&(s=e.id),this._textureAsset!==s){if(this._textureAsset){t.off("add:"+this._textureAsset,this._onTextureAdded,this);const i=t.get(this._textureAsset);i&&(i.off("load",this._onTextureLoad,this),i.off("change",this._onTextureChange,this),i.off("remove",this._onTextureRemove,this))}if(this._textureAsset=s,this._textureAsset){const i=t.get(this._textureAsset);i?this._bindTextureAsset(i):(this.texture=null,t.on("add:"+this._textureAsset,this._onTextureAdded,this))}else this.texture=null}}get textureAsset(){return this._textureAsset}set spriteAsset(e){const t=this._system.app.assets;let s=e;if(e instanceof ne&&(s=e.id),this._spriteAsset!==s){if(this._spriteAsset){t.off("add:"+this._spriteAsset,this._onSpriteAssetAdded,this);const i=t.get(this._spriteAsset);i&&this._unbindSpriteAsset(i)}if(this._spriteAsset=s,this._spriteAsset){const i=t.get(this._spriteAsset);i?this._bindSpriteAsset(i):(this.sprite=null,t.on("add:"+this._spriteAsset,this._onSpriteAssetAdded,this))}else this.sprite=null}this._element&&this._element.fire("set:spriteAsset",s)}get spriteAsset(){return this._spriteAsset}set sprite(e){if(this._sprite!==e){if(this._sprite&&this._unbindSprite(this._sprite),this._spriteAsset){const t=this._system.app.assets.get(this._spriteAsset);t&&t.resource!==e&&(this.spriteAsset=null)}this._sprite=e,this._sprite&&(this._bindSprite(this._sprite),this._textureAsset&&(this.textureAsset=null)),this._sprite&&this._sprite.atlas&&this._sprite.atlas.texture?(this._renderable.setParameter("texture_emissiveMap",this._sprite.atlas.texture),this._renderable.setParameter("texture_opacityMap",this._sprite.atlas.texture)):(this._renderable.deleteParameter("texture_emissiveMap"),this._renderable.deleteParameter("texture_opacityMap")),this._sprite&&(this._spriteFrame=k.clamp(this._spriteFrame,0,this._sprite.frameKeys.length-1)),this._updateSprite()}}get sprite(){return this._sprite}set spriteFrame(e){const t=this._spriteFrame;this._sprite?this._spriteFrame=k.clamp(e,0,this._sprite.frameKeys.length-1):this._spriteFrame=e,this._spriteFrame!==t&&this._updateSprite(),this._element&&this._element.fire("set:spriteFrame",e)}get spriteFrame(){return this._spriteFrame}set mesh(e){this._renderable.setMesh(e),this._defaultMesh===e?this._renderable.setAabbFunc(null):this._renderable.setAabbFunc(this._updateAabbFunc)}get mesh(){return this._renderable.mesh}set mask(e){this._mask!==e&&(this._mask=e,this._toggleMask())}get mask(){return this._mask}set pixelsPerUnit(e){this._pixelsPerUnit!==e&&(this._pixelsPerUnit=e,this._sprite&&(this._sprite.renderMode===je||this._sprite.renderMode===We)&&this._updateSprite())}get pixelsPerUnit(){return this._pixelsPerUnit}get aabb(){return this._renderable.meshInstance?this._renderable.meshInstance.aabb:null}}class qC extends le{constructor(e){super(),this._app=e,e.i18n.on("set:locale",this._onSetLocale,this),this._autoLoad=!1,this._disableLocalization=!1,this._defaultAsset=null,this._localizedAsset=null}set defaultAsset(e){const t=e instanceof ne?e.id:e;this._defaultAsset!==t&&(this._defaultAsset&&this._unbindDefaultAsset(),this._defaultAsset=t,this._defaultAsset&&this._bindDefaultAsset(),this._onSetLocale(this._app.i18n.locale))}get defaultAsset(){return this._defaultAsset}set localizedAsset(e){const t=e instanceof ne?e.id:e;this._localizedAsset!==t&&(this._localizedAsset&&(this._app.assets.off("add:"+this._localizedAsset,this._onLocalizedAssetAdd,this),this._unbindLocalizedAsset(),this._localizedAsset=null),this._localizedAsset=t,this._localizedAsset&&(this._app.assets.get(this._localizedAsset)?this._bindLocalizedAsset():this._app.assets.once("add:"+this._localizedAsset,this._onLocalizedAssetAdd,this)))}get localizedAsset(){return this._localizedAsset}set autoLoad(e){this._autoLoad!==e&&(this._autoLoad=e,this._autoLoad&&this._localizedAsset&&(this._unbindLocalizedAsset(),this._bindLocalizedAsset()))}get autoLoad(){return this._autoLoad}set disableLocalization(e){this._disableLocalization!==e&&(this._disableLocalization=e,this._onSetLocale(this._app.i18n.locale))}get disableLocalization(){return this._disableLocalization}_bindDefaultAsset(){const e=this._app.assets.get(this._defaultAsset);e?this._onDefaultAssetAdd(e):this._app.assets.once("add:"+this._defaultAsset,this._onDefaultAssetAdd,this)}_unbindDefaultAsset(){if(!this._defaultAsset)return;this._app.assets.off("add:"+this._defaultAsset,this._onDefaultAssetAdd,this);const e=this._app.assets.get(this._defaultAsset);e&&(e.off("add:localized",this._onLocaleAdd,this),e.off("remove:localized",this._onLocaleRemove,this),e.off("remove",this._onDefaultAssetRemove,this))}_onDefaultAssetAdd(e){this._defaultAsset===e.id&&(e.on("add:localized",this._onLocaleAdd,this),e.on("remove:localized",this._onLocaleRemove,this),e.once("remove",this._onDefaultAssetRemove,this))}_onDefaultAssetRemove(e){this._defaultAsset===e.id&&(e.off("add:localized",this._onLocaleAdd,this),e.off("remove:localized",this._onLocaleAdd,this),this._app.assets.once("add:"+this._defaultAsset,this._onDefaultAssetAdd,this))}_bindLocalizedAsset(){if(!this._autoLoad)return;const e=this._app.assets.get(this._localizedAsset);e&&(e.on("load",this._onLocalizedAssetLoad,this),e.on("change",this._onLocalizedAssetChange,this),e.on("remove",this._onLocalizedAssetRemove,this),e.resource?this._onLocalizedAssetLoad(e):this._app.assets.load(e))}_unbindLocalizedAsset(){const e=this._app.assets.get(this._localizedAsset);e&&(e.off("load",this._onLocalizedAssetLoad,this),e.off("change",this._onLocalizedAssetChange,this),e.off("remove",this._onLocalizedAssetRemove,this))}_onLocalizedAssetAdd(e){this._localizedAsset===e.id&&this._bindLocalizedAsset()}_onLocalizedAssetLoad(e){this.fire("load",e)}_onLocalizedAssetChange(e,t,s,i){this.fire("change",e,t,s,i)}_onLocalizedAssetRemove(e){this._localizedAsset===e.id&&(this.localizedAsset=this._defaultAsset),this.fire("remove",e)}_onLocaleAdd(e,t){this._app.i18n.locale===e&&this._onSetLocale(e)}_onLocaleRemove(e,t){this._app.i18n.locale===e&&this._onSetLocale(e)}_onSetLocale(e){if(!this._defaultAsset){this.localizedAsset=null;return}const t=this._app.assets.get(this._defaultAsset);if(!t||this._disableLocalization){this.localizedAsset=this._defaultAsset;return}const s=t.getLocalizedAssetId(e);if(!s){this.localizedAsset=this._defaultAsset;return}this.localizedAsset=s}destroy(){this.defaultAsset=null,this._app.i18n.off("set:locale",this._onSetLocale,this),this.off()}}const il="msdf",jC="bitmap",Cr=0,In=1,Bc=2,i_=3,kc=4,zc=5,Uc=6,Nc=7,Lf=8,YC=` 	
\r\v\f`,$C=/[A-Z|a-z|0-9|_|-|/]/;class KC{constructor(e){this._symbols=e,this._index=0,this._last=0,this._cur=this._symbols.length>0?this._symbols[0]:null,this._buf=[],this._mode="text",this._error=null}read(){let e=this._read();for(;e===Lf;)e=this._read();return e!==Cr&&e!==In&&(this._last=this._index),e}buf(){return this._buf}last(){return this._last}error(){return this._error}debugPrint(){const e=["EOF","ERROR","TEXT","OPEN_BRACKET","CLOSE_BRACKET","EQUALS","STRING","IDENTIFIER","WHITESPACE"];let t=this.read(),s="";for(;s+=(s.length>0?`
`:"")+e[t]+" '"+this.buf().join("")+"'",!(t===Cr||t===In);)t=this.read();return s}_read(){return this._buf=[],this._eof()?Cr:this._mode==="text"?this._text():this._tag()}_text(){for(;;)switch(this._cur){case null:return this._buf.length>0?Bc:Cr;case"[":return this._mode="tag",this._buf.length>0?Bc:this._tag();case"\\":switch(this._next(),this._cur){case"[":this._store();break;default:this._output("\\");break}break;default:this._store();break}}_tag(){switch(this._cur){case null:return this._error="unexpected end of input reading tag",In;case"[":return this._store(),i_;case"]":return this._store(),this._mode="text",kc;case"=":return this._store(),zc;case" ":case"	":case`
        #ifdef MAPFLOAT
        uniform float material_clearCoatGlossiness;
        #endif
        
        void getClearCoatGlossiness() {
            ccGlossiness = 1.0;
        
        #ifdef MAPFLOAT
            ccGlossiness *= material_clearCoatGlossiness;
        #endif
        
        #ifdef MAPTEXTURE
            ccGlossiness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
        #endif
        
        #ifdef MAPVERTEX
            ccGlossiness *= saturate(vVertexColor.$VC);
        #endif
        
            ccGlossiness = 1.0 - ccGlossiness;
        
            ccGlossiness += 0.0000001;
        }
        `;t.chunks.clearCoatGlossPS=i},e1=function(e,t,s){t.useLighting=!1,t.emissive.copy(t.diffuse),t.emissiveTint=t.diffuseTint,t.emissiveMap=t.diffuseMap,t.emissiveMapUv=t.diffuseMapUv,t.emissiveMapTiling.copy(t.diffuseMapTiling),t.emissiveMapOffset.copy(t.diffuseMapOffset),t.emissiveMapRotation=t.diffuseMapRotation,t.emissiveMapChannel=t.diffuseMapChannel,t.emissiveVertexColor=t.diffuseVertexColor,t.emissiveVertexColorChannel=t.diffuseVertexColorChannel,t.diffuse.set(0,0,0),t.diffuseTint=!1,t.diffuseMap=null,t.diffuseVertexColor=!1},t1=function(e,t,s){if(t.useMetalnessSpecularColor=!0,e.hasOwnProperty("specularColorTexture")&&(t.specularEncoding="srgb",t.specularMap=s[e.specularColorTexture.index],t.specularMapChannel="rgb",Je(e.specularColorTexture,t,["specular"])),e.hasOwnProperty("specularColorFactor")){const i=e.specularColorFactor;t.specular.set(Math.pow(i[0],1/2.2),Math.pow(i[1],1/2.2),Math.pow(i[2],1/2.2))}else t.specular.set(1,1,1);e.hasOwnProperty("specularFactor")?t.specularityFactor=e.specularFactor:t.specularityFactor=1,e.hasOwnProperty("specularTexture")&&(t.specularityFactorMapChannel="a",t.specularityFactorMap=s[e.specularTexture.index],Je(e.specularTexture,t,["specularityFactor"]))},s1=function(e,t,s){e.hasOwnProperty("ior")&&(t.refractionIndex=1/e.ior)},i1=function(e,t,s){t.blendType=yt,t.useDynamicRefraction=!0,e.hasOwnProperty("transmissionFactor")&&(t.refraction=e.transmissionFactor),e.hasOwnProperty("transmissionTexture")&&(t.refractionMapChannel="r",t.refractionMap=s[e.transmissionTexture.index],Je(e.transmissionTexture,t,["refraction"]))},n1=function(e,t,s){if(t.useSheen=!0,e.hasOwnProperty("sheenColorFactor")){const n=e.sheenColorFactor;t.sheen.set(Math.pow(n[0],1/2.2),Math.pow(n[1],1/2.2),Math.pow(n[2],1/2.2))}else t.sheen.set(1,1,1);e.hasOwnProperty("sheenColorTexture")&&(t.sheenMap=s[e.sheenColorTexture.index],t.sheenEncoding="srgb",Je(e.sheenColorTexture,t,["sheen"])),e.hasOwnProperty("sheenRoughnessFactor")?t.sheenGlossiness=e.sheenRoughnessFactor:t.sheenGlossiness=0,e.hasOwnProperty("sheenRoughnessTexture")&&(t.sheenGlossinessMap=s[e.sheenRoughnessTexture.index],t.sheenGlossinessMapChannel="a",Je(e.sheenRoughnessTexture,t,["sheenGlossiness"]));const i=`
    #ifdef MAPFLOAT
    uniform float material_sheenGlossiness;
    #endif

    #ifdef MAPTEXTURE
    uniform sampler2D texture_sheenGlossinessMap;
    #endif

    void getSheenGlossiness() {
        float sheenGlossiness = 1.0;

        #ifdef MAPFLOAT
        sheenGlossiness *= material_sheenGlossiness;
        #endif

        #ifdef MAPTEXTURE
        sheenGlossiness *= texture2DBias(texture_sheenGlossinessMap, $UV, textureBias).$CH;
        #endif

        #ifdef MAPVERTEX
        sheenGlossiness *= saturate(vVertexColor.$VC);
        #endif

        sheenGlossiness = 1.0 - sheenGlossiness;
        sheenGlossiness += 0.0000001;
        sGlossiness = sheenGlossiness;
    }
    `;t.chunks.sheenGlossPS=i},r1=function(e,t,s){if(t.blendType=yt,t.useDynamicRefraction=!0,e.hasOwnProperty("thicknessFactor")&&(t.thickness=e.thicknessFactor),e.hasOwnProperty("thicknessTexture")&&(t.thicknessMap=s[e.thicknessTexture.index],Je(e.thicknessTexture,t,["thickness"])),e.hasOwnProperty("attenuationDistance")&&(t.attenuationDistance=e.attenuationDistance),e.hasOwnProperty("attenuationColor")){const i=e.attenuationColor;t.attenuation.set(Math.pow(i[0],1/2.2),Math.pow(i[1],1/2.2),Math.pow(i[2],1/2.2))}},a1=function(e,t,s){e.hasOwnProperty("emissiveStrength")&&(t.emissiveIntensity=e.emissiveStrength)},o1=function(e,t,s){t.useIridescence=!0,e.hasOwnProperty("iridescenceFactor")&&(t.iridescence=e.iridescenceFactor),e.hasOwnProperty("iridescenceTexture")&&(t.iridescenceMapChannel="r",t.iridescenceMap=s[e.iridescenceTexture.index],Je(e.iridescenceTexture,t,["iridescence"])),e.hasOwnProperty("iridescenceIor")&&(t.iridescenceRefractionIndex=e.iridescenceIor),e.hasOwnProperty("iridescenceThicknessMinimum")&&(t.iridescenceThicknessMin=e.iridescenceThicknessMinimum),e.hasOwnProperty("iridescenceThicknessMaximum")&&(t.iridescenceThicknessMax=e.iridescenceThicknessMaximum),e.hasOwnProperty("iridescenceThicknessTexture")&&(t.iridescenceThicknessMapChannel="g",t.iridescenceThicknessMap=s[e.iridescenceThicknessTexture.index],Je(e.iridescenceThicknessTexture,t,["iridescenceThickness"]))},V_=function(e,t,s){const i=`
        #ifdef MAPFLOAT
        uniform float material_shininess;
        #endif
        
        void getGlossiness() {
            dGlossiness = 1.0;
        
        #ifdef MAPFLOAT
            dGlossiness *= material_shininess;
        #endif
        
        #ifdef MAPTEXTURE
            dGlossiness *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
        #endif
        
        #ifdef MAPVERTEX
            dGlossiness *= saturate(vVertexColor.$VC);
        #endif
        
            dGlossiness = 1.0 - dGlossiness;
        
            dGlossiness += 0.0000001;
        }
        `,n=new is;n.occludeSpecular=Zr,n.diffuseTint=!0,n.diffuseVertexColor=!0,n.specularTint=!0,n.specularVertexColor=!0,n.chunks.APIVersion=ay,e.hasOwnProperty("name")&&(n.name=e.name);let r,a;if(e.hasOwnProperty("pbrMetallicRoughness")){const h=e.pbrMetallicRoughness;if(h.hasOwnProperty("baseColorFactor")?(r=h.baseColorFactor,n.diffuse.set(Math.pow(r[0],1/2.2),Math.pow(r[1],1/2.2),Math.pow(r[2],1/2.2)),n.opacity=r[3]):(n.diffuse.set(1,1,1),n.opacity=1),h.hasOwnProperty("baseColorTexture")){const c=h.baseColorTexture;a=t[c.index],n.diffuseMap=a,n.diffuseMapChannel="rgb",n.opacityMap=a,n.opacityMapChannel="a",Je(c,n,["diffuse","opacity"])}if(n.useMetalness=!0,n.specular.set(1,1,1),h.hasOwnProperty("metallicFactor")?n.metalness=h.metallicFactor:n.metalness=1,h.hasOwnProperty("roughnessFactor")?n.shininess=100*h.roughnessFactor:n.shininess=100,h.hasOwnProperty("metallicRoughnessTexture")){const c=h.metallicRoughnessTexture;n.metalnessMap=n.glossMap=t[c.index],n.metalnessMapChannel="b",n.glossMapChannel="g",Je(c,n,["gloss","metalness"])}n.chunks.glossPS=i}if(e.hasOwnProperty("normalTexture")){const h=e.normalTexture;n.normalMap=t[h.index],Je(h,n,["normal"]),h.hasOwnProperty("scale")&&(n.bumpiness=h.scale)}if(e.hasOwnProperty("occlusionTexture")){const h=e.occlusionTexture;n.aoMap=t[h.index],n.aoMapChannel="r",Je(h,n,["ao"])}if(e.hasOwnProperty("emissiveFactor")?(r=e.emissiveFactor,n.emissive.set(Math.pow(r[0],1/2.2),Math.pow(r[1],1/2.2),Math.pow(r[2],1/2.2)),n.emissiveTint=!0):(n.emissive.set(0,0,0),n.emissiveTint=!1),e.hasOwnProperty("emissiveTexture")){const h=e.emissiveTexture;n.emissiveMap=t[h.index],Je(h,n,["emissive"])}if(e.hasOwnProperty("alphaMode"))switch(e.alphaMode){case"MASK":n.blendType=Vt,e.hasOwnProperty("alphaCutoff")?n.alphaTest=e.alphaCutoff:n.alphaTest=.5;break;case"BLEND":n.blendType=yt,n.depthWrite=!1;break;default:case"OPAQUE":n.blendType=Vt;break}else n.blendType=Vt;e.hasOwnProperty("doubleSided")?(n.twoSidedLighting=e.doubleSided,n.cull=e.doubleSided?_t:Xn):(n.twoSidedLighting=!1,n.cull=Xn);const o={KHR_materials_clearcoat:QM,KHR_materials_emissive_strength:a1,KHR_materials_ior:s1,KHR_materials_iridescence:o1,KHR_materials_pbrSpecularGlossiness:JM,KHR_materials_sheen:n1,KHR_materials_specular:t1,KHR_materials_transmission:i1,KHR_materials_unlit:e1,KHR_materials_volume:r1};if(e.hasOwnProperty("extensions"))for(const h in e.extensions){const c=o[h];c!==void 0&&c(e.extensions[h],n,t)}return n.update(),n},l1=function(e,t,s,i,n,r){const a=function(P){return new ol(ll(P.type),Yc(P,i))},o={STEP:Um,LINEAR:Ac,CUBICSPLINE:Mc},h={},c={},d={};let u=1,f;for(f=0;f<e.samplers.length;++f){const x=e.samplers[f];h.hasOwnProperty(x.input)||(h[x.input]=a(s[x.input])),c.hasOwnProperty(x.output)||(c[x.output]=a(s[x.output]));const P=x.hasOwnProperty("interpolation")&&o.hasOwnProperty(x.interpolation)?o[x.interpolation]:Ac,I={paths:[],input:x.input,output:x.output,interpolation:P};d[f]=I}const p=[],_={translation:"localPosition",rotation:"localRotation",scale:"localScale"},m=x=>{const P=[];for(;x;)P.unshift(x.name),x=x.parent;return P},g=(x,P)=>{if(!r)return P;for(let I=0;I<r.length;I++){const E=r[I];if(E.name===x&&E.hasOwnProperty("extras")&&E.extras.hasOwnProperty("targetNames")&&E.extras.targetNames[P])return`name.${E.extras.targetNames[P]}`}return P},w=(x,P,I)=>{if(!c[x.output])return;const E=c[x.output].data.length/h[x.input].data.length,O=c[x.output].data.length/E;for(let D=0;D<E;D++){const U=new Float32Array(O);for(let R=0;R<O;R++)U[R]=c[x.output].data[R*E+D];const W=new ol(1,U);c[-u]=W;const M={paths:[{entityPath:I,component:"graph",propertyPath:[`weight.${g(P.name,D)}`]}],input:x.input,output:-u,interpolation:x.interpolation};u++,d[`morphCurve-${f}-${D}`]=M}};for(f=0;f<e.channels.length;++f){const x=e.channels[f],P=x.target,I=d[x.sampler],E=n[P.node],O=m(E);P.path.startsWith("weights")?(w(I,E,O),d[x.sampler].morphCurve=!0):I.paths.push({entityPath:O,component:"graph",propertyPath:[_[P.path]]})}const v=[],y=[],T=[];for(const x in h)v.push(h[x]),h[x]=v.length-1;for(const x in c)y.push(c[x]),c[x]=y.length-1;for(const x in d){const P=d[x];P.morphCurve||(T.push(new B_(P.paths,h[P.input],c[P.output],P.interpolation)),P.paths.length>0&&P.paths[0].propertyPath[0]==="localRotation"&&P.interpolation!==Mc&&p.push(T[T.length-1].output))}p.sort();let C=null,S;for(f=0;f<p.length;++f){const x=p[f];if(f===0||x!==C){if(S=y[x],S.components===4){const P=S.data,I=P.length-4;for(let E=0;E<I;E+=4)P[E+0]*P[E+4]+P[E+1]*P[E+5]+P[E+2]*P[E+6]+P[E+3]*P[E+7]<0&&(P[E+4]*=-1,P[E+5]*=-1,P[E+6]*=-1,P[E+7]*=-1)}C=x}}let A=0;for(f=0;f<v.length;f++)S=v[f]._data,A=Math.max(A,S.length===0?0:S[S.length-1]);return new kl(e.hasOwnProperty("name")?e.name:"animation_"+t,A,v,y,T)},h1=function(e,t){const s=new Qe;if(e.hasOwnProperty("name")&&e.name.length>0?s.name=e.name:s.name="node_"+t,e.hasOwnProperty("matrix")&&(eo.data.set(e.matrix),eo.getTranslation(An),s.setLocalPosition(An),eo.getEulerAngles(An),s.setLocalEulerAngles(An),eo.getScale(An),s.setLocalScale(An)),e.hasOwnProperty("rotation")){const i=e.rotation;s.setLocalRotation(i[0],i[1],i[2],i[3])}if(e.hasOwnProperty("translation")){const i=e.translation;s.setLocalPosition(i[0],i[1],i[2])}if(e.hasOwnProperty("scale")){const i=e.scale;s.setLocalScale(i[0],i[1],i[2])}return s},c1=function(e,t){const s=e.type==="orthographic"?Un:os,i=s===Un?e.orthographic:e.perspective,n={enabled:!1,projection:s,nearClip:i.znear,aspectRatioMode:md};i.zfar&&(n.farClip=i.zfar),s===Un?(n.orthoHeight=.5*i.ymag,i.ymag&&(n.aspectRatioMode=xc,n.aspectRatio=i.xmag/i.ymag)):(n.fov=i.yfov*k.RAD_TO_DEG,i.aspectRatio&&(n.aspectRatioMode=xc,n.aspectRatio=i.aspectRatio));const r=new be(e.name);return r.addComponent("camera",n),r},d1=function(e,t){const s={enabled:!1,type:e.type==="point"?"omni":e.type,color:e.hasOwnProperty("color")?new G(e.color):G.WHITE,range:e.hasOwnProperty("range")?e.range:9999,falloffMode:l0,intensity:e.hasOwnProperty("intensity")?k.clamp(e.intensity,0,2):1};e.hasOwnProperty("spot")&&(s.innerConeAngle=e.spot.hasOwnProperty("innerConeAngle")?e.spot.innerConeAngle*k.RAD_TO_DEG:0,s.outerConeAngle=e.spot.hasOwnProperty("outerConeAngle")?e.spot.outerConeAngle*k.RAD_TO_DEG:Math.PI/4),e.hasOwnProperty("intensity")&&(s.luminance=e.intensity*ta.getLightUnitConversion(bc[s.type],s.outerConeAngle,s.innerConeAngle));const i=new be(t.name);return i.rotateLocal(90,0,0),i.addComponent("light",s),i},u1=function(e,t,s,i){if(!t.hasOwnProperty("skins")||t.skins.length===0)return[];const n=new Map;return t.skins.map(function(r){return KM(e,r,t.accessors,i,s,n)})},f1=function(e,t,s,i,n,r,a,o){if(!t.hasOwnProperty("meshes")||t.meshes.length===0||!t.hasOwnProperty("accessors")||t.accessors.length===0||!t.hasOwnProperty("bufferViews")||t.bufferViews.length===0)return[];const h={};return t.meshes.map(function(c){return ZM(e,c,t.accessors,s,i,n,h,r,a,o)})},p1=function(e,t,s,i){if(!e.hasOwnProperty("materials")||e.materials.length===0)return[];const n=s&&s.material&&s.material.preprocess,r=s&&s.material&&s.material.process||V_,a=s&&s.material&&s.material.postprocess;return e.materials.map(function(o){n&&n(o);const h=r(o,t,i);return a&&a(o,h),h})},m1=function(e){if(!e.hasOwnProperty("extensions")||!e.extensions.hasOwnProperty("KHR_materials_variants"))return null;const t=e.extensions.KHR_materials_variants.variants,s={};for(let i=0;i<t.length;i++)s[t[i].name]=i;return s},_1=function(e,t,s,i){if(!e.hasOwnProperty("animations")||e.animations.length===0)return[];const n=i&&i.animation&&i.animation.preprocess,r=i&&i.animation&&i.animation.postprocess;return e.animations.map(function(a,o){n&&n(a);const h=l1(a,o,e.accessors,s,t,e.meshes);return r&&r(a,h),h})},g1=function(e,t){if(!e.hasOwnProperty("nodes")||e.nodes.length===0)return[];const s=t&&t.node&&t.node.preprocess,i=t&&t.node&&t.node.process||h1,n=t&&t.node&&t.node.postprocess,r=e.nodes.map(function(a,o){s&&s(a);const h=i(a,o);return n&&n(a,h),h});for(let a=0;a<e.nodes.length;++a){const o=e.nodes[a];if(o.hasOwnProperty("children")){const h=r[a],c={};for(let d=0;d<o.children.length;++d){const u=r[o.children[d]];u.parent||(c.hasOwnProperty(u.name)?u.name+=c[u.name]++:c[u.name]=1,h.addChild(u))}}}return r},y1=function(e,t){var s;const i=[],n=e.scenes.length;if(n===1&&((s=e.scenes[0].nodes)==null?void 0:s.length)===1){const r=e.scenes[0].nodes[0];i.push(t[r])}else for(let r=0;r<n;r++){const a=e.scenes[r];if(a.nodes){const o=new Qe(a.name);for(let h=0;h<a.nodes.length;h++){const c=t[a.nodes[h]];o.addChild(c)}i.push(o)}}return i},x1=function(e,t,s){let i=null;if(e.hasOwnProperty("nodes")&&e.hasOwnProperty("cameras")&&e.cameras.length>0){const n=s&&s.camera&&s.camera.preprocess,r=s&&s.camera&&s.camera.process||c1,a=s&&s.camera&&s.camera.postprocess;e.nodes.forEach(function(o,h){if(o.hasOwnProperty("camera")){const c=e.cameras[o.camera];if(c){n&&n(c);const d=r(c,t[h]);a&&a(c,d),d&&(i||(i=new Map),i.set(o,d))}}})}return i},v1=function(e,t,s){let i=null;if(e.hasOwnProperty("nodes")&&e.hasOwnProperty("extensions")&&e.extensions.hasOwnProperty("KHR_lights_punctual")&&e.extensions.KHR_lights_punctual.hasOwnProperty("lights")){const n=e.extensions.KHR_lights_punctual.lights;if(n.length){const r=s&&s.light&&s.light.preprocess,a=s&&s.light&&s.light.process||d1,o=s&&s.light&&s.light.postprocess;e.nodes.forEach(function(h,c){if(h.hasOwnProperty("extensions")&&h.extensions.hasOwnProperty("KHR_lights_punctual")&&h.extensions.KHR_lights_punctual.hasOwnProperty("light")){const d=h.extensions.KHR_lights_punctual.light,u=n[d];if(u){r&&r(u);const f=a(u,t[c]);o&&o(u,f),f&&(i||(i=new Map),i.set(h,f))}}})}}return i},S1=function(e,t,s){e.nodes.forEach(i=>{i.hasOwnProperty("mesh")&&i.hasOwnProperty("skin")&&t[i.mesh].meshes.forEach(r=>{r.skin=s[i.skin]})})},tp=function(e,t,s,i,n,r){const a=n&&n.global&&n.global.preprocess,o=n&&n.global&&n.global.postprocess;a&&a(t);const h=t.asset&&t.asset.generator==="PlayCanvas",c=g1(t,n),d=y1(t,c),u=v1(t,c,n),f=x1(t,c,n),p=_1(t,c,s,n),_=p1(t,i.map(function(S){return S.resource}),n,h),m=m1(t),g={},w={},v=f1(e,t,s,r,h,g,w,n),y=u1(e,t,c,s),T=[];for(let S=0;S<v.length;S++)T[S]=new O_,T[S].meshes=v[S];S1(t,T,y);const C=new zM(t);C.nodes=c,C.scenes=d,C.animations=p,C.textures=i,C.materials=_,C.variants=m,C.meshVariants=g,C.meshDefaultMaterials=w,C.renders=T,C.skins=y,C.lights=u,C.cameras=f,o&&o(t,C),r(null,C)},b1=function(e,t){const s=function(r,a){switch(r){case 9728:return ve;case 9729:return $e;case 9984:return pl;case 9985:return _l;case 9986:return ml;case 9987:return Xi;default:return a}},i=function(r,a){switch(r){case 33071:return se;case 33648:return ed;case 10497:return it;default:return a}};e&&(t=t||{},e.minFilter=s(t.minFilter,Xi),e.magFilter=s(t.magFilter,$e),e.addressU=i(t.wrapS,it),e.addressV=i(t.wrapT,it))};let w1=0;const T1=function(e,t,s,i,n,r,a){const o=r&&r.image&&r.image.preprocess,h=r&&r.image&&r.image.processAsync||function(p,_){_(null,null)},c=r&&r.image&&r.image.postprocess,d=function(_){c&&c(e,_),a(null,_)},u={"image/png":"png","image/jpeg":"jpg","image/basis":"basis","image/ktx":"ktx","image/ktx2":"ktx2","image/vnd-ms.dds":"dds"},f=function(_,m,g,w){const v=(e.name||"gltf-texture")+"-"+w1++,y={url:_||v};if(m&&(y.contents=m.slice(0).buffer),g){const C=u[g];C&&(y.filename=y.url+"."+C)}const T=new ne(v,"texture",y,null,w);T.on("load",d),T.on("error",a),n.add(T),n.load(T)};o&&o(e),h(e,function(p,_){p?a(p):_?d(_):e.hasOwnProperty("uri")?z_(e.uri)?f(e.uri,null,UM(e.uri),null):f(re.join(i,e.uri),null,null,{crossOrigin:"anonymous"}):e.hasOwnProperty("bufferView")&&e.hasOwnProperty("mimeType")?f(null,s[e.bufferView],e.mimeType,null):a("Invalid image found in gltf (neither uri or bufferView found). index="+t)})},C1=function(e,t,s,i,n,r){if(!e.hasOwnProperty("images")||e.images.length===0||!e.hasOwnProperty("textures")||e.textures.length===0){r(null,[]);return}const a=n&&n.texture&&n.texture.preprocess,o=n&&n.texture&&n.texture.processAsync||function(p,_,m){m(null,null)},h=n&&n.texture&&n.texture.postprocess,c=[],d=[];let u=e.textures.length;const f=function(_,m){if(d[m]||(d[m]=[]),d[m].push(_),--u===0){const g=[];d.forEach(function(w,v){w.forEach(function(y,T){const C=T===0?c[v]:jM(c[v]);b1(C.resource,(e.samplers||[])[e.textures[y].sampler]),g[y]=C,h&&h(e.textures[y],C)})}),r(null,g)}};for(let p=0;p<e.textures.length;++p){const _=e.textures[p];a&&a(_),o(_,e.images,function(m,g,w,v){if(w)r(w);else{if(v==null){var y,T;v=g==null||(y=g.extensions)==null||(T=y.KHR_texture_basisu)==null?void 0:T.source,v===void 0&&(v=g.source)}if(c[v])f(m,v);else{const C=e.images[v];T1(C,m,t,s,i,n,function(S,A){S?r(S):(c[v]=A,f(m,v))})}}}.bind(null,p,_))}},A1=function(e,t,s,i,n){const r=[];if(!e.buffers||e.buffers.length===0){n(null,r);return}const a=i&&i.buffer&&i.buffer.preprocess,o=i&&i.buffer&&i.buffer.processAsync||function(u,f){f(null,null)},h=i&&i.buffer&&i.buffer.postprocess;let c=e.buffers.length;const d=function(f,p){r[f]=p,h&&h(e.buffers[f],p),--c===0&&n(null,r)};for(let u=0;u<e.buffers.length;++u){const f=e.buffers[u];a&&a(f),o(f,function(p,_,m,g){if(m)n(m);else if(g)d(p,new Uint8Array(g));else if(_.hasOwnProperty("uri"))if(z_(_.uri)){const w=atob(_.uri.split(",")[1]),v=new Uint8Array(w.length);for(let y=0;y<w.length;y++)v[y]=w.charCodeAt(y);d(p,v)}else De.get(re.join(s,_.uri),{cache:!0,responseType:"arraybuffer",retry:!1},function(w,v,y){v?n(v):d(w,new Uint8Array(y))}.bind(null,p));else d(p,t)}.bind(null,u,f))}},sp=function(e,t){const i=JSON.parse(function(a){if(typeof TextDecoder<"u")return new TextDecoder().decode(a);let o="";for(let h=0;h<a.length;h++)o+=String.fromCharCode(a[h]);return decodeURIComponent(escape(o))}(e));if(i.asset&&i.asset.version&&parseFloat(i.asset.version)<2){t(`Invalid gltf version. Expected version 2.0 or above but found version '${i.asset.version}'.`);return}const n=(i==null?void 0:i.extensionsRequired)||[];!qc&&!k_()&&n.indexOf("KHR_draco_mesh_compression")!==-1?vg.getInstance("DracoDecoderModule",r=>{qc=r,t(null,i)}):t(null,i)},M1=function(e,t){const s=e instanceof ArrayBuffer?new DataView(e):new DataView(e.buffer,e.byteOffset,e.byteLength),i=s.getUint32(0,!0),n=s.getUint32(4,!0),r=s.getUint32(8,!0);if(i!==1179937895){t("Invalid magic number found in glb header. Expected 0x46546C67, found 0x"+i.toString(16));return}if(n!==2){t("Invalid version number found in glb header. Expected 2, found "+n);return}if(r<=0||r>s.byteLength){t("Invalid length found in glb header. Found "+r);return}const a=[];let o=12;for(;o<r;){const h=s.getUint32(o,!0);if(o+h+8>s.byteLength)throw new Error("Invalid chunk length found in glb. Found "+h);const c=s.getUint32(o+4,!0),d=new Uint8Array(s.buffer,s.byteOffset+o+8,h);a.push({length:h,type:c,data:d}),o+=h+8}if(a.length!==1&&a.length!==2){t("Invalid number of chunks found in glb file.");return}if(a[0].type!==1313821514){t("Invalid chunk type found in glb file. Expected 0x4E4F534A, found 0x"+a[0].type.toString(16));return}if(a.length>1&&a[1].type!==5130562){t("Invalid chunk type found in glb file. Expected 0x004E4942, found 0x"+a[1].type.toString(16));return}t(null,{gltfChunk:a[0].data,binaryChunk:a.length===2?a[1].data:null})},ip=function(e,t,s){const i=()=>{const n=new Uint8Array(t);return n[0]===103&&n[1]===108&&n[2]===84&&n[3]===70};e&&e.toLowerCase().endsWith(".glb")||i()?M1(t,s):s(null,{gltfChunk:t,binaryChunk:null})},np=function(e,t,s,i){const n=[],r=s&&s.bufferView&&s.bufferView.preprocess,a=s&&s.bufferView&&s.bufferView.processAsync||function(d,u,f){f(null,null)},o=s&&s.bufferView&&s.bufferView.postprocess;let h=e.bufferViews?e.bufferViews.length:0;if(!h){i(null,null);return}const c=function(u,f){const p=e.bufferViews[u];p.hasOwnProperty("byteStride")&&(f.byteStride=p.byteStride),n[u]=f,o&&o(p,f),--h===0&&i(null,n)};for(let d=0;d<e.bufferViews.length;++d){const u=e.bufferViews[d];r&&r(u),a(u,t,function(f,p,_,m){if(_)i(_);else if(m)c(f,m);else{const g=t[p.buffer],w=new Uint8Array(g.buffer,g.byteOffset+(p.byteOffset||0),p.byteLength);c(f,w)}}.bind(null,d,u))}};class fa{static parseAsync(e,t,s,i,n,r,a){ip(e,s,function(o,h){if(o){a(o);return}sp(h.gltfChunk,function(c,d){if(c){a(c);return}A1(d,h.binaryChunk,t,r,function(u,f){if(u){a(u);return}np(d,f,r,function(p,_){if(p){a(p);return}C1(d,_,t,n,r,function(m,g){if(m){a(m);return}tp(i,d,_,g,r,a)})})})})})}static parse(e,t,s,i){let n=null;return i=i||{},ip(e,t,function(r,a){r?console.error(r):sp(a.gltfChunk,function(o,h){o?console.error(o):np(h,[a.binaryChunk],i,function(c,d){c?console.error(c):tp(s,h,d,[],i,function(u,f){u?console.error(u):n=f})})})}),n}constructor(e,t,s){this._device=e,this._assets=t,this._defaultMaterial=V_({name:"defaultGlbMaterial"},[]),this.maxRetries=s}_getUrlWithoutParams(e){return e.indexOf("?")>=0?e.split("?")[0]:e}load(e,t,s){ne.fetchArrayBuffer(e.load,(i,n)=>{i?t(i):fa.parseAsync(this._getUrlWithoutParams(e.original),re.extractPath(e.load),n,this._device,s.registry,s.options,(r,a)=>{r?t(r):t(null,new oi(a,s,this._assets,this._defaultMaterial))})},s,this.maxRetries)}open(e,t,s){return t}patch(e,t){}}class P1{constructor(e){this.handlerType="animation",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};(e.load.startsWith("blob:")||e.load.startsWith("data:"))&&(re.getExtension(e.original).toLowerCase()===".glb"?s.responseType=de.ResponseType.ARRAY_BUFFER:s.responseType=de.ResponseType.JSON),De.get(e.load,s,function(i,n){i?t(`Error loading animation resource: ${e.original} [${i}]`):t(null,n)})}open(e,t,s){if(re.getExtension(e).toLowerCase()===".glb"){const n=fa.parse("filename.glb",t,null);if(n){var i;const r=n.animations;if(s!=null&&(i=s.data)!=null&&i.events)for(let a=0;a<r.length;a++)r[a].events=new Hm(Object.values(s.data.events));return n.destroy(),r}return null}return this["_parseAnimationV"+t.animation.version](t)}patch(e,t){}_parseAnimationV3(e){const t=e.animation,s=new cf;s.name=t.name,s.duration=t.duration;for(let i=0;i<t.nodes.length;i++){const n=new hf,r=t.nodes[i];n._name=r.name;for(let a=0;a<r.keys.length;a++){const o=r.keys[a],h=o.time,c=o.pos,d=o.rot,u=o.scale,f=new b(c[0],c[1],c[2]),p=new ee().setFromEulerAngles(d[0],d[1],d[2]),_=new b(u[0],u[1],u[2]),m=new lf(h,f,p,_);n._keys.push(m)}s.addNode(n)}return s}_parseAnimationV4(e){const t=e.animation,s=new cf;s.name=t.name,s.duration=t.duration;for(let i=0;i<t.nodes.length;i++){const n=new hf,r=t.nodes[i];n._name=r.name;const a=r.defaults.p,o=r.defaults.r,h=r.defaults.s;for(let c=0;c<r.keys.length;c++){const d=r.keys[c],u=d.t,f=a||d.p,p=o||d.r,_=h||d.s,m=new b(f[0],f[1],f[2]),g=new ee().setFromEulerAngles(p[0],p[1],p[2]),w=new b(_[0],_[1],_[2]),v=new lf(u,m,g,w);n._keys.push(v)}s.addNode(n)}return s}}class E1{constructor(e){this.handlerType="animclip",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};e.load.startsWith("blob:")&&(s.responseType=de.ResponseType.JSON),De.get(e.load,s,function(i,n){i?t(`Error loading animation clip resource: ${e.original} [${i}]`):t(null,n)})}open(e,t){const s=t.name,i=t.duration,n=t.inputs.map(function(o){return new ol(1,o)}),r=t.outputs.map(function(o){return new ol(o.components,o.data)}),a=t.curves.map(function(o){return new B_([o.path],o.inputIndex,o.outputIndex,o.interpolation)});return new kl(s,i,n,r,a)}patch(e,t){}}class R1{constructor(e){this.handlerType="animstategraph",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};e.load.startsWith("blob:")&&(s.responseType=de.ResponseType.JSON),De.get(e.load,s,function(i,n){i?t(`Error loading animation state graph resource: ${e.original} [${i}]`):t(null,n)})}open(e,t){return new po(t)}patch(e,t){}}const zh=function(){if(typeof window>"u")return!1;const l=window.navigator.userAgent,e=l.indexOf("MSIE ");if(e>0)return parseInt(l.substring(e+5,l.indexOf(".",e)),10);if(l.indexOf("Trident/")>0){const s=l.indexOf("rv:");return parseInt(l.substring(s+3,l.indexOf(".",s)),10)}return!1}(),I1=[".ogg",".mp3",".wav",".mp4a",".m4a",".mp4",".aac",".opus"];class L1{constructor(e){this.handlerType="audio",this.manager=e.soundManager,this.maxRetries=0}_isSupported(e){const t=re.getExtension(e);return I1.indexOf(t)>-1}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s=function(r){t(null,new Jy(r))},i=function(r){let a="Error loading audio url: "+e.original;r&&(a+=": "+(r.message||r)),console.warn(a),t(a)};if(this._createSound){if(!this._isSupported(e.original)){i(`Audio format for ${e.original} not supported`);return}this._createSound(e.load,s,i)}else i(null)}open(e,t){return t}patch(e,t){}_createSound(e,t,s){if(Ws()){const i=this.manager;if(!i.context){s("Audio manager has no audio context");return}const n={retry:this.maxRetries>0,maxRetries:this.maxRetries};(e.startsWith("blob:")||e.startsWith("data:"))&&(n.responseType=de.ResponseType.ARRAY_BUFFER),De.get(e,n,function(r,a){if(r){s(r);return}i.context.decodeAudioData(a,t,s)})}else{let i=null;try{i=new Audio}catch{s("No support for Audio element");return}zh&&document.body.appendChild(i);const n=function r(){i.removeEventListener("canplaythrough",r),zh&&document.body.removeChild(i),t(i)};i.onerror=function(){i.onerror=null,zh&&document.body.removeChild(i),s()},i.addEventListener("canplaythrough",n),i.src=e}}}class D1{constructor(e){this.handlerType="binary",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{responseType:de.ResponseType.ARRAY_BUFFER,retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(`Error loading binary resource: ${e.original} [${s}]`):t(null,i)})}open(e,t){return t}patch(e,t){}}class F1{constructor(e){this.handlerType="container",this.glbParser=new fa(e.graphicsDevice,e.assets,0),this.parsers={}}set maxRetries(e){this.glbParser.maxRetries=e;for(const t in this.parsers)this.parsers.hasOwnProperty(t)&&(this.parsers[t].maxRetries=e)}get maxRetries(){return this.glbParser.maxRetries}_getUrlWithoutParams(e){return e.indexOf("?")>=0?e.split("?")[0]:e}_getParser(e){const t=e?re.getExtension(this._getUrlWithoutParams(e)).toLowerCase().replace(".",""):null;return this.parsers[t]||this.glbParser}load(e,t,s){typeof e=="string"&&(e={load:e,original:e}),this._getParser(e.original).load(e,t,s)}open(e,t,s){return this._getParser(e).open(e,t,s)}patch(e,t){}}class O1{constructor(e){this.handlerType="css",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(`Error loading css resource: ${e.original} [${s}]`):t(null,i)})}open(e,t){return t}patch(e,t){}}class B1{constructor(e){this.handlerType="cubemap",this._device=e.graphicsDevice,this._registry=e.assets,this._loader=e.loader}load(e,t,s){this.loadAssets(s,t)}open(e,t,s){return s?s.resource:null}patch(e,t){this.loadAssets(e,function(s,i){s&&(t.fire("error",e),t.fire("error:"+e.id,s,e),e.fire("error",e))})}getAssetIds(e){const t=[];if(t[0]=e.file,(e.loadFaces||!e.file)&&e.data&&e.data.textures)for(let s=0;s<6;++s)t[s+1]=e.data.textures[s];else t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=null;return t}compareAssetIds(e,t){return e&&t?parseInt(e,10)===e||typeof e=="string"?e===t:e.url===t.url:e!==null==(t!==null)}update(e,t,s){const i=e.data||{},n=e._handlerState.assets,r=e._resources;let a,o,h;const c=[null,null,null,null,null,null,null],d=function(){return i.hasOwnProperty("type")?i.type:i.hasOwnProperty("rgbm")?i.rgbm?pi:Nt:null};if(!e.loaded||s[0]!==n[0]){if(s[0])for(a=s[0].resource,h=0;h<6;++h)c[h+1]=new ae(this._device,{name:e.name+"_prelitCubemap"+(a.width>>h),cubemap:!0,type:d()||a.type,width:a.width>>h,height:a.height>>h,format:a.format,levels:[a._levels[h]],fixCubemapSeams:!0,addressU:se,addressV:se,mipmaps:h===0})}else c[1]=r[1]||null,c[2]=r[2]||null,c[3]=r[3]||null,c[4]=r[4]||null,c[5]=r[5]||null,c[6]=r[6]||null;const u=s.slice(1);if(!e.loaded||!this.cmpArrays(u,n.slice(1))){if(u.indexOf(null)===-1){const f=u.map(function(g){return g.resource}),p=[];for(o=0;o<f[0]._levels.length;++o)p.push(f.map(function(g){return g._levels[o]}));const _=f[0].format,m=new ae(this._device,{name:e.name+"_faces",cubemap:!0,type:d()||f[0].type,width:f[0].width,height:f[0].height,format:_===ks?he:_,levels:p,minFilter:i.hasOwnProperty("minFilter")?i.minFilter:f[0].minFilter,magFilter:i.hasOwnProperty("magFilter")?i.magFilter:f[0].magFilter,anisotropy:i.hasOwnProperty("anisotropy")?i.anisotropy:1,addressU:se,addressV:se,fixCubemapSeams:!!s[0]});c[0]=m}}else c[0]=r[0]||null;if(!this.cmpArrays(c,r))for(e.resources=c,e._handlerState.assetIds=t,e._handlerState.assets=s,h=0;h<r.length;++h)r[h]!==null&&c.indexOf(r[h])===-1&&r[h].destroy();for(h=0;h<n.length;++h)n[h]!==null&&s.indexOf(n[h])===-1&&n[h].unload()}cmpArrays(e,t){if(e.length!==t.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==t[s])return!1;return!0}resolveId(e){const t=parseInt(e,10);return t===e||t.toString()===e?t:e}loadAssets(e,t){e.hasOwnProperty("_handlerState")||(e._handlerState={assetIds:[null,null,null,null,null,null,null],assets:[null,null,null,null,null,null,null]});const s=this,i=s.getAssetIds(e),n=[null,null,null,null,null,null,null],r=e._handlerState.assetIds,a=e._handlerState.assets,o=s._registry;let h=7;const c=function(_,m){n[_]=m,h--,h===0&&(s.update(e,i,n),t(null,e.resources))},d=function(_,m,g){t(m)},u=function(_,m){m.loaded?c(_,m):(o.once("load:"+m.id,c.bind(s,_)),o.once("error:"+m.id,d.bind(s,_)),m.loading||o.load(m))};let f;for(let p=0;p<7;++p){const _=this.resolveId(i[p]);if(!_)c(p,null);else if(s.compareAssetIds(_,r[p]))c(p,a[p]);else if(parseInt(_,10)===_)f=o.get(_),f?u(p,f):setTimeout(function(m,g){const w=o.get(g);w?u(m,w):d(m,"failed to find dependent cubemap asset="+g)}.bind(null,p,_));else{const m=typeof _=="string"?{url:_,filename:_}:_;f=new ne(e.name+"_part_"+p,"texture",m),o.add(f),o.once("load:"+f.id,c.bind(s,p)),o.once("error:"+f.id,d.bind(s,p)),o.load(f)}}}}class k1{constructor(){this.handlerType="folder"}load(e,t){t(null,null)}open(e,t){return t}}class rp{constructor(e,t){this.type=t&&t.type||il,this.em=1,this.textures=e,this.intensity=0,this._data=null,this.data=t}set data(e){if(this._data=e,!!e&&(this._data.intensity!==void 0&&(this.intensity=this._data.intensity),this._data.info||(this._data.info={}),(!this._data.version||this._data.version<2)&&(this._data.info.maps=[{width:this._data.info.width,height:this._data.info.height}],this._data.chars)))for(const t in this._data.chars)this._data.chars[t].map=0}get data(){return this._data}}function Uh(l){return l.version<3&&(l.version<2&&(l.info.maps=l.info.maps||[{width:l.info.width,height:l.info.height}]),l.chars=Object.keys(l.chars||{}).reduce(function(e,t){const s=l.chars[t],i=s.letter!==void 0?s.letter:ro.fromCodePoint(t);return l.version<2&&(s.map=s.map||0),e[i]=s,e},{}),l.version=3),l}class z1{constructor(e){this.handlerType="font",this._loader=e.loader,this.maxRetries=0}load(e,t,s){typeof e=="string"&&(e={load:e,original:e});const i=this;re.getExtension(e.original)===".json"?De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(n,r){if(n)t(`Error loading font resource: ${e.original} [${n}]`);else{const a=Uh(r);i._loadTextures(e.load.replace(".json",".png"),a,function(o,h){if(o)return t(o);t(null,{data:a,textures:h})})}}):(s&&s.data&&(s.data=Uh(s.data)),this._loadTextures(e.load,s&&s.data,t))}_loadTextures(e,t,s){const i=t.info.maps.length;let n=0,r=null;const a=new Array(i),o=this._loader,h=function(d){const u=function(p,_){if(!r){if(p)return r=p,s(p);_.upload(),a[d]=_,n++,n===i&&s(null,a)}};d===0?o.load(e,"texture",u):o.load(e.replace(".png",d+".png"),"texture",u)};for(let c=0;c<i;c++)h(c)}open(e,t,s){let i;return t.textures?i=new rp(t.textures,t.data):i=new rp(t,null),i}patch(e,t){const s=e.resource;!s.data&&e.data?s.data=e.data:!e.data&&s.data&&(e.data=s.data),e.data&&(e.data=Uh(e.data))}}const $c={setCompressedPRS:function(l,e,t){const s=t.singleVecs;let i,n;const r=e.___1;r||(i=t.tripleVecs,n=e.___2);let a=r?r[0]:i[n];l.setLocalPosition(s[a],s[a+1],s[a+2]),a=r?r[1]:i[n+1],l.setLocalEulerAngles(s[a],s[a+1],s[a+2]),a=r?r[2]:i[n+2],l.setLocalScale(s[a],s[a+1],s[a+2])},oneCharToKey:function(l,e){const t=l.charCodeAt(0)-e.fieldFirstCode;return e.fieldArray[t]},multCharToKey:function(l,e){let t=0;for(let s=0;s<l.length;s++)t=t*e.fieldCodeBase+l.charCodeAt(s)-e.fieldFirstCode;return e.fieldArray[t]}};class cl{constructor(e,t){this._node=e,this._data=t}run(){const e=Object.prototype.toString.call(this._node);return e==="[object Object]"?this._handleMap():e==="[object Array]"?this._handleArray():this._result=this._node,this._result}_handleMap(){this._result={},Object.keys(this._node).forEach(this._handleKey,this)}_handleKey(e){let t=e;const s=e.length;s===1?t=$c.oneCharToKey(e,this._data):s===2&&(t=$c.multCharToKey(e,this._data)),this._result[t]=new cl(this._node[e],this._data).run()}_handleArray(){this._result=[],this._node.forEach(this._handleArElt,this)}_handleArElt(e){const t=new cl(e,this._data).run();this._result.push(t)}}class Pd{constructor(e,t){this._app=e,this._isTemplate=t}parse(e){const t={};let s=null;const i=e.compressedFormat;i&&!e.entDecompressed&&(e.entDecompressed=!0,e.entities=new cl(e.entities,i).run());for(const n in e.entities){const r=e.entities[n],a=this._createEntity(r,i);t[n]=a,r.parent===null&&(s=a)}for(const n in e.entities){const r=t[n],a=e.entities[n].children,o=a.length;for(let h=0;h<o;h++){const c=t[a[h]];c&&r.addChild(c)}}return this._openComponentData(s,e.entities),s}_createEntity(e,t){const s=new be(e.name,this._app);if(s.setGuid(e.resource_id),this._setPosRotScale(s,e,t),s._enabled=e.enabled!==void 0?e.enabled:!0,this._isTemplate?s._template=!0:s._enabledInHierarchy=s._enabled,s.template=e.template,e.tags)for(let i=0;i<e.tags.length;i++)s.tags.add(e.tags[i]);return e.labels&&e.labels.forEach(function(i){s.addLabel(i)}),s}_setPosRotScale(e,t,s){if(s)$c.setCompressedPRS(e,t,s);else{const i=t.position,n=t.rotation,r=t.scale;e.setLocalPosition(i[0],i[1],i[2]),e.setLocalEulerAngles(n[0],n[1],n[2]),e.setLocalScale(r[0],r[1],r[2])}}_openComponentData(e,t){const s=this._app.systems.list;let i=s.length;const n=t[e.getGuid()];for(let a=0;a<i;a++){const o=s[a],h=n.components[o.id];h&&o.addComponent(e,h)}i=n.children.length;const r=e._children;for(let a=0;a<i;a++)r[a]=this._openComponentData(r[a],t);return e}}const G_={load:function(l,e,t){typeof l=="string"&&(l={load:l,original:l}),De.get(l.load,{retry:e>0,maxRetries:e},function(s,i){if(!s)t(s,i);else{let n="Error while loading scene JSON "+l.original;s.message?(n+=": "+s.message,s.stack&&(n+=`
`+s.stack)):n+=": "+s,t(n)}})}};class U1{constructor(e){this.handlerType="hierarchy",this._app=e,this.maxRetries=0}load(e,t){G_.load(e,this.maxRetries,t)}open(e,t){this._app.systems.script.preloading=!0;const i=new Pd(this._app,!1).parse(t);return this._app.systems.script.preloading=!1,i}}class N1{constructor(e){this.handlerType="html",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(`Error loading html resource: ${e.original} [${s}]`):t(null,i)})}open(e,t){return t}patch(e,t){}}class V1{constructor(e){this.handlerType="json",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};e.load.startsWith("blob:")&&(s.responseType=de.ResponseType.JSON),De.get(e.load,s,function(i,n){i?t(`Error loading JSON resource: ${e.original} [${i}]`):t(null,n)})}open(e,t){return t}patch(e,t){}}class G1{constructor(){this.removeInvalid=!0,this.valid=!0,this.enumValidators={occludeSpecular:this._createEnumValidator([v0,Zr,mc]),cull:this._createEnumValidator([_t,Xn,So,Dp]),blendType:this._createEnumValidator([e0,Do,yt,Vt,_i,Fo,Oo,hc,cc,dc,uc]),depthFunc:this._createEnumValidator([Lg,td,bo,gl,Dg,Fg,Og,Vi]),shadingModel:this._createEnumValidator([Ns,Ll])}}setInvalid(e,t){this.valid=!1,this.removeInvalid&&delete t[e]}validate(e){const t=Yn,s=bw,i=e.mappingFormat==="path";for(const n in e){const r=t[n];if(!r){s[n]?delete e[n]:this.valid=!1;continue}if(r.startsWith("enum")){const a=r.split(":")[1];this.enumValidators[a]&&(this.enumValidators[a](e[n])||this.setInvalid(n,e))}else if(r==="number")typeof e[n]!="number"&&this.setInvalid(n,e);else if(r==="boolean")typeof e[n]!="boolean"&&this.setInvalid(n,e);else if(r==="string")typeof e[n]!="string"&&this.setInvalid(n,e);else if(r==="vec2")e[n]instanceof Array&&e[n].length===2||this.setInvalid(n,e);else if(r==="rgb")e[n]instanceof Array&&e[n].length===3||this.setInvalid(n,e);else if(r==="texture")i?typeof e[n]=="string"||e[n]===null||e[n]instanceof ae||this.setInvalid(n,e):typeof e[n]=="number"||e[n]===null||e[n]instanceof ae||this.setInvalid(n,e);else if(r==="boundingbox")e[n].center&&e[n].center instanceof Array&&e[n].center.length===3||this.setInvalid(n,e),e[n].halfExtents&&e[n].halfExtents instanceof Array&&e[n].halfExtents.length===3||this.setInvalid(n,e);else if(r==="cubemap")typeof e[n]=="number"||e[n]===null||e[n]===void 0||e[n]instanceof ae&&e[n].cubemap||this.setInvalid(n,e);else if(r==="chunks"){const a=Object.keys(e[n]);for(let o=0;o<a.length;o++)typeof e[n][a[o]]!="string"&&this.setInvalid(a[o],e[n])}else console.error("Unknown material type: "+r)}return e.validated=!0,this.valid}_createEnumValidator(e){return function(t){return e.indexOf(t)>=0}}}class W1{constructor(){this._validator=null}parse(e){const t=this.migrate(e),s=this._validate(t),i=new is;return this.initialize(i,s),i}initialize(e,t){t.validated||(t=this._validate(t)),t.chunks&&(e.chunks=$i({},t.chunks));for(const s in t){const i=Yn[s],n=t[s];if(i==="vec2")e[s]=new V(n[0],n[1]);else if(i==="rgb")e[s]=new G(n[0],n[1],n[2]);else if(i==="texture")n instanceof ae?e[s]=n:e[s]instanceof ae&&typeof n=="number"&&n>0||(e[s]=null);else if(i==="cubemap")n instanceof ae?e[s]=n:e[s]instanceof ae&&typeof n=="number"&&n>0||(e[s]=null),s==="cubeMap"&&!n&&(e.prefilteredCubemaps=null);else if(i==="boundingbox"){const r=new b(n.center[0],n.center[1],n.center[2]),a=new b(n.halfExtents[0],n.halfExtents[1],n.halfExtents[2]);e[s]=new _e(r,a)}else e[s]=t[s]}e.update()}migrate(e){e.shadingModel===void 0&&(e.shader==="blinn"?e.shadingModel=Ll:e.shadingModel=Ns),e.shader&&delete e.shader,e.mapping_format&&(e.mappingFormat=e.mapping_format,delete e.mapping_format);let t;const s=[["bumpMapFactor","bumpiness"],["aoUvSet","aoMapUv"],["aoMapVertexColor","aoVertexColor"],["diffuseMapVertexColor","diffuseVertexColor"],["emissiveMapVertexColor","emissiveVertexColor"],["specularMapVertexColor","specularVertexColor"],["metalnessMapVertexColor","metalnessVertexColor"],["opacityMapVertexColor","opacityVertexColor"],["glossMapVertexColor","glossVertexColor"],["lightMapVertexColor","lightVertexColor"],["diffuseMapTint","diffuseTint"],["specularMapTint","specularTint"],["emissiveMapTint","emissiveTint"],["metalnessMapTint","metalnessTint"]];for(t=0;t<s.length;t++){const n=s[t][0],r=s[t][1];e[n]!==void 0&&e[r]===void 0&&(e[r]=e[n],delete e[n])}const i=["fresnelFactor","shadowSampleType"];for(t=0;t<i.length;t++){const n=i[t];e.hasOwnProperty(n)&&delete e[n]}return e}_validate(e){return e.validated||(this._validator||(this._validator=new G1),this._validator.validate(e)),e}}const H1={aoMap:"white",diffuseMap:"gray",specularMap:"gray",specularityFactorMap:"white",metalnessMap:"black",glossMap:"gray",sheenMap:"black",sheenGlossinessMap:"gray",clearCoatMap:"black",clearCoatGlossMap:"gray",clearCoatNormalMap:"normal",refractionMap:"white",emissiveMap:"gray",normalMap:"normal",heightMap:"gray",opacityMap:"gray",sphereMap:"gray",lightMap:"white"};class X1{constructor(e){this.handlerType="material",this._assets=e.assets,this._device=e.graphicsDevice,this._placeholderTextures=null,this._parser=new W1,this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t&&t(`Error loading material: ${e.original} [${s}]`):t&&(i._engine=!0,t(null,i))})}open(e,t){const s=this._parser.parse(t);return t._engine&&(s._data=t,delete t._engine),s}_createPlaceholders(){this._placeholderTextures={};const e={white:[255,255,255,255],gray:[128,128,128,255],black:[0,0,0,255],normal:[128,128,255,255]};for(const t in e){if(!e.hasOwnProperty(t))continue;this._placeholderTextures[t]=new ae(this._device,{width:2,height:2,format:he,name:"material_placeholder"});const s=this._placeholderTextures[t].lock();for(let i=0;i<4;i++)for(let n=0;n<4;n++)s[i*4+n]=e[t][n];this._placeholderTextures[t].unlock()}}patch(e,t){e.resource._data&&(e._data=e.resource._data,delete e.resource._data),e.data.name=e.name,e.resource.name=e.name,this._bindAndAssignAssets(e,t),e.off("unload",this._onAssetUnload,this),e.on("unload",this._onAssetUnload,this)}_onAssetUnload(e){delete e.data.parameters,delete e.data.chunks,delete e.data.name}_assignTexture(e,t,s){t.resource[e]=s}_getPlaceholderTexture(e){this._placeholderTextures||this._createPlaceholders();const t=H1[e];return this._placeholderTextures[t]}_assignPlaceholderTexture(e,t){t.resource[e]=this._getPlaceholderTexture(e)}_onTextureLoad(e,t,s){this._assignTexture(e,t,s.resource),t.resource.update()}_onTextureAdd(e,t,s){this._assets.load(s)}_onTextureRemoveOrUnload(e,t,s){const i=t.resource;i&&t.resource[e]===s.resource&&(this._assignPlaceholderTexture(e,t),i.update())}_assignCubemap(e,t,s){t.resource[e]=s[0],e==="cubeMap"&&(t.resource.prefilteredCubemaps=s.slice(1))}_onCubemapLoad(e,t,s){this._assignCubemap(e,t,s.resources),this._parser.initialize(t.resource,t.data)}_onCubemapAdd(e,t,s){t.data.shadingModel===Ns&&(t.loadFaces=!0),this._assets.load(s)}_onCubemapRemoveOrUnload(e,t,s){const i=t.resource;t.data.prefilteredCubeMap128===s.resources[1]&&(this._assignCubemap(e,t,[null,null,null,null,null,null,null]),i.update())}_bindAndAssignAssets(e,t){const s=this._parser.migrate(e.data),i=e.resource,n=s.mappingFormat==="path",r=Fl;let a,o,h;for(a=0;a<r.length;a++){o=r[a],h=i._assetReferences[o];const d=s[o],u=i[o],f=u===this._getPlaceholderTexture(o),p=s.validated;d&&(!u||!p||f)?(h||(h=new rl(o,e,t,{load:this._onTextureLoad,add:this._onTextureAdd,remove:this._onTextureRemoveOrUnload,unload:this._onTextureRemoveOrUnload},this),i._assetReferences[o]=h),n?h.url=e.getAbsoluteUrl(d):h.id=d,h.asset&&(h.asset.resource?this._assignTexture(o,e,h.asset.resource):this._assignPlaceholderTexture(o,e),t.load(h.asset))):h&&(n?h.url=null:h.id=null)}const c=vd;for(a=0;a<c.length;a++)o=c[a],h=i._assetReferences[o],s[o]&&!e.data.prefilteredCubeMap128&&(h||(h=new rl(o,e,t,{load:this._onCubemapLoad,add:this._onCubemapAdd,remove:this._onCubemapRemoveOrUnload,unload:this._onCubemapRemoveOrUnload},this),i._assetReferences[o]=h),n?h.url=s[o]:h.id=s[o],h.asset&&(h.asset.loaded&&this._assignCubemap(o,e,h.asset.resources),t.load(h.asset)));this._parser.initialize(i,s)}}class q1{constructor(e,t){this._device=e,this._defaultMaterial=t}parse(e){const t=fa.parse("filename.glb",e,this._device);if(t){const s=oi.createModel(t,this._defaultMaterial);return t.destroy(),s}return null}}class j1{constructor(){this.index=0,this.boneIndices=[0,0,0,0]}}class Y1{constructor(){this.partition=0,this.vertexStart=0,this.vertexCount=0,this.indexStart=0,this.indexCount=0,this.boneIndices=[],this.vertices=[],this.indices=[],this.indexMap={},this.originalMesh=null}addVertex(e,t,s){let i=-1;if(this.indexMap[t]!==void 0)i=this.indexMap[t],this.indices.push(i);else{for(let n=0;n<4;n++){if(s.blendWeight.data[t*4+n]===0)continue;const r=s.blendIndices.data[e.index*4+n];e.boneIndices[n]=this.getBoneRemap(r)}i=this.vertices.length,this.indices.push(i),this.vertices.push(e),this.indexMap[t]=i}}addPrimitive(e,t,s,i){const n=[];let r=0;const a=e.length;for(let o=0;o<a;o++){const c=e[o].index;for(let d=0;d<4;d++)if(s.blendWeight.data[c*4+d]>0){const u=s.blendIndices.data[c*4+d];let f=!0;for(let p=0;p<r;p++)if(n[p]===u){f=!1;break}if(f){n[r]=u;const p=this.getBoneRemap(u);r+=p===-1?1:0}}}if(this.boneIndices.length+r>i)return!1;for(let o=0;o<r;o++)this.boneIndices.push(n[o]);for(let o=0;o<a;o++)this.addVertex(e[o],t[o],s);return!0}getBoneRemap(e){for(let t=0;t<this.boneIndices.length;t++)if(this.boneIndices[t]===e)return t;return-1}}function $1(l){const e=l.vertices,t=l.skins,s=l.meshes,i=l.meshInstances;for(let n=0;n<s.length;n++)s[n].vertices=e[s[n].vertices],s[n].skin!==void 0&&(s[n].skin=t[s[n].skin]);for(let n=0;n<i.length;n++)i[n].mesh=s[i[n].mesh]}function K1(l){const e=l.vertices,t=l.skins,s=l.meshes,i=l.meshInstances;for(let n=0;n<s.length;n++)s[n].vertices=e.indexOf(s[n].vertices),s[n].skin!==void 0&&(s[n].skin=t.indexOf(s[n].skin));for(let n=0;n<i.length;n++)i[n].mesh=s.indexOf(i[n].mesh)}function Z1(l,e,t){let s,i,n,r;$1(l);const a=l.vertices,o=l.skins;let h;const c=l.meshes,d=l.meshInstances,u=function(p){const _=new j1;return _.index=p,_};for(s=o.length-1;s>=0;s--)if(o[s].boneNames.length>t){const f=o.splice(s,1)[0],p=[];for(i=0;i<c.length;i++)c[i].skin===f&&p.push(c[i]);for(i=0;i<p.length;i++)r=c.indexOf(p[i]),r!==-1&&c.splice(r,1);if(p.length===0)throw new Error("partitionSkin: There should be at least one mesh that references a skin");const _=p[0].vertices;for(i=1;i<p.length;i++)if(p[i].vertices!==_)throw new Error("partitionSkin: All meshes that share a skin should also share the same vertex buffer");let m;const g=[],w=[],v=[];let y=0;for(i=0;i<p.length;i++){h=p[i];const O=h.indices;for(let D=h.base;D<h.base+h.count;){r=O[D++],w[0]=u(r),v[0]=r,r=O[D++],w[1]=u(r),v[1]=r,r=O[D++],w[2]=u(r),v[2]=r;let U=!1;for(let W=y;W<g.length;W++)if(m=g[W],m.addPrimitive(w,v,_,t)){U=!0;break}U||(m=new Y1,m.originalMesh=h,m.addPrimitive(w,v,_,t),g.push(m))}y=g.length}const T=[],C=[];for(i=0;i<g.length;i++)if(m=g[i],m.vertices.length&&m.indices.length){const O=T.length,D=m.vertices.length,U=C.length,W=m.indices.length;m.partition=i,m.vertexStart=O,m.vertexCount=D,m.indexStart=U,m.indexCount=W;let M,R;for(M=0,R=O;M<D;)T[R++]=m.vertices[M++];for(M=0,R=U;M<W;)C[R++]=m.indices[M++]+O}const S=[];for(i=0;i<g.length;i++){m=g[i];const O=[],D=[];for(n=0;n<m.boneIndices.length;n++)O.push(f.inverseBindMatrices[m.boneIndices[n]]),D.push(f.boneNames[m.boneIndices[n]]);const U={inverseBindMatrices:O,boneNames:D};S.push(U),o.push(U)}let A,x,P,I;const E={};for(x in _)E[x]={components:_[x].components,data:[],type:_[x].type};for(x in _)if(x==="blendIndices"){const O=E[x].data;for(i=0;i<T.length;i++){const D=T[i].boneIndices;O.push(D[0],D[1],D[2],D[3])}}else for(A=_[x],P=A.data,I=A.components,i=0;i<T.length;i++)for(r=T[i].index,n=0;n<I;n++)E[x].data.push(P[r*I+n]);for(a[a.indexOf(_)]=E,i=0;i<g.length;i++)for(m=g[i],h={aabb:{min:[0,0,0],max:[0,0,0]},vertices:E,skin:S[i],indices:C.splice(0,m.indexCount),type:"triangles",base:0,count:m.indexCount},c.push(h),n=d.length-1;n>=0;n--)d[n].mesh===m.originalMesh&&(d.push({mesh:h,node:d[n].node}),e&&e.push({material:e[n].material,path:e[n].path}));for(i=0;i<g.length;i++)for(m=g[i],n=d.length-1;n>=0;n--)d[n].mesh===m.originalMesh&&(d.splice(n,1),e&&e.splice(n,1))}K1(l)}const J1={points:na,lines:bl,lineloop:Up,linestrip:Np,triangles:ts,trianglestrip:ra,trianglefan:ji},Q1={int8:Rl,uint8:zs,int16:Il,uint16:Kn,int32:qp,uint32:jp,float32:ge};class eP{constructor(e,t){this._device=e,this._defaultMaterial=t}parse(e){const t=e.model;if(!t||t.version<=1)return null;const s=this._parseNodes(e),i=this._parseSkins(e,s),n=this._parseVertexBuffers(e),r=this._parseIndexBuffers(e,n),a=this._parseMorphs(e,s,n),o=this._parseMeshes(e,i.skins,a.morphs,n,r.buffer,r.data),h=this._parseMeshInstances(e,s,o,i.skins,i.instances,a.morphs,a.instances),c=new Xs;return c.graph=s[0],c.meshInstances=h,c.skinInstances=i.instances,c.morphInstances=a.instances,c.getGraph().syncHierarchy(),c}_parseNodes(e){const t=e.model,s=[];let i;for(i=0;i<t.nodes.length;i++){const n=t.nodes[i],r=new Qe(n.name);r.setLocalPosition(n.position[0],n.position[1],n.position[2]),r.setLocalEulerAngles(n.rotation[0],n.rotation[1],n.rotation[2]),r.setLocalScale(n.scale[0],n.scale[1],n.scale[2]),r.scaleCompensation=!!n.scaleCompensation,s.push(r)}for(i=1;i<t.parents.length;i++)s[t.parents[i]].addChild(s[i]);return s}_parseSkins(e,t){const s=e.model,i=[],n=[];let r,a;if(!this._device.supportsBoneTextures&&s.skins.length>0){const o=this._device.getBoneLimit();Z1(s,null,o)}for(r=0;r<s.skins.length;r++){const o=s.skins[r],h=[];for(a=0;a<o.inverseBindMatrices.length;a++){const f=o.inverseBindMatrices[a];h[a]=new H().set(f)}const c=new Im(this._device,h,o.boneNames);i.push(c);const d=new oa(c),u=[];for(a=0;a<c.boneNames.length;a++){const f=c.boneNames[a],p=t[0].findByName(f);u.push(p)}d.bones=u,n.push(d)}return{skins:i,instances:n}}_getMorphVertexCount(e,t,s){for(let i=0;i<e.meshes.length;i++){const n=e.meshes[i];if(n.morph===t)return s[n.vertices].numVertices}}_parseMorphs(e,t,s){const i=e.model,n=[],r=[];let a,o,h,c,d,u;if(i.morphs){const f=function(_,m,g){const w=new Float32Array(g*3);for(let v=0;v<m.length;v++){const y=m[v]*3;w[y]=_[v*3],w[y+1]=_[v*3+1],w[y+2]=_[v*3+2]}return w};for(a=0;a<i.morphs.length;a++){for(c=i.morphs[a].targets,u=[],h=this._getMorphVertexCount(i,a,s),o=0;o<c.length;o++){const m=c[o].aabb,g=m.min,w=m.max,v=new _e(new b((w[0]+g[0])*.5,(w[1]+g[1])*.5,(w[2]+g[2])*.5),new b((w[0]-g[0])*.5,(w[1]-g[1])*.5,(w[2]-g[2])*.5)),y=c[o].indices;let T=c[o].deltaPositions,C=c[o].deltaNormals;y&&(T=f(T,y,h),C=f(C,y,h)),d=new Bl({deltaPositions:T,deltaNormals:C,name:c[o].name,aabb:v}),u.push(d)}const p=new kt(u,this._device);n.push(p);const _=new Ki(p);r.push(_)}}return{morphs:n,instances:r}}_parseVertexBuffers(e){const t=e.model,s=[],i={position:Ne,normal:xt,tangent:ps,blendWeight:ms,blendIndices:Et,color:lt,texCoord0:It,texCoord1:yi,texCoord2:wl,texCoord3:Tl,texCoord4:Cl,texCoord5:Al,texCoord6:Ml,texCoord7:Pl};for(let n=0;n<t.vertices.length;n++){const r=t.vertices[n],a=[];for(const u in r){const f=r[u];a.push({semantic:i[u],components:f.components,type:Q1[f.type],normalize:i[u]===lt})}const o=new dt(this._device,a),h=r.position.data.length/r.position.components,c=new Us(this._device,o,h),d=new kr(c);for(let u=0;u<h;u++){for(const f in r){const p=r[f];switch(p.components){case 1:d.element[i[f]].set(p.data[u]);break;case 2:d.element[i[f]].set(p.data[u*2],1-p.data[u*2+1]);break;case 3:d.element[i[f]].set(p.data[u*3],p.data[u*3+1],p.data[u*3+2]);break;case 4:d.element[i[f]].set(p.data[u*4],p.data[u*4+1],p.data[u*4+2],p.data[u*4+3]);break}}d.next()}d.end(),s.push(c)}return s}_parseIndexBuffers(e,t){const s=e.model;let i=null,n=null,r,a=0;for(r=0;r<s.meshes.length;r++){const h=s.meshes[r];h.indices!==void 0&&(a+=h.indices.length)}let o=0;for(r=0;r<t.length;r++)o=Math.max(o,t[r].numVertices);return a>0&&(o>65535&&this._device.extUintElement?(i=new mi(this._device,qi,a),n=new Uint32Array(i.lock())):(i=new mi(this._device,Bs,a),n=new Uint16Array(i.lock()))),{buffer:i,data:n}}_parseMeshes(e,t,s,i,n,r){const a=e.model,o=[];let h=0;for(let c=0;c<a.meshes.length;c++){const d=a.meshes[c],u=d.aabb,f=u.min,p=u.max,_=new _e(new b((p[0]+f[0])*.5,(p[1]+f[1])*.5,(p[2]+f[2])*.5),new b((p[0]-f[0])*.5,(p[1]-f[1])*.5,(p[2]-f[2])*.5)),m=d.indices!==void 0,g=new Ht(this._device);g.vertexBuffer=i[d.vertices],g.indexBuffer[0]=m?n:null,g.primitive[0].type=J1[d.type],g.primitive[0].base=m?d.base+h:d.base,g.primitive[0].count=d.count,g.primitive[0].indexed=m,g.skin=d.skin!==void 0?t[d.skin]:null,g.morph=d.morph!==void 0?s[d.morph]:null,g.aabb=_,m&&(r.set(d.indices,h),h+=d.indices.length),o.push(g)}return n!==null&&n.unlock(),o}_parseMeshInstances(e,t,s,i,n,r,a){const o=e.model,h=[];let c;for(c=0;c<o.meshInstances.length;c++){const d=o.meshInstances[c],u=t[d.node],f=s[d.mesh],p=new we(f,this._defaultMaterial,u);if(f.skin){const _=i.indexOf(f.skin);p.skinInstance=n[_]}if(f.morph){const _=r.indexOf(f.morph);p.morphInstance=a[_]}h.push(p)}return h}}class tP{constructor(e){this.handlerType="model",this._device=e.graphicsDevice,this._parsers=[],this._defaultMaterial=aa(this._device),this.maxRetries=0,this.addParser(new eP(this._device,this._defaultMaterial),function(t,s){return re.getExtension(t)===".json"}),this.addParser(new q1(this._device,this._defaultMaterial),function(t,s){return re.getExtension(t)===".glb"})}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};(e.load.startsWith("blob:")||e.load.startsWith("data:"))&&(re.getExtension(e.original).toLowerCase()===".glb"?s.responseType=de.ResponseType.ARRAY_BUFFER:s.responseType=de.ResponseType.JSON),De.get(e.load,s,function(i,n){t&&(i?t(`Error loading model: ${e.original} [${i}]`):t(null,n))})}open(e,t){for(let s=0;s<this._parsers.length;s++){const i=this._parsers[s];if(i.decider(e,t))return i.parser.parse(t)}return null}patch(e,t){if(!e.resource)return;const s=e.data,i=this;e.resource.meshInstances.forEach(function(n,r){if(s.mapping){const a=function d(u){u.resource?n.material=u.resource:(u.once("load",d),t.load(u)),u.once("remove",function(f){n.material===f.resource&&(n.material=i._defaultMaterial)})};if(!s.mapping[r]){n.material=i._defaultMaterial;return}const o=s.mapping[r].material,h=s.mapping[r].path;let c;if(o!==void 0)o?(c=t.get(o),c?a(c):t.once("add:"+o,a)):n.material=i._defaultMaterial;else if(h){const d=e.getAbsoluteUrl(s.mapping[r].path);c=t.getByUrl(d),c?a(c):t.once("add:url:"+d,a)}}})}addParser(e,t){this._parsers.push({parser:e,decider:t})}}class sP{constructor(e){this.handlerType="scene",this._app=e,this.maxRetries=0}load(e,t){G_.load(e,this.maxRetries,t)}open(e,t){this._app.systems.script.preloading=!0;const i=new Pd(this._app,!1).parse(t),n=this._app.scene;return n.root=i,this._app.applySceneSettings(t.settings),this._app.systems.script.preloading=!1,n}patch(e,t){}}class iP{constructor(e){this.handlerType="script",this._app=e,this._scripts={},this._cache={}}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s=this;zt.app=this._app,this._loadScript(e.load,(i,n,r)=>{if(i)t(i);else if(zt.legacy){let a=null;Jt._types.length&&(a=Jt._types.pop()),a?this._scripts[n]=a:a=null,t(null,a,r)}else{const a={};for(let o=0;o<Jt._types.length;o++)a[Jt._types[o].name]=Jt._types[o];Jt._types.length=0,t(null,a,r),delete s._loader._cache[n+"script"]}})}open(e,t){return t}patch(e,t){}_loadScript(e,t){const s=document.head,i=document.createElement("script");this._cache[e]=i,i.async=!1,i.addEventListener("error",function(r){t(`Script: ${r.target.src} failed to load`)},!1);let n=!1;i.onload=i.onreadystatechange=function(){!n&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(n=!0,t(null,e,i))},i.src=e,s.appendChild(i)}}class nP{constructor(e){this.handlerType="shader",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(`Error loading shader resource: ${e.original} [${s}]`):t(null,i)})}open(e,t){return t}patch(e,t){}}function Nh(l){const e=this;e.resource&&(e.resource.atlas=l.resource)}function Vh(l){this.registry.load(l)}class rP{constructor(e){this.handlerType="sprite",this._assets=e.assets,this._device=e.graphicsDevice,this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),re.getExtension(e.original)===".json"&&De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(s):t(null,i)})}open(e,t){const s=new cT(this._device);return e&&(s.__data=t),s}patch(e,t){const s=e.resource;if(s.__data&&(e.data.pixelsPerUnit=s.__data.pixelsPerUnit,e.data.renderMode=s.__data.renderMode,e.data.frameKeys=s.__data.frameKeys,s.__data.textureAtlasAsset)){const i=t.getByUrl(s.__data.textureAtlasAsset);i?e.data.textureAtlasAsset=i.id:console.warn("Could not find textureatlas with url: "+s.__data.textureAtlasAsset)}s.startUpdate(),s.renderMode=e.data.renderMode,s.pixelsPerUnit=e.data.pixelsPerUnit,s.frameKeys=e.data.frameKeys,this._updateAtlas(e),s.endUpdate(),e.off("change",this._onAssetChange,this),e.on("change",this._onAssetChange,this)}_updateAtlas(e){const t=e.resource;if(!e.data.textureAtlasAsset){t.atlas=null;return}this._assets.off("load:"+e.data.textureAtlasAsset,Nh,e),this._assets.on("load:"+e.data.textureAtlasAsset,Nh,e);const s=this._assets.get(e.data.textureAtlasAsset);s&&s.resource?t.atlas=s.resource:s?this._assets.load(s):(this._assets.off("add:"+e.data.textureAtlasAsset,Vh,e),this._assets.on("add:"+e.data.textureAtlasAsset,Vh,e))}_onAssetChange(e,t,s,i){t==="data"&&s&&s.textureAtlasAsset&&i&&s.textureAtlasAsset!==i.textureAtlasAsset&&(this._assets.off("load:"+i.textureAtlasAsset,Nh,e),this._assets.off("add:"+i.textureAtlasAsset,Vh,e))}}class aP{constructor(e,t){this._app=e,this._data=t,this._templateRoot=null}instantiate(){return this._templateRoot||this._parseTemplate(),this._templateRoot.clone()}_parseTemplate(){const e=new Pd(this._app,!0);this._templateRoot=e.parse(this._data)}}class oP{constructor(e){this.handlerType="template",this._app=e,this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s={retry:this.maxRetries>0,maxRetries:this.maxRetries};De.get(e.load,s,function(i,n){i?t("Error requesting template: "+e.original):t(i,n)})}open(e,t){return new aP(this._app,t)}}class lP{constructor(e){this.handlerType="text",this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e}),De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(s,i){s?t(`Error loading text resource: ${e.original} [${s}]`):t(null,i)})}open(e,t){return t}patch(e,t){}}const to={repeat:it,clamp:se,mirror:ed},so={nearest:ve,linear:$e,nearest_mip_nearest:pl,linear_mip_nearest:_l,nearest_mip_linear:ml,linear_mip_linear:Xi},hP=/^data\.frames\.(\d+)$/;class cP{constructor(e){this.handlerType="textureatlas",this._loader=e.loader,this.maxRetries=0}load(e,t){typeof e=="string"&&(e={load:e,original:e});const s=this,i=this._loader.getHandler("texture");if(re.getExtension(e.original)===".json")De.get(e.load,{retry:this.maxRetries>0,maxRetries:this.maxRetries},function(n,r){if(n)t(n);else{const a=e.original.replace(".json",".png");s._loader.load(a,"texture",function(o,h){o?t(o):t(null,{data:r,texture:h})})}});else return i.load(e,t)}open(e,t){const s=new dT;if(t.texture&&t.data)s.texture=t.texture,s.__data=t.data;else{const n=this._loader.getHandler("texture").open(e,t);if(!n)return null;s.texture=n}return s}patch(e,t){if(!e.resource)return;e.resource.__data&&(e.resource.__data.minfilter!==void 0&&(e.data.minfilter=e.resource.__data.minfilter),e.resource.__data.magfilter!==void 0&&(e.data.magfilter=e.resource.__data.magfilter),e.resource.__data.addressu!==void 0&&(e.data.addressu=e.resource.__data.addressu),e.resource.__data.addressv!==void 0&&(e.data.addressv=e.resource.__data.addressv),e.resource.__data.mipmaps!==void 0&&(e.data.mipmaps=e.resource.__data.mipmaps),e.resource.__data.anisotropy!==void 0&&(e.data.anisotropy=e.resource.__data.anisotropy),e.resource.__data.rgbm!==void 0&&(e.data.rgbm=!!e.resource.__data.rgbm),e.data.frames=e.resource.__data.frames,delete e.resource.__data);const s=e.resource.texture;if(s&&(s.name=e.name,e.data.hasOwnProperty("minfilter")&&s.minFilter!==so[e.data.minfilter]&&(s.minFilter=so[e.data.minfilter]),e.data.hasOwnProperty("magfilter")&&s.magFilter!==so[e.data.magfilter]&&(s.magFilter=so[e.data.magfilter]),e.data.hasOwnProperty("addressu")&&s.addressU!==to[e.data.addressu]&&(s.addressU=to[e.data.addressu]),e.data.hasOwnProperty("addressv")&&s.addressV!==to[e.data.addressv]&&(s.addressV=to[e.data.addressv]),e.data.hasOwnProperty("mipmaps")&&s.mipmaps!==e.data.mipmaps&&(s.mipmaps=e.data.mipmaps),e.data.hasOwnProperty("anisotropy")&&s.anisotropy!==e.data.anisotropy&&(s.anisotropy=e.data.anisotropy),e.data.hasOwnProperty("rgbm"))){const n=e.data.rgbm?pi:Nt;s.type!==n&&(s.type=n)}e.resource.texture=s;const i={};for(const n in e.data.frames){const r=e.data.frames[n];i[n]={rect:new K(r.rect),pivot:new V(r.pivot),border:new K(r.border)}}e.resource.frames=i,e.off("change",this._onAssetChange,this),e.on("change",this._onAssetChange,this)}_onAssetChange(e,t,s){let i;if(t==="data"||t==="data.frames"){const n={};for(const r in s.frames)i=s.frames[r],n[r]={rect:new K(i.rect),pivot:new V(i.pivot),border:new K(i.border)};e.resource.frames=n}else{const n=t.match(hP);if(n){const r=n[1];s?(e.resource.frames[r]?(i=e.resource.frames[r],i.rect.set(s.rect[0],s.rect[1],s.rect[2],s.rect[3]),i.pivot.set(s.pivot[0],s.pivot[1]),i.border.set(s.border[0],s.border[1],s.border[2],s.border[3])):e.resource.frames[r]={rect:new K(s.rect),pivot:new V(s.pivot),border:new K(s.border)},e.resource.fire("set:frame",r,e.resource.frames[r])):e.resource.frames[r]&&(delete e.resource.frames[r],e.resource.fire("remove:frame",r))}}}}function dP(){const l={cTFETC1:0,cTFETC2:1,cTFBC1:2,cTFBC3:3,cTFPVRTC1_4_RGB:8,cTFPVRTC1_4_RGBA:9,cTFASTC_4x4:10,cTFATC_RGB:11,cTFATC_RGBA_INTERPOLATED_ALPHA:12,cTFRGBA32:13,cTFRGB565:14,cTFRGBA4444:16},e={astc:l.cTFASTC_4x4,dxt:l.cTFBC1,etc1:l.cTFETC1,etc2:l.cTFETC1,pvr:l.cTFPVRTC1_4_RGB,atc:l.cTFATC_RGB,none:l.cTFRGB565},t={astc:l.cTFASTC_4x4,dxt:l.cTFBC3,etc1:l.cTFRGBA4444,etc2:l.cTFETC2,pvr:l.cTFPVRTC1_4_RGBA,atc:l.cTFATC_RGBA_INTERPOLATED_ALPHA,none:l.cTFRGBA4444},s={ETC1:21,ETC2_RGB:22,ETC2_RGBA:23,DXT1:8,DXT5:10,PVRTC_4BPP_RGB_1:26,PVRTC_4BPP_RGBA_1:27,ASTC_4x4:28,ATC_RGB:29,ATC_RGBA:30,R8_G8_B8_A8:7,R5_G6_B5:3,R4_G4_B4_A4:5},i=(y,T)=>{switch(y){case l.cTFETC1:return T.formats.etc1?s.ETC1:s.ETC2_RGB;case l.cTFETC2:return s.ETC2_RGBA;case l.cTFBC1:return s.DXT1;case l.cTFBC3:return s.DXT5;case l.cTFPVRTC1_4_RGB:return s.PVRTC_4BPP_RGB_1;case l.cTFPVRTC1_4_RGBA:return s.PVRTC_4BPP_RGBA_1;case l.cTFASTC_4x4:return s.ASTC_4x4;case l.cTFATC_RGB:return s.ATC_RGB;case l.cTFATC_RGBA_INTERPOLATED_ALPHA:return s.ATC_RGBA;case l.cTFRGBA32:return s.R8_G8_B8_A8;case l.cTFRGB565:return s.R5_G6_B5;case l.cTFRGBA4444:return s.R4_G4_B4_A4}},n=y=>{const T=function(S,A){const x=S*.00784313725490196-1,P=A*(2/255)-1,I=Math.sqrt(1-Math.min(1,x*x+P*P));return Math.max(0,Math.min(255,Math.floor((I+1)*.5*255)))};for(let C=0;C<y.length;C+=4){const S=y[C+3],A=y[C+1];y[C+0]=S,y[C+2]=T(S,A),y[C+3]=255}return y},r=y=>{const T=new Uint16Array(y.length/4);for(let C=0;C<y.length;C+=4){const S=y[C+0],A=y[C+1],x=y[C+2];T[C/4]=(S&248)<<8|(A&252)<<3|x>>3}return T},a=(y,T)=>(y&y-1)===0&&(T&T-1)===0,o=()=>typeof performance<"u"?performance.now():0;let h,c,d;const u=(y,T,C)=>{if(C){if(y.formats.astc)return"astc"}else if(T){if(y.formats.etc2)return"etc2"}else if(y.formats.etc1||y.formats.etc2)return"etc1";return(A=>{for(let x=0;x<A.length;++x){const P=A[x];if(y.formats[P])return P}return"none"})(T?d:c)},f=(y,T,C,S)=>{switch(C){case l.cTFETC1:case l.cTFETC2:return!0;case l.cTFBC1:case l.cTFBC3:return(y&3)===0&&(T&3)===0;case l.cTFPVRTC1_4_RGB:case l.cTFPVRTC1_4_RGBA:return a(y,T)&&(y===T||S);case l.cTFASTC_4x4:return!0;case l.cTFATC_RGB:case l.cTFATC_RGBA_INTERPOLATED_ALPHA:return!0}},p=(y,T,C)=>{if(!h.KTX2File)throw new Error("Basis transcoder module does not include support for KTX2.");const S=o(),A=new h.KTX2File(new Uint8Array(T)),x=A.getWidth(),P=A.getHeight(),I=A.getLevels(),E=!!A.getHasAlpha(),O=A.isUASTC&&A.isUASTC();if(!x||!P||!I)throw A.close(),A.delete(),new Error(`Invalid image dimensions url=${y} width=${x} height=${P} levels=${I}`);const D=u(C.deviceDetails,E,O),U=!!C.isGGGR&&D==="pvr";let W;if(U?W=l.cTFRGBA32:(W=E?t[D]:e[D],f(x,P,W,C.deviceDetails.webgl2)||(W=E?l.cTFRGBA32:l.cTFRGB565)),!A.startTranscoding())throw A.close(),A.delete(),new Error("Failed to start transcoding url="+y);let M;const R=[];for(let L=0;L<I;++L){const F=A.getImageTranscodedSizeInBytes(L,0,0,W),N=new Uint8Array(F);if(!A.transcodeImage(N,L,0,0,W,0,-1,-1))throw A.close(),A.delete(),new Error("Failed to transcode image url="+y);const z=W===l.cTFRGB565||W===l.cTFRGBA4444;R.push(z?new Uint16Array(N.buffer):N)}if(A.close(),A.delete(),U)for(W=l.cTFRGB565,M=0;M<R.length;++M)R[M]=r(n(R[M]));return{format:i(W,C.deviceDetails),width:x,height:P,levels:R,cubemap:!1,transcodeTime:o()-S,url:y,unswizzledGGGR:U}},_=(y,T,C)=>{const S=o(),A=new h.BasisFile(new Uint8Array(T)),x=A.getImageWidth(0,0),P=A.getImageHeight(0,0),I=A.getNumImages(),E=A.getNumLevels(0),O=!!A.getHasAlpha(),D=A.isUASTC&&A.isUASTC();if(!x||!P||!I||!E)throw A.close(),A.delete(),new Error(`Invalid image dimensions url=${y} width=${x} height=${P} images=${I} levels=${E}`);const U=u(C.deviceDetails,O,D),W=!!C.isGGGR&&U==="pvr";let M;if(W?M=l.cTFRGBA32:(M=O?t[U]:e[U],f(x,P,M,C.deviceDetails.webgl2)||(M=O?l.cTFRGBA32:l.cTFRGB565)),!A.startTranscoding())throw A.close(),A.delete(),new Error("Failed to start transcoding url="+y);let R;const L=[];for(let F=0;F<E;++F){const N=A.getImageTranscodedSizeInBytes(0,F,M),z=new Uint8Array(N);if(!A.transcodeImage(z,0,F,M,0,0))throw A.close(),A.delete(),new Error("Failed to transcode image url="+y);const q=M===l.cTFRGB565||M===l.cTFRGBA4444;L.push(q?new Uint16Array(z.buffer):z)}if(A.close(),A.delete(),W)for(M=l.cTFRGB565,R=0;R<L.length;++R)L[R]=r(n(L[R]));return{format:i(M,C.deviceDetails),width:x,height:P,levels:L,cubemap:!1,transcodeTime:o()-S,url:y,unswizzledGGGR:W}},m=(y,T,C)=>C.isKTX2?p(y,T,C):_(y,T,C),g=(y,T,C)=>{try{const S=m(y,T,C);S.levels=S.levels.map(A=>A.buffer),self.postMessage({url:y,data:S},S.levels)}catch(S){self.postMessage({url:y,err:S},null)}},w=(y,T)=>{self.importScripts(y.basisUrl);const C=(S,A)=>(WebAssembly.instantiate(y.module,S).then(x=>{A(x)}).catch(x=>{console.error("instantiate failed + "+x)}),{});self.BASIS(y.module?{instantiateWasm:C}:null).then(S=>{S.initializeBasis(),h=S,c=y.rgbPriority,d=y.rgbaPriority,T(null)})},v=[];self.onmessage=y=>{const T=y.data;switch(T.type){case"init":w(T.config,()=>{for(let C=0;C<v.length;++C)g(v[C].url,v[C].data,v[C].options);v.length=0});break;case"transcode":h?g(T.url,T.data,T.options):v.push(T);break}}}const uP=l=>({astc:!!l.extCompressedTextureASTC,atc:!!l.extCompressedTextureATC,dxt:!!l.extCompressedTextureS3TC,etc1:!!l.extCompressedTextureETC1,etc2:!!l.extCompressedTextureETC,pvr:!!l.extCompressedTexturePVRTC}),fP=(l,e)=>{const t=()=>{const r="("+dP.toString()+`)()

`;return new Blob([r],{type:"application/javascript"})},s=()=>{try{if(typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"){const r=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(r instanceof WebAssembly.Module)return new WebAssembly.Instance(r)instanceof WebAssembly.Instance}}catch{}return!1},i=(r,a)=>{e(null,{workerUrl:URL.createObjectURL(t()),basisUrl:URL.createObjectURL(r),module:a,rgbPriority:l.rgbPriority,rgbaPriority:l.rgbaPriority})},n={responseType:"blob",retry:l.maxRetries>0,maxRetries:l.maxRetries};if(l.glueUrl&&l.wasmUrl&&s()){let r=null,a=null;De.get(l.glueUrl,n,(c,d)=>{c?e(c):a?i(d,a):r=d});const o=fetch(l.wasmUrl),h=()=>{o.then(c=>c.arrayBuffer()).then(c=>WebAssembly.compile(c)).then(c=>{r?i(r,c):a=c}).catch(c=>{e(c,null)})};WebAssembly.compileStreaming?WebAssembly.compileStreaming(o).then(c=>{r?i(r,c):a=c}).catch(c=>{h()}):h()}else De.get(l.fallbackUrl,n,(r,a)=>{r?e(r,null):i(a,null)})};class pP{constructor(){this.callbacks={},this.queue=[],this.clients=[]}enqueueJob(e,t,s,i){if(this.callbacks.hasOwnProperty(e))this.callbacks[e].push(s);else{this.callbacks[e]=[s];const n={url:e,data:t,options:i};this.clients.length>0?this.clients.shift().run(n):this.queue.push(n)}}enqueueClient(e){this.queue.length>0?e.run(this.queue.shift()):this.clients.push(e)}handleResponse(e,t,s){const i=this.callbacks[e];if(t)for(let n=0;n<i.length;++n)i[n](t);else{s.format===To||s.format===Co?s.levels=s.levels.map(function(n){return new Uint16Array(n)}):s.levels=s.levels.map(function(n){return new Uint8Array(n)});for(let n=0;n<i.length;++n)i[n](null,s)}delete this.callbacks[e]}}class mP{constructor(e,t,s){this.queue=e,this.worker=new Worker(t.workerUrl),this.worker.addEventListener("message",i=>{const n=i.data;this.queue.handleResponse(n.url,n.err,n.data),this.eager||this.queue.enqueueClient(this)}),this.worker.postMessage({type:"init",config:t}),this.eager=s}run(e){const t=[];e.data instanceof ArrayBuffer&&t.push(e.data),this.worker.postMessage({type:"transcode",url:e.url,format:e.format,data:e.data,options:e.options},t),this.eager&&this.queue.enqueueClient(this)}}const _P=1,gP=["etc1","etc2","astc","dxt","pvr","atc"],yP=["astc","dxt","etc2","pvr","atc"],xP=5,Kc=new pP;let ap=null,Zc=!1;function vP(l){if(!Zc){if(!l)l=ap||{};else if(l.lazyInit){ap=l;return}if(!l.glueUrl||!l.wasmUrl||!l.fallbackUrl){const t=((window.config?window.config.wasmModules:window.PRELOAD_MODULES)||[]).find(function(s){return s.moduleName==="BASIS"});if(t){const s=window.ASSET_PREFIX||"";l.glueUrl||(l.glueUrl=s+t.glueUrl),l.wasmUrl||(l.wasmUrl=s+t.wasmUrl),l.fallbackUrl||(l.fallbackUrl=s+t.fallbackUrl)}}if(l.glueUrl||l.wasmUrl||l.fallbackUrl){Zc=!0;const e=Math.max(1,Math.min(16,l.numWorkers||_P)),t=l.numWorkers===1||(l.hasOwnProperty("eagerWorkers")?l.eagerWorkers:!0);l.rgbPriority=l.rgbPriority||gP,l.rgbaPriority=l.rgbaPriority||yP,l.maxRetries=l.hasOwnProperty("maxRetries")?l.maxRetries:xP,fP(l,(s,i)=>{if(s)console.error(`failed to initialize basis worker: ${s}`);else for(let n=0;n<e;++n)Kc.enqueueClient(new mP(Kc,i,t))})}}}let Gh=null;function W_(l,e,t,s,i){return vP(),Gh||(Gh={webgl2:l.webgl2,formats:uP(l)}),Kc.enqueueJob(e,t,s,{deviceDetails:Gh,isGGGR:!!(i!=null&&i.isGGGR),isKTX2:!!(i!=null&&i.isKTX2)}),Zc}class SP{constructor(e,t){this.device=t,this.maxRetries=0}load(e,t,s){const i=this.device,n=r=>{var a,o,h;W_(i,e.load,r,t,{isGGGR:((s==null||(a=s.file)==null||(o=a.variants)==null||(h=o.basis)==null?void 0:h.opt)&8)!==0})||t(`Basis module not found. Asset '${s.name}' basis texture variant will not be loaded.`)};ne.fetchArrayBuffer(e.load,(r,a)=>{r?t(r):n(a)},s,this.maxRetries)}open(e,t,s){const i=new ae(s,{name:e,addressU:t.cubemap?se:it,addressV:t.cubemap?se:it,width:t.width,height:t.height,format:t.format,cubemap:t.cubemap,levels:t.levels});return i.upload(),i}}class bP{constructor(e,t){this.crossOrigin=e.prefix?"anonymous":null,this.maxRetries=0,this.device=t}load(e,t,s){var i;const n=!!(s!=null&&(i=s.file)!=null&&i.contents);if(n){if(this.device.supportsImageBitmap){this._loadImageBitmapFromData(s.file.contents,t);return}e={load:URL.createObjectURL(new Blob([s.file.contents])),original:e.original}}const r=(o,h)=>{n&&URL.revokeObjectURL(e.load),t(o,h)};let a;s&&s.options&&s.options.hasOwnProperty("crossOrigin")?a=s.options.crossOrigin:el.test(e.load)&&(a=this.crossOrigin),this.device.supportsImageBitmap?this._loadImageBitmap(e.load,e.original,a,r):this._loadImage(e.load,e.original,a,r)}open(e,t,s){const i=re.getExtension(e).toLowerCase(),n=i===".jpg"||i===".jpeg"?ks:he,r=new ae(s,{name:e,width:t.width,height:t.height,format:n});return r.setSource(t),r}_loadImage(e,t,s,i){const n=new Image;s&&(n.crossOrigin=s);let r=0;const a=this.maxRetries;let o;n.onload=function(){i(null,n)},n.onerror=function(){if(!o)if(a>0&&++r<=a){const h=Math.pow(2,r)*100;console.log(`Error loading Texture from: '${t}' - Retrying in ${h}ms...`);const d=e.indexOf("?")>=0?"&":"?";o=setTimeout(function(){n.src=e+d+"retry="+Date.now(),o=null},h)}else i(`Error loading Texture from: '${t}'`)},n.src=e}_loadImageBitmap(e,t,s,i){const n={cache:!0,responseType:"blob",retry:this.maxRetries>0,maxRetries:this.maxRetries};De.get(e,n,function(r,a){r?i(r):createImageBitmap(a,{premultiplyAlpha:"none"}).then(o=>i(null,o)).catch(o=>i(o))})}_loadImageBitmapFromData(e,t){createImageBitmap(new Blob([e]),{premultiplyAlpha:"none"}).then(s=>t(null,s)).catch(s=>t(s))}}const Wh=[1481919403,3140563232,169478669],wP={33776:kn,33778:Pr,33779:Gi,36196:Gr,37492:nd,37496:rd,35840:vl,35841:Wr,35842:Sl,35843:Hr,32849:ks,32856:he,35905:sd,35907:id,35898:xl,34843:Er,34842:gt};function TP(l,e,t,s){return l===xl?new Uint32Array(e,t,s/4):new Uint8Array(e,t,s)}class CP{constructor(e){this.maxRetries=0}load(e,t,s){ne.fetchArrayBuffer(e.load,t,s,this.maxRetries)}open(e,t,s){const i=this.parse(t);if(!i)return null;const n=new ae(s,{name:e,addressU:i.cubemap?se:it,addressV:i.cubemap?se:it,width:i.width,height:i.height,format:i.format,cubemap:i.cubemap,levels:i.levels});return n.upload(),n}parse(e){const t=new Uint32Array(e);if(Wh[0]!==t[0]||Wh[1]!==t[1]||Wh[2]!==t[2])return null;const s={endianness:t[3],glType:t[4],glTypeSize:t[5],glFormat:t[6],glInternalFormat:t[7],glBaseInternalFormat:t[8],pixelWidth:t[9],pixelHeight:t[10],pixelDepth:t[11],numberOfArrayElements:t[12],numberOfFaces:t[13],numberOfMipmapLevels:t[14],bytesOfKeyValueData:t[15]};if(s.pixelDepth>1||s.numberOfArrayElements!==0)return null;const i=wP[s.glInternalFormat];if(i===void 0)return null;let n=16+s.bytesOfKeyValueData/4;const r=s.numberOfFaces>1,a=[];for(let o=0;o<(s.numberOfMipmapLevels||1);o++){const h=t[n++];r&&a.push([]);const c=r?a[o]:a;for(let d=0;d<(r?6:1);++d)c.push(TP(i,e,n*4,h)),n+=h+3>>2}return{format:i,width:s.pixelWidth,height:s.pixelHeight,levels:a,cubemap:r}}}const AP={KHR_DF_MODEL_ETC1S:163,KHR_DF_MODEL_UASTC:166};class MP{constructor(e,t){this.maxRetries=0,this.device=t}load(e,t,s){ne.fetchArrayBuffer(e.load,(i,n)=>{i?t(i,n):this.parse(n,e,t,s)},s,this.maxRetries)}open(e,t,s){const i=new ae(s,{name:e,addressU:t.cubemap?se:it,addressV:t.cubemap?se:it,width:t.width,height:t.height,format:t.format,cubemap:t.cubemap,levels:t.levels});return i.upload(),i}parse(e,t,s,i){const n=new Ep(e),r=[n.readU32be(),n.readU32be(),n.readU32be()];if(r[0]!==2873840728||r[1]!==540160187||r[2]!==218765834)return null;const a={vkFormat:n.readU32(),typeSize:n.readU32(),pixelWidth:n.readU32(),pixelHeight:n.readU32(),pixelDepth:n.readU32(),layerCount:n.readU32(),faceCount:n.readU32(),levelCount:n.readU32(),supercompressionScheme:n.readU32()},o={dfdByteOffset:n.readU32(),dfdByteLength:n.readU32(),kvdByteOffset:n.readU32(),kvdByteLength:n.readU32(),sgdByteOffset:n.readU64(),sgdByteLength:n.readU64()},h=[];for(let _=0;_<Math.max(1,a.levelCount);++_)h.push({byteOffset:n.readU64(),byteLength:n.readU64(),uncompressedByteLength:n.readU64()});if(n.readU32()!==o.kvdByteOffset-o.dfdByteOffset)return null;n.skip(8);const d=n.readU8();if(n.skip(o.dfdByteLength-9),n.skip(o.kvdByteLength),a.supercompressionScheme===1||d===AP.KHR_DF_MODEL_UASTC){var u,f,p;W_(this.device,t.load,e,s,{isGGGR:((i==null||(u=i.file)==null||(f=u.variants)==null||(p=f.basis)==null?void 0:p.opt)&8)!==0,isKTX2:!0})||s('Basis module not found. Asset "'+i.name+'" basis texture variant will not be loaded.')}else s("unsupported KTX2 pixel format")}}class PP{constructor(e){this.maxRetries=0}load(e,t,s){ne.fetchArrayBuffer(e.load,t,s,this.maxRetries)}open(e,t,s){const i=new Uint32Array(t,0,32),n=i[4],r=i[3],a=Math.max(i[7],1),o=i[20]===4,h=i[21],c=i[22],d=i[28]===65024,u=827611204,f=894720068,p=113,_=116,m=826496069,g=825438800,w=825504336,v=825439312,y=825504848;let T=!1,C=!1,S=!1,A=!1,x=null,P=1,I;if(o?h===u?(x=kn,T=!0):h===f?(x=Gi,T=!0):h===p?(x=gt,P=2):h===_?(x=nt,P=4):h===m?(x=Gr,T=!0,C=!0):h===g||h===w?(x=h===g?Wr:Hr,T=!0,S=!0):(h===v||h===y)&&(x=h===v?vl:Sl,T=!0,A=!0):c===32&&(x=he),!x)return I=new ae(s,{width:4,height:4,format:ks,name:"dds-legacy-empty"}),I;I=new ae(s,{name:e,addressU:d?se:it,addressV:d?se:it,width:n,height:r,format:x,cubemap:d,mipmaps:a>1});let E=128;const O=d?6:1;let D;const U=4,W=4,M=h===u?8:16;let R,L,F;for(let N=0;N<O;N++){let z=n,q=r;for(let Y=0;Y<a;Y++){T?C?D=Math.floor((z+3)/4)*Math.floor((q+3)/4)*8:S?D=Math.max(z,16)*Math.max(q,8)/4:A?D=Math.max(z,8)*Math.max(q,8)/2:(R=Math.floor((z+U-1)/U),L=Math.floor((q+W-1)/W),F=R*L,D=F*M):D=z*q*4;const Z=x===nt?new Float32Array(t,E,D):x===gt?new Uint16Array(t,E,D):new Uint8Array(t,E,D);d?(I._levels[Y]||(I._levels[Y]=[]),I._levels[Y][N]=Z):I._levels[Y]=Z,E+=D*P,z=Math.max(z*.5,1),q=Math.max(q*.5,1)}}return I.upload(),I}}class EP{constructor(e){this.maxRetries=0}load(e,t,s){ne.fetchArrayBuffer(e.load,t,s,this.maxRetries)}open(e,t,s){const i=this.parse(t);if(!i)return null;const n=new ae(s,{name:e,addressU:it,addressV:se,minFilter:ve,magFilter:ve,width:i.width,height:i.height,levels:i.levels,format:he,type:ad,mipmaps:!1});return n.upload(),n}parse(e){const t=new Ep(e);if(!t.readLine().startsWith("#?RADIANCE"))return null;const i={};for(;;){const h=t.readLine();if(h.length===0)break;{const c=h.split("=");c.length===2&&(i[c[0]]=c[1])}}if(!i.hasOwnProperty("FORMAT"))return null;const n=t.readLine().split(" ");if(n.length!==4)return null;const r=parseInt(n[1],10),a=parseInt(n[3],10),o=this._readPixels(t,a,r,n[0]==="-Y");return o?{width:a,height:r,levels:[o]}:null}_readPixels(e,t,s,i){if(t<8||t>32767)return this._readPixelsFlat(e,t,s);const n=[0,0,0,0];if(e.readArray(n),n[0]!==2||n[1]!==2||n[2]&128)return e.skip(-4),this._readPixelsFlat(e,t,s);const r=new ArrayBuffer(t*s*4),a=new Uint8Array(r);let o=i?0:t*4*(s-1),h,c,d,u,f,p;for(c=0;c<s;++c){if(c&&e.readArray(n),(n[2]<<8)+n[3]!==t)return null;for(u=0;u<4;++u)for(h=0;h<t;)if(f=e.readU8(),f>128){if(f-=128,h+f>t)return null;for(p=e.readU8(),d=0;d<f;++d)a[o+u+4*h++]=p}else{if(f===0||h+f>t)return null;for(d=0;d<f;++d)a[o+u+4*h++]=e.readU8()}o+=t*4*(i?1:-1)}return a}_readPixelsFlat(e,t,s){return e.remainingBytes===t*s*4?new Uint8Array(e.arraybuffer,e.offset):null}}const op={repeat:it,clamp:se,mirror:ed},lp={nearest:ve,linear:$e,nearest_mip_nearest:pl,linear_mip_nearest:_l,nearest_mip_linear:ml,linear_mip_linear:Xi},RP={default:Nt,rgbm:pi,rgbe:ad,rgbp:Hp,swizzleGGGR:El},IP=function(e){const t=Math.log2(Math.max(e._width,e._height))+1,s=function(r){return r instanceof HTMLCanvasElement||r instanceof HTMLImageElement||r instanceof HTMLVideoElement};if(!(e._format===he||e._format===nt)||e._volume||e._compressed||e._levels.length===1||e._levels.length===t||s(e._cubemap?e._levels[0][0]:e._levels[0]))return;const i=function(r,a,o){const h=Math.max(1,r>>1),c=Math.max(1,a>>1),d=new o.constructor(h*c*4),u=Math.floor(r/h),f=Math.floor(a/c),p=u*f;for(let _=0;_<c;++_)for(let m=0;m<h;++m)for(let g=0;g<4;++g){let w=0;for(let v=0;v<f;++v)for(let y=0;y<u;++y)w+=o[(m*u+y+(_*f+v)*r)*4+g];d[(m+_*h)*4+g]=w/p}return d};for(let n=e._levels.length;n<t;++n){const r=Math.max(1,e._width>>n-1),a=Math.max(1,e._height>>n-1);if(e._cubemap){const o=[];for(let h=0;h<6;++h)o.push(i(r,a,e._levels[n-1][h]));e._levels.push(o)}else e._levels.push(i(r,a,e._levels[n-1]))}e._levelsUpdated=e._cubemap?[[!0,!0,!0,!0,!0,!0]]:[!0]};class LP{constructor(e){this.handlerType="texture";const t=e.assets,s=e.graphicsDevice;this._device=s,this._assets=t,this._loader=e.loader,this.imgParser=new bP(t,s),this.parsers={dds:new PP(t),ktx:new CP(t),ktx2:new MP(t,s),basis:new SP(t,s),hdr:new EP(t)}}set crossOrigin(e){this.imgParser.crossOrigin=e}get crossOrigin(){return this.imgParser.crossOrigin}set maxRetries(e){this.imgParser.maxRetries=e;for(const t in this.parsers)this.parsers.hasOwnProperty(t)&&(this.parsers[t].maxRetries=e)}get maxRetries(){return this.imgParser.maxRetries}_getUrlWithoutParams(e){return e.indexOf("?")>=0?e.split("?")[0]:e}_getParser(e){const t=re.getExtension(this._getUrlWithoutParams(e)).toLowerCase().replace(".","");return this.parsers[t]||this.imgParser}load(e,t,s){typeof e=="string"&&(e={load:e,original:e}),this._getParser(e.original).load(e,t,s)}open(e,t,s){if(!e)return;let i=this._getParser(e).open(e,t,this._device);return i===null?i=new ae(this._device,{width:4,height:4,format:ks}):(IP(i),t.unswizzledGGGR&&(s.file.variants.basis.opt&=-9)),i}patch(e,t){const s=e.resource;if(!s)return;e.name&&e.name.length>0&&(s.name=e.name);const i=e.data;i.hasOwnProperty("minfilter")&&(s.minFilter=lp[i.minfilter]),i.hasOwnProperty("magfilter")&&(s.magFilter=lp[i.magfilter]),s.cubemap||(i.hasOwnProperty("addressu")&&(s.addressU=op[i.addressu]),i.hasOwnProperty("addressv")&&(s.addressV=op[i.addressv])),i.hasOwnProperty("mipmaps")&&(s.mipmaps=i.mipmaps),i.hasOwnProperty("anisotropy")&&(s.anisotropy=i.anisotropy),i.hasOwnProperty("flipY")&&(s.flipY=!!i.flipY),i.hasOwnProperty("type")?s.type=RP[i.type]:i.hasOwnProperty("rgbm")&&i.rgbm?s.type=pi:e.file&&e.file.opt&8&&(s.type=El)}}const DP="inline",hp="immersive-vr",Hn="immersive-ar",FP="viewer",OP="left",H_="cpu-optimized",BP="gpu-optimized",kP="luminance-alpha",cp=[],dp=[];class zP extends le{constructor(e,t,s){super(),this.manager=void 0,this._xrHitTestSource=void 0,this._transient=void 0,this.manager=e,this._xrHitTestSource=t,this._transient=s}remove(){if(!this._xrHitTestSource)return;const e=this.manager.hitTest.sources,t=e.indexOf(this);t!==-1&&e.splice(t,1),this.onStop()}onStop(){this._xrHitTestSource.cancel(),this._xrHitTestSource=null,this.fire("remove"),this.manager.hitTest.fire("remove",this)}update(e){if(this._transient){const t=e.getHitTestResultsForTransientInput(this._xrHitTestSource);for(let s=0;s<t.length;s++){const i=t[s];let n;i.inputSource&&(n=this.manager.input._getByInputSource(i.inputSource)),this.updateHitResults(i.results,n)}}else this.updateHitResults(e.getHitTestResults(this._xrHitTestSource))}updateHitResults(e,t){for(let s=0;s<e.length;s++){const i=e[s].getPose(this.manager._referenceSpace);let n=cp.pop();n||(n=new b),n.copy(i.transform.position);let r=dp.pop();r||(r=new ee),r.copy(i.transform.orientation),this.fire("result",n,r,t),this.manager.hitTest.fire("result",this,n,r,t),cp.push(n),dp.push(r)}}}class UP extends le{constructor(e){super(),this.manager=void 0,this._supported=st.browser&&!!(window.XRSession&&window.XRSession.prototype.requestHitTestSource),this._session=null,this.sources=[],this.manager=e,this._supported&&(this.manager.on("start",this._onSessionStart,this),this.manager.on("end",this._onSessionEnd,this))}_onSessionStart(){this.manager.type===Hn&&(this._session=this.manager.session)}_onSessionEnd(){if(this._session){this._session=null;for(let e=0;e<this.sources.length;e++)this.sources[e].onStop();this.sources=[]}}isAvailable(e,t){let s;return this._supported||(s=new Error("XR HitTest is not supported")),this._session||(s=new Error("XR Session is not started (1)")),this.manager.type!==Hn&&(s=new Error("XR HitTest is available only for AR")),s?(e&&e(s),t&&t.fire("error",s),!1):!0}start(e={}){if(!this.isAvailable(e.callback,this))return;!e.profile&&!e.spaceType&&(e.spaceType=FP);let t;const s=e.offsetRay;if(s){const n=new DOMPoint(s.origin.x,s.origin.y,s.origin.z,1),r=new DOMPoint(s.direction.x,s.direction.y,s.direction.z,0);t=new XRRay(n,r)}const i=e.callback;e.spaceType?this._session.requestReferenceSpace(e.spaceType).then(n=>{if(!this._session){const r=new Error("XR Session is not started (2)");i&&i(r),this.fire("error",r);return}this._session.requestHitTestSource({space:n,entityTypes:e.entityTypes||void 0,offsetRay:t}).then(r=>{this._onHitTestSource(r,!1,i)}).catch(r=>{i&&i(r),this.fire("error",r)})}).catch(n=>{i&&i(n),this.fire("error",n)}):this._session.requestHitTestSourceForTransientInput({profile:e.profile,entityTypes:e.entityTypes||void 0,offsetRay:t}).then(n=>{this._onHitTestSource(n,!0,i)}).catch(n=>{i&&i(n),this.fire("error",n)})}_onHitTestSource(e,t,s){if(!this._session){e.cancel();const n=new Error("XR Session is not started (3)");s&&s(n),this.fire("error",n);return}const i=new zP(this.manager,e,t);this.sources.push(i),s&&s(null,i),this.fire("add",i)}update(e){for(let t=0;t<this.sources.length;t++)this.sources[t].update(e)}get supported(){return this._supported}}class NP{constructor(e,t){this._index=void 0,this._hand=void 0,this._joints=[],this._tip=null,this._index=e,this._hand=t,this._hand._fingers.push(this)}get index(){return this._index}get hand(){return this._hand}get joints(){return this._joints}get tip(){return this._tip}}const up=st.browser&&window.XRHand?["thumb-tip","index-finger-tip","middle-finger-tip","ring-finger-tip","pinky-finger-tip"]:[],X_={};for(let l=0;l<up.length;l++)X_[up[l]]=!0;class fp{constructor(e,t,s,i=null){this._index=void 0,this._id=void 0,this._hand=void 0,this._finger=void 0,this._wrist=void 0,this._tip=void 0,this._radius=null,this._localTransform=new H,this._worldTransform=new H,this._localPosition=new b,this._localRotation=new ee,this._position=new b,this._rotation=new ee,this._dirtyLocal=!0,this._index=e,this._id=t,this._hand=s,this._finger=i,this._wrist=t==="wrist",this._tip=this._finger&&!!X_[t]}update(e){this._dirtyLocal=!0,this._radius=e.radius,this._localPosition.copy(e.transform.position),this._localRotation.copy(e.transform.orientation)}_updateTransforms(){this._dirtyLocal&&(this._dirtyLocal=!1,this._localTransform.setTRS(this._localPosition,this._localRotation,b.ONE));const t=this._hand._manager.camera.parent;t?this._worldTransform.mul2(t.getWorldTransform(),this._localTransform):this._worldTransform.copy(this._localTransform)}getPosition(){return this._updateTransforms(),this._worldTransform.getTranslation(this._position),this._position}getRotation(){return this._updateTransforms(),this._rotation.setFromMat4(this._worldTransform),this._rotation}get index(){return this._index}get hand(){return this._hand}get finger(){return this._finger}get wrist(){return this._wrist}get tip(){return this._tip}get radius(){return this._radius||.005}}let yo=[];const Ri=new b,io=new b,pp=new b;st.browser&&window.XRHand&&(yo=[["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"],["index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip"],["middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip"],["ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip"],["pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]]);class VP extends le{constructor(e){super(),this._manager=void 0,this._inputSource=void 0,this._tracking=!1,this._fingers=[],this._joints=[],this._jointsById={},this._tips=[],this._wrist=null;const t=e._xrInputSource.hand;if(this._manager=e._manager,this._inputSource=e,t.get("wrist")){const s=new fp(0,"wrist",this,null);this._wrist=s,this._joints.push(s),this._jointsById.wrist=s}for(let s=0;s<yo.length;s++){const i=new NP(s,this);for(let n=0;n<yo[s].length;n++){const r=yo[s][n];if(!t.get(r))continue;const a=new fp(n,r,this,i);this._joints.push(a),this._jointsById[r]=a,a.tip&&(this._tips.push(a),i._tip=a),i._joints.push(a)}}}update(e){const t=this._inputSource._xrInputSource;for(let c=0;c<this._joints.length;c++){const d=this._joints[c],u=t.hand.get(d._id);if(u){let f;if(e.session.visibilityState!=="hidden"&&(f=e.getJointPose(u,this._manager._referenceSpace)),f)d.update(f),d.wrist&&!this._tracking&&(this._tracking=!0,this.fire("tracking"));else if(d.wrist){this._tracking&&(this._tracking=!1,this.fire("trackinglost"));break}}}const s=this._jointsById["thumb-metacarpal"],i=this._jointsById["thumb-tip"],n=this._jointsById["index-finger-phalanx-proximal"],r=this._jointsById["index-finger-tip"],a=this._jointsById["ring-finger-phalanx-proximal"],o=this._jointsById["pinky-finger-phalanx-proximal"];if(s&&i&&n&&r&&a&&o){this._inputSource._dirtyRay=!0,this._inputSource._rayLocal.origin.lerp(i._localPosition,r._localPosition,.5);let c=s,d=o;if(this._inputSource.handedness===OP){const u=c;c=d,d=u}Ri.sub2(c._localPosition,this._wrist._localPosition),io.sub2(d._localPosition,this._wrist._localPosition),pp.cross(Ri,io).normalize(),Ri.lerp(n._localPosition,a._localPosition,.5),Ri.sub(this._wrist._localPosition).normalize(),this._inputSource._rayLocal.direction.lerp(pp,Ri,.5).normalize()}this._fingerIsClosed(1)&&this._fingerIsClosed(2)&&this._fingerIsClosed(3)&&this._fingerIsClosed(4)?this._inputSource._squeezing||(this._inputSource._squeezing=!0,this._inputSource.fire("squeezestart"),this._manager.input.fire("squeezestart",this._inputSource)):this._inputSource._squeezing&&(this._inputSource._squeezing=!1,this._inputSource.fire("squeeze"),this._manager.input.fire("squeeze",this._inputSource),this._inputSource.fire("squeezeend"),this._manager.input.fire("squeezeend",this._inputSource))}_fingerIsClosed(e){const t=this._fingers[e];return Ri.sub2(t.joints[0]._localPosition,t.joints[1]._localPosition).normalize(),io.sub2(t.joints[2]._localPosition,t.joints[3]._localPosition).normalize(),Ri.dot(io)<-.8}getJointById(e){return this._jointsById[e]||null}get fingers(){return this._fingers}get joints(){return this._joints}get tips(){return this._tips}get wrist(){return this._wrist}get tracking(){return this._tracking}}const mp=new ee;let GP=0;class WP extends le{constructor(e,t){super(),this._id=void 0,this._manager=void 0,this._xrInputSource=void 0,this._ray=new $h,this._rayLocal=new $h,this._grip=!1,this._hand=null,this._localTransform=null,this._worldTransform=null,this._position=new b,this._rotation=new ee,this._localPosition=null,this._localRotation=null,this._dirtyLocal=!0,this._dirtyRay=!1,this._selecting=!1,this._squeezing=!1,this._elementInput=!0,this._elementEntity=null,this._hitTestSources=[],this._id=++GP,this._manager=e,this._xrInputSource=t,t.hand&&(this._hand=new VP(this))}get id(){return this._id}get inputSource(){return this._xrInputSource}get targetRayMode(){return this._xrInputSource.targetRayMode}get handedness(){return this._xrInputSource.handedness}get profiles(){return this._xrInputSource.profiles}get grip(){return this._grip}get hand(){return this._hand}get gamepad(){return this._xrInputSource.gamepad||null}get selecting(){return this._selecting}get squeezing(){return this._squeezing}set elementInput(e){this._elementInput!==e&&(this._elementInput=e,this._elementInput||(this._elementEntity=null))}get elementInput(){return this._elementInput}get elementEntity(){return this._elementEntity}get hitTestSources(){return this._hitTestSources}update(e){if(this._hand)this._hand.update(e);else{if(this._xrInputSource.gripSpace){const s=e.getPose(this._xrInputSource.gripSpace,this._manager._referenceSpace);s&&(this._grip||(this._grip=!0,this._localTransform=new H,this._worldTransform=new H,this._localPosition=new b,this._localRotation=new ee),this._dirtyLocal=!0,this._localPosition.copy(s.transform.position),this._localRotation.copy(s.transform.orientation))}const t=e.getPose(this._xrInputSource.targetRaySpace,this._manager._referenceSpace);t&&(this._dirtyRay=!0,this._rayLocal.origin.copy(t.transform.position),this._rayLocal.direction.set(0,0,-1),mp.copy(t.transform.orientation),mp.transformVector(this._rayLocal.direction,this._rayLocal.direction))}}_updateTransforms(){this._dirtyLocal&&(this._dirtyLocal=!1,this._localTransform.setTRS(this._localPosition,this._localRotation,b.ONE));const e=this._manager.camera.parent;e?this._worldTransform.mul2(e.getWorldTransform(),this._localTransform):this._worldTransform.copy(this._localTransform)}_updateRayTransforms(){const e=this._dirtyRay;if(this._dirtyRay=!1,this._manager.camera.parent){const s=this._manager.camera.parent.getWorldTransform();s.getTranslation(this._position),this._rotation.setFromMat4(s),this._rotation.transformVector(this._rayLocal.origin,this._ray.origin),this._ray.origin.add(this._position),this._rotation.transformVector(this._rayLocal.direction,this._ray.direction)}else e&&(this._ray.origin.copy(this._rayLocal.origin),this._ray.direction.copy(this._rayLocal.direction))}getPosition(){return this._position?(this._updateTransforms(),this._worldTransform.getTranslation(this._position),this._position):null}getLocalPosition(){return this._localPosition}getRotation(){return this._rotation?(this._updateTransforms(),this._rotation.setFromMat4(this._worldTransform),this._rotation):null}getLocalRotation(){return this._localRotation}getOrigin(){return this._updateRayTransforms(),this._ray.origin}getDirection(){return this._updateRayTransforms(),this._ray.direction}hitTestStart(e={}){e.profile=this._xrInputSource.profiles[0];const t=e.callback;e.callback=(s,i)=>{i&&this.onHitTestSourceAdd(i),t&&t(s,i)},this._manager.hitTest.start(e)}onHitTestSourceAdd(e){this._hitTestSources.push(e),this.fire("hittest:add",e),e.on("result",function(t,s,i){i===this&&this.fire("hittest:result",e,t,s)},this),e.once("remove",function(){this.onHitTestSourceRemove(e),this.fire("hittest:remove",e)},this)}onHitTestSourceRemove(e){const t=this._hitTestSources.indexOf(e);t!==-1&&this._hitTestSources.splice(t,1)}}class HP extends le{constructor(e){super(),this.manager=void 0,this._inputSources=[],this._onInputSourcesChangeEvt=void 0,this.manager=e,this._onInputSourcesChangeEvt=t=>{this._onInputSourcesChange(t)},this.manager.on("start",this._onSessionStart,this),this.manager.on("end",this._onSessionEnd,this)}_onSessionStart(){const e=this.manager.session;e.addEventListener("inputsourceschange",this._onInputSourcesChangeEvt),e.addEventListener("select",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i.fire("select",s),this.fire("select",i,s)}),e.addEventListener("selectstart",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i._selecting=!0,i.fire("selectstart",s),this.fire("selectstart",i,s)}),e.addEventListener("selectend",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i._selecting=!1,i.fire("selectend",s),this.fire("selectend",i,s)}),e.addEventListener("squeeze",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i.fire("squeeze",s),this.fire("squeeze",i,s)}),e.addEventListener("squeezestart",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i._squeezing=!0,i.fire("squeezestart",s),this.fire("squeezestart",i,s)}),e.addEventListener("squeezeend",s=>{const i=this._getByInputSource(s.inputSource);i.update(s.frame),i._squeezing=!1,i.fire("squeezeend",s),this.fire("squeezeend",i,s)});const t=e.inputSources;for(let s=0;s<t.length;s++)this._addInputSource(t[s])}_onSessionEnd(){let e=this._inputSources.length;for(;e--;){const s=this._inputSources[e];this._inputSources.splice(e,1),s.fire("remove"),this.fire("remove",s)}this.manager.session.removeEventListener("inputsourceschange",this._onInputSourcesChangeEvt)}_onInputSourcesChange(e){for(let t=0;t<e.removed.length;t++)this._removeInputSource(e.removed[t]);for(let t=0;t<e.added.length;t++)this._addInputSource(e.added[t])}_getByInputSource(e){for(let t=0;t<this._inputSources.length;t++)if(this._inputSources[t].inputSource===e)return this._inputSources[t];return null}_addInputSource(e){if(this._getByInputSource(e))return;const t=new WP(this.manager,e);this._inputSources.push(t),this.fire("add",t)}_removeInputSource(e){for(let t=0;t<this._inputSources.length;t++){if(this._inputSources[t].inputSource!==e)continue;const s=this._inputSources[t];this._inputSources.splice(t,1);let i=s.hitTestSources.length;for(;i--;)s.hitTestSources[i].remove();s.fire("remove"),this.fire("remove",s);return}}update(e){for(let t=0;t<this._inputSources.length;t++)this._inputSources[t].update(e)}get inputSources(){return this._inputSources}}const Mn=new b,_p=new b,Hh=new H,gp=new H;class XP extends le{constructor(e){super(),this._manager=void 0,this._supported=!1,this._available=!1,this._lightProbeRequested=!1,this._lightProbe=null,this._intensity=0,this._rotation=new ee,this._color=new G,this._sphericalHarmonics=new Float32Array(27),this._manager=e,this._manager.on("start",this._onSessionStart,this),this._manager.on("end",this._onSessionEnd,this)}_onSessionStart(){this._manager.session.requestLightProbe&&(this._supported=!0)}_onSessionEnd(){this._supported=!1,this._available=!1,this._lightProbeRequested=!1,this._lightProbe=null}start(){let e;if(this._manager.session||(e=new Error("XR session is not running")),!e&&this._manager.type!==Hn&&(e=new Error("XR session type is not AR")),!e&&!this._supported&&(e=new Error("light-estimation is not supported")),(!e&&this._lightProbe||this._lightProbeRequested)&&(e=new Error("light estimation is already requested")),e){this.fire("error",e);return}this._lightProbeRequested=!0,this._manager.session.requestLightProbe().then(t=>{const s=this._lightProbeRequested;this._lightProbeRequested=!1,this._manager.active?s&&(this._lightProbe=t):this.fire("error",new Error("XR session is not active"))}).catch(t=>{this._lightProbeRequested=!1,this.fire("error",t)})}end(){this._lightProbeRequested=!1,this._lightProbe=null,this._available=!1}update(e){if(!this._lightProbe)return;const t=e.getLightEstimate(this._lightProbe);if(!t)return;this._available||(this._available=!0,this.fire("available"));const s=t.primaryLightIntensity;this._intensity=Math.max(1,Math.max(s.x,Math.max(s.y,s.z))),Mn.copy(s).mulScalar(1/this._intensity),this._color.set(Mn.x,Mn.y,Mn.z),Mn.set(0,0,0),_p.copy(t.primaryLightDirection),Hh.setLookAt(_p,Mn,b.UP),gp.setFromAxisAngle(b.RIGHT,90),Hh.mul(gp),this._rotation.setFromMat4(Hh),this._sphericalHarmonics.set(t.sphericalHarmonicsCoefficients)}get supported(){return this._supported}get available(){return this._available}get intensity(){return this._available?this._intensity:null}get color(){return this._available?this._color:null}get rotation(){return this._available?this._rotation:null}get sphericalHarmonics(){return this._available?this._sphericalHarmonics:null}}class qP extends le{constructor(e,t){super(),this._image=void 0,this._width=void 0,this._bitmap=null,this._measuredWidth=0,this._trackable=!1,this._tracking=!1,this._emulated=!1,this._pose=null,this._position=new b,this._rotation=new ee,this._image=e,this._width=t}get image(){return this._image}set width(e){this._width=e}get width(){return this._width}get trackable(){return this._trackable}get tracking(){return this._tracking}get emulated(){return this._emulated}prepare(){return this._bitmap?{image:this._bitmap,widthInMeters:this._width}:createImageBitmap(this._image).then(e=>(this._bitmap=e,{image:this._bitmap,widthInMeters:this._width}))}destroy(){this._image=null,this._pose=null,this._bitmap&&(this._bitmap.close(),this._bitmap=null)}getPosition(){return this._pose&&this._position.copy(this._pose.transform.position),this._position}getRotation(){return this._pose&&this._rotation.copy(this._pose.transform.orientation),this._rotation}}class jP extends le{constructor(e){super(),this._manager=void 0,this._supported=st.browser&&!!window.XRImageTrackingResult,this._available=!1,this._images=[],this._manager=e,this._supported&&(this._manager.on("start",this._onSessionStart,this),this._manager.on("end",this._onSessionEnd,this))}add(e,t){if(!this._supported||this._manager.active)return null;const s=new qP(e,t);return this._images.push(s),s}remove(e){if(this._manager.active)return;const t=this._images.indexOf(e);t!==-1&&(e.destroy(),this._images.splice(t,1))}_onSessionStart(){this._manager.session.getTrackedImageScores().then(e=>{this._available=!0;for(let t=0;t<e.length;t++)this._images[t]._trackable=e[t]==="trackable"}).catch(e=>{this._available=!1,this.fire("error",e)})}_onSessionEnd(){this._available=!1;for(let e=0;e<this._images.length;e++){const t=this._images[e];t._pose=null,t._measuredWidth=0,t._tracking&&(t._tracking=!1,t.fire("untracked"))}}prepareImages(e){this._images.length?Promise.all(this._images.map(function(t){return t.prepare()})).then(function(t){e(null,t)}).catch(function(t){e(t,null)}):e(null,null)}update(e){if(!this._available)return;const t=e.getImageTrackingResults(),s={};for(let i=0;i<t.length;i++){s[t[i].index]=t[i];const n=this._images[t[i].index];n._emulated=t[i].trackingState==="emulated",n._measuredWidth=t[i].measuredWidthInMeters,n._pose=e.getPose(t[i].imageSpace,this._manager._referenceSpace)}for(let i=0;i<this._images.length;i++)this._images[i]._tracking&&!s[i]?(this._images[i]._tracking=!1,this._images[i].fire("untracked")):!this._images[i]._tracking&&s[i]&&(this._images[i]._tracking=!0,this._images[i].fire("tracked"))}get supported(){return this._supported}get available(){return this._available}get images(){return this._images}}class YP{constructor(e){this._manager=void 0,this._supported=st.browser&&!!window.XRDOMOverlayState,this._root=null,this._manager=e}get supported(){return this._supported}get available(){return this._supported&&this._manager.active&&this._manager._session.domOverlayState!==null}get state(){return!this._supported||!this._manager.active||!this._manager._session.domOverlayState?null:this._manager._session.domOverlayState.type}set root(e){!this._supported||this._manager.active||(this._root=e)}get root(){return this._root}}class $P extends le{constructor(e){super(),this._manager=void 0,this._available=!1,this._depthInfoCpu=null,this._depthInfoGpu=null,this._usage=null,this._dataFormat=null,this._matrixDirty=!1,this._matrix=new H,this._emptyBuffer=new Uint8Array(32),this._depthBuffer=null,this._texture=void 0,this._manager=e,this._texture=new ae(this._manager.app.graphicsDevice,{format:wo,mipmaps:!1,addressU:se,addressV:se,minFilter:$e,magFilter:$e,name:"XRDepthSensing"}),this.supported&&(this._manager.on("start",this._onSessionStart,this),this._manager.on("end",this._onSessionEnd,this))}destroy(){this._texture.destroy(),this._texture=null}_onSessionStart(){const e=this._manager.session;try{this._usage=e.depthUsage,this._dataFormat=e.depthDataFormat}catch(t){this._usage=null,this._dataFormat=null,this._available=!1,this.fire("error",t)}}_onSessionEnd(){this._depthInfoCpu=null,this._depthInfoGpu=null,this._usage=null,this._dataFormat=null,this._available&&(this._available=!1,this.fire("unavailable")),this._depthBuffer=null,this._texture._width=4,this._texture._height=4,this._texture._levels[0]=this._emptyBuffer,this._texture.upload()}_updateTexture(){const e=this._depthInfoCpu||this._depthInfoGpu;if(e){let t=!1;if((e.width!==this._texture.width||e.height!==this._texture.height)&&(this._texture._width=e.width,this._texture._height=e.height,this._matrixDirty=!0,t=!0),this._depthInfoCpu){const s=this._depthInfoCpu.data;this._depthBuffer=new Uint8Array(s),this._texture._levels[0]=this._depthBuffer,this._texture.upload()}else this._depthInfoGpu&&(this._texture._levels[0]=this._depthInfoGpu.texture,this._texture.upload());t&&this.fire("resize",e.width,e.height)}else this._depthBuffer&&(this._depthBuffer=null,this._texture._width=4,this._texture._height=4,this._texture._levels[0]=this._emptyBuffer,this._texture.upload())}update(e,t){if(!this._usage)return;let s=null,i=null;if(this._usage===H_&&t?s=e.getDepthInformation(t):this._usage===BP&&t&&(i=e.getDepthInformation(t)),(this._depthInfoCpu&&!s||!this._depthInfoCpu&&s||this.depthInfoGpu&&!i||!this._depthInfoGpu&&i)&&(this._matrixDirty=!0),this._depthInfoCpu=s,this._depthInfoGpu=i,this._updateTexture(),this._matrixDirty){this._matrixDirty=!1;const n=this._depthInfoCpu||this._depthInfoGpu;n?this._matrix.data.set(n.normDepthBufferFromNormView.matrix):this._matrix.setIdentity()}(this._depthInfoCpu||this._depthInfoGpu)&&!this._available?(this._available=!0,this.fire("available")):!this._depthInfoCpu&&!this._depthInfoGpu&&this._available&&(this._available=!1,this.fire("unavailable"))}getDepth(e,t){return this._depthInfoCpu?this._depthInfoCpu.getDepthInMeters(e,t):null}get supported(){return st.browser&&!!window.XRDepthInformation}get available(){return this._available}get usage(){return this._usage}get dataFormat(){return this._dataFormat}get width(){const e=this._depthInfoCpu||this._depthInfoGpu;return e&&e.width||0}get height(){const e=this._depthInfoCpu||this._depthInfoGpu;return e&&e.height||0}get texture(){return this._texture}get uvMatrix(){return this._matrix}get rawValueToMeters(){const e=this._depthInfoCpu||this._depthInfoGpu;return e&&e.rawValueToMeters||0}}let KP=0;class ZP extends le{constructor(e,t){super(),this._id=void 0,this._planeDetection=void 0,this._xrPlane=void 0,this._lastChangedTime=void 0,this._orientation=void 0,this._position=new b,this._rotation=new ee,this._id=++KP,this._planeDetection=e,this._xrPlane=t,this._lastChangedTime=t.lastChangedTime,this._orientation=t.orientation}destroy(){this.fire("remove")}update(e){const t=this._planeDetection._manager,s=e.getPose(this._xrPlane.planeSpace,t._referenceSpace);s&&(this._position.copy(s.transform.position),this._rotation.copy(s.transform.orientation)),this._lastChangedTime!==this._xrPlane.lastChangedTime&&(this._lastChangedTime=this._xrPlane.lastChangedTime,this.fire("change"))}getPosition(){return this._position}getRotation(){return this._rotation}get id(){return this._id}get orientation(){return this._orientation}get points(){return this._xrPlane.polygon}}class JP extends le{constructor(e){super(),this._manager=void 0,this._supported=st.browser&&!!window.XRPlane,this._available=!1,this._planesIndex=new Map,this._planes=null,this._manager=e,this._supported&&this._manager.on("end",this._onSessionEnd,this)}_onSessionEnd(){if(this._planes)for(let e=0;e<this._planes.length;e++)this._planes[e].destroy();this._planesIndex.clear(),this._planes=null,this._available&&(this._available=!1,this.fire("unavailable"))}update(e){let t;if(this._available)t=e.detectedPlanes;else try{t=e.detectedPlanes,this._planes=[],this._available=!0,this.fire("available")}catch{return}for(const[s,i]of this._planesIndex)t.has(s)||(this._planesIndex.delete(s),this._planes.splice(this._planes.indexOf(i),1),i.destroy(),this.fire("remove",i));for(const s of t){let i=this._planesIndex.get(s);i?i.update(e):(i=new ZP(this,s),this._planesIndex.set(s,i),this._planes.push(i),i.update(e),this.fire("add",i))}}get supported(){return this._supported}get available(){return this._available}get planes(){return this._planes}}class QP extends le{constructor(e){super(),this.app=void 0,this._supported=st.browser&&!!navigator.xr,this._available={},this._type=null,this._spaceType=null,this._session=null,this._baseLayer=null,this._referenceSpace=null,this.depthSensing=void 0,this.domOverlay=void 0,this.hitTest=void 0,this.imageTracking=void 0,this.planeDetection=void 0,this.input=void 0,this.lightEstimation=void 0,this._camera=null,this.views=[],this.viewsPool=[],this._localPosition=new b,this._localRotation=new ee,this._depthNear=.1,this._depthFar=1e3,this._width=0,this._height=0,this.app=e,this._available[DP]=!1,this._available[hp]=!1,this._available[Hn]=!1,this.depthSensing=new $P(this),this.domOverlay=new YP(this),this.hitTest=new UP(this),this.imageTracking=new jP(this),this.planeDetection=new JP(this),this.input=new HP(this),this.lightEstimation=new XP(this),this._supported&&(navigator.xr.addEventListener("devicechange",()=>{this._deviceAvailabilityCheck()}),this._deviceAvailabilityCheck())}destroy(){this.depthSensing.destroy(),this.depthSensing=null}start(e,t,s,i){let n=i;if(typeof i=="object"&&(n=i.callback),!this._available[t]){n&&n(new Error("XR is not available"));return}if(this._session){n&&n(new Error("XR session is already started"));return}this._camera=e,this._camera.camera.xr=this,this._type=t,this._spaceType=s,this._setClipPlanes(e.nearClip,e.farClip);const r={requiredFeatures:[s],optionalFeatures:[]};if(t===Hn){if(r.optionalFeatures.push("light-estimation"),r.optionalFeatures.push("hit-test"),i&&(i.imageTracking&&this.imageTracking.supported&&r.optionalFeatures.push("image-tracking"),i.planeDetection&&r.optionalFeatures.push("plane-detection")),this.domOverlay.supported&&this.domOverlay.root&&(r.optionalFeatures.push("dom-overlay"),r.domOverlay={root:this.domOverlay.root}),i&&i.depthSensing&&this.depthSensing.supported){r.optionalFeatures.push("depth-sensing");const a=[H_],o=[kP];if(i.depthSensing.usagePreference){const h=a.indexOf(i.depthSensing.usagePreference);h!==-1&&a.splice(h,1),a.unshift(i.depthSensing.usagePreference)}if(i.depthSensing.dataFormatPreference){const h=o.indexOf(i.depthSensing.dataFormatPreference);h!==-1&&o.splice(h,1),o.unshift(i.depthSensing.dataFormatPreference)}r.depthSensing={usagePreference:a,dataFormatPreference:o}}}else t===hp&&r.optionalFeatures.push("hand-tracking");i&&i.optionalFeatures&&(r.optionalFeatures=r.optionalFeatures.concat(i.optionalFeatures)),this.imageTracking.supported&&this.imageTracking.images.length?this.imageTracking.prepareImages((a,o)=>{if(a){n&&n(a),this.fire("error",a);return}o!==null&&(r.trackedImages=o),this._onStartOptionsReady(t,s,r,n)}):this._onStartOptionsReady(t,s,r,n)}_onStartOptionsReady(e,t,s,i){navigator.xr.requestSession(e,s).then(n=>{this._onSessionStart(n,t,i)}).catch(n=>{this._camera.camera.xr=null,this._camera=null,this._type=null,this._spaceType=null,i&&i(n),this.fire("error",n)})}end(e){if(!this._session){e&&e(new Error("XR Session is not initialized"));return}e&&this.once("end",e),this._session.end()}isAvailable(e){return this._available[e]}_deviceAvailabilityCheck(){for(const e in this._available)this._sessionSupportCheck(e)}_sessionSupportCheck(e){navigator.xr.isSessionSupported(e).then(t=>{this._available[e]!==t&&(this._available[e]=t,this.fire("available",e,t),this.fire("available:"+e,t))}).catch(t=>{this.fire("error",t)})}_onSessionStart(e,t,s){let i=!1;this._session=e;const n=()=>{this.fire("visibility:change",e.visibilityState)},r=()=>{this._setClipPlanes(this._camera.nearClip,this._camera.farClip)},a=()=>{this._camera&&(this._camera.off("set_nearClip",r),this._camera.off("set_farClip",r),this._camera.camera.xr=null,this._camera=null),e.removeEventListener("end",a),e.removeEventListener("visibilitychange",n),i||this.fire("end"),this._session=null,this._referenceSpace=null,this.views=[],this._width=0,this._height=0,this._type=null,this._spaceType=null,this.app.tick()};e.addEventListener("end",a),e.addEventListener("visibilitychange",n),this._camera.on("set_nearClip",r),this._camera.on("set_farClip",r),this._baseLayer=new XRWebGLLayer(e,this.app.graphicsDevice.gl,{alpha:!0,depth:!0,stencil:!0}),e.updateRenderState({baseLayer:this._baseLayer,depthNear:this._depthNear,depthFar:this._depthFar}),e.requestReferenceSpace(t).then(o=>{this._referenceSpace=o,this.app.tick(),s&&s(null),this.fire("start")}).catch(o=>{i=!0,e.end(),s&&s(o),this.fire("error",o)})}_setClipPlanes(e,t){this._depthNear===e&&this._depthFar===t||(this._depthNear=e,this._depthFar=t,this._session&&this._session.updateRenderState({depthNear:this._depthNear,depthFar:this._depthFar}))}update(e){if(!this._session)return!1;const t=e.session.renderState.baseLayer.framebufferWidth,s=e.session.renderState.baseLayer.framebufferHeight;(this._width!==t||this._height!==s)&&(this._width=t,this._height=s,this.app.graphicsDevice.setResolution(t,s));const i=e.getViewerPose(this._referenceSpace);if(!i)return!1;const n=i.views.length;if(n>this.views.length)for(let h=0;h<=n-this.views.length;h++){let c=this.viewsPool.pop();c||(c={viewport:new K,projMat:new H,viewMat:new H,viewOffMat:new H,viewInvMat:new H,viewInvOffMat:new H,projViewOffMat:new H,viewMat3:new Wt,position:new Float32Array(3),rotation:new ee}),this.views.push(c)}else if(n<=this.views.length)for(let h=0;h<this.views.length-n;h++)this.viewsPool.push(this.views.pop());const r=i.transform.position,a=i.transform.orientation;this._localPosition.set(r.x,r.y,r.z),this._localRotation.set(a.x,a.y,a.z,a.w);const o=e.session.renderState.baseLayer;for(let h=0;h<i.views.length;h++){const c=i.views[h],d=this.views[h],u=o.getViewport(c);d.viewport.x=u.x,d.viewport.y=u.y,d.viewport.z=u.width,d.viewport.w=u.height,d.projMat.set(c.projectionMatrix),d.viewMat.set(c.transform.inverse.matrix),d.viewInvMat.set(c.transform.matrix)}return this._camera.camera._node.setLocalPosition(this._localPosition),this._camera.camera._node.setLocalRotation(this._localRotation),this.input.update(e),this._type===Hn&&(this.hitTest.supported&&this.hitTest.update(e),this.lightEstimation.supported&&this.lightEstimation.update(e),this.depthSensing.supported&&this.depthSensing.update(e,i&&i.views[0]),this.imageTracking.supported&&this.imageTracking.update(e),this.planeDetection.supported&&this.planeDetection.update(e)),this.fire("update",e),!0}get supported(){return this._supported}get active(){return!!this._session}get type(){return this._type}get spaceType(){return this._spaceType}get session(){return this._session}get camera(){return this._camera?this._camera.entity:null}get visibilityState(){return this._session?this._session.visibilityState:null}}class eE extends Wn{constructor(e,t={}){super(e);const s=new GT;s.graphicsDevice=this.createDevice(e,t),this.addComponentSystems(s),this.addResourceHandles(s),s.elementInput=t.elementInput,s.keyboard=t.keyboard,s.mouse=t.mouse,s.touch=t.touch,s.gamepads=t.gamepads,s.scriptPrefix=t.scriptPrefix,s.assetPrefix=t.assetPrefix,s.scriptsOrder=t.scriptsOrder,s.soundManager=new Zy,s.lightmapper=YT,s.batchManager=wb,s.xr=QP,this.init(s)}createDevice(e,t){return t.graphicsDeviceOptions||(t.graphicsDeviceOptions={}),st.browser&&navigator.xr&&(t.graphicsDeviceOptions.xrCompatible=!0),t.graphicsDeviceOptions.alpha=t.graphicsDeviceOptions.alpha||!1,new jy(e,t.graphicsDeviceOptions)}addComponentSystems(e){e.componentSystems=[GA,WC,gA,pC,vC,EA,kA,vM,wM,zt.legacy?$A:BM,TC,hM,bC,FA,XA,fA,PC,nM,aM,pM,MA,xA,_M]}addResourceHandles(e){e.resourceHandlers=[kM,P1,E1,R1,tP,X1,LP,lP,V1,L1,iP,sP,B1,N1,O1,nP,U1,k1,z1,D1,cP,rP,oP,F1]}}function tE({hue:l=0,saturation:e=0,luminance:t=0}){if(l<0||l>360)throw new RangeError(`Hue in createColor must be a value between 0 and 360. Found: ${l}`);if(e<0||e>1)throw new RangeError(`Saturation in createColor must be a value between 0 and 1. Found: ${e}`);if(t<0||t>1)throw new RangeError(`Luminance in createColor must be a value between 0 and 1. Found: ${t}`);const s=e*Math.min(t,1-t),i=n=>{const r=(n+l/30)%12;return t-s*Math.max(Math.min(r-3,9-r,1),-1)};return new G(i(0),i(8),i(4))}class Ed{constructor({name:e,transform:t,behaviors:s}){this.entity=new be(e),this.transform=t,this.behaviors={};for(const i in s)this.behaviors[i]=s[i].bind(this)}get transform(){return this._transform}set transform({position:e={x:0,y:0,z:0},rotation:t={x:0,y:0,z:0},scale:s={x:1,y:1,z:1}}={}){this.entity.setLocalPosition(e.x,e.y,e.z),this.entity.setLocalEulerAngles(t.x,t.y,t.z),this.entity.setLocalScale(s.x,s.y,s.z),this._transform={position:e,rotation:t,scale:s}}update(e){for(const t in this.behaviors)this.behaviors[t]({...e,self:this})}}class sE extends Ed{constructor({model:e,...t}){super(t),this.entity.addComponent("model",{type:e})}}class iE extends Ed{constructor(e){super(e),this.entity.addComponent("camera")}}class nE extends Ed{constructor(e){super(e),this.entity.addComponent("light")}}class rE{constructor({cameras:e,lights:t,actors:s,backdrop:i}){this.backgroundColor=tE(i);for(const{entity:n}of Object.values(e))n.camera.clearColor=this.backgroundColor;this.cameras=e,this.lights=t,this.actors=s}update(e){const t={scene:this,...e};for(const s in this.cameras)this.cameras[s].update(t);for(const s in this.lights)this.lights[s].update(t);for(const s in this.actors)this.actors[s].update(t)}}class aE{constructor({stageElement:e,curtainElement:t}){this.stageElement=e,this.curtainElement=t,this.isRendering=!1,this._app=new eE(this.stageElement),this._app.setCanvasFillMode(Lm),this._app.setCanvasResolution(Tc),this._app.autoRender=!1}add(e){for(const t in e)this._app.root.addChild(e[t].entity)}remove(e){for(const t in e)this_app.root.removeChild(e[t].entity)}render(){this.isRendering||(this.isRendering=!0,this._app.start()),this._app.resizeCanvas(),this._app.renderNextFrame=this.isRendering}}function oE(...l){return l.reduce((e,{position:t,rotation:s,scale:i})=>(t&&(e.position??(e.position={x:0,y:0,z:0}),e.position.x+=t.x,e.position.y+=t.y,e.position.z+=t.z),s&&(e.rotation??(e.rotation={x:0,y:0,z:0}),e.rotation.x+=s.x,e.rotation.y+=s.y,e.rotation.z+=s.z),i&&(e.scale??(e.scale={x:1,y:1,z:1}),e.scale.x*=i.x,e.scale.y*=i.y,e.scale.z*=i.z),e),{})}class lE{constructor({stage:e,currentScene:t="main",scenes:s}){this.stage=e,this.scenes=s,this.currentScene=t}get currentScene(){return this.scenes[this._currentScene]}set currentScene(e){const t=this.scenes[this._currentScene];t&&(this.stage.remove(t.cameras),this.stage.remove(t.lights),this.stage.remove(t.actors)),this._currentScene=e;const s=this.scenes[this._currentScene];this.stage.add(s.cameras),this.stage.add(s.lights),this.stage.add(s.actors)}play(){this._loopID||(this._loopID=this._loop())}pause(){cancelAnimationFrame(this._loopID),this._loopID=null,this.stage.isRendering=!1}update({deltaTime:e=0}){this.currentScene.update({deltaTime:e,game:this}),this.stage.render()}_loop(){const e=performance.now();this._loopID=requestAnimationFrame(()=>{this.update({deltaTime:(performance.now()-e)/1e3}),this._loop()})}}const hE={class:"ThreeDimensionalCanvas__container"},cE={__name:"3D",setup(l){const{public:{threeDimensional:e}}=Y_(),t=kd(null),s=kd(null);return $_(()=>{const i=new aE({stageElement:t.value}),n=new rE({actors:{cube:new sE({name:"Cube",model:"box",behaviors:{idleRotation:({self:r,deltaTime:a})=>{r.transform=oE(r.transform,{rotation:{x:e.rotationSpeedCube.x*a,y:e.rotationSpeedCube.y*a,z:e.rotationSpeedCube.z*a}})}}})},backdrop:e.colorBackground,cameras:{main:new iE({name:"Main Camera",transform:{position:e.positionCamera}})},lights:{main:new nE({name:"Main Light",transform:{rotation:e.rotationLight}})}});s.value=new lE({scenes:{main:n},stage:i}),s.value.play()}),K_(()=>s.value.pause()),(i,n)=>(Q_(),Z_("div",hE,[J_("canvas",{ref_key:"canvas",ref:t,class:"ThreeDimensionalCanvas"},null,512)]))}},fE=eg(cE,[["__scopeId","data-v-a64257d9"]]);export{fE as default};