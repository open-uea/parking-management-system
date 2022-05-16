!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).pms={})}(this,function(t){var e;!function(t){t[t.COST_BY_MILLISECONDS=.001667]="COST_BY_MILLISECONDS",t.ADMIN_STATE_ONLINE="online",t.ADMIN_STATE_OFFLINE="offline",t.DRIVER_STATE_ACTIVE="active",t.DRIVER_STATE_BANNED="banned",t.SPOT_TYPE_STANDARD="standard",t.SPOT_STATE_OPENED="opened",t.SPOT_STATE_RESERVED="reserved",t.SPOT_STATE_OCCUPIED="occupied",t.LOT_STATE_OPENED="opened",t.LOT_STATE_CLOSED="closed",t.PAYMENT_ANNOTATION_CREDIT="credit",t.PAYMENT_ANNOTATION_DEBIT="debit",t.PAYMENT_ACTIVE="active",t.PAYMENT_PROCESSING="processing",t.PAYMENT_SUCCESSFUL="successful",t.PAYMENT_DECLINED="declined",t.REQUEST_PENDING="pending",t.REQUEST_ACCEPTED="accepted",t.REQUEST_REJECTED="rejected",t.REQUEST_IN_USE="inuse",t.REQUEST_EXPIRED="expired",t.MESSAGE_STATE_DELIVERED="delivered",t.MESSAGE_STATE_READ="read",t.NOTIFICATION_STATE_DISPATCHED="dispatched",t.NOTIFICATION_STATE_RECEIVED="received",t.ORM_LOTS="LOTS",t.ORM_ADMINS="ADMINS",t.ORM_DRIVERS="DRIVERS",t.ORM_MESSAGES="MESSAGES",t.ORM_REQUESTS="REQUESTS",t.ORM_PAYMENTS="PAYMENTS",t.ORM_NOTIFICATIONS="NOTIFICATIONS",t.DB_FILE_PATH="./public/db/index.json",t.API_ENDPOINT_AUTH="/api/v1/auth?",t.API_ENDPOINT_RECOVER_EMAIL="/api/v1/recover-email?",t.API_ENDPOINT_GET_ALL="/api/v1/get_all?",t.API_ENDPOINT_GET="/api/v1/get?",t.API_ENDPOINT_PUT="/api/v1/put?",t.API_ENDPOINT_POST="/api/v1/post?",t.API_ENDPOINT_DELETE="/api/v1/delete?"}(e||(e={}));const r={BEFORE_FETCH:()=>{},AFTER_FETCH:()=>{}},n=new class{constructor(){this.db=void 0,this._getFromJSONBin()}backend({body:t,endpoint:n}){let i=0;return r.BEFORE_FETCH(),new Promise((s,o)=>{const a=t=>this._putToJSONBin(n).then(()=>{r.AFTER_FETCH(),s(t)}),u=t=>(r.AFTER_FETCH(),o(t)),c=setInterval(()=>{if(i++,this.db){clearInterval(c);let r=[];const{pathname:i,searchParams:s}=new URL("http://localhost:3000"+n),o=s.get("table");for(const[t,e]of s)"table"!=t&&(r=[t,e]);switch(i+"?"){case e.API_ENDPOINT_GET_ALL:a(this.db[o]);break;case e.API_ENDPOINT_GET:a(this.db[o].filter(t=>t[r[0]]===r[1])[0]);break;case e.API_ENDPOINT_POST:this.db[o].push(JSON.parse(t)),a(JSON.parse(t));break;case e.API_ENDPOINT_PUT:let n;this.db[o]=this.db[o].map(e=>e[r[0]]===r[1]?(n={...e,...JSON.parse(t)},n):e),a(n);break;case e.API_ENDPOINT_DELETE:this.db[o]=this.db[o].filter(t=>t[r[0]]!==r[1]),a("{status: SUCCESSFUL}");break;case e.API_ENDPOINT_AUTH:a(this.db[o].filter(e=>e.password===JSON.parse(t).password&&(e.name===JSON.parse(t).name||e.email&&e.email===JSON.parse(t).email))[0]);break;case e.API_ENDPOINT_RECOVER_EMAIL:a("{status: SUCCESSFUL}");break;default:u(`Unknown api endpoint ${i}`)}}10===i&&(clearInterval(c),u(`${e.DB_FILE_PATH} connection timed out`))},1e3)})}_getFromJSONBin(){fetch("https://api.jsonbin.io/b/6266ff3b019db4679691967c",{method:"GET",headers:{versioning:!1,"Secret-Key":"$2b$10$7r9JOM3pywMiCEjVDCMg0.h/QybOzC3DqhplCvwT1P.bA6tv7LWgy"}}).then(t=>{if(200!==t.status)throw Error("Something went wrong with the connection");return t.json()}).then(t=>{this.db=t}).catch(t=>console.error(t))}_putToJSONBin(t){const{pathname:r}=new URL("http://localhost:3000"+t),n=r+"?";return n===e.API_ENDPOINT_POST||n===e.API_ENDPOINT_PUT||n===e.API_ENDPOINT_DELETE?new Promise((t,e)=>{fetch("https://api.jsonbin.io/b/6266ff3b019db4679691967c",{method:"PUT",headers:{"Content-Type":"application/json",versioning:!1,"Secret-Key":"$2b$10$7r9JOM3pywMiCEjVDCMg0.h/QybOzC3DqhplCvwT1P.bA6tv7LWgy"},body:JSON.stringify(this.db)}).then(t=>{if(200!==t.status)throw Error("Something went wrong with the connection");return t.json()}).then(({data:e})=>{this.db=e,t()}).catch(t=>e(t))}):Promise.resolve()}};var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){!function(e){var r="object"==typeof s?s:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),n=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===r.Reflect?r.Reflect=t:n=i(r.Reflect,n),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",s="function"==typeof Object.create,o={__proto__:[]}instanceof Array,a=!s&&!o,u={create:s?function(){return Y(Object.create(null))}:o?function(){return Y({__proto__:null})}:function(){return Y({})},has:a?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:a?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,f=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,i=r+1;i<n;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,s)},e.prototype.entries=function(){return new r(this._keys,this._values,o)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function s(t,e){return e}function o(t,e){return[t,e]}}():Map,E=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new f}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,p=new(h||"function"!=typeof WeakMap?function(){var t=u.create(),r=n();return function(){function t(){this._key=n()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&u.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?u.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=n()},t}();function n(){var e;do{e="@@WeakMap@@"+o()}while(u.has(t,e));return t[e]=!0,e}function i(t,n){if(!e.call(t,r)){if(!n)return;Object.defineProperty(t,r,{value:u.create()})}return t[r]}function s(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function o(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):s(new Uint8Array(t),t):s(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<16;++n){var i=e[n];4!==n&&6!==n&&8!==n||(r+="-"),i<16&&(r+="0"),r+=i.toString(16).toLowerCase()}return r}}():WeakMap);function d(t,e,r){var n=p.get(t);if(P(n)){if(!r)return;n=new f,p.set(t,n)}var i=n.get(e);if(P(i)){if(!r)return;i=new f,n.set(e,i)}return i}function _(t,e,r){if(T(t,e,r))return!0;var n=C(e);return!R(n)&&_(t,n,r)}function T(t,e,r){var n=d(e,r,!1);return!P(n)&&!!n.has(t)}function l(t,e,r){if(T(t,e,r))return y(t,e,r);var n=C(e);return R(n)?void 0:l(t,n,r)}function y(t,e,r){var n=d(e,r,!1);if(!P(n))return n.get(t)}function O(t,e,r,n){d(r,n,!0).set(t,e)}function v(t,e){var r=A(t,e),n=C(t);if(null===n)return r;var i=v(n,e);if(i.length<=0)return r;if(r.length<=0)return i;for(var s=new E,o=[],a=0,u=r;a<u.length;a++)s.has(f=u[a])||(s.add(f),o.push(f));for(var c=0,h=i;c<h.length;c++){var f;s.has(f=h[c])||(s.add(f),o.push(f))}return o}function A(t,e){var r=[],n=d(t,e,!1);if(P(n))return r;for(var s=function(t){var e=g(t,i);if(!D(e))throw new TypeError;var r=e.call(t);if(!m(r))throw new TypeError;return r}(n.keys()),o=0;;){var a=M(s);if(!a)return r.length=o,r;var u=a.value;try{r[o]=u}catch(t){try{b(s)}finally{throw t}}o++}}function S(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function P(t){return void 0===t}function R(t){return null===t}function m(t){return"object"==typeof t?null!==t:"function"==typeof t}function I(t){var e=function(t,e){switch(S(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=g(t,n);if(void 0!==r){var i=r.call(t,"string");if(m(i))throw new TypeError;return i}return function(t,e){var r,n,i=t.toString;if(D(i)&&!m(n=i.call(t)))return n;if(D(r=t.valueOf)&&!m(n=r.call(t)))return n;throw new TypeError}(t)}(t);return"symbol"==typeof e?e:function(t){return""+t}(e)}function N(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function D(t){return"function"==typeof t}function w(t){return"function"==typeof t}function g(t,e){var r=t[e];if(null!=r){if(!D(r))throw new TypeError;return r}}function M(t){var e=t.next();return!e.done&&e}function b(t){var e=t.return;e&&e.call(t)}function C(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var i=n.constructor;return"function"!=typeof i||i===t?e:i}function Y(t){return t.__=void 0,delete t.__,t}t("decorate",function(t,e,r,n){if(P(r)){if(!N(t))throw new TypeError;if(!w(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!P(n)&&!R(n)){if(!w(n))throw new TypeError;e=n}}return e}(t,e)}if(!N(t))throw new TypeError;if(!m(e))throw new TypeError;if(!m(n)&&!P(n)&&!R(n))throw new TypeError;return R(n)&&(n=void 0),function(t,e,r,n){for(var i=t.length-1;i>=0;--i){var s=(0,t[i])(e,r,n);if(!P(s)&&!R(s)){if(!m(s))throw new TypeError;n=s}}return n}(t,e,r=I(r),n)}),t("metadata",function(t,e){return function(r,n){if(!m(r))throw new TypeError;if(!P(n)&&!function(t){switch(S(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;O(t,e,r,n)}}),t("defineMetadata",function(t,e,r,n){if(!m(r))throw new TypeError;return P(n)||(n=I(n)),O(t,e,r,n)}),t("hasMetadata",function(t,e,r){if(!m(e))throw new TypeError;return P(r)||(r=I(r)),_(t,e,r)}),t("hasOwnMetadata",function(t,e,r){if(!m(e))throw new TypeError;return P(r)||(r=I(r)),T(t,e,r)}),t("getMetadata",function(t,e,r){if(!m(e))throw new TypeError;return P(r)||(r=I(r)),l(t,e,r)}),t("getOwnMetadata",function(t,e,r){if(!m(e))throw new TypeError;return P(r)||(r=I(r)),y(t,e,r)}),t("getMetadataKeys",function(t,e){if(!m(t))throw new TypeError;return P(e)||(e=I(e)),v(t,e)}),t("getOwnMetadataKeys",function(t,e){if(!m(t))throw new TypeError;return P(e)||(e=I(e)),A(t,e)}),t("deleteMetadata",function(t,e,r){if(!m(e))throw new TypeError;P(r)||(r=I(r));var n=d(e,r,!1);if(P(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var i=p.get(e);return i.delete(r),i.size>0||p.delete(e),!0})}(n)}()}(i||(i={}));var o=function(t){var e={exports:{}};return function(t,e){function r(t,e,r,n){var i,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,r,o):i(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o}function n(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}Object.defineProperty(e,"__esModule",{value:!0});var i,s="JsonProperties",o="JsonIgnore",a=function(t,e){return Reflect.getMetadata(d,t,e)},u=function(t,e){var r=a(t,e);return null!=r&&null!=r.name?r.name:e},c=function(t){switch(t){case E.STRING_TYPE:case E.NUMBER_TYPE:case E.BOOLEAN_TYPE:case E.DATE_TYPE:case E.STRING_TYPE_LOWERCASE:case E.NUMBER_TYPE_LOWERCASE:case E.BOOLEAN_TYPE_LOWERCASE:case E.DATE_TYPE_LOWERCASE:return!0;default:return!1}},h=function(t){return t.name||function(t){var e=t.toString(),r=e.indexOf("class"),n=e.indexOf("{",r+5);return e.substring(r+5,n).trim()}(t)},f=function(t,e){return Reflect.getMetadata("design:type",t,e)},E={OBJECT_TYPE:"Object",OBJECT_TYPE_LOWERCASE:"object",STRING_TYPE:"String",STRING_TYPE_LOWERCASE:"string",NUMBER_TYPE:"Number",NUMBER_TYPE_LOWERCASE:"number",BOOLEAN_TYPE:"Boolean",BOOLEAN_TYPE_LOWERCASE:"boolean",DATE_TYPE:"Date",DATE_TYPE_LOWERCASE:"date",ARRAY_TYPE:"Array",ARRAY_TYPE_LOWERCASE:"array",FROM_ARRAY:"fromArray"},p=function(t,e){var r=null!=t.getJsonObjectMapperCacheKey?t.getJsonObjectMapperCacheKey():h(t);return e[r]||(e[r]=new t),e[r]},d="JsonProperty";(i=e.AccessType||(e.AccessType={}))[i.READ_ONLY=0]="READ_ONLY",i[i.WRITE_ONLY=1]="WRITE_ONLY",i[i.BOTH=2]="BOTH";var _=function(t){return function(e){var r=new Function("return '"+t+"';");e.getJsonObjectMapperCacheKey=r}},T=function(t,e){this.json=e,this.message=t,this.stack=(new Error).stack},l=function(t,e,r,n,i){try{return t[e]=n[i],[]}catch(r){throw new T("Property '"+e+"' of "+t.constructor.name+" does not match datatype of "+i,n)}},y=function(t,e,r,n,i){try{return t[e]=new Date(n[i]),[]}catch(r){throw new T("Property '"+e+"' of "+t.constructor.name+" does not match datatype of "+i,n)}},O=function(t,e,r,n,i){var s=void 0!==i?n[i]||[]:n,o=s.length,a=[],u=[];if(t[e]=u,o>0)for(var f=0;f<o;f++)if(s[f]){var p=h(r);if(c(p))u.push(P[E.FROM_ARRAY](s[f],p));else{var d=new r;a.push({functionName:E.OBJECT_TYPE,instance:d,json:s[f]}),u.push(d)}}return a},v=function(t,r,n,i,u){var p,d=[];null!=r?(p=new n,t[r]=p):p=t;var _=Object.keys(p);return(_=(_=_.concat((Reflect.getMetadata(s,p)||[]).filter(function(t){return(!p.constructor.prototype.hasOwnProperty(t)||void 0!==Object.getOwnPropertyDescriptor(p.constructor.prototype,t).set)&&_.indexOf(t)<0}))).filter(function(t){return!Reflect.hasMetadata(o,p,t)})).forEach(function(t){var r=a(p,t);if(void 0===r&&(r={name:t,required:!1,access:e.AccessType.BOTH}),e.AccessType.WRITE_ONLY!=r.access){if(r.required&&void 0===i[r.name])throw new T("JSON structure does have have required property '"+r.name+"' as required by '"+h(p)+"["+t+"]",i);var n=null!=r.name?r.name:t;if(null!=i[n])if(null!=r.deserializer)p[t]=S(r.deserializer).deserialize(i[n]);else if(void 0===r.type)p[t]=i[n];else if(function(t,e){return Array===f(t,e)}(p,t))P[E.ARRAY_TYPE](p,t,r.type,i,n).forEach(function(t){d.push(t)});else{var s=null!=r.type?h(r.type):function(t,e){var r=f(t,e);return null!=r?h(r):r}(p,t);c(s)?P[s](p,t,s,i,n):(p[t]=new r.type,d.push({functionName:E.OBJECT_TYPE,type:r.type,instance:p[t],json:i[n]}))}}}),d},A={},S=function(t){return p(t,A)},P={};P[E.OBJECT_TYPE]=v,P[E.ARRAY_TYPE]=O,P[E.DATE_TYPE]=y,P[E.STRING_TYPE]=l,P[E.NUMBER_TYPE]=l,P[E.BOOLEAN_TYPE]=l,P[E.FROM_ARRAY]=function(t,e){return e===E.DATE_TYPE?new Date(t):t},P[E.OBJECT_TYPE_LOWERCASE]=v,P[E.ARRAY_TYPE_LOWERCASE]=O,P[E.DATE_TYPE_LOWERCASE]=y,P[E.STRING_TYPE_LOWERCASE]=l,P[E.NUMBER_TYPE_LOWERCASE]=l,P[E.BOOLEAN_TYPE_LOWERCASE]=l;var R=function(t,e,r){var n={},i=e.instance;return e.visited=!0,i.forEach(function(t){if(void 0!==t)if(c(typeof t))e.values.push(L[typeof t](void 0,t,Y[typeof t]));else{var i={id:j(),type:E.OBJECT_TYPE,instance:t,parentIndex:r,values:[],key:void 0,visited:!1};n[i.id]=i}}),m(n)},m=function(t){var e=[];return Object.keys(t).forEach(function(r){e.push(t[r])}),e},I=function(t,e){N(t),e.values.push(t.values.pop())},N=function(t){var e,r;e=t.type===E.OBJECT_TYPE?(void 0!==(r=t.key)?'"'+r+'":':"")+"{"+t.values.join()+"}":function(t,e){return(void 0!==t?'"'+t+'":':"")+"["+e.join()+"]"}(t.key,t.values),t.values=[],t.values.push(e)},D=function(t,r,n){var i={};r.visited=!0;var h=Object.keys(r.instance);return(h=(h=h.concat((Reflect.getMetadata(s,r.instance)||[]).filter(function(t){return(!r.instance.constructor.prototype.hasOwnProperty(t)||void 0!==Object.getOwnPropertyDescriptor(r.instance.constructor.prototype,t).get)&&h.indexOf(t)<0}))).filter(function(t){return!Reflect.hasMetadata(o,r.instance,t)})).forEach(function(t){var s=r.instance[t];if(null===s)r.values.push('"'+t+'":'+s);else if(void 0!==s){var o=a(r.instance,t);if(void 0!==o&&e.AccessType.READ_ONLY===o.access);else if(void 0!==o&&void 0!==o.serializer){var h=U(o.serializer);r.values.push(L[E.STRING_TYPE](u(r.instance,t),s,h))}else if(s instanceof Array){var f={id:j(),type:E.ARRAY_TYPE,instance:s,parentIndex:n,values:[],key:u(r.instance,t),visited:!1};i[f.id]=f}else c(typeof s)?(h=Y[typeof s],r.values.push(L[typeof s](u(r.instance,t),s,h))):(f={id:j(),type:E.OBJECT_TYPE,instance:s,parentIndex:n,values:[],key:u(r.instance,t),visited:!1},i[f.id]=f)}}),m(i)},w=function(t,e,r){var n=r.serialize(e);return void 0!==t?'"'+t+'":'+n:n},g=r([_("DateSerializer"),n("design:paramtypes",[])],function(){this.serialize=function(t){return t.getTime()}}),M=r([_("StringSerializer"),n("design:paramtypes",[])],function(){this.serialize=function(t){return JSON.stringify(t)}}),b=r([_("NumberSerializer"),n("design:paramtypes",[])],function(){this.serialize=function(t){return t}}),C=r([_("BooleanSerializer"),n("design:paramtypes",[])],function(){this.serialize=function(t){return t}}),Y={};Y[E.STRING_TYPE]=new M,Y[E.NUMBER_TYPE]=new b,Y[E.DATE_TYPE]=new g,Y[E.BOOLEAN_TYPE]=new C,Y[E.STRING_TYPE_LOWERCASE]=Y[E.STRING_TYPE],Y[E.NUMBER_TYPE_LOWERCASE]=Y[E.NUMBER_TYPE],Y[E.DATE_TYPE_LOWERCASE]=Y[E.DATE_TYPE],Y[E.BOOLEAN_TYPE_LOWERCASE]=Y[E.BOOLEAN_TYPE];var U=function(t){return p(t,Y)},L=[];L[E.STRING_TYPE]=w,L[E.NUMBER_TYPE]=w,L[E.BOOLEAN_TYPE]=w,L[E.DATE_TYPE]=w,L[E.ARRAY_TYPE]=R,L[E.OBJECT_TYPE]=D,L[E.STRING_TYPE_LOWERCASE]=w,L[E.NUMBER_TYPE_LOWERCASE]=w,L[E.BOOLEAN_TYPE_LOWERCASE]=w,L[E.DATE_TYPE_LOWERCASE]=w,L[E.ARRAY_TYPE_LOWERCASE]=R,L[E.OBJECT_TYPE_LOWERCASE]=D;var j=function(){return Math.random()+"-"+Date.now()};!function(t){t.deserializeArray=function(t,r){var n=new function(){this.instances=void 0};return e(P[E.ARRAY_TYPE](n,"instances",t,r,void 0)),n.instances},t.deserialize=function(t,r){var n=new t;return e([{functionName:E.OBJECT_TYPE,instance:n,json:r}]),n};var e=function(t){var e=[];t.forEach(function(t){e.push(t)});for(var r=e[0];null!=r;)P[r.functionName](r.instance,r.instanceKey,r.type,r.json,r.jsonKey).forEach(function(t){e.push(t)}),r=e.pop()};t.serialize=function(t){var e=[],r={id:void 0,type:!0===Array.isArray(t)?E.ARRAY_TYPE:E.OBJECT_TYPE,instance:t,parentIndex:void 0,values:[],key:void 0,visited:!1};e.push(r);do{var n=e[e.length-1],i=e[e.length>1?n.parentIndex:0];if(n.visited)I(n,i),e.pop();else{var s=L[n.type](i,n,e.length-1);if(s.length>0)for(var o=s.length;--o>=0;)e.push(s[o]);else e.length>1&&I(n,i),e.pop()}}while(e.length>1);return N(r),r.values[0]}}(e.ObjectMapper||(e.ObjectMapper={})),e.JsonProperty=function(t){return function(t){return function(t,e){return Reflect.metadata(t,e)}(d,t)}("string"==typeof t?{name:t,required:!1,access:e.AccessType.BOTH}:t)},e.JsonConverstionError=T,e.CacheKey=_,e.JsonIgnore=function(){return function(t,e){Reflect.defineMetadata(o,!0,t,e)}},e.DateSerializer=g}(0,e.exports),e.exports}();class a{constructor(t){this.mem=void 0,this.ORM=void 0,this.uid=void 0,this.uid=t||Math.random().toString(16).slice(2)}deserializeArray(t){return o.ObjectMapper.deserializeArray(this.constructor,t)}deserialize(t){return o.ObjectMapper.deserialize(this.constructor,t)}serialize(t){return o.ObjectMapper.serialize(t)}parseQuery(t={}){return new URLSearchParams({...t})}fetch({body:t,endpoint:e}){return Promise.resolve(n.backend({body:t,endpoint:e}))}}class u extends a{constructor(t){super(t)}recoverEmail(){return this.ORM===e.ORM_DRIVERS?new Promise((t,r)=>{this.fetch({body:this.serialize(this),endpoint:e.API_ENDPOINT_RECOVER_EMAIL+this.parseQuery({table:this.ORM}),method:"POST"}).then(()=>t(!0)).catch(t=>r(t))}):Promise.reject()}auth(){return this.ORM===e.ORM_ADMINS||this.ORM===e.ORM_DRIVERS?new Promise((t,r)=>{this.fetch({body:this.serialize(this),endpoint:e.API_ENDPOINT_AUTH+this.parseQuery({table:this.ORM}),method:"POST"}).then(e=>t(this.deserialize(e))).catch(t=>r(t))}):Promise.reject()}post(){return new Promise((t,r)=>{this.fetch({body:this.serialize(this),endpoint:e.API_ENDPOINT_POST+this.parseQuery({table:this.ORM}),method:"POST"}).then(e=>t(this.deserialize(e))).catch(t=>r(t))})}put(t){return new Promise((r,n)=>{this.fetch({body:this.serialize(this),endpoint:e.API_ENDPOINT_PUT+this.parseQuery({...t,table:this.ORM}),method:"PUT"}).then(t=>r(this.deserialize(t))).catch(t=>n(t))})}get(t){return new Promise((r,n)=>{this.fetch({endpoint:e.API_ENDPOINT_GET+this.parseQuery({...t,table:this.ORM}),method:"GET"}).then(t=>r(this.deserialize(t))).catch(t=>n(t))})}delete(t){return new Promise((r,n)=>{this.fetch({endpoint:e.API_ENDPOINT_DELETE+this.parseQuery({...t,table:this.ORM}),method:"DELETE"}).then(()=>r(!0)).catch(t=>n(t))})}}class c extends u{constructor({name:t,password:r,uid:n}={}){super(n),this.name=void 0,this.password=void 0,this.state=void 0,this.name=t,this.password=r,this.ORM=e.ORM_ADMINS}modify({name:t,password:e,state:r}={}){return this.name=t||this.name,this.state=r||this.state,this.password=e||this.password,this.put({uid:this.uid})}register(){return this.post()}login(){return new Promise((t,r)=>{this.auth().then(r=>t(r.modify({state:e.ADMIN_STATE_ONLINE}))).catch(t=>r(t))})}logout(){this.state=e.ADMIN_STATE_OFFLINE}}class h extends u{constructor({name:t,email:r,password:n,uid:i}={}){super(i),this.name=void 0,this.email=void 0,this.password=void 0,this.state=void 0,this.name=t,this.email=r,this.password=n,this.state=e.DRIVER_STATE_ACTIVE,this.ORM=e.ORM_DRIVERS}modify({name:t,email:e,password:r,state:n}={}){return this.name=t||this.name,this.email=e||this.email,this.state=n||this.state,this.password=r||this.password,this.put({uid:this.uid})}register(){return this.post()}login(){return this.auth()}recover(){return this.recoverEmail()}toggleBan(){return this.state===e.DRIVER_STATE_ACTIVE?this.modify({state:e.DRIVER_STATE_BANNED}):this.state===e.DRIVER_STATE_BANNED?this.modify({state:e.DRIVER_STATE_ACTIVE}):Promise.resolve(this)}logout(){}}class f extends u{constructor({name:t,coordinate:r,capacity:n,uid:i}={}){super(i),this.name=void 0,this.state=void 0,this.spots=void 0,this.coordinate=void 0,this.name=t,this.coordinate=r,this.state=e.LOT_STATE_OPENED,this.ORM=e.ORM_LOTS,this.spots=this._instSpots({capacity:n})}modify({name:t,coordinate:e,state:r,spots:n}={}){return this.coordinate=e||this.coordinate,this.name=t||this.name,this.state=r||this.state,this.spots=n||this.spots,this.put({uid:this.uid})}register(){return this.post()}isTypeAvailable({type:t}){return this.spots.filter(e=>e.type===t).length}getCapacity(){return this.spots.length}getSpot({uid:t}){return this.spots.filter(e=>e.uid===t)[0]}openSpot({uid:t}){for(const r of this.spots)if(r.uid===t){r.state=e.SPOT_STATE_OPENED;break}return this.modify()}reserveSpot({uid:t}){for(const r of this.spots)if(r.uid===t){r.state=e.SPOT_STATE_RESERVED;break}return this.modify()}occupySpot({uid:t}){for(const r of this.spots)if(r.uid===t){r.state=e.SPOT_STATE_OCCUPIED;break}return this.modify()}occupyRandomSpot(){for(const t of this.spots)if(t.state===e.SPOT_STATE_OPENED){t.state=e.SPOT_STATE_OCCUPIED;break}return this.modify()}releaseRandomSpot(){for(const t of this.spots)if(t.state===e.SPOT_STATE_OCCUPIED){t.state=e.SPOT_STATE_OPENED;break}return this.modify()}_instSpots({capacity:t}){let r=[];for(let n=0;n<t;n++)r.push({uid:Math.random().toString(16).slice(2),type:e.SPOT_TYPE_STANDARD,state:e.SPOT_STATE_OPENED});return r}}class E extends u{constructor({driverUID:t,name:r,ccn:n,ccv:i,exp:s,uid:o}={}){super(o),this.driverUID=void 0,this.name=void 0,this.ccn=void 0,this.ccv=void 0,this.exp=void 0,this.state=void 0,this.annotation=void 0,this.driverUID=t,this.name=r,this.ccn=n,this.ccv=i,this.exp=new Date(s).toString(),this.state=e.PAYMENT_ACTIVE,this.ORM=e.ORM_PAYMENTS}modify({name:t,ccn:e,ccv:r,exp:n}={}){return this.name=t||this.name,this.ccn=e||this.ccn,this.ccv=r||this.ccv,this.exp=n||this.exp,this.put({uid:this.uid})}register(){return this.post()}debit(){this.state=e.PAYMENT_PROCESSING,this.annotation=e.PAYMENT_ANNOTATION_DEBIT}credit(){this.state=e.PAYMENT_PROCESSING,this.annotation=e.PAYMENT_ANNOTATION_CREDIT}}class p extends u{constructor({lotUID:t,paymentUID:r,start:n,end:i,spotType:s,uid:o}={}){super(o),this.start=void 0,this.end=void 0,this.state=void 0,this.spotType=void 0,this.lotUID=void 0,this.paymentUID=void 0,this.lotUID=t,this.paymentUID=r,this.state=e.REQUEST_PENDING,this.spotType=s||e.SPOT_TYPE_STANDARD,this.ORM=e.ORM_REQUESTS,this.start=new Date(n).toString(),this.end=new Date(i).toString()}modify({state:t}={}){return this.state=t||this.state,this.put({uid:this.uid})}send(){return this.post()}accept(){return this.modify({state:e.REQUEST_ACCEPTED}).then(t=>t)}reject(){return this.modify({state:e.REQUEST_REJECTED}).then(t=>t)}automate(){return new Promise((t,e)=>{(new f).get({uid:this.lotUID}).then(e=>{const r=e.isTypeAvailable({type:this.spotType});t(r?this.accept():this.reject())}).catch(()=>t(null))})}cost(){return(new Date(this.end).getTime()-new Date(this.start).getTime())*e.COST_BY_MILLISECONDS}checkIn(){return this.state=e.REQUEST_IN_USE,new Promise((t,e)=>{this.modify().then(e=>{(new f).get({uid:e.lotUID}).then(e=>t(e.occupyRandomSpot()))}).catch(t=>e(t))})}checkOut(){return this.state=e.REQUEST_EXPIRED,new Promise((t,e)=>{this.modify().then(e=>{(new f).get({uid:e.lotUID}).then(e=>t(e.releaseRandomSpot()))}).catch(t=>e(t))})}toString(){return new Promise(t=>{Promise.all([(new E).get({uid:this.paymentUID}).then(t=>(new h).get({uid:t.driverUID}).then(t=>t)),(new f).get({uid:this.lotUID}).then(t=>t)]).then(([e,r])=>{t(`${e.name.toUpperCase()} - Requested to Park at ${r.name} (${this._formatDate(new Date(this.start))} - ${this._formatDate(new Date(this.end))})`)}).catch(()=>t("Error!! request object invalid"))})}_formatDate(t){const e=t=>t.toString().padStart(2,"0");return[t.getFullYear(),e(t.getMonth()+1),e(t.getDate())].join("-")+" "+[e(t.getHours()),e(t.getMinutes())].join(":")}}class d extends u{constructor({toUserUID:t,toUserUIDS:r,fromUserUID:n,replyToRef:i,timestamp:s,title:o,content:a,uid:u}={}){super(u),this.toUserUID=void 0,this.fromUserUID=void 0,this.replyToRef=void 0,this.timestamp=void 0,this.title=void 0,this.content=void 0,this.state=void 0,this.mem=r||[t],this.toUserUID=t,this.fromUserUID=n,this.replyToRef=i,this.title=o,this.content=a,this.timestamp=s,this.ORM=e.ORM_MESSAGES,this.state=e.MESSAGE_STATE_DELIVERED}modify({state:t}={}){return this.state=t||this.state,this.put({uid:this.uid})}send(){let t=[];for(let e=0;e<this.mem.length;e++)t.push(new d({toUserUID:this.mem[e],fromUserUID:this.fromUserUID,title:this.title,content:this.content,replyToRef:this.replyToRef,timestamp:this.timestamp||new Date(Date.now()).toISOString()}).post());return Promise.all(t)}toString(){return new Promise(t=>{Promise.all([(new c).get({uid:this.fromUserUID}).then(t=>t).catch(()=>null),(new h).get({uid:this.fromUserUID}).then(t=>t).catch(()=>null)]).then(([e,r])=>{t([`From: ${(e||r).name.toUpperCase()}`,`Date: ${this._formatDate(new Date(this.timestamp))}`,`Title: ${this.title}`,this.content])}).catch(()=>t([,,"Error!!"," message could not be parsed"]))})}_formatDate(t){const e=t=>t.toString().padStart(2,"0");return[t.getFullYear(),e(t.getMonth()+1),e(t.getDate())].join("-")+" "+[e(t.getHours()),e(t.getMinutes())].join(":")}}const _={[e.ORM_ADMINS]:c,[e.ORM_DRIVERS]:h,[e.ORM_LOTS]:f,[e.ORM_MESSAGES]:d,[e.ORM_NOTIFICATIONS]:class extends u{constructor({toUserUID:t,content:r,uid:n}={}){super(n),this.toUserUID=void 0,this.content=void 0,this.state=void 0,this.toUserUID=t,this.content=r,this.ORM=e.ORM_NOTIFICATIONS}modify({state:t}={}){return this.state=t||this.state,this.put({uid:this.uid})}send(){return this.state=e.NOTIFICATION_STATE_DISPATCHED,this.post()}},[e.ORM_REQUESTS]:p,[e.ORM_PAYMENTS]:E};t.Admin=c,t.Collection=class extends a{constructor(t){super(),this.ORM=t,this.constructor=_[t]}then(t){return new Promise((r,n)=>{this.fetch({endpoint:e.API_ENDPOINT_GET_ALL+this.parseQuery({table:this.ORM}),method:"GET"}).then(t=>this.deserializeArray(t)).then(e=>r(t(e))).catch(t=>n(t))})}},t.Driver=h,t.Lot=f,t.Message=d,t.P=r,t.Payment=E,t.Request=p});
//# sourceMappingURL=index.umd.js.map
